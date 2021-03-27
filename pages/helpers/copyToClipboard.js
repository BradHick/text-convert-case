import { message } from 'antd';

const copyToClipboard = (textValue) => {
  try {
    let textField = document.createElement('textarea');
    textField.innerText = textValue;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    message.success('Copied !');
  } catch (err) {
    message.error(err);
  }
};

export default copyToClipboard;
