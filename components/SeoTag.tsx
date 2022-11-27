export const SeoTag = ({
  description,
  pageUrl,
  ogTitle,
  ogSiteName,
  ogDescription,
  ogType,
  ogImage
}) => (
  <>
    <meta name="description" content={description || "本格的なプログラミングが楽しく学べる Schole（スコレ）は、本格的なプログラミングが学べる学習アプリです。"} />
    <meta property="og:url" content={pageUrl || "https://www.schole.app"} />
    <meta property="og:title" content={ogTitle || "Schole（スコレ）| 本格的プログラミング学習"} />
    <meta property="og:site_name" content={ogSiteName || "Schole（スコレ）| 本格的プログラミング学習"} />
    <meta property="og:description" content={ogDescription || "本格的なプログラミングが楽しく学べる Schole（スコレ）は、本格的なプログラミングが学べる学習アプリです。" } />
    <meta property="og:type" content={ogType} />
    <meta property="og:image" content={ogImage || "https://www.schole.app/ogp.png"} />
  </>
)