export default function OrderSuccess() {
  return (
    <section
      className="
        relative
        w-[540px] h-[1080px]
        bg-[#CE2829] bg-center

        md:w-full md:h-screen
      "
    >
      <div
        className="
          fixed top-0 left-0 right-0
          flex flex-col items-center
          text-white text-center
          mt-24 pt-24
        "
      >
        <img
          src="/src/assets/iteration-1-images/logo.svg"
          alt="logo"
          className="w-[360px] h-[45.79px]"
        />

        <h1 className="font-roboto font-light text-[72px] leading-[92px] mt-24">
          TEBRİKLER! <br />
          SİPARİŞİNİZ ALINDI!
        </h1>
      </div>
    </section>
  );
}
