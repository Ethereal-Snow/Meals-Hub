"use client";

import { useState } from "react";
import { menu } from "@/data/menu";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const activeCategory = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="bg-hub-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="section-kicker">What We Serve</span>
          <h2 className="section-heading text-white">Our Menu</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            A taste of everything we love to cook — pick a category to see
            what&rsquo;s on offer today.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {menu.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === category.id
                  ? "bg-hub-orange text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {activeCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-4 rounded-2xl bg-hub-charcoal p-5"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="rounded-full bg-hub-orange/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-hub-orange-light">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-white/60">
                  {item.description}
                </p>
              </div>
              <span className="whitespace-nowrap font-display text-lg font-bold text-hub-orange-light">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
