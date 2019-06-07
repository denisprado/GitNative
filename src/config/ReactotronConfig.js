import Reactotron from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure({
    host: "192.168.56.102",
    enabled: true,
    port: 9091
  })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
