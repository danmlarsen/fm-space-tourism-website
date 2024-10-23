import ExploreButton from "../components/ExploreButton";

export default function Home() {
  return (
    <section className="grid-row-[auto_1fr] p-300 container grid max-w-6xl">
      <div className="space-y-300 text-center">
        <span className="text-sm uppercase text-blue-300">
          So, you want to travel to
        </span>
        <h1 className="font-serif text-3xl uppercase">Space</h1>
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
