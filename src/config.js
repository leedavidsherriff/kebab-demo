// ─────────────────────────────────────────────────────────────────────────────
// THE PITCH DEMO — a generic kebab shop you can put any name on from the URL.
//
// Pull up outside a shop, put their name on the end of the link, hand the phone
// over. No rebuild, no dev server, no laptop:
//
//   ?name=Kebab+King
//   ?name=Kebab+King&town=Bridgend&phone=01656+123456&wa=447700900123
//
//   name   the shop's name — drives the wordmark, the tab, "The <name> Original"
//   town   shown in the hero line and the address block
//   phone  their number; leave it off and the call buttons hide themselves
//   wa     WhatsApp number, digits only, international (447… not 07…).
//          Put YOUR OWN mobile here for a demo — the order lands on your phone
//          while the owner is watching, which sells it better than a dead link.
//
// {name} and {town} in any string below get filled in at load.
// ─────────────────────────────────────────────────────────────────────────────
const BASE = {

  name: 'KEBAB HOUSE',
  tagline: 'Off the spit. Off the skewer. Every night of the week.',
  town: '',
  address: '',
  locationLine: 'open seven nights',
  phone: '',
  phoneHref: '',
  whatsapp: '',

  hours: [
    { days: 'Mon – Thu', time: '4pm – 11pm' },
    { days: 'Fri – Sat', time: '4pm – 12am' },
    { days: 'Sunday', time: '4pm – 11pm' },
  ],

  ticker: [
    'OPEN SEVEN NIGHTS',
    'DONER · SHISH · KOFTE',
    'THE {NAME} ORIGINAL',
    'THE SQUEAK · THE CRUNCH · THE LOT',
    'RING IT THROUGH',
  ],

  heroVideoUrl: 'hero-loop.mp4',
  heroPosterUrl: 'hero-poster.jpg',

  audio: {
    slam: 'sfx/slam.mp3',
    whoosh: 'sfx/whoosh.mp3',
  },

  // Red and gold. Everything on the page tints from these five.
  colors: {
    charcoal: '#0A0A0A',
    ember: '#D81F26',
    amber: '#F0A81E',
    cream: '#F6EFE4',
    smoke: '#8B8279',
  },

  copy: {
    wordmarkAccent: 1,
    heroKicker: 'Kebabs & burgers',
    heroCta: 'Build yours',
    builderHeading: ['Build it.', 'Watch the price.'],
    builderBlurb:
      'Pick your meat, load it how you want it, ring it through. What you see is what goes in the wrap.',
    hoursHeading: ['Open', 'every night'],
    locationHeading: ['Ready when', 'you are'],
    locationBlurb: "You'll smell the grill before you see the sign.",
    orderHeading: ['Ring it', 'through'],
    orderBlurb: 'Order ahead and skip the wait.',
    footerLine: 'Kebabs, burgers, the lot',
  },

  seo: {
    title: '{name} — Kebabs & Burgers',
    description: '{name} — doner, shish and smashed burgers. Build yours and watch the price.',
    ogTitle: '{name} — Build it. Watch the price.',
    ogDescription:
      'Build your kebab and watch every ingredient land on the grill. Order straight to the shop.',
    url: '',
    image: '',
    initial: 'K',
    schemaDescription: 'Kebab and burger takeaway.',
    locality: '',
    postcode: '',
    openingHours: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '16:00', closes: '23:00' },
      { dayOfWeek: ['Friday', 'Saturday'], opens: '16:00', closes: '00:00' },
      { dayOfWeek: 'Sunday', opens: '16:00', closes: '23:00' },
    ],
  },

  // ── The builder ────────────────────────────────────────────────────────────
  // Only what the film covers. Yummies' pizza, wraps, chicken strips and
  // meal deals aren't filmed and deliberately aren't here — see PITCH.md.
  builder: {
    // ── Shop favourites ──────────────────────────────────────────────────────
    // One tap loads the whole build. The card art is the real end frame of that
    // combination, resolved through the same variant lookup the panel uses — so
    // each of these gets truer as its clips land, and never oversells.
    // `filmed: false` marks a combination the library doesn't cover properly
    // yet; it still works, it just falls back to a less specific clip.
    bestSellers: [
      {
        id: 'fav-doner-salad-garlic',
        tab: 'kebabs',
        name: 'Doner, Salad & Garlic',
        desc: 'The one everyone orders',
        filmed: false,
        sel: { meat: ['doner'], bread: ['flatbread'], salad: ['salad-full'], sauce: ['garlic'], extras: [] },
      },
      {
        id: 'fav-doner-salad-chilli',
        tab: 'kebabs',
        name: 'Doner, Salad & Chilli',
        desc: 'For the ones who can take it',
        filmed: false,
        sel: { meat: ['doner'], bread: ['flatbread'], salad: ['salad-full'], sauce: ['chilli'], extras: [] },
      },
      {
        id: 'fav-chicken-salad-garlic',
        tab: 'kebabs',
        name: 'Chicken, Salad & Garlic',
        desc: 'Chicken doner done properly',
        filmed: false,
        sel: { meat: ['chicken-doner'], bread: ['flatbread'], salad: ['salad-full'], sauce: ['garlic'], extras: [] },
      },
      {
        id: 'fav-doner-works',
        tab: 'kebabs',
        name: 'The Full Works',
        desc: 'Salad, chillies, garlic & chilli',
        filmed: false,
        sel: { meat: ['doner'], bread: ['flatbread'], salad: ['salad-works'], sauce: ['garlic-chilli'], extras: [] },
      },
      {
        id: 'fav-halloumi',
        tab: 'kebabs',
        name: 'Doner & Halloumi',
        desc: 'Squeaky cheese on top',
        filmed: true,
        sel: { meat: ['doner'], bread: ['flatbread'], salad: [], sauce: [], extras: ['halloumi'] },
      },
      {
        id: 'fav-burger-dressed',
        tab: 'burgers',
        name: 'Smash, Cheese & Salad',
        desc: 'Quarter pounder, dressed',
        filmed: true,
        sel: { patty: ['quarter'], bun: ['brioche'], toppings: ['cheese-salad'], sauce: ['no-sauce'], extras: [] },
      },
      {
        id: 'fav-burger-works',
        tab: 'burgers',
        name: 'The Lot',
        desc: 'Cheese, bacon, the works',
        filmed: true,
        sel: { patty: ['quarter'], bun: ['brioche'], toppings: ['the-works'], sauce: ['no-sauce'], extras: [] },
      },
    ],

    tabs: [
      {
        id: 'kebabs',
        label: 'Kebabs',
        groups: [
          {
            id: 'meat', label: 'The meat', pick: 'one',
            items: [
              { id: 'doner', name: 'The {name} Original', desc: 'Flame-cut lamb doner', price: 7.0, layer: 'doner' },
              { id: 'chicken-doner', name: 'The Yardbird', desc: 'Chicken doner', price: 7.5, layer: 'chicken' },
              { id: 'lamb-shish', name: 'The Mountain Lamb', desc: 'Lamb shish, off the skewer', price: 9.5, layer: 'shish' },
              { id: 'mixed-doner', name: 'The Best of Both', desc: 'Lamb & chicken doner, mixed', price: 8.5, layer: 'mixed' },
            ],
          },
          {
            id: 'bread', label: 'The bread', pick: 'one', hidden: true,
            items: [
              { id: 'flatbread', name: 'Flatbread', price: 0, layer: 'flatbread', clip: 'flatbread' },
            ],
          },
          {
            id: 'salad', label: 'The salad — free', pick: 'one',
            items: [
              { id: 'no-salad', name: 'No salad', price: 0, layer: null },
              { id: 'salad-lt', name: 'Lettuce & tomato', price: 0, layer: ['lettuce', 'tomato'], clip: 'salad-lt' },
              { id: 'salad-full', name: 'Full salad', price: 0, layer: ['lettuce', 'tomato', 'onion', 'cabbage'], clip: 'salad-full' },
              { id: 'salad-works', name: 'Full salad & chillies', price: 0, layer: ['lettuce', 'tomato', 'onion', 'cabbage', 'chillies'], clip: 'salad-works' },
            ],
          },
          {
            id: 'sauce', label: 'The sauce — free', pick: 'one',
            items: [
              { id: 'no-sauce', name: 'No sauce', price: 0, layer: null },
              { id: 'garlic', name: 'Garlic', price: 0, layer: 'sauce-garlic', clip: 'sauce-garlic' },
              { id: 'chilli', name: 'Chilli', price: 0, layer: 'sauce-chilli', clip: 'sauce-chilli' },
              { id: 'garlic-chilli', name: 'Garlic & chilli', price: 0, layer: ['sauce-garlic', 'sauce-chilli'], clip: 'sauce-garlic-chilli' },
              { id: 'mint', name: 'Mint yoghurt', price: 0, layer: 'sauce-mint', clip: 'sauce-mint' },
              { id: 'bbq', name: 'BBQ', price: 0, layer: 'sauce-bbq', clip: 'sauce-bbq' },
            ],
          },
          {
            id: 'extras', label: 'Do it properly', pick: 'many',
            items: [
              { id: 'halloumi', name: 'The Squeak — grilled halloumi', price: 1.5, layer: 'halloumi', clip: 'halloumi' },
              { id: 'double-meat', name: 'Load it up — double meat', price: 3.0, layer: 'DOUBLE_MEAT' },
              { id: 'meal-deal', name: 'Make it a meal — chips & a can', price: 3.5, layer: null, clip: 'meal-deal' },
              { id: 'cheese-chips', name: 'Cheese & chips', price: 3.5, layer: null },
            ],
          },
        ],
      },
      {
        id: 'burgers',
        label: 'Burgers',
        groups: [
          {
            id: 'patty', label: 'The burger', pick: 'one',
            items: [
              { id: 'quarter', name: 'The Smash', desc: 'Quarter pounder beef burger', price: 6.0, layer: 'patty', clip: 'patty', cardStill: 'clips/burger-finale.jpg' },
              { id: 'kenfig-special', name: 'The Double Decker', desc: 'Double stack burger', price: 9.0, layer: 'patty-double', clip: 'patty-double' },
              { id: 'chicken-strip', name: 'The Crunch', desc: 'Crispy chicken strip burger', price: 7.0, layer: 'fillet', clip: 'fillet' },
            ],
          },
          {
            id: 'bun', label: 'The bun', pick: 'one', hidden: true,
            items: [
              { id: 'brioche', name: 'Toasted bun', price: 0, layer: 'BUN' },
            ],
          },
          {
            id: 'toppings', label: 'The build', pick: 'one',
            items: [
              { id: 'plain', name: 'Straight up', price: 0, layer: null },
              { id: 'cheese', name: 'The Melt — American cheese', price: 1.0, layer: 'cheese', clip: 'burger-cheese' },
              { id: 'cheese-salad', name: 'Dressed — cheese & salad', price: 1.75, layer: ['cheese', 'lettuce', 'tomato', 'onion'], clip: 'burger-cheese-salad' },
              { id: 'the-works', name: 'The Lot — cheese, bacon, the works', price: 3.0, layer: ['cheese', 'bacon', 'jalapenos', 'lettuce', 'tomato', 'onion'], clip: 'burger-works' },
            ],
          },
          {
            // Burger sauces stay hidden until their clips are re-shot on the
            // correct patty bed — the last batch was rendered on the kebab meat
            // bed by mistake, so all four came back unusable.
            id: 'sauce', label: 'The sauce — free', pick: 'one', hidden: true,
            items: [
              { id: 'no-sauce', name: 'No sauce', price: 0, layer: null },
            ],
          },
          {
            id: 'extras', label: 'Do it properly', pick: 'many',
            items: [
              { id: 'extra-patty', name: 'Load it up — extra patty', price: 3.0, layer: 'DOUBLE_MEAT' },
              { id: 'meal-deal', name: 'Make it a meal — chips & a can', price: 3.5, layer: null },
              { id: 'cheese-chips', name: 'Cheese & chips', price: 3.5, layer: null },
            ],
          },
        ],
      },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Everything below turns ?name=… into a finished shop, at load, with no build.
// ─────────────────────────────────────────────────────────────────────────────

// Walk the config and fill {name}/{town} in every string it finds.
function fill(value, tokens) {
  if (typeof value === 'string') {
    return value.replace(/\{(\w+)\}/g, (whole, key) =>
      tokens[key] === undefined ? whole : tokens[key]
    )
  }
  if (Array.isArray(value)) return value.map((v) => fill(v, tokens))
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fill(v, tokens)]))
  }
  return value
}

