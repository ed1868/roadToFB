rot13 = (str) => {
  let simpleAlphaBet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let letters = str.split('');
  let decoded = [];
  letters.map(letter => {
    if(simpleAlphaBet.includes(letter)){
      let codedIndex = simpleAlphaBet.indexOf(letter) + 13;
      if(codedIndex >= simpleAlphaBet.length){
        let newLetter = codedIndex - 26;
        decoded.push(simpleAlphaBet[newLetter]);
      }else{
      decoded.push(simpleAlphaBet[codedIndex]);
      }
    }else{
      decoded.push(letter);
    }
  
  });
  return decoded.join('')
}

rot13("SERR PBQR PNZC");