import { CategoriesList, FeaturedPromo, HighlightedPromo, ItemsCarousel, ProductsRow } from '../components/home';
import Misc from '../lib/data/layout.json';

const Home = () => {
  // Check if Misc is an array and filter based on the type
  const productItems: any[] = Array.isArray(Misc)
    ? Misc.filter((item) => item.type === 77).map((el) => ({
        data: el.data,
        objects: el.objects,
      }))
    : [];

  // Return a message if no product items are found
  if (productItems.length === 0) {
    return <div>No products available at the moment.</div>;
  }

  return (
    <div className="_container">
    <FeaturedPromo />
      <CategoriesList />
      <ItemsCarousel />
      
      {/* Render ProductsRow for each filtered item */}
      {productItems.map((products, i) => (
        <ProductsRow key={i} {...products} />
      ))}
    </div>
  );
};

export default Home;
