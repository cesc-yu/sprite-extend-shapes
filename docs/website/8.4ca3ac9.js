(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{184:function(s,a,n){"use strict";n.r(a);var t={components:{}},r=n(20),e=Object(r.a)(t,function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("section",[n("h2",[s._v("Polyline")]),s._v(" "),n("block-demo",{attrs:{tip:"",source:"const {Scene, Layer, Polyline} = spritejs;\n\nconst scene = new Scene('.block-demo .demo', {\n  viewport: [400, 300],\n  displayRatio: 'auto'\n});\nconst layer = scene.layer();\n\nconst polyline = new Polyline();\npolyline.attr({\n  pos: [10, 10],\n  color: {\n    vector: [0, 0, 150, 150],\n    colors: [{offset: 0, color: 'red'}, {offset: 1, color: 'green'}]\n  },\n  lineWidth: 1,\n  points: [\n    [216.44779756291575, 31.3368559404028],\n    [35.94034007190373, 135.81354964617464],\n    [245.94034007190373, 235.81354964617464]\n  ],\n  tolerance: 7,\n  bgcolor: '#eee',\n  // smooth: true,\n  close: true\n});\npolyline.on('click', () => alert('click'));\npolyline.on('mousemove', () => polyline.attr('smooth', true));\npolyline.on('mouseleave', () => polyline.attr('smooth', false));\n\nlayer.append(polyline);\n"}},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Scene, Layer, Polyline} = spritejs;\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Scene("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'.block-demo .demo'")]),s._v(", {\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("viewport")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("displayRatio")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'auto'")]),s._v("\n});\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" layer = scene.layer();\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" polyline = "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Polyline();\npolyline.attr({\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": {\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vector")]),s._v(": ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("150")]),s._v("],\n    "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("colors")]),s._v(": [{"),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("}, {"),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v("}]\n  },\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("points")]),s._v(": [\n    ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("216.44779756291575")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.3368559404028")]),s._v("],\n    ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.94034007190373")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("135.81354964617464")]),s._v("],\n    ["),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("245.94034007190373")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("235.81354964617464")]),s._v("]\n  ],\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tolerance")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7")]),s._v(",\n  "),n("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#eee'")]),s._v(",\n  \n  close: "),n("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n});\npolyline.on("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", () => alert("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v("));\npolyline.on("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mousemove'")]),s._v(", () => polyline.attr("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'smooth'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("));\npolyline.on("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mouseleave'")]),s._v(", () => polyline.attr("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'smooth'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("));\n\nlayer.append(polyline);\n")])])])],1)},[],!1,null,null,null);a.default=e.exports}}]);