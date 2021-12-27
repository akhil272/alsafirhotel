import { useRouter } from "next/router";

const useTranslation = (en: any, ar: any) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  return t;
};

export default useTranslation;
