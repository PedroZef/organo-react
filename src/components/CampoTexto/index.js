import './CampoTexto.css'

const CampoTexto = ({ 
    type = 'text', 
    label, 
    placeholder, 
    valor, 
    aoAlterado, 
    obrigatorio = false 
}) => {
    const placeholderModificada = `${placeholder}...`
    const inputId = label ? `campo-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            {label && <label htmlFor={inputId}>{label}</label>}
            <input 
                id={inputId}
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada} 
            />
        </div>
    )
}

export default CampoTexto

