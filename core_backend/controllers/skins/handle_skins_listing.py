from transport.db.repository.skins_repository import get_all_skins


def handle_skins_listing(limit, offset):
    skins_list = get_all_skins(limit, offset)
    list_for_push = []
    for skins in skins_list:
        list_for_push.append(skins)
    return list_for_push
