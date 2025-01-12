import { useState } from "react";
import ProductCard from "../components/ProductCard";

const SearchPage = () => {
  const [search, setsearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setmaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setpage] = useState(1);

  const addTocartHandler = () => {};

  const isPrevpage = true;
  const isNextPage = true;

  return (
    <div className="product-search-page">
      <aside>
        <div>
          <h2>Filters</h2>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price(Low to High)</option>
            <option value="dsc">price(High to Low)</option>
          </select>
        </div>

        <div>
          <h2>Max Price : {maxPrice || ""}</h2>
          <input
            type="range"
            max={100000}
            min={100}
            value={maxPrice}
            onChange={(e) => setmaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h2>Category</h2>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="camera">Camera</option>
            <option value="laptop">Laptop</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search By Name...."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            name="macbook"
            photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
            productId="aaaaa"
            price={900}
            stock={99}
            handler={addTocartHandler}
          />
        </div>
        <article>
          <button disabled={!isPrevpage} onClick={() => setpage((prev) => prev - 1)}>
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button disabled={!isNextPage} onClick={() => setpage((prev) => prev + 1)}>
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default SearchPage;
