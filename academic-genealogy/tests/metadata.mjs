import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import refreshedScenes from '../research/scenes-reviewed-prompts.mjs';

const page = new URL('../index.html', import.meta.url);
const html = fs.readFileSync(page, 'utf8');
const sceneFiles=vm.runInNewContext('('+html.match(/const sceneFiles\s*=\s*({[\s\S]*?\n    });/)[1]+')');
assert.equal(Object.keys(sceneFiles).length,68);
for(const file of Object.values(sceneFiles)) assert.ok(fs.existsSync(new URL('../assets/genealogy-scenes/'+file,import.meta.url)),file+' local background');
for(const p of refreshedScenes) {
  assert.equal(sceneFiles[p.id],p.file,p.id+' refreshed scene wired into page');
  assert.ok(fs.statSync(new URL('../assets/genealogy-scenes/'+p.file,import.meta.url)).size<500_000,p.file+' compressed');
}
assert.ok(!html.includes('class="date-caption"'),'do not restore removed date captions');
const code = html.slice(html.indexOf('    const P ='), html.indexOf('    const graph ='));
const { people, edges, resultCopy, polityMark } = vm.runInNewContext(code + ';({people,edges,resultCopy,polityMark})');
const byId = new Map(people.map(p => [p.id,p]));
const rendering=html.slice(html.indexOf('    const recorded ='),html.indexOf('    people.forEach(p => {',html.indexOf('    function cardHTML')));
const cards=vm.runInNewContext(code+rendering+';people.map(p=>({id:p.id,hasMark:!!polityMark(p.country),html:cardHTML(p)}))');
for(const card of cards){
  assert.ok(!/polity-glyph|schematic-insignia|✦/.test(card.html),card.id+' no emblem placeholders');
  assert.equal(card.html.includes('class="identity-polity"'),card.hasMark,card.id+' no empty emblem slot');
}
const evidence=JSON.parse(fs.readFileSync(new URL('../research/edge-sources.json',import.meta.url),'utf8'));
assert.equal(evidence.edges.length,edges.length,'source registry matches current graph');
const evidenceByEdge=new Map(evidence.edges.map(e=>[e.from+'>'+e.to,e]));
assert.equal(evidenceByEdge.size,edges.length,'no duplicated edge evidence');
for(const [from,to] of edges){
  const entry=evidenceByEdge.get(from+'>'+to);
  assert.equal(entry?.status,'reference-found',from+'>'+to+' needs explicit source');
  assert.ok(entry.sources.length);
  for(const key of entry.sources){
    const source=evidence.sources[key];
    assert.ok(source?.url.startsWith('https://'),key+' source URL');
    if(source.kind==='genealogy-database')assert.ok(source.listedAdvisors.some(a=>a.id===to),key+' actually lists target');
  }
}
assert.ok(evidenceByEdge.get('127962>127801').sources.includes('walther-catalogue'),'resolve Strauch II identity, not just a matching legacy ID');
assert.equal(people.length,68);
assert.equal(byId.size,68);
for (const p of people) {
  assert.ok(Number.isFinite(p.sortYear),p.id+' sort year');
  assert.ok(p.dateKind,p.id+' date type');
  assert.ok(!/undefined|NaN/.test([p.fieldEn,p.knownEn,p.countryEn].join(' ')),p.id+' translations');
  assert.ok(fs.existsSync(new URL('../'+p.portrait,import.meta.url)),p.id+' local portrait');
  assert.equal(p.knownEn,resultCopy[p.id][0],p.id+' final known-for override');
  assert.equal(p.known,resultCopy[p.id][1],p.id+' bilingual known-for');
  assert.ok(!p.institutionEn.includes('Martin-Luther'),p.id+' anachronistic institution');
  if(p.dateKind==='activity') assert.equal(p.degree,'',p.id+' activity is not graduation');
  if(p.thesisBi?.length) assert.equal(p.thesisBi.length,2,p.id+' bilingual thesis');
}
for(const [id,year] of Object.entries({'126177':'1503','126087':'1453','32858':'1855','66476':'1737','128046':'1682','127962':'1659','127424':'1593'})) assert.equal(byId.get(id).year,year,id);
assert.equal(byId.get('126177').institutionEn,'University of Ferrara');
assert.equal(byId.get('126177').degree,'Doctor of Canon Law');
assert.equal(byId.get('128986').thesisKind,'magisterDisputation');
assert.equal(byId.get('66476').thesisKind,'habilitation');
assert.equal(byId.get('65161').degree,'');
assert.equal(byId.get('143630').year,'');
assert.equal(byId.get('127801').name,'Aegidius Strauch II');
assert.equal(byId.get('127801').year,'1651');
assert.ok(byId.get('127801').wiki.endsWith('Aegidius_Strauch_II.'));
assert.ok(!byId.get('127801').sources.some(([,url])=>url.includes('mathgenealogy')));
assert.ok(!edges.some(([a,b])=>a==='127801'&&b==='127734'));
assert.ok(edges.some(([a,b])=>a==='127962'&&b==='127801'));
assert.ok(polityMark(byId.get('126087').country)[1].endsWith('flag-of-austria.svg'));
assert.ok(!html.includes("person.year.match"),'display must not truncate ranges/uncertainty');

const indegree=new Map(people.map(p=>[p.id,0]));
for(const [a,b] of edges) {
  assert.ok(byId.has(a)&&byId.has(b));
  indegree.set(b,indegree.get(b)+1);
}
const pending=people.filter(p=>!indegree.get(p.id)), order=[];
while(pending.length) {
  pending.sort((a,b)=>b.sortYear-a.sortYear);
  const p=pending.shift();order.push(p.id);
  for(const [a,b] of edges) if(a===p.id) {
    indegree.set(b,indegree.get(b)-1);
    if(!indegree.get(b))pending.push(byId.get(b));
  }
}
assert.equal(order.length,68,'all components retained, no cycles');
assert.equal(order[0],'sha');
for(const [a,b] of edges) assert.ok(order.indexOf(a)<order.indexOf(b));
console.log(`Metadata checks passed: ${people.length} people, ${edges.length} edges, bilingual data, local portraits and topological ordering.`);
