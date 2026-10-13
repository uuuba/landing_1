import "./features.css";

export function features({ anchor, title, items }) {
  return `
    <section class="section features" id="${anchor}">
      <div class="container">
        <div class="features__heading">
          <p class="section__eyebrow">Наша філософія</p>
          <h2 class="section-title">${title}</h2>
          <p class="features__intro">Хороша кава починається з уваги до деталей — від вибору зерна до моменту, коли вона опиняється у вашій чашці.</p>
        </div>
        <div class="features__grid">
          ${items
            .map(
              ({ icon, title: itemTitle, text }, index) => `
                <article class="feature-card">
                  <span class="feature-card__number">0${index + 1}</span>
                  <span class="feature-card__icon" aria-hidden="true">${icon}</span>
                  <h3 class="feature-card__title">${itemTitle}</h3>
                  <p class="feature-card__text">${text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
