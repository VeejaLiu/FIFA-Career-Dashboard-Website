import { Layout, Space } from '@douyinfe/semi-ui';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import webLogo from './assets/website-logo.png';

import './App.css';
import Homepage from './homepage/Homepage.tsx';
import { ChangeLogsPage } from './change-logs/ChangeLogsPage.tsx';
import ContactUsPage from './contact-us/ContactUsPage.tsx';

const { Header, Footer, Content } = Layout;

export function goToApp() {
  window.open('https://app.fccareer.top', '_blank');
}

function App() {
  return (
    <Router>
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
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  marginLeft: '1px',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: '#FFF' }}>FC</span>
                <span style={{ color: '#FFF' }}>Career</span>
                <span style={{ color: '#FFF' }}>.top</span>
              </div>
            </Link>

            <Link to="/change-logs" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  marginLeft: '10px',
                  color: '#FFF',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  padding: '10px 5px',
                  fontWeight: 'bold',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFF';
                  e.currentTarget.style.backgroundColor = '#252626';
                  // bottom border #94f17a
                  e.currentTarget.style.borderBottom = '2px solid #94f17a';
                }}
                onMouseLeave={(e) => {
                  // Reset background color
                  e.currentTarget.style.backgroundColor = '';
                  // Reset bottom border
                  e.currentTarget.style.borderBottom = '';
                }}
              >
                Change logs
              </div>
            </Link>

            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  marginLeft: '10px',
                  color: '#FFF',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  padding: '10px 5px',
                  fontWeight: 'bold',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFF';
                  e.currentTarget.style.backgroundColor = '#252626';
                  // bottom border #94f17a
                  e.currentTarget.style.borderBottom = '2px solid #94f17a';
                }}
                onMouseLeave={(e) => {
                  // Reset background color
                  e.currentTarget.style.backgroundColor = '';
                  // Reset bottom border
                  e.currentTarget.style.borderBottom = '';
                }}
              >
                Contact
              </div>
            </Link>

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
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/change-logs" element={<ChangeLogsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
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
    </Router>
  );
}

export default App;
