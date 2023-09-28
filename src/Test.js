import React from 'react';

export const Test = () => {
  // const [brand, setBrand] = React.useState("Ford");
  // const [model, setModel] =React. useState("Mustang");
  // const [year, setYear] =React. useState("1964");
  // const [color, setColor] =React. useState("red");
  const [car, setCar] = React.useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        {/* It is a {color} {model} from {year}.  */}
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        onClick={() => {
          setCar((previous) => {
            return { ...previous, color: 'blue' };
          });
        }}
      >
        Test
      </button>
    </div>
  );
};
