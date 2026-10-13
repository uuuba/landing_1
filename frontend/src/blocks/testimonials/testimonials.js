import "./testimonials.css";

export function testimonials({ anchor, title, items }) {
  return `
    <section class="section testimonials" id="${anchor}">
      <div class="container">
        <div class="testimonials__heading">
          <div>
            <p class="section__eyebrow">Кажуть наші гості</p>
            <h2 class="section-title">${title}</h2>
          </div>
          <span class="testimonials__rating" aria-label="Відгуки наших клієнтів">
            <span aria-hidden="true">★★★★★</span>
            <small>Смак, до якого повертаються</small>
          </span>
        </div>
        <div class="testimonials__grid">
          ${items
            .map(({ name, text, rating }) => {
              const stars = Math.max(0, Math.min(5, Number(rating) || 0));

              return `
                <figure class="quote-card">
                  <div class="quote-card__stars" aria-label="${stars} з 5 зірок">${"★".repeat(stars)}${"☆".repeat(5 - stars)}</div>
                  <blockquote class="quote-card__text">«${text}»</blockquote>
                  <figcaption class="quote-card__author">
                    <span class="quote-card__avatar" aria-hidden="true">${name.charAt(0)}</span>
                    <span>${name}</span>
                  </figcaption>
                </figure>
              `;
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
}
