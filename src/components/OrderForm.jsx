import { useState } from "react";
//import "./OrderForm.css";
import axios from "axios";

export default function OrderForm() {

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

  console.log("GÖNDERİLEN PAYLOAD:", payload);

  setLoading(true);

  try {
    const response = await axios.post(
      "https://app.reqres.in/api/pizza",
      payload,
      {
        headers: {
          "x-api-key": "reqres-free-v1",
          "Content-Type": "application/json",
        },
      }
    );

    // Normal şartlarda burası çalışırdı
    console.log("API RESPONSE:", response.data);

  } catch (error) {
    console.warn("CORS / NETWORK ENGELİ – MOCK RESPONSE KULLANILDI");

    // MOCK BACKEND RESPONSE (reqres davranışı)
    const mockResponse = {
      ...payload,
      id: Math.floor(Math.random() * 10000),
      createdAt: new Date().toISOString(),
    };

    console.log("MOCK API RESPONSE:", mockResponse);
  } finally {
    setLoading(false);
  }
};





  return (
    <>

      <header className="bg-[#CE2829] w-[1,920px] h-[207px] border-b border-[#C20608]">
        <div className="mx-auto px-4 py-8 flex flex-col">

          <img
            src="/src/assets/iteration-1-images/logo.svg"
            alt="logo"
           className="mx-auto mt-8"
          />
      
          <div className="w-[532px] mx-auto px-4 mt-6 mb-1 py-8 font-[barlow]">
            <nav className="text-sm text-white opacity-90 mb-1 ">
            <span className="opacity-80 mb-1">Anasayfa - </span>
            <span className="font-semibold">Sipariş Oluştur</span>
            </nav>
          </div>
         
        </div>       
      </header>

      <div className="w-[532px] mx-auto px-4 mt-6 mb-8 font-[barlow]">

      <h2 className="font-semibold mb-4 text-[22px] text-[#292929]">
        Position Absolute Acı Pizza
      </h2>

      <div className="flex items-center justify-between">
        <p className="text-[28px] font-bold text-[#292929]">
          85.50₺
        </p>
        <div className="flex items-center text-base font-normal gap-10 text-[#5F5F5F] regular">
          <span>4.9</span>
          <span>(200)</span>
        </div>
      </div>

      <p className="h-[173px] text-[#5F5F5F] text-base font-normal leading-[28,8] regular mb-4 mt-4">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. .Küçük bir pizzaya bazen pizzetta denir.
      </p>



      {/* BOYUT + HAMUR */}
      <div className="mt-4 mb-6 flex justify-between gap-12">

        {/* SOL: BOYUT */}
        <div className="text-base flex flex-col gap-4 w-1/2">
          <label className="font-[barlow] text-[#292929] block text-xl font-semibold mb-2">
             Boyut Seç <span className="text-[#D80027]">*</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
             type="radio"
             name="boyut"
             value="Küçük"
             checked={boyut === "Küçük"}
             onChange={(e) => setBoyut(e.target.value)}
             className="w-xs h-[19px] accent-red-600"
            />
            <span className="text-base font-medium text-[#5F5F5F]">Küçük</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
                type="radio"
                name="boyut"
                value="Orta"
                checked={boyut === "Orta"}
                onChange={(e) => setBoyut(e.target.value)}
                className="w-xs h-[19px] accent-red-600"
            />
            <span className="text-base font-medium text-[#5F5F5F]">Orta</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="boyut"
              value="Büyük"
              checked={boyut === "Büyük"}
              onChange={(e) => setBoyut(e.target.value)}
              className="w-xs h-[19px] accent-red-600"
            />
            <span className="text-base font-medium text-[#5F5F5F]">Büyük</span>
          </label>

        </div>

        {/* SAĞ: HAMUR */}
        <div className="w-1/2">

          <label className="font-[barlow] text-[#292929] block text-xl font-semibold mb-3">
            Hamur Seç <span className="text-[#CE2829]">*</span>
          </label>

          <img
            className="h-[38px] w-[158px]"
            src="/src/assets/iteration-1-images/image.png"
            alt=""
          />

        </div>

      </div>


        {/* EK MALZEMELER */}
      <div className="mt-8">
        <h3 className="font-[barlow] text-[#292929] text-xl font-semibold mb-4">
          Ek Malzemeler
        </h3>

        <p className="text-base text-[#5F5F5F] font-medium mb-8">
          En Fazla 10 malzeme seçebilirsiniz. 5₺
        </p>

        <div className="grid grid-cols-3 gap-y-4 gap-x-8 mt-8 ">

          {extraItems.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer font-[Barlow] font-bold text-base text-[#5F5F5F]"
            >
              <input
                type="checkbox"
                value={item}
                checked={extras.includes(item)}
                onChange={(e) => {
                  if (e.target.checked) {
                    if (extras.length < 10) {
                      setExtras([...extras, item]);
                    }
                  } else {
                    setExtras(extras.filter((x) => x !== item));
                  }
                }}
                disabled={!extras.includes(item) && extras.length >= 10}
                className="w-xs h-[20.54px] accent-blue-600"
              />
              <span className="font-bold font-[Barlow] text-base text-[#5F5F5F]">{item}</span>
            </label>
          ))}

        </div>

            {/* ✅ HATA UYARISI */}
            {extras.length < 4 && (
              <p className="text-red-500 text-sm mt-3">
                En az 4 malzeme seçmelisiniz.
              </p>
            )}

            {extras.length >= 4 && (
              <p className="text-green-600 text-sm mt-3">
                Seçilen malzeme sayısı: {extras.length}
              </p>
            )}

      </div>


       {/* ISIM */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">İsim</h3>

        <input
          type="text"
          value={isim}
          onChange={(e) => setIsim(e.target.value)}
          className="border rounded-lg p-3 w-full"
          placeholder="Adınızı giriniz"
        />

        {/* TRIMLI KONTROL */}
        {isim.trim().length > 0 && isim.trim().length < 3 && (
          <p className="text-red-500 text-sm mt-2">
            İsim en az 3 karakter olmalıdır.
          </p>
        )}
      </div>


        {/* NOT */}
      <div className="mb-8 mt-8 font-[Barlow]">
          <h3 className="text-xl text-[#292929] font-semibold mb-3">Sipariş Notu</h3>
          <textarea
            className="border w-[531px] h-[56px] text-sm font-medium text-[#5F5F5F] rounded-lg p-4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
      </div>






      <div className="flex mb-8">

        {/* ADET */}
        <div className="flex w-[170px] h-[57px] mx-2 mb-8">
          <button
            onClick={() => setCount((c) => Math.max(1, c - 1))}
            className="bg-[#FDC913] w-[56px] h-[56px] px-4 py-2 text-base font-bold  rounded"
          >
            -
          </button>

          <div className="w-[56px] h-[56px] border-[#D9D9D9] border flex items-center justify-center">
           <span className="text-base font-bold">{count}</span>
          </div>


          <button
            onClick={() => setCount((c) => c + 1)}
            className="bg-[#FDC913] w-[56px] h-[56px] px-4 py-2 text-base font-bold  rounded"
          >
            +
          </button>
        </div>

        <div className="w-[350px] h-[255px] flex flex-col mb-8">

              <div className="w-[350px] h-[197px] border border-[#D9D9D9] p-6 rounded-lg mb-0">
                <h3 className="text-xl font-[Barlow] font-semibold text-[#292929] mb-4">
                  Sipariş Toplamı
                </h3>

                {/* Seçimler */}
                <div className="flex justify-between text-lg font-semibold text-[#5F5F5F]">
                    <span>Seçimler</span>
                    <span>{selectionTotal.toFixed(2)}₺</span>
                </div>

                {/* Toplam */}
                <div className="flex justify-between text-lg font-semibold text-[#CE2829] mt-2">
                    <span>Toplam</span>
                    <span>{total.toFixed(2)}₺</span>
                </div>          
              </div>
              <div className="h-[62px] bg-[#FDC913] text-center py-4 mb-4">
                <button
                  onClick={handleSubmit}
                  disabled={!formValid || loading}
                >
                  {loading ? "Gönderiliyor..." : "SİPARİŞ VER"}
                </button>

              </div>

        </div>
      </div>


       
      </div>

    </>
  );
}
