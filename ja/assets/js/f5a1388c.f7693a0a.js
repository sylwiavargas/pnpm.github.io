"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5013],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||p;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(2962),l=n(2742),p=(n(9496),n(9613)),a=["components"],i={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-6.x/cli/run",title:"pnpm run",description:"\u30a8\u30a4\u30ea\u30a2\u30b9: run-script",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/ja/6.x/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-6.x/docs",previous:{title:"pnpm why",permalink:"/ja/6.x/cli/why"},next:{title:"pnpm test",permalink:"/ja/6.x/cli/test"}},u={},c=[{value:"\u4f8b",id:"\u4f8b",level:2},{value:"Details",id:"details",level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",level:2},{value:"Options",id:"options",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u30a8\u30a4\u30ea\u30a2\u30b9: ",(0,p.kt)("inlineCode",{parentName:"p"},"run-script")),(0,p.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u6b21\u306e\u3088\u3046\u306b ",(0,p.kt)("inlineCode",{parentName:"p"},"watch")," \u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u3092\u4f7f\u3063\u3066\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059! \u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3088\u306d\uff1f \u30ad\u30fc\u3092\u306a\u308b\u3079\u304f\u6253\u3061\u305f\u304f\u306a\u3044\u4eba\u306e\u305f\u3081\u306b\u3001\u5168\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f pnpm \u30b3\u30de\u30f3\u30c9\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3068\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \u306f\u305f\u3060\u306e ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u306e\u7701\u7565\u3067\u3059(\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u540d\u524d\u304c pnpm \u30b3\u30de\u30f3\u30c9\u3068\u88ab\u3063\u3066\u3044\u306a\u3044\u9650\u308a)\u3002"),(0,p.kt)("h2",{id:"details"},"Details"),(0,p.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,p.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,p.kt)("p",null,"And even though ",(0,p.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,p.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5834\u5408\u3001v3.5\u4ee5\u964d\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," \u3082 ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH")," \u306b\u8ffd\u52a0\u3055\u308c\u308b\u305f\u3081\u3001\u30c4\u30fc\u30eb\u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30eb\u30fc\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u4efb\u610f\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e ",(0,p.kt)("inlineCode",{parentName:"p"},"scripts")," \u304b\u3089\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,p.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,p.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,p.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,p.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,p.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,p.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"script-shell"},"script-shell"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.10.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"null")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"path"))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run")," \u30b3\u30de\u30f3\u30c9\u3067\u5b9f\u884c\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30b7\u30a7\u30eb\u3067\u3059\u3002"),(0,p.kt)("p",null,"\u4f8b\u3048\u3070\u3001Windows\u3067Git Bash\u3092\u5f37\u5236\u7684\u306b\u4f7f\u7528\u3059\u308b\u5834\u5408:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,p.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.8.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001pnpm \u306f\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u306b JavaScript \u306e ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell"),"\u306e\u5b9f\u88c5\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u51e6\u7406\u3092\u7c21\u5358\u306b\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u6b21\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306fPOSIX\u306b\u6e96\u62e0\u3057\u3066\u3044\u306a\u3044\u30b7\u30b9\u30c6\u30e0\u3067\u5931\u6557\u3057\u307e\u3059:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,p.kt)("p",null,"\u3057\u304b\u3057\u3001 ",(0,p.kt)("inlineCode",{parentName:"p"},"shell-emulator")," \u306e\u8a2d\u5b9a\u3092 ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," \u306b\u3059\u308c\u3070\u3001\u3059\u3079\u3066\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,'\u3053\u308c\u306f\u3001\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u306e "scripts" \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304b\u3089\u4efb\u610f\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3082\u306e\u3067\u3059\u3002 \u305d\u306e\u30b3\u30de\u30f3\u30c9\u304c\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30b9\u30ad\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002 \u3069\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3082\u305d\u306e\u30b3\u30de\u30f3\u30c9\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f\u5931\u6557\u3057\u307e\u3059\u3002'),(0,p.kt)("h3",{id:"--if-present"},"--if-present"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.5.0"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"if-present")," \u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u672a\u5b9a\u7fa9\u306e\u3068\u304d\u306b0\u4ee5\u5916\u306e\u7d42\u4e86\u30b3\u30fc\u30c9\u3067\u7d42\u4e86\u3059\u308b\u306e\u3092\u907f\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u672a\u5b9a\u7fa9\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u3001\u5b9f\u884c\u306e\u904e\u7a0b\u3092\u65ad\u3061\u5207\u308b\u3053\u3068\u306a\u304f\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"--parallel"},"--parallel"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.1.0"),(0,p.kt)("p",null,"\u4e26\u884c\u6027\u3068\u30c8\u30dd\u30ed\u30b8\u30ab\u30eb\u30bd\u30fc\u30c8\u306e\u7d50\u679c\u3092\u5b8c\u5168\u306b\u7121\u8996\u3057\u3066\u3001\u30de\u30c3\u30c1\u3059\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5bfe\u3057\u3066\u6307\u5b9a\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5373\u6642\u5b9f\u884c\u3057\u3001\u63a5\u982d\u8f9e\u4ed8\u304d\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u3067\u51fa\u529b\u3057\u307e\u3059\u3002 \u3053\u306e\u30d5\u30e9\u30b0\u306f\u3001\u591a\u304f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u9577\u6642\u9593\u5b9f\u884c\u3055\u308c\u308b\u51e6\u7406\u3001\u4f8b\u3048\u3070\u3001\u9577\u6642\u9593\u306e\u30d3\u30eb\u30c9\u51e6\u7406\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"--stream"},"--stream"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.1.0"),(0,p.kt)("p",null,"\u5b50\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u306e\u51fa\u529b\u3092\u3001\u5143\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u5148\u982d\u306b\u3001\u5373\u5ea7\u306b\u30b9\u30c8\u30ea\u30fc\u30e0\u51fa\u529b\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u7570\u306a\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u304b\u3089\u306e\u51fa\u529b\u3092\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.24.0"),(0,p.kt)("p",null,"\u4e26\u884c\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u5b50\u30d7\u30ed\u30bb\u30b9\u306e\u51fa\u529b\u3092\u96c6\u7d04\u3057\u3001\u5b50\u30d7\u30ed\u30bb\u30b9\u304c\u7d42\u4e86\u3057\u305f\u3068\u304d\u306e\u307f\u51fa\u529b\u3092\u8868\u793a\u3057\u307e\u3059\u3002 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," \u3092 ",(0,p.kt)("inlineCode",{parentName:"p"},"--parallel")," \u307e\u305f\u306f ",(0,p.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," \u3068\u5171\u306b\u5b9f\u884c\u3057\u305f\u5f8c\u306e\u5927\u304d\u306a\u30ed\u30b0\u3092\u8aad\u3080\u306e\u304c\u975e\u5e38\u306b\u7c21\u5358\u306b\u306a\u308a\u307e\u3059 (\u7279\u306b CI \u306e\u5834\u5408)\u3002 ",(0,p.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," \u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.1.0"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,p.kt)("strong",{parentName:"li"},"false")),(0,p.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,p.kt)("strong",{parentName:"li"},"Boolean"))),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001pnpm \u306f\u4efb\u610f\u306e pre/post \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u81ea\u52d5\u7684\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3064\u307e\u308a\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm foo")," \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo")," \u3092\u5b9f\u884c\u3059\u308b\u306e\u3068\u540c\u3058\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ja/6.x/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}d.isMDXComponent=!0}}]);