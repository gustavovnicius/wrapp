Wrapp
=====

To create the app I used my own react/redux [boilerplate](https://github.com/gustavovnicius/react-redux-boilerplate). I created it from the principle that it should be simple and as much explicit as possible (because there is a lot of complicated boilerplates out there). I made it before create-react-app was released (way before). After create-react-app was released I wasn't comfortable in using it, because there were some complicated things and scripts that would made any customization harder.
There is also some explanations about the tools and libs that I used on the boilerplate repo.

You can check out the application [here](https://gustavo.keybase.pub/). I used the keybase.io file system to serve the application (just copied the files to my directory).

Comments
--------
As it was described on the assignment, I wanted to provide a good and "maintainable" solution, as close as possible to what I believe that is ideal in terms of testing, organization and architecture, and also, as close as possible to the way that I normally work.
I started by doing some kind of spike, where I was able to add and list the statistics. From that point I refactored the code and extracted some concerns into separated components, introduced the filtering and made the visual adjustments.
For the tech stack, I chose these technologies and organization because I think that it's easy to understand, and also because I'm used to it.
Since I'm not a expert on design / UX, I used the UI components from Rebass and used a lot of flexbox styling with Reflexbox to make it simpler.

Things to do next
-----------------
If I had more time:
- Pay more attention to design and responsiveness;
- Fix some corner cases:
  - Adding balances with empty text / empty value
- The vendor bundle is big (~300kb). One thing that I think to do to shrink it would be to use CSS/SCSS styling instead of rebass / reflexbox. That would reduce the bundle size by 100kb.

Getting started
---------------

- Git clone this repo

```sh
git clone git@github.com:gustavovnicius/wrapp.git
```

- [Install NVM](https://github.com/creationix/nvm#install-script) and a [pick](https://github.com/creationix/nvm#usage) a node version.

- In this repo root dir, run `npm install` (`npm i` for friends)

Running

```sh
npm start
```
- In a browser of your choice hit [localhost:8080](localhost:8080)

- You are good to go :)

Testing

To run the test suite:
```sh
npm test
# or
npm run test:watch
```

Bundling for production

```sh
npm run build:production
```

It will generate an `index.html` file pointing to the bundled `.js` files inside `dist` dir. It will also generate two `.js` files: One, `app.[hash].js` will be your application, the other one `vendor.[hash].js` will include all your vendors, for caching.
The bundled files will include a hash in their names for the purpose of cache busting.
