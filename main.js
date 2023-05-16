let player = 'x';
let title = document.querySelector('.title span');
let arr = [];
let a = 1;
let b = 2;
let c = 3;
const gameCeil = document.querySelectorAll('.container div');

gameCeil.forEach(ceil => {
  ceil.addEventListener('click', (e) => {

    let ele = document.getElementById(e.currentTarget.id)
    if (player === 'x' && ele.innerHTML === '') {
      ele.innerHTML = player;
      player = 'o';
      title.innerHTML = player.toUpperCase();
    }
    else if (player === 'o' && ele.innerHTML === '') {
      ele.innerHTML = player;
      player = 'x';
      title.innerHTML = player.toUpperCase();
    }
    gamePattern();
  });

});

function gamePattern() {
  for(let i = 1; i < 10; i++) {
    arr[i] = document.getElementById(i).innerHTML;
  }
  // => row
  if (arr[a] == arr[b] && arr[b] == arr[c] && arr[a] != '') {
    winner(a, b, c);
  }
  else if (arr[a + 3] == arr[b + 3] && arr[b + 3] == arr[c + 3] && arr[a + 3] != '') {
    winner(a + 3, b + 3, c + 3);
  }
  else if (arr[a + 6] == arr[b + 6] && arr[b + 6] == arr[c + 6] && arr[a + 6] != '') {
    winner(a + 6, b + 6, c + 6);
  }
  // => column
  else if (arr[a] == arr[a + 3] && arr[a + 3] == arr[a + 6] && arr[a] != '') {
    winner(a , a + 3, a + 6);
  }
  else if (arr[b] == arr[b + 3] && arr[b + 3] == arr[b + 6] && arr[b] != '') {
    winner(b, b + 3, b + 6);
  }
  else if (arr[c] == arr[c + 3] && arr[c + 3] == arr[c + 6] && arr[c] != '') {
    winner(c, c + 3, c + 6);
  }
  // => \
  else if (arr[a] == arr[a + 4] && arr[a + 4] == arr[a + 8] && arr[a] != '') {
    winner(a, a + 4, a + 8);
  }
  // => /
  else if (arr[c] == arr[c + 2] && arr[c + 2] == arr[c + 4] && arr[c] != '') {
    winner(c, c + 2, c + 4);
  }
  else {
    gameOver();
  }  
}

function winner(in1, in2, in3) {
  document.getElementById(in1).style.background = 'var(--line-color)';
  document.getElementById(in2).style.background = 'var(--line-color)';
  document.getElementById(in3).style.background = 'var(--line-color)';
  title.innerHTML = `Win ${arr[in1].toUpperCase()}`;
  gameCeil.forEach(ele => {
    ele.style.pointerEvents = 'none';
  });
  setTimeout(() => window.location.reload(), 2000);
}

function gameOver() {
  let arrCiels = Array.from(gameCeil);
  let drop = arrCiels.filter(ciel => ciel.innerHTML !== '');
  if (arrCiels.length === drop.length) {
    setTimeout(() => window.location.reload(), 2000);
  }
}