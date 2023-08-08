"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[35],{57897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="Getting Started with Airbyte Cloud",l={unversionedId:"cloud/getting-started-with-airbyte-cloud",id:"cloud/getting-started-with-airbyte-cloud",title:"Getting Started with Airbyte Cloud",description:"This page guides you through setting up your Airbyte Cloud account, setting up a source, destination, and connection, verifying the sync, and allowlisting an IP address.",source:"@site/../docs/cloud/getting-started-with-airbyte-cloud.md",sourceDirName:"cloud",slug:"/cloud/getting-started-with-airbyte-cloud",permalink:"/cloud/getting-started-with-airbyte-cloud",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/getting-started-with-airbyte-cloud.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"UX Handbook",permalink:"/connector-development/ux-handbook"},next:{title:"Core Concepts",permalink:"/cloud/core-concepts"}},s={},p=[{value:"Set up your Airbyte Cloud account",id:"set-up-your-airbyte-cloud-account",level:2},{value:"Set up a source",id:"set-up-a-source",level:2},{value:"Set up a destination",id:"set-up-a-destination",level:2},{value:"Set up a connection",id:"set-up-a-connection",level:2},{value:"Verify the connection",id:"verify-the-connection",level:2},{value:"Allowlist IP addresses",id:"allowlist-ip-addresses",level:2},{value:"United States and Airbyte Default",id:"united-states-and-airbyte-default",level:3},{value:"GCP region: us-west3",id:"gcp-region-us-west3",level:4},{value:"European Union",id:"european-union",level:3},{value:"AWS region: eu-west-3",id:"aws-region-eu-west-3",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-airbyte-cloud"},"Getting Started with Airbyte Cloud"),(0,r.kt)("p",null,"This page guides you through setting up your Airbyte Cloud account, setting up a source, destination, and connection, verifying the sync, and allowlisting an IP address."),(0,r.kt)("h2",{id:"set-up-your-airbyte-cloud-account"},"Set up your Airbyte Cloud account"),(0,r.kt)("p",null,"To use Airbyte Cloud:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you haven't already, ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.airbyte.com/signup?utm_campaign=22Q1_AirbyteCloudSignUpCampaign_Trial&utm_source=Docs&utm_content=SetupGuide"},"sign up for Airbyte Cloud")," using your email address, Google login, or GitHub login."),(0,r.kt)("p",{parentName:"li"},"Airbyte Cloud offers a 14-day free trial. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://airbyte.com/pricing"},"Pricing"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are invited to a workspace, you cannot use your Google login to create a new Airbyte account."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you signed up using your email address, Airbyte will send you an email with a verification link. On clicking the link, you'll be taken to your new workspace."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A workspace lets you collaborate with team members and share resources across your team under a shared billing account.")))),(0,r.kt)("h2",{id:"set-up-a-source"},"Set up a source"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A source is an API, file, database, or data warehouse that you want to ingest data from.")),(0,r.kt)("p",null,"To set up a source:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Set your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/manage-data-residency#choose-your-default-data-residency"},"default data residency")," before creating a new source to ensure your data is processed in the correct region.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Airbyte Cloud dashboard, click ",(0,r.kt)("strong",{parentName:"p"},"Sources")," and then click ",(0,r.kt)("strong",{parentName:"p"},"+ New source"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Set up the source page, select the source you want to set up from the ",(0,r.kt)("strong",{parentName:"p"},"Source type")," dropdown."),(0,r.kt)("p",{parentName:"li"},"The fields relevant to your source are displayed. The Setup Guide provides information to help you fill out the fields for your selected source.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Set up source"),"."))),(0,r.kt)("h2",{id:"set-up-a-destination"},"Set up a destination"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A destination is a data warehouse, data lake, database, or an analytics tool where you want to load your extracted data.")),(0,r.kt)("p",null,"To set up a destination:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Airbyte Cloud dashboard, click ",(0,r.kt)("strong",{parentName:"p"},"Destinations")," and then click ",(0,r.kt)("strong",{parentName:"p"},"+ New destination"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Set up the destination page, select the destination you want to set up from the ",(0,r.kt)("strong",{parentName:"p"},"Destination type")," dropdown."),(0,r.kt)("p",{parentName:"li"},"The fields relevant to your destination are displayed. The Setup Guide provides information to help you fill out the fields for your selected destination.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Set up destination"),"."))),(0,r.kt)("h2",{id:"set-up-a-connection"},"Set up a connection"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A connection is an automated data pipeline that replicates data from a source to a destination.")),(0,r.kt)("p",null,"Setting up a connection involves configuring the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Replication frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"How often should the data sync?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/manage-data-residency#choose-the-data-residency-for-a-connection"},"Data residency")),(0,r.kt)("td",{parentName:"tr",align:null},"Where should the data be processed?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination Namespace and stream names"),(0,r.kt)("td",{parentName:"tr",align:null},"Where should the replicated data be written?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Catalog selection"),(0,r.kt)("td",{parentName:"tr",align:null},"Which streams and fields should be replicated from the source to the destination?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"How should the streams be replicated (read and written)?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optional transformations"),(0,r.kt)("td",{parentName:"tr",align:null},"How should Airbyte protocol messages (raw JSON blob) data be converted into other data representations?")))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/"},"Connections and Sync Modes")," and ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/namespaces"},"Namespaces")),(0,r.kt)("p",null,"If you need to use ",(0,r.kt)("a",{parentName:"p",href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html"},"cron scheduling"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Replication Frequency")," dropdown, click ",(0,r.kt)("strong",{parentName:"li"},"Cron"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter a cron expression and choose a time zone to create a sync schedule.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Only one sync per connection can run at a time."),(0,r.kt)("li",{parentName:"ul"},"If cron schedules a sync to run before the last one finishes, the scheduled sync will start after the last sync completes."),(0,r.kt)("li",{parentName:"ul"},"Cloud does not allow schedules that sync more than once per hour."))),(0,r.kt)("p",null,"To set up a connection:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Set your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/manage-data-residency#choose-your-default-data-residency"},"default data residency")," before creating a new connection to ensure your data is processed in the correct region.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Airbyte Cloud dashboard, click ",(0,r.kt)("strong",{parentName:"p"},"Connections")," and then click ",(0,r.kt)("strong",{parentName:"p"},"+ New connection"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the New connection page, select a source:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To use an existing source, select your desired source from the ",(0,r.kt)("strong",{parentName:"p"},"Source")," dropdown. Click ",(0,r.kt)("strong",{parentName:"p"},"Use existing source"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To set up a new source, select the source you want to set up from the ",(0,r.kt)("strong",{parentName:"p"},"Source type")," dropdown. The fields relevant to your source are displayed. The Setup Guide provides information to help you fill out the fields for your selected source. Click ",(0,r.kt)("strong",{parentName:"p"},"Set up source"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a destination:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To use an existing destination, select your desired destination from the ",(0,r.kt)("strong",{parentName:"li"},"Destination")," dropdown. Click ",(0,r.kt)("strong",{parentName:"li"},"Use existing destination"),"."),(0,r.kt)("li",{parentName:"ul"},"To set up a new destination, select the destination you want to set up from the ",(0,r.kt)("strong",{parentName:"li"},"Destination type")," dropdown. The fields relevant to your destination are displayed. The Setup Guide provides information to help you fill out the fields for your selected destination. Click ",(0,r.kt)("strong",{parentName:"li"},"Set up destination"),".")),(0,r.kt)("p",{parentName:"li"},"The Set up the connection page is displayed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Replication frequency")," dropdown, select how often you want the data to sync from the source to the destination."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The default replication frequency is ",(0,r.kt)("strong",{parentName:"p"},"Every 24 hours"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Destination Namespace")," dropdown, select the format in which you want to store the data in the destination:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The default configuration is ",(0,r.kt)("strong",{parentName:"p"},"Mirror source structure"),"."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Configuration")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Description"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Mirror source structure"),(0,r.kt)("td",null,'Some sources (for example, databases) provide namespace information for a stream. If a source provides the namespace information, the destination will reproduce the same namespace when this configuration is set. For sources or streams where the source namespace is not known, the behavior will default to the "Destination default" option')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Destination default"),(0,r.kt)("td",null,"All streams will be replicated and stored in the default namespace defined on the Destination Settings page. For more information, see",(0,r.kt)("a",{href:"https://docs.airbyte.com/understanding-airbyte/namespaces#destination-connector-settings"}," \u200b\u200bDestination Connector Settings"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Custom format"),(0,r.kt)("td",null,"All streams will be replicated and stored in a custom format. See",(0,r.kt)("a",{href:"https://docs.airbyte.com/understanding-airbyte/namespaces#custom-format"}," Custom format")," for more details"))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To better understand the destination namespace configurations, see ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/namespaces#examples"},"Destination Namespace example"))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) In the ",(0,r.kt)("strong",{parentName:"p"},"Destination Stream Prefix (Optional)")," field, add a prefix to stream names (for example, adding a prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_")," renames ",(0,r.kt)("inlineCode",{parentName:"p"},"projects")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte_projects"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Click ",(0,r.kt)("strong",{parentName:"p"},"Refresh schema")," if you had previously triggered a sync with a subset of tables in the stream and now want to see all the tables in the stream.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Activate the streams you want to sync:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(Optional) If your source has multiple tables, type the name of the stream you want to enable in the ",(0,r.kt)("strong",{parentName:"li"},"Search stream name")," search box."),(0,r.kt)("li",{parentName:"ul"},"(Optional) To configure the sync settings for multiple streams, select the checkbox next to the desired streams, configure the settings in the purple box, and click ",(0,r.kt)("strong",{parentName:"li"},"Apply"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the sync settings:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Toggle the ",(0,r.kt)("strong",{parentName:"p"},"Sync")," button to enable sync for the stream.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source:")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Namespace"),": The database schema of your source tables (auto-populated for your source)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Stream name"),": The table name in the source (auto-populated for your source)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sync mode"),": Select how you want the data to be replicated from the source to the destination:"),(0,r.kt)("p",{parentName:"li"},"For the source:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Full Refresh")," to copy the entire dataset each time you sync"),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Incremental")," to replicate only the new or modified data")),(0,r.kt)("p",{parentName:"li"},"For the destination:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Overwrite")," to erase the old data and replace it completely")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Append")," to capture changes to your table\n",(0,r.kt)("strong",{parentName:"p"},"Note:")," This creates duplicate records")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Append + Deduped")," to mirror your source while keeping records unique"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Some sync modes may not yet be available for your source or destination")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cursor field"),": Used in ",(0,r.kt)("strong",{parentName:"p"},"Incremental")," sync mode to determine which records to sync. Airbyte pre-selects the cursor field for you (example: updated date). If you have multiple cursor fields, select the one you want.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Primary key"),": Used in ",(0,r.kt)("strong",{parentName:"p"},"Append + Deduped")," sync mode to determine the unique identifier.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Destination"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Namespace:")," The database schema of your destination tables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stream name:")," The final table name in destination."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Set up connection"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Airbyte tests the connection. If the sync is successful, the Connection page is displayed."))),(0,r.kt)("h2",{id:"verify-the-connection"},"Verify the connection"),(0,r.kt)("p",null,"Verify the sync by checking the logs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the Airbyte Cloud dashboard, click ",(0,r.kt)("strong",{parentName:"li"},"Connections"),". The list of connections is displayed. Click on the connection you just set up."),(0,r.kt)("li",{parentName:"ol"},"The Sync History is displayed. Click on the first log in the sync history."),(0,r.kt)("li",{parentName:"ol"},"Check the data at your destination. If you added a Destination Stream Prefix while setting up the connection, make sure to search for the stream name with the prefix.")),(0,r.kt)("h2",{id:"allowlist-ip-addresses"},"Allowlist IP addresses"),(0,r.kt)("p",null,"Depending on your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/manage-data-residency#choose-your-default-data-residency"},"data residency")," location, you may need to allowlist the following IP addresses to enable access to Airbyte:"),(0,r.kt)("h3",{id:"united-states-and-airbyte-default"},"United States and Airbyte Default"),(0,r.kt)("h4",{id:"gcp-region-us-west3"},"GCP region: us-west3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"34.106.109.131"),(0,r.kt)("li",{parentName:"ul"},"34.106.196.165"),(0,r.kt)("li",{parentName:"ul"},"34.106.60.246"),(0,r.kt)("li",{parentName:"ul"},"34.106.229.69"),(0,r.kt)("li",{parentName:"ul"},"34.106.127.139"),(0,r.kt)("li",{parentName:"ul"},"34.106.218.58"),(0,r.kt)("li",{parentName:"ul"},"34.106.115.240"),(0,r.kt)("li",{parentName:"ul"},"34.106.225.141")),(0,r.kt)("h3",{id:"european-union"},"European Union"),(0,r.kt)("h4",{id:"aws-region-eu-west-3"},"AWS region: eu-west-3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"13.37.4.46"),(0,r.kt)("li",{parentName:"ul"},"13.37.142.60"),(0,r.kt)("li",{parentName:"ul"},"35.181.124.238")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);