json.extract! @shoe, :id, :name, :price, :brand, :ticker, :style_code, :colorway, :release_date
    if shoe.photo.attached?
        json.photoUrl url_for(shoe.photo)
    else
        json.photoUrl ""
    end