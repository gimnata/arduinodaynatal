module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Arduino Day",
      description: "Conference description",
      date: "28 de Março",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "ECT - UFRN",
      address: "Escola de Ciência e Tecnologia - UFRN",
      city: "Natal",
      state: "Rio Grande do Norte"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se",
        link: "https://gim.typeform.com/to/MoOBPM"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://gimnatal.github.io/arduinodaynatal/",
      googleanalytics: "UA-56195918-2"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'information',
      'location',
      'schedule',
      'speakers',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      information: "Informações",
      location: "Local",
      schedule: "Cronograma",
      speakers: "Palestrantes",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
      	name: "Check-in / Abertura",
      	local: "Anfiteatro D",
      	photo: "themes/yellow-swan/img/arduino.jpg",
      	time: "8h00 às 8h50",
      	description: "-"
      	//presentation: {
      	//local: "Anfiteatro D",
        //name: "Check-in / Abertura",
        //time: "8h00 às 8h50"
    	//}
      },
      {
        name: "Profº Me. Ivanilson França Vieira Júnior",
        photo: "themes/yellow-swan/img/Ivanilson.jpg",
        bio: "O Profº Me. Ivanilson França Vieira Júnior possui Graduação em Tecnologia em Desenvolvimento de Software pelo Centro Federal de Educação Tecnológica do Rio Grande do Norte, possui mestrado em Sistemas de Computação pela Universidade Federal do Rio Grande do Norte. Tem experiência na área de Ciência da Computação, com ênfase em Sistemas de Informação, atuando principalmente nos seguintes temas: Multimídia, Sistemas Distribuídos e Redes de Computadores.",
        company: "Don't worry, be happy.",

        presentation: {
        name: "Palestra", 
          local: "Anfiteatro F",
          palestrante: "Profº Me. Ivanilson França Vieira Júnior",
          time: "9h00 às 9h35",
          description: "Descrição"
        }
      },
      {
        name: "Profº Ivanês Oliveira Alexandrino e Profº Dr. Antônio Pereira Júnior",
        photo: "themes/yellow-swan/img/ivaneseantonio.png",
        bio: "O Profº de física Ivanês Oliveira Alexandrino leciona na Escola Estadual Tristão de Barros, em Currais Novos. Ele foi orientador do projeto “Equilíbrio: para uma inclusão sustentável e um meio ambiente melhor” que foi o vencedor de um prêmio internacional da Samsung. O Profº Dr. Antônio Pereira Júnior possui Mestrado e Doutorado em Ciências Biológicas (Biofísica) pela Universidade Federal do Rio de Janeiro e Pós-Doutorado no Duke University Medical Center. Atualmente é professor adjunto da Universidade Federal do Rio Grande do Norte e coordenador do Programa Escolas Acadêmicas.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda: Agentes da transformação",	
          local: "Anfiteatro D",
          palestrante: "Profº Ivanês Oliveira Alexandrino e Profº Dr. Antônio Pereira Júnior",
          time: "9h00 às 9h50",
          description: "O professor Ivanês orientador do projeto vencedor do prêmio Samsung e o professor Antônio Pereira coordenador do Programa Escolas Acadêmicas participam de uma discussão sobre a influência da róbotica no ensino fundamental e médio, de como o perfil maker possibilita grandes mudanças na realidade da nossa sociedade."
        }
      },
      {
        name: "Oficina A",
      	local: "Sala 1",
      	photo: "themes/yellow-swan/img/arduino.jpg",
      	time: "9h00 às 11h00",
      	description: "Básica A"
      },
      {
        name: "Profº Me. Ivanilson França Vieira Júnior, Lucas Pereira Wanderley Oliveira e Arthur Andrade Bezerra",
        photo: "themes/yellow-swan/img/Ivanilson.jpg",
        bio: "Lucas Pereira Wanderley Oliveira é graduando em Ciências e Tecnologia, trabalha no Laboratório de Automação e Robótica no projeto de um veículo autônomo não tripulado, na área de controle. Cinco anos de experiência com Arduino e dois anos de Raspberry. Muito interesse em automação em geral e quadricópteros. Arthur Andrade, Trabalha no Laboratório de Automação e Robótica da UFRN, atua no projeto da Plataforma Imersiva Multidimensional, mini hexapod project (anterior) com conhecimento em Microcontroladores, programação, eletrônica, gambiarras e um pouco te antenas. Tem interesse na area de Telecomunicações",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda: Meu primeiro Drone",	
          local: "Anfiteatro F",
          palestrante: "Profº Me. Ivanilson França Vieira Júnior, Lucas Pereira Wanderley Oliveira e Arthur Andrade Bezerra",
          time: "9h40 às 10h15",
          description: "Um bate-papo com hobbistas do aeremodelismo e quadricopteros sobre o processo de montagem de um VANT. O que é um VANT? Onde compra peças? Quais etapas seguir?"
        }
      },
      {
        name: "Tiago Tobias Freitas",
        photo: "themes/yellow-swan/img/TiagoTobias.jpg",
        bio: "Tiago Tobias Freitas é técnico em eletrônica.  Vem cursando Bacharelado em C&T e atuando na área de microoeletrônica desde 2003, onde desenvolve projetos voltados para automação industrial. Atuou na área acadêmica ministrando aulas em cursos técnicos e profissionalizante no SENAI entre 2006 e 2012,  onde elaborou projetos premiados e publicados em revista especializada. Atualmente é sócio proprietário da LUNALTAS, empresa incubada no INOVA METRÓPOLE, que tem foco em desenvolvimento de produtos de software e hardware com caráter inovador. Membro do grupo de pesquisa em eficiência energética da Escola de Ciências e Tecnologia - UFRN, onde desenvolve sistemas embarcados prototipados na plataforma Arduino, com intuito de aumentar a eficiência energética de instalações elétricas prediais e industriais.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Projetando com Arduino - dos Drones à Domótica",	
          local: "Anfiteatro F",
          palestrante: "Tiago Tobias Freitas",
          time: "10h30 às 11h00",
          description: "Com grande conhecimento em eletrotecnica e em desenvolvimento de projetos com sistemas embarcados, Tiago fala um pouco sobre o shield  do ADE758 e sua biblioteca para Arduino, e mostra como qualquer um pode fazer seu próprio medidor de energia inteligente."
        }
      },
      {
        name: "Profº Dr. Aquiles Medeiros Filgueira Burlamaqui",
        photo: "themes/yellow-swan/img/aquilesmedeiros.jpg",
        bio: "O Profº Dr.  Aquiles Filgueira Burlamaqui possui graduação em Ciências da Computação, mestrado em Sistemas e Computação e doutorado em Engenharia Elétrica pela Universidade Federal do Rio Grande do Norte. É pesquisador do Laboratório Natalnet-DCA , atuando principalmente nos seguintes temas: Ambientes Virtuais Colaborativos Massivos, TV Digital Interativa, Sistemas Web, Aplicações de Robótica, Realidade Virtual e Engenharia de Software.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Educação e robótica, tudo a ver - Parte II",	
          local: "Anfiteatro D",
          palestrante: "Profº Dr. Aquiles Medeiros Filgueira Burlamaqui",
          time: "10h45 às 11h25",
          description: "Um dos participantes do 1º Arduino Day Natal #GIM, o Professor Aquiles e seus alunos estão de volta!  Irão falar sobre a missão do projeto Um Robô por Aluno (URA) e de como transformar a educação do RN e do Brasil utilizando a robótica como carro-chefe desta jornada."
        }
      },
      {
        name: "Almoço",
      	photo: "themes/yellow-swan/img/arduino.jpg",
      	time: "11h25 às 13h00",
      	description: "-"
      },
      {
        name: "Marcel da Câmara Ribeiro Dantas",
        photo: "themes/yellow-swan/img/marcelribeiro.jpg",
        bio: "Marcel é graduando em Engenharia de Computação e Automação Industrial na Universidade Federal do Rio Grande do Norte (UFRN), pesquisador no Laboratório de Inovação Tecnológica em Saúde (LAIS) no Hospital Universitário Onofre Lopes (HUOL), ativista de Software Livre com expertise em Telerradiologia, Telemedicina e Automação Hospitalar.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Como o Arduino e o movimento de Software e Hardware livre mudaram a Engenharia Biomédica",	
          local: "Anfiteatro D",
          palestrante: "Marcel da Câmara Ribeiro Dantas",
          time: "13h00 às 13h30",
          description: "A influência do arduino na construção de equipamentos e sistemas que auxiliam a área da saúde."
        }
      },
      {
        name: "Oficina B",
      	local: "Sala 1",
      	photo: "themes/yellow-swan/img/arduino.jpg",
      	time: "13h00 às 15h00",
      	description: "Básica B"
      },
      {
        name: "Oficina C",
      	local: "Sala 1",
      	photo: "themes/yellow-swan/img/arduino.jpg",
      	time: "13h00 às 15h00",
      	description: "Intermediária"
      },
      {
        name: "Potilive e Pyladies",
        photo: "themes/yellow-swan/img/pypoti.png",
        bio: "Potilivre é um Grupo de Usuários de Software Livre atuante no estado do Rio Grande do Norte, fundado em 2013. Somos uma organização independente, composta por voluntários, para o apoio à filosofia e o uso do Software Livre. Sua missão é servir como principal ponto de integração entre as comunidades de Software Livre do nosso Estado, oferecendo uma estrutura simples e eficiente para o direcionamento e a organização dos esforços colaborativos. Pyladies é um grupo internacional, com foco em ajudar mais mulheres a tornarem-se participantes ativas e líderes de comunidades Python de código aberto. Sua missão é promover, educar e impulsionar a existência de uma comunidade Python diversificada através de sensibilização, educação, conferências, eventos e encontros sociais. Nosso objetivo não é segregar, mas sermos um meio de integrar as mulheres a programação.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda: Eu faço programa e você?",	
          local: "Anfiteatro D",
          palestrante: "Potilive e Pyladies",
          time: "13h35 às 14h15",
          description: "Como dar o seu primeiro passo no mundo da programação e um pouco mais sobre o software livre."
        }
      },
      {
        name: "Profº Dr. João Moreno Vilas Boas de Souza Silva",
        photo: "themes/yellow-swan/img/joaomoreno.png",
        bio: "O Profº Dr. João Moreno Vilas Boas de Souza Silva possui graduação em Tecnologia em Automação Industrial pelo Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte, Especialização, Mestrado e Doutorado em Engenharia Mecânica pela Universidade Federal do Rio Grande do Norte. Possui experiência profissional nas áreas de automação, desenvolvimento de software e refino de petróleo. É professor efetivo do IFRN com interesse nas áreas de Eletrônica Digital e Microcontroladores.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Projetando com arduino: Dos drones à domática",	
          local: "Anfiteatro F",
          palestrante: "Profº Dr. João Moreno Vilas Boas de Souza Silva",
          time: "13h40 às 14h20",
          description: "Pensem em um mundo com pequenas aeronaves não tripuladas cruzando nosso espaço aéreo, capazes de realizar até as tarefas mais banais. Agora imaginem casas totalmente conectadas aos nossos smartphones por meio da internet!  O que até décadas atrás poderia até ser considerada uma obra de ficção científica, hoje pode ser algo tão comum como pedir uma pizza ou mesmo ligar uma televisão. Os Drones e a Domótica se tornaram mais do que apenas “termos da moda” para ocupar um lugar de cada vez mais destaque em nosso estilo de vida. Seria ainda melhor, se pudéssemos desenvolver esses projetos com dispositivos de fácil programação, prototipação e baixo custo, não é verdade?! Bem vindo ao presente com a plataforma Arduino…"
        }
      },
      {
        name: "Julio Cesar Paulino de Melo (LAR)",
        photo: "themes/yellow-swan/img/JulioCesar.jpg",
        bio: "Julio Cesar Paulino de Melo é graduado em engenharia de computação, com ênfase em automação na Universidade Federal do Rio Grande do Norte. Possui mestrado em Engenharia Elétrica e Computação pela UFRN. Tem experiências na área de sistema de informação, ambientes vituais interativos, TV digital, Aplicações interativas para TV digital, sistemas embarcados e sistemas dinamico e estaticos em FPGA.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Bem-vindo ao LAR  - Projetos acadêmicos baseados em Arduino.",	
          local: "Anfiteatro D",
          palestrante: "Julio Cesar Paulino de Melo (LAR)",
          time: "14h30 às 15h00",
          description: "O Laboratório de Automação e Robótica da Escola de Ciências e Tecnologia (ECT) desenvolve diversos projetos de??? O que vem sendo feito no lab da ECT. #vant #plataforma entre outros projetos."
        }
      },
      {
        name: "Tiago Hérique Silva de Almeida e Eugênio Pacelly Brandão Araújo",
        photo: "themes/yellow-swan/img/Eugenio.jpg",
        bio: "Tiago Hérique Silva de Almeida é graduando em Ciências e Tecnologia com ênfase em Eng. Mecatrônica na UFRN, é o fundador do Grupo Interdisciplinar de Mecatrônica (GIM) da UFRN. Tem experiência na área de Robótica, Mecatrônica e Automação. Eugênio Pacelly Brandão Araújo é graduando em Ciências e Tecnologia e atualmente é voluntário no projeto Nvant e também é um dos projetista da plataforma de simulação de sistemas embarcados em um projeto da Universidade Federal do Rio Grande do Norte.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda: A arte da gambiarra",	
          local: "Anfiteatro F",
          palestrante: "Tiago Hérique Silva de Almeida e Eugênio Pacelly Brandão Araújo",
          time: "14h30 às 15h00",
          description: "Ctrl+C e Ctrl+V  e um pouco de criatividade, como a prototipagem tem crescido e se tornado uma prática diária do LAR. Desde peças modeladas em 3D à cópias feitas em moldes de gesso."
        }
      },
      {
        name: "Profº Dr. Leonardo Augusto Casillo",
        photo: "themes/yellow-swan/img/leonardoaugusto.jpg",
        bio: "O Profº Dr. Leonardo Augusto Casillo possui graduação em Engenharia da Computação pela Universidade Potiguar, mestrado em Sistemas e Computação  e doutorado em Engenharia Elétrica e de Computação pela Universidade Federal do Rio Grande do Norte. É professor da Universidade Federal Rural do Semi-Árido desde 2009, lecionando disciplinas de Circuitos Digitais, Microprocessadores e Microcontroladores. Tem experiência na área de Ciência da Computação, com ênfase em hardware, atuando principalmente nos seguintes temas: processadores acadêmicos, processadores RISP e arquiteturas microprogramadas.",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "O arduino como um motivador acadêmico",	
          local: "Anfiteatro D",
          palestrante: "Profº Dr. Leonardo Augusto Casillo",
          time: "15h15 às 16h00",
          description: "Descobri o arduino! E agora? Os desafios acadêmicos de transformar uma ferramenta de prototipagem em uma ferramenta de motivação em um curso que possui software como essência, satisfazer as expectativas dos amantes de hardware e despertar os interesses dos não-simpatizantes. Um estudo de caso próprio vivido no curso de Ciência da Computação na UFERSA-Mossoró."
        }
      },
      {
        name: "Encerramento",
        local: "Anfiteatro D",
        time: "16h00 às 17h00"
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "4Life",
        logo: "themes/yellow-swan/img/4life.png",
        url: "http://www.4lifeidiomas.com/"
      },
      {
        name: "hipervidros",
        logo: "themes/yellow-swan/img/hipervidros.png",
        url: "http://www.hipervidrosnatal.com.br"
      },
      {
        name: "brindern",
        logo: "themes/yellow-swan/img/brindern.png",
        url: "http://www.brindern.com"
      },
      {
      	name: "Miranda",
      	logo: "themes/yellow-swan/img/miranda.png",
      	url: "http://www.miranda.com.br"
      }

    ],

    // List of Partners
    partners: [
      {
        name: "ECT",
        logo: "themes/yellow-swan/img/ect.png",
        url: "http://braziljs.org"
      },
      {
        name: "Arduino.cc",
        logo: "themes/yellow-swan/img/arduino.jpg",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
