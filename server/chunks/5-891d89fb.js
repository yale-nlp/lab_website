import { e as error } from './index-2b68e648.js';
import { L as LoadGlobsAllAtOnces, P as Project, c as SortProjectByYear } from './utils-420966c0.js';
import './index2-f2391a2e.js';

const yamls = /* @__PURE__ */ Object.assign({ "/src/yaml/projects/2022_bhaskar_diffusion.yml": () => import('./2022_bhaskar_diffusion-86b529ba.js').then((m) => m["default"]), "/src/yaml/projects/2022_kuchroo_multiscale.yml": () => import('./2022_kuchroo_multiscale-4611ce52.js').then((m) => m["default"]), "/src/yaml/projects/2022_tong_embedding.yml": () => import('./2022_tong_embedding-c519ca52.js').then((m) => m["default"]), "/src/yaml/projects/2023_fasina_neural.yml": () => import('./2023_fasina_neural-71436263.js').then((m) => m["default"]) });
async function load({ params }) {
  let projects = await LoadGlobsAllAtOnces(yamls);
  let sorted = projects.map((e) => new Project(e)).sort(SortProjectByYear);
  const slug = params.slug;
  const matches = projects.filter(({ href }) => href === slug);
  if (matches.length !== 1) {
    throw error(404, `Project with slug=${slug} not found`);
  }
  const project = new Project(matches[0]);
  const pubTitle = project?.publication?.title;
  if (pubTitle === void 0 || pubTitle === null) {
    throw error(404, `Project with slug=${slug} not found`);
  }
  const routes = sorted.filter(({ href, publication: { title } }) => !!href && !!title).map(({ title, abbreviation, href }) => {
    return { title, abbreviation, href };
  });
  const data = { project, routes, slug };
  return data;
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-487e4041.js')).default;
const universal_id = "src/routes/projects/[slug]/+page.ts";
const imports = ["_app/immutable/nodes/5.267583b8.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/utils.27e9ac00.js","_app/immutable/chunks/singletons.8aef0fa4.js","_app/immutable/chunks/index.63e919b1.js","_app/immutable/chunks/Hero.4358e206.js","_app/immutable/chunks/SimpleIcon.748e7df7.js","_app/immutable/chunks/index.211b9e06.js"];
const stylesheets = ["_app/immutable/assets/Youtube.83934954.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-891d89fb.js.map
