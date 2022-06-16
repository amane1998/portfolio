import Head from "next/head";
import type { NextPage } from "next";
import { GA_TRACKING_ID } from "../libs/gtag";

interface MetaProps {
  title?: string;
  thumbnailUrl?: string;
  description?: string;
}

const Meta: NextPage<MetaProps> = ({title, thumbnailUrl, description}) => {

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={thumbnailUrl} />
      <meta property="og:description" content={description} />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />
      {GA_TRACKING_ID != null && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });`,
            }}
          />
        </>
      )}
    </Head>
  );
};

Meta.defaultProps = {
	title: "amane-fujisawa.work",
	thumbnailUrl: 'https://amanefujisawa.work/kv/kv1.jpg',
	description: "amane-fujisawa.workとは、フロントエンドエンジニア・UI/UXデザイナーとして活動している、藤澤天音のポートフォリオサイトです。"
}

export default Meta;
