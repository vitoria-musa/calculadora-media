function calcularMedia() {
    var  n1, n2, n3, media;

    n1 = document.getElementById ('nota_1').value;
    n2 = document.getElementById ('nota_2').value;
    n3 = document.getElementById ('nota_3').value;

    media = ((parseFloat(n1) + parseFloat (n2) + parseFloat (n3)) / 3).toFixed(1);

    document.getElementById('media').innerHTML = media

    if (media < 7) {
        document.getElementById('status').innerHTML = "Situação: Reprovado"
    } else {
        document.getElementById('status').innerHTML = "Situação: Aprovado"
    }
}