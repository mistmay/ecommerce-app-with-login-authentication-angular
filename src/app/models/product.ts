export type Category = "men's clothing" | "jewelery" | "electronics" | "women's clothing" | 'fashion';

interface Rating {
    count: number;
    rate: number;
}

export interface Product {
    category: Category;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
}

export interface ProductTotal {
    category: Category;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
    quantity: number;
    total: number;
}

export type Property = 'category' | 'description' | 'image' | 'title';