console.log('--------LEGIT!---------');

const getPro = document.querySelectorAll('.bg-purple').length;
console.log(getPro);

if (getPro < 1) {
  const htmlString = `<svg class="octicon octicon-star mr-2 text-gray-light" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
<span class="label bg-purple text-uppercase">Pro</span>`;

  const div = document.createElement('div');
  div.className = 'border-top border-gray-light py-3';
  div.innerHTML = htmlString.trim();
  document.querySelectorAll('.vcard-names-container')[1].after(div);
}
