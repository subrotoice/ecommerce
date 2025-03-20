"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handelClick = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between mt-24">
      <button
        disabled={!hasPrev}
        onClick={() => handelClick(currentPage - 1)}
        className="rounded-md bg-redLight text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200 text-center"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => handelClick(currentPage + 1)}
        className="rounded-md bg-redLight text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200 text-center"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
