function N(e,t){let n;{var i=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=i}return n.stack=pe(n.stack,t),n}function pe(e,t){if(!e)return e;const n=ve(e);let i=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:i<t&&me(o)?(i++,!1):!0).join(`
`)}function me(e){return e.startsWith("    at ")}function ve(e){return e.split(/\r?\n/)}function j(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function T(e){return Array.from(new Set(e))}const y=j("assertPackageInstances.ts",{instances:[]}),te="Make sure your client-side code doesn't load",ne=`Server Routing and Client Routing both loaded. ${te} both at the same time.`,D=`vite-plugin-ssr loaded twice. ${te} vite-plugin-ssr twice (in order to reduce client size).`;function z(){{const e=T(y.instances);if(e.length>1){const t=`Multiple versions \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Make sure only one version is loaded.`;p(!1,t)}}y.checkSingleInstance&&y.instances.length>1&&p(!1,D)}function Ft(e){p(y.isClientRouting!==!0,ne),p(y.isClientRouting===void 0,D),y.isClientRouting=!1,e&&(y.checkSingleInstance=!0),z()}function Lt(e){p(y.isClientRouting!==!1,ne),p(y.isClientRouting===void 0,D),y.isClientRouting=!0,e&&(y.checkSingleInstance=!0),z()}function ye(e){y.instances.push(e),z()}const Ee="0.4.108",_={projectName:"vite-plugin-ssr",projectVersion:Ee,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr"};ye(_.projectVersion);const R=j("assert.ts",{alreadyLogged:new Set}),P=`[${_.npmPackageName}@${_.projectVersion}]`,be=`${P}[Bug]`,Re=`${P}[Wrong Usage]`,$e=`${P}[Warning]`,_e=`${P}[Info]`,V=2;function r(e,t){var n;if(e)return;const i=(()=>{if(!t)return null;const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${_.projectName} maintainers; you can ignore this): ${o}`})(),s=N([`${be} You stumbled upon a bug in ${_.projectName}'s source code.`,`Go to ${_.githubRepository}/issues/new and copy-paste this error (the error alone is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${_.projectName} more robust.`,i].filter(Boolean).join(" "),V);throw(n=R.onBeforeLog)===null||n===void 0||n.call(R),s}function p(e,t){var n;if(e)return;const i=t.startsWith("[")?"":" ",s=`${Re}${i}${t}`,o=N(s,V);throw(n=R.onBeforeLog)===null||n===void 0||n.call(R),o}function we(e){const t=e.startsWith("[")?"":" ";return N(`${P}${t}${e}`,V)}function B(e,t,{onlyOnce:n,showStackTrace:i}){var s;if(e)return;const o=`${$e} ${t}`;if(n){const{alreadyLogged:l}=R,a=n===!0?o:n;if(l.has(a))return;l.add(a)}(s=R.onBeforeLog)===null||s===void 0||s.call(R),console.warn(i?new Error(o):o)}function Tt(e,t,{onlyOnce:n}){var i;if(e)return;const s=`${_e} ${t}`;if(n){const{alreadyLogged:o}=R,l=s;if(o.has(l))return;o.add(l)}(i=R.onBeforeLog)===null||i===void 0||i.call(R),console.log(s)}function U(){return typeof window<"u"&&typeof window.scrollY=="number"}const F=j("utils/assertRouterType.ts",{});function kt(){ie(Pe()),F.isClientRouting=!0}function Pe(){return F.isClientRouting!==!1}function Wt(){ie(F.isClientRouting!==!0),F.isClientRouting=!1}function ie(e){p(U(),"`import { something } from 'vite-plugin-ssr/client/router'` is forbidden on the server-side"),B(e,"You shouldn't `import { something } from 'vite-plugin-ssr/client/router'` when using Server Routing. The 'vite-plugin-ssr/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` when using Server Routing as these will unnecessarily bloat your client-side bundle.",{showStackTrace:!1,onlyOnce:!0})}const Se=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],se=["vue","svelte","marko","md","mdx"],je=[...Se,...se];function re(e){const t=je.some(n=>e.endsWith("."+n));return r(!Ie(e)||t),t}function Ie(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Fe(e){return se.some(t=>e.endsWith("."+t))}function L(e,t,n){return typeof e=="string"?Y(e.split(""),t,n).join(""):Y(e,t,n)}function Y(e,t,n){const i=[];let s=t>=0?t:e.length+t;r(s>=0&&s<=e.length);let o=n>=0?n:e.length+n;for(r(o>=0&&o<=e.length);!(s===o||(s===e.length&&(s=0),s===o));){const l=e[s];r(l!==void 0),i.push(l),s++}return i}function Le(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function Te(e,t){r(Le(e),{url:e}),r(t.startsWith("/"),{url:e,baseServer:t});const[n,...i]=e.split("#");r(n!==void 0);const s=["",...i].join("#")||null;r(s===null||s.startsWith("#"));const o=s===null?"":C(s.slice(1)),[l,...a]=n.split("?");r(l!==void 0);const c=["",...a].join("?")||null;r(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const u={},g={};Array.from(new URLSearchParams(c||"")).forEach(([E,H])=>{u[E]=H,g[E]=[...g[E]||[],H]});const{origin:f,pathnameResolved:m}=We(l,t);r(f===null||f===C(f),{origin:f}),r(m.startsWith("/"),{url:e,pathnameResolved:m}),r(f===null||e.startsWith(f),{url:e,origin:f});const h=l.slice((f||"").length);{const E=`${f||""}${h}${c||""}${s||""}`;r(e===E,{url:e,urlRecreated:E})}let{pathname:v,hasBaseServer:S}=Ce(m,t);return v=ke(v),r(v.startsWith("/")),{origin:f,pathname:v,pathnameOriginal:h,hasBaseServer:S,search:u,searchAll:g,searchOriginal:c,hash:o,hashOriginal:s}}function C(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function ke(e){return e.split("/").map(t=>C(t).split("/").join("%2F")).join("/")}function We(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let i,s;try{const o=new URL(e);i=o.origin,s=o.pathname}catch{i=null;let l=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);l=l||"http://fake.example.org"+t,s=new URL(e,l).pathname}return r(s.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:s}),r(s===s.split("?")[0].split("#")[0]),{origin:i,pathnameResolved:s}}function Oe(e){r(e.startsWith("/")),r(!e.includes("?")),r(!e.includes("#"))}function Ce(e,t){Oe(e),r(xe(t));let n=e;if(r(n.startsWith("/")),r(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let i=t;return t.endsWith("/")&&n===L(t,0,-1)&&(i=L(t,0,-1),r(n===i)),n.startsWith(i)?(r(n.startsWith("/")||n.startsWith("http")),r(n.startsWith(i)),n=n.slice(i.length),n.startsWith("/")||(n="/"+n),r(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function xe(e){return e.startsWith("/")}function G(e,t){Object.assign(e,t)}function k(e){return e instanceof Function||typeof e=="function"}function b(e){return typeof e=="object"&&e!==null}function Ot(e){return(t,n)=>{const i=e(t),s=e(n);return i===s?0:i>s?-1:1}}function Ae(e){return(t,n)=>{const i=e(t),s=e(n);if(r([!0,!1,null].includes(i)),r([!0,!1,null].includes(s)),i===s)return 0;if(i===!0||s===!1)return-1;if(s===!0||i===!1)return 1;r(!1)}}function Ne(e){return Ae(t=>{const n=e(t);return n===null?null:!n})}function d(e,t,n="unknown"){if(!b(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const i=e[t];return n==="array"?Array.isArray(i):n==="object"?b(i):n==="string[]"?Array.isArray(i)&&i.every(s=>typeof s=="string"):n==="function"?k(i):Array.isArray(n)?typeof i=="string"&&n.includes(i):n==="null"?i===null:n==="undefined"?i===void 0:n==="true"?i===!0:n==="false"?i===!1:typeof i===n}function De(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const ze=e=>e!=null,Ve="\\";function oe(e){r(e&&!e.includes(Ve),`Wrongly formatted path: ${e}`)}const J=/[^a-zA-Z-_]/;function le(e){return Be(e)!==null}function Be(e){if(e===void 0||e.includes("\\")||e.startsWith("/"))return null;let t=null;if(e.startsWith("@")){if(!e.includes("/"))return null;const[a,...c]=e.split("/");t=a,e=c.join("/"),r(t&&t.startsWith("@"))}if(e==="")return null;const[n,...i]=e.split("/"),s=n,o=i.length===0?null:i.join("/");return r(s),r(o===null||!o.startsWith("/")),J.test(s)||t&&J.test(t.slice(1))?null:(r(!s.startsWith("/")),{npmPackageName:t?`${t}/${s}`:s,importPath:o})}function Ue(e,t){Ge(e,t,!0)}function Ge(e,t,n){{const i=Object.keys(e).filter(l=>l!=="default"),s=i.join(", "),o=n?"`export default`":`\`export default { ${s} }\``;p(i.length===0,`${t} should have a single default export: replace \`export { ${s} }\` with ${o}`)}p(d(e,"default"),`${t} should have a \`export default\``)}function Me(e){return Object.entries(e)}const He=["clientRouting"];function Ye(e){He.forEach(t=>{if(r(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;p(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),p(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const ae=["render","clientRouting","prerender","doNotPrerender"];function Je(e,t){p(!ae.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function Ct(e,t,n){const i=e.configSources[t];if(!i||M(e,t))return null;const{configValue:s,configSrc:o}=i;return p(typeof s===n,`${o} has an invalid type \`${typeof s}\`: is should be a ${n} instead`),s}function xt(e,t){const n=e.configSources[t];if(!n||M(e,t))return null;if(n.codeFilePath2!==null)return n.codeFilePath2;const{configValue:i,configSrc:s}=n;p(typeof i=="string",`${s} has an invalid type \`${typeof i}\`: it should be a \`string\` instead`),p(!1,`${s} has an invalid value \`${i}\`: it should be a file path instead`)}function qe(e,t){const n=e.configSources[t];return!n||M(e,t)?null:n.configSrc}function M(e,t){const n=e.configSources[t];if(!n)return!0;const{codeFilePath2:i,configValue:s}=n;return i?!1:s==null}function Ke(e,t){const n=t.find(i=>i.pageId2===e);return r(t.length>0),r(n),n}function Ze(e,t){const n={},i={},s={};if(e.forEach(a=>{Qe(a).forEach(({exportName:u,exportValue:g,isFromDefaultExport:f})=>{var m;r(u!=="default"),s[u]=(m=s[u])!==null&&m!==void 0?m:[],s[u].push({exportValue:g,exportSource:`${a.filePath} > ${f?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:a.filePath,_filePath:a.filePath,_fileType:a.fileType,_isFromDefaultExport:f})})}),t){const{configValues:a}=t;Me(a).forEach(([c,u])=>{var g,f,m;const h=qe(t,c);r(h),i[c]=(g=i[c])!==null&&g!==void 0?g:u,n[c]=(f=n[c])!==null&&f!==void 0?f:[],n[c].push({configValue:u,configOrigin:h});const v=c;s[v]=(m=s[v])!==null&&m!==void 0?m:[],s[v].push({exportValue:u,exportSource:h,filePath:h,_filePath:h,_fileType:null,_isFromDefaultExport:null})})}const o=Xe(),l={};return Object.entries(s).forEach(([a,c])=>{c.forEach(({exportValue:u,_fileType:g,_isFromDefaultExport:f})=>{var m;l[a]=(m=l[a])!==null&&m!==void 0?m:u,g===".page"&&!f&&(a in o||(o[a]=u))})}),r(!("default"in l)),r(!("default"in s)),{config:i,configList:n,exports:l,exportsAll:s,pageExports:o}}function Qe(e){const{filePath:t,fileExports:n}=e;r(n),r(re(t));const i=[];return Object.entries(n).sort(Ne(([s])=>s==="default")).forEach(([s,o])=>{let l=s==="default";if(l)if(Fe(t))s="Page";else{p(b(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([a,c])=>{Je(a,t),i.push({exportName:a,exportValue:c,isFromDefaultExport:l})});return}i.push({exportName:s,exportValue:o,isFromDefaultExport:l})}),i.forEach(({exportName:s,isFromDefaultExport:o})=>{r(!(o&&ae.includes(s)))}),i}function Xe(){return new Proxy({},{get(...e){return U()||B(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function et(e){const t=".page.",n=L(e.split(t),0,-1).join(t);return r(!n.includes("\\")),n}function w(e){oe(e),r(e.startsWith("/")||le(e),{filePath:e})}function At(e,t){if(t.length>0){const i=t.filter(s=>s.isErrorPage);return i.length===0?null:(p(i.length===1,"Only one error page can be defined"),i[0].pageId2)}const n=T(e.map(({pageId:i})=>i).filter(i=>W(i)));if(p(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const i=n[0];return r(i),i}return null}function W(e,t){return r(!e.includes("\\")),e.includes("/_error")}function tt(e,t){if(t.length>0){const n=t.find(i=>i.pageId2===e);return r(n),n.isErrorPage}else return W(e)}const nt=[".page",".page.server",".page.route",".page.client",".css"];function it(e){if(oe(e),e.endsWith(".css"))return r(le(e),e),".css";r(re(e),e);const n=e.split("/").slice(-1)[0].split("."),i=n.slice(-3)[0],s=n.slice(-2)[0];if(s==="page")return".page";if(r(i==="page",e),s==="server")return".page.server";if(s==="client")return".page.client";if(s==="route")return".page.route";r(!1,e)}function ce(e){const t=o=>s.pageId===o||s.isDefaultPageFile&&(q(s.filePath)||st(o,s.filePath)),n=it(e),s={filePath:e,fileType:n,isEnv:o=>{if(r(n!==".page.route"),o==="CLIENT_ONLY")return n===".page.client"||n===".css";if(o==="SERVER_ONLY")return n===".page.server";if(o==="CLIENT_AND_SERVER")return n===".page";r(!1)},isRelevant:t,isDefaultPageFile:x(e),isRendererPageFile:n!==".css"&&x(e)&&q(e),isErrorPageFile:W(e),pageId:et(e)};return s}function x(e){return w(e),W(e)?!1:e.includes("/_default")}function q(e){return w(e),e.includes("/renderer/")}function st(e,t){w(e),w(t),r(!e.endsWith("/")),r(!t.endsWith("/")),r(x(t));const n=L(t.split("/"),0,-1).filter(i=>i!=="_default").join("/");return e.startsWith(n)}function rt(e){r(Array.isArray(e)||e===null),r(e!==null),e.forEach(t=>{r(b(t)),r(d(t,"pageId2","string")),r(d(t,"pageConfigFilePathAll","string[]")),r(d(t,"routeFilesystem","string")||d(t,"routeFilesystem","null")),r(d(t,"routeFilesystemDefinedBy","string")),r(d(t,"loadCodeFiles","function")),r(d(t,"isErrorPage","boolean")),r(d(t,"configSources","object")),ue(t.configSources,!1)})}function ot(e){ue(e,!0)}function ue(e,t){r(b(e)),Object.entries(e).forEach(([n,i])=>{if(r(b(i)||i===null),i===null){r(t);return}if(r(d(i,"configSrc","string")),r(d(i,"configFilePath2","string")||d(i,"configFilePath2","null")),r(d(i,"configEnv","string")),r(d(i,"codeFilePath2","string")||d(i,"codeFilePath2","null")),r(d(i,"codeFileExport2","string")||d(i,"codeFileExport2","null")),t&&r(d(i,"configValue")),i.codeFilePath2){const{codeFilePath2:s}=i;if(n==="route"){r(d(i,"configValue"));const{configValue:o}=i,l=typeof o;p(l==="string"||k(o),`${s} has a default export with an invalid type '${l}': the default export should be a string or a function`)}}})}function lt(e){r(d(e,"isGeneratedFile")),r(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),r(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),r(d(e,"pageFilesLazy","object")),r(d(e,"pageFilesEager","object")),r(d(e,"pageFilesExportNamesLazy","object")),r(d(e,"pageFilesExportNamesEager","object")),r(d(e.pageFilesLazy,".page")),r(d(e.pageFilesLazy,".page.client")||d(e.pageFilesLazy,".page.server")),r(d(e,"pageFilesList","string[]")),r(d(e,"invalidator","object")||d(e,"invalidator","null")),e.invalidator&&Object.keys(e.invalidator).forEach(o=>{const l=o.split("/").slice(-1)[0];r(l.startsWith("+"))}),r(d(e,"pageConfigs")),r(d(e,"pageConfigGlobal"));const{pageConfigs:t,pageConfigGlobal:n}=e;rt(t),ot(n);const i={};I(e.pageFilesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;K(u),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await u(),Ye(l))}}),I(e.pageFilesExportNamesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;K(u),l.loadExportNames=async()=>{if(!("exportNames"in l)){const g=await u();p("exportNames"in g,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),r(d(g,"exportNames","string[]"),l.filePath),l.exportNames=g.exportNames}}}),I(e.pageFilesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;r(b(u)),l.fileExports=u}),I(e.pageFilesExportNamesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;r(b(u)),r(d(u,"exportNames","string[]"),l.filePath),l.exportNames=u.exportNames}),e.pageFilesList.forEach(o=>{var l;i[o]=(l=i[o])!==null&&l!==void 0?l:ce(o)});const s=Object.values(i);return s.forEach(({filePath:o})=>{r(!o.includes("\\"))}),{pageFiles:s,pageConfigs:t,pageConfigGlobal:n}}function I(e){const t=[];return Object.entries(e).forEach(([n,i])=>{r(nt.includes(n)),r(b(i)),Object.entries(i).forEach(([s,o])=>{const l=ce(s);r(l.fileType===n),t.push({filePath:s,pageFile:l,globValue:o})})}),t}function K(e){r(k(e))}const $=j("setPageFiles.ts",{});function Nt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:i}=lt(e);$.pageFilesAll=t,$.pageConfigs=n,$.pageConfigGlobal=i}async function Dt(e,t){e?(r(!$.pageFilesGetter),r(t===void 0)):(r($.pageFilesGetter),r(typeof t=="boolean"),(!$.pageFilesAll||!t)&&await $.pageFilesGetter());const{pageFilesAll:n,pageConfigs:i,pageConfigGlobal:s}=$;r(n&&i&&s);const o=at(n,i);return{pageFilesAll:n,allPageIds:o,pageConfigs:i,pageConfigGlobal:s}}function at(e,t){const n=e.filter(({isDefaultPageFile:o})=>!o).map(({pageId:o})=>o),i=T(n),s=t.map(o=>o.pageId2);return[...i,...s]}function ct(e,t){return fe(e,t,!0)}function zt(e,t){return fe(e,t,!1)}function fe(e,t,n){const i=n?"CLIENT_ONLY":"SERVER_ONLY",s=e.filter(h=>h.isRelevant(t)&&h.fileType!==".page.route").sort(ut(n,t)),o=h=>{const v=s.filter(E=>E.pageId===t&&E.isEnv(h?"CLIENT_AND_SERVER":i));p(v.length<=1,`Merge the following files into a single file: ${v.map(E=>E.filePath).join(" ")}`);const S=v[0];return r(S===void 0||!S.isDefaultPageFile),S},l=o(!1),a=o(!0),c=h=>s.filter(v=>v.isRendererPageFile&&v.isEnv(h?"CLIENT_AND_SERVER":i))[0],u=c(!1),g=c(!0),f=s.filter(h=>h.isDefaultPageFile&&!h.isRendererPageFile&&(h.isEnv(i)||h.isEnv("CLIENT_AND_SERVER")));return[l,a,...f,u,g].filter(ze)}function ut(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",i=-1,s=1,o=0;return(l,a)=>{if(!l.isDefaultPageFile&&a.isDefaultPageFile)return i;if(!a.isDefaultPageFile&&l.isDefaultPageFile)return s;{const c=l.isRendererPageFile,u=a.isRendererPageFile;if(!c&&u)return i;if(!u&&c)return s;r(c===u)}{const c=Z(t,l.filePath),u=Z(t,a.filePath);if(c<u)return i;if(u<c)return s;r(c===u)}{if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return i;if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return s}return o}}function Z(e,t){w(e),w(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const i=e.slice(n),s=t.slice(n),o=i.split("/").length,l=s.split("/").length;return o+l}function Q(e){const t=e/1e3;if(t<120){const n=X(t);return`${n} second${ee(n)}`}{const n=t/60,i=X(n);return`${i} minute${ee(i)}`}}function X(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function ee(e){return e==="1"?"":"s"}function ft(e,t,n){const{timeoutErr:i,timeoutWarn:s}=dt(t);let o,l;const a=new Promise((f,m)=>{o=h=>{c(),f(h)},l=h=>{c(),m(h)}}),c=()=>{clearTimeout(u),clearTimeout(g)},u=setTimeout(()=>{const f=`${P}[Warning] The ${t}() hook defined by ${n} is taking more than ${Q(s)}`;console.warn(f)},s),g=setTimeout(()=>{const f=we(`Hook timeout: the ${t}() hook defined by ${n} didn't finish after ${Q(i)}`);l(f)},i);return(async()=>{try{const f=await e();o(f)}catch(f){l(f)}})(),a}function dt(e){let t=4e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=10*60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}function Vt(e){const t=window.location.href,{origin:n,searchOriginal:i,hashOriginal:s,pathnameOriginal:o}=Te(t,"/");let l;if(e!=null&&e.withoutHash){l=`${o}${i||""}`;const a=`${n||""}${l}${s||""}`;r(t===a,{url:t,urlRecreated:a})}else{l=`${o}${i||""}${s||""}`;const a=`${n||""}${l}`;r(t===a,{url:t,urlRecreated:a})}return l}r(U());const gt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],i=t[2];return new RegExp(n,i)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function de(e){const t=JSON.parse(e);return ge(t)}function ge(e){return typeof e=="string"?ht(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=ge(n)}),e)}function ht(e){for(const{match:t,deserialize:n}of gt)if(t(e))return n(e,de);return e}function Bt(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;r(t);const n=de(t);r(d(n,"pageContext","object"));const{pageContext:i}=n;return r(d(i,"_pageId","string")),G(i,{_pageContextRetrievedFromServer:{...i},_comesDirectlyFromServer:!0}),i}function A(e,t){if(!(t in e.exports))return null;const n=e.exports[t],i=e.exportsAll[t][0];r(i.exportValue===n);const s=i.exportSource;return r(s),r(!t.endsWith(")")),p(k(n),`hook ${t}() defined by ${s} should be a function`),{hook:n,hookSrc:s}}function Ut(e,t){A(e,t)}function pt(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[i])=>De(n,i)).forEach(([n,i])=>{e[n]=i})}function mt(e){vt(e),yt(e)}function vt(e){tt(e._pageId,e._pageConfigs)&&r(d(e,"is404","boolean"))}function yt(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!b(t)){B(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const O=j("releasePageContext.ts",{});function Et(e,t){if(t){const s=e;r([!0,!1].includes(s.isHydration)),r([!0,!1,null].includes(s.isBackwardNavigation))}else{const s=e;r(s.isHydration===!0),r(s.isBackwardNavigation===null)}r("config"in e),r("configList"in e),r("exports"in e),r("exportsAll"in e),r("pageExports"in e),r(b(e.pageExports));const n=e.exports.Page;G(e,{Page:n}),wt(e),pt(e),r([!0,!1].includes(e._comesDirectlyFromServer));const i=e._comesDirectlyFromServer?$t(e):e;return mt(e),i}const bt=["then","toJSON"],Rt=["_pageId"];function $t(e){return new Proxy(e,{get:n});function t(i){return!(i in e||bt.includes(i)||typeof i=="symbol"||typeof i!="string"||i.startsWith("__v_"))}function n(i,s){return O.disableAssertPassToClient!==s&&_t(e._pageContextRetrievedFromServer,s,t(s)),O.disableAssertPassToClient=s,window.setTimeout(()=>{O.disableAssertPassToClient=void 0},0),e[s]}}function _t(e,t,n){if(!n||e===null)return;const i=Object.keys(e).filter(s=>!Rt.includes(s));p(!1,[`pageContext.${t} isn't available in the browser.`,`Make sure to add '${t}' to passToClient`,`(passToClient is [${i.map(s=>`'${s}'`).join(", ")}]),`,"see https://vite-plugin-ssr.com/passToClient"].join(" "))}function wt(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}function Pt(e,t){var n;const i=e.filter(o=>o.pageId2===t);return r(i.length<=1),(n=i[0])!==null&&n!==void 0?n:null}async function St(e,t){const n={};return!t&&"configValues"in e||((await e.loadCodeFiles()).forEach(({configName:s,codeFilePath3:o,codeFileExports:l})=>{s!=="clientEntry"&&Ue(l,o),r(!(s in n)),n[s]=l.default}),Object.entries(e.configSources).map(([s,o])=>{o.codeFilePath2||(r(!(s in n)),n[s]=o.configValue)}),G(e,{configValues:n})),e}const he="__whileFetchingAssets";async function Gt(e,t,n){const i=ct(e,n),s=Pt(t,n);let o;try{o=(await Promise.all([s&&St(s,!1),...i.map(h=>{var v;return(v=h.loadFile)===null||v===void 0?void 0:v.call(h)})]))[0]}catch(m){throw m&&Object.assign(m,{[he]:!0}),m}const{config:l,configList:a,exports:c,exportsAll:u,pageExports:g}=Ze(i,o);return{config:l,configList:a,exports:c,exportsAll:u,pageExports:g,_pageFilesLoaded:i}}function Mt(e){return e?e[he]===!0:!1}async function Ht(e,t){const n=Et(e,t);let i=null,s;i=A(e,"render"),s="render";{const a=A(e,"onRenderClient");a&&(i=a,s="onClientRender")}if(!i){const a=jt(e);if(e._pageConfigs.length>0)It(e._pageId,e._pageConfigs,a);else{const c=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+a:u="One of the following files should export a `render()` hook: "+c.map(g=>g.filePath).join(" "),p(!1,u)}}r(i);const o=i.hook;r(s);const l=await ft(()=>o(n),"render",i.hookSrc);p(l===void 0,`The ${s}() hook defined by ${i.hookSrc} isn't allowed to return a value`)}function jt(e){let t;try{t=e.urlOriginal}catch{}return t=t??window.location.href,t}function It(e,t,n){var i,s;const o=Ke(e,t);r(!(!((i=o.configSources.onRenderClient)===null||i===void 0)&&i.configValue)),r(((s=o.configSources.clientRouting)===null||s===void 0?void 0:s.configValue)===!0);const l=[];let a=[];t.forEach(g=>{a.push(...g.pageConfigFilePathAll);const f=g.configSources.onRenderClient;f&&f.configValue&&l.push(f.configSrc)}),a=T(a);const c="- ",u=`No onRenderClient() hook found for URL \`${n}\`. (A onRenderClient() hook is required when using Client Routing: the config \`clientRouting\` is \`true\` for the URL \`${n}\`.)`;if(l.length===0)p(!1,[`${u} No onRenderClient() hook is defined by any of your page config files. Your page config files (which none of them defines \`onClientRender()\`):`,...a.map(g=>c+g)].join(`
`));else{const g=l.length>=2;p(!1,[`${u} Note that onRenderClient() is defined at:`,...l.map(f=>`${c}${f}`),`but ${g?"none of them":"it doesn't"} apply to the URL \`${n}\`.`].join(`
`))}}export{de as A,we as B,Dt as C,xe as D,ct as E,Ct as F,Pt as G,Le as H,Tt as I,Pe as J,Mt as K,Ut as L,Ht as M,Lt as N,Wt as O,Ft as P,r as a,kt as b,U as c,Vt as d,zt as e,b as f,j as g,p as h,k as i,B as j,Ot as k,L as l,W as m,d as n,Ae as o,Te as p,G as q,Bt as r,Nt as s,Gt as t,At as u,A as v,Et as w,ft as x,Ke as y,xt as z};
