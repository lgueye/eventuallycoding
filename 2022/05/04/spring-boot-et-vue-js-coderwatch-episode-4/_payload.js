export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:{"/articles/2022/05/04/spring-boot-et-vue-js-coderwatch-episode-4":{_path:"\u002Farticles\u002F2022\u002F05\u002F04\u002Fspring-boot-et-vue-js-coderwatch-episode-4",_dir:"04",_draft:l,_partial:l,_locale:k,_empty:l,title:m,description:"Voici le 4ème billet de cette série et pour ce billet nous allons parler de développement Backend avec une application Vue.js en Frontend. \nJe vais r...",id:"2073",date:"2022-05-04",categories:["waza"],tags:[n,"spring-boot","startup","vuejs"],img:"pasted-image-0.png",cover:"cover7.jpg",readingTime:{text:"11 min read",minutes:10.38,time:622800,words:2076},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Voici le 4ème billet de cette série et pour ce billet nous allons parler de développement Backend avec une application Vue.js en Frontend. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vais rebalayer les critères de choix côté backend : bases de données, bus de message, design, communication avec le front. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour situer le contexte, ce billet s’inscrit dans une mini-série autour de la création d’un side project. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous n’avez pas lu les premier, mon objectif est de décrire l’ensemble des étapes pour la création d’une application relativement simple :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:"em",props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Fwww.coderwatch.io\u002F",rel:[g]},children:[{type:b,value:"www.coderwatch.io"}]},{type:b,value:" "},{type:a,tag:j,props:{},children:[{type:b,value:": vous permettant d’apprendre des langages et frameworks informatiques en jouant"}]},{type:b,value:". Je vous propose de passer des quizz, de gagner des points, et progressivement de monter dans le classement face aux autres joueurs tout en améliorant vos connaissances."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur chaque billet je donnerais aussi un bilan intermédiaire pour dire où en est Coderwatch, le nombre d’utilisateurs et les métriques importantes. Et ici je vais en profiter pour donner le résultat d’un sondage utilisateur et parler Discovery. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les billets de cette série :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F04\u002Fcest-lhistoire-dun-side-project\u002F",rel:[g]},children:[{type:b,value:"C’est l’histoire d’un side project : cultiver une idée, créer un MVP"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F08\u002Fcoderwatch-episode-2-design-avec-figma-et-procreate\u002F",rel:[g]},children:[{type:b,value:"Coderwatch : épisode 2 : Design avec Figma et Procreate"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F14\u002Fintegration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3\u002F",rel:[g]},children:[{type:b,value:"Intégration et dev web avec Bulma, Vue.js etc... - Coderwatch episode 3"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F05\u002F04\u002Fspring-boot-et-vue-js-coderwatch-episode-4\u002F",rel:[g]},children:[{type:b,value:m}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans le billet précédent je décrivais comment s’était déroulé l’intégration de la maquette de Coderwatch. Mais jusqu’à présent, le site n’était qu’une coquille vide et il fallait encore créer toute la logique métier de Coderwatch. "}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2022\u002F04\u002Fpasted-image-0.png",rel:[g]},children:[{type:a,tag:o,props:{alt:k,src:"\u002Fimages\u002Fpasted-image-0.png"},children:[]}]}]},{type:a,tag:i,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si je suis plus à l’aise en Java, je suis également capable de coder en PHP, Python ou Javascript. J’ai donc repassé en revue les frameworks existants pour être sûr de ne passer à côté de rien. L’objectif reste pour moi d’aller le plus vite possible. Chaque phase de ce side project ne doit pas dépasser 1 semaine. Ici le besoin est simple, faire des API consommées côté Front. Par défaut, je savais en faisant ce tour rapide qu’il y avait 90% de chances que je le fasse en Java car c’est avec ce langage que je suis le plus productif. Mais je voulais quand même jeter un œil par acquis de conscience. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour la forme, j’ai refait un état des lieux rapide des écosystèmes et je me suis rendu compte avec un peu de tristesse qu’en fin de compte, le paysage technologique a peu changé en 15 ans. Essayez de chercher “Les meilleurs Frameworks Web 2022 en Java” sur Google. Il y a une furieuse impression d’avoir les mêmes résultats qu’en 2012, voire même moins. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté Java, les frameworks haute productivité qui avaient la côte il y a 10 ans n’ont pas réussi à passer à l’âge adulte: Roo, Play, Grails, Vert.x, Jhipster, Dropwizard."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Spring boot a su picorer les bons points pour s’imposer comme LE framework web en Java. L’écosystème s’est structuré autour de lui, l’outillage, la connaissance en ligne etc… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ok, j’oublie Quarkus malgré tout et il faudrait que je le teste en profondeur sur un autre side project pour me faire un avis plus fort. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté PHP et Python, même constat, le panorama des frameworks Web 2022 ressemble très fort au panorama 2012 même si pour le coup le langage PHP en lui-même a bien évolué. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté Javascript on retrouve express (2010) et meteor (2012) mais par contre il existe pas mal d’autres frameworks qui ont émergé depuis. Si j’avais plus de temps je regarderais peut être plus en détail ce qui existe mais le survol ne me donne pas une impression de maturité très forte. En fin de compte, j’ai choisi d’avancer et j’ai choisi Spring boot avec lequel je savais que j’aurais une productivité très forte."}]},{type:a,tag:i,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"A l’inverse de ce que j’avais pu faire sur Malt en 2012 (ex Hopwork), l’idée ici n’est pas d’utiliser ce side project comme bac à sables. Bien sûr que je veux et dois apprendre plein de choses côté front et design. Par contre sur le reste, je cherche à aller vite et, fort de l’expérience Malt, je sais que le plus efficace reste de viser une stack simple et éprouvée."}]},{type:a,tag:c,props:{},children:[{type:b,value:"D’autant plus que si l’écosystème semble similaire à celui d’il y a 10 ans, son outillage lui a bien évolué et permet d’être bien plus efficace qu’avant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, côté stack je vais donc choisir :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Java "}]},{type:a,tag:d,props:{},children:[{type:b,value:"Spring Boot pour servir les API en mode "},{type:a,tag:j,props:{},children:[{type:b,value:"stateless"}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Spring security pour la protection des endpoints avec des tokens JWT "}]},{type:a,tag:d,props:{},children:[{type:b,value:"Postgresql pour la base de données"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Liquibase pour la gestion des schémas, montées de versions et patchs de données"}]},{type:a,tag:d,props:{},children:[{type:b,value:"maven pour le build"}]},{type:a,tag:d,props:{},children:[{type:b,value:"JdbcTemplate pour les repository "}]}]},{type:a,tag:i,props:{id:t},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh oui, je suis loin d’apprécier les ORM. Ce n'est pas l’objet de ce billet mais je préfère de loin garder la main sur les requêtes SQL. Pour autant je n’ai pas envie de faire le mapping à la main à chaque fois que je fais une query. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avec JdbcTemplate on peut utiliser "},{type:a,tag:f,props:{href:"https:\u002F\u002Fsimpleflatmapper.org\u002F0104-getting-started-springjdbc.html",rel:[g]},children:[{type:a,tag:j,props:{},children:[{type:b,value:"simpleflatmapper"}]}]},{type:b,value:" qui permet de simplifier énormément le requêtage. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pourquoi pas JOOQ ? J’ai toujours du mal à saisir en quoi c’est une bonne chose d’apprendre un DSL, parfois complexe, pour en fin de compte devoir quand même se pencher sur le SQL produit. Autant apprendre qu’une seule chose… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Alors oui il y a l’argument de la type safety et de l’auto complete dans l’IDE."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour la Type safety, avec simpleflatmapper on associe un bean avec un resultSet. Et intellij est très puissant en terme d’auto complete si on a associé le projet a la vue “Database” ouverte sur le bon schéma. "}]},{type:a,tag:i,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"Maven est un très bon outil mais un des écueils fréquents en Java c’est la multiplication des dépendances transitives qui à la longue peut rendre obsèse une application et pénaliser son temps de démarrage. D’autant plus avec les librairies qui vont scanner le classpath pour leur fonctionnement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il n’existe pas avec Maven de notion de “profile” qui permettrait de dire par exemple : je souhaite telle dépendance mais sur son profil “A”, et donc sans embarquer les dépendances nécessaires à son profil “B”."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour ce side project je vais tenter au maximum de jouer avec les exclusions pour limiter les dépendances transitives inutiles. Et de façon générale je vais tenter de limiter les dépendances externes (comme sur le front d’ailleurs), d’autant plus quand c’est pour récupérer une seule classe par la suite. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour ceux qui se demandent, Coderwatch a un startup time de 4s. Ca, plus le fait qu’une modif mineure dans une classe ne nécessite pas de reload, c’est invisible dans le cycle de dev. "}]},{type:a,tag:i,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous avez suivi jusqu’ici, Coderwatch est constituée d’une application Spring Boot pour son API et d’une application Front en Vue.js."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A partir de là s’ouvre plusieurs choix :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"- fusionner les deux pour n’avoir qu’un seul hébergement à gérer et tout déployer d’un coup"}]},{type:a,tag:c,props:{},children:[{type:b,value:"- déployer chaque appli séparément"}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai pris la première option pour des questions de simplicité mais pour être franc, par mauvaise connaissance à ce moment-là. Au moment où j’ai fait ce choix, je connaissais github pages mais qui, à ma connaissance, ne me permet que de déployer sur un sous dossier et sans custom domain (j’avais tort). Et je ne trouvais pas d’hébergement simple avec custom domain qui soit gratuit. Ma décision à ce moment-là, c’est aussi une question d’économie. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai clairement mal cherché ^^"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je prévois de revenir là dessus plus tard et de déployer le front sur cloudflage-pages qui gère très bien ce genre de cas de figure pour 0 euros. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ceci étant dit, pour cette première version, celle qui tourne actuellement, c’est une seule application qui est déployée. Et c’est très simple à réaliser."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voici les deux applications en terme de répertoire :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:n},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"coderwatch-frontend"}]},{type:a,tag:d,props:{},children:[{type:b,value:"coderwatch-backend"}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je builde en premier le frontend. Ensuite je build le backend, qui utilise maven-resources-plugin pour faire une copie des fichiers de coderwatch-frontend\u002Fdist dans target\u002Fclasses\u002Fstatic\u002F"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Aussi simple que ça."}]},{type:a,tag:i,props:{id:z},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"Là, il faut que je vous en parle !"}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’était pas prévu à l’origine mais j’ai vu passer un tweet dessus et je me suis donc "},{type:a,tag:f,props:{href:B,rel:[g]},children:[{type:b,value:"inscrit à la bêta"}]},{type:b,value:" pour l’utiliser sur Coderwatch. "}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:B,rel:[g]},children:[{type:b,value:"Github Copilot"}]},{type:b,value:" si vous ne connaissez pas, c’est un plugin dans votre IDE, intellij pour mon cas, qui va suggérer le code que vous comptiez écrire en fonction de plusieurs choses :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"le nom de la méthode "}]},{type:a,tag:d,props:{},children:[{type:b,value:"des commentaires au dessus"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les variables à disposition"}]},{type:a,tag:d,props:{},children:[{type:b,value:"etc…"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et ça marche "},{type:a,tag:j,props:{},children:[{type:b,value:"terriblement bien"}]},{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Toute la plomberie se code en un clin d'œil, les repository, les méthodes utilitaires simples etc… Faut vraiment le tester pour comprendre parce qu’on peut facilement être perplexe avant de le faire. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Son seul défaut c’est de constamment proposer quelque chose, ce qui parfois est pénible. Mais franchement, même sur du texte dans un Readme, le résultat est bluffant. "}]},{type:a,tag:i,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:"La rapidité de développement est plutôt au rendez-vous. Je suis très à l’aise en Java, le code Backend, qui est pourtant celui qui contient le plus de logique, ne m’a pas pris longtemps à faire. Le reload auto et le startup time font que je n’ai presque pas de pause dans mon dev."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le plus long paradoxalement c’est côté front, les rebuilds quand on touche à une classe un peu profonde (inclus partout). "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Github Copilot me booste en vitesse. Je me demande si je vais pas 2x plus vite grâce à ça ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, 1 semaine pour boucler cette partie là. "}]},{type:a,tag:i,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:"Parlons un peu chiffres et Discovery. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le lancement officiel remonte à 4 semaines. Le nombre de joueurs est de 40, ça représente +21% depuis le dernier billet de blog mais ça reste encore modeste. "}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2022\u002F05\u002Fpasted-image-0-9.png",rel:[g]},children:[{type:a,tag:o,props:{alt:k,src:"\u002Fimages\u002Fpasted-image-0-9-1024x505.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le nombre de quizz joués est de 46 (+18%). "}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est le moment de récolter des retours et comprendre les utilisateurs. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai fait un sondage avec Typeform il y a deux semaines auquel j’ai reçu environ une dizaine de réponses. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il en ressort plusieurs choses intéressantes."}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"80% ont déjà utilisé des sites de challenges de code auparavant mais sur ces 80%, seuls 16% y sont encore actifs."}]},{type:a,tag:d,props:{},children:[{type:b,value:"le manque de temps, l’absence de progression et le côté répétitif en sont les principales causes"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Sur Coderwatch, 71% attendent d’apprendre des petites astuces. 42% aimerait bien un profil public plus sympa pour montrer leur progression, 28% souhaiterait plus de possibilité de challenger les autres joueurs et 28% pour s'entraîner sur de futurs entretiens "}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"(QCM à choix multiple, la somme dépasse 100% c’est normal)"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"100% des personnes qui sont venus sont des curieux venant de ce blog"}]},{type:a,tag:d,props:{},children:[{type:b,value:"40% d’entre eux sont trop occupés pour revenir souvent, 40% attendent des évolutions, le reste n’en attendait pas grand chose"}]},{type:a,tag:d,props:{},children:[{type:b,value:"A la question, qu’est ce qui vous ferait utiliser Coderwatch davantage ?"},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"42% aimerait un circuit complet sur un langage (la fameuse campagne solo)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"28% aimerait de nouveaux modes de jeu (seul le mode random était dispo)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"certains soulignent la difficulté du jeu et la frustration d’attendre 24h pour recommencer"}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, c’est hyper intéressant. Et si on complète cela avec de la data, on remarque que :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:" sur les 40 joueurs, une dizaine n’a même pas lancé un seul quizz "}]},{type:a,tag:d,props:{},children:[{type:b,value:"une 20aine n’ont pas réussi à dépasser les 20 points. "}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cela met en évidence plusieurs axes très important dans un jeu :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"dans tout les jeux, les premières minutes doivent nous faire comprendre comment on joue pour lancer une partie de façon naturelle =\u003E le circuit d’inscription n’est pas assez fluide"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la difficulté du jeu, si elle est mal dosée, calme tout de suite les premiers utilisateurs"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"De tous les retours, ce sont ceux-là que j’ai traité en premier à la réception de cette enquête. Parlons objectif chiffré :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"un nouveau joueur doit avoir démarré un quizz dans la même journée "}]},{type:a,tag:d,props:{},children:[{type:b,value:"un nouveau joueur doit dépasser les 20 points d’XP dans les deux premiers jours"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le week end est des 16 et 17 avril ont donc été sortis :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"une refonte du circuit d’inscription pour enlever 2 étapes"}]},{type:a,tag:d,props:{},children:[{type:b,value:"une suggestion de démarrer une partie tout de suite après l’inscription"}]},{type:a,tag:d,props:{},children:[{type:b,value:"un système de "},{type:a,tag:j,props:{},children:[{type:b,value:"barre d’énergie"}]},{type:b,value:" permettant d’annuler des mauvaises réponses et donc ne pas se faire éliminer tout de suite "}]},{type:a,tag:d,props:{},children:[{type:b,value:"un "},{type:a,tag:j,props:{},children:[{type:b,value:"nouveau mode de jeu"}]},{type:b,value:" : Classical"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La suite sera sans doute d’améliorer la fiche du joueur pour qu’elle soit plus sexy et plus engageante pour progresser. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre je commence à ressentir des limites :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Côté design, je ne suis pas mécontent de ce que j’ai produit mais c’est à des années lumières de ce que j’ai en tête. Le besoin d’un bon designer se fait sentir. "}]},{type:a,tag:d,props:{},children:[{type:b,value:"je ne peux pas me reposer uniquement sur les quelques lecteurs de ce blog, qui sont essentiellement des curieux. Je dois trouver un moyen de parler de ce jeu à des personnes qui pourraient être intéressées."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il va falloir que je trouve une solution."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Merci de m’avoir lu jusque là. Le billet suivant parlera sans doute de la partie Ops\u002FDéploiement. On parlera notamment de Clever Cloud et Cloudflare-pages."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A bientôt"}]}],toc:{title:k,searchDepth:h,depth:h,links:[{id:p,depth:h,text:q},{id:r,depth:h,text:s},{id:t,depth:h,text:u},{id:v,depth:h,text:w},{id:x,depth:h,text:y},{id:z,depth:h,text:A},{id:C,depth:h,text:D},{id:E,depth:h,text:F}]}},_type:"markdown",_id:"content:articles:2022:05:04:spring-boot-et-vue-js-coderwatch-episode-4.md",_source:"content",_file:"articles\u002F2022\u002F05\u002F04\u002Fspring-boot-et-vue-js-coderwatch-episode-4.md",_extension:"md"}},prerenderedAt:1677328061568}}("element","text","p","li","ul","a","nofollow",2,"h2","strong","",false,"Spring Boot et Vue.js - Coderwatch episode 4","coderwatch","img","quelle-technologie-pour-le-backend","Quelle technologie pour le backend ?","objectif-the-boring-stack","Objectif, the boring stack","jdbctemplate-et-pas-dorm","JdbcTemplate ? Et pas d’ORM ?","le-build-et-les-dépendances-à-surveiller-comme-le-petit-lait","Le build et les dépendances, à surveiller comme le petit lait","packager-une-appli-vuejs-avec-une-application-spring-boot","Packager une appli Vue.js avec une application Spring boot ","github-copilot-linvité-surprise","Github Copilot, l’invité surprise","https:\u002F\u002Fcopilot.github.com\u002F","bilan-positif-sur-le-cycle-de-dev-backfront","Bilan positif sur le cycle de dev back\u002Ffront","les-chiffres-de-la-semaine-sur-coderwatch","Les chiffres de la semaine sur Coderwatch"))