import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, h as createEventDispatcher, d as escape } from './index2-f2391a2e.js';
import { H as Hero } from './Hero-7f69f1ae.js';
import { J as JellyContainer } from './JellyContainer-7ad7b0a3.js';

const LeftArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300 z-30"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 19l-7-7 7-7"}"></path></svg>`;
});
const RightArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300 z-30 "}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg>`;
});
const PrevNextBtns = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return `<div class="${"relative inset-y-1/2 z-30 "}"><div class="${"absolute inline-block inset-x-0 top-1/2 place-content-between z-30 "}"><button type="${"button"}" class="${"absolute left-0 z-30 px-4 flex cursor-pointer group focus:outline-none h-full "}"><span class="${"z-30 inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none "}">${validate_component(LeftArrow, "LeftArrow").$$render($$result, {}, {}, {})}</span></button>
        
        <button type="${"button"}" class="${"absolute right-0 z-30 px-4 h-full flex cursor-pointer group focus:outline-none "}"><span class="${"z-30 inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none "}">${validate_component(RightArrow, "RightArrow").$$render($$result, {}, {}, {})}</span></button></div></div>`;
});
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { useBackgroundUrl: useBackgroundUrl2 = false } = $$props;
  let { selected = false } = $$props;
  let { widthPercent } = $$props;
  let { url } = $$props;
  if ($$props.useBackgroundUrl === void 0 && $$bindings.useBackgroundUrl && useBackgroundUrl2 !== void 0)
    $$bindings.useBackgroundUrl(useBackgroundUrl2);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.widthPercent === void 0 && $$bindings.widthPercent && widthPercent !== void 0)
    $$bindings.widthPercent(widthPercent);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `${useBackgroundUrl2 ? `<div class="${["bg-center bg-auto bg-no-repeat ", selected ? "active" : ""].join(" ").trim()}" style="${"width:" + escape(widthPercent, true) + "%; background-image: url('https://picsum.photos/seed/picsum/200/300');"}"></div>` : `<img class="${[
    "object-center object-cover " + escape(selected ? "opacity-100" : "opacity-40", true) + " h-full",
    selected ? "active" : ""
  ].join(" ").trim()}" width="${escape(widthPercent, true) + "%"}" alt="${"placehold"}"${add_attribute("src", url, 0)}>`}`;
});
let useBackgroundUrl = false;
const Carousal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { loop = true } = $$props;
  let { duration = 3e3 } = $$props;
  let currentImageIndex = 0;
  const isLastImage = () => {
    if (currentImageIndex === images.length - 1) {
      return true;
    }
    return false;
  };
  const toNextImage = () => {
    if (isLastImage()) {
      currentImageIndex = 0;
    } else {
      currentImageIndex += 1;
    }
  };
  if (loop) {
    setInterval(
      () => {
        toNextImage();
      },
      duration
    );
  }
  let thumbnailWidth = 100 / images.length;
  let { showThumbnails = true } = $$props;
  let { showCaptions = true } = $$props;
  let { transitionType = "slide" } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.showThumbnails === void 0 && $$bindings.showThumbnails && showThumbnails !== void 0)
    $$bindings.showThumbnails(showThumbnails);
  if ($$props.showCaptions === void 0 && $$bindings.showCaptions && showCaptions !== void 0)
    $$bindings.showCaptions(showCaptions);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  return `<div class="${"bg-base-100 h-full w-full flex flex-col"}"><div class="${"relative max-h-min w-full"}">${validate_component(PrevNextBtns, "PrevNextBtns").$$render($$result, {}, {}, {})}
        

        <div class="${"h-[28rem] max-h-[36rem]"}">${each(images, ({ id, url, name, attribution }, i) => {
    return `${currentImageIndex === i ? `<img${add_attribute("src", url, 0)}${add_attribute("alt", name, 0)}${add_attribute("title", attribution, 0)} class="${"object-cover w-full h-full"}">` : ``}`;
  })}</div></div>

    ${showThumbnails ? `<div class="${"bg-base-200 inline-flex place-content-evenly overflow-x-scroll overflow-y-hidden object-cover object-center h-40 max-h-40 "}">${each(images, ({ url }, i) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render(
      $$result,
      {
        useBackgroundUrl,
        selected: currentImageIndex === i,
        widthPercent: thumbnailWidth,
        url
      },
      {},
      {}
    )}`;
  })}</div>` : ``}
    
    ${showCaptions ? `<div class="${"hidden bg-base-100 text-center"}">Some images provided by Yale University
        </div>
        <div class="${"bg-slate-300 text-center py-2"}"><!-- HTML_TAG_START -->${images[currentImageIndex]?.caption}<!-- HTML_TAG_END --></div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const images = ["/images/yale/100_college_st.png", "/images/yale/lab_members_2019.jpeg"];
  const imageCaptions = ["School of Medicine", ""];
  const myImages = images.map((url, id) => ({
    id,
    url,
    name: imageCaptions[id],
    caption: imageCaptions[id]
  }));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Hero, "Hero").$$render($$result, { class: "hidden md:block" }, {}, {})}
<div class="${"hidden md:flex flex-row "}">

    <div class="${"w h-[36rem]"}">${validate_component(Carousal, "Carousel").$$render($$result, { images: myImages, showCaptions: false }, {}, {})}</div></div>



${validate_component(JellyContainer, "JellyContainer").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex place-content-center md:pt-8"}"><div class="${"text-slate-700 leading-relaxed"}">Lab description here
        </div></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-748b0424.js.map
