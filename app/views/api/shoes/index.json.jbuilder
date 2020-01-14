# json.shoes do
#     @shoes.each do |shoe|
#         json.set! :id do 
#             json.extract! :id, :name

#             if shoe.photo.attached?
#                 json.photoUrl url_for(shoe.photo)
#             end
#         end
#     end
# end

json.array! @shoes do |shoe|
    json.extract! shoe, :id, :name
    json.photoUrl url_for(shoe.photo)
end