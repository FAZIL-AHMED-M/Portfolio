const darkmode = () => {
const modes = document.querySelectorAll('#light');
const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

const handler = () => {}

modes.forEach((btn) => {
 btn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
  
  localStorage.setItem('theme','light-mode');

  } else {
   localStorage.removeItem('theme');
  }
 });
 
});

};
export default darkmode