import { Component } from "react";

export default class ProductItem extends Component {
    render() {
        let { item } = this.props;
        return (

            <div className="card" style={{ width: '20rem' }}>
                <img src={item.img} className="imglist card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className='loginContainer'><p className="card-text">{item.price}</p></div>
                    <p className="card-text">{item.discription}</p>
                    <button href="#" className="btnn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Go somewhere
                    </button>
                </div>
            </div>
        );
    }
}