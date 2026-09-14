// Inicializa a biblioteca de ícones
lucide.createIcons();

let slideAtual = 1;
const totalSlides = 3;

// Função para avançar ou voltar os slides da apresentação
function mudarSlide(direcao) {
    // Remove classe ativa do slide que está na tela
    document.getElementById(`slide-${slideAtual}`).classList.remove('active');
    
    // Atualiza o contador de páginas
    slideAtual += direcao;
    
    // Adiciona a classe ativa no novo slide correspondente
    document.getElementById(`slide-${slideAtual}`).classList.add('active');

    // Habilita ou desabilita botões nas extremidades da apresentação
    document.getElementById('prev-btn').disabled = (slideAtual === 1);
    document.getElementById('next-btn').disabled = (slideAtual === totalSlides);
}

// Função de Interação da Enquete (Slide 2)
function votar(opcao) {
    const mensagem = document.getElementById('resultado-voto');
    
    // Exibe a mensagem de sucesso com um ícone de verificação
    mensagem.innerHTML = `<i data-lucide="check-circle" style="display:inline-block; vertical-align:middle; margin-right:5px; width:18px; height:18px;"></i> Voto registrado: "${opcao}"! Obrigado por interagir!`;
    
    // Recarrega os ícones dinâmicos injetados no HTML
    lucide.createIcons();
}
