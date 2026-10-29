/* Content for the demo. Everything here comes from the current site
   (miguelcastrosilva.com) and will be migrated and proofread with the chef. */

var IMG = 'assets/img/';

var PROJECTS = [
  // ── current
  { group: 'now', name: 'Time Out Market', place: 'Lisboa', year: '2014 —', img: 'MerRib_10-1600x875.jpg',
    pt: 'Cozinha regional de Norte a Sul, no Mercado da Ribeira.', en: 'Regional cooking from North to South, at Mercado da Ribeira.',
    link: 'https://www.timeoutmarket.com/lisboa/' },
  { group: 'now', name: 'Casario', place: 'Ribeira, Porto', year: '2018 —', img: 'Casario_01_2560x1400-1980x1083.jpg',
    pt: 'A quatro mãos com José Guedes, à beira do Douro.', en: 'Four hands with José Guedes, by the Douro.',
    link: 'https://www.google.com/maps/search/Casario+Ribeira+Porto' },
  { group: 'now', name: 'deCastro Gaia', place: 'Vila Nova de Gaia', year: '2012 —', img: 'deCastro_Gaia_01_2560x1400-1980x1083.jpg',
    pt: 'Cozinha petisqueira no Espaço Porto Cruz.', en: 'Portuguese small plates at Espaço Porto Cruz.',
    link: 'https://www.google.com/maps/search/deCastro+Gaia' },
  { group: 'now', name: 'Cantina de Ventozelo', place: 'Douro', year: '2019 —', img: 'Cantina_de_Ventozelo_02_2560x1400-1980x1083.jpg',
    pt: 'Cozinha de proximidade na Quinta de Ventozelo.', en: 'Local, seasonal cooking at Quinta de Ventozelo.',
    link: 'https://www.google.com/maps/search/Cantina+de+Ventozelo' },
  // ── archive
  { group: 'archive', name: 'Bull & Bear', place: 'Porto', year: '1997 — 2008', img: 'BB_1280_01.jpg',
    pt: 'No edifício da Bolsa. Garfo de Ouro e 25 melhores da Europa (FT).', en: 'In the Stock Exchange building. Among Europe’s 25 best (FT).' },
  { group: 'archive', name: 'Largo', place: 'Chiado, Lisboa', year: '2010 — 2015', img: 'timeOut_04_2010-scaled.jpg',
    pt: 'Uma cozinha mais elaborada, no Largo de S. Carlos.', en: 'A more elaborate kitchen, on Largo de S. Carlos.' },
  { group: 'archive', name: 'Less', place: 'Príncipe Real, Lisboa', year: '2015 — 2019', img: 'MCS_LESS_01-1980x1083.jpg',
    pt: 'Cozinha elaborada q.b., ambiente informal.', en: 'Just-enough refinement, relaxed room.' },
  { group: 'archive', name: 'deCastro', place: 'Lisboa', year: '2009 — 2014', img: 'deCastro_01-1980x1083.jpg',
    pt: 'Elias e Flores. Petiscos portugueses e vinhos de autor.', en: 'Elias and Flores. Portuguese petiscos and signature wines.' },
  { group: 'archive', name: 'Ideias Soltas', place: 'Consultoria', year: '—', img: 'MCS_Ideias_Soltas_2560x1400_01-1980x1083.jpg',
    pt: 'Consultoria: Serralves, Gulbenkian, Sonae, Vista Alegre.', en: 'Consulting: Serralves, Gulbenkian, Sonae, Vista Alegre.' },
  { group: 'archive', name: 'Restaurante do Miguel', place: 'Foz, Porto', year: '1994', img: 'MCS_site_base_home_2560x1400_pb-1980x1083.jpg',
    pt: 'Um dos 12 melhores restaurantes de Portugal (Exame).', en: 'One of Portugal’s 12 best restaurants (Exame).' }
];

