import { useEffect, useState } from "react";
import { getCategories } from "../../Sevices/App";
import { Link } from "react-router-dom";

function PopularCategories() {
  const [categories, setCategories] = useState([]);
  const id = 2;
  useEffect(() => {
    getCategories().then((data) => {
      console.log(data);
      setCategories(data.results ?? data);
    })
  }, []);
  
  return (
    <div className="PopularCategories bg-white py-6 dark:bg-gray-900 md:py-0">
      <div className="container_1200 px-4">
        <h2 className="text-lg text-black dark:text-white md:text-[20px]">
          Популярные категории
        </h2>

        <div
          className="mt-5 flex  items-center md:mt-[28px] lg:justify-between
                     [-ms-overflow-style:none] scrollbar-none
                     [&::-webkit-scrollbar]:hidden"
        >
          {categories.slice(0, 4).map((item) => (
            <Link to={`/Deteil/${item.id}`}
              key={item.id}
              className="flex cursor-pointer items-center justify-between  md:gap-5"
            >
              <div className="flex items-center gap-5">
                <h3 className="text-base leading-tight dark:text-white md:max-w-[140px] md:text-[20px]">
                {item.name}
              </h3>
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-contain"
              />
            </div>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
