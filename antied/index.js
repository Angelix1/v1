(function(ae,Be,y,t,ne,L,A,e,T,re,at,B,K){"use strict";const{openLazy:nt,hideActionSheet:ra}=y.findByProps("openLazy","hideActionSheet");function se(n,r){if(n!=null&&r!=null)for(const a of Object.keys(r))typeof r[a]=="object"&&!Array.isArray(r[a])?(typeof n[a]!="object"&&(n[a]={}),se(n[a],r[a])):n[a]??=r[a]}function Pe(n,r){try{nt(new Promise(function(a){return a({default:n})}),"ActionSheet",r)}catch(a){Be.logger.error(a.stack),showToast("Got error when opening ActionSheet! Please check debug logs")}}function rt(n,r){let a=n+r;a=Math.min(a,255);const f=n.toString(16).padStart(2,"0"),c=a.toString(16).padStart(2,"0");return{main:f,secondary:c}}const Le=function(n,r){return`${n}${Math.floor(r*255).toString(16).padStart(2,0)}`},W={toInt(n){return n=n.replace(/^#/,""),parseInt(n,16)},toHex(n){return"#"+n.toString(16).toUpperCase()},HSLtoHEX(n,r,a){a/=100;const f=r*Math.min(a,1-a)/100,c=function(h){const d=(h+n/30)%12,p=a-f*Math.max(Math.min(d-3,9-d,1),-1);return Math.round(255*p).toString(16).padStart(2,"0")};return`#${c(0)}${c(8)}${c(4)}`}};var Me=Object.freeze({__proto__:null,calculateLighterValue:rt,colorConverter:W,makeDefaults:se,openSheet:Pe,setOpacity:Le});const{ScrollView:st,View:oe,Text:ot,TouchableOpacity:xe,TextInput:sa,Image:lt,Animated:Q}=L.General,{FormLabel:it,FormIcon:ct,FormArrow:oa,FormRow:le,FormSwitch:dt,FormSwitchRow:la,FormSection:ut,FormDivider:gt,FormInput:$e}=L.Forms,ft=y.findByName("useIsFocused");y.findByProps("BottomSheetScrollView");const Ue=y.findByStoreName("UserStore"),ie=y.findByProps("showUserProfile");A.getAssetIDByName("ic_add_24px"),A.getAssetIDByName("ic_arrow"),A.getAssetIDByName("ic_minus_circle_24px"),A.getAssetIDByName("Check"),A.getAssetIDByName("Small");function Oe(n){return e.React.createElement(ct,{style:{opacity:1},source:A.getAssetIDByName(n)})}const G=e.stylesheet.createThemedStyleSheet({basicPad:{paddingRight:10,marginBottom:10,letterSpacing:.25},header:{color:T.semanticColors.HEADER_SECONDARY,fontFamily:e.constants.Fonts.PRIMARY_BOLD,paddingLeft:"3%",fontSize:24},sub:{color:T.semanticColors.TEXT_POSITIVE,fontFamily:e.constants.Fonts.DISPLAY_NORMAL,paddingLeft:"4%",fontSize:18},flagsText:{color:T.semanticColors.HEADER_SECONDARY,fontFamily:e.constants.Fonts.PRIMARY_BOLD,paddingLeft:"4%",fontSize:16},container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:.2,shadowRadius:4.65,elevation:8},image:{width:75,height:75,borderRadius:10,shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:.2,shadowRadius:4.65,elevation:8},mainText:{opacity:.975,letterSpacing:.25},header:{color:T.semanticColors.HEADER_PRIMARY,fontFamily:e.constants.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:T.semanticColors.HEADER_SECONDARY,fontSize:12.75}});function ke(n){let{index:r}=n;var a,f,c,h;ne.useProxy(t.storage);let d=t.storage===null||t.storage===void 0||(a=t.storage.inputs)===null||a===void 0?void 0:a.ignoredUserList[r];const p=e.React.useRef(new Q.Value(1)).current,C=function(){return Q.spring(p,{toValue:1.1,duration:10,useNativeDriver:!0}).start()},D=function(){return Q.spring(p,{toValue:1,duration:250,useNativeDriver:!0}).start()},_={transform:[{scale:p}]};let g=Ue.getUser(d?.id),m=Object.values(Ue.getUsers());g||(g=m.find(function(l){return l?.username==d?.username})),g||(g=m.find(function(l){var u,s;return(l==null||(u=l.username)===null||u===void 0?void 0:u.toLowerCase())==(d==null||(s=d.username)===null||s===void 0?void 0:s.toLowerCase())}));const v=e.NavigationNative.useNavigation();return ft(),e.React.createElement(e.React.Fragment,null,e.React.createElement(st,null,e.React.createElement(oe,{style:[G.basicPad,G.sub]},e.React.createElement(ut,{title:"User Setting",style:[G.header]},e.React.createElement(le,{label:"Find User Id or Username",leading:Oe("ic_search"),onPress:function(){var l,u;g&&!(!((l=d.username)===null||l===void 0)&&l.length)?d.username=g.username:g&&!(!((u=d.id)===null||u===void 0)&&u.length)?d.id=g.id:re.showToast("Cannot find User Id/Username.")}}),e.React.createElement($e,{title:"User Username | Case Sensitive",placeholder:"Missing No",value:d?.username,onChange:function(l){return d.username=l}}),e.React.createElement($e,{title:"User Id",placeholder:"Missing No",value:d?.id,onChange:function(l){return d.id=l}}),e.React.createElement(le,{label:"User is webhook?",subLabel:"User is webhook or system, and not BOT or Normal User.",leading:Oe("ic_webhook_24px"),trailing:e.React.createElement(dt,{value:d?.isWebhook||!1,onValueChange:function(l){return d.isWebhook=l}})})),g&&e.React.createElement(oe,{style:[G.container,{paddingBottom:10}]},e.React.createElement(xe,{onPress:function(){var l;return(l=ie.showUserProfile)===null||l===void 0?void 0:l.call(ie,{userId:g?.id})},onPressIn:C,onPressOut:D},e.React.createElement(Q.View,{style:_},e.React.createElement(lt,{source:{uri:(g==null||(h=g.getAvatarURL)===null||h===void 0||(c=h.call(g))===null||c===void 0||(f=c.replace)===null||f===void 0?void 0:f.call(c,"webp","png"))||"https://cdn.discordapp.com/embed/avatars/2.png"},style:{width:128,height:128,borderRadius:10}}))),e.React.createElement(oe,{style:G.textContainer},e.React.createElement(xe,{onPress:function(){return ie.showUserProfile({userId:g?.id})}},e.React.createElement(ot,{style:[G.mainText,G.header]},g?.username||d?.username||"No Name"))),e.React.createElement(gt,null)),e.React.createElement(le,{label:e.React.createElement(it,{text:"Remove User from Ignore List",style:{color:T.rawColors.RED_400}}),onPress:function(){var l,u;v.pop(),t.storage===null||t.storage===void 0||(u=t.storage.inputs)===null||u===void 0||(l=u.ignoredUserList)===null||l===void 0||l.splice(r,1)}}))))}const{ScrollView:ht,View:vt,Text:ia,TouchableOpacity:Et,TextInput:Rt}=L.General,{FormLabel:ca,FormIcon:yt,FormArrow:bt,FormRow:ce,FormSwitch:da,FormSwitchRow:ua,FormSection:mt,FormDivider:St,FormInput:ga}=L.Forms;function ze(n,r){return React.createElement(yt,{style:{opacity:1},source:r?n:A.getAssetIDByName(n)})}const pt=y.findByName("useIsFocused");y.findByProps("BottomSheetScrollView");const{getUser:Ct}=y.findByProps("getUser"),It=A.getAssetIDByName("ic_add_24px");A.getAssetIDByName("ic_arrow"),A.getAssetIDByName("ic_minus_circle_24px"),A.getAssetIDByName("Check"),A.getAssetIDByName("Small");const At=A.getAssetIDByName("ic_trash_24px"),V=e.stylesheet.createThemedStyleSheet({basicPad:{paddingRight:10,marginBottom:10,letterSpacing:.25},header:{color:T.semanticColors.HEADER_SECONDARY,fontFamily:e.constants.Fonts.PRIMARY_BOLD,paddingLeft:"3.5%",fontSize:24},sub:{color:T.semanticColors.TEXT_POSITIVE,fontFamily:e.constants.Fonts.DISPLAY_NORMAL,paddingLeft:"4%",fontSize:18},flagsText:{color:T.semanticColors.HEADER_SECONDARY,fontFamily:e.constants.Fonts.PRIMARY_BOLD,paddingLeft:"4%",fontSize:16},input:{fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_MEDIUM,color:T.semanticColors.TEXT_NORMAL},placeholder:{color:T.semanticColors.INPUT_PLACEHOLDER_TEXT}});function _t(){var n;ne.useProxy(t.storage);let[r,a]=React.useState("");const f=e.NavigationNative.useNavigation();pt();let c=(t.storage===null||t.storage===void 0||(n=t.storage.inputs)===null||n===void 0?void 0:n.ignoredUserList)??[];const h=function(){if(r){if(isNaN(parseInt(r)))c.push({id:void 0,username:r});else{let d=Ct(r);if(d)c.push({id:d?.id,username:"",showUser:!1,isWebhook:!1});else return re.showToast("Invalid User Id")}a(""),f.push("VendettaCustomPage",{title:"Adding User to Ignore List",render:function(){return React.createElement(ke,{index:c?.length-1})}})}};return React.createElement(React.Fragment,null,React.createElement(ht,{style:{flex:1}},React.createElement(mt,{style:[V.header,V.basicPad]},React.createElement(vt,{style:[V.header,V.sub]},c.length>0&&React.createElement(ce,{label:"Clear List",trailing:ze(At,!0),onPress:function(){c.length!==0&&at.showConfirmationAlert({title:"Hol up, wait a minute!",content:`This will removes in total ${c.length} users from ignore list.`,confirmText:"Ye",cancelText:"Nah",confirmColor:"brand",onConfirm:function(){t.storage.inputs.ignoredUserList=[]}})}}),c?.map(function(d,p){return React.createElement(React.Fragment,null,React.createElement(ce,{label:d?.username||d?.id||"No Data",trailing:React.createElement(bt,null),onPress:function(){return f.push("VendettaCustomPage",{title:"Editing User",render:function(){return React.createElement(ke,{index:p})}})}}),p!==c?.length-1&&React.createElement(St,null))}),React.createElement(ce,{label:React.createElement(Rt,{value:r,onChangeText:a,placeholder:"User ID or Username",placeholderTextColor:V.placeholder.color,selectionColor:e.constants.Colors.PRIMARY_DARK_100,onSubmitEditing:h,returnKeyType:"done",style:V.input}),trailing:React.createElement(Et,{onPress:h},ze(It,!0))})))))}const wt=y.findByName("CustomColorPickerActionSheet"),{ScrollView:Dt,View:x,Text:Ge,TouchableOpacity:Ve,TextInput:fa,Pressable:ha,Image:Nt}=L.General,{FormLabel:va,FormIcon:j,FormArrow:Ea,FormRow:H,FormSwitch:q,FormSwitchRow:Ra,FormSection:Y,FormDivider:k,FormInput:Tt,FormSliderRow:He}=L.Forms,$=e.stylesheet.createThemedStyleSheet({text:{color:T.semanticColors.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:16},subText:{color:T.semanticColors.TEXT_POSITIVE,paddingLeft:"6%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:e.constants.Fonts.DISPLAY_NORMAL,fontSize:12},input:{fontSize:16,fontFamily:e.constants.Fonts.PRIMARY_MEDIUM,color:T.semanticColors.TEXT_NORMAL},placeholder:{color:T.semanticColors.INPUT_PLACEHOLDER_TEXT},container:{flex:1,justifyContent:"center",alignItems:"center"},colorPreview:{width:"75%",height:100,marginBottom:20},row:{flexDirection:"row",height:80,width:"90%",marginBottom:20},border:{borderRadius:12}}),Ft=A.getAssetIDByName("ic_add_24px");y.findByProps("getUser");const Bt=y.findByName("useIsFocused"),Ye=[{id:"enableMD",default:!0,label:"Toggle Message Delete",subLabel:"Logs deleted message"},{id:"enableMU",default:!0,label:"Toggle Message Update",subLabel:"Logs edited message"}],je=[{id:"minimalistic",default:!0,label:"Minimalistic Settings",subLabel:"Removes all Styling (Enabled by Default)"},{id:"useBackgroundColor",default:!1,label:"Enable Background Color",subLabel:"Background Color for Deleted Message, similiar to Mention but Customizeable"},{id:"ignoreBots",default:!1,label:"Ignore Bots",subLabel:"Ignore bot deleted messages."},{id:"removeDismissButton",default:!1,label:"Remove Dissmiss Message",subLabel:"Remove clickable Dismiss Message text from deleted ephemeral messages."},{id:"addTimestampForEdits",default:!1,label:"Add Edit Timestamp",subLabel:"Add Timestamp for edited messages."}],Xe=[{id:"textColor",label:"Deleted Message Text Color",subLabel:"Click to customize Deleted Message Text Color",defaultColor:"#E40303"},{id:"backgroundColor",label:"Deleted Message Background Color",subLabel:"Click to customize Background Color",defaultColor:"#FF2C2F"},{id:"gutterColor",label:"Deleted Message Background Gutter Color",subLabel:"Click to customize Background Gutter Color",defaultColor:"#FF2C2F"}],Je=[{id:"deletedMessageBuffer",title:"Customize Deleted Message",type:"default",placeholder:"This message is deleted"},{id:"editedMessageBuffer",title:"Customize Edited Separator",type:"default",placeholder:"`[ EDITED ]`"}];function Z(n){n=Number(n);const r=Math.min(Math.max(n,0),100),a=Math.round(r/100*255).toString(16).toUpperCase();return a.length===1?"0"+a:a}function Ke(n){const r=parseInt(n,16);return isNaN(r)?0:Math.round(r/255*100)}const U={toPercentage:function(n){return n=Number(n),n===0?0:n===1?100:Math.round(n*100)},toDecimal:function(n){n=Number(n);const r=Math.min(Math.max(n,0),100);return r===0?0:r===100?1:r/100},formatDecimal:function(n){return n=Number(n),n===0||n===1?n:n.toFixed(2)}};function de(){var n,r,a,f,c,h,d,p,C,D,_,g,m,v,l;ne.useProxy(t.storage);const[u,s]=e.React.useState(U.toDecimal(Ke(t.storage===null||t.storage===void 0||(n=t.storage.colors)===null||n===void 0?void 0:n.backgroundColorAlpha)??100)),[b,E]=e.React.useState(U.toDecimal(Ke(t.storage===null||t.storage===void 0||(r=t.storage.colors)===null||r===void 0?void 0:r.gutterColorAlpha)??100)),S=e.NavigationNative.useNavigation();Bt();const w=function(){S.push("VendettaCustomPage",{title:"List of Ignored Users",render:function(){return e.React.createElement(_t,null)}})};return e.React.createElement(Dt,null,e.React.createElement(x,{style:{marginTop:20,marginBottom:20}},e.React.createElement(Y,{title:"Plugin Setting",style:[$.header]},e.React.createElement(H,{label:"Customization",subLabel:"Show customization for the plugin",leading:e.React.createElement(j,{style:{opacity:1},source:A.getAssetIDByName("ic_category_16px")}),trailing:e.React.createElement(q,{value:(t.storage===null||t.storage===void 0||(a=t.storage.switches)===null||a===void 0?void 0:a.customizeable)??!1,onValueChange:function(o){return t.storage.switches.customizeable=o}})}),(t.storage===null||t.storage===void 0||(f=t.storage.switches)===null||f===void 0?void 0:f.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(Y,{title:"Patches"}),e.React.createElement(k,null)),(t.storage===null||t.storage===void 0||(c=t.storage.switches)===null||c===void 0?void 0:c.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(x,{style:[$.subText]},Ye?.map(function(o,R){return e.React.createElement(e.React.Fragment,null,e.React.createElement(H,{label:o?.label,subLabel:o?.subLabel,leading:o?.icon&&e.React.createElement(j,{style:{opacity:1},source:A.getAssetIDByName(o?.icon)}),trailing:"id"in o?e.React.createElement(q,{value:(t.storage===null||t.storage===void 0?void 0:t.storage.switches[o?.id])??o?.default,onValueChange:function(I){return t.storage.switches[o?.id]=I}}):void 0}),R!==Ye?.length-1&&e.React.createElement(k,null))}))),(t.storage===null||t.storage===void 0||(h=t.storage.switches)===null||h===void 0?void 0:h.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(Y,{title:"Switches"}),e.React.createElement(k,null)),(t.storage===null||t.storage===void 0||(d=t.storage.switches)===null||d===void 0?void 0:d.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(x,{style:[$.subText]},je?.map(function(o,R){return e.React.createElement(e.React.Fragment,null,e.React.createElement(H,{label:o?.label,subLabel:o?.subLabel,leading:o?.icon&&e.React.createElement(j,{style:{opacity:1},source:A.getAssetIDByName(o?.icon)}),trailing:"id"in o?e.React.createElement(q,{value:(t.storage===null||t.storage===void 0?void 0:t.storage.switches[o?.id])??o?.default,onValueChange:function(I){return t.storage.switches[o?.id]=I}}):void 0}),R!==je?.length-1&&e.React.createElement(k,null))}))),(t.storage===null||t.storage===void 0||(p=t.storage.switches)===null||p===void 0?void 0:p.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(Y,{title:"Text Variables"}),e.React.createElement(k,null)),(t.storage===null||t.storage===void 0||(C=t.storage.switches)===null||C===void 0?void 0:C.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(x,{style:[$.subText]},Je?.map(function(o,R){return e.React.createElement(e.React.Fragment,null,e.React.createElement(Tt,{title:o?.title,keyboardType:o?.type,placeholder:o?.placeholder,value:(t.storage===null||t.storage===void 0?void 0:t.storage.inputs[o.id])??o?.placeholder,onChange:function(I){return t.storage.inputs[o.id]=I.toString()}}),R!==Je.length-1&&e.React.createElement(k,null))}))),(t.storage===null||t.storage===void 0||(D=t.storage.switches)===null||D===void 0?void 0:D.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(Y,{title:"Color Pickers"}),e.React.createElement(k,null)),(t.storage===null||t.storage===void 0||(_=t.storage.switches)===null||_===void 0?void 0:_.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(x,{style:[$.subText]},Xe?.map(function(o){var R;const I=function(){var N;return Pe(wt,{color:Me==null||(N=W)===null||N===void 0?void 0:N.toInt(t.storage.colors[o.id]||o?.defaultColor||"#000"),onSelect:function(P){var F;const O=Me==null||(F=W)===null||F===void 0?void 0:F.toHex(P);t.storage.colors[o.id]=O}})};return e.React.createElement(e.React.Fragment,null,e.React.createElement(H,{label:o?.label,subLabel:o?.subLabel||"Click to Update",onPress:I,trailing:e.React.createElement(Ve,{onPress:I},e.React.createElement(Nt,{source:{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mJsrQAAAgwBAJ9P6qYAAAAASUVORK5CYII="},style:{width:32,height:32,borderRadius:10,backgroundColor:(t.storage===null||t.storage===void 0?void 0:t.storage.colors[o.id])||((R=Xe.find(function(N){return N?.id==o?.id}))===null||R===void 0?void 0:R.defaultColor)||"#000"}}))}))}))),(t.storage===null||t.storage===void 0||(g=t.storage.switches)===null||g===void 0?void 0:g.customizeable)&&e.React.createElement(e.React.Fragment,null,e.React.createElement(x,{style:[$.subText]},e.React.createElement(x,{style:$.container},e.React.createElement(H,{style:{justifyContent:"center",alignItems:"center"},label:`Preview Style: ${!(t.storage===null||t.storage===void 0||(m=t.storage.switches)===null||m===void 0)&&m.darkMode?"Light":"Dark"} Mode`,subLabel:"Click to Switch Mode",trailing:e.React.createElement(q,{value:(t.storage===null||t.storage===void 0||(v=t.storage.switches)===null||v===void 0?void 0:v.darkMode)??!0,onValueChange:function(o){return t.storage.switches.darkMode=o}})}),e.React.createElement(x,{style:[$.row,$.border,{overflow:"hidden",marginRight:10}]},e.React.createElement(x,{style:{width:"2%",backgroundColor:`${t.storage.colors.gutterColor}${Z(U.toPercentage(b))}`}}),e.React.createElement(x,{style:{flex:1,backgroundColor:`${t.storage.colors.backgroundColor}${Z(U.toPercentage(u))}`,justifyContent:"center",alignItems:"center"}},e.React.createElement(Ge,{style:{fontSize:20,color:!(t.storage===null||t.storage===void 0||(l=t.storage.switches)===null||l===void 0)&&l.darkMode?"black":"white"}}," Low Effort Normal Example Message "),e.React.createElement(Ge,{style:{fontSize:20,color:t.storage.colors.textColor||"#000000"}}," Low Effort Deleted Example Message "))),e.React.createElement(He,{label:`Background Color Alpha: ${U.toPercentage(u)}%`,value:u,style:{width:"90%"},onValueChange:function(o){s(Number(U.formatDecimal(o))),t.storage.colors.backgroundColorAlpha=Z(U.toPercentage(o))}}),e.React.createElement(k,null),e.React.createElement(He,{label:`Background Gutter Alpha: ${U.toPercentage(b)}%`,value:b,style:{width:"90%"},onValueChange:function(o){E(Number(U.formatDecimal(o))),t.storage.colors.gutterColorAlpha=Z(U.toPercentage(o))}}))))),e.React.createElement(Y,{title:"Ignore List Setting",style:[$.header]},e.React.createElement(H,{label:"Add User to List",subLabel:"List of ignored users for the plugin",leading:e.React.createElement(j,{style:{opacity:1},source:A.getAssetIDByName("ic_members")}),onPress:w,trailing:e.React.createElement(Ve,{onPress:w},e.React.createElement(j,{style:{opacity:1},source:Ft}))}),e.React.createElement(k,null))))}y.findByProps("openLazy","hideActionSheet");const ue=y.findByProps("getChannel","getDMFromUserId"),We=y.findByProps("_channelMessages");function Pt(n){return B.before("dispatch",e.FluxDispatcher,function(r){const[a]=r,f=a?.type;if(f=="MESSAGE_DELETE"){var c,h,d,p,C,D,_,g,m,v,l,u;if(a?.otherPluginBypass)return r;const _e=We.get(a.channelId),i=_e?.get(a.id);if(!i||a?.id&&((c=n[a?.id])===null||c===void 0?void 0:c.stage)==2)return r;if(a?.id&&((h=n[a?.id])===null||h===void 0?void 0:h.stage)==1){var s;return n[a?.id].stage=2,((s=n[a?.id])===null||s===void 0?void 0:s.message)??r}const we=i==null||(d=i.author)===null||d===void 0?void 0:d.id,De=i==null||(p=i.author)===null||p===void 0?void 0:p.username,Ne=!i?.content&&(i==null||(C=i.attachments)===null||C===void 0?void 0:C.length)==0&&(i==null||(D=i.embeds)===null||D===void 0?void 0:D.length)==0;return!we||!De||Ne||!(t.storage===null||t.storage===void 0||(_=t.storage.switches)===null||_===void 0)&&_.ignoreBots&&!(i==null||(g=i.author)===null||g===void 0)&&g.bot||(t.storage===null||t.storage===void 0||(v=t.storage.inputs)===null||v===void 0||(m=v.ignoredUserList)===null||m===void 0?void 0:m.length)>0&&!((l=t.storage.inputs.ignoredUserList)===null||l===void 0)&&l.some(function(ee){var J;return ee?.id==(i==null||(J=i.author)===null||J===void 0?void 0:J.id)||ee.username==i.author.username})||(r[0]={type:"MESSAGE_UPDATE",channelId:i?.channel_id||a?.channelId,message:{...i,content:i?.content,type:0,flags:64,channel_id:i?.channel_id||a?.channelId,guild_id:ue==null||(u=ue.getChannel(i?.channel_id))===null||u===void 0?void 0:u.guild_id,timestamp:`${new Date().toJSON()}`,state:"SENT",was_deleted:!0},optimistic:!1,sendMessageOptions:{},isPushNotification:!1},n[a?.id||i?.id]={message:r,stage:1}),r}if(f=="MESSAGE_UPDATE"){var b,E,S,w,o,R,I,N,P,F,O,X,fe,he,ve,Ee,Re,ye,be,me,Se,pe,Ce;if(a?.otherPluginBypass||!(a==null||(E=a.message)===null||E===void 0||(b=E.author)===null||b===void 0)&&b.bot)return r;const _e=We.get(a==null||(S=a.message)===null||S===void 0?void 0:S.channel_id),i=_e?.get(a==null||(w=a.message)===null||w===void 0?void 0:w.id),we=i==null||(o=i.author)===null||o===void 0?void 0:o.id,De=i==null||(R=i.author)===null||R===void 0?void 0:R.username,Ne=!i?.content&&(i==null||(I=i.attachments)===null||I===void 0?void 0:I.length)==0&&(i==null||(N=i.embeds)===null||N===void 0?void 0:N.length)==0;if(!i||!we||!De||Ne)return r;const ee=(a==null||(P=a.message)===null||P===void 0?void 0:P.content)==i?.content,J=a==null||(F=a.message)===null||F===void 0?void 0:F.embeds.some(function(M){var z,Fe;return M?.url==i?.content||(M==null||(z=M.thumbnail)===null||z===void 0?void 0:z.url)==i?.content||i?.content.includes(M?.url)||i?.content.includes(M==null||(Fe=M.thumbnail)===null||Fe===void 0?void 0:Fe.url)}),ta=(a==null||(X=a.message)===null||X===void 0||(O=X.embeds)===null||O===void 0?void 0:O.size)||(a==null||(he=a.message)===null||he===void 0||(fe=he.embeds)===null||fe===void 0?void 0:fe.length),aa=(i==null||(ve=i.embeds)===null||ve===void 0?void 0:ve.size)||(i==null||(Ee=i.embeds)===null||Ee===void 0?void 0:Ee.length);if(ee||J||!(!(a==null||(Re=a.message)===null||Re===void 0)&&Re.content)&&ta!=aa||(t.storage===null||t.storage===void 0||(be=t.storage.inputs)===null||be===void 0||(ye=be.ignoredUserList)===null||ye===void 0?void 0:ye.length)>0&&!((me=t.storage.inputs.ignoredUserList)===null||me===void 0)&&me.some(function(M){var z;return M?.id==(i==null||(z=i.author)===null||z===void 0?void 0:z.id)||M.username==i.author.username}))return r;let te=(t.storage===null||t.storage===void 0||(Se=t.storage.inputs)===null||Se===void 0?void 0:Se.editedMessageBuffer)||"`[ EDITED ]`";te=te+`

`;const na=a?.message||i;let Te=`${i?.content}`;if(!(t.storage===null||t.storage===void 0||(pe=t.storage.switches)===null||pe===void 0)&&pe.addTimestampForEdits){var Ie;const M=Date.now(),z=`<t:${Math.abs(Math.round(M/1e3))}:R>`;Te+=`  (${z}) ${te}${(a==null||(Ie=a.message)===null||Ie===void 0?void 0:Ie.content)??""}`}else{var Ae;Te+=`  ${te}${(a==null||(Ae=a.message)===null||Ae===void 0?void 0:Ae.content)??""}`}return r[0]={type:"MESSAGE_UPDATE",message:{...na,content:Te,guild_id:(Ce=ue.getChannel(i?.channel_id))===null||Ce===void 0?void 0:Ce.guild_id,edited_timestamp:"invalid_timestamp"}},r}})}const Lt=y.findByProps("startEditMessage");function Mt(){return B.before("startEditMessage",Lt,function(n){var r;let a=(t.storage===null||t.storage===void 0||(r=t.storage.inputs)===null||r===void 0?void 0:r.editedMessageBuffer)||"`[ EDITED ]`";a=a+`

`;const[f,c,h]=n,d=h.split(a);return n[2]=d[d.length-1],n})}const{DCDChatManager:xt}=e.ReactNative.NativeModules;function $t(n){return B.before("updateRows",xt,function(r){var a;let f=JSON.parse(r[1]);const{textColor:c,backgroundColor:h,backgroundColorAlpha:d,gutterColor:p,gutterColorAlpha:C}=t.storage.colors,D=(a=t.storage.inputs)===null||a===void 0?void 0:a.deletedMessageBuffer,{useBackgroundColor:_,minimalistic:g,removeDismissButton:m}=t.storage.switches;function v(s,b){s||(s=b);const E=s?.trim();if(E.startsWith("#")){const S=E.slice(1);if(/^[0-9A-Fa-f]{6}$/.test(S))return"#"+S.toUpperCase()}else if(/^[0-9A-Fa-f]{6}$/.test(E))return"#"+E.toUpperCase();return b||"#000"}function l(s,b){const E=b?.toString(),S=["text","heading","s","u","em","strong","list","blockQuote"];if(Array.isArray(s))return s.map(function(w){return l(w,E)});if(typeof s=="object"&&s!==null){const{content:w,type:o,target:R,items:I}=s;if(!S.includes(o))return s;if(o==="text"&&w&&w.length>=1)return{content:[{content:w,type:"text"}],target:"usernameOnClick",type:"link",context:{username:1,medium:!0,usernameOnClick:{action:"0",userId:"0",linkColor:e.ReactNative.processColor(E),messageChannelId:"0"}}};const N=l(w,E),P=I?I.map(l,E):void 0;if(N!==w||P!==I||!S.includes(o)){const F={...s,content:N};return o==="blockQuote"&&R&&(F.content=N,F.target=R),o==="list"&&F?.content&&delete F.content,I&&(F.items=P),F}}return s}function u(s,b,E){return s&&(b!=null&&(s.content[0].content[0].content=b+"  "),E==null&&s.content[0].content.splice(1)),s}return f.forEach(function(s){if(s?.type==1){var b;if(n[s==null||(b=s.message)===null||b===void 0?void 0:b.id]){if(s.message.edited=D?.length>0?D:"This message is deleted",g==!1){var E;const S=v(c,"#E40303"),w=l(s==null||(E=s.message)===null||E===void 0?void 0:E.content,S);s.message.content=w}if(m&&(s.message.ephemeralIndication=u(s.message.ephemeralIndication,void 0,void 0)),g==!1&&_==!0){const S=v(`${h}`,"#FF2C2F"),w=v(`${p}`,"#FF2C2F");s.backgroundHighlight={backgroundColor:e.ReactNative.processColor(`${S}${d}`),gutterColor:e.ReactNative.processColor(`${w}${C}`)}}}}}),r[1]=JSON.stringify(f),r[1]})}const Ut=y.findByProps("updateMessageRecord","createMessageRecord");function Ot(){return B.after("createMessageRecord",Ut,function(n,r){let[a]=n;r.was_deleted=a.was_deleted})}const kt=y.findByName("MessageRecord",!1);function zt(){return B.after("default",kt,function(n,r){let[a]=n;r.was_deleted=!!a.was_deleted})}const Qe=y.findByProps("updateMessageRecord","createMessageRecord");function Gt(){return B.instead("updateMessageRecord",Qe,function(n,r){let[a,f]=n;return f.was_deleted?Qe.createMessageRecord(f,a.reactions):r.apply(this,[a,f])})}const{FormSection:Vt}=L.Forms,Ht=y.findByName("getScreens"),Yt=y.findByName("UserSettingsOverviewWrapper",!1),jt=e.stylesheet.createThemedStyleSheet({container:{flex:1,backgroundColor:T.semanticColors.BACKGROUND_MOBILE_PRIMARY}});function Xt(n,r,a){const f=[],c=B.after("default",Yt,function(h,d){c();const p=K.findInReactTree(d.props.children,function(C){return C.type&&C.type.name==="UserSettingsOverview"});f.push(B.after("render",p.type.prototype,function(C,D){let{props:{children:_}}=D;const g=[e.i18n.Messages.BILLING_SETTINGS,e.i18n.Messages.PREMIUM_SETTINGS];_=K.findInReactTree(_,function(v){return v.children[1].type===Vt}).children;const m=_.findIndex(function(v){return g.includes(v?.props.label)});n()&&_.splice(m===-1?4:m,0,r({}))}))},!0);if(f.push(c),Ht&&a){const h=`VENDETTA_PLUGIN_${e.lodash.snakeCase(a.key).toUpperCase()}`,d=a.page.render,p=e.React.memo(function(g){let{navigation:m}=g;const v=m.addListener("focus",function(){v(),m.setOptions(K.without(a.page,"noErrorBoundary","render"))});return e.React.createElement(e.ReactNative.View,{style:jt.container},a.page.noErrorBoundary?e.React.createElement(d,null):e.React.createElement(L.ErrorBoundary,null,e.React.createElement(d,null)))}),C={[h]:{type:"route",title:function(){return a.title},icon:a.icon,parent:null,screen:{route:`VendettaPlugin${e.lodash.chain(a.key).camelCase().upperFirst().value()}`,getComponent:function(){return p}}}},D=function(g,m){var v,l;const u=[...g],s=m?u==null||(v=u[0])===null||v===void 0?void 0:v.sections:u;if(!Array.isArray(s))return s;const b="Vendetta",E=s.find(function(S){return S?.title===b||S?.label===b});return E&&!(!(E==null||(l=E.settings)===null||l===void 0)&&l.includes(h))&&E.settings.push(h),u},_=function(){const g=y.findByProps("useOverviewSettings"),m=y.findByProps("getSettingTitleConfig"),v=y.findByProps("SETTING_RELATIONSHIPS","SETTING_RENDERER_CONFIGS"),l="getSettingSearchListItems",u="getSettingListItems",s=y.findByProps(l),b=s?l:u,E=s??y.findByProps(u);if(!E||!g)return!1;f.push(B.after("useOverviewSettings",g,function(o,R){return D(R)})),f.push(B.after("getSettingTitleConfig",m,function(o,R){return{...R,[h]:a.title}})),f.push(B.after(b,E,function(o,R){let[I]=o;return[...I.includes(h)?[{type:"setting_search_result",ancestorRendererData:C[h],setting:h,title:function(){return a.title},breadcrumbs:["Vendetta"],icon:C[h].icon}]:[],...R]}));const S=v.SETTING_RELATIONSHIPS,w=v.SETTING_RENDERER_CONFIGS;return v.SETTING_RELATIONSHIPS={...S,[h]:null},v.SETTING_RENDERER_CONFIGS={...w,...C},f.push(function(){v.SETTING_RELATIONSHIPS=S,v.SETTING_RENDERER_CONFIGS=S}),!0};(function(){const g=y.findByProps("SearchableSettingsList"),m=y.findByProps("SETTING_RENDERER_CONFIG"),v=y.findByProps("getSettingListItems");if(!v||!g||!m)return!1;f.push(B.before("type",g.SearchableSettingsList,function(u){return D(u,!0)})),f.push(B.after("getSettingListSearchResultItems",v,function(u,s){for(const b of s)b.setting===h&&(b.breadcrumbs=["Vendetta"])}));const l=m.SETTING_RENDERER_CONFIG;return m.SETTING_RENDERER_CONFIG={...l,...C},f.push(function(){m.SETTING_RENDERER_CONFIG=l}),!0})()||_()}return function(){return f.forEach(function(h){return h()})}}const{FormRow:ge}=L.Forms;function Jt(){const n=e.NavigationNative.useNavigation();return React.createElement(L.ErrorBoundary,null,React.createElement(ge,{label:"Antied",leading:React.createElement(ge.Icon,{source:A.getAssetIDByName("ic_edit_24px")}),trailing:ge.Arrow,onPress:function(){return n.push("VendettaCustomPage",{title:"Antied",render:de})}}))}function Kt(){const n=[];return n.push(Xt(function(){return!0},function(){return React.createElement(Jt,null)},{key:Be.plugin.manifest.name,icon:A.getAssetIDByName("ic_edit_24px"),title:"Anti Edit & Delete",page:{title:"Antied",render:de}})),function(){return n.forEach(function(r){return r()})}}const qe=y.findByProps("openLazy","hideActionSheet"),Wt=y.findByProps("getMessage","getMessages"),Qt=y.findByProps("getChannel","getDMFromUserId"),Ze=y.findByProps("_channelMessages"),{FormRow:qt,FormIcon:Zt}=L.Forms;se(t.storage,{switches:{customizeable:!1,enableMD:!0,enableMU:!0,useBackgroundColor:!1,ignoreBots:!1,minimalistic:!0,alwaysAdd:!1,darkMode:!0,removeDismissButton:!1,addTimestampForEdits:!1,timestampStyle:"R"},colors:{textColor:"#E40303",backgroundColor:"#FF2C2F",backgroundColorAlpha:"33",gutterColor:"#FF2C2F",gutterColorAlpha:"CC"},inputs:{deletedMessageBuffer:"This message is deleted",editedMessageBuffer:"`[ EDITED ]`",ignoredUserList:[]}});let et=[],tt={};var ea={onLoad:function(){et.push(Kt(),Pt(tt),$t(tt),Mt(),Ot(),zt(),Gt(),B.before("openLazy",qe,function(n){let[r,a,f]=n;const c=f?.message;a!=="MessageLongPressActionSheet"||!c||r.then(function(h){const d=B.after("default",h,function(p,C){var D;e.React.useEffect(function(){return function(){d()}},[]);const _=K.findInReactTree(C,function(l){var u,s;return(l==null||(s=l[0])===null||s===void 0||(u=s.type)===null||u===void 0?void 0:u.name)==="ButtonRow"});if(!_)return C;const g=Math.max(_.findIndex(function(l){var u,s;return(l==null||(u=l.props)===null||u===void 0?void 0:u.message)===(e.i18n===null||e.i18n===void 0||(s=e.i18n.Messages)===null||s===void 0?void 0:s.MESSAGE_ACTION_REPLY)}),0),m=Wt.getMessage(c.channel_id,c?.id),v=function(l){return l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}((t.storage===null||t.storage===void 0||(D=t.storage.inputs)===null||D===void 0?void 0:D.editedMessageBuffer)||"`[ EDITED ]`");if(new RegExp(v,"gmi").test(c.content)){const l=g||1;_.splice(l,0,e.React.createElement(qt,{label:"Remove Edit History",leading:e.React.createElement(Zt,{style:{opacity:1},source:A.getAssetIDByName("ic_edit_24px")}),onPress:function(){var u,s,b;let E=(t.storage===null||t.storage===void 0||(u=t.storage.inputs)===null||u===void 0?void 0:u.editedMessageBuffer)||"`[ EDITED ]`";E=E+`

`;const S=c==null||(s=c.content)===null||s===void 0?void 0:s.split(E),w=S[S.length-1],o=c==null||(b=c.embeds)===null||b===void 0?void 0:b.map(function(R){var I,N,P;const F=R==null||(P=R.color)===null||P===void 0||(N=P.replace(/.+\(/,""))===null||N===void 0||(I=N.replace(/\%/g,""))===null||I===void 0?void 0:I.replace(")",""),O=F?.split(", "),X=e.ReactNative.processColor(`${Le(W.HSLtoHEX(O[0],O[1],O[2]),O[3])}`);return{...R,author:R.author,title:R.rawTitle,description:R.rawDescription,url:R.url,type:R.type,image:R.image,thumbnail:R.thumbnail,color:X,content_scan_version:1}});e.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...c,content:`${w}`,embeds:o??[],attachments:c.attachments??[],mentions:c.mentions??[],guild_id:Qt.getChannel(m.channel_id).guild_id},otherPluginBypass:!0}),qe.hideActionSheet(),re.showToast("[ANTI ED] History Removed",A.getAssetIDByName("ic_edit_24px"))}}))}})})}))},onUnload:function(){for(const n of et)n();for(const n in Ze._channelMessages)for(const r of Ze._channelMessages[n]._array)r.was_deleted&&e.FluxDispatcher.dispatch({type:"MESSAGE_DELETE",id:r.id,channelId:r.channel_id,otherPluginBypass:!0})},settings:de};return ae.default=ea,Object.defineProperty(ae,"__esModule",{value:!0}),ae})({},vendetta,vendetta.metro,vendetta.plugin,vendetta.storage,vendetta.ui.components,vendetta.ui.assets,vendetta.metro.common,vendetta.ui,vendetta.ui.toasts,vendetta.ui.alerts,vendetta.patcher,vendetta.utils);