var TIMELINE = [
  { y: '1961', pt: ['Porto', 'Nasce no Porto. Primeiro a música — piano, baixo, técnico de som.'], en: ['Porto', 'Born in Porto. Music came first — piano, bass, sound engineer.'] },
  { y: '1992', pt: ['Quinta dos Vales', 'Abre o primeiro restaurante, numa quinta rústica na Maia.'], en: ['Quinta dos Vales', 'Opens his first restaurant, on a rustic farm in Maia.'], img: 'MCS_restaurantes_01-0x0.jpg' },
  { y: '1994', pt: ['Restaurante do Miguel', 'Na Foz. Cinco estrelas e os primeiros jantares vínicos com Niepoort e Luís Pato.'], en: ['Restaurante do Miguel', 'In Foz. Five stars and the first wine dinners with Niepoort and Luís Pato.'] },
  { y: '1997', pt: ['Bull & Bear', 'No edifício da Bolsa. Garfo de Ouro, 3 Sóis Repsol, 25 melhores da Europa.'], en: ['Bull & Bear', 'In the Stock Exchange. Garfo de Ouro, 3 Repsol Suns, Europe’s top 25.'], img: 'BB_1280_01.jpg' },
  { y: '2001', pt: ['Cozinheiro do Ano', 'Academia Portuguesa de Gastronomia. Publica “Uma Cozinha de Aromas”. Aulas na Ferrandi, Paris.'], en: ['Chef of the Year', 'Portuguese Academy of Gastronomy. Publishes “Uma Cozinha de Aromas”. Teaches at Ferrandi, Paris.'] },
  { y: '2005', pt: ['Xangai', 'Jantar presidencial a convite da Presidência da República. Consultor em Serralves.'], en: ['Shanghai', 'Presidential dinner at the invitation of the Portuguese Presidency. Consultant at Serralves.'] },
  { y: '2007', pt: ['Larousse', 'Três receitas no Larousse Gastronomique. Pioneiro da cozinha a baixa temperatura.'], en: ['Larousse', 'Three recipes in the Larousse Gastronomique. Pioneer of low-temperature cooking.'] },
  { y: '2009', pt: ['Lisboa', 'Muda-se para a capital e abre o deCastro Elias.'], en: ['Lisbon', 'Moves to the capital and opens deCastro Elias.'], img: 'deCastro_01-1980x1083.jpg' },
  { y: '2014', pt: ['Mercado da Ribeira', 'Abre o espaço com o seu nome no Time Out Market.'], en: ['Mercado da Ribeira', 'Opens his namesake counter at Time Out Market.'], img: 'MerRib_10-1600x875.jpg' },
  { y: '2017', pt: ['David Lopes Ramos', 'Prémio de carreira, Revista de Vinhos.'], en: ['David Lopes Ramos', 'Lifetime award, Revista de Vinhos.'] },
  { y: '2019', pt: ['Douro', 'Cantina de Ventozelo: a cozinha da região, de proximidade.'], en: ['Douro', 'Cantina de Ventozelo: the region’s own cooking.'], img: 'Cantina_de_Ventozelo_02_2560x1400-1980x1083.jpg' },
  { y: 'Hoje', yEn: 'Today', pt: ['Quatro casas', 'Lisboa, Porto, Gaia e Douro. Consultoria, livros e vinhos de autor.'], en: ['Four houses', 'Lisbon, Porto, Gaia and the Douro. Consulting, books and signature wines.'] }
];

var BOOKS = [
  { title: 'Uma Cozinha de Aromas', year: '2001', img: 'Livro_uma_cozinha_de_aromas_capa-1.jpg', pt: 'O primeiro livro.', en: 'The first book.' },
  { title: 'The Food & Cooking of Portugal', year: '2007', img: 'Livro_The_Food_and_cooking_Portugal_CAPA.jpg', pt: 'Anness Publishing, Londres.', en: 'Anness Publishing, London.' },
  { title: 'Na Cozinha de Miguel Castro e Silva', year: '2016', img: 'Livro_Na_cozinha_de_MCS_CAPA.jpg', pt: 'Com Augusto Freitas de Sousa.', en: 'With Augusto Freitas de Sousa.' }
];

