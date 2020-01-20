(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{365:function(t,s,n){"use strict";n.r(s);var e=n(1),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#types"}}),t._v(" Types")]),t._v(" "),n("p",[t._v("First thing we're going to do is create a module in the "),n("code",[t._v("/x/")]),t._v(" folder with the scaffold tool using the below command:")]),t._v(" "),n("p",[t._v("In the case of this tutorial we will be naming the module "),n("code",[t._v("nameservice")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" x/\n\nscaffold module "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("repo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nameservice\n")])])]),n("h2",{attrs:{id:"types-go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#types-go"}}),t._v(" "),n("code",[t._v("types.go")])]),t._v(" "),n("p",[t._v("Now we can continue with creating a module. Start by creating the file "),n("code",[t._v("types.go")]),t._v("in "),n("code",[t._v("./x/nameservice/internal/types")]),t._v(" folder which will hold customs types for the module.")]),t._v(" "),n("blockquote",[n("p",[t._v("Notice we're using a directory called "),n("code",[t._v("internal")]),t._v(". This will prevent the contained modules from being accessed by external instances of Golang. To quote the original proposal: "),n("code",[t._v("An import of a path containing the element “internal” is disallowed if the importing code is outside the tree rooted at the parent of the “internal” directory.")]),t._v(" "),n("a",{attrs:{href:"https://docs.google.com/document/d/1e8kOo3r51b2BWtTs_1uADIA5djfXhPT36s6eHVRIvaU/edit",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),n("OutboundLink")],1),t._v(". If you know that the types need to be accessed by external code, consider moving it out of the "),n("code",[t._v("internal")]),t._v(" directory.")])]),t._v(" "),n("h2",{attrs:{id:"whois"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#whois"}}),t._v(" Whois")]),t._v(" "),n("p",[t._v("Each name will have three pieces of data associated with it.")]),t._v(" "),n("ul",[n("li",[t._v("Value - The value that a name resolves to. This is just an arbitrary string, but in the future you can modify this to require it fitting a specific format, such as an IP address, DNS Zone file, or blockchain address.")]),t._v(" "),n("li",[t._v("Owner - The address of the current owner of the name")]),t._v(" "),n("li",[t._v("Price - The price you will need to pay in order to buy the name")])]),t._v(" "),n("p",[t._v("To start your SDK module, define your "),n("code",[t._v("nameservice.Whois")]),t._v(" struct in the "),n("code",[t._v("./x/nameservice/internal/types/types.go")]),t._v(" file:")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" types\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strings"')]),t._v("\n\n\tsdk "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/cosmos/cosmos-sdk/types"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MinNamePrice is Initial Starting Price for a name that was never previously owned")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" MinNamePrice "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt64Coin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nametoken"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Whois is a struct that contains all the metadata of a name")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Whois "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tValue "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"value"`')]),t._v("\n\tOwner sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"owner"`')]),t._v("\n\tPrice sdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"price"`')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NewWhois returns a new Whois with the minprice as the price")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewWhois")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Whois "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tPrice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MinNamePrice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implement fmt.Stringer")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w Whois"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" strings"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TrimSpace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("`Owner: %s\nValue: %s\nPrice: %s`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Owner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("As mentioned in the "),n("router-link",{attrs:{to:"/nameservice/tutorial/app-design.html"}},[t._v("Design doc")]),t._v(", if a name does not already have an owner, we want to initialize it with some MinPrice.")],1)])}),[],!1,null,null,null);s.default=a.exports}}]);