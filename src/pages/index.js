import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { NavigationHeader } from "../components/navigation-header";
import { NavigationFooter } from "../components/navigation-footer";

function PageIndex() {
  const router = useRouter();
  const { t } = useTranslation("home-page");
  return (
    <Fragment>
      <main>
        <NavigationHeader title={t("heading")} />
        <div>
          <Link href="/" locale={router.locale === "en" ? "hi" : "en"}>
            <button>{t("change-locale")}</button>
          </Link>
          <Link href="/second-page">
            <button type="button">{t("go-to-second-page")}</button>
          </Link>
        </div>
      </main>
      <NavigationFooter />
    </Fragment>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "header",
      "home-page",
      "footer",
    ])),
  },
});

export default PageIndex;
