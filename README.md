# API SPEC

## Authentication

All API must use this authentication

Request :
- Header :
    - X-Api-Key: 'api_key'

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
        "name": "string",
        "email": "string"
    }
```

Response Success :
```json
    {
        "code": "number",
        "status": "string",
        "data": {
            "id": "string, unique",
            "name": "string",
            "email": "string",
            "created_at": "date"
        }
    }
```

Response Error :
```json
    {
        "code": "number",
        "status": "string",
        "message": "string"
    }
```

## Get User

Request :
- Method : GET
- Endpoint : `api/users/:id_user`
- Header : 
    - Accept: application/json

Response Success :
```json
    {
        "code": "number",
        "status": "string",
        "data": {
            "id": "string, unique",
            "name": "string",
            "email": "string",
            "created_at": "date"
        }
    }
```

Response Error :
```json
    {
        "code": "number",
        "status": "string",
        "message": "string"
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
        "data": {
            "id": "string, unique",
            "name": "string",
            "email": "string",
            "created_at": "date",
            "updated_at": "date"
        }
    }
```

## List Users

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
        "data": [
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