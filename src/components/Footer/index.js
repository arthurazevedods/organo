import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='redes'>
                <img src='./imagens/fb.png' alt='facebook'></img>
                <img src='./imagens/ig.png' alt='instagram'></img>
                <img src='./imagens/tw.png' alt='twitter'></img>
            </div>
            <div className='logo'>
                <img src='./imagens/logo.png' alt='logo'></img>
            </div>
                
            <div className='desenvolvido'>
                <span>Desenvolvido por Arthur</span>
                <span>Curso da Alura</span>
            </div>
        </section>
    )
}

export default Footer