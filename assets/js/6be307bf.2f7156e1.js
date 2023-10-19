"use strict";(self.webpackChunkthuai7_docs=self.webpackChunkthuai7_docs||[]).push([[212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var h=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function _(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},2117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={},s="\u7f16\u7a0b",u={unversionedId:"intro/programming",id:"intro/programming",title:"\u7f16\u7a0b",description:"Visual Studio \u4f7f\u7528\u8bf4\u660e",source:"@site/docs/intro/programming.mdx",sourceDirName:"intro",slug:"/intro/programming",permalink:"/docs/intro/programming",draft:!1,editUrl:"https://github.com/Panxuc/THUAI7-Docs/edit/main/docs/intro/programming.mdx",tags:[],version:"current",lastUpdatedBy:"Panxuc",lastUpdatedAt:1697728797,formattedLastUpdatedAt:"2023\u5e7410\u670819\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u6307\u5357",permalink:"/docs/intro/guide"},next:{title:"\u5730\u56fe",permalink:"/docs/category/\u5730\u56fe"}},c={},d=[{value:"Visual Studio \u4f7f\u7528\u8bf4\u660e",id:"visual-studio-\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u751f\u6210\u6a21\u5f0f\u7684\u8bbe\u7f6e",id:"\u751f\u6210\u6a21\u5f0f\u7684\u8bbe\u7f6e",level:3},{value:"\u547d\u4ee4\u884c\u53c2\u6570\u7684\u8bbe\u7f6e",id:"\u547d\u4ee4\u884c\u53c2\u6570\u7684\u8bbe\u7f6e",level:3},{value:"cmd \u811a\u672c\u7684\u53c2\u6570\u4fee\u6539",id:"cmd-\u811a\u672c\u7684\u53c2\u6570\u4fee\u6539",level:3},{value:"\u63a5\u53e3\u5fc5\u770b",id:"\u63a5\u53e3\u5fc5\u770b",level:2},{value:"\u8ba1\u65f6\u76f8\u5173",id:"\u8ba1\u65f6\u76f8\u5173",level:3},{value:"\u7ebf\u7a0b\u7761\u7720",id:"\u7ebf\u7a0b\u7761\u7720",level:3},{value:"\u5f02\u6b65\u63a5\u53e3\u7684\u4f7f\u7528",id:"\u5f02\u6b65\u63a5\u53e3\u7684\u4f7f\u7528",level:3},{value:"<code>auto</code> \u7c7b\u578b\u63a8\u5bfc",id:"auto-\u7c7b\u578b\u63a8\u5bfc",level:3},{value:"STL\u76f8\u5173",id:"stl\u76f8\u5173",level:3},{value:"<code>std::vector</code>",id:"stdvector",level:4},{value:"std::array",id:"stdarray",level:4},{value:"fmt \u5e93\u7684\u4f7f\u7528",id:"fmt-\u5e93\u7684\u4f7f\u7528",level:3}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7f16\u7a0b"},"\u7f16\u7a0b"),(0,a.kt)("h2",{id:"visual-studio-\u4f7f\u7528\u8bf4\u660e"},"Visual Studio \u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("p",null,"\u6bd4\u8d5b",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u4fdd\u8bc1\uff01\uff01\uff01\u652f\u6301")," VS 2022 \u6700\u65b0\u7248\u672c\uff0c\u9009\u624b\u4f7f\u7528\u5176\u4ed6\u7248\u672c\u540e\u679c\u81ea\u8d1f\uff08\u5b9e\u9645\u4e0a\u5e94\u8be5\u4e0d\u80fd\u7f16\u8bd1\uff09\u3002"),(0,a.kt)("h3",{id:"\u751f\u6210\u6a21\u5f0f\u7684\u8bbe\u7f6e"},"\u751f\u6210\u6a21\u5f0f\u7684\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u83dc\u5355\u680f\u4e0b\u65b9\u4e00\u884c"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/shangfengh/THUAI6/new/resource/image-20230416010705076.png",alt:"image-20230416010705076"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u66f4\u6539\u751f\u6210\u6a21\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Debug")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Release")),(0,a.kt)("h3",{id:"\u547d\u4ee4\u884c\u53c2\u6570\u7684\u8bbe\u7f6e"},"\u547d\u4ee4\u884c\u53c2\u6570\u7684\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u5de6\u4e0a\u65b9\u83dc\u5355\u680f ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8c03\u8bd5->\u8c03\u8bd5\u5c5e\u6027")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/shangfengh/THUAI6/new/resource/image-20230416010816392.png",alt:"image-20230416010816392"})),(0,a.kt)("p",null,"\u5728\u547d\u4ee4\u53c2\u6570\u4e00\u680f\u4e2d\u52a0\u5165\u547d\u4ee4\u884c\u53c2\u6570\u8fdb\u884c\u8c03\u8bd5"),(0,a.kt)("h3",{id:"cmd-\u811a\u672c\u7684\u53c2\u6570\u4fee\u6539"},"cmd \u811a\u672c\u7684\u53c2\u6570\u4fee\u6539"),(0,a.kt)("p",null,"\u53f3\u952e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},".cmd")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},".bat")," \u6587\u4ef6\u4e4b\u540e\uff0c\u9009\u62e9\u7f16\u8f91\u5c31\u53ef\u4ee5\u5f00\u59cb\u4fee\u6539\u6587\u4ef6\u3002\u901a\u8fc7\u5728\u4e00\u884c\u7684\u5f00\u5934\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"::"),"\uff0c\u53ef\u4ee5\u6ce8\u91ca\u6389\u8be5\u884c\u3002"),(0,a.kt)("h2",{id:"\u63a5\u53e3\u5fc5\u770b"},"\u63a5\u53e3\u5fc5\u770b"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"cpp",label:"C++",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728\u6b64\u9e23\u8c22\\xfgg/\\xfgg/\\xfgg/\uff0c\u770b\u5230\u8fd9\u91cc\u7684\u9009\u624b\u53ef\u4ee5\u5230\u9009\u624b\u7fa4\u819c\u4e00\u819c\uff01\uff01\uff01 ")),(0,a.kt)("p",null,"\u9664\u975e\u7279\u6b8a\u6307\u660e\uff0c\u4ee5\u4e0b\u4ee3\u7801\u5747\u5728 MSVC 19.28.29913 x64 ",(0,a.kt)("inlineCode",{parentName:"p"},"/std:cpp17")," \u4e0e GCC 10.2 x86_64-linux-gnu ",(0,a.kt)("inlineCode",{parentName:"p"},"-std=cpp17")," \u4e24\u4e2a\u5e73\u53f0\u4e0b\u901a\u8fc7\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u7684\u6bd4\u8d5b\u6700\u7ec8\u4f1a\u8fd0\u884c\u5728 Linux \u5e73\u53f0\u4e0a\uff0c\u56e0\u6b64\u7a0b\u8bbe\u8bfe\u4e0a\u5b66\u5230\u7684\u4e00\u4e9b\u53ea\u9002\u7528\u4e8e Windows \u7684 C++ \u64cd\u4f5c\u5f88\u53ef\u80fd\u5e76\u4e0d\u80fd\u6b63\u786e\u6267\u884c\u3002\u6b64\u5916\uff0c\u4ee3\u7801\u4e2d\u4f7f\u7528\u4e86\u5927\u91cf Modern C++ \u4e2d\u7684\u65b0\u7279\u6027\uff0c\u53ef\u80fd\u4f1a\u4f7f\u9009\u624b\u5728\u7f16\u7a0b\u8fc7\u7a0b\u4e2d\u9047\u5230\u8f83\u5927\u56f0\u96be\u3002\u56e0\u6b64\uff0c\u6b64\u5904\u4ecb\u7ecd\u4e00\u4e9b\u6bd4\u8d5b\u4e2d\u4f7f\u7528 C++ \u63a5\u53e3\u5fc5\u987b\u4e86\u89e3\u7684\u77e5\u8bc6\u3002"),(0,a.kt)("h3",{id:"\u8ba1\u65f6\u76f8\u5173"},"\u8ba1\u65f6\u76f8\u5173"),(0,a.kt)("p",null,"\u7f16\u5199\u4ee3\u7801\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u83b7\u53d6\u7cfb\u7edf\u65f6\u95f4\u7b49\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0cC++ \u6807\u51c6\u5e93\u63d0\u4f9b\u4e86\u8fd9\u6837\u7684\u884c\u4e3a\u3002\u5c24\u5176\u6ce8\u610f",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u8981"),"\u4f7f\u7528 Windows \u5e73\u53f0\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTickCount")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTickCount64")," \uff01\uff01\uff01\u5e94\u5f53\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"std::chrono")),(0,a.kt)("p",null,"\u5934\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"#include <chrono>")),(0,a.kt)("p",null,"\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u65f6\u95f4\u6233\uff0c\u4ece\u800c\u7528\u4e8e\u8ba1\u65f6\u3001\u4f8b\u5982\u8ba1\u7b97\u67d0\u4e2a\u64cd\u4f5c\u82b1\u8d39\u7684\u65f6\u95f4\uff0c\u6216\u8005\u534f\u8c03\u961f\u53cb\u95f4\u7684\u5408\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <chrono>\nint main()\n{\n    auto sec = std::chrono::duration_cast<std::chrono::seconds>(\n        std::chrono::system_clock::now().time_since_epoch()).count();\n    auto msec = std::chrono::duration_cast<std::chrono::milliseconds>(\n        std::chrono::system_clock::now().time_since_epoch()).count();\n    std::cout << "\u4ece 1970 \u5e74\u5143\u65e6\u5230\u73b0\u5728\u7684\uff1a\u79d2\u6570" << sec << "\uff1b\u6beb\u79d2\u6570\uff1a" <<\n         msec << std::endl;\n    return 0;\n}\n')),(0,a.kt)("h3",{id:"\u7ebf\u7a0b\u7761\u7720"},"\u7ebf\u7a0b\u7761\u7720"),(0,a.kt)("p",null,"\u7531\u4e8e\u79fb\u52a8\u8fc7\u7a0b\u4e2d\u4f1a\u963b\u585e\u4eba\u7269\u89d2\u8272\uff0c\u56e0\u6b64\u73a9\u5bb6\u53ef\u80fd\u8981\u5728\u79fb\u52a8\u540e\u8ba9\u7ebf\u7a0b\u4f11\u7720\u4e00\u6bb5\u65f6\u95f4\uff0c\u76f4\u5230\u79fb\u52a8\u7ed3\u675f\u3002C++ \u6807\u51c6\u5e93\u4e2d\u4f7f\u7ebf\u7a0b\u4f11\u7720\u9700\u8981\u5305\u542b\u5934\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"#include <thread>"),"\u3002\u793a\u4f8b\u7528\u6cd5\uff1a"),(0,a.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u5c0f\u6b65\u79fb\u52a8\uff0c\u4e0d\u592a\u5efa\u8bae\u73a9\u5bb6\u4f7f\u7528\u7ebf\u7a0b\u7761\u7720\u8d85\u8fc7\u4e00\u5e27"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::this_thread::sleep_for(std::chrono::milliseconds(20));     // \u4f11\u7720 20 \u6beb\u79d2\nstd::this_thread::sleep_for(std::chrono::seconds(2));           // \u4f11\u7720 2 \u79d2\n\n// \u4e0b\u9762\u8fd9\u4e2a\u4e5f\u80fd\u4f11\u7720 200 \u6beb\u79d2\nstd::this_thread::sleep_until(std::chrono::system_clock::now()\n    += std::chrono::milliseconds(200));\n")),(0,a.kt)("p",null,"\u4f11\u7720\u8fc7\u7a0b\u4e2d\uff0c\u7ebf\u7a0b\u5c06\u88ab\u963b\u585e\uff0c\u800c\u4e0d\u7ee7\u7eed\u8fdb\u884c\uff0c\u76f4\u5230\u4f11\u7720\u65f6\u95f4\u7ed3\u675f\u65b9\u7ee7\u7eed\u5411\u4e0b\u6267\u884c\u3002"),(0,a.kt)("h3",{id:"\u5f02\u6b65\u63a5\u53e3\u7684\u4f7f\u7528"},"\u5f02\u6b65\u63a5\u53e3\u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\u672c\u5c4a\u6bd4\u8d5b\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u770b\u5230\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"std::future<bool>")," \u8fd9\u6837\u7c7b\u578b\u7684\u63a5\u53e3\u8fd4\u56de\u503c\uff0c\u8fd9\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u5f02\u6b65\u63a5\u53e3\u3002\u5728\u8c03\u7528\u540c\u6b65\u63a5\u53e3\u540e\uff0c\u5728\u63a5\u53e3\u5185\u7684\u51fd\u6570\u672a\u6267\u884c\u5b8c\u4e4b\u524d\uff0c\u7ebf\u7a0b\u901a\u5e38\u4f1a\u963b\u585e\u4f4f\uff1b\u4f46\u662f\u5f02\u6b65\u63a5\u53e3\u7684\u8c03\u7528\u901a\u5e38\u4e0d\u4f1a\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u800c\u662f\u4f1a\u53e6\u5916\u5f00\u542f\u4e00\u4e2a\u7ebf\u7a0b\u8fdb\u884c\u64cd\u4f5c\uff0c\u5f53\u524d\u7ebf\u7a0b\u5219\u7ee7\u7eed\u5411\u4e0b\u6267\u884c\u3002\u5f53\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," \u65b9\u6cd5\u65f6\uff0c\u5c06\u8fd4\u56de\u5f02\u6b65\u63a5\u53e3\u7684\u503c\uff0c\u82e5\u6b64\u65f6\u5f02\u6b65\u63a5\u53e3\u5185\u7684\u51fd\u6570\u4f9d\u7136\u672a\u6267\u884c\u5b8c\uff0c\u5219\u4f1a\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u8fd4\u56de\u503c\u6216\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u4f46\u662f\u5e0c\u671b\u63a5\u53e3\u5185\u7684\u51fd\u6570\u6267\u884c\u5b8c\u4e4b\u540e\u518d\u8fdb\u884c\u4e0b\u4e00\u6b65\uff0c\u5373\u5c06\u63a5\u53e3\u5f53\u505a\u5e38\u89c4\u7684\u540c\u6b65\u63a5\u53e3\u6765\u8c03\u7528\uff0c\u4e5f\u53ef\u4ee5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"wait()")," \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <thread>\n#include <future>\n#include <chrono>\n\nint f_sync()\n{\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    return 8;\n}\n\nstd::future<int> f_async()\n{\n    return std::async(std::launch::async, []()\n                      { std::this_thread::sleep_for(std::chrono::seconds(1));\n                        return 8; });\n}\n\nint main()\n{\n    auto start = std::chrono::system_clock::now();\n    std::cout << std::chrono::duration_cast<std::chrono::duration<double, std::milli>>(\n        std::chrono::system_clock::now() - start).count() << std::endl;\n    auto x = f_async();\n    std::cout << std::chrono::duration_cast<std::chrono::duration<double, std::milli>>(\n        std::chrono::system_clock::now() - start).count() << std::endl;\n    std::cout << x.get() << std::endl;\n    std::cout << std::chrono::duration_cast<std::chrono::duration<double, std::milli>>(\n        std::chrono::system_clock::now() - start).count() << std::endl;\n    auto y = f_sync();\n    std::cout << std::chrono::duration_cast<std::chrono::duration<double, std::milli>>(\n        std::chrono::system_clock::now() - start).count() << std::endl;\n    std::cout << y << std::endl;\n    std::cout << std::chrono::duration_cast<std::chrono::duration<double, std::milli>>(\n        std::chrono::system_clock::now() - start).count() << std::endl;\n}\n")),(0,a.kt)("h3",{id:"auto-\u7c7b\u578b\u63a8\u5bfc"},(0,a.kt)("inlineCode",{parentName:"h3"},"auto")," \u7c7b\u578b\u63a8\u5bfc"),(0,a.kt)("p",null,"C++11\u5f00\u59cb\u652f\u6301\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," \u81ea\u52a8\u63a8\u5bfc\u53d8\u91cf\u7c7b\u578b\uff0c\u5e9f\u9664\u4e86\u539f\u6709\u7684\u4f5c\u4e3a storage-class-specifier \u7684\u4f5c\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int i = 4;\nauto x = i; // auto \u88ab\u63a8\u5bfc\u4e3a int\uff0cx \u662f int \u7c7b\u578b\nauto& y = i; // auto \u4ecd\u88ab\u63a8\u5bfc\u4e3a int\uff0cy \u662f int& \u7c7b\u578b\nauto&& z = i; // auto \u88ab\u63a8\u5bfc\u4e3a int&\uff0cz \u662f int&&&\uff0c\u88ab\u6298\u53e0\u4e3a int&\uff0c\u5373 z \u4e0e y \u540c\u7c7b\u578b\nauto&& w = 4; // auto \u88ab\u63a8\u5bfc\u4e3a int\uff0cw \u662f int&& \u7c7b\u578b\n")),(0,a.kt)("h3",{id:"stl\u76f8\u5173"},"STL\u76f8\u5173"),(0,a.kt)("h4",{id:"stdvector"},(0,a.kt)("inlineCode",{parentName:"h4"},"std::vector")),(0,a.kt)("p",null,"\u5934\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"#include <vector>"),"\uff0c\u7c7b\u4f3c\u4e8e\u53ef\u53d8\u957f\u7684\u6570\u7ec4\uff0c\u652f\u6301\u4e0b\u6807\u8fd0\u7b97\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," \u8bbf\u95ee\u5176\u5143\u7d20\uff0c\u6b64\u65f6\u4e0e C \u98ce\u683c\u6570\u7ec4\u7528\u6cd5\u76f8\u4f3c\u3002\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," \u6210\u5458\u51fd\u6570\u83b7\u53d6\u5176\u4e2d\u7684\u5143\u7d20\u6570\u91cf\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," \u578b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"vector"),"  \u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> v { 9, 1, 2, 3, 4 };   // \u521d\u59cb\u5316 vector \u6709\u4e94\u4e2a\u5143\u7d20\uff0cv[0] = 9, ...\nv.emplace_back(10);         // \u5411 v \u5c3e\u90e8\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\uff0c\u8be5\u5143\u7d20\u997f\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u4e3a 10\uff08\u5bf9\u4e8e int\uff0c\u53ea\u6709\u4e00\u4e2a\u8bed\u6cd5\u610f\u4e49\u4e0a\u7684\u6784\u9020\u51fd\u6570\uff0c\u65e0\u771f\u6b63\u7684\u6784\u9020\u51fd\u6570\uff09\uff0c\u5373\u73b0\u5728 v \u6709\u516d\u4e2a\u5143\u7d20\uff0cv[5] \u7684\u503c\u662f 10\nv.pop_back();               // \u628a\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u5220\u9664\uff0c\u73b0\u5728 v \u8fd8\u662f { 9, 1, 2, 3, 4 }\n")),(0,a.kt)("p",null,"\u904d\u5386\u5176\u4e2d\u6240\u6709\u5143\u7d20\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// std::vector<int> v;\nfor (int i = 0; i < (int)v.size(); ++i)\n{\n    /*\u53ef\u4ee5\u901a\u8fc7 v[i] \u5bf9\u5176\u8fdb\u884c\u8bbf\u95ee*/\n}\n\nfor (auto itr = v.begin(); itr != v.end(); ++itr)\n{\n    /*\n    * itr \u4f5c\u4e3a\u8fed\u4ee3\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u5176\u8bbf\u95ee vector \u4e2d\u7684\u5143\u7d20\u3002\u5176\u7528\u6cd5\u4e0e\u6307\u9488\u51e0\u4e4e\u5b8c\u5168\u76f8\u540c\u3002\n    * \u53ef\u4ee5\u901a\u8fc7 *itr \u5f97\u5230\u5143\u7d20\uff1b\u4ee5\u53ca itr-> \u7684\u7528\u6cd5\u4e5f\u662f\u652f\u6301\u7684\n    * \u5b9e\u9645\u4e0a\u5b83\u5185\u90e8\u5c31\u662f\u5c01\u88c5\u4e86\u6307\u5411 vector \u4e2d\u5143\u7d20\u7684\u6307\u9488\n    * \u6b64\u5916\u8fd8\u6709 v.cbegin()\u3001v.rbegin()\u3001v.crbegin() \u7b49\n    * v.begin()\u3001v.end() \u4e5f\u53ef\u5199\u4e3a begin(v)\u3001end(v)\n    */\n}\n\nfor (auto&& elem : v)\n{\n    /*\n    * elem \u5373\u662f v \u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684\u5f15\u7528\uff0c\u4e5f\u53ef\u5199\u6210 auto& elem : v\n    * \u5b83\u5b8c\u5168\u7b49\u4ef7\u4e8e\uff1a\n    * {\n    *   auto&& __range = v;\n    *   auto&& __begin = begin(v);\n    *   auto&& __end = end(v);\n    *   for (; __begin != __end; ++__begin)\n    *   {\n    *       auto&& elem = *__begin;\n    *       // Some code\n    *   }\n    * }\n    */\n}\n")),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto elem&& : v) { std::cout << elem << ' '; }\nstd::cout << std::endl;\n")),(0,a.kt)("p",null,"\u4f5c\u4e3a STL \u7684\u5bb9\u5668\u4e4b\u4e00\uff0c\u5176\u5177\u6709\u5bb9\u5668\u7684\u901a\u7528\u63a5\u53e3\u3002\u4f46\u662f\u7531\u4e8e\u8fd9\u6bd4\u8f83\u590d\u6742\uff0c\u5728\u6b64\u96be\u4ee5\u4e00\u4e00\u5c55\u5f00\u3002\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u5728\u4e0b\u65b9\u63d0\u4f9b\u7684\u94fe\u63a5\u91cc\u8fdb\u884c\u67e5\u9605\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u8bf7\u5343\u4e07\u4e0d\u8981\u8bd5\u56fe\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"std::vector<bool>"),"\uff0c\u82e5\u9700\u4f7f\u7528\uff0c\u8bf7\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"std::vector<char>")," \u4ee3\u66ff\uff01")),(0,a.kt)("p",null,"\u66f4\u591a\u7528\u6cd5\u53c2\u89c1\uff08\u70b9\u51fb\u8fdb\u5165\uff09\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://zh.cppreference.com/w/cpp/container/vector"},"cppreference_vector")),(0,a.kt)("h4",{id:"stdarray"},"std::array"),(0,a.kt)("p",null,"\u5934\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"#include <array>"),"\uff0cC \u98ce\u683c\u6570\u7ec4\u7684\u7c7b\u5c01\u88c5\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u7528\u6cd5\u4e0e C \u98ce\u683c\u7684\u6570\u7ec4\u662f\u57fa\u672c\u76f8\u4f3c\u7684\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::array<double, 5> arr { 9.0, 8.0, 7.0, 6.0, 5.0 };\nstd::cout << arr[2] << std::endl;   // \u8f93\u51fa 7.0\n")),(0,a.kt)("p",null,"\u540c\u65f6\u4e5f\u652f\u6301\u5404\u79cd\u5bb9\u5668\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"double sum = 0.0;\nfor (auto itr = begin(arr); itr != end(arr); ++itr)\n{\n    sum += *itr;\n}\n// sum \u7ed3\u679c\u662f 35\n")),(0,a.kt)("p",null,"\u66f4\u591a\u7528\u6cd5\u53c2\u89c1\uff08\u70b9\u51fb\u8fdb\u5165\uff09\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://zh.cppreference.com/w/cpp/container/array"},"cppreference_array"),"\u3002"),(0,a.kt)("h3",{id:"fmt-\u5e93\u7684\u4f7f\u7528"},"fmt \u5e93\u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\u9009\u624b\u5305\u4e2d\u5185\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"fmt")," \u5e93\uff0c\u56e0\u6b64\u9009\u624b\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"fmt")," \u5e93\u6765\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\uff0c\u800c\u65e0\u987b\u81ea\u5df1\u624b\u52a8\u683c\u5f0f\u5316\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string str_std = "number: " + std::to_string(1) + teststr;\nstd::string str_fmt = fmt::format("number: {}{}", 1, teststr); // \u4e24\u79cd\u65b9\u6cd5\u7b49\u4ef7\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fmt"),"\u5e93\u8fd8\u652f\u6301\u66f4\u591a\u5f3a\u5927\u7684\u64cd\u4f5c\uff0c\u4f8b\u5982\u66f4\u7cbe\u786e\u7684\u683c\u5f0f\u5316\u3001\u66f4\u7b80\u4fbf\u7684\u8f6c\u5316\u7b49\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u7528\u6cd5\u53c2\u89c1\uff08\u70b9\u51fb\u8fdb\u5165\uff09\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://fmt.dev/latest/index.html"},"fmt_index"),"\u3002")),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("p",null,"\u6bd4\u8d5b",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u4fdd\u8bc1\uff01\uff01"),"\u652f\u6301 Python 3.9\uff0c\u4e0d\u4fdd\u8bc1\u652f\u6301\u5176\u4ed6\u7248\u672c"),(0,a.kt)("p",null,"\u6bd4\u8d5b\u4e2d\u7684 Python \u63a5\u53e3\u5927\u591a\u4f7f\u7528\u5f02\u6b65\u63a5\u53e3\uff0c\u5373\u8fd4\u56de\u4e00\u4e2a\u7c7b\u4f3c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Future[bool]")," \u7684\u503c\u3002\u4e3a\u4e86\u83b7\u53d6\u5b9e\u9645\u7684\u503c\uff0c\u9700\u8981\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"result()")," \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from concurrent.futures import Future, ThreadPoolExecutor\nimport time\n\nclass Cls:\n    def __init__(self):\n        self.__pool: ThreadPoolExecutor = ThreadPoolExecutor(10)\n\n    def Test(self, a: int, b: int) -> Future[int]:\n        def test():\n            time.sleep(0.5)\n            return a + b\n\n        return self.__pool.submit(test)\n\nif __name__ == '__main__':\n    f1 = Cls().Test(1, 2)\n    print(time.time())\n    print(f1.result())\n    print(time.time())\n\n")))))}f.isMDXComponent=!0}}]);