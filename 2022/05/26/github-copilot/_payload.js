export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:{"/articles/2022/05/26/github-copilot":{_path:"\u002Farticles\u002F2022\u002F05\u002F26\u002Fgithub-copilot",_dir:"26",_draft:k,_partial:k,_locale:i,_empty:k,title:"Github Copilot, réflexions après quelques semaines d'utilisation",description:"En démarrant le side project Coderwatch j'ai pu installer et tester Github Copilot. Et après plusieurs semaines d'utilisation je comprends qu'on est très loin du simple gadget.",id:"2",date:"2022-05-26",categories:["Tech"],tags:["ML","IA","Dev Experience"],img:l,cover:l,readingTime:{text:"10 min read",minutes:9.105,time:546300,words:1821},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"En démarrant le side project "},{type:a,tag:e,props:{href:"\u002F2022\u002F04\u002F04\u002Fcest-lhistoire-dun-side-project"},children:[{type:b,value:"Coderwatch"}]},{type:b,value:" j'ai pu installer et tester "},{type:a,tag:e,props:{href:"https:\u002F\u002Fcopilot.github.com\u002F",rel:[g]},children:[{type:b,value:"Github Copilot"}]},{type:b,value:". Et après plusieurs semaines d'utilisation je comprends qu'on est très loin du simple gadget."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il faut qu'on en parle :)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Est-ce que cet outil signe un tournant majeur dans notre métier ? En tout cas il pourrait y contribuer."}]},{type:a,tag:h,props:{id:m},children:[{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"En très résumé, Copilot s'appuie sur un modèle de Machine Learning de "},{type:a,tag:e,props:{href:"https:\u002F\u002Fopenai.com\u002Fabout\u002F",rel:[g]},children:[{type:b,value:"OpenAI"}]},{type:b,value:" : "},{type:a,tag:e,props:{href:"https:\u002F\u002Fopenai.com\u002Fblog\u002Fopenai-codex\u002F",rel:[g]},children:[{type:b,value:"OpenAI Codex"}]},{type:b,value:".\nArrêtons-nous déjà un instant sur OpenAI.\nSi vous ne connaissez pas, il s'agit d'une entreprise dont l'objectif est : \"de créer une intelligence artificielle qui bénéficiera à toute l'humanité\". Vous seriez peut-être surpris de savoir que les deux présidents actuels sont Elon Musk et Sam Altman.\nEt dans les projets déjà sortis par OpenAI on retrouve GPT-3 ou Dall-E qui sont tout bonnement incroyables."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Reprenons, donc Copilot s'appuie sur OpenAI Codex et sur le contexte de votre code (le code déjà écrit, les commentaires, les noms de fonctions ou de variables etc...)\npour proposer des suggestions. Ces suggestions sont acceptées ou non par les utilisateurs ce qui contribue à renforcer l'apprentissage de Copilot."}]},{type:a,tag:c,props:{},children:[{type:a,tag:o,props:{alt:"Comment ça marche",src:"\u002Fimages\u002Fgithub-copilot.png"},children:[]}]},{type:a,tag:h,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Concrètement j'ai envie de vous montrer des vrais cas d'usages que j'ai eu récemment.\nLes exemples sur le site de Copilot sont déjà incroyables, mais vous pourriez vous dire qu'ils ont été sélectionnés pour mettre une belle couverture sur leur site et qu'ils ne sont pas représentatifs."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prenons le premier exemple. Très récemment j'ai eu le besoin de travailler en Javascript pour remplacer chaque lien vers une vidéo youtube, par le player youtube afin d'embarquer la vidéo directement dans le texte.\nJ'avais vaguement l'idée de comment le faire, trouver les liens via une regexp puis créer un élément dans le DOM pour y placer la vidéo."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nJ'ai uniquement fait la déclaration de la variable isYoutubeVideo. Copilot m'a ensuite suggéré toute la suite :"}]},{type:a,tag:j,props:{code:r,language:"javascript",meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:j,props:{__ignoreMap:i},children:[{type:b,value:r}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Du code proposé, je n'ai modifié que certaines parties pour remplacer "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.youtube.com",rel:[g]},children:[{type:b,value:"www.youtube.com"}]},{type:b,value:" par "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.youtube-nocookie.com",rel:[g]},children:[{type:b,value:"www.youtube-nocookie.com"}]},{type:b,value:" (afin de n'envoyer aucune info à Youtube sur l'utilisateur qui regarde la vidéo), et l'attribut class."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nCes quelques lignes, n'étant pas familiers de l'API pour créer du dom ou même du markup nécessaire pour embarquer une vidéo, j'aurais fini par l'écrire mais sans doute que j'aurais pris 10\u002F15 minutes (?). Cela m'a pris 10 secondes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Second exemple, une requête SQL.\nPour Coderwatch, j'utilise Spring JDBC Template avec SimpleFlatMapper. J'avais une méthode à écrire pour récupérer le dernier quizz terminé pour un joueur donné dans un mode de jeu donné."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Copilot m'a fait cette proposition :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:o,props:{alt:"Suggestion Copilot",src:"\u002Fimages\u002Fsuggest-copilot.jpg"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce cas précis, Copilot a réussi à me suggérer la bonne plomberie, dans le même style que les autres repository déjà écrit, avec les bons frameworks, les bons noms de tables et de champ.\nEt ça, c'est déjà impressionnant !"}]},{type:a,tag:c,props:{},children:[{type:b,value:"La requête n'est cependant pas celle que je souhaitais, il y un left join qui ne m'intéresse pas et je cherchais \"le dernier quizz terminé\". Cependant, je ne peux pas lui reprocher puisque mon nom de méthode n'inclus pas cette subtilité, c'est donc la méthode qui est mal nommé en réalité."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans les deux exemples cités, mon rôle a été de donner du contexte, de vérifier et d'adapter le résultat."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ah oui, petit bonus, Copilot est actif partout, y compris dans un fichier markdown. Donc il suggère la documentation.\nExemple, toute cette doc sur l'un de mes derniers devs a été faite à 90% par Copilot (modulo quelques coups de pouce de ma part)"}]},{type:a,tag:j,props:{code:u,meta:s},children:[{type:a,tag:t,props:{},children:[{type:a,tag:j,props:{__ignoreMap:i},children:[{type:b,value:u}]}]}]},{type:a,tag:h,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"Lorsque j'ai installé ce plugin dans mon IDE, je ne savais pas trop à quoi m'attendre, comment l'outil s'adapterait à mon contexte, ma façon de coder."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEt en fait, c'est juste incroyable. Pour moi, c'est un gain de temps constant sur toute la plomberie.\nC'est également une béquille terriblement puissante lorsque je développe dans des langages ou avec des frameworks que je maitrise moins, avec une moins bonne connaissance de l'API. Mon autonomie grandit même si je dois absolument contrôler ce qui est écrit et ça ne m'épargne pas de lire la doc."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nDans tous les cas, j'ai un gain de rapidité évident, y compris pour de la doc.\nBref, les tâches rébarbatives ont une forte tendance à disparaître et je peux me concentrer sur ce qui a vraiment de la valeur."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant, tout n'est pas rose."}]},{type:a,tag:h,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au jour le jour, je note quelques petits soucis d'ergonomie. C'est mineur et ça s'améliorera sans doute, mais parfois entre les suggestions de l'IDE et les suggestions Copilot on peut s'embrouiller. Copilot propose toujours quelque chose, y compris quand en réalité il n'y a plus rien à écrire. Dans une page HTML je ne vous raconte pas, Copilot cherche toujours à en faire plus ^^"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme je le disais plus haut, Copilot ne s'arrête pas au code, mais suggère aussi du texte. Et pour le coup, c'est pénible, par exemple sur un billet de blog. Copilot me propose constamment d'écrire mon billet à ma place et ça m'agace assez vite donc je repasse sur notepad++ pour éviter d'être influencé."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autre risque que je peux voir apparaître, j'ai utilisé l'expression \"C'est également une béquille\". Est-ce que je n'ai pas un risque d'arrêter d'apprendre ? Et si on m'enlève cette béquille, est-ce que je ne risque pas d'avoir oublié comment on fait telle ou telle chose ? C'est pas encore le cas mais je pourrais facilement céder à la facilité.\nJe reviendrais sur ce point en conclusion."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais abordons quelques points sensibles.\nDeux polémiques majeures ont été soulevées par l'usage de Copilot :"}]},{type:a,tag:z,props:{},children:[{type:a,tag:A,props:{},children:[{type:b,value:"Copilot créé des bugs"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Celle-là je vais passer vite, car je trouve la polémique un peu ridicule.\nDans un "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.lemondeinformatique.fr\u002Factualites\u002Flire-copilot-de-github-un-generateur-de-code-et-de-bugs-83946.html",rel:[g]},children:[{type:b,value:"article du monde"}]},{type:b,value:" on apprend que des chercheurs ont créé des programmes avec Copilot puis qu'ils ont évalué le pourcentage de ces programmes contenant des vulnérabilités.\nLa conclusion de l'article est cependant moins racoleuse que le titre, car les chercheurs ne remettent pas en cause l'usage de Copilot. Tout d'abord l'outil s'appuie sur des codes déjà écrits, il reflète donc en partie des bugs déjà existants dans des projets open source, ensuite l'outil n'est pas censé être autonome, c'est de l'aide à l'écriture. Il y a toujours un(e) développeur pour superviser. Enfin ça n'empêche pas de coupler cela avec des outils de vérification de code et de détection de vulnérabilités."}]},{type:a,tag:z,props:{},children:[{type:a,tag:A,props:{},children:[{type:b,value:"la violation de propriété intellectuelle."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sans rentrer trop dans les détails, Copilot s'appuie sur un modèle de ML qui a été construit sur des millions de lignes de code publiques lues sur Github. Ce code est sous license. Dans certains cas il est possible que Copilot reproduise des bouts de code qui proviennent de ces librairies.\nCertains questionnent l'exploitation de ce code dans le but d'entrainer un algorithme, d'autres parlent de blanchiment de license dans les cas où le code produit est un copier-coller d'une lib sous license.\nJ'avoue que vouloir revendiquer une propriété sur des bouts de code de 10 lignes qu'on aurait sans doute fini par écrire soi-même, même sans copilot, et sans savoir qu'un bout de code très proche existe en open source, je trouve cela absurde. En tout cas ce sont les cas d'usage que j'ai eu sur mon usage de Copilot. Copilot ne m'a pas écrit toute une application, il m'a aidé sur des blocs de 1 a à 10 lignes max."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant, je comprends que ça grince un peu des dents dans la communauté open source, d'autant plus que le futur modèle économique de Copilot n'est pas connu."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nPeut-on avoir un produit commercial qui repose sur une exploitation du code libre ?"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEst-ce équitable de créer un outil aussi puissant qui sera réservé à ceux qui peuvent se le payer, sachant qu'il est construit sur du code diffusé gratuitement (je simplifie) ?"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nDe mon point de vue, c'est le sujet qui doit poser question. Je pense que tout le monde y trouvera son compte au final. Les développeurs open source aussi vont en profiter. Si tant est que son modèle économique soit accessible et équitable."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce sujet est loin d'être clos, rempli de nuances donc on en réentendra sans doute parler."}]},{type:a,tag:h,props:{id:B},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:"Selon moi, Copilot pourrait signer ou préfigurer un tournant majeur dans notre métier.\nÇa fait 25 ans que j'entends parler de génération de code, c'est la première fois que je vois un résultat aussi impressionant.\nAu mieux jusqu'à présent on décrivait un modèle dans du pseudo code ou de l'UML et on générait tout un tas de boiler plate, souvent illisible.\nEt ça restera sans doute très pratique pour de nombreuses parties du code en one-shot (la création du modèle lié à un stub, XSD vers beans etc...).\nMais cette fois ci, on parle de code métier, lisible, maintenable qui me procure un gain de temps permanent.\nAlors oui, je peux céder à la facilité, commencer à oublier quelques APIs importantes parce que l'outil me le suggérera systématiquement."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nPour un(e) junior, c'est un outil qui permet de gagner plus rapidement en autonomie et donc devenir plus rapidement confirmé(e)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant, on ne devient pas senior uniquement en écrivant correctement du code. On devient senior en sachant si on traite les bons sujets.\nCopilot permet de changer de niveau d'abstraction."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Est-ce que je regrette mes cours d'assembleur et la gestion des registres ? Absolument pas."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEst-ce que je regrette le fait de ne plus gérer la mémoire comme je le faisais en C ? Non."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nEst-ce que le métier de dev a disparu avec des langages et outils de plus haut niveau d'abstraction ? Non, car le volume d'applications nécessaire a constamment augmenté. Le niveau de complexité a augmenté."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il restera un besoin de supervision d'une part, cela restera un outil d'aide à la décision mais, pour l'instant en tout cas, ce n'est pas Copilot qui pourra me dire que le code que je viens d'écrire répond effectivement au besoin de mes utilisateurs. Ce n'est pas lui qui pourra me dire que parmi toutes les solutions possibles pour répondre au besoin, celle que je viens d'implémenter n'était pas la meilleure."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En tout cas moi, pour l'instant, je vais continuer à l'utiliser."}]}],toc:{title:i,searchDepth:f,depth:f,links:[{id:m,depth:f,text:n},{id:p,depth:f,text:q},{id:v,depth:f,text:w},{id:x,depth:f,text:y},{id:B,depth:f,text:C}]}},_type:"markdown",_id:"content:articles:2022:05:26:github-copilot.md",_source:"content",_file:"articles\u002F2022\u002F05\u002F26\u002Fgithub-copilot.md",_extension:"md"}},prerenderedAt:1676930433586}}("element","text","p","br","a",2,"nofollow","h2","","code",false,"GitHub-1.jpg","mais-tout-dabord-comment-ça-marche-github-copilot","Mais tout d'abord, comment ça marche github copilot ?","img","quelques-exemples","Quelques exemples","\n    const isYoutubeVideo = block.textContent.match(\u002F^https:\\\u002F\\\u002Fwww\\.youtube\\.com\\\u002Fwatch\\?(v=[0-9a-zA-Z]*)$\u002F);\n    if (isYoutubeVideo) {\n      isYoutubeVideo.forEach((match) =\u003E {\n        const regExpMatchArray = match.match(\u002Fv=(.*)$\u002F);\n        const videoId = regExpMatchArray[1];\n        const container = document.createElement(\"div\");\n        container.setAttribute(\"class\", \"w-1\u002F2 ml-auto mr-auto\");\n        const iframe = document.createElement(\"iframe\");\n        iframe.setAttribute(\"src\", `https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002F${videoId}`);\n        iframe.setAttribute(\"frameborder\", \"0\");\n        iframe.setAttribute(\"allowfullscreen\", \"allowfullscreen\");\n        iframe.setAttribute(\"width\", \"560\");\n        iframe.setAttribute(\"height\", \"315\");\n        block.innerHTML = \"\";\n        container.appendChild(iframe);\n        block.appendChild(container);\n      });\n",null,"pre","    * text: the text to search (mandatory)\n    * language: the language of the response (default is \"en\")\n    * country: if you want to boost result near this country (Alpha2 code, example: \"FR\" for France)\n    * latitude: if you want to boost result near this specific geo point (example: \"48.857\")\n    * longitude: if you want to boost result near this specific geo point (example: \"2.3521\")\n    * types: to filter result by type. You can use the following types:\n        * locality (will only return cities)\n        * ADMINISTRATIVE_AREA_LEVEL_1 (will only return first level administrative areas and cities)\n        * ADMINISTRATIVE_AREA_LEVEL_2 (will only return cities, admin area level 1 and admin area level 2)\n        * ADMINISTRATIVE_AREA_LEVEL_2 (will only return cities, admin area level 1, admin area level 2, and admin area level 3)\n        * country (return everything from country to cities)\n    \n","une-aide-incroyable-au-quotidien","Une aide incroyable au quotidien","copilot-inconvénients-et-polémiques","Copilot, inconvénients et polémiques","ul","li","avis-perso","Avis perso"))