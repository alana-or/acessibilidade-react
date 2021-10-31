export interface IProduct {
    id:number;
    title: string;
    img: string;
    rating:IProductRating;
    priceWithOutDiscount: string;
    price: string;
    installments: number;
    installmentsPrice: string;
}

export interface IProductRating {
    value: number;
    stars: number
};