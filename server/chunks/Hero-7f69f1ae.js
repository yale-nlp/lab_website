import { c as create_ssr_component, d as escape, v as validate_component, j as compute_slots } from './index2-f2391a2e.js';

const TextHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  return `<div class="${"pt-8 text-center " + escape($$props.class, true)}"><h1 class="${"text-4xl md:text-6xl font-extralight break-keep md:break-normal"}">${slots.default ? slots.default({}) : `
        `}</h1>

    ${$$slots.tagline ? `<p class="${"py-8 text-2xl md:text-3xl font-extralight break-all"}">${slots.tagline ? slots.tagline({}) : `
            `}</p>` : ``}</div>`;
});
const ImageHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backgroundImage } = $$props;
  let { subtitle } = $$props;
  if ($$props.backgroundImage === void 0 && $$bindings.backgroundImage && backgroundImage !== void 0)
    $$bindings.backgroundImage(backgroundImage);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<div class="${"hero h-[20rem] bg-base-200 " + escape($$props.class, true)}" style="${"background-image: url(" + escape(backgroundImage, true) + ");"}">${backgroundImage ? `<div class="${"hero-overlay bg-opacity-60"}"></div>` : ``}   
  
  <div class="${"hero-content text-center text-neutral-content"}"><div class="${"max-w-md"}"><h1 class="${"mb-5 text-5xl md:text-7xl font-light capitalize break-all"}">${slots.default ? slots.default({}) : `
          `}</h1>              
      ${subtitle ? `<p class="${"mb-5 text-2xl uppercase font-extralight break-keep"}"><!-- HTML_TAG_START -->${subtitle}<!-- HTML_TAG_END --></p>` : ``}  
      ${slots.tagline ? slots.tagline({}) : ``}</div></div></div>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { backgroundImage = "" } = $$props;
  let { subtitle = "" } = $$props;
  if ($$props.backgroundImage === void 0 && $$bindings.backgroundImage && backgroundImage !== void 0)
    $$bindings.backgroundImage(backgroundImage);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `${backgroundImage ? `${validate_component(ImageHero, "ImageHero").$$render(
    $$result,
    {
      backgroundImage,
      subtitle,
      class: $$props.class
    },
    {},
    {
      tagline: () => {
        return `${slots.tagline ? slots.tagline({}) : `

            `}
        `;
      },
      default: () => {
        return `${slots.default ? slots.default({}) : `

        `}`;
      }
    }
  )}` : `${$$slots.default ? `${$$slots.tagline ? `${validate_component(TextHero, "TextHero").$$render($$result, { class: $$props.class }, {}, {
    tagline: () => {
      return `${slots.tagline ? slots.tagline({}) : `

                `}
            `;
    },
    default: () => {
      return `${slots.default ? slots.default({}) : `

            `}`;
    }
  })}` : `${validate_component(TextHero, "TextHero").$$render($$result, { class: $$props.class }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : `

            `}`;
    }
  })}`}` : `<div class="${"bg-primary h-16 " + escape($$props.class, true)}"></div>`}`}`;
});

export { Hero as H, TextHero as T };
//# sourceMappingURL=Hero-7f69f1ae.js.map
