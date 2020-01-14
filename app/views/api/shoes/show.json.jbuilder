json.shoe do
    if shoe.photo.attached?
        json.photoUrl url_for(shoe.photo)
    end
end