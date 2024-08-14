import Link from "next/link";

import IngredientsArea from "../components/form-area";
import FormArea from "../components/form-area";

export default function OrderPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-screen flex justify-center items-center bg-red-700 h-[6rem]">
          <h1 className="text-white text-2xl">TEKNOLOJİK YEMEKLER</h1>
        </div>
        <img
          className="w-[20rem]"
          src="/assets/iteration-2/pictures/form-banner.png"
        />

        <div className="flex text-end gap-[0.5rem] w-[47vw]">
          <Link href="/">Anasayfa</Link>
          <Link href="/order-page">Sipariş Oluştur</Link>
        </div>

        <div className="flex flex-col w-[47vw] text-left mt-[2.3rem]">
          <p className="font-bold text-left">Position Absolute Acı Pizza</p>

          <div className="flex mt-[1rem] w-full justify-between ">
            <p className="font-bold">85₺</p>

            <div className="flex">
              <p>4.5★</p>
              <p>(200)</p>
            </div>
          </div>

          <p className="mt-[1rem]">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>

        <FormArea />
      </div>
    </>
  );
}
