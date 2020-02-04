export enum RoutePath {
    auth = 'auth',
    login = 'login',
    register = 'register',
    home = 'home',
    clothing = 'clothing',
    cosmetics = 'cosmetics',
    kids = 'kids',
    mens = 'mens'
}

export const AuthRouteMap = {
    [RoutePath.login]: [RoutePath.auth],
    [RoutePath.register]: [RoutePath.auth]
};