var PRESS = [
  ['imprensa_observador_entrevista.jpg', 'Observador'],
  ['imprensa_time_out_largo.jpg', 'Time Out · Largo'],
  ['imprensa_fugas_ventozelo.jpg', 'Fugas · Ventozelo'],
  ['imprensa_visao_less.jpg', 'Visão · Less'],
  ['imprensa_evasoes_de_castro.jpg', 'Evasões · deCastro'],
  ['imprensa_revista_vinhos_ventozelo.jpg', 'Revista de Vinhos'],
  ['imprensa_mutante_TOM.jpg', 'Mutante · Time Out Market'],
  ['imprensa_time_out_casario.jpg', 'Time Out · Casario'],
  ['imprensa_mesa_marcada_livro.jpg', 'Mesa Marcada'],
  ['imprensa_TO_sopas.jpg', 'Time Out · Sopas'],
  ['imprensa_attitude_93_ventozelo.jpg', 'Attitude'],
  ['imprensa_visao_Casario.jpg', 'Visão · Casario'],
  ['imprensa_bcbm_de_castro.jpg', 'BCBM · deCastro'],
  ['imprensa_fugas_casario.jpg', 'Fugas · Casario']
];

var GALLERY = [
  { img: 'MCS_restaurantes_02-0x0.jpg', pt: 'Cenouras em manteiga', en: 'Butter-glazed carrots', size: 'wide' },
  { img: 'MCS_restaurantes_01-0x0.jpg', pt: 'O molho, no fim', en: 'The sauce, last', size: 'tall' },
  { video: 'xBet9sDm69s', img: 'yt_intro.jpg', pt: 'Filme · Introdução', en: 'Film · Introduction', size: 'sq' },
  { img: 'MCS_projetos-0x0.jpg', pt: 'Empratar', en: 'Plating', size: 'sq' },
  { img: 'Cantina_de_Ventozelo_02_2560x1400-1980x1083.jpg', pt: 'Cantina de Ventozelo, Douro', en: 'Cantina de Ventozelo, Douro', size: 'wide' },
  { img: 'MCS_site_livro_na_cozinha_1200x700-0x0.jpg', pt: 'Cantarelos', en: 'Chanterelles', size: 'sq' },
  { img: 'MCS_Ideias_Soltas_2560x1400_01-1980x1083.jpg', pt: 'Arroz e peixe', en: 'Rice and fish', size: 'tall' },
  { img: 'MCS_imprensa-0x0.jpg', pt: 'O fogão', en: 'At the stove', size: 'wide' },
  { video: 'OEja3sMxw6c', img: 'yt_bio.jpg', pt: 'Filme · Biografia', en: 'Film · Biography', size: 'sq' },
  { img: 'Casario_01_2560x1400-1980x1083.jpg', pt: 'Casario, Porto', en: 'Casario, Porto', size: 'wide' }
];

