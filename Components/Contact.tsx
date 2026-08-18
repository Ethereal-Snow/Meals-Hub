export default function Contact() {
  return (
    <section id="contact" className="bg-hub-tan py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="section-kicker">Get In Touch</span>
          <h2 className="section-heading">Visit or Book a Table</h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-hub-orange/10 p-3 text-hub-orange">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-hub-black">Address</h3>
                <p className="text-hub-charcoal/70">
                  Shop 2, No. 8 Shincho Road, Rayfield, Jos, Plateau State,
                  Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-hub-orange/10 p-3 text-hub-orange">
                📞
              </div>
              <div>
                <h3 className="font-semibold text-hub-black">Phone / WhatsApp</h3>
                <p className="text-hub-charcoal/70">0704 462 0378</p>
                <p className="text-hub-charcoal/70">+234 704 462 0378</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-hub-orange/10 p-3 text-hub-orange">
                🕒
              </div>
              <div>
                <h3 className="font-semibold text-hub-black">Hours</h3>
                <p className="text-hub-charcoal/70">Open Daily &middot; 9:00 AM – 10:00 PM</p>
              </div>
            </div>

            <a href="tel:+2347044620378" className="btn-primary mt-4 !bg-hub-black">
              Call to Book a Table
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-warm">
            <iframe
              title="Meals Hub location"
              src="https://www.google.com/maps?q=8+Shincho+Road,+Rayfield,+Jos,+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
