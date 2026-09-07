# CBT Mock Test

A lightweight, browser-based CBT mock-test platform inspired by common Indian computer-based examination interfaces.

## Live usage

After GitHub Pages is enabled for this repository, open:

**https://Rohit751-glitch.github.io/CBT-Mock-Test/**

No installation, backend, database, or API key is required.

## What it does

- Paste questions directly into the built-in Test Creator.
- Supports sections, four-option MCQs, answers and explanations.
- Supports Markdown images, Base64 images, inline SVG diagrams, code blocks and tables.
- Configurable test duration, marks and negative marking.
- TCS-style question palette and exam navigation.
- Per-question time tracking.
- Rough/scribble pad.
- Scorecard and detailed solution review.
- Exportable result data.
- Browser localStorage persistence.

## Fastest workflow

1. Open the website.
2. Open **Test Creator**.
3. Paste questions in the supported format.
4. Set exam name, duration, marks and negative marking.
5. Create/start the test.
6. Attempt it like a normal CBT and review the result.

See `sample_questions_format.txt` for a minimal example and
`CBT_Question_Bank_Author_Portable_SKILL.md` for AI question-generation rules.

## Important storage note

The app is static and stores custom test data locally in the browser. Data saved on one browser/device does not automatically sync to another device.

## Hosting

The app is a standalone static `index.html`, so GitHub Pages can host it free of charge.

Enable it from:

**Repository → Settings → Pages → Deploy from a branch → main → /(root)**

## License

MIT License. You may use, modify and redistribute the project subject to the license terms.
