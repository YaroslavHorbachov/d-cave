export interface DbBaseService<T> {
    removeAll(): Promise<void>;
    getAll(): Promise<T[]>;
}
