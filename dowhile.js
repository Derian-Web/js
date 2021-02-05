var contador = 0;


const llueve = () => Math.random() < 0.25

do {
    contador += 1
} while(!llueve())
if(contador === 1){
    console.log(`Fui aver si llovia ${contador} ves`)
}else{
    console.log(`Fui aver si llovia ${contador} veces`)
}
