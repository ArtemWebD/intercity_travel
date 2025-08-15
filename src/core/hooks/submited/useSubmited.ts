import { useCallback, useEffect, useState } from "react";

export default function () {
    const [submited, setSubmited] = useState(false);

    useEffect(() => {
        if (!submited) {
            return;
        }

        const timer = setTimeout(() => setSubmited(false), 2000);

        return () => clearTimeout(timer);
    }, [submited]);

    const changeSubmited = useCallback(() => setSubmited(true), [setSubmited]);

    return { submited, changeSubmited };
}
