import Image from "next/image";
import Link from "next/link";
import FoodOptions from "./components/FoodOptions";
import FoodCart from "./components/FoodCart";
import { foodCartData } from "@/public/foodCartData";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-[97.4vw]">
        <img className="" src="/assets/iteration-1/home-banner.png" alt="" />

        <div className="absolute flex flex-col bottom-[23rem] left-[12.5rem]  items-center">
          <h3 className="text-white">Teknolojik Yemekler</h3>
          <h4>Fırsatı kaçırma</h4>
          <h1 className="text-3xl text-white">KOD ACIKTIRIR</h1>
          <h1 className="text-3xl text-white">PİZZA DOYURUR</h1>
          <Link href="/order-page">
            {" "}
            <button className="bg-yellow-400 px-5 py-2 rounded-2xl mt-[1rem]">
              ACIKTIM
            </button>
          </Link>
        </div>
        <FoodOptions />
        <div className="flex justify-around w-[45rem] gap-[2rem]">
          {foodCartData.map((item, ind) => {
            return <FoodCart key={ind} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