// Digits only, and a leading 0 becomes 44 — so 07700 900123 and +44 7700 900123
// both end up as a wa.me link that actually opens.
function waNumber(raw) {
  const digits = String(raw).replace(/\D/g, '')
  if (!digits) return ''
  if (digits.startsWith('44')) return digits
  if (digits.startsWith('0')) return '44' + digits.slice(1)
  return digits
}

function fromUrl(base) {
  if (typeof window === 'undefined')
    return fill(base, { name: base.name, NAME: base.name.toUpperCase(), town: base.town })

  const q = new URLSearchParams(window.location.search)
  const name = (q.get('name') || base.name).trim()
  const town = (q.get('town') || '').trim()
  const phone = (q.get('phone') || '').trim()
  const wa = waNumber(q.get('wa') || '')

  // {name} keeps the shop's own capitalisation for sentences ("The Kebab King
  // Original"); {NAME} is the shouted version for the ticker. The wordmark is
  // uppercased by CSS either way.
  const biz = fill(base, { name, NAME: name.toUpperCase(), town })

  biz.name = name
  biz.town = town
  biz.seo.initial = biz.name.slice(0, 1).toUpperCase()
  biz.seo.locality = town

  if (town) {
    biz.address = town
    biz.locationLine = town
    biz.copy.footerLine = `${town} · Kebabs, burgers, the lot`
  }
  if (phone) {
    biz.phone = phone
    biz.phoneHref = `tel:${phone.replace(/\s/g, '')}`
  }
  biz.whatsapp = wa

  // The tab and the share card should say the shop's name too — the head tags
  // were baked at build time from the generic config, so patch them here.
  document.title = `${biz.name} — Kebabs & Burgers${town ? `, ${town}` : ''}`

  return biz
}

export const BIZ = fromUrl(BASE)
