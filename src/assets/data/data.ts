import Product_1 from '../images/Product_1.png';
import Product_2 from '../images/Product_2.png';
import Product_3 from '../images/Product_3.png';
import LogoColorz from '../logos/LogoColorz.png';
import LogoCreated from '../logos/LogoCreated.png';
import multiple_finish_1 from '../images/multiple_finish_1.png';
import multiple_finish_2 from '../images/multiple_finish_2.png';
import multiple_finish_3 from '../images/multiple_finish_3.png';
import Slider_A1 from '../images/Slider_A1.png';
import Slider_A2 from '../images/Slider_A2.png';
import Slider_A3 from '../images/Slider_A3.png';
import Rectangle29 from '../images/Rectangle29.png';
import advancedImg from '../images/3mm1.png';
import key from '../icons/key-icon.png';
import monkey from '../images/monkey.png';

const data = {
  header: {
    logo: 'Vision.R',
    menuLabels: ['Low solution', 'Low technology', 'High Price'],
    buttonLabel: 'Buy it',
    text: 'NEVER SEEN (well, so far, so far)',
    title: 'With Vision. A, work at the office... as if you were still at home!'
  },
  modal: {
    icon: monkey,
    title: 'Did you (really?) believe it?',
    'body-normal-text':
      'Anyway, we hope it made you smile, because we need it right now.',
    'body-bold-text':
      'And if not, you probably have more interesting products to sell !',
    footer:
      'That’s good, our teams are stronger in digital communication than in cardboard innovations.'
  },
  mostTechnology: {
    text: 'Vision. R with a big “R” as in the word “Revolution”! Afraid of feeling destabilized with the future return to the office? With Vision. R, be reassured.e.s! Get instant, real time, high resolution, social videocall and feel like at home. In short, get ready to make a hit!',
    buttonLabel: 'Buy it now'
  },
  advancedTechnology: {
    description:
      'Only 3 mm of quality Carton-Plume for a maximum experience! We traveled around the world, we met all the Carton-Plume Masters to bring back only the best.',
    title: 'The most advanced technology',
    image: advancedImg
  },
  anySituation: {
    description:
      'With our camera-free mode, you can be anywhere you want and be discreetly in your pajamas with professionalism.',
    firstTitle: 'Get ready to any situation !',
    secondTitle: 'The modest (or I am in pajamas and I do not assume) effect',
    text: 'With your Vision.R',
    image: Rectangle29,
    icon: key
  },
  chooseYourVision: {
    title: 'Whatever your style, you will necessarily find your happiness',
    buttonLabel: 'Choose your Vision.R',
    images: [multiple_finish_1, multiple_finish_2, multiple_finish_3]
  },
  testimonies: {
    0: {
      client: 'Jean-Claude Van Damme',
      quote: '“Le grand écart technologique que tout le monde attendait !”'
    },
    1: {
      client: 'Sweet Client, Acme Inc.',
      quote:
        '“Nous créons des solutions sur mesure qui boostent les entreprises.”'
    },
    2: {
      client: 'Dope Client, Acme LLC',
      quote: '“Quelques une des marques avec lesquelles nous avons travaillés”'
    },
    3: {
      client: 'Cool Client, Acme LTD',
      quote:
        '“Ils parlent de nos oeuvres et talents. Nous vous invitons a essayer”'
    }
  },
  carousel: [Slider_A1, Slider_A2, Slider_A3],
  products: {
    title: 'The modest (or I am in pajamas and I do not assume) effect',
    products: [
      {
        name: 'The funny filter kit (D’jeuns friendly)',
        price: '199,00 €',
        image: Product_1
      },
      { name: 'Screen camera off', price: '229,00 €', image: Product_2 },
      {
        name: 'The Charentaiz (Yeuv Friendly)',
        price: '349,95 €',
        image: Product_3
      }
    ]
  },
  footer: {
    LogoColorz,
    LogoCreated,
    content: [
      {
        title: 'Paris',
        text: '16 bis avenue Parmentier \n 75011 Paris, France'
      },
      { title: 'Lyon', text: '1 rue Lalande \n 69006 Lyon, France' },
      { title: 'Contact us', text: '+33 (0)1 82 83 83 60 \n hello@colorz.fr' }
    ]
  }
};

export default data;
