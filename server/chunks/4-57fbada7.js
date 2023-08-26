import { L as LoadGlobsAllAtOnces, P as Project, c as SortProjectByYear } from './utils-420966c0.js';
import './index2-f2391a2e.js';

const yamls = /* @__PURE__ */ Object.assign({ "/src/yaml/projects/2022_bhaskar_diffusion.yml": () => import('./2022_bhaskar_diffusion-86b529ba.js').then((m) => m["default"]), "/src/yaml/projects/2022_kuchroo_multiscale.yml": () => import('./2022_kuchroo_multiscale-4611ce52.js').then((m) => m["default"]), "/src/yaml/projects/2022_tong_embedding.yml": () => import('./2022_tong_embedding-c519ca52.js').then((m) => m["default"]), "/src/yaml/projects/2023_fasina_neural.yml": () => import('./2023_fasina_neural-71436263.js').then((m) => m["default"]) });
async function load({}) {
  let projects = await LoadGlobsAllAtOnces(yamls);
  let sorted = projects.map((e) => new Project(e)).sort(SortProjectByYear);
  return { projects: sorted };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5949f120.js')).default;
const universal_id = "src/routes/projects/+page.ts";
const imports = ["_app/immutable/nodes/4.938a6f89.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/utils.27e9ac00.js","_app/immutable/chunks/singletons.8aef0fa4.js","_app/immutable/chunks/index.63e919b1.js","_app/immutable/chunks/Hero.4358e206.js","_app/immutable/chunks/JellyContainer.26925cd9.js"];
const stylesheets = ["_app/immutable/assets/4.4347a118.css","_app/immutable/assets/Youtube.83934954.css","_app/immutable/assets/JellyContainer.a336384a.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-57fbada7.js.map
