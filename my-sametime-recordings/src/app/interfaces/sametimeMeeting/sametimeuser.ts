export interface SametimeUser {
    name: String,
    personalRoom: String,
    avatar: String,
    email: String,
    userId: String
}

export interface SametimeAuth {
    user: SametimeUser,
    roles: Array<String>,
    IDPUrl: String
}