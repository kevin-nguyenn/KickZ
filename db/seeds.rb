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
            brand: "Jordan",
            style_code: "CD0461-016",
            colorway: "black/white-university red",
            release_date: "08/17/2019"
        },
        {
            name: "Jordan 1 Retro High Obsidian UNC",
            ticker: "AJ1H-UNCL",
            price: 272,
            brand: "Jordan",
            style_code: "555088-140",
            colorway: "sail/obsidian-univeristy blue",
            release_date: "08/31/2019"
        },
        {
            name: "Jordan 1 Retro High NC to Chi Leather (W)",
            ticker: "AJ1H-UCLW",
            price: 190,
            brand: "Jordan",
            style_code: "CD0461-046",
            colorway: "black/dark powder blue-gym red",
            release_date: "02/13/2020"
        }
    ]

    jordan_1s.map! { |shoe| Shoe.create(shoe) };

    jordan_3s = [
        {
            name: "Jordan 3 Retro Fire Red Cement (Nike Chi)",
            ticker: "AJ3U-FRCNC",
            price: 235,
            brand: "Jordan",
            style_code: "CU2277-600",
            colorway: "varsity red/varsity red-cement",
            release_date: "02/22/2020"
        }
    ]

    yeezys = [
        {
            name: "adidas Yeezy Boost 350 V2 Lundmark",
            ticker: "350V2-LM",
            price: 284,
            brand: "Yeezy",
            style_code: "FV3254",
            colorway: "lundmark/lundmark/lundmark",
            release_date: "07/11/2019"
        },
        {
            name: "adidas Yeezy Boost 350 V2 Cream/Triple White",
            ticker: "YZY350V2-CRMWHT",
            price: 294,
            brand: "Yeezy",
            style_code: "CP9366",
            colorway: "cream white/cream white",
            release_date: "04/29/2017"
        },
        {
            name: "adidas Yeezy Boost 350 V2 Zebra",
            ticker: "YZY350V2-ZEBRA",
            price: 295,
            brand: "Yeezy",
            style_code: "CP9654",
            colorway: "white/core black/red",
            release_date: "02/25/2017"
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