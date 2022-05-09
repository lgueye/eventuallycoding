__NUXT_JSONP__("/2022/05/04/spring-boot-et-vue-js-coderwatch-episode-4", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){return {data:[{article:{slug:"spring-boot-et-vue-js-coderwatch-episode-4",title:t,date:"2022-05-04",categories:["waza"],tags:["coderwatch","spring-boot","startup","vuejs"],img:"pasted-image-0.png",toc:[{id:u,depth:l,text:v},{id:w,depth:l,text:x},{id:y,depth:l,text:z},{id:A,depth:l,text:B},{id:C,depth:l,text:D},{id:E,depth:l,text:F},{id:G,depth:l,text:H},{id:I,depth:l,text:J}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Voici le 4ème billet de cette série et pour ce billet nous allons parler de développement Backend avec une application Vue.js en Frontend. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vais rebalayer les critères de choix côté backend : bases de données, bus de message, design, communication avec le front. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour situer le contexte, ce billet s’inscrit dans une mini-série autour de la création d’un side project. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous n’avez pas lu les premier, mon objectif est de décrire l’ensemble des étapes pour la création d’une application relativement simple :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"em",props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Fwww.coderwatch.io\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"www.coderwatch.io"}]},{type:a,value:" "},{type:b,tag:s,props:{},children:[{type:a,value:": vous permettant d’apprendre des langages et frameworks informatiques en jouant"}]},{type:a,value:". Je vous propose de passer des quizz, de gagner des points, et progressivement de monter dans le classement face aux autres joueurs tout en améliorant vos connaissances."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sur chaque billet je donnerais aussi un bilan intermédiaire pour dire où en est Coderwatch, le nombre d’utilisateurs et les métriques importantes. Et ici je vais en profiter pour donner le résultat d’un sondage utilisateur et parler Discovery. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Les billets de cette série :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F04\u002Fcest-lhistoire-dun-side-project\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"C’est l’histoire d’un side project : cultiver une idée, créer un MVP"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F08\u002Fcoderwatch-episode-2-design-avec-figma-et-procreate\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"Coderwatch : épisode 2 : Design avec Figma et Procreate"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F14\u002Fintegration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"Intégration et dev web avec Bulma, Vue.js etc... - Coderwatch episode 3"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F05\u002F04\u002Fspring-boot-et-vue-js-coderwatch-episode-4\u002F",rel:[h,i,j],target:k},children:[{type:a,value:t}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans le billet précédent je décrivais comment s’était déroulé l’intégration de la maquette de Coderwatch. Mais jusqu’à présent, le site n’était qu’une coquille vide et il fallait encore créer toute la logique métier de Coderwatch. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2022\u002F04\u002Fpasted-image-0.png",rel:[h,i,j],target:k},children:[{type:b,tag:K,props:{alt:L,src:"\u002Fimages\u002Fpasted-image-0.png"},children:[]}]}]},{type:a,value:c},{type:b,tag:m,props:{id:u},children:[{type:b,tag:f,props:{href:"#quelle-technologie-pour-le-backend-",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si je suis plus à l’aise en Java, je suis également capable de coder en PHP, Python ou Javascript. J’ai donc repassé en revue les frameworks existants pour être sûr de ne passer à côté de rien. L’objectif reste pour moi d’aller le plus vite possible. Chaque phase de ce side project ne doit pas dépasser 1 semaine. Ici le besoin est simple, faire des API consommées côté Front. Par défaut, je savais en faisant ce tour rapide qu’il y avait 90% de chances que je le fasse en Java car c’est avec ce langage que je suis le plus productif. Mais je voulais quand même jeter un œil par acquis de conscience. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour la forme, j’ai refait un état des lieux rapide des écosystèmes et je me suis rendu compte avec un peu de tristesse qu’en fin de compte, le paysage technologique a peu changé en 15 ans. Essayez de chercher “Les meilleurs Frameworks Web 2022 en Java” sur Google. Il y a une furieuse impression d’avoir les mêmes résultats qu’en 2012, voire même moins. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Côté Java, les frameworks haute productivité qui avaient la côte il y a 10 ans n’ont pas réussi à passer à l’âge adulte: Roo, Play, Grails, Vert.x, Jhipster, Dropwizard."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Spring boot a su picorer les bons points pour s’imposer comme LE framework web en Java. L’écosystème s’est structuré autour de lui, l’outillage, la connaissance en ligne etc… "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ok, j’oublie Quarkus malgré tout et il faudrait que je le teste en profondeur sur un autre side project pour me faire un avis plus fort. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Côté PHP et Python, même constat, le panorama des frameworks Web 2022 ressemble très fort au panorama 2012 même si pour le coup le langage PHP en lui-même a bien évolué. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Côté Javascript on retrouve express (2010) et meteor (2012) mais par contre il existe pas mal d’autres frameworks qui ont émergé depuis. Si j’avais plus de temps je regarderais peut être plus en détail ce qui existe mais le survol ne me donne pas une impression de maturité très forte. En fin de compte, j’ai choisi d’avancer et j’ai choisi Spring boot avec lequel je savais que j’aurais une productivité très forte."}]},{type:a,value:c},{type:b,tag:m,props:{id:w},children:[{type:b,tag:f,props:{href:"#objectif-the-boring-stack",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A l’inverse de ce que j’avais pu faire sur Malt en 2012 (ex Hopwork), l’idée ici n’est pas d’utiliser ce side project comme bac à sables. Bien sûr que je veux et dois apprendre plein de choses côté front et design. Par contre sur le reste, je cherche à aller vite et, fort de l’expérience Malt, je sais que le plus efficace reste de viser une stack simple et éprouvée."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"D’autant plus que si l’écosystème semble similaire à celui d’il y a 10 ans, son outillage lui a bien évolué et permet d’être bien plus efficace qu’avant."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bref, côté stack je vais donc choisir :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Java "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Spring Boot pour servir les API en mode "},{type:b,tag:s,props:{},children:[{type:a,value:"stateless"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Spring security pour la protection des endpoints avec des tokens JWT "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Postgresql pour la base de données"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Liquibase pour la gestion des schémas, montées de versions et patchs de données"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"maven pour le build"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"JdbcTemplate pour les repository "}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:y},children:[{type:b,tag:f,props:{href:"#jdbctemplate--et-pas-dorm-",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Eh oui, je suis loin d’apprécier les ORM. Ce n'est pas l’objet de ce billet mais je préfère de loin garder la main sur les requêtes SQL. Pour autant je n’ai pas envie de faire le mapping à la main à chaque fois que je fais une query. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Avec JdbcTemplate on peut utiliser "},{type:b,tag:f,props:{href:"https:\u002F\u002Fsimpleflatmapper.org\u002F0104-getting-started-springjdbc.html",rel:[h,i,j],target:k},children:[{type:b,tag:s,props:{},children:[{type:a,value:"simpleflatmapper"}]}]},{type:a,value:" qui permet de simplifier énormément le requêtage. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et pourquoi pas JOOQ ? J’ai toujours du mal à saisir en quoi c’est une bonne chose d’apprendre un DSL, parfois complexe, pour en fin de compte devoir quand même se pencher sur le SQL produit. Autant apprendre qu’une seule chose… "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Alors oui il y a l’argument de la type safety et de l’auto complete dans l’IDE."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour la Type safety, avec simpleflatmapper on associe un bean avec un resultSet. Et intellij est très puissant en terme d’auto complete si on a associé le projet a la vue “Database” ouverte sur le bon schéma. "}]},{type:a,value:c},{type:b,tag:m,props:{id:A},children:[{type:b,tag:f,props:{href:"#le-build-et-les-d%C3%A9pendances-%C3%A0-surveiller-comme-le-petit-lait",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Maven est un très bon outil mais un des écueils fréquents en Java c’est la multiplication des dépendances transitives qui à la longue peut rendre obsèse une application et pénaliser son temps de démarrage. D’autant plus avec les librairies qui vont scanner le classpath pour leur fonctionnement."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Il n’existe pas avec Maven de notion de “profile” qui permettrait de dire par exemple : je souhaite telle dépendance mais sur son profil “A”, et donc sans embarquer les dépendances nécessaires à son profil “B”."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour ce side project je vais tenter au maximum de jouer avec les exclusions pour limiter les dépendances transitives inutiles. Et de façon générale je vais tenter de limiter les dépendances externes (comme sur le front d’ailleurs), d’autant plus quand c’est pour récupérer une seule classe par la suite. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour ceux qui se demandent, Coderwatch a un startup time de 4s. Ca, plus le fait qu’une modif mineure dans une classe ne nécessite pas de reload, c’est invisible dans le cycle de dev. "}]},{type:a,value:c},{type:b,tag:m,props:{id:C},children:[{type:b,tag:f,props:{href:"#packager-une-appli-vuejs-avec-une-application-spring-boot",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous avez suivi jusqu’ici, Coderwatch est constituée d’une application Spring Boot pour son API et d’une application Front en Vue.js."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A partir de là s’ouvre plusieurs choix :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"- fusionner les deux pour n’avoir qu’un seul hébergement à gérer et tout déployer d’un coup"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"- déployer chaque appli séparément"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J’ai pris la première option pour des questions de simplicité mais pour être franc, par mauvaise connaissance à ce moment-là. Au moment où j’ai fait ce choix, je connaissais github pages mais qui, à ma connaissance, ne me permet que de déployer sur un sous dossier et sans custom domain (j’avais tort). Et je ne trouvais pas d’hébergement simple avec custom domain qui soit gratuit. Ma décision à ce moment-là, c’est aussi une question d’économie. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J’ai clairement mal cherché ^^"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je prévois de revenir là dessus plus tard et de déployer le front sur cloudflage-pages qui gère très bien ce genre de cas de figure pour 0 euros. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ceci étant dit, pour cette première version, celle qui tourne actuellement, c’est une seule application qui est déployée. Et c’est très simple à réaliser."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voici les deux applications en terme de répertoire :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"coderwatch\n"},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"coderwatch-frontend"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"coderwatch-backend"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je builde en premier le frontend. Ensuite je build le backend, qui utilise maven-resources-plugin pour faire une copie des fichiers de coderwatch-frontend\u002Fdist dans target\u002Fclasses\u002Fstatic\u002F"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Aussi simple que ça."}]},{type:a,value:c},{type:b,tag:m,props:{id:E},children:[{type:b,tag:f,props:{href:"#github-copilot-linvit%C3%A9-surprise",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Là, il faut que je vous en parle !"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"C’était pas prévu à l’origine mais j’ai vu passer un tweet dessus et je me suis donc "},{type:b,tag:f,props:{href:M,rel:[h,i,j],target:k},children:[{type:a,value:"inscrit à la bêta"}]},{type:a,value:" pour l’utiliser sur Coderwatch. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:M,rel:[h,i,j],target:k},children:[{type:a,value:"Github Copilot"}]},{type:a,value:" si vous ne connaissez pas, c’est un plugin dans votre IDE, intellij pour mon cas, qui va suggérer le code que vous comptiez écrire en fonction de plusieurs choses :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le nom de la méthode "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"des commentaires au dessus"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"les variables à disposition"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"etc…"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et ça marche "},{type:b,tag:s,props:{},children:[{type:a,value:"terriblement bien"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Toute la plomberie se code en un clin d'œil, les repository, les méthodes utilitaires simples etc… Faut vraiment le tester pour comprendre parce qu’on peut facilement être perplexe avant de le faire. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Son seul défaut c’est de constamment proposer quelque chose, ce qui parfois est pénible. Mais franchement, même sur du texte dans un Readme, le résultat est bluffant. "}]},{type:a,value:c},{type:b,tag:m,props:{id:G},children:[{type:b,tag:f,props:{href:"#bilan-positif-sur-le-cycle-de-dev-backfront",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La rapidité de développement est plutôt au rendez-vous. Je suis très à l’aise en Java, le code Backend, qui est pourtant celui qui contient le plus de logique, ne m’a pas pris longtemps à faire. Le reload auto et le startup time font que je n’ai presque pas de pause dans mon dev."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le plus long paradoxalement c’est côté front, les rebuilds quand on touche à une classe un peu profonde (inclus partout). "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Github Copilot me booste en vitesse. Je me demande si je vais pas 2x plus vite grâce à ça ?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bref, 1 semaine pour boucler cette partie là. "}]},{type:a,value:c},{type:b,tag:m,props:{id:I},children:[{type:b,tag:f,props:{href:"#les-chiffres-de-la-semaine-sur-coderwatch",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Parlons un peu chiffres et Discovery. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le lancement officiel remonte à 4 semaines. Le nombre de joueurs est de 40, ça représente +21% depuis le dernier billet de blog mais ça reste encore modeste. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2022\u002F05\u002Fpasted-image-0-9.png",rel:[h,i,j],target:k},children:[{type:b,tag:K,props:{alt:L,src:"\u002Fimages\u002Fpasted-image-0-9-1024x505.png"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le nombre de quizz joués est de 46 (+18%). "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"C’est le moment de récolter des retours et comprendre les utilisateurs. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J’ai fait un sondage avec Typeform il y a deux semaines auquel j’ai reçu environ une dizaine de réponses. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Il en ressort plusieurs choses intéressantes."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"80% ont déjà utilisé des sites de challenges de code auparavant mais sur ces 80%, seuls 16% y sont encore actifs."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"le manque de temps, l’absence de progression et le côté répétitif en sont les principales causes"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Sur Coderwatch, 71% attendent d’apprendre des petites astuces. 42% aimerait bien un profil public plus sympa pour montrer leur progression, 28% souhaiterait plus de possibilité de challenger les autres joueurs et 28% pour s'entraîner sur de futurs entretiens "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(QCM à choix multiple, la somme dépasse 100% c’est normal)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"100% des personnes qui sont venus sont des curieux venant de ce blog"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"40% d’entre eux sont trop occupés pour revenir souvent, 40% attendent des évolutions, le reste n’en attendait pas grand chose"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"A la question, qu’est ce qui vous ferait utiliser Coderwatch davantage ?\n"},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"42% aimerait un circuit complet sur un langage (la fameuse campagne solo)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"28% aimerait de nouveaux modes de jeu (seul le mode random était dispo)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"certains soulignent la difficulté du jeu et la frustration d’attendre 24h pour recommencer"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bref, c’est hyper intéressant. Et si on complète cela avec de la data, on remarque que :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:" sur les 40 joueurs, une dizaine n’a même pas lancé un seul quizz "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"une 20aine n’ont pas réussi à dépasser les 20 points. "}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cela met en évidence plusieurs axes très important dans un jeu :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"dans tout les jeux, les premières minutes doivent nous faire comprendre comment on joue pour lancer une partie de façon naturelle =\u003E le circuit d’inscription n’est pas assez fluide"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"la difficulté du jeu, si elle est mal dosée, calme tout de suite les premiers utilisateurs"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"De tous les retours, ce sont ceux-là que j’ai traité en premier à la réception de cette enquête. Parlons objectif chiffré :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"un nouveau joueur doit avoir démarré un quizz dans la même journée "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"un nouveau joueur doit dépasser les 20 points d’XP dans les deux premiers jours"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le week end est des 16 et 17 avril ont donc été sortis :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"une refonte du circuit d’inscription pour enlever 2 étapes"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"une suggestion de démarrer une partie tout de suite après l’inscription"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"un système de "},{type:b,tag:s,props:{},children:[{type:a,value:"barre d’énergie"}]},{type:a,value:" permettant d’annuler des mauvaises réponses et donc ne pas se faire éliminer tout de suite "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"un "},{type:b,tag:s,props:{},children:[{type:a,value:"nouveau mode de jeu"}]},{type:a,value:" : Classical"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La suite sera sans doute d’améliorer la fiche du joueur pour qu’elle soit plus sexy et plus engageante pour progresser. "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Par contre je commence à ressentir des limites :"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Côté design, je ne suis pas mécontent de ce que j’ai produit mais c’est à des années lumières de ce que j’ai en tête. Le besoin d’un bon designer se fait sentir. "}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"je ne peux pas me reposer uniquement sur les quelques lecteurs de ce blog, qui sont essentiellement des curieux. Je dois trouver un moyen de parler de ce jeu à des personnes qui pourraient être intéressées."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Il va falloir que je trouve une solution."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Merci de m’avoir lu jusque là. Le billet suivant parlera sans doute de la partie Ops\u002FDéploiement. On parlera notamment de Clever Cloud et Cloudflare-pages."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A bientôt"}]}]},dir:"\u002Farticles\u002F2022\u002F05\u002F04",path:"\u002Farticles\u002F2022\u002F05\u002F04\u002Fspring-boot-et-vue-js-coderwatch-episode-4",extension:".md",createdAt:N,updatedAt:N},_img:{"/_ipx/_/author.png":"\u002F_nuxt\u002Fimage\u002Ff10964.png"}}],fetch:{},mutations:void 0}}("text","element","\n","p","li","a","ul","nofollow","noopener","noreferrer","_blank",2,"h2","true",-1,"span","icon","icon-link","strong","Spring Boot et Vue.js - Coderwatch episode 4","quelle-technologie-pour-le-backend-","Quelle technologie pour le backend ?","objectif-the-boring-stack","Objectif, the boring stack","jdbctemplate--et-pas-dorm-","JdbcTemplate ? Et pas d’ORM ?","le-build-et-les-dépendances-à-surveiller-comme-le-petit-lait","Le build et les dépendances, à surveiller comme le petit lait","packager-une-appli-vuejs-avec-une-application-spring-boot","Packager une appli Vue.js avec une application Spring boot ","github-copilot-linvité-surprise","Github Copilot, l’invité surprise","bilan-positif-sur-le-cycle-de-dev-backfront","Bilan positif sur le cycle de dev back\u002Ffront","les-chiffres-de-la-semaine-sur-coderwatch","Les chiffres de la semaine sur Coderwatch","img","","https:\u002F\u002Fcopilot.github.com\u002F","2022-05-09T21:44:23.979Z")));