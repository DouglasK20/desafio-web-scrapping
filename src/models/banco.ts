import dao from "../database/DAO"
import { Dados } from "../types/interface"

//Essa função recebe um objeto dadosScrapping como argumento, contendo informações de título e subtítulo para uma notícia.
export const inserir = async (dadosScrapping: Dados) => {

    //a função "upsert" é usada para realizar uma operação de inserção no banco de dados.
    const resultado = await dao.upsert(

        //representa o nome da tabela do banco de dados onde os dados serão inseridos
        "noticia",
        {
            //são preenchidas com os valores correspondentes extraídos do objeto dadosScrapping.
            title: dadosScrapping.title,
            subtitle: dadosScrapping.subtitle
        }
    )
    return resultado
}


