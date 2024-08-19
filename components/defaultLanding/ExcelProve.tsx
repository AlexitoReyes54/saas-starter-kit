import React from "react";
import CTAButton from "./CTAButton";
import { useTranslation } from "next-i18next";

function ExcelProve() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white dark:bg-gray-900">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
              alt="dashboard image"
            />
            <img
              className="w-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {t("excelProve-title")}
              </h2>
              <p className="mb-4  md:text-lg dark:text-gray-400 text-black">
                {t("excelProve-description")}
              </p>
              <p className="mb-4 text-black  md:text-lg dark:text-gray-400">
                {t("excelProve-description-2")}
              </p>
              <CTAButton text="Alright, I’m In. Show Me the Stuff!" />
            </div>
          </div>
        </section>
  );
}

export default ExcelProve;