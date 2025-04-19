import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Nav,
} from "./sections";

const App = () => (
  <main className="relative ">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero />
    </section>
    <section className="padding ">
      <PopularProducts />
    </section>
    <section className="padding ">
      <SuperQuality />
    </section>
    <section className="py-20 padding-x">
      <Services />
    </section>
    <section className="py-10 padding-x">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding ">
      <CustomerReviews />
    </section>
    <section className="padding-x md:py-20 py-10 ">
      <Subscribe />
    </section>
    <section className="padding-x bg-black pb-8 padding-t ">
      <Footer />
    </section>
  </main>
);

export default App;
