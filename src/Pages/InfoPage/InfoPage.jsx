import { FaAngleRight } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { IoCashOutline } from "react-icons/io5";
import {
  LuBanknote,
  LuMessageCircle,
  LuMonitorSmartphone,
  LuNotepadText,
  LuShieldCheck,
  LuStar,
  LuTruck,
  LuWallet,
} from "react-icons/lu";

function InfoPage() {
  return (
    <>
      <div className="Info bg-white dark:bg-gray-900">
        <div className="container_1200 pb-30">
          <div className="flex items-center gap-2 text-gray-400 py-[27px]">
            <div className="flex items-center gap-1">
              <a href="">Главная</a>
              <span>
                <FaAngleRight />
              </span>
            </div>
            <a href="">Покупка в рассрочку</a>
          </div>

          <div className="flex items-start">
            <div className="left w-[358px] h-[1000px] bg-[#f7f7f7] dark:bg-gray-800">
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <IoCashOutline color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">Покупка в рассрочку</h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Удобная онлайн рассрочка на товары бытовой техники в Top -IT
                  </p>
                </div>
              </div>
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <LuWallet color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">
                    Способы оплаты товара
                  </h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Платите удобным для вас способом: в ближайшем магазине,
                    Сlick, Payme.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <LuShieldCheck color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">Гарантия на товары</h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Платите удобным для вас способом: в ближайшем магазине,
                    Сlick, Payme.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <GrMoney color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">Бонусная система</h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Бонусная система
                  </p>
                </div>
              </div>
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <LuTruck color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">
                    {" "}
                    Бесплатная доставка{" "}
                  </h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Условия доставки товаров в Top-IT
                  </p>
                </div>
              </div>{" "}
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <LuMessageCircle color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">Бонусная система</h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Бонусная система
                  </p>
                </div>
              </div>{" "}
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <LuNotepadText color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">Бонусная система</h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Бонусная система
                  </p>
                </div>
              </div>
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <LuStar color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">Бонусная система</h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Бонусная система
                  </p>
                </div>
              </div>
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <LuMonitorSmartphone color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">Бонусная система</h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Бонусная система
                  </p>
                </div>
              </div>
              <div className="flex gap-2 px-[31px] py-[19px]">
                <div>
                  <LuStar color="#ED3729" size={30} />
                </div>
                <div>
                  <h1 className="text-[16px] font-bold text-black dark:text-white">Бонусная система</h1>
                  <p className="w-[191px] text-[13px] text-gray-500 dark:text-gray-400">
                    Бонусная система
                  </p>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="right w-[750px] ml-[40px]">
                <h1 className="text-[26px] font-bold mb-[15px] text-black dark:text-white">
                  Как купить в рассрочку в Top-IT?
                </h1>
                <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-[1.8] mb-[25px]">
                  Давно выяснено, что при оценке дизайна и композиции читаемый
                  текст мешает сосредоточиться. Lorem Ipsum используют потому,
                  что тот обеспечивает более или менее стандартное заполнение
                  шаблона, а также реальное распределение букв и пробелов в
                  абзацах, которое не получается при простой публикации.
                </p>
                <h2 className="text-[23px] font-bold mb-[15px] text-black dark:text-white">
                  Вы можете приобрести товар несколькими способами:
                </h2>

                <ol className="list-decimal pl-[20px] text-[14px] text-gray-500 dark:text-gray-400 leading-[2] mb-[25px]">
                  <li>
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться.
                  </li>
                  <li>
                    Lorem Ipsum используют потому, что тот обеспечивает более
                    или менее стандартное заполнение шаблона.
                  </li>
                </ol>

                <h2 className="text-[23px] font-bold mb-[15px] text-black dark:text-white">
                  Для покупки онлайн вам потребуется:
                </h2>

                <ol className="list-decimal pl-[20px] text-[14px] text-gray-500 dark:text-gray-400 leading-[2] mb-[25px]">
                  <li>
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться.
                  </li>
                  <li>
                    Lorem Ipsum используют потому, что тот обеспечивает более
                    или менее стандартное заполнение шаблона.
                  </li>
                  <li>Оценке дизайна и композиции читаемый текст.</li>
                  <li>Потому, что тот обеспечивает более или менее.</li>
                </ol>

                <h2 className="text-[23px] font-bold mb-[15px] text-black dark:text-white">
                  Кому выдается рассрочка?
                </h2>

                <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-[1.8] mb-[25px]">
                  Также реальное распределение букв и пробелов в абзацах,
                  которое не получается при простой публикации. Здесь ваш
                  текст... Здесь ваш текст... Многие программы электронной
                  вёрстки и редакторы HTML используют.
                </p>

                <h2 className="text-[23px] font-bold mb-[15px] text-black dark:text-white">
                  До скольки работает Call-центр?
                </h2>

                <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-[1.8]">
                  Режим работы контакт-центра: каждый день с 9:00 до 21:00.
                </p>

                <p className="text-[14px] text-gray-500 dark:text-gray-400 mt-[10px]">
                  Будем рады ответить на ваши вопросы по телефону{" "}
                  <span className="text-blue-500">+998 91 123 45 67</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPage;