(this["webpackJsonpapp.spelling.tilt.ninja"]=this["webpackJsonpapp.spelling.tilt.ninja"]||[]).push([[0],{18:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(3),l=n.n(s),a=n(12),o=n(2),i=n(11),u=n(1),d=function(e){var t=e.word.split("");return Object(u.jsx)("li",{children:t.map((function(t,n){return Object(u.jsx)("p",{className:"underline"},"".concat(e.mode,"-underline-").concat(n))}))})};var j=function(e){var t=function(e){return e.sort((function(e,t){return e.word<t.word?-1:e.word>t.word?1:0}))}(e.words);return Object(u.jsx)("ol",{children:t.map((function(e,t){return Object(u.jsx)(d,{mode:"alpha",word:e.word,index:t},"alpha-".concat(t))}))})},b=function(e){return e=e.toLowerCase(),h(e)?"letter hanging":p(e)?"letter tall":"letter"},h=function(e){return["q","y","p","g","j"].includes(e)},p=function(e){return["t","d","f","h","l","b"].includes(e)},x=function(e){return Object(u.jsx)("li",{children:e.word.split("").map((function(e,t){return Object(u.jsx)("p",{className:b(e)},"letter-".concat(t))}))},"box-".concat(e.index))},O=function(e){for(var t,n,c=e.length;0!==c;)n=Math.floor(Math.random()*c),t=e[c-=1],e[c]=e[n],e[n]=t;return e},f=function(e){var t=O(e.words);return Object(u.jsx)("ol",{children:t.map((function(e,t){return Object(u.jsx)(x,{word:e.word,index:t},t)}))})},w=function(e,t){var n="";return e.split("").forEach((function(){n+="_"})),t.replace(e,n)},m=function(e){var t=O(e.words);return Object(u.jsx)("div",{children:t.map((function(e,t){return Object(u.jsx)("p",{className:"sentence",children:w(e.word,e.sentence)},"sentence-".concat(t))}))})},v=function(e){var t=e.word.split("");return Object(u.jsx)("li",{children:t.map((function(e,t){return Object(u.jsx)("span",{children:"___"},"word-letter-".concat(t))}))})},g=function(e,t,n){return n.indexOf(e)===t},y=function(e){var t=function(e){var t=[];return e.forEach((function(e){t.push(e.syllables)})),t.filter(g).sort()}(e.words);return Object(u.jsx)("div",{children:t.map((function(t,n){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"".concat(t," Syllables")},"syllables-header-".concat(n)),Object(u.jsx)("ul",{children:e.words.map((function(e,n){return e.syllables===t?Object(u.jsx)(v,{word:e.word},"word-syllables-".concat(n)):null}))},"syllables-list-".concat(n))]},"syllables-div-".concat(n))}))})},N=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:"syllables",children:"Syllables"}),Object(u.jsx)("input",{id:"syllables",type:"number",min:"1",max:"7",value:e.value,onInput:e.onInput})]})},I=function(e){return Object(u.jsx)("div",{className:"form-control",children:Object(u.jsx)("input",{onInput:e.onInput,id:"word",type:"text",placeholder:"Enter a word",value:e.word})})},S=function(e){return Object(u.jsx)("ul",{className:"word-list",children:e.words.map((function(e,t){return Object(u.jsx)("li",{className:"word",children:e.word},t)}))})},C=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:"sentence",children:"Sentence"}),Object(u.jsx)("input",{onInput:e.onInput,id:"sentence",value:e.value})]})},F=function(e){return Object(u.jsx)("button",{onClick:e.onClick,className:"btn",children:"Add"})},k=(n(18),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),l=Object(o.a)(s,2),d=l[0],b=l[1],h=Object(c.useState)("alphabetical"),p=Object(o.a)(h,2),x=p[0],O=p[1],w=Object(c.useState)(1),v=Object(o.a)(w,2),g=v[0],k=v[1],P=Object(c.useState)(""),E=Object(o.a)(P,2),A=E[0],B=E[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("div",{className:"select-container no-print",children:Object(u.jsx)(i.a,{onChange:function(e){O(e.value)},options:[{value:"alphabetical",label:"Alphabetical"},{value:"boxes",label:"Boxes"},{value:"syllables",label:"Syllables"},{value:"sentences",label:"Sentences"}]})}),Object(u.jsxs)("div",{className:"print",children:[Object(u.jsx)("h1",{children:x}),{alphabetical:"Put the words in alphabetical order using the lines provided.",boxes:"Put the correct letters into the boxes that matches the shape of the word best.",syllables:"Put the word under the heading that matches the number of syllables it contains.",sentences:"Put the best word in the blank that helps the sentence make sense."}[x]]})]}),Object(u.jsxs)("section",{className:"no-print",children:[Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)(I,{onInput:function(e){r(e.target.value.toLowerCase())},word:n}),Object(u.jsx)(N,{onInput:function(e){k(parseInt(e.target.value))},value:g}),Object(u.jsx)(C,{onInput:function(e){B(e.target.value)},value:A})]}),Object(u.jsx)(F,{onClick:function(){n.length&&A.length&&(b((function(e){return[].concat(Object(a.a)(e),[{word:n,syllables:g,sentence:A}])})),r(""),B(""),k(1),document.getElementById("word").focus())}})]}),Object(u.jsxs)("section",{className:"output",children:[d.length>0&&Object(u.jsx)(S,{words:d}),d.length>0&&{alphabetical:Object(u.jsx)(j,{words:d}),boxes:Object(u.jsx)(f,{words:d}),syllables:Object(u.jsx)(y,{words:d}),sentences:Object(u.jsx)(m,{words:d})}[x]]})]})}),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),s(e),l(e)}))};l.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),P()}},[[34,1,2]]]);
//# sourceMappingURL=main.15c01bf8.chunk.js.map