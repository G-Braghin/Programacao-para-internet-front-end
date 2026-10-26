function paginar(id) {
    // Remove a classe active de todos os elementos
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('active'));
    
    // Adiciona a classe active ao elemento selecionado
    document.getElementById(id).classList.add('active');
}