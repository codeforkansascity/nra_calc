(window["webpackJsonpnra-calc"]=window["webpackJsonpnra-calc"]||[]).push([[0],{240:function(e,t,a){e.exports=a(407)},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(206),l=(a(247),a(34)),s=a(37),i=a(35),c=a(38),u=(a(248),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("header",{className:"AppHeader"},r.a.createElement("h1",null,a.props.children))},a}return Object(c.a)(t,e),t}(r.a.Component)),m=(a(249),a(250),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("footer",{className:"AppFooter"},r.a.createElement("p",null,a.props.children))},a}return Object(c.a)(t,e),t}(r.a.Component)),p=a(48),h=a(15),f=(a(251),a(427)),d=a(221),g=a(420),v=a(418),E=a(423),b=a(107),y=a(421),w=function(e,t){return e/1e3*t-44},O=function(e,t,a){var n=j(a),r=n.millRateHigh,o=n.millRateLow,l=n.millRateAvg,s=n.incentiveYears;return{estHigh:C(e,t,r,s),estLow:C(e,t,o,s),estAverage:C(e,t,l,s)}},j=function(e){return{millRateHigh:100,millRateLow:80,millRateAvg:90,incentiveYears:10}},C=function(e,t,a,n){var r=w(.115*e,a),o=.05*(t-e),l=w(.115*(e+o),a),s=.115*(t-o)/1e3*a;return{currentTaxes:r,newTaxes:l,incrementalTaxSavings:s,payPerYear:l,savePerYear:s,savings:s*n}},A=a(419),S=a(145),z=a.n(S),x=a(207),k=a(424),I=a(428),Y=a(425),Z=a(417),R=a(429),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).test=function(e){console.log(e)},a.render=function(){return r.a.createElement(k.a,{style:{width:"100%"},center:a.state.position,zoom:a.state.zoom},r.a.createElement(I.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(Y.a,{key:a.state.polygons,data:a.state.polygons}),r.a.createElement(Z.a,{position:a.state.position,onClick:a.props.setZoneFromMap},r.a.createElement(R.a,{open:!0},"Successfully set your zone to 1")))},a.state={polygons:[],position:[39.1155,-94.7478],zoom:11},a}return Object(c.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(x.a)(z.a.mark(function e(){var t,a;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({polygons:a}),console.log(this.state.polygons);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component),P={textAlign:"center",marginBottom:"1em"},T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:P},r.a.createElement(A.a,{trigger:r.a.createElement(y.a,{fluid:!0,size:"large"},"Select Your Zone")},r.a.createElement(A.a.Header,null,"Select Your Zone"),r.a.createElement(A.a.Content,{image:!0},r.a.createElement(M,{setZoneFromMap:this.props.setZoneFromMap}))))}}]),t}(r.a.Component);function $(e){var t=e.toString().replace(/,*\$*/g,"");return parseInt(Math.floor(t))}function H(e){return e.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleCurrent=function(e){a.setState({current:$(e.target.value)})},a.handleImprovements=function(e){a.setState({afterImprovements:$(e.target.value)})},a.handleZone=function(e){a.setState({zone:$(e.target.value)})},a.setZoneFromMap=function(e){a.setState({zone:1})},a.render=function(){return r.a.createElement(f.a,{textAlign:"left",className:"NRACalculator"},r.a.createElement(d.a,null,a.state.estimates&&r.a.createElement(g.a,{color:"yellow",style:{textAlign:"center"}},r.a.createElement("p",null,"Note: These estimates use fake mill rates, and are not yet accurate approximations.")),r.a.createElement(v.a,{size:"large"},r.a.createElement(E.a,{stacked:!0},r.a.createElement(v.a.Input,{label:"Current Value",labelPosition:"left",placeholder:"Current Value",onChange:a.handleCurrent},r.a.createElement(b.a,null,"$"),r.a.createElement("input",null)),r.a.createElement(v.a.Input,{label:"Est. Value After Improvements",labelPosition:"left",placeholder:"Est. Value After Improvements",onChange:a.handleImprovements},r.a.createElement(b.a,null,"$"),r.a.createElement("input",null)),r.a.createElement(v.a.Input,{label:"Zone",placeholder:"Zone",value:a.state.zone?a.state.zone:void 0,onChange:a.handleZone}),r.a.createElement(T,{setZoneFromMap:a.setZoneFromMap}),r.a.createElement(y.a,{color:"blue",fluid:!0,size:"large",onClick:a.handleSubmit},"Calculate Rebate"),a.state.estimates&&r.a.createElement(E.a,{basic:!0,textAlign:"center"},r.a.createElement("p",null,"These estimates provide a range depending on the mill rate, which vary within each zone."),r.a.createElement("p",null,r.a.createElement("b",null,"Pay Per Year:")," $",H(a.state.estimates.estLow.payPerYear)," - $",H(a.state.estimates.estHigh.payPerYear)),r.a.createElement("p",null,r.a.createElement("b",null,"Savings Per Year:")," $",H(a.state.estimates.estLow.savePerYear)," - $",H(a.state.estimates.estHigh.savePerYear)),r.a.createElement("p",null,r.a.createElement("b",null,"10 Year Savings:")," $",H(a.state.estimates.estLow.savings)," - $",H(a.state.estimates.estHigh.savings)))))))},a.state={current:"",afterImprovements:"",zone:"",estimates:""},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(c.a)(t,e),Object(p.a)(t,[{key:"handleSubmit",value:function(){this.state.current&&this.state.afterImprovements&&this.state.zone&&(this.setState({estimates:O(this.state.current,this.state.afterImprovements,this.state.zone)}),console.warn("ZONE/MILL RATE DATA IS MOCKED. THESE VALUES ARE NOT ACCURATE."),console.log(this.state.estimates))}}]),t}(r.a.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null,"Neighborhood Revitalization Act Calculator"),r.a.createElement("p",null,"This is an effort by the Unified Government of Wyandotte County and Kansas City, Kansas to promote revitalization of designated areas through tax incentives on new construction and improvements. Start below to estimate your potential tax incentive."),r.a.createElement(L,null),r.a.createElement(m,null,"Created in partnership with ",r.a.createElement("a",{href:"https://codeforkc.org"},"Code for KC"),r.a.createElement("br",null),"Contribute code on ",r.a.createElement("a",{href:"https://github.com/codeforkansascity/nra_calc"},"Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(o.render)(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[240,1,2]]]);
//# sourceMappingURL=main.ff611cd6.chunk.js.map