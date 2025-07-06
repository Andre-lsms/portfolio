import Card from "../Components/Card/Card";

function Home() {
  return (
    <div>
      <div className="bg-secondary pt-10 min-h-screen ">
        <div className="relative items-center flex flex-col mx-10">
          {/* Container principal com largura responsiva */}
          <div className="relative z-10 bg-offwhite w-full max-h-[800px] p-6 min-h-[600px] rounded-lg shadow-lg flex flex-col items-center justify-center ">
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

        <div className="bg-primary h-[300px] w-full mt-[-100px] relative z-0"></div>
      </div>

      <div className="bg-secondary h-[600px] w-full border-t-4 border-offwhite ">
        <div className="p-10 flex flex-col items-center">
          <h2 className="text-primary text-5xl pb-10">Tragetoria</h2>
          <p className="sm:text-2xl text-offwhite">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptatibus blanditiis quam asperiores, reprehenderit cumque ad non
            perferendis molestiae, aliquam consectetur eligendi quo aut,
            laudantium ipsum laboriosam? Delectus, exercitationem animi.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-primary">
        <h1 className="text-offwhite">Alguns posts</h1>
        <div className="flex">
          <Card img={'/posts/post1.jpg'}/>
          <Card img={'/posts/post1.jpg'}/>
          <Card img={'/posts/post1.jpg'}/>
          <Card img={'/posts/post1.jpg'}/>
          <Card img={'/posts/post1.jpg'}/>

        </div>
      </div>
    </div>
  );
}

export default Home;
