# MBTA Real-time application

To start your Phoenix app:

- Install dependencies with `mix deps.get`
- Install Node.js dependencies with `npm install`
- Generate self-signed certificate and change SSL location in config/dev.exs
- Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4443`](http://localhost:4443) from your browser.

You can also visit [`The Heroku Deployed Application`](https://infinite-earth-33151.herokuapp.com/) from an internet connection.

Go to [`Phoenix and SSL localhost`](https://ohanhi.github.io/phoenix-ssl-localhost.html) to create a self-signed signature so we could potentially use [`Geo Location`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation), and [`Phoenix documentation for SSL`](http://www.phoenixframework.org/docs/configuration-for-ssl). You will need to configure Chrome if that is your browser, I configured Chrome using [`Stack Overflow`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) or you could go as far as [`Routing securely with Phoenix Framework`](https://kronicdeth.github.io/routing-securely-with-phoenix-framework/#/).

You could visit [`MBTA Developer Portal`](http://realtime.mbta.com/Portal/Home/Download) and grab the Open Development Key to authenticate and use the API for development purpose only.

# OR

Create a reverse proxy as the server and fetch it and return for the client. I could use a service like [`crossorigin service`](https://cors-anywhere.herokuapp.com) to make this app simple or I could have even made Elixir a [`CORS proxy`](https://github.com/Dania02525/cowboycors)

# Front End

I built this for **MOBILE ONLY**, I would sometimes sit at Backbay MBTA station and always have to look around the corner to see if my train was on schedule, so here you could check your phone constantly if there was a change in status. This uses ReactJS and I could have had more components. The CSS is very minimal, I wanted to focus on the whole entire stack. I started to play around with `webpack 2` but then decided against going further down the rabbit hole, you can find that in the webpack branch. It parses every destination and creates buttons to sort through the locations, next time I might strip everything from the `/` back to save space, instead of `Forge Park / 495`, it would be `Forge Park` to save on button space, and perhaps make it `#a11y` ready in case you are on a screen reader.

I have SASS set up to be the pre-proccessor, Webpack as my build tool, ES6, React, Elixir, Phoenix and various other libs, Lodash, Axios, Momentjs also snuck in the `<time></time>` HTML5 tag, and is it semantically correct to add in elements inside an `<li><span>Hello</span></li>`? [`Yes it is`](http://stackoverflow.com/questions/4967976/what-are-the-allowed-tags-inside-a-li)

## Learn more

- Deploying on Heroku: <http://www.phoenixframework.org/docs/heroku>
- Official website: <http://www.phoenixframework.org/>
- Guides: <http://phoenixframework.org/docs/overview>
- Docs: <https://hexdocs.pm/phoenix>
