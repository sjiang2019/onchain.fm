(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{129:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXExMT////BwcHo6Oju7u7Y2Nj5+fn09PTJycn8/PzPz8/GxsbU1NTMzMzl5eXp6enf3984nfntAAADJ0lEQVR4nO3cjZKaMBRAYYiIIL/v/7SLii6SEEGJeC/n60yn0+q4OcUAUYgiAAAAAAAAAAAAAAAAAAAAAAAA4OcZU1VZIFVhzNbjW84UzSkOJ0/arUe4mDnmAYtcpWdZm4o5hi7Syc9bD3MJU34hSRcl23qgS4ScSgaSrcc531feOVfl1kOdrbhvJskhkKR/gaOYabZIbz9xbYJphDY5hXuF+7uTJv9oYqOJTVGT1U7ctDQporJts6JY4xVUNDFZk1/+Nk9P5QrjMK38Jk+nycnnpykKtpP7f2sv/TiK/CajJN2/fBpFfBPHysGnu2nxTVwrB9VnryC+ydlOEjefDUZ6E3NwNElfHqZ4Ryu+iXPR7eVq0MG3BC2+SfJOkzrOPVF22aSOY18U8U3eeO/cpqDpKOKbuFasvXPsY1aejCK9SeT6sMe3Lx7sqKaiiG/iOmbzfYTXDB43EUV+E/ugrfY8u3l6pDuK/CbXvciQ7/O7ZvRYZxQFTUZRkumzHceO2xVFQ5OoHKwp1Z5jMdexjCOKiiYmK28zbVpnnnE4D++6GXn8FBVNLud0VZF1vzwbyTl1J7G3FCVNXppO0kUZLWzvpImpppNYUfbRxFQvvgD3FGUXTV4meY6yhya+ueRhEEBfE/twY06S4YGNuiamHe9F5iUZnCZpa2Lq8YTp3eM8OfTPU9bEXM99BlFmTK9WFGVN+tPBR5RFSe5ziqom5nGG3EeZPZf0EnVNzGDR4BplaRJ9TczTOkoXZXESdU3MaL2tXDiXKGwyThLH4++l7K+JleQdqpo4v16w7ybZxLLijptkS/cv+puslkRPk/knebtpUq14eaCSJituJVqauL+nRBOa0MRGExtNbDSx0cRGExtNbDSxjZo0aXq6SB+/vf/HVOHnOyuhiY0mNprY5DYJ9wOLbRKfw907SN79Cvq1xjQJJpfWxLoWP5hWTJMoC36zx5vXVyn/DvvT8jDk3LLuYnxlUhC+q8V+0ReiSEsSRcdVT4dtibDbx14YkxVtE+Z2j01b+K6M+mnhjtm2HhkAAAAAAAAAAAAAAAAAAAAAAAAAAN/0B81WMJZb1X1AAAAAAElFTkSuQmCC"},202:function(e,n,t){"use strict";t.d(n,"a",(function(){return Le}));var r=t(12),o=t.n(r),i=t(3),a=t.n(i),s=t(268),c=t(271),l=t(267),u=t(134),d=t(82),j=t(0),g=t(117),h=t(6),f=t(4),b=t(79),O=t(17),x=t(26),m=t(189),S=t.n(m),p=t(14),y=t.n(p),w=t(37),v=t(2);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){y()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e){return Object(v.jsx)(w.a,C(C({},e),{},{style:[{color:"white"},e.style],children:e.children}))}var q=function(e){return!!/^(0x)?[0-9a-f]{40}$/i.test(e)},L=function(e){return e.endsWith(".eth")},P=function(e){var n=Math.floor(e/6e4),t=parseFloat((e%6e4/1e3).toFixed(0));return 60==t?n+1+":00":n+":"+(t<10?"0":"")+t};function I(e){return Object(v.jsx)(S.a,{style:{backgroundColor:"rgba(255,255,255,0)"},minimumTrackTintColor:"#5c5c5c00",maximumTrackTintColor:"#5c5c5c00",thumbTintColor:"#5c5c5c",minimumValue:0,maximumValue:e.endMs,value:e.curMs,tapToSeek:!0,onSlidingStart:e.onSlidingStart,onSlidingComplete:e.onSlidingComplete})}function k(e){var n=Object(j.useState)(0),t=o()(n,2),r=t[0],i=t[1],s=Object(j.useState)(1),c=o()(s,2),l=c[0],u=c[1],d=Object(j.useState)(!1),g=o()(d,2),h=g[0],b=g[1];Object(j.useEffect)((function(){var n=e.queueState.soundStatus;if(null!=n&&!h){var t=null==n.durationMillis||isNaN(n.durationMillis)?1:n.durationMillis;i(n.positionMillis),u(t)}}),[e.queueState.soundStatus,i,u,h]);var m=e.queueState.currentLoadedSong?e.queueState.currentLoadedSong.song.collectionName+": "+e.queueState.currentLoadedSong.song.name:"~ vibing to silence ~";return Object(v.jsxs)(f.a,{style:{width:"100%"},children:[Object(v.jsx)(f.a,{style:z.sliderView,children:Object(v.jsx)(I,{curMs:r,endMs:l,onSlidingStart:function(){return b(!0)},onSlidingComplete:function(n){var t;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(null==(t=e.queueState.currentLoadedSong)?void 0:t.sound.setPositionAsync(n));case 2:b(!1);case 3:case"end":return r.stop()}}),null,null,null,Promise)}})}),Object(v.jsx)(f.a,{children:Object(v.jsxs)(x.a,{onPress:function(){null!=e.queueState.currentLoadedSong&&e.onChangeIsPlayerOpen()},disabled:null==e.queueState.currentLoadedSong||e.queueState.isLoading,style:z.container,children:[Object(v.jsxs)(f.a,{style:z.view,children:[Object(v.jsx)(f.a,{style:{alignItems:"center",paddingLeft:10},children:Object(v.jsx)(T,{style:{fontSize:12},numberOfLines:1,children:P(r)})}),Object(v.jsx)(f.a,{style:{width:240,alignItems:"center"},children:Object(v.jsx)(T,{style:{fontSize:16},numberOfLines:1,ellipsizeMode:"tail",children:m})}),Object(v.jsx)(f.a,{style:{alignItems:"center",paddingRight:10},children:Object(v.jsx)(T,{style:{fontSize:12},numberOfLines:1,children:P(l-r)})})]}),Object(v.jsxs)(f.a,{style:z.controlsView,children:[Object(v.jsx)(x.a,{onPress:function(){return e.queueState.setIsLooping(!e.queueState.isLooping)},style:{paddingTop:4},children:Object(v.jsx)(T,{style:{fontSize:"web"===O.a.OS?24:42,lineHeight:(O.a.OS,48),color:e.queueState.isLooping?"#9B59B6":"white"},children:"\u27f3"})}),Object(v.jsx)(x.a,{onPress:function(){return e.queueState.handlePlayPreviousSong()},disabled:e.queueState.isLoading,children:Object(v.jsx)(T,{style:{fontSize:48},children:"\ud83c\udf1c"})}),Object(v.jsx)(x.a,{onPress:function(){null!=e.queueState.currentLoadedSong&&e.queueState.setIsPlaying(!e.queueState.isPlaying)},disabled:null==e.queueState.currentLoadedSong,children:e.queueState.isPlaying?Object(v.jsx)(T,{style:{fontSize:48},children:"\ud83c\udf1d"}):Object(v.jsx)(T,{style:{fontSize:48},children:"\ud83c\udf1e"})}),Object(v.jsx)(x.a,{onPress:function(){return e.queueState.handlePlayNextSong()},disabled:e.queueState.isLoading,children:Object(v.jsx)(T,{style:{fontSize:48},children:"\ud83c\udf1b"})}),Object(v.jsx)(x.a,{onPress:e.handleToggleQueueView,children:Object(v.jsx)(T,{style:{fontSize:32,lineHeight:48},children:"\u2261"})})]})]})})]})}var z=h.a.create({sliderView:{marginTop:"web"===O.a.OS?-10:-20,marginLeft:10,marginRight:10},container:{width:"100%",alignItems:"center",justifyContent:"flex-end"},view:{width:"100%",flexDirection:"row",justifyContent:"space-between"},controlsView:{flexDirection:"row",justifyContent:"space-between",width:"100%",paddingTop:30,paddingLeft:"10%",paddingRight:"10%"}});function Q(e){var n,t=null==(n=e.queueState.currentLoadedSong)?void 0:n.sound;return Object(j.useEffect)((function(){null!=t&&(e.queueState.isPlaying?function(e){a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==e){n.next=3;break}return n.next=3,a.a.awrap(e.playAsync());case 3:case"end":return n.stop()}}),null,null,null,Promise)}(t):function(e){a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==e){n.next=3;break}return n.next=3,a.a.awrap(e.pauseAsync());case 3:case"end":return n.stop()}}),null,null,null,Promise)}(t))}),[e.queueState.isPlaying,t]),Object(v.jsx)(f.a,{style:{width:"100%"},children:Object(v.jsx)(k,{queueState:e.queueState,onChangeIsPlayerOpen:e.onChangeIsSongInfoViewOpen,handleToggleQueueView:e.handleToggleQueueView})})}var U=t(42),M=t.n(U),E=t(156);function D(){var e=Object(j.useState)(!1),n=o()(e,2),t=n[0],r=n[1],i=Object(j.useState)(null),a=o()(i,2),s=a[0],c=a[1],l=Object(j.useState)(null),u=o()(l,2),d=u[0],g=u[1],h=Object(j.useState)(null),f=o()(h,2),b=f[0],O=f[1];return Object(j.useEffect)((function(){if(t&&null!=s&&null!=d){var e=E.a.show(s,{shadow:!1,backgroundColor:"white",containerStyle:{width:"100%",borderRadius:10,borderTopColor:"success"===d?"limegreen":"red",borderTopWidth:8},position:-200,animation:!0,hideOnPress:!0,textColor:"#2d2d2d"});setTimeout((function(){E.a.hide(e),r(!1)}),null!=b?b:700)}}),[t,s,d,b]),{displayToast:function(e,n,t){c(e),r(!0),g(n),null!=t&&O(t)}}}function V(e,n){return new Promise((function(t,r){u.a.Sound.createAsync({uri:e}).then(t,r),setTimeout(r,n)}))}function B(){var e=D().displayToast,n=Object(j.useState)([]),t=o()(n,2),r=t[0],i=t[1],s=Object(j.useState)([]),c=o()(s,2),l=c[0],u=c[1],d=Object(j.useState)([]),g=o()(d,2),h=g[0],f=g[1],b=Object(j.useState)(null),O=o()(b,2),x=O[0],m=O[1],S=Object(j.useState)(!1),p=o()(S,2),y=p[0],w=p[1],v=Object(j.useState)(null),A=o()(v,2),C=A[0],T=A[1],q=Object(j.useState)(!1),L=o()(q,2),P=L[0],I=L[1],k=Object(j.useState)(!1),z=o()(k,2),Q=z[0],U=z[1],E=Object(j.useState)(!1),B=o()(E,2),F=B[0],R=B[1],N=function(e){i((function(n){return[].concat(M()(n),[e])}))},G=function(n){var t,r,o;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=!1,null==n||null==n.audioUri||F){i.next=17;break}return i.prev=2,R(!0),i.next=6,a.a.awrap(V(n.audioUri,3e3));case 6:r=i.sent,null!=(o=r.sound)&&(m({song:n,sound:o}),t=!0,w(!0),o.setOnPlaybackStatusUpdate((function(e){T(e),!0===e.didJustFinish&&I(!0)}))),i.next=14;break;case 11:i.prev=11,i.t0=i.catch(2),e("audio encoding for "+n.name+" in progress","error",2e3);case 14:return i.prev=14,R(!1),i.finish(14);case 17:return i.abrupt("return",t);case 18:case"end":return i.stop()}}),null,null,[[2,11,14,17]],Promise)},J=function(){if(null!=x&&N(x.song),l.length>0){var e=l[0];null!=e&&(G(e),u((function(e){return M()(e.slice(1))})))}else if(h.length>0){var n=h[0];null!=n&&(G(n),f((function(e){return M()(e.slice(1))})))}};return Object(j.useEffect)((function(){P&&(Q?null!=x&&G(x.song):J(),I(!1))}),[P,I]),Object(j.useEffect)((function(){if(null!=(null==x?void 0:x.sound))return function(){x.sound.unloadAsync()}}),[null==x?void 0:x.sound]),{userQueue:l,globalQueue:h,addToUserQueue:function(e){u((function(n){return[].concat(M()(n),[e])}))},setGlobalQueue:f,addToHistory:N,handlePlayPreviousSong:function(){if(r.length>0){var e=r[r.length-1];null!=e&&(G(e),i((function(e){return M()(e.slice(0,-1))})))}return null},handlePlayNextSong:J,currentLoadedSong:x,handleSetCurrentSong:G,removeFromUserQueue:function(e){u((function(n){return n.filter((function(n){return n!=e}))}))},removeFromGlobalQueue:function(e){f((function(n){return n.filter((function(n){return n!=e}))}))},isPlaying:y,setIsPlaying:w,soundStatus:C,isLooping:Q,setIsLooping:U,isLoading:F}}var F=t(68),R=t(129),N=t.n(R),G=t(56);function J(e){var n,t;return Object(v.jsxs)(f.a,{style:{flexDirection:"row",justifyContent:"flex-start",width:220},children:[Object(v.jsx)(f.a,{style:{marginRight:10},children:Object(v.jsx)(G.a,{defaultSource:N.a,source:{uri:e.song.imageUri},style:{height:33,width:33,borderRadius:4}})}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(T,{style:{fontSize:14},ellipsizeMode:"tail",numberOfLines:1,children:null!=(n=e.song.name)?n:"untitled"}),Object(v.jsx)(T,{style:{fontSize:14,color:"gray"},ellipsizeMode:"tail",numberOfLines:1,children:null!=(t=e.song.collectionName)?t:"unknown collection"})]})]})}function Y(e){var n=D().displayToast;return Object(v.jsxs)(x.a,{style:Z.container,onPress:function(){e.isLoading||e.onChangeSong(e.song)},disabled:e.isLoading,children:[Object(v.jsx)(J,{song:e.song}),Object(v.jsxs)(f.a,{style:Z.buttons,children:[Object(v.jsx)(x.a,{onPress:function(){e.addToUserQueue(e.song),n("added to queue","success")},style:{marginRight:20},children:Object(v.jsx)(T,{style:{fontSize:24},children:"\uff0b"})}),null!=e.removeFromQueue&&Object(v.jsx)(x.a,{style:{paddingTop:6},onPress:function(){e.removeFromQueue(e.song)},children:Object(v.jsx)(T,{style:{fontSize:20},children:"\u2715"})})]})]})}var Z=h.a.create({container:{flexDirection:"row",justifyContent:"space-between",padding:16,alignItems:"center"},buttons:{flexDirection:"row",justifyContent:"flex-end",height:"100%",alignItems:"flex-start"}});function K(e){return Object(v.jsx)(F.a,{data:e.songs,renderItem:function(n){var t=n.item;return Object(v.jsx)(Y,{isLoading:e.isLoading,song:t,onChangeSong:e.onChangeCurrentSong,addToUserQueue:e.addToUserQueue,removeFromQueue:e.removeFromQueue})},keyExtractor:function(e,n){return e.collectionAddress+"-"+e.tokenId+"-"+n},ListFooterComponent:!0===e.hasNextPage?e.loadMoreButton:void 0})}var X=t(44);function W(e){var n,t=null==(n=e.queueState.currentLoadedSong)?void 0:n.song;return Object(v.jsx)(f.a,{style:H.container,children:Object(v.jsxs)(X.a,{style:H.safeAreaView,children:[Object(v.jsx)(x.a,{onPress:function(){return e.handleCloseQueueView()},style:{marginBottom:24,paddingLeft:16,marginTop:10},children:Object(v.jsx)(T,{style:{fontSize:24},children:"\u2715"})}),Object(v.jsx)(T,{style:{fontSize:18,paddingLeft:16},children:"now playing"}),t&&Object(v.jsx)(f.a,{style:{padding:16},children:Object(v.jsx)(J,{song:t})}),e.queueState.userQueue.length>0&&Object(v.jsxs)(f.a,{children:[Object(v.jsx)(T,{style:{fontSize:18,paddingLeft:16},children:"up next"}),Object(v.jsx)(K,{songs:e.queueState.userQueue,onChangeCurrentSong:function(n){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(e.queueState.handleSetCurrentSong(n));case 2:t.sent&&e.queueState.removeFromUserQueue(n);case 4:case"end":return t.stop()}}),null,null,null,Promise)},addToUserQueue:e.queueState.addToUserQueue,removeFromQueue:e.queueState.removeFromUserQueue,isLoading:e.queueState.isLoading})]}),Object(v.jsx)(T,{style:{fontSize:18,paddingLeft:16},children:"similar"}),Object(v.jsx)(K,{songs:e.queueState.globalQueue,onChangeCurrentSong:function(n){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(e.queueState.handleSetCurrentSong(n));case 2:t.sent&&e.queueState.removeFromGlobalQueue(n);case 4:case"end":return t.stop()}}),null,null,null,Promise)},addToUserQueue:function(n){e.queueState.removeFromGlobalQueue(n),e.queueState.addToUserQueue(n)},removeFromQueue:e.queueState.removeFromGlobalQueue,isLoading:e.queueState.isLoading})]})})}var H=h.a.create({container:{width:"100%",alignItems:"center",flex:1,height:"100%"},safeAreaView:{flex:1,width:"100%",marginTop:20}}),$=t(272),_=t(269);function ee(e){var n;return Object(v.jsx)(x.a,{style:ne.container,onPress:function(){e.onChangeCollection(e.collection)},children:Object(v.jsx)(f.a,{style:ne.view,children:Object(v.jsx)(f.a,{children:Object(v.jsx)(T,{style:{fontSize:14},ellipsizeMode:"tail",numberOfLines:1,children:null!=(n=e.collection.name)?n:"untitled"})})})})}var ne=h.a.create({container:{flexDirection:"row",justifyContent:"space-between",padding:16,alignItems:"center"},view:{flexDirection:"row",justifyContent:"flex-start",width:"90%"}});function te(e){return Object(v.jsx)(X.a,{children:Object(v.jsx)(F.a,{data:e.collections,renderItem:function(n){var t=n.item;return Object(v.jsx)(ee,{collection:t,onChangeCollection:e.onChangeCollection})},keyExtractor:function(e){return e.collectionAddress}})})}function re(e){var n,t=function(e,n){var t=Object($.a)(Object(_.a)("\n    query FindCollection($collectionAddresses: [String!]!) {\n      collections(pagination: {limit: 50}, where: {collectionAddresses: $collectionAddresses}) {\n        nodes {\n          address\n          description\n          name\n        }\n      }\n    }\n"),{variables:{collectionAddresses:[e]},skip:!n}),r=t.loading,o=t.error,i=t.data;return{loading:r,error:o,data:null==i?[]:i.collections.nodes.map((function(e){return{collectionAddress:e.address,description:e.description,name:e.name}}))}}(e.submitted,null!=(n=e.submitted)&&0!==n.length&&q(n)),r=t.loading,o=t.error,i=t.data,a=function(e,n){var t=Object($.a)(Object(_.a)("\n    query Search($query: String!) {\n      search(pagination: {limit: 50}, query: {text: $query}, filter: {entityType: COLLECTION}) {\n        nodes {\n          collectionAddress\n          description\n          name\n        }\n      }\n    }\n"),{variables:{query:e},skip:!n}),r=t.loading,o=t.error,i=t.data;return{loading:r,error:o,data:null==i?[]:i.search.nodes.map((function(e){return{collectionAddress:e.collectionAddress,description:e.description,name:e.name}}))}}(e.submitted,function(e){return null!=e&&0!==e.length&&(!q(e)&&!L(e))}(e.submitted)),s=a.loading,c=a.error,l=a.data,u=i.length>0?i:l;return Object(v.jsx)(f.a,{children:r||s?Object(v.jsx)(T,{style:{fontSize:16,marginTop:20},children:"\u2740 \u2740 \u2740 searching collections \u2740 \u2740 \u2740"}):o||c?Object(v.jsxs)(T,{style:{fontSize:16,marginTop:20},children:["we encountered an error :","("]}):u&&u.length>0&&Object(v.jsx)(te,{collections:u,onChangeCollection:e.onChangeSelectedCollection})})}var oe=t(88),ie=t(118),ae=t(270);function se(e){var n,t=Object(j.useState)(!1),r=o()(t,2),i=r[0],a=r[1];return Object(v.jsxs)(f.a,{style:ue.container,children:[Object(v.jsxs)(f.a,{style:[ue.searchInputBackground,{width:i?"85%":"100%"}],children:[Object(v.jsxs)(f.a,{style:{width:"100%",flexDirection:"row",flex:1},children:[Object(v.jsx)(ae.a,{name:"search",size:20,color:"black",style:{marginLeft:6}}),Object(v.jsx)(ie.a,{style:ue.textInput,autoCorrect:!1,autoComplete:"off",autoCapitalize:"none",placeholder:e.placeholderText,returnKeyType:"search",onSubmitEditing:function(){return e.onChangeSubmittedText(e.text)},value:null!=(n=e.text)?n:"",onChangeText:e.onChangeText,onFocus:function(){return a(!0)}})]}),null!=e.text&&e.text.length>0&&Object(v.jsx)(x.a,{onPress:function(){return e.onChangeText(null)},style:{paddingRight:6,paddingLeft:6},children:Object(v.jsx)(T,{style:{fontSize:18},children:"\u2715"})})]}),i&&Object(v.jsx)(x.a,{onPress:function(){e.onChangeText(null),e.onChangeSubmittedText(null),a(!1),oe.a.dismiss()},style:ue.cancelButton,children:Object(v.jsx)(T,{style:{padding:8},children:"Cancel"})})]})}var ce,le,ue=h.a.create({container:{margin:15,alignItems:"center",flexDirection:"row"},searchInputBackground:{padding:10,flexDirection:"row",backgroundColor:"#5c5c5c",borderRadius:15,alignItems:"center"},textInput:{fontSize:20,marginLeft:10,flex:1,color:"white"},cancelButton:{marginLeft:12,borderWidth:1,borderColor:"white",borderRadius:6}}),de=t(154),je=t.n(de),ge=Object(_.a)(ce||(ce=je()(["\n  fragment TokenFragment on Token {\n    collectionAddress\n    tokenId\n    name\n    collectionName\n    owner\n    description\n    content {\n      mediaEncoding {\n        ... on AudioEncodingTypes {\n          original\n        }\n      }\n    }\n    image {\n      mediaEncoding {\n        ... on ImageEncodingTypes {\n          thumbnail\n        }\n      }\n    }\n    metadata\n  }\n"]))),he=Object(_.a)(le||(le=je()(["\n  query MusicNFTs(\n    $collectionAddresses: [String!]\n    $ownerAddresses: [String!]\n    $sort: TokenSortInput\n    $limit: Int!\n  ) {\n    tokens(\n      pagination: { limit: $limit }\n      sort: $sort\n      where: {\n        collectionAddresses: $collectionAddresses\n        ownerAddresses: $ownerAddresses\n      }\n      filter: { mediaType: AUDIO }\n    ) {\n      nodes {\n        token {\n          ...TokenFragment\n        }\n      }\n    }\n  }\n  ","\n"])),ge);function fe(e,n,t,r){var o=null==e?void 0:[e.collectionAddress],i=null==n?void 0:[n],a=Object($.a)(he,{variables:{collectionAddresses:o,ownerAddresses:i,limit:null!=r?r:500,sort:t},skip:null==e&&null==n}),s=a.loading,c=a.error,l=a.data;return{loading:s,error:c,data:null==l?[]:l.tokens.nodes.map((function(e){var n=e.token;return{collectionAddress:n.collectionAddress,tokenId:n.tokenId,name:n.name,collectionName:n.collectionName,owner:n.owner,description:n.description,audioUri:n.content.mediaEncoding.original,imageUri:n.image.mediaEncoding.thumbnail,metadata:n.metadata}}))}}function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?be(Object(t),!0).forEach((function(n){y()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function xe(e){var n=Object(j.useState)([]),t=o()(n,2),r=t[0],i=t[1];return Object(j.useEffect)((function(){i(e.songs.slice(0,e.offset+10))}),[e.offset,e.songs]),Object(v.jsx)(K,Oe(Oe({},e),{},{loadMoreButton:Object(v.jsx)(x.a,{style:me.loadMoreButton,onPress:function(){return e.setOffset((function(e){return e+10}))},children:Object(v.jsx)(T,{style:me.loadMoreText,children:"load more"})}),hasNextPage:e.songs.length>r.length,songs:r}))}var me=h.a.create({loadMoreButton:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:20},loadMoreText:{fontSize:16,padding:8,borderWidth:1,borderColor:"white",borderRadius:6}});function Se(e){var n=fe(e.collection,e.ownerAddress),t=n.loading,r=n.error,o=n.data;return Object(v.jsx)(X.a,{style:{flex:1,width:"100%"},children:t?Object(v.jsx)(f.a,{style:{width:"100%",alignItems:"center"},children:Object(v.jsx)(T,{style:{fontSize:16,marginTop:20},children:"\u2740 \u2740 \u2740 searching music \u2740 \u2740 \u2740"})}):r?Object(v.jsx)(f.a,{style:{width:"100%",alignItems:"center"},children:Object(v.jsxs)(T,{style:{fontSize:16,marginTop:20},children:["we encountered an error :","("]})}):o.length>0?Object(v.jsx)(xe,{songs:o,onChangeCurrentSong:function(n){var t,r,i,s,c,l;return a.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,a.a.awrap(e.onChangeSelectedSong(n));case 2:if(u.sent&&o.length>0){if(t=o.indexOf(n)+1,r=o.slice(t,t+25),i=[],s=Math.min(25-r.length,t-1),25>r.length)for(c=0;c<s;c++)l=o[c],r.includes(l)||i.push(l);e.handleChangeGlobalQueue([].concat(M()(r),i))}case 4:case"end":return u.stop()}}),null,null,null,Promise)},addToUserQueue:e.addToUserQueue,isLoading:e.isLoading,offset:e.offset,setOffset:e.setOffset}):Object(v.jsx)(f.a,{style:{width:"100%",alignItems:"center"},children:Object(v.jsxs)(T,{style:{fontSize:16,marginTop:20},children:["no music found :","("]})})})}function pe(e){var n=fe({collectionAddress:"0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7"},void 0,{sortKey:"MINTED",sortDirection:"DESC"},10),t=n.loading,r=n.error,o=n.data;return Object(v.jsxs)(f.a,{style:{width:"100%",flex:1},children:[Object(v.jsx)(f.a,{style:{width:"100%",alignItems:"center"},children:Object(v.jsxs)(f.a,{style:{width:"80%",alignItems:"center",marginTop:18},children:[Object(v.jsx)(T,{style:{fontSize:24,marginBottom:18},children:"welcome to onchain.fm"}),Object(v.jsxs)(f.a,{style:{alignItems:"flex-start"},children:[Object(v.jsx)(T,{style:{fontSize:16,marginBottom:12},children:"\u2740 search for a collection by name or address"}),Object(v.jsx)(T,{style:{fontSize:16},children:"\u2740 search for an owner by ens or address"})]})]})}),Object(v.jsxs)(X.a,{style:ye.safeAreaView,children:[Object(v.jsx)(f.a,{style:{width:"100%",alignItems:"center"},children:Object(v.jsx)(T,{style:{fontSize:18,padding:8},children:"recently minted on zora"})}),Object(v.jsx)(K,{songs:t||r?[]:o,onChangeCurrentSong:e.onChangeCurrentSong,addToUserQueue:e.addToUserQueue,isLoading:e.isLoading})]})]})}var ye=h.a.create({safeAreaView:{flex:1,marginTop:32,width:"100%"}});function we(e){var n=e.searchState,t=n.query,r=n.onChangeQuery,o=n.submitted,i=n.onChangeSubmitted,a=n.selectedCollection,s=n.setSelectedCollection,c=n.offset,l=n.setOffset,u=function(e,n){return null!=e&&0!==e.length&&(null==n&&(L(e)||q(e)))}(o,a)?o:void 0;return Object(v.jsxs)(f.a,{style:ve.container,children:[Object(v.jsx)(f.a,{style:ve.searchInputContainer,children:Object(v.jsx)(f.a,{style:{width:"100%"},children:Object(v.jsx)(se,{text:t,onChangeText:r,onChangeSubmittedText:i})})}),Object(v.jsxs)(f.a,{style:ve.fetcherContainer,children:[null==o&&Object(v.jsx)(pe,{onChangeCurrentSong:e.queueState.handleSetCurrentSong,addToUserQueue:e.queueState.addToUserQueue,isLoading:e.queueState.isLoading}),null==a&&null!=o&&Object(v.jsx)(re,{submitted:o,onChangeSelectedCollection:s}),(null!=a||null!=u)&&null!=o&&Object(v.jsx)(Se,{collection:null!=a?a:void 0,ownerAddress:null!=u?u:void 0,onChangeSelectedSong:e.queueState.handleSetCurrentSong,addToUserQueue:e.queueState.addToUserQueue,handleChangeGlobalQueue:e.queueState.setGlobalQueue,isLoading:e.queueState.isLoading,offset:c,setOffset:l})]})]})}var ve=h.a.create({container:{width:"100%",alignItems:"center",flex:1,height:"100%",marginTop:20},searchInputContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"80%"},fetcherContainer:{flex:1,width:"100%",alignItems:"center"}}),Ae=t(47);function Ce(e){var n=e.song,t=Object(j.useState)(!1),r=o()(t,2),i=r[0],a=r[1];return Object(v.jsx)(f.a,{style:Te.container,children:Object(v.jsx)(X.a,{style:Te.safeAreaView,children:Object(v.jsxs)(Ae.a,{style:{paddingLeft:16,paddingRight:16},children:[Object(v.jsxs)(f.a,{style:Te.header,children:[Object(v.jsx)(T,{style:{fontSize:24,marginBottom:24},children:n.name}),Object(v.jsx)(G.a,{defaultSource:N.a,source:{uri:null==n?void 0:n.imageUri},style:{width:256,height:256}})]}),Object(v.jsxs)(T,{style:{fontSize:18},children:[n.collectionName," #",n.tokenId]}),Object(v.jsx)(T,{style:{marginBottom:12},children:n.collectionAddress}),Object(v.jsxs)(T,{style:{marginBottom:12},children:["Owner: ",n.owner]}),Object(v.jsx)(T,{style:{marginBottom:20},children:n.description}),Object(v.jsxs)(f.a,{style:{width:"100%",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)(x.a,{style:Te.showMetadataButton,onPress:function(){return a(!i)},children:Object(v.jsx)(T,{style:Te.showMetadataText,children:i?"hide raw metadata":"show raw metadata"})}),i&&Object(v.jsx)(T,{style:{marginBottom:24},children:JSON.stringify(n.metadata,null,2)})]})]})})})}var Te=h.a.create({container:{width:"100%",alignItems:"center",flex:1,height:"100%"},safeAreaView:{flex:1,width:"100%"},header:{width:"100%",alignItems:"center",marginTop:20,marginBottom:20},showMetadataButton:{width:"80%",maxWidth:256,alignItems:"center",marginBottom:36,borderWidth:1,borderRadius:10,borderColor:"white"},showMetadataText:{fontSize:18,lineHeight:18,paddingTop:16,paddingBottom:16}}),qe=new s.a({uri:"https://api.zora.co/graphql",cache:new c.a});function Le(){var e=B(),n=Object(j.useState)(!1),t=o()(n,2),r=t[0],i=t[1],s=Object(j.useState)(!1),c=o()(s,2),h=c[0],O=c[1],x=Object(j.useState)(!1),m=o()(x,2),S=m[0],p=m[1],y=function(){var e=Object(j.useState)(null),n=o()(e,2),t=n[0],r=n[1],i=Object(j.useState)(null),a=o()(i,2),s=a[0],c=a[1],l=Object(j.useState)(0),u=o()(l,2),d=u[0],g=u[1],h=Object(j.useState)(null),f=o()(h,2),b=f[0],O=f[1];return{query:t,onChangeQuery:function(e){return r(e)},submitted:s,onChangeSubmitted:function(e){O(null),g(0),c(null!=e?e.toLowerCase().trim():null)},selectedCollection:b,setSelectedCollection:O,offset:d,setOffset:g}}();return Object(j.useEffect)((function(){S||(a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(u.a.setAudioModeAsync({staysActiveInBackground:!0,interruptionModeIOS:d.b.DoNotMix,allowsRecordingIOS:!1,playsInSilentModeIOS:!0}));case 2:case"end":return e.stop()}}),null,null,null,Promise),p(!0))})),Object(v.jsx)(b.a,{children:Object(v.jsx)(l.a,{client:qe,children:Object(v.jsxs)(f.a,{style:Pe.container,children:[Object(v.jsx)(g.a,{}),Object(v.jsxs)(f.a,{style:Pe.screen,children:[Object(v.jsxs)(f.a,{style:{width:"100%",alignItems:"center",flex:1},children:[h&&null!=e.currentLoadedSong&&Object(v.jsx)(Ce,{song:e.currentLoadedSong.song}),r&&Object(v.jsx)(W,{queueState:e,handleCloseQueueView:function(){return i(!1)}}),!h&&!r&&Object(v.jsx)(we,{searchState:y,queueState:e})]}),Object(v.jsx)(f.a,{style:Pe.player,children:Object(v.jsx)(Q,{queueState:e,onChangeIsSongInfoViewOpen:function(){O(!h),i(!1)},handleToggleQueueView:function(){r?i(!1):(i(!0),O(!1))}})})]})]})})})}var Pe=h.a.create({container:{backgroundColor:"#2d2d2d",alignItems:"center",flex:1},screen:{width:"100%",alignItems:"center",flex:1,marginTop:20},player:{width:"100%",alignItems:"center",height:200,shadowColor:"#171717",shadowOffset:{width:0,height:-2},borderTopWidth:.5,borderLeftWidth:.5,borderRightWidth:.5,borderTopLeftRadius:10,borderTopRightRadius:10,shadowOpacity:.1,shadowRadius:3,backgroundColor:"black"}})},211:function(e,n,t){e.exports=t(253)}},[[211,1,2]]]);
//# sourceMappingURL=app.b3850c05.chunk.js.map