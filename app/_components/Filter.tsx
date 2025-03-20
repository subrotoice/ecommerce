"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between my-8">
      {/* LEFT */}
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          onChange={handleFilterChange}
          className="bg-[#EBEDED] text-sm font-medium py-2 pl-2 rounded-full w-25"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          onChange={handleFilterChange}
          className="ring-1 ring-gray-400 outline-gray-500 pl-2 rounded-full w-24"
          placeholder="min price"
        />
        <input
          type="text"
          name="max"
          onChange={handleFilterChange}
          className="border border-gray-300 outline-gray-400 pl-2 rounded-full w-24"
          placeholder="max price"
        />
        <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
      </div>
      {/* RIGHT */}
      <div className="">
        <select
          name="sort"
          onChange={handleFilterChange}
          className="outline-gray-300 border border-gray-200 p-2 rounded-full w-44"
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
