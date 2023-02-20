export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:{"/articles/2016/03/07/connecteur-mongo-postgresql":{_path:"\u002Farticles\u002F2016\u002F03\u002F07\u002Fconnecteur-mongo-postgresql",_dir:"07",_draft:i,_partial:i,_locale:l,_empty:i,title:"Connecteur Mongo Postgresql",description:"[![47f0a20a1f9df18484d7972fa41472b8[1]](\u002Fimages\u002Faa1fc-47f0a20a1f9df18484d7972fa41472b81.jpg)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2016\u002F03\u002Fa...",id:"1235",date:"2016-03-07",categories:["waza"],tags:["analytique","mongodb",m],img:"aa1fc-47f0a20a1f9df18484d7972fa41472b81.jpg",cover:"cover4.jpg",readingTime:{text:"6 min read",minutes:5.375,time:322500,words:1075},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2016\u002F03\u002Faa1fc-47f0a20a1f9df18484d7972fa41472b81.jpg",rel:[e]},children:[{type:a,tag:n,props:{alt:"47f0a20a1f9df18484d7972fa41472b81",src:"\u002Fimages\u002Faa1fc-47f0a20a1f9df18484d7972fa41472b81.jpg"},children:[]}]},{type:b,value:" "},{type:a,tag:"strong",props:{},children:[{type:b,value:"TLDR;"}]},{type:b,value:" on a développé un connecteur permettant de déverser votre base mongo vers Posgresql "},{type:a,tag:d,props:{href:j,rel:[e]},children:[{type:b,value:"disponible sur Github"}]},{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Depuis plusieurs années déjà on vous ressasse sans arrêt que vos données forment une grosse partie du capital d'une société. Et c'est encore plus vrai pour une startup web. C'est même assez fréquent qu'une startup soit aujourd'hui capable de lever de l'argent par les données qu'elle possède sans être rentable intrinséquement. Bien sûr beaucoup de vendeurs de solutions tentent par la même occasion de vous vendre des bases de données capable de supporter de gros volumes, des solutions de reporting etc... Mais on ne peut ignorer le point, à l'heure du numérique savoir exploiter ces données est crucial :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"pour rapidement faire un état des lieux de la santé de sa boite (analyse descriptive)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"pour identifier des leviers de croissance par analyse (fouille de données)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"pour prédire des comportements (pour soi ou pour les utilisateurs via des analyses prédictives)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Très bien. Sauf qu'il est possible que vous ayez intégré des solutions "},{type:a,tag:d,props:{href:"https:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FNoSQL",rel:[e]},children:[{type:b,value:"NoSql"}]},{type:b,value:" dans vos applications. Or ces bases sont souvent loin d'avoir le même écosystème mature que les bases relationnelles quand on veut utiliser des outils d'analyse de données."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, ce billet ne va pas vous parler de BI, de nosql, de big data, de machine learning. Non, je vais juste vous présenter un connecteur "},{type:a,tag:d,props:{href:"https:\u002F\u002Fwww.mongodb.org\u002F",rel:[e]},children:[{type:b,value:"mongo"}]},{type:b,value:" vers "},{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.postgresql.org\u002F",rel:[e]},children:[{type:b,value:m}]},{type:b,value:" pour répondre en partie au problème."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Donc voilà de notre côté nous avons souhaité utiliser des outils d'analyses de données mais nous utilisons majoritairement mongodb. Et nous n'avons pas été emballé par le peu de solutions disponibles. Sur une journée nous avons donc essayé de regarder plusieurs solutions. Pourquoi juste une journée ? Parce qu'il fallait que ce soit simple à comprendre, simple à implémenter. Je ne vous cache pas que certaines solutions ont peut être été écarté trop vite mais si jamais vous faites partie d'une des ces boites, voici quelques petits conseils :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"une vidéo bling bling en motion design c'est super mais sans documentation, capture d'écran, environnement de démo me permettant de savoir ce que je vais vraiment faire avec un produit, je zappe"}]},{type:a,tag:f,props:{},children:[{type:b,value:"pas de page de prix ou un simple \"contactez-nous\", je passe. En général ca veut dire qu'on va y perdre un bras."}]},{type:a,tag:f,props:{},children:[{type:b,value:"modèle SAAS sans période d'essai, je zappe"}]}]},{type:a,tag:k,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par clés en main, j'entends que le produit propose soit solution complète d'interrogation et visualisation des données."}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.pentaho.com\u002Ffr\u002Fanalytics-for-mongodb",rel:[e]},children:[{type:b,value:"Pentaho"}]},{type:b,value:" (ne semble pas dispo pour mongo3, prix non communiqué, pas clair sur ce que ca permet de faire vraiment, la vidéo avec des citations Mc Kinsey et Gartner c'est bien pour les lecteurs de 01 informatique mais ca manque un peu de profondeur)"}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fslamdata.com\u002F",rel:[e]},children:[{type:b,value:"slamdata"}]},{type:b,value:"  (vive la vidéo qui sert à rien). J'ai téléchargé le produit, ce ne fut pas très intuitif. En dehors de ça il semble y avoir des idées mais la prise en main est vraiment aride."}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.metabase.com\u002F",rel:[e]},children:[{type:b,value:"Metabase"}]},{type:b,value:"  piste très intéressante. Mais malheureusement très peu mature encore. Le support de mongodb n'est pas parfait, le produit ne sait pas extraire les dates des ObjectId et ne sait pas encore faire de courbes de cumulative count. Mais à mon avis il faut vraiment regarder à nouveau dans un an."}]}]},{type:a,tag:k,props:{id:q},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur le papier, pourquoi pas. "},{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.unityjdbc.com\u002Fmongojdbc\u002Fmongo_jdbc.php#start",rel:[e]},children:[{type:b,value:"UnityJdbc"}]},{type:b,value:" c'est un driver JDBC pour parler avec Mongo. Le prix de la license serveur étant non communiqué, j'ai zappé. Mais si quelqu'un à testé je suis preneur de retour."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En théorie ça ne paraît pas déconnant de pouvoir transcrire des requêtes mongo en SQL. J'ose même espérer qu'un jour mongo le proposera en natif (Vous rigolez peut être mais ce serait pas les seuls à avoir réimplementé un SQL like sur leur moteur). Je suis vraiment peu fan de json pour faire des requêtes. Mais connaissant plutôt bien Mongo et ces limitations, je me doute qu'il n'est pas possible de tout traduire à partir du SQL doncj je serais vraiment preneur de retour sur ce driver si vous en avez."}]},{type:a,tag:k,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"On a fini par regarder des solutions dont le principe est souvent le même, il s'agit de déverser les données de mongo vers une base de données relationnelles. Ensuite le choix de l'outil d'analyse de données est complètement libre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour répliquer des données de mongo il y a une méthode relativement bien accepté qui est de lire les "},{type:a,tag:d,props:{href:"https:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Fcore\u002Freplica-set-oplog\u002F",rel:[e]},children:[{type:b,value:"oplogs de mongo"}]},{type:b,value:" en ouvrait un "},{type:a,tag:d,props:{href:"https:\u002F\u002Fdocs.mongodb.org\u002Fmanual\u002Ftutorial\u002Fcreate-tailable-cursor\u002F",rel:[e]},children:[{type:b,value:"tailable cursor"}]},{type:b,value:" et de streamer les modifications vers le système cible."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2016\u002F03\u002F9d56a-oplog.jpg",rel:[e]},children:[{type:a,tag:n,props:{alt:"oplog",src:"\u002Fimages\u002F9d56a-oplog.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous pouvez le faire vous-mêmes en assemblant des briques génériques :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fcamel.apache.org\u002Fmongodb.html",rel:[e]},children:[{type:b,value:"Camel et son connecteur mongo"}]},{type:b,value:". On a testé mais le connecteur semblait vouloir lire des infos dans system.namespaces, collection qui ne semble pas exister donc cela provoquait des erreurs."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Flume, malheureusement nous n'avons pas trouvé de plugin pour lire dans mongo (seulement pour y écrire)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"Logstash, la brique pour lire dans mongo n'a pas daigné fonctionner."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sinon il existe des outils dédiées à cela :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fslamdata.com\u002Fsolutions\u002Fbi-connector.html",rel:[e]},children:[{type:b,value:"Le connecteur BI de SlamData"}]},{type:b,value:", la qualité de la doc fait que c'est resté inaccessible pour nous"}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fstripe\u002Fmosql",rel:[e]},children:[{type:b,value:"mosql"}]},{type:b,value:" ca marche très bien !! Mais ca ne gère pas les tableaux embarqués et le projet semble mort depuis un an. Donc..."}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Fwww.mongodb.com\u002Fproducts\u002Fbi-connector",rel:[e]},children:[{type:b,value:"le connecteur BI officiel de Mongodb"}]},{type:b,value:". Il ne peut être utilisé qu'avec la license entreprise de Mongo. La dernière fois que je me suis renseigné c'était du 10k par machine. Un peu prohibitif pour une startup donc..."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et puis au hasard d'une réponse sur Twitter on est tombé sur ca : "},{type:a,tag:d,props:{href:u,rel:[e]},children:[{type:b,value:u}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cet outil sort de chez mongo même s'il n'est pas supporté. Il a sans doute du être développé avant le connecteur BI officiel.  On peut craindre par contre qu'il finisse par ne plus être maintenu pour ne pas faire d'ombre au connecteur officiel. Mais sa license permet de le forker si besoin."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et il ne gère pas de sortie vers postgresql mais il peut être facilement extensible."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons donc tenté de coder l'extension et voici le résultat "},{type:a,tag:d,props:{href:j,rel:[e]},children:[{type:b,value:j}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est un prototype. Il fonctionne déjà sur certains de nos cas d'usage et nous pensons continuer avec cette solution pour alimenter une base postgresql."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous souhaitez l'utiliser, vous pouvez l'installer via pip. Ensuite il vous suffit de déclarer un fichier de mappings pour définir les champs et les collections que vous voulez suivre sur Mongo :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"{\n\"my_schema\": {\n\"my_table\" : {\n\"_id\" : {\"dest\" : \"_id\", \"type\" : \"TEXT CONSTRAINT mytable_PK PRIMARY KEY\"}, \"description\" : {\"dest\" : \"description\", \"type\" : \"TEXT\"}, \"enable\" : {\"dest\" : \"enable\", \"type\"  : \"boolean\"}, \"myobject_subproperty\" : {\"dest\" : \"subproperty\", \"type\" : \"TEXT\"}\n}\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Toutes les opérations dans l'oplog qui concerne cette table seront automatiquement déversé dans my_table."}]},{type:a,tag:c,props:{},children:[{type:b,value:"N'hésitez pas à prendre connaissance de son fonctionnement, de l'utiliser et à faire des retours."}]},{type:a,tag:c,props:{},children:[{type:b,value:"a+"}]}],toc:{title:l,searchDepth:h,depth:h,links:[{id:o,depth:h,text:p},{id:q,depth:h,text:r},{id:s,depth:h,text:t}]}},_type:"markdown",_id:"content:articles:2016:03:07:connecteur-mongo-postgresql.md",_source:"content",_file:"articles\u002F2016\u002F03\u002F07\u002Fconnecteur-mongo-postgresql.md",_extension:"md"}},prerenderedAt:1676930434866}}("element","text","p","a","nofollow","li","ul",2,false,"https:\u002F\u002Fgithub.com\u002FHopwork\u002Fmongo-connector-postgresql","h2","","postgresql","img","les-solutions-clés-en-main","Les solutions \"clés en main\"","la-solution-exotique","La solution exotique","les-solution-à-la-mimine","Les solution à la mimine","https:\u002F\u002Fgithub.com\u002Fmongodb-labs\u002Fmongo-connector"))