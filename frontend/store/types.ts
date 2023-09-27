export interface Billboard {
    id: string;
    title: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboards: Billboard;
};
