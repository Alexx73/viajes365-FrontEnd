(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jcJX:function(r,e,o){"use strict";o.r(e),o.d(e,"AccountModule",function(){return Z});var i=o("3Pt+"),t=o("ofXK"),s=o("tyNb"),n=o("fXoL"),b=o("5ZPe");let a=(()=>{class r{constructor(r,e){this.router=r,this.accountService=e,this.accountService.userValue&&this.router.navigate(["/"])}}return r.\u0275fac=function(e){return new(e||r)(n.Kb(s.c),n.Kb(b.a))},r.\u0275cmp=n.Eb({type:r,selectors:[["ng-component"]],decls:1,vars:0,template:function(r,e){1&r&&n.Lb(0,"router-outlet")},directives:[s.h],encapsulation:2}),r})();var c=o("SxV6"),d=o("J9tS");function l(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"Nombre de Usuario es obligatorio"),n.Ob())}function u(r,e){if(1&r&&(n.Pb(0,"div",22),n.uc(1,l,2,0,"div",23),n.Ob()),2&r){const r=n.bc();n.yb(1),n.gc("ngIf",r.f.username.errors.required)}}function m(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"La contrase\xf1a es obligatoria"),n.Ob())}function f(r,e){if(1&r&&(n.Pb(0,"div",22),n.uc(1,m,2,0,"div",23),n.Ob()),2&r){const r=n.bc();n.yb(1),n.gc("ngIf",r.f.password.errors.required)}}function g(r,e){1&r&&n.Lb(0,"span",24)}const p=function(r){return{"is-invalid":r}};let v=(()=>{class r{constructor(r,e,o,i,t){this.formBuilder=r,this.route=e,this.router=o,this.accountService=i,this.alertService=t,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({username:["",i.o.required],password:["",i.o.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.login(this.f.username.value,this.f.password.value).pipe(Object(c.a)()).subscribe({next:r=>{this.router.navigateByUrl(r.returnUrl||"/")},error:r=>{this.alertService.error(r),this.loading=!1}}))}}return r.\u0275fac=function(e){return new(e||r)(n.Kb(i.c),n.Kb(s.a),n.Kb(s.c),n.Kb(b.a),n.Kb(d.a))},r.\u0275cmp=n.Eb({type:r,selectors:[["app-login"]],decls:34,vars:11,consts:[[1,"p-4"],[1,"container"],[1,"col-md-6","offset-md-3","mt-5"],[1,"card",2,"background-color","rgba(255, 255, 255, 0.4)","box-shadow","0 0 25px -6px rgba(0, 0, 0, 0.9)"],[1,"card-header","cardtitle-custom"],[1,"bi-shield-lock-fill",2,"color","black","margin-right","8px"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-floating"],["type","text","formControlName","username","id","username","placeholder","usuario",1,"form-control",3,"ngClass"],["for","username"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password","id","password","placeholder","contrase\xf1a",1,"form-control",3,"ngClass"],["for","password"],[1,"form-group",2,"float","right"],[1,"btn","btn-primary","me-2",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"bi-unlock-fill",2,"color","white","margin-right","8px"],["routerLink","../register",1,"btn","btn-secondary"],[1,"bi-pencil-square",2,"color","white","margin-right","8px"],[2,"text-align","center","color","yellowgreen"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.Pb(2,"div",2),n.Pb(3,"div",3),n.Pb(4,"h4",4),n.Lb(5,"i",5),n.wc(6,"Ingresar"),n.Ob(),n.Pb(7,"div",6),n.Pb(8,"form",7),n.Zb("ngSubmit",function(){return e.onSubmit()}),n.Pb(9,"div",8),n.Pb(10,"div",9),n.Lb(11,"input",10),n.Pb(12,"label",11),n.wc(13,"Usuario *"),n.Ob(),n.uc(14,u,2,1,"div",12),n.Ob(),n.Ob(),n.Lb(15,"br"),n.Pb(16,"div",8),n.Pb(17,"div",9),n.Lb(18,"input",13),n.Pb(19,"label",14),n.wc(20,"Contrase\xf1a *"),n.Ob(),n.uc(21,f,2,1,"div",12),n.Ob(),n.Ob(),n.Lb(22,"hr"),n.Pb(23,"div",15),n.Pb(24,"button",16),n.uc(25,g,1,0,"span",17),n.Lb(26,"i",18),n.wc(27," Ingresar "),n.Ob(),n.Pb(28,"button",19),n.Lb(29,"i",20),n.wc(30,"Registrarse "),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Lb(31,"br"),n.Pb(32,"p",21),n.wc(33,"admin / admin | user / user"),n.Ob(),n.Ob(),n.Ob(),n.Ob()),2&r&&(n.yb(8),n.gc("formGroup",e.form),n.yb(3),n.gc("ngClass",n.kc(7,p,e.submitted&&e.f.username.errors)),n.yb(3),n.gc("ngIf",e.submitted&&e.f.username.errors),n.yb(4),n.gc("ngClass",n.kc(9,p,e.submitted&&e.f.password.errors)),n.yb(3),n.gc("ngIf",e.submitted&&e.f.password.errors),n.yb(3),n.gc("disabled",e.loading),n.yb(1),n.gc("ngIf",e.loading))},directives:[i.q,i.j,i.e,i.b,i.i,i.d,t.i,t.k,s.d],encapsulation:2}),r})();var h=o("XgRA"),P=o("f5O9");function w(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"Al menos un Nombre es obligatorio"),n.Ob())}function O(r,e){if(1&r&&(n.Pb(0,"div",36),n.uc(1,w,2,0,"div",37),n.Ob()),2&r){const r=n.bc();n.yb(1),n.gc("ngIf",r.f.firstName.errors.required)}}function y(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"Al menos un Apellido es obligatorio"),n.Ob())}function C(r,e){if(1&r&&(n.Pb(0,"div",36),n.uc(1,y,2,0,"div",37),n.Ob()),2&r){const r=n.bc();n.yb(1),n.gc("ngIf",r.f.lastName.errors.required)}}function k(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"Nombre de Usuario es obligatorio"),n.Ob())}function L(r,e){if(1&r&&(n.Pb(0,"div",36),n.uc(1,k,2,0,"div",37),n.Ob()),2&r){const r=n.bc();n.yb(1),n.gc("ngIf",r.f.username.errors.required)}}function I(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"El email es obligatorio"),n.Ob())}function N(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"El email deber ser una direcci\xf3n v\xe1lida"),n.Ob())}function x(r,e){if(1&r&&(n.Pb(0,"div",36),n.uc(1,I,2,0,"div",37),n.uc(2,N,2,0,"div",37),n.Ob()),2&r){const r=n.bc();n.yb(1),n.gc("ngIf",r.f.email.errors.required),n.yb(1),n.gc("ngIf",r.f.email.errors.email)}}function S(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"La contrase\xf1a es obligatoria"),n.Ob())}function q(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"La contrase\xf1a de tener al menos 5 caracteres"),n.Ob())}function A(r,e){if(1&r&&(n.Pb(0,"div",36),n.uc(1,S,2,0,"div",37),n.uc(2,q,2,0,"div",37),n.Ob()),2&r){const r=n.bc();n.yb(1),n.gc("ngIf",r.f.password.errors.required),n.yb(1),n.gc("ngIf",r.f.password.errors.minlength)}}function T(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"La confirmaci\xf3n de contrase\xf1a es obligatoria "),n.Ob())}function K(r,e){1&r&&(n.Pb(0,"div"),n.wc(1,"Las contrase\xf1as deben coincidir "),n.Ob())}function j(r,e){if(1&r&&(n.Pb(0,"div",36),n.uc(1,T,2,0,"div",37),n.uc(2,K,2,0,"div",37),n.Ob()),2&r){const r=n.bc();n.yb(1),n.gc("ngIf",r.f.confirmPassword.errors.required),n.yb(1),n.gc("ngIf",r.f.confirmPassword.errors.mustMatch)}}function E(r,e){1&r&&n.Lb(0,"span",38)}const R=function(r){return{"is-invalid":r}},U=[{path:"",component:a},{path:"login",component:v,pathMatch:"full"},{path:"register",component:(()=>{class r{constructor(r,e,o,i,t){this.formBuilder=r,this.route=e,this.router=o,this.accountService=i,this.alertService=t,this.loading=!1,this.submitted=!1,this.termsLabel="No los acepto"}ngOnInit(){const r={validators:Object(h.b)("password","confirmPassword")};this.form=this.formBuilder.group({firstName:["",i.o.required],lastName:["",i.o.required],username:["",i.o.required],email:["",[i.o.required,i.o.email]],password:["",[i.o.minLength(6),i.o.required]],confirmPassword:["",i.o.required],TermsAndConditionsChecked:["",i.o.required]},r)}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid?this.termsLabel=this.form.get("TermsAndConditionsChecked").value?"Leidos y los acepto":"Aceptar los T\xe9rminos y Condiciones es obligatorio":(this.loading=!0,this.accountService.register(this.form.value).pipe(Object(c.a)()).subscribe({next:()=>{this.alertService.success("Registraci\xf3n exitosa",{keepAfterRouteChange:!0}),this.router.navigate(["/login"],{relativeTo:this.route})},error:r=>{this.alertService.error(r),this.loading=!1}}))}termsToggle(){this.termsLabel=this.form.get("TermsAndConditionsChecked").value?"Leidos y los acepto":"No los acepto"}showTerms(){this.alertService.info("Terminos y condiciones: al pie de p\xe1gina")}}return r.\u0275fac=function(e){return new(e||r)(n.Kb(i.c),n.Kb(s.a),n.Kb(s.c),n.Kb(b.a),n.Kb(P.a))},r.\u0275cmp=n.Eb({type:r,selectors:[["ng-component"]],decls:68,vars:31,consts:[[1,"p-4"],[1,"container"],[1,"col-md-6","offset-md-3","mt-5"],[1,"card",2,"background-color","rgba(255, 255, 255, 0.4)","box-shadow","0 0 25px -6px rgba(0, 0, 0, 0.9)"],[1,"card-header","cardtitle-custom"],[1,"bi-person-plus-fill",2,"color","black","margin-right","8px"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-floating"],["type","text","formControlName","firstName","id","firstName","placeholder","Nombres",1,"form-control",3,"ngClass"],["for","firstName"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName","id","lastName","placeholder","Apellidos",1,"form-control",3,"ngClass"],["for","lastName"],["type","text","formControlName","username","id","username","placeholder","usuario",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","email","id","email","placeholder","email",1,"form-control",3,"ngClass"],["for","email"],[1,"row"],[1,"form-group","col"],["type","password","formControlName","password","id","password","placeholder","password",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","confirmPassword","id","confirmPassword","placeholder","confirmpassword",1,"form-control",3,"ngClass"],["for","confirmPassword"],[2,"display","block","background-color","rgba(255, 255, 255)","border-radius","4px","margin-top","16px","padding-left","0.5rem","padding-top","0.2rem"],[2,"color","rgb(0, 0, 0)","font-size","medium",3,"click"],[1,"form-check","form-switch",2,"margin-top","0.3rem"],["type","checkbox","formControlName","TermsAndConditionsChecked",1,"form-check-input",3,"ngClass","change"],["for","TermsAndConditionsCheckeds",1,"form-check-label"],[1,"form-group",2,"float","right"],[1,"btn","btn-primary","me-2",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"bi-pencil-square",2,"color","white","margin-right","8px"],["routerLink","../home",1,"btn","btn-secondary"],[1,"bi-x",2,"color","white","margin-right","8px"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,e){1&r&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.Pb(2,"div",2),n.Pb(3,"div",3),n.Pb(4,"h4",4),n.Lb(5,"i",5),n.wc(6,"Registro "),n.Ob(),n.Pb(7,"div",6),n.Pb(8,"form",7),n.Zb("ngSubmit",function(){return e.onSubmit()}),n.Pb(9,"div",8),n.Pb(10,"div",9),n.Lb(11,"input",10),n.Pb(12,"label",11),n.wc(13,"Nombres *"),n.Ob(),n.uc(14,O,2,1,"div",12),n.Ob(),n.Ob(),n.Lb(15,"br"),n.Pb(16,"div",8),n.Pb(17,"div",9),n.Lb(18,"input",13),n.Pb(19,"label",14),n.wc(20,"Apellidos *"),n.Ob(),n.uc(21,C,2,1,"div",12),n.Ob(),n.Ob(),n.Lb(22,"br"),n.Pb(23,"div",8),n.Pb(24,"div",9),n.Lb(25,"input",15),n.Pb(26,"label",16),n.wc(27,"Nombre de Usuario *"),n.Ob(),n.uc(28,L,2,1,"div",12),n.Ob(),n.Ob(),n.Lb(29,"br"),n.Pb(30,"div",8),n.Pb(31,"div",9),n.Lb(32,"input",17),n.Pb(33,"label",18),n.wc(34,"Email *"),n.Ob(),n.uc(35,x,3,2,"div",12),n.Ob(),n.Ob(),n.Lb(36,"br"),n.Pb(37,"div",19),n.Pb(38,"div",20),n.Pb(39,"div",9),n.Lb(40,"input",21),n.Pb(41,"label",22),n.wc(42,"Contrase\xf1a *"),n.Ob(),n.uc(43,A,3,2,"div",12),n.Ob(),n.Ob(),n.Pb(44,"div",20),n.Pb(45,"div",9),n.Lb(46,"input",23),n.Pb(47,"label",24),n.wc(48,"Confirmar Contrase\xf1a *"),n.Ob(),n.uc(49,j,3,2,"div",12),n.Ob(),n.Ob(),n.Ob(),n.Pb(50,"div",19),n.Pb(51,"div",20),n.Pb(52,"div",25),n.Pb(53,"label",26),n.Zb("click",function(){return e.showTerms()}),n.wc(54,"T\xe9rminos y Condiciones *"),n.Ob(),n.Pb(55,"div",27),n.Pb(56,"input",28),n.Zb("change",function(){return e.termsToggle()}),n.Ob(),n.Pb(57,"label",29),n.wc(58),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Lb(59,"hr"),n.Pb(60,"div",30),n.Pb(61,"button",31),n.uc(62,E,1,0,"span",32),n.Lb(63,"i",33),n.wc(64,"Registrar "),n.Ob(),n.Pb(65,"button",34),n.Lb(66,"i",35),n.wc(67,"Cancelar "),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob()),2&r&&(n.yb(8),n.gc("formGroup",e.form),n.yb(3),n.gc("ngClass",n.kc(17,R,e.submitted&&e.f.firstName.errors)),n.yb(3),n.gc("ngIf",e.submitted&&e.f.firstName.errors),n.yb(4),n.gc("ngClass",n.kc(19,R,e.submitted&&e.f.lastName.errors)),n.yb(3),n.gc("ngIf",e.submitted&&e.f.lastName.errors),n.yb(4),n.gc("ngClass",n.kc(21,R,e.submitted&&e.f.username.errors)),n.yb(3),n.gc("ngIf",e.submitted&&e.f.username.errors),n.yb(4),n.gc("ngClass",n.kc(23,R,e.submitted&&e.f.email.errors)),n.yb(3),n.gc("ngIf",e.submitted&&e.f.email.errors),n.yb(5),n.gc("ngClass",n.kc(25,R,e.submitted&&e.f.password.errors)),n.yb(3),n.gc("ngIf",e.submitted&&e.f.password.errors),n.yb(3),n.gc("ngClass",n.kc(27,R,e.submitted&&e.f.confirmPassword.errors)),n.yb(3),n.gc("ngIf",e.submitted&&e.f.confirmPassword.errors),n.yb(7),n.gc("ngClass",n.kc(29,R,e.submitted&&!e.f.TermsAndConditionsChecked.value)),n.yb(2),n.xc(e.termsLabel),n.yb(3),n.gc("disabled",e.loading),n.yb(1),n.gc("ngIf",e.loading))},directives:[i.q,i.j,i.e,i.b,i.i,i.d,t.i,t.k,i.a,s.d],encapsulation:2}),r})(),pathMatch:"full"}];let B=(()=>{class r{}return r.\u0275mod=n.Ib({type:r}),r.\u0275inj=n.Hb({factory:function(e){return new(e||r)},imports:[[s.g.forChild(U)],s.g]}),r})(),Z=(()=>{class r{}return r.\u0275mod=n.Ib({type:r}),r.\u0275inj=n.Hb({factory:function(e){return new(e||r)},imports:[[t.b,i.m,B]]}),r})()}}]);