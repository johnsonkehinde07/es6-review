// 1. Class
class Device {
    constructor(name, os) {
      this.name = name;
      this.os = os;
    }
  
    getDetails() {
      return `${this.name} runs on ${this.os}`;
    }
  }
  
  // 2. Async function
  async function fetchDeviceInfo() {
    return "Device info fetched asynchronously.";
  }
  
  // 3. Promise
  function delayedResponse() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved after 2 seconds!");
      }, 2000);
    });
  }
  
  // 4. Map
  const deviceMap = new Map();
  deviceMap.set("iPhone", "iOS");
  deviceMap.set("Pixel", "Android");
  
  // 5. Export all
  export { Device, fetchDeviceInfo, delayedResponse, deviceMap };
  