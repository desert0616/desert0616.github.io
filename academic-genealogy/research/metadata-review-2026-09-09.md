# 全人物 metadata 复核

日期：2026-09-09。对象：`academic-genealogy/index.html` 中全部 68 人的最终合并数据；基线 commit `7046541`。

本文件保留初次审计的基线问题，并在末尾记录后续实施。用户随后要求“尽可能的改进”，现已将下述有据修正写入网页；**尚未 commit / push**。逐人矩阵描述的是修正前的问题，不应误读成修正后仍全部存在。

后续更新：用户要求以“有明确参考来源即可”逐边核对，当前 73 条边已全部找到明确出处，详见 [逐边核查索引](edge-sources-review-2026-09-09.md)。Tan 的 NUS 论文库导师字段和题名此次也已实际读取。本文“尚未提交”等表述为各阶段的当时状态；实际发布状态以 Git 记录为准。

## 结论与证据边界

不能确认当前所有 metadata 准确。主要问题不是代表成果普遍虚构，而是历史人物的学位性质、年份、机构名称及同名归属存在实质错误。

逐人检查了姓名、年份、学位、学校、国家/地区、论文的英中译文、研究方向和知名于。下面覆盖全部 68 人，但“覆盖”不等于“每个字段都得到一手证明”。本轮重新联网查找学位、书目和争议人物，已有成果还参照 `known-for-review.md` 中的逐项证据；未重新取得原件的字段明确保留为待核，不能把搜索无结果当作证明不存在。

证据等级：大学档案/馆藏、原文书目、授奖机构优先；专业研究其次；百科作为交叉线索；MGP 及其转载不能作为相互独立的多重证明。部分目录有访问限制；索引能读、正文打不开的情况不冒称通读。未逐份核验古代学位证、全部论文原件或所有历史旗帜的图像学归属。

## 优先处理的实质问题

