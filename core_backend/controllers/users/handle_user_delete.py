from transport.db.repository.users_repository import remove_user_by_id


def handle_user_delete(current_id):
    return remove_user_by_id(current_id)