export class KjGWarning extends Error {
    statusCode: number
    description: string

    constructor(statusCode = 450, message = "Client Error", description="") {
        super(message);

        this.name = "KjGWarning";
        this.statusCode = statusCode;
        this.description = description;
    }

}

export class KjGError extends Error {
    statusCode: number
    description: string

    constructor(statusCode = 500, message = "Internal Server Error", description="") {
        super(message);

        this.name = "KjGError";
        this.statusCode = statusCode;
        this.description = description;
    }

}

export function NotFound(type, description) {
    const message = `${type} could not be found`;
    return new KjGWarning(404, message, description);
}

export function UnprocessableEntity(description) {
    return new KjGWarning(422, 'Unable to process contained instructions', description);
}

// * Errors
export function InternalError(err, description) {
    return new KjGError(500, err.message, description);
}