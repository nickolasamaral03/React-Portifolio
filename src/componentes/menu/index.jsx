import { Link } from "react-router-dom"
import styles from './Menu.module.css' 

export default function Menu(){
    return(
        <div className={styles.header}>
        <Link to={'/'}>
        <h1 className={styles.nickolas}>NICKOLAS AMARAL</h1>
        </Link>
        <div className={styles.transicao}>
            <Link to={'/sobremim'}  className={styles.elementos}>Sobre</Link>
            <Link to={'/projetos'} className={styles.elementos}>Projetos</Link>
            <Link to={'/contato'} className={styles.elementos}>Contatos</Link>
        </div>
        </div>

    )
}
