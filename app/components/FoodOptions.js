import { foodOptionsData } from "@/public/icon-data";

export default function FoodOptions() {
  return (
    <>
      <div className="w-screen">
        <div className="flex justify-around">
          {foodOptionsData.map((item, ind) => {
            return <img key={ind} src={item} alt="" />;
          })}
        </div>
      </div>
    </>
  );
}
