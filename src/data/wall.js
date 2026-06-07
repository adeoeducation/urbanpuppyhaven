// Pawparazzi Wall — user-submitted style.
// Photos are real Unsplash editorial portraits, captions stay fictional
// until real submissions roll in.

const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const wall = [
  { handle: '@bruno.king',        caption: 'Block party fit. He knew.',         image: u('1599692392256-2d084495fe15'), span: 'tall' },
  { handle: '@miss.miso',         caption: 'Soft life ambassador.',              image: u('1583160247711-2191776b4b91'), span: 'wide' },
  { handle: '@theo.thefrenchie',  caption: 'Studio session, take one.',          image: u('1587402092301-725e37c70fd8'), span: 'square' },
  { handle: '@cocoa.couture',     caption: 'Brownstone steps. Camera ready.',    image: u('1562176566-73c303ac1617'),    span: 'tall' },
  { handle: '@onyx.officiall',    caption: 'Tunnel walk vibes only.',            image: u('1546238232-20216dec9f72'),    span: 'square' },
  { handle: '@pearl.paws',        caption: 'Pearls before walks.',               image: u('1558236714-d1a6333fce68'),    span: 'wide' },
  { handle: '@sir.biscuit',       caption: 'Sunday flex. Cottage edition.',      image: u('1729251524660-d62a34a92685'), span: 'square' },
  { handle: '@luna.thecalico',    caption: 'She does not chase. She attracts.',  image: u('1447684808650-354ae64db5b8'), span: 'tall' }
]
