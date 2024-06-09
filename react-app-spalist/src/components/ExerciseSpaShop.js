import { Component } from "react";
import Model from "./Model";
import ProductList from "./ProductList";

export default class ExerciseSpaShop extends Component {

    products = [
        { id: 1, name: "Washing body", img: "./assets/imgs/washing.jpg", price: "50.000 đồng", discription: "Bathing dogs, cats : Clean your pet's entire body" },
        { id: 2, name: "Cut nails", img: "./assets/imgs/cut_nails.jpg", price: "30.000 đồng", discription: "Cut, trim hair and nails for dogs, cats: Trim your pet's nails and hair neatly" },
        { id: 3, name: "Hair dye", img: "./assets/imgs/hair_dye.jpg", price: "100.000 đồng", discription: "Dye hair for dogs, cats : Dye your pet's fur in your favorite color" },
        { id: 4, name: "Trim hair", img: "./assets/imgs/trim_hair.jpg", price: "40.000 đồng", discription: "Grooming dogs, cats : Pet care, beauty, and relaxation services" },
    ]
    combos = [
        { id: 1, name: "Combo 1: Bathing + Trim nails", img: "./assets/imgs/combo1.jpg", price: "60.000 đồng"},
        { id: 2, name: "Combo 2: Bathing + Dye hair ", img: "./assets/imgs/combo2.jpg", price: "100.000 đồng"},
        { id: 3, name: "Combo 3: Bathing + Grooming", img: "./assets/imgs/combo3.jpg", price: "80.000 đồng"},
        { id: 4, name: "Combo 4: Trim nails + Dye hair ", img: "./assets/imgs/combo4.jpg", price: "110.000 đồng"},
        { id: 4, name: "Combo 5: Bathing + Trim nails + Grooming", img: "./assets/imgs/combo2.jpg", price: "150.000 đồng" },
        { id: 4, name: "Combo 6: Bathing + Trim nails + Dye hair ", img: "./assets/imgs/combo3.jpg", price: "150.000 đồng"}
    ]

    render() {
        return (
            <div>
                <h2 className="text-center mb-5" >List Service Spa</h2>
                <div className="container-fluid">
                    <Model />
                    <ProductList productData={this.products} />
                </div>
                <h2 className="text-center mb-5" >List Combo Spa</h2>
                <div className="container-fluid">
                    <Model />
                    <ProductList productData={this.combos} />
                </div>
            </div>
        );
    }
}