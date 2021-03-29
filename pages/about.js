import Head from 'next/head';
import React from 'react';
import { Layout, Row, Typography, Divider } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import stylesheet from 'antd/dist/antd.min.css';

const { Content } = Layout;

const { Title } = Typography;

export default function About() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <Head>
        <title>
          About - Text Convert Case | Convert your texts to lower case, upper
          case and more!
        </title>
        <link rel='icon' href='/favicon.ico' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <script
          data-ad-client='ca-pub-9002113341910262'
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>

        <meta
          name='keywords'
          content='case converter, upper case, lower case, camel case, pascal case, text convert case, convert, convert text, text case convert, dot case, transform case, path case, header case, title case, sentence case, capital case, snake case, dot case, swap case, alternate case, online converter, online text converter, online text formatter, online text transformer, text transformer '
        />

        <meta name='apple-mobile-web-app-title' content='Text Convert Case' />
        <meta name='apple-mobile-web-app-title' content='Text Convert Case' />
        <meta
          name='msapplication-tooltip'
          content="Did you left the caps lock on accidentally and typed something, but can't be bothered to start again and retype it all?"
        />

        <meta
          name='description'
          content='Easily convert text between different letter cases: lower case, UPPER CASE, Sentence case, Title Case, aLtErNaTiNg cAsE and more online!'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://textconvertcase.com/abput' />
        <meta
          property='og:title'
          content='Text Convert Case - Convert upper case to lower case, lower case to upper case and more!'
        />
        <meta
          property='og:description'
          content='Easily convert text between different letter cases: lower case, UPPER CASE, Sentence case, Title Case, aLtErNaTiNg cAsE and more online!'
        />

        <link rel='canonical' href='https://textconvertcase.com/abput' />

        <link rel='apple-touch-icon' href='/logo192.png' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />

        <link rel='manifest' href='/manifest.json' />
      </Head>

      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content className='site-layout'>
          <div
            className='site-layout-background'
            style={{ padding: '10px 20px' }}>
            <Row justify='center'>
              <Title level={2}>Welcome to Text Convert Case Online Tool</Title>
            </Row>
            <Typography.Text>
              A very handy and useful text tool online, where you can change
              between lower case and upper case letters, where you can freely
              transform your text.
            </Typography.Text>
            <Typography.Paragraph>
              The idea of ​​the tool is to allow you to freely transform your
              texts, to meet your objectives, without having to retype
              everything again, with a few clicks, you are able to modify the
              shape of your text and can still download it the resulting file or
              even copy it to the clipboard. Enjoy!
            </Typography.Paragraph>
          </div>
          <Row justify='center'>
            <Link href='/'>
              <a>Back to Home</a>
            </Link>
          </Row>
        </Content>
        <Divider />
        <Footer />
      </Layout>
    </>
  );
}
