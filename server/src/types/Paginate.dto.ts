export interface PaginateDto <T> {
    result: T[];
    meta: {
        total: number;
        limit: number;
        page: number;
        next: number;
        last: number;
    }
}

export interface PaginateOptions {
    limit?: number;
    page?: number;
    type?: string;
    keyword?: string;
}