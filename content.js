/* global document, chrome */
const checkUsername = () => {
  // [x] get username from the page
  let pageUsername = '';
  const leftProfiles = document
    .querySelector('.vcard-names')
    .textContent.trim()
    .split('\n');
  if (leftProfiles.length > 1) {
    pageUsername = leftProfiles[1].trim();
  } else {
    pageUsername = leftProfiles[0].trim();
  }
  // [x] get username from profile menu
  const profiles = document
    .querySelector('.user-profile-link')
    .textContent.split(' ');
  const profileUsername = profiles[profiles.length - 1];
  // [] compare the two
  if (pageUsername === profileUsername) {
    return true;
  }
  return false;
};

const getPro = document.querySelectorAll('.bg-purple').length;

if (getPro < 1 && checkUsername() === true) {
  const htmlString = `<svg class="octicon octicon-star mr-2 text-gray-light" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
<span class="label bg-purple text-uppercase">Pro</span>`;

  const div = document.createElement('div');
  div.className = 'border-top border-gray-light py-3';
  div.innerHTML = htmlString.trim();
  document.querySelectorAll('.vcard-names-container')[1].after(div);
}
