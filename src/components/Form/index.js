import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import CustomButton from '../CustomButton'
import { useState } from 'react'


const Form = (props) => {

    

    //hooks
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar Card.</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o Nome" 
                    valor={nome}
                    aoAlterado={valor =>setNome(valor)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o Cargo" 
                    valor={cargo}
                    aoAlterado={valor =>setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor =>setImagem(valor)}

                />
                <Dropdown 
                    obrigatorio={true}
                    label='Time' 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor =>setTime(valor)}
                />
                <CustomButton>
                    Criar Card
                </CustomButton>
            </form>
        </section>
    )
}

export default Form