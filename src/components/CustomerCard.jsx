/* eslint-disable react/prop-types */
import { star } from "../assets/icons";

const CustomerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div
      className="flex flex-col gap-2 items-center 
    justify-center shadow-xl p-8 rounded-lg"
    >
      <img
        src={imgURL}
        alt="Customer Shoe"
        className="w-[120px] h-[120px] rounded-full"
      />
      <p className="info-text text-center max-w-sm">{feedback}</p>
      <div className="flex gap-1 m-0">
        <img src={star} alt="star rating" width={24} height={24} />
        <p className="info-text text-sm">({rating})</p>
      </div>
      <h3 className="text-2xl font-bold font-palanquin">{customerName}</h3>
    </div>
  );
};

export default CustomerCard;
