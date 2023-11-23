import { Link } from "react-router-dom";
import { SaleUseContext } from "../context/SaleContext";

export default function card({pizza}) {
    const {id, img, ingredients, name, price} = pizza;
    const {agregarProduct} = SaleUseContext(); 

    const handleAnadir = (e) => {
        e.preventDefault();
        const newProduct = {
            id: id,
            name: name,
            price: price,
            amount: 1,
            img: img
        }
        agregarProduct(newProduct);
    }
    
    return(
        <div className="card" id="card">
            <img className="card-img-top" src={img} alt={name} width="200px" height="200px"/>
            <div className="card-body">
                <h5 className="card-title text-left text-capitalize">{name}</h5>
                <hr />
                <p className="m-0"><strong>Ingredientes:</strong></p>
                <ul>
                    <li className="puntoPizza">{ingredients[0]}</li>
                    <li className="puntoPizza">{ingredients[1]}</li>
                    <li className="puntoPizza">{ingredients[2]}</li>
                    <li className="puntoPizza">{ingredients[3]}</li>
                    <li className="puntoPizza">{ingredients[4]}</li>
                </ul>
                <hr />
                <h2 className="text-center">${price}</h2>
                <div className="text-center d-flex align-content-between justify-content-between">
                    <Link to={`infoProduct/${id}`} className="btn btn-sm btn-info"><img src="/img/ojos.png" alt="carro de compra" width="25px" className="me-1"/>Mas</Link>
                    <button onClick={handleAnadir} className="btn btn-sm btn-danger"><img src="/img/carro.png" alt="carro de compra" width="15px" className="me-1"/>Añadir</button>
                </div>
            </div>
        </div>
    )
};
