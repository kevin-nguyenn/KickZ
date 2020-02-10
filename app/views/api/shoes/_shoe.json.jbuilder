json.extract! @shoe, :id, :name, :price, :brand, :ticker
    if shoe.photo.attached?
        json.photoUrl url_for(shoe.photo)
    else
        json.photoUrl ""
    end