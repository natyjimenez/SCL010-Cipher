window.cipher = {
  
     encode: (myString, offset1) => {
  
      let bigLetter = myString.toUpperCase();//Mayúsculas   
      let myStringCipher = ''; // almacena string Cifrado 
      for (let i = 0 ; i < bigLetter.length ; i++){ // recorre el mensaje   
      let numberLetter= bigLetter.charCodeAt(i);// numero de letra en codigo ASCII   
      if (numberLetter >= 65 && numberLetter <= 90) { // letras mayúsculas en ASCII  
      let cipherFormula = ( numberLetter - 65 + offset1) % 26 + 65; // formula de Cifrado Cesar   
      let newLetter =  String.fromCharCode(cipherFormula);// Valor de la letra cifrada   
      myStringCipher +=newLetter;// Formar string cifrado 
        }
      else if(numberLetter === 32){ // Retorna el valor de la cadena cifrada 
      myStringCipher += ' ';// Añadir espacio       
        }
      else { // Detener si no es Letra
           break;      
        }
        }
      return myStringCipher;// Resultado String cifrado   
       
      },
  
    decode: (myString1, offset2) => {
  
      let bigLetter1 = myString1.toUpperCase(); //Mayúsculas 
      let myStringDecipher1 = ''; // almacena string Cifrado 
      for (let i = 0 ; i < bigLetter1.length ; i++){ // recorre el mensaje     
      let numberLetter1= bigLetter1.charCodeAt(i); // numero de letra en codigo ASCII   
      if (numberLetter1 >= 65 && numberLetter1 <= 90) { // letras mayúsculas en ASCII    
      let decipherFormula1 = ( numberLetter1 + 65 - offset2) % 26 + 65;// formula de Cifrado Cesar       
      let newLetter1 =  String.fromCharCode(decipherFormula1);// Valor de la letra cifrada   
      myStringDecipher1 +=newLetter1;// Formar string cifrado 
         }
      else if(numberLetter1 === 32){ // Retorna el valor de la cadena cifrada  
      myStringDecipher1 += ' ';// Añadir espacio       
         }
      else {// Detener si no es Letra
      break;      
         }
         }
      return myStringDecipher1;// Resultado String cifrado   
       
      
  }
};
