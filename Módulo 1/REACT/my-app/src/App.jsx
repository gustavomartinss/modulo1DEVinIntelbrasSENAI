import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Botao } from "./components/Botao/Botao";
import { Header } from "./components/Header/Header";

import './App.css'
import { Footer } from './components/Footer/Footer';
import { Post } from './components/Post/Post';

function App() {

  const onClick = ()=> {
    console.log('Clicou!');
  }

  return (
    <div className='container'>
      <Header />

      <Post
        titulo="Matéria do Bilu"
        descricao="Testando as props do react"
        link="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        handleClick={onClick}
      />
      <Post
        titulo="Matéria de Teste"
        descricao="Um exemplo de descrição"
        link="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        handleClick={() => console.log('Arrow')}
      />

      <Footer />
    </div>
  )

}

export default App
