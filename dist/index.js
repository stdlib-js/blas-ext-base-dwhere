"use strict";var w=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var j=w(function(P,_){
var A=require('@stdlib/strided-base-reinterpret-boolean/dist');function D(r,e,i,s,v,q,n,c,t,f,a,y,d){var R,p,x,h,u,l;if(r<=0)return a;for(R=A(e,0),p=s,x=n,h=f,u=d,l=0;l<r;l++)R[p]?a[u]=v[x]:a[u]=c[h],p+=i,x+=q,h+=t,u+=y;return a}_.exports=D
});var B=w(function(Q,b){
var o=require('@stdlib/strided-base-stride2offset/dist'),F=j();function G(r,e,i,s,v,q,n,c,t){var f=o(r,i),a=o(r,v),y=o(r,n),d=o(r,t);return F(r,e,i,f,s,v,a,q,n,y,c,t,d)}b.exports=G
});var k=w(function(S,g){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=B(),I=j();H(E,"ndarray",I);g.exports=E
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=k(),m,z=K(J(__dirname,"./native.js"));L(z)?m=M:m=z;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
