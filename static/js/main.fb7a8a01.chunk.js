(this["webpackJsonptrain-reservation"]=this["webpackJsonptrain-reservation"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a(32),s=a(0),c=a.n(s),l=a(10),i=a.n(l),o=(a(78),a(9)),u=a.n(o),p=a(15),m=a(12),h=a(18),d=a(19),b=a(13),v=a(20),f=a(147),g=a(148);function E(e){var t,a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(fetch("https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=".concat(e)).catch((function(e){return alert(e)})));case 2:if(t=n.sent){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,u.a.awrap(t.json().catch((function(e){console.log(e)})));case 7:return a=n.sent,n.abrupt("return",a.records.map((function(e){return e.fields.gare_ut_libelle})));case 9:case"end":return n.stop()}}))}var j=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={departureStation:"",arrivalStation:"",resDeparture:[],resArrival:[]},a.generateTicket=a.generateTicket.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"onChangeInputDeparture",value:function(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(E(e.target.value));case 2:if(a.t0=a.sent,a.t0){a.next=5;break}a.t0=[];case 5:return t=a.t0,a.next=8,u.a.awrap(this.setState({resDeparture:t}));case 8:case"end":return a.stop()}}),null,this)}},{key:"onChangeInputDArrival",value:function(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(E(e.target.value));case 2:if(a.t0=a.sent,a.t0){a.next=5;break}a.t0=[];case 5:return t=a.t0,a.next=8,u.a.awrap(this.setState({resArrival:t}));case 8:case"end":return a.stop()}}),null,this)}},{key:"generateTicket",value:function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.awrap(this.props.setStations(this.state.departureStation,this.state.arrivalStation));case 2:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g.a,{onChange:function(t,a){return e.setState({departureStation:a})},id:"departure",options:this.state.resDeparture,style:{width:300},renderInput:function(t){return c.a.createElement(f.a,Object.assign({onChange:e.onChangeInputDeparture.bind(e)},t,{label:"Departure",variant:"outlined",fullWidth:!0}))}})," ",c.a.createElement(g.a,{onChange:function(t,a){return e.setState({arrivalStation:a})},id:"departure",options:this.state.resArrival,style:{width:300},renderInput:function(t){return c.a.createElement(f.a,Object.assign({onChange:e.onChangeInputDArrival.bind(e)},t,{label:"Arrival",variant:"outlined",fullWidth:!0}))}}),c.a.createElement("button",{onClick:this.generateTicket},"Get ticket"))}}]),t}(c.a.Component),O=a(143),k=a(145),y=a(144),x=a(146),w=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={price:20},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(O.a,null,c.a.createElement(y.a,null,c.a.createElement("p",null," Departure : ",this.props.departure),c.a.createElement("p",null," Arrival : ",this.props.arrival),c.a.createElement("p",null," Price : ",this.props.promo?this.state.price-10:this.state.price)),c.a.createElement(k.a,null,c.a.createElement(x.a,{size:"small"},"Add to basket")))}}]),t}(s.Component),S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={departure:"",arrival:""},a.setStations=a.setStations.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"setStations",value:function(e,t){return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:this.setState({departure:e,arrival:t});case 1:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(j,{setStations:this.setStations}),this.state.departure&&this.state.arrival&&c.a.createElement(w,{departure:this.state.departure,arrival:this.state.arrival,promo:this.props.promo}))}}]),t}(c.a.Component),C=a(34),N=a(31),I=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).onChangePromo=a.onChangePromo.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"onChangePromo",value:function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(this.props.setPromo(e.target.checked));case 2:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",{id:"email",className:"makeGreen"},"Email: ",this.props.email),c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:this.props.promo,id:"defaultCheck1",onChange:this.onChangePromo}),c.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"},"Promo")))}}]),t}(c.a.Component),P=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={connected:!1},a.updateStatus=a.updateStatus.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"updateStatus",value:function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({connected:e});case 1:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},!this.props.loggedIn&&c.a.createElement("li",{className:"nav-item active"},c.a.createElement(x.a,null,c.a.createElement(C.b,{to:"/login"},"Login"))),this.props.loggedIn&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(x.a,null,c.a.createElement(C.b,{to:"/user"},"User panel"))),this.props.loggedIn&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(x.a,null,c.a.createElement(C.b,{to:"/station"},"Booking"))),this.props.loggedIn&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(x.a,null,c.a.createElement(C.b,{to:"/basket"},"Basket"))))))}}]),t}(c.a.Component),D=a(65),A=a.n(D);function L(e,t){var a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=!1,n.prev=1,n.next=4,u.a.awrap(A.a.post("https://reqres.in/api/login",{email:e,password:t},{headers:{"Content-Type":"application/json"}}));case 4:200===n.sent.status&&(a=!0),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.dir(n.t0);case 11:return n.abrupt("return",a);case 12:case"end":return n.stop()}}),null,null,[[1,8]])}var T=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={email:"",password:"",status:""},a.lunchLogin=a.lunchLogin.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"lunchLogin",value:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(L(this.state.email,this.state.password));case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=!1;case 5:e=t.t0,this.props.setLoggedIn(e),this.props.setEmail(this.state.email),e?this.setState({status:!0}):this.setState({status:!1});case 9:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,!this.state.status&&c.a.createElement("form",null,c.a.createElement("h3",null,"Login"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email address"),c.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(t){return e.setState({email:t.target.value})}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Password"),c.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(t){return e.setState({password:t.target.value})}})),c.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:this.lunchLogin},"Submit")),c.a.createElement("p",null,this.state.status?"You are logged in !":""))}}]),t}(s.Component),W=function(e){function t(e){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"My Basket"),this.props.promo?c.a.createElement("p",null,"Promo enabled"):c.a.createElement("p",null,"No Promo"))}}]),t}(c.a.Component);function B(){var e=Object(s.useState)(document.cookie.split(";").some((function(e){return e.trim().startsWith("logedIn=")}))),t=Object(r.a)(e,2),a=t[0],l=t[1],i=Object(s.useState)(document.cookie.split(";").some((function(e){return e.trim().startsWith("email=")}))),o=Object(r.a)(i,2),u=o[0],p=o[1],m=Object(s.useState)(document.cookie.split(";").some((function(e){return e.trim().startsWith("reduc=")}))),h=Object(r.a)(m,2),d=h[0],b=h[1];return c.a.createElement("div",null,c.a.createElement(C.a,null,c.a.createElement(P,{loggedIn:a,promo:d}),c.a.createElement("div",null,c.a.createElement(N.a,{exact:!0,path:"/login",render:function(e){return c.a.createElement(T,Object(n.a)({setLoggedIn:l,setEmail:p},e))}}),c.a.createElement(N.a,{exact:!0,path:"/station",render:function(e){return c.a.createElement(S,Object(n.a)({promo:d},e))}}),c.a.createElement(N.a,{exact:!0,path:"/user",render:function(e){return c.a.createElement(I,Object(n.a)({email:u,promo:d,setPromo:b},e))}}),c.a.createElement(N.a,{exact:!0,path:"/basket",render:function(e){return c.a.createElement(W,Object(n.a)({promo:d},e))}}))))}a.d(t,"default",(function(){return B})),i.a.render(c.a.createElement(B,null),document.getElementById("root"))},73:function(e,t,a){e.exports=a(101)},78:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.fb7a8a01.chunk.js.map