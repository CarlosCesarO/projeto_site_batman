window.onload = function() {
  // seleciona todas as imagens
  var images = document.querySelectorAll('.image img');

  // adiciona evento de clique a cada imagem
  for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function(event) {
          // cria um novo elemento de imagem e adiciona o caminho da imagem clicada
          var viewerImage = document.createElement('img');
          viewerImage.src = this.src;

          // cria um novo elemento para o visualizador de imagem e adiciona a imagem
          var viewer = document.createElement('div');
          viewer.classList.add('image-viewer');
          viewer.appendChild(viewerImage);

          // adiciona o visualizador à página
          document.body.appendChild(viewer);

          // fecha o visualizador quando se clica fora dele
          viewer.addEventListener('click', function(event) {
          if (event.target === viewer) {
              document.body.removeChild(viewer);
          }
          });
      });
  }
}


//correção do numero de telefone
function mascaraDeTelefone(telefone){
    const textoAtual = telefone.value;
    const isCelular = textoAtual.length === 11;
    let textoAjustado;
        if(isCelular) {
            const parte1 = textoAtual.slice(0,2);
            const parte2 = textoAtual.slice(2,7);
            const parte3 = textoAtual.slice(7,11);
            textoAjustado = `(${parte1}) ${parte2}-${parte3}`        
        } else {
            const parte1 = textoAtual.slice(0,4);
            const parte2 = textoAtual.slice(4,8);
            textoAjustado = `${parte1}-${parte2}`
        }
    telefone.value = textoAjustado;
}

function tiraHifen(telefone) {
    const textoAtual = telefone.value;
    const textoAjustado = textoAtual.replace(/\-/g, '');

    telefone.value = textoAjustado;
}