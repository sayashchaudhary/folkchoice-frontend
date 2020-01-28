import { AuthRouteMap, RoutePath } from './routes';

export class RouteUtils {
    static getUrl(route: RoutePath, data: any) {
        const url = RouteUtils.getPath(route);
        if (data) {
            return RouteUtils.url(url, data);
        } else {
            return url;
        }
    }

    static getPath(route: RoutePath) {
        let url: string = route;
        let parent: RoutePath;

        do {
            // @ts-ignore
            parent = RouteUtils.getParent(parent ? parent : route);
            url = (parent ? parent + '/' : '') + url;
        } while (parent);
        return '/' + url;
    }

    private static url(path: string, data: any): string {
        Object.keys(data).forEach(key => {
            path = path.replace(`:${key}`, data[key]);
        });
        return path;
    }

    private static getRouteMap(): any {
        return {
            ...AuthRouteMap
        };
    }

    private static getParent(child: RoutePath): RoutePath | null {
        return RouteUtils.getRouteMap()[child];
    }
}