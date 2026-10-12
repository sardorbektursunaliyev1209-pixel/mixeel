import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoHeartOutline, IoClose } from "react-icons/io5";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

const cardTypes = [
  { id: "start", name: "Start", color: "#3b82f6" },
  { id: "member", name: "Member", color: "#f97316" },
  { id: "classic", name: "Classic", color: "#a855f7" },
  { id: "silver", name: "Silver", color: "#9ca3af" },
  { id: "gold", name: "Gold", color: "#eab308" },
  { id: "platinum", name: "Platinum", color: "#eab308" },
];

const providers = [
  { id: "mixel", name: "MIXEL.UZ", price: "2 042 417" },
  { id: "paymart", name: "Paymart", price: "2 042 417" },
  { id: "7market", name: "7 MARKET", price: "2 042 417" },
];

function InstallmentModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [activeProvider, setActiveProvider] = useState("");
  const [activeCard, setActiveCard] = useState("member");
const totalPrice = Number(product.price) * quantity;
  if (!product) {
    return null;
  }

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-[1100px] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">Купить в рассрочку</h1>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
            <IoClose size={24} />
          </button>
        </div>
        <div className="flex justify-between mt-[53px]">
          <div className="flex gap-20">
            <img src={product.main_image} alt={product.name} className="w-[140px] object-contain" />
            <div>
              <p className="text-gray-500">{product.name}</p>
              <h1 className="mt-4 price">{totalPrice} cум</h1>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 border border-gray-300 rounded-[5px] flex items-center justify-center cursor-pointer"
              >
                <span>-</span>
              </button>

              <button className="w-8 h-8 border border-gray-300 rounded-[5px] flex items-center justify-center">
                <span className="text-red-500">{quantity}</span>
              </button>

              <button
                onClick={() =>{
                  return setQuantity((q) => q + 1)
                
                }
                }
                className="w-8 h-8 border border-gray-300 rounded-[5px] flex items-center justify-center cursor-pointer"
              >
                <span>+</span>
              </button>
            </div>

            <div className="flex justify-end mt-4 items-center gap-2">
              <IoHeartOutline size={22} color="gray" className="cursor-pointer" />
              <RiDeleteBin6Line size={22} color="gray" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className={`border rounded-lg transition-colors ${
                activeProvider === provider.id ? "border-[#ed3a2d]" : "border-gray-200"
              }`}
            >
              <div
                onClick={() =>
                  setActiveProvider(activeProvider === provider.id ? null : provider.id)
                }
                className="flex items-center justify-between px-4 py-3 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      activeProvider === provider.id ? "border-[#ed3a2d]" : "border-gray-300"
                    }`}
                  >
                    {activeProvider === provider.id && (
                      <span className="w-2 h-2 rounded-full bg-[#ed3a2d]" />
                    )}
                  </span>
                  <span className="font-bold">{provider.name}</span>
                  <span className="text-xs text-gray-400 ml-4 leading-tight">
                    Срок рассрочки <br /> 12 месяцев
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-right leading-tight">
                    {provider.price} сум / <br /> месяц
                  </span>
                  {activeProvider === provider.id ? (
                    <GoChevronUp size={20} />
                  ) : (
                    <GoChevronDown size={20} />
                  )}
                </div>
              </div>

              {provider.id === "mixel" && activeProvider === "mixel" && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mt-3">
                    При первой покупке товара, каждый клиент получает карту Start
                  </p>

                  <p className="text-sm font-medium mt-4 mb-2">По карте</p>

                  {cardTypes.map((c) => (
                    <div key={c.id} className="border-b border-gray-100 last:border-b-0">
                      <div
                        onClick={() => setActiveCard(activeCard === c.id ? null : c.id)}
                        className="flex items-center justify-between py-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-6 h-4 rounded shrink-0"
                            style={{ backgroundColor: c.color }}
                          />
                          <span className="text-sm">{c.name}</span>
                        </div>
                        {activeCard === c.id ? (
                          <GoChevronUp size={18} className="text-gray-400" />
                        ) : (
                          <GoChevronDown size={18} className="text-gray-400" />
                        )}
                      </div>

                      {activeCard === c.id && c.id === "member" && (
                        <div className="pb-3 flex flex-col gap-2 text-xs">
                          <div className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                            <span className="text-gray-400">Предоплата</span>
                            <span>от 0%</span>
                          </div>
                          <div className="flex justify-between px-3 py-2">
                            <span className="text-gray-400">Кешбэк</span>
                            <span>1%</span>
                          </div>
                          <div className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                            <span className="text-gray-400">Максимальная сумма задолженности</span>
                            <span>15 000 000 сум</span>
                          </div>
                          <div className="flex justify-between px-3 py-2">
                            <span className="text-gray-400">Срок перехода на карту</span>
                            <span>4 месяца</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pastki tugmalar */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-6 h-11 border border-[#ed3a2d] text-[#ed3a2d] rounded-md text-sm font-medium cursor-pointer hover:bg-red-50"
          >
            Продолжить покупки
          </button>
          <Link to={"/Checkout"}>
            <button className="px-6 h-11 bg-[#ed3a2d] text-white rounded-md text-sm font-medium cursor-pointer hover:opacity-90">
              Оформить покупку
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}
export default InstallmentModal;