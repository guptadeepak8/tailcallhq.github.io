"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9357],{3244:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(4848),i=n(8453);const a={title:"Solving the N+1 Issue with Tailcall",description:"Discover Tailcall's powerful introspection capabilities for tackling the N+1 problem, a common performance issue where a single downstream request triggers numerous upstream requests. Tailcall helps you identify N+1 issues before starting your server, ensuring optimal performance and efficiency. Learn how Tailcall enhances your system's functionality by addressing this critical challenge.",slug:"graphql-n-plus-one-problem-solved-tailcall",sidebar_label:"N+1 Issue"},r=void 0,l={id:"N+1",title:"Solving the N+1 Issue with Tailcall",description:"Discover Tailcall's powerful introspection capabilities for tackling the N+1 problem, a common performance issue where a single downstream request triggers numerous upstream requests. Tailcall helps you identify N+1 issues before starting your server, ensuring optimal performance and efficiency. Learn how Tailcall enhances your system's functionality by addressing this critical challenge.",source:"@site/docs/N+1.md",sourceDirName:".",slug:"/graphql-n-plus-one-problem-solved-tailcall",permalink:"/docs/graphql-n-plus-one-problem-solved-tailcall",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/N+1.md",tags:[],version:"current",frontMatter:{title:"Solving the N+1 Issue with Tailcall",description:"Discover Tailcall's powerful introspection capabilities for tackling the N+1 problem, a common performance issue where a single downstream request triggers numerous upstream requests. Tailcall helps you identify N+1 issues before starting your server, ensuring optimal performance and efficiency. Learn how Tailcall enhances your system's functionality by addressing this critical challenge.",slug:"graphql-n-plus-one-problem-solved-tailcall",sidebar_label:"N+1 Issue"},sidebar:"tutorialSidebar",previous:{title:"Configuration Reference",permalink:"/docs/tailcall-dsl-graphql-custom-directives"},next:{title:"Apollo Studio Integration",permalink:"/docs/integrate-apollo-studio-graphql-tailcall"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Example",id:"example",level:2},{value:"N+1 in Tailcall",id:"n1-in-tailcall",level:2},{value:"Deduplication",id:"deduplication",level:2},{value:"N+1 Checks",id:"n1-checks",level:2},{value:"Batch APIs",id:"batch-apis",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"N + 1 Problem",src:n(7010).A+"",width:"3000",height:"1509"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"N+1 problem"})," significantly impacts systems performance by triggering numerous upstream requests in response to a single downstream request. However, with Tailcall's powerful introspection capabilities, you can identify all instances of N+1 issues even before you start your server! Amazing, right? but before we delve deeper into how Tailcall accomplishes this, let's understand the N+1 issue in detail."]}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["Imagine we need to fetch data from the ",(0,t.jsx)(s.a,{href:"https://jsonplaceholder.typicode.com/",children:"jsonplaceholder.typicode.com"}),", requiring both posts and their authors' details."]}),"\n",(0,t.jsx)(s.p,{children:"First, we request all posts:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'\u276f curl https://jsonplaceholder.typicode.com/posts\n  [\n    {\n      "userId": 1,\n      "id": 1,\n      "title": "Creating Solutions for Challenges",\n      "body": "We anticipate and understand challenges, creating solutions while considering exceptions and criticisms."\n    },\n    {\n      "userId": 1,\n      "id": 2,\n      "title": "Understanding Identity",\n      "body": "Life\'s essence, measured through time, presents pains and joys. We find solace in the mundane, seeking meaning beyond the visible."\n    }\n  ]\n'})}),"\n",(0,t.jsxs)(s.p,{children:["This command retrieves posts from the API, with each post containing a ",(0,t.jsx)(s.code,{children:"userId"})," field indicating its author."]}),"\n",(0,t.jsx)(s.p,{children:"Next, we fetch details for each post's author, such as:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'\u276f curl https://jsonplaceholder.typicode.com/users/1\n  {\n    "id": 1,\n    "name": "Leanne Graham",\n    "username": "Bret",\n    "email": "Sincere@april.biz",\n    "address": {\n      "street": "Kulas Light",\n      "suite": "Apt. 556",\n      "city": "Gwenborough",\n      "zipcode": "92998-3874",\n      "geo": {\n        "lat": "-37.3159",\n        "lng": "81.1496"\n      }\n    },\n    "phone": "1-770-736-8031 x56442",\n    "website": "hildegard.org",\n    "company": {\n      "name": "Romaguera-Crona",\n      "catchPhrase": "Multi-layered client-server neural-net",\n      "bs": "harness real-time e-markets"\n    }\n  }\n'})}),"\n",(0,t.jsxs)(s.p,{children:["For 100 posts, this results in 100 additional requests for author details, totaling 101 requests. This is the infamous ",(0,t.jsx)(s.em,{children:"N + 1 problem"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["1 request for ",(0,t.jsx)(s.code,{children:"/posts"})]}),"\n",(0,t.jsxs)(s.li,{children:["100 or ",(0,t.jsx)(s.code,{children:"N"})," requests for ",(0,t.jsx)(s.code,{children:"/users/:id"})," for each user"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"This issue can escalate in real-world scenarios, leading to straining resources, increasing server costs, slowing response times, and potentially causing server downtime even at a moderate scale."})}),"\n",(0,t.jsx)(s.p,{children:"Hope this gives you a high-level overview of what the N + 1 problem is in the API context. It's a common problem not specific to just APIs or GraphQL, you will see this problem very commonly in database queries also. However addressing the N+1 problem during application design and development is crucial and we will see how this is tackled in Tailcall."}),"\n",(0,t.jsx)(s.h2,{id:"n1-in-tailcall",children:"N+1 in Tailcall"}),"\n",(0,t.jsx)(s.p,{children:"Before diving into solutions, let's observe the N+1 problem in the following Tailcall configuration:"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["If you are new here you might want to checkout our ",(0,t.jsx)(s.a,{href:"/docs/",children:"Getting Started"})," guide."]})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:'schema\n  @upstream(\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n}\n\ntype Query {\n  posts: [Post] @http(path: "/posts")\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User @http(path: "/users/{{.value.userId}}")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["This configuration sets up a GraphQL schema for a Tailcall server utilizing ",(0,t.jsx)(s.a,{href:"https://jsonplaceholder.typicode.com/",children:"jsonplaceholder.typicode.com"})," as its data source. It allows direct querying of posts and, for each post, retrieves the associated author information. Similar to our curl requests above, when we query for posts and their authors we end up issuing multiple user calls upstream:"]}),"\n",(0,t.jsxs)(s.p,{children:["Let's examine the CLI output for this configuration with Tailcall's ",(0,t.jsx)(s.code,{children:"start"})," command:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",metastring:"{6-9}",children:"\u276f tailcall start ./examples/jsonplaceholder.graphql\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 1\n  INFO \ud83d\ude80 Tailcall launched at [0.0.0.0:8000] over HTTP/1.1\n  INFO \ud83c\udf0d Playground: https://tailcall.run/playground/?u=http://127.0.0.1:8000/graphql\n  INFO GET http://jsonplaceholder.typicode.com/posts HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/8 HTTP/1.1\n  ...\n  INFO GET http://jsonplaceholder.typicode.com/users/8 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/10 HTTP/1.1\n"})}),"\n",(0,t.jsx)(s.p,{children:"Tailcall logs a sequence of requests made to fetch posts and then their individual authors, highlighting the N+1 problem in real-time. Since there are 100 posts, so 100 requests are made to fetch the authors."}),"\n",(0,t.jsx)(s.h2,{id:"deduplication",children:"Deduplication"}),"\n",(0,t.jsx)(s.p,{children:"If you run the query, at first you will observe a lot of duplicate requests are being made for getting the same author details."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Duplicate Upstream Calls",src:n(9768).A+"",width:"3540",height:"1869"})}),"\n",(0,t.jsxs)(s.p,{children:["This happens because of the 100 posts, a lot them are authored by the same user and by default Tailcall will make a request for every user when requested. You can fix this by setting ",(0,t.jsx)(s.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#dedupe",children:"dedupe"})," to ",(0,t.jsx)(s.code,{children:"true"})," in ",(0,t.jsx)(s.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#upstream-directive",children:"upstream"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",metastring:"{4}",children:'schema\n  @upstream(\n    baseURL: "http://jsonplaceholder.typicode.com"\n    dedupe: true\n  ) {\n  query: Query\n}\n\ntype Query {\n  # ...\n}\n\ntype Post {\n  # ...\n}\n\ntype User {\n  # ...\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["When you enable ",(0,t.jsx)(s.code,{children:"dedupe"}),", for each downstream request, Tailcall will automatically deduplicate all upstream requests and instead of making 100 it will only make 10 requests for unique users:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",metastring:"{6-16}",children:"\u276f tailcall start ./examples/jsonplaceholder.graphql\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 1\n  INFO \ud83d\ude80 Tailcall launched at [0.0.0.0:8000] over HTTP/1.1\n  INFO \ud83c\udf0d Playground: https://tailcall.run/playground/?u=http://127.0.0.1:8000/graphql\n  INFO GET http://jsonplaceholder.typicode.com/posts HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/1 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/2 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/3 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/4 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/5 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/6 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/7 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/8 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/9 HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/10 HTTP/1.1\n"})}),"\n",(0,t.jsx)(s.p,{children:"This is a massive 10x improvement over the previous implementation. However, it might not always be the case. For eg: If all the posts are created by different users you might still end up making 100 requests upstream."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Unique Upstream Calls",src:n(3814).A+"",width:"3540",height:"1689"})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Dedupe has a slight performance overhead so if your use case doesn't have any N + 1 issues, it might be worth keeping this setting disabled."})}),"\n",(0,t.jsx)(s.h2,{id:"n1-checks",children:"N+1 Checks"}),"\n",(0,t.jsx)(s.p,{children:"Before we get into the actual solution, if you observe closely the above logs Tailcall identified that there was one N + 1 issue, even before the requests were made:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",metastring:"{3}",children:"\u276f tailcall start ./examples/jsonplaceholder.graphql\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 1\n  INFO \ud83d\ude80 Tailcall launched at [0.0.0.0:8000] over HTTP/1.1\n  INFO \ud83c\udf0d Playground: https://tailcall.run/playground/?u=http://127.0.0.1:8000/graphql\n  INFO GET http://jsonplaceholder.typicode.com/posts HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users/8 HTTP/1.1\n  ...\n  INFO GET http://jsonplaceholder.typicode.com/users/10 HTTP/1.1\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To get a deeper understanding of what this N + 1 issue is, we can use the ",(0,t.jsx)(s.a,{href:"/docs/tailcall-graphql-cli#--n-plus-one-queries",children:"--n-plus-one-queries"})," parameter with the ",(0,t.jsx)(s.code,{children:"check"})," command:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",metastring:"{4,5}",children:"\u276f tailcall check ./jsonplaceholder.graphql --n-plus-one-queries\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO Config ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 1\n  query { posts { user } }\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Incredible, isn't it? Tailcall has discovered that querying for posts followed by their users would result in N + 1 upstream calls. This represents a significant productivity gain, as you can now identify all such N + 1 issues upfront without resorting to complex profiling, tracing, or other runtime techniques. The ",(0,t.jsx)(s.code,{children:"check"})," command also identifies the minimal query that could lead to these N + 1 problems by performing semantic analysis of your configuration. With these powerful tools handy you can go about making extremely efficient GraphQL backends as we will see next:"]}),"\n",(0,t.jsx)(s.h2,{id:"batch-apis",children:"Batch APIs"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Batched API",src:n(6131).A+"",width:"3540",height:"1568"})}),"\n",(0,t.jsxs)(s.p,{children:["An effective technique to mitigate the N+1 problem is deduplicating similar requests, significantly reducing the number of server calls. We achieved it previously using the ",(0,t.jsx)(s.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#dedupe",children:"dedupe"}),' setting. With Tailcall we can go one step further by giving hints about "batch APIs".']}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Batch APIs:"})," Are special APIs that allow us to query multiple things at once. In our case we can pass multiple user Ids as query params, to the ",(0,t.jsx)(s.code,{children:"/users"})," API to resolve many users at once:"]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Try to hit ",(0,t.jsx)(s.a,{href:"https://jsonplaceholder.typicode.com/users?id=1&id=2",children:"/users?id=1&id=2"})]})}),"\n",(0,t.jsxs)(s.p,{children:["TailCall provides the capability to leverage ",(0,t.jsx)(s.em,{children:"Batch APIs"}),". To utilize this feature, edit the ",(0,t.jsx)(s.code,{children:"@http"})," directive on ",(0,t.jsx)(s.code,{children:"Post.user"})," field in your GraphQL schema as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",metastring:"{9-10}",children:'type Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User\n    @http(\n      path: "/users"\n      query: [{key: "id", value: "{{.value.userId}}"}]\n      batchKey: ["id"]\n    )\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The described changes introduce two significant tweaks to the ",(0,t.jsx)(s.code,{children:"@http"})," directive:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Addition of a query parameter:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",metastring:"{6}",children:'type Post {\n  # ...\n  user: User\n    @http(\n      path: "/users"\n      query: [{key: "id", value: "{{.value.userId}}"}]\n      batchKey: ["id"]\n    )\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["This configuration generates a URL with the ",(0,t.jsx)(s.code,{children:"userId"})," from the ",(0,t.jsx)(s.code,{children:"Post"})," in the query params. For a batch of users, the CLI compiles a single URL, such as ",(0,t.jsx)(s.code,{children:"/users?id=1&id=2&id=3...id=10"}),", consolidating the 10 requests into one."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Addition of a batchKey:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",metastring:"{7}",children:'type Post {\n  # ...\n  user: User\n    @http(\n      path: "/users"\n      query: [{key: "id", value: "{{.value.userId}}"}]\n      batchKey: ["id"]\n    )\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter instructs the system to use the user's ",(0,t.jsx)(s.code,{children:"id"}),", in the ",(0,t.jsx)(s.code,{children:"User"})," type, as the unique identifier. This helps in differentiating between users received from the batch API."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Let's see what the server logs when you now start Tailcall with the updated configuration:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",metastring:"{21-22}",children:'schema\n  @server(port: 8000)\n  @upstream(\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n}\n\ntype Query {\n  posts: [Post] @http(path: "/posts")\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User\n    @http(\n      path: "/users"\n      query: [{key: "id", value: "{{.value.userId}}"}]\n      batchKey: ["id"]\n    )\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"Let's start the server as usual and focus on the detected N + 1 issues:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",metastring:"{3,7}",children:"\u276f tailcall start ./examples/jsonplaceholder.graphql\n  INFO File read: ./examples/jsonplaceholder.graphql ... ok\n  INFO N + 1 detected: 0\n  INFO \ud83d\ude80 Tailcall launched at [0.0.0.0:8000] over HTTP/1.1\n  INFO \ud83c\udf0d Playground: https://tailcall.run/playground/?u=http://127.0.0.1:8000/graphql\n  INFO GET http://jsonplaceholder.typicode.com/posts HTTP/1.1\n  INFO GET http://jsonplaceholder.typicode.com/users?id=1&id=10&id=2&id=3&id=4&id=5&id=6&id=7&id=8&id=9 HTTP/1.1\n"})}),"\n",(0,t.jsx)(s.p,{children:"As you can see there are ZERO N + 1 detected this time! It basically means that irrespective of how large the list of posts is there is a finite number of requests that will be issued in this case that's always going to be TWO. And this is how Tailcall users tackle the N + 1 problem in GraphQL."}),"\n",(0,t.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(s.p,{children:"To summarize, we learnt that N + 1 is a general problem and not specific to GraphQL. It's a hard problem to identify, and developers often resort to runtime analysis to find such scenarios. N + 1 can really strain your infrastructure, leading to serious downtime in certain cases."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Requests made before optimizations",src:n(1050).A+"",width:"2000",height:"1006"})}),"\n",(0,t.jsxs)(s.p,{children:["We also learnt that in Tailcall, the CLI can introspect your configuration and identify all the potential N + 1 issues upfront. Using ",(0,t.jsx)(s.code,{children:"dedupe"}),", you can improve the N + 1 problem significantly, however, it's not a complete solution. To completely eliminate the N + 1 problem, you can configure Tailcall to leverage Batch APIs. Hopefully, this guide underscores the effectiveness of Tailcall in addressing the N + 1 problem."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Requests made after optimizations",src:n(5405).A+"",width:"2001",height:"1006"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5405:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/n+1-after-8ef8cee93de6ec00ebed0d704bea0224.png"},6131:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/n+1-batch-227057b25e7cf2688d4985b056179e6c.png"},1050:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/n+1-before-ab9c95208f6e2c3933721b456bc9245a.png"},9768:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/n+1-duplicate-d7ebe2ce6262463ba6e5b8d8077c8efd.png"},7010:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/n+1-issue-81f278d76d32c29bfeafbe72ea913ef9.png"},3814:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/n+1-unique-2a6b2c32101fd1472eac5eac44a62890.png"}}]);