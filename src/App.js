import './App.css';
import imgIntroducao from './assets/download.jpg';
import imgCarreira from './assets/img2.webp';

function App() {
  return (
    <div className="App">
      <div id="#topo"></div>
      <header className="App-header">
        <a href='#topo'>DEV</a>
        <ol class="nav-list">
          <li><a href="#introducao">Introdução</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#carreira">Oportunidades de carreira</a></li>
          <li><a href="#ferramentas">Ferramentas</a></li>
        </ol>
      </header>
      <section class="introducao" id='#introducao'>
      <article class="text-introducao">
        <h1>O que faz um DEV:</h1>
        <p class="text">
        A pessoa programadora, também chamada de desenvolvedor (dev), escreve e testa códigos (comandos) que permitem que aplicativos, sites e programas de computador funcionem. Sim, se hoje em dia você faz pagamentos pelo aplicativo de seu banco ou pede comida por aplicativos é graças aos códigos escritos pelos programadores.
        </p>
      </article>
        <article class="img-introducao">
          <img src={imgIntroducao} width="100%"/>
        </article>
      </section>
      <section class="habilidades" id="#habilidades">
      <article class="habilidadesOne">
        <h1>Habilidades de um DEV no dia a dia:</h1>
        <ol>
          <li>Escrever e Revisar Código</li>
          <li>Reuniões e Colaboração</li>
          <li>Documentação</li>
          <li>Resolução de Problemas e Suporte</li>
        </ol>
      </article>
      <article class="habilidadesTwo">
        <h1>O que é necessário estudar para ser desenvolvedor de jogos:</h1>
        <ol>
          <li>Linguagens de programação</li>
          <li>Desenvolvimento de Software</li>
          <li>Trabalho em Equipe</li>
        </ol>
      </article>
      </section>
      <section class="carreira" id='#carreira'>
        <article class="img-carreira">
          <img src={imgCarreira} width="100%"/>
        </article>
      <article class="text-carreira">
        <h1>Oportunidades de carreira:</h1>
        <ol>
          <li>Github</li>
          <li>Linkedin</li>
          <li>Freelancer</li>
          <li>Empresas Pequenas</li>
          <li>Empresas Internacionais</li>
        </ol>
      </article>
      </section>
      <section class="ferramentas" id="#ferramentas">
      <article class="ferramentasOne">
        <h1>Ferramentas:</h1>
      </article>
      <article class="ferramentasTwo">
        <ol>
          <li>Visual Studio Code</li>
          <li>GIT</li>
          <li>Jira</li>
          <li>Docker</li>
          <li>MySQL</li>
          <li>Microsoft Teams</li>
          <li class="ultimo">...</li>
        </ol>
      </article>
      </section>
    </div>
  );
}

export default App;
