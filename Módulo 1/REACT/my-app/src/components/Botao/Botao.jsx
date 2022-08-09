export const Botao = () => {

    const handleClick = () => {
        console.log('Clicou');
    }

    return <button onClick={handleClick}>Meu Button</button>
}