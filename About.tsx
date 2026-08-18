export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid items-center gap-10 sm:grid-cols-2">
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-warm">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80')",
              }}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-hub-orange px-6 py-4 text-white shadow-warm sm:block">
            <p className="font-display text-3xl font-bold">5+</p>
            <p className="text-xs uppercase tracking-wide">Years of Flavor</p>
          </div>
        </div>

        <div>
          <span className="section-kicker">Our Story</span>
          <h2 className="section-heading">
            A Kitchen Built on Warmth &amp; Good Food
          </h2>
          <p className="mt-4 text-hub-charcoal/80">
            Meals&rsquo; Hub started with one simple idea: everyone deserves
            a plate that feels like home. Tucked along Shinco Road in
            Rayfield, Jos, our kitchen turns out freshly made Nigerian
            favorites every day — from smoky jollof rice to slow-simmered
            soups — using recipes passed down and perfected over the years.
          </p>
          <p className="mt-4 text-hub-charcoal/80">
            Whether you&rsquo;re stopping by for a quick lunch, ordering
            for the family, or booking a table for a celebration, our goal
            stays the same: serving happiness on every plate.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-hub-tan p-4">
              <p className="font-display text-2xl font-bold text-hub-orange-dark">
                Always
              </p>
              <p className="text-sm text-hub-charcoal/70">Open Daily</p>
            </div>
            <div className="rounded-xl bg-hub-tan p-4">
              <p className="font-display text-2xl font-bold text-hub-orange-dark">
                100%
              </p>
              <p className="text-sm text-hub-charcoal/70">Fresh Ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
