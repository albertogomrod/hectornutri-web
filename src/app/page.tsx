import { Button } from "@/components/ui/button";
import { HOME_CONTENT } from "@/constants/home";
import { CheckCircle, Star } from "lucide-react";

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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {HOME_CONTENT.blog.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_CONTENT.blog.posts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col bg-gray-50 rounded-lg overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-1">
                  <time className="text-sm text-gray-500 mb-2">
                    {post.date}
                  </time>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {post.description}
                  </p>
                  <Button variant="link" asChild className="text-left p-0">
                    <a href={post.slug}>{HOME_CONTENT.blog.readMoreButton}</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild>
              <a href="/blog">{HOME_CONTENT.blog.viewAllButton}</a>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {HOME_CONTENT.specialties.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOME_CONTENT.specialties.items.map((specialty) => (
              <div
                key={specialty.title}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>

                <h3 className="text-xl font-semibold mb-2">
                  {specialty.title}
                </h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {HOME_CONTENT.plans.title}
            </h2>
            <p className="text-lg text-gray-600">
              {HOME_CONTENT.plans.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_CONTENT.plans.items.map((plan) => (
              <div
                key={plan.title}
                className="group relative rounded-xl overflow-hidden"
              >
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <Button>{HOME_CONTENT.plans.ctaButton}</Button>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {plan.title}
                  </h3>
                  <div className="text-xl text-gray-600">{plan.price} €</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {HOME_CONTENT.reviews.title}
          </h2>

          <div className="max-w-8xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">
                {HOME_CONTENT.reviews.googleCard.name}
              </h3>

              <div className="flex items-center gap-1 mb-2">
                <span className="text-base font-bold mr-2">
                  {HOME_CONTENT.reviews.googleCard.rating.toFixed(1)}
                </span>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600">
                {HOME_CONTENT.reviews.googleCard.totalReviews} reseñas en{" "}
                {HOME_CONTENT.reviews.googleCard.platform}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {HOME_CONTENT.reviews.testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />

                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  )}
                </div>

                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
