document.getElementById('id-styles').style.color = 'red';
document.getElementById('id-styles').style.backgroundColor = 'black';

const div = document.getElementById('div');
div.querySelector('p.styles').innerHTML = 'Texto desde JS';
