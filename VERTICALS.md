# Taking this past kebabs — chicken, pizza, noodles

## What actually transfers

Three things, and it's worth being precise about which is which, because only one
of them is expensive.

1. **The code.** Transfers completely. The builder doesn't know what a kebab is —
   it reads `tabs → groups → items`, plays a clip per option, stacks a price, and
   texts an order. A pizza builder is the same object with different strings.
   Cost of a new vertical: zero.

2. **The pitch.** Transfers completely. Every takeaway on every high street is
   paying Just Eat 14–30%. The commission argument doesn't care what's in the box.
   Cost: zero.

3. **The film.** Does **not** transfer. Not one frame. This is the whole job.

So the plan below is really a plan about film, because everything else is already
done.

## The film is the only real cost

The kebab library was ~60 clips and about a week of rendering, bed extraction,
ingesting and frame-identification. That cost is now sunk and amortises across
every kebab shop in the country. A chicken shop cannot use a single one of those
clips — the food is different, so the whole library has to be shot again.

**Therefore: one vertical at a time, and only start the next one when the current
one has paying shops on it.** The temptation is to shoot four libraries and launch
a suite. Don't. Each library is a week you can't sell in, and if the pitch doesn't
convert for kebabs it won't convert for noodles either.

## Order to build them in

Ranked by (shops per town) × (how well the build-it mechanic fits) ÷ (clips needed).

**1. Chicken shops — do this one next.**
The closest neighbour by far. Peri-peri, southern fried, wings, burgers, wraps,
strips. Enormous numbers of independents, same late-night trade, same Just Eat
problem. Crucially the *bed* is the same idea — food landing on a tray or in a
box — so the shot language and lighting carry over even though the clips don't.
Roughly 25–30 clips: 4 mains (whole chicken, half, strips, wings), 3 wrap/burger
builds, spice levels as sauce equivalents, sides.
The mechanic fits: spice level is a genuinely useful thing to *see*.

**2. Pizza — the best fit for the mechanic, the most clips.**
Toppings landing on a base one at a time is the single most satisfying version of
this idea, and pizza is the most-ordered takeaway in the country. But it's also
the most expensive library: every topping needs its own clip, and toppings
combine, so you're shooting a base plus 12–15 individual toppings that must land
in the same spot on the same base. Same chain-bed discipline as the kebab, just
more links. Call it 30–40 clips.
Worth it, but only second, because the shoot is long and fiddly.

**3. Noodles / Chinese — the mechanic works, the clips are hardest.**
A wok box filling up is good film. The problem is that noodles and rice don't
layer — they toss and mix, so "stacking" reads wrong, and each combination is a
different-looking dish rather than a stack of visible ingredients. You'd likely
need finished-dish clips per combination rather than a layer chain, which breaks
the whole cheap-combinatorics trick that makes the kebab builder work.
Do this last, and expect to redesign the builder for it rather than reskin.

**Also worth a look before noodles:** Indian/curry houses (huge independent count,
but the same mixing problem as noodles), and fish and chips (small library — fish,
sausage, pie, chips, curry sauce — very fast to shoot, though the menu is so short
the builder has less to do).

## How to build each one

Reuse the process, not the assets.

1. **Pick the eight things that matter.** Look at three real menus in the target
   trade and take the items that appear on all three. Those are the filmed ones.
   Everything else becomes the plain menu list.
2. **Shoot the base, then extract the beds.** Same chain-bed method as the kebabs:
   render the base, pull the end frame, feed that frame back in as the bed for the
   next layer so the food stays in register. This is the bit that makes the layers
   line up and it's the bit that goes wrong if rushed — the burger sauces are
   still missing because a batch went out on the wrong bed.
3. **Ship at partial coverage.** The builder already falls back when a clip is
   missing. Don't wait for a complete library to start selling — get the four
   mains filmed and pitch on those.
4. **Fork the demo, not the client site.** `~/kebab-demo` is the pattern: generic
   config, `?name=` override, one deployed URL. `chicken-demo`, `pizza-demo` are
   copies with a different config and a different `public/clips`.

## What to build in code before vertical two

Do this once, when the second library exists — not before.

- **Pull the shared code out.** Right now `App.jsx`, `index.css` and `clips.js`
  are copied per project. Two verticals is the point where that stops being fine.
  Make them a local package the demos import, so a fix to the builder reaches
  every trade instead of one folder.
- **Move the demo overrides server-side.** `?name=` is perfect for standing
  outside a shop. It's not right for a site you've actually sold — that wants a
  real config and a real domain. Keep both paths.
- **A menu importer.** The slowest part of building a real client site is typing
  their menu and prices. Their prices are usually on a Just Eat or Foodhub page.
  A scraper that turns one of those URLs into a config draft would cut a client
  site from an hour to ten minutes, and it works for every vertical at once.
  This is the highest-leverage piece of code left to write.

## The honest risk

The same one as the kebab plan, and it gets worse with each vertical: a beautiful
ordering page nobody visits is worthless. Every vertical needs the same answer —
the QR code on the counter, the link in the Google profile and the Instagram bio.
Adding trades multiplies the film cost but does nothing for that problem. Fix
distribution on kebabs first and prove shops stay past month three. If they don't,
a second vertical just doubles the churn.
