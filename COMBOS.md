# Combination clips

The gap, in one sentence: **every sauce clip we owned was filmed pouring onto a
bare lamb doner with no salad on it.** So the moment a customer picked salad *and*
a sauce, the sauce landed on a kebab that had lost its salad — and if they'd
picked chicken, it landed on lamb.

## Fixed, 6 Aug 2026 — 9 clips, 162 credits

`resolveClip()` in `clips.js` now reaches for the most specific clip it has and
falls through gracefully when a variant doesn't exist:

    sauce-garlic@chicken.salad-full   garlic, over full salad, on chicken
    sauce-garlic@salad-full           garlic, over full salad
    sauce-garlic@chicken              garlic, straight onto chicken
    sauce-garlic                      the original: garlic on a bare doner

Salad is checked before meat on purpose — once salad is on, it's the salad the
sauce pours over and the meat is mostly hidden.

**Filmed this batch** (all Seedance 2.0, 1080p, 16:9, 4s, audio on, 18cr each):

| Key | Bed it was filmed on |
|---|---|
| `sauce-garlic@salad-full` | doner + full salad |
| `sauce-chilli@salad-full` | doner + full salad |
| `sauce-bbq@salad-full` | doner + full salad |
| `sauce-mint@salad-full` | doner + full salad |
| `sauce-garlic-chilli@salad-works` | doner + salad & chillies |
| `salad-full@chicken` | chicken doner |
| `salad-full@mixed` | mixed doner |
| `sauce-garlic@chicken.salad-full` | chicken + full salad (chained off `salad-full@chicken`) |
| `sauce-chilli@chicken.salad-full` | chicken + full salad (chained) |

**What that completes:** lamb doner with full salad now works with *every* sauce
on the menu. Chicken works with salad, and with garlic or chilli on top of it.
Mixed works with salad.

## Still open

- **Sauces over `salad-lt`** (lettuce & tomato). Falls back to the bare-meat
  sauce clip. 5 renders to close.
- **Shish with salad**, and sauces on mixed/shish. Lower-ordered meats.
- **The four broken burger-sauce clips.** `burger-sauce`, `burger-sauce-garlic`,
  `burger-sauce-bbq` and `burger-sauce-chilli` were all rendered on the kebab
  meat bed by mistake — they show sauce on a lamb doner, not a burger. The burger
  sauce group is hidden because of it. 4 renders to close.

## Method, for the next batch

1. Extract the end frame of the build state the new clip lands on — that's the bed.
2. Upload it, render the drop onto it, keep the locked-off set language identical.
3. Ingest: file named `base--variant.mp4` (filename-safe), key `base@variant` in
   `clips.js`. The favourites cards re-resolve their own artwork automatically.
