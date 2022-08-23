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
}

