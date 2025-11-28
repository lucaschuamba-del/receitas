function navegarPara(tela, params = {}) {
    window.currentParams = params;

    if (tela === "Tela1") {
        document.getElementById("root").innerHTML = Tela1();
    }

    if (tela === "Tela2") {
        document.getElementById("root").innerHTML = Tela2(params);
    }
}
