export class Product {
    id: number;
    name: string;
    note: number;
    description: string;
  picture1: string;
  picture2: string;
  picture3: string;
  
  constructor(
    id: number,
    name: string = "Entrer un nom... ",
    note: number = 0,
    description: string = "",
    picture1: string = "../../assets/images/doliprane1.jpg",
    picture2: string = "../../assets/images/doliprane2.jpg",
    picture3: string = "../../assets/images/doliprane3.jpg",
     
) {
    this.id = id;
    this.name = name;
    this.note = note;
    this.description = description;
    this.picture1 = picture1;
    this.picture2 = picture2;
    this.picture3 = picture3;
    
}

}
