"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[486],{5915:function(e,o,i){i.d(o,{F:function(){return d}});var t=i(1413),s=i(5705),a=(i(2791),"TextForm_form__QoV8L"),r="TextForm_textarea__7miDU",n="TextForm_buttonBlock__sN27a",l="TextForm_button__dkc5W",c=i(184),d=function(e){var o=(0,s.TA)({initialValues:{text:""},onSubmit:function(i){e.callback(i),o.resetForm()}});return(0,c.jsxs)("form",{className:a,onSubmit:o.handleSubmit,children:[(0,c.jsx)("textarea",(0,t.Z)({className:r},o.getFieldProps("text"))),(0,c.jsx)("div",{className:n,children:(0,c.jsx)("button",{className:l,children:e.name})})]})}},459:function(e,o,i){i.d(o,{D:function(){return d}});var t=i(1413),s=i(3366);i(2791);var a=i(9271),r=i(364),n=i(184),l=["isLoggedIn"],c=function(e){return{isLoggedIn:e.auth.isLoggedIn}};function d(e){return(0,r.$j)(c)((function(o){var i=o.isLoggedIn,r=function(e,o){if(null==e)return{};var i,t,a=(0,s.Z)(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],o.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}(o,l);return i?(0,n.jsx)(e,(0,t.Z)({},r)):(0,n.jsx)(a.l_,{to:"/login"})}))}},4486:function(e,o,i){i.r(o),i.d(o,{default:function(){return Be}});var t=i(5671),s=i(3144),a=i(136),r=i(5716),n=i(2791),l="ProfileInfo_root__Z2gjV",c="ProfileInfo_profilePhoto__pQ1S6",d="ProfileInfo_profileContent__fyQOj",u="ProfileInfo_profileAvatar__JVnRH",f="ProfileInfo_userAvatar__WR3Ax",m="ProfileInfo_fileInput__6AAIs",v="ProfileInfo_fileInputLabel__3KtEu",_="ProfileInfo_fileInputIcon__PNQoV",p="ProfileInfo_profileInfo__ThgfN",h="ProfileInfo_fullName__x47hV",b="ProfileInfo_aboutMe__8wFz8",x="ProfileInfo_userStatus__1eKay",j=i(3168),g=i(885),N=i(1647),P=i(184),k=function(e){var o=(0,n.useState)(!1),i=(0,g.Z)(o,2),t=i[0],s=i[1],a=(0,n.useState)(e.status),r=(0,g.Z)(a,2),l=r[0],c=r[1];return t?(0,P.jsx)(N.Z,{value:l,onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(l)}}):(0,P.jsx)("span",{onDoubleClick:function(){e.isOwner&&(s(!0),c(e.status))},children:e.status})},F=i(5917);var A=i.p+"static/media/icon-edit.1eeae1f4fdc99797976b21afb2d76001.svg",y=n.memo((function(e){var o=e.profile,i=e.updateStatus,t=e.status,s=e.isOwner,a=e.savePhoto;return(0,P.jsxs)("div",{className:l,children:[(0,P.jsx)("div",{children:(0,P.jsx)("img",{className:c,src:F,alt:"profile-cover"})}),(0,P.jsxs)("div",{className:d,children:[(0,P.jsxs)("div",{className:u,children:[(0,P.jsx)("img",{className:f,src:(null===o||void 0===o?void 0:o.photos.large)||j,alt:"profile-avatar-8"}),s&&(0,P.jsxs)("label",{htmlFor:"mainPhotoInput",className:v,children:[(0,P.jsx)("input",{id:"mainPhotoInput",type:"file",onChange:function(e){e.target.files&&a(e.target.files[0])},className:m}),(0,P.jsx)("img",{className:_,src:A,alt:"edit-icon"})]}),s&&(0,P.jsx)("div",{className:x})]}),(0,P.jsxs)("div",{className:p,children:[(0,P.jsx)("h1",{className:h,children:null===o||void 0===o?void 0:o.fullName}),(0,P.jsx)("p",{className:b,children:null===o||void 0===o?void 0:o.aboutMe}),(0,P.jsx)(k,{status:t,updateStatus:i,isOwner:e.isOwner})]})]})]})})),I={root:"Profile_root__pWSwR",content:"Profile_content__5jMdv",posts:"Profile_posts__UBWkg",items:"Profile_items__A4egU",imgAndTextarea:"Profile_imgAndTextarea__syr8n",postForm:"Profile_postForm__Roxby",avatar:"Profile_avatar__-foys"},D="ProfileData_root__6yEGC",w="ProfileData_items__oH+I6",S="ProfileData_item__X50Hi",Z="ProfileData_iconBlock__NHcYV",C="ProfileData_iconImage__sum1x",O="ProfileData_info__RHMe4",J="ProfileData_editButton__E82tF",M="ProfileData_contacts__qdvWH",T="ProfileData_contact__nXyab",L="ProfileContact_root__OJpV5",B="ProfileContact_iconBlock__kLDMN",q="ProfileContact_iconImage__dxWL8",V="ProfileContact_link__iCZS2",E=function(e){var o=e.contactValue,i=e.icon,t=e.title;return(0,P.jsxs)("li",{className:L,children:[i&&(0,P.jsx)("div",{className:B,children:(0,P.jsx)("a",{href:o||"#",target:"_blank",children:(0,P.jsx)("img",{className:q,src:i,alt:"".concat(t,"-icon")})})}),(0,P.jsx)("p",{children:(0,P.jsx)("a",{className:V,href:o||"#",target:"_blank",children:o})})]})};var W=i.p+"static/media/icon-heart.0ff3ff3b96a0e4a29e27036adcbe62c5.svg";var H=i.p+"static/media/icon-looking.29f10c7226c3270e77a6a3bca00335be.svg";var U=i.p+"static/media/icon-skills.0b5d14bae1373d7f21231949796e6502.svg";var z=i.p+"static/media/icon-contacts.1dcef3e2df532973cc148e256d68b67b.svg";var Q=i.p+"static/media/icon-facebook.7563b79c888e2539cfd4f821b5510010.svg";var G=i.p+"static/media/icon-globe.5d5f8e2189d69e6f12886d7818b24c78.svg";var K=i.p+"static/media/icon-twitter.d9bcf9229cd0c3fa592b18e095b17d8e.svg";var R=i.p+"static/media/icon-instagram.c1a46f0ec5c2080bfbd8a03555a331ed.svg";var X=i.p+"static/media/icon-youtube.6f04013ce6b2552ba3fdd77da1fde7fa.svg";var Y=i.p+"static/media/icon-github.995cd458f210ec45d1f55a2242a4ea3c.svg";var $=i.p+"static/media/icon-vk.63d486febab3638ea146e8458abc9e08.svg";var ee=i.p+"static/media/icon-mainLink.ee97887f4a161a024eedb6aa9fdefdfe.svg",oe=function(e){var o={aboutMe:W,lookingForAJob:H,lookingForAJobDescription:U,contacts:z,facebook:Q,website:G,vk:$,twitter:K,instagram:R,youtube:X,github:Y,mainLink:ee},i=e.profile,t=e.activateEditMode,s=e.isOwner;return(0,P.jsxs)("div",{className:D,children:[(0,P.jsxs)("ul",{className:w,children:[(0,P.jsxs)("li",{className:S,children:[(0,P.jsx)("div",{className:Z,children:(0,P.jsx)("img",{className:C,src:o.aboutMe,alt:"aboutMe-icon"})}),(0,P.jsx)("div",{children:"About me:"}),(0,P.jsx)("div",{className:O,children:null===i||void 0===i?void 0:i.aboutMe})]}),(0,P.jsxs)("li",{className:S,children:[(0,P.jsx)("div",{className:Z,children:(0,P.jsx)("img",{className:C,src:o.lookingForAJob,alt:"lookingForAJob-icon"})}),(0,P.jsx)("div",{children:"Looking for a job:"}),(0,P.jsx)("div",{className:O,children:null!==i&&void 0!==i&&i.lookingForAJob?"Yes":"No"})]}),(null===i||void 0===i?void 0:i.lookingForAJob)&&(0,P.jsxs)("li",{className:S,children:[(0,P.jsx)("div",{className:Z,children:(0,P.jsx)("img",{className:C,src:o.lookingForAJobDescription,alt:"lookingForAJobDescription-icon"})}),(0,P.jsx)("div",{children:"Skills:"}),(0,P.jsx)("div",{className:O,children:null===i||void 0===i?void 0:i.lookingForAJobDescription})]}),(null===i||void 0===i?void 0:i.contacts)&&(0,P.jsxs)("li",{className:M,children:[(0,P.jsxs)("div",{className:S,children:[(0,P.jsx)("div",{className:Z,children:(0,P.jsx)("img",{className:C,src:o.contacts,alt:"contacts-icon"})}),(0,P.jsxs)("div",{children:["Contacts:",Object.values(i.contacts).every((function(e){return!e}))&&(0,P.jsx)("b",{children:" No contacts"})]})]}),(0,P.jsx)("div",{children:(0,P.jsx)("ul",{className:T,children:Object.entries(i.contacts).map((function(e){var i=(0,g.Z)(e,2),t=i[0],s=i[1];return s&&(0,P.jsx)(E,{title:t,contactValue:s,icon:o[t]},t)}))})})]})]}),s&&(0,P.jsx)("button",{className:J,onClick:function(){t()},children:" Edit "})]})},ie={root:"About_root__WqLXl"},te=i(1413),se=i(5705),ae={root:"ProfileDataForm_root__nF-6V",formContainer:"ProfileDataForm_formContainer__fLfnm",formItems:"ProfileDataForm_formItems__JC8a-",item:"ProfileDataForm_item__g-bxf",iconBlock:"ProfileDataForm_iconBlock__++m+m",iconImage:"ProfileDataForm_iconImage__FKMgV",info:"ProfileDataForm_info__GEn-P",contacts:"ProfileDataForm_contacts__x7uNH",saveButton:"ProfileDataForm_saveButton__jWWZm"},re=i(9174),ne=function(e){var o=e.profile,i=e.callback,t=(0,se.TA)({initialValues:{aboutMe:null===o||void 0===o?void 0:o.aboutMe,fullName:null===o||void 0===o?void 0:o.fullName,lookingForAJob:!1,lookingForAJobDescription:null===o||void 0===o?void 0:o.lookingForAJobDescription,contacts:{facebook:null===o||void 0===o?void 0:o.contacts.facebook,website:null===o||void 0===o?void 0:o.contacts.website,vk:null===o||void 0===o?void 0:o.contacts.vk,twitter:null===o||void 0===o?void 0:o.contacts.twitter,instagram:null===o||void 0===o?void 0:o.contacts.instagram,youtube:null===o||void 0===o?void 0:o.contacts.youtube,github:null===o||void 0===o?void 0:o.contacts.github,mainLink:null===o||void 0===o?void 0:o.contacts.mainLink}},validate:function(e){var o={};e.fullName||(o.fullName="Full name is required"),e.lookingForAJobDescription||(o.lookingForAJobDescription="Professional skills are required"),e||(o.aboutMe="About me are required");var i={},t=e.contacts||{};return t.facebook||(i.facebook="The field is required"),t.website||(i.website="The field is required"),t.vk||(i.vk="The field is required"),t.twitter||(i.twitter="The field is required"),t.instagram||(i.instagram="The field is required"),t.youtube||(i.youtube="The field is required"),t.github||(i.github="The field is required"),t.mainLink||(i.mainLink="The field is required"),Object.keys(i).length>0&&(o.contacts=i),o},onSubmit:function(e,o){var s=o.setSubmitting,a=t.validateForm(e);0===Object.keys(a).length&&i(e),s(!1)}});return(0,P.jsx)("form",{className:ae.formContainer,onSubmit:t.handleSubmit,children:(0,P.jsx)("div",{className:ae.root,children:(0,P.jsxs)("div",{className:ae.formItems,children:[(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"Full name"}),": ",null===o||void 0===o?void 0:o.fullName,(0,P.jsx)(N.Z,(0,te.Z)({placeholder:"Full name",size:"small",style:{width:"100%"}},t.getFieldProps("fullName"))),t.touched.fullName&&t.errors.fullName?(0,P.jsxs)("div",{style:{color:"red"},children:[" ",t.errors.fullName," "]}):null]}),(0,P.jsxs)("div",{className:ae.checkboxContainer,children:[(0,P.jsx)("div",{children:(0,P.jsx)("b",{children:"Looking for a job"})}),(0,P.jsx)(re.Z,(0,te.Z)({},t.getFieldProps("lookingForAJob")))]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"My professional skills"}),": ",null===o||void 0===o?void 0:o.lookingForAJobDescription,(0,P.jsx)(N.Z,(0,te.Z)({size:"small",style:{width:"100%"}},t.getFieldProps("lookingForAJobDescription"))),t.touched.lookingForAJobDescription&&t.errors.lookingForAJobDescription?(0,P.jsxs)("div",{style:{color:"red"},children:[" ",t.errors.lookingForAJobDescription," "]}):null]}),(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:"About me"}),": ",null===o||void 0===o?void 0:o.aboutMe,(0,P.jsx)(N.Z,(0,te.Z)({size:"small",style:{width:"100%"}},t.getFieldProps("aboutMe"))),t.touched.aboutMe&&t.errors.aboutMe?(0,P.jsxs)("div",{style:{color:"red"},children:[" ",t.errors.aboutMe," "]}):null]}),(null===o||void 0===o?void 0:o.contacts)&&(0,P.jsx)("div",{className:ae.contacts,children:Object.entries(o.contacts).map((function(e){var o,i,s=(0,g.Z)(e,1)[0];return(0,P.jsxs)("div",{children:[(0,P.jsx)("b",{children:s}),":",(0,P.jsx)(N.Z,(0,te.Z)({style:{width:"100%"},size:"small"},t.getFieldProps("contacts.".concat(s)))),(null===(o=t.touched.contacts)||void 0===o?void 0:o[s])&&(null===(i=t.errors.contacts)||void 0===i?void 0:i[s])&&(0,P.jsx)("div",{style:{color:"red"},children:t.errors.contacts[s]})]},s)}))}),(0,P.jsx)("div",{className:ae.buttonBlock,children:(0,P.jsx)("button",{type:"submit",className:ae.saveButton,children:" Save"})})]})})})},le=function(e){var o=e.profile,i=e.updateProfile,t=e.isOwner,s=(0,n.useState)(!1),a=(0,g.Z)(s,2),r=a[0],l=a[1];return(0,P.jsxs)("div",{className:ie.root,children:[(0,P.jsx)("h4",{className:ie.sidebar__title,children:" About "}),r?(0,P.jsx)(ne,{callback:function(e){i(e).then((function(){l(!1)}))},profile:o}):(0,P.jsx)(oe,{profile:o,activateEditMode:function(){l(!0)},isOwner:t})]})},ce="Sidebar_root__brThb",de=function(e){var o=e.isOwner,i=e.updateProfile,t=e.profile;return(0,P.jsx)("div",{className:ce,children:(0,P.jsx)(le,{profile:t,updateProfile:i,isOwner:o})})},ue="PostHeader_root__D4zGf",fe="AvatarAndFullName_user__vZ+K1",me="AvatarAndFullName_image__OljiQ",ve="AvatarAndFullName_fullName__8CcqC",_e="AvatarAndFullName_img__CrP2X",pe=function(e){var o,i,t;return(0,P.jsxs)("div",{className:fe,children:[(0,P.jsx)("div",{className:me,children:null!==(o=e.profile)&&void 0!==o&&o.photos.large?(0,P.jsx)("img",{className:_e,src:null===(i=e.profile)||void 0===i?void 0:i.photos.large,alt:""}):(0,P.jsx)("img",{className:_e,src:j,alt:""})}),(0,P.jsx)("span",{className:ve,children:null===(t=e.profile)||void 0===t?void 0:t.fullName})]})},he=function(e){return(0,P.jsx)("div",{className:ue,children:(0,P.jsx)(pe,{profile:e.profile})})},be=i(5915),xe="Post_root__EZkEk",je="Post_text__U1NQ4",ge="Post_likes__wbE3V",Ne="Post_likesCount__G8Wlf",Pe="Post_likesIcon__JvNVg",ke=i(2622),Fe=n.memo((function(e){return(0,P.jsxs)("div",{className:xe,children:[(0,P.jsx)(he,{profile:e.profile}),(0,P.jsx)("div",{className:je,children:e.message}),(0,P.jsxs)("div",{className:ge,children:[(0,P.jsx)("img",{className:Pe,src:ke,alt:"icon-likes"}),(0,P.jsx)("span",{className:Ne,children:e.likesCount})]})]})})),Ae={items:"Posts_items__kHtBU",postForm:"Posts_postForm__JQzSK",textareaAndButton:"Posts_textareaAndButton__Bth1f"},ye=n.memo((function(e){var o=e.posts.map((function(o){return(0,P.jsx)(Fe,{message:o.message,likesCount:o.likesCount,id:o.id,profile:e.profile},o.id)}));return(0,P.jsx)("div",{className:Ae.posts,children:o})})),Ie=n.memo((function(e){var o=e.profile,i=e.updateProfile,t=e.updateStatus,s=e.status,a=e.isOwner,r=e.savePhoto;return(0,P.jsx)("div",{className:I.root,children:(0,P.jsxs)("div",{className:I.content,children:[(0,P.jsx)(y,{profile:o,savePhoto:r,isOwner:a,status:s,updateStatus:t}),(0,P.jsxs)("div",{className:I.items,children:[(0,P.jsxs)("div",{className:I.posts,children:[(0,P.jsx)("div",{className:I.postForm,children:(0,P.jsxs)("div",{className:I.textareaAndButton,children:[(0,P.jsx)(he,{profile:e.profile}),(0,P.jsx)(be.F,{callback:function(o){""!==o.text&&e.addPost(o.text)},name:"Add post"})]})}),(0,P.jsx)(ye,{profile:o,posts:e.posts})]}),(0,P.jsx)(de,{profile:o,updateProfile:i,isOwner:a})]})]})})})),De=i(364),we=i(702),Se=i(9271),Ze=i(459),Ce=i(7781),Oe=i(2447),Je=function(e){return e.profile.profile},Me=function(e){return e.profile.status},Te=function(e){return e.profile.posts},Le=function(e){(0,a.Z)(i,e);var o=(0,r.Z)(i);function i(){return(0,t.Z)(this,i),o.apply(this,arguments)}return(0,s.Z)(i,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.setUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,o,i){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,P.jsx)(Ie,{profile:this.props.profile,isOwner:!this.props.match.params.userId,status:this.props.status,updateStatus:this.props.updateStatus,updateProfile:this.props.updateProfile,savePhoto:this.props.savePhoto,addPost:this.props.addPost,posts:this.props.posts})}}]),i}(n.PureComponent),Be=(0,Ce.qC)((0,De.$j)((function(e){return{profile:Je(e),status:Me(e),userId:(0,Oe.ZM)(e),posts:Te(e)}}),{setUserProfile:we.bq,getStatus:we.GP,updateStatus:we.OG,updateProfile:we.UA,savePhoto:we.Tw,addPost:we.Pi}),Se.EN,Ze.D)(Le)},2622:function(e,o,i){e.exports=i.p+"static/media/like_icon.1a0d811585cb6abc1ae0.png"},5917:function(e,o,i){e.exports=i.p+"static/media/profile-photo.4100939f8ee4c2ba23d2.jpg"},3168:function(e,o,i){e.exports=i.p+"static/media/userAvatar.8e7ab55da0bc52271ed8.jpg"}}]);
//# sourceMappingURL=486.54572180.chunk.js.map