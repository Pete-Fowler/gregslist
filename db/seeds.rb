require 'faker'

puts "🌱 Seeding DB ..."

# password = BCrypt::Password.create("gregslist4711")

User.create!(username: 'admin', password: 'gregslist4711', password_confirmation: 'gregslist4711')

cities = [
  "Denver", "Colorado Springs", "Lakewood", "Centennial", "Greeley", "Loveland", "Castle Rock", "Parker", 
  "Salida", "Cortez", "Montrose", "Gunnison", "Walsenburg", "La Junta", "Monte Vista" 
]


cities.each do |city|
  City.create(
    name: city
  )
end

200.times do
  User.create(
    username: Faker::Internet.email,
    password_digest: Faker::Internet.password(min_length: 10, max_length: 20),
    default_city: City.all.pluck(:name).sample
  )
end

event_categories = [
  "art&film", "career", "charitable", "competition", "dance", "fest&fair", "fitness&health", "food&drink", "free", "kid friendly", "literary", "music", "outdoor", 
  "sale", "singles", "sustainability", "tech"
]


  200.times do
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: "https://loremflickr.com/600/#{rand(425..450).to_s}/event",
      category: "Event",
      subcategory: event_categories.sample,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(10..10000),
    )
  
end

for_sale_subcategories = [
  "antiques", "appliances", "arts&crafts", "atv&utv&sno", "auto parts", "aviation", "baby&kid", "barter", "beauty&hlth", "bike parts",
"bikes", "boat parts", "boats", "books", "business", "cars&trucks", "cds&dvd&vhs", "cell phones", "clothes&acc", "collectibles", "computer parts", "computers", "electronics", "farm&garden",
"free", "furniture", "garage sale", "general", "heavy equip", "household", "jewelry", "materials", "motorcycle parts", "motorcycles", "music instr", "photo&video", "rvs&camp", "sporting",
"tickets", "tools", "toys&games", "trailers", "video gaming", "wanted", "wheels&tires"
]



  200.times do
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: "https://loremflickr.com/600/#{rand(425..450).to_s}/garagesale",
      category: "For Sale",
      subcategory: for_sale_subcategories.sample,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(10..10000),
    )
  
end

jobs_subcategories = [
"accounting&finance", "admin & office", "arch & engineering", "art & media & design", "biotech & science", "business & mgmt", "customer service", "education",
"etc & misc", "food & bev & hosp", "general labor", "government", "human resources", "legal & paralegal", "manufacturing", "marketing & pr & ad", "medical & health",
"nonprofit sector", "real estate", "retail & wholesale", "sales & biz dev", "salon & spa & fitness", "security", "skilled trade & craft", "software & qa & dba",
"systems & network", "technical support", "transport", "tv & film & video", "web & info design", "writing & editing"
]



  200.times do
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: "https://loremflickr.com/600/#{rand(425..450).to_s}/jobs",
      category: "Jobs",
      subcategory: jobs_subcategories.sample,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(10000..100000),
    )
  
end

housing_subcategories = [
"apts & housing", "housing swap", "housing wanted", "office & commercial", "parking & storage", "real estate for sale", "rooms & shared", "rooms wanted",
"sublets & temporary", "vacation rentals"
]



  200.times do
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: "https://loremflickr.com/600/#{rand(425..450).to_s}/house,apartments",
      category: "Housing",
      subcategory: housing_subcategories.sample,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(500..100000),
    )
  
end

services_subcategories = [
"automotive", "beauty", "cell&mobile", "computer", "creative", "cycle", "farm&garden", "financial", "health&well", "household", "labor&move", "legal", "lessons",
"marine", "pet", "real estate", "skilled trade", "sm biz ads", "travel&vac", "write&ed&tran"
]



  200.times do
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: "https://loremflickr.com/600/#{rand(425..450).to_s}/services",
      category: "Services",
      subcategory: services_subcategories.sample,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(10..1000),
    )

end

community_subcategories = [
"activities", "artists", "childcare", "classes", "general", "groups", "local news", "lost&found", "missed connections", "musicians", "pets", "politics",
"rants & raves", "rideshare", "volunteers"
]

  200.times do
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: "https://loremflickr.com/600/#{rand(425..450).to_s}/community",
      category: "Community",
      subcategory: community_subcategories.sample,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(1..500),
    )
  
end

puts "✅ Done seeding!" 