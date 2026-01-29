// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Pega o container principal
    const container = document.querySelector('.container');
    
    // Adiciona a classe que o torna visível após um pequeno delay
    // Isso aciona a transição CSS que definimos lá em cima
    setTimeout(() => {
        container.classList.add('visible');
    }, 200); // Espera 200ms para começar, fica mais suave

    // BÔNUS: Efeito "Tilt" 3D nos botões (opcional, mas fica incrível)
    const buttons = document.querySelectorAll('.btn-link');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left; // posição X do mouse dentro do botão
            const y = e.clientY - rect.top;  // posição Y do mouse dentro do botão
            
            // Calcula a rotação baseada na posição do mouse
            const xRotation = ((y - rect.height / 2) / rect.height * 20) * -1;
            const yRotation = (x - rect.width / 2) / rect.width * 20;
            
            // Aplica a transformação
            btn.style.transform = `perspective(500px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });
        
        // Reseta quando o mouse sai
        btn.addEventListener('mouseleave', () => {
             btn.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        });
    });
});