import Product from "../layouts/Products";
import Container from "../layouts/Container";

const Home = () =>{
    return(
        <div className="home container-fluid p-0">
            <div class="col-12 p-20">
                <Product/>
            </div>
            <div>
                <Container/>
            </div>
        </div>
        
    );
}
export default Home;