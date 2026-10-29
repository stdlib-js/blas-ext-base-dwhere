"use strict";var w=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var j=w(function(P,_){
var A=require('@stdlib/strided-base-reinterpret-boolean/dist');function D(r,e,a,s,v,q,n,c,t,f,i,y,d){var R,p,x,h,u,l;if(r<=0)return i;for(R=A(e,0),p=s,x=n,h=f,u=d,l=0;l<r;l++)R[p]?i[u]=v[x]:i[u]=c[h],p+=a,x+=q,h+=t,u+=y;return i}_.exports=D
});var B=w(function(Q,b){
var o=require('@stdlib/strided-base-stride2offset/dist'),F=j();function G(r,e,a,s,v,q,n,c,t){var f=o(r,a),i=o(r,v),y=o(r,n),d=o(r,t);return F(r,e,a,f,s,v,i,q,n,y,c,t,d)}b.exports=G
});var k=w(function(S,g){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=B(),I=j();H(E,"ndarray",I);g.exports=E
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=k(),m,z=K(J(__dirname,"./native.js"));L(z)?m=M:m=z;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
