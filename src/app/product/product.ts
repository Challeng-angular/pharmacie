export class Product {
    id: number;
    name: string;
    description: string;
    imagesUrl: Array<string>;
    isDiscount: boolean;
    discountPercentage: number;
    price: number;
    note: number;


  constructor(
    id: number,
    name: string,
    description: string,
    discountPercentage: number,
    price: number,
    note: number,
    imagesUrl: string[] = ["../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane2.jpg",
      "../../assets/images/dolipranex3/doliprane3.jpg"
    ],

  )
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagesUrl = imagesUrl;
    this.isDiscount = false;
    this.discountPercentage = discountPercentage;
    this.price = price;
    this.note = note;

}

}
