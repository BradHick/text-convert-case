(this["webpackJsonptext-convert-case"]=this["webpackJsonptext-convert-case"]||[]).push([[0],{91:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(16),c=a.n(n),l=(a(91),a(81)),i=a(111),o=a(112),h=a(110),j=a(113),p=a(114),d=a(82),x=a(102),b=a(103),O=a(64),y=a(115),m=a(104),u=a(105),g=a(106),f=a(40),w=a(32),C=a(107),v=a(76),P=a(108),T=a(78),k=a(77),S=a(109),z=a(80),A=function(e){try{var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),z.b.success("Copied !")}catch(a){z.b.error(a)}},E=function(e){var t=document.createElement("a"),a=new Blob([e],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download="TextConvertCase.txt",document.body.appendChild(t),t.click()},I=function(e){return(e.toLowerCase()+"").replace(/^(\S)|\s+(\S)/g,(function(e){return e.toUpperCase()})).replace(/\(([A-Za-z])/g,(function(e){return e.toUpperCase()}))},_=function(e){return(e=(e=I(e)).replace(/\b(A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Da|Do|Das|Dos|As|Os|O|E|Em|De|Vs?\\.?|Via)\b/g,(function(e){return e.toLowerCase()}))).replace(/(?:([\\.\\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|da|do|de|das|dos|e|em|as|os|vs?\\.?|via)/g,I)},B=function(e){e=e.toLowerCase();for(var t="",a=!0,r=0;r<e.length;r++){var s=e.charAt(r);/\.|\\!|\?|\n|\r/.test(s)?a=!0:""!=s.trim()&&1==a&&(s=s.toUpperCase(),a=!1),t+=s}return t},N=a(1),L=i.a.Header,F=i.a.Content,U=i.a.Footer,H=o.a.TextArea,D=h.a.Title;function R(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){var e=document.createElement("script");e.async=!0,e.setAttribute("data-ad-client","ca-pub-9002113341910262"),e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",document.head.appendChild(e)}),[]),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(i.a,{children:[Object(N.jsx)(L,{style:{height:"35px"},children:Object(N.jsxs)(j.a,{slign:"middle",justify:"center",children:[Object(N.jsx)(D,{level:2,style:{color:"#1890ff",marginTop:"0px",marginBottom:"0px"},children:"T"}),Object(N.jsx)(D,{level:2,style:{color:"white",marginTop:"0px",marginBottom:"0px"},children:"ext"}),Object(N.jsx)(D,{level:2,style:{color:"#1890ff",marginTop:"0px",marginBottom:"0px"},children:"C"}),Object(N.jsx)(D,{level:2,style:{color:"white",marginTop:"0px",marginBottom:"0px"},children:"onvert"}),Object(N.jsx)(D,{level:2,style:{color:"#1890ff",marginTop:"0px",marginBottom:"0px"},children:"C"}),Object(N.jsx)(D,{level:2,style:{color:"white",marginTop:"0px",marginBottom:"0px"},children:"ase"})]})}),Object(N.jsxs)(F,{className:"site-layout",style:{minHeight:"100vh"},children:[Object(N.jsxs)("div",{className:"site-layout-background",style:{padding:"10px 20px"},children:[Object(N.jsx)(h.a.Paragraph,{strong:!0,style:{marginBottom:"2px"},children:"Did you left the caps lock on accidentally and typed something, but can't be bothered to start again and retype it all?"}),Object(N.jsx)(h.a.Text,{children:"Simply enter your text and choose the case you want to convert it to."}),Object(N.jsxs)(j.a,{gutter:[8,8],justify:"end",style:{marginTop:"10px"},children:[Object(N.jsx)(H,{rows:4,value:a,allowClear:!0,onChange:function(e){var t=e.target.value;s(t)}}),Object(N.jsx)(j.a,{children:Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(){return A(a)},children:"Copy to clipboard"})," ",Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(){return E(a)},children:"Download"})," "]})})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(j.a,{gutter:[8,8],justify:"center",align:"middle",children:[Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(b.a)(a))},children:"camelCase"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(O.a)(a))},children:"PascalCase"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(I(a))},children:"Capital Case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(y.a)(a))},children:"Header-Case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(_(a))},children:"Title Case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(m.a)(a))},children:"path/case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(u.a)(a))},children:"snake_case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(g.a)(a))},children:"param-case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(f.a)(a))},children:"dot.case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(w.a)(a))},children:"no case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(C.a)(a))},children:"CONSTANT_CASE"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(v.a)(a))},children:"lower case"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(P.a)(a))},children:"lOWER CASE FIRST"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(T.a)(a))},children:"UPPER CASE"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(k.a)(a))},children:"Upper case first"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(Object(S.a)(a))},children:"sWaP cAsE"})," "]}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(d.a,{size:"small",type:"primary",ghost:!0,style:{fontSize:"12px"},onClick:function(e){return s(B(a))},children:"Sentence Case"})," "]})]})]}),Object(N.jsxs)(j.a,{justify:"start",style:{padding:"20px"},children:[Object(N.jsx)(D,{level:3,children:"Welcome to Text Convert Case Online Tool"}),Object(N.jsx)(h.a.Text,{children:"A very handy and useful text tool online, where you can change between lower case and upper case letters, where you can freely transform your text. Explore the options below:"}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Sentence Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The sentence case converter allow you to paste any text you\u2019d like, and it will automatically transform it to a fully formed structured sentence."}),Object(N.jsx)(h.a.Paragraph,{children:"It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i\u2019s into I\u2019s. Every letter after a full stop will get converted into an upper case letter."}),Object(N.jsx)(h.a.Paragraph,{children:"Note: it won\u2019t, however, capitalize names or places."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:'This is an example of sentence case. Note the upper letter "N" after the dot.'})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Lower Case"}),Object(N.jsx)(h.a.Paragraph,{children:"If you are wondering how to uncapitalize text (like turn off the Caps Lock button), this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the \u2018lower case\u2019 button."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"this is an example of lower case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Upper Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters)."}),Object(N.jsx)(h.a.Paragraph,{children:"To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE button."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"THIS IS AN EXAMPLE OF UPPER CASE."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Upper Case First"}),Object(N.jsx)(h.a.Paragraph,{children:"Transformer will take any text that you have and will generate the first letter into upper case, the upper case first will do this for you."}),Object(N.jsx)(h.a.Paragraph,{children:"To do this, you simply have to select the text that you need changing and pasting into the box above and then press the Upper case first button."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"This is an example of upper case fisrt case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Lower Case First"}),Object(N.jsx)(h.a.Paragraph,{children:"The lower case first transformer will take any text that you have and will generate the first letter into lower case."}),Object(N.jsx)(h.a.Paragraph,{children:"To do this, you simply have to paste the text that you want to change into the box above and then press the lower case first button."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"this is an example of lower case fisrt case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Camel Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The camel case transformer will take any text that you have and will generate in the format camel case (like JSON)."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"thisIsAnExampleOfCamelCase."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Pascal Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The pascal case transformer will take any text that you have and will generate in the format pascal case."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"ThisIsAnExampleOfPascalCase."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Header Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The header case transformer will take any text that you have and will generate in the format header case."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"This-Is-An-Example-Of-Header-Case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Path Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The path case transformer will take any text that you have and will generate in the format path case (like a directory path)."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"this/is/an/example/of/path/case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Snake Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The snake case transformer will take any text that you have and will generate in the format snake case."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"this_is_an_example_of_snake_case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Param Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The param case transformer will take any text that you have and will generate in the format param case."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"this-is-an-example-of-param-case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Constant Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The constant case transformer will take any text that you have and will generate in the format constant case."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"THIS_IS_AN_EXAMPLE_OF_CONSTANT_CASE"})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"No Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The no case transformer will take any text that you have and will generate with no case."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"this is an example of no case"})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Dot Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The dot case transformer will take any text that you have and will generate in the format dot case."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"this.is.an.example.of.dot.case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Capital Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The capital case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones."}),Object(N.jsx)(h.a.Paragraph,{children:"Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capital Case button."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"This Is An Example Of Capital Case."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Swap Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The swap case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"tHiS Is aN ExAmPlE Of sWaP CaSe."})]}),Object(N.jsx)(x.a,{style:{margin:"20px"}}),Object(N.jsxs)(p.a,{children:[Object(N.jsx)(D,{level:4,children:"Title Case"}),Object(N.jsx)(h.a.Paragraph,{children:"The title case converter is perfect for those who are a bit unsure on how to title an upcoming essay. It essentially ensures the correct letters are capitalized within the context of a title. Words such as \u201can\u201d will be left all in lower case and words that are important will be converted such as \u201cTitle\u201d."}),Object(N.jsx)(h.a.Paragraph,{code:!0,children:"This Is an Example of Title Case."})]})]})]}),Object(N.jsxs)(U,{style:{textAlign:"center",padding:0},children:["App \xa92021 Created by"," ",Object(N.jsx)("a",{href:"https://github.com/BradHick",target:"_blank",rel:"noopener noreferrer",children:"Brad Hick"})]})]})})}var W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))};a(98);c.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(R,{})}),document.getElementById("root")),W()}},[[99,1,2]]]);
//# sourceMappingURL=main.95dd896c.chunk.js.map