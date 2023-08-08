"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[95755],{26963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={},i="Core Concepts",l={unversionedId:"cloud/core-concepts",id:"cloud/core-concepts",title:"Core Concepts",description:"Airbyte enables you to build data pipelines and replicate data from a source to a destination. You can configure how frequently the data is synced, what data is replicated, what format the data is written to in the destination, and if the data is stored in raw tables format or basic normalized (or JSON) format.",source:"@site/../docs/cloud/core-concepts.md",sourceDirName:"cloud",slug:"/cloud/core-concepts",permalink:"/cloud/core-concepts",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/core-concepts.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Getting Started with Airbyte Cloud",permalink:"/cloud/getting-started-with-airbyte-cloud"},next:{title:"Using Airbyte Cloud",permalink:"/category/using-airbyte-cloud"}},s={},d=[{value:"Source",id:"source",level:2},{value:"Destination",id:"destination",level:2},{value:"Connector",id:"connector",level:2},{value:"Connection",id:"connection",level:2},{value:"Stream",id:"stream",level:2},{value:"Field",id:"field",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Connection sync modes",id:"connection-sync-modes",level:2},{value:"Normalization",id:"normalization",level:2},{value:"Workspace",id:"workspace",level:2},{value:"Glossary of Terms",id:"glossary-of-terms",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,o.kt)("p",null,"Airbyte enables you to build data pipelines and replicate data from a source to a destination. You can configure how frequently the data is synced, what data is replicated, what format the data is written to in the destination, and if the data is stored in raw tables format or basic normalized (or JSON) format."),(0,o.kt)("p",null,"This page describes the concepts you need to know to use Airbyte."),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("p",null,"A source is an API, file, database, or data warehouse that you want to ingest data from."),(0,o.kt)("h2",{id:"destination"},"Destination"),(0,o.kt)("p",null,"A destination is a data warehouse, data lake, database, or an analytics tool where you want to load your ingested data."),(0,o.kt)("h2",{id:"connector"},"Connector"),(0,o.kt)("p",null,"An Airbyte component which pulls data from a source or pushes data to a destination."),(0,o.kt)("h2",{id:"connection"},"Connection"),(0,o.kt)("p",null,"A connection is an automated data pipeline that replicates data from a source to a destination."),(0,o.kt)("p",null,"Setting up a connection involves configuring the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Parameter")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Sync schedule"),(0,o.kt)("td",null,"When should a data sync be triggered?")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Destination Namespace and stream names"),(0,o.kt)("td",null,"Where should the replicated data be written?")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Catalog selection"),(0,o.kt)("td",null,"What data should be replicated from the source to the destination?")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Sync mode"),(0,o.kt)("td",null,"How should the streams be replicated (read and written)?")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Optional transformations"),(0,o.kt)("td",null,"How should Airbyte protocol messages (raw JSON blob) data be converted into other data representations?"))),(0,o.kt)("h2",{id:"stream"},"Stream"),(0,o.kt)("p",null,"A stream is a group of related records."),(0,o.kt)("p",null,"Examples of streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A table in a relational database"),(0,o.kt)("li",{parentName:"ul"},"A resource or API endpoint for a REST API"),(0,o.kt)("li",{parentName:"ul"},"The records from a directory containing many files in a filesystem")),(0,o.kt)("h2",{id:"field"},"Field"),(0,o.kt)("p",null,"A field is an attribute of a record in a stream."),(0,o.kt)("p",null,"Examples of fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A column in the table in a relational database"),(0,o.kt)("li",{parentName:"ul"},"A field in an API response")),(0,o.kt)("h2",{id:"namespace"},"Namespace"),(0,o.kt)("p",null,"Namespace is a group of streams in a source or destination. Common use cases for namespaces are enforcing permissions, segregating test and production data, and general data organization."),(0,o.kt)("p",null,"A schema in a relational database system is an example of a namespace."),(0,o.kt)("p",null,"In a source, the namespace is the location from where the data is replicated to the destination."),(0,o.kt)("p",null,"In a destination, the namespace is the location where the replicated data is stored in the destination. Airbyte supports the following configuration options for destination namespaces:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Configuration")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Mirror source structure"),(0,o.kt)("td",null,'Some sources (for example, databases) provide namespace information for a stream. If a source provides the namespace information, the destination will reproduce the same namespace when this configuration is set. For sources or streams where the source namespace is not known, the behavior will default to the "Destination default" option.')),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Destination default"),(0,o.kt)("td",null,"All streams will be replicated and stored in the default namespace defined on the destination settings page. For settings for popular destinations, see",(0,o.kt)("a",{href:"https://docs.airbyte.com/understanding-airbyte/namespaces#destination-connector-settings"}," \u200b\u200bDestination Connector Settings"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Custom format"),(0,o.kt)("td",null,"All streams will be replicated and stored in a user-defined custom format. See",(0,o.kt)("a",{href:"https://docs.airbyte.com/understanding-airbyte/namespaces#custom-format"}," Custom format")," for more details."))),(0,o.kt)("h2",{id:"connection-sync-modes"},"Connection sync modes"),(0,o.kt)("p",null,"A sync mode governs how Airbyte reads from a source and writes to a destination. Airbyte provides different sync modes to account for various use cases."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full Refresh | Overwrite:")," Sync all records from the source and replace data in destination by overwriting it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full Refresh | Append:")," Sync all records from the source and add them to the destination without deleting any data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incremental Sync | Append:")," Sync new records from the source and add them to the destination without deleting any data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incremental Sync | Append + Deduped:")," Sync new records from the source and add them to the destination. Also provides a de-duplicated view mirroring the state of the stream in the source.")),(0,o.kt)("h2",{id:"normalization"},"Normalization"),(0,o.kt)("p",null,"Normalization is the process of structuring data from the source into a format appropriate for consumption in the destination. For example, when writing data from a nested, dynamically typed source like a JSON API to a relational destination like Postgres, normalization is the process which un-nests JSON from the source into a relational table format which uses the appropriate column types in the destination."),(0,o.kt)("p",null,"Note that normalization is only relevant for the following relational database & warehouse destinations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BigQuery"),(0,o.kt)("li",{parentName:"ul"},"Snowflake"),(0,o.kt)("li",{parentName:"ul"},"Redshift"),(0,o.kt)("li",{parentName:"ul"},"Postgres"),(0,o.kt)("li",{parentName:"ul"},"Oracle"),(0,o.kt)("li",{parentName:"ul"},"MySQL"),(0,o.kt)("li",{parentName:"ul"},"MSSQL")),(0,o.kt)("p",null,"Other destinations do not support normalization as described in this section, though they may normalize data in a format that makes sense for them. For example, the S3 destination connector offers the option of writing JSON files in S3, but also offers the option of writing statically typed files such as Parquet or Avro."),(0,o.kt)("p",null,"After a sync is complete, Airbyte normalizes the data. When setting up a connection, you can choose one of the following normalization options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Raw data (no normalization): Airbyte places the JSON blob version of your data in a table called ",(0,o.kt)("inlineCode",{parentName:"li"},"_airbyte_raw_<stream name>")),(0,o.kt)("li",{parentName:"ul"},"Basic Normalization: Airbyte converts the raw JSON blob version of your data to the format of your destination. ",(0,o.kt)("em",{parentName:"li"},"Note: Not all destinations support normalization.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/dbt-cloud-integration"},"dbt Cloud integration"),": Airbyte's dbt Cloud integration allows you to use dbt Cloud for transforming and cleaning your data during the normalization process.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Normalizing data may cause an increase in your destination's compute cost. This cost will vary depending on the amount of data that is normalized and is not related to Airbyte credit usage.")),(0,o.kt)("h2",{id:"workspace"},"Workspace"),(0,o.kt)("p",null,"A workspace is a grouping of sources, destinations, connections, and other configurations. It lets you collaborate with team members and share resources across your team under a shared billing account."),(0,o.kt)("p",null,"When you ",(0,o.kt)("a",{parentName:"p",href:"http://cloud.airbyte.com/signup"},"sign up")," for Airbyte Cloud, we automatically create your first workspace where you are the only user with access. You can set up your sources and destinations to start syncing data and invite other users to join your workspace."),(0,o.kt)("h2",{id:"glossary-of-terms"},"Glossary of Terms"),(0,o.kt)("p",null,"You find and extended list of ",(0,o.kt)("a",{parentName:"p",href:"https://glossary.airbyte.com/term/airbyte-glossary-of-terms/"},"Airbyte specific terms"),", ",(0,o.kt)("a",{parentName:"p",href:"https://glossary.airbyte.com/term/data-engineering-concepts"},"data engineering concepts")," or many ",(0,o.kt)("a",{parentName:"p",href:"https://glossary.airbyte.com/"},"other data related terms"),"."))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);