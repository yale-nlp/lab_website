import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from './index2-f2391a2e.js';
import { H as Hero } from './Hero-7f69f1ae.js';
import { J as JellyContainer } from './JellyContainer-7ad7b0a3.js';

const SelectedPublicationsByYear = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let types;
  let { publications } = $$props;
  let years = {};
  if ($$props.publications === void 0 && $$bindings.publications && publications !== void 0)
    $$bindings.publications(publications);
  types = Array.from(new Set(publications.map((pub) => pub.type)));
  {
    {
      years = {};
      publications.forEach((pub) => {
        let year = String(pub?.year);
        if (!(year in years)) {
          years[year] = [];
        }
        years[year].push(pub);
      });
    }
  }
  return `<div class="${""}"><label for="${"paperType"}">Filter by Type:</label>
    <select id="${"paperType"}"><option value="${""}">All</option>${each(types, (type) => {
    return `<option${add_attribute("value", type, 0)}>${escape(type)}</option>`;
  })}</select>

    ${each(Object.entries(years).reverse(), ([year, pubs]) => {
    return `<div><div class="${"grid grid-flow-col auto-cols-auto py-4"}"><div class="${"text-4xl font-extralight col-auto"}"><div class="${"sticky top-0 "}">${escape(year)}
                    </div></div>
                <div class="${"ml-16 col-auto"}">${each(pubs, (pub) => {
      return `<div class="${"pb-4"}"><div class="${"card-title break-word"}">${pub?.href ? `<a class="${"link"}"${add_attribute("href", pub?.href, 0)}>${escape(pub?.title)}
                                    </a>` : `${escape(pub?.title)}`}</div>
                            <span><!-- HTML_TAG_START -->${pub.makeAuthorString()}<!-- HTML_TAG_END --></span>
                            <span><!-- HTML_TAG_START -->${pub.makePublicationString()}<!-- HTML_TAG_END --></span>
                        </div>`;
    })}
                </div></div>
        </div>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}


${validate_component(JellyContainer, "JellyContainer").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex flex-col place-items-center gap-8 mt-8"}">
          
        <div class="${"text-5xl font-light text-center"}">Selected Publications
        </div>

        
        
        ${validate_component(SelectedPublicationsByYear, "SelectedPublicationsByYear").$$render($$result, { publications: data?.selectedPublications }, {}, {})}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2ec7730e.js.map
