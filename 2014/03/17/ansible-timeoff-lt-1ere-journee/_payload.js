export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){return {data:{"/articles/2014/03/17/ansible-timeoff-lt-1ere-journee":{_path:"\u002Farticles\u002F2014\u002F03\u002F17\u002Fansible-timeoff-lt-1ere-journee",_dir:"17",_draft:j,_partial:j,_locale:k,_empty:j,title:"Ansible (timeoff LT 1ère journée)",description:"[![ansible](\u002Fimages\u002F5570d-ansible.png)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F03\u002F5570d-ansible.png)Nous y voici ! Le timeoff Lateral-Tho...",id:"1051",date:"2014-03-17",categories:["waza"],tags:[l,"devops","fabric","timeoff"],img:"5570d-ansible.png",cover:"cover4.jpg",readingTime:{text:"8 min read",minutes:7.255,time:435300,words:1451},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F03\u002F5570d-ansible.png",rel:[f]},children:[{type:a,tag:"img",props:{alt:l,src:"\u002Fimages\u002F5570d-ansible.png"},children:[]}]},{type:b,value:"Nous y voici ! Le timeoff Lateral-Thoughts a démarré dans une super propriété a "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.airbnb.fr\u002Frooms\u002F911475?s=zcbV",rel:[f]},children:[{type:b,value:"Garrigues Sainte-Eulalie"}]},{type:b,value:". Pour résumé, "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fon-devrait-toujours-travailler-comme-ca-bis\u002F",rel:[f]},children:[{type:b,value:"le timeoff"}]},{type:b,value:" c’est une semaine de code retreat avec l’ensemble de l’équipe dans un coin sympa pour veiller, coder, livrer des choses qui nous branchent."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Challenge, je vais tenter de faire un billet par jour sur la semaine si j’apprends quelque chose d’intéressant (c’est déjà mal barré, ce billet a trainé sur deux jours…)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et aujourd’hui, on va parler d’Ansible, et pour la première fois sur ce blog, ce sera un billet écrit à quatre mains. Mon comparse pour ce billet sera "},{type:a,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fspiroid",rel:[f]},children:[{type:b,value:"Jonathan Dray"}]},{type:b,value:" qui connaissait déjà un peu l'outil."}]},{type:a,tag:c,props:{},children:[{type:a,tag:"em",props:{},children:[{type:b,value:"Petit défi, trouvez qui a écrit chaque paragraphe."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ansible, pour ceux qui ne connaissent pas, c’est un outil de provisionning de machine. Si on simplifie, cet outil permet de “scripter” le déploiement d’un ensemble de groupes de machine, chaque groupe devant contenir certains logiciels ou configurations."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quand je parle de groupe de machines, c’est par exemple les serveurs de base de données et les serveurs applicatifs. Chaque groupe de machine attend des configurations différentes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Resituons le problème que c’est censé résoudre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Souvent lorsqu’une nouvelle machine arrive dans le parc, elle est configuré manuellement : installation du jdk, de python, d’une base de données etc… C’est évidemment source d’erreur et relativement long."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Parfois on utilise un master (un template) qui est une image type qui sera cloné sur une machine. Le souci principal concerne la maintenance de ces masters, et le nombre de masters nécessaires : poste de dev front, poste de dev back, poste de dev pour les deux, serveur de base de données etc…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite vient l’étape au dessus, les machines provisionnées de façon automatique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur ce blog j’avais déjà parlé de "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Ffabric-moi-un-cluster\u002F",rel:[f]},children:[{type:b,value:"Fabric"}]},{type:b,value:", outil python pour scripter un déploiement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avant cela, on aurait pu évoquer le simple shell script. Fabric permet une abstraction au dessus, le contrôle d’erreur, l’exécution parallèle, les tâches qui s’exécutent en fonction du type de machine (serveur base de données, serveur applicatif etc…)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ansible s’inscrit dans la famille des outils qui propose de décrire un état de la machine et qui va faire en sorte lors de l’exécution que la machine soit conforme à cet état si ce n’était pas encore le cas."}]},{type:a,tag:i,props:{id:m},children:[{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"Première mauvaise découverte, Ansible n’est pas vraiment fait pour tourner sous Windows. Il existe cependant "},{type:a,tag:e,props:{href:"https:\u002F\u002Fservercheck.in\u002Fblog\u002Frunning-ansible-within-windows",rel:[f]},children:[{type:b,value:"une possibilité décrite sur ce lien"}]},{type:b,value:o}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je souhaitais utiliser Vagrant pour créer des VM sur mon poste et utiliser le "},{type:a,tag:e,props:{href:"http:\u002F\u002Fdocs.vagrantup.com\u002Fv2\u002Fprovisioning\u002Fansible.html",rel:[f]},children:[{type:b,value:"provisionner Ansible"}]},{type:b,value:". Pour ceux qui ne connaissent pas Vagrant et des provisionneur, je vous invite à lire un ancien billet où j’avais utilisé "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Ffabric-vagrant\u002F",rel:[f]},children:[{type:b,value:"Vagrant et Fabric"}]},{type:b,value:o}]},{type:a,tag:c,props:{},children:[{type:b,value:"Malheureusement le mix Ansible\u002FVagrant ne semble vraiment pas fait pour tourner ensemble sous Windows."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Solution de secours après une heure de combat inégal entre l’homme et la machine :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"utiliser Vagrant pour créer une VM vierge"}]},{type:a,tag:d,props:{},children:[{type:b,value:"utiliser Ansible sur la VM pour piloter le provisionning de la machine elle-même (puis une machine distante)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai eu cependant une seconde mauvaise surprise, je comptais utiliser un répertoire partagé entre ma VM et Windows (mécanisme de shared folder avec Vagrant). Or j’ai pu constater que tout fichier dans un shared folder est en permission 777. Or cela pose des soucis à Ansible… Du coup j’ai du laisser tomber l’utilisation de répertoire partagé."}]},{type:a,tag:i,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un playbook (livre à jouer) contient la description de plusieurs composants (rôles) à installer, les configurations, les templates, les adresses de machine etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voyons l’arborescence en détail :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"vagrant@precise32:~\u002Fplaybook$ tree\n|-- ansible.cfg\n|-- production\n|-- roles\n|   |-- common\n|   |   |-- meta\n|   |   `-- tasks\n|   |       `-- main.yml\n|   `-- jira\n|       |-- handlers\n|       |   `-- main.yml\n|       |-- tasks\n|       |   `-- main.yml\n|       |-- templates\n|       |   |-- jira-application.properties\n|       |   |-- jira.init.d.j2\n|       |   `-- response.varfile.j2\n|       `-- vars\n|           `-- main.yml\n|-- site.yml\n`-- stage"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Le fichie ansible.cfg permet d’avoir une configuration globale à Ansible. Il a été utilisé ici pour référencer d’autres rôles que nous avons récupéré (mais non utilisé) à partir de Github :"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"[defaults]"}]},{type:a,tag:c,props:{},children:[{type:b,value:"roles_path=\u002Fhome\u002Fvagrant\u002Fworkspace\u002Fthe-ansibles\u002Froles"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Les fichiers stage et production permettent de définir les machines utilisées dans chaque cas."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Les rôles contiennent les définitions de chaque composant à installer."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Le fichier site.yml décrit les rôles à lancer pour chaque type de machine. Par exemple ici, pour les machines de type adminservers (décrit dans les fichiers stage et production), les rôles à appliquer sont common et jira :"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"---"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"hosts: adminservers\n remote_user: root\n sudo: true\n roles:\n   - common\n   - jira"}]}]},{type:a,tag:i,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour ma part, après une journée de lutte j’ai cependant réussi à créer deux “rôles” pour installer postgresql, un jdk7 et Jira sur une machine."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans un rôle, on peut trouver plusieurs répertoires :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"meta : qui peut décrire les dépendances d’un rôle, par exemple le rôle jira peut avoir comme prérequis le rôle jira."}]},{type:a,tag:d,props:{},children:[{type:b,value:"tasks : les tâches à effectuer pour installer un composant"}]},{type:a,tag:d,props:{},children:[{type:b,value:"handlers : les actions qui peuvent être lancés par des actions effectuées dans des tâches. J’ai peu creusé ce point donc je n’insisterais pas."}]},{type:a,tag:d,props:{},children:[{type:b,value:"templates : les templates de configuration qui pourront être poussés sur le serveur par les tâches"}]},{type:a,tag:d,props:{},children:[{type:b,value:"vars : les variables de configuration qui pourront être utilisés dans les templates ou les tâches"}]}]},{type:a,tag:i,props:{id:t},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour exécuter un rôle Ansible va lire le fichier main.yml présent dans le répertoire tasks. Voyons un fichier de ce type, ici un rôle pour installer postgresql :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"- apt: pkg=libpq-dev"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"apt: pkg=python-dev"}]},{type:a,tag:d,props:{},children:[{type:b,value:"apt: pkg=python-pip"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pip: name=psycopg2"}]},{type:a,tag:d,props:{},children:[{type:b,value:"name: install postgresql\n shell: LANG=en_US.UTF-8 LC_COLLATE=en_US.UTF-8 LC_CTYPE=en_US.UTF-8 LC_MESSAGES=en_US.UTF-8 LC_MONETARY=en_US.UTF-8 LC_NUMERIC=en_US.UTF-8 LC_TIME=en_US.UTF-8 LC_ALL=en_US.UTF-8  apt-get\ninstall postgresql -y -q"}]},{type:a,tag:d,props:{},children:[{type:b,value:"name: install postgresql-client\n apt: pkg=postgresql-client state=installed"}]},{type:a,tag:d,props:{},children:[{type:b,value:"apt: pkg=openjdk-7-jre"}]},{type:a,tag:d,props:{},children:[{type:b,value:"postgresql_db: name=jira encoding='UTF-8' lc_ctype='en_US.UTF-8' lc_collate='en_US.UTF-8' template='template0'\n sudo_user: postgres"}]},{type:a,tag:d,props:{},children:[{type:b,value:"postgresql_user: db=jira password=jira name=jira priv=ALL state=present\n sudo_user: postgres"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Chaque ligne commençant par un - correspond à l’appel d’un module. Dans ce fichier on utilise par exemple les modules suivants :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"apt pour les installations de package"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pip pour les installations de package python"}]},{type:a,tag:d,props:{},children:[{type:b,value:"shell pour lancer des commandes directement, l’install par apt de postgresql ayant quelque souci"}]},{type:a,tag:d,props:{},children:[{type:b,value:"postgresql_db et postgresql_user qui permettent de manipuler base et utilisateurs sur postgresql."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur la doc Ansible on retrouve une "},{type:a,tag:e,props:{href:"http:\u002F\u002Fdocs.ansible.com\u002Flist_of_all_modules.html",rel:[f]},children:[{type:b,value:"liste de module"}]},{type:b,value:" assez riche."}]},{type:a,tag:i,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ansible est une solution assez jeune et on a rencontré quelques problèmes lors de nos expérimentations."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La première difficulté venait du fait que l’on partait d’un serveur minimaliste et qui n’avait aucune librairie pré-installée."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pas même python-apt (ouh la on part de loin !) qui est un pré-requis à l’exécution de l’installation des paquets avec Ansible sur des machines de type Debian-like."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce cas précis, un mécanisme de fallback installe python-apt, … en temps normal …"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Après quelques heures d’investigations avec Olivier, et quelques verres de plus, le bug est trouvé, corrigé, et une "},{type:a,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fansible\u002Fansible\u002Fpull\u002F6518",rel:[f]},children:[{type:b,value:"pull-request"}]},{type:b,value:" ouverte sur le repository github de Ansible."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cerise sur le gâteau, le code a été validé et mergé dans la journée qui a suivi, preuve que la communauté est bien réactive :)"}]},{type:a,tag:c,props:{},children:[{type:b,value:" Deuxième blocage, un peu plus long à diagnostiquer et à contourner, la prise en compte de la langue et des locales."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notre use case : installation et configuration d’une base de données Postgresql sous Debian 7 avec Ansible. Systématiquement, l’installation échoue et renvoie des warnings peu lisibles sur des dizaines de lignes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce qui était d’autant plus frustrant car l’installation se passait sans accrocs s’il elle était lancée directement sur le serveur !"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Plusieurs heures de debug en mode essai \u002F erreur ainsi que de longs moments de recherche dans la documentation Ansible et dans les forums nous ont orienté sur les soucis de langue et de locale. Nos nerfs ont été mis à rude épreuve !"}]},{type:a,tag:c,props:{},children:[{type:a,tag:x,props:{},children:[{type:b,value:"Explication"}]},{type:b,value:": l’installation de Postgresql a besoin d’une langue pour initialiser un cluster par défaut."}]},{type:a,tag:c,props:{},children:[{type:b,value:"D’un autre coté, pour éviter un certain de nombre de souci avec les locales et l’encodage, Ansible positionne les variables d’environnements LANG et LC_* à la variable standard “C”."}]},{type:a,tag:c,props:{},children:[{type:a,tag:x,props:{},children:[{type:b,value:"Solution de contournement:"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour le moment on a modifié la task Ansible pour renseigner la locale et installer le package postgresql avec une commande shell. Ce hack n'est pas satisfaisant car on court circuite le module apt d’installation de paquet. Mais ça fonctionne..."}]},{type:a,tag:i,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ok, c’est un peu court pour se faire un avis. Heureusement nous avons été bien guidé par Olivier et Jonathan pour avancer."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour ma part j’ai beaucoup plus galéré qu’avec Fabric, surtout car j’ai du bosser entièrement sur la VM avec vim et me passer de Sublime Text. Ce ne sont pas les conditions optimales pour moi :)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Malgré tout, j’ai désormais un playbook fonctionnel me permettant d’installer postgresql, java et jira. Ce playbook a pu être testé sur une VM puis ensuite sur une machine OVH."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il y a peu de prérequis sur la machine cible, une clé SSH à configurer et Python. Ca reste léger."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans l’ensemble je sens que j’ai encore pas mal de boulot pour faire un playbook dans les rêgles de l’art, utiliser les dépendances proprement, les templates etc.. Mais la doc semble assez complète et l’outil semble assez prometteur."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je compte bien le réutiliser pour des besoins plus lourd assez prochainement."}]}],toc:{title:k,searchDepth:g,depth:g,links:[{id:m,depth:g,text:n},{id:p,depth:g,text:q},{id:r,depth:g,text:s},{id:t,depth:g,text:u},{id:v,depth:g,text:w},{id:y,depth:g,text:z}]}},_type:"markdown",_id:"content:articles:2014:03:17:ansible-timeoff-lt-1ere-journee.md",_source:"content",_file:"articles\u002F2014\u002F03\u002F17\u002Fansible-timeoff-lt-1ere-journee.md",_extension:"md"},"/articles/2014/03/17/ansible-timeoff-lt-1ere-journee/relatedArticles":[]},prerenderedAt:1676815848135}}("element","text","p","li","a","nofollow",2,"ul","h2",false,"","ansible","ansible-et-windows","Ansible et Windows",".","larborescence-dun-playbook","L’arborescence d’un playbook","au-sein-dun-rôle","Au sein d’un rôle","un-fichier-de-tâche","Un fichier de tâche","les-plâtres-essuyés","Les plâtres essuyés","strong","avis-après-un-jour-et-demi-dutilisation","Avis après un jour et demi d’utilisation"))