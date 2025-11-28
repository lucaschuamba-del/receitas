function Tela2(params) {
    const nome = params.nome;
    const imagem = params.imagem;

    const receitas = {
        "Cookies": {
            ingredientes: [
                "2 xícaras de farinha",
                "1 xícara de açúcar",
                "1 ovo",
                "100g de manteiga",
                "1 xícara de gotas de chocolate"
            ],
            preparo: [
                "Misture manteiga e açúcar.",
                "Adicione o ovo.",
                "Coloque a farinha.",
                "Adicione o chocolate.",
                "Asse por 15 min a 180°C."
            ]
        },

        "Brownie": {
            ingredientes: [
                "2 ovos",
                "1 xícara de açúcar",
                "1/2 xícara de chocolate em pó",
                "100g de manteiga derretida",
                "1/2 xícara de farinha"
            ],
            preparo: [
                "Misture ovos e açúcar.",
                "Adicione chocolate e manteiga.",
                "Coloque a farinha.",
                "Asse 25 min a 180°C."
            ]
        },

        "Pudim": {
            ingredientes: [
                "1 lata de leite condensado",
                "1 lata de leite",
                "3 ovos",
                "Açúcar para caramelo"
            ],
            preparo: [
                "Caramelize a forma.",
                "Bata os ingredientes.",
                "Despeje na forma.",
                "Asse em banho-maria por 1h."
            ]
        }
    };

    const receita = receitas[nome];

    let html = `
        <h1 class="titulo">${nome}</h1>
        <div style="text-align:center">
            <img src="${imagem}" style="width:180px;height:180px;border-radius:12px;">
        </div>

        <h2 class="titulo" style="margin-top:20px;font-size:22px;">Ingredientes</h2>
    `;

    receita.ingredientes.forEach(item => {
        html += `<p>• ${item}</p>`;
    });

    html += `
        <h2 class="titulo" style="margin-top:20px;font-size:22px;">Modo de preparo</h2>
    `;

    receita.preparo.forEach((item, i) => {
        html += `<p>${i+1}. ${item}</p>`;
    });

    html += `
        <div style="text-align:center;margin-top:20px;">
            <div class="botao" onclick="navegarPara('Tela1')">Voltar</div>
        </div>
    `;

    return html;
}
