import { c as create_ssr_component, v as validate_component, d as escape, e as each, b as add_attribute, i as is_promise, n as noop, j as compute_slots } from './index2-f2391a2e.js';
import { B as BROWSER } from './prod-ssr-7cc47430.js';
import { H as Hero } from './Hero-7f69f1ae.js';
import { S as SimpleIcon } from './SimpleIcon-1e6d6fe3.js';

/* empty css                                                        */const browser = BROWSER;
let d = "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";
const GitHub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { viewBox = "0 0 24 24" } = $$props;
  let { color = "" } = $$props;
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${validate_component(SimpleIcon, "SimpleIcon").$$render($$result, { viewBox, d, color, class: $$props.class }, {}, {
    default: () => {
      return `GitHub
`;
    }
  })}`;
});
const css$2 = {
  code: "button.svelte-qc0w97{all:unset}button.svelte-qc0w97,.play-button.svelte-qc0w97{display:grid;place-items:center;height:80px;width:80px;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;cursor:pointer}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isCustomPlayButton } = $$props;
  if ($$props.isCustomPlayButton === void 0 && $$bindings.isCustomPlayButton && isCustomPlayButton !== void 0)
    $$bindings.isCustomPlayButton(isCustomPlayButton);
  $$result.css.add(css$2);
  return `${isCustomPlayButton ? `<div class="${"play-button svelte-qc0w97"}">${slots.default ? slots.default({}) : ``}</div>` : `<button class="${"svelte-qc0w97"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" class="${"iconify iconify--mdi"}" viewBox="${"0 0 24 24"}"><path fill="${"#ff4e45"}" d="${"m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"}"></path></svg></button>`}`;
});
const css$1 = {
  code: "img.svelte-hw9fhp{height:auto;aspect-ratio:var(--aspect-ratio);width:100%}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { title = "" } = $$props;
  let { altThumb = "" } = $$props;
  let { play = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.altThumb === void 0 && $$bindings.altThumb && altThumb !== void 0)
    $$bindings.altThumb(altThumb);
  if ($$props.play === void 0 && $$bindings.play && play !== void 0)
    $$bindings.play(play);
  $$result.css.add(css$1);
  return `<img src="${"https://i.ytimg.com/vi/" + escape(id, true) + "/" + escape(altThumb ? "hqdefault" : "maxresdefault", true) + ".jpg"}"${add_attribute("title", title, 0)} alt="${"Youtube video: " + escape(title, true)}" referrerpolicy="${"no-referrer"}" class="${"svelte-hw9fhp"}">`;
});
const css = {
  code: '.you__tube.svelte-bhidph.svelte-bhidph{position:relative}.v__title.svelte-bhidph.svelte-bhidph{position:absolute;top:0;width:100%;background:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1), transparent);pointer-events:none}.v__title.svelte-bhidph h3.svelte-bhidph{font-family:var(\n      --title-font-family,\n      "Segoe UI",\n      Geneva,\n      Verdana,\n      sans-serif\n    );color:var(--title-color, #ffffff);padding:0 2ch;font-weight:400;text-shadow:0px 1px 3px var(--title-shadow-color, rgb(0, 0, 0, 0.2))}.b__overlay.svelte-bhidph.svelte-bhidph{position:absolute;top:0;left:0;width:100%;aspect-ratio:var(--aspect-ratio);cursor:pointer;transition:var(--overlay-transition, all 250ms ease-in-out)}.you__tube.svelte-bhidph:hover .b__overlay.svelte-bhidph{background:var(--overlay-bg-color, #00000030)}',
  map: null
};
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { id = null } = $$props;
  let { altThumb = false } = $$props;
  let videoInfo = {};
  videoInfo = fetch(`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`).then((res) => res.json());
  let play = false;
  const isCustomPlayButton = $$slots.default;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.altThumb === void 0 && $$bindings.altThumb && altThumb !== void 0)
    $$bindings.altThumb(altThumb);
  $$result.css.add(css);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function({ title, width, height }) {
      return `
  <div class="${"you__tube svelte-bhidph"}" style="${"--aspect-ratio:" + escape(width / height || "16/9", true)}"${add_attribute("title", title, 0)}>${`${validate_component(Image, "Image").$$render($$result, { id, title, altThumb, play }, {}, {})}
      <div class="${"b__overlay svelte-bhidph"}"></div>
      <div class="${"v__title svelte-bhidph"}"><h3 class="${"svelte-bhidph"}">${escape(title)}</h3></div>`}
    ${`${validate_component(Button, "Button").$$render($$result, { isCustomPlayButton }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`}</div>
`;
    }(__value);
  }(videoInfo)}`;
});
const ProjectInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { useProjectHero = true } = $$props;
  let { contentWidthClasses = "" } = $$props;
  const youtubeId = project?.publication?.youtube;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.useProjectHero === void 0 && $$bindings.useProjectHero && useProjectHero !== void 0)
    $$bindings.useProjectHero(useProjectHero);
  if ($$props.contentWidthClasses === void 0 && $$bindings.contentWidthClasses && contentWidthClasses !== void 0)
    $$bindings.contentWidthClasses(contentWidthClasses);
  return `${project?.publication.title === void 0 ? `` : `<div class="${""}">${useProjectHero ? `${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      backgroundImage: project.hero?.image ? project.hero.image : "",
      subtitle: String(project?.hero?.blurb)
    },
    {},
    {
      default: () => {
        return `${escape(project.hero.title)}`;
      }
    }
  )}` : ``}

    <div class="${"flex justify-center mx-4"}"><div class="${"max-w-full my-4 " + escape(contentWidthClasses, true)}">
            <div class="${"text-4xl font-light text-center"}">${escape(project?.title)}
                ${project?.publication.year ? `${escape(project?.publication.year)}` : ``}</div>  
                  
            ${project?.publication?.authors ? `<div class="${"text-center my-4"}">${each(project?.publication?.authors, (author, i) => {
    return `<span>${escape(author)}${escape(i < project?.publication?.authors?.length - 1 ? "," : "")}
                    </span>`;
  })}</div>` : ``}

            ${project.publication.hasOneOfGithubOrJournal() ? `<div class="${"text-center my-4"}">${escape(project.makeTextAboutLinks())}</div> 
                
                <div class="${"flex place-content-evenly place-items-center my-4"}">${project?.publication.github ? `<a${add_attribute("href", project?.publication.github, 0)} target="${"_blank"}" rel="${"noreferrer"}">${validate_component(GitHub, "GitHub").$$render($$result, { class: "h-12 w-12" }, {}, {})}</a>` : ``}

                    ${project?.publication.href ? `${project?.publication?.periodicalImage ? `<a${add_attribute("href", project?.publication.href, 0)} target="${"_blank"}" rel="${"noreferrer"}"><figure><img class="${"h-12 max-h-min"}"${add_attribute("src", project?.publication?.periodicalImage, 0)} alt="${escape(project?.publication.periodical, true) + " image"}"></figure></a>` : `<button class="${"btn btn-link btn-primary btn-outline btn-ghost"}"><a${add_attribute("href", project?.publication.href, 0)}>${escape(project?.publication.periodical)}</a></button>`}` : ``}</div>` : ``}

            ${project?.publication.abstract ? `<div class="${"inline-block text-slate-700 text-xl"}">${each(project?.publication.abstract.split("\n"), (paragraph) => {
    return `<p class="${"first:pt-0 pt-4"}">${escape(paragraph)}
                        </p>`;
  })}</div>` : ``}</div></div>    

    <div class="${"flex justify-center"}">${project?.publication?.keyImage ? `<figure class="${"p-16"}"><img${add_attribute("src", project?.publication?.keyImage, 0)} alt="${escape(project?.publication.title, true) + " image"}"></figure>` : ``}</div>

    ${youtubeId !== null && youtubeId !== void 0 && browser ? `<div class="${"flex justify-center"}"><div class="${"w-[48rem] my-4"}">${validate_component(Youtube, "Youtube").$$render($$result, { id: youtubeId }, {}, {})}</div></div>` : ``}</div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let heroTitle;
  let backgroundImage;
  let subtitle;
  let { data } = $$props;
  const handleProjectTitle = (project) => {
    const heroTitle2 = project.hero.title;
    return heroTitle2;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  heroTitle = handleProjectTitle(data?.project);
  backgroundImage = String(data?.project.hero.image);
  subtitle = String(data?.project?.hero.blurb);
  return `${validate_component(Hero, "Hero").$$render($$result, { backgroundImage, subtitle }, {}, {
    default: () => {
      return `${escape(heroTitle)}`;
    }
  })}

<div class="${"flex flex-col md:flex-row justify-center mt-8 mx-16"}">

    <div class="${"lg:ml-16"}">${validate_component(ProjectInfo, "ProjectInfo").$$render(
    $$result,
    {
      useProjectHero: false,
      project: data?.project
    },
    {},
    {}
  )}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-487e4041.js.map
