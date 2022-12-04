
const digitalDecipher = (eMessage,key) =>{
    var ArrayE = Array.from(eMessage)

    var NumLet = ArrayE.filter(a =>{
        return typeof a == 'number'
    })

    key = Array.from(String(key),Number)

    if (!NumLet) ArrayE.forEach((a, i, ArrayE) =>
        ArrayE[i] = a.codePointAt()
    );
    else ArrayE.forEach((a,i,ArrayE)=> ArrayE[i] = a+96);

    var fin = Array.from(ArrayE, (a, i) => {
        a = (a - 97 - key[i%key.length] + 26)%26;
        return String.fromCodePoint(a + 97);
    })
    return fin.join('');
}

x = digitalDecipher([20, 12, 18, 30, 21] , 1939)
console.log(x);