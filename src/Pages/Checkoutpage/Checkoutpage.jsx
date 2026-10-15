import { useState } from "react";

const orderItems = [
  {
    image: "/imgs/Card1.png",
    name: "Galaxy A03 Core 2/32Gb Black",
    qty: 1,
    price: "1 334 000",
  },
  {
    image: "/imgs/Card1.png",
    name: "Galaxy A03 Core 2/32Gb Black",
    qty: 1,
    price: "1 334 000",
  },
];

const paymentMethods = [
  { id: "payme", label: "Оплата через Payme" },
  { id: "card", label: "Онлайн оплата по карте UZCARD и HUMO" },
  { id: "cash", label: "Наличными при получении" },
  { id: "card-on-delivery", label: "Картой при получении" },
  { id: "installment", label: "Рассрочка" },
];

function CheckoutPage({cart}) {
  const [phone, setPhone] = useState("+998) 99 123 45 67");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("Tojmazarov");
  const [activePayment, setActivePayment] = useState("payme");
  const [city, setCity] = useState("tashkent");

  const inputClass =
    "mt-1 h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#ed3a2d] dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400";

  const headingClass =
    "mb-4 flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white";

  const stepClass =
    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs text-white dark:bg-[#ed3a2d]";

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="container_1200 px-4 py-6">
        <div className="text-sm text-gray-400">
          <a href="/" className="transition-colors hover:text-[#ed3a2d]">
            Главная
          </a>
          <span className="mx-1">›</span>
          Оформить покупку
        </div>

        <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Оформить покупку
        </h1>

        <div className="mt-6 flex items-start gap-10 max-lg:flex-col">
          <div className="flex flex-1 flex-col gap-8 max-lg:w-full">
            <section>
              <h2 className={headingClass}>
                <span className={stepClass}>1</span>
                Ваши данные
              </h2>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-xs text-gray-400">
                    Телефон*
                  </label>

                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`${inputClass} border-[#ed3a2d]`}
                  />
                </div>

                <div className="flex gap-3 max-sm:flex-col">
                  <div className="flex-1">
                    <label className="text-xs text-gray-400">
                      Имя*
                    </label>

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Имя*"
                      className={inputClass}
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-xs text-gray-400">
                      Фамилия*
                    </label>

                    <input
                      type="text"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      placeholder="Фамилия*"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className={headingClass.replace("mb-4 ", "")}>
                  <span className={stepClass}>2</span>
                  Ваш заказ
                </h2>

                <button
                  type="button"
                  className="text-sm text-[#ed3a2d] hover:underline"
                >
                  Изменить
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-lg border border-transparent p-2 transition-colors hover:border-gray-200 dark:hover:border-gray-700 max-sm:gap-2"
                  >
                    <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                      <img
                        src={item.main_image}
                        alt={item.name}
                        className="h-[45px] w-[45px] object-contain"
                      />
                    </div>

                    <p className="flex-1 text-sm text-gray-900 dark:text-white">
                      {item.name}
                    </p>

                    <span className="whitespace-nowrap text-sm text-gray-400">
                      {item.qty} шт
                    </span>

                    <span className="whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {item.price} сум
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={headingClass}>
                <span className={stepClass}>3</span>
                Выберите способ оплаты
              </h2>

              <div className="flex flex-col gap-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-colors ${
                      activePayment === method.id
                        ? "border-[#ed3a2d] bg-red-50 dark:bg-red-950/30"
                        : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={activePayment === method.id}
                      onChange={() => setActivePayment(method.id)}
                      className="sr-only"
                    />

                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                        activePayment === method.id
                          ? "border-[#ed3a2d]"
                          : "border-gray-300 dark:border-gray-500"
                      }`}
                    >
                      {activePayment === method.id && (
                        <span className="h-2 w-2 rounded-full bg-[#ed3a2d]" />
                      )}
                    </span>

                    <span className="text-sm text-gray-900 dark:text-white">
                      {method.label}
                    </span>
                  </label>
                ))}
              </div>
            </section>
            <section>
              <h2 className={headingClass}>
                <span className={stepClass}>4</span>
                Способ получения
              </h2>

              <p className="mb-2 text-xs text-gray-400">
                Ваш город
              </p>

              <label
                className={`flex w-fit cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-colors ${
                  city === "tashkent"
                    ? "border-[#ed3a2d] bg-red-50 dark:bg-red-950/30"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name="city"
                  checked={city === "tashkent"}
                  onChange={() => setCity("tashkent")}
                  className="sr-only"
                />

                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                    city === "tashkent"
                      ? "border-[#ed3a2d]"
                      : "border-gray-300 dark:border-gray-500"
                  }`}
                >
                  {city === "tashkent" && (
                    <span className="h-2 w-2 rounded-full bg-[#ed3a2d]" />
                  )}
                </span>

                <span className="text-sm text-gray-900 dark:text-white">
                  Ташкент
                </span>

                <span className="text-xs text-gray-400">
                  Доставка Fazo
                </span>
              </label>

              <p className="mb-2 mt-6 text-xs text-gray-400">
                Укажите адрес доставки
              </p>

              <div className="flex gap-3 max-sm:flex-col">
                <div className="flex-1">
                  <label className="text-xs text-gray-400">
                    Регион / Область*
                  </label>

                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Выберите
                    </option>
                  </select>
                </div>

                <div className="flex-1">
                  <label className="text-xs text-gray-400">
                    Город / Район*
                  </label>

                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Выберите
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-3 flex gap-3 max-sm:flex-col">
                <div className="flex-[2]">
                  <label className="text-xs text-gray-400">
                    Адрес
                  </label>

                  <input
                    type="text"
                    defaultValue="O'zbekiston, Farg'ona, Sayfiqch ko'chasi, 18/2"
                    className={inputClass}
                  />
                </div>

                <div className="flex-1">
                  <label className="text-xs text-gray-400">
                    Этаж
                  </label>

                  <input type="text" className={inputClass} />
                </div>
              </div>

              <div className="mt-3">
                <label className="text-xs text-gray-400">
                  Дата доставки
                </label>

                <input type="date" className={inputClass} />
              </div>
            </section>
          </div>

          {/* O'ng tomon — buyurtma xulosasi */}
          <aside className="sticky top-6 w-[300px] shrink-0 max-lg:static max-lg:w-full">
            <div className="rounded-lg border border-gray-200 bg-white p-5 transition-colors dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Ваши данные
              </h3>

              <div className="mb-2 flex justify-between gap-3 text-sm">
                <span className="text-gray-400">
                  {orderItems.length} товара на сумму
                </span>

                <span className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  5 262 000 сум
                </span>
              </div>

              <div className="mb-4 flex justify-between border-b border-gray-100 pb-4 text-sm dark:border-gray-700">
                <span className="text-gray-400">
                  Доставка
                </span>

                <span className="font-medium text-gray-900 dark:text-white">
                  бесплатно
                </span>
              </div>

              <div className="mb-4 flex justify-between gap-3 text-sm">
                <span className="text-gray-400">
                  Всего к оплате
                </span>

                <span className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                  5 262 000 сум
                </span>
              </div>

              <button
                type="button"
                className="h-11 w-full cursor-pointer rounded-md bg-[#ed3a2d] text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Оформить покупку
              </button>

              <p className="mt-3 text-[11px] leading-relaxed text-gray-400">
                Подтверждая заказ, я принимаю условия{" "}
                <a
                  href="#"
                  className="text-[#ed3a2d] hover:underline"
                >
                  Пользовательского соглашения
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;