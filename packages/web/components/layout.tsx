import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Pepperstone Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="container">
      <Head>
        <meta name="description" content="Pepperstone" />
      </Head>

      <main>{children}</main>
    </div>
  );
}
