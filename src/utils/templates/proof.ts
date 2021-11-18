import {FormattedMoney} from '../formatted/money';

export function TemplateProofMain(dados: string, totalCart: number) {
  return `<html>
  <head>
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
     <h1 style="font-size: 40px; font-family: Helvetica Neue; font-weight: normal;">
        COMPROVANTE DE COMPRA
     </h1>
     <br>
     <br>
     <h3>
        ${FormattedMoney(dados)}
     </h3>
     <div>
        <h2 class="right-align">
           Total: ${FormattedMoney(totalCart)}
        </h2>
     </div>
     <br>
     <br>
     <h3>
     </h3>
  </body>
</html>
  `;
}

export function TemplateProofSecudary(key: string, qtd: string, total: string) {
  return `
  <div class="container">
  <p class="help" style="color:#ffffff;">
     Please review your bill and pay 
  </p>
  <div class="box card-panel z-depth-3">
     <div class="invoice">
        <table class="highlight">
           <thead>
              <tr>
                 <th>Quantidade</th>
                 <th>Fruta</th>
                 <th class="right-align">Preço</th>
              </tr>
           </thead>
           <tbody>
              <tr>
                 <td>${key}</td>
                 <td>${qtd}</td>
              </tr>
              <tr>
                 <td></td>
                 <td class="right-align bold">Total:</td>
                 <td class="right-align bold">${total}</td>
              </tr>
           </tbody>
        </table>
     </div>
  </div>
</div>`;
}
