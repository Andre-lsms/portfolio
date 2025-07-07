function Contato(){
 return (
    <div className="p-8 bg-offwhite">
      {/* Para usar a fonte 'titulo' (Barlow), você aplica a classe "font-titulo".
        Combine com outras classes de estilo como tamanho, peso e cor.
      */}
      <h1 className="font-titulo text-5xl font-bold text-primary">
        Este é um Título com a Fonte Barlow
      </h1>

      {/* Para usar a fonte 'sans' (Montserrat), você aplica a classe "font-sans".
        Como você a definiu como 'sans', ela provavelmente já será a fonte padrão 
        do seu site para parágrafos e outros textos.
      */}
      <p className="font-sans text-lg text-gray-700 mt-4">
        Este é um parágrafo normal usando a fonte Montserrat. Aqui, a classe 
        <code className="bg-gray-200 p-1 rounded mx-1">font-sans</code> é usada para garantir a aplicação da fonte.
      </p>

      {/* Exemplo combinando tudo, incluindo suas cores customizadas */}
      <div className="mt-6">
        <h2 className="font-titulo text-3xl font-semibold text-secondary">
          Outro Título de Seção
        </h2>
        <p className="font-sans text-gray-600">
          Mais um texto para demonstrar a consistência do design.
        </p>
        <button className="mt-4 bg-tertiary text-white font-sans font-bold py-2 px-4 rounded-lg hover:opacity-90">
          Botão de Ação
        </button>
      </div>
    </div>
  );
}
export default Contato
