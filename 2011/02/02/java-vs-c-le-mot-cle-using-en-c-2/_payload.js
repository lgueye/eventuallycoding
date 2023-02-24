export default (function(a,b,c,d,e,f,g,h,i,j){return {data:{"/articles/2011/02/02/java-vs-c-le-mot-cle-using-en-c-2":{_path:"\u002Farticles\u002F2011\u002F02\u002F02\u002Fjava-vs-c-le-mot-cle-using-en-c-2",_dir:"02",_draft:d,_partial:d,_locale:e,_empty:d,title:"Java Vs C# : le mot clé using en C#",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",id:"146",date:"2011-02-02",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover1.jpg",readingTime:{text:"2 min read",minutes:1.47,time:88200,words:294},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:[g]},children:[{type:a,tag:"img",props:{alt:e,src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]},{type:b,value:" "},{type:a,tag:"strong",props:{},children:[{type:b,value:"Warning, warning,"}]},{type:b,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et donc le truc qui tue du jour :"}]},{type:a,tag:"h3",props:{id:h},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je ne vous l'apprends pas (enfin j'espère) en Java et en C#, on a l'habitude d'utiliser des blocs finally pour fermer les ressources proprement en cas d'exception."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"InputStream   input = null;\ntry\n{\ninput = new FileInputStream(fileName);\n\u002F\u002F...process input stream...\n}catch (IOException e)\n{\n\u002F\u002F do something\n}\nfinally\n{\nif(input != null)\n{\ntry\n{\ninput.close();\n}\ncatch(IOException e)\n{\n}\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Verbeux n'est ce pas ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"En C# le truc qui tue ? Pas besoin de bloc finally, la fermeture des ressources peut être faite automatiquement avec la syntaxe suivante :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"using (System.IO.StreamReader sr = new System.IO.StreamReader(@\"C:UsersPublicDocumentstest.txt\"))\n{  �\nstring s = null;  �\nwhile((s = sr.ReadLine()) != null)  �\n{      �\nConsole.WriteLine(s);  �\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le mot clé using permet de désigner les ressources à fermer à la fin du bloc. Ces ressources implémentent l'interface IDisposable."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais un peu d'espoir quand même pour les javaistes, "},{type:a,tag:f,props:{href:"http:\u002F\u002Fblog.developpez.com\u002Fadiguba\u002Fp9231\u002Fjava\u002Ftry-with-resources\u002F#more9231",rel:[g]},children:[{type:b,value:"la fonctionnalité est prévue pour JDK7"}]},{type:b,value:" avec les blocs ARM :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public void copy(String sourceFile, String destFile) throws IOException\n{\ntry (InputStream input = new FileInputStream(sourceFile); OutputStream output = new FileOutputStream(destFile) )\n{\nbyte[] buf = new byte[8192];\nint len;\nwhile ( (len=input.read(buf)) \u003E= 0 )\n{\noutput.write(buf, 0, len);\n}\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"En plus j'apprécie qu'ils aient réutilisé le mot clé try pour les gérer, ca porte moins à confusion que using en C# qui est déjà utilisé pour les imports."}]}],toc:{title:e,searchDepth:j,depth:j,links:[{id:h,depth:3,text:i}]}},_type:"markdown",_id:"content:articles:2011:02:02:java-vs-c-le-mot-cle-using-en-c-2.md",_source:"content",_file:"articles\u002F2011\u002F02\u002F02\u002Fjava-vs-c-le-mot-cle-using-en-c-2.md",_extension:"md"}},prerenderedAt:1677252031925}}("element","text","p",false,"","a","nofollow","le-mot-clé-using-en-c","le mot clé using en C#",2))