import { FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Componets/ProductCard/ProductCard";
import CardSkeleton from "../../Componets/CardSelekton/CardSelekton";

function Wishlist({
  loading,
  toggleWishlist,
  wishlist,
  addToCart,
  toggleCompare,
}) {
  return (

<>
      <div className="Wishlist bg-white dark:bg-gray-900">
        <div className="container_1200 px-4 md:px-0">
          <div className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-400 md:py-[27px] md:text-base">
            <div className="flex items-center gap-1">
              <a href="/">Главная</a>
              <span>
                <FaAngleRight />
              </span>
            </div>
            <a href="">Избранное</a>
          </div>

          <h1 className="text-lg text-black dark:text-white md:text-[20px]">
            Избранное
          </h1>

          <div className="grid grid-cols-2 gap-3 py-4 sm:grid-cols-3 sm:gap-4 md:py-5 lg:grid-cols-4 xl:grid-cols-5">
            {loading ? (
              Array.from({ length: 10 }).map((_, i) => <CardSkeleton key={i} />)
            ) : wishlist.length === 0 ? (
              <p className="col-span-full py-10 text-center text-gray-400 dark:text-gray-300">
                В избранном пока ничего нет
              </p>
            ) : (
              wishlist.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  toggleCompare={toggleCompare}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  addToCart={addToCart}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;