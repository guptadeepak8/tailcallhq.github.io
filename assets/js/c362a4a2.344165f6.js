"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2079],{6712:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var l=n(5893),o=n(1151);const s={title:"Logging"},a=void 0,t={id:"guides/logging",title:"Logging",description:"Logging acts as an essential tool for obtaining insights into code execution and addressing software development challenges. You can configure the verbosity of logs via log levels. Use TAILCALLLOGLEVEL or TCLOGLEVEL environment variables to set the application's log level. The available log levels include:",source:"@site/docs/guides/logging.md",sourceDirName:"guides",slug:"/guides/logging",permalink:"/docs/guides/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/logging.md",tags:[],version:"current",frontMatter:{title:"Logging"},sidebar:"tutorialSidebar",previous:{title:"Http Cache",permalink:"/docs/guides/http-cache"},next:{title:"Tackling N + 1",permalink:"/docs/guides/n+1"}},r={},c=[{value:"error",id:"error",level:3},{value:"warn",id:"warn",level:3},{value:"info",id:"info",level:3},{value:"debug",id:"debug",level:3},{value:"trace",id:"trace",level:3},{value:"off",id:"off",level:3}];function d(e){const i={admonition:"admonition",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.p,{children:["Logging acts as an essential tool for obtaining insights into code execution and addressing software development challenges. You can configure the verbosity of logs via log levels. Use ",(0,l.jsx)(i.code,{children:"TAILCALL_LOG_LEVEL"})," or ",(0,l.jsx)(i.code,{children:"TC_LOG_LEVEL"})," environment variables to set the application's log level. The available log levels include:"]}),"\n",(0,l.jsx)(i.h3,{id:"error",children:"error"}),"\n",(0,l.jsx)(i.p,{children:"This is the highest severity level. It indicates a critical issue that may lead to the failure of the program or a part of it."}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"TAILCALL_LOG_LEVEL=error tailcall <COMMAND>\n# or\nTC_LOG_LEVEL=error tailcall <COMMAND>\n"})}),"\n",(0,l.jsx)(i.h3,{id:"warn",children:"warn"}),"\n",(0,l.jsx)(i.p,{children:"This log level signifies potential issues or warnings that do not necessarily result in immediate failure but may require attention."}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"TAILCALL_LOG_LEVEL=warn tailcall <COMMAND>\n# or\nTC_LOG_LEVEL=warn tailcall <COMMAND>\n"})}),"\n",(0,l.jsx)(i.h3,{id:"info",children:"info"}),"\n",(0,l.jsx)(i.p,{children:"This level offers general information about the program's execution, providing insights into its state and activities."}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"TAILCALL_LOG_LEVEL=info tailcall <COMMAND>\n# or\nTC_LOG_LEVEL=info tailcall <COMMAND>\n"})}),"\n",(0,l.jsx)(i.h3,{id:"debug",children:"debug"}),"\n",(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"debug"})," log level is useful for developers during the debugging process, providing detailed information about the program's internal workings."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"TAILCALL_LOG_LEVEL=debug tailcall <COMMAND>\n# or\nTC_LOG_LEVEL=debug tailcall <COMMAND>\n"})}),"\n",(0,l.jsx)(i.h3,{id:"trace",children:"trace"}),"\n",(0,l.jsxs)(i.p,{children:["The ",(0,l.jsx)(i.code,{children:"trace"})," log level is the most detailed logging level, used for fine-grained debugging. This level provides exhaustive details about the program's execution flow."]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"TAILCALL_LOG_LEVEL=trace tailcall <COMMAND>\n# or\nTC_LOG_LEVEL=trace tailcall <COMMAND>\n"})}),"\n",(0,l.jsx)(i.h3,{id:"off",children:"off"}),"\n",(0,l.jsx)(i.p,{children:"This level serves as a special indicator for generating no logs, allowing the option to disable logging entirely."}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"TAILCALL_LOG_LEVEL=off tailcall <COMMAND>\n# or\nTC_LOG_LEVEL=off tailcall <COMMAND>\n"})}),"\n",(0,l.jsx)(i.admonition,{type:"info",children:(0,l.jsxs)(i.p,{children:["The default log level is ",(0,l.jsx)(i.code,{children:"info"}),"."]})}),"\n",(0,l.jsxs)(i.p,{children:["Log levels are hierarchical, meaning if you set the log level to a specific level, it includes all the levels above it. For example, setting the log level to ",(0,l.jsx)(i.code,{children:"info"})," will include logs at the ",(0,l.jsx)(i.code,{children:"info"}),", ",(0,l.jsx)(i.code,{children:"warn"}),", and ",(0,l.jsx)(i.code,{children:"error"})," levels, but exclude ",(0,l.jsx)(i.code,{children:"debug"})," and ",(0,l.jsx)(i.code,{children:"trace"})," logs."]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"Hierarchy of Log Levels",src:n(2415).Z+"",width:"885",height:"885"})}),"\n",(0,l.jsx)(i.admonition,{type:"info",children:(0,l.jsxs)(i.p,{children:["You can specify log levels in either uppercase or lowercase; both yield the same result. For example, ",(0,l.jsx)(i.code,{children:"TAILCALL_LOG_LEVEL=DEBUG"})," and ",(0,l.jsx)(i.code,{children:"TAILCALL_LOG_LEVEL=debug"})," are same."]})})]})}function g(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},2415:(e,i,n)=>{n.d(i,{Z:()=>l});const l=n.p+"assets/images/logging-a3166c4a8f10ac178e63de6dafdbd93b.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>a});var l=n(7294);const o={},s=l.createContext(o);function a(e){const i=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),l.createElement(s.Provider,{value:i},e.children)}}}]);