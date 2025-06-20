const axios = require("axios");
const { log } = require("./utils"); // Adjust the path as necessary
const settings = require("../config/config");

const urlChecking = "https://raw.githubusercontent.com/itsmesatyavir/endpoints/refs/heads/main/kiteai.json";

async function checkBaseUrl() {
  console.log("Checking api...".blue);
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = await getBaseApi(urlChecking);
    if (result.endpoint) {
      log("No change in api!", "success");
      return result;
    }
  } else {
    return {
      endpoint: settings.BASE_URL,
      message:
        "If the API changes, please contact the ForestArmy Telegram group (https://t.me/forestarmy) for more information and updates! | Have any issues, please contact: https://t.me/forestarmy",
    };
  }
}

async function getBaseApi(url) {
  try {
    const response = await axios.get(url);
    const content = response.data;
    if (content?.kite) {
      return { endpoint: content.kite, message: content.copyright };
    } else {
      return {
        endpoint: null,
        message:
          "If the API changes, please contact the ForestArmy Telegram group (https://t.me/forestarmy) for more information and updates! | Have any issues, please contact: https://t.me/forestarmy",
      };
    }
  } catch (e) {
    return {
      endpoint: null,
      message:
        "If the API changes, please contact the ForestArmy Telegram group (https://t.me/forestarmy) for more information and updates! | Have any issues, please contact: https://t.me/forestarmy",
    };
  }
}

module.exports = { checkBaseUrl };