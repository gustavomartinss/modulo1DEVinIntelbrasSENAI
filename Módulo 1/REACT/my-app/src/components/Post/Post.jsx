import './post.css'

export const Post = ({titulo = 'Sem título', link, descricao, handleClick}) => {
    return (
        <div className='main'>
            <h2>{titulo}</h2>
            <img width={600} src={link} alt="Img de capa do post" />
            <p>{descricao}</p>
            <button onClick={handleClick}>Botão</button>
        </div>
    )
}