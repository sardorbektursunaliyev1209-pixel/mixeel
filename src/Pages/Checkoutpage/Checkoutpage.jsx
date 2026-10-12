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

function CheckoutPage() {
  const [phone, setPhone] = useState("+998) 99 123 45 67");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("Tojmazarov");
  const [activePayment, setActivePayment] = useState("payme");
  const [city, setCity] = useState("tashkent");

  return (
    <div className="container_1200 py-6">
      <div className="text-sm text-gray-400">
        <a href="/">Главная</a> <span className="mx-1">›</span> Оформить покупку
      </div>

      <h1 className="text-2xl font-semibold mt-4">Оформить покупку</h1>

      <div className="flex gap-10 mt-6 items-start">
        {/* Chap — asosiy forma */}
        <div className="flex-1 flex flex-col gap-8">
          {/* 1. Ваши данные */}
          <div>
            <h2 className="flex items-center gap-2 text-base font-medium mb-4">
              <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
                1
              </span>
              Ваши данные
            </h2>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs text-gray-400">Телефон*</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3 border border-[#ed3a2d] rounded-md text-sm outline-none mt-1"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-xs text-gray-400">Имя*</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя*"
                    className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none mt-1 focus:border-[#ed3a2d]"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-gray-400">Фамилия*</label>
                  <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none mt-1 focus:border-[#ed3a2d]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Ваш заказ */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="flex items-center gap-2 text-base font-medium">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
                  2
                </span>
                Ваш заказ
              </h2>
              <button className="text-sm text-[#ed3a2d] hover:underline">
                Изменить
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {orderItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] flex items-center justify-center border border-gray-200 rounded-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[45px] h-[45px] object-contain"
                    />
                  </div>
                  <p className="flex-1 text-sm">{item.name}</p>
                  <span className="text-sm text-gray-400">{item.qty} шт</span>
                  <span className="text-sm font-medium">{item.price} сум</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Способ оплаты */}
          <div>
            <h2 className="flex items-center gap-2 text-base font-medium mb-4">
              <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
                3
              </span>
              Выберите способ оплаты
            </h2>
            <div className="flex flex-col gap-3">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 border rounded-md px-4 py-3 cursor-pointer transition-colors ${
                    activePayment === method.id
                      ? "border-[#ed3a2d]"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={activePayment === method.id}
                    onChange={() => setActivePayment(method.id)}
                    className="peer hidden"
                  />
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      activePayment === method.id
                        ? "border-[#ed3a2d]"
                        : "border-gray-300"
                    }`}
                  >
                    {activePayment === method.id && (
                      <span className="w-2 h-2 rounded-full bg-[#ed3a2d]" />
                    )}
                  </span>
                  <span className="text-sm">{method.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 4. Способ получения */}
          <div>
            <h2 className="flex items-center gap-2 text-base font-medium mb-4">
              <span className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
                4
              </span>
              Способ получения
            </h2>

            <p className="text-xs text-gray-400 mb-2">Ваш город</p>
            <label
              className={`flex items-center gap-3 border rounded-md px-4 py-3 cursor-pointer w-fit ${
                city === "tashkent" ? "border-[#ed3a2d]" : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="city"
                checked={city === "tashkent"}
                onChange={() => setCity("tashkent")}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  city === "tashkent" ? "border-[#ed3a2d]" : "border-gray-300"
                }`}
              >
                {city === "tashkent" && (
                  <span className="w-2 h-2 rounded-full bg-[#ed3a2d]" />
                )}
              </span>
              <span className="text-sm">Ташкент</span>
              <span className="text-xs text-gray-400">Доставка Fazo</span>
            </label>

            <p className="text-xs text-gray-400 mt-6 mb-2">
              Укажите адрес доставки
            </p>
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-xs text-gray-400">
                  Регион / Область*
                </label>
                <select className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none mt-1">
                  <option>Выберите</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-400">Город / Район*</label>
                <select className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none mt-1">
                  <option>Выберите</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-3">
              <div className="flex-[2]">
                <label className="text-xs text-gray-400">Адрес</label>
                <input
                  type="text"
                  defaultValue="O'zbekiston, Farg'ona, Sayfiqch ko'chasi, 18/2"
                  className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none mt-1 focus:border-[#ed3a2d]"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-400">Этаж</label>
                <input
                  type="text"
                  className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none mt-1 focus:border-[#ed3a2d]"
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="text-xs text-gray-400">Дата доставки</label>
              <input
                type="date"
                className="w-full h-11 px-3 border border-gray-300 rounded-md text-sm outline-none mt-1 focus:border-[#ed3a2d]"
              />
            </div>
          </div>
        </div>

        {/* O'ng — sticky xulosa */}
        <div className="w-[300px] shrink-0 sticky top-6">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm font-medium mb-3">Ваши данные</h3>

            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">
                {orderItems.length} товара на сумму
              </span>
              <span className="font-medium">5 262 000 сум</span>
            </div>
            <div className="flex justify-between text-sm mb-4 pb-4 border-b border-gray-100">
              <span className="text-gray-400">Доставка</span>
              <span className="font-medium">бесплатно</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-400">Всего к оплате</span>
              <span className="font-bold">5 262 000 сум</span>
            </div>

            <button className="w-full h-11 bg-[#ed3a2d] text-white text-sm font-medium rounded-md cursor-pointer hover:opacity-90 transition-opacity">
              Оформить покупку
            </button>

            <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
              Подтверждая заказ, я принимаю условия{" "}
              <a href="#" className="text-[#ed3a2d] hover:underline">
                Пользовательского соглашения
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
