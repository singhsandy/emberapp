import { module, test } from 'qunit';
import { setupTest } from 'ember-tutorial/tests/helpers';

module('Unit | Route | product-list', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:product-list');
    assert.ok(route);
  });
});
