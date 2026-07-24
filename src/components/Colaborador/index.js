import "./Colaborador.css"

const Colaborador = ({ id, nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    const defaultAvatar = '/imgs/avatar.jpg'

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = defaultAvatar;
    }

    return (
        <div className="colaborador">
            {aoDeletar && (
                <button 
                    className="deletar" 
                    onClick={() => aoDeletar(id)}
                    aria-label={`Deletar ${nome}`}
                    title="Deletar colaborador"
                >
                    &times;
                </button>
            )}
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img 
                    src={imagem || defaultAvatar} 
                    alt={nome} 
                    onError={handleImageError}
                />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador