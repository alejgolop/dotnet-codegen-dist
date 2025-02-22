import{A as nt,B as rt,C as lt,D as oe,E as at,a as Be,b as Y,c as _,d as J,e as Ge,f as Le,g as Ke,h as Oe,i as Ae,j as We,k as je,l as Ue,m as H,n as X,p as Ye,q as Je,r as He,s as Xe,t as Ze,u as et,v as tt,y as it,z as ot}from"./chunk-LG4K33ZR.js";import{f as te,g as ie}from"./chunk-GCKSI7OI.js";import"./chunk-S35HUXPS.js";import{a as qe,c as ze,d as Qe,e as ee,g as pt}from"./chunk-76R57GDQ.js";import{g as Re,ha as z,ka as De,la as N,m as se,na as Q,pa as Z,wa as st}from"./chunk-CGHF6K2W.js";import{Cb as d,Eb as W,Fa as c,Gb as S,Hb as E,Ib as M,Jb as V,Ka as ve,Kb as j,Lb as Ie,Qa as P,Ra as k,S as we,T as G,Ta as L,Tb as y,U as I,Ua as Ce,Va as m,Yb as U,Z as x,Zb as Fe,a as _e,ab as K,bb as s,da as g,db as xe,ea as f,eb as $,fb as Pe,g as be,ga as F,gb as Se,kb as r,lb as l,ma as D,mb as v,mc as ke,oc as q,pb as Ee,pc as $e,qb as h,qc as Ve,rb as b,rc as T,sb as p,tb as Me,ub as Te,vb as pe,wb as Ne,xb as O,yb as A}from"./chunk-GPHNUKZC.js";var vt=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,Ct={root:({instance:e,props:i})=>["p-floatlabel",{"p-floatlabel-over":i.variant==="over","p-floatlabel-on":i.variant==="on","p-floatlabel-in":i.variant==="in"}]},ct=(()=>{class e extends Q{name="floatlabel";theme=vt;classes=Ct;static \u0275fac=(()=>{let t;return function(o){return(t||(t=F(e)))(o||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var xt=["*"],ce=(()=>{class e extends Z{_componentStyle=x(ct);variant="over";static \u0275fac=(()=>{let t;return function(o){return(t||(t=F(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(n,o){n&2&&xe("p-floatlabel",!0)("p-floatlabel-over",o.variant==="over")("p-floatlabel-on",o.variant==="on")("p-floatlabel-in",o.variant==="in")},inputs:{variant:"variant"},features:[V([ct]),L],ngContentSelectors:xt,decls:1,vars:0,template:function(n,o){n&1&&(Me(),Te(0))},dependencies:[T,N],encapsulation:2,changeDetection:0})}return e})(),dt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=I({imports:[ce,N,N]})}return e})();var u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function mt(e,i=0){return(u[e[i+0]]+u[e[i+1]]+u[e[i+2]]+u[e[i+3]]+"-"+u[e[i+4]]+u[e[i+5]]+"-"+u[e[i+6]]+u[e[i+7]]+"-"+u[e[i+8]]+u[e[i+9]]+"-"+u[e[i+10]]+u[e[i+11]]+u[e[i+12]]+u[e[i+13]]+u[e[i+14]]+u[e[i+15]]).toLowerCase()}var de,St=new Uint8Array(16);function me(){if(!de){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");de=crypto.getRandomValues.bind(crypto)}return de(St)}var Et=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ue={randomUUID:Et};function Mt(e,i,t){if(ue.randomUUID&&!i&&!e)return ue.randomUUID();e=e||{};let n=e.random??e.rng?.()??me();if(n.length<16)throw new Error("Random bytes length must be >= 16");if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,i){if(t=t||0,t<0||t+16>i.length)throw new RangeError(`UUID byte range ${t}:${t+15} is out of buffer bounds`);for(let o=0;o<16;++o)i[t+o]=n[o];return i}return mt(n)}var B=Mt;function ge(e=!1){return{id:B(),isPrimaryKey:e,name:"NewProperty",propertyMethods:"{get; init;}",type:"string",isCollection:!1}}var fe=(C=>(C.Guid="Guid",C.string="string",C.bool="bool",C.int="int",C.short="short",C.decimal="decimal",C.DateTime="DateTime",C.TimeOnly="TimeOnly",C.DateOnly="DateOnly",C))(fe||{});function gt(e){return JSON.stringify(e)}function re(){return/^[^_ -][A-z][^_ -]*$/}function he(){return/^[^ -][A-z][^ -]*$/}var Tt=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,Nt={root:{position:"relative"}},It={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},ft=(()=>{class e extends Q{name="toggleswitch";theme=Tt;classes=It;inlineStyles=Nt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=F(e)))(o||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var Ft=["handle"],kt=["input"],$t=e=>({checked:e});function Vt(e,i){e&1&&Ee(0)}function Rt(e,i){if(e&1&&m(0,Vt,1,0,"ng-container",4),e&2){let t=p();s("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",Ie(2,$t,t.checked()))}}var Dt={provide:Be,useExisting:we(()=>yt),multi:!0},yt=(()=>{class e extends Z{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new D;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=x(ft);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(o){return(t||(t=F(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,o,a){if(n&1&&(pe(a,Ft,4),pe(a,De,4)),n&2){let w;O(w=A())&&(o.handleTemplate=w.first),O(w=A())&&(o.templates=w)}},viewQuery:function(n,o){if(n&1&&Ne(kt,5),n&2){let a;O(a=A())&&(o.input=a.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",Fe],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",U],readonly:[2,"readonly","readonly",U],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",U]},outputs:{onChange:"onChange"},features:[V([Dt,ft]),Ce,L],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){if(n&1){let a=h();r(0,"div",1),b("click",function(R){return g(a),f(o.onClick(R))}),r(1,"input",2,0),b("focus",function(){return g(a),f(o.onFocus())})("blur",function(){return g(a),f(o.onBlur())}),l(),r(3,"span",3)(4,"div",3),m(5,Rt,1,4,"ng-container"),l()()()}n&2&&($(o.sx("root")),Pe(o.styleClass),s("ngClass",o.cx("root"))("ngStyle",o.style),K("data-pc-name","toggleswitch")("data-pc-section","root"),c(),s("ngClass",o.cx("input"))("checked",o.checked())("disabled",o.disabled)("pAutoFocus",o.autofocus),K("id",o.inputId)("aria-checked",o.checked())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("name",o.name)("tabindex",o.tabindex)("data-pc-section","hiddenInput"),c(2),s("ngClass",o.cx("slider")),K("data-pc-section","slider"),c(),s("ngClass",o.cx("handle")),c(),Se(o.handleTemplate||o._handleTemplate?5:-1))},dependencies:[T,ke,Ve,$e,qe,N],encapsulation:2,changeDetection:0})}return e})(),_t=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=I({imports:[yt,N,N]})}return e})();var ye=()=>({width:"100%"});function Ot(e,i){e&1&&(r(0,"tr")(1,"th",6),d(2,"Type"),l(),r(3,"th",7),d(4,"Is A Collection"),l(),r(5,"th",8),d(6,"Name"),l(),r(7,"th",6),d(8,"Property Methods"),l(),r(9,"th",7),d(10,"Is Primary Key"),l(),v(11,"th",7),l())}function At(e,i){if(e&1){let t=h();r(0,"p-select",15),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.type,o)||(a.type=o),f(o)}),l()}if(e&2){let t=p().$implicit,n=p();$(j(4,ye)),s("options",n.propertyTypes),S("ngModel",t.type)}}function Wt(e,i){if(e&1&&d(0),e&2){let t=p().$implicit;W(" ",t.type," ")}}function jt(e,i){if(e&1){let t=h();r(0,"p-togglebutton",16),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.isCollection,o)||(a.isCollection=o),f(o)}),l()}if(e&2){let t=p().$implicit;S("ngModel",t.isCollection)}}function Ut(e,i){if(e&1){let t=h();r(0,"p-togglebutton",17),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.isCollection,o)||(a.isCollection=o),f(o)}),l()}if(e&2){let t=p().$implicit;S("ngModel",t.isCollection)}}function qt(e,i){if(e&1){let t=h();r(0,"input",18),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.name,o)||(a.name=o),f(o)}),l()}if(e&2){let t=p().$implicit,n=p();$(j(4,ye)),S("ngModel",t.name),s("pattern",n.getPropertyNameRegExp())}}function zt(e,i){if(e&1&&d(0),e&2){let t=p().$implicit;W(" ",t.name," ")}}function Qt(e,i){if(e&1){let t=h();r(0,"p-select",15),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.propertyMethods,o)||(a.propertyMethods=o),f(o)}),l()}if(e&2){let t=p().$implicit,n=p();$(j(4,ye)),s("options",n.propertyMethods),S("ngModel",t.propertyMethods)}}function Yt(e,i){if(e&1&&d(0),e&2){let t=p().$implicit;W(" ",t.propertyMethods," ")}}function Jt(e,i){if(e&1){let t=h();r(0,"p-togglebutton",16),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.isPrimaryKey,o)||(a.isPrimaryKey=o),f(o)}),l()}if(e&2){let t=p().$implicit;S("ngModel",t.isPrimaryKey)}}function Ht(e,i){if(e&1){let t=h();r(0,"p-togglebutton",17),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.isPrimaryKey,o)||(a.isPrimaryKey=o),f(o)}),l()}if(e&2){let t=p().$implicit;S("ngModel",t.isPrimaryKey)}}function Xt(e,i){if(e&1){let t=h();r(0,"button",19),b("click",function(){g(t);let o=p().$implicit,a=p();return f(a.onRowEditInit(o))}),l()}}function Zt(e,i){if(e&1){let t=h();r(0,"button",20),b("click",function(){g(t);let o=p(),a=o.$implicit,w=o.rowIndex,R=p();return f(R.onRowDelete(a,w))}),l()}}function ei(e,i){if(e&1){let t=h();r(0,"button",21),b("click",function(){g(t);let o=p().$implicit,a=p();return f(a.onRowEditSave(o))}),l()}if(e&2){let t=p().$implicit,n=p();s("disabled",!n.propertyNameIsValid(t.name))}}function ti(e,i){if(e&1){let t=h();r(0,"button",22),b("click",function(){g(t);let o=p(),a=o.$implicit,w=o.rowIndex,R=p();return f(R.onRowEditCancel(a,w))}),l()}}function ii(e,i){if(e&1&&(r(0,"tr",9)(1,"td")(2,"p-cellEditor"),m(3,At,1,5,"ng-template",null,2,y)(5,Wt,1,1,"ng-template",null,3,y),l()(),r(7,"td")(8,"p-cellEditor"),m(9,jt,1,1,"ng-template",null,2,y)(11,Ut,1,1,"ng-template",null,3,y),l()(),r(13,"td")(14,"p-cellEditor"),m(15,qt,1,5,"ng-template",null,2,y)(17,zt,1,1,"ng-template",null,3,y),l()(),r(19,"td")(20,"p-cellEditor"),m(21,Qt,1,5,"ng-template",null,2,y)(23,Yt,1,1,"ng-template",null,3,y),l()(),r(25,"td")(26,"p-cellEditor"),m(27,Jt,1,1,"ng-template",null,2,y)(29,Ht,1,1,"ng-template",null,3,y),l()(),r(31,"td")(32,"div",10),m(33,Xt,1,0,"button",11)(34,Zt,1,0,"button",12)(35,ei,1,1,"button",13)(36,ti,1,0,"button",14),l()()()),e&2){let t=i.$implicit,n=i.editing;s("pEditableRow",t),c(33),s("ngIf",!n),c(),s("ngIf",!n),c(),s("ngIf",n),c(),s("ngIf",n)}}var le=class e{constructor(i){this.messageService=i}properties;deletePropertyEvent=new D;newKeyPropertyEvent=new D;propertyMethods;propertyTypes;clonedProperties={};ngOnInit(){this.propertyMethods=[{label:"{get; init;}",value:"{get; init;}"},{label:"{get; set;}",value:"{get; set;}"}],this.propertyTypes=Object.keys(fe).map(i=>({label:i,value:i}))}onRowEditInit(i){this.clonedProperties[i.id]=_e({},i)}onRowDelete(i,t){if(this.properties.length<=1){this.messageService.add({severity:"error",summary:"Error",detail:"At least one property is needed"});return}if(i.isPrimaryKey){this.messageService.add({severity:"error",summary:"Error",detail:"A Primary Key is needed"});return}this.deletePropertyEvent.emit(i.id)}onRowEditSave(i){var t=this.properties.find(n=>n.isPrimaryKey)==null;i.isPrimaryKey!==this.clonedProperties[i.id].isPrimaryKey&&this.newKeyPropertyEvent.emit(i.id),delete this.clonedProperties[i.id],t?this.messageService.add({severity:"error",summary:"Error",detail:"Saved another changes, but a Primary Key is needed"}):this.messageService.add({severity:"success",summary:"Success",detail:"Property is updated"})}onRowEditCancel(i,t){this.properties[t]=this.clonedProperties[i.id],delete this.clonedProperties[i.id]}getSeverity(i){switch(i){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return"info"}}propertyNameIsValid(i){return!(i.length<4||!he().test(i))}getPropertyNameRegExp(){return he()}static \u0275fac=function(t){return new(t||e)(ve(z))};static \u0275cmp=P({type:e,selectors:[["app-property-grid"]],inputs:{properties:"properties"},outputs:{deletePropertyEvent:"deletePropertyEvent",newKeyPropertyEvent:"newKeyPropertyEvent"},features:[V([z])],decls:7,vars:1,consts:[["header",""],["body",""],["input",""],["output",""],[1,"card"],["dataKey","id","editMode","row",3,"value"],[2,"width","15%"],[2,"width","10%"],[2,"width","40%"],[3,"pEditableRow"],[1,"flex","items-center","justify-center","gap-2"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","text","","rounded","","severity","secondary","pTooltip","Edit this Property","tooltipPosition","left",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-trash","text","","rounded","","severity","danger","pTooltip","Delete this Property","tooltipPosition","left",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","text","","rounded","","severity","secondary","pTooltip","Save Changes","tooltipPosition","left",3,"disabled","click",4,"ngIf"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","text","","rounded","","severity","secondary","pTooltip","Cancel Changes","tooltipPosition","left",3,"click",4,"ngIf"],["appendTo","body",3,"ngModelChange","options","ngModel"],["onIcon","pi pi-check-circle","offIcon","pi pi-times","styleClass","w-36","ariaLabel","Do you confirm",3,"ngModelChange","ngModel"],["disabled","true","onIcon","pi pi-check-circle","offIcon","pi pi-times","styleClass","w-36","ariaLabel","Do you confirm",3,"ngModelChange","ngModel"],["pInputText","","type","text","required","",3,"ngModelChange","ngModel","pattern"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","text","","rounded","","severity","secondary","pTooltip","Edit this Property","tooltipPosition","left",3,"click"],["pButton","","pRipple","","type","button","icon","pi pi-trash","text","","rounded","","severity","danger","pTooltip","Delete this Property","tooltipPosition","left",3,"click"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","text","","rounded","","severity","secondary","pTooltip","Save Changes","tooltipPosition","left",3,"click","disabled"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","text","","rounded","","severity","secondary","pTooltip","Cancel Changes","tooltipPosition","left",3,"click"]],template:function(t,n){t&1&&(r(0,"div",4),v(1,"p-toast"),r(2,"p-table",5),m(3,Ot,12,0,"ng-template",null,0,y)(5,ii,37,5,"ng-template",null,1,y),l()()),t&2&&(c(2),s("value",n.properties))},dependencies:[T,q,ee,ze,H,Y,J,We,je,Le,X,ie,te,et,Ze,_t,at,oe,tt,lt,it,ot,nt,rt,Xe,He],encapsulation:2})};function oi(e,i){e&1&&(r(0,"div"),d(1," Entity Singular Name is required. "),l())}function ni(e,i){e&1&&(r(0,"div"),d(1," Entity Singular Name must be at least 4 characters long. "),l())}function ri(e,i){e&1&&(r(0,"div"),d(1," Entity Singular Name must be at max 50 characters long. "),l())}function li(e,i){e&1&&(r(0,"div"),d(1," White Spaces and/or Special Symbols not alowed. "),l())}function ai(e,i){if(e&1&&(r(0,"div",15),m(1,oi,2,0,"div",16)(2,ni,2,0,"div",16)(3,ri,2,0,"div",16)(4,li,2,0,"div",16),l()),e&2){let t=p();c(),s("ngIf",t.configurationForm.controls.entitySingularName==null?null:t.configurationForm.controls.entitySingularName.hasError("required")),c(),s("ngIf",t.configurationForm.controls.entitySingularName==null?null:t.configurationForm.controls.entitySingularName.hasError("minlength")),c(),s("ngIf",t.configurationForm.controls.entitySingularName==null?null:t.configurationForm.controls.entitySingularName.hasError("maxlength")),c(),s("ngIf",t.configurationForm.controls.entitySingularName==null?null:t.configurationForm.controls.entitySingularName.hasError("pattern"))}}function pi(e,i){e&1&&(r(0,"div"),d(1," Entity Plural Name is required. "),l())}function si(e,i){e&1&&(r(0,"div"),d(1," Entity Plural Name must be at least 4 characters long. "),l())}function ci(e,i){e&1&&(r(0,"div"),d(1," Entity Plural Name must be at max 50 characters long. "),l())}function di(e,i){e&1&&(r(0,"div"),d(1," White Spaces and/or Special Symbols not alowed. "),l())}function mi(e,i){if(e&1&&(r(0,"div",15),m(1,pi,2,0,"div",16)(2,si,2,0,"div",16)(3,ci,2,0,"div",16)(4,di,2,0,"div",16),l()),e&2){let t=p();c(),s("ngIf",t.configurationForm.controls.entityPluralName==null?null:t.configurationForm.controls.entityPluralName.hasError("required")),c(),s("ngIf",t.configurationForm.controls.entityPluralName==null?null:t.configurationForm.controls.entityPluralName.hasError("minlength")),c(),s("ngIf",t.configurationForm.controls.entityPluralName==null?null:t.configurationForm.controls.entityPluralName.hasError("maxlength")),c(),s("ngIf",t.configurationForm.controls.entityPluralName==null?null:t.configurationForm.controls.entityPluralName.hasError("pattern"))}}function ui(e,i){e&1&&(r(0,"div"),d(1," DB Context Class Name is required. "),l())}function gi(e,i){e&1&&(r(0,"div"),d(1," DB Context Class Name must be at least 4 characters long. "),l())}function fi(e,i){e&1&&(r(0,"div"),d(1," DB Context Class Name must be at max 50 characters long. "),l())}function hi(e,i){e&1&&(r(0,"div"),d(1," White Spaces and/or Special Symbols not alowed. "),l())}function yi(e,i){if(e&1&&(r(0,"div",15),m(1,ui,2,0,"div",16)(2,gi,2,0,"div",16)(3,fi,2,0,"div",16)(4,hi,2,0,"div",16),l()),e&2){let t=p();c(),s("ngIf",t.configurationForm.controls.contextClassName==null?null:t.configurationForm.controls.contextClassName.hasError("required")),c(),s("ngIf",t.configurationForm.controls.contextClassName==null?null:t.configurationForm.controls.contextClassName.hasError("minlength")),c(),s("ngIf",t.configurationForm.controls.contextClassName==null?null:t.configurationForm.controls.contextClassName.hasError("maxlength")),c(),s("ngIf",t.configurationForm.controls.contextClassName==null?null:t.configurationForm.controls.contextClassName.hasError("pattern"))}}var ae=class e{storageService=x(pt);router=x(Re);analytics=x(st);formBuilder=x(Ue);configurationForm=this.formBuilder.group({entitySingularName:["",[_.required,_.minLength(4),_.maxLength(50),_.pattern(re())]],entityPluralName:["",[_.required,_.minLength(4),_.maxLength(50),_.pattern(re())]],contextClassName:["",[_.required,_.minLength(4),_.maxLength(50),_.pattern(re())]]});properties;ngOnInit(){this.properties=[ge(!0)]}onSubmit(){return be(this,null,function*(){var i=this.configurationForm.controls.entitySingularName.value??"";this.analytics.sendClick("create_configuration",i);var t={id:B(),createdAt:new Date().toISOString(),entitySingularName:i,entityPluralName:this.configurationForm.controls.entityPluralName.value??"",contextClassName:this.configurationForm.controls.contextClassName.value??"",properties:this.properties};this.storageService.saveConfiguration(t),this.router.navigate([`/result/${t.id}`])})}onPropertyAdd(){this.properties.push(ge())}onPropertyDelete(i){this.properties=this.properties.filter(t=>t.id!==i)}onNewKeyProperty(i){var t=this.properties.find(o=>o.id==i);if(t)if(t.isPrimaryKey)this.properties.forEach(o=>{o.id!==i&&(o.isPrimaryKey=!1)});else{var n=this.properties.find(o=>o.isPrimaryKey);n||(t.isPrimaryKey=!0)}}printProperty(i){return gt(i)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=P({type:e,selectors:[["app-main-page"]],decls:29,vars:6,consts:[[1,"formgrid","grid",3,"ngSubmit","formGroup"],[1,"field","col-12"],["variant","on",1,"field","col-4"],["pInputText","","id","entity-singular-name","formControlName","entitySingularName","pTooltip","Enter a good Entity Name. Examples: Client, Item, Invoice, Player, Food, Order... ","tooltipPosition","bottom","autocomplete","off",1,"w-full"],["for","entity-singular-name"],["class","danger-text",4,"ngIf"],["pInputText","","id","entity-plural-name","formControlName","entityPluralName","pTooltip","Enter a PLURAL variant for your Entity Name. Examples: Clients, Items, Invoices, Players, Foods, Orders... ","tooltipPosition","bottom","autocomplete","off",1,"w-full"],["for","entity-plural-name"],["pInputText","","id","context-class-name","formControlName","contextClassName","pTooltip","Enter a your inherited DbContext Class Name. This is used for generating an Entity Repository. Examples: ClientContext, MyAppDbContext... ","tooltipPosition","bottom","autocomplete","off",1,"w-full"],["for","context-class-name"],[1,"col-12",3,"deletePropertyEvent","newKeyPropertyEvent","properties"],[1,"col-12"],[1,"flex","justify-content-center"],["styleClass","w-full","severity","success","label","Add a new property","icon","pi pi-plus","pTooltip","Add a new property to your Entity definition","tooltipPosition","top","iconPos","left",3,"onClick"],["label","Generate Code!","icon","pi pi-code","iconPos","left","type","submit","pTooltip","Lets generate code based on your configuration","tooltipPosition","top",3,"disabled"],[1,"danger-text"],[4,"ngIf"]],template:function(t,n){t&1&&(r(0,"form",0),b("ngSubmit",function(){return n.onSubmit()}),r(1,"h3",1),d(2,"DEFINE YOUR ENTITY"),l(),r(3,"p-floatlabel",2),v(4,"input",3),r(5,"label",4),d(6,"Entity Singular Name"),l(),m(7,ai,5,4,"div",5),l(),r(8,"p-floatlabel",2),v(9,"input",6),r(10,"label",7),d(11,"Entity Plural Name"),l(),m(12,mi,5,4,"div",5),l(),r(13,"p-floatlabel",2),v(14,"input",8),r(15,"label",9),d(16,"DB Context Class Name"),l(),m(17,yi,5,4,"div",5),l(),r(18,"h3",1),d(19,"DEFINE YOUR ENTITY PROPERTIES"),l(),r(20,"app-property-grid",10),b("deletePropertyEvent",function(a){return n.onPropertyDelete(a)})("newKeyPropertyEvent",function(a){return n.onNewKeyProperty(a)}),l(),v(21,"hr"),r(22,"div",11)(23,"div",12)(24,"p-button",13),b("onClick",function(){return n.onPropertyAdd()}),l()()(),v(25,"hr"),r(26,"div",11)(27,"div",12),v(28,"p-button",14),l()()()),t&2&&(s("formGroup",n.configurationForm),c(7),s("ngIf",n.configurationForm.controls.entitySingularName.invalid&&((n.configurationForm.controls.entitySingularName==null?null:n.configurationForm.controls.entitySingularName.dirty)||(n.configurationForm.controls.entitySingularName==null?null:n.configurationForm.controls.entitySingularName.touched))),c(5),s("ngIf",(n.configurationForm.controls.entityPluralName==null?null:n.configurationForm.controls.entityPluralName.invalid)&&((n.configurationForm.controls.entityPluralName==null?null:n.configurationForm.controls.entityPluralName.dirty)||(n.configurationForm.controls.entityPluralName==null?null:n.configurationForm.controls.entityPluralName.touched))),c(5),s("ngIf",(n.configurationForm.controls.contextClassName==null?null:n.configurationForm.controls.contextClassName.invalid)&&((n.configurationForm.controls.contextClassName==null?null:n.configurationForm.controls.contextClassName.dirty)||(n.configurationForm.controls.contextClassName==null?null:n.configurationForm.controls.contextClassName.touched))),c(3),s("properties",n.properties),c(8),s("disabled",!n.configurationForm.valid))},dependencies:[le,T,q,H,Ke,Y,J,Ge,X,Oe,Ae,Je,Ye,dt,ce,ee,Qe,oe,ie,te],styles:["form[_ngcontent-%COMP%]{margin-bottom:60px}"]})};var _i=[{path:"",component:ae}],bt=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=k({type:e});static \u0275inj=I({imports:[se.forChild(_i),se]})};export{bt as MainRoutingModule};
