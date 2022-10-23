
cities = [Aguilar, Akron, Alamosa, Alma, Antonito, Arriba, Arvada, Aspen, Ault, Aurora, Avon, Basalt, Bayfield, Bennett, Berthoud, Bethune, 
Black Hawk, Blanca, Blue River, Bonanza, Boone, Boulder, Bow Mar, Branson, Breckenridge, Brighton, Brookside, Broomfield, Brush, Buena Vista, 
Burlington, Calhan, Campo, Cañon City, Carbonate,Carbondale, Castle Pines, Castle Rock, Cedaredge, Centennial, Center, Central City, Cheraw, 
Cherry Hills Village, Cheyenne Wells, Coal Creek, Cokedale, Collbran, Colorado Springs, Columbine Valley, Commerce City, Cortez, Craig, Crawford, 
Creede, Crested Butte, Crestone, Cripple Creek, Crook, Crowley, Dacono, De Beque, Deer Trail, Del Norte, Delta, Denver, Dillon, Dinosaur, Dolores, 
Dove Creek, Durango, Eads, Eagle, Eaton, Eckley, Edgewater, Elizabeth, Empire, Englewood, Erie, Estes Park, Evans, Fairplay, Federal Heights, 
Firestone, Flagler, Fleming, Florence, Fort Collins Fort Lupton, Fort Morgan, Fountain, Fowler, Foxfield, Fraser, Frederick, Frisco, Fruita, 
Garden City, Genoa, Georgetown, Gilcrest, Glendale, Glenwood Springs, Golden, Granada, Granby, Grand Junction, Grand Lake, Greeley, 
Green Mountain Falls, Greenwood Village, Grover, Gunnison, Gypsum, Hartman, Haswell, Haxtun, Hayden, Hillrose, Holly, Holyoke, Hooper, 
Hot Sulphur Springs, Hotchkiss, Hudson, Hugo, Idaho Springs, Ignacio, Iliff, Jamestown, Johnstown, Julesburg, Keenesburg, Kersey, Kim, Kiowa, 
Kit Carson, Kremmling, La Jara, La Junta, La Veta, Lafayette, Lake City, Lakeside, Lakewood, Lamar, Larkspur, Las Animas, LaSalle, Leadville, 
Limon, Littleton, Lochbuie, Log Lane Village, Lone Tree, Longmont, Louisville, Loveland, Lyons, Manassa, Mancos, Manitou Springs, Manzanola, 
Marble, Mead, Meeker, Merino, Milliken, Minturn, Moffat, Monte Vista, Montezuma, Montrose, Monument, Morrison, Mount Crested Butte, Mountain View, 
Mountain Village, Naturita, Nederland, New Castle, Northglenn, Norwood, Nucla, Nunn, Oak Creek, Olathe, Olney Springs, Ophir, Orchard City, 
Ordway, Otis, Ouray Ovid, Pagosa Springs, Palisade, Palmer Lake, Paoli, Paonia, Parachute, Parker, Peetz, Pierce, Pitkin, Platteville, 
Poncha Springs, Pritchett, Pueblo, Ramah, Rangely, Raymer, Red Cliff, Rico, Ridgway, Rifle, Rockvale, Rocky Ford, Romeo, Rye, Saguache, Salida, 
San Luis, Sanford, Sawpit, Sedgwick, Seibert, Severance, Sheridan, Sheridan Lake, Silt, Silver Cliff, Silver Plume, Silverthorne, Silverton, Simla,
 Snowmass Village, South Fork, Springfield, Starkville, Steamboat Springs, Sterling, Stratton, Sugar City, Superior, Swink, Telluride, Thornton, 
 Timnath, Trinidad, Two Buttes, Vail, Victor, Vilas, Vona, Walden, Walsenburg, Walsh, Ward, Wellington, Westcliffe, Westminster, Wheat Ridge, 
 Wiggin, Wiley, Williamsburg, Windsor, Winter Park, Woodland Park, Wray, Yampa, Yuma]


cities.each do |city|
  City.create(
    name: city
  )
end

x.times do
  User.create(
    username: Faker::Internet.username,
    password_digest: Faker::Internet.password(min_length: 10, max_length: 20)
    city: City.all.pluck(:name).sample
  )
end

x.times do
  Event.create(
    user_id: User.all.pluck(:id).sample,
    city_id: City.all.pluck(:id).sample,
    title:
    date:
    duration:
    description:
    image:
    category:
    subcategory:
    area:
    postal_code:
    price:
  )
end


for_sale_subcategories = [antiques, appliances, arts+crafts, atv/utv/sno, auto parts, aviation, baby+kid, barter, beauty+hlth, bike parts,
bikes, boat parts, boats, books, business, cars+trucks, cds/dvd/vhs, cell phones, clothes+acc, collectibles, computer parts, computers, electronics, farm+garden,
free, furniture, garage sale, general, heavy equip, household, jewelry, materials, motorcycle parts, motorcycles,
music instr,
photo+video,
rvs+camp,
sporting,
tickets,
tools,
toys+games,
trailers,
video gaming,
wanted,
wheels+tires]



x.times do

  Post.create(
    user_id: User.all.pluck(:id).sample,
    city_id: City.all.pluck(:id).sample,
    title: Faker::
    description: Faker::Hipster.sentences(number: 10)
    image:
    category: "For Sale"
    subcategory:
    area:
    postal_code:
    price:
  )
end



x.times do
  Post.create(
    user_id: User.all.pluck(:id).sample,
    city_id: City.all.pluck(:id).sample,
    title: Faker::
    description: Faker::Hipster.sentences(number: 10)
    image:
    category: "Jobs"
    subcategory:
    area:
    postal_code:
    price:
  )
end

x.times do
  Post.create(
    user_id: User.all.pluck(:id).sample,
    city_id: City.all.pluck(:id).sample,
    title: Faker::
    description: Faker::Hipster.sentences(number: 10)
    image:
    category: "Housing"
    subcategory:
    area:
    postal_code:
    price:
  )
end

x.times do
  Post.create(
    user_id: User.all.pluck(:id).sample,
    city_id: City.all.pluck(:id).sample,
    title: Faker::
    description: Faker::Hipster.sentences(number: 10)
    image:
    category: "Services"
    subcategory:
    area:
    postal_code:
    price:
  )
end

x.times do
  Post.create(
    user_id: User.all.pluck(:id).sample,
    city_id: City.all.pluck(:id).sample,
    title: Faker::
    description: Faker::Hipster.sentences(number: 10)
    image:
    category: "Community"
    subcategory:
    area:
    postal_code:
    price:
  )
end
