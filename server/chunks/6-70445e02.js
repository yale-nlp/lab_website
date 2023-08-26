import { L as LoadGlobsAllAtOnces, d as Publication, e as SortPublicationsByYear } from './utils-420966c0.js';
import './index2-f2391a2e.js';

const yamls = /* @__PURE__ */ Object.assign({ "/src/yaml/selected_publications/2018_dijk_recovering.yml": () => import('./2018_dijk_recovering-05569cee.js').then((m) => m["default"]), "/src/yaml/selected_publications/2018_lindenbaum_geometry.yml": () => import('./2018_lindenbaum_geometry-e6f3b087.js').then((m) => m["default"]), "/src/yaml/selected_publications/2018_stanley_harmonic.yml": () => import('./2018_stanley_harmonic-9c51d830.js').then((m) => m["default"]), "/src/yaml/selected_publications/2019_amodio_exploring.yml": () => import('./2019_amodio_exploring-4f0ee229.js').then((m) => m["default"]), "/src/yaml/selected_publications/2019_amodio_travelgan.yml": () => import('./2019_amodio_travelgan-3687d03a.js').then((m) => m["default"]), "/src/yaml/selected_publications/2019_moon_visualizing.yml": () => import('./2019_moon_visualizing-54f36ba5.js').then((m) => m["default"]), "/src/yaml/selected_publications/2019_tong_fixing.yml": () => import('./2019_tong_fixing-3e2aae28.js').then((m) => m["default"]), "/src/yaml/selected_publications/2020_chen_uncovering.yml": () => import('./2020_chen_uncovering-f0cc5680.js').then((m) => m["default"]), "/src/yaml/selected_publications/2020_rieck_uncovering.yml": () => import('./2020_rieck_uncovering-65408c47.js').then((m) => m["default"]), "/src/yaml/selected_publications/2020_tong_interpretable.yml": () => import('./2020_tong_interpretable-457631e6.js').then((m) => m["default"]), "/src/yaml/selected_publications/2020_tong_trajectorynet.yml": () => import('./2020_tong_trajectorynet-759353f1.js').then((m) => m["default"]), "/src/yaml/selected_publications/2021_amodio_generating.yml": () => import('./2021_amodio_generating-a7775338.js').then((m) => m["default"]), "/src/yaml/selected_publications/2021_bhaskar_molecular.yml": () => import('./2021_bhaskar_molecular-d0f11c6a.js').then((m) => m["default"]), "/src/yaml/selected_publications/2021_burkhardt_quantifying.yml": () => import('./2021_burkhardt_quantifying-4933dbf0.js').then((m) => m["default"]), "/src/yaml/selected_publications/2021_gerasimiuk_mural.yml": () => import('./2021_gerasimiuk_mural-1e473648.js').then((m) => m["default"]), "/src/yaml/selected_publications/2021_horoi_exploring.yml": () => import('./2021_horoi_exploring-3cc2e0e0.js').then((m) => m["default"]), "/src/yaml/selected_publications/2021_kuchroo_multimodal.yml": () => import('./2021_kuchroo_multimodal-d32ee46a.js').then((m) => m["default"]), "/src/yaml/selected_publications/2021_tong_diffusion.yml": () => import('./2021_tong_diffusion-05a7dd1f.js').then((m) => m["default"]), "/src/yaml/selected_publications/2022_amodio_single-cell.yml": () => import('./2022_amodio_single-cell-9dca05b4.js').then((m) => m["default"]), "/src/yaml/selected_publications/2022_bhaskar_diffusion.yml": () => import('./2022_bhaskar_diffusion2-48893e0d.js').then((m) => m["default"]), "/src/yaml/selected_publications/2022_burkhardt_mapping.yml": () => import('./2022_burkhardt_mapping-1c4ba5b0.js').then((m) => m["default"]), "/src/yaml/selected_publications/2022_castro_transformer-based.yml": () => import('./2022_castro_transformer-based-62a37f99.js').then((m) => m["default"]), "/src/yaml/selected_publications/2022_hafler_topological.yml": () => import('./2022_hafler_topological-fbac3f5d.js').then((m) => m["default"]), "/src/yaml/selected_publications/2022_huguet_manifold.yml": () => import('./2022_huguet_manifold-85296ada.js').then((m) => m["default"]), "/src/yaml/selected_publications/2022_huguet_time-inhomogeneous.yml": () => import('./2022_huguet_time-inhomogeneous-addff29a.js').then((m) => m["default"]), "/src/yaml/selected_publications/2022_kuchroo_multiscale.yml": () => import('./2022_kuchroo_multiscale2-c0fcf2d4.js').then((m) => m["default"]) });
async function load({}) {
  let publications = await LoadGlobsAllAtOnces(yamls);
  let sorted = publications.map((e) => new Publication(e)).sort(SortPublicationsByYear);
  return { selectedPublications: sorted };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2ec7730e.js')).default;
const universal_id = "src/routes/publications/+page.ts";
const imports = ["_app/immutable/nodes/6.c53fa47b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/utils.27e9ac00.js","_app/immutable/chunks/singletons.8aef0fa4.js","_app/immutable/chunks/index.63e919b1.js","_app/immutable/chunks/Hero.4358e206.js","_app/immutable/chunks/JellyContainer.26925cd9.js"];
const stylesheets = ["_app/immutable/assets/JellyContainer.a336384a.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-70445e02.js.map
