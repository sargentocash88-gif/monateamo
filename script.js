var CLAVE = "teamaretodamivida";

// fresitas flotando por TODA la pantalla, sin fin
(function(){
  var box = document.getElementById('fruits'), mobile = window.innerWidth < 600;
  function mk(cls, size){
    var d = document.createElement('div');
    d.className = 'f ' + cls;
    d.style.width = size + 'px'; d.style.height = (size*1.12) + 'px';
    d.innerHTML = '<svg viewBox="0 0 64 72"><use href="#sb"/></svg>';
    box.appendChild(d); return d;
  }
  var nb = mobile ? 26 : 46, nr = mobile ? 10 : 18, i, d, e;
  for (i = 0; i < nb; i++){
    d = mk('bob', 22 + Math.random()*48);
    e = Math.random();
    // la mitad se pegan a los bordes para enmarcar todo
    if (e < .5){ d.style.left = (Math.random() < .5 ? Math.random()*14 : 86 + Math.random()*12) + '%'; d.style.top = Math.random()*92 + '%'; }
    else if (e < .75){ d.style.top = (Math.random() < .5 ? Math.random()*12 : 86 + Math.random()*10) + '%'; d.style.left = Math.random()*94 + '%'; }
    else { d.style.left = Math.random()*94 + '%'; d.style.top = Math.random()*92 + '%'; }
    d.style.setProperty('--dx', (30 + Math.random()*60) + 'px');
    d.style.setProperty('--dy', (40 + Math.random()*80) + 'px');
    d.style.setProperty('--r', (10 + Math.random()*25) + 'deg');
    d.style.setProperty('--t', (6 + Math.random()*6) + 's');
    d.style.setProperty('--d', (-Math.random()*8) + 's');
  }
  for (i = 0; i < nr; i++){
    d = mk('rise', 20 + Math.random()*36);
    d.style.left = Math.random()*94 + '%';
    d.style.setProperty('--t', (12 + Math.random()*12) + 's');
    d.style.setProperty('--d', (-Math.random()*24) + 's');
  }
})();

var pw = document.getElementById('pw'), err = document.getElementById('err'),
    lock = document.getElementById('lock'), wrap = document.getElementById('wrap'),
    env = document.getElementById('env'), ov = document.getElementById('ov');

function entrar(){
  if (pw.value.trim().toLowerCase() === CLAVE.toLowerCase()){
    lock.classList.add('hidden'); wrap.classList.remove('hidden');
  } else {
    err.textContent = 'Clave incorrecta, intenta otra vez 🍓';
    lock.classList.remove('shake'); void lock.offsetWidth; lock.classList.add('shake');
    pw.value = ''; pw.focus();
  }
}
document.getElementById('go').addEventListener('click', entrar);
pw.addEventListener('keydown', function(e){ if (e.key === 'Enter') entrar(); });
env.addEventListener('click', function(){
  if (env.classList.contains('open')) return;
  env.classList.add('open');
  setTimeout(function(){ ov.classList.add('show'); }, 1500);
});
document.getElementById('close').addEventListener('click', function(){
  ov.classList.remove('show');
  setTimeout(function(){ env.classList.remove('open'); }, 500);
});
