from controllers.errors import NotFoundException
from transport.db.repository.users_repository import get_one_user_by_id


def handle_user_get_one(skin_id):
    users_list = get_one_user_by_id(skin_id)
    list_of_users = []
    for user in users_list:
        list_of_users.append(skin)
    if len(list_of_users) == 0:
        raise NotFoundException()
    return list_of_users[0]
