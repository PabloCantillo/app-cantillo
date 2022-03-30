import Item from "./Item"

const ItemList = (props) => {
    return (
        <div>
            {props.productos.map((productosInicial, index) => {
                return <Item key={productosInicial.id} productosInicial={productosInicial} />
            })}
        </div>
    )
}

export default ItemList;
