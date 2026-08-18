const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="text-center">
        <span className="section-kicker">A Peek Inside</span>
        <h2 className="section-heading">Gallery</h2>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-2xl bg-cover bg-center shadow-warm transition-transform duration-300 hover:scale-[1.03]"
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
    </section>
  );
}
