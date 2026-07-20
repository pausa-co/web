document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var langSwitch = document.querySelector('.lang-switch');
  if (langSwitch) {
    var langBtn = langSwitch.querySelector('button');
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langSwitch.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      langSwitch.classList.remove('open');
    });
  }

  var mailtoCtas = document.querySelectorAll('a.btn-pill[href^="mailto:"]');
  mailtoCtas.forEach(function (cta) {
    cta.addEventListener('click', function () {
      if (window.posthog) {
        var container = cta.closest('section, div');
        posthog.capture('contact_cta_click', { location: container ? container.className : '', label: cta.textContent.trim() });
      }
    });
  });

  var form = document.querySelector('form.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var lines = [];
      data.forEach(function (value, key) {
        if (value) lines.push(key + ': ' + value);
      });
      if (window.posthog) {
        posthog.capture('contact_form_submit', { subject: form.getAttribute('data-subject') || 'Pausa' });
      }
      var subject = encodeURIComponent(form.getAttribute('data-subject') || 'Pausa');
      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = 'mailto:contactopausa@pausaco.com?subject=' + subject + '&body=' + body;
    });
  }
});
