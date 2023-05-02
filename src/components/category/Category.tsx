import style from './Category.module.css';
type Props = {
    title: string,
    image: string,
    handlerClick: Function
}

function Category({title, image, handlerClick} : Props)
{
    return (
        <button onClick={() => handlerClick(title)} className={style.body} style={{backgroundImage:`url(${image})`}}>
            {title}
        </button>
    )
}

export default Category;