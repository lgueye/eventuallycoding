export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:{"/articles/en/2023/02/measuring-everything":{_path:"\u002Farticles\u002Fen\u002F2023\u002F02\u002Fmeasuring-everything",_dir:"02",_draft:n,_partial:n,_locale:o,_empty:n,title:"Measuring everything",description:"Without measurement, everything is done by intuition. And yet, the maturity of your engineering team lies in its ability to make data-driven decisions.",id:"13",date:"2023-02-19",tags:["impact","senior","measures"],cover:"opticien.jpg",language:"en",alternates:[{fr:"https:\u002F\u002Feventuallycoding.com\u002F2023\u002F02\u002Fmeasuring-everything"}],readingTime:{text:"14 min read",minutes:13.34,time:800400,words:2668},body:{type:"root",children:[{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"You can't improve what you don't measure"},{type:a,tag:k,props:{},children:[]},{type:a,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FPeter_Drucker",rel:[g]},children:[{type:b,value:"Peter Drucker"}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Imagine this scene, an individual enters an optician:"}]},{type:a,tag:p,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Hello, I think I am myopic, I want glasses to treat my myopia"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Of course, sit down, I'm thinking of offering you glasses with a correction of 3 left and 2 right"}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"It's absurd and you've probably never witnessed it."}]},{type:a,tag:c,props:{},children:[{type:b,value:"And yet, in software development, how many times have you seen the following situations:"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"a major refactoring without any impact measurement"}]},{type:a,tag:d,props:{},children:[{type:b,value:"massive work on the elasticity of an infrastructure without capacity planning"}]},{type:a,tag:d,props:{},children:[{type:b,value:"micro performance optimizations without having measured the performance beforehand"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"By the way, if you have examples to share, feel free to respond on this Twitter feed:"}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:q,rel:[g]},children:[{type:b,value:q}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"(the first question is in french but don't hesitate to contribute in english)"}]},{type:a,tag:i,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"This subject requires a lot of care, so I will try to bring as much nuance as possible."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Far be it from me to say that you shouldn't constantly improve code. You don't want to have to fill out multipage files to justify them. And you don't want to fall into "},{type:a,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FAnalysis_paralysis",rel:[g]},children:[{type:b,value:"analysis paralysis"}]},{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"For all the small refactorings around testability or readability, Peer review validation is a sufficient validation mechanism in many cases."}]},{type:a,tag:c,props:{},children:[{type:b,value:"I will also exclude the case of startups in seed. I went through this stage. Intuition plays a huge role. The code base is small, the product is still simple enough to understand it as a whole. At this stage, it either works or it doesn't, and in any case, speed of execution is essential and, as we will see later, to have sufficient maturity on the data, there is a significative investment to be made."}]},{type:a,tag:c,props:{},children:[{type:b,value:"But, as soon as :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"the impacts on the code base start to be significant, often when the product team exceeds a certain size (\u003E20?)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"modifications require more than one person to be processed"}]},{type:a,tag:d,props:{},children:[{type:b,value:"modifications will greatly delay the rest of the work in progress"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Measuring things will remove any ambiguity."}]},{type:a,tag:c,props:{},children:[{type:b,value:"My point is to say that you have to deal with finite resources, including one : "},{type:a,tag:j,props:{},children:[{type:b,value:"time"}]},{type:b,value:" (and money which is a result of your investment choices)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"When you consume it, you have to do it with knowledge and preferably with a goal in mind. You need to know what you are sacrificing, and to make these choices, either the amount of time spent is negligible, or I advise you to rationalize your approach. And no, working evenings or weekends is not a viable option. You should focus on being efficient."}]},{type:a,tag:c,props:{},children:[{type:b,value:"By the way, I excluded above the small refactorings. Well, nevertheless, it's an interesting topic. Let's do a little theoretical exercise."},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nRegardless of the size of a company, imagine that you have a finite number of keystrokes available per week. Let's set this number arbitrarily at 10,000.\nIf a minor refactoring causes you to consume 10 keystrokes, we can say that's okay.\nBut if your code base is very large, you may need to replicate this change and it may cost 1000 keystrokes, you just consumed 10% of your keystroke capital over the week. It might be at the expense of another refactoring that had more negative impacts, or a shift on a development in progress."}]},{type:a,tag:c,props:{},children:[{type:b,value:"So at some point, you have to make a choice. \"I have a limited number of keystrokes, where should I use this energy?\""}]},{type:a,tag:c,props:{},children:[{type:b,value:"You think it will improve readability. Is this true? Is it measurable? By a measurement on your CI maybe? Is it a piece of code that is regularly modified or something else that is very stable? Is there a gain in resource consumption? Is it measurable?"}]},{type:a,tag:i,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Most importantly, if you don't have measurements, even success is not demonstrable.\nWithout before-and-after measurements, there is no way to tell if an action was beneficial, and if so, by how much."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Your job involves a lot of discussion with many people, all of whom have the goal of making sure that the company uses its resources to the best advantage of its customers, and ultimately its own."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Your role as a Senior Software Engineer is to be present in these discussions, because Engineering has a major role to play in the success of the company. Part of your job is to know how to popularize, defend investments (in time, in money etc...). Yes, even when you are not a manager..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Without measurements, you can't set objectives."},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nWithout goals, you can't set success criteria."},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nWithout goals, you can't create alignment."},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nWithout alignment there is no impact."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A product team that doesn't make constant impact is listened to less, and ends up being in danger of underinvestment. And in truth, everyone ends up losing in the process."}]},{type:a,tag:i,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Our job is a scientific job and one of the main pillars of scientific culture is measurement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"This measurement is part of a scientific approach."}]},{type:a,tag:c,props:{},children:[{type:b,value:"We often hear about 10x developers and I have personally worked with people who are indeed terribly more productive than others.\nIt's not their typing speed on the keyboard that makes them so productive, "},{type:a,tag:j,props:{},children:[{type:b,value:"it's their ability to apply a systematic approach to solve a problem"}]},{type:b,value:t},{type:a,tag:k,props:{},children:[]},{type:b,value:"\nAnd that can be learned."}]},{type:a,tag:c,props:{},children:[{type:b,value:"The approach can be summarized as follows:"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"listen, observe, measure"}]},{type:a,tag:d,props:{},children:[{type:b,value:"formulate hypotheses"}]},{type:a,tag:d,props:{},children:[{type:b,value:"setting goals and aligning the team around those goals"}]},{type:a,tag:d,props:{},children:[{type:b,value:"test"}]},{type:a,tag:d,props:{},children:[{type:b,value:"start over from the first step"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Example :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Listen: Users complain that a payment page is slow to load"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Measure: Measurement tools show that indeed."},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"a significant part of users exceed 10 seconds of display, while others display the page in less than a second"}]},{type:a,tag:d,props:{},children:[{type:b,value:"these users end up abandoning their purchase, which translates into a loss of xk€ potential"}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Hypothesis: a resource is undersized. The performance would be ok under a certain load but would collapse from a certain threshold"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Objective: Aim for a P95 (95% of users) below one second of display and regain yk€ of turnover"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Action:"},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Measure the entire chain via flame graphs with bots to simulate increasing traffic to identify various blockages"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Carry out the corrective actions necessary to correct the biggest blockages that cause 95% of the slowdowns"}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"test, validate in real situation"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Every time we approach a subject, especially when it is an unknown case, a section of the application we do not know, a technology we do not know etc.. If you apply a methodical approach, you will eventually get there."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Of course, the speed of resolution will depend on your initial knowledge and know-how. The fact that you master certain diagnostic tools or that you need assistance will slow you down or speed you up, but it is the method that must guide you and this method is based on these three pillars:"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"observations\u002Fmeasurements"}]},{type:a,tag:d,props:{},children:[{type:b,value:"hypotheses"}]},{type:a,tag:d,props:{},children:[{type:b,value:"validation\u002Finvalidation"}]}]},{type:a,tag:i,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"I invite you to read this twitter thread from Mary, SRE at Microsoft (sorry, in french):"}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:A,rel:[g]},children:[{type:b,value:A}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Data is clearly used here in a "},{type:a,tag:j,props:{},children:[{type:b,value:"systematic"}]},{type:b,value:" way to work. It's not just anecdotal, it's a maturity criterion for the engineering team, and for the company without doubt."}]},{type:a,tag:c,props:{},children:[{type:b,value:"And it can't be improvised. Having the right data at hand at the right time requires preparation. Being able to cross-reference it with other data to establish correlations requires a data collection and visualization infrastructure."}]},{type:a,tag:c,props:{},children:[{type:b,value:"At Malt, we have put a lot of effort into making data available, correlatable and easily accessible."}]},{type:a,tag:c,props:{},children:[{type:b,value:"For example:"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"our internal documentation uses an analytics tool to understand which pages are the most read, the least read"}]},{type:a,tag:d,props:{},children:[{type:b,value:"we use datadog to aggregate all monitoring, performance and alerting data"}]},{type:a,tag:d,props:{},children:[{type:b,value:"we store all business events in BigQuery to rebuild analytical views and judge the success of our product"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"And if I'm talking to you about all this, it's because it's your role as a tech lead to increase your company's maturity on the subject."}]},{type:a,tag:c,props:{},children:[{type:b,value:"It's your responsibility to have a clear vision of the cost of your product and its ROI. It is your ability to understand the financial stakes that will also allow you to make recommendations and investment choices on a Buy or Build basis."}]},{type:a,tag:i,props:{id:B},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:"Once we said that we had to systematize access to and use of data, that's fine, but I'd like to present your a maturity assessment model to better understand where you are and where you could go."}]},{type:a,tag:c,props:{},children:[{type:b,value:"There are several models, IBM, Gartner or Snowplow for example. Here I propose you to see the one of "},{type:a,tag:f,props:{href:D,rel:[g]},children:[{type:b,value:"Gartner"}]},{type:b,value:", but we will adapt here for engineering and product."}]},{type:a,tag:l,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:"This is the worst situation. No data is used. On the engineering side, there is no collection mechanism (monitoring, APM), and obviously no aggregation and consolidation mechanism (observability). No specific tools are used for performance testing. No metrics to measure the performance of the engineering are followed, DORA\u002Faccelerate etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On the product side, the product is not instrumented (tracking analytics). The objectives are all qualitative, we aim at releasing functionalities but without having any measurement elements on their use. No key KPI is tracked (conversion funnel, churn, activation etc...)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"The actions here are quite obvious, we need to train the whole team on the importance of data and put in place the tools to collect measurements."}]},{type:a,tag:l,props:{id:G},children:[{type:b,value:H}]},{type:a,tag:c,props:{},children:[{type:b,value:"At this stage, some collection tools exist but without people whose responsibility is to monitor them. The quality of the data is therefore questionable.\nFor example, you have a distributed systems and your logs are not aggregated, or you don't have a clear policy of log levels and therefore have a lot of non-exploitable data.\nThere can be several sources of data, sometimes contradictory."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sporadically some data is used anyway.\nOn the product side it's the same, tracking can be in place but not followed, no tracking plan, no funnel really monitored."}]},{type:a,tag:c,props:{},children:[{type:b,value:"The action here is to start appointing people in charge (it can be teams) to improve the quality of the data. A global strategy must start to be thought out.\nExample:"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"what are the levels of application logs, for what type of actions, what details"}]},{type:a,tag:d,props:{},children:[{type:b,value:"how to process logs in a distributed system, how to correlate web requests with application logs and DB or system logs"}]},{type:a,tag:d,props:{},children:[{type:b,value:"how to follow a funnel with a user path, how to correlate web analytics and business data"}]}]},{type:a,tag:l,props:{id:I},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:"Data is used here on a more regular basis but mostly in reaction.\nStrategies have been put in place but adoption remains low.\nAlerting is still not in place or effective."}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"it raises false positives (e.g. poorly configured sonar)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"or too many alerts, which end up being masked so as not to disturb"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"On the product side, we monitor the main KPIs and we know where to look for the information. Nevertheless, we do not follow the information regularly, we often change the definition. The quality remains perfectible.\nHowever, there are some teams that are starting to use this data more and share it."}]},{type:a,tag:l,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:"At this stage, there are clear and active managers on the collection tools and data sources.\nStrategies are in place (log levels, alert levels, SLA\u002FSLO\u002FSLI)\nIf we start refactoring, performance improvement or scalability projects, data is central in the decision making process."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On the product side, every new project thinks about setting up success metrics from the start; this is part of the kick-off conditions.\nHowever, this remains internal to the engineering and product teams; this data is not yet used on a large scale in the company. Or even other metrics are used in other departments to represent the same thing. This will be the next step."}]},{type:a,tag:l,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"This time, the importance of data and its quality is recognized throughout the company, but above all it is considered critical."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Engineering metrics are communicated and known at the highest level (executive committee). Post mortems are shared outside the engineering team during incidents.\nWe know how to link product operating costs with the business (nominal cost of a user in terms of machine resources, for example, nominal cost of a user over its lifetime, etc.) and this is used in budgeting exercises to calculate growth projections.\nWe use metrics recognized as best practices in the market: DORA, cycle time, etc."}]},{type:a,tag:c,props:{},children:[{type:b,value:"At the product level, in the same way, the data is communicated to the whole company. The objectives of the product team are materialized by quantified objectives (increase in conversion, decrease in churn, etc.)."}]},{type:a,tag:l,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:c,props:{},children:[{type:b,value:"Data is used globally, within the company, quality is controlled, governance is formalized.\nData is used externally. It can give a competitive advantage in certain cases."}]},{type:a,tag:c,props:{},children:[{type:b,value:"At the engineering level, we publish service level agreements (public SLAs), we can provide detailed status pages with the level of stability of the product by software brick, for example: failure in progress on the payment by credit card, status ok on the search engine etc... We can specify recovery times or publish mortem posts."}]},{type:a,tag:c,props:{},children:[{type:b,value:"From a product point of view, it is linked to the company's business. For example, publishing data in open data can provide an advantage to the brand."}]},{type:a,tag:i,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:c,props:{},children:[{type:b,value:"Let's take a concrete example to illustrate how to use measurement and a scientific approach on a classic subject: functional architecture."}]},{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"Context"}]},{type:b,value:" : Malt in 2022\nScale-up, 600 people, 100 in engineering"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Main actor : Nicolas Grisey Demengel."}]},{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"Observation"}]},{type:b,value:S}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nicolas was working on a subject that had been brought up to him, the slowness of CI (continuous integration).\nThe opportunity is important, it concerns the entire chain of building our applications. This slows down feedback times and more globally the entire development cycle.\nMoreover, we pay for CI by the resources consumed. In short, the subject is critical."}]},{type:a,tag:c,props:{},children:[{type:b,value:"To give a little context, at Malt there are several teams (squads) that are theoretically responsible for one or several applications. Team A is in charge of application A, team B of application B etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nicolas observes several things:"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"if the IC is long, it's not a question of slow build, it's a question of the number of builds in parallel"}]},{type:a,tag:d,props:{},children:[{type:b,value:"When a team A delivers its application, it also very often delivers other applications, B, C, D etc..."}]},{type:a,tag:d,props:{},children:[{type:b,value:"If team A delivers other applications, it is because the applications often share common libraries that must be modified and that are used in other applications. These modifications lead to the rebuild of the other applications, and sometimes they must also be modified according to the changes in the common library."}]},{type:a,tag:d,props:{},children:[{type:b,value:"The teams are not at ease, because they are re-releasing applications for which they are not responsible and are afraid of regressions"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"Hypothesis"}]},{type:b,value:":\nThere are coupling issues. Common libraries should be limited. The functional architecture is a concern."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Except that, it is not enough to start the subject. There are 2.3M lines of code, starting anywhere would probably be inefficient. And how can we consider that the subject is solved? To completely solve the architecture issues, it would be a multi-year project."}]},{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{},children:[{type:b,value:"Measures"}]},{type:b,value:S}]},{type:a,tag:c,props:{},children:[{type:b,value:"To determine the best way to start, and to prove the hypothesis, Nicolas set up a set of measures. To summarize, he observed :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"the number of applications deployed by a change on a given library"}]},{type:a,tag:d,props:{},children:[{type:b,value:"the frequency of modification of a given library"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"From there, he was able to determine the \"hotspots\": the libraries that cause the most rebuilds, and with the highest modification frequencies without a strong ownership (% of commits made by other team \u003E x%)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"These hotspots are the places to start."}]},{type:a,tag:c,props:{},children:[{type:b,value:"The exact details of the work done, the graphs etc. "},{type:a,tag:f,props:{href:T,rel:[g]},children:[{type:b,value:"are available on the Malt Engineering blog"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"**Conclusion"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Having done these measurements has allowed :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"prioritize the work to be done"}]},{type:a,tag:d,props:{},children:[{type:b,value:"to set goals"}]},{type:a,tag:d,props:{},children:[{type:b,value:"to align several teams on the approach"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"This approach is based on a simple methodology: observation, measurements, hypotheses, re-measurements, objectives, follow-up."}]},{type:a,tag:c,props:{},children:[{type:b,value:"The setting of objectives in this case is crucial. Without quantified objectives, at what point do we stop in a \"decoupling\" project? Here Nicolas was able to set thresholds (maximum number of builds, ownership rate per application, etc.) at which action was needed, but below which there was no longer any urgency."}]},{type:a,tag:c,props:{},children:[{type:b,value:"And this is a mature engineering team approach."}]},{type:a,tag:i,props:{id:U},children:[{type:b,value:V}]},{type:a,tag:c,props:{},children:[{type:b,value:"And you, on your projects, do you use quantitative objectives? If not, could you add some?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"What would be your maturity level on the above model?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Do you know the cost of a user and the evolution of this cost over the last 2 years?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Are your engineering metrics known outside your team?"}]},{type:a,tag:i,props:{id:W},children:[{type:b,value:X}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.softkraft.co\u002Fwhat-is-data-maturity-and-how-to-climb-the-data-maturity-scale\u002F#the-gartner-data-maturity-model",rel:[g]},children:[{type:b,value:"What is data maturity and how to climb the data maturity scale"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:D,rel:[g]},children:[{type:b,value:"Data Governance maturity model"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Fblog.malt.engineering\u002Fyour-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-iii-238a7296aa36",rel:[g]},children:[{type:b,value:"Your version control system contains invaluable insights for your engineering teams III"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:"span",props:{},children:[{type:b,value:Y}]},{type:b,value:"I("},{type:a,tag:f,props:{href:Z,rel:[g]},children:[{type:b,value:Z}]},{type:b,value:")"}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:T,rel:[g]},children:[{type:b,value:Y}]}]}],toc:{title:o,searchDepth:h,depth:h,links:[{id:r,depth:h,text:s},{id:u,depth:h,text:v},{id:w,depth:h,text:x},{id:y,depth:h,text:z},{id:B,depth:h,text:C,children:[{id:E,depth:m,text:F},{id:G,depth:m,text:H},{id:I,depth:m,text:J},{id:K,depth:m,text:L},{id:M,depth:m,text:N},{id:O,depth:m,text:P}]},{id:Q,depth:h,text:R},{id:U,depth:h,text:V},{id:W,depth:h,text:X}]}},_type:"markdown",_id:"content:articles:en:2023:02:measuring-everything.md",_source:"content",_file:"articles\u002Fen\u002F2023\u002F02\u002Fmeasuring-everything.md",_extension:"md"}},prerenderedAt:1677091151423}}("element","text","p","li","ul","a","nofollow",2,"h2","strong","br","h3",3,false,"","blockquote","https:\u002F\u002Ftwitter.com\u002Fhugolassiege\u002Fstatus\u002F1626880872363204609","intuition-and-experience-versus-measures","Intuition and experience versus measures",".","no-measures-no-alignment","No measures, no alignment","our-job-is-a-scientific-job","Our job is a scientific job","data-a-criterion-of-engineering-team-maturity","Data, a criterion of engineering team maturity","https:\u002F\u002Ftwitter.com\u002FPykPyky\u002Fstatus\u002F1605205574957907968","data-maturity-model","Data maturity model","https:\u002F\u002Fwww.ovaledge.com\u002Fblog\u002Fdata-governance-maturity-model","level-0-unaware","Level 0 : Unaware.","level-1-aware","Level 1: Aware.","level-2-reactive","Level 2 : Reactive","level-3-proactive","Level 3 : Proactive","level-4-managed","Level 4: Managed","niveau-5-effective","Niveau 5 : Effective","a-large-scale-refactoring-at-malt","A large-scale refactoring at Malt",":","https:\u002F\u002Fblog.malt.engineering\u002Fyour-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-i-c90b237fe7b4","questions-for-you","Questions for you","resources","Resources","Your version control system contains invaluable insights for your engineering teams I","https:\u002F\u002Fblog.malt.engineering\u002Fyour-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-ii-258a72b6eb65"))