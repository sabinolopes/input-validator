import { cpf } from 'cpf-cnpj-validator';
import validator from 'validator';

const input = document.querySelector('#data');
const select = document.querySelector('#data-type');
const result = document.querySelector('p');
const form = document.querySelector('form');

const checkIsEmail = (inputValue) => {
  if (validator.isEmail(inputValue)) {
    result.innerText = 'Valid e-mail!';
  } else {
    result.innerText = 'Invalid e-mail!';
  }
};

const checkIsCpf = (inputValue) => {
  if (cpf.isValid(inputValue)) {
    const formatedCpf = cpf.format(inputValue);
    input.value = formatedCpf;
    result.innerText = 'Valid CPF!';
  } else {
    result.innerText = 'Invalid CPF!';
  }
};

const checkIsUrl = (inputValue) => {
  if (validator.isURL(inputValue)) {
    result.innerText = 'Valid URL!';
  } else {
    result.innerText = 'Invalid URL!';
  }
};

const checkIsHex = (inputValue) => {
  if (validator.isHexColor(inputValue)) {
    result.innerText = 'Valid Hexadecimal Color!';
  } else {
    result.innerText = 'Invalid Hexadecimal Color!';
  }
};

const checkStrongPassword = (inputValue) => {
  if (validator.isStrongPassword(inputValue)) {
    result.innerText = 'Your password is strong and secure. Great job!';
  } else {
    result.innerText = 'Your password is not strong enough!';
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const option = select.value;
  const inputValue = input.value;

  switch (option) {
  case 'E-mail':
    checkIsEmail(inputValue);
    break;

  case 'CPF':
    checkIsCpf(inputValue);
    break;

  case 'URL':
    checkIsUrl(inputValue);
    break;

  case 'Hex':
    checkIsHex(inputValue);
    break;

  case 'Password':
    checkStrongPassword(inputValue);
    break;

  default:
    return 'Input Inválido';
  }
});
