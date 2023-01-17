(function(){
  const $dados = document.querySelector('.dados');
  const $result = document.querySelector('.resultado');
  const $button = document.querySelector('.button');

  function calculaCota(){
      let higherQuota = $dados.querySelector('.higherQuota');
      let minorQuota = $dados.querySelector('.minorQuota');
      let distanceBetweenQuota = $dados.querySelector('.distanceBetweenQuota');
      let distanceBetweenHigherQuotaToPoint = $dados.querySelector('.distanceBetweenHigherQuotaToPoint');
      higherQuota = (higherQuota.value);
      minorQuota = (minorQuota.value);
      distanceBetweenQuota = (distanceBetweenQuota.value);
      distanceBetweenHigherQuotaToPoint = (distanceBetweenHigherQuotaToPoint.value);
      const differenceBetweenDistance = distanceBetweenQuota - distanceBetweenHigherQuotaToPoint;
      const differenceQuota = higherQuota - minorQuota;
      const percentage = (distanceBetweenHigherQuotaToPoint * 100) / distanceBetweenQuota;
      const takeOutPercentage = (percentage / 100) * differenceQuota;
      const final = higherQuota - takeOutPercentage;
      const result = ajuste(final)

      function ajuste(nr, casas = 3) {
        const og = Math.pow(10, casas)
        return Math.trunc(nr * og) / og;
      }  

      if(higherQuota === '' || minorQuota === '' || distanceBetweenQuota === '' || distanceBetweenHigherQuotaToPoint === ''){
          $result.innerHTML = '<b>Todos</b> os campos devem estar <b>preenchidos</b> para realizar a conta.';
      } else if(differenceQuota < 0){
          $result.innerHTML = 'O valor da <b>cota  maior</b> não pode ser inferior ao da <b>cota menor.</b>';
      } else if(differenceBetweenDistance < 0){
          $result.innerHTML = 'A <b>distância entre cotas</b> não pode ser inferior à <b>distância da cota até o ponto</b> a ser interpolado.';
      } else{
          $result.innerHTML = `<b>A cota do ponto é: </b>${result}`
      };
  };

  $button.addEventListener('click', calculaCota);
})();