import "./contacts.css";

export function contacts({ anchor, title, phone, email, address }) {
  return `
    <section class="section contacts" id="${anchor}">
      <div class="container contacts__inner">
        <div class="contacts__copy">
          <p class="section__eyebrow">Завітайте до нас</p>
          <h2 class="section-title">${title}</h2>
          <p class="contacts__intro">Є запитання про каву або хочете зробити замовлення? Ми з радістю допоможемо.</p>
        </div>
        <div class="contacts__details">
          <a class="contact-link" href="tel:${phone.replace(/[^\d+]/g, "")}">
            <span class="contact-link__label">Зателефонуйте</span>
            <span class="contact-link__value">${phone}</span>
            <span class="contact-link__arrow" aria-hidden="true">↗</span>
          </a>
          <a class="contact-link" href="mailto:${email}">
            <span class="contact-link__label">Напишіть нам</span>
            <span class="contact-link__value">${email}</span>
            <span class="contact-link__arrow" aria-hidden="true">↗</span>
          </a>
          <a class="contact-link" href="https://maps.google.com/?q=${encodeURIComponent(address)}" target="_blank" rel="noreferrer">
            <span class="contact-link__label">Знайдіть нас у Львові</span>
            <span class="contact-link__value">${address}</span>
            <span class="contact-link__arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
