import { SaleUseContext } from "../context/SaleContext"

export default function Header() {

    const {total} = SaleUseContext();

    return(
    <>
        <nav className="navbar navbar-expand-md navbar-info bg-info ps-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src="https://mammamiapizzeria.es/wp-content/uploads/2015/09/Logo_MammaMia-pizza-big.png" alt="Logo" width="60" height="60" className="d-inline-block align-text-top"/>
                Mamma Mia!
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                { total != 0 ?(
                <a href="/saleDetail" className="text-decoration-none text-dark">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item"><img src="https://cdn1.iconfinder.com/data/icons/logistics-service/512/pizza_service-512.png" alt="carro de compra" width="40px" className="me-3"/></li>
                        <li className="nav-item pe-5"> ${total}</li>
                    </ul>
                </a>
                ) :
                <ul className="navbar-nav d-flex">
                        <li className="nav-item"><img src="https://cdn1.iconfinder.com/data/icons/logistics-service/512/pizza_service-512.png" alt="carro de compra" width="40px" className="me-3"/></li>
                        <li className="nav-item pe-5"> ${total}</li>
                    </ul>
                }
                </div>
            </div>
        </nav>
    </>
    )
};
