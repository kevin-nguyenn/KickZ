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

#array of shoe objects
# Nikes
    nikes = [
        {
            name: "Nike Air Presto Off-White",
            ticker: "PRESTO-OFFWHT",
            price: 2000,
            brand: "Nike",
            style_code: "AA3830-001",
            colorway: "black/black-muslin",
            release_date: "09/09/2017"
        },
        {
            name: "Nike Air Presto Off-White White (2018)",
            ticker: "NK-APOWTWT18",
            price: 689,
            brand: "Nike",
            style_code: "AA3830-100",
            colorway: "white/black-cone",
            release_date: "08/03/2018"
        },
        {
            name: "Nike Air Presto Off-White Black (2018)",
            ticker: "NK-APOWBK18",
            price: 689,
            brand: "Nike",
            style_code: "AA3830-002",
            colorway: "black/white-cone",
            release_date: "07/27/2018"
        },
        {
            name: "Nike Air Force 1 Low Supreme White",
            ticker: "AF1L-SUPBLW",
            price: 202,
            brand: "Nike",
            style_code: "CU9225-100",
            colorway: "white/white-white",
            release_date: "03/05/2020"
        },
        {
            name: "Nike Air Vapormax Off White 2018",
            ticker: "VPRMX-OFFWHT-18",
            price: 700,
            brand: "Nike",
            style_code: "AA3831-100",
            colorway: "white/total orange-black",
            release_date: "04/14/2018"
        }
    ]

    nikes.map! { |shoe| Shoe.create(shoe) };

# Jordans
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

    jordan_3s.map! { |shoe| Shoe.create(shoe) };

    jordan_5s = [
        {
            name: "Jordan 5 Retro Off-White Black",
            ticker: "AJ5-OWBK",
            price: 710,
            brand: "Jordan",
            style_code: "CT8480-001",
            colorway: "black/muslin-fire red",
            release_date: "02/15/2020"
        }
    ]

    jordan_5s.map! { |shoe| Shoe.create(shoe) };

    jordan_6s = [
        {
            name: "Jordan 6 Retro Travis Scott",
            ticker: "AJ6R-TS",
            price: 517,
            brand: "Jordan",
            style_code: "CN1084-200",
            colorway: "medium olive/black-sail-university red",
            release_date: "10/11/2019"
        }
    ]

    jordan_6s.map! { |shoe| Shoe.create(shoe) };

# #Yeezys
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
        # {
        #     name: "adidas Yeezy Boost 350 Moonrock",
        #     ticker: "YZY350-MNRCK",
        #     price: 600,
        #     brand: "Yeezy",
        #     style_code: "AQ2660",
        #     colorway: "agate gray/moonrock-agate gray",
        #     release_date: "11/14/2015"
        # },
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

order1 = Order.create!(
    shoe_id: Shoe.all[0].id, seller_id: User.all[0].id, price: 550, order_type: 'buy', 
    active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '10'
)
# order2 = Order.create!(
#     shoe_id: Shoe.all[1].id, seller_id: User.all[0].id, price: 600, order_type: 'buy', 
#     active: 'true', sold: 'false', shipped: 'false', sex: 'M', size: '10'
# )

sale1 = Sale.create!(
    order_id: order1.id, shoe_id: order1.shoe_id, sex: order1.sex, 
    size: order1.size, date: Date.today.to_s.split('-').join('/'), active: 'true', 
    price: order1.price
)
# sale2 = Sale.create!(
#     order_id: order2.id, shoe_id: order2.shoe_id, sex: order2.sex, 
#     size: order2.size, date: Date.today.to_s.split('-').join('/'), active: 'true', 
#     price: order2.price
# )