export const AGENDA_ONLINE = [
    {
        name: "Segunda-feira",
        data: "11/05",
        link: "https://www.youtube.com/watch?v=FjdEjAqcBuc",
        talks: [            
            {
                title: 'APIs Escaláveis com Node.js & Arquitetura Serverless',
                description: 'Node.Js é escalável. O Azure também é um serviço de nuvem escalável. E o que acha de usar os dois juntos e mais o Serverless?! Quais os benefícios de usarmos uma Arquitetura Serverless em aplicações Node.js integradas com Azure? Quais são os ganhos em usar essas tecnologias? Durante a palestra, estarei falando sobre como podemos definir uma arquitetura altamente escalável usando Node.js com Azure Functions baseado numa arquitetura Serverless. E claro que vai ter uma super demo em como podemos criar um Serverless Function App no Azure! :) ',
                startTime: { hour: '21', minute: '00' },
                speakers: [{
                    name: 'Glaucia Lemos',
                    company: 'Microsoft',
                    role: 'Cloud Advocate de JavaScript',
                    bio: 'Glaucia Lemos é Cloud Advocate de JavaScript 🥑 na Microsoft. Ama realizar contribuições em projetos Open Source. Atua como Member & Contributor no Node.js Foundation e no React Community realizando contribuições nas traduções do site Nodejs.org e Reactjs.org para o português. Participa de comunidades bastante inclusivas, como a WoMakersCode – uma organização focada em ajudar, inspirar e capacitar ainda mais mulheres na tecnologia a obter uma oportunidade de emprego. Sua maior paixão: compartilhar conhecimento com outras pessoas!',
                    picture: '/assets/speakers/glaucia-lemos.png',
                    socialProfiles: [
                        {
                            name: 'github',
                            url: 'https://github.com/glaucia86/'
                        },
                        {
                            name: 'linkedin',
                            url: 'https://www.linkedin.com/in/glaucialemos/'
                        },
                        {
                            name: 'twitter',
                            url: 'https://github.com/glaucia86/'
                        }
                    ]
                }],
                type: 'talk'
            },
            {
                title: 'Observabilidade com o Elastic Stack',
                description: 'A observabilidade tem um papel muito importante para as empresas, pois através dela é possível prever e resolver vários problemas. Nessa paletsra, você verá como alcançar um bom nível de observabilidade no seu ambiente de infraestrutura e na sua aplicação, utilizando o Elastic Stack.',
                startTime: { hour: '21', minute: '40' },
                speakers: [{
                    name: 'Beatriz Oliveira',
                    company: 'Cappta Pagamentos (Stone Co)',
                    role: 'Analista de Infraestrutura',
                    bio: 'Beatriz, atualmente é Analista de Infraestrutura na Cappta Pagamentos (Stone Co). É graduada em Sistemas de Informação, Pós Graduada em Gerenciamento de Projetos e MBA em Arquitetura de Soluções. Participa como voluntária das comunidades PHPWomen, Womakerscode e SysAdminas que tem como objetivo incentivar a atuação feminina na área de tecnologia. Em 2020, ganhou o prêmio de Elastic Gold Contributor, por suas colaborações com a ferramenta e comunidade da Elastic no Brasil.',
                    picture: '/assets/speakers/Beatriz.png',
                    socialProfiles: [
                        {
                            url: 'https://www.linkedin.com/in/thebeaoliveira/',
                            name: 'linkedin'
                        },
                        {
                            url: 'https://twitter.com/thebeaoliveira',
                            name: 'twitter'
                        },
                        {
                            url: 'https://github.com/thebeaoliveira',
                            name: 'github'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Docker no ambiente de desenvolvimento',
                description: 'Como o uso de Docker no seu Desktop pode ajudar a melhorar a sua produtividade?',
                startTime: { hour: '22', minute: '20' },
                speakers: [{
                    name: 'Carlos Dos Santos',
                    company: 'CDS Informática',
                    role: 'Sócio fundador',
                    bio: 'Sócio fundador da CDS Informática Ltda, com mais de 25 anos de experiência no desenvolvimento de software',
                    picture: '/assets/speakers/CarlosDosSantos.png',
                    socialProfiles: [
                        {
                            name: 'linkedin',
                            url: 'http://www.linkedin.com/in/cdssoftware'
                        },
                        {
                            name: 'twitter',
                            url: 'http://www.twitter.com/cdssoftware'
                        },
                        {
                            name: 'facebook',
                            url: 'https://www.facebook.com/carloscds '
                        }
                    ]
                }],
                type: 'talk'
            }
        ]
    },
    {
        name: "Terça-feira",
        data: "12/05",
        link: "https://www.youtube.com/watch?v=CQg5q_CLzn8",
        talks: [
            {
                title: '14 princípios para sua equipe de tecnologia!',
                description: 'Toda equipe deveria organizar seus princípios de funcionamento. Princípios nos ajudam a definir menos regras e ter mais movimentos de reflexão e decisões baseadas no contexto em questão. O livro toyota way apresenta 14 princípios, Deming possui seus 14 pontos de gestão, e nesta conversa vou trazer 14 princípios que venho aprendendo e aplicando no meu trabalho em equipes de tecnologia.',
                startTime: { hour: '21', minute: '00' },
                speakers: [{
                    name: 'Daniel Wildt',
                    company: 'Wildtech',
                    role: 'Mentor',
                    bio: 'Mentor @ Wildtech, Content @ danielwildt.com, Founder @ uMov.me',
                    picture: '/assets/speakers/DanielWildt.jpeg',
                    socialProfiles: [
                        {
                            name: 'linkedin',
                            url: 'https://www.linkedin.com/in/danielwildt/'
                        }
                    ]
                }],
                type: 'talk'
            },
            {
                title: 'Kotlin vs Go: A guerra das corotinas',
                description: 'Com a banalização dos computadores multicores a programação concorrente se tornou algo comum no dia a dia do desenvolvedor. Kotlin é uma linguagem orientada a objetos e Funcional, por outro lado Go é simples por design, ambas implementam os mesmo conceitos. Essa talk vai debater sobre concorrência estruturada e por que ela é benéfica para o desenvolvedor.',
                startTime: { hour: '21', minute: '40' },
                speakers: [{
                    name: 'Alex Rios',
                    company: 'Contabilizei',
                    role: 'Tech Leader',
                    bio: '13 anos entregando software que impacta milhões de usuários. Tech Leader em empresas de bilhetagem eletronica, pagamentos e telecom. Organizador das comunidades de Kotlin e Go na cidade de Curitiba.',
                    picture: '/assets/speakers/AlexRios.jpeg',
                    socialProfiles: [
                        {
                            name: 'github',
                            url: 'https://github.com/alexrios'
                        },
                        {
                            name: 'linkedin',
                            url: 'https://www.linkedin.com/in/alex-rios-28706219/'
                        },
                        {
                            name: 'twitter',
                            url: 'https://www.twitter.com/alextrending/'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Por que Elixir?',
                description: 'Nesta talk irei apresentar o que muitos consideram o maior ponto forte do Elixir: the BEAM (vulgo VM do Erlang). Apesar de ser uma linguagem nova Elixir trabalha em uma plataforma que já está a anos no mercado e é extensivamente utilizada em telecomunicações. Irei mostrar porque faz muito sentido utilizar esta plataforma para inúmeros tipos de aplicação e principalmente aplicações web, desmantelando um pouquinho o funcionamento interno da VM. Quem sabe eu até mostre um pouco dos pontos negativos, mas só um pouco ok? ;)',
                startTime: { hour: '22', minute: '20' },
                speakers: [{
                    name: 'Kelvin Raffael Stinghen',
                    company: 'Toggl Plan',
                    role: 'Desenvolvedor Backend',
                    bio: 'Desenvolvedor Backend no Toggl Plan, apaixonado pelo Elixir, por Software Open Source e por aprender coisas novas.',
                    picture: '/assets/speakers/Kelvin.jpeg',
                    socialProfiles: [
                        {
                            name: 'github',
                            url: 'https://github.com/kelvinst'
                        },
                        {
                            name: 'twitter',
                            url: 'https://twitter.com/kelvinsti'
                        },
                        {
                            name: 'linkedin',
                            url: 'https://www.linkedin.com/in/kelvinst/'
                        }
                    ]
                }],
                type: 'talk'
            }
        ]
    },
    {
        name: "Quarta-feira",
        data: "13/05",
        talks: [
          {
                title: 'Code Review: The Good Parts!',
                description: 'Code Reviews são necessários em um fluxo de trabalho de desenvolvimento, mas o que acontece ao submeter ou receber um review é tão divertido quanto arrancar um dente. Transforme a cultura de code review de sua equipe com algumas dicas & truques para melhorar a qualidade do código e as relações de trabalho, simultaneamente.',
                startTime: { hour: '21', minute: '00' },
                speakers: [{
                    name: 'Cynthia Zanoni',
                    company: 'Microsoft',
                    role: 'Microsoft Developer Relations Lead LatAm',
                    picture: '/assets/speakers/CynthiaZanoni.jpg',
                    bio: 'Desenvolvedora de Software com 10+ anos de experiência em tecnologias Open Source e Acessibilidade, é fundadora da WoMakersCode - uma comunidade global focada em ajudar, inspirar e capacitar ainda mais mulheres em tecnologia que as ajuda a ganhar uma oportunidade de emprego e foi reconhecida pela Mozilla Foundation (2016) como uma das mulheres técnicas mais influentes da América Latina, apoio à diversidade e inclusão.',
                    socialProfiles: [
                        {
                            url: 'https://twitter.com/cynthiazanoni',
                            name: 'twitter'
                        },
                        {
                            url: 'https://github.com/cyz/',
                            name: 'github'
                        },
                        {
                            url: 'https://www.linkedin.com/in/cynthiazanoni/',
                            name: 'linkedin'
                        }

                    ]
                }],
                type: 'talk'
            },
            {
                title: 'Desenvolvimento nativo em 2020 compensa?',
                description: 'Questionar sobre a atual situação do desenvolvimento mobile, com dados sobre o uso de smartphones, cases de empresas que se aproveitaram desse cenário, e então falar sobre a evolução do desenvolvimento mobile e as tecnologias e frameworks envolvidos, e comparar as principais tecnologias do mercado: React Native, Flutter e desenvolvimento Nativo.',
                startTime: { hour: '21', minute: '40' },
                speakers: [{
                    name: 'Diefferson Inocencio Santos',
                    company: 'Juno',
                    role: 'Tech Lead',
                    bio: 'Desenvolvedor e entusiasta de tecnologias mobile, vários anos de experiência divididos entre startups e multinacionais.',
                    picture: '/assets/speakers/diefferson.png',
                    socialProfiles: [
                        {
                            url: 'https://github.com/diefferson',
                            name: 'github'
                        },
                        {
                            url: 'https://twitter.com/Dieeefferson',
                            name: 'twitter'
                        },
                        {
                            url: 'https://www.linkedin.com/in/diefferson-inocencio-santos-582066ba/',
                            name: 'linkedin'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Escalando seu Sistema com Fila em Banco',
                description: 'Um dos principais pilares para escalar uma aplicação web é o uso mensageria, não à toa temos diversos Brokers para enfileirar as mensagens a fim de processá-las num ritmo que nossa aplicação consiga atender. Mas será mesmo que precisamos adotar um Broker?  A verdade é que não; por mais controverso que pareça, podemos usar um banco de dados relacional como uma fila de mensagens, aproveitando sua natureza ACID e todo seu controle de locking e concorrência. Com isso, obtemos um alto grau de performance e principalmente escalabilidade sem a necessidade de abrir mão do poder de um banco de dados ou ter que adicionar um novo componente de software (como um JMS Broker) na arquitetura da solução.',
                startTime: { hour: '22', minute: '20' },
                speakers: [{
                    name: 'Rafael Ponte',
                    company: 'TriadWorks',
                    role: 'Software Developer',
                    bio: 'Principe do Oceano, Marajá dos Legados e Rei da Gambiarras. Desenvolvedor cansado com +15 anos de experiência com desenvolvimento de software na plataforma Java e integração de sistemas. Além disso, é coordenador do maior grupo de discussão JSF do Brasil (JavaSF) e do maior JUG do Ceará (JavaCE). Também já palestrou em eventos importantes no Brazil, como QCONSP, CEJS, Agile Brasil, JavaCE Conference, entre outros. Nas horas vagas, um podcaster fracassado no @devscansados.',
                    picture: '/assets/speakers/RafaelPonte.png',
                    socialProfiles: [
                        {
                            name: 'github',
                            url: 'https://github.com/rponte'
                        },
                        {
                            name: 'twitter',
                            url: 'https://twitter.com/rponte'
                        }
                        ,
                        {
                            name: 'linkedin',
                            url: 'https://www.linkedin.com/in/rponte/'
                        }
                    ]
                }],
                type: 'talk'
            }]
    },
    {
        name: "Quinta-feira",
        data: "14/05",
        talks: [
            {
                title: 'Preload Strategies: Step in Time, Step in Time!',
                description: 'Can you design your app to load progressively and predictively, creating a fast and immersive user experience that steps in time? Impossible you say? “Everything is possible, even the impossible.” (- Mary Poppins). Your users care about how fast your app works. Learn how to load just what they need when they need it, adapt your user experience to low or no wifi, and experience what supercalifragilisticexpialidocious feels like. See how understanding user behavior and combining that with preloading strategies and RxJS can make a hugely positive impact on their user experience. You’ll never need a reason, never need a rhyme, when you make your app step in time.',
                startTime: { hour: '21', minute: '00' },
                speakers: [{
                    name: 'John Papa',
                    company: 'Microsoft',
                    role: 'Principal Developer Advocate',
                    picture: '/assets/speakers/john_papa.png',
                    bio: 'John Papa é um pai e um marido dedicado, Principal Developer Advocate na Microsoft e é veterano nos programas Google Developer Expert, Microsoft RD e MVP. Suas paixões são implantar e ensinar tecnologias da Web modernas e divertir-se na Disney com sua família. John é um coapresentador do podcast popular Adventures in Angular (Aventuras em Angular), autor do Angular Style Guide (Guia de estilo do Angular) e de vários cursos populares da Pluralsight.',
                    socialProfiles: [
                        {
                            url: 'https://twitter.com/john_papa',
                            name: 'twitter'
                        },
                        {
                            url: 'https://github.com/johnpapa',
                            name: 'github'
                        },
                        {
                            url: 'https://linkedin.com/in/papajohn',
                            name: 'linkedin'
                        }
        
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Ambientes de Teste Dinâmicos com Helm e Kubernetes',
                description: 'Todo desenvolvedor sonha com um ambiente completo onde possa testar seu código sem atrapalhar o desenvolvimento de seus colegas, o problema com este sonho é que esta infraestrutura é complexa demais para ser criada e destruída manualmente. É ai que podemos usar o poder do Kubernetes e do Helm para criarmos ambientes de testes individuais totalmente dinâmicos para cada um dos seus commits!',
                startTime: { hour: '21', minute: '40' },
                speakers: [{
                    name: 'Lucas Santos',
                    company: 'Microsoft',
                    role: 'Cloud Advocate',
                    bio: 'Lucas é Cloud Advocate na Microsoft. Apaixonado por tecnologia e, desde 2011, trabalhando com aplicações de alta escalabilidade e desempenho. Tem uma grande paixão por ensinar e aprender, escritor do livro "Kubernetes: Tudo sobre orquestração de contêineres", também é Microsoft MVP e Google Developer Expert. Member & Contributor na Node.js Foundation realizando contribuições nas traduções das documentações do runtime Node.js. Também é co-organizador de comunidades como NodeBR, JSSP, VueJs SP, Typescript BR, NodeSchool SP, TrainingCenter e ABCDev. No tempo livre, adora música, games e fazer cerveja!',
                    picture: '/assets/speakers/lucas-santos.png',
                    socialProfiles: [
                        {
                            name: 'github',
                            url: 'http://github.com/khaosdoctor'
                        },
                        {
                            name: 'linkedin',
                            url: 'https://linkedin.com/in/lhs-santos'
                        },
                        {
                            name: 'twitter',
                            url: 'https://twitter.com/_staticvoid'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Desenvolvimento Android Profissional',
                description: 'Aprender a fazer um aplicativo Android não é tão difícil quanto pensam, há diversos ótimos materiais na Internet, vídeo aulas e excelentes livros no mercado. Por outro lado, ser uma pessoa desenvolvedora que garante suas entregas, adota as melhores práticas e oferece um produto de qualidade é algo que leva tempo, estudo e experiência. Nessa palestra, Neto Marin vai falar sobre os desafios em se tornar uma pessoa desenvolvedora profissional, quais as melhores práticas para projetos Android e algumas outras dicas que vão te ajudar a alcançar um nível melhor de entrega',
                startTime: { hour: '22', minute: '20' },
                speakers: [{
                    name: 'Neto Marin',
                    company: 'Google',
                    role: 'Developer Advocate',
                    bio: 'Neto Marin tem 20 anos de experiência com desenvolvimento de software, e desde 2006 trabalhando com mais foco em mobile. Acumulou projetos em Java ME, Android (Java e Kotlin) e até iOS. Desde 2012 trabalhando como Developer Advocate no Google Brasil e Califórnia, ajudando as pessoas desenvolvedoras Android a criarem apps de qualidade e sucesso no ecossistema Android. Além do trabalho no Google, participa em comunidades organizando eventos e palestrando há 15 anos e faz cerveja nas horas livres.',
                    picture: '/assets/speakers/Nerto.png',
                    socialProfiles: [
                        {
                            url: 'https://www.linkedin.com/in/netomarin/',
                            name: 'linkedin'
                        },
                        {
                            url: 'https://twitter.com/netomarin',
                            name: 'twitter'
                        },
                        {
                            url: 'https://facebook.com/netomarin',
                            name: 'facebook'
                        },
                        {
                            url: 'https://github.com/netomarin',
                            name: 'github'
                        },
                        {
                            url: 'https://instagram.com/netomarinbr',
                            name: 'instagram'
                        }
                    ]
                }],
                type: 'talk'
            }
        ]
    },
    {
        name: "Sexta-feira",
        data: "15/05",
        talks: [
            {
                title: 'Azure AppService Deep Dive',
                description: 'A nuvem trouxe muitas comodidades principalmente nas ofertas de PAAS (Paltform as a Service) onde nos preocupamos apenas em distribuir nossa aplicação e configurar sua escalabilidade. Mas juntamente com a elasticidade a plataforma nos oferece outros recursos interessantes como autenticação e autorização, integração com outros serviços e diversas maneiras de publicação. Nesta palestra veremos como extrair o máximo dos AppServices.',
                startTime: { hour: '21', minute: '00' },
                speakers: [{
                    name: 'Alexandre Santos Costa',
                    company: 'ArcTouch Mobile Experiences',
                    role: 'Xamarin Chapter Lead',
                    picture: '/assets/2019/img/speakers/magoo.jpg',
                    bio: 'Desenvolvedor com deficiência visual apaixonado por tecnologia, Microsoft MVP em Development Technologies e Master Mobile Engineer na ArcTouch',
                    socialProfiles: [
                        {
                            url: 'https://twitter.com/magoolation	',
                            name: 'twitter'
                        },
                        {
                            url: 'https://www.facebook.com/magoolation',
                            name: 'facebook'
                        },
                        {
                            url: 'https://github.com/magoolation',
                            name: 'github'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Desmistificando o trabalho com dados: Do banco de dados relacional até a inteligência artificial',
                description: 'Você já reparou quantas palavras da moda surgiram nos últimos anos? Quantas profissões "sexies", promessas de lucro e afins? Reparou que todas elas estão relacionadas com dados? Nesta conversa vamos desmistificar as palavras da moda e entender como podemos buscar oportunidades neste mundo com tantas possibilidades.',
                startTime: { hour: '21', minute: '40' },
                speakers: [{
                    name: 'Dani Monteiro',
                    company: 'DANI Academy',
                    role: 'Founder',
                    picture: '/assets/speakers/DaniMonteiro.jpg',
                    bio: 'Mestra em Engenharia da Computação, TEDx Speaker, autora do blog e do canal DB4Beginners.com, apresentadora do podcast Alto Volume, criadora do programa Dados de Alto Valor.Após anos como desenvolvedora, já foi DBA e hoje é arquiteta de dados.Ganhadora dos prêmios: Microsoft Regional Director; Microsoft MVP; William Zola (prêmio de inovação da MongoDB); MongoDB Female Innovator; Microsoft Innovative Educator Expert; Palestrante internacional, foi a primeira mulher brasileira a palestrar no MongoDB World ( New York), palestrou no Oracle Code One (São Francisco), e no PHP Benelux (Bélgica). Além disso é instrutora oficial do LinkedIn Learning, tendo gravado (na Áustria) três cursos para a plataforma.',
                    socialProfiles: [
                        {
                            url: 'https://twitter.com/danimonteirodba',
                            name: 'twitter'
                        },
                        {
                            url: 'https://linkedin.com/in/danimonteirodba',
                            name: 'linkedin'
                        },
                        {
                            url: 'https://github.com/danimonteirodba',
                            name: 'github'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Padrões, Arquiteturas, Modelagens e Técnicas milenares que você (não) deveria usar em seus projetos',
                description: 'Nesse stand-up irei falar sobre padrões, arquiteturas, modelagens e outras técnicas que estão presentes nos códigos e projetos de muitas pessoas, mas, que não deveriam ser utilizadas, pois, além de não fazerem sentido nenhum, atrapalham o bom andamento das coisas. Mas, que muita gente usa porque projeto sem gambiarra não é projeto',
                startTime: { hour: '22', minute: '20' },
                speakers: [{
                    name: 'Rodrigo PokemãoBR',
                    company: 'The Velopers',
                    role: 'Apresentador',
                    bio: 'Apresentador do talk show The Velopers e desenvolvedor. Organizador e curador de eventos de TI. Bacharel em matemática com MBA em SOA. Evangelista PHPSP e criador do PokePHP. O foco é ajudar a comunidade a disseminar conteúdos técnicos e piadas para devs.',
                    picture: '/assets/speakers/RodrigoPokemaoBR.jpeg',
                    socialProfiles: [
                        {
                            url: 'https://www.linkedin.com/in/pokemaobr/',
                            name: 'linkedin'
                        },
                        {
                            url: 'https://twitter.com/pokemaobr',
                            name: 'twitter'
                        },
                        {
                            url: 'https://facebook.com/pokemaobr',
                            name: 'facebook'
                        }
                        ,
                        {
                            url: 'https://github.com/pokemaobr',
                            name: 'github'
                        },
                        {
                            url: 'https://twitch.tv/pokemaobr',
                            name: 'twitch'
                        }
                    ]
                }],
                type: 'talk'
            }]
    },
    {
        name: "Sábado",
        data: "16/05",
        talks: [
            {
                title: 'App Store Optimization (ASO): como melhorar o posicionamento do seu APP',
                description: 'Apresentar as principais técnicas de otimização de APPs para App Stores.',
                startTime: { hour: '09', minute: '00' },
                speakers: [{
                    name: 'Rafael Simões',
                    company: '',
                    role: 'Consultor de SEO',
                    picture: '/assets/speakers/rafaels.jpg',
                    bio: 'É apaixonado por internet e dados. Possui mais de 8 anos de experiência criando estratégias de SEO e Marketing de Conteúdo para grandes empresas como HSBC, Magazine Luiza, Nextel. Também trabalhou como Diretor de SEO em uma agência no Canadá, cuidando de todas as marcas da LOréal. Hoje é Consultor de SEO e trabalha atendendo grandes marcas e startups, como o Consulta Remédios, maior site de medicamentos do Brasil.',
                    socialProfiles: [
                        {
                            url: 'https://twitter.com/cwbrafael',
                            name: 'twitter'
                        },
                        {
                            url: 'https://www.linkedin.com/in/cwbrafael/',
                            name: 'linkedin'
                        }
                    ]
                }],
                type: 'talk'
            },
            {
                title: 'Pensando grande em telas pequenas: como desenvolver, manter e evoluir aplicações mobile escaláveis como as gigantes do mercado!',
                description: 'Já parou para se perguntar como as grandes empresas desenvolvem suas aplicações mobile para milhares de pessoas? Quais técnicas elas utilizam? O que elas priorizam? Como tudo funciona junto? E se você pudesse construir as suas próprias aplicações de forma eficiente e escalável, como essas grandes empresas costumam  fazer? Nesse talk vou tentar falar um pouco sobre como funcionam times, rotinas e técnicas de desenvolvimento de aplicações mobile de alta e escala e performance e como você pode fazer uso de muitas dessas práticas hoje mesmo!',
                startTime: { hour: '09', minute: '40' },
                speakers: [{
                    name: 'Walmyr Carvalho',
                    company: 'idwall',
                    role: 'Mobile Technical Leader',
                    bio: 'Walmyr Carvalho é desenvolvedor e designer e trabalha com desenvolvimento Android há 9 anos, já trabalhou em grandes empresas como Cielo, 99 e Loggi e hoje é fundador da Kusudama, um estúdio de design e desenvolvimento de produtos digitais para mobile em São Paulo. Além disso, é Google Developer Expert de Android no Brasil, organizador do GDG São Paulo, Kotlin Meetup São Paulo e Android Dev BR, a maior comunidade brasileira de Android no Slack, com mais de 5 mil membros.',
                    picture: '/assets/2019/img/speakers/walmyr.jpg',
                    socialProfiles: [
                        {
                            url: 'https://www.linkedin.com/in/walmyrcarvalho/',
                            name: 'linkedin'
                        },
                        {
                            url: 'https://github.com/walmyrcarvalho',
                            name: 'twitter'
                        },
                        {
                            url: 'https://linkedin.com/in/walmyrcarvalho',
                            name: 'facebook'
                        },
                        {
                            url: 'https://github.com/walmyrcarvalho',
                            name: 'github'
                        }
                    ]
                }],
                type: 'talk'
            },
            {
                title: 'Extraindo métricas de times de desenvolvimento: Integrando Azure DevOps e Power BI',
                description: 'Nessa sessão mostrarei como é feita a integração entre o Azure DevOps e o Power BI com integrações além das apresentadas em documentações. Serão apresentados alguns dashboards no Power BI tais como: Métricas de repositório de código fonte e Métricas de Release.',
                startTime: { hour: '10', minute: '20' },
                speakers: [{
                    name: 'Vinicius José de Moura',
                    company: 'N3',
                    role: 'DevOps Cloud Technical Solution Architect',
                    bio: 'MVP Microsoft desde 2015 focado em ALM e DevOps.',
                    picture: '/assets/speakers/ViniMoura.jpg',
                    socialProfiles: [
                        {
                            name: 'github',
                            url: 'https://github.com/vinijmoura'
                        },
                        {
                            name: 'twitter',
                            url: 'https://twitter.com/vinijmoura'
                        },
                        {
                            name: 'linkedin',
                            url: 'https://www.linkedin.com/in/viniciusjmoura/'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Wiremock: testando suas aplicações Java além do Junit',
                description: 'Usa Junit para testar suas aplicações Java? ótimo <3, mas você já ouviu falar do Wiremock? Nesta talk pretendo explicar o que é Wiremock, o que são Stubs, Matches , como simular requisições e como testar nossas APIs com ele.',
                startTime: { hour: '11', minute: '00' },
                speakers: [{
                    name: 'Kamila de Fátima Santos Oliveira',
                    company: 'Ame Digital',
                    role: 'Backend Developer',
                    bio: 'Desenvolvedora fullstack, graduada em ciencia da computação, sou apaixonada por tecnologia e pela forma como ela impacta a vida das pessoas, sou co-organizadora das comunidades DevsJavaGirl,Perifacode, WomakersCode e Nerdzao participante e palestrante de diversas comunidades e meetups principalmente aqueles que visam maior inclusão e diversidade na área. Tenho trabalhado com Javascript, Node, Angular e também com Java, Python e Ruby. Adoro compartilhar conhecimento, ajudar pessoas e espalhar a palavra do código <3',
                    picture: '/assets/speakers/Kamila.png',
                    socialProfiles: [
                        {
                            url: 'https://www.linkedin.com/in/kamila-santos-oliveira/',
                            name: 'linkedin'
                        },
                        {
                            url: 'https://twitter.com/kamilah_santos',
                            name: 'twitter'
                        },
                        {
                            url: 'https://github.com/Kamilahsantos',
                            name: 'github'
                        }
                    ]
                }],
                type: 'talk'
            },
            {
                title: 'Arquitetura Evolutiva aplicada na agilidade e teoria do caos',
                description: 'Desenvolver aplicações de missão crítica, com um numero alto de requisições simultâneas, e em um ambiente corporativo que integra produção, logística, franqueado, revendedor, e-commerce e consumidor, atendendo aos requisitos de negócio e LGPD é uma mistura perfeita para inovar e colocar os melhores planos e conceitos em prática. Nesta talk Fábio, arquiteto do Grupo Boticário, irá mostrar como construiu uma aplicação para trabalhar com Whatsapp Business API preparada para uma grande volumetria utilizando microserviços em Kubernetes, eventos (SQS) e serverless com uma insfraestrutura escalável e as code.',
                startTime: { hour: '14', minute: '00' },
                speakers: [{
                    name: 'Fábio Rogério',
                    company: 'Grupo Boticário',
                    role: 'Arquiteto de Soluções',
                    bio: 'Fábio é Arquiteto de Soluções no Grupo Boticário, desenvolvedor do Clipper ao GoLang, fissurado por inovação, já criou várias startups, e faliu várias delas, arquitetou várias aplicações de missão críticas e fez vários update sem where em produção.',
                    picture: '/assets/speakers/fabior.png',
                    socialProfiles: [
                        {
                            name: 'github',
                            url: 'https://github.com/fabiorogeriosj'
                        },
                        {
                            name: 'linkedin',
                            url: 'https://www.linkedin.com/in/f%C3%A1bio-rog%C3%A9rio-4a49b722'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Escalando o Everest com Serverless Computing',
                description: 'Imagine o que acontece com seus servidores que estão acostumados a processar 10 transações por minuto se vier uma enxurrada de 10K transações por minuto? Imagine um sistema onde você projetou uma infra para suportar 10k de transações por minuto mas onde 90% do tempo ele processa apenas 10 transações por minuto? Imagine terceirizar toda configuração de infraestrutura, elasticidade e escalabilidade e poder focar 100% na lógica de negócio enquanto desenvolve novas soluções... Serverless é o modelo de Cloud Computing que tenta resolver essas questões, facilitar a vida do desenvolvedor, e maximizar a produtividade do time de operações.',
                startTime: { hour: '14', minute: '40' },
                speakers: [{
                    name: 'Frederico Policarpo Martins',
                    company: 'EBANX',
                    role: 'Software Engineering',
                    picture: '/assets/speakers/Fred.png',
                    bio: 'Cientista da Computação com 14 anos de experiência de mercado atuando prioritariamente como desenvolvedor. Nesta carreira já atuei bastante como Tech Lead,  uma temporada como Product Owner, e também um período como Engenheiro/Analista de Dados. Sou apaixonado por solucionar problemas com tecnologia, seja ela qual for! Gosto de entender toda o jornada de solução de um problema, desde a identificação da necessidade até a entrega e monitoramento, manutenção e evoluções.',
                    socialProfiles: [
                        {
                            url: 'https://github.com/fredpolicarpo',
                            name: 'github'
                        },
                        {
                            url: 'https://www.linkedin.com/in/fredpolicarpo/',
                            name: 'linkedin'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Brasil.IO COVID-19: dados por município (e desafios)',
                description: 'A análise de dados é uma ferramenta poderosa para embasar tomadas de decisões em qualquer processo de gestão. Em uma crise de saúde pública sem precedentes como a pandemia de COVID-19, obter informação detalhada e atualizada é uma questão de sobrevivência. Número de infectados, taxa de mortalidade e outros indicadores são fundamentais para que os gestores públicos possam monitorar o avanço do vírus e, assim, definir os recursos necessários de combate à doença; planejar as adaptações no sistema de saúde; e implementar medidas de contenção e distanciamento social. É também por meio de dados confiáveis e de qualidade que os governos poderão decidir o momento correto de reverter medidas de isolamento.',
                startTime: { hour: '15', minute: '20' },
                speakers: [{
                    name: 'Álvaro Justen',
                    company: 'Escola de Dados | Brasil.IO',
                    role: 'Developer',
                    picture: '/assets/2019/img/speakers/turicas.jpeg',
                    bio: 'Álvaro Justen é programador e professor. Ativista de software livre desde 2004 e programador Python desde 2005, atualmente trabalha capturando, convertendo, limpando e analisando dados em diversos projetos jornalísticos brasileiros; é fundador do portal de dados abertos acessíveis Brasil.IO, desenvolvedor-chefe do ImpactoJOR, professor da Escola de Dados e está sempre viajando para congressos, libertando dados públicos inacessíveis, provando cafés especiais e hipnotizando pessoas. ',
                    socialProfiles: [
                        {
                            url: 'https://linkedin.com/in/alvarojusten',
                            name: 'linkedin'
                        },
                        {
                            url: 'https://twitter.com/turicas',
                            name: 'twitter'
                        },
                        {
                            url: 'https://github.com/turicas',
                            name: 'github'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Os desafios de gestão para equipes em home office',
                description: 'Nesta palestra vamos conversar um pouco sobre os desafios da gestão de equipes remotas, ferramentas para comunicação e organização, o que não pode faltar em um trabalho remoto e como manter o engajamento de todo o time nesse período tão conturbado que temos vivido',
                startTime: { hour: '16', minute: '00' },
                speakers: [{
                    name: 'Mauricio Lang',
                    company: 'vhsys',
                    role: 'Squad Leader',
                    picture: '/assets/speakers/MauricioLang.png',
                    bio: 'Sou um desenvolvedor muito comunicador sempre em busca de superar meus limites e me testar em novos desafios. Atualmente sou coordenador de desenvolvimento na VHSYS e responsável por direcionar squads a se apaixonarem pelo produto que desenvolvem aplicando em seu dia-a-dia técnicas e tecnologias que melhor se adaptem a necessidade do negócio.',
                    socialProfiles: [
                        {
                            url: 'https://www.linkedin.com/in/mauricio-lang/',
                            name: 'linkedin'
                        }
                    ]
                }],
                type: 'talk'
            }
            ,
            {
                title: 'Arquitetura event-driven ou “fala que eu te escuto”',
                description: 'Então você resolveu utilizar a arquitetura de micro-serviços no seu projeto? E a comunicação entre elas, como foi desenhada? Se você respondeu HTTP/REST, que tal se livrar dessas amarras, e partir para uma arquitetura baseada em evento? Nesse talk, vou contar um pouco sobre as chamadas arquitetura event-driven, suas vantagens e desafios, e como ela foi o pilar para o desenvolvimento de uma plataforma bancária nacional baseada em nuvem e serverless.',
                startTime: { hour: '16', minute: '40' },
                speakers: [{
                    name: 'Fernando Dias Belo',
                    company: 'Bari Tecnologia (Banco Bari)',
                    role: 'Gerente - Desenvolvimento de Software',
                    picture: '/assets/speakers/fernandodiasbelo.png',
                    bio: 'Engenheiro Eletricista formado pela UTFPR-PR e pós-graduado em Big Data. 18 anos de experiência com desenvolvimento de software onde já atuou em praticamente todas as sub-áreas. Atualmente coordenando o desenvolvimento de software no Banco Bari, liderando um time de aproximadamente 40 profissionais.',
                    socialProfiles: []
                }],
                type: 'talk'
            }
        ]
    },
]
