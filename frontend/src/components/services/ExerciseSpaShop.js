import { Component } from "react";
import ProductList from "./ProductList";

export default class ExerciseSpaShop extends Component {

    products = [
        { id: 1, name: "Washing body", img: "./assets/imgs/washing.jpg", price: "50.000 VND", discription: "Bathing dogs, cats : Clean your pet's entire body", link: "/washingservice"},
        { id: 2, name: "Cut nails", img: "./assets/imgs/cut_nails.jpg", price: "30.000 VND", discription: "Cut, trim hair and nails for dogs, cats: Trim your pet's nails and hair neatly",link: "/login" },
        { id: 3, name: "Hair dye", img: "./assets/imgs/hair_dye.jpg", price: "100.000 VND", discription: "Dye hair for dogs, cats : Dye your pet's fur in your favorite color" },
        { id: 4, name: "Trim hair", img: "./assets/imgs/trim_hair.jpg", price: "40.000 VND", discription: "Grooming dogs, cats : Pet care, beauty, and relaxation services" },
    ]
    combos = [
        { id: 1, name: "Combo 1: Bathing + Trim nails", img: "./assets/imgs/combo1.jpg", price: "60.000 VND",link: "/booking"},
        { id: 2, name: "Combo 2: Bathing + Dye hair ", img: "./assets/imgs/combo2.jpg", price: "100.000 VND",link: "/booking"},
        { id: 3, name: "Combo 3: Bathing + Grooming", img: "./assets/imgs/combo3.jpg", price: "80.000 VND",link: "/booking"},
        { id: 4, name: "Combo 4: Trim nails + Dye hair ", img: "./assets/imgs/combo4.jpg", price: "110.000 VND",link: "/booking"},
        { id: 5, name: "Combo 5: Bathing + Trim nails + Grooming", img: "./assets/imgs/combo5.jpg", price: "150.000 VND",link: "/booking" },
        { id: 6, name: "Combo 6: Bathing + Trim nails + Dye hair ", img: "./assets/imgs/combo6.jpg", price: "150.000 VND",link: "/booking"}
    ]

    render() {
        return (
            <div className="servicedetail">
                <h2 className="text-center p-4" style={{marginTop: '50px'}}>List Service Spa</h2>
                <div className="container-fluid">
                    <ProductList productData={this.products} />
                </div>
                <h2 className="text-center p-4" >List Combo Spa</h2>
                <div className="container-fluid">
                    <ProductList productData={this.combos} />
                </div>
            </div>
        );
    }
}