# API SPEC

## Create User

Request :
- Method : POST
- Endpoint : `api/users`
- Header : 
    - Content-Type: application/json
    - Accept: application/json

- Body : 
```json
    {
        "id": "string, unique",
        "name": "string",
        "email": "string"
    }
```

Response :
```json
    {
        "code": "number",
        "status": "string",
        "body": {
            "id": "string, unique",
            "name": "string",
            "email": "string",
            "created_at": "date"
        }
    }
```

## Get User

Request :
- Method : GET
- Endpoint : `api/users/:id_user`
- Header : 
    - Accept: application/json

Response :
```json
    {
        "code": "number",
        "status": "string",
        "body": {
            "id": "string, unique",
            "name": "string",
            "email": "string",
            "created_at": "date"
        }
    }
```

## Update User

Request :
- Method : PUT
- Endpoint : `api/users/:id_user`
- Header : 
    - Content-Type: application/json
    - Accept: application/json

- Body : 
```json
    {
        "name": "string",
        "email": "string"
    }
```

Response :
```json
    {
        "code": "number",
        "status": "string",
        "body": {
            "id": "string, unique",
            "name": "string",
            "email": "string",
            "created_at": "date",
            "updated_at": "date"
        }
    }
```

## List Users

## Update User

Request :
- Method : GET
- Endpoint : `api/users`
- Header : 
    - Accept: application/json
- Query Params :
    - size: number,
    - page: number
    
Response :
```json
    {
        "code": "number",
        "status": "string",
        "body": [
            {
                "id": "string, unique",
                "name": "string",
                "email": "string",
                "created_at": "date",
                "updated_at": "date"
            },
            {
                "id": "string, unique",
                "name": "string",
                "email": "string",
                "created_at": "date",
                "updated_at": "date"
            },
            ...
        ]
    }
```

## Delete User

Request :
- Method : DELETE
- Endpoint : `api/users/:id_user`
- Header : 
    - Accept: application/json

Response :
```json
    {
        "code": "number",
        "status": "string",
    }
```