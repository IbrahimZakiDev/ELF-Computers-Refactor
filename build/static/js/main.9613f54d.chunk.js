(this["webpackJsonpelf-laptop"]=this["webpackJsonpelf-laptop"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(9),s=n.n(a),o=(n(15),n(2)),i=n(3),u=n(5),l=n(4),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"ELF Computing | Laptops"})})}}]),n}(c.Component),m={Processor:[{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},{name:"Professor X AMD Fire Breather with sidewinder technology",cost:1200}],"Operating System":[{name:"Ubuntu Linux 16.04",cost:200},{name:"Bodhi Linux",cost:300}],"Video Card":[{name:"Toyota Corolla 1.5v",cost:1150.98},{name:"Mind mild breeze 2000",cost:1345}],Display:[{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500},{name:'15.3" HGTV (3840 x 2160) Home makeover edition',cost:1400}]},d=(n(16),n(6)),b=n(8),p=n.n(b),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),n=Object.keys(this.props.features).map((function(n,c){var a=n+"-"+c,s=e.props.features[n].map((function(c){var a=p()(JSON.stringify(c));return Object(r.jsxs)("div",{className:"feature__item",children:[Object(r.jsx)("input",{type:"radio",id:a,className:"feature__option",name:p()(n),checked:c.name===e.props.selected[n].name,onChange:function(t){return e.props.updateFeature(n,c)}}),Object(r.jsxs)("label",{htmlFor:a,className:"feature__label",children:[c.name," (",t.format(c.cost),")"]})]},a)}));return Object(r.jsxs)("fieldset",{className:"feature",children:[Object(r.jsx)("legend",{className:"feature__name",children:Object(r.jsx)("h3",{children:n})}),s]},a)}));return Object(r.jsx)("div",{children:n})}}]),n}(c.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return console.log(this.props.features),Object(r.jsxs)("form",{className:"main__form",children:[Object(r.jsx)("h2",{children:"Customize your laptop"}),Object(r.jsx)(h,Object(d.a)({},this.props))]})}}]),n}(c.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.selected).reduce((function(t,n){return t+e.props.selected[n].cost}),0),n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"summary__total",children:[Object(r.jsx)("div",{className:"summary__total__label",children:"Total"}),Object(r.jsx)("div",{className:"summary__total__value",children:n.format(t)})]})})}}]),n}(c.Component),y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.selected).map((function(t,n){var c=t+"-"+n,a=e.props.selected[t];return Object(r.jsxs)("div",{className:"summary__option",children:[Object(r.jsxs)("div",{className:"summary__option__label",children:[t," "]}),Object(r.jsx)("div",{className:"summary__option__value",children:a.name}),Object(r.jsx)("div",{className:"summary__option__cost",children:y.format(a.cost)})]},c)}));return Object(r.jsx)("div",{children:t})}}]),n}(c.Component),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Your cart"}),Object(r.jsx)(v,Object(d.a)({},this.props)),Object(r.jsx)(f,Object(d.a)({},this.props))]})}}]),n}(c.Component),_=(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selected:{Processor:{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},"Operating System":{name:"Ubuntu Linux 16.04",cost:200},"Video Card":{name:"Toyota Corolla 1.5v",cost:1150.98},Display:{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500}}},e.updateFeature=function(t,n){var r=Object.assign({},e.state.selected);r[t]=n,e.setState({selected:r})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsxs)("main",{children:[Object(r.jsx)(O,{features:m,selected:this.state.selected,updateFeature:this.updateFeature}),Object(r.jsx)("section",{className:"main__summary",children:Object(r.jsx)(x,{selected:this.state.selected})})]})]})}}]),n}(c.Component));s.a.render(Object(r.jsx)(_,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9613f54d.chunk.js.map