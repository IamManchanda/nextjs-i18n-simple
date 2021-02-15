import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { NavigationHeader } from "../components/navigation-header";
import { NavigationFooter } from "../components/navigation-footer";

function PageSecond() {
  const router = useRouter();
  const { t } = useTranslation("second-page");

  return (
    <Fragment>
      <Head>
        <title>{t("second-page-title")}</title>
      </Head>
      <main>
        <NavigationHeader title={t("heading")} />
        <div>
          <Link
            href="/second-page"
            locale={router.locale === "en" ? "hi" : "en"}
          >
            <button>{t("change-locale")}</button>
          </Link>
          <Link href="/">
            <button type="button">{t("back-to-homepage")}</button>
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
      "common",
      "second-page",
      "footer",
    ])),
  },
});

export default PageSecond;
