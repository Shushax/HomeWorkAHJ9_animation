/* eslint no-unused-expressions:0 */ // --> OFF

export default class Collapse {
  constructor(text) {
    this.text = text;
  }

  doButton() {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'Collapse';
    document.body.insertAdjacentElement('beforeEnd', btn);
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = this.text;
    btn.insertAdjacentElement('afterend', text);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      text.classList.contains('active') ? text.classList.remove('active') : text.classList.add('active');
    });
  }
}
