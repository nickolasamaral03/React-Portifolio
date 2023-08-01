import styles from './Projetos.module.css'
import robotrom from '../Images/projeto-robotrom.png'
import mochila from '../Images/projeto-mochila.png'
import tempo from '../Images/projeto-weather.png'
import inter from '../Images/projeto-inter.png'

export default function Projetos(){
    return(
        <div className={styles.todo}>
            <h1 className={styles.tit}>Principais Projetos:</h1>
            <a href="https://github.com/nickolasamaral03" className={styles.github} target='blank'>(PERFIL GITHUB)</a>
        <div className={styles.todosprojetos}>
        <div className={styles.robotrom}>
        <img src={robotrom} alt="imagem do Robotrom" className={styles.robotrom1}/>
        <button className={styles.botao}><a href="https://nickolasamaral03.github.io/Robotrom2000/" className={styles.site} target='blank'>Site</a></button>
        <button className={styles.botao}><a href="https://github.com/nickolasamaral03/Robotrom2000" className={styles.git} target='blank'>GitHub</a></button>
        </div>
        <div className={styles.mochila1}>
        <img src={mochila} alt="imagem mochila" className={styles.mochila} />
        <button className={styles.botao}><a href="https://mochila-viagem-iopa.vercel.app/"  className={styles.site} target='blank'>Site</a></button>
        <button className={styles.botao}><a href="https://github.com/nickolasamaral03/MochilaViagem" className={styles.git} target='blank'>GitHub</a></button>
        </div>
        <div className={styles.weather}>
            <img src={tempo} alt="imagem tempo" className={styles.weather1} />
            <button className={styles.botao}><a href="https://64944cc10559fb2ab707f052--venerable-malabi-e7c789.netlify.app/" className={styles.site} target='blank'>Site</a></button>
            <button className={styles.botao}><a href="https://github.com/nickolasamaral03/App-Weather" className={styles.git} target='blank'>GitHub</a></button>
        </div>
        <div className={styles.inter}>
            <img src={inter} alt="imagem inter" className={styles.inter1} />
            <button className={styles.botao}><a href="https://nickolasamaral03.github.io/Internacional/" className={styles.site} target='blank'>Site</a></button>
            <button className={styles.botao}><a href="https://github.com/nickolasamaral03/Internacional" className={styles.git} target='blank'>GitHub</a></button>
        </div>
        </div>
        </div>
    )
}