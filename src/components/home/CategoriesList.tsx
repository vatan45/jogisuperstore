import Categories from '../../lib/data/categories.json';
import CategoryCard from './categoryCard';

const CategoriesList = () => (
  <section className="my-4">
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
      {Categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  </section>
);

export default CategoriesList;