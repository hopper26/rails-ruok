# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "faker"
User.destroy_all
Post.destroy_all
Goal.destroy_all
Emotion.destroy_all

# arrays for the goals tile
arr1 = ["Take a shower", "Take 5 minutes to just do nothing", "Do the laundry", "Have a nap", "Eat something 'naughty'"]
arr2 = ["Finish a course", "All Christmas presents brought", "Pay bills"]
arr3 = ["Read a book", "Listen to new music", "Finish the paint by numbers"]
arr4 = ["Go to the gym", "Play World of Warcraft", "Learn to knit", "Ticket for Sydney booked"]
arrt = ["Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Will it ever stop", "Better day", "Sun is shining",
        "Today has been blah", "Not much has happened", "Better day", "Sun is shining"]

# fake user
user = User.new(
  first_name: "Hayley",
  last_name: "Tottle",
  email: "mtottle@gmail.com",
  password: "password"
)
user.save

59.times do |x|
  post = Post.new(
    title: arrt[x],
    rich_body: Faker::Lorem.paragraphs,
    user: user,
    created_at: DateTime.now - (rand * 50)
  )
  post.save!
end

post = Post.new(
  title: "It's been a long night",
  rich_body: "What a night, did not manage to switch off at all. Staring at the four walls is incredibly boring. Time moves so slowly. Remembered at least to book my train ticket to Sydney - hopefully will be a bit of fun.",
  user: user,
  created_at: "Fri, 09 Dec 2022 12:12:18 +1100"
)
post.save!

#### fake goals ####
5.times do |i|
  goal = Goal.new(
    user: user,
    section: "Self Care",
    content: arr1[i].to_s,
    completed: [true, false].sample
  )
  goal.save!
end

3.times do |i|
  goal = Goal.new(
    user: user,
    section: "Accomplishments",
    content: arr2[i].to_s,
    completed: [true, false].sample
  )
  goal.save!
end

3.times do |i|
  goal = Goal.new(
    user: user,
    section: "Enjoyment",
    content: arr3[i].to_s,
    completed: [true, false].sample
  )
  goal.save!
end

4.times do |i|
  goal = Goal.new(
    user: user,
    section: "Activities",
    content: arr4[i].to_s,
    completed: [true, false].sample
  )
  goal.save!
end

#### fake emotions ####
80.times do
  emotion = Emotion.new(
    user: user,
    feeling: Random.rand(0..2),
    created_at: DateTime.now - (rand * 50)
  )
  emotion.save!
end
