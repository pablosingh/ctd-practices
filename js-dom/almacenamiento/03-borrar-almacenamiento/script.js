const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const job = document.getElementById('job');

document.getElementById('welcome').innerHTML = sessionStorage.getItem('username') == null ? '' : `Bienvenido ${sessionStorage.getItem('username')}`;
const save = () => {
  sessionStorage.setItem('username', firstname.value + ' ' + lastname.value);
  sessionStorage.setItem('job', job.value);
};

const logout = () => {
  // sessionStorage.removeItem('username');
  sessionStorage.clear();
  // localStorage.removeItem('username');
  localStorage.clear();
};
