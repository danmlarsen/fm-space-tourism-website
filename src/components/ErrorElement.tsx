import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError();

  return (
    <section className="container mx-auto grid max-w-6xl place-items-center gap-300 px-300 text-white md:py-1600 lg:px-[0]">
      {error ? (
        <>
          <h1 className="text-xl">Error</h1>
          <p>{error.message}</p>
        </>
      ) : (
        <h1 className="text-xl">404 Page Not Found</h1>
      )}
    </section>
  );
}
