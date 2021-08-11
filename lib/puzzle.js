// quando clicar no botão "give me a hint", adicionar a classe active na div hint
// 1. selecionar o elemento que deve ser interagido
const elem = document.querySelector('#show-hint');

// 2. qual é a interação do usuario em cima do elemento
const iter = 'click';

// 3. uma funcao que sera executada quando a interação ocorrer no elemento
const showHint = () => {
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
}

// 4. juntar tudo com addEventListener
elem.addEventListener(iter, showHint);


// ===================================================================================
// 1. Reconhecer click na caixa em questão
const caixas = document.querySelectorAll('td');

const batata = (event) => {
  const caixaClicada = event.currentTarget;
  const vazio = document.querySelector('.empty');

  // 2. Reconhecer se o movimento é possivel
  const indexCell = caixaClicada.cellIndex
  const indexRow = caixaClicada.parentElement.rowIndex
  const emptyIndexCell = vazio.cellIndex
  const emptyIndexRow = vazio.parentElement.rowIndex

  const sameRow = emptyIndexRow === indexRow;
  const adjRow = emptyIndexRow === indexRow - 1 || emptyIndexRow === indexRow + 1;
  const sameCol = emptyIndexCell === indexCell;
  const adjCol = emptyIndexCell === indexCell - 1 || emptyIndexCell === indexCell + 1;

  // Uma das caixas adjacentes àquela que clicou (x e y) tem o .empty
  if (sameRow && adjCol || sameCol && adjRow){
    // 3y. Se for possivel colocar empty na caixa clicada e colocar valor da caixa clicada no empty
    vazio.classList.remove('empty');
    vazio.innerText = caixaClicada.innerText;
    caixaClicada.classList.add('empty');
    caixaClicada.innerText = '';
  }
  // 3n. Dizer que o movimento não é possivel
    
  // 4. Reconhecer se for a ordem certa -> Parabens | Senão segue o jogo
  
}

caixas.forEach((caixa) => {
  caixa.addEventListener(iter, batata)
})