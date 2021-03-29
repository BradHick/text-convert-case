import Head from 'next/head';
import React, { useState } from 'react';
import {
  Layout,
  Button,
  Input,
  Row,
  Col,
  Typography,
  Divider,
  message,
} from 'antd';
// import dynamic from 'next/dynamic';
import Header from './components/Header';
import Footer from './components/Footer';
import CasesDescription from './components/CasesDescription';
import {
  camelCase, // `camelCase`
  pascalCase, // `PascalCase`
  headerCase, // `Header-Case`
  pathCase, // `path/case`
  snakeCase, // `snake_case`
  paramCase, // `param-case`
  dotCase, // `dot.case`
  noCase, // `no case`
  constantCase, // `CONSTANT_CASE`
  lowerCase, // `lower case`
  lowerCaseFirst, // `lOWER CASE FIRST`
  upperCase, // `UPPER CASE`
  upperCaseFirst, // `Upper case first`
  swapCase, // `sWaP cAsE` -> `SwAp CaSe`
} from 'text-case';
import Link from 'next/link';
// import copyToClipboard from './helpers/copyToClipboard';
// import downloadTxtFile from './helpers/downloadTxtFile';
// import capitalCase from './helpers/capitalCase';
// import titleCase from './helpers/titleCase';
// import sentenceCase from './helpers/sentenceCase';
// import alternatingCase from './helpers/alternatingCase';
// const copyToClipboard = dynamic(() => import('./helpers/copyToClipboard'));
// const downloadTxtFile = dynamic(() => import('./helpers/downloadTxtFile'));
// const capitalCase = dynamic(() => import('./helpers/capitalCase'));
// const titleCase = dynamic(() => import('./helpers/titleCase'));
// const sentenceCase = dynamic(() => import('./helpers/sentenceCase'));
// const alternatingCase = dynamic(() => import('./helpers/alternatingCase'));
import stylesheet from 'antd/dist/antd.min.css';

const { Content } = Layout;

const { TextArea } = Input;

function alternatingCase(a) {
  if (!a) {
    a = '';
  }
  a = a.toLowerCase();
  for (var b = '', c = 0; c < a.length; c++) {
    var d = a.charAt(c);
    b += c % 2 ? d.toUpperCase() : d;
  }
  return b;
}

