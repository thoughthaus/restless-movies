# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Movie.create(
    title: Faker::Book.title,
    description: Faker::Lorem.paragraph_by_chars(256, false),
    release_date: Faker::Date.backward(5000),
    adult: [true, false].sample,
    budget: Faker::Number.between(100000, 100000000).to_f,
    revenue: Faker::Number.between(10000, 1000000000).to_f,
    runtime: Faker::Number.normal(80, 3.5),
    tagline: Faker::FamousLastWords.last_words
  )
end

10.times do
  user = User.create(username: Faker::Name.name, email: Faker::Internet.email)

  5.times do
    user.reviews.create(rating: rand(1..5), comment: Faker::Lorem.sentence(5, false, 10), movie_id: rand(1..10))
  end
end

