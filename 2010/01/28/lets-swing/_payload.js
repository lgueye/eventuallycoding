export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:{"/articles/2010/01/28/lets-swing":{_path:"\u002Farticles\u002F2010\u002F01\u002F28\u002Flets-swing",_dir:"28",_draft:i,_partial:i,_locale:j,_empty:i,title:"Let's Swing !",description:"Vous connaissez Swing ? Oui, enfin non, pas la [musique](http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FSwing_%28musique%29 \"Musique swing\")... En plus d'avoir fait dan...",id:"141",date:"2010-01-28",categories:["waza"],tags:["edt","substance","swing"],img:j,cover:"cover7.jpg",readingTime:{text:"9 min read",minutes:8.925,time:535500,words:1785},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Vous connaissez Swing ? Oui, enfin non, pas la "},{type:b,tag:d,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FSwing_%28musique%29",rel:[e],title:"Musique swing"},children:[{type:a,value:"musique"}]},{type:a,value:"... En plus d'avoir fait danser des générations, il s'agit aussi de la librairie Java pour les interfaces lourdes en Java (ok c'est moins glamour)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"A propos de Swing on parle souvent de sa grande complexité et le moins que l'on puisse dire, c'est que ce n'est pas exagéré (là on peut voir la comparaison avec la musique en fin de compte). Profitons de cet article pour revenir sur quelques uns de ces aspects qui en ont déjà dérouté plus d'un  :"}]},{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"la complexité de la gestion de l'EDT"}]},{type:b,tag:f,props:{},children:[{type:a,value:"les pièges du modèle événementiel."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Si ces deux points viennent souvent en tête des mauvaises pratiques de programmation les plus courantes, leurs effets sont surtout une des causes de "},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.developpez.net\u002Fforums\u002Fd833682-4\u002Fjava\u002Finterfaces-graphiques-java\u002Fon-faire-client-lourd-java\u002F",rel:[e],title:"La mauvaise réputation de Swing"},children:[{type:a,value:"la mauvaise réputation"}]},{type:a,value:" de Swing."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Allez, entrons dans le vif du sujet."}]},{type:b,tag:"h3",props:{id:m},children:[{type:a,value:n}]},{type:b,tag:c,props:{},children:[{type:a,value:"L'un des éceuils majeurs sur beaucoup d'IHM Java c'est la gestion des threads. En effet Swing repose sur un thread principal pour la gestion de l'affichage. Je ne décrirais pas dans le détail l'objet de ce Thread mais celui-ci a pour objectif de repeindre les différentes parties affiché dans un certain ordre. Ce thread appelé EDT (Event dispatcher Thread) suit donc un algorithme relativement séquentiel pour l'affichage. Si vous voulez en savoir plus sur l'EDT, je vous conseille la lecture de "},{type:b,tag:d,props:{href:"http:\u002F\u002Ffilthyrichclients.org\u002F",rel:[e],title:"Filthy Rich Client"},children:[{type:a,value:"Filthy Rich Clients"}]},{type:a,value:", son fonctionnement y est décrit en détail dans plusieurs chapitres."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce qu'il faut en retenir, c'est que l'affichage géré par l'EDT n'est pas Thread safe ! Les opérations liées à l'affichage des composants graphiques est monothread et toute mise à jour en dehors de ce thread peut avoir un comportement imprévisible."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce qui implique :"}]},{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"si l'affichage est monothread, il faut placer le traitements longs qui ne sont pas liés à l'affichage dans des threads séparés"}]},{type:b,tag:f,props:{},children:[{type:a,value:"à l'inverse, pour les modifications des composants graphiques il faut poster toutes les demandes de modifications de l'IHM dans l'EDT"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"sinon vous risquez respectivement :"}]},{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"d'avoir une application extrèmement lente puisque les traitements sous-jacents vont ralentir l'affichage"}]},{type:b,tag:f,props:{},children:[{type:a,value:"d'avoir des erreurs d'affichage puisque les ordres de repaint ne seront pas executés dans le bon sens"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je vous renvoie à "},{type:b,tag:d,props:{href:"http:\u002F\u002Fgfx.developpez.com\u002Ftutoriel\u002Fjava\u002Fswing\u002Fswing-threading\u002F",rel:[e]},children:[{type:a,value:"un excellent article de Romain Guy (Gfx)"}]},{type:a,value:", co-auteur de Filthy Rich Client justement,  pour plus de détails."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Soyons clairs, débutants comme confirmés peuvent tomber dans ces pièges. Je vais surtout parler des problèmes d'affichage car bien souvent les problèmes de lenteur sont plus simples à débusquer (ils arrivent à des moments précis du coup on devine \"facilement\" le traitement qui ralentit)."}]},{type:b,tag:k,props:{id:"les-problèmes-daffichage"},children:[{type:a,value:"Les problèmes d'affichage"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Les problèmes d'affichage peuvent être beaucoup plus pervers. Vous avez les traditionnels écrans gris. Mais vous pouvez aussi avoir des choses plus vicieuses :"}]},{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"des doubles affichages de fenêtre fantomes,"}]},{type:b,tag:f,props:{},children:[{type:a,value:"des textes incomplets,"}]},{type:b,tag:f,props:{},children:[{type:a,value:"des pertes de focus etc..."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Un problème d'affichage comme je l'indiquais résulte de l'EDT qui tente de raffraichir l'écran et l'ensemble des informations visibles avec des informations que vous lui avez donné de facon incohérente. Par exemple vous avez modifié un tableau hors de l'EDT ou repositionné une fenêtre etc..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Outre le symptome graphique, vous pouvez rencontrer ce type de trace dans votre application :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Exception in thread \"AWT-EventQueue-0\" java.lang.ArrayIndexOutOfBoundsException: Array index out of range: 5\nat java.util.Vector.get(Unknown Source)\nat com.developpez.table.TableSelectionModel.isSelectionEmpty(TableSelectionModel.java:565)\nat javax.swing.DefaultListSelectionModel.clear(Unknown Source)\nat javax.swing.DefaultListSelectionModel.changeSelection(Unknown Source)\nat javax.swing.DefaultListSelectionModel.changeSelection(Unknown Source)\nat javax.swing.DefaultListSelectionModel.setLeadSelectionIndex(Unknown Source)\nat com.developpez.table.TableSelectionModel.clearSelection(TableSelectionModel.java:94)\nat com.developpez.table.MyInputBean.focusGained(MyInputBean.java:99)\nat java.awt.AWTEventMulticaster.focusGained(Unknown Source)\nat java.awt.Component.processFocusEvent(Unknown Source)\nat java.awt.Component.processEvent(Unknown Source)\nat java.awt.Container.processEvent(Unknown Source)\nat java.awt.Component.dispatchEventImpl(Unknown Source)\nat java.awt.Container.dispatchEventImpl(Unknown Source)\nat java.awt.Component.dispatchEvent(Unknown Source)\nat java.awt.KeyboardFocusManager.redispatchEvent(Unknown Source)\nat java.awt.DefaultKeyboardFocusManager.typeAheadAssertions(Unknown Source)\nat java.awt.DefaultKeyboardFocusManager.dispatchEvent(Unknown Source)\nat java.awt.Component.dispatchEventImpl(Unknown Source)\nat java.awt.Container.dispatchEventImpl(Unknown Source)\nat java.awt.Component.dispatchEvent(Unknown Source)\nat java.awt.EventQueue.dispatchEvent(Unknown Source)\nat java.awt.EventDispatchThread.pumpOneEventForHierarchy(Unknown Source)\nat java.awt.EventDispatchThread.pumpEventsForHierarchy(Unknown Source)\nat java.awt.EventDispatchThread.pumpEvents(Unknown Source)\nat java.awt.EventDispatchThread.pumpEvents(Unknown Source)\nat java.awt.EventDispatchThread.run(Unknown Source)"}]},{type:b,tag:c,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"problème de focus sur une table modifié hors de l'EDT"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"java.lang.ArrayIndexOutOfBoundsException: No such child: 2\nat java.awt.Container.getComponent(Container.java:237)\nat javax.swing.JComponent.rectangleIsObscured(JComponent.java:3702)\nat javax.swing.JComponent.paint(JComponent.java:806)\nat javax.swing.JLayeredPane.paint(JLayeredPane.java:557)\nat javax.swing.JComponent.paintWithOffscreenBuffer(JComponent.java:4787)\nat javax.swing.JComponent.paintDoubleBuffered(JComponent.java:4740)\nat javax.swing.JComponent._paintImmediately(JComponent.java:4685)\nat javax.swing.JComponent.paintImmediately(JComponent.java:4488)\nat javax.swing.RepaintManager.paintDirtyRegions(RepaintManager.java:410)\nat javax.swing.SystemEventQueueUtilities$ComponentWorkRequest.run(SystemEventQueueUtilities.java:117)\nat java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:189)\nat java.awt.EventQueue.dispatchEvent(EventQueue.java:478)\nat java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:201)\nat java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:151)\nat java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:145)\nat java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:137)\nat java.awt.EventDispatchThread.run(EventDispatchThread.java:100)"}]},{type:b,tag:c,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"problème de repaint sur des zones modifié hors de l'EDT"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Avec cette stacktrace on se rend compte de la difficulté du problème : ce n'est pas notre code ^^ Donc en debug il y a de grands risques que l'on ne voit rien. C'est vrai qu'avec un peu d'expérience on comprend rapidement qu'on est face à un problème d'EDT mais traquer manuellement le code responsable reste pénible."}]},{type:b,tag:k,props:{id:"les-solutions"},children:[{type:a,value:"Les solutions"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Heureusement, certains ont pris le temps de réfléchir à cet épineux problème et il existe plusieurs solutions."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Attention, toutes les solutions décrites ci-dessous s'attachent à la détection des bouts de codes fautifs. Une fois le code repéré, c'est à vous de le corriger. Ce ne sont pas des fix magiques qui rendent clean votre code."}]},{type:b,tag:g,props:{id:"swinghelper-httpsswinghelperdevjavanet"},children:[{type:a,value:"Swinghelper ("},{type:b,tag:d,props:{href:p,rel:[e],title:"SwingHelper"},children:[{type:a,value:p}]},{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:a,value:"Au sein du swinglab on retrouve Swinghelper, un projet d'utilitaires qui permet justement de détecter les mises à jour hors de l'EDT via un ThreadCheckingRepaintManager. Ce repaint manager permet de détecter que les ordres de repaint ont été envoyé dans l'EDT, dans le cas contraire on affiche une belle stacktrace qui permet de retrouver le bout de code fautif. Cependant cette méthode a pour défaut qu'elle ne prend pas en compte les appels qui n'envoient pas de repaint (les getters par exemple). C'est déjà une bonne première piste et c'est assez peu intrusif."}]},{type:b,tag:g,props:{id:"substance-httpssubstancedevjavanet"},children:[{type:a,value:"Substance ("},{type:b,tag:d,props:{href:q,rel:[e],title:"Substance"},children:[{type:a,value:q}]},{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:a,value:"La c'est un peu plus qu'une solution de détection de la mauvaise utilisation de l'EDT et c'est assez intrusif. Substance est une librairie de look and feel java assez sympa dont j'ai déjà parlé "},{type:b,tag:d,props:{href:"http:\u002F\u002Flocalhost\u002Flocalweb\u002Fwordpress\u002F?p=136",rel:[e],title:"Substance, une librairie « hype » pour Swing"},children:[{type:a,value:"dans un précédent billet"}]},{type:a,value:". Et c'est Substance qui rajoute un check de cohérence dans votre application Swing. Si on se réfère à "},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.pushing-pixels.org\u002F?p=368",rel:[e]},children:[{type:a,value:"l'article de l'auteur"}]},{type:a,value:", dès qu'un composant est créé, Substance va faire un check lors de l'appel à createUI. Ca ne prend pas en compte tout les cas de figure (seul les instanciations de composants sont blindés) mais c'est une sécurité supplémentaire pour éviter une mauvaise programmation. Utiliser Substance juste pour cette fonctionnalité serait ridicule, par contre si vous l'avez adopté pour ces look and feel cette fonctionnalité est un bonus appréciable."}]},{type:b,tag:g,props:{id:"les-aspects"},children:[{type:a,value:"Les aspects"}]},{type:b,tag:c,props:{},children:[{type:a,value:"La "},{type:b,tag:d,props:{href:"http:\u002F\u002Fewawszczyk.developpez.com\u002Ftutoriel\u002Fjava\u002Fspring\u002Faop\u002F",rel:[e],title:"Programmation par aspect"},children:[{type:a,value:"programmation par aspect"}]},{type:a,value:" trouve ici une bonne application."}]},{type:b,tag:c,props:{},children:[{type:a,value:"L'utilisation de l'AOP pour le débuggage Swing a été décrite "},{type:b,tag:d,props:{href:"http:\u002F\u002Fweblogs.java.net\u002Fblog\u002Falexfromsun\u002Farchive\u002F2006\u002F02\u002Fdebugging_swing.html",rel:[e],title:"Swing debug"},children:[{type:a,value:"sur l'article suivant"}]},{type:a,value:" en anglais par Alexander Potochkin. L'aspect créé par l'auteur permet ici d'enrober les appels sur les JComponents pour détecter tout appel Swing hors de l'EDT."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Le code de l'aspect :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"import javax.swing.*;"}]},{type:b,tag:c,props:{},children:[{type:a,value:"aspect EdtRuleChecker\n{\nprivate boolean isStressChecking = true;"}]},{type:b,tag:c,props:{},children:[{type:a,value:"public pointcut anySwingMethods(JComponent c):\ntarget(c) && call(* *(..));"}]},{type:b,tag:c,props:{},children:[{type:a,value:"public pointcut threadSafeMethods():\ncall(* repaint(..)) ||\ncall(* revalidate()) ||\ncall(* invalidate()) ||\ncall(* getListeners(..)) ||\ncall(* add*Listener(..)) ||\ncall(* remove*Listener(..));"}]},{type:b,tag:c,props:{},children:[{type:a,value:"\u002F\u002Fcalls of any JComponent method, including subclasses\nbefore(JComponent c): anySwingMethods(c) && !threadSafeMethods() &&    !within(EdtRuleChecker)\n{\nif(!SwingUtilities.isEventDispatchThread() && (isStressChecking || c.isShowing()))\n{\nSystem.err.println(thisJoinPoint.getSourceLocation());\nSystem.err.println(thisJoinPoint.getSignature());\nSystem.err.println();\n}\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"\u002F\u002Fcalls of any JComponent constructor, including subclasses\nbefore(): call(JComponent+.new(..))\n{\nif (isStressChecking && !SwingUtilities.isEventDispatchThread())\n{\nSystem.err.println(thisJoinPoint.getSourceLocation());\nSystem.err.println(thisJoinPoint.getSignature() +\n\" *constructor*\");\nSystem.err.println();\n}\n}\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cet aspect permet d'intercepter toutes les méthodes non thread safe pour les afficher. Evidemment il y a un peu plus de mise en place pour l'utiliser. Personnellement j'ai utilisé le "},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.eclipse.org\u002Fajdt\u002F",rel:[e],title:"Plugin AspectJ pour Eclipse"},children:[{type:a,value:"plugin AspectJ pour eclipse"}]},{type:a,value:" qui m'a permis d'utiliser directement aspectJ au runtime lors d'une séance de debugging eclipse."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Attention, certains pourraient vouloir modifier cet aspect pour directement reposter les évènements dans l'EDT avec "},{type:b,tag:d,props:{href:"http:\u002F\u002Fjava.sun.com\u002Fjavase\u002F6\u002Fdocs\u002Fapi\u002Fjavax\u002Fswing\u002FSwingUtilities.html#invokeAndWait%28java.lang.Runnable%29",rel:[e],title:"Swing utilities"},children:[{type:a,value:"SwingUtilitiesHelper.invokeAndWait"}]},{type:a,value:". Je le déconseille, ce serait une rustine. Nettoyez plutôt votre code."}]},{type:b,tag:g,props:{id:"conclusion"},children:[{type:a,value:r}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voilà, rien de magique mais des méthodes très efficaces qui selon les contextes devraient vraiment vous aider. J'ai personnellement utilisé les aspects sur une appli un peu vieillote sur laquelle j'ai travaillé et sur laquelle la rêgle de l'EDT n'avait jamais été respecté. Sur un code même modeste de 40 000 lignes je ne m'en serais jamais sorti manuellement ^^"}]},{type:b,tag:k,props:{id:"le-modèle-évènementiel"},children:[{type:a,value:"Le modèle évènementiel"}]},{type:b,tag:c,props:{},children:[{type:a,value:"En Swing on parle souvent de "},{type:b,tag:d,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FProgrammation_%C3%A9v%C3%A9nementielle",rel:[e],title:"Programmation évenementielle"},children:[{type:a,value:"programmation évènementielle"}]},{type:a,value:". Plusieurs types d'évènements peuvent être \"écoutés\" pour déclencher des actions : click sur un bouton, gain de focus, etc...."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Dans ce type de programmation on utilise souvent le design pattern Observer. Je vous laisse lire l'article suivant si vous ne connaissez pas ce pattern : "},{type:b,tag:d,props:{href:s,rel:[e]},children:[{type:a,value:s}]},{type:a,value:". Or ce design pattern a un défaut assez commun si on l'utilise mal : les fuites mémoires"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Prenons un exemple simple :"}]},{type:b,tag:"ol",props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"un observateur O"}]},{type:b,tag:f,props:{},children:[{type:a,value:"un observé A s'inscrit auprès de O"}]},{type:b,tag:f,props:{},children:[{type:a,value:"l'observé A n'est plus utilisé pour une raison quelconque"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Dans cet exemple, le développeur n'utilisant plus l'objet A va s'attendre à ce que celui-ci soit collecté par le garbage collector. Or il n'en sera jamais rien puisqu'une référence subsiste auprès de O qui continue d'observer A. Il aurait fallu que l'objet A se désinscrivent pour ne plus conserver de références actives."}]},{type:b,tag:c,props:{},children:[{type:a,value:"(Plus d'info sur le garbage collector "},{type:b,tag:d,props:{href:"http:\u002F\u002Fgfx.developpez.com\u002Ftutoriel\u002Fjava\u002Fgc\u002F",rel:[e],title:"Garbage collector"},children:[{type:a,value:"ici"}]},{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce type de problèmes est rencontré très fréquemment dans les applications Swing. Je l'ai rencontré lors d'une mission ou ce design pattern avait été beaucoup utilisé sans jamais penser à la désinscription des observés. Lors des phases de développement les concepteurs n'avaient pas détecté ce problème. Mais en production, au bout de plusieurs heures d'utilisation l'application a commencé à beaucoup consommé et être très lente, avant de finalement crasher avec un OutOfMemoryError."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ok, mais que faire sur une application existante pour laquelle la recherche de ces mauvaises utilisations va prendre beaucoup de temps et risque de ne pas être triviale ?"}]},{type:b,tag:g,props:{id:"une-solution-utiliser-les-weak-references"},children:[{type:a,value:"Une solution, utiliser les weak references !"}]},{type:b,tag:c,props:{},children:[{type:a,value:"La WeakReference va vous permettre de n'intervenir que sur le code des observateurs et donc de centraliser votre correction."}]},{type:b,tag:c,props:{},children:[{type:a,value:"On peut en trouver une implémentation sur un "},{type:b,tag:d,props:{href:"http:\u002F\u002Fgfx.developpez.com\u002Ftutoriel\u002Fjava\u002Freference-memoire\u002F",rel:[e]},children:[{type:a,value:"article de Romain Guy sur developpez.com"}]},{type:a,value:"."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voici un code succinct qui vous permettra de la comprendre :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"protected void fireMessageCalled(MyEvent e)\n{\nint count = listeners.size();\nfor (int i = 0; i \u003C count; i++)\n{\nWeakReference ref = (WeakReference) listeners.elementAt(i);\nfinal myListener listener = (myListener) ref.get();\nif (listener != null)\n{\nlistener.messageCalled(e);\n} else\n{\nlisteners.remove(ref);\n}\n}\n}"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ici l'évènement déclenché appelle la méthode fireMessageCalled. Celui ci parcourt la liste des listeners (les observés) et les notifie. Si un des listener n'est plus référencé, alors sa référence sera nulle car nous avons utilisé des références faibles (WeakReference)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Une autre implémentation pour simplifier le code pourra être d'utiliser une "},{type:b,tag:d,props:{href:"http:\u002F\u002Fjava.sun.com\u002Fj2se\u002F1.5.0\u002Fdocs\u002Fapi\u002Fjava\u002Futil\u002FWeakHashMap.html",rel:[e],title:"WeakHashMap"},children:[{type:a,value:"WeakHashMap."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cette fois c'est la collection qui va gérer la suppression des éléments qui ne sont plus référencés."}]},{type:b,tag:c,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Attention"}]},{type:a,value:" cependant, la clé dans la map sera l'observé lui-même. Il faut donc implémenter les méthodes hashcode et equals et faire en sorte que ces méthodes renvoient un résultat qui ne varie pas au cours du temps (immuabilité de la clé). Je vous invite à lire attentivement les petits warnings indiqués dans la JavaDoc de cette classe sur son utilisation."}]},{type:b,tag:g,props:{id:"conclusion-1"},children:[{type:a,value:r}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cette méthode ne pourra s'appliquer qu'à votre code et vous évitera d'implémenter des méthodes pour désinscrire les observés. Cependant que cela ne vous donne pas de mauvaises habitudes, ces méthodes existent pour les observateurs de l'API Swing et si elles sont la c'est pas pour la déco !"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voilà, en espérant que ces petites astuces auront pu vous aider. En me basant sur ce que j'ai vu ce sont deux problèmes qui reviennent souvent, y compris pour des développeurs confirmés alors ne faites pas l'impasse dessus !"}]},{type:b,tag:c,props:{},children:[{type:a,value:"a+"}]}],toc:{title:j,searchDepth:t,depth:t,links:[{id:m,depth:3,text:n}]}},_type:"markdown",_id:"content:articles:2010:01:28:lets-swing.md",_source:"content",_file:"articles\u002F2010\u002F01\u002F28\u002Flets-swing.md",_extension:"md"}},prerenderedAt:1677091151227}}("text","element","p","a","nofollow","li","h5","ul",false,"","h4",")","ledt-et-la-gestion-des-threads","l'EDT et la gestion des threads","em","https:\u002F\u002Fswinghelper.dev.java.net\u002F","https:\u002F\u002Fsubstance.dev.java.net\u002F","Conclusion","http:\u002F\u002Fwww.design-patterns.fr\u002FObservateur.html",2))