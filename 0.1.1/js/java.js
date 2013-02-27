/*var tens = _.range(0, 100, 10), eights = _.range(0, 100, 8), fives = _.range(0, 100, 5);
var common = _.intersection(tens, eights, fives );
console.log(common);
// [0, 40, 80]


var keys = _.keys(Tuts), values = _.values(Tuts);
console.log(keys + values);
// NetTuts,WPTuts,PSDTuts,AeTutsWeb Development,WordPress,PhotoShop,After Effects

var data =   {site:' Bob',  nom: 'Fred'}, template =   'Welcome! You are at <%= nom %><%= site %>';
var parsedTemplate = _.template(template,  data );
console.log(parsedTemplate);
// Welcome! You are at NetTuts*/

var o = { greeting: "Howdy" },f = function(name) { return this.greeting +" "+ name; };
var greet = _.bind(f, o);
greet("Jess");

var func = function(greeting){ return greeting + ': ' + this.name };
func = _.bind(func, {name : 'moe'}, 'hi');
func();

