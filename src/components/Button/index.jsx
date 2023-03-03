function Button({ title, handleClick, type }) {

    return (
        <button type={type} onClick={event => handleClick(event)} className="mx-10 border border-solid border-color-white rounded-lg text-xl text-white px-4 py-2 shadow-md font-semibold bg-indigo-800">
            {title}
        </button>
    )
}

export default Button