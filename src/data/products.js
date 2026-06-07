const u = (id, w = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const products = [
  {
    id: 'midnight-puffer',
    name: 'Midnight Pup Puffer',
    line: 'For pets who walk like they own the block.',
    price: 64,
    tag: '001 / 120',
    badge: 'Drop 001',
    image: u('1593620659530-7f98c53de278'),
    altImage: u('1606391276068-d82696ac76bc')
  },
  {
    id: 'velvet-varsity',
    name: 'Velvet Letterman',
    line: 'Camera-ready. Light as a held breath.',
    price: 58,
    tag: '012 / 080',
    badge: 'Limited',
    image: u('1685967039085-e9aa5b7043a1'),
    altImage: u('1622964430125-f21a872b4586')
  },
  {
    id: 'brownstone-vest',
    name: 'Brownstone Vest',
    line: 'Quiet flex. Loud silhouette.',
    price: 48,
    tag: '003 / 200',
    badge: 'Restock',
    image: u('1597671455179-b2064449599f'),
    altImage: u('1701444850421-375182cebef3')
  },
  {
    id: 'mini-mogul',
    name: 'Mini Mogul Tracksuit',
    line: 'Matching set. Boardroom approved.',
    price: 72,
    tag: '004 / 060',
    badge: 'New',
    image: u('1659122436387-054df5bcf5e4'),
    altImage: u('1594653283108-953a4f93400e')
  }
]
