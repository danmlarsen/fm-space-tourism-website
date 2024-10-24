import ExploreButton from "../components/ExploreButton";

export default function Home() {
  return (
    <section className="px-300 gap-300 container mx-auto grid max-w-6xl lg:grid-cols-2 lg:content-end">
      <div className="space-y-300 container mx-auto max-w-lg text-center lg:text-left">
        <span className="font-condensed text-sm uppercase text-blue-300 md:text-lg">
          So, you want to travel to
        </span>
        <h1 className="font-serif text-3xl uppercase md:text-4xl">Space</h1>
        <p className="text-blue-300">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="grid place-items-center">
        <ExploreButton />
      </div>
    </section>
  );
}
