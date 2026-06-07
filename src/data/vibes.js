const u = (id, w = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const vibes = [
  {
    id: 'mogul',
    name: 'The Mogul',
    line: 'Pinstripe coats and pearl collars for the boardroom-coded.',
    image: u('1509005084666-3cbc75184cbb'),
    tone: 'ink'
  },
  {
    id: 'boombox',
    name: 'Boombox Block',
    line: '90s color-block puffers, track sets, fat-laced harnesses.',
    image: u('1594592237655-9f7e51330b93'),
    tone: 'terracotta'
  },
  {
    id: 'softlife',
    name: 'Soft Life',
    line: 'Cashmere-blend knits and cream sherpa for the perpetually held.',
    image: u('1582456891925-a53965520520'),
    tone: 'vellum'
  },
  {
    id: 'courtside',
    name: 'Court Side',
    line: 'Varsity, mesh, satin bombers — pure tunnel-walk swagger.',
    image: u('1586671267731-da2cf3ceeb80'),
    tone: 'gold'
  },
  {
    id: 'paparazzi',
    name: 'Paparazzi',
    line: 'Black leather, oversized shades, slick rainwear for the chased.',
    image: u('1629740067905-bd3f515aa739'),
    tone: 'ink'
  },
  {
    id: 'heir',
    name: 'Cottage Heir',
    line: 'Quilted Barbour-style jackets and tartan for the country estate set.',
    image: u('1532753876631-2d5cf129df39'),
    tone: 'sage'
  }
]
