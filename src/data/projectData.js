//Digitalli
import digit from "../assets/svg-projects/logo_digitalli.svg";
import digitPlace from "../assets/svg-projects/digitalli_place.svg";
import DigitalliHome from "../assets/img-mission/digitalli/digitalli-home.jpg";
import digitalliInformation from "../assets/img-mission/digitalli/digitalli-informations.jpg";
import digitalliStore from "../assets/img-mission/digitalli/stores.jpg";
import digitalliStoreInformation from "../assets/img-mission/digitalli/new-store-informations.jpg";
import digitalliToast from "../assets/img-mission/digitalli/toast.jpg";
import digitalliFloorPlan from "../assets/img-mission/digitalli/new-store-floor-plan.jpg";

//Netto
import netto from "../assets/svg-projects/netto.svg";
import nettoBlock from "../assets/svg-projects/netto_block.svg";
import NettoEvent from "../assets/img-mission/netto/netto-1.jpg";
import NettoEvent2 from "../assets/img-mission/netto/netto-2.jpg";
import NettoEvent3 from "../assets/img-mission/netto/netto-3.jpg";
import NettoEvent4 from "../assets/img-mission/netto/netto-4.jpg";
import NettoEvent5 from "../assets/img-mission/netto/netto-5.jpg";

//Hotel Service Plus
import hsp from "../assets/svg-projects/hsp.svg";
import hspHome from "../assets/img-mission/hsp/hsp-home.jpg";
import hsp1 from "../assets/img-mission/hsp/hsp-1.jpg";
import hspBenef from "../assets/img-mission/hsp/hsp-benef.jpg";
import hspModal from "../assets/img-mission/hsp/hsp-modal.jpg";

//Exval
import exval from "../assets/svg-projects/exval.svg";
import exvalSubtitle from "../assets/svg-projects/exval_subtitle.svg";
import exvalHome from "../assets/img-mission/exval/Exval-home.jpg";
import wonderfexHome from "../assets/img-mission/exval/Exval.jpg";
import wonderfex from "../assets/img-mission/exval/Exval-1.jpg";
import wonderfex2 from "../assets/img-mission/exval/Exval-2.jpg";
import wonderfex3 from "../assets/img-mission/exval/Exval-3.jpg";
import wonderfex4 from "../assets/img-mission/exval/Exval-4.jpg";

//Ydg 2020
import ydg from "../assets/svg-projects/ydg.svg";
import ydgHome from "../assets/img-mission/ydg/ydg-start.jpg";
import ydg2 from "../assets/img-mission/ydg/ydg-2.jpg";
import ydg3 from "../assets/img-mission/ydg/ydg-3.jpg";

//Ready
import ready from "../assets/svg-projects/ready.svg";
import readyTwo from "../assets/svg-projects/readyTwo.svg";

//FigurToys
import sephi from "../assets/svg-projects/sephi.svg";
import cloud from "../assets/svg-projects/cloud.svg";

//Portfolio 2020
import marvin from "../assets/svg-projects/marvin.svg";

//Acacia
import cuisto from "../assets/svg-projects/cuisto.svg";

export const digitalliData = {
  id: 1,
  cls_slide: "slide-digitalli",
  cls_slide_2: "slide-digitalli-2",
  cls_name: "digitalli",
  cls_h3: "h3-digitalli",
  name: "DIGI",
  name_other_half: "TALLI",
  cls_name_half: "b-digitalli",
  cls_mark_name: "mark-tech-digitalli",
  tech: "Vitejs - Pinia - GraphQl",
  cls_card: "card-digitalli",
  alt_card: "image du projet digitalli",
  svg: digitPlace,
  svg_2: digit,
  alt_svg: "logo du projet digitalli",
  alt_svg_2: "logo du projet digitalli en blanc",
  cls_svg: "svg-project-digitalli",
  cls_svg_2: "svg-project-digitalli-2",

  // Mission

  new: true,
  synopsis:
    "Digitalli est membre de RC Group, un groupe d’entreprises françaises, leader dans le domaine des services de communication pour les marques premium et de luxe. Le projet Place by Digitalli est une plateforme de gestion d'écran digital pour les boutiques, restaurants, hôtels, etc...",
  mission:
    "Le projet est basé sur le framework Vite.js. Développement de différentes pages d'ajout et d'édition de contenu à l'aide de l'API GraphQl, et de la librairie Pinia pour la gestion d'état. Ajout de divers fonctionnalités pour l'administration de la plateforme et une modernisation de l'interface utilisateur.",
  year: "2022-2023",
  tech_mission: ["Vite.js", "Pinia", "GraphQl", "Tailwindcss"],
  img_project_route: [
    DigitalliHome,
    digitalliStoreInformation,
    digitalliInformation,
    digitalliStore,
    digitalliFloorPlan,
    digitalliToast,
  ],
};

