# THE WAR ROOM ATLAS — Curator's Brief
*For review. Thesis, architecture, descriptions, and upgrade orders for every work.*

---

## I. The Thesis

**The War Room Atlas is sixteen instruments for reading power.** Empires rising, crowns waning, cities filling and emptying, armies breaking, peoples on the move — each rendered as a single self-contained interactive instrument where centuries become scrubbable. A visitor doesn't read about the British Empire's dissolution or the Great Migration; they drag a slider and watch it happen, drawn from the same archival and census series a historian would cite.

The collection makes three craft claims, and keeps them visibly:

1. **Every number is labeled for what it is.** Archival and census-derived figures carry SOURCED; constructed indices, interpolations, and forecasts carry MODELED. The line is never blurred — which is rarer in data visualization than it should be, and is the portfolio's sharpest differentiator.
2. **Real geometry, always.** Natural Earth, Census TIGER, and us-atlas boundaries, properly projected (Albers Equal Area Conic and friends) — never schematic blobs.
3. **Single-file instruments.** Each work is one self-contained HTML file: no servers, no keys, no build dependencies. It runs anywhere, forever.

**Authorship line, stated plainly:** *Designed and directed by William — Nashville, Tennessee. Built in collaboration with AI.* The research direction, historical judgment, error-catching, and product decisions are the human contribution, and the framing says so honestly. That honesty is itself a hiring signal.

**The pitch beneath the pitch:** this is what a data-visualization hire looks like in 2026 — someone who can take overwhelming, centuries-deep, messy data; make the acquisition and modeling decisions; direct the build; catch what's wrong; and ship something beautiful that tells the truth about its own uncertainty.

---

## II. The Five Wings — the visitor's arc

The collection walks a deliberate path: **power rises → power breaks → people move → cities transform → you take the controls.**

| Wing | Works | The question it answers |
|---|---|---|
| I · Empires & Crowns | British Empire · Waning Crown · Stalin's Terror · Emptying of Rome | How does power accumulate — and rot? |
| II · The World War | Third Reich · Germany's Initiative (Stalingrad) | How does initiative die, day by day? |
| III · The American Ground | Great Migration · Peopling of America · Commercial Partition · Music City · Frontier | Who moved, where, and what did it build? |
| IV · City Biographies | London · Detroit · The American Metropolis (in dev) | What is a city's whole life, told honestly? |
| V · Playable Histories | The Map Table · Pompeii · Gettysburg | What does it feel like from inside? |

---

## III. The Works — descriptions & upgrade orders

*Descriptions below are the new card copy. Upgrade orders are cut and ready: each executes the session its source file arrives.*

### Wing I — Empires & Crowns

**The Empire on Which the Sun Never Set** (1066–1997). Nine centuries of British power — acquisition, apogee, and the forty-year dissolution — territory, trade, and subjects under one slider.
*Upgrade orders:* trade-flow layer (sterling/tonnage by era); colony dossier cards on click; an imperial-overstretch index (defense burden vs. output, MODELED, labeled); cross-link to the Waning of the Crown.

**The Waning of the Crown** (1087–2025). A 938-year decay curve of real royal power, charted event by event from the Conqueror's writ to the constitutional present.
*Upgrade orders:* the Scotland track; the "temperature of public reverence" panel (polling-era SOURCED, pre-polling MODELED index); monarch dossiers with constitutional-event flags.

