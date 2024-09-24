import "./dropdown.css"

const Dropdown = ({ items, label, aoAlterado, obrigatorio = false, valor }) => {
    return (
        <div className='dropdown'>
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
                <option value="" />
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown
