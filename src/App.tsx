import { Button, Carousel, Layout, Space } from '@douyinfe/semi-ui';
import easy_to_use_img from './assets/easy_to_use.png';
import player_list_page_img from './assets/player_list_page.png';
import player_trends_page_img from './assets/player_trends_page.png';
import './App.css';

const { Header, Footer, Content } = Layout;

function goToApp() {
  window.open('https://app.fccareer.top', '_blank');
}

function App() {
  const imgList = [
    { img: easy_to_use_img, text: 'Easy to use' },
    { img: player_list_page_img, text: 'Player List Page' },
    { img: player_trends_page_img, text: 'Player Trends Page' },
  ];

  return (
    <Layout className="components-layout-demo">
      <Header style={{ height: '61px', backgroundColor: '#151616' }}>
        <Space>
          <div>
            <span style={{ color: '#FFF' }}>FC</span>
            <span style={{ color: '#FFF' }}>Career</span>
            <span style={{ color: '#FFF' }}>.top</span>
          </div>

          <div
            className="my-button"
            onClick={() => {
              goToApp();
            }}
          >
            Go to App
          </div>
        </Space>
      </Header>

      <Content style={{ width: '100%' }}>
        <Carousel
          style={{
            width: '100%',
            height: '500px',
          }}
          theme={'light'}
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
            color: '#fafafa',
            backgroundColor: '#323232',
            padding: '0 auto',
            margin: '0 auto',
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
            className="my-button"
            onClick={() => {
              goToApp();
            }}
          >
            Start Now
          </Button>
        </Space>
      </Content>
      <Footer
        style={{
          height: '200px',
          backgroundColor: '#1e1f1f',
          color: '#fff',
        }}
      >
        <Space
          vertical
          align={'center'}
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          CopyRight © 2024 FC-Career-Dashboard
        </Space>
      </Footer>
    </Layout>
  );
}

export default App;
