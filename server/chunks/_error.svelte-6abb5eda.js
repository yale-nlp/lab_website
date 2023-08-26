import { c as create_ssr_component, f as subscribe, d as escape, g as getContext } from './index2-f2391a2e.js';

const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"bg-primary h-16"}"></div>

<div class="${"flex place-content-center place-items-center"}"><div class="${"card"}"><div class="${"card-body "}"><div class="${"text-center text-8xl font-extralight"}">${escape($page.status)}</div>
            <h1 class="${"text-4xl text-error"}">${escape($page.error.message)}</h1></div></div></div>`;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-6abb5eda.js.map
