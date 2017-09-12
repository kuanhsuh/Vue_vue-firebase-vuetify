# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

https://www.youtube.com/watch?v=e4M2MvU5QuQ&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt&index=5

https://www.youtube.com/watch?v=AesqUS2udb4&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt&index=8



    <v-toolbar-items class="hidden-xs-only">
    <v-btn flat v-for="item in menuItems" :key="item.title">
      <v-icon dark left>{{ item.icon }}</v-icon>
     {{ item.title }}
    </v-btn>
    </v-toolbar-items>