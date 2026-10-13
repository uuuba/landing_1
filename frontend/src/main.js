import "./styles/base.css";
import { getSettings, getPages } from "./api";
import { renderPage } from "./render";

const app = document.querySelector("#app");

async function start() {
  if (!app) {
    throw new Error("Could not find the #app element");
  }

  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPages(location.pathname),
    ]);

    document.title = `${page.title} - ${settings.siteName}`;
    app.innerHTML = renderPage(settings, page);
  } catch (error) {
    app.textContent = `Something went wrong: ${
      error instanceof Error ? error.message : String(error)
    }`;
  }
}

start();
