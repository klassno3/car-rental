import Audi from "./image/Audi.jpg"
import Golf from "./image/Golf.jpg" 
import BMW from "./image/BMW.jpg"
import Toyata from "./image/Toyota.jpg"
import Passat from "./image/Passatc.jpg"
import Benz from "./image/Benz.jpg"
export const Vehicles = {

 "Audi A1 S- Line" : {
    id: 1,  
    model:"Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    ac: "Yes",
    trasmission: "Manual",
    fuel: "Gasoline",
    price: "$45",
    image:<img src={Audi} alt=""/>
  },
  
 "VW Golf 6" : {
   id: 2,
   model:"Golf 6",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    ac: "Yes",
    trasmission: "Manual",
    fuel: "Diesel",
   price: "$37",
    image:<img src={Golf} alt=""/>
  },
 
 "Toyata Camry" : {
   id: 3,  
   model:"Camry",
   mark: "Toyota",
   year: "2006",
   doors: "4/5",
   ac: "Yes",
   trasmission: "Automatic",
   fuel: "Hybrid",
   price: "$30",
   image:<img src={Toyata} alt=""/>
    
  },
 
 "BMW 320 ModernLine" : {
   id: 4, 
   model:"320",
   mark: "BMW",
   year: "2012",
   doors: "4/5",
   ac: "Yes",
   trasmission: "Manual",
   fuel: "Diesel",
   price: "$35",
   image:<img src={BMW} alt=""/>
     
  },
 
 "VW Passat CC" : {
   id: 5, 
   model:"Passat CC",
   mark: "Volkswagen",
   year: "2008",
   doors: "4/5",
   ac: "Yes",
   trasmission: "Automatic",
   fuel: "Gasoline",
   price: "$25",
    image:<img src={Passat} alt=""/>
    
  },
 
 "Mercedes-Benz GLK" : {
   id: 6, 
   model:"Benz GLK",
   mark: "Mercedes",
   year: "2006",
   doors: "4/5",
   ac: "Yes",
   trasmission: "Manual",
   fuel: "Diesel",
   price: "$50",
     image:<img src={Benz} alt=""/>
    
  },
 
  
}
