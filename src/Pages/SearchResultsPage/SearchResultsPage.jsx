import ProductCard from "../../Componets/ProductCard/ProductCard";

function SearchResultsPage({
  searchResults,
  wishlist,
  toggleWishlist,
  addToCart,
  toggleCompare,
}) {
  return (
    <div className="dark:bg-gray-900">
      <div className="container_1200 px-4 pb-10 md:px-0 md:pb-[120px]">
        <div className="py-4 text-sm text-gray-400 dark:text-gray-300 md:py-[26px]">
          Главная
          <span className="mx-1">›</span>
          Результаты поиска
        </div>

        {searchResults?.length === 0 ? (
          <p className="py-10 text-center text-gray-400 dark:text-gray-300">
            Ничего не найдено
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {searchResults?.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                toggleCompare={toggleCompare}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;