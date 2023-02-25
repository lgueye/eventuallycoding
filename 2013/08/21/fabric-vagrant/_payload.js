export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:{"/articles/2013/08/21/fabric-vagrant":{_path:"\u002Farticles\u002F2013\u002F08\u002F21\u002Ffabric-vagrant",_dir:"21",_draft:n,_partial:n,_locale:f,_empty:n,title:o,description:o,id:"924",date:"2013-08-21",categories:["waza"],tags:["devops","fabric",p],img:"c143b-vagrant.png",cover:"cover2.jpg",readingTime:{text:"6 min read",minutes:5.435,time:326100,words:1087},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{alt:p,src:"\u002Fimages\u002Fc143b-vagrant.png"},children:[]},{type:b,value:"Petit jeu, est-ce que vous vous retrouvez dans les différentes situations ci-dessous :"}]},{type:a,tag:r,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"Vous avez un environnement assez complexe à reproduire pour chaque poste de dev, un serveur de bases de données, une lib particulière, une configuration système etc…"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous avez tout tenté :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"un manuel d’accueil de 3 pages avec toutes les procédures d’install, mais dont l’une des étapes c’est d’aller chercher Gégé bureau 451 car “il y a que lui qui sait ce qu’il faut faire à cette étape” (Vous vous rappelez de notre fameux "},{type:a,tag:g,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2012\u002F05\u002F21\u002Fetes-vous-pompier-pyromane",rel:[h]},children:[{type:b,value:"pompier pyromane"}]},{type:b,value:" ?)."}]},{type:a,tag:e,props:{},children:[{type:b,value:"des échanges de fichier via USB ou NFS. Mais au fil du temps il y a des tas de versions dans différents répertoire et plus personne sait ce que c’est. A part Gégé qui a la bonne version sur son PC."}]}]},{type:a,tag:r,props:{start:i},children:[{type:a,tag:e,props:{},children:[{type:b,value:"Vos équipes ont toutes des postes Windows car les outils bureautiques imposé par votre société tourne dessus : Outlook, Office etc… Sauf que pour le développement vous avez besoin d’utiliser une plateforme Unix. Au début vous avez même testé tous les plugins FTP pour Eclipse, SublimeText, Intellij..."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tiens, voici Gégé d'ailleurs..."}]},{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{alt:"gege",src:"\u002Fimages\u002Ff3985-gege.gif"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et puis un jour, vous avez découvert l’utilité des machines virtuelles. Vous avez passé du temps à configurer une VM, vous avez installé tout ce qu’il fallait et vous l’avez diffusé."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sauf que le temps a passé, les versions de certains outils ont évolué et chacun a effectué ces mises à jour dans son coin. La version de votre distribution aussi a changé et un beau jour la VM d’origine a tellement divergé qu’il a fallu mettre en place des procédures de mise à jour de vos VMs...."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et si on reprenait nos habitudes de dev, qu’on versionnait notre environnement, qu’on le scriptait, voire même qu’on le testait avant diffusion ? Peut-être avez vous déjà entendu parler de traiter votre "},{type:a,tag:g,props:{href:"http:\u002F\u002Farchitects.dzone.com\u002Farticles\u002Finfrastructure-code",rel:[h]},children:[{type:b,value:"infrastructure comme du code"}]},{type:b,value:" ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce cas, ce billet vous intéressera puisque nous allons parler de création de VM et de provisionning, le tout de façon automatisé et reproductible avec Vagrant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous avez lu le "},{type:a,tag:g,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2013\u002F08\u002F16\u002Ffabric-moi-un-cluster\u002F",rel:[h]},children:[{type:b,value:"dernier billet sur Fabric"}]},{type:b,value:", celui-ci poursuit dans la lignée. Cette fois-ci je vous propose d’utiliser "},{type:a,tag:g,props:{href:"http:\u002F\u002Fwww.vagrantup.com\u002F",rel:[h]},children:[{type:b,value:"Vagrant"}]},{type:b,value:" pour créer une VM, et Fabric pour la configurer et installer les softs qu’il vous faut."}]},{type:a,tag:l,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour résumer, Vagrant est un outil vous permettant de créer des machines virtuelles prêtes à l’emploi pour vos besoins, le tout avec un simple fichier de configuration. Ce sera donc ce fichier que nous versionnerons pour le partager dans l’équipe."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vagrant repose sur des “fournisseurs (providers)” : "},{type:a,tag:g,props:{href:"https:\u002F\u002Fwww.virtualbox.org\u002F",rel:[h]},children:[{type:b,value:"Virtual Box"}]},{type:b,value:", VMWare, AWS par défaut. Et vous pouvez ajouter des plugins pour gérer d’autres providers, "},{type:a,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fadrahon\u002Fvagrant-kvm",rel:[h]},children:[{type:b,value:"KVM par exemple"}]},{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce billet, nous utiliserons VirtualBox 4.2.16 (attention à bien prendre une version à jour !)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour “l’alimentation (provisionning)”, Vagrant repose sur des briques connues : Chef, Puppet, Ansible et du simple Shell. Là encore, en passant par des plugins on peut en rajouter et nous utiliserons justement "},{type:a,tag:g,props:{href:"https:\u002F\u002Fgist.github.com\u002FSirScott\u002F5707611",rel:[h]},children:[{type:b,value:"le plugin Fabric"}]},{type:b,value:u}]},{type:a,tag:l,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"Rien d’exotique, Vagrant a des packages pour les différents OS :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:g,props:{href:x,rel:[h]},children:[{type:b,value:x}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais pour notre cas nous allons ajouter deux choses supplémentaires :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Fabric  : que nous installerons avec"}]},{type:a,tag:c,props:{},children:[{type:b,value:"pip install Fabric"}]},{type:a,tag:c,props:{},children:[{type:b,value:"La petite subtilité si vous utilisez Windows c’est qu’il faut installer pycrypto manuellement pour que Fabric fonctionne. Vous trouverez le package ici "},{type:a,tag:g,props:{href:y,rel:[h]},children:[{type:b,value:y}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et le plugin vagrant Fabric :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"vagrant plugin install vagrant-fabric"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite il vous suffirait d’aller dans un répertoire vierge et de taper :"}]},{type:a,tag:d,props:{code:z,meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:z}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces commandes vous permettraient d’initialiser une VM Ubuntu Precise 32bits, de la démarrer et de vous y connecter en SSH."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais allons plus loin."}]},{type:a,tag:l,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le fichier Vagrantfile a été créé lorsque vous avez fait vagrant init precise32."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce fichier contient la configuration de votre VM. Ce fichier va vous permettre entre autre :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"de faire suivre des ports entre votre machine et la VM"}]},{type:a,tag:e,props:{},children:[{type:b,value:"de partager des répertoires entre les deux machines"}]},{type:a,tag:e,props:{},children:[{type:b,value:"de configurer le réseau de votre VM"}]},{type:a,tag:e,props:{},children:[{type:b,value:"de provisionner la VM"}]}]},{type:a,tag:l,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par défaut votre machine virtuelle est accessible en ssh via le port 2222. Vagrant a effectué un reroutage du port 2222 de votre machine vers le port 22 de votre VM."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette technique peut s’avérer suffisante dans bien des cas. Si vous avez juste besoin d’un routage de ce type pour voir un apache et un elasticsearch installé sur la VM, il vous suffit d’écrire ceci :"}]},{type:a,tag:d,props:{code:E,meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:E}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans d’autres cas, si par exemple vous voulez utiliser plusieurs VMs et qu’elles soient toutes disponibles sur un réseau privé au sein de votre machine, alors vous allez plutôt configurer des IPs pour chaque machines :"}]},{type:a,tag:d,props:{code:F,meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:F}]}]}]},{type:a,tag:l,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:"Partagez un répertoire entre votre VM et la machine hôte peut avoir plusieurs intérêt :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"éviter que chaque nouvelle VM télécharge les mêmes choses et conserve un cache commun, par exemple celui d’APT"}]},{type:a,tag:e,props:{},children:[{type:b,value:"Partagez votre répertoire de développement, vous permettant ainsi que développer sous votre IDE préféré sur votre machine tout en ayant tous les fichiers partagés sur la VM."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour cela, vous allez déclarer des sync folder :"}]},{type:a,tag:d,props:{code:I,meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:I}]}]}]},{type:a,tag:l,props:{id:J},children:[{type:b,value:K}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le provisionning va consister lors de la création de la VM à effectuer la configuration de la machine :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"configuration système"}]},{type:a,tag:e,props:{},children:[{type:b,value:"installation de softs"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ici nous allons utiliser Fabric comme suit :"}]},{type:a,tag:d,props:{code:L,meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:L}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons juste déclaré deux tâches à appeler, et ces tâches sont déclarées dans un fichier fabfile.py présent au même niveau que votre fichier Vagrantfile."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce fichier fabfile est appelé par Vagrant pour la machine qui vient d’être monté installant dans notre exemple Java et elasticsearch."}]},{type:a,tag:l,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voilà, nous avons fait un tour rapide. Grâce à Vagrant nous avons pu rapidement monter une VM sur notre machine avec un elasticsearch fonctionnel. Vous pouvez désormais partager ces fichiers de configuration pour votre équipe afin que chacun utilise le même environnement de travail. En cas de modif, changement d’OS, changement de configuration système etc… vous n’avez qu’à reprendre les fichiers Vagrantfile et Fabfile, travailler en local pour les mettre à jour et publier vos modifs."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Rien ne vous empêche aussi de tester la création de vos VM en appelant des scripts de vérification de la machine virtuelle créé, par exemple un script qui teste qu’il y a bien un elasticsearch qui répond sur un port donné de votre nouvelle VM. Et tout ceci, vous pouvez l’automatiser si ce processus de création de VM est vraiment critique pour vous."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite dans votre équipe, chacun peut réappliquer les modifs de provisionning :"}]},{type:a,tag:d,props:{code:O,meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:O}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"ou bien réinitialiser complètement la VM :"}]},{type:a,tag:d,props:{code:P,meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:P}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"ou encore la refaire de zéro :"}]},{type:a,tag:d,props:{code:Q,meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:Q}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et si vous voulez jouer avec les versions complètes de ces fichiers, vous retrouverez l’ensemble du code sous Github : "},{type:a,tag:g,props:{href:R,rel:[h]},children:[{type:b,value:R}]}]}],toc:{title:f,searchDepth:i,depth:i,links:[{id:s,depth:i,text:t},{id:v,depth:i,text:w},{id:A,depth:i,text:B},{id:C,depth:i,text:D},{id:G,depth:i,text:H},{id:J,depth:i,text:K},{id:M,depth:i,text:N}]}},_type:"markdown",_id:"content:articles:2013:08:21:fabric-vagrant.md",_source:"content",_file:"articles\u002F2013\u002F08\u002F21\u002Ffabric-vagrant.md",_extension:"md"}},prerenderedAt:1677325415770}}("element","text","p","code","li","","a","nofollow",2,null,"pre","h2","ul",false,"Vagrant et Fabric : prise en main","vagrant","img","ol","principe","Principe",".","installation","Installation","http:\u002F\u002Fdownloads.vagrantup.com\u002F","http:\u002F\u002Fwww.voidspace.org.uk\u002Fpython\u002Fmodules.shtml#pycrypto","$ vagrant init precise32 http:\u002F\u002Ffiles.vagrantup.com\u002Fprecise32.box\n$ vagrant up\n$ vagrant ssh\n","le-fichier-vagrantfile","Le fichier Vagrantfile","la-configuration-réseau","La configuration réseau","config.vm.network :forwarded\\_port, guest: 80, host: 8080\nconfig.vm.network :forwarded\\_port, guest: 9200, host: 9200\n","config.vm.network :private\\_network, ip: \"192.168.50.4\"\n","le-partage-de-répertoire","Le partage de répertoire","config.vm.synced\\_folder 'C:Usershugovagrantaptcache', \"\u002Fvar\u002Fcache\u002Fapt\u002Farchives\"\nconfig.vm.synced\\_folder 'D:Devsrcsample', \"\u002Fvagrant\u002Fsrc\"\n","le-provisionning","Le provisionning","config.vm.provision :fabric do |fab|\n  fab.tasks = \\[\"java es\\_install\"\\]\nend\n","et-en-équipe","Et en équipe ?","vagrant provision\n","vagrant reload\n","vagrant destroy\nvagrant up\n","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Ffabric-vagrant"))