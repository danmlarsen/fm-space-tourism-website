import { PanInfo } from "framer-motion";

export default function usePan(
  pageNum: number,
  setPageNum: React.Dispatch<React.SetStateAction<number>>,
  maxPageNum: number,
) {
  function onPanEnd(event: PointerEvent, info: PanInfo) {
    if (event.pointerType === "touch" && Math.abs(info.delta.x) > 2) {
      if (pageNum > 0 && info.offset.x > 0) {
        setPageNum((prev) => prev - 1);
      }
      if (pageNum < maxPageNum && info.offset.x < 0) {
        setPageNum((prev) => prev + 1);
      }
    }
  }

  return onPanEnd;
}
