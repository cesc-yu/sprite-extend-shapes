(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(s,n,t){"use strict";t.r(n);var a={components:{}},r=t(20),e=Object(r.a)(a,function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("section",[t("h2",[s._v("Polygon")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const {Scene, Layer, Polygon} = spritejs;\n\nconst scene = new Scene('.block-demo .demo', {\n  viewport: [400, 300],\n  displayRatio: 'auto'\n});\nconst layer = scene.layer();\n\nlet pg = new Polygon();\n\npg.attr({\n  color: 'red',\n  fillColor: 'yellow',\n  lineWidth: 2,\n  points: [[10, 10], [100, 100], [200, 50]],\n  bgcolor: '#ccc'\n});\n\npg.on('mousemove', evt => {\n  pg.attr('color', 'blue');\n  evt.stopDispatch();\n});\n\npg.on('mouseleave', evt => {\n  pg.attr('color', 'red');\n  evt.stopDispatch();\n});\n\nlayer.append(pg);\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Scene, Layer, Polygon} = spritejs;\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Scene("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'.block-demo .demo'")]),s._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("viewport")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("displayRatio")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'auto'")]),s._v("\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" layer = scene.layer();\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" pg = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Polygon();\n\npg.attr({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("points")]),s._v(": [["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("], ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("], ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v("]],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#ccc'")]),s._v("\n});\n\npg.on("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mousemove'")]),s._v(", evt => {\n  pg.attr("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'color'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v(");\n  evt.stopDispatch();\n});\n\npg.on("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mouseleave'")]),s._v(", evt => {\n  pg.attr("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'color'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(");\n  evt.stopDispatch();\n});\n\nlayer.append(pg);\n")])])])],1)},[],!1,null,null,null);n.default=e.exports}}]);