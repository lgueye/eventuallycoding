export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:{"/articles/2011/03/29/eviter-les-conflits-de-nom-dans-les-interfaces-en-c":{_path:"\u002Farticles\u002F2011\u002F03\u002F29\u002Feviter-les-conflits-de-nom-dans-les-interfaces-en-c",_dir:"29",_draft:g,_partial:g,_locale:"en",_empty:g,title:"Java Vs C# : Eviter les conflits de nom dans les interfaces",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",excerpt:{type:j,children:[{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{href:l,rel:[m]},children:[{type:a,tag:n,props:{alt:d,src:o,title:p},children:[]}]},{type:b,value:q},{type:a,tag:r,props:{},children:[{type:b,value:s}]},{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:v}]},{type:a,tag:w,props:{id:h},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:H}]},{type:a,tag:e,props:{code:f},children:[{type:a,tag:I,props:{},children:[{type:a,tag:e,props:{__ignoreMap:d},children:[{type:b,value:f}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:K}]}]},id:"286",date:"2011-03-29",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover7.jpg",readingTime:{text:"2 min read",minutes:1.05,time:63000,words:210},body:{type:j,children:[{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{href:l,rel:[m]},children:[{type:a,tag:n,props:{alt:d,src:o,title:p},children:[]}]},{type:b,value:q},{type:a,tag:r,props:{},children:[{type:b,value:s}]},{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:v}]},{type:a,tag:w,props:{id:h},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:H}]},{type:a,tag:e,props:{code:f},children:[{type:a,tag:I,props:{},children:[{type:a,tag:e,props:{__ignoreMap:d},children:[{type:b,value:f}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:K}]}],toc:{title:d,searchDepth:L,depth:L,links:[{id:h,depth:3,text:i}]}},_type:"markdown",_id:"content:articles:2011:03:29:eviter-les-conflits-de-nom-dans-les-interfaces-en-c.md",_source:"content",_file:"articles\u002F2011\u002F03\u002F29\u002Feviter-les-conflits-de-nom-dans-les-interfaces-en-c.md",_extension:"md"},"/articles/2011/03/29/eviter-les-conflits-de-nom-dans-les-interfaces-en-c/relatedArticles":[]},prerenderedAt:1668334965687}}("element","text","p","","code","void IInterface2.Execute()\n{\n     Console.WriteLine(\"Execute de IInterface2\");\n}\n",false,"eviter-les-conflits-de-nom-dans-les-interfaces-en-c","Eviter les conflits de nom dans les interfaces en C#","root","a","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png","nofollow","img","\u002Fimages\u002Fjavac1.png","javac"," ","strong","Warning, warning,"," ceci n'est pas une rubrique à troll !!","Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre.","Et donc le truc qui tue du jour :","h3","En java vous avez sans doute déjà eu affaire à des interfaces dont les noms rentrent en conflit, non ?","Dans le cas contraire, je vous propose un petit exemple :","public interface IInterface1\n{\nvoid execute();\n}","public interface IInterface2\n{\nvoid execute();\n}","public class MyClass implements IInterface1, IInterface2\n{\npublic void execute()\n{\n\u002F\u002F  ??\n}\n}","Rageant n'est-ce pas ? Vous tentez de respecter un contrat identique défini par deux interfaces.","Et en C# ?","C# propose une solution intéressante à ce problème.","public interface IInterface1\n{\nvoid Execute();\n}","public interface IInterface2\n{\nvoid Execute();\n}","public class MyClass : IInterface1, IInterface2\n{\nvoid IInterface1.Execute()\n{\nConsole.WriteLine(\"Execute de IInterface1\");\n}","pre","}","On remarquera que les méthodes sont privées. Elles ne peuvent être appelées qu'à partir de l'interface. Ce qui est beaucoup plus propre.",2))