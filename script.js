// ADIÇÃO DO INPUT EXTA AO SELECIONAR "SIM" PARA SINSTRO

const sinistroSelect = document.getElementById('sinistro');
const quantidadeSinistros = document.getElementById('quantidade-sinistros');

sinistroSelect.addEventListener('change', () => {
  if (sinistroSelect.value === 'sim') {
    quantidadeSinistros.style.display = 'block';
    quantidadeSinistros.required = true;
  } else {
    quantidadeSinistros.style.display = 'none';
    quantidadeSinistros.required = false;
    quantidadeSinistros.value = ''; // Limpa o valor caso ocultado
  }
});
// FIM DO BOTÃO INPUT EXTRA

// Seleção dos elementos do formulário
const btnCalcular = document.querySelector('.button-entrar');
const inputCancelamento = document.querySelector('#cancelamento');
const inputBonusAtual = document.querySelector('#bonus-atual');
const inputSinistros = document.querySelector('#quantidade-sinistros');
const inputSinistroSelect = document.querySelector('#sinistro');

// Evento de clique no botão "Calcular"
btnCalcular.addEventListener('click', (e) => {
  e.preventDefault(); // Evita o envio do formulário

  const dataCancelamento = new Date(inputCancelamento.value); // Data de cancelamento
  const dataAtual = new Date(); // Data atual da máquina
  const bonusAtual = parseInt(inputBonusAtual.value); // Bônus atual
  const quantidadeSinistros =
    inputSinistroSelect.value === 'sim'
      ? parseInt(inputSinistros.value || 0)
      : 0;

  // Validação de campos
  if (isNaN(dataCancelamento) || isNaN(bonusAtual)) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  // Cálculo da diferença de dias entre as datas
  const diffTime = Math.abs(dataAtual - dataCancelamento);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Conversão para dias
  const bonusPerdidosPorDias = Math.floor(diffDays / 30); // Perda de 1 bônus a cada 30 dias

  // Perda de bônus total
  const bonusFinal = Math.max(
    bonusAtual - bonusPerdidosPorDias - quantidadeSinistros,
    0
  ); // Não pode ser menor que 0

  // Exibição do resultado
  alert(`O bônus final é: ${bonusFinal}`);
});
