const form = document.getElementById('formulario')

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados ={
        nome,
        email,
    }
    
    let convertdata = JSON.stringify(dados);

    localStorage.setItem('lead',convertdata);

    let content = document.getElementById('content')

    let carregando = '<p>carregando...</p>'

    let pronto = '<p>pronto</p>'

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})