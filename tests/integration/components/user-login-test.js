import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-tutorial/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UserLogin />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <UserLogin>
        template block text
      </UserLogin>
    `);

    assert.dom().hasText('template block text');
  });
});
