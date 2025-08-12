import { memo, type FC } from "react";
import type { IBaseImageProps } from "./types/IBaseImage";

const BaseImage: FC<IBaseImageProps> = ({ src, alt, className, ...props }) => {
    return (
        <picture className="w-full h-full flex">
            <source srcSet={src} />
            <img
                {...props}
                src="/images/driver-info/user.webp"
                alt={alt}
                className={`w-full h-auto object-cover ${className ? className : ""}`}
            />
        </picture>
    );
};

export default memo(BaseImage);
