import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
}) 
Router.map(function() {
  this.route('users');
  this.route('quotes');
  this.route('habit-tracker');
  this.route('about');
  this.route('contact');
  this.route('habits');
  this.route('dashboard');
});

export default Router;