export default function FoodCart(props) {
  const {item } = props;
  const { img, name, price, point, comment}=item
  return (
    <>
      <div className="flex flex-col">
        <img src={img} alt="" />
        <p className="font-bold">{name}</p>

        <div className="flex">
          <p>{point}</p>
          <p>{comment}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}
