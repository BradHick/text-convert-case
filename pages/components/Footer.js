import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ textAlign: 'center', padding: 0 }}>
    App ©2021 Created by{' '}
    <a
      href='https://github.com/BradHick'
      target='_blank'
      rel='noopener noreferrer'>
      Brad Hick
    </a>
  </Footer>
);

export default FooterComponent;
