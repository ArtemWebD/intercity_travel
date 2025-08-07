import { Suspense, type FC } from "react";
import type { IBaseSuspenseProps } from "./types/IBaseSuspense";
import BaseSpinner from "./BaseSpinner";

const BaseSuspense: FC<IBaseSuspenseProps> = ({ component }) => {
    return <Suspense fallback={<BaseSpinner />}>{component}</Suspense>;
};

export default BaseSuspense;
