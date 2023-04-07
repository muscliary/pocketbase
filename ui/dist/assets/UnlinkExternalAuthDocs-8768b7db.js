import{S as qe,i as Me,s as Oe,e as i,w as v,b as h,c as Se,f,g as d,h as s,m as Be,x as j,N as ye,O as De,k as We,P as ze,n as He,t as le,a as oe,o as u,d as Ue,R as Le,C as Re,p as je,r as I,u as Ie,M as Ne}from"./index-8d161774.js";import{S as Ke}from"./SdkTabs-49e0ea02.js";function Ae(n,l,o){const a=n.slice();return a[5]=l[o],a}function Ce(n,l,o){const a=n.slice();return a[5]=l[o],a}function Te(n,l){let o,a=l[5].code+"",_,b,c,p;function m(){return l[4](l[5])}return{key:n,first:null,c(){o=i("button"),_=v(a),b=h(),f(o,"class","tab-item"),I(o,"active",l[1]===l[5].code),this.first=o},m($,P){d($,o,P),s(o,_),s(o,b),c||(p=Ie(o,"click",m),c=!0)},p($,P){l=$,P&4&&a!==(a=l[5].code+"")&&j(_,a),P&6&&I(o,"active",l[1]===l[5].code)},d($){$&&u(o),c=!1,p()}}}function Ee(n,l){let o,a,_,b;return a=new Ne({props:{content:l[5].body}}),{key:n,first:null,c(){o=i("div"),Se(a.$$.fragment),_=h(),f(o,"class","tab-item"),I(o,"active",l[1]===l[5].code),this.first=o},m(c,p){d(c,o,p),Be(a,o,null),s(o,_),b=!0},p(c,p){l=c;const m={};p&4&&(m.content=l[5].body),a.$set(m),(!b||p&6)&&I(o,"active",l[1]===l[5].code)},i(c){b||(le(a.$$.fragment,c),b=!0)},o(c){oe(a.$$.fragment,c),b=!1},d(c){c&&u(o),Ue(a)}}}function Fe(n){var he,_e,ke,ve;let l,o,a=n[0].name+"",_,b,c,p,m,$,P,D=n[0].name+"",N,se,ae,K,F,A,G,E,J,w,W,ne,z,y,ie,Q,H=n[0].name+"",V,ce,X,re,Y,de,L,Z,S,x,B,ee,U,te,C,q,g=[],ue=new Map,pe,M,k=[],me=new Map,T;A=new Ke({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${n[3]}');

        ...

        await pb.collection('${(he=n[0])==null?void 0:he.name}').authWithPassword('test@example.com', '123456');

        await pb.collection('${(_e=n[0])==null?void 0:_e.name}').unlinkExternalAuth(
            pb.authStore.model.id,
            'google'
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[3]}');

        ...

        await pb.collection('${(ke=n[0])==null?void 0:ke.name}').authWithPassword('test@example.com', '123456');

        await pb.collection('${(ve=n[0])==null?void 0:ve.name}').unlinkExternalAuth(
          pb.authStore.model.id,
          'google',
        );
    `}});let R=n[2];const fe=e=>e[5].code;for(let e=0;e<R.length;e+=1){let t=Ce(n,R,e),r=fe(t);ue.set(r,g[e]=Te(r,t))}let O=n[2];const be=e=>e[5].code;for(let e=0;e<O.length;e+=1){let t=Ae(n,O,e),r=be(t);me.set(r,k[e]=Ee(r,t))}return{c(){l=i("h3"),o=v("Unlink OAuth2 account ("),_=v(a),b=v(")"),c=h(),p=i("div"),m=i("p"),$=v("Unlink a single external OAuth2 provider from "),P=i("strong"),N=v(D),se=v(" record."),ae=h(),K=i("p"),K.textContent="Only admins and the account owner can access this action.",F=h(),Se(A.$$.fragment),G=h(),E=i("h6"),E.textContent="API details",J=h(),w=i("div"),W=i("strong"),W.textContent="DELETE",ne=h(),z=i("div"),y=i("p"),ie=v("/api/collections/"),Q=i("strong"),V=v(H),ce=v("/records/"),X=i("strong"),X.textContent=":id",re=v("/external-auths/"),Y=i("strong"),Y.textContent=":provider",de=h(),L=i("p"),L.innerHTML="Requires <code>Authorization:TOKEN</code> header",Z=h(),S=i("div"),S.textContent="Path Parameters",x=h(),B=i("table"),B.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="60%">Description</th></tr></thead> 
    <tbody><tr><td>id</td> 
            <td><span class="label">String</span></td> 
            <td>ID of the auth record.</td></tr> 
        <tr><td>provider</td> 
            <td><span class="label">String</span></td> 
            <td>The name of the auth provider to unlink, eg. <code>google</code>, <code>twitter</code>,
                <code>github</code>, etc.</td></tr></tbody>`,ee=h(),U=i("div"),U.textContent="Responses",te=h(),C=i("div"),q=i("div");for(let e=0;e<g.length;e+=1)g[e].c();pe=h(),M=i("div");for(let e=0;e<k.length;e+=1)k[e].c();f(l,"class","m-b-sm"),f(p,"class","content txt-lg m-b-sm"),f(E,"class","m-b-xs"),f(W,"class","label label-primary"),f(z,"class","content"),f(L,"class","txt-hint txt-sm txt-right"),f(w,"class","alert alert-danger"),f(S,"class","section-title"),f(B,"class","table-compact table-border m-b-base"),f(U,"class","section-title"),f(q,"class","tabs-header compact left"),f(M,"class","tabs-content"),f(C,"class","tabs")},m(e,t){d(e,l,t),s(l,o),s(l,_),s(l,b),d(e,c,t),d(e,p,t),s(p,m),s(m,$),s(m,P),s(P,N),s(m,se),s(p,ae),s(p,K),d(e,F,t),Be(A,e,t),d(e,G,t),d(e,E,t),d(e,J,t),d(e,w,t),s(w,W),s(w,ne),s(w,z),s(z,y),s(y,ie),s(y,Q),s(Q,V),s(y,ce),s(y,X),s(y,re),s(y,Y),s(w,de),s(w,L),d(e,Z,t),d(e,S,t),d(e,x,t),d(e,B,t),d(e,ee,t),d(e,U,t),d(e,te,t),d(e,C,t),s(C,q);for(let r=0;r<g.length;r+=1)g[r]&&g[r].m(q,null);s(C,pe),s(C,M);for(let r=0;r<k.length;r+=1)k[r]&&k[r].m(M,null);T=!0},p(e,[t]){var ge,we,$e,Pe;(!T||t&1)&&a!==(a=e[0].name+"")&&j(_,a),(!T||t&1)&&D!==(D=e[0].name+"")&&j(N,D);const r={};t&9&&(r.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(ge=e[0])==null?void 0:ge.name}').authWithPassword('test@example.com', '123456');

        await pb.collection('${(we=e[0])==null?void 0:we.name}').unlinkExternalAuth(
            pb.authStore.model.id,
            'google'
        );
    `),t&9&&(r.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${($e=e[0])==null?void 0:$e.name}').authWithPassword('test@example.com', '123456');

        await pb.collection('${(Pe=e[0])==null?void 0:Pe.name}').unlinkExternalAuth(
          pb.authStore.model.id,
          'google',
        );
    `),A.$set(r),(!T||t&1)&&H!==(H=e[0].name+"")&&j(V,H),t&6&&(R=e[2],g=ye(g,t,fe,1,e,R,ue,q,De,Te,null,Ce)),t&6&&(O=e[2],We(),k=ye(k,t,be,1,e,O,me,M,ze,Ee,null,Ae),He())},i(e){if(!T){le(A.$$.fragment,e);for(let t=0;t<O.length;t+=1)le(k[t]);T=!0}},o(e){oe(A.$$.fragment,e);for(let t=0;t<k.length;t+=1)oe(k[t]);T=!1},d(e){e&&u(l),e&&u(c),e&&u(p),e&&u(F),Ue(A,e),e&&u(G),e&&u(E),e&&u(J),e&&u(w),e&&u(Z),e&&u(S),e&&u(x),e&&u(B),e&&u(ee),e&&u(U),e&&u(te),e&&u(C);for(let t=0;t<g.length;t+=1)g[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function Ge(n,l,o){let a,{collection:_=new Le}=l,b=204,c=[];const p=m=>o(1,b=m.code);return n.$$set=m=>{"collection"in m&&o(0,_=m.collection)},o(3,a=Re.getApiExampleUrl(je.baseUrl)),o(2,c=[{code:204,body:"null"},{code:401,body:`
                {
                  "code": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "code": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "code": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}]),[_,b,c,a,p]}class Ve extends qe{constructor(l){super(),Me(this,l,Ge,Fe,Oe,{collection:0})}}export{Ve as default};
