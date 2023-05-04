export interface SametimeMeeting {
    moderators: Array<object>,
    participants: Array<object>,
    name: String,
    mode: String,
    allowDialIn: Boolean,
    allowGuestUser: Boolean,
    style: String,
    isRestricted: Boolean,
    hasLobby: Boolean,
    allowLobbyBypass: Boolean,
    owner: String
    shareRecordings: Boolean,
    hasPassword: Boolean,
    createdAt: Number,
    updatedAt: Number,
    isOwner: Boolean,
    isInstant: false,
    title: String
}
