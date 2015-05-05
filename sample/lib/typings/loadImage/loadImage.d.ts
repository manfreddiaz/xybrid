/**
 * Created by Manfred on 3/19/2015.
 */
interface LoadImage {
    (file: any, image: any, options: { maxWidth: number; maxHeight: number; canvas: boolean}) : void;
}

declare var loadImage: LoadImage