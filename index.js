const app = "I don't do much.";

const token = 'd06620356ae54001b8992aedc1155d6bd2ea33d1'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
