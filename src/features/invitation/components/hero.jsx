import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useConfig } from "../hooks/use-config";
import { getGuestName } from "@/lib/invitation-storage";

const FloatingPetals = () => {
  const [petals] = useState(() =>
    [...Array(24)].map((_, i) => ({
      size: Math.floor(Math.random() * 12) + 10,
      color:
        i % 5 === 0
          ? "rgba(126, 104, 61, 0.62)"
          : i % 5 === 1
            ? "rgba(166, 136, 75, 0.58)"
            : i % 5 === 2
              ? "rgba(244, 207, 174, 0.72)"
              : i % 5 === 3
                ? "rgba(255, 232, 137, 0.7)"
                : "rgba(188, 165, 118, 0.55)",
      initialX:
        i % 2 === 0
          ? Math.random() * 38 + 2
          : Math.random() * 38 + 60,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      drift: Math.random() * 120 - 60,
      isLeaf: true,
      isHeart: i % 6 === 0,
    })),
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0.6,
            left: `${petal.initialX}%`,
            bottom: "-10%",
          }}
          animate={{
            opacity: [0, 0.75, 0.65, 0],
            scale: [0.6, 1, 0.9, 0.7],
            bottom: ["-10%", "110%"],
            x: [0, petal.drift, -petal.drift * 0.8, petal.drift * 0.35, 0],
            rotate: [
              petal.rotation,
              petal.rotation + 80,
              petal.rotation - 45,
              petal.rotation + 180,
            ],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{
            width: `${petal.size * (petal.isHeart ? 1.65 : 1)}px`,
            height: `${petal.size * (petal.isHeart ? 1.65 : 2.15)}px`,
          }}
        >
          {petal.isHeart ? (
            <Heart
              className="h-full w-full text-amber-100/55"
              fill="currentColor"
            />
          ) : (
            <span
              className="block h-full w-full"
              style={{
                background: `linear-gradient(135deg, ${petal.color}, rgba(255, 247, 220, 0.42))`,
                borderRadius: "90% 0 90% 0",
                boxShadow: "inset 1px 0 rgba(122, 96, 68, 0.18)",
                transformOrigin: "50% 80%",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default function Hero() {
  const config = useConfig();
  const [guestName, setGuestName] = useState("");
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateCountdown = useCallback(() => {
    if (!config || !config.date) return;

    const timeStr = config.time || "18:00";
    const targetDate = new Date(`${config.date}T${timeStr}`);
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      setTimeTogether({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Using months calculation for better readability
    const months = Math.floor(days / 30);
    const actualDays = days % 30;

    setTimeTogether({
      years: 0,
      months,
      days: actualDays,
      hours,
      minutes,
      seconds,
    });
  }, [config]);

  useEffect(() => {
    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, [calculateCountdown]);

  useEffect(() => {
    const storedGuestName = getGuestName();
    if (storedGuestName) {
      setGuestName(storedGuestName);
    }
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-center relative overflow-hidden bg-transparent"
      >
        {/* Flipped Flower Decoration at Top */}
        <div className="absolute top-0 left-0 w-full h-40 sm:h-56 z-0 pointer-events-none opacity-90 overflow-hidden flex items-start justify-center">
          <img
            src="/images/image-from-rawpixel-id-16934407-png.png"
            alt=""
            className="w-full h-full object-cover object-top transform scale-y-[-1] scale-110"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 sm:space-y-10 relative z-10 w-full max-w-lg mx-auto"
        >
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="px-6 py-2 text-xs sm:text-sm tracking-widest uppercase bg-amber-50 text-amber-900 rounded-full border border-amber-100 shadow-sm">
              Guarda esta Fecha Importante
            </span>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <div className="text-gray-600 font-serif italic text-xl sm:text-2xl tracking-wide max-w-md mx-auto leading-relaxed">
                <span>{timeTogether.months === 1 ? "Falta " : "Faltan "}</span>
                {timeTogether.months > 0 && (
                  <span>
                    {timeTogether.months}{" "}
                    {timeTogether.months === 1 ? "mes" : "meses"},{" "}
                  </span>
                )}
                <span>
                  {timeTogether.days}{" "}
                  {timeTogether.days === 1 ? "dia" : "dias"}
                </span>
                {timeTogether.hours > 0 ? (
                  <>
                    <span>, {timeTogether.hours} hr </span>
                    <span className="text-gray-400 mx-1">y </span>
                  </>
                ) : (
                  <span className="text-gray-400 mx-1"> y </span>
                )}
                <span className="inline-block min-w-[3ch] text-amber-950 font-medium">
                  {timeTogether.minutes} min
                </span>
              </div>
              <p className="text-amber-950 font-serif italic text-3xl sm:text-4xl tracking-widest uppercase">
                Nos Casamos
              </p>
              <div className="w-16 h-px bg-amber-200/50 mx-auto mt-4" />
            </motion.div>

            <div className="relative mt-2 h-[22rem] flex flex-col items-center justify-center">
              <img
                src="/images/pngwing.com (7).png"
                alt=""
                className="absolute left-1/2 top-1/2 z-0 h-[18.5rem] w-[18.5rem] -translate-x-1/2 -translate-y-[48%] object-contain opacity-95 sm:h-[21.5rem] sm:w-[21.5rem]"
                draggable="false"
              />
              <motion.img
                src="/images/cj-letters.png"
                alt="CJ"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute left-[19%] top-[18%] z-10 h-48 w-60 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_4px_6px_rgba(68,50,32,0.18)] sm:h-56 sm:w-72"
                draggable="false"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="-mt-6 space-y-5"
          >
            {/* Compact Date Layout */}
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="relative flex items-center justify-center px-6 py-3">
                <p className="relative z-10 font-serif text-lg sm:text-xl font-bold uppercase tracking-[0.24em] text-[#4d3927] drop-shadow-[0_1px_1px_rgba(255,248,235,0.75)]">
                Carolina y Juan Cruz
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="flex w-full max-w-[315px] items-center justify-center gap-4 px-3"
              >
                <span className="h-px flex-1 bg-[#9a8465]/45" />
                <span className="font-serif text-base sm:text-lg font-semibold tracking-[0.36em] text-[#4d3927] drop-shadow-[0_1px_1px_rgba(255,248,235,0.75)]">
                  {new Date(config.date + "T12:00:00")
                    .toLocaleDateString("es-ES", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })
                    .replaceAll("/", " • ")}
                </span>
                <span className="h-px flex-1 bg-[#9a8465]/45" />
              </motion.div>
            </div>

            {/* Guest Welcome Area */}
            <div className="pt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="inline-block px-10 py-8 rounded-3xl bg-amber-50/50 border border-amber-100 shadow-sm"
              >
                <p className="text-gray-500 font-serif italic text-sm mb-3">
                  Estimado/a
                </p>
                <p className="text-3xl sm:text-4xl font-serif text-amber-950 font-bold">
                  {guestName || "Invitado Especial"}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="pt-8 relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                className="w-12 h-12 text-amber-800 mx-auto"
                fill="currentColor"
              />
            </motion.div>
            <div className="relative -mt-4 h-72 w-full overflow-visible">
              <img
                src="/images/pngwing.com (4).png"
                alt=""
                className="absolute left-1/2 top-0 h-72 w-[42rem] max-w-none -translate-x-1/2 object-contain opacity-70"
                draggable="false"
              />
            </div>
          </div>
        </motion.div>

        {/* Floating petals background layer */}
        <FloatingPetals />
      </section>
    </>
  );
}



