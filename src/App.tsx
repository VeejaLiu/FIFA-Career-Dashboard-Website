import { Carousel, Col, Layout, Row, Space } from '@douyinfe/semi-ui';
import get_started_image from './assets/get_started.webp';
import player_detail_image from './assets/player_detail.webp';
import player_list_image from './assets/player_list.webp';
import player_trends_image from './assets/player_trends.webp';
import settings_image from './assets/settings.webp';
import notification_image from './assets/notification.webp';

import webLogo from './assets/website-logo.png';

import './App.css';

const { Header, Footer, Content } = Layout;

function goToApp() {
  window.open('https://app.fccareer.top', '_blank');
}

function App() {
  const imgList = [
    { img: player_list_image, text: 'All player list in FC24 / FC25 ' },
    { img: player_detail_image, text: 'all player details in FC24 / FC25' },
    { img: player_trends_image, text: 'All player trends in FC24 / FC25' },
    {
      img: notification_image,
      text: 'notification when player overall rating updated, potential updated, skill moves updated, weak foot updated, etc.',
    },
    { img: get_started_image, text: 'easy to get started' },
    {
      img: settings_image,
      text: 'Rich settings options to customize your notifications.',
    },
  ];

  return (
    <Layout className="components-layout-demo">
      <Header style={{ height: '61px', backgroundColor: '#151616' }}>
        <Space
          style={{
            height: '100%',
            width: '100%',
          }}
          spacing={'medium'}
          align={'center'}
        >
          <img
            src={webLogo}
            alt="logo"
            style={{
              marginLeft: '20px',
              height: '40px',
            }}
          />
          <div
            style={{
              marginLeft: '1px',
              fontSize: '1.5rem',
            }}
          >
            <span style={{ color: '#FFF' }}>FC</span>
            <span style={{ color: '#FFF' }}>Career</span>
            <span style={{ color: '#FFF' }}>.top</span>
          </div>

          <div
            className="my-button"
            style={{
              marginRight: '20px',
            }}
            onClick={() => {
              goToApp();
            }}
          >
            Go to App
          </div>
        </Space>
      </Header>

      <Content style={{ width: '100%' }}>
        <Space
          style={{
            width: '100%',
            backgroundColor: '#323232',
          }}
          align={'center'}
          vertical
        >
          <Carousel
            style={{
              width: '1280px',
              height: '600px',
            }}
            theme={'dark'}
            autoPlay={{
              interval: 2000,
              hoverToPause: true,
            }}
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
        </Space>
        {/* banner start -------------------------- */}
        <Space
          align={'center'}
          style={{
            height: '100px',
            width: '100%',
            color: '#fafafa',
            backgroundColor: '#151616',
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
            Dear Coach, are you ready to start conquering the football world?
          </h1>
          <div
            className="my-button"
            onClick={() => {
              goToApp();
            }}
          >
            Start Now
          </div>
        </Space>
        {/* banner end -------------------------- */}

        {/* feature start -------------------------- */}
        <div
          className={'grid'}
          style={{
            width: '100%',
            color: '#FFF',
            backgroundColor: '#151616',
          }}
        >
          <Row>
            <Col span={8}>
              <Space className="col-content" vertical>
                <h1>Experience Fully Automated Efficiency</h1>
                <p>
                  Import the code just once and say goodbye to tedious manual
                  input—streamline your processes effortlessly!
                </p>
              </Space>
            </Col>
            <Col span={8}>
              <div className="col-content">
                <h1>Unlock Comprehensive Tracking</h1>
                <p>
                  Continuously monitor your players' growth data to gain clear
                  insights into their development journey over past seasons.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="col-content">
                <h1>Stay Ahead with Proactive Notifications</h1>
                <p>
                  Receive instant updates on players' potential and abilities,
                  letting the app assist you in keeping a close eye on your
                  team’s performance.
                </p>
              </div>
            </Col>
          </Row>
          <br />
        </div>
      </Content>
      <Footer
        style={{
          color: '#fff',
          padding: '20px',
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
          <div>CopyRight © 2024 FC-Career-Dashboard</div>
          <div
            style={{
              marginTop: '10px',
            }}
          >
            <span style={{ fontWeight: 'bold' }}>Email: </span>
            <span
              onClick={() => {
                window.open('mailto:support@fccareer.top');
              }}
              style={{
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              support@fccareer.top
            </span>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Discord: </span>
            <span
              onClick={() => {
                window.open('https://discord.gg/aKfWAtbJ8F', '_blank');
              }}
              style={{
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              https://discord.gg/aKfWAtbJ8F
            </span>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Github: </span>
            <span
              onClick={() => {
                window.open(
                  'https://github.com/VeejaLiu/FIFA-Career-Dashboard-Frontend',
                  '_blank',
                );
              }}
              style={{
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              VeejaLiu/FIFA-Career-Dashboard-Frontend
            </span>
          </div>
        </Space>
      </Footer>
    </Layout>
  );
}

export default App;
