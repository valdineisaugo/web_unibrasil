function mudar() {
  const titulo = document.getElementById('titulo');
  titulo.textContent =  'JavaScript funcionando! 🚀';
  titulo.style.color = '#3fb950';
}

function mensagem(){      
    
    window.alert('Olá, seja bem-vindo ao meu site! - Window Alert');
}


function mensagemWindowAlert(){      
    
    let nome = window.prompt('Qual é o seu nome?');
    window.alert(`Olá, ${nome}! Seja bem-vindo ao meu site! - Window Alert`);
}



function mensagemErro(){
  window.alert('Ocorreu um erro! - Window Alert');
}