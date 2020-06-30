# Sachin Tendulkar
A website visualising stats on Sachins career proving he is the greatest cricket player of all time.

Website: [https://sachintendulkar.netlify.app/](https://sachintendulkar.netlify.app/)

### Page Load
**Home page**
[GTMetrix](https://gtmetrix.com/reports/sachintendulkar.netlify.app/cj3K8oda) - 2s
[Webpagetest](https://www.webpagetest.org/result/200630_11_c487021311fe10a09470c6bf4e22ea1d/2/details/#waterfall_view_step1) - 1.8s

**Stats Page**
[GTMetrix](https://gtmetrix.com/reports/sachintendulkar.netlify.app/cj3K8oda) - 5.5s
[Webpagetest](https://www.webpagetest.org/result/200630_YK_fe8a05a89ff398124e972a00d61b9908/) - 2.8s


### Tech Stack used
1. [Nuxt js](https://nuxtjs.org/), a [Vue](https://vuejs.org/) framework
2. [Tailwindcss](https://tailwindcss.com/)

### Third party APIs, Plugins & Resources used.
1. [Vue Leaflet](https://vue2-leaflet.netlify.app/), a [Leaflet JS](https://leafletjs.com/) wrapper for vuejs - Used for showing a map where Sachin has played his matches
2. [Rest Countries](https://restcountries.eu/) - Used to get Coordinates of countries where Sachin played
3. API data is hosted on [JSON Bin](https://jsonbin.io/) - [https://api.jsonbin.io/b/5efb101d7f16b71d48a88aea](https://api.jsonbin.io/b/5efb101d7f16b71d48a88aea)
4. [Apexcharts](https://apexcharts.com/) For showing bar graphs and pie charts
5. [Axios](https://github.com/axios/axios) - For making HTTP requests
6. Heroicons

### Installation & Project setup
1. Make sure Node.js installed in your system
2. Clone the repo
3. Install the Node dependencies with `npm install`

### Development
1. Run the development server with `npm run dev`

### Production Build
1. Run command `npm run generate` which is a combination of `nuxt-build && nuxt-export`
2. Run `npm run serve` which opens up a server on port **3000**