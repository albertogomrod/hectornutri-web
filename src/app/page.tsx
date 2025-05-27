import { Button } from "@/components/ui/button";
import { HOME_CONTENT } from "@/constants/home";

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative min-h-[60vh] w-full bg-gray-100">
        <div className="w-full px-10 py-20 flex justify-end pr-60">
          {" "}
          <div className="max-w-2xl text-right p-4">
            {" "}
            <h1 className="text-4xl font-bold mb-6 text-right">
              {HOME_CONTENT.hero.title}
            </h1>
            <p className="text-lg mb-8 leading-relaxed text-right">
              {HOME_CONTENT.hero.description}
            </p>
            <div className="flex justify-end">
              <Button asChild>
                <a href="/conoceme">{HOME_CONTENT.hero.ctaButton}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
