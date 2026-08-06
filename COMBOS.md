# Combination clips — tonight's batch

The gap, in one sentence: **every sauce clip we own was filmed pouring onto a bare
lamb doner with no salad on it.** So the moment a customer picks salad *and* a
sauce, the sauce lands on a kebab that's lost its salad — and if they picked
chicken, it lands on lamb.

The code now looks for the most specific clip it has and falls back gracefully, so
each render below upgrades the site the moment it's ingested. Nothing breaks while
they're missing.

**Settings every time:** Seedance 2.0 · 1080p · std · 16:9 · 4s · audio ON.
Download to `~/Downloads`, no renaming.

**Beds are already staged in `~/Downloads`:**

| Bed file | What it is |
|---|---|
| `kebab-bed-salad-full.jpg` | Lamb doner, flatbread, full salad heaped on |
| `kebab-bed-chicken.jpg` | Chicken doner on flatbread, nothing on it |
| `kebab-bed-salad-works.jpg` | Lamb doner, full salad **and** chillies |

---

## Batch 1 — four renders, 144cr (upload the bed named above each one)

**1 · `sauce-garlic@salad-full`** — bed: `kebab-bed-salad-full.jpg`
*Unlocks "Doner, Salad & Garlic" — the single most ordered kebab in Britain.*
```
A thick ribbon of creamy white garlic sauce pours down from the darkness above onto the heaped salad on the doner kebab, drizzling side to side in a lazy zigzag across the lettuce, tomato, red onion and red cabbage before the stream snaps off, the sauce settling glossy and pooling into the salad. The salad, meat and flatbread all stay exactly where they are beneath, nothing is added or removed. Locked-off camera, absolutely no camera movement. The near-black charcoal background stays dark; the warm ember glow under the grate flares once then settles; a couple of tiny ember sparks drift. Razor sharp, appetising, premium editorial food film. Nothing else enters frame — no hands, no bottle, no props, no text. AUDIO: a soft thick drizzle and a wet settle over a faint sizzle, no music, no voices.
```

**2 · `sauce-chilli@salad-full`** — bed: `kebab-bed-salad-full.jpg`
```
A thick ribbon of fiery red chilli sauce pours down from the darkness above onto the heaped salad on the doner kebab, drizzling side to side in a lazy zigzag across the lettuce, tomato, red onion and red cabbage before the stream snaps off, the sauce settling glossy and running down into the salad. The salad, meat and flatbread all stay exactly where they are beneath, nothing is added or removed. Locked-off camera, absolutely no camera movement. The near-black charcoal background stays dark; the warm ember glow under the grate flares once then settles; a couple of tiny ember sparks drift. Razor sharp, appetising, premium editorial food film. Nothing else enters frame — no hands, no bottle, no props, no text. AUDIO: a soft thick drizzle and a wet settle over a faint sizzle, no music, no voices.
```

**3 · `sauce-garlic-chilli@salad-works`** — bed: `kebab-bed-salad-works.jpg`
*Unlocks "The Full Works".*
```
Two thick ribbons of sauce pour down together onto the loaded salad and chillies on the doner kebab — creamy white garlic sauce and fiery red chilli sauce side by side, criss-crossing in zigzags across the lettuce, tomato, onion, red cabbage and the whole green chillies before both streams snap off, the two colours settling glossy over the top. Everything beneath stays exactly where it is, nothing is added or removed. Locked-off camera, absolutely no camera movement. The near-black charcoal background stays dark; the warm ember glow under the grate flares once then settles; a couple of tiny ember sparks drift. Razor sharp, appetising, premium editorial food film. Nothing else enters frame — no hands, no bottles, no props, no text. AUDIO: a soft double drizzle and a wet settle over a faint sizzle, no music, no voices.
```

**4 · `salad-full@chicken`** — bed: `kebab-bed-chicken.jpg`
*Unlocks chicken + salad, and is the bed for batch 2.*
```
A quick cascade of salad rains down onto the pile of grilled chicken doner on the flatbread in rapid succession: shredded iceberg lettuce, then three tomato slices, then a scatter of red onion rings, then shredded red cabbage — each landing on the last, building a colourful heap of salad on top of the chicken. The chicken and bread stay beneath. Locked-off camera, absolutely no camera movement. The near-black charcoal background stays dark; the warm ember glow under the grate flares once then settles; a few tiny ember sparks kick up. Razor sharp, appetising, premium editorial food film. Nothing else enters frame — no hands, no props, no text. AUDIO: a rhythmic run of rustles, wet slaps and light taps over a faint sizzle, no music, no voices.
```

---

## Batch 2 — one render, 36cr (only after #4 is ingested)

**5 · `sauce-garlic@chicken.salad-full`** — bed: the end frame of clip #4, which I'll
extract and drop into `~/Downloads` the moment #4 lands.
*Unlocks "Chicken, Salad & Garlic".*
```
A thick ribbon of creamy white garlic sauce pours down from the darkness above onto the heaped salad on the chicken doner kebab, drizzling side to side in a lazy zigzag across the lettuce, tomato, red onion and red cabbage before the stream snaps off, the sauce settling glossy and pooling into the salad. The salad, chicken and flatbread all stay exactly where they are beneath, nothing is added or removed. Locked-off camera, absolutely no camera movement. The near-black charcoal background stays dark; the warm ember glow under the grate flares once then settles; a couple of tiny ember sparks drift. Razor sharp, appetising, premium editorial food film. Nothing else enters frame — no hands, no bottle, no props, no text. AUDIO: a soft thick drizzle and a wet settle over a faint sizzle, no music, no voices.
```

**Total: 5 renders, 180cr — under the 200 cap with 20 to spare.**

---

## Where the credits are deliberately *not* going

- **The four broken burger-sauce clips.** `burger-sauce`, `burger-sauce-garlic`,
  `burger-sauce-bbq` and `burger-sauce-chilli` were all rendered on the kebab meat
  bed by mistake — they show sauce on a lamb doner, not a burger. Re-shooting them
  is another 144cr and the burger sauce group is hidden anyway, so it costs nothing
  to leave. Next batch.
- **Mixed and shish with salad.** Real gaps, but they're the third and fourth most
  ordered meats — the favourites row doesn't lean on them, so they fall back
  quietly.
- **BBQ and mint over salad.** Same reasoning: less ordered than garlic and chilli.

## Ingest

Drop the downloads in and I'll do the rest — I identify clips by extracting frames
rather than trusting filenames, register the variant keys in `clips.js`, flip the
`filmed` flags in the config, and redeploy. The favourites cards re-resolve their
own artwork automatically, so they'll start showing the real thing with no edit.
