(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{144:function(t,e,n){},182:function(t,e,n){"use strict";var a=n(144);n.n(a).a},211:function(t,e,n){"use strict";n.r(e);var a={name:"EventSingle",props:{event:{type:Object,required:!1}}},s=(n(182),n(9)),_=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event"},[n("div",{staticClass:"event__timing"},[n("div",{staticClass:"event__timing__date"},[t._v("\n      "+t._s(t.event.frontmatter.date)+"\n    ")]),t._v(" "),n("div",{staticClass:"event__timing__time"},[t._v("\n      "+t._s(t.event.frontmatter.start)+" – "+t._s(t.event.frontmatter.end)+"\n    ")])]),t._v(" "),n("ImageHelper",{attrs:{image:t.event.frontmatter.image,imageAltText:t.event.frontmatter.imageAltText}}),t._v(" "),n("div",{staticClass:"event__details"},[n("div",{staticClass:"event__details__name"},[t._v("\n      "+t._s(t.event.frontmatter.name)+"\n    ")]),t._v(" "),t.event.frontmatter.location?n("div",{staticClass:"event__details__location"},[t._v("\n      at "),t.event.frontmatter.location.url?n("a",{staticClass:"event__details__location__name",attrs:{href:t.event.frontmatter.location.url}},[t._v(t._s(t.event.frontmatter.location.name))]):t._e(),t._v(" "),n("div",{staticClass:"event__details__location__address"},[t._v("\n        "+t._s(t.event.frontmatter.location.addressOne)+" "),n("br"),t._v("\n        "+t._s(t.event.frontmatter.location.addressTwo)+"\n      ")])]):t._e(),t._v(" "),n("div",{staticClass:"event__details__description"},[t._v("\n      "+t._s(t.event.frontmatter.description)+"\n    ")]),t._v(" "),t.event.frontmatter.livestream?n("div",{staticClass:"event__details__livestream"},[t._v("\n      Watch the\n      "),n("a",{attrs:{href:t.event.frontmatter.rsvp}},[t._v("livestream")]),t._v("!\n    ")]):t._e(),t._v(" "),t.event.frontmatter.rsvp?n("div",[n("a",{staticClass:"button",attrs:{href:t.event.frontmatter.rsvp}},[t._v("RSVP")])]):t._e()])],1)}),[],!1,null,null,null);e.default=_.exports}}]);