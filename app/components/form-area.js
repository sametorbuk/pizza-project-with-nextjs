"use client";

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

import { useForm, useWatch } from "react-hook-form";

export default function FormArea() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,

    clearErrors,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      checkboxes: Array(15).fill(false),
      size: "",
      name: "",
      thickness: "",
    },
  });

  const selectedCheck = useWatch({ name: "checkboxes", control });
  const selectedCount = selectedCheck.filter(Boolean).length;

  const firstFour = ingredientsArray.slice(0, 4);
  const secondFour = ingredientsArray.slice(4, 8);
  const thirdFour = ingredientsArray.slice(8, 12);

  const validateCheckBoxLimit = (index) => (e) => {
    const checked = e.target.checked;

    if (checked && selectedCount >= 10) {
      e.target.checked = false;
      setError("checkboxes", {
        type: "manual",
        message: "En fazla 10 adet seçebilirsiniz",
      });
    } else {
      setValue(`checkboxes[${index}]`, checked);
      clearErrors("checkboxes");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex  gap-[5rem] mt-[2rem]">
          <div className="flex flex-col">
            {firstFour.map((item, index) => {
              return (
                <>
                  <label htmlFor={item}>{item}</label>
                  <input
                    value={item}
                    key={item}
                    type="checkbox"
                    id={item}
                    onChange={validateCheckBoxLimit(index)}
                    {...register(`checkboxes[${index}]`)}
                  />
                </>
              );
            })}
          </div>

          <div className="flex flex-col">
            {secondFour.map((item, index) => {
              return (
                <>
                  <label htmlFor={item}>{item}</label>
                  <input
                    onChange={validateCheckBoxLimit(index + 4)}
                    {...register(`checkboxes[${index + 4}]`)}
                    value={item}
                    key={item}
                    type="checkbox"
                    id={item}
                  />
                </>
              );
            })}
          </div>

          <div className="flex flex-col">
            {thirdFour.map((item, index) => {
              return (
                <>
                  <label htmlFor={item}>{item}</label>
                  <input
                    onChange={validateCheckBoxLimit(index + 8)}
                    {...register(`checkboxes[${index + 8}]`)}
                    value={item}
                    key={item}
                    type="checkbox"
                    id={item}
                  />
                </>
              );
            })}
          </div>
        </div>
        {selectedCount < 4 && (
          <p className="text-red-600">En az 4 adet seçmelisiniz</p>
        )}
        {errors.checkboxes && (
          <p className="text-red-600">{errors.checkboxes.message}</p>
        )}
        {<p>sayıları : {selectedCount}</p>}
      </form>
    </>
  );
}