export const nettoData = {
  id: 2,
  cls_slide: "slide-netto",
  cls_slide_2: "slide-netto-2",
  cls_name: "netto",
  cls_h3: "h3-netto",
  name: "Net",
  name_other_half: "to",
  cls_name_half: "b-netto",
  cls_mark_name: "mark-tech-netto",
  tech: "Drupal - Scss",
  cls_card: "card-netto",
  alt_card: "image du projet netto",
  svg: netto,
  svg_2: nettoBlock,
  alt_svg: "logo du projet netto",
  alt_svg_2: "block logo du projet netto",
  cls_svg: "svg-project-netto",
  cls_svg_2: "svg-project-netto-2",

  // Mission

  new: true,
  synopsis:
    "Netto est une enseigne française de hard-discount alimentaire. Le projet Netto consistait à créer plusieurs de leur page d'événement pour Noël, il était possible de gagner des chèques-cadeaux après y avoir effectué des achats.",
  mission:
    "En collaboration avec l'agence de communication et en synergie avec un développeur Drupal, développement de plusieurs pages d'événement responsive pour l'opération promotionnelle de Netto.",
  year: "2022",
  tech_mission: ["Drupal", "Scss"],
  img_project_route: [
    NettoEvent,
    NettoEvent2,
    NettoEvent3,
    NettoEvent4,
    NettoEvent5,
  ],
};

export const hspData = {
  id: 3,
  cls_slide: "slide-hsp",
  cls_slide_2: "slide-hsp-2",
  cls_name: "hsp",
  cls_h3: "h3-hsp",
  name: "Hotel Service Plus",
  cls_name_half: "b-hsp",
  cls_mark_name: "mark-tech-hsp",
  tech: "React.js - Tailwind",
  cls_card: "card-hsp",
  alt_card: "image du projet hsp",
  svg: hsp,
  alt_svg: "logo du projet hsp",
  cls_svg: "svg-project-hsp",

  // Mission

  new: true,
  synopsis:
    "Fondée en 2007, Hotel Service Plus est une plateforme privée de réservation d’hébergements temporaires d’urgence pour des familles et des personnes isolées en situation de rupture d’hébergement. Le projet Othello est un outil de gestion de placements hôteliers.",
  mission:
    "De concert avec une équipe de 4 développeurs, 3 développeurs front-end et 1 développeur back-end, ajout des différentes sections de l'application et de leurs fonctionnalités.",
  year: "2022",
  tech_mission: ["React.js", "Tailwindcss"],
  img_project_route: [hspHome, hsp1, hspBenef, hspModal],
};

export const exvaldata = {
  id: 4,
  cls_slide: "slide-exval",
  cls_slide_2: "slide-exval-2",
  cls_name: "exval",
  cls_h3: "h3-exval",
  name: "Ex",
  name_other_half: "Val",
  cls_name_half: "b-exval",
  cls_mark_name: "mark-tech-exval",
  tech: "Vue.js - Twig - Php",
  cls_card: "card-exval",
  alt_card: "image du projet exval",
  svg: exval,
  svg_2: exvalSubtitle,
  alt_svg: "logo du projet exval",
  alt_svg_2: "block logo du projet exval",
  cls_svg: "svg-project-exval",
  cls_svg_2: "svg-project-exval-2",

  // Mission

  new: true,
  synopsis:
    "Exval est une société spécialisée dans le Smart Data et l'Intelligent Data pour les marchés immobiliers. Leur outil permet de collecter, traiter et analyser les données immobilières pour les rendre intelligibles et exploitable.",
  mission:
    "Ajout de nouvelles sections sur le site vitrine, refonte de l'interface utilisateur de l'outil de gestion de données, nouvelles sections graphiques, statistiques, création et développement de pdf pour export de données.",
  year: "2021 -2022",
  tech_mission: ["Vue.js", "Analytics", "Php", "Twig"],
  img_project_route: [
    exvalHome,
    wonderfexHome,
    wonderfex,
    wonderfex2,
    wonderfex3,
    wonderfex4,
  ],
};

