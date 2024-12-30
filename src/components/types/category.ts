export interface Category {
    id: string;
    title: string;
    coverFile: string;
  }
  
  // data/categories.ts
  export const categories: Category[] = [
    {
      id: "fruits-veg",
      title: "Fruits & Vegetables",
      coverFile: "fruits-veg.png"
    },
    {
      id: "dairy",
      title: "Dairy & Breakfast",
      coverFile: "dairy.png"
    },
    {
      id: "snacks",
      title: "Snacks & Beverages",
      coverFile: "snacks.png"
    }
    // Add more categories as needed
  ];