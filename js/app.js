(function(e){function t(t){for(var a,o,s=t[0],l=t[1],i=t[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&u.push(c[o][0]),c[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(u.length)u.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==c[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22ee":function(e,t,n){e.exports=n.p+"img/search.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"wrapper",id:"app"},r={class:"page-main"};function o(e,t,n,o,s,l){var i=Object(a["resolveComponent"])("app-header"),p=Object(a["resolveComponent"])("router-view"),d=Object(a["resolveComponent"])("app-footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(i),Object(a["createElementVNode"])("main",r,[Object(a["createVNode"])(p)]),Object(a["createVNode"])(d)])}var s={class:"page-head"};function l(e,t,n,c,r,o){var l=Object(a["resolveComponent"])("app-menu");return Object(a["openBlock"])(),Object(a["createElementBlock"])("header",s,[Object(a["createVNode"])(l)])}var i=n("bfc3"),p=n.n(i),d={class:"navbar bg-secondary"},u={class:"site-nav container-fluid"},b={class:"site-nav__logo"},m=Object(a["createElementVNode"])("img",{src:p.a,alt:"Logo"},null,-1),h={class:"site-nav__list row"},j={class:"ml-1 text-hover-blue display-block"},O=Object(a["createTextVNode"])(" Лиги"),g={class:"ml-1 text-hover-blue display-block"},f=Object(a["createTextVNode"])(" Команды");function v(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",d,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",b,[Object(a["createVNode"])(s,{to:{name:"home"}},{default:Object(a["withCtx"])((function(){return[m]})),_:1})]),Object(a["createElementVNode"])("ul",h,[Object(a["createElementVNode"])("li",j,[Object(a["createVNode"])(s,{to:{name:"leagues"}},{default:Object(a["withCtx"])((function(){return[O]})),_:1})]),Object(a["createElementVNode"])("li",g,[Object(a["createVNode"])(s,{to:{name:"teams"}},{default:Object(a["withCtx"])((function(){return[f]})),_:1})])])])])])}var A={},N=n("6b0d"),k=n.n(N);const V=k()(A,[["render",v]]);var E=V,y={components:{AppMenu:E}};const B=k()(y,[["render",l]]);var S=B,C={class:"page-footer"},P={class:"container-fluid"},w={class:"page-footer__content"},x={class:"page-footer__inner"},D=Object(a["createElementVNode"])("div",{class:"page-footer__copyright"},[Object(a["createElementVNode"])("p",{class:"mb-2"},[Object(a["createElementVNode"])("a",{href:"https://www.google.com",title:"Privacy",target:"_blank"}," SoccerSTATS.com ")])],-1);function M(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("footer",C,[Object(a["createElementVNode"])("div",P,[Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("div",x,[Object(a["createVNode"])(s,{to:{name:"home"}})])]),D])])}var F={};const G=k()(F,[["render",M]]);var T=G,I={name:"App",components:{AppHeader:S,AppFooter:T}};n("be0c");const z=k()(I,[["render",o]]);var J=z,U=n("6c02"),X={class:"container"},L=Object(a["createElementVNode"])("h1",null,"Home",-1),Q=Object(a["createElementVNode"])("p",null,"«Приложение для просмотра спортивной статистики «SoccerStat»»",-1),K=Object(a["createStaticVNode"])('<table class="resp-tab"><thead><tr><th>Заголовок 1</th><th>Заголовок 2</th><th>Заголовок 3</th><th>Заголовок 4</th></tr></thead><tbody><tr><td><span>Заголовок 1</span>Контент 1</td><td><span>Заголовок 2</span>Контент 1</td><td><span>Заголовок 3</span>Контент 1</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td></tr></tbody></table>',1);function W(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("app-search");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",X,[L,Q,Object(a["createVNode"])(s),K])}var q=n("22ee"),R=n.n(q),H={method:"get",role:"search",action:"{{ site.url }}",class:"site-search site-nav__search"},_=Object(a["createElementVNode"])("button",{class:"site-search__btn"},[Object(a["createElementVNode"])("span",{class:"u-visually-hidden"},[Object(a["createElementVNode"])("img",{src:R.a})])],-1);function Y(e,t,n,c,r,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("form",H,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"search",name:"ssearch","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.searchString=e}),class:"site-search__input js-search-field",placeholder:"Search?"},null,512),[[a["vModelText"],r.searchString]]),_])}var Z={data:function(){return{searchString:null}},methods:{}};const $=k()(Z,[["render",Y]]);var ee=$,te={components:{AppSearch:ee}};const ne=k()(te,[["render",W]]);var ae=ne,ce=(n("b0c0"),n("fb6a"),{class:"container"}),re=Object(a["createElementVNode"])("h1",null,"Лиги",-1),oe=Object(a["createElementVNode"])("button",{class:"site-search__btn",type:"submit"},[Object(a["createElementVNode"])("span",{class:"u-visually-hidden"},[Object(a["createElementVNode"])("img",{src:R.a})])],-1),se={class:"league-cards"},le={class:"card-content"},ie={class:"card-title"},pe={class:"card-subtitle"},de={ref:"not_found"},ue={class:"pagination row"},be={class:"pagination-list"},me={class:"pagination-button"},he=["onClick"],je={class:"pagination-button"};function Oe(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ce,[re,Object(a["createElementVNode"])("form",{role:"search",class:"site-search site-nav__search",onSubmit:t[1]||(t[1]=Object(a["withModifiers"])((function(){return o.onFormSubmit&&o.onFormSubmit.apply(o,arguments)}),["prevent"]))},[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"search",name:"search","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.searchString=e}),class:"site-search__input js-search-field",placeholder:"Search?"},null,512),[[a["vModelText"],r.searchString]]),oe],32),Object(a["createElementVNode"])("div",se,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(o.displayedPosts,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"card",key:e.id},[Object(a["createVNode"])(s,{to:{name:"league-calendar",params:{id:e.id}}},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",le,[Object(a["createElementVNode"])("p",ie,"League: "+Object(a["toDisplayString"])(e.name),1),Object(a["createElementVNode"])("p",pe,"Country: "+Object(a["toDisplayString"])(e.area),1)])]})),_:2},1032,["to"])])})),128)),Object(a["createElementVNode"])("p",de,null,512)]),Object(a["createElementVNode"])("div",ue,[Object(a["createElementVNode"])("ul",be,[Object(a["createElementVNode"])("span",me,[1!=r.page?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,type:"button",onClick:t[2]||(t[2]=function(e){return r.page--})}," Previous ")):Object(a["createCommentVNode"])("",!0)]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.pages.slice(r.page-1,r.page+9),(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{type:"button",key:e,onClick:function(t){return r.page=e}},Object(a["toDisplayString"])(e),9,he)})),128)),Object(a["createElementVNode"])("span",je,[r.page<r.pages.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,type:"button",onClick:t[3]||(t[3]=function(e){return r.page++})}," Next ")):Object(a["createCommentVNode"])("",!0)])])])])}n("ac1f"),n("5319"),n("d81d"),n("07ac"),n("4de4"),n("d3b7"),n("caad"),n("2532");var ge=n("bc3a"),fe=n.n(ge),ve={class:"pagination row"},Ae={class:"pagination-list"},Ne={class:"pagination-button"},ke=["onClick"],Ve={class:"pagination-button"};function Ee(e,t,n,c,r,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ve,[Object(a["createElementVNode"])("ul",Ae,[Object(a["createElementVNode"])("span",Ne,[1!=n.page?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,type:"button",onClick:t[0]||(t[0]=function(e){return n.page--})},"Previous")):Object(a["createCommentVNode"])("",!0)]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.pages.slice(n.page-1,n.page+5),(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{type:"button",key:e,onClick:function(t){return n.page=e}},Object(a["toDisplayString"])(e),9,ke)})),128)),Object(a["createElementVNode"])("span",Ve,[n.page<n.pages.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,type:"button",onClick:t[1]||(t[1]=function(e){return n.page++})}," Next ")):Object(a["createCommentVNode"])("",!0)])])])}n("a9e3");var ye={props:{pages:Array,page:Number}};n("8756");const Be=k()(ye,[["render",Ee]]);var Se=Be,Ce="1e76ed510bd246519dedbf03833e5322",Pe={components:{AppSearch:ee,AppPagination:Se},data:function(){return{posts:[],page:1,perPage:9,pages:[],searchString:"",originalposts:[]}},methods:{setPages:function(){for(var e=Math.ceil(this.posts.length/this.perPage),t=1;t<=e;t++)this.pages.push(t)},paginate:function(e){var t=this.page,n=this.perPage,a=t*n-n,c=t*n;return e.slice(a,c)},onFormSubmit:function(){var e=this.searchString.toLowerCase(),t=this.searchString.toUpperCase(),n=this.searchString.replace(this.searchString.charAt(0),this.searchString.charAt(0).toUpperCase()),a=this.posts.map((function(e){return Object.values(e)})),c=a.filter((function(a){return a.includes(e)||a.includes(t)||a.includes(n)})),r=c.map((function(e){return{id:c[0][0],name:c[0][1],area:c[0][2]}}));this.searchString?(this.posts=r,(c.length=0)&&(this.$refs.not_found.innerText="No results found")):this.posts=this.originalposts,console.log(a),console.log(c[0]),console.log(r)}},computed:{key:function(){return Ce},displayedPosts:function(){return this.paginate(this.posts)},validateSearchString:function(e){return e.toLowerCase()}},watch:{posts:function(){this.setPages()}},created:function(){var e=this;fe()({method:"get",url:"https://api.football-data.org/v2/competitions",headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(t){var n=t.data.competitions.map((function(e){return{id:e.id,name:e.name,area:e.area.name}}));e.posts=n,e.originalposts=n}))}};n("cff0");const we=k()(Pe,[["render",Oe]]);var xe=we,De={class:"container"},Me=Object(a["createElementVNode"])("h1",null,"Команды",-1),Fe=Object(a["createElementVNode"])("button",{class:"site-search__btn",type:"submit"},[Object(a["createElementVNode"])("span",{class:"u-visually-hidden"},[Object(a["createElementVNode"])("img",{src:R.a})])],-1),Ge={class:"team-cards"},Te={class:"card-content"},Ie={class:"card-title"},ze={class:"card-image"},Je=["src"],Ue={class:"pagination row"},Xe={class:"pagination-list"},Le={class:"pagination-button"},Qe=["onClick"],Ke={class:"pagination-button"};function We(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",De,[Me,Object(a["createElementVNode"])("form",{role:"search",class:"site-search site-nav__search",onSubmit:t[1]||(t[1]=Object(a["withModifiers"])((function(){return o.onFormSubmit&&o.onFormSubmit.apply(o,arguments)}),["prevent"]))},[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"search",name:"search","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.searchString=e}),class:"site-search__input js-search-field",placeholder:"Search?"},null,512),[[a["vModelText"],r.searchString]]),Fe],32),Object(a["createElementVNode"])("div",Ge,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(o.displayedPosts,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"card",key:e.id},[Object(a["createVNode"])(s,{to:{name:"team-calendar",params:{id:e.id}}},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",Te,[Object(a["createElementVNode"])("p",Ie,Object(a["toDisplayString"])(e.name),1),Object(a["createElementVNode"])("figure",ze,[Object(a["createElementVNode"])("img",{src:e.crestUrl,alt:"{{team.name}}",width:"96",height:"96"},null,8,Je)])])]})),_:2},1032,["to"])])})),128))]),Object(a["createElementVNode"])("div",Ue,[Object(a["createElementVNode"])("ul",Xe,[Object(a["createElementVNode"])("span",Le,[1!=r.page?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,type:"button",onClick:t[2]||(t[2]=function(e){return r.page--})}," Previous ")):Object(a["createCommentVNode"])("",!0)]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.pages.slice(r.page-1,r.page+8),(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{type:"button",key:e,onClick:function(t){return r.page=e}},Object(a["toDisplayString"])(e),9,Qe)})),128)),Object(a["createElementVNode"])("span",Ke,[r.page<r.pages.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,type:"button",onClick:t[3]||(t[3]=function(e){return r.page++})}," Next ")):Object(a["createCommentVNode"])("",!0)])])])])}var qe={components:{AppSearch:ee},data:function(){return{teams:[],page:1,perPage:8,pages:[],searchString:"",originalteams:[]}},methods:{setPages:function(){for(var e=Math.ceil(this.teams.length/this.perPage),t=1;t<=e;t++)this.pages.push(t)},paginate:function(e){var t=this.page,n=this.perPage,a=t*n-n,c=t*n;return e.slice(a,c)},onFormSubmit:function(){var e=this.searchString.toLowerCase(),t=this.searchString.toUpperCase(),n=this.searchString.replace(this.searchString.charAt(0),this.searchString.charAt(0).toUpperCase()),a=this.teams.map((function(e){return Object.values(e)})),c=a.filter((function(a){return a.includes(e)||a.includes(t)||a.includes(n)})),r=c.map((function(e){return{id:c[0][0],name:c[0][1],area:c[0][2]}}));this.searchString?(this.teams=r,(c.length=0)&&(this.$refs.not_found.innerText="No results found")):this.teams=this.originalteams}},computed:{key:function(){return apiKey},displayedPosts:function(){return this.paginate(this.teams)},validateSearchString:function(e){return e.toLowerCase()}},watch:{teams:function(){this.setPages()}},created:function(){var e=this;fe()({method:"get",url:"https://api.football-data.org/v2/teams",headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(t){e.teams=t.data.teams,e.originalteams=t.data.teams}))}};n("eea8");const Re=k()(qe,[["render",We]]);var He=Re,_e=Object(a["createElementVNode"])("h1",null,"Page not found",-1),Ye=Object(a["createElementVNode"])("hr",null,null,-1),Ze=Object(a["createTextVNode"])(" Start from main page "),$e=[_e,Ye,Ze];function et(e,t,n,c,r,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,$e)}var tt={};const nt=k()(tt,[["render",et]]);var at=nt,ct={class:"container"},rt=Object(a["createElementVNode"])("h1",null,"Календарь команды",-1),ot=Object(a["createElementVNode"])("p",null,"«Приложение для просмотра спортивной статистики «SoccerStat»»",-1),st=Object(a["createStaticVNode"])('<table class="resp-tab"><thead><tr><th>Дата</th><th>Время</th><th>Статус</th><th>Названия команд участвующих в матче</th><th> Счёт. Счёт в основное время, счёт в дополнительное время, итог пенальти. </th></tr></thead><tbody><tr><td><span>Заголовок 1</span>Контент 1</td><td><span>Заголовок 2</span>Контент 1</td><td><span>Заголовок 3</span>Контент 1</td><td><span>Заголовок 4</span>Контент 1</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr></tbody></table>',1);function lt(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("app-breadcrumbs");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ct,[rt,ot,Object(a["createVNode"])(s),st])}var it={class:"breadcrumbs"},pt=Object(a["createElementVNode"])("ul",{class:"breadcrumbs__list"},[Object(a["createElementVNode"])("li",null,"Лиги > "),Object(a["createElementVNode"])("li",null," Название Лиги")],-1),dt=[pt];function ut(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",it,dt)}const bt={},mt=k()(bt,[["render",ut]]);var ht=mt,jt={components:{AppSearch:ee,AppBreadcrumbs:ht},data:function(){return{matches:[]}},created:function(){var e=this;axios({method:"get",url:"http://api.football-data.org/v2/competitions/"+this.$route.params.id+"/matches",headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(t){e.matches=t.data})).catch((function(){console.log("error")}))}};const Ot=k()(jt,[["render",lt]]);var gt=Ot,ft={class:"container"},vt=Object(a["createElementVNode"])("h1",null,"Календарь команды",-1),At=Object(a["createElementVNode"])("p",null,"«Приложение для просмотра спортивной статистики «SoccerStat»»",-1),Nt=Object(a["createStaticVNode"])('<table class="resp-tab"><thead><tr><th>Дата</th><th>Время</th><th>Статус</th><th>Названия команд участвующих в матче</th><th> Счёт. Счёт в основное время, счёт в дополнительное время, итог пенальти. </th></tr></thead><tbody><tr><td><span>Заголовок 1</span>Контент 1</td><td><span>Заголовок 2</span>Контент 1</td><td><span>Заголовок 3</span>Контент 1</td><td><span>Заголовок 4</span>Контент 1</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr><tr><td><span>Заголовок 1</span>Контент 5</td><td><span>Заголовок 2</span>Контент 5</td><td><span>Заголовок 3</span>Контент 5</td><td><span>Заголовок 4</span>Контент 5</td><td><span>Заголовок 4</span>Контент 1</td></tr></tbody></table>',1);function kt(e,t,n,c,r,o){var s=Object(a["resolveComponent"])("app-breadcrumbs");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ft,[vt,At,Object(a["createVNode"])(s),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(r.matches)+" ",1),Nt])}var Vt={components:{AppSearch:ee,AppBreadcrumbs:ht},data:function(){return{matches:[]}},mounted:function(){var e=this;fe()({method:"get",url:"http://api.football-data.org/v2/competitions/"+parseInt(this.$route.params.id)+"/matches",headers:{"X-Auth-Token":"1e76ed510bd246519dedbf03833e5322"}}).then((function(t){e.matches=t})).catch((function(){console.log("error")}))}};const Et=k()(Vt,[["render",kt]]);var yt=Et,Bt=[{name:"home",path:"/",component:ae},{name:"teams",path:"/teams",component:He},{name:"leagues",path:"/league",component:xe},{name:"team-calendar",path:"/team-calendar/:id",component:gt,props:!0},{name:"league-calendar",path:"/league-calendar/:id",component:yt,props:!0},{path:"/:any(.*)",component:at}],St=Object(U["a"])({history:Object(U["b"])(),routes:Bt}),Ct=St,Pt=n("5502"),wt=Object(Pt["a"])({modules:{},strict:!1}),xt=wt,Dt=n("801f"),Mt=n.n(Dt),Ft=Object(a["createApp"])(J);Ft.use(xt),Ft.use(Ct),Ft.mount("#app"),Ft.component("pagination",Mt.a)},"5c24":function(e,t,n){},"769c":function(e,t,n){},8756:function(e,t,n){"use strict";n("e1be")},be0c:function(e,t,n){"use strict";n("faad")},bfc3:function(e,t){e.exports="data:image/png;base64,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"},cff0:function(e,t,n){"use strict";n("5c24")},e1be:function(e,t,n){},eea8:function(e,t,n){"use strict";n("769c")},faad:function(e,t,n){}});