export class Product {
    id: number;
    name: string;
    starsArray: Array<number>;
    description: string;
    imagesUrl: Array<string>;
    hasDiscount: boolean;
    discountPercentage: number;
    price: number;
    rating: number;
    discountPrice: number;

  constructor(
    id: number,
    name: string = "Entrer un nom... ",
    starsArray: number[] = [1, 2, 3,4 , 5],
    description: string = "blabla",
    imagesUrl: string[] = ["../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane2.jpg",
      "../../assets/images/dolipranex3/doliprane3.jpg"
    ],
    hasDiscount: false,
    discountPercentage: number,
    price: number,
    rating: number,
    discountPrice: number,
  )
  {
    this.id = id;
    this.name = name;
    this.starsArray = starsArray;
    this.description = description;
    this.imagesUrl = imagesUrl;
    this.hasDiscount = hasDiscount;
    this.discountPercentage = discountPercentage;
    this.price = price;
    this.rating = rating;
    this.discountPrice = discountPrice;
}

}
