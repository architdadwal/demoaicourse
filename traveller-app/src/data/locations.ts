import { images } from './images'
import { tours } from './tours'

export interface Location {
  slug: string
  name: string
  region: string
  altitude?: string
  bestSeason: string
  image: string
  tagline: string
  description: string
  highlights: string[]
  experiences: string[]
}

export const locations: Location[] = [
  {
    slug: 'manali',
    name: 'Manali',
    region: 'Kullu Valley',
    altitude: '~2,050 m',
    bestSeason: 'Mar – Jun, Sep – Nov',
    image: images.manali,
    tagline: 'The gateway to the Kullu Himalaya',
    description:
      'Manali sits where the Beas River meets pine forests and snow peaks. Old Manali’s cafés, Hadimba’s cedar temple, Vashisht hot springs, and day trips to Solang or Rohtang make it the classic Himachal base — perfect for solo wanderers and fixed group departures alike.',
    highlights: ['Old Manali & Mall Road', 'Hadimba & Vashisht', 'Solang Valley adventures'],
    experiences: ['Solo escapes', 'Group getaways', 'Snow & adventure add-ons'],
  },
  {
    slug: 'kasol',
    name: 'Kasol',
    region: 'Parvati Valley',
    altitude: '~1,580 m',
    bestSeason: 'Mar – Jun, Sep – Nov',
    image: images.kasol,
    tagline: 'Riverside base in the Parvati Valley',
    description:
      'Kasol is the heartbeat of Parvati — Israeli cafés, trout streams, and trails leading to Chalal, Rasol, and Kheerganga. Yak Moves uses it as the hub for multi-day circuits linking Tosh and Malana with responsible cultural briefings.',
    highlights: ['Parvati riverside walks', 'Café culture', 'Kheerganga trek access'],
    experiences: ['Parvati circuit tours', 'Backpacker-friendly stays'],
  },
  {
    slug: 'tosh',
    name: 'Tosh',
    region: 'Parvati Valley',
    altitude: '~2,400 m',
    bestSeason: 'Apr – Jun, Sep – Oct',
    image: images.tosh,
    tagline: 'Village terraces and Dhauladhar views',
    description:
      'A steep hike or jeep ride from Barsheni, Tosh clings to the mountainside with guesthouses overlooking the valley. Sunsets here are legendary — we include an overnight so you wake above the clouds before continuing toward Malana or back to Kasol.',
    highlights: ['Ridge sunsets', 'Village homestays', 'Barsheni trailhead'],
    experiences: ['Kasol–Tosh–Malana circuit', 'Photography stops'],
  },
  {
    slug: 'malana',
    name: 'Malana',
    region: 'Parvati Valley',
    altitude: '~2,652 m',
    bestSeason: 'May – Jun, Sep – Oct',
    image: images.malana,
    tagline: 'Ancient village, strict local customs',
    description:
      'Malana is one of the oldest democracies in the world, with unique language and customs. Visits are guided-only with Yak Moves — we respect no-touch rules, photography limits, and village requests while sharing history from a distance that honours the community.',
    highlights: ['Cultural briefing', 'Guided viewpoint visit', 'Ethical tourism'],
    experiences: ['Parvati circuit (guided leg only)'],
  },
  {
    slug: 'sissu',
    name: 'Sissu',
    region: 'Lahaul',
    altitude: '~3,120 m',
    bestSeason: 'Jun – Sep',
    image: images.sissu,
    tagline: 'Waterfalls beyond the Atal Tunnel',
    description:
      'Sissu exploded in popularity after the Atal Tunnel opened Lahaul year-round. Alpine meadows, Bhaga views, and seasonal waterfalls reward travellers acclimatising before deeper Lahaul or Spiti routes.',
    highlights: ['Sissu waterfall', 'Atal Tunnel crossing', 'Lahaul acclimatisation'],
    experiences: ['Sissu & Udaipur Lahaul tour'],
  },
  {
    slug: 'udaipur-lahaul',
    name: 'Udaipur (Lahaul)',
    region: 'Lahaul',
    altitude: '~2,743 m',
    bestSeason: 'Jun – Sep',
    image: images.udaipurLahaul,
    tagline: 'Temples beside the Chandrabhaga',
    description:
      'Not to be confused with Rajasthan’s Udaipur — Lahaul’s Udaipur holds exquisite wooden temples at the confluence of rivers, with stark barren hills rising behind. A spiritual and photographic stop on the road toward Keylong or Spiti.',
    highlights: ['Trilokinath & Marikula temples', 'River confluence', 'Lahaul culture'],
    experiences: ['Lahaul cultural tour', 'En route to Spiti'],
  },
  {
    slug: 'kaza',
    name: 'Kaza',
    region: 'Spiti Valley',
    altitude: '~3,800 m',
    bestSeason: 'Jun – Sep',
    image: images.kaza,
    tagline: 'Capital of the cold desert',
    description:
      'Kaza is Spiti’s administrative and traveller hub — homestays, bakeries, and the starting point for Key, Kibber, Langza, and Hikkim. We plan acclimatisation days here before high passes or Chandratal camps.',
    highlights: ['Key Monastery day trip', 'Kibber & Hikkim', 'Local homestays'],
    experiences: ['Spiti monastery expedition', 'Motorcycle & 4x4 rides'],
  },
  {
    slug: 'spiti-valley',
    name: 'Spiti Valley',
    region: 'Lahaul & Spiti',
    altitude: '3,000 – 4,500 m',
    bestSeason: 'Jun – Sep',
    image: images.spiti,
    tagline: 'Middle land between India and Tibet',
    description:
      'Spiti’s barren moonscapes, thousand-year-old gompas, and villages like Tabo, Dhankar, and Losar feel like another planet. Yak Moves runs guided group tours, remote motorcycle expeditions, and 4x4 convoys with backup support.',
    highlights: ['Tabo & Key monasteries', 'Pin Valley option', 'High-altitude safety'],
    experiences: ['Kaza tours', 'Remote riding', 'Photography expeditions'],
  },
  {
    slug: 'chandratal',
    name: 'Chandratal',
    region: 'Spiti / Lahaul',
    altitude: '~4,300 m',
    bestSeason: 'Jun – Sep',
    image: images.chandratal,
    tagline: 'The Moon Lake',
    description:
      'Chandratal’s crescent turquoise lake sits among meadows at over 4,300 metres. Camping here requires experienced guides, weather windows, and respect for fragile ecology — our teams handle permits, tents, and safe approach routes from Batal or Kunzum side.',
    highlights: ['Lakeside camping', 'Stargazing', 'High-altitude protocols'],
    experiences: ['Chandratal camp tour', 'Spiti ride add-on'],
  },
  {
    slug: 'sach-pass',
    name: 'Sach Pass',
    region: 'Chamba / Pangi',
    altitude: '~4,420 m',
    bestSeason: 'Jul – Sep',
    image: images.sachPass,
    tagline: 'One of India’s wildest road crossings',
    description:
      'Linking Chamba with the Pangi Valley, Sach Pass is raw, remote, and unforgettable. Our convoy expeditions include permit support, backup vehicles, and drivers who know every landslide-prone bend.',
    highlights: ['4,420 m pass crossing', 'Pangi Valley', 'Convoy safety'],
    experiences: ['Sach Pass trail expedition'],
  },
  {
    slug: 'narkanda',
    name: 'Narkanda',
    region: 'Shimla Hills',
    altitude: '~2,708 m',
    bestSeason: 'Year-round; apples Sep – Oct',
    image: images.narkanda,
    tagline: 'Apple ridges and Hatu Peak',
    description:
      'Quieter than Shimla, Narkanda offers Hatu Peak views, ski slopes in winter, and gateway access to apple country at Ratnari. Ideal for mellow hill holidays and orchard-season tours.',
    highlights: ['Hatu Peak', 'Ski season (winter)', 'Apple harvest drives'],
    experiences: ['Narkanda–Ratnari tour', 'Apple trail', 'Moral Danda trek'],
  },
  {
    slug: 'ratnari',
    name: 'Ratnari',
    region: 'Shimla Hills',
    altitude: '~2,400 m',
    bestSeason: 'Sep – Oct (harvest)',
    image: images.ratnari,
    tagline: 'Orchard hamlets above the Sutlej',
    description:
      'Ratnari’s stepped orchards and village homestays let you pick apples, meet growers, and sleep among deodars — a slower Himachal that pairs perfectly with Narkanda and Kotgarh routes.',
    highlights: ['Harvest picking', 'Farm stays', 'Ridge panoramas'],
    experiences: ['Apple orchard tours', 'Narkanda combo packages'],
  },
  {
    slug: 'padhri-jot',
    name: 'Padhri Jot',
    region: 'Chamba',
    altitude: '~2,900 m',
    bestSeason: 'May – Jun, Sep – Oct',
    image: images.padhriJot,
    tagline: 'Rolling meadows off the tourist map',
    description:
      'Padhri Jot (also spelled Padri Jot) offers wide meadows and Dhauladhar panoramas without the crowds of Khajjiar. Meadow camping and sunrise viewpoints make it a favourite short escape from Pathankot or Dalhousie circuits.',
    highlights: ['Meadow camping', 'Panoramic Dhauladhar views', 'Offbeat Chamba'],
    experiences: ['Padhri Jot meadow tour'],
  },
  {
    slug: 'dalhousie',
    name: 'Dalhousie',
    region: 'Chamba',
    altitude: '~1,970 m',
    bestSeason: 'Mar – Jun, Sep – Nov',
    image: images.dalhousie,
    tagline: 'Colonial charm in the Dhauladhar foothills',
    description:
      'Spread across five hills, Dalhousie’s colonial architecture, Kalatop sanctuary, and day trips to Khajjiar’s meadows define a gentler Chamba experience — great for families and first-time Himachal visitors.',
    highlights: ['Khajjiar day trip', 'Panchpula waterfalls', 'Kalatop sanctuary'],
    experiences: ['Colonial hills tour', 'Chamba extensions'],
  },
  {
    slug: 'mcleodganj',
    name: 'McLeod Ganj',
    region: 'Kangra / Dhauladhar',
    altitude: '~2,082 m',
    bestSeason: 'Mar – Jun, Sep – Nov',
    image: images.mcleodganj,
    tagline: 'Little Lhasa under the Dhauladhar',
    description:
      'The Dalai Lama’s residence, Tsuglagkhang temple, Bhagsu waterfall, and Triund trailhead make McLeod Ganj Himachal’s cultural capital. Yak Moves bases treks, Tibetan heritage walks, and Kangra combinations here.',
    highlights: ['Tsuglagkhang complex', 'Bhagsu & Dharamkot', 'Triund trailhead'],
    experiences: ['McLeod & Dharamshala tour', 'Triund trek', 'Devotional circuit start'],
  },
  {
    slug: 'dharamshala',
    name: 'Dharamshala',
    region: 'Kangra',
    altitude: '~1,457 m (lower) – 2,082 m (upper)',
    bestSeason: 'Mar – Jun, Sep – Nov',
    image: images.dharamshala,
    tagline: 'Tea gardens and cricket stadium views',
    description:
      'Lower Dharamshala holds the HPCA stadium, Kotwali bazaar, and tea estates; upper Dharamshala blends into McLeod. Together they offer museums, cricket tourism, and easy access to Kangra’s Shakti peethas.',
    highlights: ['Tea estate visits', 'Kangra Art Museum', 'Stadium & bazaar'],
    experiences: ['Twin-town cultural tour', 'Kangra circuit hub'],
  },
  {
    slug: 'bir',
    name: 'Bir & Billing',
    region: 'Kangra',
    altitude: 'Bir ~1,525 m · Billing ~2,400 m',
    bestSeason: 'Mar – Jun, Sep – Nov',
    image: images.bir,
    tagline: 'Asia’s paragliding capital',
    description:
      'Billing’s launch and Bir’s landing zone create one of the world’s great free-flight sites. Beyond tandem flights, Bir’s Tibetan colony, monasteries, and café scene reward multi-day stays with courses and village walks.',
    highlights: ['Tandem paragliding', 'Tibetan colony', 'Monastery & cafés'],
    experiences: ['Bir Billing flights', 'Paragliding stay packages'],
  },
  {
    slug: 'baglamukhi',
    name: 'Baglamukhi (Bankhandi)',
    region: 'Kangra',
    altitude: '~900 m',
    bestSeason: 'Year-round; Navratri peak',
    image: images.baglamukhi,
    tagline: 'Shakti peetha of victory & protection',
    description:
      'The Baglamukhi temple at Bankhandi near Kangra draws devotees seeking strength and resolution. Yak Moves includes it on the Kangra Devotional Circuit with respectful pacing, darshan timing, and cultural context alongside Brajeshwari, Chamunda, Jwala, and Chintapurni.',
    highlights: ['Shakti peetha darshan', 'Navratri festivals', 'Combined Kangra yatra'],
    experiences: ['Kangra devotional circuit', 'Custom temple tours'],
  },
  {
    slug: 'kotgarh',
    name: 'Kotgarh',
    region: 'Shimla Hills',
    altitude: '~1,800 m',
    bestSeason: 'Sep – Oct (apples)',
    image: images.kotgarh,
    tagline: 'Where Himachal’s apple story began',
    description:
      'Samuel Stokes introduced modern apple cultivation here — orchards, heritage homes, and cider tastings make Kotgarh essential on any apple-country itinerary with Ratnari and Narkanda.',
    highlights: ['Stokes heritage', 'Orchard walks', 'Farm-to-table meals'],
    experiences: ['Kotgarh apple heritage tour'],
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}

export function getToursForLocation(locationSlug: string) {
  const loc = getLocationBySlug(locationSlug)
  if (!loc) return []

  const keywords = [
    loc.name.toLowerCase(),
    locationSlug.replace(/-/g, ' '),
    ...loc.name.split(' ').map((w) => w.toLowerCase()),
  ]

  return tours.filter(
    (t) =>
      keywords.some(
        (k) =>
          t.destination.toLowerCase().includes(k) ||
          t.title.toLowerCase().includes(k) ||
          t.description.toLowerCase().includes(k)
      ) ||
      (locationSlug === 'spiti-valley' && t.destination.toLowerCase().includes('spiti')) ||
      (locationSlug === 'udaipur-lahaul' && t.title.toLowerCase().includes('udaipur')) ||
      (locationSlug === 'baglamukhi' && t.category === 'devotional')
  )
}
