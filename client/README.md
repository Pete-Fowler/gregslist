Live Page

# Summary
This site is a clone of Craigslist done in a group of two, to see how much of the functionality we could replicate in about 4 days. 

The site implements user authentication and authorization. The user must create an account in order to create posts, view their posts, and any starred posts, or to edit or delete a post they have created A user can also view posts in various categories and search for posts by keyword.

It was a good experience to build out the functionality and to replicate the site's style, but in retrospect it was a questionable choice for a clone, since it relies exclusively on user submitted data. Craigslist does not have an API from which to seed data, and all of our data was generated with the Faker gem.

# Contributions
I was responsible for:
- Most of the user authentication and authorization
- The search, login, myaccount, footer, header, and home React components
- The sessions and posts backend resources, and the search logic and query strings behind posts#index
- Much of the styling throughout the site

# Improvements
Lessons learned / improvements to be made:
- I would not choose to clone a site again that relies exclusively on user generated data when there is no API to seed from.
- I learned how to make a Postgre database table column accept an array in order to let users have starred posts. I implemented a query string to send the array to the backend, which was turned into a string through the query, and had to be re-converted to an array. I realized this was an overly complex and unnecessary solution, and a simple join table would probably have been better.
- I would finish the hide posts functionality, and other features of the site that were not implemented due to time constraints, including navigation breadcrumbs, frontend password validation and messaging, and adding the numerous different create a post forms and post tags that vary by each parent category
- I would refactor some of the code. For example the Search and SearchCategories component could be a single component, and I would convert the starred functionality into a join table rather than an array of values in the users table column.
