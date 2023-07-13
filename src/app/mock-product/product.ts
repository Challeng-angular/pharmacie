export class Product {
    id: number;
    name: string;
    description: string;
    imagesUrl: Array<string>;
    isDiscount: boolean;
    discountPercentage: number;
    price: number;
  stars: Array<number>;
  rating: number;
  
    


  constructor(
    id: number,
    name: string = "Entrer un nom... ",
    description: string = "blabla",
    imagesUrl: string[] = ["../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane2.jpg",
      "../../assets/images/dolipranex3/doliprane3.jpg"
    ],
    isDiscount: false,
    discountPercentage: number,
    price: number,
    stars: number[] = [1, 2, 3, 4, 5],
    rating: number,

  )
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagesUrl = imagesUrl;
    this.isDiscount = isDiscount;
    this.discountPercentage = discountPercentage;
    this.price = price;
    this.stars = stars;
    this.rating = rating;

}

}
