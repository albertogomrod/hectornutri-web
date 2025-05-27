import Blog from "./blog/page";
import Conoceme from "./conoceme/page";
import Contacto from "./contacto/page";
import Planes from "./planes/page";

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <Conoceme />
      </section>
      <section>
        <Blog />
      </section>

      <section>
        <Contacto />
      </section>

      <section>
        <Planes />
      </section>
    </div>
  );
}
