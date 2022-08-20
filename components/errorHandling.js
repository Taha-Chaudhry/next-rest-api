const errors = [
    {
        "code": 1,
        "message": "Body not found"
    },
    {
        "code": 2,
        "message": "Insufficient body format"
    },
    {
        "code": 3,
        "message": "No user with given id"
    },
    {
        "code": 4, "message": "Endpoint only has mapping for method GET"
    },
    {
        "code": 5,
        "message": "Endpoint only has mapping for method POST"
    },
    {
        "code": 6,
        "message": "Endpoint only has mapping for method PUT"
    },
    {
        "code": 7,
        "message": "Endpoint only has mapping for method DELETE"
    },
    {
        "code": 8,
        "message": "No id specified in URL"
    }
]

export function raiseError(code) {
    for (const error of errors) {
        if (error.code == code) {
            return {
                error: error
            }
        }
    }
}