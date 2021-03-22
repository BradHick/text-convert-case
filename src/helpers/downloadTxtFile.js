const downloadTxtFile = (textValue) => {
  const element = document.createElement('a');
  const file = new Blob([textValue], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'TextConvertCase.txt';
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

export default downloadTxtFile;
