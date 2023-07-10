export class Product {
    id: number;
    name: string;
    note: number;
    description: string;
  pictures: Array<string>


  constructor(
    id: number,
    name: string = "Entrer un nom... ",
    note: number = 0,
    description: string = "",
    pictures: string[] = ["../../assets/images/doliprane1.jpg","../../assets/images/doliprane2.jpg","../../assets/images/doliprane3.jpg"]


) {
    this.id = id;
    this.name = name;
    this.note = note;
    this.description = description;
    this.pictures = pictures;


}

}
