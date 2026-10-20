import { useEffect, useState } from "react";
import { MdShoppingCart, MdFavorite } from "react-icons/md";
import { LuScale } from "react-icons/lu";
import { IoInformationCircleOutline } from "react-icons/io5";
import { HiOutlineTruck, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FiRefreshCw } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import InstallmentModal from "../../Componets/InstallmentModal/InstallmentModal";
import { getProductById } from "../../Sevices/App.js";
import { getToken } from "../../Sevices/Token.js";

function ProductDteil({
  loading,
  toggleWishlist,
  wishlist,
  addToCart,
  toggleCompare,
}) {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState(null);

    const navigate = useNavigate();
    const isLike = wishlist?.some((item) => item.id === product?.id);
  
    const requireAuth = (action) => () => {
      if (!getToken()) {
        navigate("/SingUp");
      } else {
        action(product);
      }
    };
  
    const handleCart = requireAuth(addToCart);
    const handleWishlist = requireAuth(toggleWishlist);
    const handleCompare = requireAuth(toggleCompare);
  
  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="container_1200 px-4 md:px-0 py-6 text-gray-900 dark:text-white">
        Юкланмоқда...
      </div>
    );
  }


  return (
    <div className="dark:bg-gray-900">
      <div className="container_1200 px-4 md:px-0 py-4 md:py-6 dark:text-gray-100">
        <div className="text-sm text-gray-400 dark:text-gray-400 flex flex-wrap items-center">
          <a href="/" className="hover:text-gray-600 dark:hover:text-gray-200">
            Главная
          </a>
          <span className="mx-1">›</span>
          <span className="break-words">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-6 md:items-start">
          {/* Rasm ustuni */}
          <div className="w-full md:w-[300px] md:shrink-0">
            <div className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={product.main_image}
                alt=""
                className="w-full aspect-square object-contain"
              />
            </div>
            <div className="flex gap-2 md:gap-3 mt-3 overflow-x-auto pb-1">
              {product.images.slice(0, 4).map((img) => (
                <img
                  key={img.id}
                  src={img.image}
                  wishlist={wishlist}
                  alt=""
                  className="w-16 h-16 shrink-0 object-cover rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 cursor-pointer hover:border-[#ed3a2d] dark:hover:border-[#ed3a2d] transition-colors"
                />
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="text-xl md:text-2xl font-bold text-[#ed3a2d]">
                {product.price}сум
              </span>
              <IoInformationCircleOutline
                size={20}
                className="text-gray-400 dark:text-gray-400"
              />
              <div className="flex items-center gap-4 sm:ml-4 text-gray-400 dark:text-gray-400">
                <button onClick={handleCart} type="button">
                <MdShoppingCart
                  size={20}
                  className="cursor-pointer hover:text-[#ed3a2d] dark:hover:text-[#ed3a2d]"
                />
                </button>
                
                <button onClick={handleWishlist} type="button">
                  

                <MdFavorite
                
                  size={20}
                  className={`cursor-pointer hover:text-[#ed3a2d] dark:hover:text-[#ed3a2d] ${isLike ? "text-[#E8382D]" : "dark:text-white"}`}
                />
                </button>

                <button onClick={handleCompare}>

                <LuScale
                  size={20}
                  className="cursor-pointer hover:text-[#ed3a2d] dark:hover:text-[#ed3a2d]"
                />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-400 dark:text-gray-400 mt-2">
              VIP скидки для VIP клиентов
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-5">
              <button className="w-full sm:w-auto h-11 px-8 bg-[#ed3a2d] text-white text-sm font-medium rounded-md cursor-pointer hover:opacity-90 transition-opacity">
                Купить сейчас
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto h-11 px-8 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-md cursor-pointer hover:opacity-90 transition-opacity"
              >
                Купить в рассрочку сейчас
              </button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-md px-4 py-3 mt-6">
              <p className="text-xs text-gray-400 dark:text-gray-400 mb-1">
                Название для договора
              </p>
            </div>

            <h2 className="text-lg font-medium mt-6 md:mt-8 mb-3 text-gray-900 dark:text-white">
              Технические параметры
            </h2>

            <h2 className="text-lg font-medium mt-6 md:mt-8 mb-3 text-gray-900 dark:text-white">
              Информация о модели
            </h2>
          </div>

          {/* O'ng blok */}
          <div className="w-full md:w-[280px] md:shrink-0 flex flex-col gap-4">
            <div className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 rounded-md p-4">
              <div className="flex items-start gap-3">
                <FiRefreshCw
                  size={20}
                  className="shrink-0 text-gray-400 dark:text-gray-400 mt-0.5"
                />
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    30 дней на обмен и возврат
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                    Если купите товар сегодня, до 06 мая можете вернуть или
                    обменять.
                  </p>
                  <a
                    href="#"
                    className="text-xs text-[#ed3a2d] hover:underline"
                  >
                    Подробнее о программе.
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 rounded-md p-4">
              <div className="flex items-start gap-3">
                <HiOutlineChatBubbleLeftRight
                  size={20}
                  className="shrink-0 text-gray-400 dark:text-gray-400 mt-0.5"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Есть вопросы?
                  </h3>
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
                    <a href="#" className="text-[#ed3a2d] break-all">
                      mixel@emali.uz
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 rounded-md p-4">
              <div className="flex items-start gap-3 mb-3">
                <HiOutlineTruck
                  size={20}
                  className="shrink-0 text-gray-400 dark:text-gray-400 mt-0.5"
                />
                <p className="text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">Доставка: </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Бесплатно
                  </span>
                </p>
              </div>
              <p className="text-sm font-medium mb-1 text-gray-900 dark:text-white">
                Способ оплаты:
              </p>
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
