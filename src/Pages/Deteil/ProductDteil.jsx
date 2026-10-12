import { useEffect, useState } from "react";
import { MdShoppingCart, MdFavorite } from "react-icons/md";
import { LuScale } from "react-icons/lu";
import { IoInformationCircleOutline } from "react-icons/io5";
import { HiOutlineTruck, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FiRefreshCw } from "react-icons/fi";
import { useParams } from "react-router-dom";
import InstallmentModal from "../../Componets/InstallmentModal/InstallmentModal";
import { getProductById } from "../../Sevices/App.js";

function ProductDteil() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="container_1200 py-6 text-gray-900 dark:text-white">Юкланмоқда...</div>;
  }

  return (
    <div className="dark:bg-gray-900">

    <div className="container_1200 py-6  dark:text-gray-100">
      <div className="text-sm text-gray-400 dark:text-gray-400">
        <a href="/" className="hover:text-gray-600 dark:hover:text-gray-200">Главная</a> <span className="mx-1">›</span> {product.name}
        <span className="mx-1">›</span>
      </div>

      <div className="flex gap-8 mt-6 items-start">
        <div className="w-[300px] shrink-0">
          <div className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={product.main_image}
              alt=""
              className="w-full aspect-square object-contain"
            />
          </div>
          <div className="flex gap-3 justify-between mt-3">
            {product.images.slice(0,4).map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt=""
                className="w-16 h-16 object-cover rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 cursor-pointer hover:border-[#ed3a2d] dark:hover:border-[#ed3a2d] transition-colors"
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">{product.name}</h1>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold text-[#ed3a2d]">
              {product.price}сум
            </span>
            <IoInformationCircleOutline size={20} className="text-gray-400 dark:text-gray-400" />
            <div className="flex items-center gap-4 ml-4 text-gray-400 dark:text-gray-400">
              <MdShoppingCart
                size={20}
                className="cursor-pointer hover:text-[#ed3a2d] dark:hover:text-[#ed3a2d]"
              />
              <MdFavorite
                size={20}
                className="cursor-pointer hover:text-[#ed3a2d] dark:hover:text-[#ed3a2d]"
              />
              <LuScale
                size={20}
                className="cursor-pointer hover:text-[#ed3a2d] dark:hover:text-[#ed3a2d]"
              />
            </div>
          </div>

          <p className="text-sm text-gray-400 dark:text-gray-400 mt-2">
            VIP скидки для VIP клиентов
          </p>

          <div className="flex items-center gap-4 mt-5">
            <button className="h-11 px-8 bg-[#ed3a2d] text-white text-sm font-medium rounded-md cursor-pointer hover:opacity-90 transition-opacity">
              Купить сейчас
            </button>
            <button
              onClick={() => {
                console.log("button bosildi");

                return setIsModalOpen(true);
              }}
              className="h-11 px-8 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-md cursor-pointer hover:opacity-90 transition-opacity"
            >
              Купить в рассрочку сейчас
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-md px-4 py-3 mt-6">
            <p className="text-xs text-gray-400 dark:text-gray-400 mb-1">Название для договора</p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-3 text-gray-900 dark:text-white">
            Технические параметры
          </h2>

          <h2 className="text-lg font-medium mt-8 mb-3 text-gray-900 dark:text-white">Информация о модели</h2>
        </div>

        <div className="w-[280px] shrink-0 flex flex-col gap-4">
          <div className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 rounded-md p-4">
            <div className="flex items-start gap-3">
              <FiRefreshCw size={20} className="text-gray-400 dark:text-gray-400 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  30 дней на обмен и возврат
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                  Если купите товар сегодня, до 06 мая можете вернуть или
                  обменять.
                </p>
                <a href="#" className="text-xs text-[#ed3a2d] hover:underline">
                  Подробнее о программе.
                </a>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 rounded-md p-4">
            <div className="flex items-start gap-3">
              <HiOutlineChatBubbleLeftRight
                size={20}
                className="text-gray-400 dark:text-gray-400 mt-0.5"
              />
              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-900 dark:text-white">Есть вопросы?</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Телефон:{" "}
                  <a href="tel:+998999904527" className="text-[#ed3a2d]">
                    +998 99 990 45 27
                  </a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Телеграм:{" "}
                  <a href="#" className="text-[#ed3a2d]">
                    @mixel.uz
                  </a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Эл. почта:{" "}
                  <a href="#" className="text-[#ed3a2d]">
                    mixel@emali.uz
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 rounded-md p-4">
            <div className="flex items-start gap-3 mb-3">
              <HiOutlineTruck size={20} className="text-gray-400 dark:text-gray-400 mt-0.5" />
              <p className="text-sm text-gray-900 dark:text-white">
                <span className="font-medium">Доставка: </span>
                <span className="text-gray-500 dark:text-gray-400">Бесплатно</span>
              </p>
            </div>
            <p className="text-sm font-medium mb-1 text-gray-900 dark:text-white">Способ оплаты:</p>
            <ul className="text-xs text-gray-500 dark:text-gray-400 flex flex-col gap-1 pl-4 list-disc">
              <li>Наличными (При Доставке)</li>
              <li>Payme / Click</li>
              <li>Перечислением с НДС</li>
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <InstallmentModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
    </div>
  );
}

export default ProductDteil;