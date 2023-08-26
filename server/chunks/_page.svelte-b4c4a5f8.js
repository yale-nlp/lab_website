import { c as create_ssr_component, v as validate_component, i as is_promise, n as noop, e as each, d as escape, b as add_attribute } from './index2-f2391a2e.js';
import { M as Member } from './utils-420966c0.js';
import { J as JellyContainer } from './JellyContainer-7ad7b0a3.js';
import { H as Hero, T as TextHero } from './Hero-7f69f1ae.js';
import _ from 'lodash';

const css = {
  code: ".card.svelte-151n1u8.svelte-151n1u8{position:relative;width:100%;height:210pt;padding:5px;border-radius:8px;text-align:center;overflow:hidden;display:flex;flex-direction:column}.details-container.svelte-151n1u8.svelte-151n1u8{background-color:rgb(255, 140, 0);color:white;height:205pt;padding:10px;opacity:0;transition:all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);display:flex;flex-direction:column}.details-container.active.svelte-151n1u8.svelte-151n1u8{opacity:1}.details-container.svelte-151n1u8 h2.svelte-151n1u8{text-align:center;font-size:large;font-weight:600}.details-container.svelte-151n1u8 p.svelte-151n1u8{text-align:center;font-size:small}.avatar.svelte-151n1u8.svelte-151n1u8{width:150px;height:150px;margin:0 auto}.card-body.svelte-151n1u8.svelte-151n1u8{color:black}.card-body.svelte-151n1u8 h2.svelte-151n1u8{text-align:center;font-size:large;font-weight:600}",
  map: null
};
const MemberInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member = new Member({
    name: { first: "Lab", last: "Member" },
    image: "",
    about: "Detailed information about the person..."
  }) } = $$props;
  if ($$props.member === void 0 && $$bindings.member && member !== void 0)
    $$bindings.member(member);
  $$result.css.add(css);
  return `<div class="${"card svelte-151n1u8"}">${`<figure class="${["flex-col bg-base-100", ""].join(" ").trim()}"><div class="${"avatar inline-flex place-content-center place-items-start rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 svelte-151n1u8"}"><img${add_attribute("src", member?.image, 0)}${add_attribute("alt", `${member?.name_str} profile image`, 0)} class="${"w-full h-auto rounded-full"}"></div></figure>

        <div class="${"card-body svelte-151n1u8"}"><h2 class="${"svelte-151n1u8"}">${escape(member?.name)}</h2></div>`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let curr;
  let groups;
  let { data } = $$props;
  const adjustGroup = (group) => {
    switch (group) {
      case "PI":
        return "Principal Investigator";
      case "postdoc":
        return "Postdoctoral Fellows";
    }
  };
  const groupOrder = ["PI", "postdoc"];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  data?.members.filter(({ isAlum }) => isAlum);
  curr = data?.members.filter(({ isAlum }) => !isAlum);
  groups = _.groupBy(curr, "status");
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

${validate_component(JellyContainer, "JellyContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
        Loading Members...
    `;
        }
        return function(results) {
          return `

        <div class="${"my-0 py-0"}">${each(groupOrder, (group, g) => {
            let members = results[group];
            return `
            <div class="${"my-0 py-0"}"><div class="${"w-full"}">${validate_component(TextHero, "TextHero").$$render($$result, { class: "my-0 pt-0" }, {}, {
              tagline: () => {
                return `<div slot="${"tagline"}" class="${"py-0 pt-0"}">${escape(adjustGroup(group))}
                        </div>`;
              }
            })}
                    
                    <div class="${"w-full"}"><ol class="${"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"}">${each(members, (member) => {
              return `${validate_component(MemberInfo, "MemberInfo").$$render($$result, { member }, {}, {})}`;
            })}</ol>
                    </div></div>
            </div>`;
          })}</div>
    `;
        }(__value);
      }(groups)}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b4c4a5f8.js.map
