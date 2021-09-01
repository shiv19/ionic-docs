(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[55860],{71464:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return g},toc:function(){return p},default:function(){return s}});var a=n(22122),o=n(19756),l=(n(67294),n(3905)),i=n(41395),r=n(58215),d={title:"ion-toggle",demoUrl:"/docs/demos/api/toggle/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toggle/index.html"},g={unversionedId:"api/toggle",id:"api/toggle",isDocsHomePage:!1,title:"ion-toggle",description:"Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. They can also be checked programmatically by setting the checked property.",source:"@site/docs/api/toggle.md",sourceDirName:"api",slug:"/api/toggle",permalink:"/docs/api/toggle",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/toggle.md",version:"current",frontMatter:{title:"ion-toggle",demoUrl:"/docs/demos/api/toggle/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toggle/index.html"},sidebar:"api",previous:{title:"ion-toast",permalink:"/docs/api/toast"},next:{title:"ion-toolbar",permalink:"/docs/api/toolbar"}},p=[{value:"Customization",id:"customization",children:[{value:"Customizing Background",id:"customizing-background",children:[]},{value:"Customizing Width",id:"customizing-width",children:[]},{value:"Customizing Height",id:"customizing-height",children:[]},{value:"Customizing Spacing",id:"customizing-spacing",children:[]},{value:"Customizing Border Radius",id:"customizing-border-radius",children:[]},{value:"Customizing Box Shadow",id:"customizing-box-shadow",children:[]},{value:"Customizing Overflow",id:"customizing-overflow",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"checked",id:"checked",children:[]},{value:"color",id:"color",children:[]},{value:"disabled",id:"disabled",children:[]},{value:"mode",id:"mode",children:[]},{value:"name",id:"name",children:[]},{value:"value",id:"value",children:[]}]},{value:"Events",id:"events",children:[]},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[]},{value:"CSS Custom Properties",id:"css-custom-properties",children:[]}],m={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. They can also be checked programmatically by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"checked")," property."),(0,l.kt)("h2",{id:"customization"},"Customization"),(0,l.kt)("h3",{id:"customizing-background"},"Customizing Background"),(0,l.kt)("p",null,"The background of the toggle track and handle can be customized using CSS variables. There are also variables for setting the background differently when the toggle is checked."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  --background: #000;\n  --background-checked: #7a49a5;\n\n  --handle-background: #7a49a5;\n  --handle-background-checked: #000;\n}\n")),(0,l.kt)("p",null,"Because these variables set the ",(0,l.kt)("inlineCode",{parentName:"p"},"background")," property, which is a shorthand, it can accept any value that the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/background"},"background property")," accepts."),(0,l.kt)("p",null,"A more complex case may involve adding an image to the handle background."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  --handle-background-checked: #fff url(/assets/power-icon.png) no-repeat center / contain;\n}\n")),(0,l.kt)("p",null,"Taking it a step further, we could use the ",(0,l.kt)("inlineCode",{parentName:"p"},"::before")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"::after")," pseudo-elements to position text on top of the background."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},'ion-toggle::before {\n  position: absolute;\n\n  top: 16px;\n  left: 10px;\n\n  content: "ON";\n\n  color: white;\n  font-size: 8px;\n\n  z-index: 1;\n}\n')),(0,l.kt)("h3",{id:"customizing-width"},"Customizing Width"),(0,l.kt)("p",null,"Adjusting the width of the toggle ",(0,l.kt)("strong",{parentName:"p"},"smaller")," will result in a narrower track, with the handle remaining the default width. If desired, set ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-width")," to make the handle narrower."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  width: 40px;\n}\n")),(0,l.kt)("p",null,"Adjusting the width of the toggle ",(0,l.kt)("strong",{parentName:"p"},"larger")," will result in a wider track, with the handle remaining the default width. If desired, set ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-width")," to make the handle wider."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  width: 100px;\n}\n")),(0,l.kt)("h3",{id:"customizing-height"},"Customizing Height"),(0,l.kt)("p",null,"Adjusting the height of the toggle ",(0,l.kt)("strong",{parentName:"p"},"smaller")," than the default will result in the handle height auto-sizing itself to the track. In ",(0,l.kt)("inlineCode",{parentName:"p"},"ios")," the handle is shorter than the track (",(0,l.kt)("inlineCode",{parentName:"p"},"100% - 4px"),") and in ",(0,l.kt)("inlineCode",{parentName:"p"},"md")," the handle is taller than the track (",(0,l.kt)("inlineCode",{parentName:"p"},"100% + 6px"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  height: 15px;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: this does not affect the handle width, width should be set using ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-width"),".")),(0,l.kt)("p",null,"Adjusting the height of the toggle ",(0,l.kt)("strong",{parentName:"p"},"larger")," will keep the handle in the center at the default height. This can be modified by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-height")," which can be set to any amount but will not exceed the ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-max-height"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  height: 60px;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: this does not affect the handle width, width should be set using ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-width"),".")),(0,l.kt)("h3",{id:"customizing-spacing"},"Customizing Spacing"),(0,l.kt)("p",null,"The spacing refers to the horizontal gap between the handle and the track. By default, the handle has ",(0,l.kt)("inlineCode",{parentName:"p"},"2px")," of spacing around it in ",(0,l.kt)("inlineCode",{parentName:"p"},"ios")," ",(0,l.kt)("strong",{parentName:"p"},"only"),". In ",(0,l.kt)("inlineCode",{parentName:"p"},"md")," mode there is no default spacing."),(0,l.kt)("p",null,"To remove the ",(0,l.kt)("strong",{parentName:"p"},"horizontal")," spacing, set ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-spacing")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"0px"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  --handle-spacing: 0px;\n}\n")),(0,l.kt)("p",null,"Due to the handle having a fixed height, to remove the spacing on the top and bottom, set the height to 100%."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  --handle-spacing: 0px;\n  --handle-height: 100%;\n}\n")),(0,l.kt)("h3",{id:"customizing-border-radius"},"Customizing Border Radius"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-border-radius")," can be used to change the ",(0,l.kt)("inlineCode",{parentName:"p"},"border-radius")," on the handle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  --handle-border-radius: 14px 4px 4px 14px;\n}\n")),(0,l.kt)("p",null,"To target the ",(0,l.kt)("inlineCode",{parentName:"p"},"border-radius")," only when the toggle is checked, target ",(0,l.kt)("inlineCode",{parentName:"p"},".toggle-checked"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle.toggle-checked {\n  --handle-border-radius: 4px 14px 14px 4px;\n}\n")),(0,l.kt)("h3",{id:"customizing-box-shadow"},"Customizing Box Shadow"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--handle-box-shadow")," can be used to change the ",(0,l.kt)("inlineCode",{parentName:"p"},"box-shadow")," on the handle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  --handle-box-shadow: 4px 0 2px 0 red;\n}\n")),(0,l.kt)("p",null,"To target the box shadow only when the toggle is checked, target ",(0,l.kt)("inlineCode",{parentName:"p"},".toggle-checked"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle.toggle-checked {\n  --handle-box-shadow: -4px 0 2px 0 red;\n}\n")),(0,l.kt)("p",null,"See the section on ",(0,l.kt)("a",{parentName:"p",href:"#customizing-overflow"},"customizing overflow")," to allow the ",(0,l.kt)("inlineCode",{parentName:"p"},"box-shadow")," to overflow the toggle container."),(0,l.kt)("h3",{id:"customizing-overflow"},"Customizing Overflow"),(0,l.kt)("p",null,"Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"overflow")," on the toggle will be inherited by the toggle handle. By default, overflow is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"hidden")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"ios")," only. The ",(0,l.kt)("inlineCode",{parentName:"p"},"box-shadow")," will still appear cut off due to the ",(0,l.kt)("inlineCode",{parentName:"p"},"contain")," css property. Set ",(0,l.kt)("inlineCode",{parentName:"p"},"contain")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," in order to overflow the toggle container."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"ion-toggle {\n  --handle-box-shadow: 0 3px 12px rgba(255, 0, 0, 0.6), 0 3px 1px rgba(50, 70, 255, 0.6);\n\n  overflow: visible;\n\n  contain: none;\n}\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.Z,{defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"javascript",label:"JAVASCRIPT"},{value:"react",label:"REACT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Toggle --\x3e\n<ion-toggle></ion-toggle>\n\n\x3c!-- Disabled Toggle --\x3e\n<ion-toggle disabled></ion-toggle>\n\n\x3c!-- Checked Toggle --\x3e\n<ion-toggle checked></ion-toggle>\n\n\x3c!-- Toggle Colors --\x3e\n<ion-toggle color="primary"></ion-toggle>\n<ion-toggle color="secondary"></ion-toggle>\n<ion-toggle color="danger"></ion-toggle>\n<ion-toggle color="light"></ion-toggle>\n<ion-toggle color="dark"></ion-toggle>\n\n\x3c!-- Toggles in a List --\x3e\n<ion-list>\n  <ion-item>\n    <ion-label>Pepperoni</ion-label>\n    <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Sausage</ion-label>\n    <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Mushrooms</ion-label>\n    <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>\n  </ion-item>\n</ion-list>\n'))),(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Toggle --\x3e\n<ion-toggle></ion-toggle>\n\n\x3c!-- Disabled Toggle --\x3e\n<ion-toggle disabled></ion-toggle>\n\n\x3c!-- Checked Toggle --\x3e\n<ion-toggle checked></ion-toggle>\n\n\x3c!-- Toggle Colors --\x3e\n<ion-toggle color="primary"></ion-toggle>\n<ion-toggle color="secondary"></ion-toggle>\n<ion-toggle color="danger"></ion-toggle>\n<ion-toggle color="light"></ion-toggle>\n<ion-toggle color="dark"></ion-toggle>\n\n\x3c!-- Toggles in a List --\x3e\n<ion-list>\n  <ion-item>\n    <ion-label>Pepperoni</ion-label>\n    <ion-toggle slot="end" value="pepperoni" checked></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Sausage</ion-label>\n    <ion-toggle slot="end" value="sausage" disabled></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Mushrooms</ion-label>\n    <ion-toggle slot="end" value="mushrooms"></ion-toggle>\n  </ion-item>\n</ion-list>\n'))),(0,l.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from \'react\';\nimport { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem, IonLabel, IonItemDivider } from \'@ionic/react\';\n\nexport const ToggleExamples: React.FC = () => {\n  const [checked, setChecked] = useState(false);\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>ToggleExamples</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent>\n        <IonList>\n\n          <IonItemDivider>Default Toggle</IonItemDivider>\n          <IonItem>\n            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>\n            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />\n          </IonItem>\n\n          <IonItemDivider>Disabled Toggle</IonItemDivider>\n          <IonItem><IonToggle disabled /></IonItem>\n\n          <IonItemDivider>Checked Toggle</IonItemDivider>\n          <IonItem><IonToggle checked /></IonItem>\n\n          <IonItemDivider>Toggle Colors</IonItemDivider>\n          <IonItem><IonToggle color="primary" /></IonItem>\n          <IonItem><IonToggle color="secondary" /></IonItem>\n          <IonItem><IonToggle color="danger" /></IonItem>\n          <IonItem><IonToggle color="light" /></IonItem>\n          <IonItem><IonToggle color="dark" /></IonItem>\n\n          <IonItemDivider>Toggles in a List</IonItemDivider>\n          <IonItem>\n            <IonLabel>Pepperoni</IonLabel>\n            <IonToggle value="pepperoni" />\n          </IonItem>\n\n          <IonItem>\n            <IonLabel>Sausage</IonLabel>\n            <IonToggle value="sausage" disabled={true} />\n          </IonItem>\n\n          <IonItem>\n            <IonLabel>Mushrooms</IonLabel>\n            <IonToggle value="mushrooms" />\n          </IonItem>\n        </IonList>\n      </IonContent>\n    </IonPage>\n  );\n};\n'))),(0,l.kt)(r.Z,{value:"stencil",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, State, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'toggle-example\',\n  styleUrl: \'toggle-example.css\'\n})\nexport class ToggleExample {\n  @State() pepperoni: boolean = false;\n  @State() sausage: boolean = true;\n  @State() mushrooms: boolean = false;\n\n  render() {\n    return [\n      // Default Toggle\n      <ion-toggle></ion-toggle>,\n\n      // Disabled Toggle\n      <ion-toggle disabled></ion-toggle>,\n\n      // Checked Toggle\n      <ion-toggle checked></ion-toggle>,\n\n      // Toggle Colors\n      <ion-toggle color="primary"></ion-toggle>,\n      <ion-toggle color="secondary"></ion-toggle>,\n      <ion-toggle color="danger"></ion-toggle>,\n      <ion-toggle color="light"></ion-toggle>,\n      <ion-toggle color="dark"></ion-toggle>,\n\n      // Toggles in a List\n      <ion-list>\n        <ion-item>\n          <ion-label>Pepperoni</ion-label>\n          <ion-toggle checked={this.pepperoni} onIonChange={(ev) => this.pepperoni = ev.detail.checked}></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Sausage</ion-label>\n          <ion-toggle checked={this.sausage} onIonChange={(ev) => this.sausage = ev.detail.checked} disabled={true}></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Mushrooms</ion-label>\n          <ion-toggle checked={this.mushrooms} onIonChange={(ev) => this.mushrooms = ev.detail.checked}></ion-toggle>\n        </ion-item>\n      </ion-list>,\n\n      <div>\n        Pepperoni: {this.pepperoni ? "true" : "false"}<br/>\n        Sausage: {this.sausage ? "true" : "false"}<br/>\n        Mushrooms: {this.mushrooms ? "true" : "false"}\n      </div>\n    ];\n  }\n}\n'))),(0,l.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default Toggle --\x3e\n  <ion-toggle></ion-toggle>\n\n  \x3c!-- Disabled Toggle --\x3e\n  <ion-toggle disabled></ion-toggle>\n\n  \x3c!-- Checked Toggle --\x3e\n  <ion-toggle checked></ion-toggle>\n\n  \x3c!-- Toggle Colors --\x3e\n  <ion-toggle color="primary"></ion-toggle>\n  <ion-toggle color="secondary"></ion-toggle>\n  <ion-toggle color="danger"></ion-toggle>\n  <ion-toggle color="light"></ion-toggle>\n  <ion-toggle color="dark"></ion-toggle>\n\n  \x3c!-- Toggles in a List --\x3e\n  <ion-list>\n    <ion-item>\n      <ion-label>Pepperoni</ion-label>\n      <ion-toggle\n        @ionChange="toppings.value.push($event.target.value)"\n        value="pepperoni"\n        :checked="toppings.value.indexOf(\'pepperoni\') !== -1">\n      </ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sausage</ion-label>\n      <ion-toggle\n        @ionChange="toppings.value.push($event.target.value)"\n        value="sausage"\n        :checked="toppings.value.indexOf(\'pepperoni\') !== -1"\n        disabled="true">\n      </ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Mushrooms</ion-label>\n      <ion-toggle\n        @ionChange="toppings.value.push($event.target.value)"\n        value="mushrooms"\n        :checked="toppings.value.indexOf(\'pepperoni\') !== -1">\n      </ion-toggle>\n    </ion-item>\n  </ion-list>\n</template>\n\n<script>\nimport { IonLabel, IonList, IonItem, IonToggle } from \'@ionic/vue\';\nimport { defineComponent, vue } from \'vue\';\n\nexport default defineComponent({\n  components: { IonLabel, IonList, IonItem, IonToggle },\n  setup() {\n    const toppings = ref([]);\n    \n    return { toppings };\n  }\n});\n<\/script>\n')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"checked"},"checked"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the toggle is selected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"checked"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"color"},"color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,l.kt)("br",null),"Default options are: ",(0,l.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,l.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,l.kt)("br",null),"For more information on colors, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the toggle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h3",{id:"mode"},"mode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The mode determines which platform styles to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"ios" \\| "md"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the control, which is submitted with the form data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"this.inputId"))))),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The value of the toggle does not mean if it's checked or not, use the ",(0,l.kt)("inlineCode",{parentName:"td"},"checked"),(0,l.kt)("br",null),"property for that.",(0,l.kt)("br",null),(0,l.kt)("br",null),"The value of a toggle is analogous to the value of a ",(0,l.kt)("inlineCode",{parentName:"td"},'<input type="checkbox">'),",",(0,l.kt)("br",null),"it's only used when the toggle participates in a native ",(0,l.kt)("inlineCode",{parentName:"td"},"<form>"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Attribute")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null \\| string \\| undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'on'"))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionBlur")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the toggle loses focus.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionChange")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the value property has changed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ionFocus")),(0,l.kt)("td",{parentName:"tr",align:null},"Emitted when the toggle has focus.")))),(0,l.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"handle")),(0,l.kt)("td",{parentName:"tr",align:null},"The toggle handle, or knob, used to change the checked state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"track")),(0,l.kt)("td",{parentName:"tr",align:null},"The background track of the toggle.")))),(0,l.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the toggle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--background-checked")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the toggle when checked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Border radius of the toggle track")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-background")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the toggle handle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-background-checked")),(0,l.kt)("td",{parentName:"tr",align:null},"Background of the toggle handle when checked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-border-radius")),(0,l.kt)("td",{parentName:"tr",align:null},"Border radius of the toggle handle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-box-shadow")),(0,l.kt)("td",{parentName:"tr",align:null},"Box shadow of the toggle handle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-height")),(0,l.kt)("td",{parentName:"tr",align:null},"Height of the toggle handle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-max-height")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum height of the toggle handle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-spacing")),(0,l.kt)("td",{parentName:"tr",align:null},"Horizontal spacing around the toggle handle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-transition")),(0,l.kt)("td",{parentName:"tr",align:null},"Transition of the toggle handle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handle-width")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of the toggle handle")))))}s.isMDXComponent=!0}}]);