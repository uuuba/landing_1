import { hero } from "./blocks/hero/hero";
import { features } from "./blocks/features/features";
import { testimonials } from "./blocks/testimonials/testimonials";
import { contacts } from "./blocks/contacts/contacts";

const renderers = { hero, features, testimonials, contacts };

function renderHeader(settings) {
  const brand = settings.siteName.split("—")[0].trim();

  return `
    <header class="header">
      <div class="container header__inner">
        <a class="header__logo" href="/" aria-label="${brand} — на головну">
          <span class="header__mark" aria-hidden="true">З</span>
          <span>${brand}</span>
        </a>
        <nav class="header__nav" aria-label="Головна навігація">
          ${settings.menu
            .map(
              ({ label, link }) =>
                `<a class="header__link" href="${link}">${label}</a>`,
            )
            .join("")}
        </nav>
        <a class="header__cta" href="#contacts">Зв'язатися <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  `;
}

function renderFooter(settings) {
  return `
    <footer class="footer">
      <div class="container footer__inner">
        <a class="header__logo footer__logo" href="/" aria-label="${settings.siteName}">
          <span class="header__mark" aria-hidden="true">З</span>
          <span>Зерно</span>
        </a>
        <p class="footer__text">${settings.footer.text}</p>
        <span class="footer__copyright">© ${new Date().getFullYear()} Зерно</span>
      </div>
    </footer>
  `;
}

export function renderPage(settings, page) {
  const renderersHtml = page.blocks
    .map((block) => {
      const renderBlock = renderers[block.type];

      if (!renderBlock) {
        console.warn(`${block.type} does not exist`);
        return "";
      }
      return renderBlock(block);
    })
    .join("");

  return `${renderHeader(settings)}<main>${renderersHtml}</main>${renderFooter(settings)}`;
}
