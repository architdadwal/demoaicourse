/** Curated Unsplash images for Himachal locations & tours */
const u = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  manali: u('1599661046289-31338432be54'),
  kasol: u('1626621344932-489c525a6f47'),
  tosh: u('1501785886482-3dcea6f7e9d4'),
  malana: u('1469474968028-56623f02e42e'),
  sissu: u('1519681393784-d120267933ba'),
  udaipurLahaul: u('1589308078794-35c41348ec3e'),
  kaza: u('1589308078794-35c41348ec3e', 1200),
  spiti: u('1626621344932-489c525a6f47', 1200),
  chandratal: u('1519681393784-d120267933ba', 1200),
  sachPass: u('1506905925346-21bda4d32df4', 1200),
  narkanda: u('1470071459604-3b5ec3a7fe05'),
  ratnari: u('1566385101042-f4027f88f1cd'),
  padhriJot: u('1469474968028-56623f02e42e'),
  dalhousie: u('1506905925346-21bda4d32df4'),
  mcleodganj: u('1544735710-1dba2a269704'),
  dharamshala: u('1551632817-ffedd16b3402'),
  bir: u('1527004011157-dda4b4d7836b'),
  baglamukhi: u('1609137144811-460711a778e1'),
  kotgarh: u('1566385101042-f4027f88f1cd'),
  brajeshwari: u('1564507592334-c606016e4f8f'),
  chamunda: u('1544735710-1dba2a269704'),
  hero: u('1626621344932-489c525a6f47', 1920),
  trek: u('1551632817-ffedd16b3402'),
  motorcycle: u('1558618666-fcd25c85cd64'),
  apple: u('1566385101042-f4027f88f1cd'),
  temple: u('1609137144811-460711a778e1'),
} as const
