// Storyboard chapters — replaces the old accordion concept.
// Read as a magazine: five spreads, each with its own image, eyebrow,
// title, and manifesto line. Numbered like a film.

const u = (id, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const slides = [
  {
    id: 'manifesto',
    chapter: 'I',
    eyebrow: 'Drop 001 — The Manifesto',
    title: 'UPH Custom\nPet T-Shirts',
    body: 'Personalised T-shirts for puppy people. Your dog, your design, your Tee.',
    image: '/images/uph-custom-pet-tshirts.png'
  },
  {
    id: 'varsity',
    chapter: 'II',
    eyebrow: 'Capsule — Varsity Season',
    title: 'Every shirt has a tail to tell',
    body: 'Tailored varsity silhouettes cut for tails and paws. Stadium-coded. Snow-day approved.',
    image: '/images/uph-tail-to-tell.png'
  },
  {
    id: 'frontrow',
    chapter: 'III',
    eyebrow: 'Editorial — The Walk',
    title: 'Front row.\nBack alley.',
    body: 'Pieces built for studio flash and Sunday sidewalks. The same fit travels both.',
    image: u('1583336663277-620dc1996580', 1600)
  },
  {
    id: 'hardware',
    chapter: 'IV',
    eyebrow: 'Hardware — Hand-Finished',
    title: 'Quiet\nhardware.',
    body: 'Hand-finished buckles. Hypoallergenic linings. Zero shrinkage. Forever flex.',
    image: u('1598133894008-61f7fdb8cc3a', 1600)
  },
  {
    id: 'limited',
    chapter: 'V',
    eyebrow: 'Limited — Numbered',
    title: 'Numbered.\nLimited.\nYours.',
    body: 'Each piece carries an edition tag. Once a number is claimed, it is retired from the press.',
    image: u('1599839575945-a9e5af0c3fa5', 1600)
  }
]

// Cinematic hero carousel — full-bleed, auto-rotating, Ken Burns alive.
export const heroSlides = [
  {
    id: 'h1',
    image: u('1583511655826-05700d52f4d9', 2400),
    caption: 'Banana Pajama Set — Studio · Brooklyn',
    sigil: 'I',
    pos: '38% 42%'
  },
  {
    id: 'h2',
    image: u('1583337130417-3346a1be7dee', 2400),
    caption: 'Velvet Letterman — Atelier Floor · 03:14',
    sigil: 'II',
    pos: '50% 44%'
  },
  {
    id: 'h3',
    image: u('1591769225440-811ad7d6eab3', 2400),
    caption: 'Midnight Pup Puffer — Brownstone Steps',
    sigil: 'III',
    pos: '50% 40%'
  },
  {
    id: 'h4',
    image: u('1583336663277-620dc1996580', 2400),
    caption: 'Brownstone Vest — Uptown Walk · Golden Hour',
    sigil: 'IV',
    pos: '50% 42%'
  },
  {
    id: 'h5',
    image: u('1599839575945-a9e5af0c3fa5', 2400),
    caption: 'Mini Mogul Tracksuit — Tunnel · Front Row',
    sigil: 'V',
    pos: '50% 42%'
  }
]

export const heroImage = heroSlides[0].image
export const heroAtmosphere = u('1601662528567-526cd06f6582', 2400)