1. **Strauch 同名混接。** Walther 的 1656 年《摩尼教历史述评》书目明确列主持者 Aegidius Strauch **1632–1682**，即 Strauch II；页面却叫 Strauch I，并配其 1606 年著作。当前 1633 年学位又不可能属于 1632 年出生者。不能将姓名、年份、著作各取自不同人。须先重核该节点及前后师承，再决定替换哪个人物；不能只把 I 改成 II。[IxTheo 原书目录](https://ixtheo.de/Record/098991051)、[意大利 Braidense 图书馆目录](https://opac.bibliotecabraidense.org/opac_braidense/opaclib?db=solr_braidense&do_cmd=search_show_cmd&from=1&item%3A1003%3ANomi%3A%3A%40frase%40=+Strauch%2C+Aegidius+%3C1632-1682%3E&nentries=10&resultForward=opac%2Fbraidense%2Fbrief.jsp&searchForm=opac%2Fbraidense%2Ferror.jsp)。
2. **Copernicus：1499、Juris utriusque Doctor 不对。** 费拉拉大学确认 1503-05-31 获教会法学位，不能扩成民法与教会法双博士。应写 1503，Doctor of Canon Law；授予院校为 Ferrara，其他学校是求学经历。[费拉拉大学校史](https://www.unife.it/en/unife-world/history)。
3. **Peuerbach：1440 不是已核实的 Magister 年份。** 维也纳大学档案明确 1453-02-20；应为 1453。[大学人物档案](https://geschichte.univie.ac.at/de/personen/georg-aunpekh-von-peuerbach)。
4. **Lichtenberg：不能写 1765 Dr. phil.。** NDB 记载 1767 年结束求学而无正式学位，1778 年才获荣誉 Magister。应去掉当前博士身份；如显示 1767，必须说明是求学结束，不是博士毕业。[NDB](https://www.deutsche-biographie.de/sfz51050.html)。
5. **Kästner：1739 是 Habilitation，不是所列 Ph.D.。** NDB 记载 1737 Magister，1739 任教资格；《Theoria radicum in aequationibus》的角色也须按对应版本目录说明。不能用现代博士模板覆盖。[NDB](https://www.deutsche-biographie.de/sfz70303.html)、[MacTutor](https://mathshistory.st-andrews.ac.uk/Biographies/Kaestner/)、[DDB 1739 年目录](https://www.deutsche-digitale-bibliothek.de/item/MWC7JQ4BSHMKSPZFVRJ2SZX5ZDSX2SJ4)。
6. **Pasch：1683 与学位档案不符。** Rostock 大学教授名录给 Johann Pasche（1661–1709，GND 121818284）1682 年 Wittenberg Mag. art.；1683 合相论辩不能直接当作毕业年份。[大学档案](https://cpr.uni-rostock.de/resolve/id/cpr_person_00002533)。
7. **Erasmus Schmidt：1592 需改核。** HAB 专家导言给 1593 Magister，与页面不同；大学专题论文也指出文献有不同年份。优先采用 1593，并保存异文。[HAB 导言](https://diglib.hab.de/content.php?dir=ebooks%2Fed000171&distype=optional&metsID=ebooks_ed000171_i_schmidt&xml=texts%2Fschmidt.xml&xsl=scripts%2Ftei-introduction.xsl)。
8. **多个早期年份不是毕业记录。** Nilos 1363 是卒年范围的终点，Abhari 1264 是常见卒年版本，Qutb al-Misri 1222 也是卒年记录。Masudi 的约 1110 接近现代研究推定的出生年代，不能当毕业年。不得通过加“约”来掩盖日期含义错误。
9. **校名存在跨时代套用。** Wittenberg 与 Halle 到 1817 年才合并，1933 年才有 Martin Luther 名称；不能把 1509/1686/1713 年直接配现代合并校名。Jena 的 Friedrich Schiller 名称始于 1934 年。[Halle 校史](https://www.international.uni-halle.de/university/history/)、[Jena 校史](https://www.uni-jena.de/en/2425/history)。

## Planer 的 Learned Women 究竟是什么

不是凭空编造的题目，但现在的英文是说明性翻译，不是原书英文题名。真实拉丁标题为 *Gynaeceum Doctum, sive Dissertatio Historico-literaria*，1686 年 Wittenberg 文献。

现代研究明确把它与 Planer 的 **Magister 学位论辩**联系起来；他不是以这篇论文获得现代意义的 Ph.D.。原书目录兼列 Pasch 和 Planer，涉及主持者/答辩者的历史署名习惯，不宜简单等同现代独著论文。

- [1686 年原书数字化目录](https://play.google.com/store/books/details/Gynaeceum_Doctum?hl=en_US&id=31BOAAAAcAAJ)
- [现代研究 Converting Nuns（DNB 收录）](https://npregional.dnb.de/objekte?idn=1366602331&iln=63)：明确称用于 master's degree；给出 VD17 12:175071G。
- [ISGV 专家传记的相关书目](https://saebi.isgv.de/biografie/Margarethe_Sibylle_von_L%C3%B6ser_%281642-1690%29)

建议显示：`Gynaeceum Doctum / Learned Women`，中文《博学女性》，并在数据中记录 `Magister disputation, 1686`。若坚持完整标题，英文可保留现译，中文可用《博学女性：历史与文献论考》；不要把“文学论文”理解成现代文学专业的博士论文。

## 共通规则：学校、国家/地区与旗帜

- 当前“国家/地区”**不是统一的国籍字段**：Lu 的美国来自 Wisconsin 求学地点；Tusi 的 Ilkhanate/Maragha 来自晚年工作环境。不能向读者宣称这列都是国籍，也不能宣称都与背景年份对应。
- 建议内部记录 `placeBasis`：学位地点、求学地点或主要活动地点；可保留用户要求的可见标签“国家 / 地区”，但文案与旗帜须按同一条记录的地点、时期匹配。
- Hausen 1713 年 Wittenberg 配 Prussia 是错误，应对应当时 Saxony。Neumann/Richelot/Hesse 的 Königsberg 应说明普鲁士、今俄罗斯；不是把历史德国校名自动转换为今天的德国地理位置。
- Vienna 的 Austria 在 1453 年前后涉及 Duchy/Archduchy 区别；改 Peuerbach 年份后，旗帜及政体须一起复核，不可仅改数字。Regiomontanus 1457 也要复核。
- Bologna、Padua、Ferrara、Kraków 四地不能凭一面 Papal States 旗帜代表；Bologna 的归属还随年份变化。若只列 Copernicus 授予学位地点，Ferrara 1503 最清楚。
- Byzantine、Ilkhanate 等地区可以作为历史政治实体；“君士坦丁堡帝国大学”却不能只因有人在当地受教育就自动填入。Palamas、Metochites、Bryennios 的具体大学归属未获充分证据，应先改成有依据的地点/私人教学，或留空。
- `al-Misri`、`al-Tusi`、`al-Bukhari` 等地名性称谓不是毕业地证明。特别是 Qutb al-Misri 在 Nishapur 的活动有文献，不能只凭名字把学校地点锁定埃及。
- 历史徽记、后世复原图和现代国旗不是同一证据类型。此前为美术补齐素材不等于每个图案均为当年实际使用的国旗；本次不出具“所有旗帜历史版本均准确”的结论。

## 68 人逐项处置

“保留”表示当前简短表述在本轮所见证据范围内可接受，不表示取得了所有原件。未另指出的现代学校中译与地点常识没有发现明显冲突；历史校名、地区和日期须同时应用上面的共通规则。作品与研究方向的旧证据详见同目录 `known-for-review.md`。

| 人物 | 学位、年份、论文与机构 | 研究方向、知名于及其他处置 |
| --- | --- | --- |
| Sha Mo | NUS 答辩公告确认 2021、题名 GPU-accelerated Graph Processing、导师 Tan。答辩时间和正式授予日期仍是不同概念；ScholarBank 本轮正文未取得。 | 三项方向是本人指定内容，保留；知名于空白。来源：[NUS 公告](https://events.comp.nus.edu.sg/view/18553)。 |
| Kian-Lee Tan | NUS 官方履历直接支持 1994 Ph.D.；不要拿目录年份 1995 覆盖。论文题名沿用既有 ScholarBank 记录，本轮目录访问失败，不能声称已重读原件。 | 并行数据库/查询优化成立。总统科学奖和 2013 IEEE CS Technical Achievement Award 可核；P2P 成果属于团队贡献，宜写 co-recipient/共同。来源：[NUS](https://www.comp.nus.edu.sg/~tankl/bio.html)、[官方授奖词](https://www.psta.gov.sg/files/Citations/2011/2011-psa-Professor%20Ooi%20Beng%20Chin%20and%20Team.pdf)、[IEEE](https://www.computer.org/press-room/news-archive/2013-computer-pioneer-award)。 |
| Hong Jun Lu | Wisconsin 官方校友表确认 1985、Carey 导师；题名有馆藏转载线索 OCLC 13692816，但本轮未读到原论文。 | 数据库/查询优化、PAKDD/WAIM、2005 SIGMOD 贡献奖有依据。英文 Founded 宜收紧为 Co-founded，避免单人创办暗示。不增加 NeuroRule。美国只能指求学地点。来源：[Wisconsin](https://database.cs.wisc.edu/people.html)、[SIGMOD](https://sigmod.org/sigmod-awards/people/hongjun-lu/)。 |
| Michael James Carey | 1983 Berkeley 博士论文有大学原件；旧 sources 中 `/Pubs/Dissertations/Years/1983.html` 返回 404，应换有效馆藏链接。 | 数据库/数据管理、OO7、AsterixDB、2005 Codd 奖可保留；系统与基准都是合作成果。来源：[Berkeley 原件](https://digicoll.lib.berkeley.edu/record/135337/files/ERL-m-83-56.pdf)、[SIGMOD](https://sigmod.org/sigmod-awards/people/michael-carey/)。 |
| Michael R. Stonebraker | Michigan 原始馆藏确认 1971 及 Markov 论文完整题名。 | INGRES/POSTGRES、2014 ACM 图灵奖可保留；不暗示独自完成。来源：[Michigan](https://deepblue.lib.umich.edu/items/776dcf86-a285-4e9d-886f-a4be1c2b8f66)、既有 ACM 授奖记录。 |
| Arch Waugh Naylor | Michigan 馆藏确认 1960 及论文；当前英文标题漏了起首 A，宜按馆藏恢复。不要将与 Macnee 合署的技术报告当成博士论文原件。 | 控制系统与合著线性算子教材成立。来源：[论文馆藏](https://deepblue.lib.umich.edu/items/f2e5bdc0-21a5-4192-9c8e-f30b6b9d79d8)、[大学纪念文](https://ece.engin.umich.edu/stories/arch-w-naylor-in-memoriam-1929-2022)。 |
| Alan Breck Macnee | Sc.D.、MIT、1948 有生平和技术报告线索；本轮未取得 MIT 学位原件，论文身份仍待馆藏独立核准。 | 电气工程/电子模拟计算与电子微分分析器合适；知名于和题名重复不是史实错误，但可把结果写为装置研制，不再重复书名。不可称唯一发明模拟计算机者。 |
| Henry Wallman | IAS 确认 Princeton Ph.D. 1937；Lattices and Topological Spaces 有 1938 期刊版，不要把发表年当毕业年；学位题名本轮仍缺大学目录原件。 | 拓扑/维数理论、Wallman 紧化及合著 Dimension Theory 可保留。来源：[IAS](https://www.ias.edu/scholars/henry-wallman)。 |
| Solomon Lefschetz | 1911 Clark 及论文题名获学术传记支持。中文 loci 宜译“几何轨迹/几何簇”，现译“轨迹”略泛，不算另一个题目。 | 代数拓扑/代数几何，不动点、超平面定理可保留。来源：[MacTutor](https://mathshistory.st-andrews.ac.uk/Biographies/Lefschetz/)、既有 NAS 传记。 |
| William Edward Story | 1875 Leipzig 及二元 quantic 论文有生平依据；不将英文短译冒充拉丁/德文原件。 | 射影几何/不变量、参与创办 AJM 可保留。来源：[MacTutor](https://mathshistory.st-andrews.ac.uk/Biographies/Story/)、[学术讣告](https://mathshistory.st-andrews.ac.uk/Extras/Story_obituary/)。 |
| Carl Gottfried Neumann | 研究区分 1855 学位、1856 印本；现 `1855/1856` 不应不解释地呈现为同一毕业时间。论文英译须保留“第一类超椭圆积分”，不是泛泛椭圆积分。 | 数学物理/势论、Neumann 边界条件和级数可保留；不混 John von Neumann。来源：[研究](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/773C3C6FA625F5783DE422A1A679580F/S0269889700001411a.pdf/carl_gottfried_neumann.pdf)、[1856 印本](https://books.google.com/books/about/De_problemate_quodam_mechanico_quod_ad_p.html?id=pYg_AAAAcAAJ)。 |
| Wilhelm Scheibner | 1848 Halle 博士有传记和大学资料支持；题名缺失保留，不借用 1853 Habilitation 题名。历史校名不要带 1933 才加的 Martin Luther。 | 分析/级数、1860 专著可保留。来源：[Giessen 大学收录生平](https://koessler-lehrerlexikon.ub.uni-giessen.de/wiki/Schaubach%2C_Konrad_-_Scheling%2C_Walter)、既有 CiNii 书目。 |
| Friedrich Julius Richelot | 1831 学位与 1832 发表版本要区分；圆的 257 等分论文有据，原文题名应保留数学指数。 | 代数/Abelian 积分、Richelot 同源与正 257 边形构造可以保留；不夸成首次证明 257 边形可构造。当前题目和知名于研究对象相同属合理，不需另编成果。 |
| Ludwig Otto Hesse | 1840 Königsberg 及八交点论文可核；英译必须包含 three quadrics，不能只写“second order 的八点”。 | 解析几何/不变量、Hessian/Hesse 标准形可保留。来源：[MacTutor](https://mathshistory.st-andrews.ac.uk/Biographies/Hesse/)。 |
| Carl Gustav Jacob Jacobi | 1825 Berlin 和部分分式论文有据；历史学校应写 University of Berlin，不用当年尚不存在的 Humboldt 名称作原名。 | 椭圆函数/数论、Jacobian、Jacobi 椭圆函数、Hamilton–Jacobi 成立。中文“简单分式”宜用数学术语“部分分式/简分式”。来源：[学术传记](https://mathshistory.st-andrews.ac.uk/DSB/Jacobi.pdf)。 |
| Enno Heeren Dirksen | 1820-02-05 博士有据。当前拉丁题名的 `ad umbratione` 等疑似转录错误，须照原书校勘；目前英中长译不能说已逐字核准。 | 分析/变分法和著述可保留。来源：[MacTutor](https://mathshistory.st-andrews.ac.uk/Biographies/Dirksen/)。 |
| Johann Tobias Mayer | 1773 博士、Tetragonometriae specimen 有 NDB 支持；是 1752 年出生的儿子，不是天文学家父亲。 | 数学/物理、1801 教材可保留；不能配父亲的月球图作为本人成果。来源：[NDB/Bavarikon](https://www.bavarikon.de/object/bav%3AHKO-NDB-00000000SFZ59513)。 |
| Bernhard Friedrich Thibaut | 1796 Magister、对数争议论文有据，印本 1797 不等于毕业年；排除哥哥 Anton 的 1796 法律论文。 | 数学/数学史及两部教材可保留。来源：[学术词典](https://api.pageplace.de/preview/DT0400.9783110961164_A19986592/preview-9783110961164_A19986592.pdf)。 |
| Georg Christoph Lichtenberg | **删除 1765 Dr. phil.，详见优先问题。** Göttingen 求学机构可保留，不能强造 dissertation。 | 实验物理/天文学、Lichtenberg figures 和札记可保留。 |
| Abraham Gotthelf Kästner | **1737 Magister 与 1739 Habilitation 分开；当前 Ph.D. 不成立。** 1739 目录将本人列为主持者，版本/答辩角色仍需说明。 | 数学/数学史及两部著作可保留。 |
| Christian August Hausen | 1713 Wittenberg 论辩有原书目录和 ISGV 支持，但学位称谓/1712 Magister 异文须继续查原档；**Prussia 改为 Saxony，学校改历史 Wittenberg**。 | 电学及 1743 著作成立；“主导体”容易误解为理论主导者，宜用“电学实验中的导体装置”，并不抢发明优先权。来源：[ISGV](https://saebi.isgv.de/biografie/Christian%20August%20Hausen%20%281693-1743%29)。 |
| Johann Christoph Wichmannshausen | 1685 Leipzig Magister 成立；离婚论辩题名有谱系/书目线索，但其作为授位论文或任教资格论辩的性质仍需核准。 | 东方语文学/希伯来语、1724 Gymnasium Arabicum 有书目。无需虚构物理研究。 |
| Johann Andreas Planer | **真实 1686 Magister 论辩；非博士。** 详见独立说明，历史学校名须改。 | 数学/形而上学及主持 De nive 可保留；不挪用 Johann Jacob Planer 的植物学成就。 |
| Otto Mencke | **1665 Ph.D. 暂不认可。** NDB 给 1664 Magister；其他传记有 1666/1668。WorldCat 确认 1665 De absoluta Dei simplicitate 文献，不能仅凭出版年份认定博士；当前拼接成一串的两个题目应分开核对。 | 哲学/学术出版及创办 Acta Eruditorum 1682 可保留。来源：[NDB](https://www.deutsche-biographie.de/sfz61524.html)、[WorldCat](https://search.worldcat.org/title/Ex-theologia-naturali-de-absoluta-Dei-simplicitate/oclc/551721086)。 |
| Johann Pasch | **1682 Magister 优先于当前 1683。** 合相论文存在但学位关联/版本待核；不因同年论辩就换方向为天体合相。 | 神学/语文学可保留；Selah 仍应谨慎写合署/参与而非现代共同作者制。Rostock 档案与另一权威记录的卒地也有异文，不扩写未经核准生平。 |
| Michael Walther the Younger | **1656 是可核的论辩年，不能直接标 Magister 毕业。** 传记给 1659 Magister；1656/1661/1687 谱系记录不可混作同一学位。具体授位档案继续待核；主持者为 Strauch II。 | 数学/天文学、1674 主持论辩可保留；不是其父的圣经著作。来源：[原书目录](https://ixtheo.de/Record/098991051)、[传记线索](https://de.wikipedia.org/wiki/Michael_Walther_der_J%C3%BCngere)。 |
| Jakob Thomasius | 1643 Leipzig Magister 有 NDB 直接支持；题名缺失不补。 | 哲学/逻辑、Erotemata logica 可保留。来源：[NDB](https://www.deutsche-biographie.de/sfz82571.html)。 |
| Friedrich Leibniz | Leipzig 与伦理学教职可信；1622 Magister 主要仍依谱系记录，独立授位证据不足。不是 Gottfried Wilhelm Leibniz。 | 道德哲学/法学可保留；知名于仍空白，不能借儿子的微积分。 |
| Aegidius Strauch I | **混接高风险，整组 metadata 不能认可。** I 的 1602 Magister 与页面 1633 不一致；Walther 1656 文献指向 II。 | 1606 Physica specialis 属 I 的证据不能证明他是该节点导师；目前不直接换成 II 的作品，先解决人。 |
| Nicolaus Zapf | 1622 Jena Magister 有生平依据；De Justificatione Hominis Coram Deo 与哪一级学位对应未获独立确认。英文 Jena 校名应去掉时代不符的 Friedrich Schiller。 | Lutheran theology/Hebrew、1644 神学纲要可保留；与 Strauch 的边须因同名混接重查。 |
| Erasmus Schmidt | **1593 Magister 有 HAB 支持，当前 1592 需修正/记录异文。** Wittenberg 用历史名。 | 古典/希腊语文学、1616 品达译注可保留。 |
| Sethus Calvisius | Leipzig 求学属实；1582 明确对应 Schulpforta Kantor 任命，**未取得独立证据支持当年 Magister**，不可默认毕业。 | 音乐理论/年代学，两部著作可保留。来源：[Treccani](https://www.treccani.it/enciclopedia/sethus-calvisius/)、[生平线索](https://de.wikipedia.org/wiki/Sethus_Calvisius)。 |
| Nikolaus Selnecker | 1570 Wittenberg 神学博士有图书馆权威记录和当时论文集支持；题名空白可保留，不把一整组多人 promotion theses 随意当本人独著。 | Lutheran theology/圣诗、参与 Formula of Concord 可保留。来源：[地区图书馆](https://personen.niedersaechsische-bibliographie.de/person/1043221956/)、[原始论题校勘项目](https://www.controversia-et-confessio.de/cc-digital/quellen/modus/ls/10/70/10/ansicht/2755-wittenberger-promotionsthesen-vom-mai-1570-lat.html?cHash=033f25b1e167355dfe9f64a8316c8c7e)。 |
| Moritz Steinmetz | 1550/51 Magister 有大学档案引证；**1567 医学博士与传记 1577 Licentiate 冲突**。De Peste 是常规论辩标题，未证明医学博士授位。姓名中 Valentin 也不能只按父名/兄弟名加入。 | 数学/天文学、1577 彗星报告可保留，但须排除兄弟 Valentin 的同类历书。来源：[Bremen 专题书目](https://www.presseforschung.uni-bremen.de/dokuwiki/doku.php?id=steinmetz_moritz)。 |
| Georg Joachim Rheticus | 1535 Wittenberg Magister 有学术传记支持；题名不详保留。 | 天文学/数学、Narratio prima 与三角函数表可保留。来源：[ADB](https://de.wikisource.org/wiki/ADB%3ARheticus%2C_Georg_Joachim_%282._Artikel%29)。 |
| Johannes Volmar | Halle 大学校史明确 1515-01-30 Wittenberg Magister；可保留年份、改历史校名。 | 数学/天文学可信，未核实具体代表著作继续空白。来源：[大学专题](https://disk.mathematik.uni-halle.de/history/volmar/index.html)。 |
| Nicolaus Copernicus | **改核为 Ferrara，1503，Doctor of Canon Law。** 不同求学地另列，不能混成四所博士授予院校。 | 天文学/数学、《天体运行论》与日心说可保留。 |
| Bonifazius Erasmi | 1509 Wittenberg Magister，之前 1505 Kraków Baccalaureus，大学专题有据。 | 数学方向、约 1513 年历图编制可保留；他不是木刻画家。来源：[大学专题](https://disk.mathematik.uni-halle.de/history/erasmi/index.html)。 |
| Leonhard von Dobschütz | 1489 Kraków 学位沿用上轮大学档案，当前目录访问失败；未宣称本轮重读原件。 | 天文/占星可保留，知名于空白；De arte memorativa 属其兄 Jan，不归给他。来源：[Kraków 档案](https://cac.historia.uj.edu.pl/zapiska-zd-naukowe/345708)。 |
| Domenico Maria Novara | **1483 是 Bologna 任教的常见记录，不足以证明 Florence 毕业。** Florence 学位地点先撤为待核；研究指出与 Pacioli 的直接求学关系证据不足。 | 天文/占星、1497 与 Copernicus 月掩毕宿五观测可保留。来源：[Bologna](https://www.unibo.it/en/university/who-we-are/our-history/famous-people-and-students/nicolaus-copernicus)、[研究讨论](https://api.pageplace.de/preview/DT0400.9781433178467_A47306005/preview-9781433178467_A47306005.pdf)。 |
| Regiomontanus | 1457 Vienna Magister 可保留；Leipzig 是早期求学地，不是并列授予院校。Austria 历史政体需随 1457 核。 | 天文/三角学、《论三角形》与历表可保留。来源：[学术传记](https://mathshistory.st-andrews.ac.uk/DSB/Regiomontanus.pdf)。 |
| Luca Pacioli | **有研究支持 1480–1484 间 Perugia 神学学位，但早期研究对 Magister 性质持异议。** 不能判定绝对没有学位，也不能把“约1484”说成精确毕业年；应记录区间及来源。 | 数学/比例理论、复式簿记的印刷传播与 Divine Proportion 成立，不称复式簿记发明者。来源：[2021 专门研究](https://doi.org/10.1111/abac.12218)、[2008 不同解释](https://repository.mdx.ac.uk/download/bc004b2e971f497eff6b7cbd09620d7b938abcf06d47de6de9a3d0f7bbf9dff1/148141/final_final_proof_Market_paper_050308.pdf)。 |
| Georg von Peuerbach | **1453 Vienna Magister，不是 1440。** | 天文/数学、Theoricae novae planetarum 可保留。 |
| Basilios Bessarion | Mystras 跟随 Plethon 的经历有据；**1436 对应修道院任职，不能默认毕业**。不同传记对求学起点有异文，不凭一本百科定精确年份。 | 哲学/神学、1468 向 Venice 捐赠希腊手稿可保留。来源：[专业人物辞典](https://www.biolex.ios-regensburg.de/BioLexViewview.php?ID=566)、既有 Marciana 馆史。 |
| Johannes von Gmunden | 1406 Vienna Magister 有大学档案/NDB；可保留。 | 天文/数学、历书与计算表可保留。来源：[大学档案](https://geschichte.univie.ac.at/de/personen/johannes-von-gmunden)。 |
| Georgios Plethon Gemistos | **1380、1393 未证实为学成时间；Mystras 是活动地，不是授予机构。** 不应把两年拼作两次学位。 | 新柏拉图主义/政治哲学、Book of Laws 与 Aristotle/Plato 差异论可保留；不是现代大学博士。 |
| Heinrich von Langenstein | 1363 Paris Magister 有 NDB；另有 1375 神学学位，不能混淆。 | 经院哲学/神学、Epistola concilii pacis 有专题书目；可保留。来源：[NDB](https://www.deutsche-biographie.de/sfz70089.html)、[Vienna](https://geschichte.univie.ac.at/de/personen/heinrich-von-langenstein)。 |
| Demetrios Kydones | **约1340 不是已核毕业年份，机构不详保留。** | 神学/哲学翻译、Summa contra Gentiles 希腊译本成立；不混弟弟 Prochoros 的译作。既有 Venice 仓储某链接实际讨论 Summa theologiae，宜换直接对应 contra Gentiles 的校勘研究。 |
| Nicole Oresme | **1356 主要是 College of Navarre 院长任命；学位有 1355/1356 异文。** MacTutor 给 1355 Master of Theology，不能简单说所有来源均支持 1356 博士。 | 数学/自然哲学、变量图示和 De moneta 可保留，不夸成发明完整现代坐标几何。来源：[MacTutor](https://mathshistory.st-andrews.ac.uk/Biographies/Oresme/)、[BnF](https://classes.bnf.fr/dossitsm/b-oresme.htm)。 |
| Nilos Kabasilas | **1363 是卒年范围，不是毕业年。** 机构不详正确；排除 Nicholas Kabasilas。 | Orthodox theology/反拉丁论辩、教宗首权论著有 Berkeley 书目。来源：[Berkeley 馆藏](https://lawcat.berkeley.edu/record/331634)。 |
| Gregory Palamas | **1316 是入修道生活时间，非大学毕业。Imperial University 归属未证实。** | Orthodox theology/神秘主义、Triads、本质—能量之分可保留。来源：[专业辞典](https://onlinelibrary.wiley.com/doi/abs/10.1002/9780470670606.wbecc1035)、既有 OCA 教义史。 |
| Theodore Metochites | **1315 未证实为学成；有 1312/13 起向 Bryennios 学天文的记录。大学名不应推定。** | 哲学/天文、Semeioseis gnomikai 和 Chora 修缮赞助可保留；修缮是资助，不是亲手建筑。 |
| Manuel Bryennios | **1300 是 floruit，非学位。Imperial University 无独立授位证据。** | 音乐理论/数学与 Harmonics 成立；不把 1970 年研究该书的现代博士论文归给本人。来源：[CNRS Pinakes](https://pinakes.irht.cnrs.fr/notices/oeuvre/6751/)。 |
| Gregory Chioniadis | 1295–1296 Tabriz 学习经历有专业天文学传记；1296 可以作师承活动年，**不能叫毕业**。宫廷是环境，不是大学。 | 天文/数学与希腊译介成立。来源：[McGill 托管专业传记](https://islamsci.mcgill.ca/RASI/BEA/Chioniades_BEA.htm)。 |
| Shams al-Dīn al-Bukhārī | **1295–1296 是给 Chioniadis 授课时间，不是本人的学成时间。** 可列 Tabriz 活动地点；Maragha 关联不等于授位。 | 天文学与口授译介贡献可保留；不把有争议的 al-Wabkanawi 身份合并。来源：[Pingree 校勘书评](https://www.persee.fr/doc/rebyz_0766-5598_1986_num_44_1_2197_t1_0299_0000_2)。 |
| Nasir al-Dīn al-Ṭūsī | **约1220 无正式毕业依据；Ilkhanate/Maragha 是晚年环境，不能与该年直接配对。** 求学地点与晚年研究机构分开。 | 天文/数学、Tusi couple 与 Maragha Observatory 可保留；观测台是组织建设与团队成果。来源：[MacTutor](https://mathshistory.st-andrews.ac.uk/Biographies/Al-Tusi_Nasir/)。 |
| Athīr al-Dīn al-Abharī | **1264 属卒年版本，学成年不详。** Mosul/Erbil 是活动区域之一，不足以代表全部学习经历。 | 哲学/逻辑、Isaghuji 与 Hidayat al-hikma 有学术研究支持。来源：[研究](https://dergi.fsm.edu.tr/index.php/iadeti/article/view/328)。 |
| Kamāl al-Dīn Ibn Yūnus | **1175 是赴 Baghdad 求学时间，非毕业。** 不能同时把地点仅写 Mosul 而暗示此年在那里毕业。 | 数学/天文、Abu al-Wafa 几何著作评注有专门研究；非埃及同名天文学家 Ibn Yunus。来源：[TDV](https://islamansiklopedisi.org.tr/ibn-yunus-kemaleddin)、既有 Historia Mathematica 论文。 |
| Qutb al-Dīn Ibrāhīm al-Mīṣrī | **1222 是卒年记录，不是学成年；埃及仅凭 nisba 不能确定。** Nishapur 教学活动有研究，应据具体时期填地点或留空。 | 医学/医学评注、《医典》总论注释按 Fihrist 归属可保留，不扩大影响。来源：[Fihrist](https://www.fihrist.org.uk/catalog/person_f3422)、[相关学术研究](https://eprints.soas.ac.uk/20062/1/%5B9789004302525%20-%20Doubts%20on%20Avicenna%5D%20Doubts%20on%20Avicenna.pdf)。 |
| Sharaf al-Dīn al-Ṭūsī | **约1160 非已核毕业；Tus 是地名关联，不能当成已核求学地点。** 本人有 Damascus/Aleppo/Mosul 活动线索。 | 代数/几何、三次方程正根条件有专门研究；不称发现现代微积分。来源：[数学史研究](https://arxiv.org/abs/2201.13282)。 |
| Sharaf al-Dīn al-Masʿūdī al-Marwazī | **约1110 与推测出生年代接近，不能列学成年。** 现代研究重建其 12 世纪生平，Merv 起源、Samarkand/Bukhara 活动要区分。 | 哲学/理论天文、《指示与提醒》质疑评注、Jahan-danish 可保留。不是 10 世纪历史学家 al-Masudi。来源：[Shihadeh 专门研究](https://brill.com/display/book/9789004302532/B9789004302532_003.pdf)。 |
| Fakhr al-Dīn al-Rāzī | **约1165 未获独立授位证据。** Rayy/Herat 表示不同阶段地点；勿把一生地点都当毕业地。 | 伊斯兰神学/哲学、Mafatih al-ghayb 可保留；不是医家 Abu Bakr al-Razi。来源：[Stanford 专家条目](https://plato.stanford.edu/entries/al-din-al-razi/)。 |
| Omar Khayyam | **1068 是迁行/活动年代的常见叙述，非可证学位。** Bukhara/Samarkand 不涵盖其 Nishapur 求学。 | 代数/几何、三次方程和协作贾拉利历成立；Rubaiyat 须视为传统归名诗集，不能认定每首均亲作。 |
| Bahmanyār | **约1025 未获学位依据。** Hamadan 与 Isfahan 求学/讨论背景存在研究分歧，不可将 Isfahan 锁定为毕业地。 | 哲学/逻辑、al-Tahsil 可保留。来源：[Iranica 专家条目](https://www.iranicaonline.org/articles/bahmanyar-kia-rais-abul-hasan-b/)。 |
| Avicenna | **约995 是推算早期学习阶段，非正式毕业。** Bukhara 的 Samanid 环境有据，但年值不能伪装成学位年。 | 医学/哲学、Canon 与 Book of Healing 成立；后者不是另一部医学教材。来源：[Stanford](https://plato.stanford.edu/entries/ibn-sina/)。 |
| Abu Abdallah al-Natili | **约990 非毕业证据。** 该时代与 Dioscorides 修订活动有关，不能变成他自己的学成时间。 | 逻辑/哲学、修订 Arabic Dioscorides 可以保留；不是首次译为阿拉伯语。来源：[UNESCO 学术史](https://es.unesco.org/silkroad/sites/default/files/knowledge-bank-article/vol_IVb%20silk%20road_medical%20and%20veterinary%20sciences.pdf)、既有 Medical History 2024 研究。 |
| Abu Sahl al-Masihi | **约1005 只宜作为早 11 世纪活动的推定值，非毕业。** Gurganj 宫廷活动可信，出生地 Jurjan 与 Gurganj 不是同一城。 | 医学/哲学与 Hundred Books 成立。师承故事有冲突，不能用现代博士导师身份表述。来源：[Iranica](https://www.iranicaonline.org/articles/isa-b-yahya-masihi-jorjani/)。 |
| Abu Mansur al-Qumri | **约975 未获学成年依据。** Bukhara 活动与 Samanid 环境可以讨论，但精确时间仍不足。 | 医学、Ghina wa Muna 与 al-Tanwir 有古代医家传校勘书目；中文《充足与愿望》是说明性译名，不能冒充通行中译本。来源：[医家传校勘](https://www.ncbi.nlm.nih.gov/books/NBK621352/)。 |

## 后续修正应如何落地

1. 先解决 Strauch 身份混接；在此之前，不应宣称整条早期 DAG 是已验证的导师关系。
2. 将数据中的单一 `year` 拆成事件类型和时间：学位、任教资格、论辩、求学、活动年代。只有有文献依据的估计才能用“约”。
3. 论文存原文题名及英中说明性翻译，增加文献类型/角色的内部证据；不要将 praeses 自动当现代博士导师、respondens 自动当现代论文独著者。
4. 校名按历史时期显示，或明确“今称”；地区按所展示经历配套。对不详的机构/学成年留空，不用假精度补齐。
5. 代表成果的简短文案总体可留，但团队成果应写共同/参与，传统归名作品和不确定著作归属须保留限制。
6. Wikipedia/Scholar 与头像上轮已另有审计；此次没有重做全部肖像来源和历史旗帜原件审查，不以本报告替代那些检查。生成肖像与生成成就背景不能用于证明历史事实。

这次复核纠正了此前审核口径：**“知名于有作品出处”不代表这个人物的学位、年份和师承也已核实。** 尤其是沿用 MGP 的早期数据，不能仅靠页面顶部 just for fun 声明来保留已经发现的错误。

## 已实施修订（同日，后续“尽可能的改进”）

### 日期、论文与历史院校

- Copernicus → 1503，Doctor of Canon Law，University of Ferrara；不再把四所求学院校合称授位机构。
- Peuerbach → 1453；Neumann → 1855（1856 为印本）；Kästner → 1737 Magister，1739 文献另标任教资格论文。
- Lichtenberg → 1767 求学结束，撤销博士；Calvisius → 1582 Schulpforta 任职，不称 Magister；Novara → 1483 Bologna 任教，不称 Florence 毕业。
- Pasch → 1682；Walther → 1659 Magister，1656 文献另标论辩；Mencke → 1664 Magister，仅保留可识别的 1665 De absoluta Dei simplicitate 论辩题目，撤销合并题名。
- Erasmus Schmidt → 1593；Moritz Steinmetz 撤去 Valentin 和医学博士说法，Magister 年份保留 1550–1551 范围。
- Planer 的 Gynaeceum Doctum 保留为 1686 Magister 学位论辩，不再套普通博士论文标签。英中标题为说明性译文，原始拉丁题名仍存数据中。
- Hausen 的 1713 只标论辩，不再冒充已核博士授位。Wichmannshausen 的文献也只标论辩；这些标题的书目归属与现代独著论文身份不是同一判断。
- Friedrich Leibniz 的精确学位年撤下；Zapf、Steinmetz 的未经核实学位论文归属撤下；Dirksen 的拉丁题名转录有疑点，暂撤论文栏，等待可靠目录全文，而非用自拟缩写冒充原题。
- 多位早期人物改用有根据的世纪活动范围，并显示 Active / 活动年代；Chioniades、Shams、Ibn Yunus 分别标求学、授课、求学。**日期显示保留范围和 c.，不再用正则截成首个年份。** 排序用的内部 sortYear 只是展示算法锚点，不是史实日期。
- Wittenberg 使用合并前校名；1848 Halle 使用 Halle-Wittenberg，不加 1933 年名称；Berlin、Jena 去除当时不存在的现代冠名。撤下 Palamas、Metochites、Bryennios 未证实的 Imperial University，Mystras 不再作为大学。Nasir 增加其晚年研究机构 Maragha Observatory。

### Strauch 的完整身份修正与断链

Walther 1656 论辩书目主持者指向 **Aegidius Strauch II (1632–1682)**。改为二世的姓名、中文名、1651 Magister、研究方向、作品、Wikipedia 和肖像，不再展示一世的 1606 Physica specialis。依据：[ADB](https://www.deutsche-biographie.de/sfz81668.html)、[IxTheo 1656 书目](https://ixtheo.de/Record/098991051)。Walther 的 1659 Magister 另见 [ADB 生平](https://de.wikisource.org/wiki/ADB:Walther,_Michael_(Professor_der_Mathematik_und_Theologie_in_Wittenberg))。

- 页面 key `127801` 仅为旧的 UI 标识，不再当成二世的 MGP 编号；该人物 sources 已撤掉自动生成的 MGP 引用。
- 保留 Walther → Strauch II。此依据是当时论辩的 praeses / respondens 记录，**不等于现代博士指导证明**。
- 撤下 Strauch → Zapf：未找到足以确认二世与 Zapf 的独立师承证据，不擅自把一世的边移交二世。
- 仍保留全部 68 人，73 条现有边。早期分支现在与现代链断开；这是诚实呈现证据缺口，不是排版漏线。其余早期边没有因这次修正自动升级为“已核实”。
- 二世肖像：Elias Hainzelmann 据 Andreas Stech 作，1682 年铜版画，汉堡州立暨大学图书馆 PPN663948754。[原馆藏](https://resolver.sub.uni-hamburg.de/goobi/PPN663948754)、[Commons 图像与公有领域信息](https://commons.wikimedia.org/wiki/File:PPN663948754_Bildnis_von_Aegidius_Strauch_(1682).jpg)。已下载本地 960 × 1454 JPEG，同时替代原先不属于二世的背景；旧一世素材保留档案，不覆盖、不继续展示。

### 地区与成果的表述边界

- Hausen 改萨克森；Copernicus 改费拉拉公国；Novara 改博洛尼亚地区；1453/1457 维也纳改奥地利大公国。奥地利徽帜匹配优先于泛神圣罗马帝国，避免程序匹配错误。
- Ibn Yunus 的 1175 求学配巴格达；al-Misri 的埃及猜测撤下，改有研究依据的尼沙普尔活动区域；Sharaf al-Tusi、Masudi、Khayyam、Bahmanyar 按记载活动地表述，不按名字推求学地点；Palamas 不再仅写今土耳其。
- “国家 / 地区”不是国籍字段，且此页包含求学与工作时期，不能把所有地点都读成毕业地点。现国家括注只定位所涉及地区，不意味着整个历史帝国等于该现代国家。
- 撤下不支持新地区信息的 al-Misri 阿尤布黄色、Khayyam 喀喇汗及 Sharaf al-Tusi / Masudi 的笼统塞尔柱装饰。没有核准的历史旗帜处不另编新旗；其他旧徽记仍需单独图像学核查，不能宣称此次全部认证。
- Lu 的创办改为共同创办；Tan 研究方向补齐英文 distributed，与中文一致；Metochites 改资助修缮；Khayyam 的 Rubaiyat 加传统归名限制。保留无充分依据时的空白，未添加 NeuroRule。
- Naylor 恢复题名开头 A；Neumann 译文恢复第一类超椭圆积分；Jacobi 改准确的部分分式译法；Carey 的失效博士目录来源换 Berkeley 有效馆藏。

### 验证与剩余工作

- 新增 `tests/metadata.mjs`，检验 68 人、本地肖像、关键纠错、双语字段、独立分支保留和无环排序。
- 对 320 / 390 px 手机及 1600 px 桌面执行真实 Chromium 渲染与截图检查，覆盖年份区间、活动世纪、Planer、Kästner 和 Strauch II；未发现运行时异常。额外修复旧 CSS 的 `!important` 冲突，让长名字按单行缩小，而不是意外换行。
- 未修改生成的根首页，未删除旧素材或覆盖生成提示词；未操作无关 `anyu/`；未 commit / push。
- 本次实施不构成“所有 metadata 均获一手证明”：未取得原件的现代馆藏题名、早期论辩角色细节、若干直接师承、历史徽记仍保留上文证据边界。尤其 Novara → Pacioli 及更早网络应另做逐边审计。
