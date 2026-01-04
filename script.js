function searchFunction() {
    let query = document.getElementById("search").value;
    if (query) {
        alert("Buscando por: " + query);
    } else {
        alert("Digite um tipo de produto.");
    }
}