"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1045],{2190:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2021/12/29/yearly-update","metadata":{"permalink":"/zh/blog/2021/12/29/yearly-update","editUrl":"https://crowdin.com/project/pnpm/zh-CN","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md","title":"The year 2021 for pnpm","description":"It is the end of the year and it was a good year for pnpm, so let\'s see how it went.","date":"2021-12-29T00:00:00.000Z","formattedDate":"2021\u5e7412\u670829\u65e5","tags":[],"readingTime":2.52,"truncated":false,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"nextItem":{"title":"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879","permalink":"/zh/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"It is the end of the year and it was a good year for pnpm, so let\'s see how it went.\\n\\n## \u4f7f\u7528\u65b9\u6cd5\\n\\n### Download Stats\\n\\nMy goal this year was to beat Bower by the number of downloads. We were able to achieve this goal [in November](https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29):\\n\\n![](/img/blog/pnpm-vs-bower-stats.png)\\n\\npnpm was downloaded about [3 times more](https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29) in 2021 than in 2020:\\n\\n![](/img/blog/download-stats-2021.png)\\n\\n:::note\\n\\nThese stats don\'t even measure all the different ways that pnpm may be installed! They only measure the downloads of the [pnpm npm package](https://www.npmjs.com/package/pnpm). This year we also added compiled binary versions of pnpm, which are shipped differently.\\n\\n:::\\n\\n### Docs visits\\n\\nWe collect some unpersonalized stats from our docs using Google Analytics. In 2021, sometimes we had more than 2,000 unique visitors a week.\\n\\n![](/img/blog/ga-unique-visits-2021.png)\\n\\nMost of our users are from the United States and China.\\n\\n![](/img/blog/countries-2021.png)\\n\\n### GitHub stars\\n\\nOur [main GitHub repository](https://github.com/pnpm/pnpm) received +5,000 stars this year.\\n\\n![](/img/blog/stars-2021.png)\\n\\n### New users\\n\\nOur biggest new user this year is [Bytedance](https://github.com/pnpm/pnpm.github.io/pull/89) (the company behind TikTok).\\n\\nAlso, many great open-source projects started to use pnpm. Some switched to pnpm because of its great support of monorepos:\\n\\n* [Vue](https://github.com/vuejs/vue-next)\\n* [Vite](https://github.com/vitejs/vite)\\n* and [others](https://github.com/vitejs/vite).\\n\\nSome switched because they like how efficient, fast, and beautiful pnpm is:\\n\\n* [Autoprefixer](https://twitter.com/Autoprefixer/status/1476226146488692736)\\n* [PostCSS](https://twitter.com/PostCSS/status/1470438664006258701)\\n* [Browserslist](https://twitter.com/Browserslist/status/1468264308308156419)\\n\\n## Feature Highlights\\n\\n### New lockfile format (since [v6.0.0](https://github.com/pnpm/pnpm/releases/tag/v6.0.0))\\n\\nOne of the first and most important changes this year was the new `pnpm-lock.yaml` format. This was a breaking change, so we had to release v6. But it was a success. The old lockfile was causing Git conflicts frequently. Since the new format was introduced, we did not receive any complaints about Git conflicts.\\n\\n### Managing Node.js versions (since [v6.12.0](https://github.com/pnpm/pnpm/releases/tag/v6.12.0))\\n\\nWe shipped a new command (`pnpm env`) that allows to manage Node.js versions. So you may use pnpm instead of Node.js version managers like nvm or Volta.\\n\\nAlso, pnpm is shipped as a standalone executable, so you can run it even with no Node.js preinstalled on the system.\\n\\n### Injecting local dependencies (since [v6.20.0](https://github.com/pnpm/pnpm/releases/tag/v6.20.0))\\n\\nYou may \\"inject\\" a local dependency. By default, local dependencies are symlinked to `node_modules` but with this new feature you may instruct pnpm to hard link the files of the package instead.\\n\\n### Improved reporting of peer dependency issues (since [v6.24.0](https://github.com/pnpm/pnpm/releases/tag/v6.24.0))\\n\\nPeer dependency issues used to be printed as plain text and it was hard to understand them. They are now all grouped and printed in a nice hierarchy structure.\\n\\n## The Competition\\n\\n### Yarn\\n\\nYarn added a pnpm linker in [v3.1](https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-). So Yarn can create a similar node-modules directory structure to the one that pnpm creates.\\n\\nAlso, the Yarn team plans to implement a content-addressable storage to be more disk space efficient.\\n\\n### npm\\n\\nThe npm team decided to also adopt the symlinked node-modules directory structure that pnpm uses (related [RFC](https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md)).\\n\\n### Others\\n\\n[Bun](https://twitter.com/jarredsumner/status/1473416431291174912/photo/1) written in Zig and [Volt](https://github.com/voltpkg/volt) written in Rust both claim to be faster than npm/Yarn/pnpm. I did not benchmark these new package managers yet.\\n\\n## Future Plans\\n\\nFaster, better, best."},{"id":"/2020/10/17/node-modules-configuration-options-with-pnpm","metadata":{"permalink":"/zh/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/zh-CN","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879","description":"\u521b\u5efanode_modules\u76ee\u5f55\u7ed3\u6784\u6709\u591a\u79cd\u65b9\u5f0f\u3002 \u4f60\u4e00\u5b9a\u60f3\u8981\u521b\u5efa\u6700\u4e25\u683c\u7684\u7ed3\u6784\uff0c\u5f53\u7136\u5982\u679c\u4f60\u5f53\u524d\u7684\u9879\u76ee\u5c1a\u65e0\u6cd5\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e0d\u4e25\u683c\u7684\u3002","date":"2020-10-17T00:00:00.000Z","formattedDate":"2020\u5e7410\u670817\u65e5","tags":[],"readingTime":2.755,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"The year 2021 for pnpm","permalink":"/zh/blog/2021/12/29/yearly-update"},"nextItem":{"title":"\u5e73\u94fa\u7684\u7ed3\u6784\u4e0d\u662f node_modules \u7684\u552f\u4e00\u5b9e\u73b0\u65b9\u5f0f","permalink":"/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"\u521b\u5efanode_modules\u76ee\u5f55\u7ed3\u6784\u6709\u591a\u79cd\u65b9\u5f0f\u3002 \u4f60\u4e00\u5b9a\u60f3\u8981\u521b\u5efa\u6700\u4e25\u683c\u7684\u7ed3\u6784\uff0c\u5f53\u7136\u5982\u679c\u4f60\u5f53\u524d\u7684\u9879\u76ee\u5c1a\u65e0\u6cd5\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e0d\u4e25\u683c\u7684\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u9ed8\u8ba4\u914d\u7f6e\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cpnpm v5\u5c06\u521b\u5efa\u4e00\u4e2a\u201c\u534a\u4e25\u683c\u201d\u7684node_modules\u3002 \u201c\u534a\u4e25\u683c\u201d\u610f\u5473\u7740\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u53ea\u80fd\u5bfc\u5165 `package.json` \u4e2d\u5217\u51fa\u7684\u4f9d\u8d56\u9879(\u4f46\u4e5f\u6709\u4f8b\u5916)\u3002 \u7136\u800c\uff0c\u4f60\u6240\u4f9d\u8d56\u7684\u90a3\u4e9b\u5305\u5c06\u80fd\u8bbf\u95ee\u4efb\u4f55\u5176\u4ed6\u7684\u5305\u3002\\n\\n\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a\\n\\n```ini\\n; \u63d0\u5347\u6240\u6709\u5305\u5230 node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; \u63d0\u5347\u6240\u6709\u540d\u79f0\u5305\u542btypes\u7684\u5305\u81f3\u6839\uff0c\u4ee5\u4fbfTypescript\u80fd\u627e\u5230\\npublic-hoist-pattern[]=*types*\\n\\n; \u63d0\u5347\u6240\u6709ESLint\u76f8\u5173\u7684\u5305\u81f3\u6839\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. \u6700\u4e25\u683c\u7684\u914d\u7f6e\\n\\n\u81eav5.9\u8d77\uff0cpnpm\u652f\u6301 [Yarn\u7684Plug\'n\'Play](https://yarnpkg.com/features/pnp)\u3002 \u4f7f\u7528PnP\uff0c\u60a8\u7684\u5e94\u7528\u4ee5\u53ca\u4f60\u6240\u4f9d\u8d56\u7684\u5305\u90fd\u53ea\u80fd\u8bbf\u95ee\u4ed6\u4eec\u58f0\u660e\u7684\u4f9d\u8d56\u5173\u7cfb\u3002 \u8fd9\u6bd4\u8bbe\u7f6e `hoist = false` \u66f4\u4e3a\u4e25\u683c\uff0c\u56e0\u4e3a\u5728monorepo\u4e2d\uff0c\u60a8\u7684\u5e94\u7528\u751a\u81f3\u8fde\u6839\u9879\u76ee\u7684\u4f9d\u8d56\u9879\u4e5f\u65e0\u6cd5\u8bbf\u95ee\u3002\\n\\n\u8981\u4f7f\u7528 Plug\'n\'Play\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u8bbe\u7f6e:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## \u4e25\u683c\u7684\u6a21\u5757\u76ee\u5f55\\n\\n\u5982\u679c\u60a8\u5c1a\u672a\u51c6\u5907\u597d\u4f7f\u7528PnP\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06\u63d0\u5347\u914d\u7f6e\u8bbe\u7f6e\u4e3afalse\u6765\u4ec5\u5141\u8bb8\u7a0b\u5e8f\u5305\u8bbf\u95ee\u5176\u81ea\u8eab\u7684\u4f9d\u8d56\u9879\uff0c\u786e\u4fdd\u5176\u201c\u4e25\u683c\u201d\u6027\uff1a\\n\\n```ini\\nhoist=false\\n```\\n\\n\u4f46\u662f\uff0c\u5982\u679c\u60a8\u7684\u67d0\u4e9b\u4f9d\u8d56\u9879\u9700\u8981\u8bbf\u95ee\u5b83\u4eec\u5728\u4f9d\u8d56\u9879\u4e2d\u6ca1\u6709\u7684\u7a0b\u5e8f\u5305\uff0c\u5219\u6709\u4e24\u79cd\u9009\u62e9\uff1a\\n\\n1. \u521b\u5efa `pnpmfile.js` \u5e76\u4f7f\u7528\u4e00\u4e2a [hook](/pnpmfile) \u5c06\u7f3a\u5c11\u7684\u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u5305\u7684\u6e05\u5355\u4e2d\u3002\\n\\n2. \u6dfb\u52a0\u5230 `hoist-pattern` \u4e2d\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u672a\u627e\u5230\u7684\u6a21\u5757\u662f `babel-core`\uff0c\u5219\u5c06\u4ee5\u4e0b\u8bbe\u7f6e\u6dfb\u52a0\u5230 `.npmrc`\uff1a\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## \u6700\u574f\u7684\u60c5\u51b5 -- \u63d0\u5347\u81f3\u6839\\n\\n\u5373\u4f7f\u4f7f\u7528pnpm\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u67d0\u4e9b\u5de5\u5177\u4e5f\u53ef\u80fd\u65e0\u6cd5\u5de5\u4f5c\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4e0b\u6240\u6709\u5185\u5bb9\u90fd\u60ac\u6302\u5728\u865a\u62df\u5b58\u50a8\u7684\u6839\u76ee\u5f55\u4e2d\uff0c\u800c\u67d0\u4e9b\u8f6f\u4ef6\u5305\u5219\u60ac\u6302\u5728\u6839\u76ee\u5f55\u4e2d\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u5c06\u6240\u6709\u5185\u5bb9\u6216\u90e8\u5206\u4f9d\u8d56\u5173\u7cfb\u63d0\u5347\u5230modules\u76ee\u5f55\u7684\u6839\u76ee\u5f55\u3002\\n\\n\u8981\u5c06\u6240\u6709\u5185\u5bb9\u63d0\u5347\u5230node_modules\u7684\u6839\u76ee\u5f55\uff1a\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\n\u6309\u5339\u914d\u89c4\u5219\u63d0\u5347:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"/2020/05/27/flat-node-modules-is-not-the-only-way","metadata":{"permalink":"/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/zh-CN","source":"@site/i18n/zh/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"\u5e73\u94fa\u7684\u7ed3\u6784\u4e0d\u662f node_modules \u7684\u552f\u4e00\u5b9e\u73b0\u65b9\u5f0f","description":"Pnpm \u7684\u65b0\u7528\u6237\u4eec\u7ecf\u5e38\u4f1a\u95ee\u6211\u5173\u4e8e pnpm \u521b\u5efa\u7684\u5947\u602a\u7684 node_modules \u7ed3\u6784\u3002 \u4e3a\u4ec0\u4e48\u4e0d\u662f\u5e73\u94fa\u7684\uff1f \u6b21\u7ea7\u4f9d\u8d56\u53bb\u54ea\u4e86\uff1f","date":"2020-05-27T00:00:00.000Z","formattedDate":"2020\u5e745\u670827\u65e5","tags":[],"readingTime":4.06,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],"prevItem":{"title":"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879","permalink":"/zh/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"Pnpm \u7684\u65b0\u7528\u6237\u4eec\u7ecf\u5e38\u4f1a\u95ee\u6211\u5173\u4e8e pnpm \u521b\u5efa\u7684\u5947\u602a\u7684 `node_modules` \u7ed3\u6784\u3002 \u4e3a\u4ec0\u4e48\u4e0d\u662f\u5e73\u94fa\u7684\uff1f \u6b21\u7ea7\u4f9d\u8d56\u53bb\u54ea\u4e86\uff1f\\n\\n\x3c!--truncate--\x3e\\n\\n> \u6211\u5c06\u9ed8\u8ba4\u8fd9\u7bc7\u6587\u7ae0\u7684\u8bfb\u8005\u5df2\u7ecf\u719f\u6089\u4e86 npm \u4e0e yarn \u521b\u5efa\u7684\u5e73\u94fa\u7684 `node_modules`\u3002 \u5982\u679c\u4f60\u4e0d\u660e\u767d\u4e3a\u4ec0\u4e48 npm3 \u9700\u8981\u5f00\u59cb\u5728 v3 \u4e2d\u4f7f\u7528\u5e73\u94fa\u7684 `node_modules`\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u4e00\u4e9b\u80cc\u666f\u77e5\u8bc6 [Why should we use pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html)\u3002\\n\\n\u90a3\u4e48\u4e3a\u4ec0\u4e48 pnpm \u7684 `node_modules` \u4f1a\u5982\u6b64\u4e0d\u540c\u5bfb\u5e38\u5462\uff1f \u8ba9\u6211\u4eec\u521b\u5efa\u4e24\u4e2a\u76ee\u5f55\uff0c\u5e76\u5728\u5176\u4e2d\u4e00\u4e2a\u6267\u884c `npm add express`\uff0c \u7136\u540e\u5728\u53e6\u4e00\u4e2a\u4e2d\u6267\u884c `pnpm add express`\u3002 \u4ee5\u4e0b\u662f\u4f60\u5728\u7b2c\u4e00\u4e2a\u76ee\u5f55\u4e2d\u7684 `node_modules` \u7684\u9876\u7ea7\u9879\u76ee\uff1a\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\n\u4f60\u53ef\u4ee5\u5728[\u8fd9\u91cc](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules)\u770b\u5230\u6574\u4e2a\u76ee\u5f55\u3002\\n\\n\u7136\u540e\u8fd9\u4e00\u4e2a`node_modules` \u662f\u4f60\u901a\u8fc7 pnpm \u521b\u5efa\u7684\u5f97\u5230\u7684\uff1a\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\n\u4f60\u53ef\u4ee5\u5728[\u8fd9\u91cc](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules)\u67e5\u770b\u3002\\n\\n\u90a3\u4e48\u6240\u6709\u7684\uff08\u6b21\u7ea7\uff09\u4f9d\u8d56\u53bb\u54ea\u4e86\u5462\uff1f `node_modules` \u4e2d\u53ea\u6709\u4e00\u4e2a\u53eb `.pnpm` \u7684\u6587\u4ef6\u5939\u4ee5\u53ca\u4e00\u4e2a\u53eb\u505a `express` \u7684\u7b26\u53f7\u94fe\u63a5\u3002 \u4e0d\u9519\uff0c\u6211\u4eec\u53ea\u5b89\u88c5\u4e86 `express`\uff0c\u6240\u4ee5\u5b83\u662f\u552f\u4e00\u4e00\u4e2a\u4f60\u7684\u5e94\u7528\u5fc5\u987b\u62e5\u6709\u8bbf\u95ee\u6743\u9650\u7684\u5305\u3002\\n\\n> \u8981\u4e86\u89e3\u5173\u4e8e\u4e3a\u4ec0\u4e48 pnpm \uff08\u5bf9\u4f9d\u8d56\u5411\u8bbf\u95ee\u63a7\u5236\uff09\u7684\u4e25\u683c\u628a\u5173\u662f\u4ef6\u597d\u4e8b\uff0c\u8bf7\u9605\u8bfb[\u6b64\u6587](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\n\u8ba9\u6211\u4eec\u770b\u770b\u5728 `express` \u4e2d\u90fd\u6709\u4e9b\u4ec0\u4e48\uff1a\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n    .modules.yaml\\n```\\n\\n`express` \u6ca1\u6709 `node_modules`? `express` \u7684\u6240\u6709\u4f9d\u8d56\u90fd\u53bb\u54ea\u91cc\u4e86\uff1f\\n\\n\u8bc0\u7a8d\u662f `express` \u53ea\u662f\u4e00\u4e2a\u7b26\u53f7\u94fe\u63a5\u3002 \u5f53 Node.js \u89e3\u6790\u4f9d\u8d56\u7684\u65f6\u5019\uff0c\u5b83\u4f7f\u7528\u8fd9\u4e9b\u4f9d\u8d56\u7684\u771f\u5b9e\u4f4d\u7f6e\uff0c\u6240\u4ee5\u5b83\u4e0d\u4fdd\u7559\u7b26\u53f7\u94fe\u63a5\u3002 \u4f46\u662f\u4f60\u53ef\u80fd\u5c31\u4f1a\u95ee\u4e86\uff0c`express` \u7684\u771f\u5b9e\u4f4d\u7f6e\u5728\u54ea\u5462\uff1f\\n\\n\u5728\u8fd9\u91cc\uff1a[node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express)\u3002\\n\\nOK\uff0c\u6240\u4ee5\u6211\u4eec\u73b0\u5728\u77e5\u9053\u4e86 `.pnpm/` \u6587\u4ef6\u5939\u7684\u7528\u9014\u3002 `.pnpm/` \u4ee5\u5e73\u94fa\u7684\u5f62\u5f0f\u50a8\u5b58\u7740\u6240\u6709\u7684\u5305\uff0c\u6240\u4ee5\u6bcf\u4e2a\u5305\u90fd\u53ef\u4ee5\u5728\u8fd9\u79cd\u547d\u540d\u6a21\u5f0f\u7684\u6587\u4ef6\u5939\u4e2d\u88ab\u627e\u5230\uff1a\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\n\u6211\u4eec\u79f0\u4e4b\u4e3a\u865a\u62df\u5b58\u50a8\u76ee\u5f55\u3002\\n\\n\u8fd9\u4e2a\u5e73\u94fa\u7684\u7ed3\u6784\u907f\u514d\u4e86 npm v2 \u521b\u5efa\u7684\u5d4c\u5957 `node_modules` \u5f15\u8d77\u7684\u957f\u8def\u5f84\u95ee\u9898\uff0c\u4f46\u4e0e npm v3,4,5,6 \u6216 yarn v1 \u521b\u5efa\u7684\u5e73\u94fa\u7684 `node_modules` \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u4fdd\u7559\u4e86\u5305\u4e4b\u95f4\u7684\u76f8\u4e92\u9694\u79bb\u3002\\n\\n\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u770b `express` \u7684\u771f\u5b9e\u4f4d\u7f6e\uff1a\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\n\u8fd9\u662f\u4e2a\u9a97\u5c40\u5417\uff1f \u8fd8\u662f\u6ca1\u6709 `node_modules`\uff01 pnpm \u7684 `node_modules` \u7ed3\u6784\u7684\u7b2c\u4e8c\u4e2a\u8bc0\u7a8d\u662f\u5305\u7684\u4f9d\u8d56\u9879\u4e0e\u4f9d\u8d56\u5305\u7684\u5b9e\u9645\u4f4d\u7f6e\u4f4d\u4e8e\u540c\u4e00\u76ee\u5f55\u7ea7\u522b\u3002 \u6240\u4ee5 `express` \u7684\u4f9d\u8d56\u4e0d\u5728 `.pnpm/express@4.17.1/node_modules/express/node_modules/` \u800c\u662f\u5728 [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules)\uff1a\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\n`express` \u6240\u6709\u7684\u4f9d\u8d56\u90fd\u8f6f\u94fe\u81f3\u4e86 `node_modules/.pnpm/` \u4e2d\u7684\u5bf9\u5e94\u76ee\u5f55\u3002 \u628a `express` \u7684\u4f9d\u8d56\u653e\u7f6e\u5728\u540c\u4e00\u7ea7\u522b\u907f\u514d\u4e86\u5faa\u73af\u7684\u8f6f\u94fe\u3002\\n\\n\u6b63\u5982\u4f60\u6240\u770b\u5230\u7684\uff0c\u5373\u4f7f pnpm \u7684 `node_modules` \u7ed3\u6784\u4e00\u5f00\u59cb\u770b\u8d77\u6765\u5f88\u5947\u602a\uff1a\\n\\n1. \u5b83\u5b8c\u5168\u9002\u914d\u4e86 Node.js\u3002\\n2. \u5305\u4e0e\u5176\u4f9d\u8d56\u88ab\u5b8c\u7f8e\u5730\u7ec4\u7ec7\u5728\u4e00\u8d77\u3002\\n\\n\u6709 peer \u4f9d\u8d56\u7684\u5305\u7684\u7ed3\u6784[\u66f4\u52a0\u590d\u6742](/how-peers-are-resolved)\u4e00\u4e9b\uff0c\u4f46\u601d\u8def\u662f\u4e00\u6837\u7684\uff1a\u4f7f\u7528\u8f6f\u94fe\u4e0e\u5e73\u94fa\u76ee\u5f55\u6765\u6784\u5efa\u4e00\u4e2a\u5d4c\u5957\u7ed3\u6784\u3002"}]}')}}]);