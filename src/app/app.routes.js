"use strict";
var about_component_1 = require('./components/about/about.component');
var home_component_1 = require('./components/home/home.component');
exports.appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map