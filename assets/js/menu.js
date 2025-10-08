// assets/js/menu.js
(function () {
  const html = `
    <ul>
      <li class="menu-heading">Experience</li>
      <li><a class="menu-sub" href="experience-research.html">Research & Publications</a></li>
      <li><a class="menu-sub" href="experience-biotech.html">Biotech Leadership</a></li>
      <li><a class="menu-sub" href="experience-clinical.html">Clinical & Surgical Exposure</a></li>

      <li class="menu-heading">Interests</li>
      <li><a class="menu-sub" href="interests-art.html">Art</a></li>
      <li><a class="menu-sub" href="interests-athletics.html">Athletics</a></li>

      <li class="menu-heading">Contact</li>
      <li><a class="menu-sub" href="contact.html">Contact Me</a></li>
      <li><a href="index.html">← Back to Home</a></li>
    </ul>
  `;

  const menu = document.querySelector('#menu');
  if (!menu) return;

  // If #menu already has a <ul>, replace it; otherwise append.
  const ul = menu.querySelector('ul');
  if (ul) ul.outerHTML = html; else menu.insertAdjacentHTML('beforeend', html);
})();

