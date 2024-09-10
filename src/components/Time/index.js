import Member from '../Member'
import './Time.css'

const Time = (props) => {
    const cssBgColor = { backgroundColor: props.corSecundaria }

    return(
        <section className='time' style={cssBgColor}>
            <h3 style={{borderColor:props.corPrimaria}}>
                {props.nome}
            </h3>
            <Member/>
        </section>
    )
}

export default Time