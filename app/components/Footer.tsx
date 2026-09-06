import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="batch-line" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Indian Buildcon"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="text-offwhite font-extrabold tracking-tight">
              INDIAN BUILDCON
            </span>
          </div>
          <p className="text-steel-light text-sm leading-relaxed max-w-xs">
            M25 ready-mix concrete, batched and delivered from our plant on
            NH44, Bari Brahmana.
          </p>
        </div>

        <div>
          <p className="text-offwhite font-bold text-sm mb-4">Quick Links</p>
          <ul className="space-y-2.5">
            {[
              { href: "#why-us", label: "Why Us" },
              { href: "#process", label: "Process" },
              { href: "#reviews", label: "Reviews" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-steel-light hover:text-orange text-sm transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-offwhite font-bold text-sm mb-4">Contact</p>
          <ul className="space-y-2.5 text-steel-light text-sm leading-relaxed">
            <li>
              <a href="tel:09779767675" className="hover:text-orange transition-colors">
                09779767675
              </a>
            </li>
            <li>
              NH44, opposite Ganga filling station, Adda, Bari Brahmana,
              Sarore, Jammu and Kashmir 181133
            </li>
            <li>Open 24 hours, Monday to Sunday</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6">
          <p className="text-steel-light text-xs">
            &copy; {new Date().getFullYear()} Indian Buildcon &mdash; RMC
            Plant. Building a stronger future.
          </p>
        </div>
      </div>
    </footer>
  );
}
