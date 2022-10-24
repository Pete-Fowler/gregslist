require 'faker'

puts "🌱 Seeding DB ..."

cities = [
  "Aguilar", "Akron", "Alamosa", "Alma", "Antonito", "Arriba", "Arvada", "Aspen", "Ault", "Aurora", "Avon", "Basalt", "Bayfield", "Bennett", "Berthoud", "Bethune", "
Black Hawk", "Blanca", "Blue River", "Bonanza", "Boone", "Boulder", "Bow Mar", "Branson", "Breckenridge", "Brighton", "Brookside", "Broomfield", "Brush", "Buena Vista", "
Burlington", "Calhan", "Campo", "Cañon City", "Carbonate,Carbondale", "Castle Pines", "Castle Rock", "Cedaredge", "Centennial", "Center", "Central City", "Cheraw", "
Cherry Hills Village", "Cheyenne Wells", "Coal Creek", "Cokedale", "Collbran", "Colorado Springs", "Columbine Valley", "Commerce City", "Cortez", "Craig", "Crawford", "
Creede", "Crested Butte", "Crestone", "Cripple Creek", "Crook", "Crowley", "Dacono", "De Beque", "Deer Trail", "Del Norte", "Delta", "Denver", "Dillon", "Dinosaur", "Dolores", "
Dove Creek", "Durango", "Eads", "Eagle", "Eaton", "Eckley", "Edgewater", "Elizabeth", "Empire", "Englewood", "Erie", "Estes Park", "Evans", "Fairplay", "Federal Heights", "
Firestone", "Flagler", "Fleming", "Florence", "Fort Collins Fort Lupton", "Fort Morgan", "Fountain", "Fowler", "Foxfield", "Fraser", "Frederick", "Frisco", "Fruita", "
Garden City", "Genoa", "Georgetown", "Gilcrest", "Glendale", "Glenwood Springs", "Golden", "Granada", "Granby", "Grand Junction", "Grand Lake", "Greeley", "
Green Mountain Falls", "Greenwood Village", "Grover", "Gunnison", "Gypsum", "Hartman", "Haswell", "Haxtun", "Hayden", "Hillrose", "Holly", "Holyoke", "Hooper", "
Hot Sulphur Springs", "Hotchkiss", "Hudson", "Hugo", "Idaho Springs", "Ignacio", "Iliff", "Jamestown", "Johnstown", "Julesburg", "Keenesburg", "Kersey", "Kim", "Kiowa", "
Kit Carson", "Kremmling", "La Jara", "La Junta", "La Veta", "Lafayette", "Lake City", "Lakeside", "Lakewood", "Lamar", "Larkspur", "Las Animas", "LaSalle", "Leadville", "
Limon", "Littleton", "Lochbuie", "Log Lane Village", "Lone Tree", "Longmont", "Louisville", "Loveland", "Lyons", "Manassa", "Mancos", "Manitou Springs", "Manzanola", "
Marble", "Mead", "Meeker", "Merino", "Milliken", "Minturn", "Moffat", "Monte Vista", "Montezuma", "Montrose", "Monument", "Morrison", "Mount Crested Butte", "Mountain View", "
Mountain Village", "Naturita", "Nederland", "New Castle", "Northglenn", "Norwood", "Nucla", "Nunn", "Oak Creek", "Olathe", "Olney Springs", "Ophir", "Orchard City", "
Ordway", "Otis", "Ouray Ovid", "Pagosa Springs", "Palisade", "Palmer Lake", "Paoli", "Paonia", "Parachute", "Parker", "Peetz", "Pierce", "Pitkin", "Platteville", "
Poncha Springs", "Pritchett", "Pueblo", "Ramah", "Rangely", "Raymer", "Red Cliff", "Rico", "Ridgway", "Rifle", "Rockvale", "Rocky Ford", "Romeo", "Rye", "Saguache", "Salida", "
San Luis", "Sanford", "Sawpit", "Sedgwick", "Seibert", "Severance", "Sheridan", "Sheridan Lake", "Silt", "Silver Cliff", "Silver Plume", "Silverthorne", "Silverton", "Simla,
 Snowmass Village", "South Fork", "Springfield", "Starkville", "Steamboat Springs", "Sterling", "Stratton", "Sugar City", "Superior", "Swink", "Telluride", "Thornton", 
 "Timnath", "Trinidad", "Two Buttes", "Vail", "Victor", "Vilas", "Vona", "Walden", "Walsenburg", "Walsh", "Ward", "Wellington", "Westcliffe", "Westminster", "Wheat Ridge", "
 Wiggin", "Wiley", "Williamsburg", "Windsor", "Winter Park", "Woodland Park", "Wray", "Yampa", "Yuma"
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
  "art/film", "career", "charitable", "competition", "dance", "fest/fair", "fitness/health", "food/drink", "free", "kid friendly", "literary", "music", "outdoor", 
  "sale", "singles", "sustainability", "tech"
]

