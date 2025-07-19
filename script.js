const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma situação em que está chovendo um grande volume, a falta de áreas para drenagem pode atrapalhar significativamente o escoamento da água, causando alagamentos.",
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
        enunciado: "Como promover a educação ambiental e a conscientização comunitária de forma efetiva, despertando o senso de responsabilidade coletiva e incentivando a participação ativa dos moradores na preservação do meio ambiente local?",
        alternativas: [
            {
                texto: "Promover oficinas, campanhas e mutirões ambientais, envolvendo a comunidade em ações práticas de reciclagem e preservação.",
                afirmacao: "A participação prática em atividades ambientais aumenta a conscientização e o compromisso da comunidade com a preservação do meio ambiente."
            },
            {
                texto: "Formar comitês ambientais e usar comunicação acessível para planejar ações e incentivar a participação da comunidade.",
                afirmacao: "A organização comunitária e a comunicação acessível são essenciais para promover a educação ambiental e mobilizar a população local."
            }
        ]
    },
    {
        enunciado: "Com o aumento das temperaturas globais e o avanço do desmatamento, diversas regiões têm enfrentado secas prolongadas. Quais podem ser os impactos diretos desse fenômeno no meio ambiente e na sociedade? ",
        alternativas: [
            {
                texto: "As secas prolongadas reduzem drasticamente o volume dos rios, afetando o abastecimento de água nas cidades.",
                afirmacao: "Isso compromete a qualidade de vida da população e aumenta os riscos de doenças causadas pela falta de saneamento adequado."
            },
            {
                texto: "A escassez de chuvas afeta diretamente a agricultura, resultando em queda na produção de alimentos.",
                afirmacao: "Isso contribui para o aumento dos preços e para a insegurança alimentar, especialmente entre as populações mais vulneráveis."
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
    caixaPerguntas.textContent = "Sem ação, sem futuro...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();