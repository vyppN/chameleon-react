/**
 * @class Chameleon React
 */
import { useTryCatchAsync } from "@vyppn/trycatch";

const api = "https://vyppn.me/api/dominantColor";

const fetchData = (imageURL: string):Promise<any> => {
  return new Promise(async (resolve, reject) => {
    var details = { imageURL: imageURL };
    var inputData = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      inputData.push(encodedKey + "=" + encodedValue);
    }
    let _inputData = inputData.join("&");
    let response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      credentials: "include",
      body: _inputData
    });
    if (response.status == 200) {
      let responseJson = await response.json();
      // var message = responseJson.messess
      // console.log(responseJson)
      resolve(responseJson);
    } else {
      reject('Server Error');
    }
  });
};

export default async (imageURL: string): Promise<any> => {
  return useTryCatchAsync(()=>fetchData(imageURL));
};
