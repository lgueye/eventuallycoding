export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:{"/articles/2012/11/11/nosql-4-bases-a-la-loupe-14":{_path:"\u002Farticles\u002F2012\u002F11\u002F11\u002Fnosql-4-bases-a-la-loupe-14",_dir:"11",_draft:n,_partial:n,_locale:j,_empty:n,title:p,description:"[![](\u002Fimages\u002Fnosql-logo.gif \"nosql-logo\")](http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002Fnosql-logo\u002F)Vous vous rappelez du bouquin [7 d...",id:"650",date:"2012-11-11",categories:["waza"],tags:["bench","elasticsearch","jdbc","lucene","mongodb","redis","solr"],img:"nosql-logo.gif",cover:"cover5.jpg",readingTime:{text:"8 min read",minutes:7.745,time:464700,words:1549},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002Fnosql-logo\u002F",rel:[g]},children:[{type:a,tag:"img",props:{alt:j,src:"\u002Fimages\u002Fnosql-logo.gif",title:"nosql-logo"},children:[]}]},{type:b,value:"Vous vous rappelez du bouquin "},{type:a,tag:f,props:{href:"http:\u002F\u002Fpragprog.com\u002Fbook\u002Frwdata\u002Fseven-databases-in-seven-weeks",rel:[g]},children:[{type:b,value:"7 databases in seven weeks"}]},{type:b,value:" ? Pour le coup j'ai eu l'occasion de réaliser une expérience un peu moins ambitieuse, seulement 4 bases de données. Et si je n'ai pas été aussi loin que le bouquin précédent je vous propose quand même un retour d'expérience sur :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:q}]},{type:a,tag:d,props:{},children:[{type:b,value:r}]},{type:a,tag:d,props:{},children:[{type:b,value:"Elastic Search"}]},{type:a,tag:d,props:{},children:[{type:b,value:"MongoDb"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme ce billet est relativement long je l’ai découpé en plusieurs parties :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Une intro général permettant de comprendre mes motivations et ma démarche. On y parlera aussi "},{type:a,tag:e,props:{},children:[{type:b,value:"Nosql"}]},{type:b,value:", pourquoi comment etc..., la description des tests à proprement parler. Ce sera aussi l’occasion de partir d’un point de référence, une base "},{type:a,tag:e,props:{},children:[{type:b,value:"Mysql"}]},{type:b,value:" qui nous permettra de comparer avec quelque chose de connu"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Une seconde partie uniquement sur "},{type:a,tag:e,props:{},children:[{type:b,value:q}]},{type:b,value:" et "},{type:a,tag:e,props:{},children:[{type:b,value:"Mongo"}]},{type:b,value:" et qui traitera de l’architecture choisie pour profiter des fonctionnalités de "},{type:a,tag:e,props:{},children:[{type:b,value:"Lucene"}]},{type:b,value:" en plus de l’un de ces deux bases de données."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Une troisième partie enfin qui parlera de "},{type:a,tag:e,props:{},children:[{type:b,value:"ElasticSearch"}]},{type:b,value:"\u002F"},{type:a,tag:e,props:{},children:[{type:b,value:r}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Et un dernier billet beaucoup plus court avec quelques graphiques récapitulatif."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est donc parti pour le premier billet."}]},{type:a,tag:k,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un peu de contexte déjà. En juillet je commençais un projet avec "},{type:a,tag:f,props:{href:"https:\u002F\u002Ffr.twitter.com\u002Fjblemee",rel:[g]},children:[{type:b,value:"Jean Baptiste Lemée"}]},{type:b,value:" et nous savions déjà que nous aurions beaucoup de types de recherches à faire :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"full text,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"synonyme,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"géospatiales,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"fuzzy search."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous souhaitions évidemment de bonnes perfs. Challenge, tout du moins pour moi, puisqu'au démarrage je ne connaissais aucune des bases ci-dessus. Et un proto devait fonctionner 2 mois plus tard. Ah oui j'oubliais, je déménageais à Lyon pendant ces deux mois ^^"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce que je vous propose c'est de jeter un oeil "},{type:a,tag:f,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fnosql\u002F",rel:[g]},children:[{type:b,value:"sur le bac à sable"}]},{type:b,value:" que je me suis constitué pour l'occasion et qui m'a permis de comprendre l'utilisation de chacune de ces bases. Bien évidemment je ne suis pas expert sur chacune de ces bases, donc si vous repérez des erreurs, vous pouvez me les signaler, et\u002Fou proposer un patch sous bitbucket pour que tout monde en profite."}]},{type:a,tag:k,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nosql regroupe un ensemble de bases de données qui partagent toutes un objectif de grande scalabilité pour répondre aux besoins des applications web modernes. Le site "},{type:a,tag:f,props:{href:"http:\u002F\u002Fnosql-database.org\u002F",rel:[g]},children:[{type:b,value:"nosql-databases"}]},{type:b,value:" liste pas mal de ces bases nouvelle génération et tente de les regrouper par grandes familles :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"orienté colonne"}]},{type:a,tag:d,props:{},children:[{type:b,value:"orienté document"}]},{type:a,tag:d,props:{},children:[{type:b,value:"orienté graphe"}]},{type:a,tag:d,props:{},children:[{type:b,value:"clé valeur"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous remarquerez d'ailleurs que Solr et ElasticSearch n'y figurent pas. Et pourtant ce sont bien des bases de données que l'on peut ranger dans la catégorie des bases orienté documents."}]},{type:a,tag:k,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je fais encore partie de ceux (rare ?) qui pensent que les bases SQL restent de supers outils. Le SQL est un language très simple et bien plus expressif que tout ceux que nous verront dans la suite de ce billet. (Oui, "},{type:a,tag:h,props:{},children:[{type:b,value:"SELECT champ1 FROM maTable WHERE condition"}]},{type:b,value:", je reste convaincu que c’est bien plus lisible qu’un dictionnaire json, c’est étrange mais c’est comme ça). De plus les bases relationnelles ont elles aussi progressé en terme de fonctionnalités. Si on vous dit que le geospatial ou la recherche full text c’est réservé au monde du NoSql, on vous ment (voir "},{type:a,tag:f,props:{href:"http:\u002F\u002Fwww.hibernatespatial.org\u002F",rel:[g]},children:[{type:b,value:"hibernate geospatial"}]},{type:b,value:" par exemple pour le support du geospatial avec Oracle, Mysql, Postgresql)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un autre argument qui revient souvent comme argument c’est que la plupart de ces bases sont schema-less donc très flexible sur leur évolution. A mon sens dans 95% des cas c’est un des points les plus bullshits pour défendre Nosql. De quelle souplesse parle-t-on ? D’une souplesse en développement ? Ok mais dans ce cas j’ai la même souplesse avec une base relationnelle et les outils qui vont bien. Qui a dit rechargement du modèle à chaud de Play Framework ? Et en prod, faire un ALTER sur une base est une opération relativement bien maîtrisée depuis la naissance des bases de données relationnelle. Mais surtout, pour ceux qui l’aurait oublié, la plus grande difficulté n’est pas de modifier un schéma mais de garder la cohérence des données. Et ca, tout schema less que vous êtes, c’est encore à la charge du développeur."}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"Donc pourquoi utiliser du NoSql ?"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La réponse la plus simple c’est “scalabilité”. En effet les bases NoSql proposent toutes des fonctionnalités “simples” de mise à l’échelle. Et pour cela elles ont sacrifié certaines fonctionnalités traditionnelles des bases relationnelles en proposant un modèle transactionnel moins stricte notamment."}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"Mais alors est-ce que ça me concerne vraiment si je fais une petite application ?"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pas forcément effectivement. Un modèle relationnel a beaucoup d’avantage et justement celui de vous garantir la cohérence de vos données. Mais,"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"si votre besoin n’est pas couvert par des relations (clé valeur, ou graphe de données)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"si votre modèle est simple et que vous souhaitez privilégier les perfs"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Alors ca peut valoir le coup. En tout cas attention à ne pas céder aux sirènes du Nosql juste parce que ça fait hype. Et il ne faut pas hésiter à mixer plusieurs systèmes de gestion de données dans certains cas. Attention toutefois au syndrome “je me suis fait plaisir et j’ai créé une usine à gaz pour mes admin sys ;) Pour notre cas, nous avions besoin de bonnes perfs et nous avions un modèle simple. On va justement vérifier sur nos benchmarks que la piste Nosql est pertinente."}]},{type:a,tag:k,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"Warning"}]},{type:b,value:" : une partie de ce bille traite d’un comparatif de performance, ce genre de comparatif n’engage que celui qui lui fait confiance"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"Petit rappel pour les afficionados des benchmarks. Un benchmark sert à mettre en évidence des pratiques et leur influence sur un comportement. On ne s’attache pas à la mesure elle-même mais à la tendance et comment on l’a obtenu."}]},{type:b,value:" "},{type:a,tag:h,props:{},children:[{type:b,value:"Pour une différence de quelques millisecondes on pourra argumenter sur un paramétrage spécifique ou une manière de coder peu efficace. Par exemple le Redis que je teste est un Redis non officiel qui tourne sur Windows. De toute façon il existera toujours des benchmark contradictoire. Sauf grosse bourde on peut quand même établir des conclusions lorsque les rapports sont vraiment importants mais un conseil, refaites les de votre côté si vous comptez engager votre tête là dessus ;)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ok j'ai testé les perfs, mais l'objectif c'était aussi de tester la facilité d'utilisation de chacune de ces bases avec différentes libs. Tout d'abord même si j'ai utilisé des tests Junit, il ne s'agit pas de tests unitaires puisque tous nécessitent une base de données qui tourne à côté. Inutile donc de m'envoyer un mail pour me dire que les tests ne tournent pas après avoir fait un clone du repo ;)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les tests sont benché avec Junit Benchmarks : "},{type:a,tag:f,props:{href:A,rel:[g]},children:[{type:b,value:A}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour benchmarker un test il vous suffit de rajouter cette Rule à votre test :"}]},{type:a,tag:m,props:{code:B,meta:C},children:[{type:a,tag:D,props:{},children:[{type:a,tag:m,props:{__ignoreMap:j},children:[{type:b,value:B}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour chaque base j'ai essayé d'avoir le même scénario, insertion de 100 000 objet puis manipulation de ces objets(count, find, save, remove, geo search). Encore une fois l'objectif c'était aussi de découvrir les APIs. L'entité manipulé est un Profile contenant une propriété simple, son login et une propriété complexe, une adresse :"}]},{type:a,tag:m,props:{code:E,meta:C},children:[{type:a,tag:D,props:{},children:[{type:a,tag:m,props:{__ignoreMap:j},children:[{type:b,value:E}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La propriété adresse permettra de voir comment gérer une relation entre entité dans une base Nosql."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Toujours à propos du bench en lui-même, si vous regardez les méthodes de AbstractTestCase vous remarquerez que chaque test utilise une boucle pour réiterer l’opération testé une cinquantaine de fois. Vous pourriez vous demander pourquoi puisque JunitBenchmark lance lui aussi le test en boucle."}]},{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"L’objectif n’est pas le même."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"JunitBenchmark lance x fois le test pour “"},{type:a,tag:e,props:{},children:[{type:b,value:"chauffer"}]},{type:b,value:"” la JVM et lui laisser le temps d’optimiser le code exécuté. Les premières itérations seront d’ailleurs écartés de la mesure. L’outil va aussi comptabiliser l’activité du GC qui ne serait pas représentative sur une seule itération. Cependant mes tests sont relativement rapides, voire même trop rapides. Du coup parfois je vais obtenir des résultats de ce type :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"assertThatMyDatabaseHasMoreThan100Profile: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: 0.00 [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.07, time.warmup: 0.03, time.bench: 0.04"}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est donc pour obtenir des mesures significatives que je vais itérer afin d’augmenter la durée du test lui-même. Commencons par la première base."}]},{type:a,tag:k,props:{id:F},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et oui, après une introduction sur nosql je commence par Mysql, ca peut paraître paradoxal :) En fait non, l’objectif c’était aussi de montrer un point de référence connu avec une base relationnelle utilisé très régulièrement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je ne vais pas m’étaler dessus longuement, je vous laisse "},{type:a,tag:f,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fnosql\u002Fsrc\u002F821b12c7c105\u002Fsrc\u002Ftest\u002Fjava\u002Fcom\u002Fsandbox\u002FJDBCTest.java?at=default",rel:[g]},children:[{type:b,value:"lire le test"}]},{type:b,value:" si vous le souhaitez. J’ai utilisé l'API JDBC directement et les perfs comme vous pouvez le constater sont relativement acceptables :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:o}]},{type:b,value:".findByLoginShouldReturnSomething: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: "},{type:a,tag:e,props:{},children:[{type:b,value:"0.05"}]},{type:b,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.80, time.warmup: 0.33, time.bench: 0.48 "},{type:a,tag:e,props:{},children:[{type:b,value:o}]},{type:b,value:".assertThatMyDatabaseHasMoreThan100Profile: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: "},{type:a,tag:e,props:{},children:[{type:b,value:"1.27"}]},{type:b,value:" [+- 0.01], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 19.10, time.warmup: 6.37, time.bench: 12.74 "},{type:a,tag:e,props:{},children:[{type:b,value:o}]},{type:b,value:".testSearchWithEmbeddedObject: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: "},{type:a,tag:e,props:{},children:[{type:b,value:"0.04"}]},{type:b,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.68, time.warmup: 0.23, time.bench: 0.45"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Petit troll pour la route : heureusement que j’ai pas fait du Hibernate, sinon j’attendrais encore l’insertion de mes 100 000 éléments..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre j’ai échoué à faire fonctionner le module géospatial. Si quelqu'un se sent l'âme de faire passer le test, qu'il hésite pas."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Maintenant que nous avons un point de comparaison, passons à la suite."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour voir chaque billet :"}]},{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002F",rel:[g],title:p},children:[{type:b,value:"L'intro"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-24\u002F",rel:[g],title:"Nosql, 4 bases à la loupe 2\u002F4"},children:[{type:b,value:"Redis et Mongo"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-34\u002F",rel:[g],title:"Nosql, 4 bases à la loupe 3\u002F4"},children:[{type:b,value:"ElasticSearch et Solr"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-44\u002F",rel:[g]},children:[{type:b,value:"Le récap"}]}]}]}],toc:{title:j,searchDepth:H,depth:H,links:[{id:s,depth:l,text:t},{id:u,depth:l,text:v},{id:w,depth:l,text:x},{id:y,depth:l,text:z},{id:F,depth:l,text:G}]}},_type:"markdown",_id:"content:articles:2012:11:11:nosql-4-bases-a-la-loupe-14.md",_source:"content",_file:"articles\u002F2012\u002F11\u002F11\u002Fnosql-4-bases-a-la-loupe-14.md",_extension:"md"},"/articles/2012/11/11/nosql-4-bases-a-la-loupe-14/relatedArticles":[]},prerenderedAt:1676822890617}}("element","text","p","li","strong","a","nofollow","em","ul","","h3",3,"code",false,"JDBCTest","Nosql, 4 bases à la loupe 1\u002F4","Redis","Solr","le-contexte","Le contexte","petit-rappel-sur-nosql","Petit rappel sur Nosql :","pourquoi-nosql","Pourquoi Nosql ?","comment-jai-testé","Comment j’ai testé","http:\u002F\u002Flabs.carrotsearch.com\u002Fjunit-benchmarks.html","\n@Rule\npublic MethodRule benchmarkRun = new BenchmarkRule();\n",null,"pre","\npublic class Profile\n{\n    private String login;\n    private Address address = new Address();\n...\n}\npublic class Address\n{\n    private String zipCode;\n    private Double[] loc = new Double[2];\n...\n}\n","mysql-parce-quil-faut-un-point-de-référence-connu","Mysql (parce qu’il faut un point de référence connu)",2))