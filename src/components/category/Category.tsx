type Props = {
    title: string,
    image: string,
    handlerClick: Function
}

function Category({title, image, handlerClick} : Props)
{
    return (
        <button onClick={() => handlerClick(title)} className="category-selector" style={{backgroundImage:`url(${image})`}}>
            {title}
        </button>
    )
}

export default Category;