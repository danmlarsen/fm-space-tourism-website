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
    <div className="gap-200 flex">
      {type === "small" &&
        Array.from({ length: numPages }, (_, index) => index).map((page) => (
          <button
            className={`size-[10px] rounded-full transition duration-300 ${page === curPage ? "bg-white" : "bg-white/20 hover:bg-white/50"}`}
            onClick={() => selectFn(page)}
            key={page}
          ></button>
        ))}

      {type === "large" &&
        Array.from({ length: numPages }, (_, index) => index).map((page) => (
          <button
            className={`size-[56px] rounded-full border transition duration-300 ${page === curPage ? "border-white bg-white text-black" : "border-white/25 hover:border-white/50"}`}
            onClick={() => selectFn(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}
    </div>
  );
}
