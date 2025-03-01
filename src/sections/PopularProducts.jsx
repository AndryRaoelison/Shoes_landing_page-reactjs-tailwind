import { products } from "../constants";
import ProductCard from "../components/ProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5 ">
        <h2 className="lg:mx-0 text-5xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray lg:mx-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolorum .
        </p>
      </div>
      <div className="mt-4 lg:mx-0 grid lg:grid-cols-4 grid-cols-2  gap-8 ">
        {products.map((product) => (
          <ProductCard key={product.name} name={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
