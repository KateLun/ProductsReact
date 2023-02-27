function Button(props) {

    const { title, changeCount } = props
    
    return (
        <button onClick={changeCount} className="mx-10 border border-solid border-color-white rounded-lg text-xl text-white px-4 py-2 shadow-md font-semibold">
            {title}
        </button>
    )
}

export default Button