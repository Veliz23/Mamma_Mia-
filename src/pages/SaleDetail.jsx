import { useEffect } from "react";
import { SaleUseContext } from "../context/SaleContext";

export default function SaleDetail() {

    const {total, agregarProduct, eliminarProduct} = SaleUseContext();
    const data = JSON.parse(localStorage.getItem("product"));

    const handleMas = (id) => {
        const newProduct = {
            id: id,
            amount: 1,
        }
        agregarProduct(newProduct);
    }

    const handleMenos = (id) => {
        const newProduct = {
            id: id,
            amount: -1,
        }
        agregarProduct(newProduct);
    }

    const handleEliminar = (id) => {
        eliminarProduct(id);
    }

    useEffect(() => {

    },[total])


    return(
        <>
        <div className="container m-5 w-75 h-100 mx-auto border border-1">
            <h5>Detalle del Pedido:</h5>
            <div className="border border-1 m-3">
            <div className="my-3">
                {data.products.map((product) => (
                <div key={product.id} className="d-flex align-content-between justify-content-between m-2 border-bottom">
                    <div> <img src={product.img} alt="imagen pizza" width="30px" className="me-2"/>{product.name}</div>
                    <div>
                        ${product.price}
                        {product.amount <= 1 ?
                        ( <button className="m-1 btn btn-sm btn-outline-danger"  onClick={() => handleEliminar(product.id)}>Eliminar</button> )
                        : ( <button className="m-1 btn btn-sm btn-danger"  onClick={() => handleMenos(product.id)} >-</button>)
                        
                        }
                        {product.amount} <button className="m-1 btn btn-sm btn-primary" onClick={() => handleMas(product.id)}>  +</button> 
                    </div>
                </div>
                ))}
            </div>
            <h5 className="ms-2">Total: $ {total}</h5>
            <button className="ms-2 mb-2 btn btn-sm btn-success">Ir a Pagar</button>
            </div>
        </div>
        </>
    )
};
