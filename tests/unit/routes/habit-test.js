import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | habit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:habit');
    assert.ok(route);
  });
});
