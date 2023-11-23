import { createContext, useContext, useEffect, useState } from "react";

export const SaleContext = createContext();

export default function SaleContextProvider({children}){
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedTotal = localStorage.getItem("total");
        if (storedTotal) {
            setTotal(parseInt(storedTotal));
        }
    }, []);

    const agregarProduct = (newProduct) => {
        const Data = JSON.parse(localStorage.getItem("product")) || { products: [] };
        const existeProduct = Data.products.findIndex((product) => product.id === newProduct.id);

        if (existeProduct !== -1) {
            Data.products[existeProduct].amount += newProduct.amount;
        } else {
            Data.products.push(newProduct);
        }

        localStorage.setItem("product", JSON.stringify(Data));

        const total = Data.products.reduce((acc, curr) => acc + +curr.price * curr.amount, 0);
        setTotal(total);
        localStorage.setItem("total", total);
    }

    const eliminarProduct = (id) => {
        const data = JSON.parse(localStorage.getItem("product")) || { products: [] };
        const index = data.products.findIndex((product) => product.id === id);

        if (index !== -1) {
            data.products.splice(index, 1);

            localStorage.setItem("product", JSON.stringify(data));

            const total = data.products.reduce((acc, curr) => acc + +curr.price * curr.amount, 0);
            setTotal(total);
            localStorage.setItem("total", total);
        }
    }

    return(
        <SaleContext.Provider value={{total, setTotal, agregarProduct, eliminarProduct}}>
            {children}
        </SaleContext.Provider>
    )
}

export const SaleUseContext = () => useContext(SaleContext); 