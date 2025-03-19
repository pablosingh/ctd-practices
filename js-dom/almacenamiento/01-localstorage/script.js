const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const job = document.getElementById('job');

document.getElementById('welcome').innerHTML = localStorage.getItem('username') == null ? '' : `Bienvenido ${localStorage.getItem('username')}`;
const save = () => {
  localStorage.setItem('username', firstname.value + ' ' + lastname.value);
  localStorage.setItem('job', job.value);
};
