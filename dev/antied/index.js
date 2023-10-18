(function(H,Se,p,o,Y,F,b,e,m,G,we,N,Ie){"use strict";const{openLazy:De,hideActionSheet:pt}=p.findByProps("openLazy","hideActionSheet");function ae(s,r){if(s!=null&&r!=null)for(const a of Object.keys(r))typeof r[a]=="object"&&!Array.isArray(r[a])?(typeof s[a]!="object"&&(s[a]={}),ae(s[a],r[a])):s[a]??=r[a]}function Fe(s,r){try{De(new Promise(function(a){return a({default:s})}),"ActionSheet",r)}catch(a){Se.logger.error(a.stack),showToast("Got error when opening ActionSheet! Please check debug logs")}}const re={toInt(s){return s=s.replace(/^#/,""),parseInt(s,16)},toHex(s){return"#"+s.toString(16).toUpperCase()}},{ScrollView:Be,View:j,Text:Pe,TouchableOpacity:ne,TextInput:yt,Image:Te,Animated:k}=F.General,{FormLabel:ve,FormIcon:_e,FormArrow:bt,FormRow:X,FormSwitch:Le,FormSwitchRow:mt,FormSection:Me,FormDivider:Ne,FormInput:se}=F.Forms,xe=p.findByName("useIsFocused");p.findByProps("BottomSheetScrollView");const oe=p.findByStoreName("UserStore"),ie=p.findByProps("showUserProfile");b.getAssetIDByName("ic_add_24px"),b.getAssetIDByName("ic_arrow"),b.getAssetIDByName("ic_minus_circle_24px"),b.getAssetIDByName("Check"),b.getAssetIDByName("Small");function le(s){return e.React.createElement(_e,{style:{opacity:1},source:b.getAssetIDByName(s)})}const T=e.stylesheet.createThemedStyleSheet({basicPad:{paddingRight:10,marginBottom:10,letterSpacing:.25},header:{color:m.semanticColors.HEADER_SECONDARY,fontFamily:e.constants.Fonts.PRIMARY_BOLD,paddingLeft:"3%",fontSize:24},sub:{color:m.semanticColors.TEXT_POSITIVE,fontFamily:e.constants.Fonts.DISPLAY_NORMAL,paddingLeft:"4%",fontSize:18},flagsText:{color:m.semanticColors.HEADER_SECONDARY,fontFamily:e.constants.Fonts.PRIMARY_BOLD,paddingLeft:"4%",fontSize:16},container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:.2,shadowRadius:4.65,elevation:8},image:{width:75,height:75,borderRadius:10,shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:.2,shadowRadius:4.65,elevation:8},mainText:{opacity:.975,letterSpacing:.25},header:{color:m.semanticColors.HEADER_PRIMARY,fontFamily:e.constants.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:m.semanticColors.HEADER_SECONDARY,fontSize:12.75}});function ce(s){let{index:r}=s;Y.useProxy(o.storage);let a=o.storage?.inputs?.ignoredUserList[r];const i=e.React.useRef(new k.Value(1)).current,n=function(){return k.spring(i,{toValue:1.1,duration:10,useNativeDriver:!0}).start()},h=function(){return k.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},t={transform:[{scale:i}]};let d=oe.getUser(a?.id),l=Object.values(oe.getUsers());d||(d=l.find(function(R){return R?.username==a?.username})),d||(d=l.find(function(R){return R?.username?.toLowerCase()==a?.username?.toLowerCase()}));const C=e.NavigationNative.useNavigation();return xe(),e.React.createElement(e.React.Fragment,null,e.React.createElement(Be,null,e.React.createElement(j,{style:[T.basicPad,T.sub]},e.React.createElement(Me,{title:"User Setting",style:[T.header]},e.React.createElement(X,{label:"Find User Id or Username",leading:le("ic_search"),onPress:function(){d&&!a.username?.length?a.username=d.username:d&&!a.id?.length?a.id=d.id:G.showToast("Cannot find User Id/Username.")}}),e.React.createElement(se,{title:"User Username | Case Sensitive",placeholder:"Missing No",value:a?.username,onChange:function(R){return a.username=R}}),e.React.createElement(se,{title:"User Id",placeholder:"Missing No",value:a?.id,onChange:function(R){return a.id=R}}),e.React.createElement(X,{label:"User is webhook?",subLabel:"User is webhook or system, and not BOT or Normal User.",leading:le("ic_webhook_24px"),trailing:e.React.createElement(Le,{value:a?.isWebhook||!1,onValueChange:function(R){return a.isWebhook=R}})})),d&&e.React.createElement(j,{style:[T.container,{paddingBottom:10}]},e.React.createElement(ne,{onPress:function(){return ie.showUserProfile?.({userId:d?.id})},onPressIn:n,onPressOut:h},e.React.createElement(k.View,{style:t},e.React.createElement(Te,{source:{uri:d?.getAvatarURL?.()?.replace?.("webp","png")||"https://cdn.discordapp.com/embed/avatars/2.png"},style:{width:128,height:128,borderRadius:10}}))),e.React.createElement(j,{style:T.textContainer},e.React.createElement(ne,{onPress:function(){return ie.showUserProfile({userId:d?.id})}},e.React.createElement(Pe,{style:[T.mainText,T.header]},d?.username||a?.username||"No Name"))),e.React.createElement(Ne,null)),e.React.createElement(X,{label:e.React.createElement(ve,{text:"Remove User from Ignore List",style:{color:m.rawColors.RED_400}}),onPress:function(){C.pop(),o.storage?.inputs?.ignoredUserList?.splice(r,1)}}))))}const{ScrollView:$e,View:Ue,Text:Ct,TouchableOpacity:ke,TextInput:Oe}=F.General,{FormLabel:At,FormIcon:ze,FormArrow:Ve,FormRow:K,FormSwitch:St,FormSwitchRow:wt,FormSection:He,FormDivider:Ye,FormInput:It}=F.Forms;function de(s,r){return React.createElement(ze,{style:{opacity:1},source:r?s:b.getAssetIDByName(s)})}const Ge=p.findByName("useIsFocused");p.findByProps("BottomSheetScrollView");const{getUser:je}=p.findByProps("getUser"),Xe=b.getAssetIDByName("ic_add_24px");b.getAssetIDByName("ic_arrow"),b.getAssetIDByName("ic_minus_circle_24px"),b.getAssetIDByName("Check"),b.getAssetIDByName("Small");const Ke=b.getAssetIDByName("ic_trash_24px"),L=e.stylesheet.createThemedStyleSheet({basicPad:{paddingRight:10,marginBottom:10,letterSpacing:.25},header:{color:m.semanticColors.HEADER_SECONDARY,fontFamily:e.constants.Fonts.PRIMARY_BOLD,paddingLeft:"3.5%",fontSize:24},sub:{color:m.semanticColors.TEXT_POSITIVE,fontFamily:e.constants.Fonts.DISPLAY_NORMAL,paddingLeft:"4%",fontSize:18},flagsText:{color:m.semanticColors.HEADER_SECONDARY,fontFamily:e.constants.Fonts.PRIMARY_BOLD,paddingLeft:"4%",fontSize:16},input:{fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_MEDIUM,color:m.semanticColors.TEXT_NORMAL},placeholder:{color:m.semanticColors.INPUT_PLACEHOLDER_TEXT}});function Qe(){Y.useProxy(o.storage);let[s,r]=React.useState("");const a=e.NavigationNative.useNavigation();Ge();let i=o.storage?.inputs?.ignoredUserList??[];const n=function(){if(s){if(isNaN(parseInt(s)))i.push({id:void 0,username:s});else{let h=je(s);if(h)i.push({id:h?.id,username:"",showUser:!1,isWebhook:!1});else return G.showToast("Invalid User Id")}r(""),a.push("VendettaCustomPage",{title:"Adding User to Ignore List",render:function(){return React.createElement(ce,{index:i?.length-1})}})}};return React.createElement(React.Fragment,null,React.createElement($e,{style:{flex:1}},React.createElement(He,{style:[L.header,L.basicPad]},React.createElement(Ue,{style:[L.header,L.sub]},i.length>0&&React.createElement(K,{label:"Clear List",trailing:de(Ke,!0),onPress:function(){i.length!==0&&we.showConfirmationAlert({title:"Hol up, wait a minute!",content:`This will removes in total ${i.length} users from ignore list.`,confirmText:"Ye",cancelText:"Nah",confirmColor:"brand",onConfirm:function(){o.storage.inputs.ignoredUserList=[]}})}}),i?.map(function(h,t){return React.createElement(React.Fragment,null,React.createElement(K,{label:h?.username||h?.id||"No Data",trailing:React.createElement(Ve,null),onPress:function(){return a.push("VendettaCustomPage",{title:"Editing User",render:function(){return React.createElement(ce,{index:t})}})}}),t!==i?.length-1&&React.createElement(Ye,null))}),React.createElement(K,{label:React.createElement(Oe,{value:s,onChangeText:r,placeholder:"User ID or Username",placeholderTextColor:L.placeholder.color,selectionColor:e.constants.Colors.PRIMARY_DARK_100,onSubmitEditing:n,returnKeyType:"done",style:L.input}),trailing:React.createElement(ke,{onPress:n},de(Xe,!0))})))))}const{StyleSheet:We,PanResponder:Je}=e.ReactNative,Q=p.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:W}}=p.findByProps("colors","meta"),{View:J}=F.General,{useState:qe,useRef:Ze}=e.React,q={sliderOff:W(Q.theme,m.semanticColors.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND),sliderOn:W(Q.theme,m.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND),thumb:W(Q.theme,m.semanticColors.MENTION_FOREGROUND)},ue=function(s){let{onSlide:r,min:a,max:i,value:n}=s;const h=n||0,[t,d]=qe(0),l=Ze(null);function C(f){l.current&&l.current.measure(function(E,c,y,u,w,P){let _=(f-w)/(y-w)*100;const z=Math.min(Math.max(0,Math.round(_/1)*1),100);r&&r(z)})}const R=e.React.useRef(Je.create({onStartShouldSetPanResponder:function(f,E){return!0},onStartShouldSetPanResponderCapture:function(f,E){return!0},onMoveShouldSetPanResponder:function(f,E){return!0},onMoveShouldSetPanResponderCapture:function(f,E){return!0},onPanResponderGrant:function(f,E){C(E.x0)},onPanResponderMove:function(f,E){C(E.moveX)},onPanResponderTerminationRequest:function(f,E){return!0},onPanResponderRelease:function(f,E){},onPanResponderTerminate:function(f,E){},onShouldBlockNativeResponder:function(f,E){return!0}})).current;function S(f){d(f.nativeEvent.layout.width)}const g=We.create({container:{marginLeft:"5%",width:"80%",height:20,borderRadius:25,backgroundColor:q.sliderOff,marginBottom:25},slid:{width:h+"%",height:"100%",borderTopLeftRadius:25,borderBottomLeftRadius:25,borderRadius:h===100?25:0,backgroundColor:q.sliderOn,justifyContent:"center"},thumb:{height:"150%",aspectRatio:1,alignSelf:"flex-end",right:-(t/2),borderRadius:100,backgroundColor:q.thumb}});return e.React.createElement(J,{style:g.container,...R.panHandlers,ref:l},e.React.createElement(J,{style:g.slid},e.React.createElement(J,{style:g.thumb,onLayout:S})))},et=p.findByName("CustomColorPickerActionSheet"),{ScrollView:tt,View:I,Text:ge,TouchableOpacity:fe,TextInput:Dt,Pressable:Ft,Image:at}=F.General,{FormLabel:Bt,FormIcon:O,FormArrow:Pt,FormRow:v,FormSwitch:Z,FormSwitchRow:Tt,FormSection:x,FormDivider:B,FormInput:rt}=F.Forms,D=e.stylesheet.createThemedStyleSheet({text:{color:m.semanticColors.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:16},subText:{color:m.semanticColors.TEXT_POSITIVE,paddingLeft:"6%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:e.constants.Fonts.DISPLAY_NORMAL,fontSize:12},input:{fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_MEDIUM,color:m.semanticColors.TEXT_NORMAL},placeholder:{color:m.semanticColors.INPUT_PLACEHOLDER_TEXT},container:{flex:1,justifyContent:"center",alignItems:"center"},colorPreview:{width:"75%",height:100,marginBottom:20},row:{flexDirection:"row",height:80,width:"90%",marginBottom:20},border:{borderRadius:12}}),nt=b.getAssetIDByName("ic_add_24px");p.findByProps("getUser");const st=p.findByName("useIsFocused"),he=[{id:"minimalistic",default:!0,label:"Minimalistic Settings",subLabel:"Removes all Styling (Enabled by Default)"},{id:"useBackgroundColor",default:!1,label:"Enable Background Color",subLabel:"Background Color for Deleted Message, similiar to Mention but Customizeable"},{id:"ignoreBots",default:!1,label:"Ignore Bots",subLabel:"Ignore bot deleted messages."},{id:"alwaysAdd",default:!1,label:"Always Add Remove Edit History Button",subLabel:"Always add remove edit History button regardless if the message is edited or not."},{id:"removeDismissButton",default:!1,label:"Remove Dissmiss Message",subLabel:"Remove clickable Dismiss Message text from deleted ephemeral messages."},{id:"addTimestampForEdits",default:!1,label:"Add Edit Timestamp",subLabel:"Add Timestamp for edited messages."}],Re=[{id:"textColor",label:"Deleted Message Text Color",subLabel:"Click to customize Deleted Message Text Color",defaultColor:"#E40303"},{id:"backgroundColor",label:"Deleted Message Background Color",subLabel:"Click to customize Background Color",defaultColor:"#FF2C2F"},{id:"gutterColor",label:"Deleted Message Background Gutter Color",subLabel:"Click to customize Background Gutter Color",defaultColor:"#FF2C2F"}],Ee=[{id:"deletedMessageBuffer",title:"Customize Deleted Message",type:"default",placeholder:"This message is deleted"},{id:"editedMessageBuffer",title:"Customize Edited Separator",type:"default",placeholder:"`[ EDITED ]`"}];function $(s){if(s<0)return"00";if(s>100)return"FF";{const r=Math.round(s/100*255).toString(16);return r.length===1?`0${r}`:r}}function pe(s){const r=parseInt(s,16);return isNaN(r)?0:Math.round(r/255*100)}function ot(){Y.useProxy(o.storage);const[s,r]=e.React.useState(pe(o.storage?.colors?.backgroundColorAlpha)??100),[a,i]=e.React.useState(pe(o.storage?.colors?.gutterColorAlpha)??100),n=e.NavigationNative.useNavigation();st();const h=function(){n.push("VendettaCustomPage",{title:"List of Ignored Users",render:function(){return e.React.createElement(Qe,null)}})};return e.React.createElement(tt,null,e.React.createElement(I,{style:{marginTop:20,marginBottom:20}},e.React.createElement(x,{title:"Plugin Setting",style:[D.header]},e.React.createElement(v,{label:"Customization",subLabel:"Show customization for the plugin",leading:e.React.createElement(O,{style:{opacity:1},source:b.getAssetIDByName("ic_category_16px")}),trailing:e.React.createElement(Z,{value:o.storage?.switches?.customizeable??!1,onValueChange:function(t){return o.storage.switches.customizeable=t}})}),o.storage?.switches?.customizeable&&e.React.createElement(e.React.Fragment,null,e.React.createElement(x,{title:"Switches"}),e.React.createElement(B,null)),o.storage?.switches?.customizeable&&e.React.createElement(e.React.Fragment,null,e.React.createElement(I,{style:[D.subText]},he?.map(function(t,d){return e.React.createElement(e.React.Fragment,null,e.React.createElement(v,{label:t?.label,subLabel:t?.subLabel,leading:t?.icon&&e.React.createElement(O,{style:{opacity:1},source:b.getAssetIDByName(t?.icon)}),trailing:"id"in t?e.React.createElement(Z,{value:o.storage?.switches[t?.id]??t?.default,onValueChange:function(l){return o.storage.switches[t?.id]=l}}):void 0}),d!==he?.length-1&&e.React.createElement(B,null))}))),o.storage?.switches?.customizeable&&e.React.createElement(e.React.Fragment,null,e.React.createElement(x,{title:"Text Variables"}),e.React.createElement(B,null)),o.storage?.switches?.customizeable&&e.React.createElement(e.React.Fragment,null,e.React.createElement(I,{style:[D.subText]},Ee?.map(function(t,d){return e.React.createElement(e.React.Fragment,null,e.React.createElement(rt,{title:t?.title,keyboardType:t?.type,placeholder:t?.placeholder,value:o.storage?.inputs[t.id]??t?.placeholder,onChange:function(l){return o.storage.inputs[t.id]=l.toString()}}),d!==Ee.length-1&&e.React.createElement(B,null))}))),o.storage?.switches?.customizeable&&e.React.createElement(e.React.Fragment,null,e.React.createElement(x,{title:"Color Pickers"}),e.React.createElement(B,null)),o.storage?.switches?.customizeable&&e.React.createElement(e.React.Fragment,null,e.React.createElement(I,{style:[D.subText]},Re?.map(function(t){const d=function(){return Fe(et,{color:re?.toInt(o.storage.colors[t.id]||t?.defaultColor||"#000"),onSelect:function(l){const C=re?.toHex(l);o.storage.colors[t.id]=C}})};return e.React.createElement(e.React.Fragment,null,e.React.createElement(v,{label:t?.label,subLabel:t?.subLabel||"Click to Update",onPress:d,trailing:e.React.createElement(fe,{onPress:d},e.React.createElement(at,{source:{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mJsrQAAAgwBAJ9P6qYAAAAASUVORK5CYII="},style:{width:32,height:32,borderRadius:10,backgroundColor:o.storage?.colors[t.id]||Re.find(function(l){return l?.id==t?.id})?.defaultColor||"#000"}}))}))}))),o.storage?.switches?.customizeable&&e.React.createElement(e.React.Fragment,null,e.React.createElement(I,{style:[D.subText]},e.React.createElement(I,{style:D.container},e.React.createElement(v,{style:{justifyContent:"center",alignItems:"center"},label:`Preview Style: ${o.storage?.switches?.darkMode?"Light":"Dark"} Mode`,subLabel:"Click to Switch Mode",trailing:e.React.createElement(Z,{value:o.storage?.switches?.darkMode??!0,onValueChange:function(t){return o.storage.switches.darkMode=t}})}),e.React.createElement(I,{style:[D.row,D.border,{overflow:"hidden",marginRight:10}]},e.React.createElement(I,{style:{width:"2%",backgroundColor:`${o.storage.colors.gutterColor}${$(a)}`}}),e.React.createElement(I,{style:{flex:1,backgroundColor:`${o.storage.colors.backgroundColor}${$(s)}`,justifyContent:"center",alignItems:"center"}},e.React.createElement(ge,{style:{fontSize:20,color:o.storage?.switches?.darkMode?"black":"white"}}," Low Effort Normal Example Message "),e.React.createElement(ge,{style:{fontSize:20,color:o.storage.colors.textColor||"#000000"}}," Low Effort Deleted Example Message "))),e.React.createElement(B,null),e.React.createElement(v,{label:`Background Color Alpha: ${s}%`}),e.React.createElement(ue,{style:{marginBottom:0,marginRight:10},value:s,onSlide:function(t){r(t),o.storage.colors.backgroundColorAlpha=$(t)}}),e.React.createElement(B,null),e.React.createElement(v,{label:`Background Gutter Alpha: ${a}%`}),e.React.createElement(ue,{style:{marginBottom:0,marginRight:10},value:a,onSlide:function(t){i(t),console.log(t,$(t)),o.storage.colors.gutterColorAlpha=$(t)}}))))),e.React.createElement(x,{title:"Ignore List Setting",style:[D.header]},e.React.createElement(v,{label:"Add User to List",subLabel:"List of ignored users for the plugin",leading:e.React.createElement(O,{style:{opacity:1},source:b.getAssetIDByName("ic_members")}),onPress:h,trailing:e.React.createElement(fe,{onPress:h},e.React.createElement(O,{style:{opacity:1},source:nt}))}),e.React.createElement(B,null))))}var A=void 0;p.findByProps("openLazy","hideActionSheet");const ye=p.findByProps("getMessage","getMessages"),ee=p.findByProps("getChannel","getDMFromUserId");function it(s,r){return N.instead("dispatch",e.FluxDispatcher,function(a,i){const[n]=a,h=n?.type;if(h=="MESSAGE_DELETE"){let t=function(l,C,R,S){const g=ye.getMessage(n?.channelId,n?.id);console.log(g);const f=g?.author?.id,E=g?.author?.username,c=!g?.content&&g?.attachments?.length==0&&g?.embeds?.length==0;return!f||!E||c||o.storage?.switches?.ignoreBots&&g?.author?.bot||o.storage?.inputs?.ignoredUserList?.length>0&&o.storage.inputs.ignoredUserList?.some(function(y){return y?.id==g?.author?.id||y.username==g.author.username})||(R[0]={type:"MESSAGE_UPDATE",channelId:g?.channel_id||n?.channelId,message:{...g,content:g?.content,type:0,flags:64,channel_id:g?.channel_id||n?.channelId,guild_id:ee?.getChannel(g?.channel_id)?.guild_id,timestamp:`${new Date().toJSON()}`,state:"SENT"},optimistic:!1,sendMessageOptions:{},isPushNotification:!1},S.push(n?.id||g?.id)),l.apply(C,R)};const d=ee.getChannel(n?.channelId?.toString?.());return[1,3].some(function(l){return l==d.type})?n.hasOwnProperty("guildId")?r?.includes(n?.id)?(r=r?.filter(function(l){return l!=n?.id}),i.apply(A,a)):t(i,A,a,r):r?.includes(n?.id)?(r=r?.filter(function(l){return l!=n?.id}),i.apply(A,a)):(a[0]={type:"MESSAGE_CAT"},i.apply(A,a)):!n.guildId||!n.hasOwnProperty("guildId")?r?.includes(n?.id)?(r=r?.filter(function(l){return l!=n?.id}),i.apply(A,a)):(a[0]={type:"MESSAGE_CAT"},i.apply(A,a)):r?.includes(n?.id)?(r=r?.filter(function(l){return l!=n?.id}),i.apply(A,a)):t(i,A,a,r)}if(h=="MESSAGE_UPDATE"){if(n?.removeHistory||n?.message?.author?.bot)return i.apply(A,a);const t=ye.getMessage(n?.message?.channel_id,n?.message?.id),d=t?.author?.id,l=t?.author?.username,C=!t?.content&&t?.attachments?.length==0&&t?.embeds?.length==0;if(!d||!l||C)return i.apply(A,a);const R=n?.message?.content==t?.content,S=n?.message?.embeds.some(function(u){return u?.url==t?.content||u?.thumbnail?.url==t?.content||t?.content.includes(u?.url)||t?.content.includes(u?.thumbnail?.url)}),g=n?.message?.embeds?.size||n?.message?.embeds?.length,f=t?.embeds?.size||t?.embeds?.length;if(R||S||!n?.message?.content&&g!=f||o.storage?.inputs?.ignoredUserList?.length>0&&o.storage.inputs.ignoredUserList?.some(function(u){return u?.id==t?.author?.id||u.username==t.author.username}))return i.apply(A,a);let E=o.storage?.inputs?.editedMessageBuffer||"`[ EDITED ]`";E=E+`

`;const c=n?.message||t;let y=`${t?.content}`;if(o.storage?.switches?.addTimestampForEdits){const u=Date.now(),w=`<t:${Math.abs(Math.round(u/1e3))}:R>`;y+=`  (${w}) ${E}${n?.message?.content??""}`}else y+=`  ${E}${n?.message?.content??""}`;return a[0]={type:"MESSAGE_UPDATE",message:{...c,content:y,guild_id:ee.getChannel(t?.channel_id)?.guild_id,edited_timestamp:"invalid_timestamp"}},s.some(function(u){return u==t?.id||u==n?.message?.id})||s.push(t?.id||n?.message?.id),i.apply(A,a)}return i.apply(A,a)})}const lt=p.findByProps("startEditMessage");function ct(){return N.before("startEditMessage",lt,function(s){let r=o.storage?.inputs?.editedMessageBuffer||"`[ EDITED ]`";r=r+`

`;const[a,i,n]=s,h=n.split(r);return s[2]=h[h.length-1],s})}const{DCDChatManager:dt}=e.ReactNative.NativeModules;function ut(s){return N.before("updateRows",dt,function(r){let a=JSON.parse(r[1]);const{textColor:i,backgroundColor:n,backgroundColorAlpha:h,gutterColor:t,gutterColorAlpha:d}=o.storage.colors,l=o.storage.inputs?.deletedMessageBuffer,{useBackgroundColor:C,minimalistic:R,removeDismissButton:S}=o.storage.switches;function g(c,y){c||(c=y);const u=c?.trim();if(u.startsWith("#")){const w=u.slice(1);if(/^[0-9A-Fa-f]{6}$/.test(w))return"#"+w.toUpperCase()}else if(/^[0-9A-Fa-f]{6}$/.test(u))return"#"+u.toUpperCase();return y||"#000"}function f(c,y){const u=y?.toString(),w=["text","heading","s","u","em","strong","list","blockQuote"];if(Array.isArray(c))return c.map(function(P){return f(P,u)});if(typeof c=="object"&&c!==null){const{content:P,type:_,target:z,items:V}=c;if(!w.includes(_))return c;if(_==="text"&&P&&P.length>=1)return{content:[{content:P,type:"text"}],target:"usernameOnClick",type:"link",context:{username:1,medium:!0,usernameOnClick:{action:"0",userId:"0",linkColor:e.ReactNative.processColor(u),messageChannelId:"0"}}};const te=f(P,u),Ae=V?V.map(f,u):void 0;if(te!==P||Ae!==V||!w.includes(_)){const M={...c,content:te};return _==="blockQuote"&&z&&(M.content=te,M.target=z),_==="list"&&M?.content&&delete M.content,V&&(M.items=Ae),M}}return c}function E(c,y,u){return c&&(y!=null&&(c.content[0].content[0].content=y+"  "),u==null&&c.content[0].content.splice(1)),c}return a.forEach(function(c){if(c?.type==1&&s?.includes(c?.message?.id)){if(c.message.edited=l?.length>0?l:"This message is deleted",R==!1){const y=g(i,"#E40303"),u=f(c?.message?.content,y);c.message.content=u}if(S&&(c.message.ephemeralIndication=E(c.message.ephemeralIndication,void 0,void 0)),R==!1&&C==!0){const y=g(`${n}`,"#FF2C2F"),u=g(`${t}`,"#FF2C2F");c.backgroundHighlight={backgroundColor:e.ReactNative.processColor(`${y}${h}`),gutterColor:e.ReactNative.processColor(`${u}${d}`)}}}}),r[1]=JSON.stringify(a),r[1]})}const be=p.findByProps("openLazy","hideActionSheet"),gt=p.findByProps("getMessage","getMessages"),ft=p.findByProps("getChannel","getDMFromUserId"),{FormRow:ht,FormIcon:Rt}=F.Forms;ae(o.storage,{switches:{customizeable:!1,useBackgroundColor:!1,ignoreBots:!1,minimalistic:!0,alwaysAdd:!1,darkMode:!0,removeDismissButton:!1,addTimestampForEdits:!1},colors:{textColor:"#E40303",backgroundColor:"#FF2C2F",backgroundColorAlpha:"33",gutterColor:"#FF2C2F",gutterColorAlpha:"CC"},inputs:{deletedMessageBuffer:"This message is deleted",editedMessageBuffer:"`[ EDITED ]`",ignoredUserList:[]}});let me=[],U=[],Ce=[];var Et={onLoad:function(){me.push(it(U,Ce),ct(),ut(Ce),N.before("openLazy",be,function(s){let[r,a,i]=s;const n=i?.message;a!=="MessageLongPressActionSheet"||!n||r.then(function(h){const t=N.after("default",h,function(d,l){e.React.useEffect(function(){return function(){t()}},[]);const C=Ie.findInReactTree(l,function(S){return S?.[0]?.type?.name==="ButtonRow"});if(!C)return l;const R=gt.getMessage(n.channel_id,n?.id);(o.storage?.switches?.alwaysAdd||U.includes(n?.id)||U.includes(R?.id))&&C.unshift(e.React.createElement(ht,{label:"Remove Edit History",subLabel:o.storage?.switches?.alwaysAdd?"(Added by alwaysAdd option)":"",leading:e.React.createElement(Rt,{style:{opacity:1},source:b.getAssetIDByName("ic_edit_24px")}),onPress:function(){let S=o.storage?.inputs?.editedMessageBuffer||"`[ EDITED ]`";S=S+`

`;const g=n?.content?.split(S),f=g[g.length-1];e.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...R,content:`${f}`,guild_id:ft.getChannel(R.channel_id).guild_id},removeHistory:!0}),U=U.filter(function(E){return E!=n?.id}),be.hideActionSheet(),G.showToast("[ANTI ED] History Removed",b.getAssetIDByName("ic_edit_24px"))}}))})})}))},onUnload:function(){for(const s of me)s()},settings:ot};return H.default=Et,Object.defineProperty(H,"__esModule",{value:!0}),H})({},vendetta,vendetta.metro,vendetta.plugin,vendetta.storage,vendetta.ui.components,vendetta.ui.assets,vendetta.metro.common,vendetta.ui,vendetta.ui.toasts,vendetta.ui.alerts,vendetta.patcher,vendetta.utils);
