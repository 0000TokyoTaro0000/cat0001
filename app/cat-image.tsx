"use client";

import {useState} from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
    url: string;
};

export function CatImage({url}: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);
    
    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className={styles.button}>
                他のねこ
            </button>
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl} className={styles.img} />}
            </div>
            {imageUrl && <img src={imageUrl}/>}
        </div>
    );
}
