(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(35),n=a.n(i),r=(a(107),a(91)),j=a(16),d=(a(108),a(2));var l=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{onClick:function(){window.scroll(0,0)},className:"header",children:[Object(d.jsx)("i",{className:"fas fa-theater-masks"}),". Watch MyShow .",Object(d.jsx)("i",{className:"fas fa-theater-masks"})]})})},o=(a(110),a(8)),b=a(190),u=a(192),O=a(193),h=a(88),p=a.n(h),f=a(89),v=a.n(f),x=a(90),g=a.n(x),m=a(57),_=a.n(m);function y(){var e=s.useState(0),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(j.f)();return Object(s.useEffect)((function(){0==a?i.push("/"):1==a?i.push("/movies"):2==a?i.push("/series"):3==a&&i.push("/search")}),[a,i]),Object(d.jsx)("div",{children:Object(d.jsx)(b.a,{sx:{width:"100%",bottom:"0",position:"fixed"},children:Object(d.jsxs)(u.a,{showLabels:!0,value:a,onChange:function(e,t){c(t)},children:[Object(d.jsx)(O.a,{label:"Trending",icon:Object(d.jsx)(p.a,{})}),Object(d.jsx)(O.a,{label:"Movies",icon:Object(d.jsx)(v.a,{})}),Object(d.jsx)(O.a,{label:"TV Series",icon:Object(d.jsx)(g.a,{})}),Object(d.jsx)(O.a,{label:"Search",icon:Object(d.jsx)(_.a,{})})]})})})}var S=a(191),w=a(34),N=a.n(w),T=a(187);var k=function(e){var t=e.setpage,a=e.numOfPages,s=void 0===a?10:a;return Object(d.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10,backgroundColor:"white"},children:Object(d.jsx)(T.a,{count:s,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,color:"primary"})})};a(135);var C=function(e){e.id;var t=e.poster,a=e.title,s=e.date,c=e.media_type,i=e.vote_average;return Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("img",{className:"poster",src:t?"".concat("https://image.tmdb.org/t/p/w300","/").concat(t):"https://www.movienewz.com/img/films/poster-holder.jpg",alt:a}),Object(d.jsx)("b",{className:"title",children:a}),Object(d.jsxs)("span",{className:"subTitle",children:["tv"===c?"TvShow":"Movie",Object(d.jsx)("span",{className:"subTitle",children:s}),Object(d.jsxs)("span",{className:"subTitle",children:[Object(d.jsx)("i",{class:"fas fa-star"})," . ",i]})]})]})};a(136);var E=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(1),n=Object(o.a)(i,2),r=n[0],j=n[1];return Object(s.useEffect)((function(){N.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=2e49c21a38f4f29524d67a27bf371648&page=".concat(r)).then((function(e){c(e.data.results)}))}),[r]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"pageTitle",children:"Trending"})}),Object(d.jsx)("div",{className:"trending",children:a&&a.map((function(e){return Object(d.jsx)(C,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(d.jsx)(k,{setpage:j})]})};var M=function(){var e=Object(s.useState)(1),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)([]),n=Object(o.a)(i,2),r=n[0],j=n[1],l=Object(s.useState)(),b=Object(o.a)(l,2),u=b[0],O=b[1];return Object(s.useEffect)((function(){N.a.get("https://api.themoviedb.org/3/discover/movie?api_key=2e49c21a38f4f29524d67a27bf371648&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(a)).then((function(e){j(e.data.results),O(e.data.total_pages)}))}),[a]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"pageTitle",children:" Movies "})}),Object(d.jsx)("div",{className:"trending",children:r&&r.map((function(e){return Object(d.jsx)(C,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),Object(d.jsx)(k,{setpage:c,numOfPages:u})]})};var P=function(){var e=Object(s.useState)(1),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)([]),n=Object(o.a)(i,2),r=n[0],j=n[1],l=Object(s.useState)(),b=Object(o.a)(l,2),u=b[0],O=b[1];return Object(s.useEffect)((function(){N.a.get("https://api.themoviedb.org/3/discover/tv?api_key=2e49c21a38f4f29524d67a27bf371648&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(a)).then((function(e){j(e.data.results),O(e.data.total_pages)}))}),[a]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"pageTitle",children:" TV Series "})}),Object(d.jsx)("div",{className:"trending",children:r&&r.map((function(e){return Object(d.jsx)(C,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),Object(d.jsx)(k,{setpage:c,numOfPages:u})]})},B=a(186),F=a(194);var U=function(){var e=Object(s.useState)(1),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(),n=Object(o.a)(i,2),r=n[0],j=n[1],l=Object(s.useState)(),b=Object(o.a)(l,2),u=b[0],O=b[1],h=Object(s.useState)(""),p=Object(o.a)(h,2),f=p[0],v=p[1],x=function(){N.a.get("https://api.themoviedb.org/3/search/movie?api_key=2e49c21a38f4f29524d67a27bf371648&language=en-US&query=".concat(f,"&page=").concat(a)).then((function(e){j(e.data.results),O(e.data.total_pages)}))};return Object(s.useEffect)((function(){window.scroll(0,0),x()}),[a]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("span",{className:"pageTitle",children:" Search "})}),Object(d.jsxs)("div",{style:{display:"flex",margin:"15px 0px"},children:[Object(d.jsx)(B.a,{style:{flex:1,color:"white",backgroundColor:"white"},className:"searchBox",label:"Search Here..",variant:"filled",onChange:function(e){return v(e.target.value)}}),Object(d.jsx)(F.a,{variant:"outlined",color:"error",style:{marginLeft:10},onClick:x,children:Object(d.jsx)(_.a,{})})]}),Object(d.jsx)("div",{className:"trending",children:r&&r.map((function(e){return Object(d.jsx)(C,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),u>1&&Object(d.jsx)(k,{setpage:c,numOfPages:u})]})};var J=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(l,{}),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(S.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsxs)(j.a,{path:"/",exact:!0,children:[" ",Object(d.jsx)(E,{})," "]}),Object(d.jsxs)(j.a,{path:"/movies",children:[" ",Object(d.jsx)(M,{})," "]}),Object(d.jsxs)(j.a,{path:"/series",children:[" ",Object(d.jsx)(P,{})," "]}),Object(d.jsxs)(j.a,{path:"/search",children:[" ",Object(d.jsx)(U,{})," "]})]})})}),Object(d.jsx)(y,{})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.64732d91.chunk.js.map