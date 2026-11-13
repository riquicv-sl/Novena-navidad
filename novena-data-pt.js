// novena-data-pt.js
// Textos da Novena de Natal em PORTUGUÊS (Brasil).
// Usa as mesmas chaves (nomes de campos) que novena-data.js, para que app.js
// funcione igual nos dois idiomas. As imagens são lidas de novena-data.js.
//
// CITAÇÕES BÍBLICAS: numeração católica, formato "Livro capítulo,versículos".
//
// LEITURAS: são paráfrases em linguagem simples, redigidas para esta novena
// a partir do sentido do texto bíblico. NÃO são citações literais de nenhuma
// edição. Para o texto exato, consultar a Bíblia da CNBB, a Bíblia de
// Jerusalém ou a Bíblia Ave-Maria.

const FONTE_BIBLICA_PT = "Paráfrase em linguagem simples (texto exato: Bíblia da CNBB, Bíblia de Jerusalém ou Bíblia Ave-Maria)";

const NOVENA_DATA_PT = {
  fuenteBiblica: FONTE_BIBLICA_PT,

  oracionInicial: {
    titulo: "Oração inicial",
    instrucciones: "Recomenda-se cantar uma canção de Natal antes de começar esta oração.",
    texto: `Pai bondoso e cheio de misericórdia: amaste tanto o mundo que nos deste o teu Filho único, Jesus Cristo, para que todo aquele que nele crê não se perca, mas tenha a vida eterna. Ao começar esta Novena de Natal, abrimos as portas da nossa casa e do nosso coração para receber a tua luz.

Envia o teu Espírito Santo sobre nós, para que a tua Palavra nos transforme por dentro. Ajuda-nos a preparar em nosso interior um presépio onde o teu Filho possa nascer. Nós te pedimos pela paz do mundo, pela união das nossas famílias e pelo consolo de quem sofre. Que o teu amor vença toda divisão e nos mantenha unidos na paz.

Nós te pedimos em nome de Jesus, nosso Salvador. Amém.`,
    referencias: ["João 3,16"]
  },

  oracionFinal: {
    titulo: "Oração final ao Menino Jesus",
    instrucciones: "Recomenda-se cantar uma canção de Natal para encerrar o dia da novena.",
    texto: `Senhor Jesus, Palavra eterna do Pai, que te fizeste homem e vieste morar entre nós, cheio de amor e de verdade: nós te adoramos na tua infância e te agradecemos pela tua humildade. Sendo Deus, quiseste fazer-te um de nós e nascer pobre numa manjedoura.

Nós te pedimos, Menino Jesus, que vivas em nós. Troca o nosso coração de pedra por um coração capaz de amar como tu nos amas. Abençoa o nosso lar, dá-nos saúde de alma e de corpo, e faze que sejamos testemunhas alegres do teu Evangelho. Que a alegria da tua vinda permaneça sempre conosco.

Tu que vives e reinas pelos séculos dos séculos. Amém.`,
    referencias: ["João 1,14", "Filipenses 2,6-7", "Ezequiel 36,26"]
  },

  gozos: {
    titulo: "Aclamações ao Emanuel",
    instrucciones: "Respondemos a cada estrofe com o refrão.",
    estribillo: "Vem, ó Senhor, nosso Salvador, vem acender tua luz de amor!",
    estrofas: [
      {
        texto: "Ó Palavra eterna, do Pai esplendor,\nque te fizeste carne como nós,\nlivra-nos da noite do erro e da dor.",
        referencia: "Baseado em João 1,14"
      },
      {
        texto: "Ó Sabedoria que tudo conduz,\nvem nos ensinar o caminho da paz;\nsê tu a estrela que a todos dá luz.",
        referencia: "Baseado em Isaías 11,2"
      },
      {
        texto: "Emanuel prometido, Rei das nações,\nque o povo esperava com fé e oração,\nvem reinar em nossos lares e corações.",
        referencia: "Baseado em Isaías 7,14"
      },
      {
        texto: "Estrela da manhã, luz sem fim,\nque anuncias a graça e a salvação,\nvem trazer-nos tua luz celestial.",
        referencia: "Baseado em 2 Pedro 1,19"
      },
      {
        texto: "Jesus de Belém, na manjedoura deitado,\nvem nascer em nosso interior;\nque tua humildade nos deixe transformados.",
        referencia: "Baseado em Lucas 2,7"
      }
    ]
  },

  dias: [
    {
      dia: 1,
      titulo: "A promessa do Salvador",
      lectura: {
        referencia: "Isaías 9,1-6",
        notaReferencia: "Em algumas Bíblias aparece como Isaías 9,2-7.",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `O povo que andava na escuridão viu uma luz muito grande; sobre os que viviam numa terra de sombras brilhou a luz. Tu, Senhor, fizeste crescer o teu povo e lhe deste uma imensa alegria: eles se alegram diante de ti como no tempo da colheita, como quando se reparte o que foi ganho na batalha. Porque quebraste o jugo que os esmagava, o peso que levavam sobre os ombros e o chicote do opressor, como na vitória sobre Madiã. As botas dos soldados, que faziam a terra tremer, e os mantos manchados de sangue serão queimados no fogo.

Porque um menino nasceu para nós, um filho nos foi dado. Sobre os seus ombros estará o governo, e o seu nome será: Conselheiro maravilhoso, Deus forte, Pai para sempre, Príncipe da paz. O seu poder vai crescer e a paz não terá fim. Ele se sentará no trono de Davi e governará o seu reino, firmando-o com o direito e a justiça, desde agora e para sempre. O amor ardente do Senhor do universo fará tudo isso.`
      },
      reflexion: `Isaías falou num tempo muito difícil para o seu povo: havia guerra, medo e exílio. No meio dessa escuridão, Deus não lhes deu uma ideia bonita, mas uma promessa concreta: vai nascer um menino, e esse menino trará a paz (Isaías 9,5).

Deus poderia nos salvar de muitas maneiras, mas escolheu entrar na nossa história. Preparou um povo, uma família e um caminho, e contou com pessoas de carne e osso. A salvação é um presente que vem totalmente dele, mas é um presente que nos procura, nos transforma por dentro e nos convida a responder. Neste primeiro dia, peçamos ao Senhor um coração disponível, para sermos pequenas luzes no meio das sombras do nosso mundo.`,
      peticion: "Senhor, acende em nossos corações a chama da esperança e ajuda-nos a construir a paz em nossas famílias."
    },
    {
      dia: 2,
      titulo: "A Anunciação: o sim de Maria",
      lectura: {
        referencia: "Lucas 1,26-38",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `Seis meses depois, Deus enviou o anjo Gabriel a uma cidade da Galileia chamada Nazaré. Mandou-o a uma jovem virgem que estava prometida em casamento a José, um homem descendente do rei Davi. A jovem se chamava Maria. O anjo entrou onde ela estava e lhe disse: «Alegra-te, cheia de graça! O Senhor está contigo». Maria ficou muito inquieta ao ouvir essas palavras e se perguntava o que significava aquela saudação.

O anjo lhe disse: «Não tenhas medo, Maria, porque encontraste o favor de Deus. Ficarás grávida e darás à luz um filho, e lhe porás o nome de Jesus. Ele será grande e será chamado Filho do Altíssimo. O Senhor Deus lhe dará o trono de Davi, seu antepassado; ele reinará para sempre sobre o povo de Jacó, e o seu reino não terá fim».

Maria perguntou ao anjo: «Como vai acontecer isso, se eu sou virgem?». O anjo respondeu: «O Espírito Santo virá sobre ti e o poder do Altíssimo te cobrirá com a sua sombra. Por isso, o menino santo que vai nascer será chamado Filho de Deus. Olha: tua parenta Isabel, mesmo sendo idosa, também espera um filho; aquela que diziam que não podia ter filhos já está no sexto mês. Porque para Deus nada é impossível».

Então Maria disse: «Eis aqui a serva do Senhor. Faça-se em mim segundo a tua palavra». E o anjo foi embora.`
      },
      reflexion: `A Anunciação é um dos momentos mais importantes de toda a Bíblia. Aqui Deus, por assim dizer, pede licença para se fazer homem, e espera a resposta de uma jovem de Nazaré.

O anjo não chama Maria pelo nome, mas por um título: «cheia de graça». Em grego, a palavra é Kecharitomene, e está num tempo verbal que indica algo que já aconteceu e que permanece: Maria não recebe a graça naquele momento, mas já tinha sido repleta dela, e continua sendo. A Igreja vê nessa saudação um dos fundamentos da Imaculada Conceição: Deus, pelos méritos de Cristo, preparou Maria desde o primeiro instante da sua vida para ser a mãe do seu Filho, livre de todo pecado.

Maria responde: «Faça-se em mim segundo a tua palavra» (Lucas 1,38). Esse sim, que a tradição chama de Fiat, não é resignação nem passividade. É um ato livre de fé e de amor, e dele depende que o Filho de Deus assuma a nossa carne. Por isso os primeiros cristãos, como Santo Irineu de Lyon, chamaram Maria de nova Eva: o que Eva tinha amarrado com a sua desobediência, Maria desatou com a sua fé.

Maria é a primeira discípula e o modelo perfeito da fé. Nela vemos que a graça de Deus não anula a nossa liberdade, mas a leva à plenitude. Quando nós também dizemos sim a Deus, Jesus pode nascer em nossa vida e chegar aos outros através de nós.`,
      peticion: "Senhor, que a exemplo de Maria saibamos escutar a tua voz e responder aos teus chamados com um sim generoso e alegre."
    },
    {
      dia: 3,
      titulo: "A Visitação",
      lectura: {
        referencia: "Lucas 1,39-45",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `Naqueles dias, Maria se pôs a caminho e foi depressa a uma cidade da região montanhosa de Judá. Entrou na casa de Zacarias e saudou Isabel. Assim que Isabel ouviu a saudação de Maria, o menino pulou dentro do seu ventre, e Isabel ficou cheia do Espírito Santo. Então exclamou em voz alta: «Bendita és tu entre as mulheres, e bendito é o fruto do teu ventre! Quem sou eu para que venha me visitar a mãe do meu Senhor? Logo que ouvi a tua saudação, o menino pulou de alegria no meu ventre. Feliz és tu, que acreditaste que vai se cumprir tudo o que o Senhor te disse!».`
      },
      reflexion: `Logo que recebe o anúncio do anjo, Maria não fica pensando em si mesma: sai depressa para servir a sua parenta Isabel. Basta a sua saudação para que o menino pule de alegria no ventre de Isabel e ela fique cheia do Espírito Santo. É o Espírito quem a faz reconhecer quem está diante dela.

São Lucas conta essa cena com detalhes que lembram uma história do Antigo Testamento: o transporte da Arca da Aliança, o cofre sagrado que indicava a presença de Deus no meio do seu povo. O rei Davi se perguntou como era possível que a Arca do Senhor viesse até ele, dançou de alegria diante dela, e a Arca ficou três meses numa casa (2 Samuel 6,9-15). Isabel faz a mesma pergunta diante de Maria, João pula de alegria no seu ventre, e Maria fica com ela cerca de três meses (Lucas 1,56). Por isso a Igreja chama Maria de Arca da Nova Aliança: ela não leva as tábuas da Lei, mas o próprio Deus feito homem.

Isabel a chama de «a mãe do meu Senhor» (Lucas 1,43). Na Bíblia, «Senhor» é o nome usado para o próprio Deus. Por isso o Concílio de Éfeso, no ano 431, proclamou Maria Theotokos, Mãe de Deus. Esse título não fala só dela, mas sobretudo de quem é Jesus: verdadeiro Deus desde o primeiro instante.

Maria responde com o Magnificat, e nele anuncia que todas as gerações a chamarão bem-aventurada (Lucas 1,48). Quando honramos Maria, não acrescentamos algo estranho à Bíblia: cumprimos o que a própria Escritura anunciou. E ela nos mostra o sentido dessa honra, porque proclama a grandeza do Senhor e se alegra em Deus, seu Salvador (Lucas 1,46-47). Como a lua, que não tem luz própria mas reflete a do sol, Maria sempre nos leva ao seu Filho.`,
      peticion: "Senhor, dá-nos um coração disposto a servir e atento às necessidades dos outros, para levar a tua presença e a tua alegria a todos que nos rodeiam."
    },
    {
      dia: 4,
      titulo: "São José, homem justo",
      lectura: {
        referencia: "Mateus 1,18-25",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `Assim foi o nascimento de Jesus Cristo. Maria, sua mãe, estava prometida em casamento a José, e antes que começassem a viver juntos, soube-se que ela esperava um filho por obra do Espírito Santo. José, seu marido, que era um homem justo e não queria expô-la à vergonha diante de todos, pensou em separar-se dela em segredo.

Enquanto pensava nisso, um anjo do Senhor lhe apareceu em sonho e disse: «José, descendente de Davi, não tenhas medo de receber Maria como tua esposa, porque o menino que ela espera vem do Espírito Santo. Ela dará à luz um filho, e tu lhe porás o nome de Jesus, porque ele salvará o seu povo dos seus pecados».

Tudo isso aconteceu para que se cumprisse o que o Senhor tinha dito por meio do profeta: «A virgem ficará grávida e dará à luz um filho, e o chamarão Emanuel», que quer dizer «Deus conosco».

Quando José acordou, fez o que o anjo do Senhor lhe tinha mandado e recebeu Maria como sua esposa. Maria deu à luz o seu filho sem ter tido relações com José, e ele lhe pôs o nome de Jesus.`
      },
      reflexion: `Os Evangelhos não registram nenhuma palavra de São José, e mesmo assim a sua vida diz muito. Mateus o chama de «homem justo» (Mateus 1,19). Na Bíblia, ser justo não é só cumprir regras: é ter um coração reto, que busca de verdade o que Deus quer.

Diante de algo que não conseguia entender, José decidiu agir com bondade: não queria expor Maria à vergonha pública. Quando Deus lhe mostra o seu plano em sonho, José não discute nem pede provas. Simplesmente faz o que o anjo lhe mandou. Recebe Maria em sua casa, dá a Jesus o seu nome, dá-lhe um lugar na família de Davi e se dedica a cuidar deles.

José nos lembra que a fé não se mostra só com palavras bonitas, mas com a fidelidade de cada dia: o trabalho honesto, a paciência e o cuidado amoroso com as pessoas que Deus coloca em nossas mãos.`,
      peticion: "Senhor, nós te pedimos pelos pais de família e por todos os que cuidam dos outros, para que ajam sempre com justiça, ternura e fidelidade."
    },
    {
      dia: 5,
      titulo: "O caminho para Belém",
      lectura: {
        referencia: "Lucas 2,1-5",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `Naqueles dias, o imperador Augusto mandou fazer um recenseamento de todos os habitantes do império. Esse primeiro recenseamento foi feito quando Quirino governava a província da Síria. Todos iam se registrar, cada um na sua cidade de origem. José, que era descendente da família de Davi, saiu de Nazaré, na Galileia, e subiu para a Judeia, até Belém, a cidade de Davi, para se registrar junto com Maria, sua esposa, que estava grávida.`
      },
      reflexion: `Às vezes temos dificuldade de ver Deus no que acontece na política ou na vida da sociedade. No entanto, este trecho nos mostra que Deus pode se servir até da ordem de um imperador que não o conhecia. O profeta Miqueias tinha anunciado que o Messias nasceria em Belém (Miqueias 5,1), e é justamente um recenseamento que leva José e Maria até lá.

Deus não age acima da nossa história, mas dentro dela: ele se serve de coisas simples, de pessoas e de situações comuns para fazer chegar até nós o seu amor. Maria e José cumprem o que lhes é pedido e fazem uma viagem longa e cansativa, quando ela está prestes a dar à luz. Não reclamam privilégios. Caminham com paciência, confiando que Deus vai com eles, mesmo quando o caminho é desconfortável.

O exemplo deles nos convida a descobrir Deus também nas dificuldades, nas obrigações de cada dia e naquilo que não podemos controlar.`,
      peticion: "Senhor, ajuda-nos a confiar no teu cuidado amoroso e a reconhecer a tua mão no que vivemos a cada dia, em nossa família e em nossa sociedade."
    },
    {
      dia: 6,
      titulo: "Não havia lugar na hospedaria",
      lectura: {
        referencia: "Lucas 2,6-7",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `Enquanto estavam em Belém, completou-se o tempo da gravidez, e Maria teve o seu filho primogênito; ela o enrolou em panos e o deitou numa manjedoura, porque não havia lugar para eles na hospedaria.`
      },
      reflexion: `Aquele que criou o universo chega ao mundo e não encontra um lugar digno para nascer. A frase «não havia lugar para eles na hospedaria» (Lucas 2,7) continua soando hoje como uma pergunta para cada um de nós. Jesus nasce na simplicidade, na periferia, longe do barulho e das seguranças do mundo.

Mais tarde, o próprio Jesus nos dirá que tudo o que fazemos ao menor dos nossos irmãos, fazemos a ele (Mateus 25,40). Cristo continua procurando abrigo no pobre, no migrante, no doente e em quem está sozinho. Quando fechamos a porta para eles, fechamos para ele.

Aproveitemos esta novena para olhar o nosso coração: está tão cheio de ocupações, de orgulho ou de coisas que já não sobra espaço para Jesus? Ou temos um lugar preparado para recebê-lo na sua Palavra e nos outros?`,
      peticion: "Senhor, dá-nos um coração acolhedor e generoso, para te receber abrindo as nossas portas a quem sofre com a solidão ou a necessidade."
    },
    {
      dia: 7,
      titulo: "O anúncio aos pastores",
      lectura: {
        referencia: "Lucas 2,8-14",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `Na mesma região havia alguns pastores que passavam a noite no campo, cuidando do rebanho em turnos. De repente, apareceu-lhes um anjo do Senhor, e a glória do Senhor brilhou ao redor deles. Eles sentiram muito medo, mas o anjo lhes disse: «Não tenham medo. Eu lhes anuncio uma notícia muito boa, que vai encher de alegria todo o povo: hoje, na cidade de Davi, nasceu para vocês um Salvador, que é o Messias, o Senhor. Este será o sinal para reconhecê-lo: vocês encontrarão um menino enrolado em panos e deitado numa manjedoura».

Naquele momento apareceu junto do anjo uma grande multidão de anjos do céu, que louvavam a Deus dizendo: «Glória a Deus nas alturas, e paz na terra aos homens por ele amados!».`
      },
      reflexion: `A grande notícia do nascimento de Jesus não chega primeiro aos sábios nem aos poderosos, mas a uns pastores humildes que cuidavam dos seus rebanhos de noite. Deus gosta de se mostrar aos simples.

Os anjos cantam glória a Deus nas alturas e anunciam paz na terra aos homens por ele amados (Lucas 2,14). É o mesmo canto com que começa o Glória da Missa. As traduções católicas dizem isso de maneiras diferentes, como os homens que ele ama ou aqueles em quem ele se compraz. Mas todas apontam para o mesmo, porque o texto original fala da bondade de Deus para conosco: a paz anunciada não depende de sermos bons primeiro, mas de que Deus nos ama primeiro.

Essa paz não é só o fim das brigas ou um momento de tranquilidade. É o shalom da Bíblia: estar reconciliados com Deus, com nós mesmos, com os outros e com toda a criação. É um presente gratuito, mas precisa ser acolhido: abrir o coração e deixar que o amor de Deus mude o nosso jeito de viver. Contemplemos hoje o presépio e deixemos que nos encha essa alegria profunda que ninguém nos pode tirar.`,
      peticion: "Senhor, derrama a tua paz sobre os povos que vivem em guerra e devolve a harmonia e o amor a cada um dos nossos lares."
    },
    {
      dia: 8,
      titulo: "Os pastores adoram o Menino",
      lectura: {
        referencia: "Lucas 2,15-20",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `Quando os anjos voltaram para o céu, os pastores comentaram entre si: «Vamos a Belém ver o que aconteceu, aquilo que o Senhor nos anunciou». Foram depressa, e lá estavam Maria e José, com o menino deitado na manjedoura. Quando o viram, contaram a todos a mensagem que tinham recebido sobre o menino, e quem os escutava ficava admirado.

E Maria guardava tudo isso e meditava em seu coração.

Depois, os pastores voltaram louvando a Deus e dando-lhe glória por tudo o que viram e ouviram: tudo tinha acontecido como lhes fora anunciado.`
      },
      reflexion: `Os pastores não ficam com a dúvida: vão depressa a Belém e encontram tudo como lhes tinha sido anunciado. Ao ver o Menino, contam a todos o que ouviram. São os primeiros a anunciar a Boa Notícia.

O Evangelho nos dá também um detalhe precioso sobre a Virgem: Maria guardava tudo isso e meditava em seu coração (Lucas 2,19). Ela não esquece o que Deus fez; guarda, pensa e partilha. Assim vive a Tradição da Igreja: não como um conjunto de costumes repetidos, mas como a memória viva da fé, que se medita e se transmite de geração em geração com a ajuda do Espírito Santo.

Maria nos ensina a fazer silêncio, a ler a Palavra com calma e a descobrir o que Deus quer nos dizer no que vivemos a cada dia, para que a sua Palavra crie raízes em nosso coração.`,
      peticion: "Senhor, ensina-nos a fazer silêncio para meditar a tua Palavra e a descobrir as tuas maravilhas nas coisas simples de cada dia."
    },
    {
      dia: 9,
      titulo: "A Palavra se fez carne",
      lectura: {
        referencia: "João 1,1-14",
        fuente: FONTE_BIBLICA_PT,
        esParafrasis: true,
        texto: `No princípio já existia a Palavra. A Palavra estava junto de Deus, e a Palavra era Deus. Desde o princípio ela estava junto de Deus. Por meio dela Deus fez todas as coisas; nada do que existe foi feito sem ela. Nela estava a vida, e a vida era a luz dos seres humanos. Essa luz brilha na escuridão, e a escuridão não conseguiu apagá-la.

Deus enviou um homem chamado João. Ele veio como testemunha, para falar da luz, para que todos cressem por meio dele. João não era a luz, mas veio dar testemunho da luz.

A luz verdadeira, que ilumina toda pessoa, vinha a este mundo. A Palavra estava no mundo, e embora o mundo tenha sido feito por meio dela, o mundo não a reconheceu. Veio para os seus, e os seus não a receberam. Mas a todos os que a receberam, aos que creem no seu nome, deu o poder de se tornarem filhos de Deus. Estes não nasceram do sangue, nem do desejo humano, nem da vontade de um homem, mas nasceram de Deus.

E a Palavra se fez carne e fez a sua morada entre nós. Vimos a sua glória, a glória que recebe do Pai como Filho único, cheio de graça e de verdade.`
      },
      reflexion: `Neste último dia, o começo do Evangelho de João nos leva ao centro do mistério do Natal. O menino da manjedoura não é apenas um grande profeta ou um bom mestre: é a Palavra eterna de Deus, o Filho, que existia desde sempre junto do Pai e por meio de quem tudo foi feito. E essa Palavra se fez carne e fez a sua morada entre nós (João 1,14). Assim como Deus habitava na tenda do deserto, onde se guardava a Arca da Aliança, agora ele habita entre nós em Jesus, que Maria carregou em seu ventre.

Deus não se contentou em falar conosco de longe: fez-se um de nós. Santo Atanásio, um dos grandes Padres da Igreja, explicava assim: o Filho de Deus se fez homem para que nós pudéssemos participar da vida de Deus (Sobre a Encarnação, 54). É o que ensina também a Escritura quando diz que somos chamados a participar da natureza divina (2 Pedro 1,4).

A salvação, então, não é só um perdão que vem de fora: é uma vida nova que Deus coloca dentro de nós. A todos os que recebem Jesus e creem nele, Deus dá a capacidade de serem seus filhos (João 1,12). Celebrar o Natal é celebrar que a nossa humanidade foi elevada e cheia de dignidade, e que podemos viver como filhos de Deus, com uma fé que se transforma em amor concreto.`,
      peticion: "Obrigado, Jesus, por te fazeres um de nós. Reina em nossos corações e ajuda-nos a viver sempre como verdadeiros filhos do Pai."
    }
  ]
};