export const ydgData = {
  id: 5,
  cls_slide: "slide-ydg",
  cls_slide_2: "slide-ydg-2",
  cls_name: "ydg",
  cls_h3: "h3-ydg",
  name: "YDG",
  cls_name_half: "b-ydg",
  cls_mark_name: "mark-tech-ydg",
  tech_other_half: "React native - Xcode -Android Studio",
  cls_card: "card-ydg",
  alt_card: "image du projet ydg",
  svg: ydg,
  alt_svg: "logo du projet ydg",
  cls_svg: "svg-project-ydg",

  // Mission

  new: true,
  synopsis:
    "Yoodoogood est une application mobile dédié aux jeux qui permet de gagner des lots tout en donnant à des associations. Chaque jour des lots sont mis en jeu et les joueurs peuvent gagner des points en jouant à des jeux pour tenter de gagner ces lots.",
  mission:
    "Application mobile oblige utilisation de Xcode et Android Studio pour le développement de l'application. Développement de l'application mobile en React native, création des pages d'Onboarding, des différentes modal de l'application, de l'animation des pièces qui tombent suite à la victoire du joueur et enfin développement de la fonctionnalités principale de l'application, le slider pour miser sur un lot.",
  year: "2021",
  tech_mission: ["React native", "Xcode", "Android Studio"],
  img_project_route: [ydgHome, ydg2, ydg3],
};

export const rainyDayData = {
  id: 6,
  cls_slide: "slide-rainy",
  cls_slide_2: "slide-rainy-2",
  cls_name: "rainyDay",
  cls_h3: "h3-rainy",
  name: "Rainy",
  name_other_half: "Day",
  cls_name_half: "b-rainy",
  cls_name_half_md: "b-rainy-md",
  cls_mark_name: "mark-tech-rainy",
  tech: "React.js - Redux - Bootstrap - ",
  tech_other_half: "Firebase",
  cls_card: "card-rainy",
  alt_card: "image du projet RainyDay",
  svg: ready,
  svg_2: readyTwo,
  alt_svg: "Anime kimetsu no yaiba(Demon Slayer) background black",
  alt_svg_2: "Anime Kimetsu no yaiba(Demon Slayer) background yellow",
  cls_svg: "svg-project-rainy",
  cls_svg_2: "svg-project-rainy-2",
  cls_svg_3: "svg-project-rainy-3",

  // Mission

  cls_head_img: "rainyLand",
  citation: "Tout est la maintenant, à vous de voir",
  synopsis:
    "RainyDay est une plate-forme de suivi pour la télévision et les films. Il permet aux utilisateurs de suivre ce qu'ils regardent, RainyDay permet également aux utilisateurs de réagir  et de commenter des épisodes au sein de la communauté du site. Les utilisateurs ne peuvent pas regarder des émissions ou des films avec RainyDay.",
  cls_half_img: "rainyHalf",
  mission:
    "RainyDay est un projet personnelle entièrement crée par moi. Le projet rainyDay est actuellement en cours de création, une version bêta sera bientôt disponible et sans suivra une application mobile, en attendant vous pouvez suivre mes différents projet perso sur mon Github.",
  cls_img: "rainyCard",
  alt_banner: "Bannière Rainyday, étoiles rouges et bruns",
  img_project:
    "Entête de RainyDay, Logo entourée d'étoiles et phrase d'accroche en dessous",
  img_project_pllx:
    "premier parallax formant la page de profil d'un utilisateur",
  img_project_pllx_1:
    "deuxième parallax formant la page de profil d'un utilisateur",
  img_project_pllx_2:
    "troisième parallax formant la page de profil d'un utilisateur",
  github: "https://github.com/matohoundev?tab=repositories",
};

