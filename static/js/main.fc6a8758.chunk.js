(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(23),s=n.n(c),i=(n(32),n(18)),o=n(3),u=n(4),l=n(6),d=n(5),j=n(7),h=n(26),b=n(2),O=n.n(b),p=n(8),m=n(9),f=n(20),v=n(15),x="user",g=function(e){return localStorage.setItem(x,JSON.stringify(e))},k=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},S=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(x));null===t&&(t={}),k(t)(e)}))},y=function(e){return new Promise((function(t){g(Object(i.a)(Object(i.a)({},{name:"",email:"",image:"",description:""}),e)),k("OK")(t)}))},N=n(0),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).renderUser=Object(p.a)(O.a.mark((function t(){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:n=t.sent,a=n.name,e.setState({userName:a});case 5:case"end":return t.stop()}}),t)}))),e.state={userName:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.renderUser()}},{key:"render",value:function(){var e=this.state.userName;return console.log(e),Object(N.jsxs)("header",{"data-testid":"header-component",children:[Object(N.jsx)(v.a,{to:"/search",children:Object(N.jsxs)("h1",{children:["Trybetunes",Object(N.jsx)("span",{children:Object(N.jsx)(f.a,{})})]})}),Object(N.jsx)("nav",{children:Object(N.jsxs)("ul",{children:[Object(N.jsx)(v.a,{"data-testid":"link-to-search",to:"/search",children:"Procurar"}),Object(N.jsx)(v.a,{"data-testid":"link-to-favorites",to:"/favorites",children:"Favoritas"})]})}),Object(N.jsx)("div",{children:e?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("span",{children:"Boas vindas, ".concat(e)}),Object(N.jsx)(v.a,{className:"perfil",to:"/profile",children:e[0]})]}):Object(N.jsx)("p",{children:"username"})})]})}}]),n}(a.Component),w=n(14),I=n(27),F="favorite_songs";JSON.parse(localStorage.getItem(F))||localStorage.setItem(F,JSON.stringify([]));var P=function(){return JSON.parse(localStorage.getItem(F))},D=function(e){return localStorage.setItem(F,JSON.stringify(e))},R=function(e){return function(t){setTimeout((function(){t(e)}),500)}},A=function(){return new Promise((function(e){var t=P();R(t)(e)}))},U=function(e){return new Promise((function(t){if(e){var n=P();D([].concat(Object(I.a)(n),[e]))}R("OK")(t)}))},q=function(e){return new Promise((function(t){var n=P();D(n.filter((function(t){return t.trackId!==e.trackId}))),R("OK")(t)}))},J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={favoritCheck:!1,loading:!1},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.addSongFavorite=e.addSongFavorite.bind(Object(m.a)(e)),e.removeSongFavorite=e.removeSongFavorite.bind(Object(m.a)(e)),e.setObjOnSetState=e.setObjOnSetState.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.requestSongs()}},{key:"handleChange",value:function(e){var t=this,n=e.target,a=n.name,r=n.checked;this.setState(Object(w.a)({},a,r),(function(){return t.setObjOnSetState(n)}))}},{key:"setObjOnSetState",value:function(e){var t=this.props.songs,n=Number(e.getAttribute("data-testid").split("-")[2]),a=t.find((function(e){return e.trackId===n}));e.checked?this.addSongFavorite(a):this.removeSongFavorite(a)}},{key:"requestSongs",value:function(){var e=Object(p.a)(O.a.mark((function e(){var t,n=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.trackId,e.next=3,A();case 3:e.sent.forEach((function(e){e.trackId===t&&n.setState({favoritCheck:!0})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeSongFavorite",value:function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,q(t);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addSongFavorite",value:function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,U(t);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.previewUrl,n=e.trackId,a=e.trackName,r=this.state.favoritCheck;return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"songsSingle",children:[Object(N.jsx)("p",{children:a}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("audio",{"data-testid":"audio-component",src:t,controls:!0,children:[Object(N.jsx)("track",{kind:"captions"}),Object(N.jsx)("code",{children:"audio"})]}),Object(N.jsxs)("label",{htmlFor:n,children:[Object(N.jsx)("input",{id:n,checked:r,name:"favoritCheck",onChange:this.handleChange,type:"checkbox","data-testid":"checkbox-music-".concat(n)}),r?Object(N.jsx)("i",{className:"fas fa-heart"}):Object(N.jsx)("i",{className:"far fa-heart"})]})]})]})})}}]),n}(a.Component),T=J,M=function(){var e=Object(p.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=M,L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsx)("footer",{children:Object(N.jsx)("p",{children:"Trybetunes \xa9 2023"})})}}]),n}(a.Component),B=L,K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"loading",children:"Carregando..."})}}]),n}(a.Component),Q=K,_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={songs:[],artisName:"",albumName:"",loading:!1},e.callApi=e.callApi.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.callApi()}},{key:"callApi",value:function(){var e=Object(p.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=this.props.match.params.id,e.next=4,E(t);case 4:n=e.sent,this.setState({songs:n,artisName:n[0].artistName,albumName:n[0].collectionName,imgAlbum:n[0].artworkUrl100}),this.setState({loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.songs,n=e.artisName,a=e.albumName,r=e.imgAlbum,c=e.loading;return Object(N.jsxs)("div",{children:[Object(N.jsx)(C,{}),c?Object(N.jsx)(Q,{}):Object(N.jsxs)("div",{"data-testid":"page-album",className:"albumTracks",children:[Object(N.jsxs)("section",{className:"tituloImagem",children:[Object(N.jsx)("img",{src:r,alt:"imagem"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{"data-testid":"artist-name",children:n}),Object(N.jsx)("h4",{"data-testid":"album-name",children:a})]})]}),Object(N.jsx)("section",{className:"containerSongs",children:t.filter((function(e){return void 0!==e.kind})).map((function(e,n){return Object(N.jsx)(T,{track:n+1,previewUrl:e.previewUrl,trackId:e.trackId,trackName:e.trackName,songs:t},e.trackId)}))})]}),Object(N.jsx)(B,{})]})}}]),n}(a.Component),z=_,G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={favoritCheck:!0,favSongs:[],loading:!1},e.removeSongFavorite=e.removeSongFavorite.bind(Object(m.a)(e)),e.getFav=e.getFav.bind(Object(m.a)(e)),e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.setObjOnSetState=e.setObjOnSetState.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getFav()}},{key:"componentDidUpdate",value:function(e,t){t.favoritCheck||this.getFav()}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.checked;this.setState(Object(w.a)({},n,a),this.setObjOnSetState(t))}},{key:"getFav",value:function(){var e=Object(p.a)(O.a.mark((function e(){var t=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.t0=this,e.next=4,A();case 4:e.t1=e.sent,e.t2={favSongs:e.t1},e.t3=function(){return t.setState({loading:!1})},e.t0.setState.call(e.t0,e.t2,e.t3);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setObjOnSetState",value:function(e){var t=this.state.favSongs,n=Number(e.getAttribute("data-testid").split("-")[2]),a=t.find((function(e){return e.trackId===n}));this.removeSongFavorite(a)}},{key:"removeSongFavorite",value:function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,q(t);case 3:this.setState({loading:!1,favoritCheck:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.favSongs,a=t.favoritCheck,r=t.loading,c=t.trackId;return Object(N.jsxs)("div",{"data-testid":"page-favorites",children:[Object(N.jsx)(C,{}),0===n.length&&"",r?Object(N.jsx)(Q,{}):Object(N.jsxs)("div",{className:"favorites",children:[Object(N.jsx)("h1",{children:"M\xfasicas Favoritas"}),n.map((function(t){return Object(N.jsx)("div",{className:"songsSingle",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:t.artworkUrl60,alt:t.trackName}),Object(N.jsxs)("section",{children:[Object(N.jsx)("p",{children:t.trackName}),Object(N.jsxs)("audio",{"data-testid":"audio-component",src:t.previewUrl,controls:!0,children:[Object(N.jsx)("track",{kind:"captions"}),Object(N.jsx)("code",{children:"audio"})]})]}),Object(N.jsxs)("label",{htmlFor:c,children:[Object(N.jsx)("input",{id:c,checked:a,name:"favoritCheck",onChange:e.handleChange,type:"checkbox","data-testid":"checkbox-music-".concat(t.trackId)}),a?Object(N.jsx)("i",{className:"fas fa-heart"}):Object(N.jsx)("i",{className:"far fa-heart"})]})]})},t.trackId)}))]}),Object(N.jsx)(B,{})]})}}]),n}(a.Component),H=G,V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={nome:"",isDisabled:!0,logado:!1},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.validateinputs=e.validateinputs.bind(Object(m.a)(e)),e.changeRoute=e.changeRoute.bind(Object(m.a)(e)),e.handleLogin=e.handleLogin.bind(Object(m.a)(e)),e}return Object(u.a)(n,[{key:"handleChange",value:function(e){var t=this,n=e.target,a=n.name,r=n.value;this.setState(Object(w.a)({},a,r),(function(){return t.validateinputs()}))}},{key:"handleLogin",value:function(){var e=Object(p.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.nome,this.setState({logado:!0}),e.next=5,y({name:n});case 5:this.changeRoute(t);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"validateinputs",value:function(){this.state.nome.length>=3?this.setState({isDisabled:!1}):this.setState({isDisabled:!0})}},{key:"changeRoute",value:function(e){e.preventDefault(),this.props.history.push("/search")}},{key:"render",value:function(){var e=this.state,t=e.nome,n=e.isDisabled,a=e.logado;return Object(N.jsx)("div",{className:"login","data-testid":"page-login",children:a?Object(N.jsx)(Q,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"div-login",children:[Object(N.jsxs)("h1",{children:["Trybetunes",Object(N.jsx)("span",{children:Object(N.jsx)(f.a,{})})]}),Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:"Pesquise pelo seu artista favorito"}),Object(N.jsx)("li",{children:"Ou\xe7a por 30 segundos as faixas de um \xe1lbum"}),Object(N.jsx)("li",{children:"Confira os nomes das m\xfasicas em um \xe1lbum"})]})]}),Object(N.jsxs)("form",{className:"login",children:[Object(N.jsxs)("label",{htmlFor:"nome",children:["Qual \xe9 o seu nome?",Object(N.jsx)("input",{"data-testid":"login-name-input",type:"text",name:"nome",value:t,onChange:this.handleChange,id:"nome"})]}),Object(N.jsx)("button",{"data-testid":"login-submit-button",onClick:this.handleLogin,type:"submit",disabled:n,children:"Entrar"})]})]})})}}]),n}(a.Component),W=V,X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{"data-testid":"page-not-found",children:Object(N.jsx)("h1",{children:"404 P\xe1gina n\xe3o encontrada"})})}}]),n}(a.Component),Y=X,Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{"data-testid":"page-profile",children:[Object(N.jsx)(C,{}),Object(N.jsx)("h1",{children:"Profile"})]})}}]),n}(a.Component),$=Z,ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(N.jsx)(C,{}),Object(N.jsx)("h1",{children:"Profile Edit"})]})}}]),n}(a.Component),te=ee,ne=function(){var e=Object(p.a)(O.a.mark((function e(t){var n,a,r,c,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),e.next=4,fetch(a);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,s=c.results,i=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=ne,re={userName:"",loading:!0,artistName:"",isDisabled:!0,loadingPesquisa:!1,responseApi:!1,artisNameShow:"",albuns:[]},ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(w.a)({},a,r),(function(){return e.validateinputs()}))},e.handleRequest=Object(p.a)(O.a.mark((function t(){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.artistName,e.setState({artistName:"",loadingPesquisa:!0,responseApi:!1,artisNameShow:n}),t.next=4,ae(n);case 4:a=t.sent,e.setState({loadingPesquisa:!1,responseApi:!0,albuns:a});case 6:case"end":return t.stop()}}),t)}))),e.validateinputs=function(){e.state.artistName.length>=2?e.setState({isDisabled:!1}):e.setState({isDisabled:!0})},e.state=re,e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.artistName,n=e.isDisabled,a=e.loadingPesquisa,r=e.responseApi,c=e.artisNameShow,s=e.albuns;return Object(N.jsxs)("div",{className:"search","data-testid":"page-search",children:[Object(N.jsx)(C,{}),a?Object(N.jsx)(Q,{}):Object(N.jsxs)("form",{className:"search",children:[Object(N.jsx)("input",{name:"artistName","data-testid":"search-artist-input",type:"text",placeholder:"Pesquisar por artista, banda...",onChange:this.handleChange,value:t}),Object(N.jsx)("button",{disabled:n,"data-testid":"search-artist-button",type:"reset",onClick:this.handleRequest,children:"Pesquisar"})]}),r&&Object(N.jsx)("section",{className:"container",children:0===s.length?Object(N.jsx)("div",{className:"nenhumAlbum",children:Object(N.jsx)("span",{children:"Nenhum \xe1lbum foi encontrado"})}):Object(N.jsxs)("section",{children:[Object(N.jsx)("h3",{children:"Resultado de \xe1lbuns de ".concat(c)}),Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"albuns",children:s.map((function(e){return Object(N.jsxs)(v.a,{"data-testid":"link-to-album-".concat(e.collectionId),to:"/album/".concat(e.collectionId),children:[Object(N.jsx)("img",{src:e.artworkUrl100,alt:e.collectionName}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h4",{children:"".concat(e.artistName)}),Object(N.jsx)("p",{children:e.collectionName})]})]},e.id)}))})})]})}),Object(N.jsx)(B,{})]})}}]),n}(a.Component),se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{children:Object(N.jsx)(h.BrowserRouter,{children:Object(N.jsxs)(j.Switch,{children:[Object(N.jsx)(j.Route,{exact:!0,path:"/trybetunes",component:W}),Object(N.jsx)(j.Route,{exact:!0,path:"/search",component:ce}),Object(N.jsx)(j.Route,{path:"/album/:id",render:function(e){return Object(N.jsx)(z,Object(i.a)({},e))}}),Object(N.jsx)(j.Route,{exact:!0,path:"/favorites",component:H}),Object(N.jsx)(j.Route,{exact:!0,path:"/profile/edit",component:te}),Object(N.jsx)(j.Route,{exact:!0,path:"/profile",component:$}),Object(N.jsx)(j.Route,{exact:!0,path:"*",component:Y})]})})})}}]),n}(r.a.Component),ie=se;s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(ie,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.fc6a8758.chunk.js.map