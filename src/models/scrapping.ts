import puppeteer from "puppeteer";
import { Dados, valDados } from "../types/interface";

//A função scrapping recebe uma string url como argumento, que representa a URL da página web a ser realizada a raspagem de dados.
export const scrapping = async (url: string) => {

  /*A função inicia uma instância do navegador usando puppeteer.launch(). O parâmetro {headless: 'new'} 
  indica que o navegador será aberto em modo headless, ou seja, sem interface gráfica.*/
  const browser = await puppeteer.launch({headless: 'new'});

  //uma nova página é aberta no navegador usando browser.newPage(), e a página navega para a URL fornecida usando page.goto(url).
  const page = await browser.newPage();  
  await page.goto(`${url}`);

  /*Dentro do contexto da página, a função page.evaluate() é chamada. Essa função 
  permite a execução de código JavaScript no contexto da página web.*/

  //Dentro de page.evaluate(), é retornado um objeto pageContent contendo os dados de título e subtítulo da página.
  const pageContent: Dados = await page.evaluate(() => {

    /*Os dados são obtidos utilizando seletores CSS para encontrar os elementos HTML desejados (document.querySelector()). 
    Se um elemento não for encontrado, a propriedade correspondente no objeto pageContent será null.*/
      return {
          title: document.querySelector('.content-head__title')?.innerHTML,
          subtitle: document.querySelector('.content-head__subtitle')?.innerHTML
      };
  });

  //os dados de pageContent são validados usando a função valDados(pageContent).
  const dadoValidado = valDados(pageContent) ? pageContent : undefined
  return dadoValidado
};