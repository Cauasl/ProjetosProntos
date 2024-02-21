export async function PegarImagens(url) {
   try {
      let imagens = await fetch(url);
      return imagens.json()
   }catch (e) {
      console.log('Erro ' + e);
   }
}

export function NumeroAleatorioNaoRepetido(min, max) {
   let naoRepetir = [];
   let escoleNumero = arry => {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      if(!arry.includes(num)) {
         arry.push(num);
      }else {
         escoleNumero(arry);
      }
   }
   for(var i = 0; i < max; i++) {
      escoleNumero(naoRepetir);
   }
   //console.log(naoRepetir);
   return naoRepetir;
}


export function CriarVizualizacao(url, ti, ondeId) {
   const caixa = document.createElement('div');
   caixa.setAttribute('class', 'view-img');

   const imagem = document.createElement('img');
   imagem.setAttribute('src', url);
   const titulo = document.createElement('p');

   document.getElementById(ondeId).appendChild(caixa);
   caixa.appendChild(imagem);
   caixa.appendChild(titulo);
   titulo.innerText = ti;
}