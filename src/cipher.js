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
  
      let bigLet = myString1.toUpperCase();//Mayúsculas   
      let myStringDec = ''; // almacena string Cifrado 
      for (let i = 0 ; i < bigLet.length ; i++){ // recorre el mensaje   
      let numberLet= bigLet.charCodeAt(i);// numero de letra en codigo ASCII   
      if (numberLet >= 65 && numberLet <= 90) { // letras mayúsculas en ASCII  
      let decFormula = ( numberLet + 65 - offset2) % 26 + 65; // formula de Cifrado Cesar   
      let newLet =  String.fromCharCode(decFormula);// Valor de la letra cifrada   
      myStringDec +=newLet;// Formar string cifrado 
        }
      else if(numberLet === 32){ // Retorna el valor de la cadena cifrada 
      myStringDec += ' ';// Añadir espacio       
        }
      else { // Detener si no es Letra
           break;      
        }
        }
      return myStringDec;// Resultado String cifrado  
       
      
  }
};
