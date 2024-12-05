import Banner from "./sections/Banner";
import Category from "./sections/Category";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Insta from "./sections/Insta";
import ProductsGrid from "./sections/ProductsGrid";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Types from "./sections/Types";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Types />
      <Services />
      <ProductsGrid />
      <Banner />
      <Reviews />
      <Insta />
      <Footer />
    </>
  );
}
