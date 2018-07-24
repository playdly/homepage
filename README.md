# Playdly Homepage #

### Goals: 

This is a basic webpage for Playdly but the main goal is stablish from the begining best practices and tools for the comnunity, learn how to implement it from the 

- Create step a step an React optimize static web page
- Understand and implement Webpack setup and optimization tools.
    - Setup and understand Optimization Chunks from webpack
    - Setup  and understand Async behaviors for code spliting
    - Setup a and understand Tree Shaking mechanisim
    - Setup CSS optimization and CSS Asyn Codding
    - Setup and understand Cache system from Webpack

- Understand and setup React
    - implementing first Component-Presentational pattern, 
    - then React Routers, 
    - then Isomorphic application.

- Setup all the tools babel, lint, git, etc

- Setup  and understand  a continues integrration and deployment script to AWS static page base in a S3, cloudfront consideration
    - Considering ElaticBean to deplioy without bringing the site down
    - Considering versioning 
    - Considering Caching 
    
- Setup React and Javascript declarative Testing

- Keep code base with the Javascript Standards, Airbnb or Vanilla 

- Define Code Workflow and tools in Github 
    - Code Reviews
    - Autodeployment for a tag relaease, webhooks
    - Restriction committing base in lint and formatiing, etc
- Greather Order and Module Javascript 
    - Setup library and modules

- Consider in the future:
    - Transform the app in a PWA
    - Integration wiht services, using GrapQL, Severless 

- TODO:
    - Define CSS and presentation tools and technologies to use.

### Prerequisites: 

- NodeJS currently developing in v8.11.3
-  Yarn currently developing in v1.7.0 or npm currently v6.1.0

### Project Setup

#### Step 1: Clone repository

### Step 2 setup the project

`yarn install`

### Step 3 start the application

`npm start`


### Scripts

#### Production build

`npm build`

#### Publish to Production

Configure s3 and s3cmd on your machine and ask for credentials an access to the server

then run the command 

`s3cmd sync dist/ s3://playdly.io`

`s3cmd --recursive modify --add-header="Cache-Control:public ,max-age= 31536000" s3://playdly.io/`

## NOTE:

This is not about practicality, if the techonogly is right for the project, if it is overengineer or even make sense, it is about playing with technology and understaning the impact of each piece.