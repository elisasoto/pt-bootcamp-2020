// ----------------------7ky credit card mask---------------------------

//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

function maskify(cc){
  if (cc.length > 4) {
    let result = '';
    return cc.split('').reduce((acc, cur, i) => {
      if (cc.length - i > 4) {
       result += '#';
      } else {
        result += cur;
      }
      return result;
    }, '');
  } else {
    return cc;
  }
}

maskify('4567 8990 8901 4556')