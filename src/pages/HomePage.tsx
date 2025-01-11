import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const addTocartHandler: any = () => {};


  return (
    <div className="home">
      <section>
        
      </section>
      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          name="macbook"
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
          productId="aaaaa"
          price={900}
          stock={99}
          handler={addTocartHandler}
        />
      </main>
    </div>
  );
};

export default HomePage;
