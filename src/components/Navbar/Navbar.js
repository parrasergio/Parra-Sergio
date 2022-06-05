import CartWidgets from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav style={{ display: 'flex'}}>
            <h1> Electronica Filo</h1>
            <div>
                <button>Procesadores</button>
                <button>Coolers</button>
                <button>Gabinetes</button>
            </div>
                <CartWidgets />
        </nav>
    )
}

export default NavBar

