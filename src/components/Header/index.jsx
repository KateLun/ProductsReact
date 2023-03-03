const Header = () => {
    return (
        <header className="bg-indigo-800 py-8 text-white text-md font-semibold flex sm:px-20 sm:text-xl justify-between">
            <div className="max-w-screen-lg flex justify-between mx-auto px-10">
                <nav className="flex gap-8 justify-center items-center">
                    <div>Список продуктов</div>
                    <div>Контакты</div>
                    <div>Отзывы</div>
                </nav>
            </div>
    </header>
    )
}

export default Header