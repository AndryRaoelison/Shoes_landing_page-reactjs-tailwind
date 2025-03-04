import CustomerCard from "../components/CustomerCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-bold font-palanquin text-5xl max-md:text-4xl ">
        What our <span className="text-coral-red"> Customers</span> say ?
      </h3>
      <p className="mt-4 info-text text-center max-w-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, totam
        quae iure voluptatibus unde dolorum nemo excepturi tempora
      </p>
      <div className="flex max-md:flex-col justify-evenly mt-12 gap-8 ">
        {reviews.map((review) => (
          <CustomerCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
