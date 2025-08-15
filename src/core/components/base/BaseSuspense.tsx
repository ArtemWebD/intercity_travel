import { Suspense, type FC } from "react";
import type { IBaseSuspenseProps } from "./types/IBaseSuspense";
import BaseSpinner from "./BaseSpinner";

const BaseSuspense: FC<IBaseSuspenseProps> = ({ component, path }) => {
    return (
        <Suspense fallback={<BaseSpinner />} key={path}>
            {component}
        </Suspense>
    );
};

export default BaseSuspense;
