import Button from "../components/button";

const Subscribe = () => {
  return (
    <section
      className=" flex max-container max-lg:flex-col max-lg:gap-5 my-0
       justify-between  items-center  "
      id="contact-us"
    >
      <h2 className="text-3xl md:mx-0 font-bold font-palanquin lg:max-w-md max-md:text-center">
        Subscribe for <span className="text-coral-red"> Updates </span> and
        <span className="text-coral-red"> Newsletter </span>
      </h2>
      <div
        className="flex max-sm:flex-col items-center lg:max-w-[40%] w-[80%] p-1
      sm:border-1 border-slate-gray rounded-full flex-1  justify-end md:mx-0 gap-5"
      >
        <input
          type="email"
          name="subscribe"
          id="subscribe"
          className="input "
          placeholder="shoe@vake.com"
        />
        <div className="flex mx-0 items-center max-sm:w-[100%]">
          <Button label="Subscribe" fullWidth className="" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
