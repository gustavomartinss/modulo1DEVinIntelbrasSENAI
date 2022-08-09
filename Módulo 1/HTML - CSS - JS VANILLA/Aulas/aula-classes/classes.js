class Tarefa {
  id;
  #titulo;
  estaFeita;
  dataCriacao;
  descricao;
  listaResponsaveis;

  constructor(tituloObjeto, descrObjeto = "Sem descrição") {
    console.log("Tarefa criada! Valores:", tituloObjeto, descrObjeto);
    this.listaResponsaveis = [];
    this.#titulo = tituloObjeto;
    this.descricao = descrObjeto;
    this.dataCriacao = new Date();
    this.estaFeita = false;
    this.id = this.geraId();
  }

  setTitulo(titulo) {
    this.#titulo = titulo;
  }

  #geraId () {
   return Math.floor(Math.random() * 10000);
  }

  #validaTexto(texto) {
    if (texto) {
      return texto;
    }else {
      return "Valor não informado";
    }
  }
}

const tarefaOldSchool = new Tarefa();
tarefaOldSchool.setTitulo("Ser um DEV mais feliz");
tarefaOldSchool.descricao = "Parar de criar objetos assim";
tarefaOldSchool.dataCriacao = new Date(); 
tarefaOldSchool.estaFeita = true;

const listaTarefas = [];

const ulTarefas = document.getElementById("lista");

function renderizar() {
  ulTarefas.innerHTML = null; 
  listaTarefas.forEach((tarefa) => {
    const itemLista = document.createElement("li"); 
    itemLista.innerHTML = `
      <h2>${tarefa.titulo}</h2>
      <span>${tarefa.descricao}</span> - <span>${Intl.DateTimeFormat('pt-BR').format(tarefa.dataCriacao)}</span>
    `;
    ulTarefas.appendChild(itemLista); 
  });
}

renderizar();


const tituloEl = document.getElementById("titulo");
const descricaoEl = document.getElementById("descricao");
const botaoEl = document.querySelector("input[type='button']");


botaoEl.addEventListener("click", () => {
  const tarefa = new Tarefa(tituloEl.value, descricaoEl.value);
  listaTarefas.push(tarefa);
  renderizar();
});

