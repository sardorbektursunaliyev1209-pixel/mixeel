import CardSkeleton from "../../Componets/CardSelekton/CardSelekton";
import ProductCard from "../../Componets/ProductCard/ProductCard";

function Cart({
  cart,
  wishlist,
  toggleWishlist,
  addToCart,
  loading,
  toggleCompare,
}) {
  return (
    <div className="container_1200 px-4 md:px-0 py-4 md:py-6 dark:bg-gray-900">
      <h1 className="text-xl md:text-2xl dark:text-white">Корзина</h1>

      <div className="grid  grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 md:py-5">
        {loading ? (
          Array.from({ length: 10 }).map((_, i) => <CardSkeleton key={i} />)
        ) : cart.length === 0 ? (
          <p className="col-span-full text-center text-gray-400 dark:text-gray-400 py-10">
            Корзина пуста
          </p>
        ) : (
          cart.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
              cart={cart}
              toggleCompare={toggleCompare}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;