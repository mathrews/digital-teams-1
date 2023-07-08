btnNovoTeam.onclick = function(){
    overlay.classList.add('active');
    formCriar.classList.add('active');
}

overlay.onclick = function(){
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
}

fecharFormCriar.onclick = function(){
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
}

const teams = [
    {
        nome: 'nome 1',
        qtd: 10,
        participantes: ['matheus', 'melissa']
    },
    {
        nome: 'nome 2',
        qtd: 10,
        participantes: ['luis', 'marjore', 'lorena']
    },
];

function listarTeams(){
    listaDeTeams.innerHTML = '';
    for(let i = 0; i < teams.length; i++){
        listaDeTeams.innerHTML += `
            <li>
                <h5>${teams[i].nome} <box-icon name='show' type="solid"></box-icon></h5>
                <h1> ${teams[i].participantes.length} <span>/ ${teams[i].qtd}</span></h1>
                <div class="acoes">
                    <button class="btn mini-title">adicionar</button>
                    <button class="btn">
                        <box-icon name='trash-alt' type="solid"></box-icon>
                    </button>
                </div>
            </li>
        `;
    }
}

listarTeams();

function adicionarTeam(){
    event.preventDefault();
    let team = {
        nome: teamNome.value,
        qtd: teamQtd.value,
        participantes: [] 
    }
    teams.push(team);
    fc.reset();
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
    listarTeams();
}

