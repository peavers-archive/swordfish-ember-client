import Controller from '@ember/controller';
import {computed, get} from '@ember/object';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service(),
});
