const axios = require('axios');
const converter = require('xml-js');

async function main() {
  const response = await axios.request({
    url: 'https://www.producthunt.com/feed',
  });

  const { data } = response;

  let dataset = converter.xml2json(data);
  if (dataset) {
    dataset = JSON.parse(dataset);
  }

  const { elements } = dataset.elements[0];

  const enties = elements.filter((element) => element.name === 'entry');

  let products = [];

  enties.forEach((entry) => {
    let temp = Object.create(null);

    for (let i = 0; i < entry.elements.length; i++) {
      const element = entry.elements[i];
      const { name, elements, attributes } = element;
      if (name !== 'link') {
        Object.assign(temp, {
          [name]: elements[0]['text'],
        });
      }

      if (name === 'link') {
        Object.assign(temp, {
          [name]: attributes['href'],
        });
      }

      if (name === 'author') {
        Object.assign(temp, {
          [name]: element.elements[0].elements[0]['text'],
        });
      }
    }

    products.push(temp);
  });

  console.warn('products', products);
}

main();
