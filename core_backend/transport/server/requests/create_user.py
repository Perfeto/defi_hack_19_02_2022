from pydantic import BaseModel


class UserFields(BaseModel):
    user_name: str
    verificate: str
    nft_list: str
