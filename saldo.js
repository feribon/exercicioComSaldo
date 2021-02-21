// Saldo de dinheiro na conta
var familia = {
   receitas:[1500, 2500, 500, 800],
   despesas:[3000, 250, 150, 400, 5000]
}
var totalReceitas=0
for(var a = 0; a<familia.receitas.length; a++){
   totalReceitas = totalReceitas + familia.receitas[a];
}

var totalDespesas=0
for(var a = 0; a<familia.despesas.length; a++){
   totalDespesas = totalDespesas + familia.despesas[a];
}

if(totalReceitas>totalDespesas){
   console.log(`constas ok com saldo de ${totalReceitas-totalDespesas} reais`)
} else {
   console.log(`no vermelho, devendo ${totalReceitas-totalDespesas} reais`)
}