3.times do
event_categories.each do |cat|
    Event.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      date: Faker::Date.in_date_period(month: 10),
      duration: 1,
      description: Faker::Hipster.sentence(word_count: 10),
      image: Faker::LoremPixel.image(size: "50x60", is_gray: true),
      category: cat,
      subcategory: "null",
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(50..250)
    )
  end
end

for_sale_subcategories = [
  "antiques", "appliances", "arts+crafts", "atv/utv/sno", "auto parts", "aviation", "baby+kid", "barter", "beauty+hlth", "bike parts",
"bikes", "boat parts", "boats", "books", "business", "cars+trucks", "cds/dvd/vhs", "cell phones", "clothes+acc", "collectibles", "computer parts", "computers", "electronics", "farm+garden",
"free", "furniture", "garage sale", "general", "heavy equip", "household", "jewelry", "materials", "motorcycle parts", "motorcycles", "music instr", "photo+video", "rvs+camp", "sporting",
"tickets", "tools", "toys+games", "trailers", "video gaming", "wanted", "wheels+tires"
]

5.times do
for_sale_subcategories.each do |subcat|
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: Faker::LoremPixel.image(size: "50x60", is_gray: true),
      category: "For Sale",
      subcategory: subcat,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(10..10000)
    )
  end
end

jobs_subcategories = [
"accounting+finance", "admin / office", "arch / engineering", "art / media / design", "biotech / science", "business / mgmt", "customer service", "education",
"etc / misc", "food / bev / hosp", "general labor", "government", "human resources", "legal / paralegal", "manufacturing", "marketing / pr / ad", "medical / health",
"nonprofit sector", "real estate", "retail / wholesale", "sales / biz dev", "salon / spa / fitness", "security", "skilled trade / craft", "software / qa / dba",
"systems / network", "technical support", "transport", "tv / film / video", "web / info design", "writing / editing"
]

5.times do
jobs_subcategories.each do |subcat|
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: Faker::LoremPixel.image(size: "50x60", is_gray: true),
      category: "Jobs",
      subcategory: subcat,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(10000..100000)
    )
  end
end

housing_subcategories = [
"apts / housing", "housing swap", "housing wanted", "office / commercial", "parking / storage", "real estate for sale", "rooms / shared", "rooms wanted",
"sublets / temporary", "vacation rentals"
]

5.times do
housing_subcategories.each do |subcat|
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: Faker::LoremPixel.image(size: "50x60", is_gray: true),
      category: "Housing",
      subcategory: subcat,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(500..100000)
    )
  end
end

services_subcategories = [
"automotive", "beauty", "cell/mobile", "computer", "creative", "cycle", "event", "farm+garden", "financial", "health/well", "household", "labor/move", "legal", "lessons",
"marine", "pet", "real estate", "skilled trade", "sm biz ads", "travel/vac", "write/ed/tran"
]

5.times do
services_subcategories.each do |subcat|
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: Faker::LoremPixel.image(size: "50x60", is_gray: true),
      category: "Services",
      subcategory: subcat,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(10..1000)
    )
  end
end

community_subcategories = [
"activities", "artists", "childcare", "classes", "events", "general", "groups", "local news", "lost+found", "missed connections", "musicians", "pets", "politics",
"rants & raves", "rideshare", "volunteers"
]

5.times do
community_subcategories.each do |subcat|
    Post.create(
      user_id: User.all.pluck(:id).sample,
      city_id: City.all.pluck(:id).sample,
      title: Faker::Hipster.sentence(word_count: 3),
      description: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
      image: Faker::LoremPixel.image(size: "50x60", is_gray: true),
      category: "Community",
      subcategory: subcat,
      area: City.all.pluck(:name).sample,
      postal_code: rand(80001..81658),
      price: rand(1..500)
    )
  end
end

puts "✅ Done seeding!" 