var I18N = {
  en: {
    'nav.chef': 'The Chef', 'nav.projects': 'Projects', 'nav.path': 'Path', 'nav.books': 'Books',
    'nav.press': 'Press', 'nav.gallery': 'Gallery', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Chef · Porto, 1961',
    'hero.lede': 'Thirty-five years reinventing Portuguese cooking — from Porto to the Douro, from Lisbon to the world.',
    'hero.seal': 'WATCH THE FILM · WATCH THE FILM · WATCH THE FILM · ',
    'hero.since': 'Since 1992', 'hero.cue': 'Scroll',
    'chef.eyebrow': 'The Chef',
    'chef.statement': 'One of the first to play with traditional Portuguese cooking — back when that was almost an insult.',
    'chef.p1': 'Before the kitchen there was music — piano, then bass, then sound engineering. He studied Biology in Germany, working restaurant shifts to get by. Back in Porto, he was a product director in textiles.',
    'chef.p2': 'In 1992 he changed course and opened his first restaurant in Maia. Then came Restaurante do Miguel in Foz, and Bull & Bear in the Stock Exchange building — where his name travelled beyond Portugal.',
    'chef.p3': 'Today he is a consultant, author and the signature behind houses in Lisbon, Porto, Gaia and the Douro. He has cooked for Portugal in Hong Kong, Shanghai, Paris, Bordeaux, Brussels, Budapest and São Paulo.',
    'facts.years': 'years of cooking', 'facts.books': 'books published',
    'facts.chef': 'Chef of the Year · Portuguese Academy of Gastronomy',
    'facts.award': 'David Lopes Ramos lifetime award · Revista de Vinhos',
    'proj.eyebrow': 'Projects', 'proj.title': 'Where to eat<br><em>today</em>', 'proj.now': 'Current', 'proj.archive': 'Archive',
    'proj.visit': 'Visit',
    'path.eyebrow': 'Path', 'path.title': 'From Porto<br>to the <em>world</em>',
    'books.eyebrow': 'Books', 'books.title': 'Cooking,<br><em>in writing</em>',
    'press.eyebrow': 'Press', 'press.title': 'What was<br><em>written</em>',
    'press.quote': '“One of the chefs of the moment in the city.”',
    'press.h1': 'Bull & Bear among Europe’s 25 best restaurants · Financial Times, 2004',
    'press.h2': '1st among Portugal’s ten reference chefs · 2004',
    'press.h3': 'Garfo de Ouro · Bull & Bear, 2003',
    'press.h4': 'Three recipes in the Larousse Gastronomique · 2007',
    'gal.eyebrow': 'Gallery', 'gal.title': 'Dishes, houses<br><em>and moments</em>',
    'contact.eyebrow': 'Contact', 'contact.title': 'Shall we<br>set the table?',
    'contact.note': 'Private events, consulting or press. Three quick questions — the reply comes by email.',
    'q1.q': 'How can we help?', 'q1.a': 'Private event', 'q1.b': 'Consulting', 'q1.c': 'Press', 'q1.d': 'Something else',
    'q2.evento': 'For how many guests?', 'q2.consultoria': 'What kind of project?', 'q2.imprensa': 'What is it for?', 'q2.outro': 'What is it about?',
    'q2.more': 'Tell us a little more',
    'q3.q': 'How do we reply?', 'q3.name': 'Name', 'q3.rgpd': 'I agree my details are used only to answer this request.',
    'q.back': '← Back', 'q.next': 'Continue', 'q.send': 'Send request',
    'q.thanks': 'Thank you. <em>Talk soon.</em>', 'q.thanksNote': 'Your request reached the team. We will reply shortly.',
    'foot.mawebs': 'Handmade in Mafra', 'foot.demo': 'Layout proposal · demo version'
  }
};

var Q2 = {
  evento:      { pt: ['Até 12', '12 — 40', '40 — 100', 'Mais de 100'], en: ['Up to 12', '12 — 40', '40 — 100', 'Over 100'], label: { pt: 'Para quantas pessoas?' } },
  consultoria: { pt: ['Restaurante novo', 'Revisão de carta', 'Hotelaria', 'Indústria'], en: ['New restaurant', 'Menu review', 'Hospitality', 'Industry'], label: { pt: 'Que tipo de projeto?' } },
  imprensa:    { pt: ['Entrevista', 'Fotografia', 'Televisão', 'Receita'], en: ['Interview', 'Photography', 'Television', 'Recipe'], label: { pt: 'Para que é?' } },
  outro:       { pt: ['Livros', 'Vinhos', 'Parceria', 'Outro'], en: ['Books', 'Wines', 'Partnership', 'Other'], label: { pt: 'Sobre o quê?' } }
};
