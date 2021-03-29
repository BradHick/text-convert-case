import { Layout, Row, Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = () => (
  <Header style={{ height: '35px' }}>
    <Row slign='middle' justify='center'>
      <Title
        level={2}
        style={{
          color: '#1890ff',
          marginTop: '0px',
          marginBottom: '0px',
        }}>
        T
      </Title>
      <Title
        level={2}
        style={{
          color: 'white',
          marginTop: '0px',
          marginBottom: '0px',
        }}>
        ext
      </Title>
      <Title
        level={2}
        style={{
          color: '#1890ff',
          marginTop: '0px',
          marginBottom: '0px',
        }}>
        C
      </Title>
      <Title
        level={2}
        style={{
          color: 'white',
          marginTop: '0px',
          marginBottom: '0px',
        }}>
        onvert
      </Title>
      <Title
        level={2}
        style={{
          color: '#1890ff',
          marginTop: '0px',
          marginBottom: '0px',
        }}>
        C
      </Title>
      <Title
        level={2}
        style={{
          color: 'white',
          marginTop: '0px',
          marginBottom: '0px',
        }}>
        ase
      </Title>
    </Row>
  </Header>
);

export default HeaderComponent;
