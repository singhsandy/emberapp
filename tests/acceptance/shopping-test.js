import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-tutorial/tests/helpers';

module('Acceptance | shopping', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /item', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/', 'This is root url.');
    await click('[data-test-product="1"]');
    assert.equal(currentURL(), '/item/1', 'This is item page.');
    await click('[data-add-to-cart]');
    assert.dom('[data-test-cart-count]').hasText('1');
    //await this.pauseTest();

    //assert.strictEqual(currentURL(), '/shopping');
  });
});
