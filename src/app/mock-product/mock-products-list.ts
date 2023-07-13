import {Product} from "./product"


export const PRODUCTS: Product[] = [
  {id: 1,
    name: "Doliprane",
    description: "Ce médicament est un antalgique et un antipyrétique qui contient du paracétamol. Il est utilisé pour faire baisser la fièvre et dans le traitement des affections douloureuses. ",
    imagesUrl: ["../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane2.jpg",
      "../../assets/images/dolipranex3/doliprane3.jpg"],
    isDiscount: true,
    discountPercentage: 10,
    price: 12,
    stars: [1,2,3,4,5],
    rating: 3
    
  },

  {id: 2,
    name: "Nurofen",
    description: "blabla",
    imagesUrl: ["../../assets/images/nurofenx3/nurofen1.jpg",
      "../../assets/images/nurofenx3/nurofen1.jpg",
      "../../assets/images/nurofenx3/nurofen1.jpg"],
      isDiscount: false,
      discountPercentage: 10,
      price: 12,
      stars: [1,2,3,4,5],
      rating: 5
     
  },

  {
    id: 3,
    name: "Ibuprofen",
    description: "blabla",
    imagesUrl: ["../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane1.jpg"],
      isDiscount: false,
      discountPercentage: 10,
      price: 12,
      stars: [1,2,3,4,5],
      rating: 4
  },


  {
    id: 3,
    name: "Spedifen",
    description: "blabla",
    imagesUrl: ["../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane1.jpg"],
      isDiscount: true,
      discountPercentage: 20,
      price: 12,
      stars: [1,2,3,4,5],
      rating: 1
      
  },


  {
    id: 4,
    name: "Dafalgan",
    description: "blabla",
    imagesUrl: ["../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane1.jpg",
      "../../assets/images/dolipranex3/doliprane1.jpg"],
      isDiscount: false,
      discountPercentage: 10,
      price: 12,
      stars: [1,2,3,4,5],
      rating: 3
      
  }
]
