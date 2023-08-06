//src/componentes/Rodape/index.js

import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/PedroZef" target='blank'>🐱</a>
                </li>
                <li>
                    <a href="facebook.com/pedrozeferinodasilva" target="blank">
                        <img src="./imgs/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/pedrozeferinodasilva" target="blank">🎥</a>
                </li>
                <li>
                    <a href="twitter.com/pedrozeferino" target="blank">
                        <img src="/imgs/tw.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/pedro-zeferino-da-silva" target="blank">🔗</a>
                </li>

            </ul>
        </section>
        <section>
            <img src="/imgs/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura  &copy; Pedro Zeferino Da Silva.
            </p>
        </section>
    </footer>)
}

export default Rodape