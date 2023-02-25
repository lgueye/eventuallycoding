export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:{"/articles/2010/11/28/bonnes-pratique-de-codage-en-c-2":{_path:"\u002Farticles\u002F2010\u002F11\u002F28\u002Fbonnes-pratique-de-codage-en-c-2",_dir:"28",_draft:z,_partial:z,_locale:e,_empty:z,title:"Bonnes pratique de codage en C#",description:"Dans la lignée d'un [billet précédent](http:\u002F\u002Flocalhost\u002Flocalweb\u002Fwordpress\u002F?p=144 \"Introduction aux tests unitaires et aux bouchons en C#\") qui consti...",id:"145",date:"2010-11-28",categories:["waza"],tags:["csharp","testunitaire"],img:"linkext7.gif",cover:"cover3.jpg",readingTime:{text:"10 min read",minutes:9.51,time:570600,words:1902},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Dans la lignée d'un "},{type:a,tag:h,props:{href:"http:\u002F\u002Flocalhost\u002Flocalweb\u002Fwordpress\u002F?p=144",rel:[l],title:"Introduction aux tests unitaires et aux bouchons en C#"},children:[{type:b,value:"billet précédent"}]},{type:b,value:" qui constituait une introduction aux tests unitaires en C#, voici un autre billet orienté \"bonnes pratiques de codage\" toujours en C#."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais loin d'être cantonné au C#, les principes données dans ce billet sont facilement transposables dans d'autres langages. Après tout, il ne s'agit que de \"bonnes pratiques\"."}]},{type:a,tag:m,props:{id:"les-principes-généraux"},children:[{type:b,value:"Les principes généraux"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les deux principes généraux pour une bonne testabilité :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"l'isolabilité"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la simplicité"}]}]},{type:a,tag:C,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"La perfection est atteinte non pas quand il n’y a plus rien à ajouter, mais quand il n’y a plus rien à retirer !"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Symptômes d'un code intestable :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Symptômes d'un code testable :"}]},{type:a,tag:m,props:{id:"constructeur-couteux"},children:[{type:b,value:"Constructeur couteux"}]},{type:a,tag:n,props:{id:D},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple de constructeur couteux :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public Dictionnaire ()\n{\nStreamReader monStreamReader = new StreamReader(\"francais.txt\");\nstring ligne = monStreamReader.ReadLine();"}]},{type:a,tag:f,props:{code:t,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:t}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Problèmes :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"potentiellement couteux"}]},{type:a,tag:d,props:{},children:[{type:b,value:"dépendant d'une ressource externe (le fichier francais.txt)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"création d'objet (présence de new)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"l'initialisation peut échouer"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"=\u003E "},{type:a,tag:r,props:{},children:[{type:b,value:"Le test n'est pas isolé, il peut durer longtemps et son comportement ne peut pas être différent entre deux tests"}]}]},{type:a,tag:n,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:v,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:"public Dictionnaire ()\n{\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"private void Init ()\n{\nStreamReader monStreamReader = new StreamReader(\"francais.txt\");\nstring ligne = monStreamReader.ReadLine();"}]},{type:a,tag:f,props:{code:t,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:t}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"=\u003E pour du code existant, le risque c'est que les appelants n'appellent pas cette méthode"}]},{type:a,tag:v,props:{id:I},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:"protected void Init ()\n{\nStreamReader monStreamReader = new StreamReader(\"francais.txt\");\nstring ligne = monStreamReader.ReadLine();"}]},{type:a,tag:f,props:{code:t,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:t}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"=\u003E la méthode étant protected, on peut créer un objet DictionnaireTestable qui redéfinit la méthode Init"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class DictionnaireTestable ()\n{\nprotected void Init ()\n{\n\u002F\u002F Do nothing\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"=\u003E Obligé de créer une classe pour les tests"}]},{type:a,tag:v,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:"public Dictionnaire (boolean ForTest)\n{\n\u002F\u002F Do nothing\n}"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"risque de confusion avec le constructeur existant"}]},{type:a,tag:d,props:{},children:[{type:b,value:"paramétre supplémentaire non utilisé"}]}]},{type:a,tag:v,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"objets liés passés en paramètre"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"public Dictionnaire ()\n{\n\u002F\u002F ancien code\n...\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public Dictionnaire (Dictionary definitions )\n{\nthis.definitions = definitions;\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les définitions sont initialisées dans une factory."}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class DictionnaireFactory\n{\npublic static Dictionnaire buildFromTextFile ()\n{\nDictionary definitions = new Dictionnary();\nStreamReader monStreamReader = new StreamReader(\"francais.txt\");\nstring ligne = monStreamReader.ReadLine();"}]},{type:a,tag:f,props:{code:O,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:O}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ainsi, un test peut utiliser le constructeur avec un dictionnary par défaut. La lecture du fichier a été délocalisé hors de la classe."}]},{type:a,tag:v,props:{id:P},children:[{type:b,value:Q}]},{type:a,tag:c,props:{},children:[{type:b,value:"La technique ci-dessus a cependant un risque important si on l'applique naivement, celui de briser l'encapsulation."}]},{type:a,tag:c,props:{},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class Car\n{\npublic Car (Engine engine);\n...\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"En exposant les collaborateurs je donne des indications sur la façon dont fonctionne mon objet. Ici ma voiture est une voiture à moteur."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si au final l'appelant doit instancier tout les objets nécessaires à ma voiture : le moteur, le frein, la boite de vitesse, je brise l'encapsulation et je rends l'utilisation de l'objet très difficile."}]},{type:a,tag:c,props:{},children:[{type:b,value:"D'où l'intérêt de manipuler des interfaces et d'utiliser des Factory."}]},{type:a,tag:m,props:{id:"les-instanciations-directes"},children:[{type:b,value:"Les instanciations directes"}]},{type:a,tag:n,props:{id:R},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les instanciations (via l'opérateur new) comme dans l'exemple suivant peuvent être gênant pour les tests :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dictionnaire dico = new Dictionnaire ();\n..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ici on créé un couplage fort avec l'implémentation du dictionnaire."},{type:a,tag:u,props:{},children:[]},{type:b,value:"\nSi celui-ci établit une connexion à la base de données, le code devient intestable."}]},{type:a,tag:n,props:{id:S},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"Plusieurs approches sont possibles, elles sont toutes basées sur l'utilisation d'une interface qui va définir le contrat du dictionnaire."}]},{type:a,tag:c,props:{},children:[{type:b,value:"public interface IDictionnaire\n{\n...\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le code appelant utilisera désormais l'interface qui ne déclare que son comportement métier."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On pourra ensuite utiliser :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"une Factory"}]},{type:a,tag:d,props:{},children:[{type:b,value:"l'injection de dépendances via un framework spécialisé (Spring.Net, GenericFacade etc...)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\u002F Ici la factory nous permet de rajouter un découplage entre celui qui utilise et l'implémentation.\nIDictionnaire dico = DictionnaireFactory.BuildDictionnaire ();\n..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"ou avec Spring.Net"}]},{type:a,tag:c,props:{},children:[{type:b,value:"ApplicationContext ctx = ContextRegistry.GetContext();\nIDictionnaire dico= (IDictionnaire ) ctx.GetObject (\"MyDictionnaire\");"}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'intérêt des Frameworks, entre autre, par rapport à une factory classique, c'est de pouvoir configurer l'implémentation renvoyé selon le contexte."}]},{type:a,tag:m,props:{id:"les-blocs-statiques"},children:[{type:b,value:"Les blocs statiques"}]},{type:a,tag:n,props:{id:T},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'utilisation de bloc statique est impossible en C# donc ce paragraphe n'est pas applicable."},{type:a,tag:u,props:{},children:[]},{type:b,value:"\nCependant en C# on peut avoir des constructeurs statiques."}]},{type:a,tag:c,props:{},children:[{type:b,value:"class SimpleClass\n{\n\u002F\u002F Static constructor\nstatic SimpleClass()\n{\n\u002F\u002F...\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le défaut des constructeurs statiques étant qu'ils créent un état permanent. Tester une classe avec état peut être très difficile a cause des effets de bord :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"class SimpleClass\n{\nprivate static int compteur;"}]},{type:a,tag:f,props:{code:U,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:U}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:V},{type:a,tag:r,props:{},children:[{type:b,value:W}]},{type:b,value:X}]},{type:a,tag:f,props:{code:Y,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:Y}]}]}]},{type:a,tag:n,props:{id:Z},children:[{type:b,value:_}]},{type:a,tag:c,props:{},children:[{type:b,value:"class SimpleClass\n{\nprivate int compteur;"}]},{type:a,tag:f,props:{code:$,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:$}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:m,props:{id:"dynastie-de-classes"},children:[{type:b,value:"Dynastie de classes"}]},{type:a,tag:n,props:{id:aa},children:[{type:b,value:ab}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'utilisation de l'héritage n'est pas toujours idéale :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"duplication de code"}]},{type:a,tag:d,props:{},children:[{type:b,value:"fragilité du modèle"}]},{type:a,tag:d,props:{},children:[{type:b,value:"non réutilisabilité"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En fait, bien souvent : "},{type:a,tag:r,props:{},children:[{type:b,value:"Il faut privilégier la composition à l'héritage"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous n'allons pas redémontrer ce point ici, mais si vous voulez plus de sources à ce sujet :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Fberniesumption.com\u002Fsoftware\u002Finheritance-is-evil-and-must-be-destroyed\u002F",rel:[l]},children:[{type:b,value:"Inhéritance is evil and must be destroyed"},{type:a,tag:o,props:{alt:e,src:q},children:[]}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Fwww.siteduzero.com\u002Ftutoriel-3-65563-les-limites-de-l-heritage-le-pattern-strategy.html",rel:[l]},children:[{type:b,value:"Les limites de l'héritage (le pattern strategy)"},{type:a,tag:o,props:{alt:e,src:q},children:[]}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Fblogs.developpeur.org\u002Ftja\u002Farchive\u002F2009\u002F06\u002F28\u002Fdesign-patterns-privil-giez-la-composition-l-h-ritage-strat-gie.aspx",rel:[l]},children:[{type:b,value:"Le design pattern Stratégy en .Net"},{type:a,tag:o,props:{alt:e,src:q},children:[]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En fait, selon le principe de Liskov :"}]},{type:a,tag:C,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\"une relation d'héritage est bien employée s'il est possible de substituer n'importe quel instance d'une super-classe, par n'importe quel instance d'une de ses sous-classes, sans que la sémantique d'un programme écrit dans les termes de la super-classe n'en soit affectée.\""}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"(Cf. "},{type:a,tag:h,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FPrincipe_de_substitution_de_Liskov",rel:[l]},children:[{type:b,value:"Le principe de Liskov, à la base de la conception par contrat"},{type:a,tag:o,props:{alt:e,src:q},children:[]}]},{type:b,value:B}]},{type:a,tag:n,props:{id:ac},children:[{type:b,value:ad}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ci-dessous un hiérarchie de classe :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un compte peut être spécialisé en compte courant ou compte epargne. Un compte hérite des méthodes liées aux objets sécurisées et sauvegardable."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Outre les problèmes inhérents à cette modélisation :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"duplication de code au niveau des comptes (sans doute des override pour redéfinir des comportements)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"réutilisation des comptes en dehors du contexte de notre modèle de données impossible"}]},{type:a,tag:d,props:{},children:[{type:b,value:"fragilité du modèle (rajouter des types de comptes, spécialiser la sécurité par type d'objet ou la sauvegarde, tout cela est dangereux pour ce modèle legacy)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"scalabilité faible (que va-t-il se passer avec 32 types de comptes différents)"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"Il se pose aussi des problèmes de testabilité !"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:A}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Pour tester un compte, je dois configurer une connexion à la base de données car EntiteSauvegardable s'initialise à partir d'une connexion"}]},{type:a,tag:d,props:{},children:[{type:b,value:"La sécurisation nécessite l'accès à une ressource Active Directory"},{type:a,tag:u,props:{},children:[]},{type:b,value:"\netc..."}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"En instanciant un objet Compte, je suis fortement couplé avec les objets dont il hérite."}]}]},{type:a,tag:n,props:{id:ae},children:[{type:b,value:w}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"le design pattern strategy (voir article plus haut)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la composition (un compte n'est pas une entité sécurisé mais "},{type:a,tag:r,props:{},children:[{type:b,value:"utilise"}]},{type:b,value:" une entité sécurisé)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la séparation des responsabilités (séparation DAO (accès aux données), entités (objets simples), services (comportement métier)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Toutes ces solutions reposent sur la programmation par contrat (l'utilisation d'interface pour définir le contrat d'un objet) et peuvent s'appuyer sur l'injection de dépendances pour injecter les implémentations correspondantes au comportement voulu."}]},{type:a,tag:c,props:{},children:[{type:a,tag:r,props:{},children:[{type:b,value:"Et surtout, c'est testable !"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class Compte\n{\nprivate string titulaire;\nprivate float amount;\nprivate ISecureEntity;\n....\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"En injectant un bouchon pour ISecureEntity, mon Compte est testable en isolation."}]},{type:a,tag:af,props:{},children:[{type:a,tag:"colgroup",props:{},children:[{type:a,tag:ag,props:{width:24},children:[]},{type:b,value:ah},{type:a,tag:ag,props:{},children:[]},{type:b,value:ah}]},{type:a,tag:ai,props:{},children:[{type:a,tag:aj,props:{},children:[{type:a,tag:y,props:{vAlign:ak},children:[{type:a,tag:o,props:{src:"\u002Fimages\u002Finformation.gif",alt:e,width:al,height:al,align:"absmiddle",border:0},children:[]}]},{type:a,tag:y,props:{},children:[{type:b,value:"L'exemple ci-dessus bénéficierait sans doute encore plus d'une véritable séparation des responsabilités. Le compte ne devrait pas être responsable de la façon dont il est sauvé, ou sécurisé."}]}]}]}]},{type:a,tag:m,props:{id:"des-états-globaux"},children:[{type:b,value:"Des états globaux"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un état global est en général contenu par une variable globale :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public static string maValeur ;"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les différents problèmes que posent les variables globales :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"La variable globale persiste d'un test à l'autre et créé de la confusion"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Un test peut fonctionner seul mais pas quand il est joué avec les autres"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Les tests peuvent échouer ensemble mais marcher individuellement"}]},{type:a,tag:d,props:{},children:[{type:b,value:"L'ordre des tests influe sur le résultat"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'exemple plus haut avec un compteur dans un bloc statique illustre bien ces problèmes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"class SimpleClass\n{\nprivate static int compteur = 0 ;"}]},{type:a,tag:f,props:{code:am,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:am}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:V},{type:a,tag:r,props:{},children:[{type:b,value:W}]},{type:b,value:X}]},{type:a,tag:f,props:{code:an,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:an}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il existe un pattern pour remplacer cette variable globale : le singleton ("},{type:a,tag:"em",props:{},children:[{type:b,value:"mais injecté !"}]},{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class Compteur\n{\nprivate int myCompteur ;\npublic int MyCompteur\n{\nget {return myCompteur} ;\nset {myCompteur = value}\n}"}]},{type:a,tag:f,props:{code:ao,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:ao}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous avez encapsulé le comportement de votre compteur dans un objet compteur, lui-même pourra être injecté dans les classes qui l'utilisent."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ainsi, dans un contexte de production vous utiliserez un singleton et garantirez donc que votre état reste global à l'application."},{type:a,tag:u,props:{},children:[]},{type:b,value:"\nSi par exemple vous utilisez spring.Net, vous utiliserez des singletons :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et dans un contexte de production, vous pourrez injecter une nouvelle instance de compteur pour chaque test."}]},{type:a,tag:m,props:{id:"annuaire-de-service"},children:[{type:b,value:"Annuaire de service"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si l'utilisation d'annuaire est récurrente, son usage doit être bien contrôlé pour favoriser une bonne testabilité."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prenons les exemples suivant :"}]},{type:a,tag:f,props:{code:ap,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:ap}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces bouts de code ont un impact sur la testabilité :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"méthodes statiques (voir plus haut)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"liaison avec l'implémentation du XmlApplicationContext basé sur un fichier xml dans le premier exemple"}]},{type:a,tag:d,props:{},children:[{type:b,value:"dépendances cachées entre objet"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"De façon générale, l'injection de dépendance permet d'éviter l'utilisation des annuaires."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant si l'utilisation d'un annuaire est nécessaire, l'injection de l'annuaire est préférable à l'instanciation directe."},{type:a,tag:u,props:{},children:[]},{type:b,value:"\nDans le premier exemple, se faire injecter un IApplicationContext permet d'être indépendant de l'implémentation et donc de fournir à l'annuaire nos propres services."}]},{type:a,tag:m,props:{id:"trop-dintermédiaire"},children:[{type:b,value:"Trop d'intermédiaire"}]},{type:a,tag:c,props:{},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"public void facturer (Commande commande, Client client)\n{\nbanqueService.prelever (client.getCompteBancaire(),commande.getTotal());\nemailService.notifierPrelevement(client.getEmail());\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les défauts :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"manque de lisibilité, la facturation nécessite bien plus que Commande et Client"}]},{type:a,tag:d,props:{},children:[{type:b,value:"initialisation du test complexe"}]},{type:a,tag:d,props:{},children:[{type:b,value:"couplage avec les objets intermédiaires"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La solution :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"appliquer le principe de "},{type:a,tag:h,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FLoi_de_D%C3%A9m%C3%A9ter",rel:[l]},children:[{type:b,value:"Demeter"},{type:a,tag:o,props:{alt:e,src:q},children:[]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple de test avant :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Commande commande = new Commande();commande.setTotal(20.0);"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Client client = new Client();\nCompte compte = new Compte();\nclient.setCompte  (compte);"}]},{type:a,tag:c,props:{},children:[{type:b,value:"string email= \""},{type:a,tag:h,props:{href:aq},children:[{type:b,value:ar}]},{type:b,value:"\";\nclient.setEmail(email);"}]},{type:a,tag:c,props:{},children:[{type:b,value:"manager.facturer (commande,client);"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Après :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Compte compte = new Compte();\nstring email= \""},{type:a,tag:h,props:{href:aq},children:[{type:b,value:ar}]},{type:b,value:"\";\ndouble total = 20.0;"}]},{type:a,tag:c,props:{},children:[{type:b,value:"manager.facturer (compte,total,email);"}]},{type:a,tag:m,props:{id:"méthodes-trop-chargées"},children:[{type:b,value:"Méthodes trop chargées"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une méthode est trop chargé :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"s'il y a trop de if else, for, while imbriqué"}]},{type:a,tag:d,props:{},children:[{type:b,value:"s'il y a beaucoup de conditions"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"=\u003E on utilise souvent l'indicateur de complexité cyclomatique pour le mesurer."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comment faire baisser la complexité :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"déléguer dans d'autres méthodes"}]},{type:a,tag:d,props:{},children:[{type:b,value:"extraire d'autres classes et déléguer"}]},{type:a,tag:d,props:{},children:[{type:b,value:"utiliser le polymorphisme"}]},{type:a,tag:d,props:{},children:[{type:b,value:"retourner des objets vides plutot que null"}]},{type:a,tag:d,props:{},children:[{type:b,value:"donner des valeurs par défaut (pour éviter les else)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quel est le rapport avec la testabilité ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Plus il y a de routes différentes (les valeurs aux limites, les valeurs null), plus le test sera complexe à écrire."}]},{type:a,tag:n,props:{id:as},children:[{type:b,value:at}]},{type:a,tag:c,props:{},children:[{type:b,value:"public boolean laisserPasser (Personne personne)\n{\nif (personne.getAge() \u003E 12 && personne.getTaille() \u003E 1.3 && personne.EstEnBonneSante())\n{\nif ((personne.getAge() \u003C 18 && personne.EstAccompagne()) || personne.getAge()\u003E=18)\n{\nfacturer(personne);\nreturn true;\n}\n}\nreturn false;\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple avec découpage des méthodes :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public boolean laisserPasser (Personne personne)\n{\nif (EstPhysiquementCompatibleJeuxIntense(personne))\n{\nif (EstLegalementCompatibleJeuxIntense(personne))\n{\nfacturer(personne);\nreturn true;\n}\n}\nreturn false;\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple avec délégation dans d'autres classes :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"private PersonneChecker personneChecker;"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public boolean laisserPasser (Personne personne)\n{\nif (personneChecker.PhysiqueMinimum(personne) && personneChecker.EstMajeur(personne))\n{\nfacturer(personne);\nreturn true;\n}\nreturn false;\n}"}]},{type:a,tag:n,props:{id:au},children:[{type:b,value:av}]},{type:a,tag:c,props:{},children:[{type:b,value:aw}]},{type:a,tag:f,props:{code:ax,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:ax}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"si le Dao est fait de facon à toujours renvoyer une liste, même vide (c'est ce que fait NHibernate par exemple)"}]},{type:a,tag:c,props:{},children:[{type:b,value:aw}]},{type:a,tag:f,props:{code:ay,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:ay}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:p}]},{type:a,tag:m,props:{id:"conclusion"},children:[{type:b,value:"Conclusion"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme vu ci-dessus, la testabilité va souvent de pair avec une bonne conception objet."},{type:a,tag:u,props:{},children:[]},{type:b,value:"\nUne bonne conception permet une bonne modularité et une grande souplesse, tout ce qui est nécessaire à la testabilité."}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est d'ailleurs parce que la testabilité impose une programmation plus rigoureuse que certaines méthodes de développement impose d'écrire les tests en premiers (Voir "},{type:a,tag:h,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FTest_Driven_Development",rel:[l]},children:[{type:b,value:"TDD"},{type:a,tag:o,props:{alt:e,src:q},children:[]}]},{type:b,value:B}]},{type:a,tag:af,props:{width:36},children:[{type:a,tag:ai,props:{},children:[{type:a,tag:aj,props:{},children:[{type:a,tag:y,props:{vAlign:ak},children:[{type:b,value:az}]},{type:a,tag:y,props:{},children:[{type:b,value:az}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur un code ancien n'ayant pas été conçu pour être testable, l'application des solutions ci-dessus permet de rendre progressivement testable le logiciel."}]},{type:a,tag:m,props:{id:"sources"},children:[{type:b,value:"Sources"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:h,props:{href:aA,rel:[l]},children:[{type:b,value:aA},{type:a,tag:o,props:{alt:e,src:q},children:[]}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:h,props:{href:aB,rel:[l]},children:[{type:b,value:aB},{type:a,tag:o,props:{alt:e,src:q},children:[]}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:h,props:{href:aC,rel:[l]},children:[{type:b,value:aC},{type:a,tag:o,props:{alt:e,src:q},children:[]}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:h,props:{href:aD,rel:[l]},children:[{type:b,value:aD},{type:a,tag:o,props:{alt:e,src:q},children:[]}]}]}]}],toc:{title:e,searchDepth:k,depth:k,links:[{id:D,depth:k,text:s},{id:E,depth:k,text:F,children:[{id:G,depth:x,text:H},{id:I,depth:x,text:J},{id:K,depth:x,text:L},{id:M,depth:x,text:N},{id:P,depth:x,text:Q}]},{id:R,depth:k,text:s},{id:S,depth:k,text:w},{id:T,depth:k,text:s},{id:Z,depth:k,text:_},{id:aa,depth:k,text:ab},{id:ac,depth:k,text:ad},{id:ae,depth:k,text:w},{id:as,depth:k,text:at},{id:au,depth:k,text:av}]}},_type:"markdown",_id:"content:articles:2010:11:28:bonnes-pratique-de-codage-en-c-2.md",_source:"content",_file:"articles\u002F2010\u002F11\u002F28\u002Fbonnes-pratique-de-codage-en-c-2.md",_extension:"md"}},prerenderedAt:1677344865405}}("element","text","p","li","","code","ul","a",null,"pre",2,"nofollow","h1","h2","img","}","\u002Fimages\u002Flinkext7.gif","strong","Problématique","while (ligne != null)\n{\n    string\\[\\] words = ligne.Split(':');\n    definitions.Put(words \\[0\\],words \\[1\\]);\n    ligne = monStreamReader.ReadLine();\n}\nmonStreamReader.Close();\n","br","h3","Solution",3,"td",false,"Exemple :",")","blockquote","problématique","solutions","Solutions","méthodes-init-optionnelle","méthodes init optionnelle","méthode-init-surchargeable","méthode init surchargeable","constructeur-différent-pour-les-tests","constructeur différent pour les tests","solution-optimale","Solution optimale","    while (ligne != null)\n    {\n        string\\[\\] words = ligne.Split(':');\n        definitions.Put(words \\[0\\],words \\[1\\]);\n        ligne = monStreamReader.ReadLine();\n    }\n    monStreamReader.Close();\n\n    return new Dictionnaire (definitions);\n}\n","attention-à-lencapsulation","Attention à l'encapsulation","problématique-1","solution","problématique-2","\u002F\u002F Static constructor\nstatic SimpleClass()\n{\n    compteur = 0;\n}\n\npublic static int AddValueToCompteur (int value)\n{\n    compteur +=value;\n    return compteur;\n}\n","Les tests suivants échoueront aléatoirement =\u003E l'ordre des tests n'est pas garanti par les frameworks de tests. ","On ne doit pas se reposer sur l'ordre d'écriture des tests pour présumer du résultat",".","\\[Test\\]\npublic void TestAddNegativeValue()\n{\n    Assert.AreEquals(-2, SimpleClass.AddValueToCompteur(-2));\n\n}\n\\[Test\\]\npublic void TestAddPositiveValue()\n{\n    Assert.AreEquals(0, SimpleClass.AddValueToCompteur(2));\n}\n","suppression-des-constructeurs-statiques","Suppression des constructeurs statiques","public SimpleClass()\n{\n    compteur = 0;\n}\n\npublic int AddValueToCompteur (int value)\n{\n    compteur +=value;\n    return compteur;\n}\n","introduction","Introduction","exemple","Exemple","solution-1","table","col"," ","tbody","tr","top",16,"public static int AddValueToCompteur (int value)\n{\ncompteur +=value;\nreturn compteur;\n}\n","\\[Test\\]\npublic void TestAddNegativeValue()\n{\n    Assert.AreEquals(-2, SimpleClass.AddValueToCompteur(-2));\n}\n\\[Test\\]\npublic void TestAddPositiveValue()\n{\n    Assert.AreEquals(0, SimpleClass.AddValueToCompteur(2));\n}\n","public int AddValueToCompteur (int value)\n{\n    myCompteur += value\n    return myCompteur;\n}\n","XmlApplicationContext context = new XmlApplicationContext(\"assembly:\u002F\u002FMySolution\u002FNamespace\u002Fspring.xml\");\nMySuperObject configuration = (MySuperObject )context.GetObject(\"MySuperObject\");\n\nMySuperObject.DoSomething();\n\n....\n\nMyService service = Locator.findService (\"Service\");\nservice.DoSomething();\n\n....\n\npublic MonObjet (Context context)\n{\n    MyProperty1 = context.getProperty1();\n    MyProperty2 = context.getProperty2();\n    MyProperty3 = context.getProperty3();\n}\n","mailto:toto@free.fr","toto@free.fr","exemple1","Exemple1","exemple-2","Exemple 2","public void TraiterListeCommande()\n{\nList commandes = RecupererCommandes();","if (commandes != null)\n{\n    foreach (Commande commande in commandes)\n    {\n        \u002F\u002F do something\n    }\n}\n","foreach (Commande commande in commandes)\n{\n    \u002F\u002F do something\n}\n"," ","http:\u002F\u002Fblog.o2sources.com\u002F2009\u002F03\u002F23\u002Fcelui-qui-voulait-ecrire-du-code-testable.html","http:\u002F\u002Fmisko.hevery.com\u002Fcode-reviewers-guide\u002F","http:\u002F\u002Fgoogletesting.blogspot.com\u002F2008\u002F08\u002Fby-miko-hevery-so-you-decided-to.html","http:\u002F\u002Fwww.slideshare.net\u002Ffoucha\u002Fcomment-crire-du-code-testable"))