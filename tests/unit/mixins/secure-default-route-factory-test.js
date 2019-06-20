/** @format */

import EmberObject from "@ember/object";
import SecureDefaultRouteFactoryMixin from "swordfish-ember-client/mixins/secure-default-route-factory";
import { module, test } from "qunit";

module("Unit | Mixin | secure default route factory");

// Replace this with your real tests.
test("it works", function(assert) {
  let SecureDefaultRouteFactoryObject = EmberObject.extend(
    SecureDefaultRouteFactoryMixin
  );
  let subject = SecureDefaultRouteFactoryObject.create();
  assert.ok(subject);
});
