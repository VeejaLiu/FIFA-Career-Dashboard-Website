import './App.css';
import { Carousel, Space, Typography } from '@douyinfe/semi-ui';
import easy_to_use_img from './assets/easy_to_use.png';
import player_list_page_img from './assets/player_list_page.png';
import player_trends_page_img from './assets/player_trends_page.png';

function App() {
  const { Title, Paragraph } = Typography;

  const renderLogo = () => {
    return (
      <img
        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg"
        alt="semi_logo"
        style={{ width: 87, height: 31 }}
      />
    );
  };

  const imgList = [
    easy_to_use_img,
    player_list_page_img,
    player_trends_page_img,
  ];

  const textList = [
    [
      'Semi 设计管理系统',
      '从 Semi Design，到 Any Design',
      '快速定制你的设计系统，并应用在设计稿和代码中',
    ],
    [
      'Semi 物料市场',
      '面向业务场景的定制化组件，支持线上预览和调试',
      '内容由 Semi Design 用户共建',
    ],
    [
      'Semi 设计/代码模板',
      '高效的 Design2Code 设计稿转代码',
      '海量 Figma 设计模板一键转为真实前端代码',
    ],
  ];
  return (
    <>
      <Carousel
        style={{
          width: '100%',
          height: '400px',
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
              <Space
                vertical
                align="start"
                spacing="medium"
                style={{
                  position: 'absolute',
                  top: '100px',
                  left: '100px',
                }}
              >
                {renderLogo()}
                <Title heading={2} style={{ color: '#1C1F23' }}>
                  {textList[index][0]}
                </Title>
                <Space vertical align="start">
                  <Paragraph style={{ color: '#1C1F23' }}>
                    {textList[index][1]}
                  </Paragraph>
                  <Paragraph style={{ color: '#1C1F23' }}>
                    {textList[index][2]}
                  </Paragraph>
                </Space>
              </Space>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default App;
