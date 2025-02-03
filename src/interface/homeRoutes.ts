export interface HomeRoutes {
    [key: string]: string
}
export const homePages: HomeRoutes = {
    admin: 'adminHome',
    user: 'userHome',
    moderator: 'moderatorHome',
    guest: 'guestHome',
}
