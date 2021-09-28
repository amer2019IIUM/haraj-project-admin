export default [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default },
    { path: '/developer', component: require('./components/Developer.vue').default },
    { path: '/test', component: require('./components/Test.vue').default },
    { path: '/users', component: require('./components/Users.vue').default },
    { path: '/ads', component: require('./components/product/Products.vue').default },
    { path: '/ads/tag', component: require('./components/product/Tag.vue').default },
    { path: '/ads/haraj', component: require('./components/product/Haraj.vue').default },
    { path: '/ads/brand', component: require('./components/product/Brand.vue').default },
    { path: '/ads/type', component: require('./components/product/Type.vue').default },
    { path: '/ads/model', component: require('./components/product/Model.vue').default },
    { path: '/ads/retrieve', component: require('./components/retrieve/RetrieveAds.vue').default },
    { path: '/users/retrieve', component: require('./components/retrieve/RetrieveUsers.vue').default },
    { path: '/harajs/retrieve', component: require('./components/retrieve/taxonomies/Haraj.vue').default },
    { path: '/brands/retrieve', component: require('./components/retrieve/taxonomies/Brand.vue').default },
    { path: '/models/retrieve', component: require('./components/retrieve/taxonomies/Model.vue').default },
    { path: '/types/retrieve', component: require('./components/retrieve/taxonomies/Type.vue').default },
    { path: '/reports', component: require('./components/report/Reports.vue').default },
    { path: '*', component: require('./components/NotFound.vue').default }
];