export const figurToysData = {
  id: 7,
  cls_slide: "slide-figur",
  cls_slide_2: "slide-figur-2",
  cls_name: "figurToys",
  cls_h3: "h3-figur",
  name: "Figur",
  name_other_half: "Toys",
  cls_name_half: "b-figur",
  cls_mark_name: "mark-tech-figur",
  tech: "Wordpress - Astra - ",
  tech_other_half: "WooCommerce",
  cls_card: "card-figur",
  alt_card: "image du projet FigurToys",
  svg: sephi,
  svg_2: cloud,
  alt_svg: "Sephiroth",
  alt_svg_2: "Cloud Strife de dos",
  cls_svg: "svg-project-figur",
  cls_svg_2: "svg-project-figur-2",

  // Mission

  cls_head_img: "figurLand",
  citation: "Pourquoi toutes ces figurines ? Why not",
  synopsis:
    "FigurToys est une Boutique fictif en ligne de Figurines de collections et produits Geek authentique sous licence officiel, Dérivé du Cinéma, Manga, Musique, Horreur, Jeux ...",
  cls_half_img: "figurHalf",
  mission:
    "Création d'une boutique Wordpress avec le thème Astra et WooCommerce pour la gestion du panier. ",
  cls_img: "figurCard",
  alt_banner: "Bannière FigurToys, plusieurs figurines de Link(zelda)",
  img_project:
    "Entête de FigurToys, figurine de cloud strife(final fantasy 7) et une indication pour accéder à son espace de vente",
  img_project_pllx: "premier parallax formant la page About",
  img_project_pllx_1: "deuxième parallax formant la page About",
  img_project_pllx_2: "troisième parallax formant la page About",
  github: "https://github.com/matohoundev/Wordpress-FigurToys",
};

export const folioData = {
  id: 8,
  cls_slide: "slide-folio",
  cls_slide_2: "slide-folio-2",
  cls_name: "folio",
  cls_h3: "h3-folio",
  name: "Folio",
  name_other_half: "2020",
  cls_name_half: "b-folio",
  cls_name_half_md: "b-folio",
  cls_mark_name: "mark-tech-folio",
  tech: "Bootstrap - Javascript  - Jquery - ",
  tech_other_half: "Php",
  cls_card: "card-folio",
  alt_card: "image de mon Portfolio édition 2020",
  svg: marvin,
  alt_svg: "Atohoun marvin auteur du site (moi en gros)",
  cls_svg: "svg-project-folio",

  // Mission

  cls_head_img: "folioLand",
  citation: "Pourquoi faire compliqué quand on peut faire simple",
  synopsis: "Folio2020 est tout simplement l'édition 2020 de mon portfolio.",
  cls_half_img: "folioHalf",
  mission:
    "L'édition 2020 de mon portfolio avait pour objectif d'offrir deux identités visuelle sur la même page via les différents interaction proposée, interaction qui au fur et à mesure modifiait l'apparence du site pour proposer une experience différente, le premier design était sobre et le second beaucoup plus colorée.",
  cls_img: "folioCard",
  alt_banner:
    "Bannière de mon Portfolio, mon entête avec mon nom écrit dessus et un court texte de présentation",
  img_project: "Un aperçu d'un projet dans la section projet",
  img_project_pllx:
    "premier parallax formant le portfolio dans son entièreté après animation",
  img_project_pllx_1:
    "deuxième parallax formant le portfolio dans son entièreté après animation",
  img_project_pllx_2:
    "troisième parallax formant le portfolio dans son entièreté après animation",
  github: "https://github.com/matohoundev/Portfolio-2020",
};

export const acaciaData = {
  id: 9,
  cls_slide: "slide-acacia",
  cls_slide_2: "slide-acacia-2",
  cls_name: "acacia",
  cls_h3: "h3-acacia",
  name: "Aca",
  name_other_half: "cia",
  cls_name_half: "b-acacia",
  cls_mark_name: "mark-tech-acacia",
  tech: "Mvc - Materialize - Javascript ",
  tech_other_half: "- Jquery - Php",
  cls_card: "card-acacia",
  alt_card: "image du projet Acacia",
  svg: cuisto,
  alt_svg: "chef cuistot cartoon",
  cls_svg: "svg-project-acacia",

  // Mission

  cls_head_img: "acaciaLand",
  citation: "La bonne cuisine est honnête, sincère et simple.",
  synopsis:
    "Acacia est un restaurant gastronomique fictif, il est fictivement basée à Paris et ils s'y cuisinent tout aussi fictivement de délicieux plats.",
  cls_half_img: "acaciaHalf",
  mission:
    "Création d’une solution pour qu'un restaurants puisse fidéliser ces clients via un espace membre leur permettant de commenter les différents articles partager par  le restaurant, et de bénéficier de différents bon de réduction.",
  cls_img: "acaciaCard",
  alt_banner: "Bannière d'Acacia, pain perdu, miel, fruits",
  img_project: "Page des produits du restaurants",
  img_project_pllx: "premier parallax formant la page d'accueil",
  img_project_pllx_1: "deuxième parallax formant la page d'accueil",
  img_project_pllx_2: "troisième parallax formant la page d'accueil",
  github: "https://github.com/matohoundev/Acacia",
};
