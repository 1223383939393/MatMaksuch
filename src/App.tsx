import React, { useState } from "react";
import "./App.css";

function App() {
  const [clickCount, setClickCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>("red");

  // 1. Обработчик клика по кнопке
  const handleButtonClick = () => {
    setClickCount((prev: number) => prev + 1);
  };

  // 2. Обработчик изменения текста в инпуте
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 3. Обработчики наведения мыши (mouseenter / mouseleave)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 4. Обработчик изменения select (доп. событие)
  const handleColorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="app">
      <h1>Приложение с обработчиками событий</h1>

      {/* Кнопка с кликом */}
      <section className="block">
        <h2>1. Клик по кнопке (onClick)</h2>
        <p>Сколько раз нажал: {clickCount}</p>
        <button onClick={handleButtonClick}>Нажми меня</button>
      </section>

      {/* Инпут с onChange */}
      <section className="block">
        <h2>2. Ввод текста (onChange)</h2>
        <input
          type="text"
          placeholder="Пиши сюда..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Ты написал: {inputValue || "пока ничего"}</p>
      </section>

      {/* Наведение мышкой onMouseEnter/onMouseLeave */}
      <section className="block">
        <h2>3. Наведение мыши (onMouseEnter / onMouseLeave)</h2>
        <div
          className="hover-box"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? "Мышка НАД блоком" : "Наведи мышку на этот блок"}
        </div>
      </section>

      {/* Select (изменение значения) */}
      <section className="block">
        <h2>4. Выбор цвета (onChange)</h2>
        <select value={selectedColor} onChange={handleColorChange}>
          <option value="red">Красный</option>
          <option value="green">Зелёный</option>
          <option value="blue">Синий</option>
        </select>

        <div
          className="color-preview"
          style={{ backgroundColor: selectedColor }}
        >
          Текущий цвет: {selectedColor}
        </div>
      </section>
    </div>
  );
}

export default App;