import FotoPerfil from '../Images/image-profile.jpg'
import styles from './Inicio.module.css'

export default function Inicio(){
    return(
        <div className={styles.inicio}>
            <div className={styles.partecentral}>
        <img src={FotoPerfil} alt="Foto De Perfil" className={styles.fotoPerfil} />
        <h1 className={styles.nickolas}>Nickolas.Amaral</h1>
        <h2 className={styles.web}>Web.Developer</h2>
        <p className={styles.idade}>- 20 ANOS</p>
        <p className={styles.brasil}>- BRASIL, PORTO ALEGRE</p>
        </div>
        <div className={styles.paragrafos}>
        <div className={styles.paragrafo}>
        <p>"Com o auxílio da tecnologia pretendo trazer
        facilidades na vida das pessoas.
        Sou um apaixonado por esse mundo e estou
         em constante aprendizado!"
        </p>
        </div>
        <div className={styles.paragrafo2}>
            <p>"Aquilo que se faz por amor está sempre além do bem e do mal."</p>
            </div>
            <div className={styles.paragrafo3}>
                <p>"Espero acrescentar muito ainda no universo de tecnologia e estou caminhando nessa direção!"</p>
            </div>
            </div>
            </div>
        
        
        )
    }