const icone = document.querySelectorAll('i');
const buttons = document.querySelectorAll('.ripple')
let unlockButton = document.getElementById('unlock');
let game1 = document.querySelector('#game1');
// let game2 = document.querySelector('#game2');
let cliques = 0;

// icone.forEach(i => {
//     for(cliques = 1; cliques < 3; cliques++)
//         i.addEventListener('click', () =>{
//         i.classList.add('crescerCadeado');
        
//         });
// });

icone.forEach(i => {
    let cliques = 0; // Contador de cliques

    i.addEventListener('click', () => {
        // Se o número de cliques for menor que 3, vamos aplicar o efeito
        if (cliques < 3) {
            // Efeito de crescimento
            i.classList.add('crescerCadeado');
            
            // Atraso para o efeito de diminuição
            setTimeout(() => {
                i.classList.remove('crescerCadeado');
            }, 500); // O tempo aqui deve ser o suficiente para o efeito de escala (ajuste conforme necessário)

            cliques++; // Incrementa o contador de cliques
        } else {
            // Após 3 cliques, podemos alterar o ícone permanentemente
            i.classList.add('fa-unlock');
            i.style.display = 'none';
            game1.classList.add('remove-blur');
            // game2.classList.add('remove-blur');

            unlockButton.style.display = 'block';
            unlockButton.style.opacity = 0;
            setTimeout(() => {
                unlockButton.style.transition = 'opacity 1s';
                unlockButton.style.opacity = 1;
            }, 100); // Espera um pouco antes de começar a animação
            
        }
    });
});




buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})



   
