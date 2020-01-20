(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{299:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}}),t._v(" Getting started")]),t._v(" "),a("p",[t._v('Welcome to the quick and simple way to try out the Cosmos SDK. In this tutorial\nwill be building Hellochain, a "Hello World" blockchain with a basic '),a("code",[t._v("greeter")]),t._v("\nmodule.")]),t._v(" "),a("p",[t._v('For this tutorial we are going to first build a "blank" application capable of\nonly bank-like interactions and then add some arbitrary "hello world"\nfunctionality in the form of our '),a("code",[t._v("greeter")]),t._v(" module. Nothing needs to be downloaded\nor cloned, we will create every file from scratch.")]),t._v(" "),a("h3",{attrs:{id:"starter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starter"}}),t._v(" Starter")]),t._v(" "),a("p",[t._v("To speed up this tutorial, A lot of basic functionality comes packaged for you\nin the "),a("a",{attrs:{href:"https://github.com/cosmos/sdk-tutorials/tree/master/hellochain/starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("starter"),a("OutboundLink")],1),t._v("\npackage. It will provide basic accounts, a bank, authentication, transaction\n(Tx) verification as well as some helper functions for building CLI tools.\n"),a("code",[t._v("starter")]),t._v(' is your "crutch" for this tutorial. It is a heavily configured\nabstraction for the point of skipping boilerplate and getting something up and\nrunning quickly. Later, when you start the nameservice tutorial, you will kick\nout this "crutch", but for now let\'s include it.')]),t._v(" "),a("p",[t._v("In this tutorial we will create an app with the following file structure.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./hellochain\n├── go.mod\n├── Makefile\n├── app.go\n├── cmd\n│   ├── hccli\n│   │   └── main.go\n│   └── hcd\n│       └── main.go\n└── x\n    └── greeter\n        ├── client\n        │   ├── cli\n        │   │   ├── query.go\n        │   │   └── tx.go\n        ├── internal\n            ├── types\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├── msgs.go\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └── types.go\n            ├─ keeper\n              └── querier.go\n              ├── keeper.go\n        ├── alias.go\n        ├── module.go\n        ├── handler.go\n\n")])])]),a("p",[t._v("Start by creating a new git repository:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GOPATH")]),t._v("/src/github.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/hellochain\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GOPATH")]),t._v("/src/github.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/hellochain\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),a("p",[t._v("Then initialize your app as a go module:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./hellochain\ngo mod init\n")])])]),a("p",[t._v("Ok now you are ready to write some code.")]),t._v(" "),a("p",[t._v("Want to run this tutorial locally? Install\n"),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),a("OutboundLink")],1),t._v(" and run "),a("code",[t._v("vuepress dev")]),t._v(" to follow along\nat http://localhost:8080")])])}),[],!1,null,null,null);e.default=s.exports}}]);