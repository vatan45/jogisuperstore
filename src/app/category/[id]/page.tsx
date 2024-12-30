import { categories } from '@/data/categories';

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find(c => c.id === params.id);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category.title}</h1>
      {/* Add products list component here */}
    </div>
  );
}