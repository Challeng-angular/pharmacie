export class Product {
    id: number;
    name: string;
    note: number;
    description: string;
  picture: string;
  
  constructor(
    id: number,
    name: string = "Entrer un nom... ",
    note: number = 0,
    description: string = "",
    picture: string = "../../assets/images/doliprane.jpg",
     
) {
    this.id = id;
    this.name = name;
    this.note = note
    this.description = description;
    this.picture = picture;
    
}

}
