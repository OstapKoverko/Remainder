document.getElementById('getRemainder').onclick = function() {
  render();
};

function render() {
  let renderObj = getValues();
  if (renderObj.banknotes < 0) {
    document.getElementById('target').innerHTML =
      'Недостатньо коштів для оплати';
  } else {
    document.getElementById('target').innerHTML =
      'Ваша решта: ' +
      '<br>' +
      renderObj.banknotes +
      banknotesСhecker(renderObj.banknotes) +
      '<br>' +
      renderObj.coin50 +
      coinsСhecker(renderObj.coin50) +
      ' номіналом 50 центів, ' +
      '<br>' +
      renderObj.coin25 +
      coinsСhecker(renderObj.coin25) +
      ' номіналом 25 центів, ' +
      '<br>' +
      renderObj.coin10 +
      coinsСhecker(renderObj.coin10) +
      ' номіналом 10 центів, ' +
      '<br>' +
      renderObj.coin5 +
      coinsСhecker(renderObj.coin5) +
      ' номіналом 5 центів, ' +
      '<br>' +
      renderObj.coin1 +
      coinsСhecker(renderObj.coin1) +
      ' номіналом 1 цент.';
  }
}

function getValues() {
  return calcRemainder(
    document.getElementById('sum').value -
      document.getElementById('price').value
  );
}

function calcRemainder(remainder) {
  let calcRemainder = {
    banknotes: 0,
    coin50: 0,
    coin25: 0,
    coin10: 0,
    coin5: 0,
    coin1: 0
  };
  calcRemainder.banknotes = Math.floor(remainder);
  let coins = (remainder - calcRemainder.banknotes).toFixed(2) * 100;
  if (coins - 50 >= 0) {
    coins -= 50;
    calcRemainder.coin50 = 1;
  }
  if (coins - 25 >= 0) {
    coins -= 25;
    calcRemainder.coin25 = 1;
  }
  if (coins - 10 >= 0) {
    coins -= 10;
    calcRemainder.coin10 = 1;
  }
  if (coins - 10 >= 0) {
    coins -= 10;
    calcRemainder.coin10 = 2;
  }
  if (coins - 5 >= 0) {
    coins -= 5;
    calcRemainder.coin5 = 1;
  }
  if (coins - 1 >= 0) {
    coins -= 1;
    calcRemainder.coin1 = 1;
  }
  if (coins - 1 >= 0) {
    coins -= 1;
    calcRemainder.coin1 = 2;
  }
  if (coins - 1 >= 0) {
    coins -= 1;
    calcRemainder.coin1 = 3;
  }
  if (coins - 1 >= 0) {
    coins -= 1;
    calcRemainder.coin1 = 4;
  }
  return calcRemainder;
}

function banknotesСhecker(banknotes) {
  banknotes = +banknotes
    .toString()
    .split('')
    .pop();
  if (banknotes == 1) {
    return ' долар, ';
  } else if (banknotes > 1 && banknotes < 5) {
    return ' долари, ';
  } else {
    return ' доларів, ';
  }
}

function coinsСhecker(coins) {
  return coins == 1 ? ' монета ' : coins == 0 ? ' монет ' : ' монети ';
}
