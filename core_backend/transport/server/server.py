import fastapi
import peewee
from fastapi import FastAPI, HTTPException
from starlette import status

from controllers.errors import NotFoundException
from controllers.skins.handle_skin_delete import handle_skin_delete
from controllers.users.handle_user_delete import handle_user_delete
from controllers.skins.handle_skin_get_one import handle_skin_get_one
from controllers.users.handle_user_get_one import handle_user_get_one
from controllers.skins.handle_skins_create import handle_skins_create
from controllers.users.handle_users_create import handle_users_create
from controllers.skins.handle_skins_listing import handle_skins_listing
from controllers.users.handle_users_listing import handle_users_listing
from transport.server.models.errors import HTTPError
from transport.server.models.skins import SkinsListing, Skins, map_skins_db_to_http_get, \
    map_skins_db_to_http_post
from transport.server.models.users import UsersListing, Users, map_users_db_to_http_get, \
    map_users_db_to_http_post
from transport.server.requests.create_skin import SkinFields
from transport.server.requests.create_user import UserFields

server = FastAPI(
    servers=[
        {"url": "http://localhost:8000", "description": "local environment"},
        {"url": "http://kda.hack.blos-close.online", "description": "http remote"},
        {"url": "https://kda.hack.blos-close.online", "description": "https remote"},
    ]
)


@server.get(
    '/health',
    tags=["system"],
    status_code=200,
)
async def get_health():
    return {"health": 36.6}


@server.get('/api/v1/skins', tags=['skins'], status_code=200, responses={404: {'model': HTTPError}})
async def get_skins_list(limit: str = 20, offset: str = 0) -> SkinsListing:
    try:
        result = []
        for skin in handle_skins_listing(limit, offset):
            res = await map_skins_db_to_http_get(skin)
            result.append(res)
        return SkinsListing(skins=result)
    except Exception as e:
        fastapi.logger.logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'error_message': 'Internal server'},
        )


@server.get('/api/v1/skins/{skin_id}', tags=['skins'], status_code=200, responses={404: {'model': HTTPError}})
async def get_one_skin_by_id(skin_id: str) -> Skins:
    try:
        return await map_skins_db_to_http_get(
            handle_skin_get_one(skin_id)
        )
    except NotFoundException:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={'error_message': 'Not found'},
        )
    except Exception as e:
        fastapi.logger.logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'error_message': 'Internal server'},
        )


@server.post('/api/v1/skins', tags=['skins'], status_code=201, responses={404: {'model': HTTPError}})
async def create_skin(fields: SkinFields) -> Skins:
    try:
        return map_skins_db_to_http_post(
            handle_skins_create(fields)
        )
    except Exception as e:
        fastapi.logger.logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'error_message': 'Internal server'},
        )


@server.delete(
    '/api/v1/skins/{skin_id}',
    tags=["skins"],
    responses={404: {'model': HTTPError}},
    status_code=200
)
async def delete_skin_by_id(skin_id: str):
    try:
        handle_skin_delete(skin_id)
        return
    except peewee.DoesNotExist:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={'error_message': 'Not found'},
        )
    except Exception as e:
        fastapi.logger.logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'error_message': 'Internal server'},
        )


@server.get('/api/v1/users', tags=['users'], status_code=200, responses={404: {'model': HTTPError}})
async def get_users_list(limit: str = 20, offset: str = 0) -> UsersListing:
    try:
        return UsersListing(
            users=list(map(map_users_db_to_http_get, handle_users_listing(limit, offset)))
        )
    except Exception as e:
        fastapi.logger.logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'error_message': 'Internal server'},
        )


@server.get('/api/v1/users/{user_id}', tags=['users'], status_code=200, responses={404: {'model': HTTPError}})
async def get_one_user_by_id(user_id: str) -> Users:
    try:
        return map_users_db_to_http_get(
            handle_user_get_one(user_id)
        )
    except NotFoundException:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={'error_message': 'Not found'},
        )
    except Exception as e:
        fastapi.logger.logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'error_message': 'Internal server'},
        )


@server.post('/api/v1/users', tags=['users'], status_code=201, responses={404: {'model': HTTPError}})
async def create_skin(fields: UserFields) -> Users:
    try:
        return map_users_db_to_http_post(
            handle_users_create(fields)
        )
    except Exception as e:
        fastapi.logger.logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'error_message': 'Internal server'},
        )


@server.delete(
    '/api/v1/users/{skin_id}',
    tags=["users"],
    responses={404: {'model': HTTPError}},
    status_code=200
)
async def delete_user_by_id(user_id: str):
    try:
        handle_user_delete(user_id)
        return
    except peewee.DoesNotExist:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={'error_message': 'Not found'},
        )
    except Exception as e:
        fastapi.logger.logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'error_message': 'Internal server'},
        )
