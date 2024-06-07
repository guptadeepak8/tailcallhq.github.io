"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6985],{6266:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=i(4848),r=i(8453);const l={title:"New Relic Telemetry Integration",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",slug:"graphql-newrelic-guide-telemetry",sidebar_label:"New Relic Telemetry"},a=void 0,o={id:"new-relic",title:"New Relic Telemetry Integration",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",source:"@site/docs/new-relic.md",sourceDirName:".",slug:"/graphql-newrelic-guide-telemetry",permalink:"/docs/graphql-newrelic-guide-telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/new-relic.md",tags:[],version:"current",frontMatter:{title:"New Relic Telemetry Integration",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",slug:"graphql-newrelic-guide-telemetry",sidebar_label:"New Relic Telemetry"},sidebar:"tutorialSidebar",previous:{title:"Logging Levels",permalink:"/docs/graphql-logging-levels-tailcall"},next:{title:"GraphQL Playground",permalink:"/docs/graphql-playground-guide"}},c={},s=[];function d(e){const t={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The guide is based on ",(0,n.jsx)(t.a,{href:"https://docs.newrelic.com/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/get-started/opentelemetry-set-up-your-app/",children:"official doc"})]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.a,{href:"https://newrelic.com",children:"newrelic.com"})]}),"\n",(0,n.jsx)(t.li,{children:"Login to your account"}),"\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.code,{children:"<your user name> -> Api Keys"})," and copy license value for key with access to write data"]}),"\n",(0,n.jsxs)(t.li,{children:["Go to tailcall config and update it with:","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'schema\n  @telemetry(\n    export: {\n      otlp: {\n        url: "https://otlp.nr-data.net:4317"\n        headers: [\n          {\n            key: "api-key"\n            value: "{{.env.NEWRELIC_API_KEY}}"\n          }\n        ]\n      }\n    }\n  ) {\n  query: Query\n}\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Set the api key you've copied before to the environment variable named ",(0,n.jsx)(t.code,{children:"NEWRELIC_API_KEY"})," and start tailcall with updated config"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Now make some requests to running service and wait a little bit until New Relic proceeds the data. After that you can go to ",(0,n.jsx)(t.code,{children:"Traces"})," locate ",(0,n.jsx)(t.code,{children:"request"})," trace, click on it, then pick one of the available traces and click on it. You should see something like the screenshot below:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"newrelic-trace",src:i(9761).A+"",width:"2104",height:"1250"})}),"\n",(0,n.jsxs)(t.p,{children:["To see metrics now go to ",(0,n.jsx)(t.code,{children:"APM & Services -> Metrics Explorer"})," and choose the metrics you want to see like on example below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"newrelic-metrics",src:i(4545).A+"",width:"2104",height:"1250"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4545:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/newrelic-metrics-303d823cc035464b278975a369dab44f.png"},9761:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/newrelic-trace-4016231cd7ed67c0756606dcbc4cd1da.png"}}]);