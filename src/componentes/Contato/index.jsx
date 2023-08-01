import styles from './Contato.module.css'
import linkedin from '../Images/linkedin.png'
import gmail from '../Images/gmail.png'
import github from '../Images/github.png'
import curriculo from '../Curriculo/NICKOLAS AMARAL.docx'
import {Link} from 'react-router-dom'

export default function Contato(){
    return (
        <div className={styles.todo}>
        <h1 className={styles.contato}>Entre em contato:</h1>
        <div className={styles.contatos}>
            <div className={styles.divlinkedin}>
         <img src={linkedin} alt="" className={styles.linkedin} /> <button><a href="https://www.linkedin.com/in/nickolas-amaral-688984248/" target='blank' className={styles.botao}>Linkedin</a></button>
         </div>
         <div className={styles.divgit}>
            <img src={github} alt="" className={styles.linkedin} /><button><a href="https://github.com/nickolasamaral03" target='blank' className={styles.botao}>GitHub</a></button>
            </div>
            <div className={styles.divemail}>
            <img src={gmail} alt="" className={styles.linkedin} /><button><a href="https://mail.google.com/mail/u/0/?to=nickolas.amaral08@gmail.com&fs=1&tf=cm" target='blank' className={styles.botao}>Email</a></button>
            </div>
        </div>
        <div className={styles.curriculo}>
            <button className={styles.btncur}><Link to={curriculo} target='blank' className={styles.curriculo}>Baixe o Curriculo</Link></button>
        </div>
        </div>
    )
}