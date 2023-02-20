export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:{"/articles/2011/07/07/utiliser-mockito-et-powermock":{_path:"\u002Farticles\u002F2011\u002F07\u002F07\u002Futiliser-mockito-et-powermock",_dir:"07",_draft:j,_partial:j,_locale:k,_empty:j,title:"Utiliser Mockito et PowerMock",description:"[![](\u002Fimages\u002Fmockito.jpg \"mockito\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F07\u002Fmockito.jpg)Vous connaissez peut-être déjà [Mockito](http:...",id:"380",date:"2011-07-07",categories:["waza"],tags:["java",l,"powermock","testunitaire"],img:"mockito.jpg",cover:"cover2.jpg",readingTime:{text:"5 min read",minutes:4.165,time:249900,words:833},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:b,tag:g,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F07\u002Fmockito.jpg",rel:[h]},children:[{type:b,tag:"img",props:{alt:k,src:"\u002Fimages\u002Fmockito.jpg",title:l},children:[]}]},{type:a,value:"Vous connaissez peut-être déjà "},{type:b,tag:g,props:{href:m,rel:[h]},children:[{type:a,value:"Mockito"}]},{type:a,value:" ? En fait vous connaissez même surement pour ceux qui ont eu la chance d'être présent à la "},{type:b,tag:g,props:{href:"http:\u002F\u002Fjduchess.org\u002Fduchess-france\u002Fblog\u002Fmarmite-soiree-crumble-pour-la-premiere-edition\u002F",rel:[h]},children:[{type:a,value:"première soirée Marmite des JDuchess"}]},{type:a,value:n}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et pourquoi j'en parle ? Bon, pas seulement parce que leur logo est un mojito géant et que j'adore cette boisson (*), mais tout simplement pour présenter quelques astuces d'utilisation avec PowerMock."}]},{type:b,tag:c,props:{},children:[{type:a,value:"* inconsciemment ca doit jouer un peu quand même"}]},{type:b,tag:e,props:{id:o},children:[{type:a,value:p}]},{type:b,tag:c,props:{},children:[{type:a,value:"Petit retour aux sources, selon "},{type:b,tag:g,props:{href:m,rel:[h]},children:[{type:a,value:"le site officiel"}]},{type:a,value:" : \"Mockito is a mocking framework that tastes really good.\""}]},{type:b,tag:e,props:{id:q},children:[{type:a,value:r}]},{type:b,tag:"ol",props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Parce que son API utilise un DSL agréable à utiliser, lisible, typé :"},{type:b,tag:"br",props:{},children:[]},{type:a,value:"when(mockedList.get(0)).thenReturn(\"first\");\nwhen(mockedList.get(2)).thenThrow(new ArrayOutOfBoundException());"}]},{type:b,tag:i,props:{},children:[{type:a,value:"Pas de record-replay obligatoire"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ca c'est pour ceux qui connaissent EasyMock, pas besoin de préciser le comportement attendu de votre mock dans ses moindres détails. On se focalise juste sur le resultat produit par l'objet testé, pas sur sa facon d'utiliser le mock. (A noter que EasyMock permet désormais de créer des mocks sans nécessité de préciser son comportement avec createNiceMock)"}]},{type:b,tag:e,props:{id:s},children:[{type:a,value:t}]},{type:b,tag:c,props:{},children:[{type:a,value:"Parce que Mockito tout seul ne permet pas de gérer quelques cas sur du code \"intestable\". Et ce que j'appelle intestable, alors ça, je suis sur que vous en avez déjà vu (ou alors vous avez une veine incroyable et je veux savoir où vous travaillez !) :"}]},{type:b,tag:"ul",props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"des méthodes statiques de partout (getInstance, Lookup, etc...)"}]},{type:b,tag:i,props:{},children:[{type:a,value:"des blocs statiques"}]},{type:b,tag:i,props:{},children:[{type:a,value:"un constructeur qui fait papa-maman (j'adore cette expression...)"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour info, vous avez déjà un bon article sur le sujet mais concernant JMockit : "},{type:b,tag:g,props:{href:u,rel:[h]},children:[{type:a,value:u}]}]},{type:b,tag:e,props:{id:v},children:[{type:a,value:w}]},{type:b,tag:c,props:{},children:[{type:a,value:"Tout simplement parce que quand on parle de test unitaire, on fait référence à des tests "},{type:b,tag:d,props:{},children:[{type:a,value:"UNITAIRES"}]},{type:a,value:" ! Et tester unitairement un objet ça veut dire le tester en isolation, donc pas d'appel à une base de données, à une file de messages etc... Dans l'idéal, un test unitaire ne teste qu'une seule classe. On utilise d'ailleurs une convention simple et assez parlante pour cela : MonObjet est testé par MonObjetTest (ou TestMonObjet)."}]},{type:b,tag:c,props:{},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"Point personnel, sur ce dernier point, je suis plus coulant. Un test reste unitaire du moment que je n'utilise pas de ressources externes (base de données etc...) mais j'accepte l'utilisation d'autre classes du moment que je maitrise leurs propres interactions."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et donc pour tester en isolation nous allons avoir besoin des fausses implémentations de toutes les dépendances de notre objet. Nous pourrions les écrire toutes, en admettant que chaque dépendance soit utilisé via une interface mais ce serait très fastidieux. Utiliser une librairie de mock permettra donc d'éviter une tâche bien pénible."}]},{type:b,tag:e,props:{id:x},children:[{type:a,value:y}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mockito est fourni avec runner Junit que l'on peut activer comme suit :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"@RunWith(MockitoJUnitRunner.class)\npublic class TestMyObjet\n{\n@InjectMocks\nprivate MyObject myObjet = new MyObject();"}]},{type:b,tag:c,props:{},children:[{type:a,value:"@Mock\nprivate MyComplexObject myComplexObject;"}]},{type:b,tag:c,props:{},children:[{type:a,value:"@Mock\nprivate IMyComplexInterface anotherComplexObject ;\n...\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Première bonne nouvelle, en utilisant l'annotation "},{type:b,tag:d,props:{},children:[{type:a,value:"@Mock"}]},{type:a,value:", le runner Mockito va créer pour vous tout les mocks qui sont déclarés que ce soit des interfaces ou des classes."}]},{type:b,tag:e,props:{id:z},children:[{type:a,value:A}]},{type:b,tag:c,props:{},children:[{type:a,value:"Là ou le runner est encore plus fort, c'est qu'il va injecter tout les mocks nécessaires sur l'objet annoté par "},{type:b,tag:d,props:{},children:[{type:a,value:"@InjectMocks"}]},{type:a,value:". Et là c'est très pratique, surtout si vous avez du code sans setter."}]},{type:b,tag:c,props:{},children:[{type:a,value:"public class MyObjet\n{\n...\n@Autowired\nprivate MyComplexObjet myComplexObjet;\n..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"myComplexObjet est privé et n'a aucun setter, donc sans le runner Mockito vous ne pourriez pas l'injecter."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Bon en fait, si comme nous allons le voir."}]},{type:b,tag:c,props:{},children:[{type:a,value:"D'ailleurs dans le cas suivant Mockito ne vous sera d'aucune aide et du coup nous allons quand même avoir recours à des ruses de sioux :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"public class MyObjet\n{\n@Value(\"${onekey}\")\nprivate String onekey;\n@Value(\"${anotherkey}\")\nprivate String anotherkey;\n...\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Dans ce cas, vous pouvez utiliser Spring à la rescousse et "},{type:b,tag:d,props:{},children:[{type:a,value:"ReflectionTestUtils"}]},{type:a,value:" :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"@Before\npublic void initialize ()\n{\nReflectionTestUtils.setField(myObject, \"onekey\", \"one\");\nReflectionTestUtils.setField(myObject, \"anotherkey\", \"two\");\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"C'est pas du Mockito mais ça valait le coup d'être cité."}]},{type:b,tag:e,props:{id:B},children:[{type:a,value:C}]},{type:b,tag:c,props:{},children:[{type:a,value:"En fait Mockito n'est pas capable de mocker une méthode statique par lui même. Pour cela il va falloir appeler "},{type:b,tag:g,props:{href:"http:\u002F\u002Fcode.google.com\u002Fp\u002Fpowermock\u002F",rel:[h]},children:[{type:a,value:"PowerMock"}]},{type:a,value:" à la rescousse."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour l'activer, vous allez désormais utiliser un autre runner : "},{type:b,tag:d,props:{},children:[{type:a,value:"PowerMockRunner"}]},{type:a,value:n}]},{type:b,tag:c,props:{},children:[{type:a,value:"@RunWith(PowerMockRunner.class)\n@PrepareForTest({ Lookup.class })\n@PowerMockIgnore(\"org.apache.commons.logging.*\")\npublic class TestMyObject\n{\n...\n@Before\npublic void initialize() throws Exception\n{\n\u002F\u002F Comme vous n'utilisez pas MockitoRunner, vous devez faire appel à initMocks pour initialiser vos mocks\nMockitoAnnotations.initMocks(this);\n...\n\u002F\u002F o utilise PowerMockito pour mocker l'appel statique à Lookup.getInstance()\n\u002F\u002F -------------------------------------------------------------------\nPowerMockito.mockStatic(Lookup.class);\nLookup lookup = mock(Lookup.class);\nwhen(Lookup.getInstance()).thenReturn(lookup);\n...\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Explications de texte :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Activation du runner :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"@RunWith(PowerMockRunner.class)"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Liste des objets dont on va faire un mock de méthode statiques :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"@PrepareForTest({ Lookup.class })"}]},{type:b,tag:c,props:{},children:[{type:a,value:"La ligne suivante est nécessaire car on n'utilise plus le runner "},{type:b,tag:d,props:{},children:[{type:a,value:"MockitoJUnitRunner"}]},{type:a,value:" mais que l'on souhaite quand même utiliser les annotations "},{type:b,tag:d,props:{},children:[{type:a,value:"Mocks"}]},{type:a,value:" et "},{type:b,tag:d,props:{},children:[{type:a,value:"InjectMocks"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"MockitoAnnotations.initMocks(this);"}]},{type:b,tag:c,props:{},children:[{type:a,value:"et enfin, le mock de la méthode statique :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"PowerMockito.mockStatic(Lookup.class);\nLookup lookup = mock(Lookup.class);\nwhen(Lookup.getInstance()).thenReturn(lookup );"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Facile non ?"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Allez, une petite dernière pour la route. Et si mon objet doit implémenter deux interfaces ? Par exemple j'utilise Carbon pour l'injection de dépendance (ok on sent le projet legacy là) et du coup tout mes beans doivent aussi implémenter l'interface Component."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ouf, Mockito le gère depuis 2009 :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"mock(Lookup.class, withSettings().extraInterfaces(Component.class));"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voila, vous en savez (peut-être) un peu plus sur Mockito, à vous de jouer maintenant !"}]}],toc:{title:k,searchDepth:D,depth:D,links:[{id:o,depth:f,text:p},{id:q,depth:f,text:r},{id:s,depth:f,text:t},{id:v,depth:f,text:w},{id:x,depth:f,text:y},{id:z,depth:f,text:A},{id:B,depth:f,text:C}]}},_type:"markdown",_id:"content:articles:2011:07:07:utiliser-mockito-et-powermock.md",_source:"content",_file:"articles\u002F2011\u002F07\u002F07\u002Futiliser-mockito-et-powermock.md",_extension:"md"}},prerenderedAt:1676918286104}}("text","element","p","strong","h3",3,"a","nofollow","li",false,"","mockito","http:\u002F\u002Fmockito.org\u002F",".","mais-cest-quoi-mockito","Mais c'est quoi Mockito ?","et-pourquoi-mockito","Et pourquoi Mockito ?","et-pourquoi-powermock","Et pourquoi Powermock ?","http:\u002F\u002Ffchabanois.developpez.com\u002Ftutorial\u002Fjava\u002Fjmockit\u002F","mais-revenons-aux-fondamentaux-pourquoi-utiliser-des-mocks","Mais revenons aux fondamentaux, pourquoi utiliser des mocks ?","passons-à-la-pratique","Passons à la pratique","gérer-les-attributs-privés-sans-setters","Gérer les attributs privés sans setters !","mocker-une-méthode-statique","Mocker une méthode statique",2))