import { useEffect, useState } from "react";
import { getCategories } from "../../Sevices/App";
import { Link } from "react-router-dom";

function PopularCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.results ?? data);
    });
  }, []);

  return (
    <div className="PopularCategories bg-white py-6 dark:bg-gray-900 md:py-0">
      <div className="container_1200 px-4">
        <h2 className="text-lg text-black dark:text-white md:text-[20px]">
          Популярные категории
        </h2>

        <div
          className="-mx-4 mt-5 flex items-center gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-[28px] md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:justify-between
                     [-ms-overflow-style:none] [scrollbar-width:none]
                     [&::-webkit-scrollbar]:hidden"
        >
          {categories.slice(0, 4).map((item) => (
            <Link
              to={`/Deteil/${item.id}`}
              key={item.id}
              className="flex shrink-0 cursor-pointer items-center gap-3 md:gap-5"
            >
              <h3 className="max-w-[110px] text-base leading-tight dark:text-white md:max-w-[140px] md:text-[20px]">
                {item.name}
              </h3>
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-contain md:h-20 md:w-20"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;