import { Link } from 'react-router-dom'
import { TourCard } from '../components/TourCard'
import { tours } from '../data/tours'
import { locations } from '../data/locations'
import { images } from '../data/images'
import { CATEGORY_LABELS, type TourCategory } from '../types'

const featuredCategories: { category: TourCategory; icon: string; blurb: string }[] = [
  {
    category: 'destinations',
    icon: '🏔️',
    blurb: 'Manali, Parvati, Spiti, Dalhousie & hidden valleys',
  },
  {
    category: 'trekking',
    icon: '🥾',
    blurb: 'Triund, Kareri, Indrahar, Churdhar & Moral Danda',
  },
  {
    category: 'paragliding',
    icon: '🪂',
    blurb: 'Tandem flights & stays at Bir Billing',
  },
  {
    category: 'spiti-riding',
    icon: '🏍️',
    blurb: 'Motorcycle & 4x4 through remote Spiti',
  },
  {
    category: 'apple-tours',
    icon: '🍎',
    blurb: 'Kotgarh, Ratnari & Narkanda orchards',
  },
  {
    category: 'devotional',
    icon: '🛕',
    blurb: 'Kangra Shakti circuit incl. Baglamukhi',
  },
]

const featuredTours = tours.filter((t) =>
  ['spiti-kaza', 'kasol-tosh-malana', 'bir-tandem', 'trek-triund', 'kangra-devotional', 'sach-pass'].includes(
    t.id
  )
)

