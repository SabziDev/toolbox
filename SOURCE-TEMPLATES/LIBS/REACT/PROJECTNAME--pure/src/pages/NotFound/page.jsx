import pagesMeta from "@public/data/pages-meta/pages-meta";
import { Link } from "react-router";

import Head from "../components/Head";

const NotFound = () => (
  <>
    <Head>
      <title>{pagesMeta.notFound.title}</title>
      <meta name="description" content={pagesMeta.notFound.desc} />
    </Head>

    <div
      className="fixed inset-0 z-9999 flex-center flex-col overflow-hidden px-4 text-center select-none"
      style={{
        background:
          "radial-gradient(circle at top right, #000041, #004162, #89a0ae)",
      }}
    >
      <span
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 2px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
        }}
      />

      <h1 className="mb-4 text-8xl font-bold text-white">404</h1>

      <h2 className="mb-2 text-3xl font-bold text-white">
        {pagesMeta.notFound.title}
      </h2>

      <p className="mb-8 max-w-md text-lg text-gray-300">
        {pagesMeta.notFound.desc}
      </p>

      <Link
        to="/"
        className="shadow-xl hover:shadow-2xl z-10 rounded-lg bg-white/90 p-3 font-medium text-black/60 active:scale-[0.96]"
      >
        {/* TODO NotFound-Page Btn-Text */}
        بازگشت به صفحه اصلی
        {/* Return Home */}
      </Link>
    </div>
  </>
);

export default NotFound;
