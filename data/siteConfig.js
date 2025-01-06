module.exports = {
  siteTitle: "Thibaud Ritzenthaler",
  siteDescription: `CV de Thibaud Ritzenthaler`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Thibaud Ritzenthaler',
  orcid: 'thibaudRtz',
  githubUsername: 'thibaud-ritzenthaler',
  authorAvatar: '/images/avatar.png',
  social: {
    orcid: 'https://orcid.org/0009-0005-8746-3212/',
    linkedin: 'https://www.linkedin.com/in/thibaud-ritzenthaler-418b5914a',
    github: 'https://github.com/thibaud-ritzenthaler/',
    email: 'thibaud@ritzenthaler.eu',
  },
  authorDescription: `Né en 1998 - Diplômé au niveau master en démographie et en informatique, je suis intéressé par la création de solutions permettant d'accompagner 
  la science ouverte dans le domaine de la démographie et des enquêtes quantitatives, notamment longitudinales.`,
  skills: [],
  expertise: [
    {
      name: 'R',
      icon: {
        name: 'FaRProject',
        library: 'fa'
      }
    },
    {
      name: 'SQL',
      icon: {
        name: 'FaDatabase',
        library: 'fa'
      }
    },
    {
      name: 'Python',
      icon: {
        name: 'FaPython',
        library: 'fa'
      }
    },
    {
      name: 'React',
      icon: {
        name: 'FaReact',
        library: 'fa'
      }
    },
    {
      name: 'DDI',
      icon: {
        name: 'HiOutlineDocumentText',
        library: 'hi'
      }
    },
    {
      name: 'Node JS',
      icon: {
        name: 'FaNodeJs',
        library: 'fa'
      }
    },
    {
      name: 'PHP',
      icon: {
        name: 'FaPhp',
        library: 'fa'
      }
    },
    {
      name: 'Docker',
      icon: {
        name: 'FaDocker',
        library: 'fa'
      }
    },
    {
      name: 'Devops',
      icon: {
        name: 'FaServer',
        library: 'fa'
      }
    },
  ],
  jobs: {
    labelAt: ' chez ',
    labelToday: 'Actuellement',
    list: [
      {
        company: {
          name: 'Generation & Gender Progamme (GGP)',
          link: "https://www.ggp-i.org/"
        },
        company2: {
          name: 'Institut National d\'Études Démographiques',
          link: "https://www.ined.fr/"
        },
        begin: {
          month: 'Oct',
          year: '2023',
        },
        duration: '',
        location: 'Paris - FR',
        occupation: 'Mise à disposition des métadonnées d\'une enquête internationale',
        contract: "CDD",
        description:
          'Dans l\'équipe du DataLab de l\'Ined et du Central Hub de GGP, mise à disposition des métadonnées pour les différents pays participant à l\'enquête, ' +
          'participation à l\'organisation du Central Hub de GGP, veille, promotion et participation à la norme DDI et à ses implémentations technique. ' +
          'Création de pipelines logiciels visant à automatiser la production et les tests, maintenance de la base de donnée contextuelle de GGP.',
      },
      {
        company: {
          name: 'Institut National d\'Études Démographiques',
          link: "https://www.ined.fr/"
        },
        begin: {
          month: 'mai',
          year: '2023',
        },
        duration: '3 mois',
        location: 'Paris - FR',
        occupation: 'Valorisation et évolution des données du DataLab',
        contract: "Stage",
        description:
          'Dans l\'équipe du DataLab de l\'Ined, recensement et valorisation des données démographiques, documentation ' +
          'pour les évolution en matière de bonnes pratiques, analyse et documentation pour les API. Création et documentation du style en SCSS.\n',
      },
      {
        company: {
          name: 'Blackbird',
          link: "https://black.bird.eu/"
        },
        begin: {
          month: 'oct',
          year: '2020',
        },
        duration: '2 ans',
        location: 'Strasbourg - FR',
        occupation: 'Analyste Developpeur Testeur Fullstack',
        contract: "Apprentissage",
        description:
          'Analyse, conception et développement de solutions e-commerce fullstack en concertation avec l’équipe Blackbird et ses clients.\n' +
          'Gestion de la connexion entre ERP, CRM, PIM et site E-commerce via API REST et GraphQl.\n',
      },
      {
        company: {
          name: 'Websurg, IRCAD',
          link: "https://websurg.com/"
        },
        begin: {
          month: 'sep',
          year: '2019',
        },
        duration: '1 an et 1 mois',
        location: 'Strasbourg - FR',
        occupation: 'Analyste Developpeur Testeur Web',
        contract: "Apprentissage",
        description:
          'Au sein de l\'équipe WebSurg, création d\'applications web internes comprenant traitement ' +
          'd\'images, machine learning, traitement de bases de données utilisateurs et interfaçage pour l’accueil des élèves.',
      },
      {
        company: {
          name: 'INTM',
          link: "https://www.intm.fr/"
        },
        begin: {
          month: 'avr',
          year: '2018',
        },
        duration: '5 mois',
        location: 'Strasbourg - FR',
        occupation: 'Analyste Developpeur Testeur',
        contract: "Stage puis CDD",
        description:
          'Analyse et développement d\'un chatbot permettant de répondre de manière rapide aux questions administratives ' +
          'des employés dans le cadre d\'une ESN avec Dialogflow.',
      },
    ]
  },
  publications: [
    {
      title: 'L\'étude internationale GGP, les enquêtes Erfi et leur documentation au standard DDI',
      company_medium: 'Ritzenthaler, T., Data-SHS 2024',
      date: {
        month: '12',
        year: '2024',
      },
      link: 'http://hdl.handle.net/20.500.12204/4GcKsJMBmeWvnDEMV_Vn',
      description:
        'Cette présentation illustre les efforts pour documenter et standardiser les enquêtes du programme "Generations & Gender Programme" (GGP), avec un focus particulier sur l\'enquête française "Erfi 2". Après avoir présenté les caractéristiques méthodologiques et les défis du recueil de données (échantillonnage diversifié, participation multimodale, faible rendement), l\'accent est mis sur la phase cruciale de documentation et de partage des données.',
    },
    {
      title: 'Processing cross-national longitudinal panel surveys to document rich metadata using automation and open standards: the case of the Generations & Gender Programme',
      company_medium: 'Ritzenthaler, T., 16th Annual European DDI User Conference (EDDI 2024)',
      date: {
        month: '12',
        year: '2024',
      },
      link: 'http://hdl.handle.net/20.500.12204/0Gfor5MBmeWvnDEMLPXl',
      description:
        'This work focuses on the automation and application of open standards to improve the processing of cross-national longitudinal panel surveys, as exemplified by the Generations & Gender Programme (GGP). The GGP, a theory-driven, multidisciplinary project, provides harmonised micro- and macro-level data on demographic behaviours and attitudes, with a particular focus on relationships between women and men, as well as intergenerational relationships. Its design emphasises longitudinal data collection, cross-national comparability, and metadata documentation through DDI-Lifecycle standards.',
    },
    {
      title: 'Making Data Comparable: Lessons learned from the Generations and Gender Programme',
      company_medium: 'Ritzenthaler, T., Grünwald, O., Censuses, surveys and data harmonisation in Europe',
      date: {
        month: '11',
        year: '2024',
      },
      link: 'http://hdl.handle.net/20.500.12204/9EQZZJMBGHEcdMY0SAEd',
      description:
        'This presentation explores advancements in harmonizing data within the Generations and Gender Programme (GGP), a longitudinal and multidisciplinary study that combines micro and macro data across broad age ranges. The focus lies on enhancing cross-national comparability and addressing the challenges posed by decentralized data collection methods, which often lead to variations in survey implementation. Key improvements include adopting centralized coordination, leveraging metadata processing, and integrating FAIR principles (Findable, Accessible, Interoperable, Reusable) for open science.',
    },
    {
      title: 'How comparable are the cross-national surveys in the Generations and Gender Survey Round II?',
      company_medium: 'Connolly, A., Ritzenthaler, T., Grünwald, O., Caporali, A., European Population Conference - EPC 2024',
      date: {
        month: '06',
        year: '2024',
      },
      link: 'http://hdl.handle.net/20.500.12204/F9j5JZABacEniQevZDuB',
      description:
        'International surveys implement methodologies aimed at achieving comparable data across countries. These methodologies encompass the same questionnaires across countries and guidelines about data collection operations. National teams may adapt the questionnaires and guidelines to the national context. After fieldwork, data processing and documentation take into account these adaptations. However, differences across countries may remain. This paper examines the compliance to the baseline questionnaire in the second round of the Generations and Gender Survey (GGS-II) and whether it has improved compared to the first round of the data collection.',
    },
  ],
  education: [
    {
      school: 'IDUS, Université de Strasbourg',
      degree: 'Master',
      field: 'Démographie',
      additionalInfo: 'Mention Bien',
      startYear: 2022,
      endYear: 2024,
      link: "https://idus.unistra.fr/"
    },
    {
      school: 'CESI',
      degree: 'Titre professionnel niveau 7 (Master)',
      field: 'Manager en architecture et applications logicielles des systèmes d’information',
      additionalInfo: 'Option expert développement',
      startYear: 2020,
      endYear: 2022,
      link: "https://strasbourg.cesi.fr/"
    },
    {
      school: 'IUT Robert Schumann, Université de Strasbourg',
      degree: 'Licence Professionnelle',
      additionalInfo: 'Mention Assez Bien',
      field: 'Conception et Développement d\'Applications Distribuées',
      startYear: 2019,
      endYear: 2020,
      link: "https://iutrs.unistra.fr/"
    },
    {
      school: 'IUT Robert Schumann, Université de Strasbourg',
      degree: 'Diplôme Universitaire de Technologie',
      field: 'Informatique',
      startYear: 2016,
      endYear: 2019,
      link: "https://iutrs.unistra.fr/"
    },
    {
      school: 'Lycée Marguerite Yourcenar, Erstein',
      degree: 'Baccalauréat',
      additionalInfo: 'Spécialité Mathématiques, Section Européenne Allemand, Option Latin',
      field: 'Scientifique',
      startYear: 2014,
      endYear: 2016,
      link: "http://www.lyc-yourcenar-erstein.site.ac-strasbourg.fr/"
    },
  ],
  languages: {
    title: 'Langues',
    list: [
      {
        language: 'Français',
        level: 'Langue maternelle',
        code: 'FR',
      },
      {
        language: 'Anglais',
        level: 'C1 - TOEIC : 980 - Fluid Written & Spoken',
        code: 'GB',
      },
      {
        language: 'Allemand',
        level: 'B1 - Gesprochen und geschrieben in Alltagssprache',
        code: 'DE',
      },
    ]
  },

  activities: [
    {
      structure: {
        name: "Un Effort Pour Un Réconfort",
        desc: "Association caritative de lutte contre le cancer et les maladies graves"
      },
      position: "Membre fondateur et vice président",
      link: "https://fr-fr.facebook.com/uneffortpourunreconfort/",
      image: "/images/uepur_square.jpg",
    },
    {
      structure: {
        name: "On s'fait une toile sur RBS",
        desc: "Emission sur le cinéma sur une radio locale"
      },
      position: "Chroniqueur, Animateur et Producteur",
      link: "https://onsfaitunetoile.fr/",
      image: "/images/on_sfait_une_toile.png",
    },
    {
      structure: {
        name: "Tengu Ryu Karaté-do",
        desc: "Shin'Kyuu Dojo"
      },
      position: "Praticant hebdomadaire - 5eme Ryu",
      link: "http://shinkyuudojo.free.fr/",
      image: "/images/tengu.png",
    },
  ],
  hobbies: [
    {
      name: 'Vélo',
      icon: 'FaBiking',
    },
    {
      name: 'Photographie',
      icon: 'FaCamera',
    },
    {
      name: 'Cinéma',
      icon: 'FaVideo',
    },
    {
      name: 'Jeux vidéo',
      icon: 'FaGamepad',
    },
    {
      name: 'Natation',
      icon: 'FaSwimmer',
    },
  ],
  siteUrl: 'https://thibaudritzenthaler.dev',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/favicon.jpg',
  resume: '/cv_Thibaud_Ritzenthaler.pdf',
  headerLinks: [
    {
      label: 'A Propos',
      url: 'about',
    },
    {
      label: 'Expérience',
      url: 'experience',
    },
    {
      label: 'Formation',
      url: 'education',
    },
    {
      label: 'Publications',
      url: 'publications',
    },
    //{
    //  label: 'Activités',
    //  url: 'activities',
    //},
    // {
    //   label: 'Contact',
    //   url: 'contact',
    // },
  ],
}
