export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:{"/articles/2012/06/23/hibernate-vers-jpa":{_path:"\u002Farticles\u002F2012\u002F06\u002F23\u002Fhibernate-vers-jpa",_dir:"23",_draft:i,_partial:i,_locale:"en",_empty:i,title:"Hibernate vers JPA",description:"[![](\u002Fimages\u002Fjava.png \"java\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2012\u002F06\u002Fjava.png)J'ai pas mal mangé de JPA + Spring cette année entre [l...",excerpt:{type:k,children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:l,rel:[e]},children:[{type:a,tag:m,props:{alt:j,src:n,title:o},children:[]}]},{type:b,value:p},{type:a,tag:d,props:{href:q,rel:[e],title:r},children:[{type:b,value:s}]},{type:b,value:t},{type:a,tag:d,props:{href:u,rel:[e],title:v},children:[{type:b,value:w}]},{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:A,rel:[e],title:g},children:[{type:b,value:g}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:B,props:{},children:[{type:b,value:C}]},{type:b,value:D}]},{type:a,tag:E,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:F}]},{type:a,tag:f,props:{},children:[{type:b,value:G}]},{type:a,tag:f,props:{},children:[{type:b,value:H}]},{type:a,tag:f,props:{},children:[{type:b,value:I}]}]},{type:a,tag:c,props:{},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:h,rel:[e]},children:[{type:b,value:h}]}]}]},id:"573",date:"2012-06-23",categories:["waza"],tags:["hibernate","jpa","spring"],img:"java.png",cover:"cover6.jpg",readingTime:{text:"1 min read",minutes:.905,time:54300,words:181},body:{type:k,children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:l,rel:[e]},children:[{type:a,tag:m,props:{alt:j,src:n,title:o},children:[]}]},{type:b,value:p},{type:a,tag:d,props:{href:q,rel:[e],title:r},children:[{type:b,value:s}]},{type:b,value:t},{type:a,tag:d,props:{href:u,rel:[e],title:v},children:[{type:b,value:w}]},{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:A,rel:[e],title:g},children:[{type:b,value:g}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:B,props:{},children:[{type:b,value:C}]},{type:b,value:D}]},{type:a,tag:E,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:F}]},{type:a,tag:f,props:{},children:[{type:b,value:G}]},{type:a,tag:f,props:{},children:[{type:b,value:H}]},{type:a,tag:f,props:{},children:[{type:b,value:I}]}]},{type:a,tag:c,props:{},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:h,rel:[e]},children:[{type:b,value:h}]}]}],toc:{title:j,searchDepth:K,depth:K,links:[]}},_type:"markdown",_id:"content:articles:2012:06:23:hibernate-vers-jpa.md",_source:"content",_file:"articles\u002F2012\u002F06\u002F23\u002Fhibernate-vers-jpa.md",_extension:"md"},"/articles/2012/06/23/hibernate-vers-jpa/relatedArticles":[]},prerenderedAt:1670226860792}}("element","text","p","a","nofollow","li","Slides","https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fspring-training\u002Fsrc",false,"","root","http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2012\u002F06\u002Fjava.png","img","\u002Fimages\u002Fjava.png","java","J'ai pas mal mangé de JPA + Spring cette année entre ","http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fp-r-o-f-s\u002F","P.R.O.F.S","les cours que j'ai donnée à l'IUT de Montreuil"," et une utilisation intensive de JPA sur ","http:\u002F\u002Fwww.localizeyourapps.com","Localizeyourapps.com","localizeyourapps",".","Dans la continuité j'ai donc donné une petite présentation chez mon client actuel autour de JPA. Autant que ca resserve, je vous propose de consulter les slides et surtout les sources d'exemples.","L'objectif pour mon client c'était qu'il commence à s'approprier la techno pour voir comment l'introduire progressivement. Malheureusement je suis un grand bavard donc les slides peuvent être un peu difficile à comprendre sans la voix off ^^","http:\u002F\u002Fhakanai.free.fr\u002Fwp-content\u002Fuploads\u002F2012\u002F06\u002FJPA.pptx","em","(malheureusement le pptx a rencontré des erreurs de conversion sur slideshare, du coup pas de visionneuse directement sur le site)"," Plus intéressant, voici un lien vers les sources sur bitbucket qui ont constitué le support pour les cours d'IUT. Il s'agit d'un projet bac à sable destiné à des débutants (certains voyaient Java pour la première année !). Mais le projet contient malgré tout des choses intéressantes :","ul","une intégration avec spring 3.1,","du spring mvc,","du hibernate validator,","des tests avec base de données embarquées.","N'hésitez pas à piocher dedans :",2))