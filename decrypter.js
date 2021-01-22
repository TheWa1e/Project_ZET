const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

//cryptr, здесь записывают текст для шифровки. Например:
const encryptedString = cryptr.encrypt('hellomynameis');

//cryptr, здесь записывают текст для расшифровки. Например:
const decryptedString = cryptr.decrypt('ff240cd98334250c35b63d2b153b32873e68bbf3ea035cf86e6e1d713a407cd43a90a44a17d7b5f9506522b3d889be45a74c74f91dabf480d0c55fe1ab53a4f5409ccdc2d00ba5e5669cf9ce391336124ed066872809e658cf874179006a757c45920c33bfe6f53a78dc94');

console.log(encryptedString);
console.log(decryptedString);