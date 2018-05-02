## Barkwire Pairs

In this drill, you're going to pair up with a partner to knock out a story for BarkWire Pairs, a dating app for dogs.

## List Dogs

You have the ability to look at a list of dogs at `http://localhost:3000/dogs`, and any individual dog at `http://localhost:3000/dogs/:id`, but you can't add a dog at `http://localhost:3000/dogs/new`.

You need to:

* Make a form with inputs for `name`, `profile-picture` and `bio`, as well as a submit button.
* On submit, turn the form data into a JSON string with the keys `name`, `profilePicture`, and `bio`, and `POST` it to `http://localhost:3000/api/dogs`
* When the form finishes submitting, redirect the user to the dogs list

## Instructions

* Pair with a partner
    * This should be a partner you haven't paired with on this set of drills before
    * One you should drive, and do all of the typing
    * The other should navigate and guide the driver
    * Set a timer and switch every 10 minutes
* `npm install` to install dependencies
* `npm run migrate && npm run seed` to setup the database
* `npm run dev` to run the server
* `npm test` to see the failing tests. For this exercise, if you make the `Adding a dog` test pass, all of the others should pass as well.
* Write enough code to make the tests pass.
* You shouldn't need to change anything in `migrations`, `seeds`, `stylesheets`, `images`, `cypress`, or `data`. You also shouldn't to change any of the `/api` routes.
* You're done when all of the tests pass. Both of you should submit a repo with the completed code. Enter your names [`HERE`] and [`HERE`]!
