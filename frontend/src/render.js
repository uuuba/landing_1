import { hero } from "./blocks/hero/hero";

const renderers = { hero };

export function renderBlocks() {
  return blocks
    .map((block) => {
      const render = renderers[block.type];

      if (!render) {
        console.warn(`${block.type} does not exist`);
        return "";
      }
      return render(block);
    })
    .join("");
}
