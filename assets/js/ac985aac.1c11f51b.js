"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2410],{2870:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>l});var s=t(5893),r=t(1151);const d={title:"Introduction",description:"A list of all the custom directives supported by Tailcall.",sidebar_position:1,slug:"/directives"},c=void 0,n={id:"directives/introduction",title:"Introduction",description:"A list of all the custom directives supported by Tailcall.",source:"@site/docs/directives/introduction.md",sourceDirName:"directives",slug:"/directives",permalink:"/docs/directives",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"A list of all the custom directives supported by Tailcall.",sidebar_position:1,slug:"/directives"},sidebar:"tutorialSidebar",previous:{title:"Apollo Studio",permalink:"/docs/telemetry/apollo-studio"},next:{title:"@addField",permalink:"/docs/directives/add-field"}},o={},l=[];function h(e){const i={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Tailcall DSL builds on your existing GraphQL knowledge by allowing the addition of some custom directives. These directives provide powerful compile time guarantees to ensure your API composition is tight and robust. Tailcall automatically generates highly optimized resolver logic for your types using the information in the directives."}),"\n",(0,s.jsx)(i.p,{children:"Here is a list of all the custom directives supported by Tailcall:"}),"\n",(0,s.jsx)(i.p,{children:"Certainly! Here's the table with hyperlinks added back to the directive names:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Operator"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/add-field",children:(0,s.jsx)(i.code,{children:"@addField"})})}),(0,s.jsx)(i.td,{children:"Simplifies data structures and queries by adding, inlining, or flattening fields or nodes within the schema."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/cache",children:(0,s.jsx)(i.code,{children:"@cache"})})}),(0,s.jsx)(i.td,{children:"Enables caching for the query, field or type applied to."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/call",children:(0,s.jsx)(i.code,{children:"@call"})})}),(0,s.jsx)(i.td,{children:"Invokes a query or mutation from another query or mutation field."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/const",children:(0,s.jsx)(i.code,{children:"@const"})})}),(0,s.jsx)(i.td,{children:"Allows embedding of a constant response within the schema."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/graphql",children:(0,s.jsx)(i.code,{children:"@graphQL"})})}),(0,s.jsx)(i.td,{children:"Resolves a field or node by a GraphQL API."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/grpc",children:(0,s.jsx)(i.code,{children:"@grpc"})})}),(0,s.jsx)(i.td,{children:"Resolves a field or node by a gRPC API."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/http",children:(0,s.jsx)(i.code,{children:"@http"})})}),(0,s.jsx)(i.td,{children:"Resolves a field or node by a REST API."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/link",children:(0,s.jsx)(i.code,{children:"@link"})})}),(0,s.jsx)(i.td,{children:"Imports external resources such as config files, certs, protobufs, etc in the schema."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/modify",children:(0,s.jsx)(i.code,{children:"@modify"})})}),(0,s.jsx)(i.td,{children:"Enables changes to attributes of fields or nodes in the schema."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/omit",children:(0,s.jsx)(i.code,{children:"@omit"})})}),(0,s.jsx)(i.td,{children:"Excludes fields or nodes from the generated schema, making them inaccessible through the GraphQL API."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/rest",children:(0,s.jsx)(i.code,{children:"@rest"})})}),(0,s.jsx)(i.td,{children:"Allows exposing REST endpoints on top of GraphQL."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/server",children:(0,s.jsx)(i.code,{children:"@server"})})}),(0,s.jsx)(i.td,{children:"Provides server configurations for behavior tuning and tailcall optimization in specific use-cases."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/telemetry",children:(0,s.jsx)(i.code,{children:"@telemetry"})})}),(0,s.jsx)(i.td,{children:"Integrates with open-telemetry to provide observability of the running tailcall service."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/directives/upstream",children:(0,s.jsx)(i.code,{children:"@upstream"})})}),(0,s.jsx)(i.td,{children:"Controls aspects of the upstream server connection, including timeouts and keep-alive settings."})]})]})]})]})}function a(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>n,a:()=>c});var s=t(7294);const r={},d=s.createContext(r);function c(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);