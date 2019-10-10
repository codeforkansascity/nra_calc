(window["webpackJsonpnra-calc"]=window["webpackJsonpnra-calc"]||[]).push([[0],{238:function(e,t,a){e.exports=a(406)},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(204),i=(a(245),a(21)),o=a(24),s=a(22),c=a(25),u=(a(246),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return l.a.createElement("header",{className:"AppHeader"},l.a.createElement("h1",null,a.props.children))},a}return Object(c.a)(t,e),t}(l.a.Component)),m=(a(247),a(248),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return l.a.createElement("footer",{className:"AppFooter"},l.a.createElement("p",null,a.props.children))},a}return Object(c.a)(t,e),t}(l.a.Component)),h=a(29),p=a(16),v=(a(249),a(424)),d=a(219),g=a(416),f=a(421),b=a(104),y=a(67),E=a(419),w=function(e,t){return e/1e3*t-44},C=function(e,t,a){var n=O.get(a),l=n.millRateHigh,r=n.millRateLow,i=n.millRateAvg,o=n.incentiveYears;return{estHigh:k(e,t,l,o),estLow:k(e,t,r,o),estAverage:k(e,t,i,o)}},k=function(e,t,a,n){var l=w(.115*e,a),r=.05*(t-e),i=w(.115*(e+r),a),o=.115*(t-r)/1e3*a;return{incentiveYears:n,currentTaxes:l,newTaxes:i,incrementalTaxSavings:o,payPerYear:i,savePerYear:o,savings:o*n}},O=new Map([["Area 1",{millRateLow:166.699688,millRateHigh:184.882947,millRateAvg:168.0502949,incentiveYears:10}],["Area 2 East",{millRateLow:151.970885,millRateHigh:187.634256,millRateAvg:168.6046749,incentiveYears:10}],["Area 2 East - State Avenue Corridor",{millRateLow:166.699688,millRateHigh:172.831745,millRateAvg:171.7744938,incentiveYears:10}],["Area 2 West",{millRateLow:166.699688,millRateHigh:176.91593,millRateAvg:166.7490233,incentiveYears:10}],["Area 3",{millRateLow:172.760032,millRateHigh:180.7673,millRateAvg:172.8878387,incentiveYears:10}],["Area 4",{millRateLow:166.699688,millRateHigh:176.931593,millRateAvg:174.3241988,incentiveYears:10}],["Bonner Springs Zone 3",{millRateLow:166.87731,millRateHigh:166.87731,millRateAvg:166.87731,incentiveYears:10}],["Bonner Springs Zone 4",{millRateLow:166.87731,millRateHigh:180.76073,millRateAvg:166.8845297,incentiveYears:10}],["Edwardsville",{millRateLow:166.87731,millRateHigh:180.76073,millRateAvg:180.6365491,incentiveYears:10}]]),A=a(417),j=a(143),R=a.n(j),S=a(205),T=a(418),x=a(425),z=a(422),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).getAreaFromClick=function(e){a.props.setZoneFromMap(e.layer.feature.properties.Name),a.setState({selection:e.layer.feature}),a.handleHighlight()},a.render=function(){return l.a.createElement(T.a,{style:{width:"100%"},center:a.state.position,zoom:a.state.zoom,doubleClickZoom:!1},l.a.createElement(x.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),l.a.createElement(z.a,{key:a.state.polygons,data:a.state.polygons,onClick:a.getAreaFromClick,style:{color:"green"}}),a.state.highlight&&l.a.createElement(z.a,{key:a.state.selection,data:a.state.selection,style:{color:"yellow"}}))},a.state={polygons:[],position:[39.1155,-94.7478],zoom:11,selection:[],highlight:!1},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"handleHighlight",value:function(){!0===this.state.highlight?this.setState({highlight:!1}):this.setState({highlight:!0})}},{key:"componentDidMount",value:function(){var e=Object(S.a)(R.a.mark(function e(){var t,a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({polygons:a}),console.log(this.state.polygons);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(l.a.Component),Y={textAlign:"center",marginBottom:"1em"},I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleOpen=function(){a.setState({modalOpen:!0})},a.handleClose=function(){a.setState({modalOpen:!1})},a.state={modalOpen:!1},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:Y},l.a.createElement(A.a,{trigger:l.a.createElement(E.a,{fluid:!0,size:"large",onClick:this.handleOpen,color:this.props.zone?this.props.successColor:void 0},this.props.zone?l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{name:"checkmark"})," Zone is set: ",this.props.zone):this.props.message),open:this.state.modalOpen,onClose:this.handleClose},l.a.createElement(A.a.Header,null,this.props.message,l.a.createElement("a",{href:"#",style:{float:"right"}},"Where's my zone?")),l.a.createElement(A.a.Content,{image:!0},l.a.createElement(H,{setZoneFromMap:this.props.setZoneFromMap})),this.props.zone&&l.a.createElement(A.a.Actions,null,l.a.createElement(E.a,{primary:!0,fluid:!0,size:"large",onClick:this.handleClose},l.a.createElement(y.a,{name:"checkmark"}),"Done"))))}}]),t}(l.a.Component),N=[{key:"s",text:"Single-Family",value:"single"},{key:"m",text:"Multi-Family",value:"multi"},{key:"oh",text:"Other",value:"other"}],F=[{key:"c",text:"New Construction",value:"construction"},{key:"r",text:"Rehabilitation",value:"rehabilitation"},{key:"oi",text:"Other",value:"other"}];function L(e){var t=e.toString().replace(/,*\$*/g,"");return parseInt(Math.floor(t))}function M(e){return e.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleCurrent=function(e,t){a.setState({current:L(t.value)})},a.handleValueAfterInvestment=function(e,t){a.setState({valueAfterInvestment:L(t.value)})},a.handleHistorical=function(e,t){a.setState({isHistorical:t.checked})},a.handleInvestmentType=function(e,t){a.setState({investmentType:t.value})},a.handlePropertyType=function(e,t){a.setState({propertyType:t.value})},a.handleZone=function(e,t){a.setState({zone:L(t.value)})},a.setZoneFromMap=function(e){a.setState({zone:e})},a.render=function(){return l.a.createElement(v.a,{textAlign:"left",className:"NRACalculator"},l.a.createElement(d.a,null,l.a.createElement(g.a,{size:"large"},l.a.createElement(f.a,{stacked:!0},l.a.createElement(g.a.Group,{widths:"equal"},l.a.createElement(g.a.Input,{fluid:!0,label:"Current Property Value",labelPosition:"left",placeholder:"Current Property Value",onChange:a.handleCurrent},l.a.createElement(b.a,null,"$"),l.a.createElement("input",null)),l.a.createElement(g.a.Input,{fluid:!0,label:"Est. Value After Investment",labelPosition:"left",placeholder:"Est. Value After Investment",onChange:a.handleValueAfterInvestment},l.a.createElement(b.a,null,"$"),l.a.createElement("input",null))),l.a.createElement(g.a.Group,{widths:"equal"},l.a.createElement(g.a.Select,{fluid:!0,label:"Investment Type",options:F,placeholder:"Investment Type",onChange:a.handleInvestmentType}),l.a.createElement(g.a.Select,{fluid:!0,label:"Building Type",options:N,placeholder:"Building Type",onChange:a.handlePropertyType})),l.a.createElement(g.a.Group,{grouped:!0},l.a.createElement("label",null,"Other"),l.a.createElement(g.a.Checkbox,{label:"This is a Historical Property",onChange:a.handleHistorical})),l.a.createElement(I,{setZoneFromMap:a.setZoneFromMap,message:l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{name:"map"})," Select Your Zone"),successColor:"green",zone:a.state.zone}),l.a.createElement(E.a,{disabled:!a.state.current||!a.state.valueAfterInvestment||!a.state.zone||!a.state.investmentType||!a.state.propertyType,color:"blue",fluid:!0,size:"large",onClick:a.handleSubmit},l.a.createElement(y.a,{name:"calculator"}),"Calculate Rebate"),a.state.estimates&&l.a.createElement(f.a,{basic:!0,textAlign:"center"},l.a.createElement("p",null,"These estimates provide a range depending on the mill rate, which vary within each zone."),l.a.createElement("p",null,l.a.createElement("b",null,"You pay")," $",M(a.state.estimates.estLow.payPerYear)," - $",M(a.state.estimates.estHigh.payPerYear)," in taxes each year"),l.a.createElement("p",null,l.a.createElement("b",null,"You save")," $",M(a.state.estimates.estLow.savePerYear)," - $",M(a.state.estimates.estHigh.savePerYear)," in taxes per year"),l.a.createElement("p",null,l.a.createElement("b",null,"Over ",a.state.estimates.estAverage.incentiveYears," years, you save")," $",M(a.state.estimates.estLow.savings)," - $",M(a.state.estimates.estHigh.savings)," in taxes."))))))},a.state={current:"",valueAfterInvestment:"",zone:"",estimates:"",isHistorical:!1,investmentType:"",propertyType:""},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(){this.state.current&&this.state.valueAfterInvestment&&this.state.zone&&(this.setState({estimates:C(this.state.current,this.state.valueAfterInvestment,this.state.zone)}),console.log(this.state.estimates))}}]),t}(l.a.Component),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,r="tab-list-item";return a===n&&(r+=" tab-list-active"),l.a.createElement("li",{className:r,onClick:e},n)}}]),t}(n.Component),B=(a(405),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return l.a.createElement("div",{className:"tabs"},l.a.createElement("ol",{className:"tab-list"},t.map(function(t){var n=t.props.label;return l.a.createElement(Z,{activeTab:a,key:n,label:n,onClick:e})})),l.a.createElement("div",{className:"tab-content"},t.map(function(e){if(e.props.label===a)return e.props.children})))}}]),t}(n.Component)),$=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("a",{href:"https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/CR-NRA-Brochure.pdf",target:"_blank",rel:"noopener noreferrer",style:W},l.a.createElement("h2",null,"Brochure")),l.a.createElement("p",null,"Details about the Neighborhood Revitalization Act including contact information, what types of properties qualify, information about zones, etc."),l.a.createElement("a",{href:"https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/2018-2020-NRA-Application.pdf",target:"_blank",rel:"noopener noreferrer",style:W},l.a.createElement("h2",null,"Application")),l.a.createElement("p",null,"Begin the application process by filling out this form. The application includes details about how to submit for processing."),l.a.createElement("h2",{label:"Contact"},"Contact information"),l.a.createElement("div",null,l.a.createElement("p",null," Stephanie M. Moore")),l.a.createElement("div",null,l.a.createElement("p",null,"smmoore@wycokck.org")),l.a.createElement("div",null,l.a.createElement("p",null," (913) 573-5730")))}}]),t}(n.Component),W={fontWeight:"bold",marginBottom:"1em",textAlign:"center",display:"block"},D=$;var K=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null,"Neighborhood Revitalization Act"),l.a.createElement(B,null,l.a.createElement("div",{label:"Calculator"},l.a.createElement("p",null,"This is an effort by the Unified Government of Wyandotte County and Kansas City, Kansas to promote revitalization of designated areas through tax incentives on new construction and improvements. Start below to estimate your potential tax incentive."),l.a.createElement(P,null)),l.a.createElement("div",{label:"Resources"},l.a.createElement(D,null))),l.a.createElement(m,null,"Created in partnership with ",l.a.createElement("a",{href:"https://codeforkc.org"},"Code for KC"),l.a.createElement("br",null),"Contribute code on ",l.a.createElement("a",{href:"https://github.com/codeforkansascity/nra_calc"},"Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[238,1,2]]]);
//# sourceMappingURL=main.aaeec1ec.chunk.js.map