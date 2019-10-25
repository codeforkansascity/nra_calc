(window["webpackJsonpnra-calc"]=window["webpackJsonpnra-calc"]||[]).push([[0],{238:function(e,t,a){e.exports=a(406)},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n,r,i,l,o,s=a(0),c=a.n(s),m=a(204),u=(a(245),a(22)),h=a(25),p=a(23),b=a(26),v=(a(246),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return c.a.createElement("header",{className:"AppHeader"},c.a.createElement("h1",null,a.props.children))},a}return Object(b.a)(t,e),t}(c.a.Component)),g=(a(247),a(248),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return c.a.createElement("footer",{className:"AppFooter"},c.a.createElement("p",null,a.props.children))},a}return Object(b.a)(t,e),t}(c.a.Component)),y=a(29),d=a(17),f=(a(249),a(425)),E=a(219),w=a(416),O=a(421),j=a(104),A=a(67),k=a(420),C=a(418),I=a(11),S={singleFamilyDetached:"singleDetached",duplexSingleFamilyAttached:"singleAttachedDuplex",townhomeSingleFamilyAttached:"singleAttachedTownhome",singleDuplex:"singleDuplex",multiFamily:"multi",historic:"historic"},T=function(e,t){return e/1e3*t-44},x=function(e,t,a,n,r){var i=function(e,t,a,n,r){var i=!0,l=!0,o=[],s=0,c=R.get(r).propertyTypes,m=.115*e;if(c&&c.hasOwnProperty(n)?c[n][a]||(i=!1,o.push({id:s+=1,category:"investmentType",message:"The provided investment type doesn't fit the guidelines for this property type in ".concat(r,".")})):(i=!1,o.push({id:s+=1,category:"propertyType",message:"This property type doesn't fall under the guidelines for ".concat(r,".")})),c&&c[n]&&i){var u=c[n].minInvestment,h=u<=1?u*m:u,p=t-e;(l=p>=h)||o.push({id:s+=1,category:"minimumInvestment",message:"Investment of $".concat(p," doesn't meet the minimum of $").concat(h," for this property's type, value, and zone.")})}else l=!1;return{isEligible:i&&l,propertyEligible:i,investmentEligible:l,errors:o}}(e,t,a,n,r),l=i.isEligible,o=R.get(r),s=o.millRateHigh,c=o.millRateLow,m=o.millRateAvg,u=o.incentiveYears,h=F(e,t,s,u),p=F(e,t,c,u),b=F(e,t,m,u);return{estHigh:l?h:void 0,estLow:l?p:void 0,estAverage:l?b:void 0,eligibility:i}},F=function(e,t,a,n){var r=T(.115*e,a),i=.05*(t-e),l=T(.115*(e+i),a),o=.115*(t-i)/1e3*a;return{incentiveYears:n,currentTaxes:r,newTaxes:l,incrementalTaxSavings:o,payPerYear:l,savePerYear:o,savings:o*n}},R=new Map([["Area 1",{millRateLow:166.699688,millRateHigh:184.882947,millRateAvg:168.0502949,incentiveYears:10,propertyTypes:(n={},Object(I.a)(n,S.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(n,S.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(n,S.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(n,S.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(n,S.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(n,S.historic,{new:!1,rehab:!0,minInvestment:.05,rebate:1}),n)}],["Area 2 East",{millRateLow:151.970885,millRateHigh:187.634256,millRateAvg:168.6046749,incentiveYears:5,propertyTypes:(r={},Object(I.a)(r,S.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(r,S.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(r,S.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(r,S.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(r,S.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(r,S.historic,{new:!1,rehab:!0,minInvestment:.1,rebate:1}),r)}],["Area 2 East - State Avenue Corridor",{millRateLow:166.699688,millRateHigh:172.831745,millRateAvg:171.7744938,incentiveYears:5}],["Area 2 West",{millRateLow:166.699688,millRateHigh:176.91593,millRateAvg:166.7490233,incentiveYears:5,propertyTypes:(i={},Object(I.a)(i,S.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(i,S.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(i,S.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(i,S.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(i,S.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(i,S.historic,{new:!1,rehab:!0,minInvestment:.1,rebate:1}),i)}],["Area 3",{millRateLow:172.760032,millRateHigh:180.7673,millRateAvg:172.8878387,incentiveYears:5,propertyTypes:(l={},Object(I.a)(l,S.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(l,S.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(l,S.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(l,S.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(l,S.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(l,S.historic,{new:!1,rehab:!0,minInvestment:.15,rebate:1}),l)}],["Area 4",{millRateLow:166.699688,millRateHigh:176.931593,millRateAvg:174.3241988,incentiveYears:5,propertyTypes:(o={},Object(I.a)(o,S.singleFamilyDetached,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(o,S.duplexSingleFamilyAttached,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(o,S.townhomeSingleFamilyAttached,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(I.a)(o,S.singleDuplex,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),o)}],["Bonner Springs Zone 3",{millRateLow:166.87731,millRateHigh:166.87731,millRateAvg:166.87731,incentiveYears:5}],["Bonner Springs Zone 4",{millRateLow:166.87731,millRateHigh:180.76073,millRateAvg:166.8845297,incentiveYears:5}],["Edwardsville",{millRateLow:166.87731,millRateHigh:180.76073,millRateAvg:180.6365491,incentiveYears:5}]]),z=a(417),D=a(143),Y=a.n(D),H=a(205),N=a(419),L=a(426),P=a(423),M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).getAreaFromClick=function(e){a.props.setZoneFromMap(e.layer.feature.properties.Name),a.setState({selection:e.layer.feature}),a.handleHighlight()},a.render=function(){return c.a.createElement(N.a,{style:{width:"100%"},center:a.state.position,zoom:a.state.zoom,doubleClickZoom:!1},c.a.createElement(L.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),c.a.createElement(P.a,{key:a.state.polygons,data:a.state.polygons,onClick:a.getAreaFromClick,style:{color:"green"}}),a.state.highlight&&c.a.createElement(P.a,{key:a.state.selection,data:a.state.selection,style:{color:"yellow"}}))},a.state={polygons:[],position:[39.1155,-94.7478],zoom:11,selection:[],highlight:!1},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"handleHighlight",value:function(){!0===this.state.highlight?this.setState({highlight:!1}):this.setState({highlight:!0})}},{key:"componentDidMount",value:function(){var e=Object(H.a)(Y.a.mark(function e(){var t,a;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({polygons:a}),console.log(this.state.polygons);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(c.a.Component),$={textAlign:"center",marginBottom:"1em"},Z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleOpen=function(){a.setState({modalOpen:!0})},a.handleClose=function(){a.setState({modalOpen:!1})},a.state={modalOpen:!1},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:$},c.a.createElement(z.a,{trigger:c.a.createElement(k.a,{fluid:!0,size:"large",onClick:this.handleOpen,color:this.props.zone?this.props.successColor:void 0},this.props.zone?c.a.createElement(c.a.Fragment,null,c.a.createElement(A.a,{name:"checkmark"})," Zone is set: ",this.props.zone):this.props.message),open:this.state.modalOpen,onClose:this.handleClose},c.a.createElement(z.a.Header,null,this.props.message),c.a.createElement(z.a.Content,{image:!0},c.a.createElement(M,{setZoneFromMap:this.props.setZoneFromMap})),c.a.createElement(z.a.Actions,null,!this.props.zone&&c.a.createElement(k.a,{fluid:!0,size:"large",color:"blue"},"Where is my zone?"),this.props.zone&&c.a.createElement(k.a,{primary:!0,fluid:!0,size:"large",onClick:this.handleClose},c.a.createElement(A.a,{name:"checkmark"}),"Done"))))}}]),t}(c.a.Component),B=[{key:"s",text:"Single-Family Detached",value:S.singleFamilyDetached},{key:"d",text:"Duplex Single-Family Attached",value:S.duplexSingleFamilyAttached},{key:"t",text:"Townhome Single-Family Attached",value:S.townhomeSingleFamilyAttached},{key:"sd",text:"Single Duplex",value:S.singleDuplex},{key:"m",text:"Multi-Family",value:S.multiFamily},{key:"h",text:"Historic",value:S.historic}],W=[{key:"c",text:"New Construction",value:"new"},{key:"r",text:"Rehabilitation",value:"rehab"}];function K(e){var t=e.toString().replace(/,*\$*/g,"");return parseInt(Math.floor(t))}function V(e){return e.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleCurrent=function(e,t){a.setState({current:K(t.value)})},a.handleValueAfterInvestment=function(e,t){a.setState({valueAfterInvestment:K(t.value)})},a.handleInvestmentType=function(e,t){a.setState({investmentType:t.value})},a.handlePropertyType=function(e,t){a.setState({propertyType:t.value})},a.handleZone=function(e,t){a.setState({zone:K(t.value)})},a.setZoneFromMap=function(e){a.setState({zone:e})},a.render=function(){return c.a.createElement(f.a,{textAlign:"left",className:"NRACalculator"},c.a.createElement(E.a,null,c.a.createElement(w.a,{size:"large"},c.a.createElement(O.a,{stacked:!0},c.a.createElement(w.a.Group,{widths:"equal"},c.a.createElement(w.a.Input,{fluid:!0,label:"Current Property Value",labelPosition:"left",placeholder:"Current Property Value",onChange:a.handleCurrent},c.a.createElement(j.a,null,"$"),c.a.createElement("input",null)),c.a.createElement(w.a.Input,{fluid:!0,error:a.state.valueAfterInvestmentError,label:"Est. Value After Investment",labelPosition:"left",placeholder:"Est. Value After Investment",onChange:a.handleValueAfterInvestment},c.a.createElement(j.a,null,"$"),c.a.createElement("input",null))),c.a.createElement(w.a.Group,{widths:"equal"},c.a.createElement(w.a.Select,{fluid:!0,error:a.state.investmentTypeError,label:"Investment Type",options:W,placeholder:"Investment Type",onChange:a.handleInvestmentType}),c.a.createElement(w.a.Select,{fluid:!0,error:a.state.propertyTypeError,label:"Property Type",options:B,placeholder:"Building Type",onChange:a.handlePropertyType})),c.a.createElement(Z,{setZoneFromMap:a.setZoneFromMap,message:c.a.createElement(c.a.Fragment,null,c.a.createElement(A.a,{name:"map"})," Select Your Zone"),successColor:"green",zone:a.state.zone}),c.a.createElement(k.a,{disabled:!a.state.current||!a.state.valueAfterInvestment||!a.state.zone||!a.state.investmentType||!a.state.propertyType,color:"blue",fluid:!0,size:"large",onClick:a.handleSubmit},c.a.createElement(A.a,{name:"calculator"}),"Calculate Rebate"),a.state.estimates.estAverage&&c.a.createElement(O.a,{basic:!0,textAlign:"center"},c.a.createElement("p",null,"These estimates provide a range depending on the mill rate, which vary within each zone."),c.a.createElement("p",null,c.a.createElement("b",null,"You pay")," $",V(a.state.estimates.estLow.payPerYear)," - $",V(a.state.estimates.estHigh.payPerYear)," in taxes each year"),c.a.createElement("p",null,c.a.createElement("b",null,"You save")," $",V(a.state.estimates.estLow.savePerYear)," - $",V(a.state.estimates.estHigh.savePerYear)," in taxes per year"),c.a.createElement("p",null,c.a.createElement("b",null,"Over ",a.state.estimates.estAverage.incentiveYears," years, you save")," $",V(a.state.estimates.estLow.savings)," - $",V(a.state.estimates.estHigh.savings)," in taxes.")),a.state.errors.length>0&&c.a.createElement(O.a,{basic:!0,textAlign:"center"},a.state.errors.map(function(e){return c.a.createElement(C.a,{color:"red",key:e.id},e.message)}))))))},a.state={current:"",valueAfterInvestment:"",zone:"",estimates:{},investmentType:"",propertyType:"",eligibility:{},errors:[]},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"handleSubmit",value:function(){if(this.state.current&&this.state.valueAfterInvestment&&this.state.zone){var e=x(this.state.current,this.state.valueAfterInvestment,this.state.investmentType,this.state.propertyType,this.state.zone);this.setState({estimates:e,eligibility:e.eligibility,errors:e.eligibility.errors,investmentTypeError:e.eligibility.errors.map(function(e){return"investmentType"===e.category})[0],propertyTypeError:e.eligibility.errors.map(function(e){return"propertyType"===e.category})[0],valueAfterInvestmentError:e.eligibility.errors.map(function(e){return"minimumInvestment"===e.category})[0]})}}}]),t}(c.a.Component),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,r="tab-list-item";return a===n&&(r+=" tab-list-active"),c.a.createElement("li",{className:r,onClick:e},n)}}]),t}(s.Component),q=(a(405),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return c.a.createElement("div",{className:"tabs"},c.a.createElement("ol",{className:"tab-list"},t.map(function(t){var n=t.props.label;return c.a.createElement(_,{activeTab:a,key:n,label:n,onClick:e})})),c.a.createElement("div",{className:"tab-content"},t.map(function(e){if(e.props.label===a)return e.props.children})))}}]),t}(s.Component)),J=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("a",{href:"https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/CR-NRA-Brochure.pdf",target:"_blank",rel:"noopener noreferrer",style:U},c.a.createElement("h3",null,"Brochure")),c.a.createElement("p",null,"Details about the Neighborhood Revitalization Act including contact information, what types of properties qualify, information about zones, etc."),c.a.createElement("a",{href:"https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/2018-2020-NRA-Application.pdf",target:"_blank",rel:"noopener noreferrer",style:U},c.a.createElement("h3",null,"Application")),c.a.createElement("p",null,"Begin the application process by filling out this form. The application includes details about how to submit for processing."),c.a.createElement("h3",{label:"Contact"},"Contact information"),c.a.createElement("div",null,c.a.createElement("p",null," Stephanie M. Moore")),c.a.createElement("div",null,c.a.createElement("p",null,"smmoore@wycokck.org")),c.a.createElement("div",null,c.a.createElement("p",null," (913) 573-5730")))}}]),t}(s.Component),U={fontWeight:"bold",marginBottom:"1em",textAlign:"center",display:"block"},Q=J;var X=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null,"Neighborhood Revitalization Act"),c.a.createElement(q,null,c.a.createElement("div",{label:"Calculator"},c.a.createElement("p",null,"This is an effort by the Unified Government of Wyandotte County and Kansas City, Kansas to promote revitalization of designated areas through tax incentives on new construction and improvements. Start below to estimate your potential tax incentive."),c.a.createElement(G,null)),c.a.createElement("div",{label:"Resources"},c.a.createElement(Q,null))),c.a.createElement(g,null,"Created in partnership with ",c.a.createElement("a",{href:"https://codeforkc.org"},"Code for KC"),c.a.createElement("br",null),"Contribute code on ",c.a.createElement("a",{href:"https://github.com/codeforkansascity/nra_calc"},"Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(m.render)(c.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[238,1,2]]]);
//# sourceMappingURL=main.8e687981.chunk.js.map