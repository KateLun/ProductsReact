import Header from "components/Header";
import { useState } from "react";
import Product from "components/Product";
import Footer from "components/Footer";

function App() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Молоко",
            amount: "1 литр",
            price: "110 руб.",
            isAdded: false
        },
        {
            id: 2,
            name: "Хлеб",
            amount: "1 шт.",
            price: "45 руб.",
            isAdded: false
        },
        {
            id: 3,
            name: "Шоколад",
            amount: "1 шт./90 гр.",
            price: "120 руб.",
            isAdded: false
        },
        {
            id: 4,
            name: "Яйца",
            amount: "1 дес.",
            price: "100 руб.",
            isAdded: false
        },
        {
            id: 5,
            name: "Рис", 
            amount: "1 п./900 гр.",
            price: "89 руб.",
            isAdded: false
        },
        {
            id: 6,
            name: "Яблоки",
            amount: "1 кг.",
            price: "170 руб.",
            isAdded: false
        }
    ]) 

    const deleteProduct = (id) => {
        const filteredProducts = products.filter(product => product.id !== id) //новый массив без того продукта, на который пользователь нажал "удалить"
        setProducts(filteredProducts) //обновляем данные на странице
    }

    const changeButton = (id) => {
        let productsJSON = JSON.parse(JSON.stringify(products))
        const changedProducts = productsJSON.find(product => product.id === id)
        if (changedProducts.isAdded === true) {
            changedProducts.isAdded = false
        } else {
            changedProducts.isAdded = true
        }
        setProducts(productsJSON)
    }

    return (
        <div>
            <Header />
            <div className="max-w-screen-lg mx-auto min-h-screen">
                {products.length === 0 && (
                 <div className="mt-20 text-center text-7xl text-gray-400 font-thin">Нет продуктов</div>)
                }

                {products.length > 0 && products.map((product) => {
                return (
                    <Product key={product.id} product={product} deleteProduct={deleteProduct} changeButton={changeButton}/>
                ) 
                })}
            </div>
            <Footer />
        </div>
        );
}

export default App;
