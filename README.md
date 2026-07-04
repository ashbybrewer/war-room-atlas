# The War Room Atlas

**Interactive histories and data atlases — eighteen instruments for reading power.**

Empires rising, crowns waning, cities filling and emptying, armies breaking, peoples on the move — each rendered as a single self-contained interactive instrument where centuries become scrubbable. You don't read about the British Empire's dissolution or the Great Migration; you drag a slider and watch it happen, drawn from the same archival and census series a historian would cite.

**[▶ Open the dispatch board](https://ashbybrewer.github.io/war-room-atlas/)** — the live landing page; every card links to its instrument.

## The collection

| Wing | Instrument | Span | Repo |
|---|---|---|---|
| I · Empires & Crowns | The Empire on Which the Sun Never Set | 1066–1997 | [empire-sun-never-set](https://github.com/ashbybrewer/empire-sun-never-set) |
| I · Empires & Crowns | The Waning of the Crown | 1087–2025 | [waning-of-the-crown](https://github.com/ashbybrewer/waning-of-the-crown) |
| I · Empires & Crowns | Stalin's Terror | 1929–1953 | [stalins-terror](https://github.com/ashbybrewer/stalins-terror) |
| I · Empires & Crowns | The Emptying of Rome | 753 BC–AD 630 | [emptying-of-rome](https://github.com/ashbybrewer/emptying-of-rome) |
| II · The World War | The Third Reich: Rise and Fall | 1933–1945 | [third-reich-rise-and-fall](https://github.com/ashbybrewer/third-reich-rise-and-fall) |
| II · The World War | What Destroyed Germany's Initiative | 1942–1943 | [germanys-initiative](https://github.com/ashbybrewer/germanys-initiative) |
| III · The American Ground | The Great Migration | 1910–1970 | [great-migration](https://github.com/ashbybrewer/great-migration) |
| III · The American Ground | The Peopling of America | 1790–2020 | [peopling-of-america](https://github.com/ashbybrewer/peopling-of-america) |
| III · The American Ground | The Commercial Partition of the U.S. | 1800–2020 | [commercial-partition](https://github.com/ashbybrewer/commercial-partition) |
| III · The American Ground | The Great Inversion | 1900–2025 | [the-great-inversion](https://github.com/ashbybrewer/the-great-inversion) |
| III · The American Ground | The Making of Music City | 1779–2026 | [making-of-music-city](https://github.com/ashbybrewer/making-of-music-city) |
| III · The American Ground | The Tennessee–Kentucky Frontier | 1769–1860 | [frontier-atlas](https://github.com/ashbybrewer/frontier-atlas) |
| IV · City Biographies | The Making of London | 1600–2024 | [making-of-london](https://github.com/ashbybrewer/making-of-london) |
| IV · City Biographies | The Hollowing of Detroit | 1900–2025 | [hollowing-of-detroit](https://github.com/ashbybrewer/hollowing-of-detroit) |
| V · Playable Histories | The Map Table | 1940–1945 | *in transit* |
| V · Playable Histories | GRÖFAZ | 1936–1945 | *in transit* |
| V · Playable Histories | Sic Semper | April 1865 | [sic-semper](https://github.com/ashbybrewer/sic-semper) |
| V · Playable Histories | Gettysburg: Total War | July 1863 | [gettysburg-total-war](https://github.com/ashbybrewer/gettysburg-total-war) |

Also in the shop: [minigpt](https://github.com/ashbybrewer/minigpt) — a language model from scratch in ~300 readable lines — and [cumberland](https://github.com/ashbybrewer/cumberland), a local-LLM persona lab.

## The creed

1. **Every number is labeled for what it is.** Archival and census-derived figures carry **SOURCED**; constructed indices, interpolations, and forecasts carry **MODELED**. The line is never blurred.
2. **Real geometry, always.** Natural Earth, Census TIGER, and us-atlas boundaries, properly projected — never schematic blobs.
3. **Single-file instruments.** Each work is one self-contained HTML file: no servers, no keys, no build dependencies. It runs anywhere, forever.

## The pipeline

Each piece is authored as a React component (`src/` in its repo) and compiled to one self-contained HTML file by the esbuild pipeline in `build/`:

```
npm install
node build/build.mjs src/<piece>.jsx
```

`PORTFOLIO.md` is the curator's brief — thesis, wing structure, and the upgrade orders each instrument is slated for. It's the planning document, published as-is.

## Authorship

Designed and directed by **William Brewer** — Nashville, Tennessee. Built in collaboration with AI (Anthropic's Claude). The research direction, historical judgment, error-catching, and product decisions are the human contribution; the framing says so honestly, because that honesty is the point.

MIT licensed — free to use, adapt, and teach with.
