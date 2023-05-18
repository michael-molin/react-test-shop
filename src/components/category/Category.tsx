import styles from './Category.module.scss'


type Props = {
    title: string,
    image: string,
    handlerClick: Function
}

function Category({title, image, handlerClick} : Props)
{
    return (
        <button onClick={() => handlerClick(title)} className={styles.category} style={{backgroundImage:`url(${image})`}}>
            {title}
        </button>
    )
}

export default Category;