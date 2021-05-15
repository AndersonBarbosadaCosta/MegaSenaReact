function geraNumeroDiferente(min, max, array) {
    const numero =  parseInt(Math.random() * (max + 1 - min) - min)
    return array.includes(numero) ? geraNumeroDiferente(min, max, array) : numero
 }

const  geraAposta = quantidade => {
    const inicial = 0
    const final = 60
    
    const aposta = new Array(quantidade)
          .fill(0)
          .reduce((nums) => {
             const novoNumero = geraNumeroDiferente(inicial, final, nums)
            return [...nums, novoNumero]     
          },
          []).sort((vr1,vr2) => vr1 - vr2)

          return aposta

}


 const resposta = '111111-0001 222222-0002 333333-0003 '
 const array = resposta.trim().split(' ')

  function getNumPedido(array){
  return array.map(item => { 
       const obj = {numPedido: item.substring(0,6),itemPedido:item.substring(7,11)}
       return obj
      })
  }

  function reduzirArray(array){
  const resposta = array.reduce((array,item) => {
      const obj = getNumPedido(item)
      return obj
    },array)
    
    console.log(resposta)
  }

 reduzirArray(array)