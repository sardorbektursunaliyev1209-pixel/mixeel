import { FaAngleRight } from "react-icons/fa";
import { GoX } from "react-icons/go";
// import { products } from "../../Data/Product";
import ProductCard from "../../Componets/ProductCard/ProductCard";
import { useState } from "react";

const specs = [
  { label: "Степень защиты", values: ["IP67", "", "", ""] },
  {
    label: "Версия ОС",
    values: ["Android 11", "Android 11", "Android 11", "Android 11"],
  },
  { label: "Количество ядер", values: ["6", "6", "5", "6"] },
  { label: "Степень защиты", values: ["IP68", "IP68", "IP68", "IP68"] },
  {
    label: "Макс. разрешение видео",
    values: ["3840x2160", "3840x2160", "3840x2160", "3840x2160"],
  },
  {
    label: "Фотокамера",
    values: ["12 МП, 12 МП", "12 МП, 12 МП", "12 МП, 12 МП", "12 МП, 12 МП"],
  },
  {
    label: "Емкость аккумулятора",
    values: ["3110 мА·ч", "3110 мА·ч", "3110 мА·ч", "3110 мА·ч"],
  },
  {
    label: "Версия ОС",
    values: ["Android 11", "Android 11", "Android 11", "Android 11"],
  },
];

function ComparePage({
  products,
  compere,
  wishlist,
  toggleWishlist,
  addToCart,
  toggleCompare,
}) {
  const [onlyDifferences, setOnlyDifferences] = useState(false);

  return (
    <>
      <div className="ComparePage dark:bg-gray-900">
        <div className="container_1200 px-4 md:px-0">
          <div className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-400 dark:text-white md:py-[27px] md:text-base">
            <div className="flex items-center gap-1">
              <a href="">Главная</a>
              <span>
                <FaAngleRight />
              </span>
            </div>
            <a href="">Сравнить</a>
          </div>

          <h1 className="text-[18px] font-bold dark:text-white">
            Сравнение товаров
          </h1>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Filtr tugmalari: mobilda gorizontal scroll */}
            <div className="-mx-4 flex items-center gap-3 overflow-x-auto px-4 py-4 md:mx-0 md:gap-4 md:overflow-visible md:px-0">
              <button className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-4xl bg-red-500 px-5 py-1 text-[15px] text-white md:px-8 md:text-[17px]">
                Смартфоны 5 <GoX size={23} className="dark:text-white" />
              </button>
              <button className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-4xl border border-gray-300 px-5 py-1 text-[15px] dark:text-white md:px-8 md:text-[17px]">
                Смартфоны 5 <GoX size={23} className="dark:text-white" />
              </button>
              <button className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-4xl border border-gray-300 px-5 py-1 text-[15px] dark:text-white md:px-8 md:text-[17px]">
                Смартфоны 5 <GoX size={23} className="dark:text-white" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="rounded-[50px] border border-gray-300 p-1.5 dark:border-white">
                <GoX className="dark:text-white" />
              </button>
              <h2 className="text-[14px] dark:text-white">Добавить товары</h2>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={onlyDifferences}
                onChange={() => setOnlyDifferences(!onlyDifferences)}
                className="peer sr-only"
              />
              <div className="h-5 w-10 rounded-full bg-gray-300 transition-colors peer-checked:bg-[#ed3a2d]"></div>
              <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></div>
            </label>
            <span className="text-sm dark:text-white">Только отличия</span>
          </div>

          <div className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-3 sm:gap-4 md:py-[32px] lg:grid-cols-4">
            {compere.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                toggleCompare={toggleCompare}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
                addToCart={addToCart}
              />
            ))}
          </div>

          <div>
            <h1 className="text-[18px] dark:text-white">
              Характеристики товара
            </h1>
            <p className="text-gray-400 dark:text-white">Герцовка</p>
          </div>

          <div className="pb-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-x-4 gap-y-3 border-b border-gray-200 py-4 dark:border-white md:grid-cols-4 md:gap-6"
              >
                {spec.values.map((value, i) => (
                  <div key={i} className="min-w-0">
                    <p className="text-xs text-gray-400 dark:text-white">
                      {spec.label}
                    </p>
                    <p className="mt-1 break-words text-sm dark:text-white">
                      {value || "—"}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ComparePage;