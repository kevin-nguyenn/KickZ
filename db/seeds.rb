# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demo_user = User.create(username: "demouser", email: "demouser@kickz.io", password: "password")
# Add brand column to shoes table & add brands to each shoe data

# Jordan 1
    #array of shoe objects

    jordan_1s = [
        {
            name: "Jordan 1 Retro High Satin Black Toe (W)",
            ticker: "AJ1H-STNBTW",
            price: 485,
            brand: "Jordan"
        },
        {
            name: "Jordan 1 Retro High Obsidian UNC",
            ticker: "AJ1H-UNCL",
            price: 272,
            brand: "Jordan"
        }
    ]

    jordan_1s.map! { |shoe| Shoe.create(shoe) };

    yeezys = [
        {
            name: "adidas Yeezy Boost 350 V2 Lundmark",
            ticker: "350V2-LM",
            price: 284,
            brand: "Yeezy"
        },
        {
            name: "adidas Yeezy Boost 350 V2 Cream/Triple White",
            ticker: "YZY350V2-CRMWHT",
            price: 294,
            brand: "Yeezy"
        },
        {
            name: "adidas Yeezy Boost 350 V2 Zebra",
            ticker: "YZY350V2-ZEBRA",
            price: 295,
            brand: "Yeezy"
        }
    ]

    yeezys.map! { |shoe| Shoe.create(shoe) };

    # mapping image to shoe
    
    Shoe.all.each do |shoe|
        ticker = shoe.ticker
        photo = open("https://kickz-seed.s3.us-west-1.amazonaws.com/#{ticker}.jpg")

        shoe.photo.attach(
            io: photo,
            filename: "#{ticker}.jpg"
        )
    end