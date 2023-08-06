//src/componentes/Rodape/index.js

import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imgs/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imgs/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imgs/instagram.png" alt="" />
                    </a>
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