export default function Home2({setPage}) {
  return (
    
    <>
      <section className="relative md:w-full w-[540px] h-[1080px] min-h-screen bg-[url('/src/assets/iteration-1-images/home-banner.png')] bg-center bg-cover">

        {/* SABİT DEĞİL NORMAL DIV */}
        <div className="flex flex-col items-center text-white text-center pt-16">
          
          <img
            src="/src/assets/iteration-1-images/logo.svg"
            alt="logo"
            className="mb-4 w-[361.93px] md:w-auto"
          />
            <p className="hidden md:block font-satisfy md:text-[32px] md:text-[#FDC913]">fırsatı kaçırma</p>
        <h1 className="
  text-[86px]
  font-roboto font-light
 leading-[92px]
  md:mb-8 mb-4
">
  <span className="block md:inline">KOD</span>{" "}
  <span className="block md:inline">ACIKTIRIR</span>
  <br className="hidden md:block" />

  <span className="block md:inline">PİZZA,</span>{" "}
  <span className="block md:inline">DOYURUR</span>
</h1>


          <button
            onClick={() => setPage('order')}
            className="bg-[#FDC913] w-[193.27px] h-[56px] text-[#292929] text-2xl md:text-lg font-[Barlow] px-8 py-2 rounded-full font-semibold tracking-[1.5px] transition"
          >
            ACIKTIM
          </button>

        </div>
      </section>

<section className="md:w-full w-[541px] bg-[#FAF7F2] shadow-md py-8">
  <div className="
     max-w-[1200px] w-[411.66] h-[248px] md:h-[42px] md:w-[1068px] mx-auto
     grid grid-cols-2 gap-y-6
     md:grid-cols-6 md:gap-y-0
     place-items-center
">
  
    
    {/* ITEM */}
    <div className="w-[150px] h-[42px] flex items-center justify-center gap-2">
      <img src="/src/assets/iteration-2-images/icons/1.svg" className="w-[42px] h-[42px]" />
      <p className="font-barlow text-lg font-medium">YENİ! Kore</p>
    </div>

    <div className="w-[102.81px] h-[42px] flex items-center justify-center gap-2">
      <img src="/src/assets/iteration-2-images/icons/2.svg" className="w-[42px] h-[42px]" />
      <p className="font-barlow text-lg font-medium">Pizza</p>
    </div>

    <div className="w-[150px] md:w-[115.22px] h-[42px] flex items-center justify-center gap-2">
      <img src="/src/assets/iteration-2-images/icons/3.svg" className="w-[42px] h-[42px]" />
      <p className="font-barlow text-lg font-medium">Burger</p>
    </div>

    <div className="w-[156.66px] h-[42px] flex items-center justify-center gap-2">
      <img src="/src/assets/iteration-2-images/icons/4.svg" className="w-[42px] h-[42px]" />
      <p className="font-barlow text-lg font-medium">Kızartmalar</p>
    </div>

    <div className="w-[150px] md:w-[139.59px] h-[42px] flex items-center justify-center gap-2">
      <img src="/src/assets/iteration-2-images/icons/5.svg" className="w-[42px] h-[42px]" />
      <p className="font-barlow text-lg font-medium">Fast Food</p>
    </div>

    <div className="w-[148.08px] h-[42px] flex items-center justify-center gap-2">
      <img src="/src/assets/iteration-2-images/icons/6.svg" className="w-[42px] h-[42px]" />
      <p className="font-barlow text-lg font-medium">Gazlı İçecek</p>
    </div>

  </div>
</section>




        <section className="w-full py-12 bg-[#FAF7F2]">

        <div className="
        w-full md:w-[1072px]
        mx-auto
        grid
        grid-cols-1 md:grid-cols-2     
        place-items-center  
        gap-6
        px-4 
        ">


            {/* SOL BÜYÜK KART */}
            <div className="
        bg-[url('/src/assets/iteration-2-images/cta/kart-1.png')]
        w-[422px] md:w-[531px]
        md:h-[448.75px] h-[336px]
        p-6 rounded-xl text-white flex flex-col bg-center bg-cover
        ">

            <p className="text-[68px] font-quattro font-bold w-[288.18px] md:w-[288.18px] h-[148px] leading-[72px] mt-4">Özel Lezzetus</p>
            <p className="font-barlow text-xl font-semibold mt-0">Position:Absolute Acı Burger</p>
            <button className="bg-white text-[#CE2829] text-sm font-semibold font-barlow px-6 py-2 rounded-full w-[138px] h-[48px] mt-4">
                SİPARİŞ VER
            </button>
            </div>

        
            {/* SAĞ TARAF 2 KART */}
        <div className="w-full md:w-[530px] h-auto md:h-[449px] flex flex-col place-items-center gap-4">


        <div className="bg-[#292929] rounded-xl w-[422px] h-[270px] md:h-[220px] w-full p-6 flex items-center justify-between">


            {/* ← Sadece burayı böyle WARP ettik */}
            <div className="flex flex-col w-[422px] h-[270px]">
            <p className="w-[182.35px] h-[86px] font-barlow font-semibold text-[#FFFFFF] text-[32px] leading-[44.27px] mt-12">
                Hackathlon Burger Menü
            </p>

            <button className="bg-white text-[#CE2829] text-sm font-semibold font-barlow px-6 py-2 rounded-full w-[138px] h-[48px] mt-4">
                SİPARİŞ VER
            </button>
            </div>

            <img
            src="/src/assets/iteration-2-images/cta/kart-2.png"
            className="w-[210.15px] h-[151px]"
            alt=""
            />
        </div>
        <div className="bg-[url('/src/assets/iteration-2-images/cta/kart-3.png')]
        md:w-[530px] w-[422px] h-[270px]
        rounded-xl 
        bg-cover bg-no-repeat bg-center
        flex items-center
        px-6">

        <div className="bg-[url('/src/assets/iteration-2-images/cta/kart-3.png')]
        md:w-[530px] w-full h-[220px]
        rounded-xl bg-cover bg-no-repeat bg-center
        flex items-center px-6">

        <div className="flex flex-col">
            
            <p className="font-barlow text-[32px] leading-[44.27px]">
            <span className="text-[#D80027] font-semibold">Çoooook</span> hızlı <br />
            npm gibi kurye
            </p>

            <button className="bg-white text-[#CE2829] text-sm font-semibold font-barlow
            rounded-full w-[138px] h-[48px] mt-4">
            SİPARİŞ VER
            </button>

        </div>

        </div>


        </div>


            </div>
        </div>


        

        
    <div className="text-center mt-12 w-full mx-auto">
  <p className="font-satisfy text-[#CE2829] text-[32px] leading-[44.27px]">
    en çok paketlenen menüler
  </p>

  <h2 className="font-barlow text-[42px] font-semibold text-[#292929] mt-2 text-center max-w-[308px] md:max-w-full mx-auto">
  Acıktıran Kodlara Doyuran Lezzetler
</h2>

</div>





<div
  className="
    grid grid-cols-2 gap-6 place-items-center mt-12
    md:flex md:flex-nowrap md:justify-center md:gap-6
  "
>

  <button className="flex items-center gap-2 bg-white shadow px-6 py-3 rounded-full">
    <img src="/src/assets/iteration-2-images/icons/1.svg" className="w-[42px] h-[42px]" />
    <span className="font-barlow font-medium text-lg text-[#292929]">Ramen</span>
  </button>

  <button className="flex items-center gap-2 bg-[#292929] text-white shadow px-6 py-3 rounded-full">
    <img src="/src/assets/iteration-2-images/icons/2.svg" className="w-[42px] h-[42px]" />
    <span className="font-barlow font-medium text-lg">Pizza</span>
  </button>

  <button className="flex items-center gap-2 bg-white shadow px-6 py-3 rounded-full">
    <img src="/src/assets/iteration-2-images/icons/3.svg" className="w-[42px] h-[42px]" />
    <span className="font-barlow font-medium text-lg text-[#292929]">Burger</span>
  </button>

  <button className="flex items-center gap-2 bg-white shadow px-6 py-3 rounded-full">
    <img src="/src/assets/iteration-2-images/icons/4.svg" className="w-[42px] h-[42px]" />
    <span className="font-barlow  font-medium text-lg text-[#292929]">French fries</span>
  </button>

  <button className="flex items-center gap-2 bg-white shadow px-6 py-3 rounded-full">
    <img src="/src/assets/iteration-2-images/icons/5.svg" className="w-[42px] h-[42px]" />
    <span className="font-barlow font-medium text-lg text-[#292929]">Fast food</span>
  </button>

  <button className="flex items-center gap-2 bg-white shadow px-6 py-3 rounded-full">
    <img src="/src/assets/iteration-2-images/icons/6.svg" className="w-[42px] h-[42px]" />
    <span className="font-barlow font-medium text-lg text-[#292929]">Soft drinks</span>
  </button>

</div>



        <div className="
        w-full md:w-[1068px]
        mx-auto
        grid grid-cols-1 md:grid-cols-3
        gap-6
        mt-10
        px-4
        ">


        <div className="w-full md:w-[334.67px] w-[420px] h-[526px]
        md:h-[419px] bg-white rounded-xl shadow p-6 text-left mt-4">
            <img src="/src/assets/iteration-2-images/pictures/food-1.png" className="mx-auto  md:w-[270.67px] w-[356px] h-[372px] md:h-[265px]" />
            <h3 className="w-[270.67px] h-[29px] font-barlow text-[22px] text-[#292929] font-semibold mt-4">Terminal Pizza</h3>
 <div className="mt-2 flex items-center">

  {/* Sol */}
  <span className="text-[#1B1B1B] font-barlow font-semibold text-base">
    4.9
  </span>

  {/* Sağ grup */}
  <div className="flex items-center gap-12 ml-auto">

    <span className="text-[#1B1B1B] font-barlow text-base">
      (200)
    </span>

    <span className="font-barlow font-bold text-[#292929] text-xl">
      60₺
    </span>

  </div>

</div>




            </div>
        <div className="w-full md:w-[334.67px] w-[420px] h-[526px]
        md:h-[419px] bg-white rounded-xl shadow p-6 text-left mt-4">
            <img src="/src/assets/iteration-2-images/pictures/food-2.png" className="mx-auto  md:w-[270.67px] w-[356px] h-[372px] md:h-[265px]" />
            <h3 className="w-[270.67px] h-[29px] font-barlow text-[22px] text-[#292929] font-semibold mt-4">Position Absolute Acı Pizza</h3>
 <div className="mt-2 flex items-center">

  {/* Sol */}
  <span className="text-[#1B1B1B] font-barlow font-semibold text-base">
    4.9
  </span>

  {/* Sağ grup */}
  <div className="flex items-center gap-12 ml-auto">

    <span className="text-[#1B1B1B] font-barlow text-base">
      (200)
    </span>

    <span className="font-barlow font-bold text-[#292929] text-xl">
      60₺
    </span>

  </div>

</div>
</div>

           <div className="w-full md:w-[334.67px] w-[420px] h-[526px]
        md:h-[419px] bg-white rounded-xl shadow p-6 text-left mt-4">
            <img src="/src/assets/iteration-2-images/pictures/food-3.png" className="mx-auto  md:w-[270.67px] w-[356px] h-[372px] md:h-[265px]" />
            <h3 className="w-[270.67px] h-[29px] font-barlow text-[22px] text-[#292929] font-semibold mt-4">useEffect Tavuklu Burger</h3>
 <div className="mt-2 flex items-center">

  {/* Sol */}
  <span className="text-[#1B1B1B] font-barlow font-semibold text-base">
    4.9
  </span>

  {/* Sağ grup */}
  <div className="flex items-center gap-12 ml-auto">

    <span className="text-[#1B1B1B] font-barlow text-base">
      (200)
    </span>

    <span className="font-barlow font-bold text-[#292929] text-xl">
      60₺
    </span>

  </div>

</div>
</div>

        </div>

        </section>
     
 <footer className="w-[540px] md:w-full bg-[#1A1A1A] py-12 mt-auto mx-auto">
  {/* ÜST BLOK */}
  <div
    className="
      w-full
      max-w-[412px] md:max-w-[1200px]
      mx-auto
      flex
      flex-col
      gap-10
      md:flex-row md:justify-between
      px-4
    "
  >
    {/* SOL */}
    <div className="max-w-[300px] w-full text-left mt-4">
      <p className="font-londrina text-[50px] leading-[50px] text-white">
        Teknolojik Yemekler
      </p>

      <ul className="font-barlow text-white text-lg space-y-3 mt-4">
        <li>
          <img
            src="/src/assets/iteration-2-images/image.png"
            className="inline mr-2"
          />
          341 Londonderry Road, Istanbul Türkiye
        </li>
        <li>
          <img
            src="/src/assets/iteration-2-images/image2.png"
            className="inline mr-2"
          />
          aciktim@teknolojikyemekler.com
        </li>
        <li>
          <img
            src="/src/assets/iteration-2-images/phone.png"
            className="inline mr-2"
          />
          +90 216 123 45 67
        </li>
      </ul>
    </div>

    {/* ORTA */}
    <div className="text-left">
      <p className="font-barlow text-2xl text-white mb-6 mt-8">Hot Menu</p>

      <ul className="text-white font-barlow text-lg space-y-2">
        <li>Terminal Pizza</li>
        <li>5 Kişilik Hackathlon Pizza</li>
        <li>useEffect Tavuklu Pizza</li>
        <li>Beyaz Console Frosty</li>
        <li>Testler Geçti Mutlu Burger</li>
        <li>Position Absolute Acı Burger</li>
      </ul>
    </div>

    {/* SAĞ */}
    <div className="w-full md:w-[347px] mt-8">
      <p className="font-barlow text-2xl text-white mb-6 text-left">
        Instagram
      </p>

      <ul className="flex flex-wrap gap-3 justify-start">
        <li>
          <img
            src="/src/assets/iteration-2-images/im1.png"
            className="w-[105px] h-[105px]"
          />
        </li>
        <li>
          <img
            src="/src/assets/iteration-2-images/img2.png"
            className="w-[105px] h-[105px]"
          />
        </li>
        <li>
          <img
            src="/src/assets/iteration-2-images/img3.png"
            className="w-[105px] h-[105px]"
          />
        </li>
        <li>
          <img
            src="/src/assets/iteration-2-images/img4.png"
            className="w-[105px] h-[105px]"
          />
        </li>
        <li>
          <img
            src="/src/assets/iteration-2-images/img5.png"
            className="w-[105px] h-[105px]"
          />
        </li>
        <li>
          <img
            src="/src/assets/iteration-2-images/img6.png"
            className="w-[105px] h-[105px]"
          />
        </li>
      </ul>
    </div>
  </div>

  {/* ALT ÇİZGİ */}
  <div className="mt-8 border-t border-[#FFFFFF26]">
    <div
      className="
        w-full
        max-w-[412px] md:max-w-[1200px]
        mx-auto
        flex
        justify-between
        mt-4
        px-4
      "
    >
      <p className="font-barlow text-[#FFFFFF] text-base">
        © 2023 Teknolojik Yemekler.
      </p>

      <img
        className="w-[18px] h-[14.62px]"
        src="/src/assets/iteration-2-images/i.png"
        alt=""
      />
    </div>
  </div>
</footer>


      </>
  );
}
