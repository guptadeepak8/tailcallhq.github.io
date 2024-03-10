"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5797],{9906:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=n(5893),i=n(1151);const r={title:"Tackling N + 1"},a=void 0,l={id:"guides/n+1",title:"Tackling N + 1",description:"The N+1 problem is a pervasive and critical issue in application development that occurs when an application ends up issuing a large number of downstream requests, for a single request from upstream. Let's understand with an example:",source:"@site/docs/guides/n+1.md",sourceDirName:"guides",slug:"/guides/n+1",permalink:"/docs/guides/n+1",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/n+1.md",tags:[],version:"current",frontMatter:{title:"Tackling N + 1"},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/docs/guides/logging"},next:{title:"Scalars",permalink:"/docs/guides/scalar"}},o={},h=[{value:"Scenario",id:"scenario",level:2},{value:"Fetching Posts",id:"fetching-posts",level:3},{value:"Fetching Users",id:"fetching-users",level:3},{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Jsonplaceholder Example",id:"jsonplaceholder-example",level:3},{value:"Running the TailCall CLI",id:"running-the-tailcall-cli",level:3},{value:"Solving Using Batching",id:"solving-using-batching",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"N+1 problem"})," is a pervasive and critical issue in application development that occurs when an application ends up issuing a large number of downstream requests, for a single request from upstream. Let's understand with an example:"]}),"\n",(0,t.jsx)(s.h2,{id:"scenario",children:"Scenario"}),"\n",(0,t.jsxs)(s.p,{children:["Consider we're developing a feature that involves consuming data from the ",(0,t.jsx)(s.a,{href:"https://jsonplaceholder.typicode.com",children:"JSON Placeholder API"}),". The feature requires fetching posts and the details of the authors of these posts."]}),"\n",(0,t.jsx)(s.p,{children:"Here's an illustration of a typical implementation:"}),"\n",(0,t.jsx)(s.h3,{id:"fetching-posts",children:"Fetching Posts"}),"\n",(0,t.jsx)(s.p,{children:"First, we send a request to retrieve all posts:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl https://jsonplaceholder.typicode.com/posts\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The above request fetches a list of posts from the API, each of which includes a ",(0,t.jsx)(s.code,{children:"userId"})," field indicating the author of the post."]}),"\n",(0,t.jsx)(s.h3,{id:"fetching-users",children:"Fetching Users"}),"\n",(0,t.jsx)(s.p,{children:"Then, for each post, we need to get the author's details. A request for a specific user might look like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl https://jsonplaceholder.typicode.com/users/1\n"})}),"\n",(0,t.jsx)(s.p,{children:"If we received 100 posts from our first request, we would then make 100 more requests to get each post's author details, resulting in a total of 101 requests."}),"\n",(0,t.jsx)(s.p,{children:"The N+1 problem, illustrated with the JSON Placeholder API, occurs when one API request triggers more. For example, fetching 100 posts then requesting each post's author details results in 101 requests."}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"In real-world applications featuring thousands of posts and users, the problem becomes more severe. Each user request can generate hundreds or thousands of server requests, straining server resources and resulting in slower response times, increased server costs, and a diminished user experience. This issue may even cause server downtime due to the overwhelming number of requests, affecting service availability. Thus, addressing the N+1 problem during the design and development phases of applications that make extensive API requests is essential. We will explore solutions to this issue in the following sections."})}),"\n",(0,t.jsx)(s.h2,{id:"using-the-cli",children:"Using the CLI"}),"\n",(0,t.jsx)(s.p,{children:"The TailCall CLI serves as a powerful tool for developers, identifying N+1 issues in GraphQL applications even before making any requests or publishing configurations in production. This proactive approach enables the mitigation of potential issues from the development stage."}),"\n",(0,t.jsxs)(s.p,{children:["Before diving into the usage, ensure you have familiarized yourself with the basics of the TailCall CLI. If you haven't already, please refer to the ",(0,t.jsx)(s.a,{href:"/docs/getting_started/",children:"installation guide"}),", which will walk you through the setup process and help you understand the key commands."]}),"\n",(0,t.jsx)(s.h3,{id:"jsonplaceholder-example",children:"Jsonplaceholder Example"}),"\n",(0,t.jsxs)(s.p,{children:["Here is a sample ",(0,t.jsx)(s.code,{children:".graphql"})," file that we'll be examining:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @upstream(baseURL: "http://jsonplaceholder.typicode.com") {\n  query: Query\n}\n\ntype Query {\n  posts: [Post] @http(path: "/posts")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User @http(path: "/users/{{value.userId}}")\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["This schema enables clients to retrieve a list of posts, each including its associated user data. Yet, in its present form, it's affected by the ",(0,t.jsx)(s.strong,{children:"N+1 problem"}),": fetching each post necessitates a separate request for its associated user data."]}),"\n",(0,t.jsx)(s.p,{children:"The following section will show how to detect this issue with the TailCall CLI."}),"\n",(0,t.jsx)(s.h3,{id:"running-the-tailcall-cli",children:"Running the TailCall CLI"}),"\n",(0,t.jsxs)(s.p,{children:["With the ",(0,t.jsx)(s.code,{children:"check"})," command, TailCall CLI can assist you in identifying potential N+1 issues in a GraphQL file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"tailcall check ./jsonplaceholder.graphql\nINFO File read: ./examples/jsonplaceholder.graphql ... ok\nINFO Config ./examples/jsonplaceholder.graphql ... ok\n# highlight-start\nINFO N + 1 detected: 1\n# highlight-end\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"N + 1: 1"})," line tells you that the TailCall CLI has detected one potential N+1 issue."]}),"\n",(0,t.jsxs)(s.p,{children:["For a deeper understanding of these issues, you can use the ",(0,t.jsx)(s.code,{children:"--n-plus-one-queries"})," parameter:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"tailcall check  ./jsonplaceholder.graphql --n-plus-one-queries\nINFO File read: ./examples/jsonplaceholder.graphql ... ok\nINFO Config ./examples/jsonplaceholder.graphql ... ok\nINFO N + 1 detected: 1\n# highlight-start\nquery { posts { user } }\n# highlight-end\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter uncovers the minimal query that can trigger an N+1 problem. In the above case, ",(0,t.jsx)(s.code,{children:"query { posts { user } }"}),", represents the minimal query that could lead to an N+1 problem. It illustrates that within the ",(0,t.jsx)(s.code,{children:"posts"})," query, each post is triggering an extra request to fetch its associated ",(0,t.jsx)(s.code,{children:"user"})," data."]}),"\n",(0,t.jsx)(s.h2,{id:"solving-using-batching",children:"Solving Using Batching"}),"\n",(0,t.jsx)(s.p,{children:"It's an effective technique to group similar requests into one, greatly reducing the number of server calls. The TailCall CLI provides this capability to address the typical N+1 issue that arises in GraphQL."}),"\n",(0,t.jsxs)(s.p,{children:["To tap into this feature, edit the ",(0,t.jsx)(s.code,{children:"@http"})," directive on ",(0,t.jsx)(s.code,{children:"Post.user"})," in your GraphQL schema as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User\n    @http(\n      path: "/users"\n      # highlight-start\n      query: [{key: "id", value: "{{value.userId}}"}]\n      batchKey: ["id"]\n      # highlight-end\n    )\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The described changes introduce two significant tweaks to the ",(0,t.jsx)(s.code,{children:"@http"})," directive and incorporate the ",(0,t.jsx)(s.code,{children:"batchKey"})," configuration:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:'query: [{key: "id", value: "{{value.userId}}"}]'}),": In this configuration, the TailCall CLI generates a URL that aligns the user id with the ",(0,t.jsx)(s.code,{children:"userId"})," from the parent ",(0,t.jsx)(s.code,{children:"Post"}),". For a batch of posts, the CLI compiles a single URL, such as ",(0,t.jsx)(s.code,{children:"/users?id=1&id=2&id=3...id=10"}),", consolidating the requests into one."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:'batchKey: ["id"]'}),": This parameter instructs the system to convert the list of responses into a map internally, using the user's ",(0,t.jsx)(s.code,{children:"id"})," as the unique key. In essence, it allows the system to differentiate each user value in the response list."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"By using this approach, you can reduce the number of requests from 101 (for 100 posts plus one initial request for the post list) down to 2. This significant optimization effectively handles the N+1 problem, thereby enhancing your application's efficiency and user experience."})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>a});var t=n(7294);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);