import './App.css';
import { Button, Carousel } from '@douyinfe/semi-ui';
import easy_to_use_img from './assets/easy_to_use.png';
import player_list_page_img from './assets/player_list_page.png';
import player_trends_page_img from './assets/player_trends_page.png';

function App() {
  const imgList = [
    easy_to_use_img,
    player_list_page_img,
    player_trends_page_img,
  ];

  return (
    <>
      <Carousel
        style={{
          width: '100%',
          height: '500px',
        }}
        theme={'primary'}
        autoPlay={false}
      >
        {imgList.map((src, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundSize: 'cover',
                backgroundImage: `url('${src}')`,
              }}
            >
              <Button
                theme={'borderless'}
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: '10px',
                }}
                onClick={() => {
                  console.log('Get Started');
                  window.open('https://app.fccareer.top', '_blank');
                }}
              >
                Get Started
              </Button>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default App;
