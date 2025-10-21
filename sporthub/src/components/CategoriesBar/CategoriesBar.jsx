import { useState } from "react";
import "./CategoriesBar.scss";

const CategoriesBar = () => {
  const [active, setActive] = useState(0);

  const categories = [
    "Футбол",
    "Хоккей",
    "Биатлон",
    "Теннис",
    "Гандбол",
    "Баскетбол",
    "Бокс",
    "Легкая атлетика",
    "Другое",
  ];

  return (
    <div className="categories-bar">
      {categories.map((cat, i) => (
        <span
          key={cat}
          className={active === i ? "active" : ""}
          onClick={() => setActive(i)}
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;