import {
  Sparkles,
  Sprout,
  Droplets,
  Flower2,
  Sun,
  Cloud,
  Heart,
  Star,
  ArrowRight,
  Check,
  Smile,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import "./App.css";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
  tilt: string;
};

const features: Feature[] = [
  {
    icon: <Sprout className="h-10 w-10" strokeWidth={2.5} />,
    title: "Plant your habits",
    description:
      "Tell Bloom what you want to nurture. Tiny seeds turn into your daily ritual.",
    bg: "bg-mint",
    tilt: "-rotate-2",
  },
  {
    icon: <Droplets className="h-10 w-10" strokeWidth={2.5} />,
    title: "Water them daily",
    description:
      "Quick check-ins, joyful nudges, zero shame. Momentum, served daily.",
    bg: "bg-sky",
    tilt: "rotate-2",
  },
  {
    icon: <Flower2 className="h-10 w-10" strokeWidth={2.5} />,
    title: "Watch them bloom",
    description:
      "Streaks become gardens. Celebrate tiny progress with confetti & friends.",
    bg: "bg-bubblegum",
    tilt: "-rotate-2",
  },
];

const steps = [
  {
    number: "01",
    title: "Pick a habit",
    body: "Drink water, read 10 pages, stretch — anything that makes you feel good.",
    color: "bg-sunny",
  },
  {
    number: "02",
    title: "Check in each day",
    body: "One tap, one smile. Bloom keeps it light, never naggy.",
    color: "bg-lavender",
  },
  {
    number: "03",
    title: "Grow your streak garden",
    body: "Tiny flowers fill your garden as your streak grows. So satisfying.",
    color: "bg-mint",
  },
];

const testimonials = [
  {
    quote:
      "I finally stuck with meditation for 30 days straight. The little flowers feel like a hug.",
    name: "Maya R.",
    role: "Daily meditator",
    color: "bg-bubblegum",
  },
  {
    quote:
      "It's the only habit app that doesn't feel like a chore. My garden is exploding.",
    name: "Jonas T.",
    role: "Marathon trainee",
    color: "bg-sky",
  },
  {
    quote:
      "Cute, gentle, and effective. Bloom helped me read every day for 3 months.",
    name: "Priya S.",
    role: "Book worm",
    color: "bg-sunny",
  },
];

function CartoonButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-display font-semibold text-base border-3 border-ink rounded-full shadow-cartoon-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-cartoon active:translate-x-1 active:translate-y-1 active:shadow-cartoon-hover";
  const variants = {
    primary: "bg-sunny text-ink",
    secondary: "bg-white text-ink",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b-3 border-ink">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-bubblegum border-3 border-ink shadow-cartoon-sm group-hover:animate-wiggle">
            <Flower2 className="h-5 w-5 text-ink" strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            Bloom
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-display font-medium text-lg">
          <a href="#features" className="hover:text-bubblegum transition-colors">
            Features
          </a>
          <a href="#how" className="hover:text-bubblegum transition-colors">
            How it works
          </a>
          <a href="#love" className="hover:text-bubblegum transition-colors">
            Love
          </a>
        </nav>
        <CartoonButton className="hidden sm:inline-flex">
          Get started
          <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
        </CartoonButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Cloud
        className="absolute top-12 left-8 h-16 w-16 text-white"
        strokeWidth={2.5}
        fill="white"
      />
      <Cloud
        className="absolute top-20 right-24 h-12 w-12 text-white"
        strokeWidth={2.5}
        fill="white"
      />
      <Sun
        className="absolute -top-6 -right-8 h-44 w-44 text-sunny animate-bobbing"
        strokeWidth={2.5}
        fill="#FFD75A"
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white border-3 border-ink rounded-full px-4 py-1.5 shadow-cartoon-sm mb-6">
            <Sparkles className="h-4 w-4 text-bubblegum" strokeWidth={3} />
            <span className="font-display text-sm font-semibold">
              New: shared garden with friends
            </span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Grow good habits,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">one day</span>
              <span className="absolute inset-x-0 bottom-1 h-4 bg-mint -z-0 rounded-full" />
            </span>{" "}
            at a time.
          </h1>

          <p className="mt-6 text-lg sm:text-xl font-body text-ink/80 max-w-lg">
            Bloom is the cheerful habit tracker that turns tiny daily wins into
            a garden you'll actually want to tend. No shame. No streaks-lost
            tears. Just bloom.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CartoonButton className="bg-bubblegum text-white text-lg px-7 py-4">
              Start growing — it's free
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </CartoonButton>
            <CartoonButton variant="secondary" className="text-lg px-7 py-4">
              See how it works
            </CartoonButton>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm font-body text-ink/70">
            <div className="flex -space-x-2">
              {["bg-sunny", "bg-mint", "bg-sky", "bg-bubblegum"].map((c) => (
                <span
                  key={c}
                  className={`w-8 h-8 rounded-full border-3 border-ink ${c}`}
                />
              ))}
            </div>
            <span className="font-display font-semibold">
              12,400+ tiny gardens already growing
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-sunny rounded-blob rotate-3 border-3 border-ink shadow-cartoon-lg" />
          <div className="relative bg-white rounded-blob border-3 border-ink p-8 -rotate-2 shadow-cartoon-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Smile className="h-6 w-6 text-bubblegum" strokeWidth={2.5} />
                <span className="font-display font-bold text-xl">
                  Today's garden
                </span>
              </div>
              <span className="font-display text-sm font-semibold bg-mint border-3 border-ink rounded-full px-3 py-1 shadow-cartoon-sm">
                Day 23 🔥
              </span>
            </div>

            <ul className="space-y-3">
              {[
                { label: "Drink water", color: "bg-sky", done: true },
                { label: "Read 10 pages", color: "bg-lavender", done: true },
                { label: "Stretch 5 min", color: "bg-bubblegum", done: true },
                { label: "Sunset walk", color: "bg-mint", done: false },
              ].map((task) => (
                <li
                  key={task.label}
                  className={`flex items-center gap-3 p-3 rounded-2xl border-3 border-ink ${task.color} ${
                    task.done ? "" : "bg-opacity-40"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-3 border-ink ${
                      task.done ? "bg-white" : "bg-cream"
                    }`}
                  >
                    {task.done ? (
                      <Check className="h-4 w-4 text-ink" strokeWidth={3} />
                    ) : null}
                  </span>
                  <span
                    className={`font-display font-semibold ${
                      task.done ? "" : "opacity-70"
                    }`}
                  >
                    {task.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between bg-cream border-3 border-ink rounded-2xl p-4">
              <span className="font-body font-semibold">Garden growing</span>
              <div className="flex gap-1">
                {["🌱", "🌿", "🌷", "🌸", "🌻"].map((e, i) => (
                  <span
                    key={i}
                    className="text-xl"
                    style={{ animation: `bobbing 3s ease-in-out ${i * 0.2}s infinite` }}
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white border-y-3 border-ink py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-display font-semibold text-sm bg-lavender border-3 border-ink rounded-full px-4 py-1 shadow-cartoon-sm">
            Why Bloom?
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            Tiny habits, big bloom.
          </h2>
          <p className="mt-4 text-lg font-body text-ink/75">
            We built Bloom for the days you feel meh — gentle, joyful, and
            built to keep you going without the pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.bg} ${f.tilt} border-3 border-ink rounded-blob p-7 shadow-cartoon-lg hover:rotate-0 transition-transform duration-300`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl border-3 border-ink shadow-cartoon-sm mb-5">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">
                {f.title}
              </h3>
              <p className="font-body text-base text-ink/80">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-display font-semibold text-sm bg-mint border-3 border-ink rounded-full px-4 py-1 shadow-cartoon-sm">
            How it works
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            Three steps. That's it.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative ${step.color} border-3 border-ink rounded-blob p-7 shadow-cartoon hover:-translate-y-1 transition-transform`}
            >
              <div className="absolute -top-5 -left-5 flex items-center justify-center w-14 h-14 bg-white border-3 border-ink rounded-full font-display font-bold text-xl shadow-cartoon-sm">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-2xl mt-3 mb-2">
                {step.title}
              </h3>
              <p className="font-body text-base text-ink/80">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="love"
      className="bg-lavender border-y-3 border-ink py-20 relative overflow-hidden"
    >
      <Heart
        className="absolute top-8 left-10 h-12 w-12 text-bubblegum opacity-60"
        fill="#FF8FB1"
      />
      <Star
        className="absolute bottom-10 right-12 h-14 w-14 text-sunny opacity-70"
        fill="#FFD75A"
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-display font-semibold text-sm bg-white border-3 border-ink rounded-full px-4 py-1 shadow-cartoon-sm">
            People love Bloom
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            Don't take it from us.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`${t.color} border-3 border-ink rounded-blob p-6 shadow-cartoon ${
                i % 2 === 0 ? "-rotate-2" : "rotate-2"
              } hover:rotate-0 transition-transform`}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-5 w-5 text-ink"
                    fill="#0F172A"
                    strokeWidth={2}
                  />
                ))}
              </div>
              <blockquote className="font-display text-lg font-semibold leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 font-body text-sm">
                <span className="font-bold">{t.name}</span>
                <span className="text-ink/70"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative bg-sunny border-3 border-ink rounded-blob p-10 sm:p-14 shadow-cartoon-lg text-center overflow-hidden">
          <Sparkles
            className="absolute top-6 left-6 h-10 w-10 text-ink"
            strokeWidth={2.5}
          />
          <Sparkles
            className="absolute bottom-6 right-8 h-8 w-8 text-ink"
            strokeWidth={2.5}
          />
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Ready to grow your garden?
          </h2>
          <p className="mt-4 font-body text-lg text-ink/80 max-w-xl mx-auto">
            Free forever for your first three habits. No credit card, no
            tracking creep, just good vibes and tiny wins.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CartoonButton className="bg-bubblegum text-white text-lg px-7 py-4">
              Plant my first habit
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </CartoonButton>
            <CartoonButton variant="secondary" className="text-lg px-7 py-4">
              Read our story
            </CartoonButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t-3 border-ink">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-bubblegum border-3 border-ink shadow-cartoon-sm">
            <Flower2 className="h-5 w-5 text-ink" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold">Bloom</span>
          <span className="font-body text-sm text-ink/60 ml-3">
            © {new Date().getFullYear()} — Made with care.
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            { Icon: Twitter, label: "Twitter" },
            { Icon: Instagram, label: "Instagram" },
            { Icon: Github, label: "GitHub" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="inline-flex items-center justify-center w-11 h-11 bg-cream border-3 border-ink rounded-full shadow-cartoon-sm hover:-translate-y-0.5 hover:shadow-cartoon transition-all"
            >
              <Icon className="h-5 w-5 text-ink" strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen font-body text-ink">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
