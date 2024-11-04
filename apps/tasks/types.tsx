export interface User{
    user_id: number,
    email: string,
    contact? : string,
    role: string
}

export interface Theme{
    primary: string,
    paper: string,
    pale: string,
    error: string,
    success: string,
    text: string,
    placeholder: string
}

export interface State{
    user: User,
    theme?: Theme
}