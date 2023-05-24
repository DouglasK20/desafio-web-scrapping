export interface Dados{
    title: string | undefined;
    subtitle: string | undefined;
}

//recebe um parâmetro val de tipo desconhecido
export const valDados = (val: unknown): val is Dados => {

    //é feita uma verificação inicial para garantir que o tipo de val seja um objeto e que não seja nulo.
    if (typeof val !== "object" || val === null) {
        
        //Se essa verificação falhar, significa que val não é um objeto válido, e a função retorna false.
        return false;
    }

    /*é feita uma conversão de tipo, utilizando a sintaxe as, para garantir que o objeto val seja do tipo 
    Record<string, unknown>. Essa conversão permite acessar as propriedades do objeto de forma segura.*/
    const obj = val as Record<string, unknown>;

    //a função realiza a validação propriamente dita, verificando se as propriedades são do tipo string.
    return (
        typeof obj.title === "string" &&
        typeof obj.subtitle === "string"
    );
    //Se ambas as propriedades forem do tipo string, a função retorna true, indicando que val corresponde à interface Dados. Caso contrário, a função retorna false.
};