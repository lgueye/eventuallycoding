export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:{"/articles/2019/07/03/mongodb-vers-postgresql":{_path:"\u002Farticles\u002F2019\u002F07\u002F03\u002Fmongodb-vers-postgresql",_dir:"03",_draft:h,_partial:h,_locale:i,_empty:h,title:"Retour d'utilisation de Mongodb et pourquoi nous migrons vers Postgresql",description:"![](\u002Fimages\u002Faf912-mongo.jpg)\nDans de précédents billets j'évoquais que nous utilisions Mongodb chez Malt mais j'ai évoqué dans certains meetups que n...",id:"1425",date:"2019-07-03",categories:["waza"],tags:["data","mongodb","postgresql"],img:"af912-mongo.jpg",cover:"cover2.jpg",readingTime:{text:"13 min read",minutes:12.755,time:765300,words:2551},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:l,props:{alt:i,src:"\u002Fimages\u002Faf912-mongo.jpg"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans de précédents billets j'évoquais que nous utilisions Mongodb chez Malt mais j'ai évoqué dans certains meetups que nous n'en étions pas totalement satisfaits et que nous entamions une (lente) migration vers postgresql."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vous propose de faire un petit retour d'expérience sur ce sujet après désormais 7 ans d'utilisation de mongodb chez nous."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout d'abord posons le contexte, cela permet de comprendre certains choix. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Malt (ou anciennement Hopwork) démarre en 2012 pendant l'été. Vincent JB et moi on se rencontre tous ensemble pour la première fois en juillet. Vincent nous propose une idée, JB et moi sommes pile poil dans une période un peu creuse (déménagement sur Lyon pour moi et long voyage aux US pour JB) du coup c'est envisageable d'y passer un peu de temps. On accepte donc ce fameux projet ou un inconnu vous propose de faire mieux qu'une industrie toute entière payé en parts de la société qui ne valent rien :)"}]},{type:a,tag:c,props:{},children:[{type:a,tag:l,props:{alt:"Résultat de recherche d'images pour \"parce que c'est notre projet\"",src:"\u002Fimages\u002Fhqdefault.jpg"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"A ce moment là, JB et moi on voit dans le projet plusieurs objectifs :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"démontrer qu'à deux on peut créer une application complète rapidement. A force de faire de la prestation de service on a trop vu de projets pharaoniques qui ne mène nulle part."}]},{type:a,tag:d,props:{},children:[{type:b,value:"tester de nouvelles technos et ne pas forcément rester dans notre zone de confort, ce qui peut entrer en conflit avec le premier objectif de vitesse"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je passe sur les objectifs sur la portée du produit, la je n'évoque que les points technologiques."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce contexte, nous allons faire quelque choix nous permettant d'avoir un minimum d'aisance, comme le choix du langage de développement par exemple : Java"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais nous allons par contre tester des nouveautés pour nous : Lucene (puis elasticsearch), mongodb"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, c'est donc comme sujets de veille que mongo et elasticsearch rentreront chez Malt."}]},{type:a,tag:g,props:{id:m},children:[{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"Rien à redire au début, mongo s'avérera très très utile. L'outil a pour lui une simplicité d'accès permettant de développer très rapidement :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"lancer une base mongo sur linux ou windows c'est immédiat (et par la suite le mode cluster\u002Freplica set s'avèrera aussi simple)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"manipuler du json nous paraît à ce moment plutôt simple d'accès, le format étant déjà très populaire"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la console shell de mongo en javascript et le requêtage nécessitent peu de formation"}]},{type:a,tag:d,props:{},children:[{type:b,value:"l'absence\u002Fsouplesse de schéma permet de développer sans jamais s'occuper du DDL, les tables se créent toutes seules, les colonnes aussi, aucun overhead de ce côté"}]},{type:a,tag:d,props:{},children:[{type:b,value:"l'utilisation avec Jongo en Java est très agréable, la lib est légère, facile à utiliser dans un contexte de test unitaire avec Fongo"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'application qui va naître en l'espace de 2\u002F3 mois doit en grande partie sa rapidité à mongodb. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Entre 2012 et 2017 globalement, on peut dire que mongo aura bien fonctionné et il n'y a aucun regret à avoir sur ce choix."}]},{type:a,tag:c,props:{},children:[{type:b,value:"D'ailleurs sur la même période je vais personnellement beaucoup apprendre dessus, passer successivement les formations en ligne 101 for developpers, 102 for dba, 202 advanced deployment and operations et commencer à donner des formations dessus jusque fin 2016. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais au fur et à mesure quelques petits couacs vont se faire ressentir, mineurs au début :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"- Effectivement l'administration d'une base mongo est simple pour les choses de base. La gestion des backup en \"point in time\" l'est un peu moins. Vous pouvez faire des backups journaliers à heure fixe mais l'idéal reste un backup en continu pour viser un "},{type:a,tag:j,props:{href:"https:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FDur%C3%A9e_maximale_d%27interruption_admissible",rel:[k]},children:[{type:b,value:"RPO"}]},{type:b,value:" proche de zéro."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et il n'existe que la solution vendue par l'éditeur sur son SAAS pour cela. Pas trop grave malgré tout, nous l'avons utilisé et effectivement cela marche plutôt bien. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"- Le JSON pour écrire des requêtes, passé l'engouement du début c'est quand même peu lisible. Et l'API recèle des petites merveilles en termes de WTF notamment quand on utilise le framework d’agrégation. Rien n'a encore été écrit de plus expressif que le SQL pour interroger ces données. Et ce n'est sans doute pas pour rien que d'autres bases de données ont fini par fournir des syntaxes SQL à leurs utilisateurs : Cassandra CQL, Hadoop Hive. Combien on parie que mongo finira par y venir ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"- si l'absence de schéma \"visible\" existe, vous avez bien sûr des données qui ont un modèle. Tout cela doit vivre dans le temps. Nous avons utilisé mongeez pendant très longtemps (même philosophie que liquibase mais pour mongodb). Sauf que la mise à jour de données dans un univers non transactionnel comporte quelques pièges amusants"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout cela reste très mineur, aucun outil n'est parfait et la vitesse de développement avec mongo reste beaucoup plus rapide qu'avec un système traditionnel."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Alors oui il existe aussi des articles sur le net qui casse pas mal de sucre sur mongo et des problèmes de pertes de données. Mais tous ces articles parlent des premières versions de mongo antérieures à la version 2.2 et malgré le FUD ambiant sur mongo, ça se passe bien. "}]},{type:a,tag:g,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Jusqu'à 2016, nous n'avions pas encore de gros besoins en termes de reporting data. Nous avions résolu, un peu, ces points en faisant tout d'abord des extractions de données qui étaient ensuite intégrées dans Tableau Software."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Puis nous avions codé des écouteurs d'évènements qui alimentaient un schéma SQL dédié au reporting pour faire du temps réel. Ca n'était pas satisfaisant au vu du temps de maintenance passé dessus. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Finalement après de nombreux tests nous arrivons à la conclusion que faire de l'analyse de données sur mongo est très difficile, voire impossible, nous construirons une brique plus robuste de synchronisation temps réel mongo vers postgresql. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce composant est open source et vous pourrez trouver "},{type:a,tag:j,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fconnecteur-mongo-postgresql",rel:[k]},children:[{type:b,value:"un vieux billet à ce sujet"}]},{type:b,value:" (attention, ce composant a été réécrit entièrement l'année dernière donc prenez bien la dernière version)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, le choix de notre outil nous handicape clairement pour nos visualisations de données. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais la suite s'avérera tout aussi sympathique. "}]},{type:a,tag:g,props:{id:q},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avec l'arrivée de bons outils de visualisation de données, ce sera aussi l'occasion de se rendre compte de nombreuses données incohérentes en bases de données. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais, c'est en fait tout sauf une surprise. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"En effet, par principe mongo a quelques particularités qu'il faut bien comprendre :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"ce n'est pas transactionnel (tout du moins pas avant la version 4.0)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"aucune relation n'existe entre les tables, donc aucune jointure possible (hormis avec $lookup introduit en 3.2 mais qui reste limité dans son usage)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le crédo de mongo était de proposer une base de données riche en termes de fonctionnalités mais sans les fonctionnalités impliquant de grosses pertes en performance. C'était censé être le bon compromis fonctionnalités\u002Frapidité."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mon avis personnel, non vérifié, c'est que ce mantra s'est imposé APRES que le produit soit devenu populaire. A la toute origine mongo c'est surtout un sous produit d'un PAAS édité par 10gen. Ce PAAS n'a pas fonctionné mais mongo avait plu et il est devenu le produit phare de la société."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sauf que ce produit initialement conçu comme une sous brique de PAAS pas forcément très évolué s'est retrouvé propulsé comme moteur de base de données pouvant magiquement remplacer des bases de données relationnelles du jour au lendemain. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il lui manquait tout un tas de fonctionnalités mais 10gen a réussi à en faire une force en mettant en avant que c'était volontaire. L'absence de transaction et de relations : c'est un choix. Si vous modélisez tout sous forme de documents sans relation, pas besoin de transaction (forcément coûteuse comme mécanisme de synchronisation) et pas besoin de jointure, coûteuse également dans des environnements clusterisé ou les données peuvent résider sur des noeuds différents. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pourtant avec le temps mongo a commencé à introduire des solutions de remplacement, $lookup d'abord pour la partie jointure, puis finalement les transactions en version 4.0. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais ces points ne sont presque que le sommet visible de l'iceberg, la gestion des bigdecimaux, les conversions de type, l'égalité entre champs du même document etc... étaient aussi de gros manques sur la base de données. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"De tous les manques dans le langage de requêtage certains ont progressivement été comblé avec de nouveaux opérateurs d’agrégation mais au prix d'une syntaxe toujours plus horrible version après version."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Même si la version 4.0 est attractive, transactions, conversions de type, nouveaux opérateurs, finalement, si l'évolution de mongo depuis le début consiste à rattraper les manques fonctionnels vis à vis des bases relationnelles, pourquoi s'embêter avec mongo ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Première réponse : l'argument de la rapidité de développement avec mongo. "}]},{type:a,tag:g,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"En fait avec l'augmentation du volume de code, c'est finalement la modélisation dans mongodb qui va commencer à nous ralentir."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour spoiler un tout petit peu, nous avons fait une erreur classique, nous avons pris le seul outil à disposition pour résoudre tous nos problèmes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le fameux : \"si vous n'avez qu'un marteau, tous les problèmes ressemblent à des clous\""}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme je le disais plus haut, mongodb est non relationnel. Chaque fois que vous modélisez des documents dans une collection vous devez réfléchir si vos documents vont contenir leurs relations ou des références à ces relations, sachant que vous ne pourrez pas faire de jointure dans le second cas. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple si vous modélisiez ce blog :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"un post de blog peut contenir la liste des commentaires de l'article dans le même document (on parlera d'embarquer les données)."}]},{type:a,tag:d,props:{},children:[{type:b,value:"un post de blog peut contenir l'id de l'auteur mais pas la définition de l'auteur (sinon il serait dupliqué dans chaque article)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sauf que ce choix embarqué vs référencé correspond bien souvent à un cas d'usage. "}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"les tags d'un post de blog peuvent être embarqués si vous ne les utilisez qu'à l'affichage"}]},{type:a,tag:d,props:{},children:[{type:b,value:"vous pourriez choisir de les référencer si vous souhaitez les administrer au global et les normaliser"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les commentaires d'un article s'ils sont embarqués et très nombreux peuvent dépasser la capacité maximale d'un document mongo"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, ce choix embarqué vs référencé va entraîner des casses têtes qui vieilliront mal dans le temps parfois ou causeront de nombreuses duplications de données dans d'autres cas."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La dénormalisation (ou duplication de données si vous préférez) c'est l'un des concepts clés à comprendre avec Mongo. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour des raisons de modélisation, mongo incite forcément à dénormaliser."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pour avoir la liste des articles de blog avec plus de 5 commentaires, il est préférable de créer un champ nbComments que l’on incrémentera à chaque ajout de commentaires (c'est une duplication)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pour ne pas faire de jointure avec la collection des auteurs de commentaires, on pourrait dupliquer les noms\u002Fprénoms d'un auteur de commentaire dans chaque article pour l'affichage et pas uniquement conserver l'id"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette duplication est inévitable et même conseillée dans les bonnes pratiques de mongo pour répondre à de nombreux cas d'usages."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avec le temps, ces duplications, ces corrections de modélisations pour gérer de nouveaux cas d'usages vont commencer à être très coûteux. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et l'absence de transactionnalité a entraîné des incohérences dans nos données qui pourrait s’illustrer comme suit : un auteur référencé dans un article mais inexistant dans la collection des auteurs, car par exemple l'opération de suppression de l'auteur a planté après la première opération sans avoir le temps de supprimer les commentaires."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avec le temps, l'ensemble des garanties proposé par une base de données standards :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"cohérence des données (via les index, clés étrangères, typage)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le caractère ACID d'un ensemble d'opération "}]},{type:a,tag:d,props:{},children:[{type:b,value:"les jointures"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout cela, vous devez le gérer dans votre code. Si ca n'existe pas en base, alors c'est le code qui doit prendre le relais. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Plus l’application va grandir, plus statistiquement vous allez rencontrer des soucis liés à l’augmentation du trafic (des races conditions par exemple qui ne vous arrivaient jamais avant), et plus vous allez devoir écrire du code défensif."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et bien là, cela commence à ralentir le développement."}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Il faut des batchs de vérifications de la cohérence des données."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Il faut parfois implémenter un "},{type:a,tag:j,props:{href:"https:\u002F\u002Fdocs.mongodb.com\u002Fv3.6\u002Ftutorial\u002Fperform-two-phase-commits\u002F",rel:[k]},children:[{type:b,value:"two phase commit logiciel"}]},{type:b,value:" "}]},{type:a,tag:d,props:{},children:[{type:b,value:"il faut prévoir tous les cas de plantage et être capable de corriger une donnée incohérente au moment où on la rencontre"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Anecdote amusante, il faut coder de nombreuses fois des gestions d'erreur pour le cas ou un upsert plante pour cause de... violation de clé unique (pourtant la sémantique même de l'upsert ca devrait être d'éviter cela)."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour recréer certaines pages complexes (tableau de bord par exemple), l'interrogation du modèle est tellement coûteuse que vous devez construire des vues maintenues en temps réel via des systèmes d'observateurs d'évènements. Et ces vues sont régulièrement désynchronisées donc rebelotte, vous devez aussi maintenir un batch de cohérence de donnée."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si on prend un peu de recul, tout ceci était évitable si on avait accepté que mongo est une base pour un cas d'usage : des collections de documents hétérogènes et non liées entre eux. Ce n'est absolument pas fait pour recréer l'ensemble du\u002Fdes modèle(s) d'une application dans lesquels vous modélisez des relations entre vos entités. "}]},{type:a,tag:g,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Petite parenthèse utile, j’entends parfois des raccourcis qui consiste à penser que mongo est utilisé pour ses performances ou dans un contexte bigdata."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur les performances, c’est discutable et dépendant des cas d’usages. Je m’explique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Reprenons le blog dont je parlais plus haut. Si vous stockez les commentaires au sein du document “article” alors récupérer l’article et ces commentaires, c’est une requête avec accès à un document."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L’équivalent dans un mode relationnel suppose une jointure et la récupération de n lignes. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mécaniquement il y a un overhead."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre si dans mongo vous avez une collection “articles” et une collection “commentaires”, cette fois le nombre d’opérations est supérieur dans mongo."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, comparer les performances entre les deux en lecture ça ne peut se faire que pour votre cas d’usage, votre modélisation. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Intrinsèquement mongo va proposer des solutions pour être plus rapide (embarquer des documents, absence de transactions) mais qui doivent s’accommoder avec vos contraintes de modèles."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En écriture mongo propose des modes d’acquittements très light qui permettent effectivement d’aller vite (si vous n’avez pas de soucis à perdre des données)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et concernant le bigdata ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Outre le fait que peu de gens font vraiment du BigData, j’ai un avis tronqué sur la question, je considère au contraire que Mongo est plus adapté pour du prototypage rapide au début d’une application. Je ne l’ai jamais considéré comme une base bigdata et la complexité du sharding dans mongo me faire dire que plus on s’en passe, mieux c’est. Mais j’ai peu d’expériences sur le sujet.  "}]},{type:a,tag:g,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"En 2018 nous avons rencontré de nombreux problèmes de stabilité de notre solution maison de synchronisation temps réel mongo vers pg. Le volume de la table à synchroniser(plusieurs centaines de millions d'enregistrements) et les changements réguliers de modèle entraînaient des resynchro depuis le début et coûtaient plusieurs jours d'indisponibilité de nos analytiques. Nous avons donc entamé un retour vers postgresql pour cette table là dans un premier temps."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Puis ensuite nous avons choisi de poursuivre avec postgresql pour les nouvelles fonctionnalités et de migrer progressivement les anciennes tables lorsque l'occasion se présentait."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et bien après plusieurs années de mongo, le retour au SQL c'est perturbant mais très agréable. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'avais beau avoir travaillé sur postgresql, mysql, oracle, sybase, sql server, je me suis senti un peu rouillé :) Et je n'étais pas le seul. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Aujourd'hui en 2019 les nouveaux développements continuent de se faire sur postgresql. Nous avons repris de nombreuses bonnes habitudes, une meilleure modélisation en base de données, moins de duplication, des requêtes plus compréhensibles et puissantes, des garanties plus fortes sur la cohérence, moins de code défensif pour pallier aux manques de la base, moins de (nouveaux) batchs de cohérences."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout n'est pas rose bien sûr, nous avons redécouvert des problématiques classiques de base de données (maintenance du schéma par exemple) mais l'expérience est positive."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous n'abandonnons pas mongo, une grosse partie de l'application reste dessus pour l'instant et nous nous autorisons à l'utiliser pour des cas simples, des collections de données sans relations entre elles, des données très hétérogènes etc... "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le tout étant juste de savoir quand utiliser l'un ou l'autre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\"Si vous n'avez qu'un marteau, tout les problèmes ressemblent à des clous\""}]}],toc:{title:i,searchDepth:f,depth:f,links:[{id:m,depth:f,text:n},{id:o,depth:f,text:p},{id:q,depth:f,text:r},{id:s,depth:f,text:t},{id:u,depth:f,text:v},{id:w,depth:f,text:x}]}},_type:"markdown",_id:"content:articles:2019:07:03:mongodb-vers-postgresql.md",_source:"content",_file:"articles\u002F2019\u002F07\u002F03\u002Fmongodb-vers-postgresql.md",_extension:"md"},"/articles/2019/07/03/mongodb-vers-postgresql/relatedArticles":[]},prerenderedAt:1676827031856}}("element","text","p","li","ul",2,"h2",false,"","a","nofollow","img","le-bon-vieux-temps","Le bon vieux temps ","première-alerte","Première alerte ","remise-en-question","Remise en question","une-rapidité-de-développement-en-déclin","Une rapidité de développement en déclin","digression","Digression","le-temps-de-la-migration","Le temps de la migration "))