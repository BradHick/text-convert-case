(this["webpackJsonptext-convert-case"]=this["webpackJsonptext-convert-case"]||[]).push([[0],{91:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(16),c=a.n(n),l=(a(91),a(81)),i=a(111),o=a(112),h=a(110),j=a(113),d=a(114),x=a(82),p=a(102),b=a(103),O=a(64),m=a(115),y=a(104),u=a(105),g=a(106),f=a(40),w=a(32),C=a(107),v=a(76),T=a(108),P=a(78),k=a(77),A=a(109),E=a(80),S=function(e){try{var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),E.b.success("Copied !")}catch(a){E.b.error(a)}},z=function(e){var t=document.createElement("a"),a=new Blob([e],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download="TextConvertCase.txt",document.body.appendChild(t),t.click()},I=function(e){return(e.toLowerCase()+"").replace(/^(\S)|\s+(\S)/g,(function(e){return e.toUpperCase()})).replace(/\(([A-Za-z])/g,(function(e){return e.toUpperCase()}))},N=function(e){return(e=(e=I(e)).replace(/\b(A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Da|Do|Das|Dos|As|Os|O|E|Em|De|Vs?\\.?|Via)\b/g,(function(e){return e.toLowerCase()}))).replace(/(?:([\\.\\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|da|do|de|das|dos|e|em|as|os|vs?\\.?|via)/g,I)},_=function(e){e=e.toLowerCase();for(var t="",a=!0,r=0;r<e.length;r++){var s=e.charAt(r);/\.|\\!|\?|\n|\r/.test(s)?a=!0:""!=s.trim()&&1==a&&(s=s.toUpperCase(),a=!1),t+=s}return t},L=a(1),F=i.a.Header,U=i.a.Content,H=i.a.Footer,D=o.a.TextArea,B=h.a.Title;function R(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(i.a,{style:{minHeight:"100vh"},children:[Object(L.jsx)(F,{style:{height:"50px"},children:Object(L.jsxs)(j.a,{slign:"middle",justify:"center",children:[Object(L.jsx)(B,{level:2,style:{color:"#1890ff",marginTop:"5px"},children:"T"}),Object(L.jsx)(B,{level:2,style:{color:"white",marginTop:"5px"},children:"ext"}),Object(L.jsx)(B,{level:2,style:{color:"#1890ff",marginTop:"5px"},children:"C"}),Object(L.jsx)(B,{level:2,style:{color:"white",marginTop:"5px"},children:"onvert"}),Object(L.jsx)(B,{level:2,style:{color:"#1890ff",marginTop:"5px"},children:"C"}),Object(L.jsx)(B,{level:2,style:{color:"white",marginTop:"5px"},children:"ase"})]})}),Object(L.jsx)(U,{className:"site-layout",children:Object(L.jsxs)("div",{className:"site-layout-background",style:{padding:20},children:[Object(L.jsx)(h.a.Title,{level:5,children:"Did you left the caps lock on accidentally and typed something, but can't be bothered to start again and retype it all?"}),Object(L.jsx)(h.a.Text,{children:"Simply enter your text and choose the case you want to convert it to."}),Object(L.jsxs)(j.a,{gutter:[8,8],justify:"end",style:{marginTop:"10px"},children:[Object(L.jsx)(D,{rows:4,value:a,allowClear:!0,onChange:function(e){var t=e.target.value;s(t)}}),Object(L.jsx)(j.a,{children:Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(){return S(a)},children:"Copy to clipboard"})," ",Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(){return z(a)},children:"Download"})," "]})})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(j.a,{gutter:[8,8],justify:"center",align:"middle",children:[Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(b.a)(a))},children:"camelCase"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(O.a)(a))},children:"PascalCase"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(I(a))},children:"Capital Case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(m.a)(a))},children:"Header-Case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(N(a))},children:"Title Case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(y.a)(a))},children:"path/case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(u.a)(a))},children:"snake_case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(g.a)(a))},children:"param-case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(f.a)(a))},children:"dot.case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(w.a)(a))},children:"no case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(C.a)(a))},children:"CONSTANT_CASE"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(v.a)(a))},children:"lower case"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(T.a)(a))},children:"lOWER CASE FIRST"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(P.a)(a))},children:"UPPER CASE"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(k.a)(a))},children:"Upper case first"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(Object(A.a)(a))},children:"sWaP cAsE"})," "]}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(x.a,{size:"small",type:"primary",ghost:!0,onClick:function(e){return s(_(a))},children:"Sentence Case"})," "]})]})]})}),Object(L.jsxs)(H,{style:{textAlign:"center"},children:["App \xa92021 Created by"," ",Object(L.jsx)("a",{href:"https://github.com/BradHick",target:"_blank",rel:"noopener noreferrer",children:"Brad Hick"})]})]}),Object(L.jsxs)(j.a,{justify:"start",style:{padding:"20px"},children:[Object(L.jsx)(B,{level:3,children:"Welcome to Text Convert Case Online Tool"}),Object(L.jsx)(h.a.Text,{children:"A very handy and useful text tool online, where you can change between lower case and upper case letters, where you can freely transform your text. Explore the options below:"}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Sentence Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The sentence case converter allow you to paste any text you\u2019d like, and it will automatically transform it to a fully formed structured sentence."}),Object(L.jsx)(h.a.Paragraph,{children:"It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i\u2019s into I\u2019s. Every letter after a full stop will get converted into an upper case letter."}),Object(L.jsx)(h.a.Paragraph,{children:"Note: it won\u2019t, however, capitalize names or places."}),Object(L.jsx)(h.a.Paragraph,{children:'This is an example of sentence case. Note the upper letter "N" after the dot.'})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Lower Case"}),Object(L.jsx)(h.a.Paragraph,{children:"If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the \u2018lower case\u2019 button."}),Object(L.jsx)(h.a.Paragraph,{children:"this is an example of lower case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Upper Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters)."}),Object(L.jsx)(h.a.Paragraph,{children:"To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE button."}),Object(L.jsx)(h.a.Paragraph,{children:"THIS IS AN EXAMPLE OF UPPER CASE."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Upper Case First"}),Object(L.jsx)(h.a.Paragraph,{children:"The upper case first transformer will take any text that you have and will generate the first letter into upper case."}),Object(L.jsx)(h.a.Paragraph,{children:"To do this, you simply have to select the text that you need changing and pasting into the box above and then select the Upper case first button."}),Object(L.jsx)(h.a.Paragraph,{children:"This is an example of upper case fisrt case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Lower Case First"}),Object(L.jsx)(h.a.Paragraph,{children:"The lower case first transformer will take any text that you have and will generate the first letter into lower case."}),Object(L.jsx)(h.a.Paragraph,{children:"To do this, you simply have to select the text that you need changing and pasting into the box above and then select the lower case first button."}),Object(L.jsx)(h.a.Paragraph,{children:"This is an example of lower case fisrt case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Camel Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The camel case transformer will take any text that you have and will generate in the format camel case (like JSON)."}),Object(L.jsx)(h.a.Paragraph,{children:"thisIsAnExampleOfCamelCase."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Pascal Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The pascal case transformer will take any text that you have and will generate in the format pascal case."}),Object(L.jsx)(h.a.Paragraph,{children:"ThisIsAnExampleOfPascalCase."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Header Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The header case transformer will take any text that you have and will generate in the format header case."}),Object(L.jsx)(h.a.Paragraph,{children:"This-Is-An-Example-Of-Header-Case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Path Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The path case transformer will take any text that you have and will generate in the format path case (like a directory path)."}),Object(L.jsx)(h.a.Paragraph,{children:"this/is/an/example/of/path/case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Snake Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The snake case transformer will take any text that you have and will generate in the format snake case."}),Object(L.jsx)(h.a.Paragraph,{children:"this_is_an_example_of_snake_case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Param Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The param case transformer will take any text that you have and will generate in the format param case."}),Object(L.jsx)(h.a.Paragraph,{children:"this-is-an-example-of-param-case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Constant Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The constant case transformer will take any text that you have and will generate in the format constant case."}),Object(L.jsx)(h.a.Paragraph,{children:"THIS_IS_AN_EXAMPLE_OF_CONSTANT_CASE"})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"No Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The no case transformer will take any text that you have and will generate with no case."}),Object(L.jsx)(h.a.Paragraph,{children:"this is an example of no case"})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Dot Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The dot case transformer will take any text that you have and will generate in the format dot case."}),Object(L.jsx)(h.a.Paragraph,{children:"this.is.an.example.of.dot.case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Capital Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The capital case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones."}),Object(L.jsx)(h.a.Paragraph,{children:"Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capital Case button."}),Object(L.jsx)(h.a.Paragraph,{children:"This Is An Example Of Capital Case."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Swap Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The swap case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word."}),Object(L.jsx)(h.a.Paragraph,{children:"tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE."})]}),Object(L.jsx)(p.a,{style:{margin:"20px"}}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(B,{level:4,children:"Title Case"}),Object(L.jsx)(h.a.Paragraph,{children:"The title case converter is perfect for those who are a bit unsure on how to title an upcoming essay. It essentially ensures the correct letters are capitalized within the context of a title. Words such as \u201can\u201d will be left all in lower case and words that are important will be converted such as \u201cTitle\u201d."}),Object(L.jsx)(h.a.Paragraph,{children:"This Is an Example of Title Case."})]})]})]})}var W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))};a(98);c.a.render(Object(L.jsx)(s.a.StrictMode,{children:Object(L.jsx)(R,{})}),document.getElementById("root")),W()}},[[99,1,2]]]);
//# sourceMappingURL=main.8538cc19.chunk.js.map