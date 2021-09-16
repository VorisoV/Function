 function son(son1,son2){
  return son1 + son2;
 }
 console.log(son(84,58))
function cube(son1){
    return son1**3;
}
console.log(cube(9854561313))
function son(son1, son2){
    if(son1 > son2){
        return son1
    }
    else {
        return son2
    }
}
console.log(son(47,41))
function son(son1, son2, son3) {
    if (son1 > son2 && son1 > son3 ){
        return  son1
    }
    else if (son2 > son1 && son2 > son3){
        return son2
    }
    else {
        return son3
    }
}
console.log(son(84,8102,848125))
function juft(son1){
    if(son1 % 2 ==0){
        return son1
    }
    else {
        return `Toq`
    }
}
console.log(juft(1))
console.log("Lala")