import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | habit-tracker', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:habit-tracker');
    assert.ok(route);
  });
});
