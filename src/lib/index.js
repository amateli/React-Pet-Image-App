const getPetImage = (petName) => {
  switch (petName) {
    case 'cat':
      return getCatImage();
    case 'dog':
      return getDogImage();
    case 'fox':
      return getFoxImage();
    case 'duck':
      return getDuckImage();
    default:
      return 'https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  }
};

const getCatImage = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const responsejson = await response.json();
  return responsejson[0]["url"];
};

const getDogImage = async () => {
  const response = await fetch('https://random.dog/woof.json');
  const responsejson = await response.json();
  return responsejson["url"];
};

const getFoxImage = async () => {
  const response = await fetch('https://randomfox.ca/floof/');
  const responsejson = await response.json();
  return responsejson["image"];
};

const getDuckImage = async () => {
  // const lib = require('lib')({token: null /* link an account to create an auth token */});
// make API request
  // const response = await lib['random-duck'].api['@2.0.0'].random.jpg();
  const response = await fetch('https://random-d.uk/api/quack');
  const responsejson = await response.json();
  return responsejson["url"];
};

export {getPetImage};