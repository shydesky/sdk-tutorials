(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{356:function(e,t,n){"use strict";n.r(t);var o=n(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}}),e._v(" Getting Started")]),e._v(" "),n("p",[e._v("In this tutorial, you will build a functional "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),n("OutboundLink")],1),e._v(" application and, in the process, learn the basic concepts and structures of the SDK. The example will showcase how quickly and easily you can "),n("strong",[e._v("build your own blockchain from scratch")]),e._v(" on top of the Cosmos SDK.")]),e._v(" "),n("p",[e._v("By the end of this tutorial you will have a functional "),n("code",[e._v("nameservice")]),e._v(" application, a mapping of strings to other strings ("),n("code",[e._v("map[string]string")]),e._v("). This is similar to "),n("a",{attrs:{href:"https://namecoin.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Namecoin"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://ens.domains/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ENS"),n("OutboundLink")],1),e._v(", or "),n("a",{attrs:{href:"https://handshake.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Handshake"),n("OutboundLink")],1),e._v(", which all model the traditional DNS systems ("),n("code",[e._v("map[domain]zonefile")]),e._v("). Users will be able to buy unused names, or sell/trade their name.")]),e._v(" "),n("p",[e._v("All of the final source code for this tutorial project is in this directory (and compiles). However, it is best to follow along manually and try building the project yourself!")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}}),e._v(" Requirements")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("golang")]),e._v(" >1.13.0"),n("OutboundLink")],1),e._v(" installed")]),e._v(" "),n("li",[e._v("Github account and either "),n("a",{attrs:{href:"https://hub.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github CLI"),n("OutboundLink")],1),e._v(" or "),n("a",{attrs:{href:"https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Desktop (64-bit required)"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Desire to create your own blockchain!")]),e._v(" "),n("li",[e._v("The "),n("a",{attrs:{href:"https://github.com/cosmos/scaffold",target:"_blank",rel:"noopener noreferrer"}},[e._v("scaffold tool"),n("OutboundLink")],1),e._v(" will be used to go through this tutorial. Clone the repo and install with "),n("code",[e._v("git clone git@github.com:cosmos/scaffold.git && cd scaffold && make")]),e._v(". Check out the repo for more detailed instructions.")])]),e._v(" "),n("h2",{attrs:{id:"tutorial"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}}),e._v(" Tutorial")]),e._v(" "),n("p",[e._v("Through the course of this tutorial you will create the following files that make up your application:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("./nameservice\n├── Makefile\n├── Makefile.ledger\n├── app.go\n├── cmd\n│   ├── nscli\n│   │   └── main.go\n│   └── nsd\n│       └── main.go\n├── go.mod\n├── go.sum\n└── x\n    └── nameservice\n        ├── alias.go\n        ├── client\n        │   ├── cli\n        │   │   ├── query.go\n        │   │   └── tx.go\n        │   └── rest\n        │       ├── query.go\n        │       ├── rest.go\n        │       └── tx.go\n        ├── genesis.go\n        ├── handler.go\n        ├── internal\n        │   ├── keeper\n        │   │   ├── keeper.go\n        │   │   └── querier.go\n        │   └── types\n        │       ├── codec.go\n        │       ├── errors.go\n        │       ├── key.go\n        │       ├── msgs.go\n        │       ├── querier.go\n        │       └── types.go\n        └── module.go\n")])])]),n("p",[e._v("Start by creating a new git repository:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" nameservice\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" nameservice\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init\n")])])]),n("p",[e._v("Then, just follow along! The first step describes the design of your application.")])])}),[],!1,null,null,null);t.default=r.exports}}]);