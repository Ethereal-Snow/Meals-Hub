export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-end sm:items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:pb-0">
        <span className="section-kicker text-hub-orange-light">
          Meals&rsquo; Hub &middot; Rayfield, Jos
        </span>
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
          Serving Happiness on Every Plate
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
          Hearty, home-style Nigerian dishes made fresh daily — dine in,
          order for pickup, or book a table for your next get-together.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#menu" className="btn-primary">
            View Menu
          </a>
          <a href="#contact" className="btn-secondary">
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}
