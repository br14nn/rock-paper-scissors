"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

import RulesButton from "@/components/custom/RulesButton";
import IconClose from "../images/IconClose";
import BgRules from "../images/BgRules";

const RulesPopupWindow = () => {
  const [showRulesWindow, setShowRulesWindow] = useState<boolean>(false);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    setShowRulesWindow(!showRulesWindow);

    if (showRulesWindow) {
      document.getElementById("body")?.classList.remove("overflow-hidden");
    } else {
      document.getElementById("body")?.classList.add("overflow-hidden");
    }
  };

  return (
    <>
      <RulesButton onClick={handleClick} />

      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {showRulesWindow && (
            <>
              <div
                className="fixed inset-0 hidden h-screen w-screen bg-black/40 xl:block"
                onClick={handleClick}
              />
              <m.div
                className="fixed inset-0 m-auto flex min-h-screen w-full flex-col items-center justify-center gap-28 bg-white p-8 xl:h-fit xl:min-h-0 xl:w-fit xl:gap-14 xl:rounded-md"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0" }}
                exit={{ opacity: 0, y: "100%" }}
                transition={{ type: "tween", duration: 0.25 }}
              >
                <div className="flex w-full flex-row items-center justify-center xl:justify-between">
                  <p className="text-3xl font-bold text-dark-text">RULES</p>
                  <button className="hidden xl:block" onClick={handleClick}>
                    <IconClose />
                  </button>
                </div>
                <BgRules />
                <button className="block xl:hidden" onClick={handleClick}>
                  <IconClose />
                </button>
              </m.div>
            </>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};

export default RulesPopupWindow;
