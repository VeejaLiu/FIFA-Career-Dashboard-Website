import './App.css';
import { Button, Carousel, Space } from '@douyinfe/semi-ui';
import easy_to_use_img from './assets/easy_to_use.png';
import player_list_page_img from './assets/player_list_page.png';
import player_trends_page_img from './assets/player_trends_page.png';

function App() {
  const imgList = [
    { img: easy_to_use_img, text: 'Easy to use' },
    { img: player_list_page_img, text: 'Player List Page' },
    { img: player_trends_page_img, text: 'Player Trends Page' },
  ];

  return (
    <>
      <Space>
        <div>
          <h1>FC Career</h1>
          <p>Track your players' progress</p>
        </div>
        <div>
          <Button
            theme={'borderless'}
            onClick={() => {
              console.log('Get Started');
              window.open('https://app.fccareer.top', '_blank');
            }}
          >
            Go to App
          </Button>
        </div>
      </Space>
      <Carousel
        style={{
          width: '100%',
          height: '500px',
        }}
        theme={'primary'}
        autoPlay={false}
      >
        {imgList.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundSize: 'cover',
                backgroundImage: `url('${data.img}')`,
              }}
            ></div>
          );
        })}
      </Carousel>
      <Space
        align={'center'}
        style={{
          height: '100px',
          width: '100%',
          color: '#fff',
          backgroundColor: '#222',
          padding: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '1.5rem',
            margin: '0 auto',
          }}
        >
          Dear Manager, Start Tracking Your Players' Progress!
        </h1>
        <Button
          theme={'borderless'}
          style={{
            backgroundColor: '#2962f1',
            borderRadius: '10px',
            height: '60px',
            width: '300px',
            fontSize: '2rem',
            margin: '0 auto',
            color: '#fff',
          }}
          onClick={() => {
            console.log('Get Started');
            window.open('https://app.fccareer.top', '_blank');
          }}
        >
          Start Now
        </Button>
      </Space>
    </>
  );
}

export default App;
