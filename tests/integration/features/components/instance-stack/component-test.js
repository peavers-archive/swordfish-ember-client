import { moduleForComponent, test } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";

moduleForComponent(
  "instance-stack",
  "Integration | Component | instance stack",
  {
    integration: true
  }
);

test("it renders", function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{instance-stack}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    ""
  );

  // Template block usage:
  this.render(hbs`
    {{#instance-stack}}
      template block text
    {{/instance-stack}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    "template block text"
  );
});
