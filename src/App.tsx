import { Carousel, Col, Layout, Row, Space } from '@douyinfe/semi-ui';
import p1 from './assets/get_started.webp';
import p2 from './assets/player_detail.webp';
import p3 from './assets/player_list.webp';
import p4 from './assets/player_trends.webp';
import webLogo from './assets/website-logo.png';

import './App.css';

const { Header, Footer, Content } = Layout;

function goToApp() {
  window.open('https://app.fccareer.top', '_blank');
}

function App() {
  const imgList = [
    { img: p4, text: '' },
    { img: p3, text: '' },
    { img: p2, text: '' },
    { img: p1, text: '' },
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
                {/*
                <h1>
                 保持领先，获得主动通知
                </h1>
                <p>
                  及时了解球员的潜力和能力，让应用程序帮助您密切关注球队的表现。
                </p>
                */}
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
