(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(42),l=a.n(n),r=(a(89),a(3)),i=a.p+"static/media/card-wars-logo-lg.05dc5088.png",d=a(24),o=a.n(d),j=a(9),b=a(1);function x(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){o.a.get("http://localhost:3001/api/public/leaderboard/20").then((function(e){s(e.data)}))}),[]);var n=a.map((function(e,t){return Object(b.jsxs)("tr",{className:"text-left  divide-x-2 divide-yellow-500",children:[Object(b.jsx)("td",{className:"px-4 py-3 ",children:e.username}),Object(b.jsx)("td",{className:"px-4 py-3 ",children:e.gamesWon}),Object(b.jsx)("td",{className:"px-4 py-3 ",children:e.gamesLost}),Object(b.jsx)("td",{className:"px-4 py-3 ",children:e.cardsDrawn})]},t)}));return Object(b.jsxs)("div",{className:"bg-yellow-600 w-full h-full",children:[Object(b.jsx)("div",{className:"w-full h-full flex ",children:Object(b.jsx)("img",{className:"m-auto object-contain",src:i,alt:"Logo"})}),Object(b.jsx)("div",{className:"bg-yellow-600",children:Object(b.jsxs)("div",{className:"text-center bg-yellow-600",children:[Object(b.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[Object(b.jsxs)("span",{className:"block text-gray-200 xl:inline",children:["Create an account ","&"," "]})," ",Object(b.jsx)("span",{className:"block text-indigo-600 xl:inline",children:"start playing"})]}),Object(b.jsxs)("div",{className:"mt-5 sm:mt-8 sm:flex justify-center bg-yellow-600",children:[Object(b.jsx)("div",{className:"mx-10 sm:mx-10 rounded-md shadow",children:Object(b.jsx)(j.b,{to:"/signup",children:Object(b.jsx)("button",{className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",children:"Create Account"})})}),Object(b.jsx)("div",{className:"mx-10 sm:mx-10 sm:mt-0 sm:ml-3",children:Object(b.jsx)(j.b,{to:"/signin",children:Object(b.jsx)("button",{className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",children:"Log In"})})})]})]})}),Object(b.jsxs)("div",{className:"w-full h-full flex flex-col bg-yellow-600 overflow-x-hidden pt-40",children:[Object(b.jsx)("p",{className:"text-lg text-center text-white font-bold m-5",children:"Leaderboard"}),Object(b.jsx)("table",{className:"rounded-t-lg m-5 w-5/6 mx-auto text-gray-50",children:Object(b.jsxs)("tbody",{className:"divide-y-2 divide-yellow-500",children:[Object(b.jsxs)("tr",{className:"text-left border-b-4 border-yellow-400 divide-x-2 divide-yellow-500",children:[Object(b.jsx)("th",{className:"px-4 py-3 text-white",children:"Username"}),Object(b.jsx)("th",{className:"px-4 py-3 text-white",children:"Games Won"}),Object(b.jsx)("th",{className:"px-4 py-3 text-white",children:"Games Lost"}),Object(b.jsx)("th",{className:"px-4 py-3 text-white",children:"Cards Drawn"})]}),n]})})]})]})}var m=a(5),u=a(26),h=a(43),g=a.n(h);function p(e){var t=e.setMsg,a=e.obj,c=e.sendMsg,s=e.user,n=function(){c(),t(""),document.getElementById("chatInput").value="";var e=document.getElementById("scroll-chat-div");e.scrollTop=e.scrollHeight},l=a.map((function(e,t){return Object(b.jsxs)("div",{className:"flex flex-col items-start my-4 px-1",children:[Object(b.jsx)("div",{className:"h-5/6 bg-white ".concat(s===e.from?"bg-blue-300":"bg-yellow-300"," ml-2 p-1 mt-2 rounded-tl-lg  rounded-tr-lg  rounded-br-lg break-words "),children:Object(b.jsx)("p",{children:e.message})}),Object(b.jsx)("div",{className:"h-1/6 text-grey-800 px-1 text-end",children:Object(b.jsx)("p",{children:e.from})})]},t)}));return Object(b.jsxs)("div",{className:"p-2 mb-10  mx-auto h-full max-h-96",children:[Object(b.jsx)("div",{id:"scroll-chat-div",className:"h-full bg-gray-100 overflow-y-scroll overflow-x-hidden",children:l}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("input",{id:"chatInput",onKeyDown:function(e){"Enter"===e.key&&(n(),window.scrollTo(0,document.body.scrollHeight))},onChange:function(e){return t(e.target.value)},type:"text",className:"w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"}),Object(b.jsx)("button",{onClick:function(){return n()},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Send"})]})]})}function f(e){var t=e.title,a=e.stat;return Object(b.jsxs)("div",{className:"max-w-sm flex flex-col bg-gray-100 m-1 py-2 mx-auto",children:[Object(b.jsxs)("p",{className:"text-base py-1 text-center text-gray-700 break-all",children:[t,":"]}),Object(b.jsx)("p",{className:"text-2xl  text-center text-gray-900 break-all",children:a})]})}var O=Object(c.createContext)({loggedIn:!1,data:null}),w=a(7),v=new u.a;function y(){var e=Object(w.g)().url,t=Object(c.useState)(!1),a=Object(r.a)(t,2),s=a[0],n=a[1],l=Object(c.useState)(null),i=Object(r.a)(l,2),d=i[0],x=i[1],u=Object(c.useState)(),h=Object(r.a)(u,2),y=h[0],N=h[1],k=Object(c.useState)(),C=Object(r.a)(k,2),S=C[0],E=C[1],I=Object(c.useState)(null),L=Object(r.a)(I,2),M=L[0],P=L[1],D=Object(c.useState)(null),T=Object(r.a)(D,2),A=T[0],q=T[1],_=Object(c.useState)([{message:"Welcome to Card Wars! Chat with others in the lobby here! To test this chat you can open a new incognito tab and chat with yourself! It works! ",from:"AI"}]),W=Object(r.a)(_,2),U=W[0],F=W[1],G=Object(c.useState)({}),z=Object(r.a)(G,2),B=z[0],R=z[1],Y=Object(c.useContext)(O).setUserDataGlobal;Object(c.useEffect)((function(){var e=v.get("token");e&&(x(e),o.a.get("http://localhost:3001/api/game/start",{headers:{"auth-token":e}}).then((function(e){R(e.data),N(e.data.username),E(e.data.id),n(!0),Y({loggedIn:!0,data:e.data})})).catch((function(e){console.log(e),n(!1)})))}),[]),Object(c.useEffect)((function(){if(y&&S)return M||P(g()("http://localhost:3001",{auth:{token:d},query:{userID:"".concat(S),username:"".concat(y)}})),function(){M&&(M.emit("disconnected",y),M.off())}}),[M,y,S,d]),Object(c.useEffect)((function(){M&&(M.on("connection"),M.emit("someoneConnected",y),M.on("message",(function(e){F((function(t){return[].concat(Object(m.a)(t),[e])}));var t=document.getElementById("scroll-chat-div");t.scrollTop=t.scrollHeight})),M.on("someoneConnected",(function(e){console.log(e)})))}),[M,y]);var H=function(){M&&A&&""!==A&&(M.emit("message",{message:A,from:y}),F((function(e){return[].concat(Object(m.a)(e),[{message:A,from:y}])})))};return Object(b.jsx)("div",{children:s?Object(b.jsxs)("div",{className:"container mx-auto h-full",children:[Object(b.jsxs)("p",{className:"text-5xl text-center m-10 break-normal",children:["Hello ",y]}),Object(b.jsx)("div",{className:" max-w-3xl m-auto px-20 my-20",children:Object(b.jsx)(j.b,{to:"".concat(e,"/play"),onClick:function(){M&&M.emit("game-started",{id:S,gamesPlayed:B.gamesPlayed})},children:Object(b.jsx)("button",{className:"bg-red-500 w-full h-full hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded",children:"PLAY"})})}),Object(b.jsxs)("div",{className:"w-full grid grid-cols-1 md:grid-cols-3 place-content-center",children:[Object(b.jsxs)("div",{className:"w-full",children:[" ",Object(b.jsx)(p,{setMsg:q,obj:U,user:y,sendMsg:H})," "]}),Object(b.jsxs)("div",{className:"m-1",children:[Object(b.jsx)(f,{title:"Username",stat:B.username}),Object(b.jsx)(f,{title:"Account Age (in Minutes)",stat:new Date((new Date).getTime()-new Date(B.date).getTime()).getMinutes()}),Object(b.jsx)(f,{title:"Id",stat:B.id}),Object(b.jsx)(f,{title:"Games Played",stat:B.gamesPlayed}),Object(b.jsx)(f,{title:"Games Lost",stat:B.gamesLost}),Object(b.jsx)(f,{title:"Games Won",stat:B.gamesWon}),Object(b.jsx)(f,{title:"CardsDrawn",stat:B.cardsDrawn})]}),Object(b.jsxs)("div",{className:"h-4/6 overflow-x-hidden overflow-y-scroll bg-gray-100 p-2 m-1",children:[Object(b.jsx)("p",{className:"text-xl break-all p-1",children:"The goal is to be the first player to win all 52 cards"}),Object(b.jsx)("p",{className:"text-2xl break-all p-1",children:"THE DEAL"}),Object(b.jsx)("p",{className:"text-base break-all p-1",children:" The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them."}),Object(b.jsx)("p",{className:"text-2xl  break-all p-1",children:"THE PLAY"}),Object(b.jsx)("p",{className:"text-base break-all p-1",children:"Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack."}),Object(b.jsx)("p",{className:"text-base break-all p-1",children:" If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on."}),Object(b.jsx)("p",{className:"text-2xl  break-all p-1",children:"HOW TO KEEP SCORE"}),Object(b.jsx)("p",{className:"text-base break-all p-1",children:"The game ends when one player has won all the cards."})]})]})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"text-4xl text-center",children:"Please Login"}),Object(b.jsx)("p",{className:"text-4xl text-center",children:"If you don't have an account, create one"})]})})}function N(){return Object(b.jsx)("div",{className:"w-full h-full bg-yellow-600"})}function k(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"h-full w-full bg-yellow-700 absolute overflow-hidden",children:[Object(b.jsx)("p",{className:"absolute  text-5xl text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center",style:{top:"30%",left:"50%"},children:"ERROR: 404"}),Object(b.jsx)("p",{className:"absolute  text-4xl text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center",style:{top:"40%",left:"50%"},children:"Try again, you went the wrong way!"})]})})}var C=new u.a;function S(){var e=Object(c.useState)(),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(),l=Object(r.a)(n,2),i=l[0],d=l[1],j=Object(c.useState)(""),x=Object(r.a)(j,2),m=x[0],u=x[1],h=Object(w.f)();return Object(b.jsx)("div",{className:"container flex flex-col h-screen mx-auto",children:Object(b.jsxs)("div",{className:"m-auto",children:[Object(b.jsxs)("div",{className:"sm:shadow p-10 sm:border-2 border-opacity-50",children:[Object(b.jsx)("p",{className:"text-center mb-6 text-3xl",children:"Log In"}),Object(b.jsxs)("form",{className:"max-w-md m-0 p-0",id:"user-form",children:[Object(b.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(b.jsx)("div",{className:"md:w-1/3 ",children:Object(b.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-username text-xs",children:"Username"})}),Object(b.jsx)("div",{className:"md:w-2/3",children:Object(b.jsx)("input",{className:"shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300",id:"inline-username",type:"text",placeholder:"username",autoComplete:"username",required:!0,onChange:function(e){return s(e.target.value)}})})]}),Object(b.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(b.jsx)("div",{className:"md:w-1/3",children:Object(b.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-password  text-xs",children:"Password"})}),Object(b.jsx)("div",{className:"md:w-2/3",children:Object(b.jsx)("input",{className:"shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300",id:"inline-password",type:"password",placeholder:"**********",pattern:"^\\S{6,}$",autoComplete:"current-password",required:!0,onChange:function(e){return d(e.target.value)}})})]}),Object(b.jsxs)("div",{className:"md:flex md:items-center",children:[Object(b.jsx)("div",{className:"md:w-1/3"}),Object(b.jsx)("div",{className:"md:w-2/3",children:Object(b.jsx)("button",{className:"disabled:bg-indigo-100 shadow-md bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",id:"sign-up-btn",type:"button",onClick:function(e){if(u("pending"),!a||!i)return u("Username & Password required");o.a.post("http://localhost:3001/api/user/login",{username:a,password:i}).then((function(e){var t=e.headers["auth-token"];console.log("Log In Request: ",e.data),u("success"),C.set("token",t),h.replace("/game")})).catch((function(e){console.log(e.response),e.response&&u(e.response.data)}))},children:"Sign In"})})]})]})]}),Object(b.jsx)("p",{className:"text-center text-indigo-400 my-6 text-xs",children:m})]})})}var E=a(4);function I(e){var t=e.className;return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"})})}function L(e){var t=e.className;return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})}function M(){var e=Object(c.useState)(),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(),l=Object(r.a)(n,2),i=l[0],d=l[1],x=Object(c.useState)(0),m=Object(r.a)(x,2),u=m[0],h=m[1],g=Object(c.useState)(),p=Object(r.a)(g,2),f=p[0],O=p[1],w=Object(c.useState)(!1),v=Object(r.a)(w,2),y=v[0],N=v[1],k=Object(c.useState)({length:!1,contains_num:!1,contains_let:!1,matches:!1,username_filled:!1}),C=Object(r.a)(k,2),S=C[0],M=C[1];Object(c.useEffect)((function(){var e=new AbortController;return a&&a.length>3?M((function(e){return Object(E.a)(Object(E.a)({},e),{},{username_filled:!0})})):M((function(e){return Object(E.a)(Object(E.a)({},e),{},{username_filled:!1})})),M(i===f&&i?function(e){return Object(E.a)(Object(E.a)({},e),{},{matches:!0})}:function(e){return Object(E.a)(Object(E.a)({},e),{},{matches:!1})}),i&&i.length>8?M((function(e){return Object(E.a)(Object(E.a)({},e),{},{length:!0})})):M((function(e){return Object(E.a)(Object(E.a)({},e),{},{length:!1})})),i&&/\d/.test(i)?M((function(e){return Object(E.a)(Object(E.a)({},e),{},{contains_num:!0})})):M((function(e){return Object(E.a)(Object(E.a)({},e),{},{contains_num:!1})})),i&&/\w/.test(i)?M((function(e){return Object(E.a)(Object(E.a)({},e),{},{contains_let:!0})})):M((function(e){return Object(E.a)(Object(E.a)({},e),{},{contains_let:!1})})),function(){return e.abort()}}),[i,f,a]),Object(c.useEffect)((function(){S.username_filled&&S.matches&&S.length&&S.contains_let&&S.contains_num&&1===u?N(!0):N(!1)}),[S,u]),Object(c.useEffect)((function(){if(a){console.log("run");var e=setTimeout((function(){o.a.post("http://localhost:3001/api/user/username-availability",{username:a}).then((function(e){console.log("User Exists Request: ",e.data),e.data.userExist?e.data.userExist?h(2):h(0):h(1)})).catch(console.log)}),300);return function(){return clearInterval(e)}}h(0)}),[u,a]);var P=function(e){return e?Object(b.jsx)(I,{className:"w-1/4 h-4 fill-current text-green-500"}):Object(b.jsx)(L,{className:"w-1/4 h-4 fill-current text-red-500"})};return Object(b.jsx)("div",{className:"flex sm:h-screen m-auto",children:Object(b.jsxs)("div",{className:"m-auto sm:shadow sm:border-2 border-opacity-50  ",children:[Object(b.jsxs)("div",{className:"p-10 ",children:[Object(b.jsx)("p",{className:"text-center mb-8 text-3xl",children:"Create Account"}),Object(b.jsxs)("form",{className:"max-w-md m-0 p-0",id:"user-form",children:[Object(b.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(b.jsx)("div",{className:"md:w-1/3 ",children:Object(b.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-username text-xs",children:"Username"})}),Object(b.jsxs)("div",{className:"md:w-2/3",children:[Object(b.jsx)("input",{className:"shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300",id:"inline-username",type:"text",placeholder:"username",autoComplete:"username",required:!0,onChange:function(e){return s(e.target.value)}}),1===u?Object(b.jsx)("small",{className:"text-green-500",children:"available"}):2===u?Object(b.jsx)("small",{className:"text-red-500",children:"username taken"}):null]})]}),Object(b.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(b.jsx)("div",{className:"md:w-1/3",children:Object(b.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-password  text-xs",children:"Password"})}),Object(b.jsx)("div",{className:"md:w-2/3",children:Object(b.jsx)("input",{type:"password",name:"password",className:"shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300",id:"inline-password",placeholder:"**********",pattern:"^\\S{6,}$",autoComplete:"new-password",required:!0,onChange:function(e){return d(e.target.value)}})})]}),Object(b.jsxs)("div",{className:"md:flex md:items-center mb-6",children:[Object(b.jsx)("div",{className:"md:w-1/3",children:Object(b.jsx)("label",{className:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",htmlFor:"inline-password-check",children:"Password Confirm"})}),Object(b.jsx)("div",{className:"md:w-2/3",children:Object(b.jsx)("input",{className:"shadow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-300",id:"inline-password-check",type:"password",placeholder:"**********",required:!0,autoComplete:"new-password",onChange:function(e){return O(e.target.value)}})})]}),Object(b.jsxs)("div",{className:"md:flex md:items-center",children:[Object(b.jsx)("div",{className:"md:w-1/3"}),Object(b.jsx)("div",{className:"md:w-2/3",children:Object(b.jsx)(j.b,{to:"/signin",children:Object(b.jsx)("button",{disabled:!y,className:"d-block-inline shadow-md bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 disabled:bg-indigo-100 rounded ",id:"sign-up-btn",type:"submit",onClick:function(){o.a.post("http://localhost:3001/api/user/register",{username:a,password:i}).then((function(e){console.log("Sing Up Request: ",e.data)}))},children:"Sign Up"})})})]})]})]}),Object(b.jsxs)("div",{className:" p-10  "+(y?"bg-green-50":"bg-red-50"),children:[Object(b.jsx)("p",{className:"text-center text-xl",children:"Requirements"}),Object(b.jsxs)("div",{className:"flex  flex-col mt-4 content-center",children:[Object(b.jsxs)("div",{className:"flex items-center my-2",children:[P(S.username_filled),Object(b.jsx)("p",{className:"w-3/4",children:"Username must be more than 3 characters"})]}),Object(b.jsxs)("div",{className:"flex items-center my-2",children:[P(S.length),Object(b.jsx)("p",{className:"w-3/4",children:"Contains more than 8 characters"})]}),Object(b.jsxs)("div",{className:"flex items-center my-2",children:[P(S.contains_num),Object(b.jsx)("p",{className:"w-3/4",children:"Contain at least 1 number"})]}),Object(b.jsxs)("div",{className:"flex items-center my-2",children:[P(S.contains_let),Object(b.jsx)("p",{className:"w-3/4",children:"Contains Letters"})]}),Object(b.jsxs)("div",{className:"flex items-center my-2",children:[P(S.matches),Object(b.jsx)("p",{className:"w-3/4",children:"Passwords should match"})]})]})]})]})})}var P=a.p+"static/media/card-wars-logo-sm.92858b76.png",D=new u.a;function T(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useContext)(O),l=n.userDataGlobal,i=n.setUserDataGlobal,d=function(){s(!a)};Object(c.useEffect)((function(){null!==D.get("token")&&void 0!==D.get("token")&&i({loggedIn:!0,data:null})}),[]);return Object(b.jsxs)("nav",{className:"sticky z-50 top-0 flex items-center flex-wrap bg-yellow-700 p-3",children:[Object(b.jsx)("div",{className:"inline-flex items-center mr-4",children:Object(b.jsx)("img",{src:P,alt:"Card Wars Logo",className:"object-contain h-7 lg:h-10 w-full"})}),Object(b.jsx)("button",{className:" inline-flex p-1 hover:bg-indigo-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none",onClick:d,children:Object(b.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),Object(b.jsx)("div",{className:"".concat(a?"":"hidden","   w-full lg:inline-flex lg:flex-grow lg:w-auto"),children:Object(b.jsxs)("div",{className:"lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-center  flex flex-col lg:h-auto",children:[Object(b.jsx)(j.c,{to:"/",exact:!0,activeClassName:"bg-indigo-900",onClick:d,children:Object(b.jsx)("div",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white ",children:Object(b.jsx)("p",{children:"Home"})})}),Object(b.jsx)(j.c,{to:"/about",activeClassName:"bg-indigo-900",onClick:d,children:Object(b.jsx)("div",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white",children:Object(b.jsx)("p",{children:"About us"})})}),l.loggedIn?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.c,{to:"/game",className:"",replace:!0,onClick:function(){d()},children:Object(b.jsx)("div",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white",children:Object(b.jsx)("p",{children:"Dashboard"})})}),Object(b.jsx)(j.c,{to:"/",className:"",replace:!0,onClick:function(){d(),D.remove("token"),i({loggedIn:!1,data:null})},children:Object(b.jsx)("div",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white",children:Object(b.jsx)("p",{children:"Log Out"})})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.c,{to:"/signin",activeClassName:"bg-indigo-900",onClick:d,children:Object(b.jsx)("div",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white",children:Object(b.jsx)("p",{children:"Sign In"})})}),Object(b.jsx)(j.c,{to:"/signup",activeClassName:"bg-indigo-900",onClick:d,children:Object(b.jsx)("div",{className:"lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-900 hover:text-white",children:Object(b.jsx)("p",{children:"Create Account"})})})]})]})})]})}var A=a(33),q=a.p+"static/media/c-2.a591ea38.jpg",_=a.p+"static/media/c-3.b8d02f3f.jpg",W=a.p+"static/media/c-4.d9aec13d.jpg",U=a.p+"static/media/c-5.4b7b80ef.jpg",F=a.p+"static/media/c-6.21d22ca6.jpg",G=a.p+"static/media/c-7.57c6327b.jpg",z=a.p+"static/media/c-8.82f2eab0.jpg",B=a.p+"static/media/c-9.a33b2daf.jpg",R=a.p+"static/media/c-10.3f203410.jpg",Y=a.p+"static/media/c-j.4c6ce9ce.jpg",H=a.p+"static/media/c-q.bb70bb1e.jpg",Z=a.p+"static/media/c-k.c50303e5.jpg",J=a.p+"static/media/c-a.e758218a.jpg",K=a.p+"static/media/d-2.0745dc1b.jpg",$=a.p+"static/media/d-3.0d4a83d6.jpg",Q=a.p+"static/media/d-4.348a4865.jpg",V=a.p+"static/media/d-5.7839f4bf.jpg",X=a.p+"static/media/d-6.0aba4f3e.jpg",ee=a.p+"static/media/d-7.b3050a4c.jpg",te=a.p+"static/media/d-8.a8f7608b.jpg",ae=a.p+"static/media/d-9.c71f9ba3.jpg",ce=a.p+"static/media/d-10.6415e7fa.jpg",se=a.p+"static/media/d-j.03b6395a.jpg",ne=a.p+"static/media/d-q.b3bd28df.jpg",le=a.p+"static/media/d-k.ebc004a8.jpg",re=a.p+"static/media/d-a.67b46e7b.jpg",ie=[a.p+"static/media/h-2.bd8ce016.jpg",a.p+"static/media/h-3.b38f6257.jpg",a.p+"static/media/h-4.0ebaa054.jpg",a.p+"static/media/h-5.b4d180d0.jpg",a.p+"static/media/h-6.4b30ea04.jpg",a.p+"static/media/h-7.7b69aaea.jpg",a.p+"static/media/h-8.29f7eba6.jpg",a.p+"static/media/h-9.a1ecc8de.jpg",a.p+"static/media/h-10.7a57041a.jpg",a.p+"static/media/h-j.120921a9.jpg",a.p+"static/media/h-q.20ccb810.jpg",a.p+"static/media/h-k.827c6af0.jpg",a.p+"static/media/h-a.e961628c.jpg",K,$,Q,V,X,ee,te,ae,ce,se,ne,le,re,q,_,W,U,F,G,z,B,R,Y,H,Z,J,a.p+"static/media/s-2.0b801aff.jpg",a.p+"static/media/s-3.70e06e0a.jpg",a.p+"static/media/s-4.6f5da9eb.jpg",a.p+"static/media/s-5.7adeced7.jpg",a.p+"static/media/s-6.4c4dc55c.jpg",a.p+"static/media/s-7.85e42e97.jpg",a.p+"static/media/s-8.da929e8b.jpg",a.p+"static/media/s-9.f407c487.jpg",a.p+"static/media/s-10.fdad8dd2.jpg",a.p+"static/media/s-j.3ac345c0.jpg",a.p+"static/media/s-q.2e018c1f.jpg",a.p+"static/media/s-k.116343d6.jpg",a.p+"static/media/s-a.cb76d6e4.jpg"],de=a.p+"static/media/card-back-v2.e6de37b8.jpg";function oe(e){var t=e.flip,a=e.cardId,c=e.pos,s=e.isPlaying,n=Object(A.useSpring)({to:Object(E.a)(Object(E.a)({},c),{},{transform:"translate(-50%, -50%) rotateZ(-10deg)  rotate(".concat(s?60*Math.random()-30:-8,"deg)")})}),l=Object(A.useSpring)({opacity:t?0:1,transform:"perspective(600px) rotateY(".concat(t?0:180,"deg)"),config:{mass:5,tension:500,friction:80}}),r=l.transform,i=l.opacity;return Object(b.jsxs)(A.animated.div,{className:"game-card absolute z-10",style:n,children:[Object(b.jsx)(A.animated.img,{src:ie[a],className:"absolute",style:{opacity:i.to((function(e){return 1-e})),transform:r}}),Object(b.jsx)(A.animated.img,{src:de,className:"absolute",style:{opacity:i,transform:r.to((function(e){return"".concat(e," rotateY(180deg)")}))}})]})}var je=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],be=[26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],xe=new u.a;function me(){var e=Object(c.useState)([].concat(je)),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([].concat(be)),l=Object(r.a)(n,2),i=l[0],d=l[1],o=Object(c.useState)(0),x=Object(r.a)(o,2),u=x[0],h=x[1],p=Object(c.useState)(26),f=Object(r.a)(p,2),w=f[0],v=f[1],y=Object(c.useState)(!1),N=Object(r.a)(y,2),k=N[0],C=N[1],S=Object(c.useState)(0),I=Object(r.a)(S,2),L=I[0],M=I[1],P=Object(c.useState)(null),D=Object(r.a)(P,2),T=D[0],A=D[1],q=Object(c.useState)([]),_=Object(r.a)(q,2),W=_[0],U=_[1],F=Object(c.useState)(0),G=Object(r.a)(F,2),z=G[0],B=G[1],R=Object(c.useState)(0),Y=Object(r.a)(R,2),H=Y[0],Z=Y[1],J=Object(c.useContext)(O).userDataGlobal,K=Object(c.useState)(null),$=Object(r.a)(K,2),Q=$[0],V=$[1],X=Object(c.useRef)({drawsCount:H,gameEnd:z,data:J.data});Object(c.useEffect)((function(){null!==J.data&&null===Q&&V(g()("http://localhost:3001",{auth:{token:xe.get("token")},query:{userID:"".concat(J.data.id),username:"".concat(J.data.username)}}))}),[J,Q]),Object(c.useEffect)((function(){X.current={drawsCount:H,gameEnd:z,data:J.data}}),[H,z,J]),Object(c.useEffect)((function(){return function(){Q&&Q.emit("game-ended",X.current)}}),[Q]),Object(c.useEffect)((function(){if(k){var e=ue(0,a.length-1),t=a[e],c=ue(0,i.length-1),n=i[c];if(v(n),h(t),t>39&&(t-=39),t>=26&&(t-=26),t>=13&&(t-=13),n>=39&&(n-=39),n>=26&&(n-=26),n>=13&&(n-=13),n>t){var l=a;l.splice(e,1),s(Object(m.a)(l));var r=i;r.splice(c,1),d(Object(m.a)(r)),4===L&&(d((function(e){return[].concat(Object(m.a)(e),Object(m.a)(W))})),U([])),A("<"),M(2)}else if(t>n){var o=a;o.splice(e,1),s(Object(m.a)(o));var j=i;j.splice(c,1),d(Object(m.a)(j)),4===L&&(s((function(e){return[].concat(Object(m.a)(e),Object(m.a)(W))})),U([])),A(">"),M(1)}else n===t&&(A("="),M(3));C(!1)}}),[k,a,i,W,L]),Object(c.useEffect)((function(){switch(L){case 1:return s((function(e){return[].concat(Object(m.a)(e),[w,u])})),void M(0);case 2:return d((function(e){return[].concat(Object(m.a)(e),[w,u])})),void M(0);default:return}}),[L,w,u,i,a]),Object(c.useEffect)((function(){if(3===L)if(W.length>=20)M(0);else{var e=[],t=a;e=t.splice(0,8),s(Object(m.a)(t));var c=i;e=e.concat(c.splice(0,8)),d(Object(m.a)(c)),U((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e))})),M(4)}}),[L,w,u,i,a,W]),Object(c.useEffect)((function(){0===a.length&&(B(2),Q&&Q.emit("game-ended",Object(E.a)(Object(E.a)({},X.current),{},{gameEnd:2}))),0===i.length&&(B(1),Q&&Q.emit("game-ended",Object(E.a)(Object(E.a)({},X.current),{},{gameEnd:1})))}),[a,i,u,w,L,Q]);return Object(b.jsx)(b.Fragment,{children:0!==z?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"h-full w-full bg-yellow-700 absolute overflow-hidden",children:[Object(b.jsx)("p",{className:"absolute  text-5xl text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center",style:{top:"25%",left:"50%"},children:"GAME"}),1===z?Object(b.jsx)("p",{className:"absolute bg-red-600 text-5xl p-1 transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center",style:{top:"40%",left:"50%"},children:"You lost"}):Object(b.jsx)("p",{className:"absolute bg-green-600 text-5xl p-1 text-white transform  -translate-y-2/4 -translate-x-2/4 tex-break text-center",style:{top:"40%",left:"50%"},children:"YOU WON!"}),Object(b.jsx)(j.b,{to:"../game",children:Object(b.jsx)("button",{onClick:function(){return C(!k)},className:"absolute transform  -translate-y-2/4 -translate-x-2/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",style:{top:"60%",left:"50%"},children:"Back to dashboard"})})]})}):Object(b.jsxs)("div",{className:"w-full h-full overflow-hidden",children:[Object(b.jsx)("div",{className:"w-full h-5/6 bg-red-100 overflow-hidden",children:Object(b.jsxs)("div",{className:"w-full h-full ".concat("<"===T?"bg-green-50":">"===T?"bg-red-50":"bg-blue-100"," relative transform-gpu "),children:[Object(b.jsx)(oe,{flip:!0,cardId:u,isPlaying:!0,pos:{top:"50%",left:"30%"}}),Object(b.jsx)(oe,{flip:!0,cardId:w,isPlaying:!0,pos:{top:"50%",left:"70%"}}),Object(b.jsx)("p",{className:"absolute ".concat("<"===T?"text-green-500":"text-red-500"," z-20 text-6xl md:text-8xl"),style:{top:"50%",left:"50%",transform:"rotateZ(".concat(ue(-10,10),"deg)  translate(-50%, -50%)")},children:T}),Object(b.jsxs)("p",{className:"absolute bg-green-700 text-white p-1 text-base md:text-xl",style:{top:"78%",left:"10%",transform:"rotateZ(".concat(ue(-10,10),"deg) translate(-50%, -50%) z-20")},children:["You: ",i.length]}),Object(b.jsxs)("p",{className:"absolute bg-red-700 text-white p-1 text-base md:text-xl",style:{top:"22%",left:"80%",transform:"rotateZ(".concat(ue(-10,10),"deg) translate(-50%, -50%) z-20")},children:["AI: ",a.length]}),"="===T?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"absolute bg-red-800 text-white px-1 text-6xl md:text-8xl z-20 scale-in-center ",style:{top:"60%",left:"50%"},children:"WAR"}),Object(b.jsx)("p",{className:"absolute slide-in-elliptic-top-fwd z-20  text-6xl md:text-8xl text-red-500",style:{top:"70%",left:"50%"},children:"-8"}),Object(b.jsx)("p",{className:"absolute slide-in-elliptic-top-fwd  z-20 text-6xl md:text-8xl text-green-500",style:{top:"20%",left:"50%"},children:"-8"})]}):null,a.map((function(e,t){return Object(b.jsx)(oe,{flip:!1,cardId:e,isPlaying:!1,pos:{top:"0%",left:"".concat(2*t,"%")}},t)})),i.map((function(e,t){return Object(b.jsx)(oe,{flip:!1,cardId:e,isPlaying:!1,pos:{top:"100%",left:"".concat(2*t,"%")}},t)}))]})}),Object(b.jsxs)("div",{className:"w-full h-1/6 bg-yellow-100 text-center ",children:[Object(b.jsxs)("div",{className:"w-full h-5/6 grid grid grid-cols-3",children:[Object(b.jsx)("div",{className:"h-full text-center  ".concat(a.length!==i.length?"bg-green-300":"bg-yellow-300","  flex justify-center content-center"),children:Object(b.jsx)("div",{className:" m-auto",children:a.length===i.length?Object(b.jsx)("p",{className:"text-xl md:text-3xl lg:text-5xl text-center",children:"Tie"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"text-xl md:text-3xl lg:text-5xl text-center",children:"You"}),Object(b.jsx)("p",{className:"text-l md:text-2xl lg:text-4xl text-center",children:a.length<i.length?" Winning":"Losing"}),Object(b.jsx)("p",{className:"text-l md:text-2xl lg:text-4xl text-center",children:a.length<i.length?null:a.length-i.length+" Cards Behind"})]})})}),Object(b.jsx)("button",{onClick:function(){C(!k),Z((function(e){return e+1}))},className:"bg-red-500 h-full text-base sm:text-xl md:text-6xl lg:text-8xl hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"PLAY"}),Object(b.jsx)("div",{className:"h-full text-center   ".concat(a.length!==i.length?"bg-red-300":"bg-yellow-300"," flex justify-center content-center"),children:Object(b.jsx)("div",{className:" m-auto",children:a.length===i.length?Object(b.jsx)("p",{className:"text-xl md:text-3xl lg:text-5xl text-center",children:"Tie"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"text-xl md:text-3xl lg:text-5xl text-center",children:"AI"}),Object(b.jsx)("p",{className:"text-l md:text-2xl lg:text-4xl text-center",children:a.length>i.length?" Winning":"Losing"}),Object(b.jsx)("p",{className:"text-l md:text-2xl lg:text-4xl text-center",children:a.length>i.length?null:i.length-a.length+" Cards Behind"})]})})})]}),Object(b.jsx)("div",{className:"relative w-full h-1/6 ".concat(a.length!==i.length?"bg-red-300":"bg-yellow-300"),children:Object(b.jsx)("div",{className:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200 h-full",children:Object(b.jsx)("div",{style:{width:"".concat(Math.floor(i.length/52*100),"%")},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ".concat(a.length!==i.length?"bg-green-300":"bg-yellow-300")})})})]})]})})}function ue(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}var he=function(){var e=Object(c.useState)({loggedIn:!1,data:null}),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useMemo)((function(){return{userDataGlobal:a,setUserDataGlobal:s}}),[a,s]);return Object(b.jsx)(O.Provider,{value:n,children:Object(b.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(b.jsx)(T,{}),Object(b.jsxs)(w.c,{children:[Object(b.jsx)(w.a,{path:"/",exact:!0,children:Object(b.jsx)("div",{className:"h-full w-full",children:Object(b.jsx)(x,{})})}),Object(b.jsx)(w.a,{path:"/signup",children:Object(b.jsx)(M,{})}),Object(b.jsx)(w.a,{path:"/signin",children:Object(b.jsx)(S,{})}),Object(b.jsx)(w.a,{path:"/game",exact:!0,children:Object(b.jsx)(y,{})}),Object(b.jsx)(w.a,{path:"/about",children:Object(b.jsx)(N,{})}),Object(b.jsx)(w.a,{path:"/game/play",exact:!0,children:Object(b.jsx)(me,{})}),Object(b.jsx)(w.a,{children:Object(b.jsx)(k,{})})]})]})})};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(he,{})})}),document.getElementById("root"))},89:function(e,t,a){}},[[142,1,2]]]);
//# sourceMappingURL=main.6f0547f0.chunk.js.map