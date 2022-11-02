<a href=''>Live Page</a>

# Summary
This is a clone of the Craigslist classified ad website, built with a React front end and a Ruby on Rails back end, and including user authentication and authorization. Users can search ads, create an account, and post, edit, and delete ads they have created.

# Contributions
This was done in a team of two with a time limit of about 4 days. I was responsible for at least half of the work, including the following:
### Back end
- About half of the user authentication and authorization
- Most of the posts and sessions controllers and related routes and models
### Front end
- Most of the home page component
- All of the components and functionality related to user authentication and authorization
- The search component

# Lessons learned / improvements
# Lessons learned / improvements
In retrospect, I would not choose to clone a site that relies on user generated data for a student project where there are not real users or real data, especially a site like Craigslist where there is no API to seed the database from. I would have also liked more time to make a number of improvements, including adding more of the site's functionality such as hiding posts, and making the search more effective between categories and subcategories, adding nav breadcrumbs, and front end password validation. 

I also built the starred posts functionality using a query string and an array of post ids added to the users table in the database. A better way to do this would probably have been to use a simple join table to link the user to the location.