import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { About } from "@/components/sections/About";
import { Research } from "@/components/sections/Research";
import { Development } from "@/components/sections/Development";
import { Contact } from "@/components/sections/Contact";

/**
 * Page unique (one-page). L'ordre des sections suit src/data/site.ts → nav.
 * Structure : sidebar (gauche, fixe en desktop) + contenu scrollable (droite).
 */
export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:flex lg:justify-between lg:gap-8 lg:px-16 xl:px-24">
      <MobileHeader />
      <Sidebar />

      <main id="content" className="pt-16 lg:w-[52%] lg:py-24">
        <About />
        <Research />
        <Development />
        <Contact />
      </main>
    </div>
  );
}
