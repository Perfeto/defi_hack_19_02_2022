from transport.db.repository.skins_repository import remove_skin_by_id


def handle_skin_delete(current_id):
    return remove_skin_by_id(current_id)