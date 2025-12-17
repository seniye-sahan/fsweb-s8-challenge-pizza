export default function Home({setPage}) {
  return (
    <section className="relative md:w-full md:h-screen  w-[540px] h-[1094px] bg-[url('/src/assets/iteration-1-images/home-banner.png')] bg-center bg-cover">
      
      
        <div className="fixed top-0 right-0 left-0 flex flex-col items-center text-white text-center mt-14 px-0  mt-16 pt-0 ">
          
          <img
            src="/src/assets/iteration-1-images/logo.svg"
            alt="logo"
            className="mb-4 w-[361.93px] md:w-auto"
          />

          <h1 className="text-[86px] font-roboto font-light leading-[92px] md:mb-8  leading-tight mb-2">
            KOD ACIKTIRIR <br />
            PİZZA, DOYURUR
          </h1>

          <button 
            onClick={() => setPage("order")}
          className="bg-[#FDC913] w-[193.27px] h-[56px] text-[#292929] md:text-lg font-[Barlow] px-8 py-2 rounded-full font-semibold  leading:[92px] tracking:[1.5px] transition text-2xl">
            ACIKTIM
          </button>

        </div>
      

    </section>
  );
}
