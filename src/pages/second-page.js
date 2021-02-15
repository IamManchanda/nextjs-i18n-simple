import { Fragment } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { NavigationHeader } from "../components/navigation-header";
import { NavigationFooter } from "../components/navigation-footer";

function PageSecond() {
  const { t } = useTranslation("second-page");

  return (
    <Fragment>
      <main>
        <NavigationHeader title={t("h1")} />
        <Link href="/">
          <button type="button">{t("back-to-homepage")}</button>
        </Link>
      </main>
      <NavigationFooter />
    </Fragment>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["seo", "second-page", "footer"])),
  },
});

export default PageSecond;
