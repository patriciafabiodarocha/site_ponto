
function pesquisar() {

  const pesquisa = document.getElementById('pesquisa');
const itens = document.querySelectorAll('#lista li');

pesquisa.addEventListener('keyup', () => {
    const texto = pesquisa.value.toLowerCase();

    itens.forEach(item => {
        if (item.textContent.toLowerCase().includes(texto)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

}


export default pesquisar;