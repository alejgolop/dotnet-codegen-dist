import{c as dt,e as me,g as mt,i as ut,j as gt}from"./chunk-AAMEGHVX.js";import{A as lt,B as at,C as pt,D as re,E as st,a as Le,b as H,c as _,d as X,e as Ke,f as Oe,g as Ae,h as We,i as je,j as Ue,k as qe,l as ze,m as Z,n as ee,p as He,q as Xe,r as Ze,s as et,t as tt,u as it,v as ot,y as nt,z as rt}from"./chunk-FZ3YVUZA.js";import{f as oe,g as ne}from"./chunk-XOLJM4SV.js";import"./chunk-S35HUXPS.js";import{a as Qe,c as Ye,d as Je,e as ie,g as ct}from"./chunk-FMILLHP6.js";import{f as Be,ga as Y,ja as Ge,ka as N,l as de,ma as J,oa as te}from"./chunk-Y6Z3Q5YN.js";import{$a as O,$b as y,Ab as p,Ac as Re,Bb as Ne,Bc as De,Cb as Ie,Cc as T,Db as ce,Eb as Fe,Fb as W,Gb as j,Kb as d,Mb as U,Na as c,Ob as S,Pb as E,Qb as M,Rb as R,Sa as xe,Sb as q,Tb as ke,X as Ce,Y as I,Ya as P,Z as F,Za as $,a as ve,ab as Pe,bb as m,ca as b,g as K,hc as z,ib as A,ic as $e,jb as s,ka as g,la as f,lb as Se,mb as V,na as k,nb as Ee,ob as Me,sb as r,tb as l,ua as B,ub as C,xb as Te,xc as Ve,yb as h,zb as w,zc as Q}from"./chunk-2WHKZRHE.js";var Et=({dt:e})=>`
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
`,Mt={root:({instance:e,props:i})=>["p-floatlabel",{"p-floatlabel-over":i.variant==="over","p-floatlabel-on":i.variant==="on","p-floatlabel-in":i.variant==="in"}]},ft=(()=>{class e extends J{name="floatlabel";theme=Et;classes=Mt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var Tt=["*"],ue=(()=>{class e extends te{_componentStyle=b(ft);variant="over";static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(n,o){n&2&&Se("p-floatlabel",!0)("p-floatlabel-over",o.variant==="over")("p-floatlabel-on",o.variant==="on")("p-floatlabel-in",o.variant==="in")},inputs:{variant:"variant"},features:[R([ft]),O],ngContentSelectors:Tt,decls:1,vars:0,template:function(n,o){n&1&&(Ne(),Ie(0))},dependencies:[T,N],encapsulation:2,changeDetection:0})}return e})(),ht=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=F({imports:[ue,N,N]})}return e})();var u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function yt(e,i=0){return(u[e[i+0]]+u[e[i+1]]+u[e[i+2]]+u[e[i+3]]+"-"+u[e[i+4]]+u[e[i+5]]+"-"+u[e[i+6]]+u[e[i+7]]+"-"+u[e[i+8]]+u[e[i+9]]+"-"+u[e[i+10]]+u[e[i+11]]+u[e[i+12]]+u[e[i+13]]+u[e[i+14]]+u[e[i+15]]).toLowerCase()}var ge,It=new Uint8Array(16);function fe(){if(!ge){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ge=crypto.getRandomValues.bind(crypto)}return ge(It)}var Ft=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),he={randomUUID:Ft};function kt(e,i,t){if(he.randomUUID&&!i&&!e)return he.randomUUID();e=e||{};let n=e.random??e.rng?.()??fe();if(n.length<16)throw new Error("Random bytes length must be >= 16");if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,i){if(t=t||0,t<0||t+16>i.length)throw new RangeError(`UUID byte range ${t}:${t+15} is out of buffer bounds`);for(let o=0;o<16;++o)i[t+o]=n[o];return i}return yt(n)}var L=kt;function ye(e=!1){return{id:L(),isPrimaryKey:e,name:"NewProperty",propertyMethods:"{get; init;}",type:"string",isCollection:!1}}var _e=(x=>(x.Guid="Guid",x.string="string",x.bool="bool",x.int="int",x.short="short",x.decimal="decimal",x.DateTime="DateTime",x.TimeOnly="TimeOnly",x.DateOnly="DateOnly",x))(_e||{});function bt(e){return JSON.stringify(e)}function le(){return/^[^_ -][A-z][^_ -]*$/}function be(){return/^[^ -][A-z][^ -]*$/}var $t=({dt:e})=>`
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
}`,Vt={root:{position:"relative"}},Rt={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},wt=(()=>{class e extends J{name="toggleswitch";theme=$t;classes=Rt;inlineStyles=Vt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var Dt=["handle"],Bt=["input"],Gt=e=>({checked:e});function Lt(e,i){e&1&&Te(0)}function Kt(e,i){if(e&1&&m(0,Lt,1,0,"ng-container",4),e&2){let t=p();s("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",ke(2,Gt,t.checked()))}}var Ot={provide:Le,useExisting:Ce(()=>Ct),multi:!0},Ct=(()=>{class e extends te{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new B;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=b(wt);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275cmp=P({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,o,a){if(n&1&&(ce(a,Dt,4),ce(a,Ge,4)),n&2){let v;W(v=j())&&(o.handleTemplate=v.first),W(v=j())&&(o.templates=v)}},viewQuery:function(n,o){if(n&1&&Fe(Bt,5),n&2){let a;W(a=j())&&(o.input=a.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",$e],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",z],readonly:[2,"readonly","readonly",z],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",z]},outputs:{onChange:"onChange"},features:[R([Ot,wt]),Pe,O],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){if(n&1){let a=h();r(0,"div",1),w("click",function(D){return g(a),f(o.onClick(D))}),r(1,"input",2,0),w("focus",function(){return g(a),f(o.onFocus())})("blur",function(){return g(a),f(o.onBlur())}),l(),r(3,"span",3)(4,"div",3),m(5,Kt,1,4,"ng-container"),l()()()}n&2&&(V(o.sx("root")),Ee(o.styleClass),s("ngClass",o.cx("root"))("ngStyle",o.style),A("data-pc-name","toggleswitch")("data-pc-section","root"),c(),s("ngClass",o.cx("input"))("checked",o.checked())("disabled",o.disabled)("pAutoFocus",o.autofocus),A("id",o.inputId)("aria-checked",o.checked())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("name",o.name)("tabindex",o.tabindex)("data-pc-section","hiddenInput"),c(2),s("ngClass",o.cx("slider")),A("data-pc-section","slider"),c(),s("ngClass",o.cx("handle")),c(),Me(o.handleTemplate||o._handleTemplate?5:-1))},dependencies:[T,Ve,De,Re,Qe,N],encapsulation:2,changeDetection:0})}return e})(),xt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=F({imports:[Ct,N,N]})}return e})();var we=()=>({width:"100%"});function qt(e,i){e&1&&(r(0,"tr")(1,"th",6),d(2,"Type"),l(),r(3,"th",7),d(4,"Is A Collection"),l(),r(5,"th",8),d(6,"Name"),l(),r(7,"th",6),d(8,"Property Methods"),l(),r(9,"th",7),d(10,"Is Primary Key"),l(),C(11,"th",7),l())}function zt(e,i){if(e&1){let t=h();r(0,"p-select",15),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.type,o)||(a.type=o),f(o)}),l()}if(e&2){let t=p().$implicit,n=p();V(q(4,we)),s("options",n.propertyTypes),S("ngModel",t.type)}}function Qt(e,i){if(e&1&&d(0),e&2){let t=p().$implicit;U(" ",t.type," ")}}function Yt(e,i){if(e&1){let t=h();r(0,"p-togglebutton",16),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.isCollection,o)||(a.isCollection=o),f(o)}),l()}if(e&2){let t=p().$implicit;S("ngModel",t.isCollection)}}function Jt(e,i){if(e&1){let t=h();r(0,"p-togglebutton",17),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.isCollection,o)||(a.isCollection=o),f(o)}),l()}if(e&2){let t=p().$implicit;S("ngModel",t.isCollection)}}function Ht(e,i){if(e&1){let t=h();r(0,"input",18),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.name,o)||(a.name=o),f(o)}),l()}if(e&2){let t=p().$implicit,n=p();V(q(4,we)),S("ngModel",t.name),s("pattern",n.getPropertyNameRegExp())}}function Xt(e,i){if(e&1&&d(0),e&2){let t=p().$implicit;U(" ",t.name," ")}}function Zt(e,i){if(e&1){let t=h();r(0,"p-select",15),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.propertyMethods,o)||(a.propertyMethods=o),f(o)}),l()}if(e&2){let t=p().$implicit,n=p();V(q(4,we)),s("options",n.propertyMethods),S("ngModel",t.propertyMethods)}}function ei(e,i){if(e&1&&d(0),e&2){let t=p().$implicit;U(" ",t.propertyMethods," ")}}function ti(e,i){if(e&1){let t=h();r(0,"p-togglebutton",16),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.isPrimaryKey,o)||(a.isPrimaryKey=o),f(o)}),l()}if(e&2){let t=p().$implicit;S("ngModel",t.isPrimaryKey)}}function ii(e,i){if(e&1){let t=h();r(0,"p-togglebutton",17),M("ngModelChange",function(o){g(t);let a=p().$implicit;return E(a.isPrimaryKey,o)||(a.isPrimaryKey=o),f(o)}),l()}if(e&2){let t=p().$implicit;S("ngModel",t.isPrimaryKey)}}function oi(e,i){if(e&1){let t=h();r(0,"button",19),w("click",function(){g(t);let o=p().$implicit,a=p();return f(a.onRowEditInit(o))}),l()}}function ni(e,i){if(e&1){let t=h();r(0,"button",20),w("click",function(){g(t);let o=p(),a=o.$implicit,v=o.rowIndex,D=p();return f(D.onRowDelete(a,v))}),l()}}function ri(e,i){if(e&1){let t=h();r(0,"button",21),w("click",function(){g(t);let o=p().$implicit,a=p();return f(a.onRowEditSave(o))}),l()}if(e&2){let t=p().$implicit,n=p();s("disabled",!n.propertyNameIsValid(t.name))}}function li(e,i){if(e&1){let t=h();r(0,"button",22),w("click",function(){g(t);let o=p(),a=o.$implicit,v=o.rowIndex,D=p();return f(D.onRowEditCancel(a,v))}),l()}}function ai(e,i){if(e&1&&(r(0,"tr",9)(1,"td")(2,"p-cellEditor"),m(3,zt,1,5,"ng-template",null,2,y)(5,Qt,1,1,"ng-template",null,3,y),l()(),r(7,"td")(8,"p-cellEditor"),m(9,Yt,1,1,"ng-template",null,2,y)(11,Jt,1,1,"ng-template",null,3,y),l()(),r(13,"td")(14,"p-cellEditor"),m(15,Ht,1,5,"ng-template",null,2,y)(17,Xt,1,1,"ng-template",null,3,y),l()(),r(19,"td")(20,"p-cellEditor"),m(21,Zt,1,5,"ng-template",null,2,y)(23,ei,1,1,"ng-template",null,3,y),l()(),r(25,"td")(26,"p-cellEditor"),m(27,ti,1,1,"ng-template",null,2,y)(29,ii,1,1,"ng-template",null,3,y),l()(),r(31,"td")(32,"div",10),m(33,oi,1,0,"button",11)(34,ni,1,0,"button",12)(35,ri,1,1,"button",13)(36,li,1,0,"button",14),l()()()),e&2){let t=i.$implicit,n=i.editing;s("pEditableRow",t),c(33),s("ngIf",!n),c(),s("ngIf",!n),c(),s("ngIf",n),c(),s("ngIf",n)}}var ae=class e{constructor(i){this.messageService=i}properties;deletePropertyEvent=new B;newKeyPropertyEvent=new B;propertyMethods;propertyTypes;clonedProperties={};ngOnInit(){this.propertyMethods=[{label:"{get; init;}",value:"{get; init;}"},{label:"{get; set;}",value:"{get; set;}"}],this.propertyTypes=Object.keys(_e).map(i=>({label:i,value:i}))}onRowEditInit(i){this.clonedProperties[i.id]=ve({},i)}onRowDelete(i,t){if(this.properties.length<=1){this.messageService.add({severity:"error",summary:"Error",detail:"At least one property is needed"});return}if(i.isPrimaryKey){this.messageService.add({severity:"error",summary:"Error",detail:"A Primary Key is needed"});return}this.deletePropertyEvent.emit(i.id)}onRowEditSave(i){var t=this.properties.find(n=>n.isPrimaryKey)==null;i.isPrimaryKey!==this.clonedProperties[i.id].isPrimaryKey&&this.newKeyPropertyEvent.emit(i.id),delete this.clonedProperties[i.id],t?this.messageService.add({severity:"error",summary:"Error",detail:"Saved another changes, but a Primary Key is needed"}):this.messageService.add({severity:"success",summary:"Success",detail:"Property is updated"})}onRowEditCancel(i,t){this.properties[t]=this.clonedProperties[i.id],delete this.clonedProperties[i.id]}getSeverity(i){switch(i){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return"info"}}propertyNameIsValid(i){return!(i.length<4||!be().test(i))}getPropertyNameRegExp(){return be()}static \u0275fac=function(t){return new(t||e)(xe(Y))};static \u0275cmp=P({type:e,selectors:[["app-property-grid"]],inputs:{properties:"properties"},outputs:{deletePropertyEvent:"deletePropertyEvent",newKeyPropertyEvent:"newKeyPropertyEvent"},features:[R([Y])],decls:7,vars:1,consts:[["header",""],["body",""],["input",""],["output",""],[1,"card"],["dataKey","id","editMode","row",3,"value"],[2,"width","15%"],[2,"width","10%"],[2,"width","40%"],[3,"pEditableRow"],[1,"flex","items-center","justify-center","gap-2"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","text","","rounded","","severity","secondary","pTooltip","Edit this Property","tooltipPosition","left",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-trash","text","","rounded","","severity","danger","pTooltip","Delete this Property","tooltipPosition","left",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","text","","rounded","","severity","secondary","pTooltip","Save Changes","tooltipPosition","left",3,"disabled","click",4,"ngIf"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","text","","rounded","","severity","secondary","pTooltip","Cancel Changes","tooltipPosition","left",3,"click",4,"ngIf"],["appendTo","body",3,"ngModelChange","options","ngModel"],["onIcon","pi pi-check-circle","offIcon","pi pi-times","styleClass","w-36","ariaLabel","Do you confirm",3,"ngModelChange","ngModel"],["disabled","true","onIcon","pi pi-check-circle","offIcon","pi pi-times","styleClass","w-36","ariaLabel","Do you confirm",3,"ngModelChange","ngModel"],["pInputText","","type","text","required","",3,"ngModelChange","ngModel","pattern"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","text","","rounded","","severity","secondary","pTooltip","Edit this Property","tooltipPosition","left",3,"click"],["pButton","","pRipple","","type","button","icon","pi pi-trash","text","","rounded","","severity","danger","pTooltip","Delete this Property","tooltipPosition","left",3,"click"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","text","","rounded","","severity","secondary","pTooltip","Save Changes","tooltipPosition","left",3,"click","disabled"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","text","","rounded","","severity","secondary","pTooltip","Cancel Changes","tooltipPosition","left",3,"click"]],template:function(t,n){t&1&&(r(0,"div",4),C(1,"p-toast"),r(2,"p-table",5),m(3,qt,12,0,"ng-template",null,0,y)(5,ai,37,5,"ng-template",null,1,y),l()()),t&2&&(c(2),s("value",n.properties))},dependencies:[T,Q,ie,Ye,Z,H,X,Ue,qe,Oe,ee,ne,oe,it,tt,xt,st,re,ot,pt,nt,rt,lt,at,et,Ze],encapsulation:2})};var pe=class e{analytics=b(dt);firestore=b(mt);itemCollection=gt(this.firestore,"items");item$=ut(this.itemCollection);constructor(){this.item$.subscribe(this.test),setTimeout(()=>K(this,null,function*(){this.init()}))}test(i){console.log("asdasd"),console.log(i),console.log("asdasd")}init(){me(this.analytics,"service_start",{})}sendClick(){me(this.analytics,"click_event",{name:"Send Click FIREBASE"})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})};function pi(e,i){e&1&&(r(0,"div"),d(1," Entity Singular Name is required. "),l())}function si(e,i){e&1&&(r(0,"div"),d(1," Entity Singular Name must be at least 4 characters long. "),l())}function ci(e,i){e&1&&(r(0,"div"),d(1," Entity Singular Name must be at max 50 characters long. "),l())}function di(e,i){e&1&&(r(0,"div"),d(1," White Spaces and/or Special Symbols not alowed. "),l())}function mi(e,i){if(e&1&&(r(0,"div",15),m(1,pi,2,0,"div",16)(2,si,2,0,"div",16)(3,ci,2,0,"div",16)(4,di,2,0,"div",16),l()),e&2){let t=p();c(),s("ngIf",t.configurationForm.controls.entitySingularName==null?null:t.configurationForm.controls.entitySingularName.hasError("required")),c(),s("ngIf",t.configurationForm.controls.entitySingularName==null?null:t.configurationForm.controls.entitySingularName.hasError("minlength")),c(),s("ngIf",t.configurationForm.controls.entitySingularName==null?null:t.configurationForm.controls.entitySingularName.hasError("maxlength")),c(),s("ngIf",t.configurationForm.controls.entitySingularName==null?null:t.configurationForm.controls.entitySingularName.hasError("pattern"))}}function ui(e,i){e&1&&(r(0,"div"),d(1," Entity Plural Name is required. "),l())}function gi(e,i){e&1&&(r(0,"div"),d(1," Entity Plural Name must be at least 4 characters long. "),l())}function fi(e,i){e&1&&(r(0,"div"),d(1," Entity Plural Name must be at max 50 characters long. "),l())}function hi(e,i){e&1&&(r(0,"div"),d(1," White Spaces and/or Special Symbols not alowed. "),l())}function yi(e,i){if(e&1&&(r(0,"div",15),m(1,ui,2,0,"div",16)(2,gi,2,0,"div",16)(3,fi,2,0,"div",16)(4,hi,2,0,"div",16),l()),e&2){let t=p();c(),s("ngIf",t.configurationForm.controls.entityPluralName==null?null:t.configurationForm.controls.entityPluralName.hasError("required")),c(),s("ngIf",t.configurationForm.controls.entityPluralName==null?null:t.configurationForm.controls.entityPluralName.hasError("minlength")),c(),s("ngIf",t.configurationForm.controls.entityPluralName==null?null:t.configurationForm.controls.entityPluralName.hasError("maxlength")),c(),s("ngIf",t.configurationForm.controls.entityPluralName==null?null:t.configurationForm.controls.entityPluralName.hasError("pattern"))}}function _i(e,i){e&1&&(r(0,"div"),d(1," DB Context Class Name is required. "),l())}function bi(e,i){e&1&&(r(0,"div"),d(1," DB Context Class Name must be at least 4 characters long. "),l())}function wi(e,i){e&1&&(r(0,"div"),d(1," DB Context Class Name must be at max 50 characters long. "),l())}function vi(e,i){e&1&&(r(0,"div"),d(1," White Spaces and/or Special Symbols not alowed. "),l())}function Ci(e,i){if(e&1&&(r(0,"div",15),m(1,_i,2,0,"div",16)(2,bi,2,0,"div",16)(3,wi,2,0,"div",16)(4,vi,2,0,"div",16),l()),e&2){let t=p();c(),s("ngIf",t.configurationForm.controls.contextClassName==null?null:t.configurationForm.controls.contextClassName.hasError("required")),c(),s("ngIf",t.configurationForm.controls.contextClassName==null?null:t.configurationForm.controls.contextClassName.hasError("minlength")),c(),s("ngIf",t.configurationForm.controls.contextClassName==null?null:t.configurationForm.controls.contextClassName.hasError("maxlength")),c(),s("ngIf",t.configurationForm.controls.contextClassName==null?null:t.configurationForm.controls.contextClassName.hasError("pattern"))}}var se=class e{storageService=b(ct);router=b(Be);analytics=b(pe);formBuilder=b(ze);configurationForm=this.formBuilder.group({entitySingularName:["",[_.required,_.minLength(4),_.maxLength(50),_.pattern(le())]],entityPluralName:["",[_.required,_.minLength(4),_.maxLength(50),_.pattern(le())]],contextClassName:["",[_.required,_.minLength(4),_.maxLength(50),_.pattern(le())]]});properties;ngOnInit(){this.properties=[ye(!0)]}onSubmit(){return K(this,null,function*(){this.analytics.sendClick();var i={id:L(),createdAt:new Date().toISOString(),entitySingularName:this.configurationForm.controls.entitySingularName.value??"",entityPluralName:this.configurationForm.controls.entityPluralName.value??"",contextClassName:this.configurationForm.controls.contextClassName.value??"",properties:this.properties};this.storageService.saveConfiguration(i),this.router.navigate([`/result/${i.id}`])})}onPropertyAdd(){this.properties.push(ye())}onPropertyDelete(i){this.properties=this.properties.filter(t=>t.id!==i)}onNewKeyProperty(i){var t=this.properties.find(o=>o.id==i);if(t)if(t.isPrimaryKey)this.properties.forEach(o=>{o.id!==i&&(o.isPrimaryKey=!1)});else{var n=this.properties.find(o=>o.isPrimaryKey);n||(t.isPrimaryKey=!0)}}printProperty(i){return bt(i)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=P({type:e,selectors:[["app-main-page"]],decls:29,vars:6,consts:[[1,"formgrid","grid",3,"ngSubmit","formGroup"],[1,"field","col-12"],["variant","on",1,"field","col-4"],["pInputText","","id","entity-singular-name","formControlName","entitySingularName","pTooltip","Enter a good Entity Name. Examples: Client, Item, Invoice, Player, Food, Order... ","tooltipPosition","bottom","autocomplete","off",1,"w-full"],["for","entity-singular-name"],["class","danger-text",4,"ngIf"],["pInputText","","id","entity-plural-name","formControlName","entityPluralName","pTooltip","Enter a PLURAL variant for your Entity Name. Examples: Clients, Items, Invoices, Players, Foods, Orders... ","tooltipPosition","bottom","autocomplete","off",1,"w-full"],["for","entity-plural-name"],["pInputText","","id","context-class-name","formControlName","contextClassName","pTooltip","Enter a your inherited DbContext Class Name. This is used for generating an Entity Repository. Examples: ClientContext, MyAppDbContext... ","tooltipPosition","bottom","autocomplete","off",1,"w-full"],["for","context-class-name"],[1,"col-12",3,"deletePropertyEvent","newKeyPropertyEvent","properties"],[1,"col-12"],[1,"flex","justify-content-center"],["styleClass","w-full","severity","success","label","Add a new property","icon","pi pi-plus","pTooltip","Add a new property to your Entity definition","tooltipPosition","top","iconPos","left",3,"onClick"],["label","Generate Code!","icon","pi pi-code","iconPos","left","type","submit","pTooltip","Lets generate code based on your configuration","tooltipPosition","top",3,"disabled"],[1,"danger-text"],[4,"ngIf"]],template:function(t,n){t&1&&(r(0,"form",0),w("ngSubmit",function(){return n.onSubmit()}),r(1,"h3",1),d(2,"DEFINE YOUR ENTITY"),l(),r(3,"p-floatlabel",2),C(4,"input",3),r(5,"label",4),d(6,"Entity Singular Name"),l(),m(7,mi,5,4,"div",5),l(),r(8,"p-floatlabel",2),C(9,"input",6),r(10,"label",7),d(11,"Entity Plural Name"),l(),m(12,yi,5,4,"div",5),l(),r(13,"p-floatlabel",2),C(14,"input",8),r(15,"label",9),d(16,"DB Context Class Name"),l(),m(17,Ci,5,4,"div",5),l(),r(18,"h3",1),d(19,"DEFINE YOUR ENTITY PROPERTIES"),l(),r(20,"app-property-grid",10),w("deletePropertyEvent",function(a){return n.onPropertyDelete(a)})("newKeyPropertyEvent",function(a){return n.onNewKeyProperty(a)}),l(),C(21,"hr"),r(22,"div",11)(23,"div",12)(24,"p-button",13),w("onClick",function(){return n.onPropertyAdd()}),l()()(),C(25,"hr"),r(26,"div",11)(27,"div",12),C(28,"p-button",14),l()()()),t&2&&(s("formGroup",n.configurationForm),c(7),s("ngIf",n.configurationForm.controls.entitySingularName.invalid&&((n.configurationForm.controls.entitySingularName==null?null:n.configurationForm.controls.entitySingularName.dirty)||(n.configurationForm.controls.entitySingularName==null?null:n.configurationForm.controls.entitySingularName.touched))),c(5),s("ngIf",(n.configurationForm.controls.entityPluralName==null?null:n.configurationForm.controls.entityPluralName.invalid)&&((n.configurationForm.controls.entityPluralName==null?null:n.configurationForm.controls.entityPluralName.dirty)||(n.configurationForm.controls.entityPluralName==null?null:n.configurationForm.controls.entityPluralName.touched))),c(5),s("ngIf",(n.configurationForm.controls.contextClassName==null?null:n.configurationForm.controls.contextClassName.invalid)&&((n.configurationForm.controls.contextClassName==null?null:n.configurationForm.controls.contextClassName.dirty)||(n.configurationForm.controls.contextClassName==null?null:n.configurationForm.controls.contextClassName.touched))),c(3),s("properties",n.properties),c(8),s("disabled",!n.configurationForm.valid))},dependencies:[ae,T,Q,Z,Ae,H,X,Ke,ee,We,je,Xe,He,ht,ue,ie,Je,re,ne,oe],styles:["form[_ngcontent-%COMP%]{margin-bottom:60px}"]})};var xi=[{path:"",component:se}],Pt=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=$({type:e});static \u0275inj=F({imports:[de.forChild(xi),de]})};export{Pt as MainRoutingModule};
