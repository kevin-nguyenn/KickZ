json.array! @watchlists do |watchlist|
    json.extract! shoe, :id, :user_id, :shoe_id
end