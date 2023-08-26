import { L as LoadGlobsAllAtOnces } from './utils-420966c0.js';
import './index2-f2391a2e.js';

const aff_yamls = /* @__PURE__ */ Object.assign({});
const cat_yamls = /* @__PURE__ */ Object.assign({});
async function load({}) {
  const categories = await LoadGlobsAllAtOnces(cat_yamls);
  const affiliations = await LoadGlobsAllAtOnces(aff_yamls);
  return {
    categories: categories.sort((a, b) => {
      let an = Number(a?.sort);
      let bn = Number(b?.sort);
      return an - bn;
    }),
    //.map(e=>e as ResearchCategoryInterface),
    affiliations: affiliations.sort((a, b) => {
      let an = Number(a?.sort);
      let bn = Number(b?.sort);
      return an - bn;
    })
    //.map(e=>e as AffiliationInterface)
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-748b0424.js')).default;
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/nodes/2.0f5f7c51.js","_app/immutable/chunks/utils.27e9ac00.js","_app/immutable/chunks/singletons.8aef0fa4.js","_app/immutable/chunks/index.63e919b1.js","_app/immutable/chunks/Hero.4358e206.js","_app/immutable/chunks/JellyContainer.26925cd9.js","_app/immutable/chunks/index.211b9e06.js"];
const stylesheets = ["_app/immutable/assets/JellyContainer.a336384a.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-fb415172.js.map
