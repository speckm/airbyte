"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[52124],{7981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Keen is a fully managed event streaming and analytics platform."},o="Keen",l={unversionedId:"integrations/destinations/keen",id:"integrations/destinations/keen",title:"Keen",description:"Keen is a fully managed event streaming and analytics platform.",source:"@site/../docs/integrations/destinations/keen.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/keen",permalink:"/integrations/destinations/keen",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/keen.md",tags:[],version:"current",frontMatter:{description:"Keen is a fully managed event streaming and analytics platform."},sidebar:"mySidebar",previous:{title:"Kafka",permalink:"/integrations/destinations/kafka"},next:{title:"Kinesis",permalink:"/integrations/destinations/kinesis"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Keen Project",id:"keen-project",level:4},{value:"API Key and Project ID",id:"api-key-and-project-id",level:4},{value:"Timestamp Inference",id:"timestamp-inference",level:4},{value:"Setup the Keen destination in Airbyte",id:"setup-the-keen-destination-in-airbyte",level:3},{value:"CHANGELOG",id:"changelog",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keen"},"Keen"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Airbyte Keen destination allows you to stream data from any Airbyte Source into ",(0,r.kt)("a",{parentName:"p",href:"https://keen.io?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"Keen")," for storage, analysis, and visualization. Keen is a flexible, fully managed event streaming and analytics platform that empowers anyone to ship custom, embeddable dashboards in minutes, not months."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Airbyte Open Source users using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/integrations/sources/postgres"},"Postgres")," source connector, ",(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/operator-guides/upgrading-airbyte/"},"upgrade")," your Airbyte platform to version ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.40.0-alpha")," or newer and upgrade your Keen connector to version ",(0,r.kt)("inlineCode",{parentName:"li"},"0.2.4")," or newer")),(0,r.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,r.kt)("h4",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Each replicated stream from Airbyte will output data into a corresponding event collection in Keen. Event collections store data in JSON format. Each collection will inherit the name from the stream with all non-alphanumeric characters removed, except for ",(0,r.kt)("inlineCode",{parentName:"p"},".\u2019, \u2018-\u2019, \u2018_\u2019,")," and whitespace characters. When possible, the connector will try to infer the timestamp value for the record and override the special field ",(0,r.kt)("inlineCode",{parentName:"p"},"keen.timestamp")," with it."),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append + Deduped"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To use the Keen destination, you'll first need to create a ",(0,r.kt)("a",{parentName:"p",href:"https://keen.io/users/signup?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"Keen account")," (if you don\u2019t already have one)."),(0,r.kt)("p",null,"Once you have a Keen account, you can use the following credentials to set up the connector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Keen Project ID"),(0,r.kt)("li",{parentName:"ul"},"A Keen Master API key associated with the project")),(0,r.kt)("p",null,"See the setup guide for more information about how to get started."),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h4",{id:"keen-project"},"Keen Project"),(0,r.kt)("p",null,"If you haven\u2019t set up a project to stream your data to:"),(0,r.kt)("p",null,"Login to the ",(0,r.kt)("a",{parentName:"p",href:"https://keen.io/"},"Keen application")," and add a new project. To do this, click the \u2018Add New\u2019 link next to the Projects label on the left-hand, side ribbon. Then, give the project a name."),(0,r.kt)("p",null,"You can think of a project as a data silo. The data in a project is completely separate from data in other projects. We recommend that you create separate projects for each of your applications and separate projects for Dev and Prod environments."),(0,r.kt)("p",null,"Now, head to the \u2018Access\u2019 section and grab your Project ID and Master API Key."),(0,r.kt)("p",null,"If you already have a project set up:"),(0,r.kt)("p",null,"Head to the \u2018Access\u2019 tab and grab your Project ID and Master API Key"),(0,r.kt)("h4",{id:"api-key-and-project-id"},"API Key and Project ID"),(0,r.kt)("p",null,"The Keen Connector uses the ",(0,r.kt)("a",{parentName:"p",href:"https://keen.io/docs/streams/kafka-streaming/kafka-inbound-cluster/?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"Keen Kafka Inbound Cluster")," to stream data. It requires your ",(0,r.kt)("inlineCode",{parentName:"p"},"Project ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Master Key")," for authentication. To get them, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Access")," tab from the left-hand, side panel and check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Project Details")," section.\n",(0,r.kt)("strong",{parentName:"p"},"Important"),": This destination requires the Project's ",(0,r.kt)("strong",{parentName:"p"},"Master")," Key."),(0,r.kt)("h4",{id:"timestamp-inference"},"Timestamp Inference"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Infer Timestamp")," field lets you specify if you want the connector to infer the ",(0,r.kt)("a",{parentName:"p",href:"https://keen.io/docs/streams/overview/data-modeling-guide/#timestamp-data-type"},"keen.timestamp")," field based on the data from the event that occurred in the source application. This feature allows for historical data synchronization enabling you to fully leverage the power of Keen's time series analytics. By default, this property is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". If toggled off, ",(0,r.kt)("inlineCode",{parentName:"p"},"keen.timestamp")," will be set to the datetime when the data was recorded by Keen."),(0,r.kt)("h3",{id:"setup-the-keen-destination-in-airbyte"},"Setup the Keen destination in Airbyte"),(0,r.kt)("p",null,"Now, you should have all the parameters needed to configure Keen destination."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Project ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Master API Key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Infer Timestamp"))),(0,r.kt)("p",null,"Connect your first source and then head to the Keen application. You can seamlessly run ",(0,r.kt)("a",{parentName:"p",href:"https://keen.io/docs/compute/data-explorer-guide/?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"custom analysis")," on your data and ",(0,r.kt)("a",{parentName:"p",href:"https://keen.io/docs/visualize/dashboard-creator/dashboard-edition/?utm_campaign=Airbyte%20Destination%20Connector&utm_source=Airbyte%20Hosted%20Docs&utm_medium=Airbyte%20Hosted%20Docs&utm_term=Airbyte%20Hosted%20Docs&utm_content=Airbyte%20Hosted%20Docs"},"build interactive dashboards")," for key stakeholders."),(0,r.kt)("p",null,"If you have any questions, please reach out to us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:team@keen.io"},"team@keen.io")," and we\u2019ll be happy to help!"),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-04"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15291"},"15291")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Keen destination to use outputRecordCollector to properly store state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8809"},"8809")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-10"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5973"},"5973")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix timestamp inference for complex schemas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-08-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5339"},"5339")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Keen Destination Release!")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);