
function Servicos (){
return (
    // CAMADA 1: A BASE (CONTAINER VERMELHO)
    // - Ocupa a tela menos 7rem (altura do header).
    // - `relative`: serve como âncora para os elementos internos.
    // - `overflow-hidden`: esconde as partes da faixa azul que saem para fora.
    <section className="relative w-full h-[calc(100vh-7rem)] bg-red-600 overflow-hidden">
      
      {/* CAMADA 2: A FAIXA AZUL (INTERMEDIÁRIA) */}
      {/* - `absolute` e `z-10`: posiciona a faixa dentro do container vermelho e acima dele. */}
      {/* - `transform -rotate-15`: inclina a faixa para criar o efeito diagonal. */}
      {/* - Precisa ser mais larga que a tela (w-[150%]) para não mostrar os cantos ao girar. */}
      <div 
        aria-hidden="true" 
        className="absolute z-10 w-[150%] h-48 lg:h-64 bg-blue-500 top-1/2 left-[-25%] transform -translate-y-1/2 -rotate-15"
      />

      {/* CAMADA 3: O CONTAINER BRANCO (SUPERIOR) */}
      {/* - `absolute` e `z-20`: posiciona por cima de tudo. */}
      {/* - A combinação de `top-1/2`, `left-1/2` e `transform` centraliza perfeitamente. */}
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-lg lg:max-w-4xl h-[75%] rounded-2xl bg-white shadow-2xl p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold font-titulo text-center">
          Seu Foco Principal Aqui
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Este é o container branco onde você pode colocar o conteúdo mais importante da seção.
        </p>
        <button className="mt-8 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
          Call to Action
        </button>
      </div>

    </section>
  );
}
export default Servicos