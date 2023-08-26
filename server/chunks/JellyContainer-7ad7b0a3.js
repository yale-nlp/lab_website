import { c as create_ssr_component, d as escape } from './index2-f2391a2e.js';

const css = {
  code: ".jelly.svelte-bhjgd1{max-width:65ch}.max-w-sm.svelte-bhjgd1{max-width:24rem;;}.max-w-md.svelte-bhjgd1{max-width:28rem}.max-w-lg.svelte-bhjgd1{max-width:32rem}.max-w-xl.svelte-bhjgd1{max-width:36rem}.max-w-jelly.svelte-bhjgd1{max-width:68rem}",
  map: null
};
const JellyContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex justify-center " + escape($$props.class, true) + " svelte-bhjgd1"}"><div class="${"mx-8 w-5/6 md:w-[68rem]"}">${slots.default ? slots.default({}) : `

        `}</div></div>`;
});

export { JellyContainer as J };
//# sourceMappingURL=JellyContainer-7ad7b0a3.js.map
