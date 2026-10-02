let count = document.getElementById('count');

window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation');

    if (navigation.length > 0) {
        const tipoNavegacion = navigation[0].type;

        let contadorRecargas = parseInt(localStorage.getItem('contadorRecargas')) || 0;

        if (tipoNavegacion === 'reload') {
            contadorRecargas++;
            localStorage.setItem('contadorRecargas', contadorRecargas);
        }
        if (tipoNavegacion === 'navigate') {
            contadorRecargas++;
            localStorage.setItem('contadorRecargas', contadorRecargas);
        }

        count.innerText = contadorRecargas;
    }
});
