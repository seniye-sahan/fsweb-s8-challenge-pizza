export default function OrderSuccess2() {
  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] flex flex-col">
      {/* ------- KIRMIZI BAŞARILI SAYFA ------- */}
      <section
        className="
          w-full
          h-auto
          bg-[#CE2829] 
          flex flex-col items-center
          pb-16
        "
      >
        <div
          className="
            flex flex-col items-center
            text-white text-center
            mt-4
          "
        >
          <img
            src="/src/assets/iteration-1-images/logo.svg"
            alt="logo"
            className="w-[360px] h-[45.79px] mb-6"
          />

          <p className="font-satisfy text-[32px] text-[#FDC913]">
            lezzetin yolda
          </p>

          <h1 className="font-roboto font-light text-[86px] leading-[92px] border-b border-[#FAF7F2] pb-8">
            SİPARİŞ ALINDI
          </h1>

          <p className="font-barlow font-semibold text-[22px] mt-6">
            Position Absolute Acı Pizza
          </p>

          <div className="w-[202px] text-left mt-4">
            <p className="pb-4">
              Boyut: <span className="font-bold">L</span>
              <span className="text-red-500 ml-1">*</span>
            </p>

            <p className="pb-4">
              Hamur: <span className="font-bold">Süpper İnce</span>
              <span className="text-red-500 ml-1">*</span>
            </p>

            <p className="pb-4">
              Ek Malzemeler:{" "}
              <span className="font-bold">
                Pepperoni, Sosis, Mısır, Ananas, Jalepeno
              </span>
              <span className="text-red-500 ml-1">*</span>
            </p>
          </div>

          {/* SİPARİŞ KARTI */}
          <div className="w-[350px] font-barlow mt-6">
            <div className="border border-[#FAF7F2] rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white text-left mb-8">
                Sipariş Toplamı
              </h3>

              <div className="flex justify-between text-lg font-semibold text-white mb-4">
                <span>Seçimler</span>
                <span>25.00₺</span>
              </div>

              <div className="flex justify-between text-lg font-semibold text-white">
                <span>Toplam</span>
                <span>110.50₺</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------- FOOTER ------- */}
      <footer className="w-full bg-[#1A1A1A] py-12 mt-auto">
        <div
          className="
            max-w-[1200px] 
            mx-auto 
            flex 
            flex-col 
            gap-10 
            md:flex-row md:justify-between
          "
        >
          {/* SOL */}
          <div className="max-w-[300px] mx-auto md:mx-0 text-center md:text-left">
            <p className="font-londrina text-[50px] text-white">
              Teknolojik Yemekler
            </p>

            <ul className="font-barlow text-white text-lg space-y-3">
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
          <div className="text-center md:text-left">
            <p className="font-barlow text-2xl text-white mb-6">Hot Menu</p>

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
          <div className="w-[347px] mx-auto md:mx-0">
            <p className="font-barlow text-2xl text-white mb-6 text-center md:text-left">
              Instagram
            </p>

            <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
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
        <div className="mt-8 border-t border-[#FFFFFF] flex items-center">
          <div
            className="
              flex 
              w-full
              max-w-[1064px] 
              h-[27px] 
              mx-auto 
              justify-between 
              mt-4 
              px-4
              text-center md:text-left
            "
          >
            <p className="font-barlow text-white text-base">
              © 2023 Teknolojik Yemekler.
            </p>

            <img
              className="w-[18px] h-[14.62px]"
              src="/src/assets/iteration-2-images/t.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
