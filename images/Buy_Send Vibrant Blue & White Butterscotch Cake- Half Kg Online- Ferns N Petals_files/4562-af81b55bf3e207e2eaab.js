(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4562],{66682:function(e,t,i){"use strict";var n=i(85893),r=(i(67294),i(282));function o(e){var t=e.type,i=e.variant,o=e.className,a=e.children,l=e.onClick,u=e.disabled,c=e.style,d=e.testId;return(0,n.jsx)(r.Z,{type:t,variant:i,className:o,disableRipple:!0,onClick:function(e){l&&l(e)},disabled:u,style:c,"data-testid":d,children:a})}o.defaultProps={variant:"contained",type:"button",disabled:!1,className:"primary",onClick:function(){},style:{},testId:""},t.Z=o},16295:function(e,t,i){"use strict";i.d(t,{NP:function(){return L},Ml:function(){return R}});var n=i(85893),r=i(809),o=i.n(r),a=i(92447),l=i(28140),u=i(26265),c=i(32292),d=i(67294),s=i(14494),p=i(11163),f=i(62286),v=i(63105),h=i.n(v),m=i(41609),g=i.n(m),y=i(27361),I=i.n(y),D=i(29521),S=i.n(D),P=i(23279),w=i.n(P),E=i(21848),b=i(19759),C=i(82005),T=i(23086),k=i(75129),O=i(15745),x=i(20387);function N(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function A(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?N(Object(i),!0).forEach((function(t){(0,u.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var L=(0,d.createContext)({}),R=function(e){var t=e.children,i=e.product,r=(0,f.parseCookies)(),v=(0,s.I0)(),m=(0,s.v9)((function(e){return e.appConfigs})),y=m.isMobile,D=(0,d.useState)(!1),P=D[0],N=D[1],R=(0,d.useState)("details"),U=R[0],M=R[1],Z=(0,d.useState)({}),j=Z[0],z=Z[1],_=(0,s.v9)((function(e){var t,i,n,r;return y?null===(t=e.appConfigs)||void 0===t||null===(i=t.configData)||void 0===i?void 0:i.mobile:null===(n=e.appConfigs)||void 0===n||null===(r=n.configData)||void 0===r?void 0:r.desktop})).isCdpEnabled,F=(0,s.v9)((function(e){var t;return null===(t=e.currenciesList)||void 0===t?void 0:t.currencies})),V=(0,d.useState)(!1),B=V[0],X=V[1];(0,d.useEffect)((function(){P?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}),[P]);var W=function(e,t){document.querySelectorAll(t).forEach((function(t){t.style.display="show"===e?"block":"none"}))};(0,d.useEffect)((function(){y||document.body.addEventListener("click",(function(e){new RegExp("(?:^|\\s)".concat(["offer-tnc-txt","MuiButton-label","d-add-to-cart","d-buy-now"].join("|"),"(?:\\s|$)"),"i").test(e.target.className)||(W("hide",".offer-tnc-popup"),W("hide",".tooltip"))}))}),[y]);var q=(0,s.v9)((function(e){return e.appData})).selectedCurrency,G=(0,T.Z)(F)||q;(0,d.useEffect)((function(){(0,O.NW)(G,F,v,y)}),[G,null===F||void 0===F?void 0:F.length,v]);var J=(0,s.v9)((function(e){return e.productDetail})),Y=(0,s.v9)((function(e){return e.productDetail.shippingDatesAndMethods})),H=(0,s.v9)((function(e){return e.productDetail.priceSurgeDetails})),K=(0,s.v9)((function(e){return e.dateRangeSwitch})).isCourierDateRangeEnable,$=(0,s.v9)((function(e){return e.locationLockLists.finalSelectedPinCode})),Q=(0,s.v9)((function(e){return e.pdpContext})),ee=Q.pdpUserSelections,te=Q.selectedType,ie=Q.selectedFlavour,ne=Q.flavours,re=Q.selectedVariant,oe=Q.userPersonalization,ae=Q.variantList,le=Q.quantityList,ue=Q.deliveryType,ce=Q.imageConfigs,de=Q.uploadProgressStatus,se=m.catalogId,pe=ee.pinCode,fe=J.currencyCode||"\u20b9",ve=J.currencyFactor||1,he=i.shippingDisplayOptions,me=i.featureSet,ge=i.variantProducts,ye=i.productId,Ie=i.primaryCategoryId,De=i.productTypeId,Se=i.assocProductDetails,Pe=i.personalizedInfo,we=i.defaultFeature,Ee=J.productPriceByDate,be=J.productPriceByPincode,Ce=J.deliveryTimeLeft,Te="Y"===J.productExpiry.isProductStockAvailable,ke=(0,p.useRouter)(),Oe=(0,d.useRef)(null),xe=(0,d.useRef)(null),Ne=(0,d.useRef)(null),Ae=(0,d.useRef)(null),Le=(0,d.useRef)(null),Re=(0,d.useRef)(null),Ue=(0,d.useRef)(null),Me={TEXT:Ne,IMAGE:xe,AUDIO:xe,VIDEO:xe};(0,d.useEffect)((function(){v((0,x.gN)(Ie))}),[Ie,v]);var Ze=(0,d.useState)({}),je=Ze[0],ze=Ze[1],_e=function(){return"UAE"===se},Fe=function(){return ye.includes("CAKE")},Ve=function(){return Ie===E.M5.INTERNATIONAL},Be=function(){return"Y"===i.isVirtual},Xe=function(){return!(!he||he.showPincodeOrCity)&&Object.keys(he.defaultGeoDetails).length>0},We=function(){return De===E.M5.DIGITAL_GOOD},qe=function(){ze({})},Ge=function(e){v((0,x.cH)(e))};(0,d.useEffect)((function(){var e,t=(0,b.Wm)([ye]),i=null===Se||void 0===Se||null===(e=Se.substituteProduct)||void 0===e?void 0:e.productId;!t&&i&&(t=(0,b.Wm)([i])),t?(t=JSON.parse(t),v((0,x.Pw)(t.po))):v((0,x.Pw)([])),Y[ye]&&v((0,O.yj)(Y[ye])),v((0,O.iZ)({productId:ye}))}),[ye]);var Je=function(e){var t,n,r=null===i||void 0===i||null===(t=i.assocProductDetails)||void 0===t||null===(n=t.substituteProduct)||void 0===n?void 0:n.productId;r&&window.localStorage.removeItem(r),(0,b.jX)([ye],JSON.stringify({po:e})),v((0,x.Pw)(e))},Ye=function(e){if(ce.length>0&&window.localStorage.getItem(ye))return v((0,x.WE)(ce)),ce;var t=[];return Array(parseInt(e,10)).fill("").map((function(e,i){return t.push({isUploading:!1,isUploaded:!1,isSizeExtError:!1,isBackendError:!1,imgUrl:null,id:i}),t})),t},He=function(){var e,t,n=null===i||void 0===i||null===(e=i.assocProductDetails)||void 0===e||null===(t=e.substituteProduct)||void 0===t?void 0:t.productId;n&&window.localStorage.removeItem(n),window.localStorage.removeItem(ye),v((0,x.Pw)([])),null!==Pe&&void 0!==Pe&&Pe.personalizedProduct&&function(){var e=(0,k.TD)(null===Pe||void 0===Pe?void 0:Pe.personalizedOptions),t=Ye(g()(e)?0:e.maxInputRequired);v((0,x.WE)(t))}()},Ke=function(e){if(oe.filter((function(t){return t.fieldName===e.fieldName})).length>0){var t=oe.map((function(t){return t.fieldName===e.fieldName?A(A({},t),e):t}));Je(t)}else Je([].concat((0,l.Z)(oe),[e]))},$e=function(e,t){var i={derivedFieldName:t.name,fieldName:t.fieldName,label:t.label,contentType:t.contentType||"IMAGE",value:e};return Ke(i),!0},Qe=function(e){return(me||[]).indexOf(e)>-1},et=function(){var e=[];return ge&&ge.forEach((function(t){var i=Object.keys(t),n=(0,c.Z)(i,1)[0],r=t[n],o=n.split("|"),a=(0,c.Z)(o,2),l={title:a[0],type:a[1],fullInfo:r,price:r.productPrice.price,image:r.productContent.productImages.length?r.productContent.productImages[0]:null,productId:r.productId,skuCode:r.skuCode,urlIdentifier:r.urlIdentifier};if(Fe()&&Qe(E.pX.FLAVOUR)){var u=(0,c.Z)(o,3)[2];l.flavour=u}e.push(l)})),e},tt=function(){var e=et(),t={};return te&&(t.type=te),Fe()&&Qe(E.pX.FLAVOUR)&&(ie?t.flavour=ie:e.length&&(t.flavour=e[0].flavour)),e=h()(e,t)},it=function(e,t){var i=et();if(Qe(E.pX.INGREDIENTS)||Qe(E.pX.STEMS)||Qe(E.pX.PIECES)){var n={};return n.title=e,Qe(E.pX.FLAVOUR)&&(n.flavour=t),i=h()(i,n)}return[]},nt=function(){return Ie===E.M5.COURIER},rt=function(){return Ie===E.M5.PERSONALIZED},ot=function(){return!!Se},at=function(){return nt()||rt()},lt=function(){Ge({timeSlotId:"",itemDesiredDeliveryDate:"",shippingMethodId:"",itemDesiredDeliveryDatesList:""})},ut=function(e){var t=e.deliveryDate,i=e.shippingMethodName,n=e.slot,r=e.shipmentMethodId,o=e.dateRange,a={timeSlotId:n.timeSlotId,itemDesiredDeliveryDate:(0,k.x7)(new Date(t)),shippingMethodId:r,shippingCost:n.shippingPrice,shippingMethodName:i,shippingSlot:n,itemDesiredDeliveryDatesList:o||""};Ve()&&(a.shippingCost=n.shippingPrice,a.itemDesiredDeliveryDate="",(0,O.bp)({city:ee.pinCode,productId:ye,shipmentType:r,timeSlotId:n.timeSlotId},v)),Ge(a),qe()},ct=function(){if(Y.isDatesAvailable){var e=Y.deliveryDates,t=Y.shippingDetails;if(t){var i=Object.keys(t),n=(0,c.Z)(e,1)[0];if(1===i.length){var r=(0,c.Z)(i,1)[0],o=t[r];if(1===o.timeSlots.length){var a=(0,c.Z)(o.timeSlots,1)[0];ut({shippingMethodName:o.shippingMethodName,shipmentMethodId:r,slot:a,deliveryDate:(0,k.ZW)(n)})}}}}},dt=function(){if(he&&he.showPincodeOrCity){if(Ve()){if(!ee.destlookupintl||!ee.selectedCity||!ee.deliveryLocation||!ee.pinCode)return!1}else if(!ee.pinCode||!ee.matchedPincode||!ee.deliveryLocation||!ee.destlookup)return!1;return!0}return!0},st=function(){var e=(0,a.Z)(o().mark((function e(t,i){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!dt()){e.next=12;break}if(!Ve()){e.next=8;break}return e.next=4,(0,O.dA)({city:t,productId:i},v);case 4:n=e.sent,v((0,O.cT)(!(null!==n&&void 0!==n&&n.isShippingDetailsExists))),e.next=12;break;case 8:return e.next=10,(0,O.X$)(t,i,v);case 10:r=e.sent,v((0,O.cT)(!(null!==r&&void 0!==r&&r.isDatesAvailable)));case 12:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),pt=function(e){var t,i=(0,O.Dj)(null===e||void 0===e?void 0:e.fullInfo),n=it(null===e||void 0===e?void 0:e.title,null===e||void 0===e?void 0:e.flavour);v((0,x.G$)(n)),null!==n&&void 0!==n&&n.length&&v((0,x.Pm)(null===(t=n[0])||void 0===t?void 0:t.type)),v((0,x.kZ)("")),v((0,x.nM)(A(A({},null===e||void 0===e?void 0:e.fullInfo),{},{title:null===e||void 0===e?void 0:e.title,type:null===e||void 0===e?void 0:e.type}))),v((0,O.Pi)(i)),Xe()||st(null===ee||void 0===ee?void 0:ee.pinCode,null===e||void 0===e?void 0:e.productId),lt(),ze({})};(0,d.useEffect)((function(){var e=ke.query,t=et();if(null!==t&&void 0!==t&&t.length){var i=t.find((function(t){return t.urlIdentifier===e.slug1}))||t[0],n=we||function(e){var t,i="",n=null===(t=window)||void 0===t?void 0:t.location.pathname.split("/");return n&&(null===e||void 0===e||e.forEach((function(e){var t=e.fullInfo.urlIdentifier.split("/");(t.length>1?n[3]===t[1]:n[2]===t[0])&&(i="".concat(e.title,"|").concat(e.type))}))),i}(t);if(n){var r=n.split("|"),o=(0,c.Z)(r,2),a=o[0],l=o[1];i=a&&l&&t.find((function(e){return e.title===a&&e.type===l}))||i,Fe()&&v((0,x.Pm)(l))}else v((0,x.Pm)(i.type));pt(i)}}),[]),(0,d.useEffect)((function(){var e=tt();if(e.length){var t=e.filter((function(e){return e.title===re.title})),i=(0,c.Z)(t,1)[0];i&&function(e){var t=(0,O.Dj)(e.fullInfo);v((0,x.nM)(A(A({},e.fullInfo),{},{title:e.title,type:e.type}))),v((0,O.Pi)(t)),v((0,x.G$)(it(e.title,e.flavour)))}(i)}v((0,x.wi)(e))}),[te,ie]);var ft=function(e){document.getElementById("fastAvailable")&&(e===E.M5.COURIER||e===E.M5.PERSONALIZED?(document.getElementById("fastAvailable").style.visibility="visible",setTimeout((function(){var e;null===(e=document.getElementById("fastAvailable"))||void 0===e||e.classList.add("toast-fade-out")}),2e3),setTimeout((function(){var e;document.getElementById("fastAvailable")&&(null===(e=document.getElementById("fastAvailable"))||void 0===e||e.classList.remove("toast-fade-out"),document.getElementById("fastAvailable").style.visibility="hidden")}),2500)):document.getElementById("fastAvailable").style.visibility="hidden")},vt=function(e,t){var i=e.map((function(e){return e.imgUrl}));$e(i,t)},ht=function(e){return"pz/".concat((0,k.Yr)(),"/").concat((0,k.Dl)(10),"-").concat(e)},mt=function(e,t,i,n,r){var o=1048576;return r>e*("KB"===t?1024:o)&&r<i*("MB"===n?o:1024)},gt=function(){var e=(0,a.Z)(o().mark((function e(t,i,n,r,a,u,c,d){var s,p,f,h,m,g;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(0,l.Z)(ce),!((p=s.findIndex((function(e){return e.id===d})))>-1)){e.next=16;break}if(!mt(r,a,u,c,i.size)||!(0,k.EX)(n,i.type)){e.next=14;break}return f=ht(i.name),s[p]=A(A({},s[p]),{},{isUploading:!0,isSizeExtError:!1}),v((0,x.hp)(!0)),v((0,x.WE)(s)),e.next=10,(0,O.p7)({fileName:f},i,v);case 10:(h=e.sent).isSuccess&&(m=new URL(h.data.presignedUrl),g=m.origin+m.pathname,s[p]=A(A({},s[p]),{},{isUploading:!1,isSizeExtError:!1,isUploaded:!0,imgUrl:g}),v((0,x.WE)(s)),v((0,x.hp)(!1)),vt(s,t)),e.next=16;break;case 14:s[p]=A(A({},s[p]),{},{isUploading:!1,isSizeExtError:!0}),v((0,x.WE)(s));case 16:case"end":return e.stop()}}),e)})));return function(t,i,n,r,o,a,l,u){return e.apply(this,arguments)}}(),yt=function(){var e=(0,a.Z)(o().mark((function e(t,i,n,r,u,c,d){var s,p,f,h,m,g,y,I;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:qe(),(s=ce.filter((function(e){return null===e.imgUrl&&!1===e.isUploading}))).length>0&&(p=s.slice(0,i.length),f=p.map((function(e,t){return mt(r,u,c,d,i[t].size)&&(0,k.EX)(n,i[t].type)?A(A({},e),{},{isUploading:!0,isSizeExtError:!1,isBackendError:!1,file:i[t]}):A(A({},e),{},{file:i[t],isUploading:!1,isBackendError:!1,isSizeExtError:!0})})),h=f.filter((function(e){return!e.isSizeExtError})),m=f.map((function(e){return e.id})),g=S()(ce,m,(function(e,t){return e.id===t})),y=[].concat((0,l.Z)(f),(0,l.Z)(g)).sort((function(e,t){return e.id-t.id})),v((0,x.hp)(!0)),v((0,x.WE)(y)),I=h.map(function(){var e=(0,a.Z)(o().mark((function e(t){var i,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ht(t.file.name),e.next=3,(0,O.p7)({fileName:i},t.file,v);case 3:if(!(n=e.sent).isSuccess){e.next=8;break}return r=new URL(n.data.presignedUrl),a=r.origin+r.pathname,e.abrupt("return",A(A({},t),{},{isUploading:!1,isSizeExtError:!1,isUploaded:!0,imgUrl:a,isBackendError:!1}));case 8:return e.abrupt("return",A(A({},t),{},{isUploading:!1,isSizeExtError:!1,isUploaded:!1,imgUrl:null,isBackendError:!0}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Promise.all(I).then((function(e){var i=e.map((function(e){return e.id})),n=S()(y,i,(function(e,t){return e.id===t})),r=[].concat((0,l.Z)(e),(0,l.Z)(n)).sort((function(e,t){return e.id-t.id}));v((0,x.WE)(r)),v((0,x.hp)(!1)),vt(r,t)})).catch((function(e){return new Error(e)})));case 3:case"end":return e.stop()}}),e)})));return function(t,i,n,r,o,a,l){return e.apply(this,arguments)}}(),It=function(e){window.scrollTo({behavior:"smooth",top:e})},Dt=function e(t,i){var n=t||0;n<i&&setTimeout((function(){window.scrollTo(0,n),e(n+8,i)}),8)},St=function(){return!!(ee.shippingMethodId&&ee.timeSlotId&&ee.itemDesiredDeliveryDate)},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Y[e];return!t||t.isShippingDetailsExists&&t.isDatesAvailable},wt=function(){var e=(0,a.Z)(o().mark((function e(t){var i,n,r,a,l,u,c,d,s,p,h,m,g,y,I,D;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.pincode,r=t.location,ee.pinCode===n){e.next=37;break}if(a={},l={maxAge:1800,path:"/",encode:decodeURIComponent},u=ge?null===re||void 0===re?void 0:re.productId:ye,c={deliveryLocation:r,destlookup:r,matchedPincode:n,pinCode:n,timeSlotId:"",itemDesiredDeliveryDate:"",shippingMethodId:"",itemDesiredDeliveryDatesList:""},!Ve()){e.next=17;break}return c={destlookupintl:t.location,deliveryLocation:t.location,destlookup:"",matchedPincode:"",pinCode:n,timeSlotId:"",itemDesiredDeliveryDate:"",itemDesiredDeliveryDatesList:"",shippingMethodId:"",selectedCity:n},Ge(c),(0,f.setCookie)(a,E.XL.LAST_SELECTED_LOCATION,r,A(A({},l),{},{path:"/".concat(se,"/gift")})),(0,f.setCookie)(a,E.XL.LAST_SELECTED_CITY,n,A(A({},l),{},{path:"/".concat(se,"/gift")})),e.next=13,(0,O.dA)({city:n,productId:u},v);case 13:i=e.sent,v((0,O.cT)(!(null!==(d=i)&&void 0!==d&&d.isShippingDetailsExists))),e.next=34;break;case 17:if(Ge(c),n||r){e.next=20;break}return e.abrupt("return");case 20:if(Xe()||((0,f.setCookie)(a,E.XL.LAST_SELECTED_PINCODE,n,l),(0,f.setCookie)(a,E.XL.LAST_SELECTED_ADDRESS,r,l),s=(0,f.parseCookies)(),(p=s.selectedFiltersObj)&&"india"===(h=JSON.parse(p)).selectedCountry&&h.pincode!==n&&(0,f.destroyCookie)(null,"selectedFiltersObj",l)),!_e()){e.next=27;break}return e.next=24,(0,O.m1)(n,u,v);case 24:i=e.sent,e.next=33;break;case 27:return m=null,ot&&(m=null===Se||void 0===Se||null===(g=Se.substituteProduct)||void 0===g?void 0:g.productId),e.next=31,(0,O.X$)(n,u,v,m);case 31:i=e.sent,m?(y=i[m].isDatesAvailable||i[ye].isDatesAvailable,v((0,O.cT)(!y))):v((0,O.cT)(!(null!==(I=i)&&void 0!==I&&I.isDatesAvailable)));case 33:(0,O.tN)(n,u,v);case 34:_&&ee.pinCode!==n&&(0,C.rV)(n,Boolean((null===(D=i)||void 0===D?void 0:D.isShippingDetailsExists)||i.isDatesAvailable),ye),(0,O.yi)(v,ye),qe();case 37:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Et=function(){var e=(0,a.Z)(o().mark((function e(t){var i,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.location,n=t.pincode,r={pincode:n,location:"".concat(n,", ").concat(i)},e.next=4,wt(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){var e=(0,f.parseCookies)(),t=e.lastSelectedAddress,i=e.lastSelectedPincode,n=e.lastSelectedIntlCity,r=e.lastSelectedIntlLoc;Ve()?r&&n&&wt({pincode:n,location:r}):!Xe()&&i&&t?wt({pincode:i,location:t}):Xe()||wt({pincode:"",location:""})}),[$]),(0,d.useEffect)((function(){if(y){var e=(0,b.YS)(["".concat(ye,"-selections")]);if(e){var t=JSON.parse(e);Ge(t),nt()||rt()||(0,O.nh)({FNP_CURRENT_CATALOG_ID:se,geoId:t.pinCode,deliveryDate:t.itemDesiredDeliveryDate,productId:null!==i&&void 0!==i&&i.variantProducts?null===re||void 0===re?void 0:re.productId:ye},!1,v),(0,b.ke)(["".concat(ye,"-selections")])}}}),[ye]),(0,d.useEffect)((function(){y||!ee.itemDesiredDeliveryDate||nt()||rt()?ee.itemDesiredDeliveryDate||g()(Ee)||v((0,O.YC)({})):(0,O.nh)({FNP_CURRENT_CATALOG_ID:se,geoId:ee.pinCode||$,deliveryDate:ee.itemDesiredDeliveryDate,productId:null!==i&&void 0!==i&&i.variantProducts?null===re||void 0===re?void 0:re.productId:ye},!1,v)}),[ee.itemDesiredDeliveryDate,v,null===re||void 0===re?void 0:re.productId]);var bt=y?pe:ee.pinCode||$;(0,d.useEffect)((function(){!Xe()&&(y&&pe||ee.pinCode||$)&&(0,O.nh)({FNP_CURRENT_CATALOG_ID:se,geoId:y?pe:ee.pinCode||$,productId:null!==i&&void 0!==i&&i.variantProducts?null===re||void 0===re?void 0:re.productId:ye},!0,v)}),[ye,bt,null===re||void 0===re?void 0:re.productId,v]),(0,d.useEffect)((function(){var e;at()&&dt()&&!St()&&ct(),null!==Y&&void 0!==Y&&null!==(e=Y.deliveryDates)&&void 0!==e&&e.length?window.deliveryDates=Y.deliveryDates:window.deliveryDates=null}),[Y,null===re||void 0===re?void 0:re.productId]);var Ct=function(){var e=ee.itemDesiredDeliveryDate,t=Ee.isPricingRuleApplied,n=Ee.productId;return H.isSuccess&&"Y"===t&&(!(null!==i&&void 0!==i&&i.variantProducts)||n===(null===re||void 0===re?void 0:re.productId))&&""!==e},Tt=function(){var e=be.isPricingRuleApplied,t=be.geoId,n=be.productId;return ee.pinCode===t&&"Y"===e&&(!(null!==i&&void 0!==i&&i.variantProducts)||n===(null===re||void 0===re?void 0:re.productId))},kt={getPrice:function(e){return"INR"!==r.localCurrency&&r.localCurrency?(e*ve).toFixed(2):e},currencyCode:fe,changeURLHash:function(e){ke.push("".concat(window.location.pathname).concat(window.location.search).concat(e))},replaceURLHash:function(e){ke.replace("".concat(window.location.pathname).concat(window.location.search).concat(e))},pdpUserSelections:ee,errors:je,setErrors:ze,containerRef:Oe,personalizedImageRef:xe,personalizedInputRef:Ne,reviewsModuleRef:Ae,offersModuleRef:Le,descriptionModuleRef:Re,moreModuleRef:Ue,gotoOffers:function(){var e=Le.current.offsetTop,t=Ce&&Te&&!at()&&!Ve()?e+105:e+60,i=y?e+350:t;y?It(i):Dt(60,i)},gotoReviews:function(){var e=Ae.current.offsetTop;It(y?e+400:e-150)},gotoDescription:function(){var e=Re.current.offsetTop,t=y?e+350:e;y?It(t):Dt(60,t)},gotoMore:function(){var e=Ue.current.offsetTop;It(y?e+390:e)},gotoTop:function(){window.scrollTo({behavior:"smooth",top:0})},updatePdpUserSelections:Ge,handleValidations:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i={};return y||W("show",".tooltip"),t&&(e=document.getElementById("".concat(y?"mm-wrapper":"dm-wrapper"))),he.showPincodeOrCity&&!dt()?y?(It(document.getElementById("deliver-to-section").offsetTop+98),ze(i={pincode:!0,slideStart:!0,message:"* This is required"}),setTimeout((function(){ze({pincode:!0,slideStart:!1,message:"* This is required"})}),1e3),!1):(ze(i={pincode:!0,message:"* This is required",fieldName:"pincodeTooltip",pincodeTooltip:!0}),!1):St()?(null!==Pe&&void 0!==Pe&&Pe.personalizedProduct&&function(){var n,r;X(!0);for(var o=Pe.personalizedOptions,a=0,l=function(){var n=a;if("Y"===o[n].required){var l,d,s=oe.filter((function(e){return e.fieldName===o[n].fieldName}));if(!s.length)if(y&&!t&&Me[o[a].contentType].current&&It(Me[o[a].contentType].current.offsetTop+200),i=A(A({},i),{},(l={},(0,u.Z)(l,o[n].fieldName,!0),(0,u.Z)(l,"fieldName","personalisedTooltip"),(0,u.Z)(l,"personalisedTooltip",!0),(0,u.Z)(l,"message","* This is required"),l)),t){var p,f=null===(p=e)||void 0===p?void 0:p.querySelector("[data-multiupload-id^=".concat(o[n].fieldName,"]"));f&&!r&&(r=f)}if(s.length)if((null===(d=(0,c.Z)(s,1)[0].value)||void 0===d?void 0:d.filter((function(e){return e}))).length<parseInt(o[n].minInputRequired,10)){var v;if(y&&!t&&Me[o[a].contentType].current&&It(Me[o[a].contentType].current.offsetTop+200),i=A(A({},i),{},(v={},(0,u.Z)(v,o[n].fieldName,!0),(0,u.Z)(v,"fieldName","personalisedTooltip"),(0,u.Z)(v,"personalisedTooltip",!0),(0,u.Z)(v,"message","* This is required"),v)),t){var h,m=null===(h=e)||void 0===h?void 0:h.querySelector("[data-multiupload-id^=".concat(o[n].fieldName,"]"));m&&!r&&(r=m)}if(ze(i),!t)return"break"}}a+=1};a<o.length;){if("break"===l())break}null===(n=r)||void 0===n||n.scrollIntoView({behavior:"smooth",block:"end"})}(),!y&&"CAKE"===J.product.primaryCategoryId&&ne.length>0&&!ie?(ze(i={cakeFlavour:!0,message:"Please select flavour.",fieldName:"cakeFlavourTooltip",cakeFlavourTooltip:!0}),!1):(ze(i),!(Object.keys(i).length>0))):(y&&It(document.getElementById("deliver-on-section").offsetTop+90),ze(i={shippingMethod:!0,message:"* This is required",fieldName:"shippingMethodTooltip",shippingMethodTooltip:!0}),!1)},clearError:qe,getVirtualProduct:Be,sanitizeVariantList:et,handleTextPersonalization:function(e,t){var i={derivedFieldName:t.name,fieldName:t.fieldName,label:t.label,contentType:t.contentType,value:e};return w()((function(){return Ke(i)}),1e3)(),!0},userPersonalization:oe,prepareCartPayload:function(){var e,t,n,r=new URL(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.href),o=ee.shippingSlot,a={};"Y"===(null===o||void 0===o?void 0:o.isDynamic)&&(a.dynamicStartTime=null===o||void 0===o?void 0:o.startTime,a.dynamicEndTime=null===o||void 0===o?void 0:o.endTime);var l=A(A(A({},ee),a),{},{occasion:(null===r||void 0===r||null===(n=r.searchParams)||void 0===n?void 0:n.get("OCCASION_TAGS"))||"",selectedCurrency:G,add_product_id:Be()?re.productId:ye});if(!y){var u=Y.deliveryDates,c=Y.shippingDetails;if("Y"===K&&!We()&&(0,k.co)(c)){var d=(0,k.El)(ee.itemDesiredDeliveryDate,u),s=d.startRangeDate,p=d.endRangeDate;l.leadTimeDeliveryDatesList="".concat(s,",").concat(p)}}return i.personalizedInfo.personalizedProduct&&oe.length>0&&(l=A(A({},l),{},{personalizedOptions:JSON.stringify(oe)})),l},checkFeatureExists:Qe,onCakeTypeChange:function(e){v((0,x.Pm)(e))},selectedType:te,setFlavoursList:function(){var e=et(),t=[];e.forEach((function(e){null!==e&&void 0!==e&&e.flavour&&!t.includes(null===e||void 0===e?void 0:e.flavour)&&t.push(e.flavour)})),t.length>0&&(v((0,x.II)(t)),!y&&t.length>1?v((0,x.kZ)("")):v((0,x.kZ)(t[0])))},selectedFlavour:ie,setSelectedFlavour:x.kZ,getVariantList:tt,checkIsCakeProduct:Fe,isPersonalizedProduct:rt,checkIsInternationalProduct:Ve,checkIsDigitalProduct:Xe,selectedVariant:re,flavours:ne,getSurgePrice:function(){var e,t,n;return Ct()?{price:null===Ee||void 0===Ee?void 0:Ee.price,defaultPrice:null===Ee||void 0===Ee?void 0:Ee.defaultPrice,listPrice:null===Ee||void 0===Ee?void 0:Ee.listPrice}:Tt()?{price:null===be||void 0===be?void 0:be.price,defaultPrice:null===be||void 0===be?void 0:be.defaultPrice,listPrice:null===be||void 0===be?void 0:be.listPrice}:{price:null===i||void 0===i||null===(e=i.productPrice)||void 0===e?void 0:e.price,defaultPrice:null===i||void 0===i||null===(t=i.productPrice)||void 0===t?void 0:t.defaultPrice,listPrice:null===i||void 0===i||null===(n=i.productPrice)||void 0===n?void 0:n.listPrice}},handleImagePersonalization:$e,isCourierProduct:nt,isExpressProduct:function(){return Ie===E.M5.EXPRESS},isSameSkuProduct:ot,getAssocProdIdPrice:function(e){var t;return e===Ie?t={productId:ye,price:i.productPrice.price,deliveryType:i.primaryCategoryId}:Se&&Se.substituteProduct&&(t={productId:Se.substituteProduct.productId,price:Se.substituteProduct.productPrice[Se.substituteProduct.productId].price,deliveryType:Se.substituteProduct.primaryProductCategoryId}),t},imageConfigs:ce,prepareInitialConfigs:Ye,checkMultiUploadHasError:function(){return ce.filter((function(e){return e.isSizeExtError||e.isBackendError})).length>0},checkMultiUploadedImageCount:function(){return ce.filter((function(e){return null!==e.imgUrl})).length},discardMultiImage:function(e,t){var i=(0,l.Z)(ce),n=i.findIndex((function(t){return t.id===e}));n>-1&&(i[n]=A(A({},i[n]),{},{imgUrl:null,isUploaded:!1}),v((0,x.WE)(i)),vt(i,t))},handleSingleFileUpload:gt,handleMultipleFilesUpload:yt,isPincodeEntered:dt,generateFilePath:ht,isValidFileSize:mt,isShippingTimeSlotSelected:St,handlePincodeSelect:wt,handleTimeSlotSelect:ut,handleVariantSwitch:pt,variantList:ae,deliveryType:ue,switchDeliveryType:function(e,t){if((0,O.yi)(v,t),v((0,O.Gn)({productId:t,isDesktop:!y})),v((0,x.gN)(e)),e!==Ie&&t!==ye){var i={productId:t,catalogId:se};(0,O.id)(i,v),v((0,O.jT)({productId:t,isDesktop:!y})),Ge({timeSlotId:"",itemDesiredDeliveryDate:"",shippingMethodId:""})}if(ft(e),qe(),_&&ee.pinCode){var n,r=(null===Y||void 0===Y||null===(n=Y[t])||void 0===n?void 0:n.isDatesAvailable)||!1;(0,C.rV)(ee.pinCode,r,t)}},animateTooltip:ft,isNonDeliverable:function(){var e,t=null===Se||void 0===Se||null===(e=Se.substituteProduct)||void 0===e?void 0:e.productId,i=Y.isDatesAvailable,n=ot()?!(Pt(ye)||Pt(t)):Object.keys(Y).length>0&&!i;return!Ve()&&n},checkIsSKUDeliverable:Pt,isPriceSurgedOnPincode:Tt,isPriceSurgedOnDate:Ct,handleLocationSelect:Et,getProductCombos:function(){var e=[];return i.productComboComponents&&(e=i.productComboComponents),e},extractPersonalization:function(e){var t={havePersonalizations:!1,personalization:{}},i=oe.filter((function(t){return t.fieldName===e}));if(i.length>0){var n=(0,c.Z)(i,1)[0];t.havePersonalizations=!0,t.personalization=n}else{var r,o=(0,b.Wm)([ye]),a=null===Se||void 0===Se||null===(r=Se.substituteProduct)||void 0===r?void 0:r.productId;if(!o&&a&&(o=(0,b.Wm)([a])),!o)return t;if((o=JSON.parse(o)).po.length){var l,u=null===(l=o.po)||void 0===l?void 0:l.filter((function(t){return t.fieldName===e}));if((null===u||void 0===u?void 0:u.length)>0){var d=(0,c.Z)(u,1)[0];t.personalization=d,t.havePersonalizations=!0}}else t.personalization={}}return t},prepareConfigsFromLocalStorage:function(e,t){var i=(0,l.Z)(t).map((function(t,i){return e[i]?A(A({},t),{},{isUploaded:!0,imgUrl:e[i]}):A(A({},t),{},{isSizeExtError:!1})}));v((0,x.WE)(i))},isUAECatalog:_e,clearShipping:function(){Ge({deliveryLocation:"",destlookup:"",matchedPincode:"",pinCode:"",timeSlotId:"",itemDesiredDeliveryDate:"",shippingMethodId:"",itemDesiredDeliveryDatesList:""})},getPersonalizedUploadedImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=null,i=ke.query;if(i.prv&&i.bucket)return t="https://".concat(i.bucket,".s3-accelerate.amazonaws.com/pz/").concat(i.prv);var n=window.localStorage.getItem(e);return n&&(n=JSON.parse(n),t=I()(n,"po.[0].value.[0]",null)),t},setMobileModalStatus:N,mobileModalStatus:P,showHideDesktopTooltips:W,uploadProgressStatus:de,clearDeliveryDetails:lt,setActiveStickyTab:M,activeStickyTab:U,clearFieldsOnAddToCart:function(){var e;(lt(),He(),v((0,x.kZ)("")),(Qe(E.pX.INGREDIENTS)||Qe(E.pX.STEMS)||Qe(E.pX.PIECES))&&null!==le&&void 0!==le&&le.length&&le[0].type)&&v((0,x.Pm)(null===(e=le[0])||void 0===e?void 0:e.type));(at()||Xe())&&ct()},showTooltip:j,setShowTooltip:z,isCourierDelivery:at,autoFillDate:ct,quantityList:le,checkIsPriceSurge:function(e){var t,n=e.price,r=e.listPrice,o=n!==r,a=0;return r&&n&&r>n&&r!==n&&(a=(100-n/r*100).toFixed(0)),o&&0===a&&n>(null===i||void 0===i||null===(t=i.productPrice)||void 0===t?void 0:t.price)&&!at()},removeUserPersonalization:He,clearPersonalizationFromStore:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=[];i=null!==t?oe.map((function(i){var n=i;return n.fieldName!==e||(n.value[t]=null),n})):oe.filter((function(t){return t.fieldName!==e})),v((0,x.Pw)(i))},isFirstValidationDone:B,checkIsDigitalProductWithTypeId:We};return(0,n.jsx)(L.Provider,{value:kt,children:t})};L.Consumer},82005:function(e,t,i){"use strict";function n(){return!!window.cdp}function r(e){n()&&window.cdp.getImagehover(e)}function o(){n()&&window.cdp.widget()}function a(){n()&&window.cdp.click()}function l(){n()&&window.cdp.description()}function u(e,t,i){n()&&window.cdp.getLocation(e,t,i)}function c(){n()&&window.cdp.variantChange()}function d(){n()&&window.cdp.load()}function s(e,t,i,r){n()&&window.cdp.addCart(e,t,i,r)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";n()&&window.cdp.delivery(e,t,i,r,o)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n()&&window.cdp.addonload(e,t)}function v(e){n()&&window.cdp.addon(e)}function h(e,t){n()&&window.cdp.getClickDetail(e,t)}function m(e,t){n()&&window.cdp.getSlideDetail(e,t)}i.d(t,{AL:function(){return r},WP:function(){return o},xw:function(){return a},Et:function(){return l},rV:function(){return u},a:function(){return c},Qw:function(){return d},jq:function(){return s},aQ:function(){return p},B8:function(){return f},gB:function(){return v},F_:function(){return h},sf:function(){return m}})},28278:function(e,t,i){"use strict";i.d(t,{uy:function(){return y},Ku:function(){return w}});var n=i(26265),r=i(809),o=i.n(r),a=i(92447),l=i(52353),u=i.n(l),c=i(9669),d=i.n(c),s=i(62033),p=i(75129),f=i(7112),v=i(25700);function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var m=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.O6)({resource:"fnp",name:"recentViewedAWSUrl"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var g=function(e){return{productId:null===e||void 0===e?void 0:e.split("_")[0],viewedDateMillis:parseInt(null===e||void 0===e?void 0:e.split("_")[1],10),operationType:"insertion"}},y=function(){var e=(0,a.Z)(o().mark((function e(t,i){var n,r,a,l,c,d,f,v,h,y,I,D,S;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],r=(0,p.ej)("faul"),!i||!r){e.next=33;break}if(!t){e.next=24;break}return e.next=6,m();case 6:return l=e.sent,e.next=9,(0,s.F0)(l&&l.value,r);case 9:if(c=e.sent,d=c&&c.Items,f=[],v=[],d&&0!==d.length&&d.forEach((function(e){f.push(e.productId)})),null===(a=t.visitedProducts)||void 0===a||a.split(",").forEach((function(e){var t=null===e||void 0===e?void 0:e.split("_")[0];f.includes(t)||v.push(g(e))})),!v.length){e.next=23;break}return h={uid:r,items:v},e.next=19,(0,s.O6)({resource:"fnp",name:"pushRecentViewAWSUrl",defaultValue:""});case 19:if(y=e.sent,u()(y)){e.next=23;break}return e.next=23,(0,s.XI)(y.value,h,"high",!0);case 23:localStorage.removeItem("rv");case 24:return e.next=26,m();case 26:return I=e.sent,e.next=29,(0,s.F0)(I&&I.value,r);case 29:(D=e.sent)&&D.Items&&D.Items.forEach((function(e){n.push(e.productId)})),e.next=34;break;case 33:t&&(null===t||void 0===t||null===(S=t.visitedProducts)||void 0===S||S.split(",").forEach((function(e){var t=null===e||void 0===e?void 0:e.split("_")[0];n.push(t)})));case 34:return e.abrupt("return",n);case 35:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),I=function(e,t,i,n){var r=[],o=[];if(null===e||void 0===e||e.split(",").forEach((function(e){if(n){var t=null===e||void 0===e?void 0:e.split("_")[2];if(n===t){var i=e.replace("NS","S");o.push(null===i||void 0===i?void 0:i.split("_")[0]),r.push(i)}}else o.push(null===e||void 0===e?void 0:e.split("_")[0]),r.push(e)})),t){var a=o.indexOf(t);a>-1&&(o.splice(a,1),r.splice(a,1)),r.unshift(i)}return{productIdsList:o=o.join(","),recentlyViewed:r}},D=function(){var e=(0,a.Z)(o().mark((function e(t){var i,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/control/getSystemPropertyValue?name=".concat(t,"&resource=fnp"));case 2:return i=e.sent,n=i.data,e.abrupt("return",n.value);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function S(e,t,i){if(i&&i.length)for(var n=0;n<i.length;n+=1)if(i[n][e]===t)return i[n];return""}var P=function(e,t,i,r,o){var a=[],l=[];if(i&&o.length&&o.forEach((function(e){if(i===e.productId&&r>e.viewedDateMillis){var t=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e);t.operationType="deletion",a.push(t),a.push({productId:i,viewedDateMillis:r,operationType:"insertion"})}})),Array.isArray(t))for(var u=0;u<t.length;u+=1){var c,s=S("productId",null===(c=t[u])||void 0===c?void 0:c.split("_")[0],o);"object"===typeof s&&l.push({productId:s.productId,viewedDateMillis:parseInt(s.viewedDateMillis,10),operationType:"deletion"}),l.push(g(t[u]))}else l.push(g(t));var p={uid:e,items:a.length?a:l};D("pushRecentViewAWSUrl").then((function(e){e&&d().post(e,p)}))},w=function(e,t){var i=function(){var e=new Date,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var i=t.responseText;null!=i&&(e=new Date(1e3*parseInt(i,10)))}};try{t.open("GET","https://time.akamai.com/",!1),t.send()}catch(i){(0,v.default)(i)}return e}(),n=new Date(i).getTime(),r=JSON.parse(localStorage.getItem("rv")),o=null,a=(0,p.ej)("fsid"),l=(0,p.ej)("faul"),u=[],c="";if(e){var s=t?"S":"NS";c="".concat(e,"_").concat(n,"_").concat(a,"_").concat(s)}if(r||t)if(t&&l)D("recentViewedAWSUrl").then((function(t){d().get("".concat(t,"?uid=").concat(l)).then((function(t){var i=t.data.Items;e&&i&&0!==i.length?i.forEach((function(t){e&&t.productId&&e!==t.productId&&u.push(t.productId)})):i.forEach((function(e){u.push(e.productId)})),r&&(r.laxt=n,o=I(r.visitedProducts,e,c,a),r.visitedProducts=o.recentlyViewed.join(","),localStorage.setItem("rv",JSON.stringify(r)));var d=o&&!r.syncStatus?o.recentlyViewed:c;(o&&o.recentlyViewed.length&&!r.syncStatus||e)&&P(l,d,e,n,i),r&&!1===r.syncStatus&&(r.syncStatus=!0,localStorage.setItem("rv",JSON.stringify(r)))}))}));else{r.laxt=n;var f=I(r.visitedProducts,e,c);f.recentlyViewed.length>30&&f.recentlyViewed.pop(),r.visitedProducts=f.recentlyViewed.join(","),localStorage.setItem("rv",JSON.stringify(r))}else null===r&&e&&((r={}).laxt=n,r.visitedProducts=c,r.syncStatus=!1,localStorage.setItem("rv",JSON.stringify(r)))}}}]);