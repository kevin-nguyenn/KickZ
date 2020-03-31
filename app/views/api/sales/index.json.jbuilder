json.set! @sales[0].shoe_id do
  @sales.each do |sale|
    json.set! sale.id do
      json.partial! 'sale', sale: sale
    end
  end
end