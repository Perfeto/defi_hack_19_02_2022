from controllers.errors import NotFoundException
from transport.db.repository.skins_repository import get_one_skin_by_id


def handle_skin_get_one(skin_id):
    skin_list = get_one_skin_by_id(skin_id)
    list_of_skins = []
    for skin in skin_list:
        list_of_skins.append(skin)
    if len(list_of_skins) == 0:
        raise NotFoundException()
    return list_of_skins[0]
