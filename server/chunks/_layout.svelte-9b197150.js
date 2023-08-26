import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from './index2-f2391a2e.js';
import { S as SimpleIcon } from './SimpleIcon-1e6d6fe3.js';
import { f as LabTwitterLink } from './utils-420966c0.js';

let d$1 = "M4 6h16M4 12h16M4 18h16";
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { viewBox = "0 0 24 24" } = $$props;
  let { color = "" } = $$props;
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${validate_component(SimpleIcon, "SimpleIcon").$$render(
    $$result,
    {
      viewBox,
      d: d$1,
      color,
      fill: "none",
      class: "stroke-current " + $$props.class,
      "stroke-width": "1.5",
      stroke: "currentColor"
    },
    {},
    {
      default: () => {
        return `Hamburger
`;
      }
    }
  )}`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { routes = [
    { text: "projects", href: "/projects" },
    {
      text: "publications",
      href: "/publications"
    },
    { text: "members", href: "/members" }
  ] } = $$props;
  if ($$props.routes === void 0 && $$bindings.routes && routes !== void 0)
    $$bindings.routes(routes);
  return `<div class="${"navbar inset-x-0 top-0 absolute text-secondary-content"}"><div class="${"flex-1"}"><a class="${"btn btn-ghost normal-case text-2xl font-bold"}" href="${"/"}">Yale NLP Lab
		</a></div>

	<div class="${"navbar-end"}"><div class="${"hidden lg:block"}"><ul class="${"menu menu-horizontal px-1"}">${each(routes, ({ text, href }, i) => {
    return `<li><a${add_attribute("href", href, 0)} class="${"uppercase " + escape(text == "contact" ? "btn btn-outline" : "", true)}">${escape(text)}</a>
				</li>`;
  })}</ul></div>
		<div class="${"lg:hidden dropdown dropdown-end z-[100]"}"><label tabindex="${"-1"}" for="${"hamburger"}" class="${"btn btn-square btn-ghost"}"><button id="${"hamburger"}" class="${"btn btn-square btn-ghost"}">${validate_component(Hamburger, "Hamburger").$$render(
    $$result,
    {
      id: "hamburger",
      class: "inline-block w-5 h-5"
    },
    {},
    {}
  )}</button></label>	
			<ul tabindex="${"-1"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box text-right uppercase text-lg bg-primary text-primary-content "}">${each(routes, ({ text, href }, i) => {
    return `<li><a${add_attribute("href", href, 0)} class="${"inline-block btn-link text-right"}">${escape(text)}
					</a></li>
				${i < routes.length - 1 ? `<div class="${"divider py-0 my-0"}"></div>` : ``}`;
  })}</ul></div></div></div>`;
});
let d = "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z";
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { viewBox = "0 0 24 24" } = $$props;
  let { color = "" } = $$props;
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${validate_component(SimpleIcon, "SimpleIcon").$$render($$result, { viewBox, d, color, class: $$props.class }, {}, {
    default: () => {
      return `Twitter
`;
    }
  })}`;
});
let heroClass = "btn gap-2 btn-outline text-accent-content uppercase";
let altClass = "btn gap-2 bg-transparent btn-link text-black capitalize";
const FollowUsBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let btnClass;
  let { outlined = true } = $$props;
  if ($$props.outlined === void 0 && $$bindings.outlined && outlined !== void 0)
    $$bindings.outlined(outlined);
  btnClass = outlined ? heroClass : altClass;
  return `<a${add_attribute("href", LabTwitterLink, 0)} class="${"inline-block"}" target="${"_blank"}" rel="${"noreferrer"}"><button class="${"" + escape(btnClass, true) + " " + escape($$props.class, true)}">${validate_component(Twitter, "Twitter").$$render(
    $$result,
    {
      class: "h-6 w-6  stroke-sky-400 fill-sky-400"
    },
    {},
    {}
  )}
        Follow us on Twitter
    </button></a>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"footer px-10 py-4 bg-base-300 text-base-content "}"><div class="${"flex flex-row place-content-evenly place-items-center w-full"}"><div class="${"flex flex-col place-content-center place-items-center"}"><span class="${"footer-title"}">Address</span> 		
			<p>Yale NLP Lab at Yale University.
				<br>
				address TODO
			</p></div> 
		<div class="${"flex flex-col place-content-center place-items-center"}"><span class="${"footer-title"}">Social</span> 
			<div class="${"grid grid-flow-col gap-4 "}">${validate_component(FollowUsBtn, "FollowUsBtn").$$render($$result, { outlined: false }, {}, {})}</div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const routes = [
    { text: "projects", href: "/projects" },
    {
      text: "publications",
      href: "/publications"
    },
    { text: "members", href: "/members" }
  ];
  return `${validate_component(Navigation, "Navigation").$$render($$result, { routes }, {}, {})}

<div class="${"min-h-screen flex flex-col"}">${slots.default ? slots.default({}) : ``}
	<div class="${"flex-1 py-8"}"></div>	
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-9b197150.js.map
