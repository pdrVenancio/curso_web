const anoBi = ano => (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0  ? true : false

console.log(anoBi(2020))
