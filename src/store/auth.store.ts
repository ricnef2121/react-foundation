interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token: string | null;
    user?: {
        name: string;
        email: string;
    }
}