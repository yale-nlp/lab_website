import { L as LoadGlobsAllAtOnces, S as SortMemberByPI, a as SortMemberByName, b as SortMemberByImage } from './utils-420966c0.js';
import './index2-f2391a2e.js';

const yamls = /* @__PURE__ */ Object.assign({ "/src/yaml/members/aarthi_venkat.yml": () => import('./aarthi_venkat-0c3b1e42.js').then((m) => m["default"]), "/src/yaml/members/abhinav_godavarthi.yml": () => import('./abhinav_godavarthi-913d1b76.js').then((m) => m["default"]), "/src/yaml/members/alex_gonopolskiy.yml": () => import('./alex_gonopolskiy-b56bb77e.js').then((m) => m["default"]), "/src/yaml/members/alexander_strzalkowski.yml": () => import('./alexander_strzalkowski-527e0eb5.js').then((m) => m["default"]), "/src/yaml/members/alexander_tong.yml": () => import('./alexander_tong-67f56038.js').then((m) => m["default"]), "/src/yaml/members/andrew_benz.yml": () => import('./andrew_benz-2613426d.js').then((m) => m["default"]), "/src/yaml/members/arman_afrasiyabi.yml": () => import('./arman_afrasiyabi-8de73fdc.js').then((m) => m["default"]), "/src/yaml/members/smita_krishnaswamy copy 2.yml": () => import('./smita_krishnaswamy copy 2-e1deabb9.js').then((m) => m["default"]), "/src/yaml/members/smita_krishnaswamy copy 3.yml": () => import('./smita_krishnaswamy copy 3-9495e5a3.js').then((m) => m["default"]), "/src/yaml/members/smita_krishnaswamy copy 4.yml": () => import('./smita_krishnaswamy copy 4-9495e5a3.js').then((m) => m["default"]), "/src/yaml/members/smita_krishnaswamy copy.yml": () => import('./smita_krishnaswamy copy-9495e5a3.js').then((m) => m["default"]), "/src/yaml/members/smita_krishnaswamy.yml": () => import('./smita_krishnaswamy-9495e5a3.js').then((m) => m["default"]) });
async function load({}) {
  let members = await LoadGlobsAllAtOnces(yamls);
  let sorted = members.sort(SortMemberByPI).sort(SortMemberByName).sort(SortMemberByImage);
  return { members: sorted };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-b4c4a5f8.js')).default;
const universal_id = "src/routes/members/+page.ts";
const imports = ["_app/immutable/nodes/3.3b2afcb3.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/utils.27e9ac00.js","_app/immutable/chunks/singletons.8aef0fa4.js","_app/immutable/chunks/index.63e919b1.js","_app/immutable/chunks/JellyContainer.26925cd9.js","_app/immutable/chunks/Hero.4358e206.js"];
const stylesheets = ["_app/immutable/assets/3.fd6fb85b.css","_app/immutable/assets/JellyContainer.a336384a.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-b8227687.js.map
