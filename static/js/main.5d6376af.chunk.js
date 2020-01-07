(this.webpackJsonpIQHi=this.webpackJsonpIQHi||[]).push([[0],{125:function(e,a,t){},190:function(e,a,t){e.exports=t(349)},349:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=(t(195),t(196),t(197),t(125),t(23)),i=t(24),m=t(26),s=t(25),u=t(27),d=t(19),p=t(2),E=function(){return l.a.createElement(p.v,{className:"mb-4"},l.a.createElement(p.k,{md:"6"},l.a.createElement(p.g,null,l.a.createElement(p.h,null,l.a.createElement(p.w,{hover:!0},l.a.createElement(p.y,{color:"blue-grey lighten-4"},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"File Name"),l.a.createElement("th",null,"Date Created"),l.a.createElement("th",null,"Size"))),l.a.createElement(p.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Charging_Station.csv"),l.a.createElement("td",null,"2019-10-9"),l.a.createElement("td",null,"5.34MB")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Charging_Station.xlsx"),l.a.createElement("td",null,"2019-10-10"),l.a.createElement("td",null,"10.11MB")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Charging_Station.txt"),l.a.createElement("td",null,"2019-10-11"),l.a.createElement("td",null,"98.76MB"))))))))},h=t(51),g=t(7),b=t(400),f=t(401),v=t(418),k=t(37),y=t.n(k),C=Object(g.a)({root:{color:"rgba(245, 74, 85, 0.5)","&$checked":{color:"rgba(245, 74, 85, 0.5 )"}},checked:{}})((function(e){return l.a.createElement(v.a,Object.assign({color:"default"},e))})),w=Object(g.a)({root:{color:"rgba(90, 173, 246, 0.5)","&$checked":{color:"rgba(90, 173, 246, 0.5)"}},checked:{}})((function(e){return l.a.createElement(v.a,Object.assign({color:"default"},e))})),O=Object(g.a)({root:{color:"rgba(245, 192, 50, 0.5)","&$checked":{color:"rgba(245, 192, 50, 0.5)"}},checked:{}})((function(e){return l.a.createElement(v.a,Object.assign({color:"default"},e))})),N=Object(g.a)({root:{color:"rgba(139,195,74 ,0.5)"},checked:{}})((function(e){return l.a.createElement(v.a,Object.assign({color:"default"},e))})),j=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).getData=function(){y.a.get("https://iqhibattery.com/api/dashboard_data/").then((function(e){if(e.data.success){var a=e.data;t.setState({labels:a.labels,dataA:a[t.state.labelA],dataB:a[t.state.labelB],dataC:a[t.state.labelC],dataD:a[t.state.labelD]})}}))},t.CheckboxLabels=function(){return l.a.createElement(b.a,{row:!0},l.a.createElement(f.a,{control:l.a.createElement(C,{checked:t.state.checkA,onChange:function(){return t.setState({checkA:!t.state.checkA})},value:"checkedA"}),label:t.state.labelA}),l.a.createElement(f.a,{control:l.a.createElement(w,{checked:t.state.checkB,onChange:function(){return t.setState({checkB:!t.state.checkB})},value:"checkedB"}),label:t.state.labelB}),l.a.createElement(f.a,{control:l.a.createElement(O,{checked:t.state.checkC,onChange:function(){return t.setState({checkC:!t.state.checkC})},value:"checkedC"}),label:t.state.labelC}),l.a.createElement(f.a,{control:l.a.createElement(N,{checked:t.state.checkD,onChange:function(){return t.setState({checkD:!t.state.checkD})},value:"voltage"}),label:t.state.labelD}))},t.dataset=function(){var e=[];return t.state.checkA&&e.push({label:t.state.labelA,data:t.state.dataA,borderColor:"rgba(245, 74, 85, 0.5)",pointBorderColor:"rgba(245, 74, 85, 1)",pointBackgroundColor:"rgba(245, 74, 85, 1)",pointBorderWidth:1,pointHoverRadius:5,fill:!1,borderWidth:3}),t.state.checkB&&e.push({label:t.state.labelB,data:t.state.dataB,borderColor:"rgba(90, 173, 246, 0.5)",pointBorderColor:"rgba(90, 173, 246, 1)",pointBackgroundColor:"rgba(90, 173, 246, 1)",pointBorderWidth:1,pointHoverRadius:5,fill:!1,borderWidth:3}),t.state.checkC&&e.push({label:t.state.labelC,data:t.state.dataC,borderColor:"rgba(245, 192, 50, 0.5)",pointBorderColor:"rgba(245, 192, 50, 1)",pointBackgroundColor:"rgba(245, 192, 50, 1)",pointBorderWidth:1,pointHoverRadius:5,fill:!1,borderWidth:3}),t.state.checkD&&e.push({label:t.state.labelD,data:t.state.dataD,borderColor:"rgba(139,195,74 ,0.5)",pointBorderColor:"rgba(139,195,74 ,1)",pointBackgroundColor:"rgba(139,195,74 ,1)",pointBorderWidth:1,pointHoverRadius:5,fill:!1,borderWidth:3}),e},t.state={labelA:"Charge_Capacity(Ah)",labelB:"Discharge_Capacity(Ah)",labelC:"Charge_Energy(Wh)",labelD:"Discharge_Energy(Wh)",checkA:!0,checkB:!0,checkC:!0,checkD:!0,dataA:[12,39,3,50,2,32,84],dataB:[56,24,5,16,45,24,8],dataC:[12,25,54,3,15,44,3],dataD:[10,19,18,25,3,6,40],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e={labels:this.state.labels,datasets:this.dataset()};return l.a.createElement("div",null,this.CheckboxLabels(),l.a.createElement("div",null,l.a.createElement(h.b,{data:e,height:500,options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{barPercentage:1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}],yAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"},ticks:{beginAtZero:!0}}]}}})))}}]),a}(n.Component),B=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.c,{data:{labels:["NCM <50% (111/523)","NCM622","NCM712","NCM811","NCMA/NCM90-5-5","NCA <90% (18650)","NCA >90% (21700)"],datasets:[{data:[300,50,100,40,120,24,52],backgroundColor:["#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360","#ac64ad"],hoverBackgroundColor:["#FF5A5E","#5AD3D1","#FFC870","#A8B3C5","#616774","#da92db"]}]},height:300,options:{responsive:!0}})}}]),a}(n.Component),x=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(p.v,{className:"mb-4"},l.a.createElement(p.k,{md:"8",className:"mb-4"},l.a.createElement(p.g,{className:"mb-4"},l.a.createElement(p.h,null,l.a.createElement(j,null)))),l.a.createElement(p.k,{md:"4",className:"mb-4"},l.a.createElement(p.g,{className:"mb-4"},l.a.createElement(p.i,null,"Battery Types"),l.a.createElement(p.h,null,l.a.createElement(B,null))),l.a.createElement(p.g,{className:"mb-4"},l.a.createElement(p.h,null,l.a.createElement(p.o,{className:"list-group-flush"},l.a.createElement(p.p,null,"Power Usage",l.a.createElement(p.b,{color:"success-color",pill:!0,className:"float-right"},"22%",l.a.createElement(p.m,{icon:"arrow-up",className:"ml-1"}))),l.a.createElement(p.p,null,"Templetrue",l.a.createElement(p.b,{color:"danger-color",pill:!0,className:"float-right"},"5%",l.a.createElement(p.m,{icon:"arrow-down",className:"ml-1"}))),l.a.createElement(p.p,null,"Alert",l.a.createElement(p.b,{color:"primary-color",pill:!0,className:"float-right"},"14")))))))}}]),a}(n.Component),S=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Power Consumption (GW)",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]};return l.a.createElement(p.v,{className:"mb-4"},l.a.createElement(p.k,{md:"12",lg:"4",className:"mb-4"},l.a.createElement((function(){return l.a.createElement(p.g,null,l.a.createElement(p.i,null,"Power Consumption"),l.a.createElement(p.h,null,l.a.createElement(h.b,{data:e,options:{responsive:!0}})))}),null)),l.a.createElement(p.k,{md:"12",lg:"4",className:"mb-4"},l.a.createElement(p.g,{className:"mb-4"},l.a.createElement(p.i,null,"SOH Influence Factors"),l.a.createElement(p.h,null,l.a.createElement(h.d,{data:{labels:["Tempture","Current","Voltage","C-Rate","Overcharge","Overdischarge","Heavy Usage"],datasets:[{label:"Lithium cobalt oxide (LCO)",backgroundColor:"rgba(245, 74, 85, 0.5)",data:[65,59,80,81,56,55,40]},{label:"Lithium irron phosphate (LFP)",backgroundColor:"rgba(90, 173, 246, 0.5)",data:[12,42,21,56,24,12,2]},{label:"Lithium Nickel Cobalt Aluminum Oxide (NCA)",backgroundColor:"rgba(245, 192, 50, 0.5)",data:[2,23,54,76,54,23,5]}]},height:300,options:{responsive:!0}})))),l.a.createElement(p.k,{md:"12",lg:"4",className:"mb-4"},l.a.createElement(p.g,{className:"mb-4"},l.a.createElement(p.i,null,"State of health(SOH)"),l.a.createElement(p.h,null,l.a.createElement(h.a,{data:{labels:["Remain Capacity","Capacity Loss"],datasets:[{data:[85,15],backgroundColor:["#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360"],hoverBackgroundColor:["#FF5A5E","#5AD3D1","#FFC870","#A8B3C5","#616774"]}]},height:300,options:{responsive:!0}})))))}}]),a}(n.Component),D=(t(169),t(33)),A=(n.Component,function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement(E,null),l.a.createElement(S,null))}),F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.v,null,l.a.createElement(p.k,{md:"12"},l.a.createElement(p.g,{className:"mt-5"},l.a.createElement(p.A,{className:"gradient-card-header blue darken-2"},l.a.createElement("h4",{className:"h4-responsive text-white"},"Basic tables")),l.a.createElement(p.h,null,l.a.createElement("h3",{className:"mt-5 text-left"},l.a.createElement("strong",null,"Basic examples")),l.a.createElement("p",null,"Using the most basic table markup, here\u2019s how .table-based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent."),l.a.createElement(p.w,null,l.a.createElement(p.y,null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement(p.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))),l.a.createElement("h3",{className:"mt-5 text-left"},l.a.createElement("strong",null,"MDBTable head options")),l.a.createElement("p",null,"To change a background-color of thead (or any other element) use our color classes. If you are going to use a dark background you should also consider white text (to provide a proper contrast) by adding .text-white class."),l.a.createElement(p.w,null,l.a.createElement(p.y,{color:"primary-color",textWhite:!0},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement(p.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))),l.a.createElement(p.w,null,l.a.createElement(p.y,{color:"pink"},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement(p.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))),l.a.createElement("h3",{className:"mt-5 text-left"},l.a.createElement("strong",null,"Striped rows.")),l.a.createElement("p",null,"Use prop striped to add zebra-striping to any table row within the table body"),l.a.createElement(p.w,{striped:!0},l.a.createElement(p.y,null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement(p.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))))))))},W=t(18),I=t(405),T=t(403),H=t(416),L=t(407),M=t(406),R=t(415),q=t(67),J=t(170),P=t(402),Q=t(350),z=t(43),U=t.n(z),_=Object(J.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function $(e){var a=_(),t=l.a.useState(""),n=Object(W.a)(t,2),r=n[0],c=n[1],o=l.a.useState(""),i=Object(W.a)(o,2),m=i[0],s=i[1],u=l.a.useState(!1),p=Object(W.a)(u,2),E=(p[0],p[1],Object(d.f)());return l.a.createElement(P.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:a.BaseTop}),l.a.createElement(Q.a,{className:a.backpaper},l.a.createElement(R.a,{className:a.paper,p:6},l.a.createElement("div",null,l.a.createElement("img",{alt:"IQHi Logo",className:a.avatar,src:U.a})),l.a.createElement("br",null),l.a.createElement(q.a,{component:"h1",variant:"h5"},"Welcome Back. Sign in here"),l.a.createElement("form",{className:a.form,noValidate:!0},l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(e.target.value)}}),l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return s(e.target.value)}}),l.a.createElement(f.a,{control:l.a.createElement(v.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement(I.a,{fullWidth:!0,variant:"contained",color:"primary",className:a.submit,disabled:""===m||""===r,onClick:function(){y.a.post("https://iqhibattery.com/api/signin/",{email:r,password:m}).then((function(e){e.data.success&&(localStorage.setItem("firstName",e.data.first),localStorage.setItem("lastName",e.data.last),E.push("/dashboard"),window.location.reload(!1))}))}},"Sign In"),l.a.createElement(M.a,{container:!0},l.a.createElement(M.a,{item:!0,xs:!0},l.a.createElement(L.a,{href:"#",variant:"body2"},"Forgot password?")),l.a.createElement(M.a,{item:!0},l.a.createElement(L.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up")))))))}var G=t(179),V=t(408),K=t(49),Y=t.n(K),Z=Object(G.a)({palette:{primary:{main:"#384854"},secondary:{main:"#4dba80"}}}),X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,null,l.a.createElement("title",null,"IQHi - Sign In"),l.a.createElement("style",null,"main { background: url(https://iqhibattery.com/battery-bg.png) no-repeat center fixed; background-size: 100% 100%;}")),l.a.createElement(V.a,{theme:Z},l.a.createElement($,null)))},ee=t(409),ae=t(404),te=t(351),ne=Object(J.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function le(e){var a=ne();return l.a.createElement(P.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:a.BaseTop}),l.a.createElement(Q.a,{className:a.backpaper},l.a.createElement(R.a,{className:a.paper,p:6},l.a.createElement(ae.a,null,l.a.createElement(te.a,null,l.a.createElement(q.a,null,"Welcome Back ",localStorage.getItem("firstName"))),l.a.createElement(ee.a,null),l.a.createElement(te.a,null,l.a.createElement(L.a,{href:"https://iqhibattery.com/contact.html"},l.a.createElement(I.a,null,"Contack Us"))),l.a.createElement(te.a,null,l.a.createElement(I.a,null,"Demo"))))))}var re=Object(G.a)({palette:{primary:{main:"#384854"},secondary:{main:"#4dba80"}}}),ce=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,null,l.a.createElement("title",null,"IQHi - Sign In Success")),l.a.createElement(V.a,{theme:re},l.a.createElement(le,null)))},oe=Object(J.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ie(e){var a=oe();return l.a.createElement(P.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:a.BaseTop}),l.a.createElement(Q.a,{className:a.backpaper},l.a.createElement(R.a,{className:a.paper,p:6},l.a.createElement("div",null,l.a.createElement("img",{alt:"MDB React Logo",className:a.avatar,src:U.a})),l.a.createElement("br",null),l.a.createElement(q.a,{component:"h1",variant:"h5"},e.name),l.a.createElement(q.a,{component:"h2",variant:"h5"},"Thank you for using IQHi product!"),l.a.createElement(L.a,{href:"/signin",variant:"body2"},l.a.createElement(q.a,{component:"h3",variant:"h5"},"Go to Sign In")))))}var me=Object(J.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function se(){var e=me(),a=l.a.useState(""),t=Object(W.a)(a,2),n=t[0],r=t[1],c=l.a.useState(""),o=Object(W.a)(c,2),i=o[0],m=o[1],s=l.a.useState(""),u=Object(W.a)(s,2),d=u[0],p=u[1],E=l.a.useState(!1),h=Object(W.a)(E,2),g=h[0],b=h[1],k=l.a.useState(""),C=Object(W.a)(k,2),w=C[0],O=C[1],N=l.a.useState(""),j=Object(W.a)(N,2),B=j[0],x=j[1],S=l.a.useState(""),D=Object(W.a)(S,2),A=D[0],F=D[1];return g?l.a.createElement(ie,{name:w}):l.a.createElement(P.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:e.BaseTop}),l.a.createElement(Q.a,{className:e.backpaper},l.a.createElement(R.a,{className:e.paper,p:6},l.a.createElement("div",null,l.a.createElement("img",{alt:"MDB React Logo",className:e.avatar,src:U.a})),l.a.createElement("br",null),l.a.createElement(q.a,{component:"h1",variant:"h5"},"Welcome. Sign up here"),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(M.a,{container:!0,spacing:2},l.a.createElement(M.a,{item:!0,xs:12,sm:6},l.a.createElement(H.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return O(e.target.value)}})),l.a.createElement(M.a,{item:!0,xs:12,sm:6},l.a.createElement(H.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return x(e.target.value)}})),""===A?l.a.createElement(M.a,{item:!0,xs:12}):l.a.createElement(M.a,{item:!0,xs:12},l.a.createElement(q.a,{color:"error"},A)),l.a.createElement(M.a,{item:!0,xs:12},l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:""!==A||""!==n&&!n.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),value:n,helperText:""===n||n.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?""===n?"Please enter the email":"email is valid":"Email is not valid.",onChange:function(e){return r(e.target.value)}})),l.a.createElement(M.a,{item:!0,xs:12},l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:""!==i&&i.length<6,helperText:""!==i&&i.length<6?"Minimum password length is 6.":""===n?"Please enter the password. Minimum password length is 6.":"password is valid",onChange:function(e){return m(e.target.value)}})),l.a.createElement(M.a,{item:!0,xs:12},l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"comfirm password",label:"Comfirm Password",type:"password",id:"cpassword",helperText:""!==d&&d!==i?"Comfirm password and password are not the same.":"Please re-enter the password",error:d.length>0&&d!==i,onChange:function(e){return p(e.target.value)}})),l.a.createElement(f.a,{control:l.a.createElement(v.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement(I.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){y.a.post("https://iqhibattery.com/api/new_user/",{first:w,last:B,email:n,password:i}).then((function(e){b(e.data.success),console.log(e.data),e.data.success||F("email already exists")}))},disabled:""===w||""===B||""===n||!n.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)||i.length<6||""===d||d.length>0&&d!==i},"Submit"),l.a.createElement(M.a,{container:!0},l.a.createElement(M.a,{item:!0,xs:!0},l.a.createElement(L.a,{href:"#",variant:"body2"},"Forgot password?")),l.a.createElement(M.a,{item:!0},l.a.createElement(L.a,{href:"/signin",variant:"body2"},"Aready have an account? Sign in"))))))))}var ue=Object(G.a)({palette:{primary:{main:"#384854"},secondary:{main:"#4dba80"}}}),de=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,null,l.a.createElement("title",null,"IQHi - Sign Up"),l.a.createElement("style",null,"main { background: url(https://iqhibattery.com/battery-bg.png) no-repeat center fixed; background-size: 100% 100%;}")),l.a.createElement(V.a,{theme:ue},l.a.createElement(se,null)))},pe=t(180),Ee=Object(J.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function he(){var e=Ee(),a=Object(n.useCallback)((function(e){e.map((function(e){console.log(e);var a=new FormData;a.append("file",e);y.a.post("https://iqhibattery.com/api/upload/",a,{headers:{enctype:"multipart/form-data"}})}))}),[]),t=Object(pe.a)({onDrop:a}),r=t.getRootProps,c=t.getInputProps,o=t.isDragActive;return l.a.createElement(P.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:e.BaseTop}),l.a.createElement("div",r(),l.a.createElement(Q.a,{className:e.backpaper,elevation:0},l.a.createElement(R.a,{className:e.paper,p:6},l.a.createElement("input",c()),o?l.a.createElement("p",null,"Drop the files here ..."):l.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))))}var ge=Object(G.a)({palette:{primary:{main:"#384854"},secondary:{main:"#4dba80"}}}),be=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,null,l.a.createElement("title",null,"IQHi - Upload")),l.a.createElement(V.a,{theme:ge},l.a.createElement(he,null)))},fe=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,component:A}),l.a.createElement(d.a,{path:"/dashboard",component:A}),l.a.createElement(d.a,{path:"/upload",component:be}),l.a.createElement(d.a,{path:"/tables",component:F}),l.a.createElement(d.a,{path:"/signinsuccess",component:ce}),l.a.createElement(d.a,{path:"/signin",component:X}),l.a.createElement(d.a,{path:"/signup",component:de}))}}]),a}(l.a.Component),ve=t(17),ke=t(413),ye=t(414),Ce=t(399),we=t(412),Oe=t(181),Ne=t(22),je=t(116),Be=t.n(je),xe=t(178),Se=t.n(xe),De=t(114),Ae=t(31),Fe=t(419),We=t(410),Ie=t(411),Te=t(177),He=t.n(Te),Le=t(115),Me=t.n(Le),Re=t(176),qe=t.n(Re),Je=t(174),Pe=t.n(Je),Qe=t(175),ze=t.n(Qe),Ue=Object(J.a)((function(e){return{list:{width:250},fullList:{width:"auto"},drawerHeader:Object(De.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})}}));function _e(){var e=Ue(),a=l.a.useState({left:!1}),t=Object(W.a)(a,2),n=t[0],r=t[1],c=Object(Ae.a)(),o=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(Object(De.a)({},n,Object(D.a)({},e,a)))}};var i;return l.a.createElement("div",null,l.a.createElement(Ce.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",onClick:o("left",!0)},l.a.createElement(Fe.a,null),l.a.createElement(He.a,null)),l.a.createElement(Fe.a,{open:n.left,onClose:o("left",!1)},(i="left",l.a.createElement("div",{className:e.list,role:"presentation",onClick:o(i,!1),onKeyDown:o(i,!1)},l.a.createElement("div",{className:e.drawerHeader},l.a.createElement(Ce.a,{onClick:o(i,!1)},"ltr"===c.direction?l.a.createElement(Pe.a,null):l.a.createElement(ze.a,null))),l.a.createElement(ee.a,null),l.a.createElement("a",{href:"#!",className:"logo-wrapper waves-effect"},l.a.createElement("img",{alt:"IQHi Logo",className:"img-fluid",src:U.a})),l.a.createElement(ee.a,null),l.a.createElement(ae.a,null,["Dashboard"].map((function(e,a){return l.a.createElement(Ne.b,{to:"/",key:e},l.a.createElement(te.a,{button:!0},l.a.createElement(We.a,null,l.a.createElement(Me.a,null)),l.a.createElement(Ie.a,{primary:e})))}))),l.a.createElement(ee.a,null),l.a.createElement(ae.a,null,["Upload data"].map((function(e,a){return l.a.createElement(Ne.b,{to:"/upload",key:e},l.a.createElement(te.a,{button:!0},l.a.createElement(We.a,null,l.a.createElement(Me.a,null)),l.a.createElement(Ie.a,{primary:e})))}))),l.a.createElement(ee.a,null),l.a.createElement(ae.a,null,localStorage.getItem("firstName")?l.a.createElement(I.a,{onClick:function(){localStorage.clear()}},"Sign Out"):["Sign in"].map((function(e,a){return l.a.createElement(Ne.b,{to:"/signin",key:e},l.a.createElement(te.a,{button:!0},l.a.createElement(We.a,null,l.a.createElement(qe.a,null)),l.a.createElement(Ie.a,{primary:e})))}))),l.a.createElement(ee.a,null)))))}var $e=Object(J.a)((function(e){return{grow:{flexGrow:1},bigAvatar:{margin:10,width:30,height:30},menuButton:{marginRight:e.spacing(2)},title:Object(D.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(D.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ve.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ve.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(D.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(D.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(D.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Ge(){var e=$e(),a=l.a.useState(null),t=Object(W.a)(a,2),n=t[0],r=t[1],c=l.a.useState(null),o=Object(W.a)(c,2),i=o[0],m=o[1],s=Boolean(n),u=Boolean(i),d=function(){m(null)},p=function(){r(null),d()},E=l.a.createElement(Oe.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:p},l.a.createElement(Ne.b,{to:"/signin"},l.a.createElement(we.a,{onClick:p},"sign in"))),h=l.a.createElement(Oe.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:d},localStorage.getItem("firstName")?l.a.createElement("div",null,l.a.createElement(we.a,null,l.a.createElement(Ne.b,{to:"/signin"},l.a.createElement("p",null,"sign in")))):l.a.createElement("div",null,l.a.createElement(Ne.b,{to:"/signup"},l.a.createElement(we.a,null,l.a.createElement(Ce.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},l.a.createElement(Be.a,null)),l.a.createElement("p",null,"sign up"))),l.a.createElement(Ne.b,{to:"/signin"},l.a.createElement(we.a,null,l.a.createElement(Ce.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},l.a.createElement(Be.a,null)),l.a.createElement("p",null,"sign in")))));return l.a.createElement("div",{className:e.grow},l.a.createElement(ke.a,{position:"static",style:{background:"#2E3B55"}},l.a.createElement(ye.a,null,l.a.createElement(_e,null),l.a.createElement(q.a,{variant:"h6",className:e.title},l.a.createElement(R.a,{letterSpacing:6,fontFamily:"sans-serif",fontSize:"h4.fontSize",m:1},"IQHi")),l.a.createElement("div",{className:e.grow}),l.a.createElement("div",{className:e.sectionDesktop},localStorage.getItem("firstName")?l.a.createElement("p",null,localStorage.getItem("firstName")):l.a.createElement(Ne.b,{to:"/signin"},l.a.createElement(we.a,{onClick:p},"sign in"))),l.a.createElement("div",{className:e.sectionMobile},l.a.createElement(Ce.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},l.a.createElement(Se.a,null))))),h,E)}var Ve=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).Copyright=function(){return l.a.createElement(q.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",l.a.createElement(L.a,{color:"inherit",href:"http://localhost:3000/"},"IQHi")," ",(new Date).getFullYear(),".")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"flexible-content"},l.a.createElement(Ge,null),l.a.createElement("main",{id:"content",className:"p-5"},l.a.createElement(fe,null),l.a.createElement(R.a,{mt:8},this.Copyright())))}}]),a}(n.Component),Ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(Ne.a,null,l.a.createElement(Ve,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/products",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/products","/service-worker.js");Ke?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ye(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Ye(e)}))}}()},43:function(e,a,t){e.exports=t.p+"static/media/iqhi.a5c7e35c.png"}},[[190,1,2]]]);
//# sourceMappingURL=main.5d6376af.chunk.js.map