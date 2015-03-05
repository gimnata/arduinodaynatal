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
        link: "http://eventick.com.br"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
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
        name: "Profº Ivanês Oliveira Alexandrino e Profº Dr. Antônio Pereira Júnior",
        photo: "themes/yellow-swan/img/ivanesoliveira.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda",	
          local: "Anfiteatro D",
          palestrante: "Profº Ivanês Oliveira Alexandrino e Profº Dr. Antônio Pereira Júnior",
          time: "9h00 às 9h50",
          description: "Descrição"
        }
      },
      {
        name: "Profº Ivanilson França Vieira Júnior",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Palestra",	
          local: "Anfiteatro F",
          palestrante: "Profº Ivanilson França Vieira Júnior",
          time: "9h00 às 9h35",
          description: "Descrição"
        }
      },
      {
        name: "Oficina A",
      	local: "Sala 1",
      	photo: "themes/yellow-swan/img/arduino.jpg",
      	time: "9h00 às 11h00",
      	description: "Básico (A1)"
      },
      {
        name: "Profº Ivanilson França Vieira Júnior e LAR",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda",	
          local: "Anfiteatro F",
          palestrante: "Profº Ivanilson França Vieira Júnior e LAR",
          time: "9h40 às 10h15",
          description: "Descrição"
        }
      },
      {
        name: "Tiago Tobias Freitas",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Palestra",	
          local: "Anfiteatro F",
          palestrante: "Tiago Tobias Freitas",
          time: "10h30 às 11h00",
          description: "Descrição"
        }
      },
      {
        name: "Profº Dr. Aquiles Medeiros Filgueira Burlamaqui",
        photo: "themes/yellow-swan/img/aquilesmedeiros.jpg",
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Palestra",	
          local: "Anfiteatro D",
          palestrante: "Profº Dr. Aquiles Medeiros Filgueira Burlamaqui",
          time: "10h45 às 11h25",
          description: "Descrição"
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
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Palestra",	
          local: "Anfiteatro D",
          palestrante: "Marcel da Câmara Ribeiro Dantas",
          time: "13h00 às 13h30",
          description: "Descrição"
        }
      },
      {
        name: "Oficina B",
      	local: "Sala 1",
      	photo: "themes/yellow-swan/img/arduino.jpg",
      	time: "13h00 às 15h00",
      	description: "Básico (A2)"
      },
      {
        name: "Oficina C",
      	local: "Sala 1",
      	photo: "themes/yellow-swan/img/arduino.jpg",
      	time: "13h00 às 15h00",
      	description: "Intermediário"
      },
      {
        name: "Potilive e Pyladies",
        photo: "themes/yellow-swan/img/pyladies.png",
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda",	
          local: "Anfiteatro D",
          palestrante: "Potilive e Pyladies",
          time: "13h35 às 14h15",
          description: "Descrição"
        }
      },
      {
        name: "Profº Dr. João Moreno Vilas Boas de Souza Silva",
        photo: "themes/yellow-swan/img/joaomoreno.png",
        bio: "Professor efetivo do IFRN com interesse nas áreas de Eletrônica Digital e Microcontroladores.",
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
        photo: "themes/yellow-swan/img/joaomoreno.png",
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Palestra",	
          local: "Anfiteatro D",
          palestrante: "Julio Cesar Paulino de Melo (LAR)",
          time: "14h30 às 15h00",
          description: "Descrição"
        }
      },
      {
        name: "Tiago Hérique Silva de Almeida e Eugênio Pacelly Brandão Araújo",
        photo: "themes/yellow-swan/img/avatar.png",
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda",	
          local: "Anfiteatro F",
          palestrante: "Tiago Hérique Silva de Almeida e Eugênio Pacelly Brandão Araújo",
          time: "14h30 às 15h00",
          description: "Descrição"
        }
      },
      {
        name: "Profº Dr. Leonardo Augusto Casillo",
        photo: "themes/yellow-swan/img/leonardoaugusto.jpg",
        bio: "Biografia",
        company: "Don't worry, be happy.",

        presentation: {
   		  name: "Mesa-redonda",	
          local: "Anfiteatro D",
          palestrante: "Profº Dr. Leonardo Augusto Casillo",
          time: "15h15 às 16h00",
          description: "Descrição"
        }
      },
      {
        name: "Encerramento",
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
