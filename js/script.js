function changed(i) {
    var bottone = "salvabtn" + String(i)
    document.getElementById(bottone).disabled = false;
}
/* DATI UTENTE */
comunidata = ["Bassano del Grappa", "Romano d'Ezzelino", "Pove del Grappa"]
tipologiadata = ["Porzione di casa", "Attico", "Mansarda", "Porzione di villa"]
altreprefdata = ["Giardino", "Terrazzo vivibile"]

window.onload = (event) => {
    document.getElementById("comuni").textContent = comunidata.join(', ');

    document.getElementById("tipologia").textContent = tipologiadata.join(', ');

    document.getElementById("altre").textContent = altreprefdata.join(', ');

    progressbar();


}

function progressbar() {
    var d1 = parseDate(document.getElementById("data1").textContent);
    var d2 = parseDate(document.getElementById("data2").textContent);
    var today = new Date();
    var totgiorni = Number.parseFloat(((d2 - d1) / (86400000))).toFixed(0);
    var giornitrascorsi = Number.parseFloat(((today - d1) / (86400000))).toFixed(0);
    var durata = 60;
    var perc = Number.parseFloat((100 / (totgiorni / giornitrascorsi))).toFixed(1);
    var giornirimanenti = durata - perc
    document.getElementById("progressbar").setAttribute('aria-valuenow', perc);
    document.getElementById("progressbar").setAttribute('style', 'width:' + Number(perc) + '%');
    document.getElementById("prog_label").textContent = String(giornirimanenti) + " giorni rimanenti"
}

function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[2], parts[1] - 1, parts[0]);
}