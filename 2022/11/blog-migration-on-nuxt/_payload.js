export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V){return {data:{"/articles/2022/11/blog-migration-on-nuxt":{_path:"\u002Farticles\u002F2022\u002F11\u002Fblog-migration-on-nuxt",_dir:"11",_draft:l,_partial:l,_locale:p,_empty:l,title:"Migration du Blog sur Nuxt",description:"On va parler de ce qui se passe sous le capot aujourd'hui et quelle sont les technos qui font tourner eventuallycoding.com. ",id:"7",date:"2022-11-20",tags:["nuxt"],cover:"nuxt.png",readingTime:{text:"6 min read",minutes:5.98,time:358800,words:1196},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Aujourd'hui je vous propose de voir comment ça se passe sous le capot aujourd'hui et quelle sont les technos qui font tourner eventuallycoding.com."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, on va parler de Nuxt, de Nuxt-Content, de Tailwind, de GithubActions et de Netlify"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais avant, un peu de mise en contexte. Mais si l'origine de ce blog ne vous intéresse pas, vous pouvez tout de suite sauter ce chapitre pour aller au suivant."}]},{type:a,tag:h,props:{id:q},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:"En realité, ce blog avait un autre nom auparavant : hakanai.free.fr."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Hakanai.free.fr est apparu en 2000, c'était un site de "},{type:a,tag:d,props:{href:"https:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FFansub",rel:[e]},children:[{type:b,value:"Fansub"}]},{type:b,value:" affilié à Mangapartout, un gros groupe de fansub de l'époque aujourd'hui disparu. Pour l'anecdote, même s'il s'agissait d'une activité assez différente, je versionnais mes sous-titres sous SVN :)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'écrivais bien des articles tech à l'époque, mais ils étaient plutôt disponibles sur "},{type:a,tag:d,props:{href:"https:\u002F\u002Fhugo.developpez.com\u002F",rel:[e]},children:[{type:b,value:"developpez.com"}]},{type:b,value:" jusque 2007."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En 2007, en parralèle de developpez.com, je recyclais hakanai.free.fr en blog tech, parlant à l'époque de PHP, de Java, de Java Swing et j'en passe. J'ai progressivement abandonné developpez.com il y a une dizaine d'années pour me concentrer sur le blog qui a fini par changer de nom en 2013 pour devenir eventuallycoding.com."}]},{type:a,tag:h,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au tout début, ce blog a utilisé Joomla jusque 2011. Le changement vers Wordpress s'est fait de façon naturelle, car ce soft était la référence absolue en matière de blogging. Il a longtemps été hebergé sur un serveur dédié loué par "},{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.lateral-thoughts.com\u002F",rel:[e]},children:[{type:b,value:"Lateral-thoughts"}]},{type:b,value:" avant d'être transféré sur wordpress.com plus tard pour plus de facilité d'administration et de maintenance."}]},{type:a,tag:h,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pourquoi partir de wordpress me direz-vous ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour trois raisons très simples."},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nLa première, c'est le cout du service. Mon blog ne rapporte pas d'argent et ne cherche pas à le faire. J'avoue que ça m'embête de mettre 300 euros par an (25€\u002Fmois) pour le maintenir. Ne me faites pas dire ce que je n'ai pas dit, c'est normal qu'un service d'hébergement coute de l'argent, c'est juste que pour mon cas je pensais pouvoir trouver une alternative plus économique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La seconde, c'est le cout énergétique. Ça peut paraître bête, sachant que je suis loin d'être exemplaire sur le sujet, mais j'ai souhaité réduire l'impact carbone de ce blog. Un blog de nos jours, c'est moins dans l'air du temps et l'audience reste faible. Alors faire tourner un serveur 24\u002F24, c'est dommage pour ça."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La troisième, c'était mon manque de connaissance de Wordpress pour l'adapter à mes envies. J'avais envie d'en faire un site bac à sable, me permettant de faire du dev web. Je souhaitais avoir plus de libertés en tant que développeur."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je me suis donc tourné vers des générateurs de sites statiques, donc de simples pages qui peuvent être hébergées très économiquement (et donc avec moins de conso électrique)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous ne le connaissez pas, je vous conseille le site "},{type:a,tag:d,props:{href:"https:\u002F\u002Fjamstack.org\u002Fgenerators\u002F",rel:[e]},children:[{type:b,value:"jamstack"}]},{type:b,value:" qui liste tous ces fameux générateurs."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mes critères de choix étaient les suivants :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"un langage de templating simple, idéalement du "},{type:a,tag:n,props:{},children:[{type:b,value:w}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"facilement extensible pour moi, qui repose sur un framework non exotique et idéalement du vue.js que je connais bien."}]},{type:a,tag:f,props:{},children:[{type:b,value:"un outillage tout fait pour la gestion d'un blog (sitemap, feed RSS etc...)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les frameworks qui ont retenu mon attention :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Fnuxt.com\u002F",rel:[e]},children:[{type:b,value:"Nuxt"}]},{type:b,value:" avec "},{type:a,tag:d,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002F",rel:[e]},children:[{type:b,value:"Nuxt-Content"}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Fgridsome.org\u002F",rel:[e]},children:[{type:b,value:"Gridsome"}]},{type:b,value:" qui fait d'ailleurs tourner "},{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F05\u002F19\u002Fmalt-engineering-under-the-hood-gridsome",rel:[e]},children:[{type:b,value:"le site de l'équipe Engineering de Malt"}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Fwww.gatsbyjs.com\u002F",rel:[e]},children:[{type:b,value:"Gatsby"}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Fvuepress.vuejs.org\u002F",rel:[e]},children:[{type:b,value:"VuePress"}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et celui que j'ai choisi est donc Nuxt et son module Nuxt-Content."}]},{type:a,tag:x,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Avant d'aller plus loin, sachez que tout le contenu de ce blog "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Feventuallycoding",rel:[e]},children:[{type:b,value:"est disponible sur Github"}]},{type:b,value:". Vous pouvez vous en inspirer si vous le souhaitez."}]}]},{type:a,tag:h,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je me suis inspiré de nombreux sites de portfolio de dev web pour faire ce blog."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous trouverez une page de "},{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fresources",rel:[e]},children:[{type:b,value:"ressources"}]},{type:b,value:" que je trouve plutot utile comme référence, c'est comme un marque-page personnel."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'ai souhaité revoir l'index des blogs pour en faire un \"one pager\" afin de faciliter la découverte des anciens articles et rendre plus pratique la recherche."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Enfin sur chaque article, j'ai travaillé la lisibilité en reprenant une mise en page épurée, proche de celle que l'on peut trouver sur Medium."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour tout ça, je me suis appuyé en grande partie sur "},{type:a,tag:d,props:{href:"https:\u002F\u002Ftailwindcss.com\u002F",rel:[e]},children:[{type:a,tag:n,props:{},children:[{type:b,value:"Tailwind"}]}]},{type:b,value:" qui est désormais mon framework CSS favori, et de loin.\nCe n'est pas un framework orienté composant, mais il est assez simple d'en trouver construit dessus :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:A,rel:[e]},children:[{type:b,value:A}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:B,rel:[e]},children:[{type:b,value:B}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:C,rel:[e]},children:[{type:b,value:C}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais même sans ces frameworks, il est très simple de l'utiliser, et de gérer le responsive, les animations CSS etc..."}]},{type:a,tag:x,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Nuxt et Nuxt-Content c'est aussi une facilité en terme d'extension pour étendre le markdown et créer "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Feventuallycoding\u002Fblob\u002Fmaster\u002Fcomponents\u002Fcontent\u002FDisclaimer.vue",rel:[e]},children:[{type:b,value:"ce genre de petit encart"}]},{type:b,value:o}]}]},{type:a,tag:h,props:{id:D},children:[{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vais montrer ici en vrac quelques éléments qui méritent un peu d'attention."}]},{type:a,tag:i,props:{id:F},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout site qui veut faciliter le passage des bots d'indexation pour le SEO se doit d'en avoir un."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Feventuallycoding\u002Fblob\u002Fmaster\u002Fserver\u002Froutes\u002Fsitemap.xml.ts",rel:[e]},children:[{type:b,value:"Le code pour le générer est ici"}]}]},{type:a,tag:i,props:{id:H},children:[{type:b,value:I}]},{type:a,tag:c,props:{},children:[{type:b,value:"Très proche du code précédent, si on veut proposer un flux RSS, "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Feventuallycoding\u002Fblob\u002Fmaster\u002Fserver\u002Froutes\u002Frss.xml.ts",rel:[e]},children:[{type:b,value:"voici un exemple simple"}]},{type:b,value:o}]},{type:a,tag:i,props:{id:J},children:[{type:b,value:K}]},{type:a,tag:c,props:{},children:[{type:b,value:"Afin de proposer facilement un prérendu des liens, comme celui-ci par exemple"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:L,rel:[e]},children:[{type:b,value:L}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"c'est du javascript côté client. "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Feventuallycoding\u002Fblob\u002Fmaster\u002Fpages\u002F%5Byear%5D\u002F%5Bmonth%5D\u002F%5B%5Bday%5D%5D\u002F%5Bid%5D.vue#L214",rel:[e]},children:[{type:b,value:"Le code démarre ici"}]},{type:b,value:o}]},{type:a,tag:i,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cela ne vous a peut être pas échappé, mais ce blog utilise un système de commentaires. Sur un site statique, il faut avoir recours à un système externe (même ceux qui s'appuient sur des issues github).\nJ'ai choisi "},{type:a,tag:d,props:{href:"https:\u002F\u002Ftalk.hyvor.com\u002F",rel:[e]},children:[{type:b,value:"Hyvor"}]},{type:b,value:" pour cela. Ça me coute 5€\u002Fmois. C'est acceptable même si le volume de commentaire ici est vraiment très faible. (Mettez en un, histoire de rentabiliser le système...)"}]},{type:a,tag:i,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est la perte la plus importante avec le départ de Wordpress qui possède un plugin imbattable sur le sujet : Jetpack."},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nMême si ce blog n'a pas vocation à générer de l'argent, je souhaite suivre sa fréquentation. J'écris pour que ce soit lu un minimum, si un jour ça n'est plus utile à personne, j'arrêterais. Bref, c'est intéressant de savoir quels sont les articles les plus lus, ou de comprendre d'où vient le traffic."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Donc, il me fallait un remplaçant mais hors de question de mettre un bandeau de cookies, c'est une plaie sur le web."},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nJ'ai donc choisi une solution sans cookies, sans tracking d'IP qui ne nécessite aucun consentement (puisque ca ne manipule pas de données personnelles) : "},{type:a,tag:d,props:{href:"https:\u002F\u002Fdigianalytics.fr",rel:[e]},children:[{type:b,value:"Digianalytics"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est loin d'égaler le plugin Jetpack mais ça fait le taf on va dire.\nDans cette migration, j'ai fait le choix d'accepter cette perte."}]},{type:a,tag:h,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ok, Nuxt permet de générer un site statique mais il faut quand même l'héberger. Les solutions ne manquent pas pour cela : Vercel, Netlify, Cloudflare pages, Github Pages."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'ai eu pas mal de soucis avec Cloudflare pages et Github Pages sur la gestion des trailing slash"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:S,rel:[e]},children:[{type:b,value:S}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le choix s'est donc porté sur Netlify qui permet de configurer le comportement attendu."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le build se passe malgré tout sur Github via les github actions. "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Feventuallycoding\u002Fblob\u002Fmaster\u002F.github\u002Fworkflows\u002Fdeploy.yml",rel:[e]},children:[{type:b,value:"Vous retrouvez la définition du job ici."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce build créé le site statique sur une branche "},{type:a,tag:n,props:{},children:[{type:b,value:"cloudflare"}]},{type:b,value:" (ok, le nom est un peu bête puisque je déploie sur Netlify mais... yolo)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Enfin sur Netlify je lui demande de lire la branche cloudflare (sic...) pour ensuite déployer à chaque mise à jour."}]},{type:a,tag:h,props:{id:T},children:[{type:b,value:U}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le cout total pour faire tourner ce site est donc de 5€\u002Fmois car seul Hyvor est payant sur la liste ci-dessus. C'est à comparer aux 25€\u002Fmois de Wordpress."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il faut rajouter à cela le nom de domaine qui doit couter environ 15€\u002Fans."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour conclure ce billet, comme dit plus haut, n'hésitez pas à vous inspirer du code de ce site pour votre usage."},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nEt pour conclure, un chat. Parce que, pourquoi pas"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:V,rel:[e]},children:[{type:b,value:V}]}]}],toc:{title:p,searchDepth:g,depth:g,links:[{id:q,depth:g,text:r},{id:s,depth:g,text:t},{id:u,depth:g,text:v},{id:y,depth:g,text:z},{id:D,depth:g,text:E,children:[{id:F,depth:j,text:G},{id:H,depth:j,text:I},{id:J,depth:j,text:K},{id:M,depth:j,text:N},{id:O,depth:j,text:P}]},{id:Q,depth:g,text:R},{id:T,depth:g,text:U}]}},_type:w,_id:"content:articles:2022:11:blog-migration-on-nuxt.md",_source:"content",_file:"articles\u002F2022\u002F11\u002Fblog-migration-on-nuxt.md",_extension:"md"},"/articles/2022/11/blog-migration-on-nuxt/relatedArticles":[]},prerenderedAt:1676826421157}}("element","text","p","a","nofollow","li",2,"h2","h3",3,"br",false,"ul","strong",".","","instant-nostalgie-eventuallycoding-fête-sa-22ᵉ-année-dexistence","Instant nostalgie, eventuallycoding fête sa 22ᵉ année d'existence","joomla-puis-wordpress","Joomla puis wordpress","et-maintenant-nuxt","Et maintenant Nuxt ?","markdown","tip","une-grande-liberté-sur-le-frontend","Une grande liberté sur le frontend","https:\u002F\u002Ftailwindcomponents.com\u002F","https:\u002F\u002Ftailwind-elements.com\u002F","https:\u002F\u002Ftailwindui.com\u002F","recettes-de-cuisine","Recettes de cuisine","le-sitemap","Le sitemap","le-feed-rss","Le feed RSS","le-prérendu-des-liens-youtube-et-twitter","Le prérendu des liens youtube et twitter","https:\u002F\u002Ftwitter.com\u002Fhugolassiege\u002Fstatus\u002F1591740114623172611","le-système-de-commentaires","Le système de commentaires","lanalytique","L'analytique","le-déploiement","Le déploiement","https:\u002F\u002Ftwitter.com\u002Fhugolassiege\u002Fstatus\u002F1526274721079341062","le-cout","Le cout","https:\u002F\u002Ftwitter.com\u002Fbuitengebieden\u002Fstatus\u002F1593514754504548353"))