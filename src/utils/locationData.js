import AlbaniaJPG from '../assets/albania.jpg';
import MaldivesJPG from '../assets/maldives.jpg';
import MexicoJPG from '../assets/mexico.jpg';
import GreeceJPG from '../assets/greece.jpg';
import DominicanaJPG from '../assets/dominicana.jpg';
import ThailandJPG from '../assets/thailand.jpg';

const locationData = [
  {
    id: 1, location: 'Albania', isSummer: true, img: AlbaniaJPG,
  },

  {
    id: 2, location: 'Mexico', isSummer: false, img: MexicoJPG,
  },
  {
    id: 3, location: 'Maldives', isSummer: false, img: MaldivesJPG,
  },
  {
    id: 4, location: 'Thailand', isSummer: false, img: ThailandJPG,
  },
  {
    id: 5, location: 'Greece', isSummer: true, img: GreeceJPG,
  },
  {
    id: 6, location: 'Dominicana', isSummer: false, img: DominicanaJPG,
  },
];

export default locationData;
