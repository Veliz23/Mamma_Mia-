import { useEffect, useState } from "react";
import Card from "../components/card";
import Slider from "../components/Slider";
import { SaleUseContext } from "../context/SaleContext";

export default function Home() {

    const [pizzas, setPizzas] = useState([]);

    const getPizza = async () => {
        try {
            const res = await fetch('pizzas.json');
            const data = await res.json();

            setPizzas(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPizza();
    },[])

    return(
        <>
            <Slider />
            <div className="container row mt-3">
                {pizzas.map(pizza => (
                    <div key={pizza.id} className="mb-3 d-flex align-content-start flex-wra col-sm-6 col-md-4 col-lg-3">
                        <Card pizza={pizza} />
                    </div>
                ))}
            </div>
        </>
    )
};
