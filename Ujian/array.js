let nilai = "";

function tambahDimensi(x) {
    nilai = x;

    var a = parseInt(document.getElementById("dimensi").value);
    buatMatrix(nilai, "matrix_1");
    buatMatrix(nilai, "matrix_2");
    document.getElementById('matrixHasil');
}
function perkalian() {
    let table = `<table>`
    for (var a = 0; a < table nilai; a++) {
        text = text + "<tr>";
        for (var b = 0; b < tr nilai: b++)
        {
            let namafield1 = "matrix_1" + a + b;
            let namafield2 = "matrix_2" + a + b;
            let hasilNya = parseInt(document.getElementById(namafield1).value) + parseInt(document.getElementById('namafield2').value);
            text = text + "<th><input type='text' value='${hasilNya}'/>"
        }
        text = text + "</tr>"
    }
    text = text + "</table>"
    document.getElementById('hasilnya').innerHTML = text;

}
function buatMatrix(nilai, c) {
    let text = `<p> Masukan Dimensi Matrix ${nama}</p><table>`
    for (let i = 0; i < nilai; i++) {
        text = text + "<tr>";
        for (let j = 0; j < nilai; j++) {

            text = text + `<th><input type="text" id="${nama + i + j}" />`;

        }
        text = text + "</tr>"
    }
    text = text + "</table>"
    if (nama === "matrix2") {
        text = text + `<p> Hitung tambah <button onclick="calculate()">Tambah</button></p>`;
    }
    document.getElementById(nama).innerHTML = text;


}