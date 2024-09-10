import Member from '../Member'
import './Time.css'

const Time = (props) => {
    const cssBgColor = { backgroundColor: props.corSecundaria }

    return (
        <section className='time' style={cssBgColor}>
            <h3 style={{ borderColor: props.corPrimaria }}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(
                    colaborador => <Member
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                )}
            </div>

        </section>
    )
}

export default Time