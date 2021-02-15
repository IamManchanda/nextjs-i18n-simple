import { useTranslation } from "next-i18next";

export const NavigationFooter = () => {
  const { t } = useTranslation("footer");
  return (
    <footer>
      <p>{t("description")}</p>
    </footer>
  );
};
