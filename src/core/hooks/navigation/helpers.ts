export function clearRoute(path: string): string {
    return (
        path
            .replace(/\/\*/g, "")
            .replace(/\/:[^/]+/g, "")
            .replace(/\/$/, "") || "/"
    );
}
