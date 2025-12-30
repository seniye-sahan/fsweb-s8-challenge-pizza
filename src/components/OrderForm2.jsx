import { useState } from "react";
//import "./OrderForm.css";
import axios from "axios";

export default function OrderForm2({ setPage, setOrderData }) {

const [isim, setIsim] = useState("");
const [note, setNote] = useState("");
const [boyut, setBoyut] = useState("");
const [extras, setExtras] = useState([]);
const [count, setCount] = useState(1);
const [loading, setLoading] = useState(false);




const formValid =
  isim.trim().length >= 3 &&
  boyut &&
  extras.length >= 4;

  const price = 85.5;
  const extraPrice = 5;
  const selectionTotal = extras.length * extraPrice;
  const total = (price + selectionTotal) * count;

  

const extraItems = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak"
];


const handleSubmit = async () => {
  if (!formValid || loading) return;

  const payload = {
    isim: isim.trim(),
    boyut,
    malzemeler: extras,
    özel: note,
    adet: count,
    toplam: total,
  };

  setLoading(true);

  try {
    const response = await axios.post(
      "https://app.reqres.in/api/pizza",
      payload
    );

    console.log("API RESPONSE:", response.data);

    // SUCCESS
    setOrderData({
      isim,
      boyut,
      hamur: "Seçilmedi",
      extras,
      selectionTotal,
      total,
    });

    setPage("success");

  } catch (error) {
    console.warn("CORS ENGELİ – MOCK RESPONSE");

    const mockResponse = {
      ...payload,
      id: Math.floor(Math.random() * 10000),
      createdAt: new Date().toISOString(),
    };

    console.log("MOCK:", mockResponse);

    setOrderData({
      isim,
      boyut,
      hamur: "Seçilmedi",
      extras,
      selectionTotal,
      total,
    });

    setPage("success");
  } finally {
    setLoading(false);
  }
};






  return (
    <>

      <header className="bg-[#CE2829] w-[540px] md:w-full md:h-[138px] h-[207px] border-b border-[#C20608]">
        <div className="mx-auto px-4 py-8 flex flex-col">
            <p className="font-londrina text-[50px] text-[#FFFFFF] text-center">Teknolojik Yemekler</p>        
        </div>       
      </header>


        <section className="bg-[#FAF7F2]">
        <div className="md:w-[532px] w-[420px] mx-auto px-4 mt-0 mb-4 md:mb-8 font-[barlow]">

            <div className="w-full md:w-[581px] h-[300px] md:h-[260px] mx-auto overflow-hidden">
            <img 
                src="/src/assets/iteration-2-images/imgg.png"
                className="w-full h-full object-cover object-bottom mx-auto"
            />
            </div>
            <nav className="md:text-base text-xl mt-4 md:mt-6 mb-4">
            <span className="text-[#5F5F5F] font-normal">Anasayfa - </span>
            <span className="text-[#CE2829] font-semibold">Sipariş Oluştur</span>
            </nav>
            <h2 className="font-semibold mb-4 text-[27px] md:text-[22px] text-[#292929]">
            Position Absolute Acı Pizza
            </h2>


                    <div className="flex items-center justify-between">
                        <p className="text-[28px] font-bold text-[#292929]">
                        85.50₺
                        </p>
                        <div className="flex items-center md:text-base text-xl font-normal gap-10 text-[#5F5F5F] regular">
                        <span>4.9</span>
                        <span>(200)</span>
                        </div>
                    </div>

                    <p className="md:h-[173px] h-[280.47px] text-[#5F5F5F] md:text-base text-xl font-normal leading-[28,8] regular md:mb-4 mb-8 mt-4">
                        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. .Küçük bir pizzaya bazen pizzetta denir.
                    </p>

                </div>
        </section>



<section>
 <div className="md:w-[532px] w-[420px]  mx-auto px-4 mt-0  mb-4 md:mb-8 font-[barlow]">
        


      {/* BOYUT + HAMUR */}
      <div className="mt-4 mb-8 md:mb-6 flex justify-between gap-12">

        {/* SOL: BOYUT */}
<div className="flex flex-col gap-4 w-1/2">
  <label className="font-[barlow] text-[#292929] block md:text-xl text-[22px] font-semibold mb-2">
    Boyut Seç <span className="text-[#D80027]">*</span>
  </label>

  <div className="flex gap-4">
    
    {/* Küçük - S */}
    <label className="cursor-pointer">
      <input
        type="radio"
        name="boyut"
        value="Küçük"
        checked={boyut === "Küçük"}
        onChange={(e) => setBoyut(e.target.value)}
        className="hidden peer"
      />
      <span className="
        w-12 h-12 flex items-center justify-center rounded-full 
        bg-[#FAF7F2] text-base text-[#5F5F5F]
        peer-checked:bg-[#FFEECC] peer-checked:text-black
        shadow">
        S
      </span>
    </label>

    {/* Orta - M */}
    <label className="cursor-pointer">
      <input
        type="radio"
        name="boyut"
        value="Orta"
        checked={boyut === "Orta"}
        onChange={(e) => setBoyut(e.target.value)}
        className="hidden peer"
      />
      <span className="
        w-12 h-12 flex items-center justify-center rounded-full 
        bg-[#FAF7F2] text-base text-[#5F5F5F]
        peer-checked:bg-[#FFEECC] peer-checked:text-black
        shadow">
        M
      </span>
    </label>

    {/* Büyük - L */}
    <label className="cursor-pointer">
      <input
        type="radio"
        name="boyut"
        value="Büyük"
        checked={boyut === "Büyük"}
        onChange={(e) => setBoyut(e.target.value)}
        className="hidden peer"
      />
      <span className="
        w-12 h-12 flex items-center justify-center rounded-full 
        bg-[#FAF7F2] text-base text-[#5F5F5F]
        peer-checked:bg-[#FFEECC] peer-checked:text-black
        shadow">
        L
      </span>
    </label>

  </div>
</div>

{/* SAĞ: HAMUR */}
<div className="w-1/2">

  <label className="font-[barlow] text-[#292929] block md:text-xl text-[22px] font-semibold mb-3">
    Hamur Seç <span className="text-[#D80027]">*</span>
  </label>

  <div
    className="
      w-full md:w-[258px] 
      h-[56px]
      bg-[#FAF7F2]
      rounded-md
      shadow
      flex 
      items-center
      px-4
      text-sm
      text-[#5F5F5F]
      cursor-pointer
      justify-between
    "
  >
    <span>—Hamur Kalınlığı Seç—</span>

    {/* Sağdaki küçük ok */}
    <span className="text-[#5F5F5F] w-[6px] h-[6px]">⌄</span>
  </div>

</div>



  </div>


        {/* EK MALZEMELER */}
      <div className="mt-8">
        <h3 className="font-[barlow] text-[#292929] md:text-xl text-[22px] font-semibold md:mb-4 mb-8">
          Ek Malzemeler
        </h3>

        <p className="md:text-base text-xl text-[#5F5F5F] font-medium mb-8 ">
          En Fazla 10 malzeme seçebilirsiniz. 5₺
        </p>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-y-4 gap-x-8 mt-8">

          {extraItems.map((item) => (
  <label
    key={item}
    className="flex items-center gap-3 cursor-pointer font-[Barlow] font-bold md:text-base text-xl text-[#5F5F5F]"
  >
    {/* GİZLİ CHECKBOX */}
    <input
      type="checkbox"
      value={item}
      checked={extras.includes(item)}
      onChange={(e) => {
        if (e.target.checked) {
          if (extras.length < 10) setExtras([...extras, item]);
        } else {
          setExtras(extras.filter((x) => x !== item));
        }
      }}
      disabled={!extras.includes(item) && extras.length >= 10}
      className="hidden"
    />

    {/* GÖRSEL KUTU */}
    <div
      className={`
        w-[48px] h-[48px] rounded-md flex items-center justify-center
        ${extras.includes(item) ? "bg-[#FDC913]" : "bg-[#FAF7F2]"}
      `}
    >
      {extras.includes(item) && (
        <span className="text-base text-[#000000] font-bold">✓</span>
      )}
    </div>

    {/* YAZI */}
    <span>{item}</span>
  </label>
))}


        </div>

            {/* ✅ HATA UYARISI */}
            {extras.length < 4 && (
              <p className="text-red-500 md:text-sm text-base md:mt-3 mt-4">
                En az 4 malzeme seçmelisiniz.
              </p>
            )}

            {extras.length >= 4 && (
              <p className="text-green-600 md:text-sm text-base mt-4 md:mt-3">
                Seçilen malzeme sayısı: {extras.length}
              </p>
            )}

      </div>


       {/* ISIM */}
      <div className="mb-6 mt-8">
        <h3 className="md:text-xl text-[22px] font-semibold mb-3">İsim</h3>

     <input
  type="text"
  value={isim}
  onChange={(e) => setIsim(e.target.value)}
  className="border rounded-lg bg-[#FAF7F2] p-3 md:text-sm font-barlow font-medium  text-lg w-full"
  placeholder="Adınızı giriniz"
  data-testid="name-input"
/>


        {/* TRIMLI KONTROL */}
        {isim.trim().length > 0 && isim.trim().length < 3 && (
          <p className="text-red-500 md:text-sm text-lg mt-2">
            İsim en az 3 karakter olmalıdır.
          </p>
        )}
      </div>


      {/* NOT */}
<div className="mt-8 mb-8 mx-auto pb-12 
     w-[420px] md:w-[531.76px] 
     border-b border-[#5F5F5F80] font-[Barlow]">

  <h3 className="md:text-xl text-[22px] text-[#292929] font-semibold mb-3">
    Sipariş Notu
  </h3>

  <textarea
    className="w-full h-[56px] md:text-sm text-lg font-medium 
               bg-[#FAF7F2] text-[#5F5F5F] border rounded-lg p-4"
    value={note}
    onChange={(e) => setNote(e.target.value)}
    placeholder="Siparişine eklemek istediğin bir not var mı?"
  />
</div>




   
<div className="flex flex-col md:flex-row mb-32 mt-12">


  {/* DESKTOP ADET */}
  <div className="hidden md:flex w-[170px] h-[56px] mx-2 order-1">
    <button
      onClick={() => setCount((c) => Math.max(1, c - 1))}
      className="bg-[#FDC913] w-[56px] h-[56px] font-bold rounded-l"
    >
      -
    </button>

    <div className="w-[56px] h-[56px] border flex items-center justify-center">
      {count}
    </div>

    <button
      onClick={() => setCount((c) => c + 1)}
      className="bg-[#FDC913] w-[56px] h-[56px] font-bold rounded-r"
    >
      +
    </button>
  </div>



  {/* SİPARİŞ KARTI */}
  <div className="md:w-[350px] md:h-[255px] w-full flex flex-col bg-[#FAF7F2] border-[#D9D9D9] order-2">

    <div className="border p-6 md:h-[197px] rounded-lg mb-0">
      <h3 className="text-xl font-[Barlow] font-semibold text-[#292929] mt-4 mb-4">
        Sipariş Toplamı
      </h3>

      <div className="flex justify-between text-lg font-semibold text-[#5F5F5F]">
        <span>Seçimler</span>
        <span>{selectionTotal.toFixed(2)}₺</span>
      </div>

      <div className="flex justify-between text-lg font-semibold text-[#CE2829] mt-2">
        <span>Toplam</span>
        <span>{total.toFixed(2)}₺</span>
      </div>
    </div>
{/* 💻 DESKTOP ALT BUTON */}
<button
  onClick={handleSubmit}
  disabled={!formValid || loading}
   className="bg-[#FDC913] h-[62px] md:w-[350px] w-full text-lg font-bold hidden md:block mt-0 md:mx-auto"
>
  {loading ? "Gönderiliyor..." : "SİPARİŞ VER"}
</button>
  </div>



  {/* 📱 MOBİL ADET + BUTON YANYANA */}
  <div className="flex items-center gap-4 w-full md:hidden order-3 justify-center">

    {/* ADET */}
    <div className="flex max-w-[200px] h-[56px]">
      <button
        onClick={() => setCount((c) => Math.max(1, c - 1))}
        className="bg-[#FDC913] w-[56px] h-[56px] font-bold rounded-l"
      >
        -
      </button>

      <div className="w-[56px] h-[56px] border flex items-center justify-center">
        {count}
      </div>

      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-[#FDC913] w-[56px] h-[56px] font-bold rounded-r"
      >
        +
      </button>
    </div>

    {/* MOBİL BUTON */}
    <button
      onClick={handleSubmit}
      disabled={!formValid || loading}
      className="bg-[#FDC913] h-[56px] w-full max-w-[200px] font-bold"
    >
      {loading ? "Gönderiliyor..." : "SİPARİŞ VER"}
    </button>

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
      <p className="font-londrina text-[50px] leading-[50px] text-[#FFFFFF]">
        Teknolojik Yemekler
      </p>

      <ul className="font-barlow text-[#FFFFFF] text-lg space-y-3 mt-4">
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
      <p className="font-barlow text-2xl text-[#FFFFFF] mb-6 mt-8">Hot Menu</p>

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
      <p className="font-barlow text-2xl text-[#FFFFFF] mb-6 text-left">
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
