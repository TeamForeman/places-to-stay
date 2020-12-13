import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: '60s', target: 1 },
    { duration: '60s', target: 10 },
    { duration: '60s', target: 100 },
    { duration: '60s', target: 1000 },
  ],
};

// GET LISTING
// export default function() {
//   const id = Math.floor(Math.random() * (10000000 - 9900000) + 9900000);
//   let res = http.get(`http://localhost:3001/api/more/listings/${id}`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
//   sleep(1);
// };

// GET LISTING'S FAVORITES
// export default function() {
//   const id = Math.floor(Math.random() * (10000000 - 9900000) + 9900000);
//   let res = http.get(`http://localhost:3001/api/more/users/${id}/favorites`);
//   check(res, {
//     "success": (r) => r.status == 200
//   });
//   sleep(1);
// };

// POST FAVORITES
export default function() {
  const id = Math.floor(Math.random() * (10000000 - 9900000) + 9900000);
  let res = http.post(`http://localhost:3001/api/more/favorites`, {
    name: 'Weekend Getaways',
    listing_id: 9897132,
    photo_url: 'https://sdc-bucket-wetterauer.s3.us-east-2.amazonaws.com/images/917.jpg',
    user_id: `${id}`
  });
  check(res, {
    "success": (r) => r.status == 200
  });
  sleep(1);
};

////////// INSTALLATION /////////////
// https://medium.com/codeinsights/how-to-load-test-your-node-js-app-using-k6-74d7339bc787
// brew tap loadimpact/k6
// brew install k6
///////////// RUN SCRIPT /////////
// k6 run script.js