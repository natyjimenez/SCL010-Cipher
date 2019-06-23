window.cipher = {
  
     encode: (myString, offset1) => {
  
      let bigLetter = myString.toUpperCase();// Mayúsculas   
      let myStringCipher = ''; // Almacena string Cifrado 
      for (let i = 0 ; i < bigLetter.length ; i++){ // Recorre el mensaje   
      let numberLetter= bigLetter.charCodeAt(i);// Número de letra en codigo ASCII   
      if (numberLetter >= 65 && numberLetter <= 90) { // Letras mayúsculas en ASCII  
      let cipherFormula = ( numberLetter - 65 + offset1) % 26 + 65; // Fórmula de Cifrado Cesar   
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
  
      let bigLet = myString1.toUpperCase();// Mayúsculas   
      let myStringDec = ''; // Almacena string descifrado 
      for (let i = 0 ; i < bigLet.length ; i++){ // Recorre el mensaje   
      let numberLet= bigLet.charCodeAt(i);// Número de letra en codigo ASCII   
      if (numberLet >= 65 && numberLet <= 90) { // Letras mayúsculas en ASCII  
      let decFormula = ( numberLet + 65 - offset2) % 26 + 65; // Fórmula de Cifrado Cesar   
      let newLet =  String.fromCharCode(decFormula);// Valor de la letra descifrada   
      myStringDec +=newLet;// Formar string descifrado 
        }
      else if(numberLet === 32){ // Retorna el valor de la cadena cifrada 
      myStringDec += ' ';// Añadir espacio       
        }
      else { // Detener si no es Letra
           break;      
        }
        }
      return myStringDec;// Resultado String descifrado        
  }
};
