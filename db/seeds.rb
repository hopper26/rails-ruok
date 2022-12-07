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
arr4 = ["Go to the gym", "Play World of Warcraft", "Learn to knit", "Eat something 'naughty'"]
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
  first_name: "Megan",
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
  title: "So very tired",
  rich_body: "It has been a very long week. Have barely slept. Can not stop thinking about all that I need to get done. Why does
  nothing ever work for me. One positive thing is I have nearly finished my course. Need to remember to book my ticket to Sydney",
  user: user,
  created_at: "Thu, 08 Dec 2022 03:12:18 +1100"
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
