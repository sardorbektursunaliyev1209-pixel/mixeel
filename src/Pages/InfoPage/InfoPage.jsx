import { FaAngleRight } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { IoCashOutline } from "react-icons/io5";
import {
  LuMessageCircle,
  LuMonitorSmartphone,
  LuNotepadText,
  LuShieldCheck,
  LuStar,
  LuTruck,
  LuWallet,
} from "react-icons/lu";

const menuItems = [
  {
    icon: IoCashOutline,
    title: "Покупка в рассрочку",
    text: "Удобная онлайн рассрочка на товары бытовой техники в Top -IT",
  },
  {
    icon: LuWallet,
    title: "Способы оплаты товара",
    text: "Платите удобным для вас способом: в ближайшем магазине, Сlick, Payme.",
  },
  {
    icon: LuShieldCheck,
    title: "Гарантия на товары",
    text: "Платите удобным для вас способом: в ближайшем магазине, Сlick, Payme.",
  },
  { icon: GrMoney, title: "Бонусная система", text: "Бонусная система" },
  {
    icon: LuTruck,
    title: "Бесплатная доставка",
    text: "Условия доставки товаров в Top-IT",
  },
  { icon: LuMessageCircle, title: "Бонусная система", text: "Бонусная система" },
  { icon: LuNotepadText, title: "Бонусная система", text: "Бонусная система" },
  { icon: LuStar, title: "Бонусная система", text: "Бонусная система" },
  {
    icon: LuMonitorSmartphone,
    title: "Бонусная система",
    text: "Бонусная система",
  },
  { icon: LuStar, title: "Бонусная система", text: "Бонусная система" },
];

function InfoPage() {
  return (
    <>
      <div className="Info bg-white dark:bg-gray-900">
        <div className="container_1200 px-4 pb-10 md:px-0 md:pb-30">
          <div className="flex flex-wrap items-center gap-2 py-4 text-gray-400 md:py-[27px]">
            <div className="flex items-center gap-1">
              <a href="">Главная</a>
              <span>
                <FaAngleRight />
              </span>
            </div>
            <a href="">Покупка в рассрочку</a>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-0">
            {/* Chap menyu */}
            <div className="grid w-full grid-cols-1 bg-[#f7f7f7] dark:bg-gray-800 sm:grid-cols-2 lg:block lg:w-[358px] lg:shrink-0">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-2 px-4 py-4 sm:px-6 lg:px-[31px] lg:py-[19px]"
                  >
                    <div className="shrink-0">
                      <Icon color="#ED3729" size={30} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h1 className="text-[16px] font-bold text-black dark:text-white">
                        {item.title}
                      </h1>
                      <p className="text-[13px] text-gray-500 dark:text-gray-400 lg:max-w-[191px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* O'ng kontent */}
            <div className="min-w-0 w-full lg:ml-[40px] lg:w-[750px]">
              <h1 className="mb-[15px] text-xl font-bold text-black dark:text-white md:text-[26px]">
                Как купить в рассрочку в Top-IT?
              </h1>
              <p className="mb-[25px] text-[14px] leading-[1.8] text-gray-500 dark:text-gray-400">
                Давно выяснено, что при оценке дизайна и композиции читаемый
                текст мешает сосредоточиться. Lorem Ipsum используют потому, что
                тот обеспечивает более или менее стандартное заполнение шаблона,
                а также реальное распределение букв и пробелов в абзацах,
                которое не получается при простой публикации.
              </p>

              <h2 className="mb-[15px] text-lg font-bold text-black dark:text-white md:text-[23px]">
                Вы можете приобрести товар несколькими способами:
              </h2>

              <ol className="mb-[25px] list-decimal pl-[20px] text-[14px] leading-[2] text-gray-500 dark:text-gray-400">
                <li>
                  Давно выяснено, что при оценке дизайна и композиции читаемый
                  текст мешает сосредоточиться.
                </li>
                <li>
                  Lorem Ipsum используют потому, что тот обеспечивает более или
                  менее стандартное заполнение шаблона.
                </li>
              </ol>

              <h2 className="mb-[15px] text-lg font-bold text-black dark:text-white md:text-[23px]">
                Для покупки онлайн вам потребуется:
              </h2>

              <ol className="mb-[25px] list-decimal pl-[20px] text-[14px] leading-[2] text-gray-500 dark:text-gray-400">
                <li>
                  Давно выяснено, что при оценке дизайна и композиции читаемый
                  текст мешает сосредоточиться.
                </li>
                <li>
                  Lorem Ipsum используют потому, что тот обеспечивает более или
                  менее стандартное заполнение шаблона.
                </li>
                <li>Оценке дизайна и композиции читаемый текст.</li>
                <li>Потому, что тот обеспечивает более или менее.</li>
              </ol>

              <h2 className="mb-[15px] text-lg font-bold text-black dark:text-white md:text-[23px]">
                Кому выдается рассрочка?
              </h2>

              <p className="mb-[25px] text-[14px] leading-[1.8] text-gray-500 dark:text-gray-400">
                Также реальное распределение букв и пробелов в абзацах, которое
                не получается при простой публикации. Здесь ваш текст... Здесь
                ваш текст... Многие программы электронной вёрстки и редакторы
                HTML используют.
              </p>

              <h2 className="mb-[15px] text-lg font-bold text-black dark:text-white md:text-[23px]">
                До скольки работает Call-центр?
              </h2>

              <p className="text-[14px] leading-[1.8] text-gray-500 dark:text-gray-400">
                Режим работы контакт-центра: каждый день с 9:00 до 21:00.
              </p>

              <p className="mt-[10px] text-[14px] text-gray-500 dark:text-gray-400">
                Будем рады ответить на ваши вопросы по телефону{" "}
                <a href="tel:+998911234567" className="text-blue-500">
                  +998 91 123 45 67
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPage;