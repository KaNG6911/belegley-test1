import { useNavigate } from "react-router-dom";
import { FaGift, FaTicketAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full">

        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-black text-pink-500">
            Belegley
          </h1>

          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
            Анимейшн болон интерактив эффекттэйгээр гайхалтай мөчүүдийг бүтээцгээе!
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl p-6 sm:p-8 border border-pink-100">

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 leading-tight">
            Choose what you want to send
          </h2>

          <p className="text-center text-gray-500 mt-3 mb-8 text-sm sm:text-base">
            Баярт мөчүүдийг илүү онцгой болгох боломжтой!
          </p>

          <div className="space-y-5">

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/invite")}
              className="group w-full rounded-3xl bg-gradient-to-r from-pink-400 to-pink-500 p-[2px]"
            >
              <div className="rounded-3xl bg-white px-4 sm:px-6 py-5 sm:py-6 flex items-center gap-4 sm:gap-5">

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 text-xl sm:text-2xl">
                  <FaGift />
                </div>

                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    Урилга илгээх
                  </h3>

                  <h6 className="text-gray-500 mt-1 text-xs sm:text-sm leading-relaxed">
                    Хурим, төрсөн өдөр, баяр ёслолын урилга
                  </h6>
                </div>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full rounded-3xl bg-gradient-to-r from-purple-400 to-purple-500 p-[2px]"
            >
              <div className="rounded-3xl bg-white px-4 sm:px-6 py-5 sm:py-6 flex items-center gap-4 sm:gap-5">

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-500 text-xl sm:text-2xl">
                  <FaTicketAlt />
                </div>

                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    Купон илгээх
                  </h3>

                  <h6 className="text-gray-500 mt-1 text-xs sm:text-sm leading-relaxed">
                    Бэлгийн карт, хямдралын купон, тусгай санал
                  </h6>
                </div>
              </div>
            </motion.button>

          </div>

        </div>
      </div>
    </div>
  );
}