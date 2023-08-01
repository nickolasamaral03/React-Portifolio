import styles from './SobreMim.module.css'
import fotoMinha from '../Images/nickolas-image-new.jpg'
import HTML from '../Images/html-logo.png'
import CSS from '../Images/css-logo.png'
import JavaScript from '../Images/js-logo.png'
import React from '../Images/react-logo.png'



export default function SobreMim(){
    return(
        <div className={styles.todoSobreMim}>
        <div className={styles.flex}>
        <div className={styles.cardSobreMim}>
        <img src={fotoMinha} alt="Minha foto sorrindo " className={styles.fotoNick} />
        </div>
        <div className={styles.Sobreeu}>
        <h1 className={styles.sobremim}>Meu nome é Nickolas e sou desenvolvedor Front-End!</h1>
        <p className={styles.paragrafo}>Olá a todos!!! Sou Nickolas Brum Amaral, tenho 20 anos e o meu primeiro contato com programação começou esse ano, porém lá no início, bem início MESMO, 1 de Janeiro de 2023!</p>
        <p className={styles.paragrafo}>Desde do ano passado, esse profissão já me encantava, a forma de trabalho e o próprio desenvolvimento, no qual pode ajudar muitas pessoas em todo o mundo, com todo o acesso que temos hoje! Com esse pensamento resolvi mergulhar com tudo nessa área e apostar todas as minhas fichas!</p>
        <p className={styles.paragrafo}>Com isso, comecei com aulas no Youtube até começar na Alura e ampliar ainda mais meus conhecimentos, após esse tempo tenho conhecimento em: HTML, CSS, JavaScript, React Js, Git e GitHub</p>
        <p className={styles.paragrafo}>Pretendo continuar mergulhando no Front-End e começar a entender o mundo do Back-End!!!</p>
        </div>
        </div>
        <div className={styles.display}>
            <div className={styles.skills}>
            <h1 >My Skills:</h1>
            <div className={styles.icone}>
            <img src={HTML} alt="logo html" className={styles.html} />
            <img src={CSS} alt="logo CSS" className={styles.html}/>
            <img src={JavaScript} alt="logo JS" className={styles.html}/>
            <img src={React} alt="logo react" className={styles.html}/>

            </div>
            </div>
            <div className={styles.pessoal}>
                <p className={styles.itens}>Idade: 20</p>
                <p className={styles.itens}>Email: nickolas.amaral08@gmail.com</p>
                <p className={styles.itens}>Cidade: Porto Alegre, RS</p>
                <p className={styles.itens}>Freelancer: Disponível</p>
                <p className={styles.itens}>Idiomas: Inglês e Português</p>
                </div>
        </div>
        </div>
        
        
        
        
    )
}