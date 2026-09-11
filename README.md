# mjbaroudi06-ux.github.io

Personal portfolio site for Marie-Jeanne Baroudi, bridging clinical, biotech, and research experience with art and athletics. Live at [mjbaroudi.com](https://mjbaroudi.com).

## Pages

- `index.html`: home (about, experience, interests, contact)
- `experience-research.html`, `experience-biotech.html`, `experience-clinical.html`: experience detail pages
- `interests-art.html`, `interests-athletics.html`: interests detail pages
- `contact.html`: contact

## Development

Static HTML/CSS/JS site, no build step required to view it. Open `index.html` directly or serve the folder with any static file server.

Styles are authored in Sass under `assets/sass/` and compiled to `assets/css/main.css`. After editing the Sass source, recompile with the [Dart Sass](https://sass-lang.com/dart-sass/) or [libsass](https://pypi.org/project/libsass/) compiler of your choice, e.g.:

```bash
python3 -m pip install libsass
python3 -c "import sass; open('assets/css/main.css','w').write(sass.compile(filename='assets/sass/main.scss'))"
```

## Credits

Built on the [Spectral](https://html5up.net/spectral) template by [HTML5 UP](https://html5up.net) (AJ / [@ajlkn](https://twitter.com/ajlkn)), used under the [CC BY 3.0 license](https://html5up.net/license).

- Icons: [Font Awesome](https://fontawesome.com)
- Scripts: [jQuery](https://jquery.com), [Scrollex](https://github.com/ajlkn/jquery.scrollex)
