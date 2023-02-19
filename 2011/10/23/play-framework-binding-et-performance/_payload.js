export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:{"/articles/2011/10/23/play-framework-binding-et-performance":{_path:"\u002Farticles\u002F2011\u002F10\u002F23\u002Fplay-framework-binding-et-performance",_dir:"23",_draft:i,_partial:i,_locale:e,_empty:i,title:"Play framework, binding et performance",description:"Après avoir bataillé un bon moment avec les performances sur la page d’importation de Nemrod je me suis dit que ce serait intéressant de partager ce q...",id:"461",date:"2011-10-23",categories:["waza"],tags:["performance","play"],img:e,cover:"cover1.jpg",readingTime:{text:"3 min read",minutes:2.305,time:138300,words:461},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Après avoir bataillé un bon moment avec les performances sur la page d’importation de Nemrod je me suis dit que ce serait intéressant de partager ce que j’ai appris sur le binding de Play. Bref, je vous propose ce petit sujet autour du binding dans Play framework et une optimisation qui m’a sauvé la vie. Resituons le contexte tout d’abord. Si vous utilisez "},{type:a,tag:j,props:{href:"http:\u002F\u002Fwww.playframework.org\u002F",rel:[k]},children:[{type:b,value:"Play framework"}]},{type:b,value:", vous avez peut être déjà utilisé "},{type:a,tag:j,props:{href:"http:\u002F\u002Fwww.playframework.org\u002Fdocumentation\u002F1.2.3\u002Fcontrollers#array",rel:[k]},children:[{type:b,value:"des bindings avec des collections d’éléments"}]},{type:b,value:" dans un de vos contrôleur."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce type de binding est excessivement utile dans la majorité des cas. Prenons par exemple le bout de template suivant :"}]},{type:a,tag:d,props:{code:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:h}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ceci va vous créer dans votre page html une suite d’élément html comme suit :"}]},{type:a,tag:d,props:{code:l,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:l}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour traiter ensuite ce résultat dans votre contrôleur, il ne vous reste plus qu’à déclarer :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public static void process(Listresults)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"ImportBean étant un simple objet ayant 4 propriété : filename, module, modulepath et localeId"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autrement dit, Play framework a fait le binding pour vous entre les données de votre formulaire et une collection d’objets."}]},{type:a,tag:c,props:{},children:[{type:a,tag:m,props:{},children:[{type:b,value:"C’est vrai, c’est super puissant et c’est la méthode conseillée dans la majorité des cas."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"De mon côté j’ai rencontré un cas où la taille de ma collection était de plus de 400 éléments et cela s’est avéré catastrophique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prenons la méthode d’un contrôleur comme suit :"}]},{type:a,tag:d,props:{code:n,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:n}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le temps nécessaire pour effectuer le traitement durait plus de "},{type:a,tag:m,props:{},children:[{type:b,value:"2h"}]},{type:b,value:" ! J’ai évidemment soupçonné le temps de traitement dans doSomething mais après avoir mis en place quelques éléments pour mesurer les temps d'exécution, je n’ai rien trouvé de concluant dans la méthode doSomething. Par contre, j’ai remarqué qu’à chaque tour de boucle la récupération d’un élément de results prenait un temps fou. L’entrée même dans la méthode process dépassait les 10 secondes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai donc soupçonné le binding effectué par Play. Même si j’avoue ne pas avoir compris pourquoi je perdais du temps à chaque itération (du lazy loading pour le binding peut être ?) Pour valider cette théorie, j’ai modifié le code de la façon suivante :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai remplacé"}]},{type:a,tag:d,props:{code:h,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:h}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"par"}]},{type:a,tag:c,props:{},children:[{type:b,value:"resultJson étant une chaîne représentant ma collection au format json."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté contrôleur, je récupère donc une chaîne de caractère et non plus une collection. Cette chaine est désérialisé puis utilisé dans le même traitement que précédemment."}]},{type:a,tag:c,props:{},children:[{type:b,value:"public static void process(String resultJson)\n{\nGsonBuilder builder = new GsonBuilder();\nType collectionType = new TypeToken"},{type:a,tag:"list",props:{},children:[{type:b,value:"(){}.getType();\nListresults = builder.create().fromJson(resultJson, collectionType);"}]}]},{type:a,tag:d,props:{code:o,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:o}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Résultat des courses, le traitement qui s’effectuait auparavant en environ 2h s’effectue désormais en moins de deux minutes !"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, heureusement que j’ai posé les sondes aux bons endroits avant d’entamer des optimisations dans doSomething, ce qui ne m’aurait rien apporté au final."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voila, en espérant que ça vous serve peut être."}]}],toc:{title:e,searchDepth:p,depth:p,links:[]}},_type:"markdown",_id:"content:articles:2011:10:23:play-framework-binding-et-performance.md",_source:"content",_file:"articles\u002F2011\u002F10\u002F23\u002Fplay-framework-binding-et-performance.md",_extension:"md"},"/articles/2011/10/23/play-framework-binding-et-performance/relatedArticles":[]},prerenderedAt:1676822890924}}("element","text","p","code","",null,"pre","#{list items:results, as:'result' }\n   \n   \n   \n   \n#{\u002Flist}\n",false,"a","nofollow","           …..........\n","strong","public static void process(Listresults)     {\n \n      for (ImportBean importBean : results)\n      {\n          await(doSomething());\n      }\n\n       render();\n\n}\n","   for (ImportBean importBean : results)\n   {\n       await(doSomething());\n   }\n\n   render();\n",2))