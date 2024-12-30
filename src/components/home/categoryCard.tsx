import { FC } from 'react';
import {Link} from 'react-router-dom';

interface Category {
  id: string;
  title: string;
  coverFile: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => (
  <Link href={`/category/${category.id}`}>
    <div className="h-48 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="p-3 h-full flex flex-col items-center justify-between border rounded-lg">
        <div className="relative w-full h-32 overflow-hidden">
          <img
            src={`/categories/${category.coverFile}`}
            alt={category.title}
            className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
          />
        </div>
        <p className="text-center font-medium text-sm text-gray-700 mt-2 w-full truncate">
          {category.title}
        </p>
      </div>
    </div>
  </Link>
);

export default CategoryCard;