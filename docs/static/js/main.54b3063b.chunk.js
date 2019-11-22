(window["webpackJsonpnra-calc"]=window["webpackJsonpnra-calc"]||[]).push([[0],{238:function(e,t,a){e.exports=a(406)},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n,r,i,l,o,s,c=a(0),m=a.n(c),u=a(204),h=(a(245),a(22)),p=a(25),b=a(23),g=a(26),v=(a(246),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return m.a.createElement("header",{className:"AppHeader"},m.a.createElement("h1",null,a.props.children))},a}return Object(g.a)(t,e),t}(m.a.Component)),y=(a(247),a(248),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return m.a.createElement("footer",{className:"AppFooter"},m.a.createElement("p",null,a.props.children))},a}return Object(g.a)(t,e),t}(m.a.Component)),d=a(29),f=a(17),w=(a(249),a(425)),E=a(219),O=a(416),j=a(421),A=a(104),I=a(67),k=a(420),C=a(418),S=a(8),x={singleFamilyDetached:"singleDetached",duplexSingleFamilyAttached:"singleAttachedDuplex",townhomeSingleFamilyAttached:"singleAttachedTownhome",singleDuplex:"singleDuplex",multiFamily:"multi",historic:"historic"},T=function(e,t){return e/1e3*t-44},F=function(e,t,a,n,r){var i=function(e,t,a,n,r){var i=!0,l=!0,o=[],s=0,c=D.get(r).propertyTypes,m=.115*e;if(!c)return i=!1,l=!1,o.push({message:"".concat(r," is excluded from the NRA program at this time.")}),{isEligible:i&&l,propertyEligible:i,investmentEligible:l,errors:o};if(c&&c.hasOwnProperty(n)?c[n][a]||(i=!1,o.push({id:s+=1,category:"investmentType",message:"The provided investment type doesn't fit the guidelines for this property type in ".concat(r,".")})):(i=!1,o.push({id:s+=1,category:"propertyType",message:"This property type doesn't fall under the guidelines for ".concat(r,".")})),c&&c[n]&&i){var u=c[n].minInvestment,h=u<=1?u*m:u,p=t-e;(l=p>=h)||o.push({id:s+=1,category:"minimumInvestment",message:"Investment of $".concat(p," doesn't meet the minimum of $").concat(h," for this property's type, value, and zone.")})}else l=!1;return{isEligible:i&&l,propertyEligible:i,investmentEligible:l,errors:o}}(e,t,a,n,r),l=i.isEligible,o=D.get(r),s=o.millRateHigh,c=o.millRateLow,m=o.millRateAvg,u=o.incentiveYears,h=R(e,t,s,u,n),p=R(e,t,c,u,n),b=R(e,t,m,u,n);return{estHigh:l?h:void 0,estLow:l?p:void 0,estAverage:l?b:void 0,eligibility:i}},R=function(e,t,a,n,r){var i=T(.115*e,a),l=(t-e)*(r===x.historic?0:.05),o=T(.115*(e+l),a),s=.115*(t-l)/1e3*a;return{incentiveYears:n,currentTaxes:i,newTaxes:o,incrementalTaxSavings:s,payPerYear:o,savePerYear:s,savings:s*n}},D=new Map([["Area 1",{millRateLow:166.699688,millRateHigh:184.882947,millRateAvg:168.0502949,incentiveYears:10,propertyTypes:(n={},Object(S.a)(n,x.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(n,x.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(n,x.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(n,x.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(n,x.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(n,x.historic,{new:!1,rehab:!0,minInvestment:.05,rebate:1}),n)}],["Area 2 East",{millRateLow:151.970885,millRateHigh:187.634256,millRateAvg:168.6046749,incentiveYears:5,propertyTypes:(r={},Object(S.a)(r,x.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(r,x.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(r,x.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(r,x.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(r,x.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(r,x.historic,{new:!1,rehab:!0,minInvestment:.1,rebate:1}),r)}],["Area 2 East - State Avenue Corridor",{millRateLow:166.699688,millRateHigh:172.831745,millRateAvg:171.7744938,incentiveYears:5,propertyTypes:(i={},Object(S.a)(i,x.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(i,x.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(i,x.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(i,x.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(i,x.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(i,x.historic,{new:!1,rehab:!0,minInvestment:.1,rebate:1}),i)}],["Area 2 West",{millRateLow:166.699688,millRateHigh:176.91593,millRateAvg:166.7490233,incentiveYears:5,propertyTypes:(l={},Object(S.a)(l,x.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(l,x.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(l,x.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(l,x.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(l,x.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(l,x.historic,{new:!1,rehab:!0,minInvestment:.1,rebate:1}),l)}],["Area 3",{millRateLow:172.760032,millRateHigh:180.7673,millRateAvg:172.8878387,incentiveYears:5,propertyTypes:(o={},Object(S.a)(o,x.singleFamilyDetached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(o,x.duplexSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(o,x.townhomeSingleFamilyAttached,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(o,x.singleDuplex,{new:!0,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(o,x.multiFamily,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(o,x.historic,{new:!1,rehab:!0,minInvestment:.15,rebate:1}),o)}],["Area 4",{millRateLow:166.699688,millRateHigh:176.931593,millRateAvg:174.3241988,incentiveYears:5,propertyTypes:(s={},Object(S.a)(s,x.singleFamilyDetached,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(s,x.duplexSingleFamilyAttached,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(s,x.townhomeSingleFamilyAttached,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),Object(S.a)(s,x.singleDuplex,{new:!1,rehab:!0,minInvestment:.15,rebate:.95}),s)}],["Bonner Springs Zone 3",{millRateLow:166.87731,millRateHigh:166.87731,millRateAvg:166.87731}],["Bonner Springs Zone 4",{millRateLow:166.87731,millRateHigh:180.76073,millRateAvg:166.8845297}],["Edwardsville",{millRateLow:166.87731,millRateHigh:180.76073,millRateAvg:180.6365491}]]),z=a(417),H=a(143),Y=a.n(H),N=a(205),L=a(419),P=a(426),M=a(423),$=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).getAreaFromClick=function(e){a.props.setZoneFromMap(e.layer.feature.properties.Name),a.setState({selection:e.layer.feature}),a.handleHighlight()},a.render=function(){return m.a.createElement(L.a,{style:{width:"100%"},center:a.state.position,zoom:a.state.zoom,doubleClickZoom:!1},m.a.createElement(P.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),m.a.createElement(M.a,{key:a.state.polygons,data:a.state.polygons,onClick:a.getAreaFromClick,style:{color:"green"}}),a.state.highlight&&m.a.createElement(M.a,{key:a.state.selection,data:a.state.selection,style:{color:"yellow"}}))},a.state={polygons:[],position:[39.1155,-94.7478],zoom:11,selection:[],highlight:!1},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleHighlight",value:function(){!0===this.state.highlight?this.setState({highlight:!1}):this.setState({highlight:!0})}},{key:"componentDidMount",value:function(){var e=Object(N.a)(Y.a.mark(function e(){var t,a;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({polygons:a}),console.log(this.state.polygons);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(m.a.Component),Z={textAlign:"center",marginBottom:"1em"},B=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleOpen=function(){a.setState({modalOpen:!0})},a.handleClose=function(){a.setState({modalOpen:!1})},a.state={modalOpen:!1},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{style:Z},m.a.createElement(z.a,{trigger:m.a.createElement(k.a,{fluid:!0,size:"large",onClick:this.handleOpen,color:this.props.zone?this.props.successColor:void 0},this.props.zone?m.a.createElement(m.a.Fragment,null,m.a.createElement(I.a,{name:"checkmark"})," Zone is set: ",this.props.zone):this.props.message),open:this.state.modalOpen,onClose:this.handleClose},m.a.createElement(z.a.Header,null,this.props.message),m.a.createElement(z.a.Content,{image:!0},m.a.createElement($,{setZoneFromMap:this.props.setZoneFromMap})),m.a.createElement(z.a.Actions,null,this.props.zone&&m.a.createElement(k.a,{primary:!0,fluid:!0,size:"large",onClick:this.handleClose},m.a.createElement(I.a,{name:"checkmark"}),"Done"))))}}]),t}(m.a.Component),K=[{key:"s",text:"Single-Family Detached",value:x.singleFamilyDetached},{key:"d",text:"Duplex Single-Family Attached",value:x.duplexSingleFamilyAttached},{key:"t",text:"Townhome Single-Family Attached",value:x.townhomeSingleFamilyAttached},{key:"sd",text:"Single Duplex",value:x.singleDuplex},{key:"m",text:"Multi-Family",value:x.multiFamily},{key:"h",text:"Historic",value:x.historic}],W=[{key:"c",text:"New Construction",value:"new"},{key:"r",text:"Rehabilitation",value:"rehab"}];function V(e){var t=e.toString().replace(/,*\$*/g,"");return parseInt(Math.floor(t))}function G(e){return e.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var _=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).handleCurrent=function(e,t){a.setState({current:V(t.value)})},a.handleValueAfterInvestment=function(e,t){a.setState({valueAfterInvestment:V(t.value)})},a.handleInvestmentType=function(e,t){a.setState({investmentType:t.value})},a.handlePropertyType=function(e,t){a.setState({propertyType:t.value})},a.handleZone=function(e,t){a.setState({zone:V(t.value)})},a.setZoneFromMap=function(e){a.setState({zone:e})},a.render=function(){return m.a.createElement(w.a,{textAlign:"left",className:"NRACalculator"},m.a.createElement(E.a,null,m.a.createElement(O.a,{size:"large"},m.a.createElement(j.a,{stacked:!0},m.a.createElement(O.a.Group,{widths:"equal"},m.a.createElement(O.a.Input,{fluid:!0,label:"Current Property Value",labelPosition:"left",placeholder:"Current Property Value",onChange:a.handleCurrent},m.a.createElement(A.a,null,"$"),m.a.createElement("input",null)),m.a.createElement(O.a.Input,{fluid:!0,error:a.state.valueAfterInvestmentError,label:"Est. Value After Investment",labelPosition:"left",placeholder:"Est. Value After Investment",onChange:a.handleValueAfterInvestment},m.a.createElement(A.a,null,"$"),m.a.createElement("input",null))),m.a.createElement(O.a.Group,{widths:"equal"},m.a.createElement(O.a.Select,{fluid:!0,error:a.state.investmentTypeError,label:"Investment Type",options:W,placeholder:"Investment Type",onChange:a.handleInvestmentType}),m.a.createElement(O.a.Select,{fluid:!0,error:a.state.propertyTypeError,label:"Property Type",options:K,placeholder:"Building Type",onChange:a.handlePropertyType})),m.a.createElement(B,{setZoneFromMap:a.setZoneFromMap,message:m.a.createElement(m.a.Fragment,null,m.a.createElement(I.a,{name:"map"})," Select Your Zone"),successColor:"green",zone:a.state.zone}),m.a.createElement(k.a,{disabled:!a.state.current||!a.state.valueAfterInvestment||!a.state.zone||!a.state.investmentType||!a.state.propertyType,color:"blue",fluid:!0,size:"large",onClick:a.handleSubmit},m.a.createElement(I.a,{name:"calculator"}),"Calculate Rebate"),a.state.estimates.estAverage&&m.a.createElement(j.a,{basic:!0,textAlign:"center"},m.a.createElement("p",null,"These estimates provide a range depending on the mill rate, which vary within each zone."),m.a.createElement("p",null,m.a.createElement("b",null,"You pay")," $",G(a.state.estimates.estLow.payPerYear)," - $",G(a.state.estimates.estHigh.payPerYear)," in taxes each year"),m.a.createElement("p",null,m.a.createElement("b",null,"You save")," $",G(a.state.estimates.estLow.savePerYear)," - $",G(a.state.estimates.estHigh.savePerYear)," in taxes per year"),m.a.createElement("p",null,m.a.createElement("b",null,"Over ",a.state.estimates.estAverage.incentiveYears," years, you save")," $",G(a.state.estimates.estLow.savings)," - $",G(a.state.estimates.estHigh.savings)," in taxes.")),a.state.errors.length>0&&m.a.createElement(j.a,{basic:!0,textAlign:"center"},a.state.errors.map(function(e){return m.a.createElement(C.a,{color:"red",key:e.id},e.message)}))))))},a.state={current:"",valueAfterInvestment:"",zone:"",estimates:{},investmentType:"",propertyType:"",eligibility:{},errors:[]},a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handleSubmit",value:function(){if(this.state.current&&this.state.valueAfterInvestment&&this.state.zone){var e=F(this.state.current,this.state.valueAfterInvestment,this.state.investmentType,this.state.propertyType,this.state.zone);this.setState({estimates:e,eligibility:e.eligibility,errors:e.eligibility.errors,investmentTypeError:e.eligibility.errors.map(function(e){return"investmentType"===e.category})[0],propertyTypeError:e.eligibility.errors.map(function(e){return"propertyType"===e.category})[0],valueAfterInvestmentError:e.eligibility.errors.map(function(e){return"minimumInvestment"===e.category})[0]})}}}]),t}(m.a.Component),q=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,r="tab-list-item";return a===n&&(r+=" tab-list-active"),m.a.createElement("li",{className:r,onClick:e},n)}}]),t}(c.Component),J=(a(405),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return m.a.createElement("div",{className:"tabs"},m.a.createElement("ol",{className:"tab-list"},t.map(function(t){var n=t.props.label;return m.a.createElement(q,{activeTab:a,key:n,label:n,onClick:e})})),m.a.createElement("div",{className:"tab-content"},t.map(function(e){if(e.props.label===a)return e.props.children})))}}]),t}(c.Component)),U=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{style:{textAlign:"center"}},m.a.createElement("a",{href:"https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/CR-NRA-Brochure.pdf",target:"_blank",rel:"noopener noreferrer",style:Q},m.a.createElement("h3",null,"Brochure")),m.a.createElement("p",null,"Details about the Neighborhood Revitalization Act including contact information, what types of properties qualify, information about zones, etc."),m.a.createElement("a",{href:"https://www.wycokck.org/WycoKCK/media/Economic-Development/Documents/2018-2020-NRA-Application.pdf",target:"_blank",rel:"noopener noreferrer",style:Q},m.a.createElement("h3",null,"Application")),m.a.createElement("p",null,"Begin the application process by filling out this form. The application includes details about how to submit for processing."),m.a.createElement("h3",{label:"Contact"},"Contact information"),m.a.createElement("div",null,m.a.createElement("p",null," Stephanie M. Moore")),m.a.createElement("div",null,m.a.createElement("p",null,"smmoore@wycokck.org")),m.a.createElement("div",null,m.a.createElement("p",null," (913) 573-5730")))}}]),t}(c.Component),Q={fontWeight:"bold",marginBottom:"1em",textAlign:"center",display:"block"},X=U;var ee=function(){return m.a.createElement("div",{className:"App"},m.a.createElement(v,null,"Neighborhood Revitalization Act"),m.a.createElement(J,null,m.a.createElement("div",{label:"Calculator"},m.a.createElement("p",null,"This is an effort by the Unified Government of Wyandotte County and Kansas City, Kansas to promote revitalization of designated areas through tax incentives on new construction and improvements. Start below to estimate your potential tax incentive."),m.a.createElement(_,null)),m.a.createElement("div",{label:"Resources"},m.a.createElement(X,null))),m.a.createElement(y,null,"Created in partnership with ",m.a.createElement("a",{href:"https://codeforkc.org"},"Code for KC"),m.a.createElement("br",null),"Contribute code on ",m.a.createElement("a",{href:"https://github.com/codeforkansascity/nra_calc"},"Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(u.render)(m.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[238,1,2]]]);
//# sourceMappingURL=main.54b3063b.chunk.js.map