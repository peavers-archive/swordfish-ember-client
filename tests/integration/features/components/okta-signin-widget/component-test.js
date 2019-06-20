/** @format */

import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "okta-signin-widget",
  "Integration | Component | okta signin widget",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{okta-signin-widget}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );

  // Template block usage:
  this.render(hbs`
    {{#okta-signin-widget}}
      template block text
    {{/okta-signin-widget}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    "template block text"
  );
});
