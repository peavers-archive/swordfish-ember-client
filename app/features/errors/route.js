/** @format */

import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import $ from "jquery";

export default Route.extend({
  ajax: service(),

  setupController() {
    $.getJSON(
      "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      quote => {
        $(".subtitle").append(quote[0].content);
      }
    );
  }
});
