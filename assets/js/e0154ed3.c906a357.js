"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9905],{5928:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=i(5893),r=i(1151);const n={title:"Scalars",description:"Explore GraphQL's core and Tailcall's custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency."},s=void 0,l={id:"guides/scalar",title:"Scalars",description:"Explore GraphQL's core and Tailcall's custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency.",source:"@site/docs/guides/scalar.md",sourceDirName:"guides",slug:"/guides/scalar",permalink:"/docs/guides/scalar",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/scalar.md",tags:[],version:"current",frontMatter:{title:"Scalars",description:"Explore GraphQL's core and Tailcall's custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency."},sidebar:"tutorialSidebar",previous:{title:"REST on top of GraphQL",permalink:"/docs/guides/rest"},next:{title:"Tailcall on AWS",permalink:"/docs/guides/tailcall-on-aws"}},d={},c=[{value:"Default Scalars",id:"default-scalars",level:2},{value:"Tailcall Scalars",id:"tailcall-scalars",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Valid Query Example",id:"valid-query-example",level:3},{value:"Invalid Query Example",id:"invalid-query-example",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The GraphQL specification includes default scalar types ",(0,a.jsx)(t.code,{children:"Int"}),", ",(0,a.jsx)(t.code,{children:"Float"}),", ",(0,a.jsx)(t.code,{children:"String"}),", ",(0,a.jsx)(t.code,{children:"Boolean"}),", and ",(0,a.jsx)(t.code,{children:"ID"}),". Although these scalars cover the majority of use cases, some applications need to support other atomic data types such as ",(0,a.jsx)(t.code,{children:"Date"})," or an ",(0,a.jsx)(t.code,{children:"Email"}),".\nTailcall provides these predefined scalars, with built-in validations, eliminating the need for you to do so."]}),"\n",(0,a.jsx)(t.h2,{id:"default-scalars",children:"Default Scalars"}),"\n",(0,a.jsx)(t.p,{children:"Here is a list of default scalars that are built into the GraphQL Spec:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"right"},children:"Scalar"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Specification"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"Int"})}),(0,a.jsxs)(t.td,{children:["A type representing non-fractional signed whole numbers. Values can range up to (2^",31," - 1)."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://spec.graphql.org/June2018/#sec-Int",children:"GraphQL Specification for Int"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"Float"})}),(0,a.jsx)(t.td,{children:"A type for signed double-precision floating-point numbers."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://spec.graphql.org/June2018/#sec-Float",children:"GraphQL Specification for Float"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"String"})}),(0,a.jsx)(t.td,{children:"A sequence of UTF-8 characters, representing textual data."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://graphql.org/learn/schema/#scalar-String",children:"GraphQL Specification for String"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"Boolean"})}),(0,a.jsxs)(t.td,{children:["A boolean type that represents ",(0,a.jsx)(t.code,{children:"true"})," or ",(0,a.jsx)(t.code,{children:"false"}),"."]}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://graphql.org/learn/schema/#scalar-Boolean",children:"GraphQL Specification for Boolean"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"ID"})}),(0,a.jsx)(t.td,{children:"A unique identifier, typically used to refetch an object or as a cache key."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://graphql.org/learn/schema/#scalar-ID",children:"GraphQL Specification for ID"})})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"tailcall-scalars",children:"Tailcall Scalars"}),"\n",(0,a.jsx)(t.p,{children:"These are the current set of custom scalars supported by Tailcall:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"right"},children:"Scalar"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Specification"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"Email"})}),(0,a.jsx)(t.td,{children:"A string that conforms to the email format as defined in the HTML specification, utilizing the Unicode character set."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address",children:"HTML Specification for Valid Email Addresses"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"PhoneNumber"})}),(0,a.jsx)(t.td,{children:"A string format adhering to the E.164 international standard, which outlines the numbering plan for the worldwide public switched telephone network (PSTN) and certain data networks."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/E.164",children:"E.164 International Numbering Plan"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"Date"})}),(0,a.jsx)(t.td,{children:"A string that represents dates and times in the Internet protocols, following the ISO 8601 standard via the Gregorian calendar."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc3339",children:"RFC 3339 Date and Time Internet Formats"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"Url"})}),(0,a.jsx)(t.td,{children:"A standardized format for Uniform Resource Identifiers (URI) that includes both the generic URI syntax and guidelines for resolving URI references, which may be in relative form."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://www.ietf.org/rfc/rfc3986.txt",children:"RFC 3986 Uniform Resource Identifier"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"JSON"})}),(0,a.jsx)(t.td,{children:"A lightweight data interchange format based on the ECMAScript Programming Language Standard, designed for human-readable data representation."}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7159",children:"RFC 7159 The JavaScript Object Notation (JSON) Data Interchange Format"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"right"},children:(0,a.jsx)(t.code,{children:"Empty"})}),(0,a.jsx)(t.td,{children:"A type that represents no value or is used as a placeholder in contexts where no other data is expected or returned. It's equivalent to unit or void in other programming languages."}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["If none of the scalars make sense for your use case, consider opening an issue on the Tailcall ",(0,a.jsx)(t.a,{href:"https://github.com/tailcallhq/tailcall",children:"github repository"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,a.jsx)(t.p,{children:"Let's try using these custom scalars in our GraphQL schema."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:'schema\n  @server(\n    port: 8000\n    graphiql: true\n    hostname: "localhost"\n  ) {\n  query: Query\n}\n\ntype Query {\n  email(value: Email!): Email!\n    @const(data: "{{args.value}}")\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"valid-query-example",children:"Valid Query Example"}),"\n",(0,a.jsxs)(t.p,{children:["Here is an example of a valid query that passes the custom scalar validations:\n",(0,a.jsx)(t.img,{alt:"Valid Query",src:i(9427).Z+"",width:"3216",height:"1910"})]}),"\n",(0,a.jsx)(t.h3,{id:"invalid-query-example",children:"Invalid Query Example"}),"\n",(0,a.jsxs)(t.p,{children:["And here is an example of an invalid query that fails the custom scalar validations as expected:\n",(0,a.jsx)(t.img,{alt:"Invalid Query",src:i(4729).Z+"",width:"3216",height:"1910"})]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["We recommend utilizing ",(0,a.jsx)(t.strong,{children:"JSON"})," as a scalar for cases where no other scalar type fits your needs. ."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},4729:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/invalid-4b6ee06db2f377e04f4d39fcbad6d416.png"},9427:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/valid-73c9fc562c994b08e1476975e4597d12.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>s});var a=i(7294);const r={},n=a.createContext(r);function s(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);