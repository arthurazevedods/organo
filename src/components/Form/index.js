import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import CustomButton from '../CustomButton'
import { useState } from 'react'


const Form = ({ aoCadastrar, times, aoCriarTime }) => {
    //hooks
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
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
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}

                />
                <Dropdown
                    obrigatorio={true}
                    label='Time'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <CustomButton>
                    Criar Card
                </CustomButton>
            </form>
            <form className='formulario' onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <TextField
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do Time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <TextField
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <CustomButton>
                    Criar um novo time
                </CustomButton>
            </form>
        </section>
    )
}

export default Form