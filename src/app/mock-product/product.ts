export class Product {
    id: number;
    name: string;
    star: number;
    description: string;
  pictures: Array<string>;
  promotion: boolean;

  constructor(
    id: number,
    name: string = "Entrer un nom... ",
    star: number = 0,
    description: string = "",
    pictures: string[] = ["../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane2.jpg",
      "../../assets/images/dolipranex3/doliprane3.jpg"
    ],
    promotion: false
  )
  {
    this.id = id;
    this.name = name;
    this.star = star;
    this.description = description;
    this.pictures = pictures;
    this.promotion = promotion
}

}
