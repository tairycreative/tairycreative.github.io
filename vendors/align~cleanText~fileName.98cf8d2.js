(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{164:function(r,n,t){"use strict";var e=t(173),o=t(176),l=[].slice,h=["keyword","gray","hex"],c={};Object.keys(o).forEach((function(r){c[l.call(o[r].labels).sort().join("")]=r}));var f={};function v(r,n){if(!(this instanceof v))return new v(r,n);if(n&&n in h&&(n=null),n&&!(n in o))throw new Error("Unknown model: "+n);var i,t;if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof v)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var d=e.get(r);if(null===d)throw new Error("Unable to parse color from string: "+r);this.model=d.model,t=o[this.model].channels,this.color=d.value.slice(0,t),this.valpha="number"==typeof d.value[t]?d.value[t]:1}else if(r.length){this.model=n||"rgb",t=o[this.model].channels;var m=l.call(r,0,t);this.color=w(m,t),this.valpha="number"==typeof r[t]?r[t]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var y=Object.keys(r);"alpha"in r&&(y.splice(y.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var M=y.sort().join("");if(!(M in c))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=c[M];var k=o[this.model].labels,x=[];for(i=0;i<k.length;i++)x.push(r[k[i]]);this.color=w(x)}if(f[this.model])for(t=o[this.model].channels,i=0;i<t;i++){var O=f[this.model][i];O&&(this.color[i]=O(this.color[i]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function d(r,n,t){return(r=Array.isArray(r)?r:[r]).forEach((function(r){(f[r]||(f[r]=[]))[n]=t})),r=r[0],function(e){var o;return arguments.length?(t&&(e=t(e)),(o=this[r]()).color[n]=e,o):(o=this[r]().color[n],t&&(o=t(o)),o)}}function m(r){return function(n){return Math.max(0,Math.min(r,n))}}function y(r){return Array.isArray(r)?r:[r]}function w(r,n){for(var i=0;i<n;i++)"number"!=typeof r[i]&&(r[i]=0);return r}v.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var n=this.model in e.to?this:this.rgb(),t=1===(n=n.round("number"==typeof r?r:1)).valpha?n.color:n.color.concat(this.valpha);return e.to[n.model](t)},percentString:function(r){var n=this.rgb().round("number"==typeof r?r:1),t=1===n.valpha?n.color:n.color.concat(this.valpha);return e.to.rgb.percent(t)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},n=o[this.model].channels,t=o[this.model].labels,i=0;i<n;i++)r[t[i]]=this.color[i];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new v(this.color.map(function(r){return function(n){return function(r,n){return Number(r.toFixed(n))}(n,r)}}(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new v(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:d("rgb",0,m(255)),green:d("rgb",1,m(255)),blue:d("rgb",2,m(255)),hue:d(["hsl","hsv","hsl","hwb","hcg"],0,(function(r){return(r%360+360)%360})),saturationl:d("hsl",1,m(100)),lightness:d("hsl",2,m(100)),saturationv:d("hsv",1,m(100)),value:d("hsv",2,m(100)),chroma:d("hcg",1,m(100)),gray:d("hcg",2,m(100)),white:d("hwb",1,m(100)),wblack:d("hwb",2,m(100)),cyan:d("cmyk",0,m(100)),magenta:d("cmyk",1,m(100)),yellow:d("cmyk",2,m(100)),black:d("cmyk",3,m(100)),x:d("xyz",0,m(100)),y:d("xyz",1,m(100)),z:d("xyz",2,m(100)),l:d("lab",0,m(100)),a:d("lab",1),b:d("lab",2),keyword:function(r){return arguments.length?new v(r):o[this.model].keyword(this.color)},hex:function(r){return arguments.length?new v(r):e.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,n=[],i=0;i<r.length;i++){var t=r[i]/255;n[i]=t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return.2126*n[0]+.7152*n[1]+.0722*n[2]},contrast:function(r){var n=this.luminosity(),t=r.luminosity();return n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)},level:function(r){var n=this.contrast(r);return n>=7.1?"AAA":n>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),i=0;i<3;i++)r.color[i]=255-r.color[i];return r},lighten:function(r){var n=this.hsl();return n.color[2]+=n.color[2]*r,n},darken:function(r){var n=this.hsl();return n.color[2]-=n.color[2]*r,n},saturate:function(r){var n=this.hsl();return n.color[1]+=n.color[1]*r,n},desaturate:function(r){var n=this.hsl();return n.color[1]-=n.color[1]*r,n},whiten:function(r){var n=this.hwb();return n.color[1]+=n.color[1]*r,n},blacken:function(r){var n=this.hwb();return n.color[2]+=n.color[2]*r,n},grayscale:function(){var r=this.rgb().color,n=.3*r[0]+.59*r[1]+.11*r[2];return v.rgb(n,n,n)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var n=this.hsl(),t=n.color[0];return t=(t=(t+r)%360)<0?360+t:t,n.color[0]=t,n},mix:function(r,n){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var t=r.rgb(),e=this.rgb(),p=void 0===n?.5:n,o=2*p-1,a=t.alpha()-e.alpha(),l=((o*a==-1?o:(o+a)/(1+o*a))+1)/2,h=1-l;return v.rgb(l*t.red()+h*e.red(),l*t.green()+h*e.green(),l*t.blue()+h*e.blue(),t.alpha()*p+e.alpha()*(1-p))}},Object.keys(o).forEach((function(r){if(-1===h.indexOf(r)){var n=o[r].channels;v.prototype[r]=function(){if(this.model===r)return new v(this);if(arguments.length)return new v(arguments,r);var t="number"==typeof arguments[n]?n:this.valpha;return new v(y(o[this.model][r].raw(this.color)).concat(t),r)},v[r]=function(t){return"number"==typeof t&&(t=w(l.call(arguments),n)),new v(t,r)}}})),r.exports=v},171:function(r,n,t){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},172:function(r,n,t){var e=t(171),o={};for(var l in e)e.hasOwnProperty(l)&&(o[e[l]]=l);var h=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var c in h)if(h.hasOwnProperty(c)){if(!("channels"in h[c]))throw new Error("missing channels property: "+c);if(!("labels"in h[c]))throw new Error("missing channel labels property: "+c);if(h[c].labels.length!==h[c].channels)throw new Error("channel and label counts mismatch: "+c);var f=h[c].channels,v=h[c].labels;delete h[c].channels,delete h[c].labels,Object.defineProperty(h[c],"channels",{value:f}),Object.defineProperty(h[c],"labels",{value:v})}h.rgb.hsl=function(r){var n,t,e=r[0]/255,g=r[1]/255,b=r[2]/255,o=Math.min(e,g,b),l=Math.max(e,g,b),h=l-o;return l===o?n=0:e===l?n=(g-b)/h:g===l?n=2+(b-e)/h:b===l&&(n=4+(e-g)/h),(n=Math.min(60*n,360))<0&&(n+=360),t=(o+l)/2,[n,100*(l===o?0:t<=.5?h/(l+o):h/(2-l-o)),100*t]},h.rgb.hsv=function(r){var n,t,e,o,s,l=r[0]/255,g=r[1]/255,b=r[2]/255,h=Math.max(l,g,b),c=h-Math.min(l,g,b),f=function(r){return(h-r)/6/c+.5};return 0===c?o=s=0:(s=c/h,n=f(l),t=f(g),e=f(b),l===h?o=e-t:g===h?o=1/3+n-e:b===h&&(o=2/3+t-n),o<0?o+=1:o>1&&(o-=1)),[360*o,100*s,100*h]},h.rgb.hwb=function(r){var n=r[0],g=r[1],b=r[2];return[h.rgb.hsl(r)[0],100*(1/255*Math.min(n,Math.min(g,b))),100*(b=1-1/255*Math.max(n,Math.max(g,b)))]},h.rgb.cmyk=function(r){var n,t=r[0]/255,g=r[1]/255,b=r[2]/255;return[100*((1-t-(n=Math.min(1-t,1-g,1-b)))/(1-n)||0),100*((1-g-n)/(1-n)||0),100*((1-b-n)/(1-n)||0),100*n]},h.rgb.keyword=function(r){var n=o[r];if(n)return n;var t,l,h,c=1/0;for(var f in e)if(e.hasOwnProperty(f)){var v=e[f],d=(l=r,h=v,Math.pow(l[0]-h[0],2)+Math.pow(l[1]-h[1],2)+Math.pow(l[2]-h[2],2));d<c&&(c=d,t=f)}return t},h.keyword.rgb=function(r){return e[r]},h.rgb.xyz=function(r){var n=r[0]/255,g=r[1]/255,b=r[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(g=g>.04045?Math.pow((g+.055)/1.055,2.4):g/12.92)+.1805*(b=b>.04045?Math.pow((b+.055)/1.055,2.4):b/12.92)),100*(.2126*n+.7152*g+.0722*b),100*(.0193*n+.1192*g+.9505*b)]},h.rgb.lab=function(r){var n=h.rgb.xyz(r),t=n[0],e=n[1],o=n[2];return e/=100,o/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(t-e),200*(e-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},h.hsl.rgb=function(r){var n,t,e,o,l,h=r[0]/360,s=r[1]/100,c=r[2]/100;if(0===s)return[l=255*c,l,l];n=2*c-(t=c<.5?c*(1+s):c+s-c*s),o=[0,0,0];for(var i=0;i<3;i++)(e=h+1/3*-(i-1))<0&&e++,e>1&&e--,l=6*e<1?n+6*(t-n)*e:2*e<1?t:3*e<2?n+(t-n)*(2/3-e)*6:n,o[i]=255*l;return o},h.hsl.hsv=function(r){var n=r[0],s=r[1]/100,t=r[2]/100,e=s,o=Math.max(t,.01);return s*=(t*=2)<=1?t:2-t,e*=o<=1?o:2-o,[n,100*(0===t?2*e/(o+e):2*s/(t+s)),100*((t+s)/2)]},h.hsv.rgb=function(r){var n=r[0]/60,s=r[1]/100,t=r[2]/100,e=Math.floor(n)%6,o=n-Math.floor(n),p=255*t*(1-s),q=255*t*(1-s*o),l=255*t*(1-s*(1-o));switch(t*=255,e){case 0:return[t,l,p];case 1:return[q,t,p];case 2:return[p,t,l];case 3:return[p,q,t];case 4:return[l,p,t];case 5:return[t,p,q]}},h.hsv.hsl=function(r){var n,t,e,o=r[0],s=r[1]/100,l=r[2]/100,h=Math.max(l,.01);return e=(2-s)*l,t=s*h,[o,100*(t=(t/=(n=(2-s)*h)<=1?n:2-n)||0),100*(e/=2)]},h.hwb.rgb=function(r){var i,n,t,e,o,g,b,l=r[0]/360,h=r[1]/100,c=r[2]/100,f=h+c;switch(f>1&&(h/=f,c/=f),t=6*l-(i=Math.floor(6*l)),0!=(1&i)&&(t=1-t),e=h+t*((n=1-c)-h),i){default:case 6:case 0:o=n,g=e,b=h;break;case 1:o=e,g=n,b=h;break;case 2:o=h,g=n,b=e;break;case 3:o=h,g=e,b=n;break;case 4:o=e,g=h,b=n;break;case 5:o=n,g=h,b=e}return[255*o,255*g,255*b]},h.cmyk.rgb=function(r){var n=r[0]/100,t=r[1]/100,e=r[2]/100,o=r[3]/100;return[255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,e*(1-o)+o))]},h.xyz.rgb=function(r){var n,g,b,t=r[0]/100,e=r[1]/100,o=r[2]/100;return g=-.9689*t+1.8758*e+.0415*o,b=.0557*t+-.204*e+1.057*o,n=(n=3.2406*t+-1.5372*e+-.4986*o)>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,g=g>.0031308?1.055*Math.pow(g,1/2.4)-.055:12.92*g,b=b>.0031308?1.055*Math.pow(b,1/2.4)-.055:12.92*b,[255*(n=Math.min(Math.max(0,n),1)),255*(g=Math.min(Math.max(0,g),1)),255*(b=Math.min(Math.max(0,b),1))]},h.xyz.lab=function(r){var n=r[0],t=r[1],e=r[2];return t/=100,e/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(n-t),200*(t-(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116))]},h.lab.xyz=function(r){var n,t,e,o=r[0];n=r[1]/500+(t=(o+16)/116),e=t-r[2]/200;var l=Math.pow(t,3),h=Math.pow(n,3),c=Math.pow(e,3);return t=l>.008856?l:(t-16/116)/7.787,n=h>.008856?h:(n-16/116)/7.787,e=c>.008856?c:(e-16/116)/7.787,[n*=95.047,t*=100,e*=108.883]},h.lab.lch=function(r){var n,t=r[0],a=r[1],b=r[2];return(n=360*Math.atan2(b,a)/2/Math.PI)<0&&(n+=360),[t,Math.sqrt(a*a+b*b),n]},h.lch.lab=function(r){var hr,n=r[0],t=r[1];return hr=r[2]/360*2*Math.PI,[n,t*Math.cos(hr),t*Math.sin(hr)]},h.rgb.ansi16=function(r){var n=r[0],g=r[1],b=r[2],t=1 in arguments?arguments[1]:h.rgb.hsv(r)[2];if(0===(t=Math.round(t/50)))return 30;var e=30+(Math.round(b/255)<<2|Math.round(g/255)<<1|Math.round(n/255));return 2===t&&(e+=60),e},h.hsv.ansi16=function(r){return h.rgb.ansi16(h.hsv.rgb(r),r[2])},h.rgb.ansi256=function(r){var n=r[0],g=r[1],b=r[2];return n===g&&g===b?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(g/255*5)+Math.round(b/255*5)},h.ansi16.rgb=function(r){var n=r%10;if(0===n||7===n)return r>50&&(n+=3.5),[n=n/10.5*255,n,n];var t=.5*(1+~~(r>50));return[(1&n)*t*255,(n>>1&1)*t*255,(n>>2&1)*t*255]},h.ansi256.rgb=function(r){if(r>=232){var n=10*(r-232)+8;return[n,n,n]}var t;return r-=16,[Math.floor(r/36)/5*255,Math.floor((t=r%36)/6)/5*255,t%6/5*255]},h.rgb.hex=function(r){var n=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},h.hex.rgb=function(r){var n=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var t=n[0];3===n[0].length&&(t=t.split("").map((function(r){return r+r})).join(""));var e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]},h.rgb.hcg=function(r){var n,t=r[0]/255,g=r[1]/255,b=r[2]/255,e=Math.max(Math.max(t,g),b),o=Math.min(Math.min(t,g),b),l=e-o;return n=l<=0?0:e===t?(g-b)/l%6:e===g?2+(b-t)/l:4+(t-g)/l+4,n/=6,[360*(n%=1),100*l,100*(l<1?o/(1-l):0)]},h.hsl.hcg=function(r){var s=r[1]/100,n=r[2]/100,t=1,e=0;return(t=n<.5?2*s*n:2*s*(1-n))<1&&(e=(n-.5*t)/(1-t)),[r[0],100*t,100*e]},h.hsv.hcg=function(r){var s=r[1]/100,n=r[2]/100,t=s*n,e=0;return t<1&&(e=(n-t)/(1-t)),[r[0],100*t,100*e]},h.hcg.rgb=function(r){var n=r[0]/360,t=r[1]/100,g=r[2]/100;if(0===t)return[255*g,255*g,255*g];var e,o=[0,0,0],l=n%1*6,h=l%1,c=1-h;switch(Math.floor(l)){case 0:o[0]=1,o[1]=h,o[2]=0;break;case 1:o[0]=c,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=h;break;case 3:o[0]=0,o[1]=c,o[2]=1;break;case 4:o[0]=h,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=c}return e=(1-t)*g,[255*(t*o[0]+e),255*(t*o[1]+e),255*(t*o[2]+e)]},h.hcg.hsv=function(r){var n=r[1]/100,t=n+r[2]/100*(1-n),e=0;return t>0&&(e=n/t),[r[0],100*e,100*t]},h.hcg.hsl=function(r){var n=r[1]/100,t=r[2]/100*(1-n)+.5*n,s=0;return t>0&&t<.5?s=n/(2*t):t>=.5&&t<1&&(s=n/(2*(1-t))),[r[0],100*s,100*t]},h.hcg.hwb=function(r){var n=r[1]/100,t=n+r[2]/100*(1-n);return[r[0],100*(t-n),100*(1-t)]},h.hwb.hcg=function(r){var n=r[1]/100,t=1-r[2]/100,e=t-n,g=0;return e<1&&(g=(t-e)/(1-e)),[r[0],100*e,100*g]},h.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},h.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},h.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},h.gray.hsl=h.gray.hsv=function(r){return[0,0,r[0]]},h.gray.hwb=function(r){return[0,100,r[0]]},h.gray.cmyk=function(r){return[0,0,0,r[0]]},h.gray.lab=function(r){return[r[0],0,0]},h.gray.hex=function(r){var n=255&Math.round(r[0]/100*255),t=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(t.length)+t},h.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}},173:function(r,n,t){var e=t(171),o=t(174),l={};for(var h in e)e.hasOwnProperty(h)&&(l[e[h]]=h);var c=r.exports={to:{},get:{}};function f(r,n,t){return Math.min(Math.max(n,r),t)}function v(r){var n=r.toString(16).toUpperCase();return n.length<2?"0"+n:n}c.get=function(r){var n,t;switch(r.substring(0,3).toLowerCase()){case"hsl":n=c.get.hsl(r),t="hsl";break;case"hwb":n=c.get.hwb(r),t="hwb";break;default:n=c.get.rgb(r),t="rgb"}return n?{model:t,value:n}:null},c.get.rgb=function(r){if(!r)return null;var n,i,t,o=[0,0,0,1];if(n=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(t=n[2],n=n[1],i=0;i<3;i++){var l=2*i;o[i]=parseInt(n.slice(l,l+2),16)}t&&(o[3]=Math.round(parseInt(t,16)/255*100)/100)}else if(n=r.match(/^#([a-f0-9]{3,4})$/i)){for(t=(n=n[1])[3],i=0;i<3;i++)o[i]=parseInt(n[i]+n[i],16);t&&(o[3]=Math.round(parseInt(t+t,16)/255*100)/100)}else if(n=r.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(i=0;i<3;i++)o[i]=parseInt(n[i+1],0);n[4]&&(o[3]=parseFloat(n[4]))}else{if(!(n=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(n=r.match(/(\D+)/))?"transparent"===n[1]?[0,0,0,0]:(o=e[n[1]])?(o[3]=1,o):null:null;for(i=0;i<3;i++)o[i]=Math.round(2.55*parseFloat(n[i+1]));n[4]&&(o[3]=parseFloat(n[4]))}for(i=0;i<3;i++)o[i]=f(o[i],0,255);return o[3]=f(o[3],0,1),o},c.get.hsl=function(r){if(!r)return null;var n=r.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(n){var t=parseFloat(n[4]);return[(parseFloat(n[1])+360)%360,f(parseFloat(n[2]),0,100),f(parseFloat(n[3]),0,100),f(isNaN(t)?1:t,0,1)]}return null},c.get.hwb=function(r){if(!r)return null;var n=r.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(n){var t=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,f(parseFloat(n[2]),0,100),f(parseFloat(n[3]),0,100),f(isNaN(t)?1:t,0,1)]}return null},c.to.hex=function(){var r=o(arguments);return"#"+v(r[0])+v(r[1])+v(r[2])+(r[3]<1?v(Math.round(255*r[3])):"")},c.to.rgb=function(){var r=o(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},c.to.rgb.percent=function(){var r=o(arguments),n=Math.round(r[0]/255*100),g=Math.round(r[1]/255*100),b=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+n+"%, "+g+"%, "+b+"%)":"rgba("+n+"%, "+g+"%, "+b+"%, "+r[3]+")"},c.to.hsl=function(){var r=o(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},c.to.hwb=function(){var r=o(arguments),a="";return r.length>=4&&1!==r[3]&&(a=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+a+")"},c.to.keyword=function(r){return l[r.slice(0,3)]}},174:function(r,n,t){"use strict";var e=t(175),o=Array.prototype.concat,l=Array.prototype.slice,h=r.exports=function(r){for(var n=[],i=0,t=r.length;i<t;i++){var h=r[i];e(h)?n=o.call(n,l.call(h)):n.push(h)}return n};h.wrap=function(r){return function(){return r(h(arguments))}}},175:function(r,n){r.exports=function(r){return!(!r||"string"==typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},176:function(r,n,t){var e=t(172),o=t(177),l={};Object.keys(e).forEach((function(r){l[r]={},Object.defineProperty(l[r],"channels",{value:e[r].channels}),Object.defineProperty(l[r],"labels",{value:e[r].labels});var n=o(r);Object.keys(n).forEach((function(t){var e=n[t];l[r][t]=function(r){var n=function(n){if(null==n)return n;arguments.length>1&&(n=Array.prototype.slice.call(arguments));var t=r(n);if("object"==typeof t)for(var e=t.length,i=0;i<e;i++)t[i]=Math.round(t[i]);return t};return"conversion"in r&&(n.conversion=r.conversion),n}(e),l[r][t].raw=function(r){var n=function(n){return null==n?n:(arguments.length>1&&(n=Array.prototype.slice.call(arguments)),r(n))};return"conversion"in r&&(n.conversion=r.conversion),n}(e)}))})),r.exports=l},177:function(r,n,t){var e=t(172);function o(r){var n=function(){for(var r={},n=Object.keys(e),t=n.length,i=0;i<t;i++)r[n[i]]={distance:-1,parent:null};return r}(),t=[r];for(n[r].distance=0;t.length;)for(var o=t.pop(),l=Object.keys(e[o]),h=l.length,i=0;i<h;i++){var c=l[i],f=n[c];-1===f.distance&&(f.distance=n[o].distance+1,f.parent=o,t.unshift(c))}return n}function link(r,n){return function(t){return n(r(t))}}function l(r,n){for(var path=[n[r].parent,r],t=e[n[r].parent][r],o=n[r].parent;n[o].parent;)path.unshift(n[o].parent),t=link(e[n[o].parent][o],t),o=n[o].parent;return t.conversion=path,t}r.exports=function(r){for(var n=o(r),t={},e=Object.keys(n),h=e.length,i=0;i<h;i++){var c=e[i];null!==n[c].parent&&(t[c]=l(c,n))}return t}}}]);