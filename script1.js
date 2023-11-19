const colorButtons = document.querySelectorAll('.colorButton');
const colorBox = document.getElementById('colorBox');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    colorBox.style.backgroundColor = button.style.backgroundColor;
  });
});