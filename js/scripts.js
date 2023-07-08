btnNew.onclick = () => {
    overlay.classList.add('active');
    formCriar.classList.add('active');
}

overlay.onclick = () => {
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
}

fecharFormCriar.onclick = () => {
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
}

const teams = [
    {
        nome: 'nome 1',
        qtd: 10,
        participantes: ['mateus', 'melissa']
    },
    {
        nome: 'nome 2',
        qtd: 10,
        participantes: ['luis', 'marjorie', 'lorena']
    }
];

function listarTeams(){
    listaDeTeams.innerHTML = '';
    for(let i = 0; i < teams.length; i++){
        listaDeTeams.innerHTML += `
        <li>
            <h5>${teams[i].nome/*propriedade do objeto*/} <box-icon name="show" type="solid"></box-icon></h5>
            <h1>${teams[i].participantes.length}<span>/${teams[i].qtd}</span></h1>
            <div class="acoes">
                <button class="btn mini-title">adicionar</button>
                <button class="btn"><box-icon name="trash-alt" type="solid"></box-icon></button>
            </div>
        </li>
        `
    }
} //declaração da função

listarTeams(); //=> chamada

function adicionarTeams(){
    event.preventDefault(); //para o comportamento padrão
    let team = {
        nome: teamNome.value,
        qtd: teamQtd.value,
        participantes: []
    }
    teams.push(team); // insere dentro do array teams
    fc.reset(); //resetando o form
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
    listarTeams();
}