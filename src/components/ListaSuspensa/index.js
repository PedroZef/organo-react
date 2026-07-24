import './ListaSuspensa.css'

const ListaSuspensa = ({ 
    label, 
    itens = [], 
    valor, 
    aoAlterado, 
    obrigatorio = false,
    required = false 
}) => {
    const selectId = label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined
    const isRequired = obrigatorio || required

    return (
        <div className='lista-suspensa'>
            {label && <label htmlFor={selectId}>{label}</label>}
            <select 
                id={selectId}
                onChange={evento => aoAlterado(evento.target.value)} 
                required={isRequired} 
                value={valor}
            >
                <option value="" disabled hidden>Selecione um time...</option>
                {itens.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa