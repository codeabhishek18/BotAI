import hamburgerstyles from './Hamburger.module.css'

const Hamburger = () =>
{
    return(
        <div className={hamburgerstyles.container}>
            <div className={hamburgerstyles.row}></div>
            <div className={hamburgerstyles.row}></div>
            <div className={hamburgerstyles.row}></div>
        </div>
    )
}

export default Hamburger