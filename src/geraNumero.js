function geraNumeroDiferente(min, max, array) {
    const numero =  parseInt(Math.random() * (max + 1 - min) - min)
    return array.includes(numero) ? geraNumeroDiferente(min, max, array) : numero
 }

export const  geraAposta = quantidade => {
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
 console.log(geraAposta(6))