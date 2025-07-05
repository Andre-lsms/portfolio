function Home() {
  return (
    <div>
      <div className="bg-secondary pt-10 min-h-screen">
        <div className="relative items-center flex flex-col">
          {/* Container principal com largura responsiva */}
          <div className="relative z-10 bg-offwhite w-full max-w-[80rem] p-6 min-h-[600px] rounded-lg shadow-lg flex flex-col items-center justify-center">
            {/* Texto com largura responsiva e padding lateral */}
            <div className="w-full max-w-[500px] px-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl text-primary mb-10">
                Bem vindo(a)
              </h1>
              <p className="text-primary text-base sm:text-lg md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit ab voluptas nesciunt sequi autem? Perspiciatis
                facilis reiciendis dolores debitis magnam? Consequatur nemo
                excepturi quaerat nostrum magnam dolorem repellendus facilis
                temporibus?
              </p>
            </div>
          </div>
        </div>

        {/* Div azul abaixo, mantendo o fluxo */}
        <div className="bg-primary h-[300px] w-full mt-[-40px] relative z-0"></div>
      </div>

      <div className="bg-secondary h-[600px] w-full border-t-4 border-offwhite p-10"></div>
    </div>
  );
}

export default Home;
