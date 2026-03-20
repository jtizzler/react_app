interface Window {
    electron: {
        invoke: <T>(channel: string, ...args: string[]) => Promise<T>;
    };
}