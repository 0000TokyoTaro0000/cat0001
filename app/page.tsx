import { fetchImage } from "./fetch-image";
import { CatImage } from "./cat-image";

export default async function Home() {

  // ビルド時に画像を取得してしまい、常に同じ画像が表示される不具合を回避する
  // SSG(SSR)用の機能らしい
  // npm start devを使って開発モードで実行すると、await connectionしなくても毎回画像が変わるらしい
  // await connection;

  // 非同期で画像取得
  const image = await fetchImage();

  return (
    <CatImage url={image.url}/>
  );
}
