type AppProps = {
  type?: string;
  curPage: number;
  numPages: number;
  selectFn: (id: number) => void;
};

export default function Pagination({
  type = "small",
  curPage,
  numPages,
  selectFn,
}: AppProps) {
  return (
    <div
      className={`flex gap-200 ${type === "large" ? "lg:flex-col lg:gap-400" : "lg:gap-500"}`}
    >
      {type === "small" &&
        Array.from({ length: numPages }, (_, index) => index).map((page) => (
          <button
            className={`size-[10px] rounded-full transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-300 lg:size-[15px] ${page === curPage ? "bg-white" : "bg-white/20 hover:bg-white/50"}`}
            onClick={() => selectFn(page)}
            key={page}
          ></button>
        ))}

      {type === "large" &&
        Array.from({ length: numPages }, (_, index) => index).map((page) => (
          <button
            className={`size-[56px] rounded-full border text-base transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-300 md:text-md lg:size-1000 ${page === curPage ? "border-white bg-white text-blue-900" : "border-white/25 hover:border-white/50"}`}
            onClick={() => selectFn(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}
    </div>
  );
}
