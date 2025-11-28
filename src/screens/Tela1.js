function Tela1() {

    const receitas = [
        {
            nome: "Cookies",
            receita: "Misture a farinha, açúcar, manteiga e chocolate...",
            imagem: "assets/cookies.png"
        },
        {
            nome: "Brownie",
            receita: "Derreta chocolate com manteiga e misture...",
            imagem: "assets/brownie.png"
        },
        {
            nome: "Pudim",
            receita: "Bata ovos com leite e leite condensado...",
            imagem: "assets/pudim.png"
        }
    ];

    let html = `
        <h1 class="titulo">Escolha uma Receita</h1>
    `;

    receitas.forEach(r => {
        html += `
            <div class="card" onclick="navegarPara('Tela2', {
                nome: '${r.nome}',
                imagem: '${r.imagem}'
            })">
                <img src="${r.imagem}" />
                <h2>${r.nome}</h2>
            </div>
        `;
    });

    return html;
}
