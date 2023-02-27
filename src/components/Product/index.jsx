const Product = (props) => {
    const { product, deleteProduct, changeButton } = props

    return (
        <div className="bg-indigo-200 m-10 py-4 px-6 flex justify-between rounded-md">
            <div className="flex flex-col items-start justify-center">
                <p className="text-2xl font-bold">{product.name}</p>
                <p className="text-indigo-800 font-semibold">{product.amount} - {product.price}</p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <button className="rounded-xl w-40 px-4 py-2 shadow-md bg-indigo-300 hover:bg-green-400 cursor-pointer" onClick={() => changeButton(product.id)}>{product.isAdded ? "Добавлено!" : "Добавить"}</button>
                <button className="rounded-xl w-40 px-4 py-2 shadow-md bg-indigo-300 hover:bg-red-400 cursor-pointer" onClick={() => deleteProduct(product.id)}>Удалить</button>
            </div>
           
        </div>
    )
}

export default Product