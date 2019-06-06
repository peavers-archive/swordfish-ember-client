import config from "../config/environment";

export function initialize(applicationInstance) {
  let pusherService = applicationInstance.lookup("service:pusher");
  let csrfToken = config.APP.PUSHER_SECRET,
    pusherKey = config.APP.PUSHER_KEY;

  pusherService.setup(pusherKey, {
    cluster: "mt1",

    auth: {
      params: {
        authenticity_token: csrfToken
      }
    }
  });
}

export default {
  name: "pusher",
  initialize
};
