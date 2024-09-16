import {
  IImageStyleProps,
  ImageBgContainer,
  ImageContainer,
} from "./Image.style";

export enum EImageType {
  Img = "img",
  Img_Bg = "img_Bg",
}

export interface IImageProps extends IImageStyleProps {
  src: string;
  alt: string;
  ariaDescribedby?: string;
  type?: EImageType;
}

const Image = ({
  src,
  alt,
  ariaDescribedby,
  type = EImageType.Img,
  size,
  width,
  height,
  style,
}: IImageProps) => {
  return (
    <>
      {type === "img" ? (
        <ImageContainer
          src={src}
          alt={alt}
          aria-describedby={ariaDescribedby}
          size={size}
          width={width}
          height={height}
          style={style}
        />
      ) : (
        <ImageBgContainer
          role="img"
          backgroundSrc={src}
          aria-label={alt}
          size={size}
          width={width}
          height={height}
          style={style}
        />
      )}
    </>
  );
};

export default Image;
