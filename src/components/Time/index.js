import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores = [], aoDeletar }) => {
    if (colaboradores.length === 0) return null;

    return (
        <section className='time' style={{ backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => (
                    <Colaborador 
                        key={colaborador.id || colaborador.nome} 
                        id={colaborador.id}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        corDeFundo={corPrimaria}
                        aoDeletar={aoDeletar}
                    />
                ))}
            </div>
        </section>
    );
};

export default Time