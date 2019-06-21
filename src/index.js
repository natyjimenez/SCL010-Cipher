/*Acá va tu código*/

//Mostrar Resultado en Index
const btnSave = document.getElementById('btnCodifica');
btnSave.addEventListener('click', () => {
let myString = document.getElementById('textoIngresado').value;
let offset1 = parseInt(document.getElementById('inpOffset').value);
let myStringCipher=window.cipher.encode(myString,offset1);
document.getElementById('resultado').value =myStringCipher;
 })

 
//Mostrar Resultado en Index
const btnSave1 = document.getElementById('btnDeco');
btnSave1.addEventListener('click', () => {
let myString1 = document.getElementById('textoIngresado').value;
let offset2 = parseInt(document.getElementById('inpOffset').value);
let myStringDecipher=window.cipher.decode(myString1,offset2);
document.getElementById('resultado').value =myStringDecipher;
 })
