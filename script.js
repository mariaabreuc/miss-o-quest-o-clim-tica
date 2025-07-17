const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma situação em que está chovendo um grande volume a falta de áreas para drenagem pode atrapalha",
        alternativas: [
            {
                texto: "Desimpermeabilizar áreas urbanas, substituindo concreto por materiais permeáveis em calçadas e estacionamentos.",
                afirmacao: "Essa medida foi escolhida porque materiais permeáveis permitem que a água da chuva infiltre no solo, reduzindo alagamentos causados pelo excesso de concreto"
            },
            {
                texto: "Criar áreas verdes urbanas que aumentem a absorção da água da chuva e reduzam o impacto das chuvas intensas.",
                afirmacao: "Essa solução ajuda na absorção da água da chuva, diminuindo o risco de enchentes e melhorando o ambiente urbano."
            }
        ]
    },
    {
        enunciado: "Se ouvesse uma interrupção de energia durante uma chuva forte ou tempestade, como seriam realizados os alertas de enchentes e áreas de riscos?",
        alternativas: [
            {
                texto: "Estações de monitoramento equipadas com painéis solares e baterias continuam operando mesmo durante apagões.",
                afirmacao: "Você acredita que mesmo durante apagões causados por chuvas fortes ou tempestades, os alertas de enchentes e riscos continuam sendo emitidos, pois as estações de monitoramento equipadas com painéis solares e baterias mantêm seu funcionamento de forma autônoma e ininterrupta."
            },
            {
                texto: "Em áreas críticas, equipes da Defesa Civil ou voluntários treinados podem fazer monitoramento visual do nível dos rios e emitir alertas manuais (ex: sirenes manuais, alto-falantes portáteis, megafones).",
                afirmacao: "Você acredita que no caso de interrupção de energia durante chuvas fortes, os alertas de enchentes e áreas de risco ainda podem ser realizados manualmente, por meio da atuação de equipes da Defesa Civil ou voluntários treinados, que utilizam recursos como sirenes manuais, alto-falantes portáteis e megafones para avisar a população."
            }
        ]
    },
    {
        enunciado: "Como a ausência de infraestrutura resiliente e planejamento urbano adequado agrava os impactos das enchentes em áreas urbanas, especialmente nas periferias, colocando em risco a segurança, a saúde pública e o desenvolvimento sustentável das cidades brasileiras?",
        alternativas: [
            {
                texto:  " Investimento em infraestrutura verde e sistemas de drenagem urbana sustentável (SDUS): As prefeituras, com apoio de governos estaduais e federais, devem investir em tecnologias de infraestrutura verde, como jardins de chuva, pavimentos permeáveis e corredores ecológicos. Essas medidas aumentam a absorção da água da chuva e reduzem o escoamento superficial, diminuindo alagamentos, especialmente em áreas periféricas.",
                afirmacao: "A adoção de infraestrutura verde torna as cidades mais preparadas para eventos climáticos extremos, reduzindo os danos causados pelas enchentes."
            },
            {
                texto: " Planejamento urbano integrado com foco na inclusão social: Implementar políticas públicas que integrem moradia digna, saneamento básico e mobilidade urbana em regiões vulneráveis. É fundamental evitar a ocupação irregular de áreas de risco e promover reassentamentos seguros com participação comunitária, garantindo a sustentabilidade urbana.",
                afirmacao: "O planejamento urbano inclusivo é essencial para prevenir tragédias em áreas de risco e promover justiça social nas cidades brasileiras."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();