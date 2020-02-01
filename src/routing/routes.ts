export enum RoutePath {
    auth = 'auth',
    login = 'login',
    register = 'register',
    home = 'home',
    clothing = 'clothing',
    kids = 'kids'
}

export const AuthRouteMap = {
    [RoutePath.login]: [RoutePath.auth],
    [RoutePath.register]: [RoutePath.auth]
};