const homeLocations = locations.filter((l) =>
  [
    'manali',
    'kasol',
    'kaza',
    'chandratal',
    'bir',
    'mcleodganj',
    'baglamukhi',
    'sach-pass',
  ].includes(l.slug)
)

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images.hero}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-peak-900/92 via-peak-800/80 to-peak-900/60" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rust-300">
            Himachal Pradesh · Est. 2015
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
            Solo trails & group journeys across the{' '}
            <span className="text-rust-300">Himalaya</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Yak Moves is a Shimla-based travel company crafting guided and self-guided tours from
            Manali and Kasol to Spiti&apos;s Kaza, Chandratal&apos;s moon lake, Bir&apos;s skies, and
            Kangra&apos;s temples — including Baglamukhi, Chamunda, and the full devotional circuit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/tours"
              className="rounded-xl bg-rust-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-rust-600"
            >
              View all tours
            </Link>
            <Link
              to="/locations"
              className="rounded-xl border-2 border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Explore locations
            </Link>
          </div>
          <div className="mt-12 grid gap-4 text-sm text-white/75 sm:grid-cols-3">
            <div className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <strong className="block text-white">Solo & group</strong>
              Fixed departures or private itineraries
            </div>
            <div className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <strong className="block text-white">Guided & independent</strong>
              Local experts when you want them
            </div>
            <div className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <strong className="block text-white">Secure booking</strong>
              Razorpay payments & instant confirmation
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-peak-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-peak-900">
              Who we are
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-peak-800/85">
              Yak Moves started with a simple idea: Himachal deserves better than rushed bus tours.
              We design slow, respectful journeys — whether you&apos;re a solo backpacker in Tosh,
              a group on a Spiti monastery loop, or a family on the Kangra devotional yatra with
              darshan at Baglamukhi and Brajeshwari.
            </p>
            <p className="mt-4 leading-relaxed text-peak-800/75">
              Our trip leaders come from the valleys we visit. They know which pass is open, when
              Malana expects quiet, and where the apple harvest peaks in Ratnari. That local
              knowledge keeps you safe above 4,000 metres and connected to the culture below.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-rust-600 hover:text-rust-700"
            >
              Plan a custom trip →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src={images.spiti}
              alt="Spiti Valley landscape"
              className="col-span-2 aspect-[16/9] rounded-2xl object-cover shadow-lg"
            />
            <img
              src={images.bir}
              alt="Paragliding at Bir Billing"
              className="aspect-square rounded-2xl object-cover shadow-md"
            />
            <img
              src={images.baglamukhi}
              alt="Himachal temple architecture"
              className="aspect-square rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Regions we cover */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-peak-900">Regions we cover</h2>
          <p className="mt-3 max-w-3xl text-peak-800/75">
            Six distinct Himalayan zones — each with its own season, altitude, and character. We
            operate year-round where roads allow, with peak seasons tailored to apples, snow, or
            high passes.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Kullu & Parvati',
                places: 'Manali, Kasol, Tosh, Malana',
                season: 'Mar – Nov',
              },
              {
                title: 'Lahaul & Spiti',
                places: 'Sissu, Udaipur, Kaza, Chandratal, Sach Pass',
                season: 'Jun – Sep',
              },
              {
                title: 'Shimla Hills',
                places: 'Narkanda, Ratnari, Kotgarh, Padhri Jot',
                season: 'Year-round · apples Sep–Oct',
              },
              {
                title: 'Kangra & Dhauladhar',
                places: 'Dharamshala, McLeod Ganj, Bir, temples',
                season: 'Mar – Nov',
              },
              {
                title: 'Chamba',
                places: 'Dalhousie, Padhri Jot, Sach Pass routes',
                season: 'Apr – Oct',
              },
              {
                title: 'Sacred Kangra',
                places: 'Baglamukhi, Brajeshwari, Chamunda, Jwala, Chintapurni',
                season: 'Year-round',
              },
            ].map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-peak-100 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-peak-900">{r.title}</h3>
                <p className="mt-2 text-sm text-peak-700">{r.places}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-rust-600">
                  Best: {r.season}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured locations */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-peak-900">Featured locations</h2>
            <p className="mt-2 max-w-xl text-peak-800/70">
              Discover where we travel — from Parvati villages to Spiti&apos;s cold desert and
              Baglamukhi&apos;s sacred grounds.
            </p>
          </div>
          <Link
            to="/locations"
            className="font-semibold text-rust-600 hover:text-rust-700"
          >
            All {locations.length} locations →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeLocations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-peak-900/90 via-peak-900/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p className="text-xs text-rust-200">{loc.region}</p>
                <h3 className="font-display text-lg font-bold text-white">{loc.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiences */}
      <section className="border-y border-peak-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-peak-900">Tour experiences</h2>
          <p className="mt-2 text-peak-800/70">Trekking, flying, riding, orchards & pilgrimage</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map(({ category, icon, blurb }) => (
              <Link
                key={category}
                to={`/tours/${category}`}
                className="flex flex-col rounded-2xl border border-peak-100 bg-cream-50 p-5 transition hover:border-rust-200 hover:shadow-md"
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-peak-900">
                  {CATEGORY_LABELS[category]}
                </h3>
                <p className="mt-2 flex-1 text-sm text-peak-800/70">{blurb}</p>
                <p className="mt-4 text-sm font-semibold text-rust-600">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular tours */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold text-peak-900">Popular tours</h2>
              <p className="mt-2 text-peak-800/70">
                Spiti expeditions, Parvati circuits, Bir flights & Kangra yatra — book online
              </p>
            </div>
            <Link
              to="/tours"
              className="hidden text-sm font-semibold text-rust-600 hover:text-rust-700 sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-peak-800 text-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Why travellers choose Yak Moves</h2>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: 'Valley-born guides',
                    text: 'Trip leaders from Kullu, Kangra, Lahaul & Spiti — not fly-in operators.',
                  },
                  {
                    title: 'Small groups',
                    text: 'Maximum 14 on group departures; solo travellers get private or join-in options.',
                  },
                  {
                    title: 'Ethical visits',
                    text: 'Respectful Malana protocols, temple timing on yatras, leave-no-trace camping at Chandratal.',
                  },
                  {
                    title: 'End-to-end support',
                    text: 'Permits, acclimatisation plans, backup vehicles on Sach Pass & Spiti rides.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rust-500 text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <strong className="block">{item.title}</strong>
                      <span className="text-sm text-white/75">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="min-h-[280px] bg-cover bg-center lg:min-h-full"
              style={{ backgroundImage: `url('${images.chandratal}')` }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-rust-200 bg-rust-50 px-8 py-10 text-center sm:px-12">
          <h2 className="font-display text-2xl font-bold text-peak-900">
            Ready for the mountains?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-peak-800/75">
            Browse tours by activity or pick a location — from Tosh treks to Baglamukhi darshan and
            Sach Pass convoys.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/tours"
              className="rounded-xl bg-peak-700 px-6 py-3 font-semibold text-white hover:bg-peak-800"
            >
              Book a tour
            </Link>
            <Link
              to="/locations"
              className="rounded-xl border border-peak-300 bg-white px-6 py-3 font-semibold text-peak-800 hover:bg-cream-50"
            >
              See all locations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
