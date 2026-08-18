const socials = [
  { label: "Instagram", href: "https://www.instagram.com/mealshubjos" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "WhatsApp", href: "https://wa.me/2347044620378" },
];

export default function Footer() {
  return (
    <footer className="bg-hub-black py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-xl font-bold text-white">
            Meals&rsquo; Hub
          </p>
          <p className="text-sm text-white/50">
            Serving happiness on every plate.
          </p>
        </div>

        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 hover:text-hub-orange"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Meals&rsquo; Hub. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
