import Button from "components/Button";
import { useState } from "react";

const ProductForm = ({ addProduct }) => {

const sections = ['рыбный', 'молочный', 'мясной', 'кондитерский', 'овощи и фрукты', 'бакалейный', 'хлебный', 'напитки']

const [ name, setName ] = useState('')
const [ amount, setAmount ] = useState('')
const [ price, setPrice ] = useState('')
const [ section, setSection ] = useState(sections[1])

const handleClick = event => {
    event.preventDefault() //остановит действие по умолчанию - страница не будет сама обновляться(напр, когда используем форму и кнопку с типом submit)
    const product = {
        name,
        amount,
        price,
        section
    }
    addProduct(product)
    setName('')
    setAmount('')
    setPrice('')
    setSection(sections[1])
}

    return (
        <form>
            <div className="max-w-sm mx-10 my-10 gap-y-4 flex flex-col ">
                <h2 className="font-bold text-xl">Добавить новый продукт</h2>

                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Название</label>
                        <input 
                            onChange={(event) => setName(event.target.value)}
                            value={name} 
                            name="name" 
                            type="text" 
                            className="col-span-2 border border-solid border-gray-400 rounded" 
                        />
                </div>

                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Кол-во</label>
                    <input 
                        onChange={(event) => setAmount(event.target.value)}
                        value={amount} 
                        name="amount" 
                        type="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded" 
                    />
                </div>

                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Цена</label>
                    <input 
                        onChange={(event) => setPrice(event.target.value)}
                        value={price} 
                        name="price" 
                        type="text" 
                        className="col-span-2 border border-solid border-gray-400 rounded" 
                    />
                </div>

                <div className="grid grid-cols-3 gap-y-4">
                    <label className="col-span-1">Отдел</label>
                    <select 
                        onChange={(event) => setSection(event.target.value)}
                        value={section} 
                        className="col-span-2 border border-solid border-gray-400 rounded" >
                        {sections.map(section => (
                        <option key={section}>{section}</option>
                        ))}
                    </select>
                </div>

                <Button title="Добавить" handleClick={handleClick} type="submit"/> 

            </div>
        </form>
    )
}

export default ProductForm