"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9324],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7376:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>l,assets:()=>c,toc:()=>d,default:()=>u});var a=n(9518),r=n(7344),s=(n(9496),n(9613)),i=["components"],o={title:"The year 2021 for pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},p=void 0,l={permalink:"/blog/2021/12/29/yearly-update",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/blog/2021-12-29-yearly-update.md",source:"@site/blog/2021-12-29-yearly-update.md",title:"The year 2021 for pnpm",description:"It is the end of the year and it was a good year for pnpm, so let's see how it went.",date:"2021-12-29T00:00:00.000Z",formattedDate:"December 29, 2021",tags:[],readingTime:2.51,truncated:!1,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],nextItem:{title:"Node-Modules configuration options with pnpm",permalink:"/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},c={authorsImageUrls:[void 0]},d=[{value:"Usage",id:"usage",children:[{value:"Download Stats",id:"download-stats",children:[],level:3},{value:"Docs visits",id:"docs-visits",children:[],level:3},{value:"GitHub stars",id:"github-stars",children:[],level:3},{value:"New users",id:"new-users",children:[],level:3}],level:2},{value:"Feature Highlights",id:"feature-highlights",children:[{value:"New lockfile format (since v6.0.0)",id:"new-lockfile-format-since-v600",children:[],level:3},{value:"Managing Node.js versions (since v6.12.0)",id:"managing-nodejs-versions-since-v6120",children:[],level:3},{value:"Injecting local dependencies (since v6.20.0)",id:"injecting-local-dependencies-since-v6200",children:[],level:3},{value:"Improved reporting of peer dependency issues (since v6.24.0)",id:"improved-reporting-of-peer-dependency-issues-since-v6240",children:[],level:3}],level:2},{value:"The Competition",id:"the-competition",children:[{value:"Yarn",id:"yarn",children:[],level:3},{value:"npm",id:"npm",children:[],level:3},{value:"Others",id:"others",children:[],level:3}],level:2},{value:"Future Plans",id:"future-plans",children:[],level:2}],m={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"It is the end of the year and it was a good year for pnpm, so let's see how it went."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"download-stats"},"Download Stats"),(0,s.kt)("p",null,"My goal this year was to beat Bower by the number of downloads. We were able to achieve this goal ",(0,s.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29"},"in November"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(5328).Z})),(0,s.kt)("p",null,"pnpm was downloaded about ",(0,s.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29"},"3 times more")," in 2021 than in 2020:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(4579).Z})),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"These stats don't even measure all the different ways that pnpm may be installed!\nThey only measure the downloads of the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pnpm"},"pnpm npm package"),". This year we also added compiled binary versions of pnpm, which are shipped differently."))),(0,s.kt)("h3",{id:"docs-visits"},"Docs visits"),(0,s.kt)("p",null,"We collect some unpersonalized stats from our docs using Google Analytics.\nIn 2021, sometimes we had more than 2,000 unique visitors a week."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(9047).Z})),(0,s.kt)("p",null,"Most of our users are from the United States and China."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(3398).Z})),(0,s.kt)("h3",{id:"github-stars"},"GitHub stars"),(0,s.kt)("p",null,"Our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm"},"main GitHub repository")," received +5,000 stars this year."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1629).Z})),(0,s.kt)("h3",{id:"new-users"},"New users"),(0,s.kt)("p",null,"Our biggest new user this year is ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/pull/89"},"Bytedance")," (the company behind TikTok)."),(0,s.kt)("p",null,"Also, many great open-source projects started to use pnpm. Some switched to pnpm because of its great support of monorepos:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")),(0,s.kt)("li",{parentName:"ul"},"and ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"others"),".")),(0,s.kt)("p",null,"Some switched because they like how efficient, fast, and beautiful pnpm is:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://twitter.com/Autoprefixer/status/1476226146488692736"},"Autoprefixer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://twitter.com/PostCSS/status/1470438664006258701"},"PostCSS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://twitter.com/Browserslist/status/1468264308308156419"},"Browserslist"))),(0,s.kt)("h2",{id:"feature-highlights"},"Feature Highlights"),(0,s.kt)("h3",{id:"new-lockfile-format-since-v600"},"New lockfile format (since ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.0.0"},"v6.0.0"),")"),(0,s.kt)("p",null,"One of the first and most important changes this year was the new ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," format. This was a breaking change, so we had to release v6. But it was a success. The old lockfile was causing Git conflicts frequently. Since the new format was introduced, we did not receive any complaints about Git conflicts."),(0,s.kt)("h3",{id:"managing-nodejs-versions-since-v6120"},"Managing Node.js versions (since ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.12.0"},"v6.12.0"),")"),(0,s.kt)("p",null,"We shipped a new command (",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm env"),") that allows to manage Node.js versions. So you may use pnpm instead of Node.js version managers like nvm or Volta."),(0,s.kt)("p",null,"Also, pnpm is shipped as a standalone executable, so you can run it even with no Node.js preinstalled on the system."),(0,s.kt)("h3",{id:"injecting-local-dependencies-since-v6200"},"Injecting local dependencies (since ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.20.0"},"v6.20.0"),")"),(0,s.kt)("p",null,'You may "inject" a local dependency. By default, local dependencies are symlinked to ',(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," but with this new feature you may instruct pnpm to hard link the files of the package instead."),(0,s.kt)("h3",{id:"improved-reporting-of-peer-dependency-issues-since-v6240"},"Improved reporting of peer dependency issues (since ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.24.0"},"v6.24.0"),")"),(0,s.kt)("p",null,"Peer dependency issues used to be printed as plain text and it was hard to understand them. They are now all grouped and printed in a nice hierarchy structure."),(0,s.kt)("h2",{id:"the-competition"},"The Competition"),(0,s.kt)("h3",{id:"yarn"},"Yarn"),(0,s.kt)("p",null,"Yarn added a pnpm linker in ",(0,s.kt)("a",{parentName:"p",href:"https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-"},"v3.1"),". So Yarn can create a similar node-modules directory structure to the one that pnpm creates."),(0,s.kt)("p",null,"Also, the Yarn team plans to implement a content-addressable storage to be more disk space efficient."),(0,s.kt)("h3",{id:"npm"},"npm"),(0,s.kt)("p",null,"The npm team decided to also adopt the symlinked node-modules directory structure that pnpm uses (related ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md"},"RFC"),")."),(0,s.kt)("h3",{id:"others"},"Others"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/jarredsumner/status/1473416431291174912/photo/1"},"Bun")," written in Zig and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/voltpkg/volt"},"Volt")," written in Rust both claim to be faster than npm/Yarn/pnpm. I did not benchmark these new package managers yet."),(0,s.kt)("h2",{id:"future-plans"},"Future Plans"),(0,s.kt)("p",null,"Faster, better, best."))}u.isMDXComponent=!0},3398:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/countries-2021-8eb9625e1798649ee04451dfb10ac851.png"},4579:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download-stats-2021-1418562cb03abd558c4a6b4b17155227.png"},9047:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ga-unique-visits-2021-b8bc3649f680565127696c85bdd4b701.png"},5328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pnpm-vs-bower-stats-6ec69a7308f5fbc1433420b1b2f7457f.png"},1629:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stars-2021-0061c16f424e33ba0db224d82bcb53f3.png"}}]);