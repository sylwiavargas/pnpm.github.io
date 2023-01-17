"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6423],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=o(t),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,l=new Array(p);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var o=2;o<p;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=t(2962),i=t(2742),p=(t(9496),t(9613)),l=["components"],r={id:"continuous-integration",title:"Continuous Integration"},s=void 0,o={unversionedId:"continuous-integration",id:"continuous-integration",title:"Continuous Integration",description:"pnpm can easily be used in various continuous integration systems.",source:"@site/docs/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/next/continuous-integration",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/continuous-integration.md",tags:[],version:"current",lastUpdatedBy:"Jeroen",lastUpdatedAt:1673972100,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"continuous-integration",title:"Continuous Integration"},sidebar:"docs",previous:{title:"Using Changesets with pnpm",permalink:"/next/using-changesets"},next:{title:"Working with Git",permalink:"/next/git"}},c={},m=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"GitLab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2},{value:"Azure Pipelines",id:"azure-pipelines",level:2},{value:"CircleCI",id:"circleci",level:2},{value:"Jenkins",id:"jenkins",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm can easily be used in various continuous integration systems."),(0,p.kt)("h2",{id:"travis"},"Travis"),(0,p.kt)("p",null,"On ",(0,p.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", you can use pnpm for installing your dependencies by adding this\nto your ",(0,p.kt)("inlineCode",{parentName:"p"},".travis.yml")," file:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,p.kt)("h2",{id:"semaphore"},"Semaphore"),(0,p.kt)("p",null,"On ",(0,p.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", you can use pnpm for installing and caching your dependencies by\nadding this to your ",(0,p.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," file:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,p.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,p.kt)("p",null,"On ",(0,p.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", you can use pnpm for installing your dependencies by adding this\nto your ",(0,p.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm install\n")),(0,p.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,p.kt)("p",null,"On GitHub Actions, you can use pnpm for installing and caching your dependencies\nlike so (belongs in ",(0,p.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v3\n    - uses: pnpm/action-setup@v2\n      with:\n        version: 7\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v3\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"Caching packages dependencies with ",(0,p.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," requires you to install pnpm with version ",(0,p.kt)("strong",{parentName:"p"},"6.10+"),".")),(0,p.kt)("h2",{id:"gitlab-ci"},"GitLab CI"),(0,p.kt)("p",null,"On GitLab, you can use pnpm for installing and caching your dependencies\nlike so (belongs in ",(0,p.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key:\n      files:\n        - pnpm-lock.yaml\n    paths:\n      - .pnpm-store\n")),(0,p.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,p.kt)("p",null,"You can use pnpm for installing and caching your dependencies:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')),(0,p.kt)("h2",{id:"azure-pipelines"},"Azure Pipelines"),(0,p.kt)("p",null,"On Azure Pipelines, you can use pnpm for installing and caching your dependencies by adding this to your ",(0,p.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="azure-pipelines.yml"',title:'"azure-pipelines.yml"'},'variables:\n  pnpm_config_cache: $(Pipeline.Workspace)/.pnpm-store\n\nsteps:\n  - task: Cache@2\n    inputs:\n      key: \'pnpm | "$(Agent.OS)" | pnpm-lock.yaml\'\n      path: $(pnpm_config_cache)\n    displayName: Cache pnpm\n\n  - script: |\n      curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n      pnpm config set store-dir $(pnpm_config_cache)\n    displayName: "Setup pnpm"\n\n  - script: |\n      pnpm install\n      pnpm run build\n    displayName: "pnpm install and build"\n')),(0,p.kt)("h2",{id:"circleci"},"CircleCI"),(0,p.kt)("p",null,"On CircleCI, you can use pnpm for installing and caching your dependencies by adding this to your ",(0,p.kt)("inlineCode",{parentName:"p"},".circleci/config.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},'version: 2.1\n\njobs:\n  build: # this can be any name you choose\n    docker:\n      - image: node:18\n    resource_class: large\n    parallelism: 10\n\n    steps:\n      - checkout\n      - restore_cache:\n          name: Restore pnpm Package Cache\n          keys:\n            - pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n      - run:\n          name: Install pnpm package manager\n          command: |\n            curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm@7\n      - run:\n          name: Install Dependencies\n          command: |\n            pnpm install\n      - save_cache:\n          name: Save pnpm Package Cache\n          key: pnpm-packages-{{ checksum "pnpm-lock.yaml" }}\n          paths:\n            - node_modules\n')),(0,p.kt)("h2",{id:"jenkins"},"Jenkins"),(0,p.kt)("p",null,"You can use pnpm for installing and caching your dependencies:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:'language-title="Jenkinsfile"'},"pipeline {\n    agent {\n        docker {\n            image 'node:lts-bullseye-slim' \n            args '-p 3000:3000' \n        }\n    }\n    stages {\n        stage('Build') { \n            steps {\n                sh 'corepack enable'\n                sh 'corepack prepare pnpm@latest --activate'\n                sh 'pnpm install'\n            }\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);