"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2167],{48979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(74848),a=t(28453);const s={title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 1",authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5"}],tags:["GraphQL","API","Schema","Design","Best Practices"],description:"Learn how to design a robust, scalable GraphQL schema. Best practices and considerations to build a schema that can evolve with your application's needs.",image:"/images/graphql/graphql-schema-structure.png",hide_table_of_contents:!0,slug:"graphql-schema"},r=void 0,o={permalink:"/blog/graphql-schema",source:"@site/blog/graphql-schema-2024-07-11.md",title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 1",description:"Learn how to design a robust, scalable GraphQL schema. Best practices and considerations to build a schema that can evolve with your application's needs.",date:"2024-07-11T00:00:00.000Z",tags:[{inline:!0,label:"GraphQL",permalink:"/blog/tags/graph-ql"},{inline:!0,label:"API",permalink:"/blog/tags/api"},{inline:!0,label:"Schema",permalink:"/blog/tags/schema"},{inline:!0,label:"Design",permalink:"/blog/tags/design"},{inline:!0,label:"Best Practices",permalink:"/blog/tags/best-practices"}],readingTime:9.485,hasTruncateMarker:!0,authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5",imageURL:"https://avatars.githubusercontent.com/u/23661702?v=5"}],frontMatter:{title:"Design a GraphQL Schema So Good, It'll Make REST APIs Cry - Part 1",authors:[{name:"Amit Singh",title:"Head of Growth and Strategy @ Tailcall",url:"https://github.com/amitksingh1490",image_url:"https://avatars.githubusercontent.com/u/23661702?v=5",imageURL:"https://avatars.githubusercontent.com/u/23661702?v=5"}],tags:["GraphQL","API","Schema","Design","Best Practices"],description:"Learn how to design a robust, scalable GraphQL schema. Best practices and considerations to build a schema that can evolve with your application's needs.",image:"/images/graphql/graphql-schema-structure.png",hide_table_of_contents:!0,slug:"graphql-schema"},unlisted:!1,prevItem:{title:"Are Hackers Using Your Own GraphQL API Against You?",permalink:"/blog/graphql-introspection-security"},nextItem:{title:"Writing a GraphQL Backend by Hand is Long Gone",permalink:"/blog/writing-a-graphql-backend-by-hand-is-long-gone"}},l={authorsImageUrls:[void 0]},c=[{value:"The Power of GraphQL Schemas",id:"the-power-of-graphql-schemas",level:2},{value:"Our Example Application: TechTalent",id:"our-example-application-techtalent",level:2},{value:"Step 1: Identify Core Types",id:"step-1-identify-core-types",level:2},{value:"Step 2: Model Relationships",id:"step-2-model-relationships",level:2},{value:"Step 3: Plan Query Operations",id:"step-3-plan-query-operations",level:2},{value:"Step 4: Plan Mutation Operations",id:"step-4-plan-mutation-operations",level:2},{value:"Step 5: Consider Authentication and Authorization",id:"step-5-consider-authentication-and-authorization",level:2},{value:"Step 6: Implement Pagination",id:"step-6-implement-pagination",level:2},{value:"Step 7: Plan for Real-time Updates",id:"step-7-plan-for-real-time-updates",level:2},{value:"Step 8: Implement Custom Scalars",id:"step-8-implement-custom-scalars",level:2},{value:"Step 9: Use Interfaces for Shared Fields",id:"step-9-use-interfaces-for-shared-fields",level:2},{value:"Step 10: Document Your Schema",id:"step-10-document-your-schema",level:2},{value:"Visualizing the Schema",id:"visualizing-the-schema",level:2},{value:"Best Practices and Considerations",id:"best-practices-and-considerations",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"GraphQL Schema Structure",src:t(38981).A+"",width:"1854",height:"877"})}),"\n",(0,i.jsx)(n.p,{children:"Designing a robust, scalable GraphQL schema is critical for building production-ready APIs that can evolve with your application's needs. In this comprehensive guide, we'll walk through the process of crafting a GraphQL schema for a real-world application, highlighting best practices and considerations along the way."}),"\n",(0,i.jsx)(n.p,{children:"If you are thinking how we could possibly cover all of the lovely intricacies associated with this topic in one go, you are right, we can't and so we are not! We have created an amazing series to take you through the nuances of working with GraphQL schemas."}),"\n",(0,i.jsx)(n.p,{children:"Let's break our job into puzzle pieces. Let's start by simply creating designing a brand new schema!"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center",margin:"16px"},children:(0,i.jsx)("img",{src:"/images/blog/puzzle-graphql-schema-1.png",alt:"puzzle piece to visualise the series",style:{maxWidth:"40%"}})}),"\n",(0,i.jsxs)(n.p,{children:["If you're new to GraphQL Schema, check out our ",(0,i.jsx)(n.a,{href:"https://tailcall.run/graphql/schemas-and-types/",children:"GraphQL Schema Tutorial"})," to get up to speed with the basics."]}),"\n",(0,i.jsx)(n.h2,{id:"the-power-of-graphql-schemas",children:"The Power of GraphQL Schemas"}),"\n",(0,i.jsx)(n.p,{children:"A well-designed GraphQL schema serves as the blueprint for your entire API. It defines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The types of data available"}),"\n",(0,i.jsx)(n.li,{children:"The relationships between those types"}),"\n",(0,i.jsx)(n.li,{children:"The operations clients can perform (queries, mutations, subscriptions)"}),"\n",(0,i.jsx)(n.li,{children:"The structure of requests and responses"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Your schema acts as a contract between your backend and frontend teams. Once published, clients can rely on its structure, enabling them to build UIs with confidence. A thoughtful schema design upfront can save significant refactoring down the road."}),"\n",(0,i.jsx)(n.h2,{id:"our-example-application-techtalent",children:"Our Example Application: TechTalent"}),"\n",(0,i.jsx)(n.p,{children:"To illustrate schema design principles, let's imagine we're building TechTalent - a platform connecting tech companies with job seekers. Our application will allow:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Companies to post job listings"}),"\n",(0,i.jsx)(n.li,{children:"Candidates to create profiles and apply to jobs"}),"\n",(0,i.jsx)(n.li,{children:"Recruiters to search candidates and manage applications"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We'll design our schema step-by-step to support these core features."}),"\n",(0,i.jsx)(n.h2,{id:"step-1-identify-core-types",children:"Step 1: Identify Core Types"}),"\n",(0,i.jsx)(n.p,{children:"The first step is to identify the main entities in our domain. For TechTalent, our core types might include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Company"}),"\n",(0,i.jsx)(n.li,{children:"JobListing"}),"\n",(0,i.jsx)(n.li,{children:"Candidate"}),"\n",(0,i.jsx)(n.li,{children:"Application"}),"\n",(0,i.jsx)(n.li,{children:"Recruiter"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's start by defining these as object types in our schema:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Company {\n  id: ID!\n  name: String!\n  description: String\n  # More fields to come\n}\n\ntype JobListing {\n  id: ID!\n  title: String!\n  description: String!\n  # More fields to come\n}\n\ntype Candidate {\n  id: ID!\n  name: String!\n  email: String!\n  # More fields to come\n}\n\ntype Application {\n  id: ID!\n  # More fields to come\n}\n\ntype Recruiter {\n  id: ID!\n  name: String!\n  email: String!\n  # More fields to come\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Notice we've only included a few basic fields at this stage. We'll flesh these out as we progress."}),"\n",(0,i.jsx)(n.h2,{id:"step-2-model-relationships",children:"Step 2: Model Relationships"}),"\n",(0,i.jsx)(n.p,{children:"Next, we need to consider how these types relate to each other. In GraphQL, we model relationships by adding fields that reference other types. Let's update our types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Company {\n  id: ID!\n  name: String!\n  description: String\n  jobListings: [JobListing!]!\n  recruiters: [Recruiter!]!\n}\n\ntype JobListing {\n  id: ID!\n  title: String!\n  description: String!\n  company: Company!\n  applications: [Application!]!\n}\n\ntype Candidate {\n  id: ID!\n  name: String!\n  email: String!\n  applications: [Application!]!\n}\n\ntype Application {\n  id: ID!\n  jobListing: JobListing!\n  candidate: Candidate!\n  status: ApplicationStatus!\n}\n\ntype Recruiter {\n  id: ID!\n  name: String!\n  email: String!\n  company: Company!\n}\n\nenum ApplicationStatus {\n  PENDING\n  REVIEWED\n  REJECTED\n  ACCEPTED\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"We've now established the core relationships:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Companies have job listings and recruiters"}),"\n",(0,i.jsx)(n.li,{children:"Job listings belong to a company and have applications"}),"\n",(0,i.jsx)(n.li,{children:"Candidates have applications"}),"\n",(0,i.jsx)(n.li,{children:"Applications link a candidate to a job listing"}),"\n",(0,i.jsx)(n.li,{children:"Recruiters belong to a company"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note the use of the ",(0,i.jsx)(n.code,{children:"ApplicationStatus"})," enum to represent the fixed set of possible statuses."]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-plan-query-operations",children:"Step 3: Plan Query Operations"}),"\n",(0,i.jsx)(n.p,{children:"With our core types defined, let's consider what query operations our clients will need. We'll start with some basic CRUD (Create, Read, Update, Delete) operations:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  company(id: ID!): Company\n  jobListing(id: ID!): JobListing\n  candidate(id: ID!): Candidate\n\n  # List operations\n  companies: [Company!]!\n  jobListings(filters: JobListingFilters): [JobListing!]!\n  candidates(filters: CandidateFilters): [Candidate!]!\n}\n\ninput JobListingFilters {\n  companyId: ID\n  title: String\n  # Add more filter options\n}\n\ninput CandidateFilters {\n  skills: [String!]\n  experienceYears: Int\n  # Add more filter options\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We've added basic queries to fetch individual entities by ID, as well as list queries for our main types. Notice the use of ",(0,i.jsx)(n.code,{children:"input"})," types for filters - this allows for more flexible and extensible querying."]}),"\n",(0,i.jsx)(n.h2,{id:"step-4-plan-mutation-operations",children:"Step 4: Plan Mutation Operations"}),"\n",(0,i.jsx)(n.p,{children:"Next, let's define some mutation operations to allow clients to modify data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  # Company mutations\n  createCompany(\n    input: CreateCompanyInput!\n  ): CreateCompanyPayload!\n  updateCompany(\n    id: ID!\n    input: UpdateCompanyInput!\n  ): UpdateCompanyPayload!\n\n  # Job Listing mutations\n  createJobListing(\n    input: CreateJobListingInput!\n  ): CreateJobListingPayload!\n  updateJobListing(\n    id: ID!\n    input: UpdateJobListingInput!\n  ): UpdateJobListingPayload!\n\n  # Candidate mutations\n  createCandidate(\n    input: CreateCandidateInput!\n  ): CreateCandidatePayload!\n  updateCandidate(\n    id: ID!\n    input: UpdateCandidateInput!\n  ): UpdateCandidatePayload!\n\n  # Application mutations\n  submitApplication(\n    input: SubmitApplicationInput!\n  ): SubmitApplicationPayload!\n  updateApplicationStatus(\n    id: ID!\n    status: ApplicationStatus!\n  ): UpdateApplicationStatusPayload!\n}\n\n# Input and Payload types for each mutation...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Notice the pattern we're using for mutations:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Each mutation has a corresponding input type"}),"\n",(0,i.jsx)(n.li,{children:"Each mutation returns a payload type"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This structure offers several benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Input types allow for easy addition of new fields in the future"}),"\n",(0,i.jsx)(n.li,{children:"Payload types can include both the modified entity and any errors or metadata"}),"\n",(0,i.jsx)(n.li,{children:"It provides a consistent structure across all mutations"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's look at an example input and payload type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"input CreateJobListingInput {\n  companyId: ID!\n  title: String!\n  description: String!\n  requirements: [String!]!\n  salary: SalaryInput\n}\n\ninput SalaryInput {\n  min: Int!\n  max: Int!\n  currency: String!\n}\n\ntype CreateJobListingPayload {\n  jobListing: JobListing\n  errors: [Error!]\n}\n\ntype Error {\n  message: String!\n  path: [String!]\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This structure allows for detailed error reporting and future extensibility."}),"\n",(0,i.jsx)(n.h2,{id:"step-5-consider-authentication-and-authorization",children:"Step 5: Consider Authentication and Authorization"}),"\n",(0,i.jsx)(n.p,{children:"In a production application, we need to consider authentication and authorization. Let's add some operations for user management:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  # ... previous mutations\n\n  signup(input: SignupInput!): AuthPayload!\n  login(input: LoginInput!): AuthPayload!\n  logout: Boolean!\n}\n\ninput SignupInput {\n  email: String!\n  password: String!\n  name: String!\n  role: UserRole!\n}\n\ninput LoginInput {\n  email: String!\n  password: String!\n}\n\ntype AuthPayload {\n  token: String!\n  user: User!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  name: String!\n  role: UserRole!\n}\n\nenum UserRole {\n  CANDIDATE\n  RECRUITER\n  ADMIN\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We've added basic authentication operations and a ",(0,i.jsx)(n.code,{children:"User"})," type to represent authenticated users. In a real-world scenario, you'd likely want to implement more robust authentication and authorization mechanisms."]}),"\n",(0,i.jsx)(n.h2,{id:"step-6-implement-pagination",children:"Step 6: Implement Pagination"}),"\n",(0,i.jsxs)(n.p,{children:["As our application grows, we'll need to implement pagination for our list queries. Let's update our ",(0,i.jsx)(n.code,{children:"jobListings"})," query to use cursor-based pagination:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  # ... other queries\n\n  jobListings(\n    first: Int\n    after: String\n    filters: JobListingFilters\n  ): JobListingConnection!\n}\n\ntype JobListingConnection {\n  edges: [JobListingEdge!]!\n  pageInfo: PageInfo!\n}\n\ntype JobListingEdge {\n  node: JobListing!\n  cursor: String!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  endCursor: String\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This implementation follows the Relay connection specification, which provides a standardized way to handle pagination in GraphQL."}),"\n",(0,i.jsx)(n.h2,{id:"step-7-plan-for-real-time-updates",children:"Step 7: Plan for Real-time Updates"}),"\n",(0,i.jsx)(n.p,{children:"For certain features, we might want to provide real-time updates. Let's add a subscription to notify when new job listings are posted:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type Subscription {\n  newJobListing: JobListing!\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Clients can subscribe to this operation to receive updates whenever a new job listing is created."}),"\n",(0,i.jsx)(n.h2,{id:"step-8-implement-custom-scalars",children:"Step 8: Implement Custom Scalars"}),"\n",(0,i.jsxs)(n.p,{children:["Our schema might benefit from some custom scalar types for specific data formats. For example, let's add a ",(0,i.jsx)(n.code,{children:"DateTime"})," scalar:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"scalar DateTime\n\ntype JobListing {\n  # ... other fields\n  postedAt: DateTime!\n  applicationDeadline: DateTime\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"We'll need to implement the serialization/deserialization logic for this scalar in our resolvers."}),"\n",(0,i.jsx)(n.h2,{id:"step-9-use-interfaces-for-shared-fields",children:"Step 9: Use Interfaces for Shared Fields"}),"\n",(0,i.jsx)(n.p,{children:"As our schema grows, we might notice some types sharing common fields. We can use interfaces to model this shared structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"interface Node {\n  id: ID!\n}\n\ninterface Timestamped {\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype Company implements Node & Timestamped {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  # ... other fields\n}\n\ntype JobListing implements Node & Timestamped {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  # ... other fields\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This approach promotes consistency and can make it easier to implement features that work across multiple types."}),"\n",(0,i.jsx)(n.h2,{id:"step-10-document-your-schema",children:"Step 10: Document Your Schema"}),"\n",(0,i.jsx)(n.p,{children:"Finally, it's crucial to document your schema thoroughly. GraphQL allows for built-in documentation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'"""\nRepresents a company on the TechTalent platform.\n"""\ntype Company implements Node & Timestamped {\n  """\n  Unique identifier for the company.\n  """\n  id: ID!\n\n  """\n  The name of the company.\n  """\n  name: String!\n\n  # ... other fields\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Good documentation helps both your team and API consumers understand the purpose and usage of each type and field."}),"\n",(0,i.jsx)(n.h2,{id:"visualizing-the-schema",children:"Visualizing the Schema"}),"\n",(0,i.jsx)(n.p,{children:"To better understand the relationships in our schema, let's visualize the core types:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Diagram Illustrating Relationships between various types ",src:t(86312).A+"",width:"865",height:"825"})}),"\n",(0,i.jsx)(n.p,{children:"This diagram illustrates the key relationships between our main entities, helping us ensure our schema accurately represents our domain."}),"\n",(0,i.jsxs)(n.p,{children:["To visualize your schema, you can use tools like ",(0,i.jsx)(n.a,{href:"https://graphql-kit.com/graphql-voyager/",children:"GraphQL Voyager"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"best-practices-and-considerations",children:"Best Practices and Considerations"}),"\n",(0,i.jsx)(n.p,{children:"As we've designed our schema, we've touched on several best practices. Let's recap some key points and add a few more considerations:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Start with the UI in mind"}),": Design your schema based on how the data will be used in your UI, not just how it's stored in your database."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use clear, consistent naming"}),": Adopt a naming convention (e.g., PascalCase for types, camelCase for fields) and stick to it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Leverage GraphQL features"}),": Make use of enums, interfaces, and unions to create a rich, expressive schema."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Plan for change"}),": Use input types for mutations and consider versioning strategies for evolving your schema over time."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Optimize for performance"}),": Be mindful of N+1 query problems and consider implementing DataLoader or similar batching mechanisms."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Secure your schema"}),": Implement proper authentication and authorization. Consider using directives for field-level permissions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Validate input"}),": Use non-nullable fields and custom scalars to enforce data integrity at the schema level."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Provide meaningful errors"}),": Return detailed error information in your mutation payloads to help clients handle failures gracefully."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Monitor and analyze"}),": Implement logging and monitoring to understand how your schema is being used and where optimizations can be made."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Keep it DRY"}),": Use interfaces and abstract types to reduce duplication in your schema."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Designing a production-grade GraphQL schema is an iterative process that requires careful thought and planning. By starting with core types and relationships, then gradually adding queries, mutations, and advanced features, we can build a schema that's both powerful and maintainable."}),"\n",(0,i.jsx)(n.p,{children:"Remember, your schema is a living document. As your application evolves, so too will your schema. By following these principles and best practices, you'll be well-equipped to design and maintain a GraphQL schema that can grow with your needs."}),"\n",(0,i.jsx)(n.p,{children:"The TechTalent example we've explored here demonstrates many real-world considerations, but every application will have its unique requirements. Always design with your specific use cases in mind, and don't be afraid to iterate as you learn more about how your API is used in practice."}),"\n",(0,i.jsx)(n.p,{children:"By investing time in thoughtful schema design upfront, you'll create a solid foundation for your GraphQL API, enabling efficient development and a great experience for your API consumers."}),"\n",(0,i.jsx)(n.p,{children:"Alright greatttt! You have successfully completed the first part of a very intricate series!! Pat yourslef and maybe high five your cat! Here are the links to the next blogs in the series that have already been published."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"cat giving high five",src:t(93777).A+"",width:"356",height:"200"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/graphql-schema-part-2-1",children:"Next Part"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},93777:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cat-high-five-gif-cc8601ed8d765d559f1293ad9a98f652.webp"},86312:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/entity-relationships-2b31d862fb993cbb5b5a9cc1e019f855.png"},38981:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/graphql-schema-structure-a3ef3dada0602b3b1de4dfd4f9c8a9cf.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);