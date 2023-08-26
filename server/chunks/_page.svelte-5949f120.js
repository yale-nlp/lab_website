import { c as create_ssr_component, v as validate_component, e as each, d as escape } from './index2-f2391a2e.js';
import { H as Hero } from './Hero-7f69f1ae.js';
import { J as JellyContainer } from './JellyContainer-7ad7b0a3.js';

const css = {
  code: ".hover-effect.svelte-1uj9m3m a.svelte-1uj9m3m{text-decoration:none}.hover-effect.svelte-1uj9m3m.svelte-1uj9m3m:hover{transform:translateY(-5px);transition:transform 0.3s ease}.hover-effect.svelte-1uj9m3m:hover .title.svelte-1uj9m3m{color:#007BFF}",
  map: null
};
const ProjectListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css);
  return `<div class="${"hover-effect svelte-1uj9m3m"}"><a href="${"/projects/" + escape(project?.href, true)}" class="${"svelte-1uj9m3m"}"><li class="${"py-2"}"><div class="${"bg-white shadow-lg rounded-lg overflow-hidden"}"><div class="${"bg-cover bg-center h-56 p-4"}" style="${"background-image: url('" + escape(project?.hero.image, true) + "')"}"></div>
                <div class="${"p-5 h-20 text-left"}"><span class="${"tracking-wide text-xl font-bold text-gray-700 title svelte-1uj9m3m"}">${escape(project?.title)}</span></div>
                <div class="${"p-4 h-36 text-left"}"><p class="${"text-gray-500 text-sm"}">${escape(project?.description)}</p></div></div></li></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

${validate_component(JellyContainer, "JellyContainer").$$render($$result, { class: "pt-16" }, {}, {
    default: () => {
      return `<div class="${"text-center font-bold text-4xl"}">Lab Projects
    </div>
    <br>
    <div class="${"flex flex-col items-center justify-center w-full"}"><ol class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}">${each(data.projects, (project) => {
        return `${validate_component(ProjectListItem, "ProjectListItem").$$render($$result, { project }, {}, {})}`;
      })}</ol></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5949f120.js.map
