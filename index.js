const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1646185",
  key: "f9742413a1f6c1dfbcde",
  secret: "ed950037bb0e26ae9f29",
  cluster: "us2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});
