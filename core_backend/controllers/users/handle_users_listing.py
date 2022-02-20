from transport.db.repository.users_repository import get_all_users


def handle_users_listing(limit, offset):
    users_list = get_all_users(limit, offset)
    list_for_push = []
    for user in users_list:
        list_for_push.append(user)
    return list_for_push
