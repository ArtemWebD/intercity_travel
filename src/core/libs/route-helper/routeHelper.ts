export default class RouteHelper {
    static clearPath(path: string): string {
        return (
            path
                .replace(/\/\*/g, "")
                .replace(/\/:[^/]+/g, "")
                .replace(/\/$/, "") || "/"
        );
    }
}
