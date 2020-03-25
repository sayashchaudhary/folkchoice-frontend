export enum RoutePath {
    auth = 'auth',
    login = 'login',
    register = 'register',
    home = 'home',
    clothing = 'clothing',
    cosmetics = 'cosmetics',
    kids = 'kids',
    men = 'men',
    women = 'women',
    secondInnings = 'secondInnings',
    cart = 'cart',
    products = 'products'
}

export const AuthRouteMap = {
    [RoutePath.login]: [RoutePath.auth],
    [RoutePath.register]: [RoutePath.auth]
};
