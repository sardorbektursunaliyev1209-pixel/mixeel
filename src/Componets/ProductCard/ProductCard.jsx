import { MdShoppingCart, MdFavorite } from "react-icons/md";
import { LuScale } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../Sevices/Token";

const card =
  "group relative flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-gray-700 bg-white text-center transition-all duration-300 dark:bg-gray-900 before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[3px] before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-[#E8382D] before:to-orange-400 before:transition-transform before:duration-500 md:hover:border-[#E8382D]/40 md:hover:shadow-[0_22px_44px_-14px_rgba(232,56,45,0.45)] md:hover:before:scale-x-100 md:motion-safe:hover:-translate-y-1.5";

export default function ProductCard({
  product,
  wishlist,
  toggleWishlist,
  toggleCompare,
  addToCart,
}) {
  const navigate = useNavigate();
  const isLike = wishlist?.some((item) => item.id === product.id);

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

  return (
    <article className={card}>
      <Link to={`/deteil/${product.id}`} className="contents">
        <div className="mx-2 mt-2 flex h-[110px] items-center justify-center rounded-lg transition-colors duration-300 dark:bg-white sm:mx-3 sm:mt-3 sm:h-[132px] md:group-hover:bg-red-50">
          <img
            src={product.main_image}
            alt={product.name}
            loading="lazy"
            className="h-[90px] w-full object-contain mix-blend-multiply transition-transform duration-500 sm:h-[110px] md:motion-safe:group-hover:scale-110"
          />
        </div>

        <p className="mt-4 px-2 text-sm font-semibold text-[#E8382D] dark:text-red-600 sm:mt-6 sm:text-[15px]">
          {product.price} сум/мес
        </p>

        {product.oldPrice && (
          <p className="mt-1 text-[12px] text-neutral-400">
            {product.oldPrice}
          </p>
        )}

        <h3 className="mt-3 line-clamp-2 min-h-[44px] px-2 text-[12px] font-bold leading-[22px] text-black dark:text-white sm:mt-4 sm:text-[13px]">
          {product.name}
        </h3>
      </Link>

      <div className="mt-auto flex border-t border-neutral-200 dark:border-gray-700">
        <button
          onClick={handleCart}
          type="button"
          aria-label="В корзину"
          className="flex flex-1 justify-center py-3 text-neutral-400 transition-colors duration-300 active:scale-95 sm:py-4 md:group-hover:bg-[#E8382D] md:group-hover:text-white"
        >
          <MdShoppingCart className="h-6 w-6 dark:text-white" />
        </button>

        <button
          onClick={handleWishlist}
          type="button"
          aria-label="В избранное"
          className="flex flex-1 justify-center border-x border-neutral-200 py-3 text-neutral-400 transition active:scale-95 dark:border-gray-700 sm:py-4 md:hover:bg-red-50 md:hover:text-[#E8382D] md:dark:hover:bg-gray-800"
        >
          <MdFavorite
            className={`h-6 w-6 ${isLike ? "text-[#E8382D]" : "dark:text-white"}`}
          />
        </button>

        <button
          onClick={handleCompare}
          type="button"
          aria-label="Сравнить"
          className="flex flex-1 justify-center py-3 text-neutral-400 transition active:scale-95 sm:py-4 md:hover:bg-neutral-100 md:hover:text-neutral-900 md:dark:hover:bg-gray-800"
        >
          <LuScale className="h-6 w-6 dark:text-white" />
        </button>
      </div>
    </article>
  );
}