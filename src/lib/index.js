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
      return 'https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
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
  const response = await fetch('https://random-d.uk/api/random');
  const responsejson = await response.json();
  return responsejson["url"];
};

export {getPetImage};