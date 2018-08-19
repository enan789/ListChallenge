# ListGenerator

This project was created using Angular CLI and Angular 5. To run this project go to your terminal, clone this repository, and cd into the directory.
If you have npm, run `npm install`. After than command starts running you can enter `ng serve` for a dev server. Now go to `http://localhost:4200/`
to see the application.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Thoughts on the implementation

While this application could feasibly have been done in a larger section to manage all the adding and deleting of lists and items, dividing the project
into these 3 levels neatly organizes into easily understandable reusable parts. The whole list generator in list creation, the list itself, and the items
within the list. Then by inputting values and emitting out events and information there is clear communication to manage the adding and deleting of
lists and items. Using arrays of strings also made it easy to manage all the information without having to create additional structures. I also used
Reactive Forms to make it potentially easier to unit test.

If I had to display thousands of lists and hundreds of items I would paginate the lists and items, scrolling can only help so much. I would also make a
way to move an item to a specific index if you want to minutely manage a list of that size.

Other libraries that I used include bootstrap to make the application more presentable and awesome font for recognizable up and down icons which made it
more intuitive how you would move around an item on a list.
