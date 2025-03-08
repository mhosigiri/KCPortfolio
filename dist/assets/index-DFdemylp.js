(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="171",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cm=0,Ch=1,Pm=2,xd=1,Dm=2,Ni=3,_r=0,Cn=1,Bi=2,hr=0,Ls=1,Ph=2,Dh=3,Lh=4,Lm=5,Nr=100,Im=101,Um=102,Nm=103,Om=104,Fm=200,Bm=201,zm=202,km=203,wc=204,Rc=205,Hm=206,Vm=207,Gm=208,Wm=209,Xm=210,Ym=211,qm=212,jm=213,Zm=214,Cc=0,Pc=1,Dc=2,Vs=3,Lc=4,Ic=5,Uc=6,Nc=7,Md=0,$m=1,Km=2,fr=0,Jm=1,Qm=2,t_=3,e_=4,n_=5,i_=6,r_=7,Sd=300,Gs=301,Ws=302,Oc=303,Fc=304,vl=306,Bc=1e3,Fr=1001,zc=1002,pi=1003,s_=1004,io=1005,Mi=1006,Ll=1007,Br=1008,Yi=1009,yd=1010,Ed=1011,Ua=1012,Vu=1013,jr=1014,ki=1015,Ya=1016,Gu=1017,Wu=1018,Xs=1020,Td=35902,bd=1021,Ad=1022,di=1023,wd=1024,Rd=1025,Is=1026,Ys=1027,Cd=1028,Xu=1029,Pd=1030,Yu=1031,qu=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,kc=35840,Hc=35841,Vc=35842,Gc=35843,Wc=36196,Xc=37492,Yc=37496,qc=37808,jc=37809,Zc=37810,$c=37811,Kc=37812,Jc=37813,Qc=37814,tu=37815,eu=37816,nu=37817,iu=37818,ru=37819,su=37820,au=37821,Yo=36492,ou=36494,lu=36495,Dd=36283,cu=36284,uu=36285,hu=36286,a_=3200,o_=3201,Ld=0,l_=1,sr="",Jn="srgb",qs="srgb-linear",il="linear",pe="srgb",ss=7680,Ih=519,c_=512,u_=513,h_=514,Id=515,f_=516,d_=517,p_=518,m_=519,Uh=35044,Nh="300 es",Hi=2e3,rl=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const Ma=Math.PI/180,Na=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function te(r,t,e){return Math.max(t,Math.min(e,r))}function ju(r,t){return(r%t+t)%t}function __(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function g_(r,t,e){return r!==t?(e-r)/(t-r):0}function Sa(r,t,e){return(1-e)*r+e*t}function v_(r,t,e,n){return Sa(r,t,1-Math.exp(-e*n))}function x_(r,t=1){return t-Math.abs(ju(r,t*2)-t)}function M_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function S_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function y_(r,t){return r+Math.floor(Math.random()*(t-r+1))}function E_(r,t){return r+Math.random()*(t-r)}function T_(r){return r*(.5-Math.random())}function b_(r){r!==void 0&&(Oh=r);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A_(r){return r*Ma}function w_(r){return r*Na}function R_(r){return(r&r-1)===0&&r!==0}function C_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function P_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function D_(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ys(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const L_={DEG2RAD:Ma,RAD2DEG:Na,generateUUID:ea,clamp:te,euclideanModulo:ju,mapLinear:__,inverseLerp:g_,lerp:Sa,damp:v_,pingpong:x_,smoothstep:M_,smootherstep:S_,randInt:y_,randFloat:E_,randFloatSpread:T_,seededRandom:b_,degToRad:A_,radToDeg:w_,isPowerOfTwo:R_,ceilPowerOfTwo:C_,floorPowerOfTwo:P_,setQuaternionFromProperEuler:D_,normalize:pn,denormalize:ys};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,s,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],E=i[4],x=i[7],R=i[2],A=i[5],b=i[8];return s[0]=a*_+o*T+l*R,s[3]=a*m+o*E+l*A,s[6]=a*p+o*x+l*b,s[1]=c*_+u*T+h*R,s[4]=c*m+u*E+h*A,s[7]=c*p+u*x+h*b,s[2]=d*_+f*T+g*R,s[5]=d*m+f*E+g*A,s[8]=d*p+f*x+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Il.makeScale(t,e)),this}rotate(t){return this.premultiply(Il.makeRotation(-t)),this}translate(t,e){return this.premultiply(Il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new qt;function Ud(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function I_(){const r=Oa("canvas");return r.style.display="block",r}const Fh={};function Es(r){r in Fh||(Fh[r]=!0,console.warn(r))}function U_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function N_(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function O_(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const r={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pe&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===sr?il:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[qs]:{primaries:t,whitePoint:n,transfer:il,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),r}const he=F_();function Gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class B_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=Oa("canvas")),as.width=t.width,as.height=t.height;const n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Gi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let z_=0;class Nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ea(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ul(i[a].image)):s.push(Ul(i[a]))}else s=Ul(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ul(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?B_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k_=0;class En extends ns{constructor(t=En.DEFAULT_IMAGE,e=En.DEFAULT_MAPPING,n=Fr,i=Fr,s=Mi,a=Br,o=di,l=Yi,c=En.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ea(),this.name="",this.source=new Nd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bc:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bc:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Sd;En.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,i=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(f+1)/2,R=(p+1)/2,A=(u+d)/4,b=(h+_)/4,C=(g+m)/4;return E>x&&E>R?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=b/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=C/s),this.set(n,i,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new En(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends H_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Od extends En{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pi,this.minFilter=pi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class V_ extends En{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pi,this.minFilter=pi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),A=Math.atan2(R,p*T);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const x=o*T;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nl=new H,kh=new $r;class qa{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(s,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sa),so.subVectors(this.max,sa),os.subVectors(t.a,sa),ls.subVectors(t.b,sa),cs.subVectors(t.c,sa),Ki.subVectors(ls,os),Ji.subVectors(cs,ls),Er.subVectors(os,cs);let e=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-Er.z,Er.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,Er.z,0,-Er.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-Er.y,Er.x,0];return!Ol(e,os,ls,cs,so)||(e=[1,0,0,0,1,0,0,0,1],!Ol(e,os,ls,cs,so))?!1:(ao.crossVectors(Ki,Ji),e=[ao.x,ao.y,ao.z],Ol(e,os,ls,cs,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pi=[new H,new H,new H,new H,new H,new H,new H,new H],oi=new H,ro=new qa,os=new H,ls=new H,cs=new H,Ki=new H,Ji=new H,Er=new H,sa=new H,so=new H,ao=new H,Tr=new H;function Ol(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Tr.fromArray(r,s);const o=i.x*Math.abs(Tr.x)+i.y*Math.abs(Tr.y)+i.z*Math.abs(Tr.z),l=t.dot(Tr),c=e.dot(Tr),u=n.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const G_=new qa,aa=new H,Fl=new H;class xl{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):G_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;aa.subVectors(t,this.center);const e=aa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(aa.copy(t.center).add(Fl)),this.expandByPoint(aa.copy(t.center).sub(Fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new H,Bl=new H,oo=new H,Qi=new H,zl=new H,lo=new H,kl=new H;class Ml{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bl.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(Bl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(oo),o=Qi.dot(this.direction),l=-Qi.dot(oo),c=Qi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Bl).addScaledVector(oo,d),f}intersectSphere(t,e){Di.subVectors(t.center,this.origin);const n=Di.dot(this.direction),i=Di.dot(Di)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,i,s){zl.subVectors(e,t),lo.subVectors(n,t),kl.crossVectors(zl,lo);let a=this.direction.dot(kl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qi.subVectors(this.origin,t);const l=o*this.direction.dot(lo.crossVectors(Qi,lo));if(l<0)return null;const c=o*this.direction.dot(zl.cross(Qi));if(c<0||l+c>a)return null;const u=-o*Qi.dot(kl);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m)}set(t,e,n,i,s,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),s=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W_,t,X_)}lookAt(t,e,n){const i=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),tr.crossVectors(n,Fn),tr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),tr.crossVectors(n,Fn)),tr.normalize(),co.crossVectors(Fn,tr),i[0]=tr.x,i[4]=co.x,i[8]=Fn.x,i[1]=tr.y,i[5]=co.y,i[9]=Fn.y,i[2]=tr.z,i[6]=co.z,i[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],x=n[11],R=n[15],A=i[0],b=i[4],C=i[8],M=i[12],v=i[1],P=i[5],U=i[9],F=i[13],G=i[2],q=i[6],V=i[10],Y=i[14],z=i[3],nt=i[7],D=i[11],ut=i[15];return s[0]=a*A+o*v+l*G+c*z,s[4]=a*b+o*P+l*q+c*nt,s[8]=a*C+o*U+l*V+c*D,s[12]=a*M+o*F+l*Y+c*ut,s[1]=u*A+h*v+d*G+f*z,s[5]=u*b+h*P+d*q+f*nt,s[9]=u*C+h*U+d*V+f*D,s[13]=u*M+h*F+d*Y+f*ut,s[2]=g*A+_*v+m*G+p*z,s[6]=g*b+_*P+m*q+p*nt,s[10]=g*C+_*U+m*V+p*D,s[14]=g*M+_*F+m*Y+p*ut,s[3]=T*A+E*v+x*G+R*z,s[7]=T*b+E*P+x*q+R*nt,s[11]=T*C+E*U+x*V+R*D,s[15]=T*M+E*F+x*Y+R*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+m*(+e*c*h-e*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,E=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,x=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,R=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=e*T+n*E+i*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=T*b,t[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*b,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*b,t[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*b,t[4]=E*b,t[5]=(u*m*s-g*d*s+g*i*f-e*m*f-u*i*p+e*d*p)*b,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*p-e*l*p)*b,t[7]=(a*d*s-u*l*s+u*i*c-e*d*c-a*i*f+e*l*f)*b,t[8]=x*b,t[9]=(g*h*s-u*_*s-g*n*f+e*_*f+u*n*p-e*h*p)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*p+e*o*p)*b,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*f-e*o*f)*b,t[12]=R*b,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*b,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,T=l*c,E=l*u,x=l*h,R=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+x)*R,i[2]=(g-E)*R,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(g+E)*b,i[9]=(m-T)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=us.set(i[0],i[1],i[2]).length();const a=us.set(i[4],i[5],i[6]).length(),o=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],li.copy(this);const c=1/s,u=1/a,h=1/o;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,e.setFromRotationMatrix(li),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Hi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===Hi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===rl)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Hi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),d=(e+t)*c,f=(n+i)*u;let g,_;if(o===Hi)g=(a+s)*h,_=-2*h;else if(o===rl)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new H,li=new Ae,W_=new H(0,0,0),X_=new H(1,1,1),tr=new H,co=new H,Fn=new H,Hh=new Ae,Vh=new $r;class Ai{constructor(t=0,e=0,n=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Y_=0;const Gh=new H,hs=new $r,Li=new Ae,uo=new H,oa=new H,q_=new H,j_=new $r,Wh=new H(1,0,0),Xh=new H(0,1,0),Yh=new H(0,0,1),qh={type:"added"},Z_={type:"removed"},fs={type:"childadded",child:null},Hl={type:"childremoved",child:null};class Je extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new H,e=new Ai,n=new $r,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new qt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(Yh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(Yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(oa,uo,this.up):Li.lookAt(uo,oa,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Li),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Z_),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,t,q_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,j_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Je.DEFAULT_UP=new H(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new H,Ii=new H,Vl=new H,Ui=new H,ds=new H,ps=new H,jh=new H,Gl=new H,Wl=new H,Xl=new H,Yl=new Le,ql=new Le,jl=new Le;class fi{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ci.subVectors(t,e),i.cross(ci);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ci.subVectors(i,e),Ii.subVectors(n,e),Vl.subVectors(t,e);const a=ci.dot(ci),o=ci.dot(Ii),l=ci.dot(Vl),c=Ii.dot(Ii),u=Ii.dot(Vl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Yl.setScalar(0),ql.setScalar(0),jl.setScalar(0),Yl.fromBufferAttribute(t,e),ql.fromBufferAttribute(t,n),jl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yl,s.x),a.addScaledVector(ql,s.y),a.addScaledVector(jl,s.z),a}static isFrontFacing(t,e,n,i){return ci.subVectors(n,e),Ii.subVectors(t,e),ci.cross(Ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ci.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return fi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ds.subVectors(i,n),ps.subVectors(s,n),Gl.subVectors(t,n);const l=ds.dot(Gl),c=ps.dot(Gl);if(l<=0&&c<=0)return e.copy(n);Wl.subVectors(t,i);const u=ds.dot(Wl),h=ps.dot(Wl);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ds,a);Xl.subVectors(t,s);const f=ds.dot(Xl),g=ps.dot(Xl);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ps,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return jh.subVectors(s,i),o=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(jh,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ds,a).addScaledVector(ps,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Zl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=ju(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Zl(a,s,t+1/3),this.g=Zl(a,s,t),this.b=Zl(a,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Jn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Jn){const n=Fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return he.fromWorkingColorSpace(rn.copy(this),t),Math.round(te(rn.r*255,0,255))*65536+Math.round(te(rn.g*255,0,255))*256+Math.round(te(rn.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,s=rn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Jn){he.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,i=rn.b;return t!==Jn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(er),this.setHSL(er.h+t,er.s+e,er.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(er),t.getHSL(ho);const n=Sa(er.h,ho.h,e),i=Sa(er.s,ho.s,e),s=Sa(er.l,ho.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new le;le.NAMES=Fd;let $_=0;class na extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Ls,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Rc,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==_r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Rc&&(n.blendDst=this.blendDst),this.blendEquation!==Nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ja extends na{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new H,fo=new Wt;class Ei{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uh&&(t.usage=this.usage),t}}class Bd extends Ei{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zd extends Ei{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Tn extends Ei{constructor(t,e,n){super(new Float32Array(t),e,n)}}let K_=0;const $n=new Ae,$l=new Je,ms=new H,Bn=new qa,la=new qa,je=new H;class mi extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?zd:Bd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,n){return $n.makeTranslation(t,e,n),this.applyMatrix4($n),this}scale(t,e,n){return $n.makeScale(t,e,n),this.applyMatrix4($n),this}lookAt(t){return $l.lookAt(t),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tn(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Bn.min,la.min),Bn.expandByPoint(je),je.addVectors(Bn.max,la.max),Bn.expandByPoint(je)):(Bn.expandByPoint(la.min),Bn.expandByPoint(la.max))}Bn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(je));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)je.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(t,c),je.add(ms)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new H,l[C]=new H;const c=new H,u=new H,h=new H,d=new Wt,f=new Wt,g=new Wt,_=new H,m=new H;function p(C,M,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[M].add(_),o[v].add(_),l[C].add(m),l[M].add(m),l[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,M=T.length;C<M;++C){const v=T[C],P=v.start,U=v.count;for(let F=P,G=P+U;F<G;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new H,x=new H,R=new H,A=new H;function b(C){R.fromBufferAttribute(i,C),A.copy(R);const M=o[C];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(A,M);const P=x.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,M=T.length;C<M;++C){const v=T[C],P=v.start,U=v.count;for(let F=P,G=P+U;F<G;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ei(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ei(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new Ae,br=new Ml,po=new xl,$h=new H,mo=new H,_o=new H,go=new H,Kl=new H,vo=new H,Kh=new H,xo=new H;class Rn extends Je{constructor(t=new mi,e=new ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Kl.fromBufferAttribute(h,t),a?vo.addScaledVector(Kl,u):vo.addScaledVector(Kl.sub(e),u))}e.add(vo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),br.copy(t.ray).recast(t.near),!(po.containsPoint(br.origin)===!1&&(br.intersectSphere(po,$h)===null||br.origin.distanceToSquared($h)>(t.far-t.near)**2))&&(Zh.copy(s).invert(),br.copy(t.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,br)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,R=E;x<R;x+=3){const A=o.getX(x),b=o.getX(x+1),C=o.getX(x+2);i=Mo(this,p,t,n,c,u,h,A,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);i=Mo(this,a,t,n,c,u,h,T,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,R=E;x<R;x+=3){const A=x,b=x+1,C=x+2;i=Mo(this,p,t,n,c,u,h,A,b,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,x=m+2;i=Mo(this,a,t,n,c,u,h,T,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function J_(r,t,e,n,i,s,a,o){let l;if(t.side===Cn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===_r,o),l===null)return null;xo.copy(o),xo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(xo);return c<e.near||c>e.far?null:{distance:c,point:xo.clone(),object:r}}function Mo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,mo),r.getVertexPosition(l,_o),r.getVertexPosition(c,go);const u=J_(r,t,e,n,mo,_o,go,Kh);if(u){const h=new H;fi.getBarycoord(Kh,mo,_o,go,h),i&&(u.uv=fi.getInterpolatedAttribute(i,o,l,c,h,new Wt)),s&&(u.uv1=fi.getInterpolatedAttribute(s,o,l,c,h,new Wt)),a&&(u.normal=fi.getInterpolatedAttribute(a,o,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};fi.getNormal(mo,_o,go,d.normal),u.face=d,u.barycoord=h}return u}class Za extends mi{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(u,3)),this.setAttribute("uv",new Tn(h,2));function g(_,m,p,T,E,x,R,A,b,C,M){const v=x/b,P=R/C,U=x/2,F=R/2,G=A/2,q=b+1,V=C+1;let Y=0,z=0;const nt=new H;for(let D=0;D<V;D++){const ut=D*P-F;for(let It=0;It<q;It++){const Zt=It*v-U;nt[_]=Zt*T,nt[m]=ut*E,nt[p]=G,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=A>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(It/b),h.push(1-D/C),Y+=1}}for(let D=0;D<C;D++)for(let ut=0;ut<b;ut++){const It=d+ut+q*D,Zt=d+ut+q*(D+1),Z=d+(ut+1)+q*(D+1),et=d+(ut+1)+q*D;l.push(It,Zt,et),l.push(Zt,Z,et),z+=6}o.addGroup(f,z,M),f+=z,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _n(r){const t={};for(let e=0;e<r.length;e++){const n=js(r[e]);for(const i in n)t[i]=n[i]}return t}function Q_(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function kd(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const tg={clone:js,merge:_n};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends na{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Q_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hd extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new H,Jh=new Wt,Qh=new Wt;class Qn extends Hd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,Qh),e.subVectors(Qh,Jh)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _s=-90,gs=1;class ig extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qn(_s,gs,t,e);i.layers=this.layers,this.add(i);const s=new Qn(_s,gs,t,e);s.layers=this.layers,this.add(s);const a=new Qn(_s,gs,t,e);a.layers=this.layers,this.add(a);const o=new Qn(_s,gs,t,e);o.layers=this.layers,this.add(o);const l=new Qn(_s,gs,t,e);l.layers=this.layers,this.add(l);const c=new Qn(_s,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vd extends En{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rg extends Zr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Vd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Za(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:hr});s.uniforms.tEquirect.value=e;const a=new Rn(i,s),o=e.minFilter;return e.minFilter===Br&&(e.minFilter=Mi),new ig(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class sg extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Jl=new H,ag=new H,og=new qt;class rr{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Jl.subVectors(n,e).cross(ag.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||og.getNormalMatrix(t),i=this.coplanarPoint(Jl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new xl,So=new H;class $u{constructor(t=new rr,e=new rr,n=new rr,i=new rr,s=new rr,a=new rr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hi){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],T=i[13],E=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+u,m+g,x+T).normalize(),n[3].setComponents(l-a,d-u,m-g,x-T).normalize(),n[4].setComponents(l-o,d-h,m-_,x-E).normalize(),e===Hi)n[5].setComponents(l+o,d+h,m+_,x+E).normalize();else if(e===rl)n[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(So.x=i.normal.x>0?t.max.x:t.min.x,So.y=i.normal.y>0?t.max.y:t.min.y,So.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gd extends na{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tf=new Ae,fu=new Ml,yo=new xl,Eo=new H;class lg extends Je{constructor(t=new mi,e=new Gd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=s,t.ray.intersectsSphere(yo)===!1)return;tf.copy(i).invert(),fu.copy(t.ray).applyMatrix4(tf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Eo.fromBufferAttribute(h,m),ef(Eo,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Eo.fromBufferAttribute(h,g),ef(Eo,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ef(r,t,e,n,i,s,a){const o=fu.distanceSqToPoint(r);if(o<e){const l=new H;fu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class To extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Wd extends En{constructor(t,e,n,i,s,a,o,l,c,u=Is){if(u!==Is&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Is&&(n=jr),n===void 0&&u===Ys&&(n=Xs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pi,this.minFilter=l!==void 0?l:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ku extends mi{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;T(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(d,3)),this.setAttribute("uv",new Tn(f,2));function T(){const x=new H,R=new H;let A=0;const b=(e-t)/n;for(let C=0;C<=s;C++){const M=[],v=C/s,P=v*(e-t)+t;for(let U=0;U<=i;U++){const F=U/i,G=F*l+o,q=Math.sin(G),V=Math.cos(G);R.x=P*q,R.y=-v*n+m,R.z=P*V,h.push(R.x,R.y,R.z),x.set(q,b,V).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-v),M.push(g++)}_.push(M)}for(let C=0;C<i;C++)for(let M=0;M<s;M++){const v=_[M][C],P=_[M+1][C],U=_[M+1][C+1],F=_[M][C+1];(t>0||M!==0)&&(u.push(v,P,F),A+=3),(e>0||M!==s-1)&&(u.push(P,U,F),A+=3)}c.addGroup(p,A,0),p+=A}function E(x){const R=g,A=new Wt,b=new H;let C=0;const M=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const P=g;for(let U=0;U<=i;U++){const G=U/i*l+o,q=Math.cos(G),V=Math.sin(G);b.x=M*V,b.y=m*v,b.z=M*q,h.push(b.x,b.y,b.z),d.push(0,v,0),A.x=q*.5+.5,A.y=V*.5*v+.5,f.push(A.x,A.y),g++}for(let U=0;U<i;U++){const F=R+U,G=P+U;x===!0?u.push(G,G+1,F):u.push(G+1,G,F),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $a extends Ku{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new $a(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sl extends mi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*d-a;for(let E=0;E<c;E++){const x=E*h-s;g.push(x,-T,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const E=T+c*p,x=T+c*(p+1),R=T+1+c*(p+1),A=T+1+c*p;f.push(E,x,A),f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.width,t.height,t.widthSegments,t.heightSegments)}}class yl extends mi{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new H,d=new H,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],E=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const A=R/e;h.x=-t*Math.cos(i+A*s)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(i+A*s)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-E),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const E=u[p][T+1],x=u[p][T],R=u[p+1][T],A=u[p+1][T+1];(p!==0||a>0)&&f.push(E,x,A),(p!==n-1||l<Math.PI)&&f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xd extends na{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cg extends na{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ug extends na{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nf={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class hg{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const fg=new hg;class Ju{constructor(t){this.manager=t!==void 0?t:fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ju.DEFAULT_MATERIAL_NAME="__DEFAULT";class dg extends Ju{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=nf.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Oa("img");function l(){u(),nf.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class pg extends Ju{constructor(t){super(t)}load(t,e,n,i){const s=new En,a=new dg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Yd extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ql=new Ae,rf=new H,sf=new H;class mg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rf.setFromMatrixPosition(t.matrixWorld),e.position.copy(rf),sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sf),e.updateMatrixWorld(),Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qd extends Hd{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _g extends mg{constructor(){super(new qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jd extends Yd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new _g}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gg extends Yd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class vg extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}const af=new Ae;class xg{constructor(t,e,n=0,i=1/0){this.ray=new Ml(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return af.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(af),this}intersectObject(t,e=!0,n=[]){return du(t,this,n,e),n.sort(of),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)du(t[i],this,n,e);return n.sort(of),n}}function of(r,t){return r.distance-t.distance}function du(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)du(s[a],t,e,!0)}}class lf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mg extends ns{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function cf(r,t,e,n){const i=Sg(n);switch(e){case bd:return r*t;case wd:return r*t;case Rd:return r*t*2;case Cd:return r*t/i.components*i.byteLength;case Xu:return r*t/i.components*i.byteLength;case Pd:return r*t*2/i.components*i.byteLength;case Yu:return r*t*2/i.components*i.byteLength;case Ad:return r*t*3/i.components*i.byteLength;case di:return r*t*4/i.components*i.byteLength;case qu:return r*t*4/i.components*i.byteLength;case Vo:case Go:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hc:case Gc:return Math.max(r,16)*Math.max(t,8)/4;case kc:case Vc:return Math.max(r,8)*Math.max(t,8)/2;case Wc:case Xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $c:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case eu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ru:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case su:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Yo:case ou:case lu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Dd:case cu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case uu:case hu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sg(r){switch(r){case Yi:case yd:return{byteLength:1,components:1};case Ua:case Ed:case Ya:return{byteLength:2,components:1};case Gu:case Wu:return{byteLength:2,components:4};case jr:case Vu:case ki:return{byteLength:4,components:1};case Td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function yg(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Og=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,S0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,J0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ov=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ev=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Eg,alphahash_pars_fragment:Tg,alphamap_fragment:bg,alphamap_pars_fragment:Ag,alphatest_fragment:wg,alphatest_pars_fragment:Rg,aomap_fragment:Cg,aomap_pars_fragment:Pg,batching_pars_vertex:Dg,batching_vertex:Lg,begin_vertex:Ig,beginnormal_vertex:Ug,bsdfs:Ng,iridescence_fragment:Og,bumpmap_pars_fragment:Fg,clipping_planes_fragment:Bg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Hg,color_fragment:Vg,color_pars_fragment:Gg,color_pars_vertex:Wg,color_vertex:Xg,common:Yg,cube_uv_reflection_fragment:qg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Zg,displacementmap_vertex:$g,emissivemap_fragment:Kg,emissivemap_pars_fragment:Jg,colorspace_fragment:Qg,colorspace_pars_fragment:t0,envmap_fragment:e0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:m0,envmap_vertex:s0,fog_vertex:a0,fog_pars_vertex:o0,fog_fragment:l0,fog_pars_fragment:c0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:h0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:_0,lights_toon_pars_fragment:g0,lights_phong_fragment:v0,lights_phong_pars_fragment:x0,lights_physical_fragment:M0,lights_physical_pars_fragment:S0,lights_fragment_begin:y0,lights_fragment_maps:E0,lights_fragment_end:T0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:P0,map_particle_fragment:D0,map_particle_pars_fragment:L0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:U0,morphinstance_vertex:N0,morphcolor_vertex:O0,morphnormal_vertex:F0,morphtarget_pars_vertex:B0,morphtarget_vertex:z0,normal_fragment_begin:k0,normal_fragment_maps:H0,normal_pars_fragment:V0,normal_pars_vertex:G0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:j0,iridescence_pars_fragment:Z0,opaque_fragment:$0,packing:K0,premultiplied_alpha_fragment:J0,project_vertex:Q0,dithering_fragment:tv,dithering_pars_fragment:ev,roughnessmap_fragment:nv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:rv,shadowmap_pars_vertex:sv,shadowmap_vertex:av,shadowmask_pars_fragment:ov,skinbase_vertex:lv,skinning_pars_vertex:cv,skinning_vertex:uv,skinnormal_vertex:hv,specularmap_fragment:fv,specularmap_pars_fragment:dv,tonemapping_fragment:pv,tonemapping_pars_fragment:mv,transmission_fragment:_v,transmission_pars_fragment:gv,uv_pars_fragment:vv,uv_pars_vertex:xv,uv_vertex:Mv,worldpos_vertex:Sv,background_vert:yv,background_frag:Ev,backgroundCube_vert:Tv,backgroundCube_frag:bv,cube_vert:Av,cube_frag:wv,depth_vert:Rv,depth_frag:Cv,distanceRGBA_vert:Pv,distanceRGBA_frag:Dv,equirect_vert:Lv,equirect_frag:Iv,linedashed_vert:Uv,linedashed_frag:Nv,meshbasic_vert:Ov,meshbasic_frag:Fv,meshlambert_vert:Bv,meshlambert_frag:zv,meshmatcap_vert:kv,meshmatcap_frag:Hv,meshnormal_vert:Vv,meshnormal_frag:Gv,meshphong_vert:Wv,meshphong_frag:Xv,meshphysical_vert:Yv,meshphysical_frag:qv,meshtoon_vert:jv,meshtoon_frag:Zv,points_vert:$v,points_frag:Kv,shadow_vert:Jv,shadow_frag:Qv,sprite_vert:tx,sprite_frag:ex},mt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},vi={basic:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new le(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:_n([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:_n([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:_n([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new le(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:_n([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:_n([mt.points,mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:_n([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:_n([mt.common,mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:_n([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:_n([mt.sprite,mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:_n([mt.common,mt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:_n([mt.lights,mt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};vi.physical={uniforms:_n([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const bo={r:0,b:0,g:0},wr=new Ai,nx=new Ae;function ix(r,t,e,n,i,s,a){const o=new le(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const R=g(E);R===null?p(o,l):R&&R.isColor&&(p(R,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===vl)?(u===void 0&&(u=new Rn(new Za(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:js(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),wr.copy(x.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nx.makeRotationFromEuler(wr)),u.material.toneMapped=he.getTransfer(R.colorSpace)!==pe,(h!==R||d!==R.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Rn(new Sl(2,2),new gr({name:"BackgroundMaterial",uniforms:js(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(R.colorSpace)!==pe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=R,d=R.version,f=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(bo,kd(r)),n.buffers.color.setClear(bo.r,bo.g,bo.b,x,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:T}}function rx(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(v,P,U,F,G){let q=!1;const V=h(F,U,P);s!==V&&(s=V,c(s.object)),q=f(v,F,U,G),q&&g(v,F,U,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(v,P,U,F),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,P,U){const F=U.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let q=G[P.id];q===void 0&&(q={},G[P.id]=q);let V=q[F];return V===void 0&&(V=d(l()),q[F]=V),V}function d(v){const P=[],U=[],F=[];for(let G=0;G<e;G++)P[G]=0,U[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,P,U,F){const G=s.attributes,q=P.attributes;let V=0;const Y=U.getAttributes();for(const z in Y)if(Y[z].location>=0){const D=G[z];let ut=q[z];if(ut===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),D===void 0||D.attribute!==ut||ut&&D.data!==ut.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(v,P,U,F){const G={},q=P.attributes;let V=0;const Y=U.getAttributes();for(const z in Y)if(Y[z].location>=0){let D=q[z];D===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));const ut={};ut.attribute=D,D&&D.data&&(ut.data=D.data),G[z]=ut,V++}s.attributes=G,s.attributesNum=V,s.index=F}function _(){const v=s.newAttributes;for(let P=0,U=v.length;P<U;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const U=s.newAttributes,F=s.enabledAttributes,G=s.attributeDivisors;U[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),G[v]!==P&&(r.vertexAttribDivisor(v,P),G[v]=P)}function T(){const v=s.newAttributes,P=s.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==v[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function E(v,P,U,F,G,q,V){V===!0?r.vertexAttribIPointer(v,P,U,G,q):r.vertexAttribPointer(v,P,U,F,G,q)}function x(v,P,U,F){_();const G=F.attributes,q=U.getAttributes(),V=P.defaultAttributeValues;for(const Y in q){const z=q[Y];if(z.location>=0){let nt=G[Y];if(nt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){const D=nt.normalized,ut=nt.itemSize,It=t.get(nt);if(It===void 0)continue;const Zt=It.buffer,Z=It.type,et=It.bytesPerElement,_t=Z===r.INT||Z===r.UNSIGNED_INT||nt.gpuType===Vu;if(nt.isInterleavedBufferAttribute){const it=nt.data,Et=it.stride,At=nt.offset;if(it.isInstancedInterleavedBuffer){for(let kt=0;kt<z.locationSize;kt++)p(z.location+kt,it.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let kt=0;kt<z.locationSize;kt++)m(z.location+kt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let kt=0;kt<z.locationSize;kt++)E(z.location+kt,ut/z.locationSize,Z,D,Et*et,(At+ut/z.locationSize*kt)*et,_t)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<z.locationSize;it++)p(z.location+it,nt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<z.locationSize;it++)m(z.location+it);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let it=0;it<z.locationSize;it++)E(z.location+it,ut/z.locationSize,Z,D,ut*et,ut/z.locationSize*it*et,_t)}}else if(V!==void 0){const D=V[Y];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(z.location,D);break;case 3:r.vertexAttrib3fv(z.location,D);break;case 4:r.vertexAttrib4fv(z.location,D);break;default:r.vertexAttrib1fv(z.location,D)}}}}T()}function R(){C();for(const v in n){const P=n[v];for(const U in P){const F=P[U];for(const G in F)u(F[G].object),delete F[G];delete P[U]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const U in P){const F=P[U];for(const G in F)u(F[G].object),delete F[G];delete P[U]}delete n[v.id]}function b(v){for(const P in n){const U=n[P];if(U[v.id]===void 0)continue;const F=U[v.id];for(const G in F)u(F[G].object),delete F[G];delete U[v.id]}}function C(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function sx(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ax(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==di&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Yi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ki&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function ox(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new rr,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,E=T*4;let x=p.clippingState||null;l.value=x,x=u(g,d,E,f);for(let R=0;R!==E;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==_;++E,x+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function lx(r){let t=new WeakMap;function e(a,o){return o===Oc?a.mapping=Gs:o===Fc&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oc||o===Fc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rg(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ws=4,uf=[.125,.215,.35,.446,.526,.582],Or=20,tc=new qd,hf=new le;let ec=null,nc=0,ic=0,rc=!1;const Dr=(1+Math.sqrt(5))/2,vs=1/Dr,ff=[new H(-Dr,vs,0),new H(Dr,vs,0),new H(-vs,0,Dr),new H(vs,0,Dr),new H(0,Dr,-vs),new H(0,Dr,vs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class df{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ec=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ec,nc,ic),this._renderer.xr.enabled=rc,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ec=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ya,format:di,colorSpace:qs,depthBuffer:!1},i=pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cx(s)),this._blurMaterial=ux(s,t,e)}return i}_compileMaterial(t){const e=new Rn(this._lodPlanes[0],t);this._renderer.compile(e,tc)}_sceneToCubeUV(t,e,n,i){const o=new Qn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(hf),u.toneMapping=fr,u.autoClear=!1;const f=new ja({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Rn(new Za,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(hf),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):T===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Ao(i,T*E,p>2?E:0,E,E),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Rn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ao(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,tc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ff[(i-s-1)%ff.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rn(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Or-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const p=[];let T=0;for(let b=0;b<Or;++b){const C=b/_,M=Math.exp(-C*C/2);p.push(M),b===0?T+=M:b<m&&(T+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const x=this._sizeLods[i],R=3*x*(i>E-ws?i-E+ws:0),A=4*(this._cubeSize-x);Ao(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(h,tc)}}function cx(r){const t=[],e=[],n=[];let i=r;const s=r-ws+1+uf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ws?l=uf[a-r+ws-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,C=A>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];T.set(M,_*g*A),E.set(d,m*g*A);const v=[A,A,A,A,A,A];x.set(v,p*g*A)}const R=new mi;R.setAttribute("position",new Ei(T,_)),R.setAttribute("uv",new Ei(E,m)),R.setAttribute("faceIndex",new Ei(x,p)),t.push(R),i>ws&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pf(r,t,e){const n=new Zr(r,t,e);return n.texture.mapping=vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ux(r,t,e){const n=new Float32Array(Or),i=new H(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function mf(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function _f(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hx(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Oc||l===Fc,u=l===Gs||l===Ws;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new df(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new df(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function fx(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dx(r,t,e,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,x=T.length;E<x;E+=3){const R=T[E+0],A=T[E+1],b=T[E+2];d.push(R,A,A,b,b,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,x=T.length/3-1;E<x;E+=3){const R=E+0,A=E+1,b=E+2;d.push(R,A,A,b,b,R)}}else return;const m=new(Ud(d)?zd:Bd)(d,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function px(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mx(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _x(r,t,e){const n=new WeakMap,i=new Le;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*A*4*h),C=new Od(b,R,A,h);C.type=ki,C.needsUpdate=!0;const M=x*4;for(let P=0;P<h;P++){const U=p[P],F=T[P],G=E[P],q=R*A*4*P;for(let V=0;V<U.count;V++){const Y=V*M;g===!0&&(i.fromBufferAttribute(U,V),b[q+Y+0]=i.x,b[q+Y+1]=i.y,b[q+Y+2]=i.z,b[q+Y+3]=0),_===!0&&(i.fromBufferAttribute(F,V),b[q+Y+4]=i.x,b[q+Y+5]=i.y,b[q+Y+6]=i.z,b[q+Y+7]=0),m===!0&&(i.fromBufferAttribute(G,V),b[q+Y+8]=i.x,b[q+Y+9]=i.y,b[q+Y+10]=i.z,b[q+Y+11]=G.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new Wt(R,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function gx(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const $d=new En,gf=new Wd(1,1),Kd=new Od,Jd=new V_,Qd=new Vd,vf=[],xf=[],Mf=new Float32Array(16),Sf=new Float32Array(9),yf=new Float32Array(4);function ia(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=vf[i];if(s===void 0&&(s=new Float32Array(i),vf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function El(r,t){let e=xf[t];e===void 0&&(e=new Int32Array(t),xf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function vx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function xx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),qe(e,t)}}function Mx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),qe(e,t)}}function Sx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),qe(e,t)}}function yx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;yf.set(n),r.uniformMatrix2fv(this.addr,!1,yf),qe(e,n)}}function Ex(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;Sf.set(n),r.uniformMatrix3fv(this.addr,!1,Sf),qe(e,n)}}function Tx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;Mf.set(n),r.uniformMatrix4fv(this.addr,!1,Mf),qe(e,n)}}function bx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ax(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),qe(e,t)}}function wx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),qe(e,t)}}function Rx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),qe(e,t)}}function Cx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Px(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),qe(e,t)}}function Dx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),qe(e,t)}}function Lx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),qe(e,t)}}function Ix(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(gf.compareFunction=Id,s=gf):s=$d,e.setTexture2D(t||s,i)}function Ux(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Jd,i)}function Nx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qd,i)}function Ox(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kd,i)}function Fx(r){switch(r){case 5126:return vx;case 35664:return xx;case 35665:return Mx;case 35666:return Sx;case 35674:return yx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return bx;case 35667:case 35671:return Ax;case 35668:case 35672:return wx;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Dx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ox}}function Bx(r,t){r.uniform1fv(this.addr,t)}function zx(r,t){const e=ia(t,this.size,2);r.uniform2fv(this.addr,e)}function kx(r,t){const e=ia(t,this.size,3);r.uniform3fv(this.addr,e)}function Hx(r,t){const e=ia(t,this.size,4);r.uniform4fv(this.addr,e)}function Vx(r,t){const e=ia(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Gx(r,t){const e=ia(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Wx(r,t){const e=ia(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Xx(r,t){r.uniform1iv(this.addr,t)}function Yx(r,t){r.uniform2iv(this.addr,t)}function qx(r,t){r.uniform3iv(this.addr,t)}function jx(r,t){r.uniform4iv(this.addr,t)}function Zx(r,t){r.uniform1uiv(this.addr,t)}function $x(r,t){r.uniform2uiv(this.addr,t)}function Kx(r,t){r.uniform3uiv(this.addr,t)}function Jx(r,t){r.uniform4uiv(this.addr,t)}function Qx(r,t,e){const n=this.cache,i=t.length,s=El(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||$d,s[a])}function tM(r,t,e){const n=this.cache,i=t.length,s=El(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Jd,s[a])}function eM(r,t,e){const n=this.cache,i=t.length,s=El(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Qd,s[a])}function nM(r,t,e){const n=this.cache,i=t.length,s=El(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Kd,s[a])}function iM(r){switch(r){case 5126:return Bx;case 35664:return zx;case 35665:return kx;case 35666:return Hx;case 35674:return Vx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return Yx;case 35668:case 35672:return qx;case 35669:case 35673:return jx;case 5125:return Zx;case 36294:return $x;case 36295:return Kx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fx(e.type)}}class sM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iM(e.type)}}class aM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function Ef(r,t){r.seq.push(t),r.map[t.id]=t}function oM(r,t,e){const n=r.name,i=n.length;for(sc.lastIndex=0;;){const s=sc.exec(n),a=sc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ef(e,c===void 0?new rM(o,r,t):new sM(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new aM(o),Ef(e,h)),e=h}}}class qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);oM(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Tf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const lM=37297;let cM=0;function uM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const bf=new qt;function hM(r){he._getMatrix(bf,he.workingColorSpace,r);const t=`mat3( ${bf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case il:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Af(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+uM(r.getShaderSource(t),a)}else return i}function fM(r,t){const e=hM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dM(r,t){let e;switch(t){case Jm:e="Linear";break;case Qm:e="Reinhard";break;case t_:e="Cineon";break;case e_:e="ACESFilmic";break;case i_:e="AgX";break;case r_:e="Neutral";break;case n_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new H;function pM(){he.getLuminanceCoefficients(wo);const r=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function _M(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function fa(r){return r!==""}function wf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(r){return r.replace(vM,MM)}const xM=new Map;function MM(r,t){let e=jt[t];if(e===void 0){const n=xM.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pu(e)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(r){return r.replace(SM,yM)}function yM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function EM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Dm?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function TM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case vl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function AM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Md:t="ENVMAP_BLENDING_MULTIPLY";break;case $m:t="ENVMAP_BLENDING_MIX";break;case Km:t="ENVMAP_BLENDING_ADD";break}return t}function wM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function RM(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=EM(e),c=TM(e),u=bM(e),h=AM(e),d=wM(e),f=mM(e),g=_M(s),_=i.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?jt.tonemapping_pars_fragment:"",e.toneMapping!==fr?dM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,fM("linearToOutputTexel",e.outputColorSpace),pM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fa).join(`
`)),a=pu(a),a=wf(a,e),a=Rf(a,e),o=pu(o),o=wf(o,e),o=Rf(o,e),a=Cf(a),o=Cf(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+a,x=T+p+o,R=Tf(i,i.VERTEX_SHADER,E),A=Tf(i,i.FRAGMENT_SHADER,x);i.attachShader(_,R),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(R).trim(),G=i.getShaderInfoLog(A).trim();let q=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,A);else{const Y=Af(i,R,"vertex"),z=Af(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Y+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||G==="")&&(V=!1);V&&(P.diagnostics={runnable:q,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(R),i.deleteShader(A),C=new qo(i,_),M=gM(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,lM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let CM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new DM(t),e.set(t,n)),n}}class DM{constructor(t){this.id=CM++,this.code=t,this.usedTimes=0}}function LM(r,t,e,n,i,s,a){const o=new Zu,l=new PM,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,P,U,F){const G=U.fog,q=F.geometry,V=M.isMeshStandardMaterial?U.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),z=Y&&Y.mapping===vl?Y.image.height:null,nt=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=D!==void 0?D.length:0;let It=0;q.morphAttributes.position!==void 0&&(It=1),q.morphAttributes.normal!==void 0&&(It=2),q.morphAttributes.color!==void 0&&(It=3);let Zt,Z,et,_t;if(nt){const gt=vi[nt];Zt=gt.vertexShader,Z=gt.fragmentShader}else Zt=M.vertexShader,Z=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);const it=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,kt=F.isBatchedMesh===!0,$t=!!M.map,Ht=!!M.matcap,Pt=!!Y,I=!!M.aoMap,_e=!!M.lightMap,Ft=!!M.bumpMap,B=!!M.normalMap,Mt=!!M.displacementMap,re=!!M.emissiveMap,Tt=!!M.metalnessMap,w=!!M.roughnessMap,S=M.anisotropy>0,k=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,$=M.sheen>0,ht=M.transmission>0,at=S&&!!M.anisotropyMap,dt=k&&!!M.clearcoatMap,Gt=k&&!!M.clearcoatNormalMap,rt=k&&!!M.clearcoatRoughnessMap,st=J&&!!M.iridescenceMap,Dt=J&&!!M.iridescenceThicknessMap,Lt=$&&!!M.sheenColorMap,vt=$&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,Ot=!!M.specularColorMap,oe=!!M.specularIntensityMap,L=ht&&!!M.transmissionMap,ct=ht&&!!M.thicknessMap,j=!!M.gradientMap,K=!!M.alphaMap,lt=M.alphaTest>0,ft=!!M.alphaHash,Bt=!!M.extensions;let ce=fr;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Pe={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:Z,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:kt,batchingColor:kt&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:qs,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:Ht,envMap:Pt,envMapMode:Pt&&Y.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:_e,bumpMap:Ft,normalMap:B,displacementMap:d&&Mt,emissiveMap:re,normalMapObjectSpace:B&&M.normalMapType===l_,normalMapTangentSpace:B&&M.normalMapType===Ld,metalnessMap:Tt,roughnessMap:w,anisotropy:S,anisotropyMap:at,clearcoat:k,clearcoatMap:dt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:J,iridescenceMap:st,iridescenceThicknessMap:Dt,sheen:$,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:oe,transmission:ht,transmissionMap:L,thicknessMap:ct,gradientMap:j,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:ft,combine:M.combine,mapUv:$t&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:_e&&_(M.lightMap.channel),bumpMapUv:Ft&&_(M.bumpMap.channel),normalMapUv:B&&_(M.normalMap.channel),displacementMapUv:Mt&&_(M.displacementMap.channel),emissiveMapUv:re&&_(M.emissiveMap.channel),metalnessMapUv:Tt&&_(M.metalnessMap.channel),roughnessMapUv:w&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:dt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(M.sheenRoughnessMap.channel),specularMapUv:Xt&&_(M.specularMap.channel),specularColorMapUv:Ot&&_(M.specularColorMap.channel),specularIntensityMapUv:oe&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:K&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(B||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&($t||K),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Et,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:It,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===pe,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&he.getTransfer(M.emissiveMap.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bi,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Bt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&M.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)v.push(P),v.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(v,M),E(v,M),v.push(r.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function T(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function E(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const v=g[M.type];let P;if(v){const U=vi[v];P=tg.clone(U.uniforms)}else P=M.uniforms;return P}function R(M,v){let P;for(let U=0,F=u.length;U<F;U++){const G=u[U];if(G.cacheKey===v){P=G,++P.usedTimes;break}}return P===void 0&&(P=new RM(r,v,M,s),u.push(P)),P}function A(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:C}}function IM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function UM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Df(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||UM),n.length>1&&n.sort(d||Df),i.length>1&&i.sort(d||Df)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function NM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Lf,r.set(n,[a])):i>=s.length?(a=new Lf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function OM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new le};break;case"SpotLight":e={position:new H,direction:new H,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function FM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let BM=0;function zM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kM(r){const t=new OM,e=FM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new Ae,a=new Ae;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,E=0,x=0,R=0,A=0,b=0;c.sort(zM);for(let M=0,v=c.length;M<v;M++){const P=c[M],U=P.color,F=P.intensity,G=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*F,h+=U.g*F,d+=U.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);b++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,T++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(U).multiplyScalar(F),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const Y=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Y.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,x++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(U).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Y=P.shadow,z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==T||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=T,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=b,n.version=BM++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function If(r){const t=new kM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function HM(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new If(r),t.set(i,[o])):s>=a.length?(o=new If(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WM(r,t,e){let n=new $u;const i=new Wt,s=new Wt,a=new Le,o=new cg({depthPacking:o_}),l=new ug,c={},u=e.maxTextureSize,h={[_r]:Cn,[Cn]:_r,[Bi]:Bi},d=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:VM,fragmentShader:GM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new mi;g.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let p=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),v=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(hr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==Ni&&this.type===Ni,G=p===Ni&&this.type!==Ni;for(let q=0,V=A.length;q<V;q++){const Y=A[q],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const nt=z.getFrameExtents();if(i.multiply(nt),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/nt.x),i.x=s.x*nt.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/nt.y),i.y=s.y*nt.y,z.mapSize.y=s.y)),z.map===null||F===!0||G===!0){const ut=this.type!==Ni?{minFilter:pi,magFilter:pi}:{};z.map!==null&&z.map.dispose(),z.map=new Zr(i.x,i.y,ut),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const D=z.getViewportCount();for(let ut=0;ut<D;ut++){const It=z.getViewport(ut);a.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),U.viewport(a),z.updateMatrices(Y,ut),n=z.getFrustum(),x(b,C,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Ni&&T(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,v,P)};function T(A,b){const C=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zr(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,C,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,C,f,_,null)}function E(A,b,C,M){let v=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,F=b.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let q=G[F];q===void 0&&(q=v.clone(),G[F]=q,b.addEventListener("dispose",R)),v=q}if(v.visible=b.visible,v.wireframe=b.wireframe,M===Ni?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=r.properties.get(v);U.light=C}return v}function x(A,b,C,M,v){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Ni)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=t.update(A),G=A.material;if(Array.isArray(G)){const q=F.groups;for(let V=0,Y=q.length;V<Y;V++){const z=q[V],nt=G[z.materialIndex];if(nt&&nt.visible){const D=E(A,nt,M,v);A.onBeforeShadow(r,A,b,C,F,D,z),r.renderBufferDirect(C,null,F,D,A,z),A.onAfterShadow(r,A,b,C,F,D,z)}}}else if(G.visible){const q=E(A,G,M,v);A.onBeforeShadow(r,A,b,C,F,q,null),r.renderBufferDirect(C,null,F,q,A,null),A.onAfterShadow(r,A,b,C,F,q,null)}}const U=A.children;for(let F=0,G=U.length;F<G;F++)x(U[F],b,C,M,v)}function R(A){A.target.removeEventListener("dispose",R);for(const C in c){const M=c[C],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const XM={[Cc]:Pc,[Dc]:Uc,[Lc]:Nc,[Vs]:Ic,[Pc]:Cc,[Uc]:Dc,[Nc]:Lc,[Ic]:Vs};function YM(r,t){function e(){let L=!1;const ct=new Le;let j=null;const K=new Le(0,0,0,0);return{setMask:function(lt){j!==lt&&!L&&(r.colorMask(lt,lt,lt,lt),j=lt)},setLocked:function(lt){L=lt},setClear:function(lt,ft,Bt,ce,Pe){Pe===!0&&(lt*=ce,ft*=ce,Bt*=ce),ct.set(lt,ft,Bt,ce),K.equals(ct)===!1&&(r.clearColor(lt,ft,Bt,ce),K.copy(ct))},reset:function(){L=!1,j=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ct=!1,j=null,K=null,lt=null;return{setReversed:function(ft){if(ct!==ft){const Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ce=lt;lt=null,this.setClear(ce)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?it(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(ft){j!==ft&&!L&&(r.depthMask(ft),j=ft)},setFunc:function(ft){if(ct&&(ft=XM[ft]),K!==ft){switch(ft){case Cc:r.depthFunc(r.NEVER);break;case Pc:r.depthFunc(r.ALWAYS);break;case Dc:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case Lc:r.depthFunc(r.EQUAL);break;case Ic:r.depthFunc(r.GEQUAL);break;case Uc:r.depthFunc(r.GREATER);break;case Nc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ft}},setLocked:function(ft){L=ft},setClear:function(ft){lt!==ft&&(ct&&(ft=1-ft),r.clearDepth(ft),lt=ft)},reset:function(){L=!1,j=null,K=null,lt=null,ct=!1}}}function i(){let L=!1,ct=null,j=null,K=null,lt=null,ft=null,Bt=null,ce=null,Pe=null;return{setTest:function(gt){L||(gt?it(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(gt){ct!==gt&&!L&&(r.stencilMask(gt),ct=gt)},setFunc:function(gt,bt,Yt){(j!==gt||K!==bt||lt!==Yt)&&(r.stencilFunc(gt,bt,Yt),j=gt,K=bt,lt=Yt)},setOp:function(gt,bt,Yt){(ft!==gt||Bt!==bt||ce!==Yt)&&(r.stencilOp(gt,bt,Yt),ft=gt,Bt=bt,ce=Yt)},setLocked:function(gt){L=gt},setClear:function(gt){Pe!==gt&&(r.clearStencil(gt),Pe=gt)},reset:function(){L=!1,ct=null,j=null,K=null,lt=null,ft=null,Bt=null,ce=null,Pe=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,x=null,R=null,A=null,b=new le(0,0,0),C=0,M=!1,v=null,P=null,U=null,F=null,G=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=Y>=2);let nt=null,D={};const ut=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),Zt=new Le().fromArray(ut),Z=new Le().fromArray(It);function et(L,ct,j,K){const lt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(L,ft),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<j;Bt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ct+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ft}const _t={};_t[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(r.DEPTH_TEST),a.setFunc(Vs),Ft(!1),B(Ch),it(r.CULL_FACE),I(hr);function it(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Et(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function At(L,ct){return h[L]!==ct?(r.bindFramebuffer(L,ct),h[L]=ct,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ct),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function kt(L,ct){let j=f,K=!1;if(L){j=d.get(ct),j===void 0&&(j=[],d.set(ct,j));const lt=L.textures;if(j.length!==lt.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Bt=lt.length;ft<Bt;ft++)j[ft]=r.COLOR_ATTACHMENT0+ft;j.length=lt.length,K=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,K=!0);K&&r.drawBuffers(j)}function $t(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const Ht={[Nr]:r.FUNC_ADD,[Im]:r.FUNC_SUBTRACT,[Um]:r.FUNC_REVERSE_SUBTRACT};Ht[Nm]=r.MIN,Ht[Om]=r.MAX;const Pt={[Fm]:r.ZERO,[Bm]:r.ONE,[zm]:r.SRC_COLOR,[wc]:r.SRC_ALPHA,[Xm]:r.SRC_ALPHA_SATURATE,[Gm]:r.DST_COLOR,[Hm]:r.DST_ALPHA,[km]:r.ONE_MINUS_SRC_COLOR,[Rc]:r.ONE_MINUS_SRC_ALPHA,[Wm]:r.ONE_MINUS_DST_COLOR,[Vm]:r.ONE_MINUS_DST_ALPHA,[Ym]:r.CONSTANT_COLOR,[qm]:r.ONE_MINUS_CONSTANT_COLOR,[jm]:r.CONSTANT_ALPHA,[Zm]:r.ONE_MINUS_CONSTANT_ALPHA};function I(L,ct,j,K,lt,ft,Bt,ce,Pe,gt){if(L===hr){_===!0&&(Et(r.BLEND),_=!1);return}if(_===!1&&(it(r.BLEND),_=!0),L!==Lm){if(L!==m||gt!==M){if((p!==Nr||x!==Nr)&&(r.blendEquation(r.FUNC_ADD),p=Nr,x=Nr),gt)switch(L){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ph:r.blendFunc(r.ONE,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ph:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,E=null,R=null,A=null,b.set(0,0,0),C=0,m=L,M=gt}return}lt=lt||ct,ft=ft||j,Bt=Bt||K,(ct!==p||lt!==x)&&(r.blendEquationSeparate(Ht[ct],Ht[lt]),p=ct,x=lt),(j!==T||K!==E||ft!==R||Bt!==A)&&(r.blendFuncSeparate(Pt[j],Pt[K],Pt[ft],Pt[Bt]),T=j,E=K,R=ft,A=Bt),(ce.equals(b)===!1||Pe!==C)&&(r.blendColor(ce.r,ce.g,ce.b,Pe),b.copy(ce),C=Pe),m=L,M=!1}function _e(L,ct){L.side===Bi?Et(r.CULL_FACE):it(r.CULL_FACE);let j=L.side===Cn;ct&&(j=!j),Ft(j),L.blending===Ls&&L.transparent===!1?I(hr):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){v!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),v=L)}function B(L){L!==Cm?(it(r.CULL_FACE),L!==P&&(L===Ch?r.cullFace(r.BACK):L===Pm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),P=L}function Mt(L){L!==U&&(V&&r.lineWidth(L),U=L)}function re(L,ct,j){L?(it(r.POLYGON_OFFSET_FILL),(F!==ct||G!==j)&&(r.polygonOffset(ct,j),F=ct,G=j)):Et(r.POLYGON_OFFSET_FILL)}function Tt(L){L?it(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function w(L){L===void 0&&(L=r.TEXTURE0+q-1),nt!==L&&(r.activeTexture(L),nt=L)}function S(L,ct,j){j===void 0&&(nt===null?j=r.TEXTURE0+q-1:j=nt);let K=D[j];K===void 0&&(K={type:void 0,texture:void 0},D[j]=K),(K.type!==L||K.texture!==ct)&&(nt!==j&&(r.activeTexture(j),nt=j),r.bindTexture(L,ct||_t[L]),K.type=L,K.texture=ct)}function k(){const L=D[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){Zt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Zt.copy(L))}function vt(L){Z.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function Xt(L,ct){let j=c.get(ct);j===void 0&&(j=new WeakMap,c.set(ct,j));let K=j.get(L);K===void 0&&(K=r.getUniformBlockIndex(ct,L.name),j.set(L,K))}function Ot(L,ct){const K=c.get(ct).get(L);l.get(ct)!==K&&(r.uniformBlockBinding(ct,K,L.__bindingPointIndex),l.set(ct,K))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},nt=null,D={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,x=null,R=null,A=null,b=new le(0,0,0),C=0,M=!1,v=null,P=null,U=null,F=null,G=null,Zt.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:it,disable:Et,bindFramebuffer:At,drawBuffers:kt,useProgram:$t,setBlending:I,setMaterial:_e,setFlipSided:Ft,setCullFace:B,setLineWidth:Mt,setPolygonOffset:re,setScissorTest:Tt,activeTexture:w,bindTexture:S,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:st,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Gt,texStorage3D:rt,texSubImage2D:$,texSubImage3D:ht,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:Lt,viewport:vt,reset:oe}}function qM(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return f?new OffscreenCanvas(w,S):Oa("canvas")}function _(w,S,k){let Q=1;const J=Tt(w);if((J.width>k||J.height>k)&&(Q=k/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Q*J.width),ht=Math.floor(Q*J.height);h===void 0&&(h=g($,ht));const at=S?g($,ht):h;return at.width=$,at.height=ht,at.getContext("2d").drawImage(w,0,0,$,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+ht+")."),at}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(w,S,k,Q,J=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=S;if(S===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),S===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),S===r.RGBA){const ht=J?il:he.getTransfer(Q);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=ht===pe?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(w,S){let k;return w?S===null||S===jr||S===Xs?k=r.DEPTH24_STENCIL8:S===ki?k=r.DEPTH32F_STENCIL8:S===Ua&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===jr||S===Xs?k=r.DEPTH_COMPONENT24:S===ki?k=r.DEPTH_COMPONENT32F:S===Ua&&(k=r.DEPTH_COMPONENT16),k}function R(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==pi&&w.minFilter!==Mi?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&u.delete(S)}function b(w){const S=w.target;S.removeEventListener("dispose",b),v(S)}function C(w){const S=n.get(w);if(S.__webglInit===void 0)return;const k=w.source,Q=d.get(k);if(Q){const J=Q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(w),Object.keys(Q).length===0&&d.delete(k)}n.remove(w)}function M(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const k=w.source,Q=d.get(k);delete Q[S.__cacheKey],a.memory.textures--}function v(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let J=0;J<S.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=w.textures;for(let Q=0,J=k.length;Q<J;Q++){const $=n.get(k[Q]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[Q])}n.remove(w)}let P=0;function U(){P=0}function F(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function G(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function q(w,S){const k=n.get(w);if(w.isVideoTexture&&Mt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,w,S);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function V(w,S){const k=n.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function Y(w,S){const k=n.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,S);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function z(w,S){const k=n.get(w);if(w.version>0&&k.__version!==w.version){et(k,w,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const nt={[Bc]:r.REPEAT,[Fr]:r.CLAMP_TO_EDGE,[zc]:r.MIRRORED_REPEAT},D={[pi]:r.NEAREST,[s_]:r.NEAREST_MIPMAP_NEAREST,[io]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[Ll]:r.LINEAR_MIPMAP_NEAREST,[Br]:r.LINEAR_MIPMAP_LINEAR},ut={[c_]:r.NEVER,[m_]:r.ALWAYS,[u_]:r.LESS,[Id]:r.LEQUAL,[h_]:r.EQUAL,[p_]:r.GEQUAL,[f_]:r.GREATER,[d_]:r.NOTEQUAL};function It(w,S){if(S.type===ki&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Mi||S.magFilter===Ll||S.magFilter===io||S.magFilter===Br||S.minFilter===Mi||S.minFilter===Ll||S.minFilter===io||S.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,nt[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,nt[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,nt[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,D[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,D[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pi||S.minFilter!==io&&S.minFilter!==Br||S.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const Q=S.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const $=G(S);if($!==w.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[$].usedTimes++;const ht=J[w.__cacheKey];ht!==void 0&&(J[w.__cacheKey].usedTimes--,ht.usedTimes===0&&M(S)),w.__cacheKey=$,w.__webglTexture=J[$].texture}return k}function Z(w,S,k){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Zt(w,S),$=S.source;e.bindTexture(Q,w.__webglTexture,r.TEXTURE0+k);const ht=n.get($);if($.version!==ht.__version||J===!0){e.activeTexture(r.TEXTURE0+k);const at=he.getPrimaries(he.workingColorSpace),dt=S.colorSpace===sr?null:he.getPrimaries(S.colorSpace),Gt=S.colorSpace===sr||at===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let rt=_(S.image,!1,i.maxTextureSize);rt=re(S,rt);const st=s.convert(S.format,S.colorSpace),Dt=s.convert(S.type);let Lt=E(S.internalFormat,st,Dt,S.colorSpace,S.isVideoTexture);It(Q,S);let vt;const Xt=S.mipmaps,Ot=S.isVideoTexture!==!0,oe=ht.__version===void 0||J===!0,L=$.dataReady,ct=R(S,rt);if(S.isDepthTexture)Lt=x(S.format===Ys,S.type),oe&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,Lt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,rt.width,rt.height,0,st,Dt,null));else if(S.isDataTexture)if(Xt.length>0){Ot&&oe&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,Xt[0].width,Xt[0].height);for(let j=0,K=Xt.length;j<K;j++)vt=Xt[j],Ot?L&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,vt.width,vt.height,st,Dt,vt.data):e.texImage2D(r.TEXTURE_2D,j,Lt,vt.width,vt.height,0,st,Dt,vt.data);S.generateMipmaps=!1}else Ot?(oe&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,rt.width,rt.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,st,Dt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,rt.width,rt.height,0,st,Dt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ot&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,Xt[0].width,Xt[0].height,rt.depth);for(let j=0,K=Xt.length;j<K;j++)if(vt=Xt[j],S.format!==di)if(st!==null)if(Ot){if(L)if(S.layerUpdates.size>0){const lt=cf(vt.width,vt.height,S.format,S.type);for(const ft of S.layerUpdates){const Bt=vt.data.subarray(ft*lt/vt.data.BYTES_PER_ELEMENT,(ft+1)*lt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,ft,vt.width,vt.height,1,st,Bt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,rt.depth,st,vt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Lt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,rt.depth,st,Dt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,Lt,vt.width,vt.height,rt.depth,0,st,Dt,vt.data)}else{Ot&&oe&&e.texStorage2D(r.TEXTURE_2D,ct,Lt,Xt[0].width,Xt[0].height);for(let j=0,K=Xt.length;j<K;j++)vt=Xt[j],S.format!==di?st!==null?Ot?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,vt.width,vt.height,st,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,vt.width,vt.height,st,Dt,vt.data):e.texImage2D(r.TEXTURE_2D,j,Lt,vt.width,vt.height,0,st,Dt,vt.data)}else if(S.isDataArrayTexture)if(Ot){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Lt,rt.width,rt.height,rt.depth),L)if(S.layerUpdates.size>0){const j=cf(rt.width,rt.height,S.format,S.type);for(const K of S.layerUpdates){const lt=rt.data.subarray(K*j/rt.data.BYTES_PER_ELEMENT,(K+1)*j/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,st,Dt,lt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,st,Dt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,rt.width,rt.height,rt.depth,0,st,Dt,rt.data);else if(S.isData3DTexture)Ot?(oe&&e.texStorage3D(r.TEXTURE_3D,ct,Lt,rt.width,rt.height,rt.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,st,Dt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,rt.width,rt.height,rt.depth,0,st,Dt,rt.data);else if(S.isFramebufferTexture){if(oe)if(Ot)e.texStorage2D(r.TEXTURE_2D,ct,Lt,rt.width,rt.height);else{let j=rt.width,K=rt.height;for(let lt=0;lt<ct;lt++)e.texImage2D(r.TEXTURE_2D,lt,Lt,j,K,0,st,Dt,null),j>>=1,K>>=1}}else if(Xt.length>0){if(Ot&&oe){const j=Tt(Xt[0]);e.texStorage2D(r.TEXTURE_2D,ct,Lt,j.width,j.height)}for(let j=0,K=Xt.length;j<K;j++)vt=Xt[j],Ot?L&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,st,Dt,vt):e.texImage2D(r.TEXTURE_2D,j,Lt,st,Dt,vt);S.generateMipmaps=!1}else if(Ot){if(oe){const j=Tt(rt);e.texStorage2D(r.TEXTURE_2D,ct,Lt,j.width,j.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st,Dt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,st,Dt,rt);m(S)&&p(Q),ht.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function et(w,S,k){if(S.image.length!==6)return;const Q=Zt(w,S),J=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+k);const $=n.get(J);if(J.version!==$.__version||Q===!0){e.activeTexture(r.TEXTURE0+k);const ht=he.getPrimaries(he.workingColorSpace),at=S.colorSpace===sr?null:he.getPrimaries(S.colorSpace),dt=S.colorSpace===sr||ht===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Gt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,st=[];for(let K=0;K<6;K++)!Gt&&!rt?st[K]=_(S.image[K],!0,i.maxCubemapSize):st[K]=rt?S.image[K].image:S.image[K],st[K]=re(S,st[K]);const Dt=st[0],Lt=s.convert(S.format,S.colorSpace),vt=s.convert(S.type),Xt=E(S.internalFormat,Lt,vt,S.colorSpace),Ot=S.isVideoTexture!==!0,oe=$.__version===void 0||Q===!0,L=J.dataReady;let ct=R(S,Dt);It(r.TEXTURE_CUBE_MAP,S);let j;if(Gt){Ot&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Xt,Dt.width,Dt.height);for(let K=0;K<6;K++){j=st[K].mipmaps;for(let lt=0;lt<j.length;lt++){const ft=j[lt];S.format!==di?Lt!==null?Ot?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Xt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ft.width,ft.height,Lt,vt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Xt,ft.width,ft.height,0,Lt,vt,ft.data)}}}else{if(j=S.mipmaps,Ot&&oe){j.length>0&&ct++;const K=Tt(st[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Xt,K.width,K.height)}for(let K=0;K<6;K++)if(rt){Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,st[K].width,st[K].height,Lt,vt,st[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,st[K].width,st[K].height,0,Lt,vt,st[K].data);for(let lt=0;lt<j.length;lt++){const Bt=j[lt].image[K].image;Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Bt.width,Bt.height,Lt,vt,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Xt,Bt.width,Bt.height,0,Lt,vt,Bt.data)}}else{Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Lt,vt,st[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,Lt,vt,st[K]);for(let lt=0;lt<j.length;lt++){const ft=j[lt];Ot?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Lt,vt,ft.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Xt,Lt,vt,ft.image[K])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),$.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function _t(w,S,k,Q,J,$){const ht=s.convert(k.format,k.colorSpace),at=s.convert(k.type),dt=E(k.internalFormat,ht,at,k.colorSpace),Gt=n.get(S),rt=n.get(k);if(rt.__renderTarget=S,!Gt.__hasExternalTextures){const st=Math.max(1,S.width>>$),Dt=Math.max(1,S.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,$,dt,st,Dt,S.depth,0,ht,at,null):e.texImage2D(J,$,dt,st,Dt,0,ht,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),B(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,rt.__webglTexture,0,Ft(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,rt.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(w,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const Q=S.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,$=x(S.stencilBuffer,J),ht=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Ft(S);B(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,$,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,$,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,$,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,w)}else{const Q=S.textures;for(let J=0;J<Q.length;J++){const $=Q[J],ht=s.convert($.format,$.colorSpace),at=s.convert($.type),dt=E($.internalFormat,ht,at,$.colorSpace),Gt=Ft(S);k&&B(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,dt,S.width,S.height):B(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,dt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,dt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const J=Q.__webglTexture,$=Ft(S);if(S.depthTexture.format===Is)B(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(S.depthTexture.format===Ys)B(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function At(w){const S=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Q}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Et(S.__webglFramebuffer,w)}else if(k){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=r.createRenderbuffer(),it(S.__webglDepthbuffer[Q],w,!1);else{const J=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),it(S.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(w,S,k){const Q=n.get(w);S!==void 0&&_t(Q.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&At(w)}function $t(w){const S=w.texture,k=n.get(w),Q=n.get(S);w.addEventListener("dispose",b);const J=w.textures,$=w.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let dt=0;dt<S.mipmaps.length;dt++)k.__webglFramebuffer[at][dt]=r.createFramebuffer()}else k.__webglFramebuffer[at]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)k.__webglFramebuffer[at]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ht)for(let at=0,dt=J.length;at<dt;at++){const Gt=n.get(J[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&B(w)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const dt=J[at];k.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const Gt=s.convert(dt.format,dt.colorSpace),rt=s.convert(dt.type),st=E(dt.internalFormat,Gt,rt,dt.colorSpace,w.isXRRenderTarget===!0),Dt=Ft(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,st,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,k.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),it(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),It(r.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)_t(k.__webglFramebuffer[at][dt],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else _t(k.__webglFramebuffer[at],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let at=0,dt=J.length;at<dt;at++){const Gt=J[at],rt=n.get(Gt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),It(r.TEXTURE_2D,Gt),_t(k.__webglFramebuffer,w,Gt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),m(Gt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(at=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),It(at,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)_t(k.__webglFramebuffer[dt],w,S,r.COLOR_ATTACHMENT0,at,dt);else _t(k.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,at,0);m(S)&&p(at),e.unbindTexture()}w.depthBuffer&&At(w)}function Ht(w){const S=w.textures;for(let k=0,Q=S.length;k<Q;k++){const J=S[k];if(m(J)){const $=T(w),ht=n.get(J).__webglTexture;e.bindTexture($,ht),p($),e.unbindTexture()}}}const Pt=[],I=[];function _e(w){if(w.samples>0){if(B(w)===!1){const S=w.textures,k=w.width,Q=w.height;let J=r.COLOR_BUFFER_BIT;const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(w),at=S.length>1;if(at)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);const Gt=n.get(S[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Gt,0)}r.blitFramebuffer(0,0,k,Q,0,0,k,Q,J,r.NEAREST),l===!0&&(Pt.length=0,I.length=0,Pt.push(r.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Pt.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);const Gt=n.get(S[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ft(w){return Math.min(i.maxSamples,w.samples)}function B(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function re(w,S){const k=w.colorSpace,Q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==qs&&k!==sr&&(he.getTransfer(k)===pe?(Q!==di||J!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Tt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=kt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=B}function jM(r,t){function e(n,i=sr){let s;const a=he.getTransfer(i);if(n===Yi)return r.UNSIGNED_BYTE;if(n===Gu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Td)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return r.BYTE;if(n===Ed)return r.SHORT;if(n===Ua)return r.UNSIGNED_SHORT;if(n===Vu)return r.INT;if(n===jr)return r.UNSIGNED_INT;if(n===ki)return r.FLOAT;if(n===Ya)return r.HALF_FLOAT;if(n===bd)return r.ALPHA;if(n===Ad)return r.RGB;if(n===di)return r.RGBA;if(n===wd)return r.LUMINANCE;if(n===Rd)return r.LUMINANCE_ALPHA;if(n===Is)return r.DEPTH_COMPONENT;if(n===Ys)return r.DEPTH_STENCIL;if(n===Cd)return r.RED;if(n===Xu)return r.RED_INTEGER;if(n===Pd)return r.RG;if(n===Yu)return r.RG_INTEGER;if(n===qu)return r.RGBA_INTEGER;if(n===Vo||n===Go||n===Wo||n===Xo)if(a===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kc||n===Hc||n===Vc||n===Gc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc||n===Xc||n===Yc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wc||n===Xc)return a===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yc)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qc||n===jc||n===Zc||n===$c||n===Kc||n===Jc||n===Qc||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===au)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qc)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$c)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qc)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===su)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===ou||n===lu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Yo)return a===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dd||n===cu||n===uu||n===hu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const ZM={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new To;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new En,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gr({vertexShader:$M,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new Sl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QM extends ns{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new JM,m=e.getContextAttributes();let p=null,T=null;const E=[],x=[],R=new Wt;let A=null;const b=new Qn;b.viewport=new Le;const C=new Qn;C.viewport=new Le;const M=[b,C],v=new vg;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=E[Z];return et===void 0&&(et=new ac,E[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=E[Z];return et===void 0&&(et=new ac,E[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=E[Z];return et===void 0&&(et=new ac,E[Z]=et),et.getHandSpace()};function F(Z){const et=x.indexOf(Z.inputSource);if(et===-1)return;const _t=E[et];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||a),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let Z=0;Z<E.length;Z++){const et=x[Z];et!==null&&(x[Z]=null,E[Z].disconnect(et))}P=null,U=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,T=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Zr(f.framebufferWidth,f.framebufferHeight,{format:di,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,_t=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Ys:Is,_t=m.stencil?Xs:jr);const Et={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Zr(d.textureWidth,d.textureHeight,{format:di,type:Yi,depthTexture:new Wd(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Z){for(let et=0;et<Z.removed.length;et++){const _t=Z.removed[et],it=x.indexOf(_t);it>=0&&(x[it]=null,E[it].disconnect(_t))}for(let et=0;et<Z.added.length;et++){const _t=Z.added[et];let it=x.indexOf(_t);if(it===-1){for(let At=0;At<E.length;At++)if(At>=x.length){x.push(_t),it=At;break}else if(x[At]===null){x[At]=_t,it=At;break}if(it===-1)break}const Et=E[it];Et&&Et.connect(_t)}}const V=new H,Y=new H;function z(Z,et,_t){V.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(_t.matrixWorld);const it=V.distanceTo(Y),Et=et.projectionMatrix.elements,At=_t.projectionMatrix.elements,kt=Et[14]/(Et[10]-1),$t=Et[14]/(Et[10]+1),Ht=(Et[9]+1)/Et[5],Pt=(Et[9]-1)/Et[5],I=(Et[8]-1)/Et[0],_e=(At[8]+1)/At[0],Ft=kt*I,B=kt*_e,Mt=it/(-I+_e),re=Mt*-I;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(re),Z.translateZ(Mt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Et[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Tt=kt+Mt,w=$t+Mt,S=Ft-re,k=B+(it-re),Q=Ht*$t/w*Tt,J=Pt*$t/w*Tt;Z.projectionMatrix.makePerspective(S,k,Q,J,Tt,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function nt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let et=Z.near,_t=Z.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),v.near=C.near=b.near=et,v.far=C.far=b.far=_t,(P!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,U=v.far),b.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,v.layers.mask=b.layers.mask|C.layers.mask;const it=Z.parent,Et=v.cameras;nt(v,it);for(let At=0;At<Et.length;At++)nt(Et[At],it);Et.length===2?z(v,b,C):v.projectionMatrix.copy(b.projectionMatrix),D(Z,v,it)};function D(Z,et,_t){_t===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Na*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ut=null;function It(Z,et){if(u=et.getViewerPose(c||a),g=et,u!==null){const _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let it=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,it=!0);for(let At=0;At<_t.length;At++){const kt=_t[At];let $t=null;if(f!==null)$t=f.getViewport(kt);else{const Pt=h.getViewSubImage(d,kt);$t=Pt.viewport,At===0&&(t.setRenderTargetTextures(T,Pt.colorTexture,d.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(T))}let Ht=M[At];Ht===void 0&&(Ht=new Qn,Ht.layers.enable(At),Ht.viewport=new Le,M[At]=Ht),Ht.matrix.fromArray(kt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(kt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set($t.x,$t.y,$t.width,$t.height),At===0&&(v.matrix.copy(Ht.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),it===!0&&v.cameras.push(Ht)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const At=h.getDepthInformation(_t[0]);At&&At.isValid&&At.texture&&_.init(t,At,i.renderState)}}for(let _t=0;_t<E.length;_t++){const it=x[_t],Et=E[_t];it!==null&&Et!==void 0&&Et.update(it,et,c||a)}ut&&ut(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Zt=new Zd;Zt.setAnimationLoop(It),this.setAnimationLoop=function(Z){ut=Z},this.dispose=function(){}}}const Rr=new Ai,tS=new Ae;function eS(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),E=T.envMap,x=T.envMapRotation;E&&(m.envMap.value=E,Rr.copy(x),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(tS.makeRotationFromEuler(Rr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nS(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const x=E.program;n.uniformBlockBinding(T,x)}function c(T,E){let x=i[T.id];x===void 0&&(g(T),x=u(T),i[T.id]=x,T.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(T,R);const A=t.render.frame;s[T.id]!==A&&(d(T),s[T.id]=A)}function u(T){const E=h();T.__bindingPointIndex=E;const x=r.createBuffer(),R=T.__size,A=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,x),x}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],x=T.uniforms,R=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let A=0,b=x.length;A<b;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,v=C.length;M<v;M++){const P=C[M];if(f(P,A,M,R)===!0){const U=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let q=0;q<F.length;q++){const V=F[q],Y=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,U+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(T,E,x,R){const A=T.value,b=E+"_"+x;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const C=R[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(T){const E=T.uniforms;let x=0;const R=16;for(let b=0,C=E.length;b<C;b++){const M=Array.isArray(E[b])?E[b]:[E[b]];for(let v=0,P=M.length;v<P;v++){const U=M[v],F=Array.isArray(U.value)?U.value:[U.value];for(let G=0,q=F.length;G<q;G++){const V=F[G],Y=_(V),z=x%R,nt=z%Y.boundary,D=z+nt;x+=nt,D!==0&&R-D<Y.storage&&(x+=R-D),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Y.storage}}}const A=x%R;return A>0&&(x+=R-A),T.__size=x,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class iS{constructor(t={}){const{canvas:e=I_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=fr,this.toneMappingExposure=1;const x=this;let R=!1,A=0,b=0,C=null,M=-1,v=null;const P=new Le,U=new Le;let F=null;const G=new le(0);let q=0,V=e.width,Y=e.height,z=1,nt=null,D=null;const ut=new Le(0,0,V,Y),It=new Le(0,0,V,Y);let Zt=!1;const Z=new $u;let et=!1,_t=!1;const it=new Ae,Et=new Ae,At=new H,kt=new Le,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Pt(){return C===null?z:1}let I=n;function _e(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hu}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const N="webgl2";if(I=_e(N,y),I===null)throw _e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ft,B,Mt,re,Tt,w,S,k,Q,J,$,ht,at,dt,Gt,rt,st,Dt,Lt,vt,Xt,Ot,oe,L;function ct(){Ft=new fx(I),Ft.init(),Ot=new jM(I,Ft),B=new ax(I,Ft,t,Ot),Mt=new YM(I,Ft),B.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),re=new mx(I),Tt=new IM,w=new qM(I,Ft,Mt,Tt,B,Ot,re),S=new lx(x),k=new hx(x),Q=new yg(I),oe=new rx(I,Q),J=new dx(I,Q,re,oe),$=new gx(I,J,Q,re),Lt=new _x(I,B,w),rt=new ox(Tt),ht=new LM(x,S,k,Ft,B,oe,rt),at=new eS(x,Tt),dt=new NM,Gt=new HM(Ft),Dt=new ix(x,S,k,Mt,$,f,l),st=new WM(x,$,B),L=new nS(I,re,B,Mt),vt=new sx(I,Ft,re),Xt=new px(I,Ft,re),re.programs=ht.programs,x.capabilities=B,x.extensions=Ft,x.properties=Tt,x.renderLists=dt,x.shadowMap=st,x.state=Mt,x.info=re}ct();const j=new QM(x,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Ft.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ft.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(V,Y,!1))},this.getSize=function(y){return y.set(V,Y)},this.setSize=function(y,N,W=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,Y=N,e.width=Math.floor(y*z),e.height=Math.floor(N*z),W===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(V*z,Y*z).floor()},this.setDrawingBufferSize=function(y,N,W){V=y,Y=N,z=W,e.width=Math.floor(y*W),e.height=Math.floor(N*W),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,N,W,X){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,N,W,X),Mt.viewport(P.copy(ut).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,N,W,X){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,N,W,X),Mt.scissor(U.copy(It).multiplyScalar(z).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(y){Mt.setScissorTest(Zt=y)},this.setOpaqueSort=function(y){nt=y},this.setTransparentSort=function(y){D=y},this.getClearColor=function(y){return y.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(y=!0,N=!0,W=!0){let X=0;if(y){let O=!1;if(C!==null){const tt=C.texture.format;O=tt===qu||tt===Yu||tt===Xu}if(O){const tt=C.texture.type,ot=tt===Yi||tt===jr||tt===Ua||tt===Xs||tt===Gu||tt===Wu,xt=Dt.getClearColor(),yt=Dt.getClearAlpha(),Ut=xt.r,Ct=xt.g,Rt=xt.b;ot?(g[0]=Ut,g[1]=Ct,g[2]=Rt,g[3]=yt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ut,_[1]=Ct,_[2]=Rt,_[3]=yt,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}N&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Dt.dispose(),dt.dispose(),Gt.dispose(),Tt.dispose(),S.dispose(),k.dispose(),$.dispose(),oe.dispose(),L.dispose(),ht.dispose(),j.dispose(),j.removeEventListener("sessionstart",pt),j.removeEventListener("sessionend",Vt),wt.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=re.autoReset,N=st.enabled,W=st.autoUpdate,X=st.needsUpdate,O=st.type;ct(),re.autoReset=y,st.enabled=N,st.autoUpdate=W,st.needsUpdate=X,st.type=O}function ft(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Bt(y){const N=y.target;N.removeEventListener("dispose",Bt),ce(N)}function ce(y){Pe(y),Tt.remove(y)}function Pe(y){const N=Tt.get(y).programs;N!==void 0&&(N.forEach(function(W){ht.releaseProgram(W)}),y.isShaderMaterial&&ht.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,W,X,O,tt){N===null&&(N=$t);const ot=O.isMesh&&O.matrixWorld.determinant()<0,xt=Nn(y,N,W,X,O);Mt.setMaterial(X,ot);let yt=W.index,Ut=1;if(X.wireframe===!0){if(yt=J.getWireframeAttribute(W),yt===void 0)return;Ut=2}const Ct=W.drawRange,Rt=W.attributes.position;let Jt=Ct.start*Ut,ne=(Ct.start+Ct.count)*Ut;tt!==null&&(Jt=Math.max(Jt,tt.start*Ut),ne=Math.min(ne,(tt.start+tt.count)*Ut)),yt!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,yt.count)):Rt!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,Rt.count));const Fe=ne-Jt;if(Fe<0||Fe===1/0)return;oe.setup(O,X,xt,W,yt);let De,ue=vt;if(yt!==null&&(De=Q.get(yt),ue=Xt,ue.setIndex(De)),O.isMesh)X.wireframe===!0?(Mt.setLineWidth(X.wireframeLinewidth*Pt()),ue.setMode(I.LINES)):ue.setMode(I.TRIANGLES);else if(O.isLine){let Nt=X.linewidth;Nt===void 0&&(Nt=1),Mt.setLineWidth(Nt*Pt()),O.isLineSegments?ue.setMode(I.LINES):O.isLineLoop?ue.setMode(I.LINE_LOOP):ue.setMode(I.LINE_STRIP)}else O.isPoints?ue.setMode(I.POINTS):O.isSprite&&ue.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ue.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))ue.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Nt=O._multiDrawStarts,tn=O._multiDrawCounts,de=O._multiDrawCount,ai=yt?Q.get(yt).bytesPerElement:1,rs=Tt.get(X).currentProgram.getUniforms();for(let On=0;On<de;On++)rs.setValue(I,"_gl_DrawID",On),ue.render(Nt[On]/ai,tn[On])}else if(O.isInstancedMesh)ue.renderInstances(Jt,Fe,O.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,tn=Math.min(W.instanceCount,Nt);ue.renderInstances(Jt,Fe,tn)}else ue.render(Jt,Fe)};function gt(y,N,W){y.transparent===!0&&y.side===Bi&&y.forceSinglePass===!1?(y.side=Cn,y.needsUpdate=!0,ge(y,N,W),y.side=_r,y.needsUpdate=!0,ge(y,N,W),y.side=Bi):ge(y,N,W)}this.compile=function(y,N,W=null){W===null&&(W=y),p=Gt.get(W),p.init(N),E.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),y!==W&&y.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const tt=O.material;if(tt)if(Array.isArray(tt))for(let ot=0;ot<tt.length;ot++){const xt=tt[ot];gt(xt,W,O),X.add(xt)}else gt(tt,W,O),X.add(tt)}),E.pop(),p=null,X},this.compileAsync=function(y,N,W=null){const X=this.compile(y,N,W);return new Promise(O=>{function tt(){if(X.forEach(function(ot){Tt.get(ot).currentProgram.isReady()&&X.delete(ot)}),X.size===0){O(y);return}setTimeout(tt,10)}Ft.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let bt=null;function Yt(y){bt&&bt(y)}function pt(){wt.stop()}function Vt(){wt.start()}const wt=new Zd;wt.setAnimationLoop(Yt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(y){bt=y,j.setAnimationLoop(y),y===null?wt.stop():wt.start()},j.addEventListener("sessionstart",pt),j.addEventListener("sessionend",Vt),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,N,C),p=Gt.get(y,E.length),p.init(N),E.push(p),Et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Et),_t=this.localClippingEnabled,et=rt.init(this.clippingPlanes,_t),m=dt.get(y,T.length),m.init(),T.push(m),j.enabled===!0&&j.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&zt(tt,N,-1/0,x.sortObjects)}zt(y,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(nt,D),Ht=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ht&&Dt.addToRenderList(m,y),this.info.render.frame++,et===!0&&rt.beginShadows();const W=p.state.shadowsArray;st.render(W,y,N),et===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){const tt=N.cameras;if(O.length>0)for(let ot=0,xt=tt.length;ot<xt;ot++){const yt=tt[ot];Kt(X,O,y,yt)}Ht&&Dt.render(y);for(let ot=0,xt=tt.length;ot<xt;ot++){const yt=tt[ot];Ue(m,y,yt,yt.viewport)}}else O.length>0&&Kt(X,O,y,N),Ht&&Dt.render(y),Ue(m,y,N);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(x,y,N),oe.resetDefaultState(),M=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function zt(y,N,W,X){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){X&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Et);const ot=$.update(y),xt=y.material;xt.visible&&m.push(y,ot,xt,W,kt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Z.intersectsObject(y))){const ot=$.update(y),xt=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),kt.copy(ot.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(Et)),Array.isArray(xt)){const yt=ot.groups;for(let Ut=0,Ct=yt.length;Ut<Ct;Ut++){const Rt=yt[Ut],Jt=xt[Rt.materialIndex];Jt&&Jt.visible&&m.push(y,ot,Jt,W,kt.z,Rt)}}else xt.visible&&m.push(y,ot,xt,W,kt.z,null)}}const tt=y.children;for(let ot=0,xt=tt.length;ot<xt;ot++)zt(tt[ot],N,W,X)}function Ue(y,N,W,X){const O=y.opaque,tt=y.transmissive,ot=y.transparent;p.setupLightsView(W),et===!0&&rt.setGlobalState(x.clippingPlanes,W),X&&Mt.viewport(P.copy(X)),O.length>0&&Me(O,N,W),tt.length>0&&Me(tt,N,W),ot.length>0&&Me(ot,N,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Kt(y,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Zr(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Ya:Yi,minFilter:Br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const tt=p.state.transmissionRenderTarget[X.id],ot=X.viewport||P;tt.setSize(ot.z,ot.w);const xt=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(G),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ht&&Dt.render(W);const yt=x.toneMapping;x.toneMapping=fr;const Ut=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),et===!0&&rt.setGlobalState(x.clippingPlanes,X),Me(y,W,X),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Rt=0,Jt=N.length;Rt<Jt;Rt++){const ne=N[Rt],Fe=ne.object,De=ne.geometry,ue=ne.material,Nt=ne.group;if(ue.side===Bi&&Fe.layers.test(X.layers)){const tn=ue.side;ue.side=Cn,ue.needsUpdate=!0,He(Fe,W,X,De,ue,Nt),ue.side=tn,ue.needsUpdate=!0,Ct=!0}}Ct===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}x.setRenderTarget(xt),x.setClearColor(G,q),Ut!==void 0&&(X.viewport=Ut),x.toneMapping=yt}function Me(y,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,tt=y.length;O<tt;O++){const ot=y[O],xt=ot.object,yt=ot.geometry,Ut=X===null?ot.material:X,Ct=ot.group;xt.layers.test(W.layers)&&He(xt,N,W,yt,Ut,Ct)}}function He(y,N,W,X,O,tt){y.onBeforeRender(x,N,W,X,O,tt),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(x,N,W,X,y,tt),O.transparent===!0&&O.side===Bi&&O.forceSinglePass===!1?(O.side=Cn,O.needsUpdate=!0,x.renderBufferDirect(W,N,X,O,y,tt),O.side=_r,O.needsUpdate=!0,x.renderBufferDirect(W,N,X,O,y,tt),O.side=Bi):x.renderBufferDirect(W,N,X,O,y,tt),y.onAfterRender(x,N,W,X,O,tt)}function ge(y,N,W){N.isScene!==!0&&(N=$t);const X=Tt.get(y),O=p.state.lights,tt=p.state.shadowsArray,ot=O.state.version,xt=ht.getParameters(y,O.state,tt,N,W),yt=ht.getProgramCacheKey(xt);let Ut=X.programs;X.environment=y.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(y.isMeshStandardMaterial?k:S).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",Bt),Ut=new Map,X.programs=Ut);let Ct=Ut.get(yt);if(Ct!==void 0){if(X.currentProgram===Ct&&X.lightsStateVersion===ot)return fe(y,xt),Ct}else xt.uniforms=ht.getUniforms(y),y.onBeforeCompile(xt,x),Ct=ht.acquireProgram(xt,yt),Ut.set(yt,Ct),X.uniforms=xt.uniforms;const Rt=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),fe(y,xt),X.needsLights=hn(y),X.lightsStateVersion=ot,X.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Ct,X.uniformsList=null,Ct}function ve(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=qo.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function fe(y,N){const W=Tt.get(y);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Nn(y,N,W,X,O){N.isScene!==!0&&(N=$t),w.resetTextureUnits();const tt=N.fog,ot=X.isMeshStandardMaterial?N.environment:null,xt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qs,yt=(X.isMeshStandardMaterial?k:S).get(X.envMap||ot),Ut=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ct=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color;let Fe=fr;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Fe=x.toneMapping);const De=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=De!==void 0?De.length:0,Nt=Tt.get(X),tn=p.state.lights;if(et===!0&&(_t===!0||y!==v)){const fn=y===v&&X.id===M;rt.setState(X,y,fn)}let de=!1;X.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==tn.state.version||Nt.outputColorSpace!==xt||O.isBatchedMesh&&Nt.batching===!1||!O.isBatchedMesh&&Nt.batching===!0||O.isBatchedMesh&&Nt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Nt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Nt.instancing===!1||!O.isInstancedMesh&&Nt.instancing===!0||O.isSkinnedMesh&&Nt.skinning===!1||!O.isSkinnedMesh&&Nt.skinning===!0||O.isInstancedMesh&&Nt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Nt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Nt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Nt.instancingMorph===!1&&O.morphTexture!==null||Nt.envMap!==yt||X.fog===!0&&Nt.fog!==tt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==rt.numPlanes||Nt.numIntersection!==rt.numIntersection)||Nt.vertexAlphas!==Ut||Nt.vertexTangents!==Ct||Nt.morphTargets!==Rt||Nt.morphNormals!==Jt||Nt.morphColors!==ne||Nt.toneMapping!==Fe||Nt.morphTargetsCount!==ue)&&(de=!0):(de=!0,Nt.__version=X.version);let ai=Nt.currentProgram;de===!0&&(ai=ge(X,N,O));let rs=!1,On=!1,ra=!1;const Te=ai.getUniforms(),jn=Nt.uniforms;if(Mt.useProgram(ai.program)&&(rs=!0,On=!0,ra=!0),X.id!==M&&(M=X.id,On=!0),rs||v!==y){Mt.buffers.depth.getReversed()?(it.copy(y.projectionMatrix),N_(it),O_(it),Te.setValue(I,"projectionMatrix",it)):Te.setValue(I,"projectionMatrix",y.projectionMatrix),Te.setValue(I,"viewMatrix",y.matrixWorldInverse);const bn=Te.map.cameraPosition;bn!==void 0&&bn.setValue(I,At.setFromMatrixPosition(y.matrixWorld)),B.logarithmicDepthBuffer&&Te.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Te.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,On=!0,ra=!0)}if(O.isSkinnedMesh){Te.setOptional(I,O,"bindMatrix"),Te.setOptional(I,O,"bindMatrixInverse");const fn=O.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Te.setValue(I,"boneTexture",fn.boneTexture,w))}O.isBatchedMesh&&(Te.setOptional(I,O,"batchingTexture"),Te.setValue(I,"batchingTexture",O._matricesTexture,w),Te.setOptional(I,O,"batchingIdTexture"),Te.setValue(I,"batchingIdTexture",O._indirectTexture,w),Te.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Te.setValue(I,"batchingColorTexture",O._colorsTexture,w));const Zn=W.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Lt.update(O,W,ai),(On||Nt.receiveShadow!==O.receiveShadow)&&(Nt.receiveShadow=O.receiveShadow,Te.setValue(I,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(jn.envMap.value=yt,jn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(jn.envMapIntensity.value=N.environmentIntensity),On&&(Te.setValue(I,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&ye(jn,ra),tt&&X.fog===!0&&at.refreshFogUniforms(jn,tt),at.refreshMaterialUniforms(jn,X,z,Y,p.state.transmissionRenderTarget[y.id]),qo.upload(I,ve(Nt),jn,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qo.upload(I,ve(Nt),jn,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Te.setValue(I,"center",O.center),Te.setValue(I,"modelViewMatrix",O.modelViewMatrix),Te.setValue(I,"normalMatrix",O.normalMatrix),Te.setValue(I,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const fn=X.uniformsGroups;for(let bn=0,Dl=fn.length;bn<Dl;bn++){const yr=fn[bn];L.update(yr,ai),L.bind(yr,ai)}}return ai}function ye(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function hn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,N,W){Tt.get(y.texture).__webglTexture=N,Tt.get(y.depthTexture).__webglTexture=W;const X=Tt.get(y);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,N){const W=Tt.get(y);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,W=0){C=y,A=N,b=W;let X=!0,O=null,tt=!1,ot=!1;if(y){const yt=Tt.get(y);if(yt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(yt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(yt.__hasExternalTextures)w.rebindTextures(y,Tt.get(y.texture).__webglTexture,Tt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Rt=y.depthTexture;if(yt.__boundDepthTexture!==Rt){if(Rt!==null&&Tt.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ot=!0);const Ct=Tt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?O=Ct[N][W]:O=Ct[N],tt=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?O=Tt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?O=Ct[W]:O=Ct,P.copy(y.viewport),U.copy(y.scissor),F=y.scissorTest}else P.copy(ut).multiplyScalar(z).floor(),U.copy(It).multiplyScalar(z).floor(),F=Zt;if(Mt.bindFramebuffer(I.FRAMEBUFFER,O)&&X&&Mt.drawBuffers(y,O),Mt.viewport(P),Mt.scissor(U),Mt.setScissorTest(F),tt){const yt=Tt.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,W)}else if(ot){const yt=Tt.get(y.texture),Ut=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,W||0,Ut)}M=-1},this.readRenderTargetPixels=function(y,N,W,X,O,tt,ot){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(xt=xt[ot]),xt){Mt.bindFramebuffer(I.FRAMEBUFFER,xt);try{const yt=y.texture,Ut=yt.format,Ct=yt.type;if(!B.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-X&&W>=0&&W<=y.height-O&&I.readPixels(N,W,X,O,Ot.convert(Ut),Ot.convert(Ct),tt)}finally{const yt=C!==null?Tt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(y,N,W,X,O,tt,ot){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ot!==void 0&&(xt=xt[ot]),xt){const yt=y.texture,Ut=yt.format,Ct=yt.type;if(!B.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=y.width-X&&W>=0&&W<=y.height-O){Mt.bindFramebuffer(I.FRAMEBUFFER,xt);const Rt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Rt),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),I.readPixels(N,W,X,O,Ot.convert(Ut),Ot.convert(Ct),0);const Jt=C!==null?Tt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,Jt);const ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await U_(I,ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Rt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(Rt),I.deleteSync(ne),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,N=null,W=0){y.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(y.image.width*X),tt=Math.floor(y.image.height*X),ot=N!==null?N.x:0,xt=N!==null?N.y:0;w.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ot,xt,O,tt),Mt.unbindTexture()};const qn=I.createFramebuffer(),Ve=I.createFramebuffer();this.copyTextureToTexture=function(y,N,W=null,X=null,O=0,tt=null){y.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,y=arguments[1],N=arguments[2],tt=arguments[3]||0,W=null),tt===null&&(O!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=O,O=0):tt=0);let ot,xt,yt,Ut,Ct,Rt,Jt,ne,Fe;const De=y.isCompressedTexture?y.mipmaps[tt]:y.image;if(W!==null)ot=W.max.x-W.min.x,xt=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Ut=W.min.x,Ct=W.min.y,Rt=W.isBox3?W.min.z:0;else{const Zn=Math.pow(2,-O);ot=Math.floor(De.width*Zn),xt=Math.floor(De.height*Zn),y.isDataArrayTexture?yt=De.depth:y.isData3DTexture?yt=Math.floor(De.depth*Zn):yt=1,Ut=0,Ct=0,Rt=0}X!==null?(Jt=X.x,ne=X.y,Fe=X.z):(Jt=0,ne=0,Fe=0);const ue=Ot.convert(N.format),Nt=Ot.convert(N.type);let tn;N.isData3DTexture?(w.setTexture3D(N,0),tn=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),tn=I.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),tn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const de=I.getParameter(I.UNPACK_ROW_LENGTH),ai=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rs=I.getParameter(I.UNPACK_SKIP_PIXELS),On=I.getParameter(I.UNPACK_SKIP_ROWS),ra=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,De.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,De.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rt);const Te=y.isDataArrayTexture||y.isData3DTexture,jn=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const Zn=Tt.get(y),fn=Tt.get(N),bn=Tt.get(Zn.__renderTarget),Dl=Tt.get(fn.__renderTarget);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,bn.__webglFramebuffer),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dl.__webglFramebuffer);for(let yr=0;yr<yt;yr++)Te&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(y).__webglTexture,O,Rt+yr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(N).__webglTexture,tt,Fe+yr)),I.blitFramebuffer(Ut,Ct,ot,xt,Jt,ne,ot,xt,I.DEPTH_BUFFER_BIT,I.NEAREST);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Tt.has(y)){const Zn=Tt.get(y),fn=Tt.get(N);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,qn),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ve);for(let bn=0;bn<yt;bn++)Te?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zn.__webglTexture,O,Rt+bn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zn.__webglTexture,O),jn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,tt,Fe+bn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,tt),O!==0?I.blitFramebuffer(Ut,Ct,ot,xt,Jt,ne,ot,xt,I.COLOR_BUFFER_BIT,I.NEAREST):jn?I.copyTexSubImage3D(tn,tt,Jt,ne,Fe+bn,Ut,Ct,ot,xt):I.copyTexSubImage2D(tn,tt,Jt,ne,Ut,Ct,ot,xt);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else jn?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(tn,tt,Jt,ne,Fe,ot,xt,yt,ue,Nt,De.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(tn,tt,Jt,ne,Fe,ot,xt,yt,ue,De.data):I.texSubImage3D(tn,tt,Jt,ne,Fe,ot,xt,yt,ue,Nt,De):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,tt,Jt,ne,ot,xt,ue,Nt,De.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,tt,Jt,ne,De.width,De.height,ue,De.data):I.texSubImage2D(I.TEXTURE_2D,tt,Jt,ne,ot,xt,ue,Nt,De);I.pixelStorei(I.UNPACK_ROW_LENGTH,de),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ai),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rs),I.pixelStorei(I.UNPACK_SKIP_ROWS,On),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ra),tt===0&&N.generateMipmaps&&I.generateMipmap(tn),Mt.unbindTexture()},this.copyTextureToTexture3D=function(y,N,W=null,X=null,O=0){return y.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,y=arguments[2],N=arguments[3],O=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,W,X,O)},this.initRenderTarget=function(y){Tt.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,Mt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function Oi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zs={duration:.5,overwrite:!1,delay:0},th,cn,be,ni=1e8,Se=1/ni,mu=Math.PI*2,rS=mu/4,sS=0,ep=Math.sqrt,aS=Math.cos,oS=Math.sin,Qe=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},qi=function(t){return typeof t=="number"},eh=function(t){return typeof t>"u"},wi=function(t){return typeof t=="object"},Pn=function(t){return t!==!1},nh=function(){return typeof window<"u"},Ro=function(t){return Ie(t)||Qe(t)},np=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,_u=/(?:-?\.?\d|\.)+/gi,ip=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,oc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rp=/[+-]=-?[.\d]+/,sp=/[^,'"\[\]\s]+/gi,lS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,_i,gu,ih,Yn={},sl={},ap,op=function(t){return(sl=Kr(t,Yn))&&Un},rh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Fa=function(t,e){return!e&&console.warn(t)},lp=function(t,e){return t&&(Yn[t]=e)&&sl&&(sl[t]=e)||Yn},Ba=function(){return 0},cS={suppressEvents:!0,isStart:!0,kill:!1},jo={suppressEvents:!0,kill:!1},uS={suppressEvents:!0},sh={},dr=[],vu={},cp,Hn={},lc={},Uf=30,Zo=[],ah="",oh=function(t){var e=t[0],n,i;if(wi(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Zo.length;i--&&!Zo[i].targetTest(e););n=Zo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ip(t[i],n)))||t.splice(i,1);return t},Hr=function(t){return t._gsap||oh(ii(t))[0]._gsap},up=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():eh(n)&&t.getAttribute&&t.getAttribute(e)||n},Dn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ne=function(t){return Math.round(t*1e5)/1e5||0},Ke=function(t){return Math.round(t*1e7)/1e7||0},Ns=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},hS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},al=function(){var t=dr.length,e=dr.slice(0),n,i;for(vu={},dr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hp=function(t,e,n,i){dr.length&&!cn&&al(),t.render(e,n,cn&&e<0&&(t._initted||t._startAt)),dr.length&&!cn&&al()},fp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(sp).length<2?e:Qe(t)?t.trim():t},dp=function(t){return t},si=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},fS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Kr=function(t,e){for(var n in e)t[n]=e[n];return t},Nf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=wi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ol=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ya=function(t){var e=t.parent||Re,n=t.keyframes?fS(un(t.keyframes)):si;if(Pn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},dS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},pp=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},vr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},pS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},xu=function(t,e,n,i){return t._startAt&&(cn?t._startAt.revert(jo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},mS=function r(t){return!t||t._ts&&r(t.parent)},Of=function(t){return t._repeat?$s(t._tTime,t=t.duration()+t._rDelay)*t:0},$s=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ll=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},bl=function(t){return t._end=Ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Al=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ke(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),bl(t),n._dirty||Vr(n,t)),t},mp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ll(t.rawTime(),e),(!e._dur||Ka(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),Vr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},xi=function(t,e,n,i){return e.parent&&vr(e),e._start=Ke((qi(n)?n:n||t!==Re?Kn(t,n,e):t._time)+e._delay),e._end=Ke(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),pp(t,e,"_first","_last",t._sort?"_start":0),Mu(e)||(t._recent=e),i||mp(t,e),t._ts<0&&Al(t,t._tTime),t},_p=function(t,e){return(Yn.ScrollTrigger||rh("scrollTrigger",e))&&Yn.ScrollTrigger.create(e,t)},gp=function(t,e,n,i,s){if(ch(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&cp!==Vn.frame)return dr.push(t),t._lazy=[s,i],1},_S=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Mu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},gS=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&_S(t)&&!(!t._initted&&Mu(t))||(t._ts<0||t._dp._ts<0)&&!Mu(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Ka(0,t._tDur,e),u=$s(l,o),t._yoyo&&u&1&&(a=1-a),u!==$s(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||cn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&gp(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&xu(t,e,n,!0),t._onUpdate&&!n&&Wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&vr(t,1),!n&&!cn&&(Wn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},vS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ks=function(t,e,n,i){var s=t._repeat,a=Ke(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ke(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Al(t,t._tTime=t._tDur*o),t.parent&&bl(t),n||Vr(t.parent,t),t},Ff=function(t){return t instanceof Mn?Vr(t):Ks(t,t._dur)},xS={_start:0,endTime:Ba,totalDuration:Ba},Kn=function r(t,e,n){var i=t.labels,s=t._recent||xS,a=t.duration()>=ni?s.endTime(!1):t._dur,o,l,c;return Qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ea=function(t,e,n){var i=qi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;a.immediateRender=Pn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ke(e[0],a,e[s+1])},Sr=function(t,e){return t||t===0?e(t):e},Ka=function(t,e,n){return n<t?t:n>e?e:n},ln=function(t,e){return!Qe(t)||!(e=lS.exec(t))?"":e[1]},MS=function(t,e,n){return Sr(n,function(i){return Ka(t,e,i)})},Su=[].slice,vp=function(t,e){return t&&wi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&wi(t[0]))&&!t.nodeType&&t!==_i},SS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Qe(i)&&!e||vp(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(t,e,n){return be&&!e&&be.selector?be.selector(t):Qe(t)&&!n&&(gu||!Js())?Su.call((e||ih).querySelectorAll(t),0):un(t)?SS(t,n):vp(t)?Su.call(t,0):t?[t]:[]},yu=function(t){return t=ii(t)[0]||Fa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?Fa("Invalid scope")||ih.createElement("div"):t)}},xp=function(t){return t.sort(function(){return .5-Math.random()})},Mp=function(t){if(Ie(t))return t;var e=wi(t)?t:{each:t},n=Gr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Qe(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||e).length,m=a[_],p,T,E,x,R,A,b,C,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,ni])[1],!M){for(b=-ni;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*u-.5:i%M,T=M===ni?0:l?_*h/M-.5:i/M|0,b=0,C=ni,A=0;A<_;A++)E=A%M-p,x=T-(A/M|0),m[A]=R=c?Math.abs(c==="y"?x:E):ep(E*E+x*x),R>b&&(b=R),R<C&&(C=R);i==="random"&&xp(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ln(e.amount||e.each)||0,n=n&&_<0?Pp(n):n}return _=(m[d]-m.min)/m.max||0,Ke(m.b+(n?n(_):_)*m.v)+m.u}},Eu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ke(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(qi(n)?0:ln(n))}},Sp=function(t,e){var n=un(t),i,s;return!n&&wi(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!qi(t[0]))&&(i*=i)):t=Eu(t.increment)),Sr(e,n?Ie(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ni,u=0,h=t.length,d,f;h--;)s?(d=t[h].x-o,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:a,s||u===a||qi(a)?u:u+ln(a)}:Eu(t))},yp=function(t,e,n,i){return Sr(un(t)?!e:n===!0?!!(n=0):!i,function(){return un(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},yS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},ES=function(t,e){return function(n){return t(parseFloat(n))+(e||ln(n))}},TS=function(t,e,n){return Tp(t,e,0,1,n)},Ep=function(t,e,n){return Sr(n,function(i){return t[~~e(i)]})},bS=function r(t,e,n){var i=e-t;return un(t)?Ep(t,r(0,t.length),e):Sr(n,function(s){return(i+(s-t)%i)%i+t})},AS=function r(t,e,n){var i=e-t,s=i*2;return un(t)?Ep(t,r(0,t.length-1),e):Sr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},za=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?sp:_u),n+=t.substr(e,i-e)+yp(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Tp=function(t,e,n,i,s){var a=e-t,o=i-n;return Sr(s,function(l){return n+((l-t)/a*o||0)})},wS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=Qe(t),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(un(t)&&!un(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else i||(t=Kr(un(t)?[]:{},t));if(!u){for(l in e)lh.call(o,t,l,"get",e[l]);s=function(g){return fh(g,o)||(a?t.p:t)}}}return Sr(n,s)},Bf=function(t,e,n){var i=t.labels,s=ni,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Wn=function(t,e,n){var i=t.vars,s=i[e],a=be,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&dr.length&&al(),o&&(be=o),u=l?s.apply(c,l):s.call(c),be=a,u},da=function(t){return vr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!cn),t.progress()<1&&Wn(t,"onInterrupt"),t},Cs,bp=[],Ap=function(t){if(t)if(t=!t.name&&t.default||t,nh()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ba,render:fh,add:lh,kill:GS,modifier:VS,rawVars:0},a={targetTest:0,get:0,getSetter:hh,aliases:{},register:0};if(Js(),t!==i){if(Hn[e])return;si(i,si(ol(t,s),a)),Kr(i.prototype,Kr(s,ol(t,a))),Hn[i.prop=e]=i,t.targetTest&&(Zo.push(i),sh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}lp(e,i),t.register&&t.register(Un,i,Ln)}else bp.push(t)},xe=255,pa={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},cc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},wp=function(t,e,n){var i=t?qi(t)?[t>>16,t>>8&xe,t&xe]:0:pa.black,s,a,o,l,c,u,h,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),pa[t])i=pa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(_u),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=cc(l+1/3,s,a),i[1]=cc(l,s,a),i[2]=cc(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(ip),n&&i.length<4&&(i[3]=1),i}else i=t.match(_u)||pa.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/xe,a=i[1]/xe,o=i[2]/xe,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Rp=function(t){var e=[],n=[],i=-1;return t.split(pr).forEach(function(s){var a=s.match(Rs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},zf=function(t,e,n){var i="",s=(t+i).match(pr),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=wp(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Rp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(pr,"1").split(Rs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(pr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},pr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in pa)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),RS=/hsl[a]?\(/,Cp=function(t){var e=t.join(" "),n;if(pr.lastIndex=0,pr.test(e))return n=RS.test(e),t[1]=zf(t[1],n),t[0]=zf(t[0],n,Rp(t[1])),!0},ka,Vn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,g=function _(m){var p=r()-i,T=m===!0,E,x,R,A;if((p>t||p<0)&&(n+=p-e),i+=p,R=i-n,E=R-a,(E>0||T)&&(A=++h.frame,d=R-h.time*1e3,h.time=R=R/1e3,a+=E+(E>=s?4:s-E),x=1),T||(l=c(_)),x)for(f=0;f<o.length;f++)o[f](R,d,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){ap&&(!gu&&nh()&&(_i=gu=window,ih=_i.document||{},Yn.gsap=Un,(_i.gsapVersions||(_i.gsapVersions=[])).push(Un.version),op(sl||_i.GreenSockGlobals||!_i.gsap&&_i||{}),bp.forEach(Ap)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ka=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ka=0,c=Ba},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,T){var E=p?function(x,R,A,b){m(x,R,A,b),h.remove(E)}:m;return h.remove(m),o[T?"unshift":"push"](E),Js(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h}(),Js=function(){return!ka&&Vn.wake()},ae={},CS=/^[\d.\-M][\d.\-,\s]/,PS=/["']/g,DS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(PS,"").trim():+c,i=l.substr(o+1).trim();return e},LS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},IS=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[DS(e[1])]:LS(t).split(",").map(fp)):ae._CE&&CS.test(t)?ae._CE("",t):n},Pp=function(t){return function(e){return 1-t(1-e)}},Dp=function r(t,e){for(var n=t._first,i;n;)n instanceof Mn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Gr=function(t,e){return t&&(Ie(t)?t:ae[t]||IS(t))||e},is=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Dn(t,function(o){ae[o]=Yn[o]=s,ae[a=o.toLowerCase()]=n;for(var l in s)ae[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[o+"."+l]=s[l]}),s},Lp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},uc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/mu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*oS((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Lp(o);return s=mu/s,l.config=function(c,u){return r(t,c,u)},l},hc=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Lp(n);return i.config=function(s){return r(t,s)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;is(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;is("Elastic",uc("in"),uc("out"),uc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};is("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);is("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});is("Circ",function(r){return-(ep(1-r*r)-1)});is("Sine",function(r){return r===1?1:-aS(r*rS)+1});is("Back",hc("in"),hc("out"),hc());ae.SteppedEase=ae.steps=Yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Se;return function(o){return((i*Ka(0,a,o)|0)+s)*n}}};Zs.ease=ae["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ah+=r+","+r+"Params,"});var Ip=function(t,e){this.id=sS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:up,this.set=e?e.getSetter:hh},Ha=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ks(this,+e.duration,1,1),this.data=e.data,be&&(this._ctx=be,be.data.push(this)),ka||Vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Al(this,n),!s._dp||s.parent||mp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Of(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Of(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$s(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(Ka(-Math.abs(this._delay),this._tDur,s),i!==!1),bl(this),pS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Pn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ll(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=uS);var i=cn;return cn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ff(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ff(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Kn(this,n),Pn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=Ie(n)?n:dp,o=function(){var c=i.then;i.then=null,Ie(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){da(this)},r}();si(Ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Mn=function(r){tp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Pn(n.sortChildren),Re&&xi(n.parent||Re,Oi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_p(Oi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ea(0,arguments,this),this},e.from=function(i,s,a){return Ea(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ea(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,Kn(this,a),1),this},e.call=function(i,s,a){return xi(this,ke.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ke(i,a,Kn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ya(a).immediateRender=Pn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ya(o).immediateRender=Pn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ke(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,T,E,x,R,A,b;if(this!==Re&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,x=this._start,E=this._ts,p=!E,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Ke(u%m),u===l?(_=this._repeat,d=c):(_=~~(u/m),_&&_===u/m&&(d=c,_--),d>c&&(d=c)),R=$s(this._tTime,m),!o&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),A&&_&1&&(d=c-d,b=1),_!==R&&!this._lock){var C=A&&R&1,M=C===(A&&_&1);if(_<R&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Ke(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Dp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=vS(this,Ke(o),Ke(d)),T&&(u-=d-(d=T._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!_&&(Wn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&T!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=-Se);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&T!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,a||cn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=v?-Se:Se);break}}f=g}}if(T&&!s&&(this.pause(),T.render(d>=o?0:-Se)._zTime=d>=o?1:-1,this._ts))return this._start=x,bl(this),this.render(i,s,a);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Wn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(qi(s)||(s=Kn(this,s,i)),!(i instanceof Ha)){if(un(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Qe(i))return this.addLabel(i,s);if(Ie(i))i=ke.delayedCall(0,i);else return this}return this!==i?xi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ni);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ke?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Qe(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(Tl(this,i),i===this._recent&&(this._recent=this._last),Vr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ke(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Kn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ke.delayedCall(0,s||Ba,a);return o.data="isPause",this._hasPause=1,xi(this,o,Kn(this,i))},e.removePause=function(i){var s=this._first;for(i=Kn(this,i);s;)s._start===i&&s.data==="isPause"&&vr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ar!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ii(i),l=this._first,c=qi(s),u;l;)l instanceof ke?hS(l._targets,o)&&(c?(!ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Kn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=ke.to(a,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Se,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ks(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,si({startAt:{time:Kn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Bf(this,Kn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Bf(this,Kn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Vr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=ni,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,xi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ks(a,a===Re&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Re._ts&&(hp(Re,ll(i,Re)),cp=Vn.frame),Vn.frame>=Uf){Uf+=Xn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&Xn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},t}(Ha);si(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var US=function(t,e,n,i,s,a,o){var l=new Ln(this._pt,t,e,0,1,zp,null,s),c=0,u=0,h,d,f,g,_,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=za(i)),a&&(T=[n,i],a(T,t,e),n=T[0],i=T[1]),d=n.match(oc)||[];h=oc.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ns(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=oc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(rp.test(i)||p)&&(l.e=0),this._pt=l,l},lh=function(t,e,n,i,s,a,o,l,c,u){Ie(i)&&(i=i(s||0,t,a));var h=t[e],d=n!=="get"?n:Ie(h)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=Ie(h)?c?zS:Fp:uh,g;if(Qe(i)&&(~i.indexOf("random(")&&(i=za(i)),i.charAt(1)==="="&&(g=Ns(d,i)+(ln(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Tu)return!isNaN(d*i)&&i!==""?(g=new Ln(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?HS:Bp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&rh(e,i),US.call(this,t,e,d,i,f,l||Xn.stringFilter,c))},NS=function(t,e,n,i,s){if(Ie(t)&&(t=Ta(t,s,e,n,i)),!wi(t)||t.style&&t.nodeType||un(t)||np(t))return Qe(t)?Ta(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ta(t[o],s,e,n,i);return a},Up=function(t,e,n,i,s,a){var o,l,c,u;if(Hn[t]&&(o=new Hn[t]).init(s,o.rawVars?e[t]:NS(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ln(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ar,Tu,ch=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,T=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!th,x=t.timeline,R,A,b,C,M,v,P,U,F,G,q,V,Y;if(x&&(!d||!s)&&(s="none"),t._ease=Gr(s,Zs.ease),t._yEase=h?Pp(Gr(h===!0?s:h,Zs.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(U=m[0]?Hr(m[0]).harness:0,V=U&&i[U.prop],R=ol(i,sh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?jo:cS),_._lazy=0),a){if(vr(t._startAt=ke.set(m,si({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn||!o&&!f)&&t._startAt.revert(jo),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),b=si({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Pn(l),immediateRender:o,stagger:0,parent:p},R),V&&(b[U.prop]=V),vr(t._startAt=ke.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn?t._startAt.revert(jo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Pn(l)||l&&!g,A=0;A<m.length;A++){if(M=m[A],P=M._gsap||oh(m)[A]._gsap,t._ptLookup[A]=G={},vu[P.id]&&dr.length&&al(),q=T===m?A:T.indexOf(M),U&&(F=new U).init(M,V||R,t,q,T)!==!1&&(t._pt=C=new Ln(t._pt,M,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(z){G[z]=C}),F.priority&&(v=1)),!U||V)for(b in R)Hn[b]&&(F=Up(b,R,t,q,M,T))?F.priority&&(v=1):G[b]=C=lh.call(t,M,b,"get",R[b],q,T,0,i.stringFilter);t._op&&t._op[A]&&t.kill(M,t._op[A]),E&&t._pt&&(ar=t,Re.killTweensOf(M,G,t.globalTime(e)),Y=!t.parent,ar=0),t._pt&&l&&(vu[P.id]=1)}v&&kp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,d&&e<=0&&x.render(ni,!0,!0)},OS=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Tu=1,t.vars[e]="+=0",ch(t,o),Tu=0,l?Fa(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ne(n)+ln(h.e)),h.b&&(h.b=u.s+ln(h.b))},FS=function(t,e){var n=t[0]?Hr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Kr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},BS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(un(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ta=function(t,e,n,i,s){return Ie(t)?t.call(e,n,i,s):Qe(t)&&~t.indexOf("random(")?za(t):t},Np=ah+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Op={};Dn(Np+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Op[r]=1});var ke=function(r){tp(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ya(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=i.parent||Re,E=(un(n)||np(n)?qi(n[0]):"length"in i)?[n]:ii(n),x,R,A,b,C,M,v,P;if(o._targets=E.length?oh(E):Fa("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Ro(c)||Ro(u)){if(i=o.vars,x=o.timeline=new Mn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:E}),x.kill(),x.parent=x._dp=Oi(o),x._start=0,d||Ro(c)||Ro(u)){if(b=E.length,v=d&&Mp(d),wi(d))for(C in d)~Np.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(R=0;R<b;R++)A=ol(i,Op),A.stagger=0,p&&(A.yoyoEase=p),P&&Kr(A,P),M=E[R],A.duration=+Ta(c,Oi(o),R,M,E),A.delay=(+Ta(u,Oi(o),R,M,E)||0)-o._delay,!d&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(M,A,v?v(R,M,E):0),x._ease=ae.none;x.duration()?c=u=0:o.timeline=0}else if(g){ya(si(x.vars.defaults,{ease:"none"})),x._ease=Gr(g.ease||i.ease||"none");var U=0,F,G,q;if(un(g))g.forEach(function(V){return x.to(E,V,">")}),x.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||BS(C,g[C],A,g.easeEach);for(C in A)for(F=A[C].sort(function(V,Y){return V.t-Y.t}),U=0,R=0;R<F.length;R++)G=F[R],q={ease:G.e,duration:(G.t-(R?F[R-1].t:0))/100*c},q[C]=G.v,x.to(E,q,U),U+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!th&&(ar=Oi(o),Re.killTweensOf(E),ar=0),xi(T,Oi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Ke(T._time)&&Pn(h)&&mS(Oi(o))&&T.data!=="nested")&&(o._tTime=-Se,o.render(Math.max(0,-u)||0)),m&&_p(Oi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Se&&!u?l:i<Se?0:i,d,f,g,_,m,p,T,E,x;if(!c)gS(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=Ke(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===Ke(h/_)&&(d=c,g--),d>c&&(d=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=c-d),m=$s(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(E&&this._yEase&&Dp(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Ke(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(gp(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(x||this._ease)(d/c),this._from&&(this.ratio=T=1-T),d&&!o&&!s&&!g&&(Wn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(T,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&xu(this,i,s,a),Wn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&xu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ka||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ch(this,c),u=this._ease(c/this._dur),OS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Al(this,0),this.parent||pp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ar&&ar.vars.overwrite!==!0)._first||da(this),this.parent&&a!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ii(i):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&dS(o,l))return s==="all"&&(this._pt=0),da(this);for(h=this._op=this._op||[],s!=="all"&&(Qe(s)&&(_={},Dn(s,function(T){return _[T]=1}),s=_),s=FS(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Tl(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&da(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ea(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ea(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Re.killTweensOf(i,s,a)},t}(Ha);si(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new Mn,e=Su.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var uh=function(t,e,n){return t[e]=n},Fp=function(t,e,n){return t[e](n)},zS=function(t,e,n,i){return t[e](i.fp,n)},kS=function(t,e,n){return t.setAttribute(e,n)},hh=function(t,e){return Ie(t[e])?Fp:eh(t[e])&&t.setAttribute?kS:uh},Bp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},HS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},zp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},fh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},VS=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},GS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},WS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},kp=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Ln=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Bp,this.d=l||this,this.set=c||uh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=WS,this.m=n,this.mt=s,this.tween=i},r}();Dn(ah+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return sh[r]=1});Yn.TweenMax=Yn.TweenLite=ke;Yn.TimelineLite=Yn.TimelineMax=Mn;Re=new Mn({sortChildren:!1,defaults:Zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=Cp;var Wr=[],$o={},XS=[],kf=0,YS=0,fc=function(t){return($o[t]||XS).map(function(e){return e()})},bu=function(){var t=Date.now(),e=[];t-kf>2&&(fc("matchMediaInit"),Wr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=_i.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),fc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kf=t,fc("matchMedia"))},Hp=function(){function r(e,n){this.selector=n&&yu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=YS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ie(n)&&(s=i,i=n,n=Ie);var a=this,o=function(){var c=be,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=yu(s)),be=a,h=i.apply(a,arguments),Ie(h)&&a._r.push(h),be=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ie?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=be;be=null,n(this),be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Wr.length;a--;)Wr[a].id===this.id&&Wr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),qS=function(){function r(e){this.contexts=[],this.scope=e,be&&be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){wi(n)||(n={matches:n});var a=new Hp(0,s||this.scope),o=a.conditions={},l,c,u;be&&!a.selector&&(a.selector=be.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=_i.matchMedia(n[c]),l&&(Wr.indexOf(a)<0&&Wr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(bu):l.addEventListener("change",bu)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),cl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ap(i)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Qe(t)&&(t=ii(t)[0]);var s=Hr(t||{}).get,a=n?dp:fp;return n==="native"&&(n=""),t&&(e?a((Hn[e]&&Hn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Hn[o]&&Hn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(u){return Un.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Hn[e],o=Hr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Cs._pt=0,h.init(t,n?u+n:u,Cs,0,[t]),h.render(1,h),Cs._pt&&fh(1,Cs)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Un.to(t,Kr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gr(t.ease,Zs.ease)),Nf(Zs,t||{})},config:function(t){return Nf(Xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Hn[o]&&!Yn[o]&&Fa(e+" effect requires "+o+" plugin.")}),lc[e]=function(o,l,c){return n(ii(o),si(l||{},s),c)},a&&(Mn.prototype[e]=function(o,l,c){return this.add(lc[e](o,wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=Gr(e)},parseEase:function(t,e){return arguments.length?Gr(t,e):ae},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Mn(t),i,s;for(n.smoothChildTiming=Pn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=s;return xi(Re,n,0),n},context:function(t,e){return t?new Hp(t,e):be},matchMedia:function(t){return new qS(t)},matchMediaRefresh:function(){return Wr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||bu()},addEventListener:function(t,e){var n=$o[t]||($o[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=$o[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:bS,wrapYoyo:AS,distribute:Mp,random:yp,snap:Sp,normalize:TS,getUnit:ln,clamp:MS,splitColor:wp,toArray:ii,selector:yu,mapRange:Tp,pipe:yS,unitize:ES,interpolate:wS,shuffle:xp},install:op,effects:lc,ticker:Vn,updateRoot:Mn.updateRoot,plugins:Hn,globalTimeline:Re,core:{PropTween:Ln,globals:lp,Tween:ke,Timeline:Mn,Animation:Ha,getCache:Hr,_removeLinkedListItem:Tl,reverting:function(){return cn},context:function(t){return t&&be&&(be.data.push(t),t._ctx=be),be},suppressOverwrites:function(t){return th=t}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=ke[r]});Vn.add(Mn.updateRoot);Cs=cl.to({},{duration:0});var jS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ZS=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=jS(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},dc=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Qe(s)&&(l={},Dn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}ZS(o,s)}}}},Un=cl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},dc("roundProps",Eu),dc("modifiers"),dc("snap",Sp))||cl;ke.version=Mn.version=Un.version="3.12.5";ap=1;nh()&&Js();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hf,or,Os,dh,zr,Vf,ph,$S=function(){return typeof window<"u"},ji={},Lr=180/Math.PI,Fs=Math.PI/180,xs=Math.atan2,Gf=1e8,mh=/([A-Z])/g,KS=/(left|right|width|margin|padding|x)/i,JS=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Au=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},QS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ty=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ey=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Vp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Gp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ny=function(t,e,n){return t.style[e]=n},iy=function(t,e,n){return t.style.setProperty(e,n)},ry=function(t,e,n){return t._gsap[e]=n},sy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ay=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},oy=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ce="transform",In=Ce+"Origin",ly=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ji&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Si[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Fi(i,o)}):this.tfm[t]=a.x?a[t]:Fi(i,t),t===In&&(this.tfm.zOrigin=a.zOrigin);else return Si.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ce)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(In,e,"")),t=Ce}(s||e)&&this.props.push(t,e,s[t])},Wp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},cy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(mh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ph(),(!s||!s.isStart)&&!n[Ce]&&(Wp(n),i.zOrigin&&n[In]&&(n[In]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xp=function(t,e){var n={target:t,props:[],revert:cy,save:ly};return t._gsap||Un.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Yp,wu=function(t,e){var n=or.createElementNS?or.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):or.createElement(t);return n&&n.style?n:or.createElement(t)},Ti=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(mh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Qs(e)||e,1)||""},Wf="O,Moz,ms,Ms,Webkit".split(","),Qs=function(t,e,n){var i=e||zr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Wf[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Wf[a]:"")+t},Ru=function(){$S()&&window.document&&(Hf=window,or=Hf.document,Os=or.documentElement,zr=wu("div")||{style:{}},wu("div"),Ce=Qs(Ce),In=Ce+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yp=!!Qs("perspective"),ph=Un.core.reverting,dh=1)},pc=function r(t){var e=wu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Os.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Os.removeChild(e),this.style.cssText=s,a},Xf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},qp=function(t){var e;try{e=t.getBBox()}catch{e=pc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===pc||(e=pc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Xf(t,["x","cx","x1"])||0,y:+Xf(t,["y","cy","y1"])||0,width:0,height:0}:e},jp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&qp(t))},Jr=function(t,e){if(e){var n=t.style,i;e in ji&&e!==In&&(e=Ce),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(mh,"-$1").toLowerCase())):n.removeAttribute(e)}},lr=function(t,e,n,i,s,a){var o=new Ln(t._pt,e,n,0,1,a?Gp:Vp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Yf={deg:1,rad:1,turn:1},uy={grid:1,flex:1},xr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=zr.style,l=KS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||Yf[i]||Yf[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&jp(t),(f||a==="%")&&(ji[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],Ne(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===or||!_.appendChild)&&(_=or.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Vn.time&&!m.uncache)return Ne(s/m.width*h);if(f&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=h+i,g=t[u],T?t.style[e]=T:Jr(t,e)}else(f||a==="%")&&!uy[Ti(_,"display")]&&(o.position=Ti(t,"position")),_===t&&(o.position="static"),_.appendChild(zr),g=zr[u],_.removeChild(zr),o.position="absolute";return l&&f&&(m=Hr(_),m.time=Vn.time,m.width=_[u]),Ne(d?g*s/h:g&&s?h/g*s:0)},Fi=function(t,e,n,i){var s;return dh||Ru(),e in Si&&e!=="transform"&&(e=Si[e],~e.indexOf(",")&&(e=e.split(",")[0])),ji[e]&&e!=="transform"?(s=Ga(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:hl(Ti(t,In))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ul[e]&&ul[e](t,e,n)||Ti(t,e)||up(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xr(t,e,s,n)+n:s},hy=function(t,e,n,i){if(!n||n==="none"){var s=Qs(e,t,1),a=s&&Ti(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Ti(t,"borderTopColor"))}var o=new Ln(this._pt,t.style,e,0,1,zp),l=0,c=0,u,h,d,f,g,_,m,p,T,E,x,R;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Ti(t,e)||i,_?t.style[e]=_:Jr(t,e)),u=[n,i],Cp(u),n=u[0],i=u[1],d=n.match(Rs)||[],R=i.match(Rs)||[],R.length){for(;h=Rs.exec(i);)m=h[0],T=i.substring(l,h.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ns(f,m)+x),p=parseFloat(m),E=m.substr((p+"").length),l=Rs.lastIndex-E.length,E||(E=E||Xn.units[e]||x,l===i.length&&(i+=E,o.e+=E)),x!==E&&(f=xr(t,e,_,E)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Gp:Vp;return rp.test(i)&&(o.e=0),this._pt=o,o},qf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=qf[n]||n,e[1]=qf[i]||i,e.join(" ")},dy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ji[o]&&(l=1,o=o==="transformOrigin"?In:Ce),Jr(n,o);l&&(Jr(n,Ce),a&&(a.svg&&n.removeAttribute("transform"),Ga(n,1),a.uncache=1,Wp(i)))}},ul={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Ln(t._pt,e,n,0,0,dy);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Va=[1,0,0,1,0,0],Zp={},$p=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},jf=function(t){var e=Ti(t,Ce);return $p(e)?Va:e.substr(7).match(ip).map(Ne)},_h=function(t,e){var n=t._gsap||Hr(t),i=t.style,s=jf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Va:s):(s===Va&&!t.offsetParent&&t!==Os&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Os.appendChild(t)),s=jf(t),l?i.display=l:Jr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Os.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cu=function(t,e,n,i,s,a){var o=t._gsap,l=s||_h(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],E=e.split(" "),x=parseFloat(E[0])||0,R=parseFloat(E[1])||0,A,b,C,M;n?l!==Va&&(b=f*m-g*_)&&(C=x*(m/b)+R*(-_/b)+(_*T-m*p)/b,M=x*(-g/b)+R*(f/b)-(f*T-g*p)/b,x=C,R=M):(A=qp(t),x=A.x+(~E[0].indexOf("%")?x/100*A.width:x),R=A.y+(~(E[1]||E[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&o.smooth?(p=x-c,T=R-u,o.xOffset=h+(p*f+T*_)-p,o.yOffset=d+(p*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=R,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[In]="0px 0px",a&&(lr(a,o,"xOrigin",c,x),lr(a,o,"yOrigin",u,R),lr(a,o,"xOffset",h,o.xOffset),lr(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+R)},Ga=function(t,e){var n=t._gsap||new Ip(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Ti(t,In)||"0",u,h,d,f,g,_,m,p,T,E,x,R,A,b,C,M,v,P,U,F,G,q,V,Y,z,nt,D,ut,It,Zt,Z,et;return u=h=d=_=m=p=T=E=x=0,f=g=1,n.svg=!!(t.getCTM&&jp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ce]!=="none"?l[Ce]:"")),i.scale=i.rotate=i.translate="none"),b=_h(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Cu(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,A=n.yOrigin||0,b!==Va&&(P=b[0],U=b[1],F=b[2],G=b[3],u=q=b[4],h=V=b[5],b.length===6?(f=Math.sqrt(P*P+U*U),g=Math.sqrt(G*G+F*F),_=P||U?xs(U,P)*Lr:0,T=F||G?xs(F,G)*Lr+_:0,T&&(g*=Math.abs(Math.cos(T*Fs))),n.svg&&(u-=R-(R*P+A*F),h-=A-(R*U+A*G))):(et=b[6],Zt=b[7],D=b[8],ut=b[9],It=b[10],Z=b[11],u=b[12],h=b[13],d=b[14],C=xs(et,It),m=C*Lr,C&&(M=Math.cos(-C),v=Math.sin(-C),Y=q*M+D*v,z=V*M+ut*v,nt=et*M+It*v,D=q*-v+D*M,ut=V*-v+ut*M,It=et*-v+It*M,Z=Zt*-v+Z*M,q=Y,V=z,et=nt),C=xs(-F,It),p=C*Lr,C&&(M=Math.cos(-C),v=Math.sin(-C),Y=P*M-D*v,z=U*M-ut*v,nt=F*M-It*v,Z=G*v+Z*M,P=Y,U=z,F=nt),C=xs(U,P),_=C*Lr,C&&(M=Math.cos(C),v=Math.sin(C),Y=P*M+U*v,z=q*M+V*v,U=U*M-P*v,V=V*M-q*v,P=Y,q=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Ne(Math.sqrt(P*P+U*U+F*F)),g=Ne(Math.sqrt(V*V+et*et)),C=xs(q,V),T=Math.abs(C)>2e-4?C*Lr:0,x=Z?1/(Z<0?-Z:Z):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!$p(Ti(t,Ce)),Y&&t.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(f*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ne(f),n.scaleY=Ne(g),n.rotation=Ne(_)+o,n.rotationX=Ne(m)+o,n.rotationY=Ne(p)+o,n.skewX=T+o,n.skewY=E+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[In]=hl(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?my:Yp?Kp:py,n.uncache=0,n},hl=function(t){return(t=t.split(" "))[0]+" "+t[1]},mc=function(t,e,n){var i=ln(e);return Ne(parseFloat(e)+parseFloat(xr(t,"x",n+"px",i)))+i},py=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Kp(t,e)},Cr="0deg",ca="0px",Pr=") ",Kp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,E=n.zOrigin,x="",R=p==="auto"&&t&&t!==1||p===!0;if(E&&(h!==Cr||u!==Cr)){var A=parseFloat(u)*Fs,b=Math.sin(A),C=Math.cos(A),M;A=parseFloat(h)*Fs,M=Math.cos(A),a=mc(T,a,b*M*-E),o=mc(T,o,-Math.sin(A)*-E),l=mc(T,l,C*M*-E+E)}m!==ca&&(x+="perspective("+m+Pr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(R||a!==ca||o!==ca||l!==ca)&&(x+=l!==ca||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Pr),c!==Cr&&(x+="rotate("+c+Pr),u!==Cr&&(x+="rotateY("+u+Pr),h!==Cr&&(x+="rotateX("+h+Pr),(d!==Cr||f!==Cr)&&(x+="skew("+d+", "+f+Pr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Pr),T.style[Ce]=x||"translate(0, 0)"},my=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,E=parseFloat(a),x=parseFloat(o),R,A,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fs,c*=Fs,R=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Fs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,A*=M)),R=Ne(R),A=Ne(A),b=Ne(b),C=Ne(C)):(R=h,C=d,A=b=0),(E&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(E=xr(f,"x",a,"px"),x=xr(f,"y",o,"px")),(g||_||m||p)&&(E=Ne(E+g-(g*R+_*b)+m),x=Ne(x+_-(g*A+_*C)+p)),(i||s)&&(M=f.getBBox(),E=Ne(E+i/100*M.width),x=Ne(x+s/100*M.height)),M="matrix("+R+","+A+","+b+","+C+","+E+","+x+")",f.setAttribute("transform",M),T&&(f.style[Ce]=M)},_y=function(t,e,n,i,s){var a=360,o=Qe(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Lr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Gf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Gf)%a-~~(c/a)*a)),t._pt=d=new Ln(t._pt,e,n,i,c,QS),d.e=u,d.u="deg",t._props.push(n),d},Zf=function(t,e){for(var n in e)t[n]=e[n];return t},gy=function(t,e,n){var i=Zf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ce]=e,o=Ga(n,1),Jr(n,Ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ce],a[Ce]=e,o=Ga(n,1),a[Ce]=c);for(l in ji)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=ln(c),g=ln(u),h=f!==g?xr(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new Ln(t._pt,o,l,h,d-h,Au),t._pt.u=g||0,t._props.push(l));Zf(o,i)};Dn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ul[t>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return Fi(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var Jp={name:"css",register:Ru,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,T,E,x,R,A,b,C;dh||Ru(),this.styles=this.styles||Xp(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Hn[_]&&Up(_,e,n,i,t,s)))){if(f=typeof u,g=ul[_],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=za(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",pr.lastIndex=0,pr.test(c)||(m=ln(c),p=ln(u)),p?m!==p&&(c=xr(t,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Qe(c)&&~c.indexOf("random(")&&(c=za(c)),ln(c+"")||c==="auto"||(c+=Xn.units[_]||ln(Fi(t,_))||""),(c+"").charAt(1)==="="&&(c=Fi(t,_))):c=Fi(t,_),d=parseFloat(c),T=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),_ in Si&&(_==="autoAlpha"&&(d===1&&Fi(t,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),lr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in ji,E){if(this.styles.save(_),x||(R=t._gsap,R.renderTransform&&!e.parseTransform||Ga(t,e.parseTransform),A=e.smoothOrigin!==!1&&R.smooth,x=this._pt=new Ln(this._pt,o,Ce,0,1,R.renderTransform,R,0,-1),x.dep=1),_==="scale")this._pt=new Ln(this._pt,R,"scaleY",R.scaleY,(T?Ns(R.scaleY,T+h):h)-R.scaleY||0,Au),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(In,0,o[In]),u=fy(u),R.svg?Cu(t,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&lr(this,R,"zOrigin",R.zOrigin,p),lr(this,o,_,hl(c),hl(u)));continue}else if(_==="svgOrigin"){Cu(t,u,1,A,0,this);continue}else if(_ in Zp){_y(this,R,_,d,T?Ns(d,T+u):u);continue}else if(_==="smoothOrigin"){lr(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){gy(this,u,t);continue}}else _ in o||(_=Qs(_)||_);if(E||(h||h===0)&&(d||d===0)&&!JS.test(u)&&_ in o)m=(c+"").substr((d+"").length),h||(h=0),p=ln(u)||(_ in Xn.units?Xn.units[_]:m),m!==p&&(d=xr(t,_,c,p)),this._pt=new Ln(this._pt,E?R:o,_,d,(T?Ns(d,T+h):h)-d,!E&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?ey:Au),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ty);else if(_ in o)hy.call(this,t,_,c,T?T+u:u);else if(_ in t)this.add(t,_,c||t[_],T?T+u:u,i,s);else if(_!=="parseTransform"){rh(_,u);continue}E||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||t[_])),a.push(_)}}b&&kp(this)},render:function(t,e){if(e.tween._time||!ph())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Fi,aliases:Si,getSetter:function(t,e,n){var i=Si[e];return i&&i.indexOf(",")<0&&(e=i),e in ji&&e!==In&&(t._gsap.x||Fi(t,"x"))?n&&Vf===n?e==="scale"?sy:ry:(Vf=n||{})&&(e==="scale"?ay:oy):t.style&&!eh(t.style[e])?ny:~e.indexOf("-")?iy:hh(t,e)},core:{_removeProperty:Jr,_getMatrix:_h}};Un.utils.checkPrefix=Qs;Un.core.getStyleSaver=Xp;(function(r,t,e,n){var i=Dn(r+","+t+","+e,function(s){ji[s]=1});Dn(t,function(s){Xn.units[s]="deg",Zp[s]=1}),Si[i[13]]=r+","+t,Dn(n,function(s){var a=s.split(":");Si[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xn.units[r]="px"});Un.registerPlugin(Jp);var Ja=Un.registerPlugin(Jp)||Un;Ja.core.Tween;function vy(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function xy(r,t,e){return t&&vy(r.prototype,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var en,Ko,Gn,cr,ur,Bs,Qp,Ir,ba,tm,Vi,ui,em,nm=function(){return en||typeof window<"u"&&(en=window.gsap)&&en.registerPlugin&&en},im=1,Ps=[],ee=[],bi=[],Aa=Date.now,Pu=function(t,e){return e},My=function(){var t=ba.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,bi),ee=n,bi=i,Pu=function(a,o){return e[a](o)}},mr=function(t,e){return~bi.indexOf(t)&&bi[bi.indexOf(t)+1][e]},wa=function(t){return!!~tm.indexOf(t)},mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Co="scrollLeft",Po="scrollTop",Du=function(){return Vi&&Vi.isPressed||ee.cache++},fl=function(t,e){var n=function i(s){if(s||s===0){im&&(Gn.history.scrollRestoration="manual");var a=Vi&&Vi.isPressed;s=i.v=Math.round(s)||(Vi&&Vi.iOS?1:0),t(s),i.cacheID=ee.cache,a&&Pu("ss",s)}else(e||ee.cache!==i.cacheID||Pu("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Sn={s:Co,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(r){return arguments.length?Gn.scrollTo(r,Xe.sc()):Gn.pageXOffset||cr[Co]||ur[Co]||Bs[Co]||0})},Xe={s:Po,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:fl(function(r){return arguments.length?Gn.scrollTo(Sn.sc(),r):Gn.pageYOffset||cr[Po]||ur[Po]||Bs[Po]||0})},wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||en.utils.toArray)(t)[0]||(typeof t=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Mr=function(t,e){var n=e.s,i=e.sc;wa(t)&&(t=cr.scrollingElement||ur);var s=ee.indexOf(t),a=i===Xe.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+a]||mn(t,"scroll",Du);var o=ee[s+a],l=o||(ee[s+a]=fl(mr(t,n),!0)||(wa(t)?i:fl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=en.getProperty(t,"scrollBehavior")==="smooth"),l},Lu=function(t,e,n){var i=t,s=t,a=Aa(),o=a,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=Aa();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},d=function(g){var _=o,m=s,p=Aa();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:d}},ua=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},$f=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},rm=function(){ba=en.core.globals().ScrollTrigger,ba&&ba.core&&My()},sm=function(t){return en=t||nm(),!Ko&&en&&typeof document<"u"&&document.body&&(Gn=window,cr=document,ur=cr.documentElement,Bs=cr.body,tm=[Gn,cr,ur,Bs],en.utils.clamp,em=en.core.context||function(){},Ir="onpointerenter"in Bs?"pointer":"mouse",Qp=Oe.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ui=Oe.eventTypes=("ontouchstart"in ur?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ur?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return im=0},500),rm(),Ko=1),Ko};Sn.op=Xe;ee.cache=0;var Oe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Ko||sm(en)||console.warn("Please gsap.registerPlugin(Observer)"),ba||rm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,E=n.onPress,x=n.onRelease,R=n.onRight,A=n.onLeft,b=n.onUp,C=n.onDown,M=n.onChangeX,v=n.onChangeY,P=n.onChange,U=n.onToggleX,F=n.onToggleY,G=n.onHover,q=n.onHoverEnd,V=n.onMove,Y=n.ignoreCheck,z=n.isNormalizer,nt=n.onGestureStart,D=n.onGestureEnd,ut=n.onWheel,It=n.onEnable,Zt=n.onDisable,Z=n.onClick,et=n.scrollSpeed,_t=n.capture,it=n.allowClicks,Et=n.lockAxis,At=n.onLockAxis;this.target=o=wn(o)||ur,this.vars=n,f&&(f=en.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,et=et||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(Bs).lineHeight)||22);var kt,$t,Ht,Pt,I,_e,Ft,B=this,Mt=0,re=0,Tt=n.passive||!u,w=Mr(o,Sn),S=Mr(o,Xe),k=w(),Q=S(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ui[0]==="pointerdown",$=wa(o),ht=o.ownerDocument||cr,at=[0,0,0],dt=[0,0,0],Gt=0,rt=function(){return Gt=Aa()},st=function(bt,Yt){return(B.event=bt)&&f&&~f.indexOf(bt.target)||Yt&&J&&bt.pointerType!=="touch"||Y&&Y(bt,Yt)},Dt=function(){B._vx.reset(),B._vy.reset(),$t.pause(),h&&h(B)},Lt=function(){var bt=B.deltaX=$f(at),Yt=B.deltaY=$f(dt),pt=Math.abs(bt)>=i,Vt=Math.abs(Yt)>=i;P&&(pt||Vt)&&P(B,bt,Yt,at,dt),pt&&(R&&B.deltaX>0&&R(B),A&&B.deltaX<0&&A(B),M&&M(B),U&&B.deltaX<0!=Mt<0&&U(B),Mt=B.deltaX,at[0]=at[1]=at[2]=0),Vt&&(C&&B.deltaY>0&&C(B),b&&B.deltaY<0&&b(B),v&&v(B),F&&B.deltaY<0!=re<0&&F(B),re=B.deltaY,dt[0]=dt[1]=dt[2]=0),(Pt||Ht)&&(V&&V(B),Ht&&(T(B),Ht=!1),Pt=!1),_e&&!(_e=!1)&&At&&At(B),I&&(ut(B),I=!1),kt=0},vt=function(bt,Yt,pt){at[pt]+=bt,dt[pt]+=Yt,B._vx.update(bt),B._vy.update(Yt),c?kt||(kt=requestAnimationFrame(Lt)):Lt()},Xt=function(bt,Yt){Et&&!Ft&&(B.axis=Ft=Math.abs(bt)>Math.abs(Yt)?"x":"y",_e=!0),Ft!=="y"&&(at[2]+=bt,B._vx.update(bt,!0)),Ft!=="x"&&(dt[2]+=Yt,B._vy.update(Yt,!0)),c?kt||(kt=requestAnimationFrame(Lt)):Lt()},Ot=function(bt){if(!st(bt,1)){bt=ua(bt,u);var Yt=bt.clientX,pt=bt.clientY,Vt=Yt-B.x,wt=pt-B.y,zt=B.isDragging;B.x=Yt,B.y=pt,(zt||Math.abs(B.startX-Yt)>=s||Math.abs(B.startY-pt)>=s)&&(T&&(Ht=!0),zt||(B.isDragging=!0),Xt(Vt,wt),zt||m&&m(B))}},oe=B.onPress=function(gt){st(gt,1)||gt&&gt.button||(B.axis=Ft=null,$t.pause(),B.isPressed=!0,gt=ua(gt),Mt=re=0,B.startX=B.x=gt.clientX,B.startY=B.y=gt.clientY,B._vx.reset(),B._vy.reset(),mn(z?o:ht,ui[1],Ot,Tt,!0),B.deltaX=B.deltaY=0,E&&E(B))},L=B.onRelease=function(gt){if(!st(gt,1)){dn(z?o:ht,ui[1],Ot,!0);var bt=!isNaN(B.y-B.startY),Yt=B.isDragging,pt=Yt&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Vt=ua(gt);!pt&&bt&&(B._vx.reset(),B._vy.reset(),u&&it&&en.delayedCall(.08,function(){if(Aa()-Gt>300&&!gt.defaultPrevented){if(gt.target.click)gt.target.click();else if(ht.createEvent){var wt=ht.createEvent("MouseEvents");wt.initMouseEvent("click",!0,!0,Gn,1,Vt.screenX,Vt.screenY,Vt.clientX,Vt.clientY,!1,!1,!1,!1,0,null),gt.target.dispatchEvent(wt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,h&&Yt&&!z&&$t.restart(!0),p&&Yt&&p(B),x&&x(B,pt)}},ct=function(bt){return bt.touches&&bt.touches.length>1&&(B.isGesturing=!0)&&nt(bt,B.isDragging)},j=function(){return(B.isGesturing=!1)||D(B)},K=function(bt){if(!st(bt)){var Yt=w(),pt=S();vt((Yt-k)*et,(pt-Q)*et,1),k=Yt,Q=pt,h&&$t.restart(!0)}},lt=function(bt){if(!st(bt)){bt=ua(bt,u),ut&&(I=!0);var Yt=(bt.deltaMode===1?l:bt.deltaMode===2?Gn.innerHeight:1)*g;vt(bt.deltaX*Yt,bt.deltaY*Yt,0),h&&!z&&$t.restart(!0)}},ft=function(bt){if(!st(bt)){var Yt=bt.clientX,pt=bt.clientY,Vt=Yt-B.x,wt=pt-B.y;B.x=Yt,B.y=pt,Pt=!0,h&&$t.restart(!0),(Vt||wt)&&Xt(Vt,wt)}},Bt=function(bt){B.event=bt,G(B)},ce=function(bt){B.event=bt,q(B)},Pe=function(bt){return st(bt)||ua(bt,u)&&Z(B)};$t=B._dc=en.delayedCall(d||.25,Dt).pause(),B.deltaX=B.deltaY=0,B._vx=Lu(0,50,!0),B._vy=Lu(0,50,!0),B.scrollX=w,B.scrollY=S,B.isDragging=B.isGesturing=B.isPressed=!1,em(this),B.enable=function(gt){return B.isEnabled||(mn($?ht:o,"scroll",Du),a.indexOf("scroll")>=0&&mn($?ht:o,"scroll",K,Tt,_t),a.indexOf("wheel")>=0&&mn(o,"wheel",lt,Tt,_t),(a.indexOf("touch")>=0&&Qp||a.indexOf("pointer")>=0)&&(mn(o,ui[0],oe,Tt,_t),mn(ht,ui[2],L),mn(ht,ui[3],L),it&&mn(o,"click",rt,!0,!0),Z&&mn(o,"click",Pe),nt&&mn(ht,"gesturestart",ct),D&&mn(ht,"gestureend",j),G&&mn(o,Ir+"enter",Bt),q&&mn(o,Ir+"leave",ce),V&&mn(o,Ir+"move",ft)),B.isEnabled=!0,gt&&gt.type&&oe(gt),It&&It(B)),B},B.disable=function(){B.isEnabled&&(Ps.filter(function(gt){return gt!==B&&wa(gt.target)}).length||dn($?ht:o,"scroll",Du),B.isPressed&&(B._vx.reset(),B._vy.reset(),dn(z?o:ht,ui[1],Ot,!0)),dn($?ht:o,"scroll",K,_t),dn(o,"wheel",lt,_t),dn(o,ui[0],oe,_t),dn(ht,ui[2],L),dn(ht,ui[3],L),dn(o,"click",rt,!0),dn(o,"click",Pe),dn(ht,"gesturestart",ct),dn(ht,"gestureend",j),dn(o,Ir+"enter",Bt),dn(o,Ir+"leave",ce),dn(o,Ir+"move",ft),B.isEnabled=B.isPressed=B.isDragging=!1,Zt&&Zt(B))},B.kill=B.revert=function(){B.disable();var gt=Ps.indexOf(B);gt>=0&&Ps.splice(gt,1),Vi===B&&(Vi=0)},Ps.push(B),z&&wa(o)&&(Vi=B),B.enable(_)},xy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Oe.version="3.12.5";Oe.create=function(r){return new Oe(r)};Oe.register=sm;Oe.getAll=function(){return Ps.slice()};Oe.getById=function(r){return Ps.filter(function(t){return t.vars.id===r})[0]};nm()&&en.registerPlugin(Oe);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var St,Ts,se,we,hi,Ee,am,dl,Wa,Ra,ma,Do,sn,wl,Iu,vn,Kf,Jf,bs,om,_c,lm,gn,Uu,cm,um,ir,Nu,gh,zs,vh,pl,Ou,gc,Lo=1,an=Date.now,vc=an(),ri=0,_a=0,Qf=function(t,e,n){var i=kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},td=function(t,e){return e&&(!kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Sy=function r(){return _a&&requestAnimationFrame(r)},ed=function(){return wl=1},nd=function(){return wl=0},gi=function(t){return t},ga=function(t){return Math.round(t*1e5)/1e5||0},hm=function(){return typeof window<"u"},fm=function(){return St||hm()&&(St=window.gsap)&&St.registerPlugin&&St},Qr=function(t){return!!~am.indexOf(t)},dm=function(t){return(t==="Height"?vh:se["inner"+t])||hi["client"+t]||Ee["client"+t]},pm=function(t){return mr(t,"getBoundingClientRect")||(Qr(t)?function(){return nl.width=se.innerWidth,nl.height=vh,nl}:function(){return zi(t)})},yy=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=mr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?dm(s):t["client"+s])||0}},Ey=function(t,e){return!e||~bi.indexOf(t)?pm(t):function(){return nl}},yi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=mr(t,n))?a()-pm(t)()[s]:Qr(t)?(hi[n]||Ee[n])-dm(i):t[n]-t["offset"+i])},Io=function(t,e){for(var n=0;n<bs.length;n+=3)(!e||~e.indexOf(bs[n+1]))&&t(bs[n],bs[n+1],bs[n+2])},kn=function(t){return typeof t=="string"},yn=function(t){return typeof t=="function"},va=function(t){return typeof t=="number"},Ur=function(t){return typeof t=="object"},ha=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},xc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ms=Math.abs,mm="left",_m="top",xh="right",Mh="bottom",Xr="width",Yr="height",Ca="Right",Pa="Left",Da="Top",La="Bottom",ze="padding",ti="margin",ta="Width",Sh="Height",We="px",ei=function(t){return se.getComputedStyle(t)},Ty=function(t){var e=ei(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},id=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},zi=function(t,e){var n=e&&ei(t)[Iu]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},ml=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},gm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},by=function(t){return function(e){return St.utils.snap(gm(t),e)}},yh=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},Ay=function(t){return function(e,n){return yh(gm(t))(e,n.direction)}},Uo=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},$e=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ze=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},No=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},rd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Oo={toggleActions:"play",anticipatePin:0},_l={top:0,left:0,center:.5,bottom:1,right:1},Jo=function(t,e){if(kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in _l?_l[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Fo=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=we.createElement("div"),_=Qr(n)||mr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?Ee:n,T=t.indexOf("start")!==-1,E=T?c:u,x="border-color:"+E+";font-size:"+h+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===Xe?xh:Mh)+":"+(a+parseFloat(d))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Qo(g,0,i,T),g},Qo=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ta]=1,s["border"+o+ta]=0,s[n.p]=e+"px",St.set(t,s)},Qt=[],Fu={},Xa,sd=function(){return an()-ri>34&&(Xa||(Xa=requestAnimationFrame(Wi)))},Ss=function(){(!gn||!gn.isPressed||gn.startX>Ee.clientWidth)&&(ee.cache++,gn?Xa||(Xa=requestAnimationFrame(Wi)):Wi(),ri||es("scrollStart"),ri=an())},Mc=function(){um=se.innerWidth,cm=se.innerHeight},xa=function(){ee.cache++,!sn&&!lm&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!Uu||um!==se.innerWidth||Math.abs(se.innerHeight-cm)>se.innerHeight*.25)&&dl.restart(!0)},ts={},wy=[],vm=function r(){return Ze(ie,"scrollEnd",r)||kr(!0)},es=function(t){return ts[t]&&ts[t].map(function(e){return e()})||wy},zn=[],xm=function(t){for(var e=0;e<zn.length;e+=5)(!t||zn[e+4]&&zn[e+4].query===t)&&(zn[e].style.cssText=zn[e+1],zn[e].getBBox&&zn[e].setAttribute("transform",zn[e+2]||""),zn[e+3].uncache=1)},Eh=function(t,e){var n;for(vn=0;vn<Qt.length;vn++)n=Qt[vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));pl=!0,e&&xm(e),e||es("revert")},Mm=function(t,e){ee.cache++,(e||!xn)&&ee.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),kn(t)&&(se.history.scrollRestoration=gh=t)},xn,qr=0,ad,Ry=function(){if(ad!==qr){var t=ad=qr;requestAnimationFrame(function(){return t===qr&&kr(!0)})}},Sm=function(){Ee.appendChild(zs),vh=!gn&&zs.offsetHeight||se.innerHeight,Ee.removeChild(zs)},od=function(t){return Wa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},kr=function(t,e){if(ri&&!t&&!pl){$e(ie,"scrollEnd",vm);return}Sm(),xn=ie.isRefreshing=!0,ee.forEach(function(i){return yn(i)&&++i.cacheID&&(i.rec=i())});var n=es("refreshInit");om&&ie.sort(),e||Eh(),ee.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qt.slice(0).forEach(function(i){return i.refresh()}),pl=!1,Qt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Ou=1,od(!0),Qt.forEach(function(i){var s=yi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),od(!1),Ou=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Mm(gh,1),dl.pause(),qr++,xn=2,Wi(2),Qt.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=ie.isRefreshing=!1,es("refresh")},Bu=0,tl=1,Ia,Wi=function(t){if(t===2||!xn&&!pl){ie.isUpdating=!0,Ia&&Ia.update(0);var e=Qt.length,n=an(),i=n-vc>=50,s=e&&Qt[0].scroll();if(tl=Bu>s?-1:1,xn||(Bu=s),i&&(ri&&!wl&&n-ri>200&&(ri=0,es("scrollEnd")),ma=vc,vc=n),tl<0){for(vn=e;vn-- >0;)Qt[vn]&&Qt[vn].update(0,i);tl=1}else for(vn=0;vn<e;vn++)Qt[vn]&&Qt[vn].update(0,i);ie.isUpdating=!1}Xa=0},zu=[mm,_m,Mh,xh,ti+La,ti+Ca,ti+Da,ti+Pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],el=zu.concat([Xr,Yr,"boxSizing","max"+ta,"max"+Sh,"position",ti,ze,ze+Da,ze+Ca,ze+La,ze+Pa]),Cy=function(t,e,n){ks(n);var i=t._gsap;if(i.spacerIsNative)ks(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Sc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=zu.length,a=e.style,o=t.style,l;s--;)l=zu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Mh]=o[xh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Xr]=ml(t,Sn)+We,a[Yr]=ml(t,Xe)+We,a[ze]=o[ti]=o[_m]=o[mm]="0",ks(i),o[Xr]=o["max"+ta]=n[Xr],o[Yr]=o["max"+Sh]=n[Yr],o[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Py=/([A-Z])/g,ks=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(Py,"-$1").toLowerCase())}},Bo=function(t){for(var e=el.length,n=t.style,i=[],s=0;s<e;s++)i.push(el[s],n[el[s]]);return i.t=t,i},Dy=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},nl={left:0,top:0},ld=function(t,e,n,i,s,a,o,l,c,u,h,d,f,g){yn(t)&&(t=t(l)),kn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?Jo("0"+t.substr(3),n):0));var _=f?f.time():0,m,p,T;if(f&&f.seek(0),isNaN(t)||(t=+t),va(t))f&&(t=St.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),o&&Qo(o,n,i,!0);else{yn(e)&&(e=e(l));var E=(t||"0").split(" "),x,R,A,b;T=wn(e,l)||Ee,x=zi(T)||{},(!x||!x.left&&!x.top)&&ei(T).display==="none"&&(b=T.style.display,T.style.display="block",x=zi(T),b?T.style.display=b:T.style.removeProperty("display")),R=Jo(E[0],x[i.d]),A=Jo(E[1]||"0",n),t=x[i.p]-c[i.p]-u+R+s-A,o&&Qo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var C=t+n,M=a._isStart;m="scroll"+i.d2,Qo(a,C,i,M&&C>20||!M&&(h?Math.max(Ee[m],hi[m]):a.parentNode[m])<=C+1),h&&(c=zi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+We))}return f&&T&&(m=zi(T),f.seek(d),p=zi(T),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(_),f?t:Math.round(t)},Ly=/(webkit|moz|length|cssText|inset)/i,cd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===Ee){t._stOrig=s.cssText,o=ei(t);for(a in o)!+a&&!Ly.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},ym=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},zo=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},ud=function(t,e){var n=Mr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,g={};c=c||n();var _=ym(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ee.cache++,a.tween&&Wi()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=St.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$e(t,"wheel",n.wheelHandler),ie.isTouch&&$e(t,"touchmove",n.wheelHandler),s},ie=function(){function r(e,n){Ts||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=gi;return}n=id(kn(n)||va(n)||n.nodeType?{trigger:n}:n,Oo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,E=s.once,x=s.snap,R=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Xe,P=!h&&h!==0,U=wn(n.scroller||se),F=St.core.getCache(U),G=Qr(U),q=("pinType"in n?n.pinType:mr(U,"pinType")||G&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),z="markers"in n?n.markers:Oo.markers,nt=G?0:parseFloat(ei(U)["border"+v.p2+ta])||0,D=this,ut=n.onRefreshInit&&function(){return n.onRefreshInit(D)},It=yy(U,G,v),Zt=Ey(U,G),Z=0,et=0,_t=0,it=Mr(U,v),Et,At,kt,$t,Ht,Pt,I,_e,Ft,B,Mt,re,Tt,w,S,k,Q,J,$,ht,at,dt,Gt,rt,st,Dt,Lt,vt,Xt,Ot,oe,L,ct,j,K,lt,ft,Bt,ce;if(D._startClamp=D._endClamp=!1,D._dir=v,m*=45,D.scroller=U,D.scroll=b?b.time.bind(b):it,$t=it(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(om=1,n.refreshPriority===-9999&&(Ia=D)),F.tweenScroll=F.tweenScroll||{top:ud(U,Xe),left:ud(U,Sn)},D.tweenTo=Et=F.tweenScroll[v.p],D.scrubDuration=function(pt){ct=va(pt)&&pt,ct?L?L.duration(pt):L=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ct,paused:!0,onComplete:function(){return p&&p(D)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),Ot=0,l||(l=i.vars.id)),x&&((!Ur(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ee.style&&St.set(G?[Ee,hi]:U,{scrollBehavior:"auto"}),ee.forEach(function(pt){return yn(pt)&&pt.target===(G?we.scrollingElement||hi:U)&&(pt.smooth=!1)}),kt=yn(x.snapTo)?x.snapTo:x.snapTo==="labels"?by(i):x.snapTo==="labelsDirectional"?Ay(i):x.directional!==!1?function(pt,Vt){return yh(x.snapTo)(pt,an()-et<500?0:Vt.direction)}:St.utils.snap(x.snapTo),j=x.duration||{min:.1,max:2},j=Ur(j)?Ra(j.min,j.max):Ra(j,j),K=St.delayedCall(x.delay||ct/2||.1,function(){var pt=it(),Vt=an()-et<500,wt=Et.tween;if((Vt||Math.abs(D.getVelocity())<10)&&!wt&&!wl&&Z!==pt){var zt=(pt-Pt)/w,Ue=i&&!P?i.totalProgress():zt,Kt=Vt?0:(Ue-oe)/(an()-ma)*1e3||0,Me=St.utils.clamp(-zt,1-zt,Ms(Kt/2)*Kt/.185),He=zt+(x.inertia===!1?0:Me),ge,ve,fe=x,Nn=fe.onStart,ye=fe.onInterrupt,hn=fe.onComplete;if(ge=kt(He,D),va(ge)||(ge=He),ve=Math.round(Pt+ge*w),pt<=I&&pt>=Pt&&ve!==pt){if(wt&&!wt._initted&&wt.data<=Ms(ve-pt))return;x.inertia===!1&&(Me=ge-zt),Et(ve,{duration:j(Ms(Math.max(Ms(He-Ue),Ms(ge-Ue))*.185/Kt/.05||0)),ease:x.ease||"power3",data:Ms(ve-pt),onInterrupt:function(){return K.restart(!0)&&ye&&ye(D)},onComplete:function(){D.update(),Z=it(),i&&(L?L.resetTo("totalProgress",ge,i._tTime/i._tDur):i.progress(ge)),Ot=oe=i&&!P?i.totalProgress():D.progress,T&&T(D),hn&&hn(D)}},pt,Me*w,ve-pt-Me*w),Nn&&Nn(D,Et.tween)}}else D.isActive&&Z!==pt&&K.restart(!0)}).pause()),l&&(Fu[l]=D),d=D.trigger=wn(d||f!==!0&&f),ce=d&&d._gsap&&d._gsap.stRevert,ce&&(ce=ce(D)),f=f===!0?d:wn(f),kn(o)&&(o={targets:d,className:o}),f&&(g===!1||g===ti||(g=!g&&f.parentNode&&f.parentNode.style&&ei(f.parentNode).display==="flex"?!1:ze),D.pin=f,At=St.core.getCache(f),At.spacer?S=At.pinState:(A&&(A=wn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),At.spacerIsNative=!!A,A&&(At.spacerState=Bo(A))),At.spacer=J=A||we.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),At.pinState=S=Bo(f)),n.force3D!==!1&&St.set(f,{force3D:!0}),D.spacer=J=At.spacer,Xt=ei(f),rt=Xt[g+v.os2],ht=St.getProperty(f),at=St.quickSetter(f,v.a,We),Sc(f,J,Xt),Q=Bo(f)),z){re=Ur(z)?id(z,rd):rd,B=Fo("scroller-start",l,U,v,re,0),Mt=Fo("scroller-end",l,U,v,re,0,B),$=B["offset"+v.op.d2];var Pe=wn(mr(U,"content")||U);_e=this.markerStart=Fo("start",l,Pe,v,re,$,0,b),Ft=this.markerEnd=Fo("end",l,Pe,v,re,$,0,b),b&&(Bt=St.quickSetter([_e,Ft],v.a,We)),!q&&!(bi.length&&mr(U,"fixedMarkers")===!0)&&(Ty(G?Ee:U),St.set([B,Mt],{force3D:!0}),Dt=St.quickSetter(B,v.a,We),vt=St.quickSetter(Mt,v.a,We))}if(b){var gt=b.vars.onUpdate,bt=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){D.update(0,0,1),gt&&gt.apply(b,bt||[])})}if(D.previous=function(){return Qt[Qt.indexOf(D)-1]},D.next=function(){return Qt[Qt.indexOf(D)+1]},D.revert=function(pt,Vt){if(!Vt)return D.kill(!0);var wt=pt!==!1||!D.enabled,zt=sn;wt!==D.isReverted&&(wt&&(lt=Math.max(it(),D.scroll.rec||0),_t=D.progress,ft=i&&i.progress()),_e&&[_e,Ft,B,Mt].forEach(function(Ue){return Ue.style.display=wt?"none":"block"}),wt&&(sn=D,D.update(wt)),f&&(!R||!D.isActive)&&(wt?Cy(f,J,S):Sc(f,J,ei(f),st)),wt||D.update(wt),sn=zt,D.isReverted=wt)},D.refresh=function(pt,Vt,wt,zt){if(!((sn||!D.enabled)&&!Vt)){if(f&&pt&&ri){$e(r,"scrollEnd",vm);return}!xn&&ut&&ut(D),sn=D,Et.tween&&!wt&&(Et.tween.kill(),Et.tween=0),L&&L.pause(),_&&i&&i.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Ue=It(),Kt=Zt(),Me=b?b.duration():yi(U,v),He=w<=.01,ge=0,ve=zt||0,fe=Ur(wt)?wt.end:n.end,Nn=n.endTrigger||d,ye=Ur(wt)?wt.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),hn=D.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,D),qn=d&&Math.max(0,Qt.indexOf(D))||0,Ve=qn,y,N,W,X,O,tt,ot,xt,yt,Ut,Ct,Rt,Jt;for(z&&Ur(wt)&&(Rt=St.getProperty(B,v.p),Jt=St.getProperty(Mt,v.p));Ve--;)tt=Qt[Ve],tt.end||tt.refresh(0,1)||(sn=D),ot=tt.pin,ot&&(ot===d||ot===f||ot===hn)&&!tt.isReverted&&(Ut||(Ut=[]),Ut.unshift(tt),tt.revert(!0,!0)),tt!==Qt[Ve]&&(qn--,Ve--);for(yn(ye)&&(ye=ye(D)),ye=Qf(ye,"start",D),Pt=ld(ye,d,Ue,v,it(),_e,B,D,Kt,nt,q,Me,b,D._startClamp&&"_startClamp")||(f?-.001:0),yn(fe)&&(fe=fe(D)),kn(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(kn(ye)?ye.split(" ")[0]:"")+fe:(ge=Jo(fe.substr(2),Ue),fe=kn(ye)?ye:(b?St.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Pt):Pt)+ge,Nn=d)),fe=Qf(fe,"end",D),I=Math.max(Pt,ld(fe||(Nn?"100% 0":Me),Nn,Ue,v,it()+ge,Ft,Mt,D,Kt,nt,q,Me,b,D._endClamp&&"_endClamp"))||-.001,ge=0,Ve=qn;Ve--;)tt=Qt[Ve],ot=tt.pin,ot&&tt.start-tt._pinPush<=Pt&&!b&&tt.end>0&&(y=tt.end-(D._startClamp?Math.max(0,tt.start):tt.start),(ot===d&&tt.start-tt._pinPush<Pt||ot===hn)&&isNaN(ye)&&(ge+=y*(1-tt.progress)),ot===f&&(ve+=y));if(Pt+=ge,I+=ge,D._startClamp&&(D._startClamp+=ge),D._endClamp&&!xn&&(D._endClamp=I||-.001,I=Math.min(I,yi(U,v))),w=I-Pt||(Pt-=.01)&&.001,He&&(_t=St.utils.clamp(0,1,St.utils.normalize(Pt,I,lt))),D._pinPush=ve,_e&&ge&&(y={},y[v.a]="+="+ge,hn&&(y[v.p]="-="+it()),St.set([_e,Ft],y)),f&&!(Ou&&D.end>=yi(U,v)))y=ei(f),X=v===Xe,W=it(),dt=parseFloat(ht(v.a))+ve,!Me&&I>1&&(Ct=(G?we.scrollingElement||hi:U).style,Ct={style:Ct,value:Ct["overflow"+v.a.toUpperCase()]},G&&ei(Ee)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Ct.style["overflow"+v.a.toUpperCase()]="scroll")),Sc(f,J,y),Q=Bo(f),N=zi(f,!0),xt=q&&Mr(U,X?Sn:Xe)(),g?(st=[g+v.os2,w+ve+We],st.t=J,Ve=g===ze?ml(f,v)+w+ve:0,Ve&&(st.push(v.d,Ve+We),J.style.flexBasis!=="auto"&&(J.style.flexBasis=Ve+We)),ks(st),hn&&Qt.forEach(function(ne){ne.pin===hn&&ne.vars.pinSpacing!==!1&&(ne._subPinOffset=!0)}),q&&it(lt)):(Ve=ml(f,v),Ve&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=Ve+We)),q&&(O={top:N.top+(X?W-Pt:xt)+We,left:N.left+(X?xt:W-Pt)+We,boxSizing:"border-box",position:"fixed"},O[Xr]=O["max"+ta]=Math.ceil(N.width)+We,O[Yr]=O["max"+Sh]=Math.ceil(N.height)+We,O[ti]=O[ti+Da]=O[ti+Ca]=O[ti+La]=O[ti+Pa]="0",O[ze]=y[ze],O[ze+Da]=y[ze+Da],O[ze+Ca]=y[ze+Ca],O[ze+La]=y[ze+La],O[ze+Pa]=y[ze+Pa],k=Dy(S,O,R),xn&&it(0)),i?(yt=i._initted,_c(1),i.render(i.duration(),!0,!0),Gt=ht(v.a)-dt+w+ve,Lt=Math.abs(w-Gt)>1,q&&Lt&&k.splice(k.length-2,2),i.render(0,!0,!0),yt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),_c(0)):Gt=w,Ct&&(Ct.value?Ct.style["overflow"+v.a.toUpperCase()]=Ct.value:Ct.style.removeProperty("overflow-"+v.a));else if(d&&it()&&!b)for(N=d.parentNode;N&&N!==Ee;)N._pinOffset&&(Pt-=N._pinOffset,I-=N._pinOffset),N=N.parentNode;Ut&&Ut.forEach(function(ne){return ne.revert(!1,!0)}),D.start=Pt,D.end=I,$t=Ht=xn?lt:it(),!b&&!xn&&($t<lt&&it(lt),D.scroll.rec=0),D.revert(!1,!0),et=an(),K&&(Z=-1,K.restart(!0)),sn=0,i&&P&&(i._initted||ft)&&i.progress()!==ft&&i.progress(ft||0,!0).render(i.time(),!0,!0),(He||_t!==D.progress||b||_)&&(i&&!P&&i.totalProgress(b&&Pt<-.001&&!_t?St.utils.normalize(Pt,I,0):_t,!0),D.progress=He||($t-Pt)/w===_t?0:_t),f&&g&&(J._pinOffset=Math.round(D.progress*Gt)),L&&L.invalidate(),isNaN(Rt)||(Rt-=St.getProperty(B,v.p),Jt-=St.getProperty(Mt,v.p),zo(B,v,Rt),zo(_e,v,Rt-(zt||0)),zo(Mt,v,Jt),zo(Ft,v,Jt-(zt||0))),He&&!xn&&D.update(),u&&!xn&&!Tt&&(Tt=!0,u(D),Tt=!1)}},D.getVelocity=function(){return(it()-Ht)/(an()-ma)*1e3||0},D.endAnimation=function(){ha(D.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||ha(i,D.direction<0,1):ha(i,i.reversed()))},D.labelToScroll=function(pt){return i&&i.labels&&(Pt||D.refresh()||Pt)+i.labels[pt]/i.duration()*w||0},D.getTrailing=function(pt){var Vt=Qt.indexOf(D),wt=D.direction>0?Qt.slice(0,Vt).reverse():Qt.slice(Vt+1);return(kn(pt)?wt.filter(function(zt){return zt.vars.preventOverlaps===pt}):wt).filter(function(zt){return D.direction>0?zt.end<=Pt:zt.start>=I})},D.update=function(pt,Vt,wt){if(!(b&&!wt&&!pt)){var zt=xn===!0?lt:D.scroll(),Ue=pt?0:(zt-Pt)/w,Kt=Ue<0?0:Ue>1?1:Ue||0,Me=D.progress,He,ge,ve,fe,Nn,ye,hn,qn;if(Vt&&(Ht=$t,$t=b?it():zt,x&&(oe=Ot,Ot=i&&!P?i.totalProgress():Kt)),m&&f&&!sn&&!Lo&&ri&&(!Kt&&Pt<zt+(zt-Ht)/(an()-ma)*m?Kt=1e-4:Kt===1&&I>zt+(zt-Ht)/(an()-ma)*m&&(Kt=.9999)),Kt!==Me&&D.enabled){if(He=D.isActive=!!Kt&&Kt<1,ge=!!Me&&Me<1,ye=He!==ge,Nn=ye||!!Kt!=!!Me,D.direction=Kt>Me?1:-1,D.progress=Kt,Nn&&!sn&&(ve=Kt&&!Me?0:Kt===1?1:Me===1?2:3,P&&(fe=!ye&&Y[ve+1]!=="none"&&Y[ve+1]||Y[ve],qn=i&&(fe==="complete"||fe==="reset"||fe in i))),M&&(ye||qn)&&(qn||h||!i)&&(yn(M)?M(D):D.getTrailing(M).forEach(function(W){return W.endAnimation()})),P||(L&&!sn&&!Lo?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Kt,i._tTime/i._tDur):(L.vars.totalProgress=Kt,L.invalidate().restart())):i&&i.totalProgress(Kt,!!(sn&&(et||pt)))),f){if(pt&&g&&(J.style[g+v.os2]=rt),!q)at(ga(dt+Gt*Kt));else if(Nn){if(hn=!pt&&Kt>Me&&I+1>zt&&zt+1>=yi(U,v),R)if(!pt&&(He||hn)){var Ve=zi(f,!0),y=zt-Pt;cd(f,Ee,Ve.top+(v===Xe?y:0)+We,Ve.left+(v===Xe?0:y)+We)}else cd(f,J);ks(He||hn?k:Q),Lt&&Kt<1&&He||at(dt+(Kt===1&&!hn?Gt:0))}}x&&!Et.tween&&!sn&&!Lo&&K.restart(!0),o&&(ye||E&&Kt&&(Kt<1||!gc))&&Wa(o.targets).forEach(function(W){return W.classList[He||E?"add":"remove"](o.className)}),a&&!P&&!pt&&a(D),Nn&&!sn?(P&&(qn&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),a&&a(D)),(ye||!gc)&&(c&&ye&&xc(D,c),V[ve]&&xc(D,V[ve]),E&&(Kt===1?D.kill(!1,1):V[ve]=0),ye||(ve=Kt===1?1:3,V[ve]&&xc(D,V[ve]))),C&&!He&&Math.abs(D.getVelocity())>(va(C)?C:2500)&&(ha(D.callbackAnimation),L?L.progress(1):ha(i,fe==="reverse"?1:!Kt,1))):P&&a&&!sn&&a(D)}if(vt){var N=b?zt/b.duration()*(b._caScrollDist||0):zt;Dt(N+(B._isFlipped?1:0)),vt(N)}Bt&&Bt(-zt/b.duration()*(b._caScrollDist||0))}},D.enable=function(pt,Vt){D.enabled||(D.enabled=!0,$e(U,"resize",xa),G||$e(U,"scroll",Ss),ut&&$e(r,"refreshInit",ut),pt!==!1&&(D.progress=_t=0,$t=Ht=Z=it()),Vt!==!1&&D.refresh())},D.getTween=function(pt){return pt&&Et?Et.tween:L},D.setPositions=function(pt,Vt,wt,zt){if(b){var Ue=b.scrollTrigger,Kt=b.duration(),Me=Ue.end-Ue.start;pt=Ue.start+Me*pt/Kt,Vt=Ue.start+Me*Vt/Kt}D.refresh(!1,!1,{start:td(pt,wt&&!!D._startClamp),end:td(Vt,wt&&!!D._endClamp)},zt),D.update()},D.adjustPinSpacing=function(pt){if(st&&pt){var Vt=st.indexOf(v.d)+1;st[Vt]=parseFloat(st[Vt])+pt+We,st[1]=parseFloat(st[1])+pt+We,ks(st)}},D.disable=function(pt,Vt){if(D.enabled&&(pt!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Vt||L&&L.pause(),lt=0,At&&(At.uncache=1),ut&&Ze(r,"refreshInit",ut),K&&(K.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!G)){for(var wt=Qt.length;wt--;)if(Qt[wt].scroller===U&&Qt[wt]!==D)return;Ze(U,"resize",xa),G||Ze(U,"scroll",Ss)}},D.kill=function(pt,Vt){D.disable(pt,Vt),L&&!Vt&&L.kill(),l&&delete Fu[l];var wt=Qt.indexOf(D);wt>=0&&Qt.splice(wt,1),wt===vn&&tl>0&&vn--,wt=0,Qt.forEach(function(zt){return zt.scroller===D.scroller&&(wt=1)}),wt||xn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),Vt||i.kill()),_e&&[_e,Ft,B,Mt].forEach(function(zt){return zt.parentNode&&zt.parentNode.removeChild(zt)}),Ia===D&&(Ia=0),f&&(At&&(At.uncache=1),wt=0,Qt.forEach(function(zt){return zt.pin===f&&wt++}),wt||(At.spacer=0)),n.onKill&&n.onKill(D)},Qt.push(D),D.enable(!1,!1),ce&&ce(D),i&&i.add&&!w){var Yt=D.update;D.update=function(){D.update=Yt,Pt||I||D.refresh()},St.delayedCall(.01,D.update),w=.01,Pt=I=0}else D.refresh();f&&Ry()},r.register=function(n){return Ts||(St=n||fm(),hm()&&window.document&&r.enable(),Ts=_a),Ts},r.defaults=function(n){if(n)for(var i in n)Oo[i]=n[i];return Oo},r.disable=function(n,i){_a=0,Qt.forEach(function(a){return a[i?"kill":"disable"](n)}),Ze(se,"wheel",Ss),Ze(we,"scroll",Ss),clearInterval(Do),Ze(we,"touchcancel",gi),Ze(Ee,"touchstart",gi),Uo(Ze,we,"pointerdown,touchstart,mousedown",ed),Uo(Ze,we,"pointerup,touchend,mouseup",nd),dl.kill(),Io(Ze);for(var s=0;s<ee.length;s+=3)No(Ze,ee[s],ee[s+1]),No(Ze,ee[s],ee[s+2])},r.enable=function(){if(se=window,we=document,hi=we.documentElement,Ee=we.body,St&&(Wa=St.utils.toArray,Ra=St.utils.clamp,Nu=St.core.context||gi,_c=St.core.suppressOverwrites||gi,gh=se.history.scrollRestoration||"auto",Bu=se.pageYOffset,St.core.globals("ScrollTrigger",r),Ee)){_a=1,zs=document.createElement("div"),zs.style.height="100vh",zs.style.position="absolute",Sm(),Sy(),Oe.register(St),r.isTouch=Oe.isTouch,ir=Oe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Uu=Oe.isTouch===1,$e(se,"wheel",Ss),am=[se,we,hi,Ee],St.matchMedia?(r.matchMedia=function(l){var c=St.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},St.addEventListener("matchMediaInit",function(){return Eh()}),St.addEventListener("matchMediaRevert",function(){return xm()}),St.addEventListener("matchMedia",function(){kr(0,1),es("matchMedia")}),St.matchMedia("(orientation: portrait)",function(){return Mc(),Mc})):console.warn("Requires GSAP 3.11.0 or later"),Mc(),$e(we,"scroll",Ss);var n=Ee.style,i=n.borderTopStyle,s=St.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=zi(Ee),Xe.m=Math.round(a.top+Xe.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Do=setInterval(sd,250),St.delayedCall(.5,function(){return Lo=0}),$e(we,"touchcancel",gi),$e(Ee,"touchstart",gi),Uo($e,we,"pointerdown,touchstart,mousedown",ed),Uo($e,we,"pointerup,touchend,mouseup",nd),Iu=St.utils.checkPrefix("transform"),el.push(Iu),Ts=an(),dl=St.delayedCall(.2,kr).pause(),bs=[we,"visibilitychange",function(){var l=se.innerWidth,c=se.innerHeight;we.hidden?(Kf=l,Jf=c):(Kf!==l||Jf!==c)&&xa()},we,"DOMContentLoaded",kr,se,"load",kr,se,"resize",xa],Io($e),Qt.forEach(function(l){return l.enable(0,1)}),o=0;o<ee.length;o+=3)No(Ze,ee[o],ee[o+1]),No(Ze,ee[o],ee[o+2])}},r.config=function(n){"limitCallbacks"in n&&(gc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Do)||(Do=i)&&setInterval(sd,i),"ignoreMobileResize"in n&&(Uu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Io(Ze)||Io($e,n.autoRefreshEvents||"none"),lm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),a=ee.indexOf(s),o=Qr(s);~a&&ee.splice(a,o?6:2),i&&(o?bi.unshift(se,i,Ee,i,hi,i):bi.unshift(s,i))},r.clearMatchMedia=function(n){Qt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(kn(n)?wn(n):n).getBoundingClientRect(),o=a[s?Xr:Yr]*i||0;return s?a.right-o>0&&a.left+o<se.innerWidth:a.bottom-o>0&&a.top+o<se.innerHeight},r.positionInViewport=function(n,i,s){kn(n)&&(n=wn(n));var a=n.getBoundingClientRect(),o=a[s?Xr:Yr],l=i==null?o/2:i in _l?_l[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/se.innerWidth:(a.top+l)/se.innerHeight},r.killAll=function(n){if(Qt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ts.killAll||[];ts={},i.forEach(function(s){return s()})}},r}();ie.version="3.12.5";ie.saveStyles=function(r){return r?Wa(r).forEach(function(t){if(t&&t.style){var e=zn.indexOf(t);e>=0&&zn.splice(e,5),zn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Nu())}}):zn};ie.revert=function(r,t){return Eh(!r,t)};ie.create=function(r,t){return new ie(r,t)};ie.refresh=function(r){return r?xa():(Ts||ie.register())&&kr(!0)};ie.update=function(r){return++ee.cache&&Wi(r===!0?2:0)};ie.clearScrollMemory=Mm;ie.maxScroll=function(r,t){return yi(r,t?Sn:Xe)};ie.getScrollFunc=function(r,t){return Mr(wn(r),t?Sn:Xe)};ie.getById=function(r){return Fu[r]};ie.getAll=function(){return Qt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!ri};ie.snapDirectional=yh;ie.addEventListener=function(r,t){var e=ts[r]||(ts[r]=[]);~e.indexOf(t)||e.push(t)};ie.removeEventListener=function(r,t){var e=ts[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ie.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var h=[],d=[],f=St.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&yn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return yn(s)&&(s=s(),$e(ie,"refresh",function(){return s=t.batchMax()})),Wa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(ie.create(c))}),e};var hd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},yc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Oe.isTouch?" pinch-zoom":""):"none",t===hi&&r(Ee,e)},ko={auto:1,scroll:1},Iy=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||St.core.getCache(s),o=an(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Ee&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ko[(l=ei(s)).overflowY]||ko[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Qr(s)&&(ko[(l=ei(s)).overflowY]||ko[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Em=function(t,e,n,i){return Oe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Iy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$e(we,Oe.eventTypes[0],dd,!1,!0)},onDisable:function(){return Ze(we,Oe.eventTypes[0],dd,!0)}})},Uy=/(input|label|select|textarea)/i,fd,dd=function(t){var e=Uy.test(t.target.tagName);(e||fd)&&(t._gsapAllow=!0,fd=e)},Ny=function(t){Ur(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=wn(t.target)||hi,u=St.core.globals().ScrollSmoother,h=u&&u.get(),d=ir&&(t.content&&wn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),f=Mr(c,Xe),g=Mr(c,Sn),_=1,m=(Oe.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,T=yn(i)?function(){return i(o)}:function(){return i||2.8},E,x,R=Em(c,t.type,!0,s),A=function(){return x=!1},b=gi,C=gi,M=function(){l=yi(c,Xe),C=Ra(ir?1:0,l),n&&(b=Ra(0,yi(c,Sn))),E=qr},v=function(){d._gsap.y=ga(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(x){requestAnimationFrame(A);var z=ga(o.deltaY/2),nt=C(f.v-z);if(d&&nt!==f.v+f.offset){f.offset=nt-f.v;var D=ga((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=ee.cache,Wi()}return!0}f.offset&&v(),x=!0},U,F,G,q,V=function(){M(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&St.set(d,{y:"+=0"}),t.ignoreCheck=function(Y){return ir&&Y.type==="touchmove"&&P()||_>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){x=!1;var Y=_;_=ga((se.visualViewport&&se.visualViewport.scale||1)/m),U.pause(),Y!==_&&yc(c,_>1.01?!0:n?!1:"x"),F=g(),G=f(),M(),E=qr},t.onRelease=t.onGestureStart=function(Y,z){if(f.offset&&v(),!z)q.restart(!0);else{ee.cache++;var nt=T(),D,ut;n&&(D=g(),ut=D+nt*.05*-Y.velocityX/.227,nt*=hd(g,D,ut,yi(c,Sn)),U.vars.scrollX=b(ut)),D=f(),ut=D+nt*.05*-Y.velocityY/.227,nt*=hd(f,D,ut,yi(c,Xe)),U.vars.scrollY=C(ut),U.invalidate().duration(nt).play(.01),(ir&&U.vars.scrollY>=l||D>=l-1)&&St.to({},{onUpdate:V,duration:nt})}a&&a(Y)},t.onWheel=function(){U._ts&&U.pause(),an()-p>1e3&&(E=0,p=an())},t.onChange=function(Y,z,nt,D,ut){if(qr!==E&&M(),z&&n&&g(b(D[2]===z?F+(Y.startX-Y.x):g()+z-D[1])),nt){f.offset&&v();var It=ut[2]===nt,Zt=It?G+Y.startY-Y.y:f()+nt-ut[1],Z=C(Zt);It&&Zt!==Z&&(G+=Z-Zt),f(Z)}(nt||z)&&Wi()},t.onEnable=function(){yc(c,n?!1:"x"),ie.addEventListener("refresh",V),$e(se,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),R.enable()},t.onDisable=function(){yc(c,!0),Ze(se,"resize",V),ie.removeEventListener("refresh",V),R.kill()},t.lockAxis=t.lockAxis!==!1,o=new Oe(t),o.iOS=ir,ir&&!f()&&f(1),ir&&St.ticker.add(gi),q=o._dc,U=St.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ym(f,f(),function(){return U.pause()})},onUpdate:Wi,onComplete:q.vars.onComplete}),o};ie.sort=function(r){return Qt.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};ie.observe=function(r){return new Oe(r)};ie.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var t=r instanceof Oe?r:Ny(r);return gn&&gn.target===t.target&&gn.kill(),Qr(t.target)&&(gn=t),t};ie.core={_getVelocityProp:Lu,_inputObserver:Em,_scrollers:ee,_proxies:bi,bridge:{ss:function(){ri||es("scrollStart"),ri=an()},ref:function(){return sn}}};fm()&&St.registerPlugin(ie);const pd={type:"change"},Th={type:"start"},Tm={type:"end"},Ho=new Ml,md=new rr,Oy=Math.cos(70*L_.DEG2RAD),Ge=new H,An=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ec=1e-6;class Fy extends Mg{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new $r,this._lastTargetPosition=new H,this._quat=new $r().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lf,this._sphericalDelta=new lf,this._scale=1,this._panOffset=new H,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new H,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zy.bind(this),this._onPointerDown=By.bind(this),this._onPointerUp=ky.bind(this),this._onContextMenu=qy.bind(this),this._onMouseWheel=Gy.bind(this),this._onKeyDown=Wy.bind(this),this._onTouchStart=Xy.bind(this),this._onTouchMove=Yy.bind(this),this._onMouseDown=Hy.bind(this),this._onMouseMove=Vy.bind(this),this._interceptControlDown=jy.bind(this),this._interceptControlUp=Zy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pd),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=An:n>Math.PI&&(n-=An),i<-Math.PI?i+=An:i>Math.PI&&(i-=An),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ge.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<Oy?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ec||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ec||this._lastTargetPosition.distanceToSquared(this.target)>Ec?(this.dispatchEvent(pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?An/60*this.autoRotateSpeed*t:An/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ge.copy(i).sub(this.target);let s=Ge.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(An*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-An*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(An*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-An*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(An*this._rotateDelta.x/e.clientHeight),this._rotateUp(An*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function By(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function zy(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function ky(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tm),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hy(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=me.DOLLY;break;case Ds.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=me.ROTATE}break;case Ds.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Th)}function Vy(r){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Gy(r){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(r.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Tm))}function Wy(r){this.enabled!==!1&&this._handleKeyDown(r)}function Xy(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=me.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=me.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Th)}function Yy(r){switch(this._trackPointer(r),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=me.NONE}}function qy(r){this.enabled!==!1&&r.preventDefault()}function jy(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zy(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $y({numStars:r=500,sprite:t}={}){function e(){const c=Math.random()*25+25,u=Math.random(),h=Math.random(),d=2*Math.PI*u,f=Math.acos(2*h-1);let g=c*Math.sin(f)*Math.cos(d),_=c*Math.sin(f)*Math.sin(d),m=c*Math.cos(f);return{pos:new H(g,_,m),hue:.6,minDist:c}}const n=[],i=[];let s;for(let c=0;c<r;c+=1){let u=e();const{pos:h,hue:d}=u;s=new le().setHSL(d,.2,Math.random()),n.push(h.x,h.y,h.z),i.push(s.r,s.g,s.b)}const a=new mi;a.setAttribute("position",new Tn(n,3)),a.setAttribute("color",new Tn(i,3));const o=new Gd({size:.2,vertexColors:!0,fog:!1});return new lg(a,o)}Ja.registerPlugin(ie);const Ci=new sg,$i=new Je;Ci.add($i);const bh=new pg,Ky=bh.load("/images/earth.jpg"),Jy=bh.load("/images/eartf.jpg"),Qy=bh.load("/images/clouds.jpg"),tE=new $a(.05,7,3),eE=new ja({color:9055202,transparent:!0,opacity:.7}),Qa=new Rn(tE,eE);Ci.add(Qa);const Xi=3,Tc=Math.PI/3,_d=Math.PI/4;Qa.position.set(Xi*Math.sin(Tc)*Math.cos(_d),Xi*Math.cos(Tc),Xi*Math.sin(Tc)*Math.cos(_d));$i.add(Qa);Qa.lookAt(0,5,0);const nE=new $a(.05,7,3),iE=new ja({color:16773151,transparent:!0,opacity:.7}),to=new Rn(nE,iE);Ci.add(to);const bc=-Math.PI/3.5,gd=Math.PI/3.8;to.position.set(Xi*Math.sin(bc)*Math.cos(gd)-.65,Xi*Math.cos(bc)*Math.cos(gd)+.4,Xi*Math.sin(bc));$i.add(to);to.lookAt(-5,-5,-5);const rE=new $a(.03,7,3),sE=new ja({color:1044732,transparent:!0,opacity:.7}),eo=new Rn(rE,sE);Ci.add(eo);const Ac=-Math.PI/3.5,vd=Math.PI/3.8,aE=3,oE=1.9,lE=2.75;eo.position.set(Xi*Math.sin(Ac)*Math.cos(vd)-aE,Xi*Math.cos(Ac)*Math.cos(vd)+oE,Xi*Math.sin(Ac)+lE);$i.add(eo);eo.lookAt(-16,-15,0);const cE=new yl(3,64,64),uE=new Xd({map:Qy,transparent:!0,opacity:.4}),hE=new yl(3,64,64),fE=new Xd({map:Ky,emissiveMap:Jy,emissive:new le(16777215),emissiveIntensity:1.1}),Ah=new Rn(cE,uE);Ah.scale.set(1.01,1.01,1.01);const Rl=new Rn(hE,fE);Rl.castShadow=!0;Rl.receiveShadow=!0;$i.add(Ah);$i.add(Rl);const on={width:window.innerWidth,height:window.innerHeight},dE=new gg(16777215,.3);Ci.add(dE);const bm=new jd(16777200,10);bm.position.set(-5,-5,-5);Ci.add(bm);const Am=new jd(2236962,3);Am.position.set(5,5,5);Ci.add(Am);const Ri=new Qn(45,on.width/on.height,.1,100);Ri.position.z=12;Ci.add(Ri);const no=document.querySelector("canvas.webgl");no||console.error("canvas not found.");const pE=$y(5e3);Ci.add(pE);const Zi=new iS({canvas:no});Zi.setSize(on.width,on.height);Zi.setPixelRatio(Math.min(window.devicePixelRatio,2));Zi.domElement.style.width="100%";Zi.domElement.style.height="100%";const Cl=new Fy(Ri,no);Cl.enableDamping=!0;Cl.enablePan=!1;Cl.enableZoom=!1;window.addEventListener("resize",()=>{on.width=window.innerWidth,on.height=window.innerHeight,Ri.aspect=on.width/on.height,Ri.updateProjectionMatrix(),Zi.setSize(on.width,on.height),Zi.setPixelRatio(Math.min(window.devicePixelRatio,2))});const gl=new xg,Hs=new Wt,wm={coneTexas:{object:Qa,url:"texas.html"},coneNepal:{object:to,url:"nepal.html"},coneJapan:{object:eo,url:"japan.html"}},ku=Object.values(wm).map(r=>r.object);no.addEventListener("click",_E);no.addEventListener("mousemove",mE);function mE(r){Hs.x=r.clientX/window.innerWidth*2-1,Hs.y=-(r.clientY/window.innerHeight)*2+1,gl.setFromCamera(Hs,Ri);const t=gl.intersectObjects(ku);if(ku.forEach(e=>{e.material.opacity=.7,document.body.style.cursor="default"}),t.length>0){const e=t[0].object;e.material.opacity=1,document.body.style.cursor="pointer"}}function _E(r){Hs.x=r.clientX/window.innerWidth*2-1,Hs.y=-(r.clientY/window.innerHeight)*2+1,gl.setFromCamera(Hs,Ri);const t=gl.intersectObjects(ku);if(t.length>0){const e=Object.values(wm).find(n=>n.object===t[0].object);e&&(window.location.href=e.url)}}const wh=document.querySelector(".title"),Rh=document.querySelector(".paragraph"),gE=document.querySelector(".columns-container"),vE=document.querySelectorAll(".column");$i.position.x=0;Ja.set([wh,Rh],{opacity:0,y:20});Ja.to([wh,Rh],{opacity:1,y:0,duration:1,delay:.5,ease:"power2.out"});const Pl=Ja.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:1,markers:!0}});Pl.to($i.position,{x:4,duration:1,ease:"none"},0);Pl.to([wh,Rh],{opacity:0,duration:1,ease:"power2.out"},.1);Pl.to(gE,{opacity:1,top:"0",duration:1,ease:"power2.out"},.3);vE.forEach((r,t)=>{Pl.to(r,{opacity:1,x:0,duration:1,ease:"power2.out"},.4+t*.1)});window.addEventListener("resize",()=>{on.width=window.innerWidth/2,on.height=window.innerHeight,Ri.aspect=on.width/on.height,Ri.updateProjectionMatrix(),Zi.setSize(on.width,on.height),Zi.setPixelRatio(Math.min(window.devicePixelRatio,2))});function Rm(){$i.rotation.y+=2e-4,Ah.rotation.y+=3e-4,Rl.rotation.y=Math.PI/3.5,Cl.update(),Zi.render(Ci,Ri),requestAnimationFrame(Rm)}Rm();
