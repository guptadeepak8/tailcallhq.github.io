"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9852],{7670:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(5893),n=t(1151);const a={title:"@http"},i=void 0,o={id:"operators/http",title:"@http",description:"The @http operator indicates a field or node relies on a REST API. For example:",source:"@site/docs/operators/http.md",sourceDirName:"operators",slug:"/operators/http",permalink:"/docs/operators/http",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/http.md",tags:[],version:"current",frontMatter:{title:"@http"},sidebar:"tutorialSidebar",previous:{title:"@grpc",permalink:"/docs/operators/grpc"},next:{title:"@link",permalink:"/docs/operators/link"}},l={},d=[{value:"baseURL",id:"baseurl",level:2},{value:"path",id:"path",level:2},{value:"method",id:"method",level:2},{value:"query",id:"query",level:2},{value:"body",id:"body",level:2},{value:"headers",id:"headers",level:2},{value:"groupBy",id:"groupby",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"@http"})," operator indicates a field or node relies on a REST API. For example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User] @http(path: "/users")\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["In this example, adding the ",(0,r.jsx)(s.code,{children:"@http"})," operator to the ",(0,r.jsx)(s.code,{children:"users"})," field of the ",(0,r.jsx)(s.code,{children:"Query"})," type indicates reliance on a REST API for the ",(0,r.jsx)(s.code,{children:"users"})," field. The ",(0,r.jsx)(s.a,{href:"#path",children:"path"})," argument specifies the REST API's path, which is ",(0,r.jsx)(s.code,{children:"/users"})," in this scenario.Querying the ",(0,r.jsx)(s.code,{children:"users"})," field prompts the GraphQL server to issue a GET request to ",(0,r.jsx)(s.code,{children:"https://jsonplaceholder.typicode.com/users"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"baseurl",children:"baseURL"}),"\n",(0,r.jsxs)(s.p,{children:["Specifies the API's base URL. If unspecified, it defaults to the URL in the ",(0,r.jsx)(s.a,{href:"#upstream",children:"@upstream"})," operator."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User] @http(path: "/users", baseURL: "https://jsonplaceholder.typicode.com")\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"path",children:"path"}),"\n",(0,r.jsxs)(s.p,{children:["Refers to the API endpoint, for example, ",(0,r.jsx)(s.code,{children:"https://jsonplaceholder.typicode.com/users"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User] @http(path: "/users")\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["If your API endpoint contains dynamic segments, you can substitute variables using Mustache templates. For example, to fetch a specific user, you can write the path as ",(0,r.jsx)(s.code,{children:"/users/{{args.id}}"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  user(id: ID!): User @http(path: "/users/{{args.id}}")\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"method",children:"method"}),"\n",(0,r.jsx)(s.p,{children:"Specifies the HTTP method for the API call. The default method is GET if not specified."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Mutation {\n  createUser(input: UserInput!): User @http(method: "POST", path: "/users")\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"query",children:"query"}),"\n",(0,r.jsx)(s.p,{children:"Represents the API call's query parameters, either as a static object or with dynamic parameters using Mustache templates. These parameters append to the URL."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  userPosts(id: ID!): [Post] @http(path: "/posts", query: [{key: "userId", value: "{{args.id}}"}])\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"body",children:"body"}),"\n",(0,r.jsx)(s.p,{children:"Defines the API call's body, necessary for methods like POST or PUT. Pass it as a static object or use Mustache templates for variable substitution from the GraphQL variables."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Mutation {\n  createUser(input: UserInput!): User @http(method: "POST", path: "/users", body: "{{args.input}}")\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["In the example above, the ",(0,r.jsx)(s.code,{children:"createUser"})," mutation sends a POST request to ",(0,r.jsx)(s.code,{children:"/users"}),", with the input object converted to JSON and included in the request body."]}),"\n",(0,r.jsx)(s.h2,{id:"headers",children:"headers"}),"\n",(0,r.jsxs)(s.p,{children:["Customizes the HTTP request headers made by the ",(0,r.jsx)(s.strong,{children:"@http"})," operator. Specify a key-value map of header names and values."]}),"\n",(0,r.jsx)(s.p,{children:"For instance:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Mutation {\n  createUser(input: UserInput!): User @http(path: "/users", headers: [{key: "X-Server", value: "Tailcall"}])\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["In this example, a request to ",(0,r.jsx)(s.code,{children:"/users"})," will include a HTTP header ",(0,r.jsx)(s.code,{children:"X-Server"})," with the value ",(0,r.jsx)(s.code,{children:"Tailcall"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["You can make use of mustache templates to provide dynamic values for headers, derived from the arguments or ",(0,r.jsx)(s.a,{href:"/docs/guides/context",children:"context"})," provided in the request. For example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Mutation {\n  users(name: String): User\n    @http(path: "/users", headers: [{key: "X-Server", value: "Tailcall"}, {key: "User-Name", value: "{{args.name}}"}])\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["In this scenario, the ",(0,r.jsx)(s.code,{children:"User-Name"})," header's value will dynamically adjust according to the ",(0,r.jsx)(s.code,{children:"name"})," argument passed in the request."]}),"\n",(0,r.jsx)(s.h2,{id:"groupby",children:"groupBy"}),"\n",(0,r.jsxs)(s.p,{children:["Groups data requests into a single call, enhancing efficiency. Refer to our ",(0,r.jsx)(s.a,{href:"/docs/guides/n+1#solving-using-batching",children:"n + 1 guide"})," for more details."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  id: Int!\n  name: String!\n  user: User @http(path: "/users", query: [{key: "id", value: "{{value.userId}}"}], groupBy: ["id"])\n}\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:'query: {key: "id", value: "{{value.userId}}"}]'}),": Instructs TailCall CLI to generate a URL aligning the user id with ",(0,r.jsx)(s.code,{children:"userId"})," from the parent ",(0,r.jsx)(s.code,{children:"Post"}),", compiling a single URL for a batch of posts, such as ",(0,r.jsx)(s.code,{children:"/users?id=1&id=2&id=3...id=10"}),", consolidating requests into one."]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>i});var r=t(7294);const n={},a=r.createContext(n);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);