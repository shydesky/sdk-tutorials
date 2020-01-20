(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{377:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"msgs-and-handlers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgs-and-handlers"}}),t._v(" Msgs and Handlers")]),t._v(" "),e("p",[t._v("Now that you have the "),e("code",[t._v("Keeper")]),t._v(" setup, it is time to build the "),e("code",[t._v("Msgs")]),t._v(" and "),e("code",[t._v("Handlers")]),t._v(" that actually allow users to buy names and set values for them.")]),t._v(" "),e("h2",{attrs:{id:"msgs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgs"}}),t._v(" "),e("code",[t._v("Msgs")])]),t._v(" "),e("p",[e("code",[t._v("Msgs")]),t._v(" trigger state transitions. "),e("code",[t._v("Msgs")]),t._v(" are wrapped in "),e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/types/tx_msg.go#L34-L41",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Txs")]),e("OutboundLink")],1),t._v(" that clients submit to the network. The Cosmos SDK wraps and unwraps "),e("code",[t._v("Msgs")]),t._v(" from "),e("code",[t._v("Txs")]),t._v(", which means, as an app developer, you only have to define "),e("code",[t._v("Msgs")]),t._v(". "),e("code",[t._v("Msgs")]),t._v(" must satisfy the following interface (we'll implement all of these in the next section):")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Transactions messages must fulfill the Msg")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Msg "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the message type.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Must be alphanumeric or empty.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns a human-readable string for the message, intended for utilization")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// within tags")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ValidateBasic does a simple validation check that")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// doesn't require access to any other information.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateBasic")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Error\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the canonical byte representation of the Msg.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSignBytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signers returns the addrs of signers that must sign.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CONTRACT: All signatures must be present to be valid.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CONTRACT: Returns addrs in some deterministic order.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSigners")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("AccAddress\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"handlers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlers"}}),t._v(" "),e("code",[t._v("Handlers")])]),t._v(" "),e("p",[e("code",[t._v("Handlers")]),t._v(" define the action that needs to be taken (which stores need to get updated, how, and under what conditions) when a given "),e("code",[t._v("Msg")]),t._v(" is received.")]),t._v(" "),e("p",[t._v("In this module you have three types of "),e("code",[t._v("Msgs")]),t._v(" that users can send to interact with the application state: "),e("router-link",{attrs:{to:"/nameservice/tutorial/set-name.html"}},[e("code",[t._v("SetName")])]),t._v(", "),e("router-link",{attrs:{to:"/nameservice/tutorial/buy-name.html"}},[e("code",[t._v("BuyName")])]),t._v(" and "),e("router-link",{attrs:{to:"/nameservice/tutorial/delete-name.html"}},[e("code",[t._v("DeleteName")])]),t._v(". They will each have an associated "),e("code",[t._v("Handler")]),t._v(".")],1),t._v(" "),e("p",[t._v("Now that you have a better understanding of "),e("code",[t._v("Msgs")]),t._v(" and "),e("code",[t._v("Handlers")]),t._v(", you can start building your first message: "),e("code",[t._v("SetName")])])])}),[],!1,null,null,null);s.default=n.exports}}]);