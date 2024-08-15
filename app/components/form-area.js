"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormFeedback } from "reactstrap";

const ingredientsArray = [
  "Sarımsak",
  "Sosis",
  "Jalepeno",
  "Kanada Jambonu",
  "Sucuk",
  "Tavuk Izgara",
  "Biber",
  "Kabak",
  "Ananas",
  "Mısır",
  "Peperoni",
  "Soğan",
];

const errorMessage = "En fazla 10 adet seçebilirsiniz";

export default function FormArea() {
  const firstFour = ingredientsArray.slice(0, 4);
  const secondFour = ingredientsArray.slice(4, 8);
  const thirdFour = ingredientsArray.slice(8, 12);

  const [checkdata, setCheckData] = useState([]);
  const [checkErrors, setCheckErrors] = useState(false);
  const [count, setCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      orderNote: "",
    },
    mode: "all",
  });

  const checkBoxChangeHandler = (e) => {
    const { type, id, checked } = e.target;

    if (type === "checkbox" && checked) {
      if (checkdata.length >= 10) {
        e.target.checked = false;
        setCheckErrors(true);
      } else {
        setCheckData([...checkdata, id]);
      }
    } else if (type === "checkbox" && !checked) {
      const newState = checkdata.filter((item) => item !== id);
      setCheckData(newState);
    }

    console.log(checkdata);
  };

  return (
    <>
      <form>
        <div className="mt-[3rem]">
          {checkErrors && (
            <FormFeedback className="text-red-600 mb-[0.4rem]">
              {errorMessage}
            </FormFeedback>
          )}
          <div className="flex  gap-[3rem] ">
            <div className="flex flex-col gap-[1.5rem]">
              {firstFour.map((item) => {
                return (
                  <>
                    <label htmlFor={item} className="container">
                      {item}
                      <input
                        onChange={checkBoxChangeHandler}
                        type="checkbox"
                        id={item}
                        name={"checkbox"}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </>
                );
              })}
            </div>
            <div className="flex flex-col gap-[1.5rem]">
              {secondFour.map((item) => {
                return (
                  <>
                    <label htmlFor={item} className="container">
                      {item}
                      <input
                        onChange={checkBoxChangeHandler}
                        type="checkbox"
                        id={item}
                        name="checkbox"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </>
                );
              })}
            </div>
            <div className="flex flex-col gap-[1.5rem]">
              {thirdFour.map((item) => {
                return (
                  <>
                    <label htmlFor={item} className="container">
                      {item}
                      <input
                        onChange={checkBoxChangeHandler}
                        type="checkbox"
                        id={item}
                        name="checkbox"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">İsim alanı</label>
          <input
            className="bg-gray-200 rounded-lg h-[2.3rem]"
            type="text"
            id="name"
            {...register("name", {
              required: "İsim alanı boş bırakılamaz",
              minLength: {
                value: 6,
                message: "İsim alanı 6 karakterden az olamaz",
              },
            })}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col mt-[2rem]">
          <label htmlFor="orderNote">Sipariş notu alanı</label>

          <input
            className="bg-gray-200 rounded-lg h-[2.3rem]"
            placeholder="Siparişinize eklemek istediğniz bir not var mı ?"
            type="text"
            id="orderNote"
            {...register("orderNote", {
              required: "Sipariş notu boş bırakılamaz",
              maxLength: {
                value: 9,
                message: "Sipariş alanı en az 9 karakter olmalıdır",
              },
            })}
          />
          {errors.orderNote && (
            <p className="text-red-600">{errors.orderNote.message}</p>
          )}
        </div>

        <div className="flex gap-[4rem]">
        <div className="flex items-center mt-[4rem] ">
          <button
            onClick={(event) => {
              event.preventDefault();
              setCount(count - 1);
            }}
            className="bg-yellow-500 h-[2.5rem] w-[2.5rem] items-center text-white text-2xl rounded-lg"
          >
            -
          </button>
          <p className="bg-white-100 h-[2.5rem] w-[2.5rem] flex justify-center items-center ">
            {count}
          </p>
          <button
            onClick={(event) => {
              event.preventDefault();
              setCount(count + 1);
            }}
            className="bg-yellow-500 h-[2.5rem] w-[2.5rem] items-center text-white text-2xl rounded-lg"
          >
            +
          </button>




          </div>


             


        </div>
      </form>
    </>
  );
}
