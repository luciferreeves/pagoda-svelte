export type User = {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
    username: string;
}

export type Session = {
    key: string;
    user: User;
}