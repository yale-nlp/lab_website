import { c as create_ssr_component, k as spread, l as escape_attribute_value, o as escape_object, b as add_attribute } from './index2-f2391a2e.js';

const SimpleIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { viewBox = "0 0 24 24" } = $$props;
  let { color = "" } = $$props;
  let { d } = $$props;
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.d === void 0 && $$bindings.d && d !== void 0)
    $$bindings.d(d);
  return `<svg${spread(
    [
      { viewBox: escape_attribute_value(viewBox) },
      {
        class: escape_attribute_value($$props.class)
      },
      { "aria-hidden": "true" },
      escape_object($$props)
    ],
    {}
  )}><title>${slots.default ? slots.default({}) : ``}</title><path${add_attribute("d", d, 0)}${add_attribute("color", color, 0)}></path></svg>`;
});

export { SimpleIcon as S };
//# sourceMappingURL=SimpleIcon-1e6d6fe3.js.map
