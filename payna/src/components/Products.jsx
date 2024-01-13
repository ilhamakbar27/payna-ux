import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
// import ShowProductById from "./showProductById";
// import Pagination from "./Pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showProducts, setShowProducts] = useState([]);
  const [showcategories, setCategories] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [sort, setSort] = useState("ASC");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const url = "https://phase2-aio.vercel.app";

  const goToPreviousPage = () => {
    const previousPageIndex = currentPage - 1;
    if (previousPageIndex >= 1) {
      setCurrentPage(previousPageIndex);
    }
  };

  const goToNextPage = () => {
    const nextPageIndex = currentPage + 1;
    if (nextPageIndex <= totalPage) {
      setCurrentPage(nextPageIndex);
    }
  };

  async function fetchProducts() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products?q=${search}&i=${filter}&limit=10&page=${currentPage}&sort=${sort}`
      );
      setShowProducts(data.data.query);
      setTotalPage(data.data.pagination.totalPage);
      // setCurrentPage(data.data.pagination.currentPage);
      console.log(data.data.query);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/categories`
      );
      setCategories(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSort = (e) => {
    return setSort(e.target.value);
  };

  const handleFilter = (e) => {
    return setFilter(e.target.value);
  };
  useEffect(() => {
    console.log("ini proses mounted, hanya dijalankan 1x di awal");
    fetchProducts();
    fetchCategories();
  }, [currentPage, sort, search, filter]);

  return (
    <>
      <section id="products" className="px-10  gap-5 flex flex-col py-24">
        <h1 className="   font-semibold tracking-[-10px] text-[140px]">
          Products
        </h1>
        <div className="flex justify-between">
          <div className="w-full ">
            <label
              className="my-5  relative bg-white min-w-sm max-w-full flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300"
              htmlFor="search-bar">
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                id="search-bar"
                placeholder="your keyword here"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              />
              <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                <div className="relative">
                  <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                    <svg
                      className="opacity-0 animate-spin w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>

                  <div className="flex items-center transition-all opacity-1 valid-">
                    <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                      Search
                    </span>
                  </div>
                </div>
              </button>
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-3">
            <h1 className="uppercase tracking-[8px] font-semibold text-lg">
              filter by
            </h1>
            <select
              onChange={handleFilter}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-black">
              <option disabled selected value="" className="text-gray-500">
                Select an option
              </option>
              {showcategories.map((category) => (
                <>
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="flex justify-center items-center gap-3">
            <h1 className="uppercase tracking-[8px] font-semibold text-lg">
              sort by
            </h1>
            <Button onSort={handleSort} title={"ASC"} />
            <Button onSort={handleSort} title={"DESC"} />
          </div>
        </div>
        <div className=" grid gap-[80px] py-[20px] px-10 max-md:grid-cols-1 grid-cols-4">
          {showProducts.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </section>
      <div className="max-w-screen-xl mx-auto py-5 px-4 pb-14 text-gray-600 md:px-8">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <button
            onClick={goToPreviousPage}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 focus:outline-none">
            Previous
          </button>
          <div>
            Page {currentPage} of {totalPage}
            {/* <p>{updatePages}</p> */}
          </div>
          <button
            onClick={goToNextPage}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 focus:outline-none">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
