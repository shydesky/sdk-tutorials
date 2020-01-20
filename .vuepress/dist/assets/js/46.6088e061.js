(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{302:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"simple-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-app"}}),t._v(" Simple App")]),t._v(" "),a("p",[t._v("First lets assemble and run a very minimal blockchain. Most of the code for\nthis is wrapped into "),a("code",[t._v("starter")]),t._v(" so the boilerplate is fairly short. We will be\nusing "),a("code",[t._v("starter.AppStarter")]),t._v(" which wraps the Cosmos SDK modules "),a("code",[t._v("bank")]),t._v(", "),a("code",[t._v("auth")]),t._v(",\n"),a("code",[t._v("params")]),t._v(", "),a("code",[t._v("supply")]),t._v(", "),a("code",[t._v("genaccounts")]),t._v(", and "),a("code",[t._v("genutil")]),t._v(" into a minimal app.")]),t._v(" "),a("p",[a("code",[t._v("app.go")]),t._v(" is where you construct your app out of its component modules.\n"),a("code",[t._v("starter")]),t._v(" is taking care of most of this for now but we will come back later\nwhen it's time to add our own module.")]),t._v(" "),a("p",[t._v("Set up your project with the following in "),a("code",[t._v("hellochain/app.go")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" hellochain\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tsdk "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/cosmos-sdk/types"')]),t._v("\n\tabci "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/tendermint/tendermint/abci/types"')]),t._v("\n\tdbm "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/tendermint/tm-db"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/tendermint/tendermint/libs/log"')]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/sdk-tutorials/hellochain/starter"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" appName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hellochain"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ModuleBasics holds the AppModuleBasic struct of all modules included in the app")]),t._v("\n\tModuleBasics "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" starter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModuleBasics\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" helloChainApp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("starter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AppStarter "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// helloChainApp extends starter.AppStarter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NewHelloChainApp returns a fully constructed SDK application")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewHelloChainApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logger log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db dbm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" abci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Application "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// construct our starter to extend")]),t._v("\n\tappStarter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" starter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewAppStarter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compose our app with starter")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("helloChainApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tappStarter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do some final configuration...")]),t._v("\n\tapp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitializeStarter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Next lets build and run this app just to make sure its working and try out some\nof the basic functionality.")])])}),[],!1,null,null,null);s.default=e.exports}}]);