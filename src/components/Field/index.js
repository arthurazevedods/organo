import './Field.css'

const Field = ({ type='text' ,label, valor, aoAlterado, obrigatorio=false, placeholder }) =>{
    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }
    
    return(
        <div className={`field field-${type}`}>
            <label>
                {label}
            </label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            >
            </input>
        </div>
    )
}

export default Field