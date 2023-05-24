import { Request, Response } from "express";
import { scrapping } from "../models/scrapping";
import { inserir } from "../models/banco";
import { BadRequestError, NotFoundError, UnprocessableEntityError } from "../helpers/api-error";

export const web = async (req: Request, res: Response) => {

  //atribui o valor do parâmetro noticia presente na query da requisição à variável url.
  const url = req.query.noticia

  //verifica se o tipo da variável url não é uma string. Se não for, é lançado um erro
  if(typeof url !== 'string') {
    throw new UnprocessableEntityError("O link não é um tipo válido!")}

  //verifica se a string começa com "ftp", "http" ou "https", seguido por "://", e em seguida, contém um ou mais caracteres que não sejam espaços ou aspas.
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  //verifica se a expressão regular não corresponde à string url. Isso significa que a string url não possui o formato esperado de uma URL válida.
  if(!urlRegex.test(url)){
    throw new UnprocessableEntityError("A URL não foi fornecida corretamente.")}

  /*chama a função scrapping passando a URL como argumento. A função scrapping é assíncrona, 
  portanto é usado o await para aguardar a conclusão da execução e atribuir o resultado retornado à variável dadosScraping.*/
  const dadosScraping = await scrapping(url)

  //verifica se o valor de dadosScraping é undefined, ou seja, se não foi possível obter os dados de scraping da página.
  if(dadosScraping === undefined){
    throw new NotFoundError("Não foi possivel encontrar um titulo ou subtitulo.")}
    
  /*chama a função inserir passando dadosScraping como argumento. A função inserir é assíncrona, portanto é usado o 
  await para aguardar a conclusão da execução e atribuir o resultado retornado à variável bancoRetorno.*/
  const bancoRetorno = await inserir(dadosScraping);

  //verifica se o tipo da variável bancoRetorno não é um número. Se não for um número, é lançado um erro
  if(typeof bancoRetorno !== "number")
    throw new BadRequestError("Não foi possivel salvar no banco!")

  return res.json(dadosScraping)
}
  
