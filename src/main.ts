import { findFactorial } from './factorial';

const html = document.querySelector<HTMLHtmlElement>('html')!;
const img = document.querySelector<HTMLSpanElement>('img')!;
const result = document.querySelector<HTMLHeadingElement>('article h2')!;
const article = document.querySelector<HTMLElement>('article')!;
const form = document.querySelector<HTMLFormElement>('form')!;
const input = document.querySelector<HTMLInputElement>('input')!;

let darkTheme = true;

const onSubmit = (event: Event) => {
  event.preventDefault();

  const value = parseInt(input.value);

  if (!value || value < 1) {
    alert('Please provide valid number');
    return;
  }

  const fact = findFactorial(value);

  article.removeAttribute('hidden');
  result.textContent = fact.toString();
};

const onReset = () => {
  article.setAttribute('hidden', 'true');
};

const onViteClick = () => {
  html.setAttribute('data-theme', darkTheme ? 'light': 'dark');
  darkTheme = !darkTheme;
}

form.addEventListener('submit', onSubmit);
form.addEventListener('reset', onReset);
img.addEventListener('dblclick', onViteClick);
img.addEventListener('touchstart', onViteClick);
