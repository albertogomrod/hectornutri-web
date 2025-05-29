import Link from "next/link";
import { FOOTER_CONTENT } from "@/constants/footer";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 px-6 xl:px-0">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">
                {FOOTER_CONTENT.brand.name}
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              {FOOTER_CONTENT.brand.description}
            </p>
          </div>

          <div>
            <h6 className="font-semibold text-white">
              {FOOTER_CONTENT.navigation.title}
            </h6>
            <ul className="mt-6 space-y-4">
              {FOOTER_CONTENT.navigation.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-white">
              {FOOTER_CONTENT.legal.title}
            </h6>
            <ul className="mt-6 space-y-4">
              {FOOTER_CONTENT.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800" />

        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <span className="text-gray-400">
            &copy; {new Date().getFullYear()} {FOOTER_CONTENT.copyright.company}{" "}
            {FOOTER_CONTENT.copyright.rights} {FOOTER_CONTENT.copyright.author}
          </span>
        </div>
      </div>
    </footer>
  );
}
