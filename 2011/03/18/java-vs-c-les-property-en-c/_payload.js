export default (function(a,b,c,d,e,f,g,h){return {data:{"/articles/2011/03/18/java-vs-c-les-property-en-c":{_path:"\u002Farticles\u002F2011\u002F03\u002F18\u002Fjava-vs-c-les-property-en-c",_dir:"18",_draft:d,_partial:d,_locale:e,_empty:d,title:"Java Vs C# : Les Property en C#",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",id:"148",date:"2011-03-18",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover3.jpg",readingTime:{text:"2 min read",minutes:1.46,time:87600,words:292},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:"a",props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:["nofollow"]},children:[{type:a,tag:"img",props:{alt:e,src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]},{type:b,value:" "},{type:a,tag:"strong",props:{},children:[{type:b,value:"Warning, warning,"}]},{type:b,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et donc le truc qui tue du jour :"}]},{type:a,tag:"h3",props:{id:f},children:[{type:b,value:g}]},{type:a,tag:c,props:{},children:[{type:b,value:"En C# comme en Java on respecte le principe d'encapsulation sur les attributs des classes. C'est à dire que les attributs sont déclarées private et ensuite on définit des getters et setters pour y accéder :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"private int maVariable;"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public void setMaVariable (int maVariable)\n{\nthis.maVariable = maVariable;\n}\npubic int getMaVariable ()\n{\nreturn maVariable;\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Seul inconvénient, il est plus verbeux d'écrire ceci"}]},{type:a,tag:c,props:{},children:[{type:b,value:"maClasse.setMaVariable (maClasse.getMaVariable()+1)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"que directement"}]},{type:a,tag:c,props:{},children:[{type:b,value:"maClasse.maVariable++;"}]},{type:a,tag:c,props:{},children:[{type:b,value:"En C# existe la notion de Property qui permet d'éviter l'utilisation de getter et setter :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public double Hours\n{\nget\n{\nreturn seconds \u002F 3600;\n}\nset\n{\nseconds = value * 3600;\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce qui permet d'écrire :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"maClasse.Hours = maClasse.Hours + 1;"}]},{type:a,tag:c,props:{},children:[{type:b,value:"et qui reviendra à :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"maClasse.setSeconds (maClasse.getSeconds() + 1);"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et depuis la version 3.0, on peut même utiliser des la notion de Property auto-implémenté lorsque les getters et setters ne font rien de spécial :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public int ID { get; set; }"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et en Java ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"A priori rien de prévu pour imiter cette syntaxe en Java pour l'instant. Cependant certains frameworks utilisent l'instrumentation de code pour reproduire le même comportement. Avec Play! la syntaxe est même allégé par rapport aux Property de C# :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public int maVariable;\n...\nmonObjet.maVariable = monObjet.maVariable+1;"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les getters et setters sont automatiquement générés par Play. Si cependant un getter ou un setter a été défini, il sera utilisé à la place des accesseurs générés par Play!."}]}],toc:{title:e,searchDepth:h,depth:h,links:[{id:f,depth:3,text:g}]}},_type:"markdown",_id:"content:articles:2011:03:18:java-vs-c-les-property-en-c.md",_source:"content",_file:"articles\u002F2011\u002F03\u002F18\u002Fjava-vs-c-les-property-en-c.md",_extension:"md"}},prerenderedAt:1677252031902}}("element","text","p",false,"","les-property-en-c","Les Property en C#",2))