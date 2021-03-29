import { Row, Col, Typography, Divider } from 'antd';

const { Title } = Typography;

const CasesDescription = () => (
  <Row justify='start' style={{ padding: '20px' }}>
    <Title level={3}>Welcome to Text Convert Case Online Tool</Title>
    <Typography.Text>
      A very handy and useful text tool online, where you can change between
      lower case and upper case letters, where you can freely transform your
      text. Explore the options below:
    </Typography.Text>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Sentence Case</Title>
      <Typography.Paragraph>
        The sentence case converter allow you to paste any text you’d like, and
        it will automatically transform it to a fully formed structured
        sentence.
      </Typography.Paragraph>
      <Typography.Paragraph>
        It works by capitalizing the very first letter in each sentence, and
        will then go on to transform the rest of the text into lowercase as well
        as converting i’s into I’s. Every letter after a full stop will get
        converted into an upper case letter.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Note: it won’t, however, capitalize names or places.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        This is an example of sentence case. Note the upper letter "N" after the
        dot.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Lower Case</Title>
      <Typography.Paragraph>
        If you are wondering how to uncapitalize text (like turn off the Caps
        Lock button), this is exactly what the lower case text converter will
        allow you to do - it transforms all the letters in your text into
        lowercase letters. Simply copy the text that you need generating into
        lower case and paste the text into the box above and select the ‘lower
        case’ button.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        this is an example of lower case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Upper Case</Title>
      <Typography.Paragraph>
        The upper case transformer will take any text that you have and will
        generate all the letters into upper case ones. It will essentially make
        all lower case letters into CAPITALS (as well as keep upper case letters
        as upper case letters).
      </Typography.Paragraph>
      <Typography.Paragraph>
        To do this, you simply have to select the text that you need changing
        and pasting into the box above and then select the UPPER CASE button.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        THIS IS AN EXAMPLE OF UPPER CASE.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Upper Case First</Title>
      <Typography.Paragraph>
        Transformer will take any text that you have and will generate the first
        letter into upper case, the upper case first will do this for you.
      </Typography.Paragraph>
      <Typography.Paragraph>
        To do this, you simply have to select the text that you need changing
        and pasting into the box above and then press the Upper case first
        button.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        This is an example of upper case fisrt case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Lower Case First</Title>
      <Typography.Paragraph>
        The lower case first transformer will take any text that you have and
        will generate the first letter into lower case.
      </Typography.Paragraph>
      <Typography.Paragraph>
        To do this, you simply have to paste the text that you want to change
        into the box above and then press the lower case first button.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        this is an example of lower case fisrt case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Camel Case</Title>
      <Typography.Paragraph>
        The camel case transformer will take any text that you have and will
        generate in the format camel case (like JSON).
      </Typography.Paragraph>
      <Typography.Paragraph code>
        thisIsAnExampleOfCamelCase.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Pascal Case</Title>
      <Typography.Paragraph>
        The pascal case transformer will take any text that you have and will
        generate in the format pascal case.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        ThisIsAnExampleOfPascalCase.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Header Case</Title>
      <Typography.Paragraph>
        The header case transformer will take any text that you have and will
        generate in the format header case.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        This-Is-An-Example-Of-Header-Case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Path Case</Title>
      <Typography.Paragraph>
        The path case transformer will take any text that you have and will
        generate in the format path case (like a directory path).
      </Typography.Paragraph>
      <Typography.Paragraph code>
        this/is/an/example/of/path/case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Snake Case</Title>
      <Typography.Paragraph>
        The snake case transformer will take any text that you have and will
        generate in the format snake case.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        this_is_an_example_of_snake_case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Param Case</Title>
      <Typography.Paragraph>
        The param case transformer will take any text that you have and will
        generate in the format param case.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        this-is-an-example-of-param-case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Constant Case</Title>
      <Typography.Paragraph>
        The constant case transformer will take any text that you have and will
        generate in the format constant case.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        THIS_IS_AN_EXAMPLE_OF_CONSTANT_CASE
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>No Case</Title>
      <Typography.Paragraph>
        The no case transformer will take any text that you have and will
        generate with no case.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        this is an example of no case
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Dot Case</Title>
      <Typography.Paragraph>
        The dot case transformer will take any text that you have and will
        generate in the format dot case.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        this.is.an.example.of.dot.case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Capital Case</Title>
      <Typography.Paragraph>
        The capital case converter will automatically convert the starting
        letter of every word into an upper case and will leave the remaining
        letters as lower case ones.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Simply copy the content that you will like to generate into this format,
        then paste into the box form above and select the Capital Case button.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        This Is An Example Of Capital Case.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Swap Case</Title>
      <Typography.Paragraph>
        The swap case converter will allow you to transform your text (no matter
        the current format) into text that alternates between lower case and
        upper case. It will generate a capital letter and then a lower case
        letter within the same word.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        tHiS Is aN ExAmPlE Of sWaP CaSe.
      </Typography.Paragraph>
    </Col>

    <Divider style={{ margin: '20px' }} />
    <Col>
      <Title level={4}>Title Case</Title>
      <Typography.Paragraph>
        The title case converter is perfect for those who are a bit unsure on
        how to title an upcoming essay. It essentially ensures the correct
        letters are capitalized within the context of a title. Words such as
        “an” will be left all in lower case and words that are important will be
        converted such as “Title”.
      </Typography.Paragraph>
      <Typography.Paragraph code>
        This Is an Example of Title Case.
      </Typography.Paragraph>
    </Col>
  </Row>
);

export default CasesDescription;
