export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:{"/articles/2011/02/03/java-vs-c-les-parametres-nommes-et-optionnels-en-c-2":{_path:"\u002Farticles\u002F2011\u002F02\u002F03\u002Fjava-vs-c-les-parametres-nommes-et-optionnels-en-c-2",_dir:"03",_draft:f,_partial:f,_locale:"en",_empty:f,title:"Java Vs C# : Les paramètres nommés et optionnels en C#",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",excerpt:{type:j,children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:k,rel:[e]},children:[{type:a,tag:l,props:{alt:g,src:m,title:n},children:[]}]},{type:b,value:o},{type:a,tag:p,props:{},children:[{type:b,value:q}]},{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:t}]},{type:a,tag:u,props:{id:h},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:E},{type:a,tag:d,props:{href:F,rel:[e]},children:[{type:b,value:G}]},{type:b,value:H}]}]},id:"147",date:"2011-02-03",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover2.jpg",readingTime:{text:"2 min read",minutes:1.245,time:74700,words:249},body:{type:j,children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:k,rel:[e]},children:[{type:a,tag:l,props:{alt:g,src:m,title:n},children:[]}]},{type:b,value:o},{type:a,tag:p,props:{},children:[{type:b,value:q}]},{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:t}]},{type:a,tag:u,props:{id:h},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:E},{type:a,tag:d,props:{href:F,rel:[e]},children:[{type:b,value:G}]},{type:b,value:H}]}],toc:{title:g,searchDepth:I,depth:I,links:[{id:h,depth:3,text:i}]}},_type:"markdown",_id:"content:articles:2011:02:03:java-vs-c-les-parametres-nommes-et-optionnels-en-c-2.md",_source:"content",_file:"articles\u002F2011\u002F02\u002F03\u002Fjava-vs-c-les-parametres-nommes-et-optionnels-en-c-2.md",_extension:"md"},"/articles/2011/02/03/java-vs-c-les-parametres-nommes-et-optionnels-en-c-2/relatedArticles":[]},prerenderedAt:1673368373058}}("element","text","p","a","nofollow",false,"","les-paramètres-nommés-optionnels-en-c","Les paramètres nommés optionnels en C#","root","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png","img","\u002Fimages\u002Fjavac1.png","javac"," ","strong","Warning, warning,"," ceci n'est pas une rubrique à troll !!","Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre.","Et donc le truc qui tue du jour :","h3","C# 4.0 a introduit un concept très sympathique, déjà connu pour ceux qui pratique le python et plutôt évident pour les adeptes de jQuery, les paramètres nommés et optionnels.","Les paramètres nommés existent déjà depuis la version 1.0 du framework, ils permettent notamment d'écrire ceci :","public void MaMethode(string Arg1, string Arg2)\n{\n\u002F\u002F ...\n}\n...","myObject.MaMethode(Arg1:\"un argument\", Arg2:\"un autre argument\");","Ok, jusqu'ici, rien de transcendant. C'est verbeux même si ca permet de lever quelques ambiguïtés parfois.","Par contre avec la version 4.0, désormais vous pouvez aussi utiliser des valeurs par défaut et des paramètres optionnels et là ça devient puissant :","public void MaMethode(string Arg1=\"une valeur\", string Arg2=\"une autre valeur\")\n{\n\u002F\u002F ...\n}","ce qui permet de faire les appels suivants :","myObject.MaMethode();\nmyObject.MaMethode(Arg1:\"une valeur différente\");\nmyObject.MaMethode(Arg2:\"une valeur différente\",Arg1:\"dans un autre ordre\");","Et en Java ? Rien de prévu de ce côté là malheureusement, aucune des deux prochaines version 7 et 8 n'abordent ce cas. On pourra se consoler avec le chainage des méthodes proposé ","http:\u002F\u002Fgfx.developpez.com\u002Ftutoriel\u002Fjava\u002Fconstructeur-fabrique\u002F","ici"," et  qui peut éventuellement fonctionner pour des constructeurs mais qui sont loin d'être aussi puissant.",2))