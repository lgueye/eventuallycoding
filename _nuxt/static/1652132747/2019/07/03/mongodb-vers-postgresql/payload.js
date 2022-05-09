__NUXT_JSONP__("/2019/07/03/mongodb-vers-postgresql", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{article:{slug:"mongodb-vers-postgresql",title:"Retour d'utilisation de Mongodb et pourquoi nous migrons vers Postgresql",date:"2019-07-03",categories:["waza"],tags:["data","mongodb","postgresql"],img:"af912-mongo.jpg",toc:[{id:s,depth:h,text:t},{id:u,depth:h,text:v},{id:w,depth:h,text:x},{id:y,depth:h,text:z},{id:A,depth:h,text:B},{id:C,depth:h,text:D}],body:{type:"root",children:[{type:c,tag:d,props:{},children:[{type:c,tag:E,props:{alt:"",src:"\u002Fimages\u002Faf912-mongo.jpg"},children:[]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Dans de précédents billets j'évoquais que nous utilisions Mongodb chez Malt mais j'ai évoqué dans certains meetups que nous n'en étions pas totalement satisfaits et que nous entamions une (lente) migration vers postgresql."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Je vous propose de faire un petit retour d'expérience sur ce sujet après désormais 7 ans d'utilisation de mongodb chez nous."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Tout d'abord posons le contexte, cela permet de comprendre certains choix. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Malt (ou anciennement Hopwork) démarre en 2012 pendant l'été. Vincent JB et moi on se rencontre tous ensemble pour la première fois en juillet. Vincent nous propose une idée, JB et moi sommes pile poil dans une période un peu creuse (déménagement sur Lyon pour moi et long voyage aux US pour JB) du coup c'est envisageable d'y passer un peu de temps. On accepte donc ce fameux projet ou un inconnu vous propose de faire mieux qu'une industrie toute entière payé en parts de la société qui ne valent rien :)"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:c,tag:E,props:{alt:"Résultat de recherche d'images pour \"parce que c'est notre projet\"",src:"\u002Fimages\u002Fhqdefault.jpg"},children:[]}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"A ce moment là, JB et moi on voit dans le projet plusieurs objectifs :"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"démontrer qu'à deux on peut créer une application complète rapidement. A force de faire de la prestation de service on a trop vu de projets pharaoniques qui ne mène nulle part."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"tester de nouvelles technos et ne pas forcément rester dans notre zone de confort, ce qui peut entrer en conflit avec le premier objectif de vitesse"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Je passe sur les objectifs sur la portée du produit, la je n'évoque que les points technologiques."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Dans ce contexte, nous allons faire quelque choix nous permettant d'avoir un minimum d'aisance, comme le choix du langage de développement par exemple : Java"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Mais nous allons par contre tester des nouveautés pour nous : Lucene (puis elasticsearch), mongodb"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Bref, c'est donc comme sujets de veille que mongo et elasticsearch rentreront chez Malt."}]},{type:a,value:b},{type:c,tag:i,props:{id:s},children:[{type:c,tag:f,props:{href:"#le-bon-vieux-temps",ariaHidden:j,tabIndex:k},children:[{type:c,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:t}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Rien à redire au début, mongo s'avérera très très utile. L'outil a pour lui une simplicité d'accès permettant de développer très rapidement :"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"lancer une base mongo sur linux ou windows c'est immédiat (et par la suite le mode cluster\u002Freplica set s'avèrera aussi simple)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"manipuler du json nous paraît à ce moment plutôt simple d'accès, le format étant déjà très populaire"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"la console shell de mongo en javascript et le requêtage nécessitent peu de formation"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"l'absence\u002Fsouplesse de schéma permet de développer sans jamais s'occuper du DDL, les tables se créent toutes seules, les colonnes aussi, aucun overhead de ce côté"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"l'utilisation avec Jongo en Java est très agréable, la lib est légère, facile à utiliser dans un contexte de test unitaire avec Fongo"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"L'application qui va naître en l'espace de 2\u002F3 mois doit en grande partie sa rapidité à mongodb. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Entre 2012 et 2017 globalement, on peut dire que mongo aura bien fonctionné et il n'y a aucun regret à avoir sur ce choix."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"D'ailleurs sur la même période je vais personnellement beaucoup apprendre dessus, passer successivement les formations en ligne 101 for developpers, 102 for dba, 202 advanced deployment and operations et commencer à donner des formations dessus jusque fin 2016. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Mais au fur et à mesure quelques petits couacs vont se faire ressentir, mineurs au début :"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"- Effectivement l'administration d'une base mongo est simple pour les choses de base. La gestion des backup en \"point in time\" l'est un peu moins. Vous pouvez faire des backups journaliers à heure fixe mais l'idéal reste un backup en continu pour viser un "},{type:c,tag:f,props:{href:"https:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FDur%C3%A9e_maximale_d%27interruption_admissible",rel:[o,p,q],target:r},children:[{type:a,value:"RPO"}]},{type:a,value:" proche de zéro."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Et il n'existe que la solution vendue par l'éditeur sur son SAAS pour cela. Pas trop grave malgré tout, nous l'avons utilisé et effectivement cela marche plutôt bien. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"- Le JSON pour écrire des requêtes, passé l'engouement du début c'est quand même peu lisible. Et l'API recèle des petites merveilles en termes de WTF notamment quand on utilise le framework d’agrégation. Rien n'a encore été écrit de plus expressif que le SQL pour interroger ces données. Et ce n'est sans doute pas pour rien que d'autres bases de données ont fini par fournir des syntaxes SQL à leurs utilisateurs : Cassandra CQL, Hadoop Hive. Combien on parie que mongo finira par y venir ?"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"- si l'absence de schéma \"visible\" existe, vous avez bien sûr des données qui ont un modèle. Tout cela doit vivre dans le temps. Nous avons utilisé mongeez pendant très longtemps (même philosophie que liquibase mais pour mongodb). Sauf que la mise à jour de données dans un univers non transactionnel comporte quelques pièges amusants"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Tout cela reste très mineur, aucun outil n'est parfait et la vitesse de développement avec mongo reste beaucoup plus rapide qu'avec un système traditionnel."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Alors oui il existe aussi des articles sur le net qui casse pas mal de sucre sur mongo et des problèmes de pertes de données. Mais tous ces articles parlent des premières versions de mongo antérieures à la version 2.2 et malgré le FUD ambiant sur mongo, ça se passe bien. "}]},{type:a,value:b},{type:c,tag:i,props:{id:u},children:[{type:c,tag:f,props:{href:"#premi%C3%A8re-alerte",ariaHidden:j,tabIndex:k},children:[{type:c,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:v}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Jusqu'à 2016, nous n'avions pas encore de gros besoins en termes de reporting data. Nous avions résolu, un peu, ces points en faisant tout d'abord des extractions de données qui étaient ensuite intégrées dans Tableau Software."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Puis nous avions codé des écouteurs d'évènements qui alimentaient un schéma SQL dédié au reporting pour faire du temps réel. Ca n'était pas satisfaisant au vu du temps de maintenance passé dessus. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Finalement après de nombreux tests nous arrivons à la conclusion que faire de l'analyse de données sur mongo est très difficile, voire impossible, nous construirons une brique plus robuste de synchronisation temps réel mongo vers postgresql. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Ce composant est open source et vous pourrez trouver "},{type:c,tag:f,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fconnecteur-mongo-postgresql",rel:[o,p,q],target:r},children:[{type:a,value:"un vieux billet à ce sujet"}]},{type:a,value:" (attention, ce composant a été réécrit entièrement l'année dernière donc prenez bien la dernière version)."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Bref, le choix de notre outil nous handicape clairement pour nos visualisations de données. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Mais la suite s'avérera tout aussi sympathique. "}]},{type:a,value:b},{type:c,tag:i,props:{id:w},children:[{type:c,tag:f,props:{href:"#remise-en-question",ariaHidden:j,tabIndex:k},children:[{type:c,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:x}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Avec l'arrivée de bons outils de visualisation de données, ce sera aussi l'occasion de se rendre compte de nombreuses données incohérentes en bases de données. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Mais, c'est en fait tout sauf une surprise. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"En effet, par principe mongo a quelques particularités qu'il faut bien comprendre :"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"ce n'est pas transactionnel (tout du moins pas avant la version 4.0)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"aucune relation n'existe entre les tables, donc aucune jointure possible (hormis avec $lookup introduit en 3.2 mais qui reste limité dans son usage)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Le crédo de mongo était de proposer une base de données riche en termes de fonctionnalités mais sans les fonctionnalités impliquant de grosses pertes en performance. C'était censé être le bon compromis fonctionnalités\u002Frapidité."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Mon avis personnel, non vérifié, c'est que ce mantra s'est imposé APRES que le produit soit devenu populaire. A la toute origine mongo c'est surtout un sous produit d'un PAAS édité par 10gen. Ce PAAS n'a pas fonctionné mais mongo avait plu et il est devenu le produit phare de la société."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Sauf que ce produit initialement conçu comme une sous brique de PAAS pas forcément très évolué s'est retrouvé propulsé comme moteur de base de données pouvant magiquement remplacer des bases de données relationnelles du jour au lendemain. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Il lui manquait tout un tas de fonctionnalités mais 10gen a réussi à en faire une force en mettant en avant que c'était volontaire. L'absence de transaction et de relations : c'est un choix. Si vous modélisez tout sous forme de documents sans relation, pas besoin de transaction (forcément coûteuse comme mécanisme de synchronisation) et pas besoin de jointure, coûteuse également dans des environnements clusterisé ou les données peuvent résider sur des noeuds différents. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Pourtant avec le temps mongo a commencé à introduire des solutions de remplacement, $lookup d'abord pour la partie jointure, puis finalement les transactions en version 4.0. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Mais ces points ne sont presque que le sommet visible de l'iceberg, la gestion des bigdecimaux, les conversions de type, l'égalité entre champs du même document etc... étaient aussi de gros manques sur la base de données. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"De tous les manques dans le langage de requêtage certains ont progressivement été comblé avec de nouveaux opérateurs d’agrégation mais au prix d'une syntaxe toujours plus horrible version après version."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Même si la version 4.0 est attractive, transactions, conversions de type, nouveaux opérateurs, finalement, si l'évolution de mongo depuis le début consiste à rattraper les manques fonctionnels vis à vis des bases relationnelles, pourquoi s'embêter avec mongo ?"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Première réponse : l'argument de la rapidité de développement avec mongo. "}]},{type:a,value:b},{type:c,tag:i,props:{id:y},children:[{type:c,tag:f,props:{href:"#une-rapidit%C3%A9-de-d%C3%A9veloppement-en-d%C3%A9clin",ariaHidden:j,tabIndex:k},children:[{type:c,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:z}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"En fait avec l'augmentation du volume de code, c'est finalement la modélisation dans mongodb qui va commencer à nous ralentir."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Pour spoiler un tout petit peu, nous avons fait une erreur classique, nous avons pris le seul outil à disposition pour résoudre tous nos problèmes."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Le fameux : \"si vous n'avez qu'un marteau, tous les problèmes ressemblent à des clous\""}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Comme je le disais plus haut, mongodb est non relationnel. Chaque fois que vous modélisez des documents dans une collection vous devez réfléchir si vos documents vont contenir leurs relations ou des références à ces relations, sachant que vous ne pourrez pas faire de jointure dans le second cas. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Exemple si vous modélisiez ce blog :"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"un post de blog peut contenir la liste des commentaires de l'article dans le même document (on parlera d'embarquer les données)."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"un post de blog peut contenir l'id de l'auteur mais pas la définition de l'auteur (sinon il serait dupliqué dans chaque article)"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Sauf que ce choix embarqué vs référencé correspond bien souvent à un cas d'usage. "}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"les tags d'un post de blog peuvent être embarqués si vous ne les utilisez qu'à l'affichage"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"vous pourriez choisir de les référencer si vous souhaitez les administrer au global et les normaliser"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"les commentaires d'un article s'ils sont embarqués et très nombreux peuvent dépasser la capacité maximale d'un document mongo"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Bref, ce choix embarqué vs référencé va entraîner des casses têtes qui vieilliront mal dans le temps parfois ou causeront de nombreuses duplications de données dans d'autres cas."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"La dénormalisation (ou duplication de données si vous préférez) c'est l'un des concepts clés à comprendre avec Mongo. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Pour des raisons de modélisation, mongo incite forcément à dénormaliser."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Exemple :"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"pour avoir la liste des articles de blog avec plus de 5 commentaires, il est préférable de créer un champ nbComments que l’on incrémentera à chaque ajout de commentaires (c'est une duplication)"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"pour ne pas faire de jointure avec la collection des auteurs de commentaires, on pourrait dupliquer les noms\u002Fprénoms d'un auteur de commentaire dans chaque article pour l'affichage et pas uniquement conserver l'id"}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Cette duplication est inévitable et même conseillée dans les bonnes pratiques de mongo pour répondre à de nombreux cas d'usages."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Avec le temps, ces duplications, ces corrections de modélisations pour gérer de nouveaux cas d'usages vont commencer à être très coûteux. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Et l'absence de transactionnalité a entraîné des incohérences dans nos données qui pourrait s’illustrer comme suit : un auteur référencé dans un article mais inexistant dans la collection des auteurs, car par exemple l'opération de suppression de l'auteur a planté après la première opération sans avoir le temps de supprimer les commentaires."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Avec le temps, l'ensemble des garanties proposé par une base de données standards :"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"cohérence des données (via les index, clés étrangères, typage)"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"le caractère ACID d'un ensemble d'opération "}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"les jointures"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Tout cela, vous devez le gérer dans votre code. Si ca n'existe pas en base, alors c'est le code qui doit prendre le relais. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Plus l’application va grandir, plus statistiquement vous allez rencontrer des soucis liés à l’augmentation du trafic (des races conditions par exemple qui ne vous arrivaient jamais avant), et plus vous allez devoir écrire du code défensif."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Et bien là, cela commence à ralentir le développement."}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"Il faut des batchs de vérifications de la cohérence des données."}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"Il faut parfois implémenter un "},{type:c,tag:f,props:{href:"https:\u002F\u002Fdocs.mongodb.com\u002Fv3.6\u002Ftutorial\u002Fperform-two-phase-commits\u002F",rel:[o,p,q],target:r},children:[{type:a,value:"two phase commit logiciel"}]},{type:a,value:" "}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"il faut prévoir tous les cas de plantage et être capable de corriger une donnée incohérente au moment où on la rencontre"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"Anecdote amusante, il faut coder de nombreuses fois des gestions d'erreur pour le cas ou un upsert plante pour cause de... violation de clé unique (pourtant la sémantique même de l'upsert ca devrait être d'éviter cela)."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Pour recréer certaines pages complexes (tableau de bord par exemple), l'interrogation du modèle est tellement coûteuse que vous devez construire des vues maintenues en temps réel via des systèmes d'observateurs d'évènements. Et ces vues sont régulièrement désynchronisées donc rebelotte, vous devez aussi maintenir un batch de cohérence de donnée."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Si on prend un peu de recul, tout ceci était évitable si on avait accepté que mongo est une base pour un cas d'usage : des collections de documents hétérogènes et non liées entre eux. Ce n'est absolument pas fait pour recréer l'ensemble du\u002Fdes modèle(s) d'une application dans lesquels vous modélisez des relations entre vos entités. "}]},{type:a,value:b},{type:c,tag:i,props:{id:A},children:[{type:c,tag:f,props:{href:"#digression",ariaHidden:j,tabIndex:k},children:[{type:c,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:B}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Petite parenthèse utile, j’entends parfois des raccourcis qui consiste à penser que mongo est utilisé pour ses performances ou dans un contexte bigdata."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Sur les performances, c’est discutable et dépendant des cas d’usages. Je m’explique."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Reprenons le blog dont je parlais plus haut. Si vous stockez les commentaires au sein du document “article” alors récupérer l’article et ces commentaires, c’est une requête avec accès à un document."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"L’équivalent dans un mode relationnel suppose une jointure et la récupération de n lignes. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Mécaniquement il y a un overhead."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Par contre si dans mongo vous avez une collection “articles” et une collection “commentaires”, cette fois le nombre d’opérations est supérieur dans mongo."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Bref, comparer les performances entre les deux en lecture ça ne peut se faire que pour votre cas d’usage, votre modélisation. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Intrinsèquement mongo va proposer des solutions pour être plus rapide (embarquer des documents, absence de transactions) mais qui doivent s’accommoder avec vos contraintes de modèles."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"En écriture mongo propose des modes d’acquittements très light qui permettent effectivement d’aller vite (si vous n’avez pas de soucis à perdre des données)."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Et concernant le bigdata ?"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Outre le fait que peu de gens font vraiment du BigData, j’ai un avis tronqué sur la question, je considère au contraire que Mongo est plus adapté pour du prototypage rapide au début d’une application. Je ne l’ai jamais considéré comme une base bigdata et la complexité du sharding dans mongo me faire dire que plus on s’en passe, mieux c’est. Mais j’ai peu d’expériences sur le sujet.  "}]},{type:a,value:b},{type:c,tag:i,props:{id:C},children:[{type:c,tag:f,props:{href:"#le-temps-de-la-migration",ariaHidden:j,tabIndex:k},children:[{type:c,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:D}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"En 2018 nous avons rencontré de nombreux problèmes de stabilité de notre solution maison de synchronisation temps réel mongo vers pg. Le volume de la table à synchroniser(plusieurs centaines de millions d'enregistrements) et les changements réguliers de modèle entraînaient des resynchro depuis le début et coûtaient plusieurs jours d'indisponibilité de nos analytiques. Nous avons donc entamé un retour vers postgresql pour cette table là dans un premier temps."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Puis ensuite nous avons choisi de poursuivre avec postgresql pour les nouvelles fonctionnalités et de migrer progressivement les anciennes tables lorsque l'occasion se présentait."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Et bien après plusieurs années de mongo, le retour au SQL c'est perturbant mais très agréable. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"J'avais beau avoir travaillé sur postgresql, mysql, oracle, sybase, sql server, je me suis senti un peu rouillé :) Et je n'étais pas le seul. "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Aujourd'hui en 2019 les nouveaux développements continuent de se faire sur postgresql. Nous avons repris de nombreuses bonnes habitudes, une meilleure modélisation en base de données, moins de duplication, des requêtes plus compréhensibles et puissantes, des garanties plus fortes sur la cohérence, moins de code défensif pour pallier aux manques de la base, moins de (nouveaux) batchs de cohérences."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Tout n'est pas rose bien sûr, nous avons redécouvert des problématiques classiques de base de données (maintenance du schéma par exemple) mais l'expérience est positive."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Nous n'abandonnons pas mongo, une grosse partie de l'application reste dessus pour l'instant et nous nous autorisons à l'utiliser pour des cas simples, des collections de données sans relations entre elles, des données très hétérogènes etc... "}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Le tout étant juste de savoir quand utiliser l'un ou l'autre."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"\"Si vous n'avez qu'un marteau, tout les problèmes ressemblent à des clous\""}]}]},dir:"\u002Farticles\u002F2019\u002F07\u002F03",path:"\u002Farticles\u002F2019\u002F07\u002F03\u002Fmongodb-vers-postgresql",extension:".md",createdAt:F,updatedAt:F},_img:{"/_ipx/_/author.png":"\u002F_nuxt\u002Fimage\u002Ff10964.png"}}],fetch:{},mutations:void 0}}("text","\n","element","p","li","a","ul",2,"h2","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank","le-bon-vieux-temps","Le bon vieux temps ","première-alerte","Première alerte ","remise-en-question","Remise en question","une-rapidité-de-développement-en-déclin","Une rapidité de développement en déclin","digression","Digression","le-temps-de-la-migration","Le temps de la migration ","img","2022-05-09T21:44:23.975Z")));