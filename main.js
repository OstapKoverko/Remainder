function sendValues() {
  let answer;
  let remain =
    document.getElementById('sum').value -
    document.getElementById('price').value;
  if (remain < 0) {
    answer = '(Сума грошей недостатня для оплати';
  } else {
    let banknotes = Math.floor(remain);
    let coins = (remain - banknotes).toFixed(2) * 100;
    answer =
      '"Ваша решта: ' +
      banknotes +
      ' долари, ' +
      coins +
      ' центів." (по номіналу ' +
      banknotes +
      ' долари';
    let par;
    if (coins - 50 >= 0) {
      answer += ', 50 центів';
      coins -= 50;
    }
    if (coins - 25 >= 0) {
      answer += ', 25 центів';
      coins -= 25;
    }
    if (coins - 10 >= 0) {
      answer += ', 10 центів';
      coins -= 10;
    }
    if (coins - 10 >= 0) {
      answer += ', 10 центів';
      coins -= 10;
    }
    if (coins - 5 >= 0) {
      answer += ', 5 центів';
      coins -= 5;
    }
    if (coins - 1 >= 0) {
      answer += ', 1 цент';
      coins -= 1;
    }
    if (coins - 1 >= 0) {
      answer += ', 1 цент';
      coins -= 1;
    }
    if (coins - 1 >= 0) {
      answer += ', 1 цент';
      coins -= 1;
    }
    if (coins - 1 >= 0) {
      answer += ', 1 цент';
      coins -= 1;
    }
  }
  document.getElementById('target').innerHTML = answer + '.)';
}
