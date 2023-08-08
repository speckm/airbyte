"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[58744],{15614:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var r=a(87462),i=(a(67294),a(3905));const n={},l="Jira",s={unversionedId:"integrations/sources/jira",id:"integrations/sources/jira",title:"Jira",description:"This page contains the setup guide and reference information for the Jira source connector.",source:"@site/../docs/integrations/sources/jira.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/jira",permalink:"/integrations/sources/jira",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/jira.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Jenkins",permalink:"/integrations/sources/jenkins"},next:{title:"K6 Cloud API",permalink:"/integrations/sources/k6-cloud"}},p={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Jira",id:"step-1-set-up-jira",level:3},{value:"Step 2: Set up the Jira connector in Airbyte",id:"step-2-set-up-the-jira-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Experimental Tables",id:"experimental-tables",level:2},{value:"Troubleshooting",id:"troubleshooting-1",level:2},{value:"Rate Limiting &amp; Performance",id:"rate-limiting--performance",level:2},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:o},d="wrapper";function u(t){let{components:e,...a}=t;return(0,i.kt)(d,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jira"},"Jira"),(0,i.kt)("p",null,"This page contains the setup guide and reference information for the Jira source connector."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Token"),(0,i.kt)("li",{parentName:"ul"},"Domain"),(0,i.kt)("li",{parentName:"ul"},"Email")),(0,i.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h3",{id:"step-1-set-up-jira"},"Step 1: Set up Jira"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To get access to the Jira API you need to create an API token, please follow the instructions in this ",(0,i.kt)("a",{parentName:"li",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"documentation"),".")),(0,i.kt)("h3",{id:"step-2-set-up-the-jira-connector-in-airbyte"},"Step 2: Set up the Jira connector in Airbyte"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,i.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,i.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,i.kt)("strong",{parentName:"li"},"Jira")," from the Source type dropdown and enter a name for this connector."),(0,i.kt)("li",{parentName:"ol"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"API Token")," that you have created. ",(0,i.kt)("strong",{parentName:"li"},"API Token")," is used for Authorization to your account by BasicAuth."),(0,i.kt)("li",{parentName:"ol"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"Domain")," for your Jira account, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"airbyteio.atlassian.net"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"Email")," for your Jira account which you used to generate the API token. This field is used for Authorization to your account by BasicAuth."),(0,i.kt)("li",{parentName:"ol"},"Enter the list of ",(0,i.kt)("strong",{parentName:"li"},"Projects (Optional)")," for which you need to replicate data, or leave it empty if you want to replicate data for all projects."),(0,i.kt)("li",{parentName:"ol"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"Start Date (Optional)")," from which you'd like to replicate data for Jira in the format YYYY-MM-DDTHH:MM:SSZ. All data generated after this date will be replicated, or leave it empty if you want to replicate all data. Note that it will be used only in the following streams:BoardIssues, IssueComments, IssueProperties, IssueRemoteLinks, IssueVotes, IssueWatchers, IssueWorklogs, Issues, PullRequests, SprintIssues. For other streams it will replicate all data."),(0,i.kt)("li",{parentName:"ol"},"Toggle ",(0,i.kt)("strong",{parentName:"li"},"Expand Issue Changelog")," allows you to get a list of recent updates to every issue in the Issues stream."),(0,i.kt)("li",{parentName:"ol"},"Toggle ",(0,i.kt)("strong",{parentName:"li"},"Render Issue Fields")," allows returning field values rendered in HTML format in the Issues stream."),(0,i.kt)("li",{parentName:"ol"},"Toggle ",(0,i.kt)("strong",{parentName:"li"},"Enable Experimental Streams")," enables experimental PullRequests stream.")),(0,i.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,i.kt)("p",null,"The Jira source connector supports the following ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append-deduped"},"Incremental - Append + Deduped"))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Check out common troubleshooting issues for the Jira connector on our Airbyte Forum ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/discussions"},"here"),"."),(0,i.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,i.kt)("p",null,"This connector outputs the following full refresh streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-application-roles/#api-rest-api-3-applicationrole-get"},"Application roles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-avatars/#api-rest-api-3-avatar-type-system-get"},"Avatars")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-other-operations/#api-agile-1-0-board-get"},"Boards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-dashboards/#api-rest-api-3-dashboard-get"},"Dashboards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-filters/#api-rest-api-3-filter-search-get"},"Filters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-filter-sharing/#api-rest-api-3-filter-id-permission-get"},"Filter sharing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-groups-picker-get"},"Groups")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-fields/#api-rest-api-3-field-get"},"Issue fields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-field-configurations/#api-rest-api-3-fieldconfiguration-get"},"Issue field configurations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-custom-field-contexts/#api-rest-api-3-field-fieldid-context-get"},"Issue custom field contexts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-get"},"Issue link types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-navigator-settings/#api-rest-api-3-settings-columns-get"},"Issue navigator settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-notification-schemes/#api-rest-api-3-notificationscheme-get"},"Issue notification schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-priorities/#api-rest-api-3-priority-get"},"Issue priorities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-propertykey-get"},"Issue properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-remote-links/#api-rest-api-3-issue-issueidorkey-remotelink-get"},"Issue remote links")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-resolutions/#api-rest-api-3-resolution-search-get"},"Issue resolutions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-security-schemes/#api-rest-api-3-issuesecurityschemes-get"},"Issue security schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-schemes/#api-rest-api-3-issuetypescheme-get"},"Issue type schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-screen-schemes/#api-rest-api-3-issuetypescreenscheme-get"},"Issue type screen schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-votes/#api-group-issue-votes"},"Issue votes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-watchers/#api-rest-api-3-issue-issueidorkey-watchers-get"},"Issue watchers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-jira-settings/#api-rest-api-3-application-properties-get"},"Jira settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-labels/#api-rest-api-3-label-get"},"Labels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permissions/#api-rest-api-3-mypermissions-get"},"Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permission-schemes/#api-rest-api-3-permissionscheme-get"},"Permission schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-search-get"},"Projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-avatars/#api-rest-api-3-project-projectidorkey-avatars-get"},"Project avatars")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-categories/#api-rest-api-3-projectcategory-get"},"Project categories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-project-projectidorkey-component-get"},"Project components")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-email/#api-rest-api-3-project-projectid-email-get"},"Project email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-permission-schemes/#api-group-project-permission-schemes"},"Project permission schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-types/#api-rest-api-3-project-type-get"},"Project types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-project-projectidorkey-version-get"},"Project versions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screens/#api-rest-api-3-screens-get"},"Screens")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tabs/#api-rest-api-3-screens-screenid-tabs-get"},"Screen tabs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tab-fields/#api-rest-api-3-screens-screenid-tabs-tabid-fields-get"},"Screen tab fields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-schemes/#api-rest-api-3-screenscheme-get"},"Screen schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-board/#api-rest-agile-1-0-board-boardid-sprint-get"},"Sprints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-time-tracking/#api-rest-api-3-configuration-timetracking-list-get"},"Time tracking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-search/#api-rest-api-3-user-search-get"},"Users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-users/#api-rest-api-3-user-get"},"UsersGroupsDetailed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflows/#api-rest-api-3-workflow-search-get"},"Workflows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-schemes/#api-rest-api-3-workflowscheme-get"},"Workflow schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-statuses/#api-rest-api-3-status-get"},"Workflow statuses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-status-categories/#api-rest-api-3-statuscategory-get"},"Workflow status categories"))),(0,i.kt)("p",null,"This connector outputs the following incremental streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-board/#api-rest-agile-1-0-board-boardid-issue-get"},"Board issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-get"},"Issue comments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-worklogs/#api-rest-api-3-issue-issueidorkey-worklog-get"},"Issue worklogs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-get"},"Issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-sprint/#api-rest-agile-1-0-sprint-sprintid-issue-get"},"Sprint issues"))),(0,i.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,i.kt)("h2",{id:"experimental-tables"},"Experimental Tables"),(0,i.kt)("p",null,'The following tables depend on undocumented internal Jira API endpoints and are\ntherefore subject to stop working if those endpoints undergo major changes.\nWhile they will not cause a sync to fail, they may not be able to pull any data.\nUse the "Enable Experimental Streams" option when setting up the source to allow\nor disallow these tables to be selected when configuring a connection.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pull Requests (currently only GitHub PRs are supported)")),(0,i.kt)("h2",{id:"troubleshooting-1"},"Troubleshooting"),(0,i.kt)("p",null,"Check out common troubleshooting issues for the Jira connector on our Airbyte Forum ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/discussions"},"here"),"."),(0,i.kt)("h2",{id:"rate-limiting--performance"},"Rate Limiting & Performance"),(0,i.kt)("p",null,"The Jira connector should not run into Jira API limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.12"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-06-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/26652"},"#","26652")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Expand on ",(0,i.kt)("inlineCode",{parentName:"td"},"leads")," for ",(0,i.kt)("inlineCode",{parentName:"td"},"projects")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-06-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/26906"},"#","26906")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Handle project permissions error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-05-26"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/26652"},"#","26652")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed bug when ",(0,i.kt)("inlineCode",{parentName:"td"},"board")," doesn't support ",(0,i.kt)("inlineCode",{parentName:"td"},"sprints"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-05-16"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/26114"},"#","26114")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update fields info in docs and spec, update to latest airbyte-cdk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-05-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25798"},"#","25798")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add sprint info to ",(0,i.kt)("inlineCode",{parentName:"td"},"sprint_issues")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"sprints")," streams for team-managed projects")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-04-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25275"},"#","25275")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add missing types to issues json schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-04-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24636"},"#","24636")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Removed Connector Domain Pattern from Spec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-04-05"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24890"},"#","24890")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Fix streams "IssuePropertyKeys", "ScreenTabFields"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23006"},"#","23006")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove caching for ",(0,i.kt)("inlineCode",{parentName:"td"},"Issues")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2023-01-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20739"},"#","20739")),(0,i.kt)("td",{parentName:"tr",align:"left"},"fix: check_connection fails if no projects are defined")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-12-23"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20859"},"#","20859")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed pagination for streams ",(0,i.kt)("inlineCode",{parentName:"td"},"issue_remote_links"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"sprints"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-12-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20128"},"#","20128")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Improved code to become beta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-11-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18901"},"#","18901")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds UserGroupsDetailed schema, fix Incremental normalization, add Incremental support for IssueComments, IssueWorklogs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.23"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-10-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18505"},"#","18505")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Correcting ",(0,i.kt)("inlineCode",{parentName:"td"},"max_results")," bug introduced in connector stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.22"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-10-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16944"},"#","16944")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds support for ",(0,i.kt)("inlineCode",{parentName:"td"},"max_results")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"users")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.21"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-07-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15135"},"#","15135")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds components to ",(0,i.kt)("inlineCode",{parentName:"td"},"fields")," object on ",(0,i.kt)("inlineCode",{parentName:"td"},"issues")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.20"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-05-25"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13202"},"#","13202")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds resolutiondate to ",(0,i.kt)("inlineCode",{parentName:"td"},"fields")," object on ",(0,i.kt)("inlineCode",{parentName:"td"},"issues")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.19"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10835"},"#","10835")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Change description for array fields")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.18"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7378"},"#","7378")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds experimental endpoint Pull Request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.17"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9079"},"#","9079")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update schema for ",(0,i.kt)("inlineCode",{parentName:"td"},"filters")," stream + fix fetching ",(0,i.kt)("inlineCode",{parentName:"td"},"filters")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.16"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8999"},"#","8999")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7398"},"#","7398")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add option to render fields in HTML format and fix sprint_issue ids")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.14"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-27"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7408"},"#","7408")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix normalization step error. Fix schemas. Fix ",(0,i.kt)("inlineCode",{parentName:"td"},"acceptance-test-config.yml"),". Fix ",(0,i.kt)("inlineCode",{parentName:"td"},"streams.py"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.13"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7222"},"#","7222")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Source Jira: Make recently added configs optional for backwards compatibility")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.12"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6621"},"#","6621")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add Board, Epic, and Sprint streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6523"},"#","6523")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add cache and more streams ","(","boards and sprints",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5426"},"#","5426")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Changed cursor field from fields.created to fields.updated for Issues stream. Made Issues worklogs stream full refresh.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-28"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4947"},"#","4947")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Source Jira: fixing schemas accordinately to response.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4817"},"#","4817")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"td"},"labels")," schema properties issue.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-15"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4113"},"#","4113")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"td"},"user")," stream with the correct endpoint and query param.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"#","3973")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,i.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," in base Docker image for Kubernetes support.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Implementing base_read acceptance test dived by stream groups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Implementing incremental sync. Migrated to airbyte-cdk. Adding all available entities in Jira Cloud.")))))}u.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=o(a),c=i,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||n;return a?r.createElement(k,l(l({ref:e},m),{},{components:a})):r.createElement(k,l({ref:e},m))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,l=new Array(n);l[0]=c;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[d]="string"==typeof t?t:i,l[1]=s;for(var o=2;o<n;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);