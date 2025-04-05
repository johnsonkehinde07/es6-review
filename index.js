import { Device, fetchDeviceInfo, delayedResponse, deviceMap } from './tools.js';

const phone = new Device("Galaxy S22", "Android");
console.log(phone.getDetails());

fetchDeviceInfo().then(console.log);

delayedResponse().then(console.log);

for (let [key, value] of deviceMap) {
  console.log(`${key} => ${value}`);
}
