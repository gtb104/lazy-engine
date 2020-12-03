import Route from '@ember/routing/route';

export default class FooRoute extends Route {
  beforeModel() {
    console.log('foo route');
  }
}
