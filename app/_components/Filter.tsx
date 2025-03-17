const Filter = () => {
  return (
    <div className="flex justify-between my-8">
      {/* LEFT */}
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="bg-[#EBEDED] text-sm font-medium py-2 pl-2 rounded-full w-25"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          className="ring-1 ring-gray-400 outline-gray-500 pl-2 rounded-full w-24"
          placeholder="min price"
        />
        <input
          type="text"
          name="max"
          className="border border-gray-300 outline-gray-400 pl-2 rounded-full w-24"
          placeholder="max price"
        />
        <select name="" id="" className="bg-gray-100 p-2 rounded-full w-20">
          <option value="">Color</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <select name="" id="" className="bg-gray-100 p-2 rounded-full w-28">
          <option value="">Category</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <select name="" id="" className="bg-gray-100 p-2 rounded-full w-28">
          <option value="">All Filters</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
      </div>
      {/* RIGHT */}
      <div className="">
        <select
          name=""
          id=""
          className="outline-gray-300 border border-gray-200 p-2 rounded-full w-35"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
