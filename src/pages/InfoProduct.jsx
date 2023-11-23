import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { SaleUseContext } from "../context/SaleContext";


export default function InfoProduct() {

const id = useParams();
const [pizzas, setPizzas] = useState(null);
const [loading, setLoading] = useState(true);
const {agregarProduct} = SaleUseContext();

    const getPizza = async () => {
        try {
            const res = await fetch('/pizzas.json');
            const data = await res.json();

            const buscar = data.find(p => p.id === id.id);
            console.log(buscar);
            setPizzas(buscar);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPizza();
    },[])

    const handleAnadir = (e) => {
        e.preventDefault();
        const newProduct = {
            id: pizzas.id,
            name: pizzas.name,
            price: pizzas.price,
            amount: 1,
            img: pizzas.img
        }
        agregarProduct(newProduct);
    }
    
    if (loading) {
        return <p>Loading...</p>;
    }

console.log(pizzas.name);

    return(
        <>
            <div className="card my-5">
            <div className="row">
                <div className="col-md-6">
                <img src={pizzas.img} className="card-img rounded-start my-5" alt="Imagen" width="400" height="400"/>
                </div>
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{pizzas.name}</h5>
                    <hr />
                    <p className="card-text"><small>{pizzas.desc}</small></p>
                    <p className="m-0"><strong>Ingredientes:</strong></p>
                    <ul>
                        <small>
                        <li className="puntoPizza">{pizzas.ingredients[0]}</li>
                        <li className="puntoPizza">{pizzas.ingredients[1]}</li>
                        <li className="puntoPizza">{pizzas.ingredients[2]}</li>
                        <li className="puntoPizza">{pizzas.ingredients[3]}</li>
                        </small>
                    </ul>
                    <div className="d-flex justify-content-between">
                        <h3>${pizzas.price}</h3>
                        <button onClick={handleAnadir} className="btn btn-danger me-3">Añadir <img src="/img/carro.png" alt="carro de compra" width="15px" className="me-1"/> </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
};