**Stalin's Terror** (1936–1953). The purge years in oxblood and gold — NKVD archival arrest and execution figures, wave by wave.
*Upgrade orders:* per-region arrest/execution choropleth from the NKVD series; wave annotations (Kirov pretext → Yezhovshchina → postwar → Doctors' Plot); victim-category split.

**The Emptying of Rome** (AD 100–600). A million souls down to a town of thousands — plague, sack, and severed grain across five centuries.
*Upgrade orders:* grain-fleet and aqueduct supply linkage; population proxies explicitly labeled MODELED with the scholarship ranges; sack/plague event flags.

### Wing II — The World War

**The Third Reich: Rise and Fall** (1933–1945). Twelve years from seizure to ruin — production, fronts, and the cold arithmetic of defeat.
*Upgrade orders:* production-vs-fronts dual ledger on Harrison's GDP series; the oil ledger; an "initiative index" that hands off by deep-link into the Stalingrad diary.

**What Destroyed Germany's Initiative** (Nov 1942–Feb 1943). Stalingrad as a war diary: twenty-two dated entries, encirclement to capitulation.
*Upgrade orders:* airlift promised-vs-delivered gauge (the 300-tons-a-day promise against the reality); temperature and ration strips; inbound deep-link from the Reich piece.

### Wing III — The American Ground

**The Great Migration** (1910–1970) — **NEW.** The Black South rendered as a population dot field — one dot per 10,000 people, placed by historical settlement cluster inside real state borders from WP56 census tables across 28 states — thinning decade by decade as migrant streams rise from thirteen distributed origins and the arrival constellations ignite. On-map event markers from Tulsa and Emmett Till to the Harlem Renaissance and Motown; cultural dossiers from Armstrong's Illinois Central ticket to the Bronx in '73; twelve sourced city ledgers; the share chart ending in the reversal toward Atlanta, Houston — and Nashville.
*Candidate v3 orders:* county-level origins; a family-path micro-narrative; Defender front-page moments.

**The Peopling of America** (1790–2020). Three thousand counties of real census data — who lived where, one dot at a time.
*Upgrade orders:* close the known gap — rural dots fade after county population peaks and Great Migration dots visibly leave the South; decade dossiers; cross-link to the Great Migration.

**The Commercial Partition of the United States** (1800–2020). A gravity model carves the republic into metro city-states — spheres, satellites, tribute.
*Upgrade orders:* contested-border shading where spheres nearly tie; a 2030 projection ribbon (MODELED, shown as a fan, not a line); rail/air-cargo gravity toggle.

**The Making of Music City** (1779–2026). Nashville from Fort Nashborough to the boom — first volume of the Cumberland Series.
*Upgrade orders:* neighborhood home-value strip; music-industry employment ribbon; Cumberland Series cross-navigation.

**The Tennessee–Kentucky Frontier** (1769–1860). 215 counties at their true founding dates, 18 forts, the roads through the Gap.
*Upgrade orders:* treaty-line and land-grant overlays; station-attack event layer; elevation profiles on the migration roads.

### Wing IV — City Biographies

**The Making of London** (1600–2024). Port becomes counting-house: four centuries of inversion, Booth-palette poverty map, demographic lens.
*Upgrade orders:* religion & birthplace lens; animated community migration dots; the dock-tonnage vs. City-employment inversion chart.

**The Hollowing of Detroit** (1900–2025). 1.85 million at the 1950 peak down to 630,000 — arsenal, exodus, unmaking.
*Upgrade orders:* HOLC redline overlay; plant-closure layer; inbound deep-link from the Great Migration (Detroit's rise is that story's arrival chapter).

**The American Metropolis** (in development). The national city atlas — NHGIS tracts, MapLibre + PMTiles chassis, forecast fans with honest intervals. Phase 1 opens with Nashville, Memphis, Chicago.

### Wing V — Playable Histories

**The Map Table** (1940–1945). First-person seat at the German situation conferences — an anti-Hitler study of an irrational command structure.
*Orders:* finish the v2 rebuild (3D entry, German TTS, venue ambience). **Decision required:** ships publicly only with a context-forward README, or stays a private link for interviews — previously flagged as misreadable by recruiters skimming cold. Your call stands to be made.

**Pompeii: The Final Moments** (AD 79). The historical-empathy JRPG.
*Orders:* package as-is from the iMac file first; then an hour-clock overlay tying scenes to the eruption timeline.

**Gettysburg: Total War** (July 1863). Three nested tiers with a modeled win-probability bar and counterfactual toggles.
*Upgrade orders:* officer dossiers; a casualty clock; then the planned chassis swap to the full WWII treatment.

---

## IV. Series-Wide Finish Standards
Applied to every work as it passes through:
a unified masthead lockup (THE WAR ROOM ATLAS · wing · work), standardized legend chips and the SOURCED/MODELED footer ledger, mobile breakpoints on every instrument, reduced-motion support, and a quiet load-in sequence. Fonts stay Cinzel / Oswald / Spectral; the field stays navy `#0b0f1a`, imperial red `#d64541`, brass `#f1d9a0`, with jade reserved for movement and growth.

## V. Execution Sequence
- **Batch 1 (flagships):** Music City · Commercial Partition · Peopling of America
- **Batch 2 (empires):** Empire · Waning Crown · London
- **Batch 3 (war):** Third Reich · Germany's Initiative · Stalin's Terror
- **Batch 4 (ground & games):** Frontier · Rome · Detroit · Gettysburg · Pompeii · Map Table

Each batch: upload the `</>` source files → upgrade orders executed → standalone builds returned → cards flip LIVE.
