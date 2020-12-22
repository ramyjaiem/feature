import axios from "axios";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3MSwiZXhwIjoxNjM5NDY2NjE1fQ.9vE-glLQtV2NT3gNMkqeRkrWWZAhYCqX-_ibs7lC8GY";
const api = "https://api.dev.pastorsline.com/api/contacts.json";
export async function getUSContacts(page, filter) {
  let result = null;
  await axios
    .get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        companyId: 171,
        countryId: 226,
        page: page,
        query: filter,
      },
    })
    .then((r) => {
      result = r.data.contacts;
      console.log(result);
    })
    .catch((e) => alert(e));
  return result;
}

export async function getALLContacts(page, filter) {
    let result = null;
    await axios
      .get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          companyId: 171,
          page: page,
          query: filter,
        },
      })
      .then((r) => {
        result = r.data.contacts;
        console.log(result);
      })
      .catch((e) => alert(e));
    return result;
  }
