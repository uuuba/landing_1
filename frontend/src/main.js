import "./styles/base.css";
import { getSettings, getPages } from "./api";
import { render } from "./render";

async function start() {
  // const settings = await getSettings();
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname),
    ]);

    document.title = `${page.title} - ${settings.siteName}`;
    const heroBlock = page.blocks.find((block) => block.type === "hero");
    app.innerHTML = hero(heroBlock);
  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();
