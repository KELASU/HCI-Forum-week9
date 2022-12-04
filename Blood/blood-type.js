const canGiveBlood = (donor,receiver)=>{
    donor.toUpperCase();
    receiver.toUpperCase();
    if (donor[-1]==="+" && receiver[-1]==="-")return false;
    
    if (donor.includes("O"))return true;

    if (donor.includes("A") && (receiver.includes("A")||receiver.includes("AB")))return true;

    if (donor.includes("B")&& (receiver.includes("B")||receiver.includes("AB")))return true;

    if (donor.includes("AB") && receiver.includes("AB"))return true;

    return false
}
x = canGiveBlood("O+","A+");
xx = canGiveBlood("A-","B-");
xxx = canGiveBlood("A-","AB+");

console.log(x);
console.log(xx);
console.log(xxx);