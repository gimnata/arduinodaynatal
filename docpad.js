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
      	local: "Anfiteatro D",
        name: "Check-in / Abertura",
        time: "8h00 às 8h50"
      },
      {
        name: "Profº Ivanês Oliveira Alexandrino e Profº Dr. Antônio Pereira Júnior",
        photo: "themes/yellow-swan/img/ivanesoliveira.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro A",

        presentation: {
   		  name: "Mesa-redonda",	
          local: "Anfiteatro D",
          palestrante: "Profº Ivanês Oliveira Alexandrino e Profº Dr. Antônio Pereira Júnior",
          time: "9h00 às 9h50",
          description: "Descrição"
        }
      },
      {
        name: "Oficina",
        photo: "themes/yellow-swan/img/arduino.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Sala 1",

        presentation: {
          title: "Oficina A",
          description: "Básico (A1)",
          time: "9h00 às 10h30"
        }
      },
      {
        name: "Oficina",
        photo: "themes/yellow-swan/img/arduino.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Sala 3",

        presentation: {
          title: "Oficina B",
          description: "Básico (A2)",
          time: "9h00 às 10h30"
        }
      },
      {
        name: "Profº Ivanilson França Vieira Júnior",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro C",

        presentation: {
          title: "Palestra 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "9h00 às 9h50"
        }
      },
      {
        name: "LAR",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro C",
        presentation: {
          title: "Palestra 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "9h40 às 10h15"
        }
      },
      {
        name: "Profº Dr. Antônio Pereira Júnior",
        photo: "themes/yellow-swan/img/antoniopereira.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro A",
        presentation: {
          title: "Palestra 4",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00 às 10h40"
        }
      },
      {
        name: "Tiago Tobias Freitas",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro C",
        presentation: {
          title: "Palestra 5",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h30 às 11h00"
        }
      },
      {
        name: "Profº Dr. Aquiles Medeiros Filgueira Burlamaqui",
        photo: "themes/yellow-swan/img/aquilesmedeiros.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro A",
        presentation: {
          title: "Palestra 6",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h45 às 11h25"
        }
      },
      {
        name: "Almoço",
        time: "11h25 às 13h00"
      },
      {
        name: "Marcel da Câmara Ribeiro Dantas",
        photo: "themes/yellow-swan/img/marcelribeiro.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro A",
        presentation: {
          title: "Palestra 7",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00 às 13h30"
        }
      },
      {
        name: "Oficina",
        photo: "themes/yellow-swan/img/arduino.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Sala 1",

        presentation: {
          title: "Oficina C",
          description: "Intermediário",
          time: "9h00 às 10h30"
        }
      },
      {
        name: "Oficina",
        photo: "themes/yellow-swan/img/arduino.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Sala 3",

        presentation: {
          title: "Oficina D",
          description: "Competição",
          time: "9h00 às 10h30"
        }
      },
      {
        name: "Profº Dr. João Moreno Vilas Boas de Souza Silva",
        photo: "themes/yellow-swan/img/joaomoreno.png",
        bio: "Professor efetivo do IFRN com interesse nas áreas de Eletrônica Digital e Microcontroladores.",
        company: "Anfiteatro C",
        presentation: {
          title: "Projetando com arduino: Dos drones à domática",
          description: "Pensem em um mundo com pequenas aeronaves não tripuladas cruzando nosso espaço aéreo, capazes de realizar até as tarefas mais banais. Agora imaginem casas totalmente conectadas aos nossos smartphones por meio da internet!  O que até décadas atrás poderia até ser considerada uma obra de ficção científica, hoje pode ser algo tão comum como pedir uma pizza ou mesmo ligar uma televisão. Os Drones e a Domótica se tornaram mais do que apenas “termos da moda” para ocupar um lugar de cada vez mais destaque em nosso estilo de vida. Seria ainda melhor, se pudéssemos desenvolver esses projetos com dispositivos de fácil programação, prototipação e baixo custo, não é verdade?! Bem vindo ao presente com a plataforma Arduino…",
          time: "13h40 às 14h20"
        }
      },
      {
        name: "Potilivre/Pyladies",
        photo: "themes/yellow-swan/img/pyladies.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro A",
        presentation: {
          title: "Palestra 9",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h35 às 14h14"
        }
      },
      {
        name: "Tiago Hérique Silva de Almeida",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro C",
        presentation: {
          title: "Palestra 10",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h30 às 15h00"
        }
      },
      {
        name: "Eugênio Pacelly Brandão Araújo",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro C",
        presentation: {
          title: "Palestra 11",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h30 às 15h00"
        }
      },
      {
        name: "LAR",
        photo: "themes/yellow-swan/img/avatar.jpeg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro A",
        presentation: {
          title: "Palestra 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h30 às 15h00"
        }
      },
      {
        name: "Profº Dr. Leonardo Augusto Casillo",
        photo: "themes/yellow-swan/img/leonardoaugusto.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Anfiteatro A",
        presentation: {
          title: "Palestra 13",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "15h15 às 16h00"
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
