(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},"9Dj+":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o=r("vOnD"),s=r("qhky"),c=function(e){var t=e.title,r=e.description,n=e.siteUrl;return a.a.createElement(s.a,null,a.a.createElement("title",null,t),a.a.createElement("meta",{name:"description",content:r}),a.a.createElement("link",{rel:"canonical",href:n}),a.a.createElement("meta",{property:"og:url",content:n}),a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:r}))},l=r("bFe0"),u={siteTitle:"James Leong",email:"james.leong@gmail.com",navLinks:[{name:"Home",url:"/"},{name:"Writings",url:"/writings/"},{name:"About",url:"/about/"}],socialMedia:[{name:"Github",url:"https://github.com/jyleong"},{name:"LinkedIn",url:"https://www.linkedin.com/in/james-leong-b30236ab/"},{name:"Instagram",url:"https://www.instagram.com/"}]},d=Object(o.d)(i.Link).withConfig({displayName:"navlinks__NavLink",componentId:"aoz7xe-0"})(["",';margin:0 1vw;transition:all 200ms ease-in position:relative;font-size:1.5rem;:after{position:absolute;bottom:0;left:0;right:0;width:0%;content:".";height:1px;transition:all 0.4s ease-in;}@media (max-width:768px){padding:20px 0;font-size:1.5rem;z-index:6;}'],l.b.inlineLink),f=function(){var e=u.navLinks;return a.a.createElement(a.a.Fragment,null,e&&e.map((function(e,t){var r=e.name,n=e.url;return a.a.createElement(d,{key:t,to:n},r)})))},p=r("9eSz"),m=r.n(p),h=o.d.div.withConfig({displayName:"logo__LogoWrap",componentId:"sc-3seb4w-0"})(["margin:auto 0;flex:0 1 60px;@media (max-width:768px){flex:0 1 30px;}"]),g=Object(o.d)(m.a).withConfig({displayName:"logo__ImageItem",componentId:"sc-3seb4w-1"})(["",";"],l.b.imageItem),y=function(e){var t=Object(i.useStaticQuery)("4044550207");return a.a.createElement(h,{as:i.Link,to:"/"},e.show?a.a.createElement(g,{fluid:t.file.childImageSharp.fluid,alt:"logo"}):a.a.createElement("div",null))},b=l.c.colors,v=o.d.nav.withConfig({displayName:"navbar__NavContainer",componentId:"sc-1k3dwpl-0"})(["height:12vh;display:flex;background-color:",";position:relative;justify-content:space-between;text-transform:uppercase;border-bottom:2px solid #33333320;margin:0 auto;padding:0 3vw;z-index:2;align-self:center;@media (max-width:768px){position:sticky;height:8vh;top:0;left:0;right:0;left:0;}"],b.secondaryBackground),w=o.d.div.withConfig({displayName:"navbar__Toggle",componentId:"sc-1k3dwpl-1"})(["display:none;height:100%;cursor:pointer;padding:0 2vw;@media (max-width:768px){display:flex;}"]),E=o.d.div.withConfig({displayName:"navbar__Hamburger",componentId:"sc-1k3dwpl-2"})(["background-color:#111;width:30px;height:3px;transition:all .3s linear;align-self:center;position:relative;transform:",';::before,::after{width:30px;height:3px;background-color:#111;content:"";position:absolute;transition:all 0.3s linear;}::before{transform:',";top:-10px;}::after{opacity:",";transform:",";top:10px;}"],(function(e){return e.open?"inherit":"rotate(-45deg)"}),(function(e){return e.open?"rotate(0deg)":"rotate(-90deg) translate(-10px, 0px)"}),(function(e){return e.open?"1":"0"}),(function(e){return e.open?"rotate(0deg)":"rotate(90deg)"})),S=o.d.div.withConfig({displayName:"navbar__Navbox",componentId:"sc-1k3dwpl-3"})(["display:flex;height:100%;justify-content:flex-end;align-items:center;@media (max-width:768px){flex-direction:column;position:fixed;width:100%;justify-content:flex-start;padding-top:10vh;background-color:",";transition:all 0.3s ease-in;top:8vh;left:",";}"],b.primaryBackground,(function(e){return e.open?"0":"-100%"})),x=function(e){var t=Object(n.useState)(!1),r=t[0],i=t[1],o="/"!==e.path;return a.a.createElement(v,null,a.a.createElement(y,{show:o}),a.a.createElement(w,{onClick:function(){return i(!r)}},r?a.a.createElement(E,{open:!1}):a.a.createElement(E,{open:!0})),a.a.createElement(S,{open:r},a.a.createElement(f,null)))},T=r("AcpX"),O=r("ma3e");function C(){var e=Object(T.a)(["font-size: ",";"]);return C=function(){return e},e}var k=o.d.div.withConfig({displayName:"social__SocialContainer",componentId:"sc-5m76ze-0"})(["text-align:center;justify-content:center;align-items:center;"]),j=o.d.div.withConfig({displayName:"social__SocialItems",componentId:"sc-5m76ze-1"})(["display:flex;"]),I=o.d.div.withConfig({displayName:"social__SocialItem",componentId:"sc-5m76ze-2"})([""]),L=o.d.a.withConfig({displayName:"social__SocialLink",componentId:"sc-5m76ze-3"})(["padding:7px;color:",";display:flex;transition:",";font-size:",";",";&:hover,&:focus{transform:translateY(-5px);color:",";}"],l.c.colors.primaryGray,l.c.transition,l.c.fontSizes.xxlarge,l.a.thone(C(),l.c.fontSizes.xlarge),l.c.colors.primary),A=function(){var e=u.socialMedia;return a.a.createElement(k,null,a.a.createElement("div",null,"Connect with me"),a.a.createElement(j,null,e&&e.map((function(e,t){var r=e.name,n=e.url;return a.a.createElement(I,{key:t,style:{transitionDelay:50*t+l.c.fadeinOffset+"ms"},className:"fadein"},a.a.createElement(L,{title:r,href:n,target:"_blank","aria-label":r,rel:"nofollow noopener noreferrer"},"Github"===r?a.a.createElement(O.a,null):"LinkedIn"===r?a.a.createElement(O.c,null):a.a.createElement(O.b,null)))}))))},N=o.d.footer.withConfig({displayName:"footerComponent__LayoutFooter",componentId:"sc-1e16a56-0"})(["margin:0 auto;height:100%;padding:1rem;",";flex-direction:column;background-color:",";"],l.b.flexCenter,l.c.colors.primaryBackground),P=o.d.div.withConfig({displayName:"footerComponent__FooterDesc",componentId:"sc-1e16a56-1"})(["display:flex;"]),R=function(e){var t=e.author;return a.a.createElement(N,null,a.a.createElement(A,null),a.a.createElement(P,null,"Built with ♥ by ",t,", © ",(new Date).getFullYear()))},z=o.d.div.withConfig({displayName:"layout__LayoutContainer",componentId:"sc-1ee57u1-0"})(["margin:0 auto;width:100%;height:100%;"]);t.a=function(e){var t=e.children,r=e.location,n=Object(i.useStaticQuery)("2249152690"),o={title:n.site.siteMetadata.title,description:n.site.siteMetadata.description,siteUrl:n.site.siteMetadata.siteUrl,author:n.site.siteMetadata.author},s=o.title,l=o.description,u=o.siteUrl,d=o.author,f=r.pathname?r.pathname:"/";return a.a.createElement("div",{id:"root"},a.a.createElement(c,{title:s,description:l,siteUrl:u}),a.a.createElement("div",null,a.a.createElement(z,null,a.a.createElement(x,{path:f}),t),a.a.createElement(R,{author:d})))}},"9eSz":function(e,t,r){"use strict";var n=r("5NKs");t.__esModule=!0,t.default=void 0;var a,i=n(r("v06X")),o=n(r("XEEL")),s=n(r("uDP2")),c=n(r("j8BX")),l=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=m(t||r||[]);return n&&n.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),r=p(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function x(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function T(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+s+r+n+t+i+a+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(I,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),s):s})),I=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},m,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,O=e.draggable,C=h||g;if(!C)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,c.default)({opacity:L?1:0,transition:A?"opacity "+b+"ms":"none"},s),P="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},z=(0,c.default)({opacity:this.state.imgLoaded?0:1},A&&R,s,f),_={title:t,alt:this.state.isVisible?"":r,style:z,className:p,itemProp:w},M=this.state.isHydrated?m(C):C[0];if(h)return l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),P&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&R)}),M.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:_,imageVariants:C,generateSources:T}),M.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:_,imageVariants:C,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(C),l.default.createElement(I,{alt:r,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:r,title:t,loading:S},M,{imageVariants:C}))}}));if(g){var H=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete H.display,l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},P&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},A&&R)}),M.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:_,imageVariants:C,generateSources:T}),M.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:_,imageVariants:C,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(C),l.default.createElement(I,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:r,title:t,loading:S},M,{imageVariants:C}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var A=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}L.propTypes={resolutions:A,sizes:N,fixed:P(u.default.oneOfType([A,u.default.arrayOf(A)])),fluid:P(u.default.oneOfType([N,u.default.arrayOf(N)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=L;t.default=R},H8eV:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("qhky"),o=r("Wbzz");t.a=function(e){var t=e.description,r=void 0===t?"":t,n=e.lang,s=void 0===n?"en":n,c=e.meta,l=void 0===c?[]:c,u=e.title,d=Object(o.useStaticQuery)("63159454").site,f=r||d.siteMetadata.description,p=[{name:"description",content:f},{property:"og:title",content:u},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:f}];return a.a.createElement(i.a,{htmlAttributes:{lang:s},title:u,titleTemplate:"%s | "+d.siteMetadata.title,meta:p.concat(l)})}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("q1tI"),a=r.n(n),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.a.createContext&&a.a.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return function(t){return a.a.createElement(u,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.a.createElement(t.tag,s({key:r},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var r,n=e.attr,i=e.size,o=e.title,l=c(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&a.a.createElement("title",null,o),e.children)};return void 0!==o?a.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},bFe0:function(e,t,r){"use strict";r.d(t,"c",(function(){return n.a})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));var n=r("lM68"),a=(r("E9XD"),r("vOnD")),i={giant:1440,bigDesktop:1200,desktop:1e3,tablet:768,thone:600,phablet:480,phone:376,tiny:330},o=Object.keys(i).reduce((function(e,t){return e[t]=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return Object(a.c)(["@media (max-width:","px){","}"],i[t],a.c.apply(void 0,[e].concat(n)))},e}),{}),s=n.a.colors,c={flexCenter:Object(a.c)(["display:flex;justify-content:center;align-items:center;"]),flexBetween:Object(a.c)(["display:flex;justify-content:space-between;align-items:center;"]),sectionContainer:Object(a.c)(["padding:0.8rem;position:relative;width:100%;"]),fadeinEnter:Object(a.c)(["text-align:left;opacity:0;transform:translateY(-60px);transition-property:transform,opacity;transition-duration:400ms;"]),fadeinActive:Object(a.c)(["transform:translateY(0);opacity:1;"]),imageItem:Object(a.c)(["padding:0;width:100%;height:100%;border-radius:50%;"]),inlineLink:Object(a.c)(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;transition:",";cursor:pointer;&:hover,&:focus,&:active{text-decoration:underline}"],n.a.transition),divShadow:Object(a.c)(["width:100%;margin:0.3rem;padding:0.4rem;position:inline-block;border-radius:5px;box-shadow:0px 7px 15px -3px var(--theme-ui-colors-shadow,rgba(64,87,253,0.3));transition:",";&:hover,&:focus{box-shadow:0 8px 15px 5px var(--theme-ui-colors-shadow,rgba(64,87,253,0.3));}"],n.a.transition),boxShadow:Object(a.c)(["box-shadow:0 4px 15px 0px ",";transition:",";&:hover,&:focus{box-shadow:0 8px 15px 5px ",";}"],s.black,n.a.transition,s.black)};r("C536")},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var s,c,l,u;if(Array.isArray(t)){if((s=t.length)!=o.length)return!1;for(c=s;0!=c--;)if(!e(t[c],o[c]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],o.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((s=t.length)!=o.length)return!1;for(c=s;0!=c--;)if(t[c]!==o[c])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(r&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!e(t[l[c]],o[l[c]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,a,i,o,s=r("17x9"),c=r.n(s),l=r("8+s/"),u=r.n(l),d=r("bmMU"),f=r.n(d),p=r("q1tI"),m=r.n(p),h=r("YVoz"),g=r.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),S="cssText",x="href",T="http-equiv",O="innerHTML",C="itemprop",k="name",j="property",I="rel",L="src",A="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",R="defer",z="encodeSpecialCharacters",_="onChangeClientState",M="titleTemplate",H=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=$(e,w.TITLE),r=$(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,P);return t||n||void 0},K=function(e){return $(e,_)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===I&&"canonical"===e[r].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==O&&s!==S&&s!==C||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=g()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;ce(w.BODY,n),ce(w.HTML,a),se(d,f);var p={baseTag:le(w.BASE,r),linkTags:le(w.LINK,i),metaTags:le(w.META,o),noscriptTags:le(w.NOSCRIPT,s),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(w.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===S)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=de(r,n),[m.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===O||r===S){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===S)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(w.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,a,n),link:fe(w.LINK,i,n),meta:fe(w.META,o,n),noscript:fe(w.NOSCRIPT,s,n),script:fe(w.SCRIPT,c,n),style:fe(w.STYLE,l,n),title:fe(w.TITLE,{title:d,titleAttributes:f},n)}},me=u()((function(e){return{baseTag:J([x,A],e),bodyAttributes:X(y,e),defer:$(e,R),encode:$(e,z),htmlAttributes:X(b,e),linkTags:Q(w.LINK,[I,x],e),metaTags:Q(w.META,[k,E,T,j,C],e),noscriptTags:Q(w.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:Q(w.SCRIPT,[L,O],e),styleTags:Q(w.STYLE,[S],e),title:G(e),titleAttributes:X(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=me,o=i=function(e){function t(){return D(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case w.TITLE:return F({},a,((t={})[n.type]=o,t.titleAttributes=F({},i),t));case w.BODY:return F({},a,{bodyAttributes:F({},i)});case w.HTML:return F({},a,{htmlAttributes:F({},i)})}return F({},a,((r={})[n.type]=F({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(W(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=commons-06d9dec0d08fe4e721be.js.map