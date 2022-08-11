import './App.css';
import ListItem from './Components/ListItem'

function App() {
  const itemArray = [
    {
      imgSrc: 'https://mk-media.mytek.tn/media/catalog/product/cache/0dd0561c7b0cf141e19b8655ffdc7055/f/x/fx506lhb-hn323w-20.jpg',
      name: 'ASUS TUF GAMING F15',
      price: '2399 DT'
    },
    {
      imgSrc: 'https://mk-media.mytek.tn/media/catalog/product/cache/0dd0561c7b0cf141e19b8655ffdc7055/6/1/612a5ea.jpg',
      name: 'HP PAVILION 15-DK2015NK',
      price: '2415 DT'
    },
    {
      imgSrc: 'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/6/1/61s21ea.jpg',
      name: 'HP VICTUS 16-E0013NK',
      price: '2449 DT'
    },
  ];
  return (
    <div className="container">
      <ListItem itemArray={itemArray}/>
    </div>
  );
}

export default App;
