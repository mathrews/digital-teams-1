btnNovoTeam.onclick = function(){
    overlay.classList.add('active');
    formCriar.classList.add('active');
}

overlay.onclick = function(){
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
    mostrarParticipantes.classList.remove('active');
    criarPaticipante.classList.remove('active');
}

fecharFormCriar.onclick = function(){
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
}

fecharParticipantes.onclick = function(){
    overlay.classList.remove('active');
    mostrarParticipantes.classList.remove('active');
}

fecharFormParticipantes.onclick = function(){
    overlay.classList.remove('active');
    criarPaticipante.classList.remove('active');
}

let teams = JSON.parse(localStorage.getItem('teams')) || [];

function listarTeams(){
    listaDeTeams.innerHTML = '';
    if(teams.length > 0){
        for(let i = 0; i < teams.length; i++){
            listaDeTeams.innerHTML += `
                <li>
                    <h5>${teams[i].nome} <box-icon onclick="listarParticipantes(${teams[i].id})" name='show' type="solid"></box-icon></h5>
                    <h1> ${teams[i].participantes.length} <span>/${teams[i].qtd}</span></h1>
                    <div class="acoes">
                        <button class="btn mini-title" onClick="modalParticipante(${teams[i].id})">adicionar</button>
                        <button class="btn" onClick="deletarTeam(${teams[i].id})">
                            <box-icon name='trash-alt' type="solid"></box-icon>
                        </button>
                    </div>
                </li>
            `;
        } 
    } else {
        listaDeTeams.innerHTML = `
        <li class="empty">
            Adicione seu primeiro Team
        </li>`;
    }
}

listarTeams();

function adicionarTeam(){
    event.preventDefault();
    let team = {
        id: (teams.length + 1),
        nome: teamNome.value,
        qtd: teamQtd.value,
        participantes: [] 
    }
    teams.push(team);
    localStorage.setItem('teams', JSON.stringify(teams));
    fc.reset();
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
    listarTeams();
}

function deletarTeam(id){
    let confirmacao = confirm('Deseja realmente apagar este item?')
    if (confirmacao){
        let aux = [];
        for(let i = 0; i < teams.length; i++){
            if(teams[i].id != id){
                aux.push(teams[i])
            }
        }
        teams = aux;
        localStorage.setItem('teams', JSON.stringify(teams));
        listarTeams();
    }
}

function listarParticipantes(id){
    overlay.classList.add('active');
    mostrarParticipantes.classList.add('active');
    listaDeParticipantes.innerHTML = '';

    let team;
    for(let i = 0; i < teams.length; i++){
        if(teams[i].id === id){
            team = teams[i];
        }
    }
    for(let i = 0; i < team.participantes.length; i++){
        listaDeParticipantes.innerHTML += `
        <li>
            ${team.participantes[i]} <box-icon name="trash-alt" type="solid"></box-icon>
        </li>
        `;
    }
}

function modalParticipante(id){
    overlay.classList.add('active');
    criarPaticipante.classList.add('active');
    teamId.value = id;
}

function adicionarParticipante(){
    event.preventDefault();
    for(let i = 0; i < teams.length; i++){
        if(teams[i].id === Number(teamId.value)){
            teams[i].participantes.push(participanteNome.value);
        }
    }

    localStorage.setItem('teams', JSON.stringify(teams));

    overlay.classList.remove('active');
    criarPaticipante.classList.remove('active');

    listarTeams();
}

