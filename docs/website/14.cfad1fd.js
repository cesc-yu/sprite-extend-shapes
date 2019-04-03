(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{173:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(20),e=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Wave")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"const {Scene, Layer, Wave} = spritejs;\n\nconst scene = new Scene('.block-demo .demo', {\n  viewport: [400, 300],\n  displayRatio: 'auto'\n});\nconst layer = scene.layer();\n\nconst wave = new Wave();\nwave.attr({\n  pos: [10, 10],\n  lineWidth: 5,\n  color: '#158bca',\n  fillColor: '#158bca',\n  bgcolor: '#eee',\n\n  percent: 0.6,\n  amplitude: 20,\n  shape:\n    'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',\n  shapeScale: 4,\n  shapeColor: 'red',\n  shapeFillColor: 'transparent',\n  wavesColor: 'red',\n\n  speed: 0\n});\n\nlayer.append(wave);\n\nlet speed = 0;\nconst step = () => {\n  speed += 0.1;\n  wave.attr('speed', speed);\n  requestAnimationFrame(step);\n};\nstep();\n\nconst wave2 = new Wave();\nwave2.attr({\n  pos: [200, 15],\n  radius: 50,\n  offset: 10,\n  lineWidth: 5,\n  bgcolor: '#eee',\n\n  wavesColor: '#158bca',\n  outlineColor: '#158bca',\n  percent: 0.6,\n  amplitude: 20,\n  speed: 0\n});\n\nlayer.append(wave2);\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Scene, Layer, Wave} = spritejs;\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Scene("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'.block-demo .demo'")]),s._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("viewport")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("displayRatio")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'auto'")]),s._v("\n});\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" layer = scene.layer();\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" wave = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Wave();\nwave.attr({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#158bca'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#158bca'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#eee'")]),s._v(",\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("amplitude")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shape")]),s._v(":\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shapeScale")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shapeColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shapeFillColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'transparent'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wavesColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(",\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("speed")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n});\n\nlayer.append(wave);\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" speed = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" step = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n  speed += "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v(";\n  wave.attr("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'speed'")]),s._v(", speed);\n  requestAnimationFrame(step);\n};\nstep();\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" wave2 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Wave();\nwave2.attr({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pos")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v("],\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bgcolor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#eee'")]),s._v(",\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wavesColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#158bca'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#158bca'")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("percent")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.6")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("amplitude")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("speed")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n});\n\nlayer.append(wave2);\n")])])])],1)},[],!1,null,null,null);a.default=e.exports}}]);