const capitalCase = (a) => {
  let c;
  return (
    (c = a.toLowerCase()),
    (c = (c + '').replace(/^(\S)|\s+(\S)/g, function (a) {
      return a.toUpperCase();
    })),
    // (c = _(c)),
    (c = c.replace(/\(([A-Za-z])/g, function (a) {
      return a.toUpperCase();
    })),
    c
  );
};

function copyToClipboard(textValue) {
  try {
    if (typeof window !== 'undefined') {
      let textField = window.document.createElement('textarea');
      textField.innerText = textValue;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      message.success('Copied !');
    }
  } catch (err) {
    message.error(err);
  }
}

function downloadTxtFile(textValue) {
  if (typeof window !== 'undefined') {
    const element = window.document.createElement('a');
    const file = new Blob([textValue], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'TextConvertCase.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
}

function sentenceCase(value) {
  if (!value) {
    value = '';
  }
  value = value.toLowerCase();
  let c = '';
  for (let b = !0, d = 0; d < value.length; d++) {
    var e = value.charAt(d);
    // eslint-disable-next-line no-unused-expressions
    /\.|\\!|\?|\n|\r/.test(e)
      ? (b = !0)
      : // eslint-disable-next-line no-sequences
        // eslint-disable-next-line eqeqeq
        '' != e.trim() && 1 == b && ((e = e.toUpperCase()), (b = !1)),
      (c += e);
  }
  return c;
}

function titleCase(a) {
  if (!a) {
    a = '';
  }
  return (a = (a = (a = capitalCase(a)).replace(
    /\b(A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Da|Do|Das|Dos|As|Os|O|E|Em|De|Vs?\\.?|Via)\b/g,
    function (_) {
      return _.toLowerCase();
    }
  )).replace(
    /(?:([\\.\\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|da|do|de|das|dos|e|em|as|os|vs?\\.?|via)/g,
    capitalCase
  ));
}

export default function Home() {
  const [value, setValue] = useState(
    ''
    // 'Loren Ipsun Dolor Sit Armet. as coisas do rei in the shower \n\nas coisas do rei in the shower'
  );
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Header />
      <Head>
        <title>
          Text Convert Case | Convert your texts to lower case, upper case and
          more!
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
        <meta property='og:url' content='https://textconvertcase.com' />
        <meta
          property='og:title'
          content='Text Convert Case - Convert upper case to lower case, lower case to upper case and more!'
        />
        <meta
          property='og:description'
          content='Easily convert text between different letter cases: lower case, UPPER CASE, Sentence case, Title Case, aLtErNaTiNg cAsE and more online!'
        />

        <link rel='canonical' href='https://textconvertcase.com' />

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

      <Layout>
        <Content className='site-layout'>
          <div
            className='site-layout-background'
            style={{ padding: '10px 20px', minHeight: '100vh' }}>
            <Typography.Paragraph strong style={{ marginBottom: '2px' }}>
              Did you left the caps lock on accidentally and typed something,
              but can't be bothered to start again and retype it all?
            </Typography.Paragraph>
            <Typography.Text>
              Simply enter your text and choose the case you want to convert it
              to.
            </Typography.Text>

            <Row gutter={[8, 8]} justify='end' style={{ marginTop: '10px' }}>
              <TextArea
                rows={4}
                value={value}
                allowClear
                onChange={(e) => {
                  let value = e.target.value;
                  setValue(value);
                }}
              />
              <Row>
                <Col>
                  <Button
                    size='small'
                    type='primary'
                    ghost
                    style={{ fontSize: '12px' }}
                    onClick={() => copyToClipboard(value)}>
                    Copy to clipboard
                  </Button>{' '}
                  <Button
                    size='small'
                    type='primary'
                    ghost
                    style={{ fontSize: '12px' }}
                    onClick={() => downloadTxtFile(value)}>
                    Download
                  </Button>{' '}
                </Col>
              </Row>
            </Row>
            <Divider style={{ margin: '20px' }} />
            <Row gutter={[8, 8]} justify='center' align='middle'>
              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(camelCase(value))}>
                  camelCase
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(pascalCase(value))}>
                  PascalCase
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(capitalCase(value))}>
                  Capital Case
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(headerCase(value))}>
                  Header-Case
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(titleCase(value))}>
                  Title Case
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(pathCase(value))}>
                  path/case
                </Button>{' '}
              </Col>
              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(snakeCase(value))}>
                  snake_case
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(paramCase(value))}>
                  param-case
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(dotCase(value))}>
                  dot.case
                </Button>{' '}
              </Col>
              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(noCase(value))}>
                  no case
                </Button>{' '}
              </Col>
              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(constantCase(value))}>
                  CONSTANT_CASE
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(lowerCase(value))}>
                  lower case
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(lowerCaseFirst(value))}>
                  lOWER CASE FIRST
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(upperCase(value))}>
                  UPPER CASE
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(upperCaseFirst(value))}>
                  Upper case first
                </Button>{' '}
              </Col>

              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(swapCase(value))}>
                  sWaP cAsE
                </Button>{' '}
              </Col>
              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(alternatingCase(value))}>
                  AlTeRnAtInG cAsE
                </Button>{' '}
              </Col>
              <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost
                  style={{ fontSize: '12px' }}
                  onClick={(e) => setValue(sentenceCase(value))}>
                  Sentence Case
                </Button>{' '}
              </Col>

              {/* <Col>
                <Button
                  size='small'
                  type='primary'
                  ghost style={{fontSize: '12px'}}
                  onClick={(e) => {
                    setValue('');
                    setValue('');
                  }}>
                  Clear
                </Button>{' '}
              </Col> */}
            </Row>
          </div>
          <CasesDescription />
          <Row justify='center'>
            <Link href='/about'>
              <a>About Text Convert Case</a>
            </Link>
          </Row>
        </Content>
        <Divider />
        <Footer />
      </Layout>
    </>
  );
}
