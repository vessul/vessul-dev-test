import{n as p,o,q as u,r as m,t as l,T as f,f as a,l as n,D as g,u as b,e as k}from"./app-wgEr0Tl5.js";import{H as P}from"./vidstack-html-WbTkgc9p.js";import"./vidstack-pOvoD1T--yZVZfS9P.js";class y{constructor(t,e){this.m=t,this.b=e,t.textTracks.onaddtrack=this.Wc.bind(this),l(this.cd.bind(this))}Wc(t){const e=t.track;if(!e||I(this.m,e))return;const i=new f({id:e.id,kind:e.kind,label:e.label,language:e.language,type:"vtt"});i[a.T]={track:e},i[a.M]=2,i[a.te]=!0;let r=0;const h=d=>{if(e.cues)for(let c=r;c<e.cues.length;c++)i.addCue(e.cues[c],d),r++};h(t),e.oncuechange=h,this.b.textTracks.add(i,t),i.setMode(e.mode,t)}cd(){var t;this.m.textTracks.onaddtrack=null;for(const e of this.b.textTracks){const i=(t=e[a.T])==null?void 0:t.track;i!=null&&i.oncuechange&&(i.oncuechange=null)}}}function I(s,t){return Array.from(s.children).find(e=>e.track===t)}class T{constructor(t,e){this.m=t,this.a=e,this.B=(i,r)=>{this.a.delegate.c("picture-in-picture-change",i,r)},n(this.m,"enterpictureinpicture",this.Jg.bind(this)),n(this.m,"leavepictureinpicture",this.Kg.bind(this))}get active(){return document.pictureInPictureElement===this.m}get supported(){return u(this.m)}async enter(){return this.m.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}Jg(t){this.B(!0,t)}Kg(t){this.B(!1,t)}}class w{constructor(t,e){this.m=t,this.a=e,this.I="inline",n(this.m,"webkitpresentationmodechanged",this.Ua.bind(this))}get Se(){return o(this.m)}async kc(t){this.I!==t&&this.m.webkitSetPresentationMode(t)}Ua(t){var i;const e=this.I;this.I=this.m.webkitPresentationMode,(i=this.a.player)==null||i.dispatch(new g("video-presentation-change",{detail:this.I,trigger:t})),["fullscreen","picture-in-picture"].forEach(r=>{(this.I===r||e===r)&&this.a.delegate.c(`${r}-change`,this.I===r,t)})}}class v{constructor(t){this.fa=t}get active(){return this.fa.I==="fullscreen"}get supported(){return this.fa.Se}async enter(){this.fa.kc("fullscreen")}async exit(){this.fa.kc("inline")}}class x{constructor(t){this.fa=t}get active(){return this.fa.I==="picture-in-picture"}get supported(){return this.fa.Se}async enter(){this.fa.kc("picture-in-picture")}async exit(){this.fa.kc("inline")}}class S{constructor(t,e){this.m=t,this.b=e,this.Se=b(!1),this.Hm()}get supported(){return this.Se()}Hm(){!this.m.remote||!this.sl||(this.m.remote.watchAvailability(t=>{this.Se.set(t)}).catch(()=>{this.Se.set(!1)}),k(this.rn.bind(this)))}rn(){if(!this.Se())return;const t=["connecting","connect","disconnect"],e=this.Rg.bind(this);e(),n(this.m,"playing",e);for(const i of t)n(this.m.remote,i,e)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return this.vb==="airplay"&&this.m.webkitShowPlaybackTargetPicker?this.m.webkitShowPlaybackTargetPicker():this.m.remote.prompt()}Rg(t){const e=this.m.remote.state;if(e===this.mc)return;const i={type:this.vb,state:e};this.b.delegate.c("remote-playback-change",i,t),this.mc=e}}class E extends S{constructor(){super(...arguments),this.vb="airplay"}get sl(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}class R extends P{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="VIDEO",p(()=>{if(this.airPlay=new E(t,e),o(t)){const i=new w(t,e);this.fullscreen=new v(i),this.pictureInPicture=new x(i)}else u(t)&&(this.pictureInPicture=new T(t,e))},this.scope)}get type(){return"video"}setup(){super.setup(),m(this.video)&&new y(this.video,this.b),this.b.textRenderers.Fe(this.video),l(()=>{this.b.textRenderers.Fe(null)}),this.type==="video"&&this.b.delegate.c("provider-setup",this)}get video(){return this.a}}export{R as VideoProvider};
