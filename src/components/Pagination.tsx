import { useEffect, useMemo, useState } from "react";

export type Props = {
  dataCount?: number;
  onPageChange?: (pageNum: number) => void;
  perPage?: number;
  page?: number;
};

export const Pagination = ({
  dataCount = 0,
  perPage = 20,
  page = 1,
  onPageChange = () => {},
}: Props) => {
  const [activePage, setActivePage] = useState(page);
  const paginationsNum = useMemo(
    () => Math.ceil(dataCount / perPage),
    [dataCount, perPage]
  );

  const changePage = (pageNum: number) => {
    setActivePage(pageNum);
    onPageChange(pageNum);
  };

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  if (paginationsNum < 2) {
    return null;
  }

  const getPaginationRange = () => {
    const maxVisiblePages = 5;
    let pages = [];

    if (paginationsNum <= maxVisiblePages) {
      pages = Array.from({ length: paginationsNum }, (_, i) => i + 1);
    } else {
      const left = Math.max(activePage - 2, 1);
      const right = Math.min(activePage + 2, paginationsNum);

      if (left > 1) pages.push(1);
      if (left > 2) pages.push("...");

      for (let i = left; i <= right; i++) {
        pages.push(i);
      }

      if (right < paginationsNum - 1) pages.push("...");
      if (right < paginationsNum) pages.push(paginationsNum);
    }

    return pages;
  };

  const formatPageNumber = (pageNum: number): string => {
    return pageNum < 10 ? `0${pageNum}` : `${pageNum}`;
  };

  return (
    <div className="flex items-center gap-2 bg-transparent w-max">
      {getPaginationRange().map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={idx}
            onClick={() => changePage(page)}
            disabled={activePage === page}
            className={`w-[65px] h-[65px] flex items-center justify-center transition-colors bg-[url('/pagintion-button-bg.png')] bg-no-repeat bg-contain  ${
              activePage === page
                ? "text-[#17ccc6] opacity-100"
                : "text-[#468093] opacity-50"
            }`}
          >
            <p className=" text-[19px] font-normal font-['Keania One']">
              {formatPageNumber(page)}
            </p>
          </button>
        ) : (
          <span key={idx} className="text-gray-600 text-sm font-medium px-2">
            {page}
          </span>
        )
      )}
    </div>
  );
};
