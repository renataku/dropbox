"use strict";

const images = [
  {
    picture: "img/pic01.png",
    name: "Sad Clown.png",
    size: 3145728,
  },

  {
    picture: "img/pic02.png",
    name: "Waiting for the train.png",
    size: 1572864,
  },

  {
    picture: "img/pic03.png",
    name: "Little friends.jpg",
    size: 1572864,
  },

  {
    picture: "img/pic04.png",
    name: "What A Wonderful.jp",
    size: 4718592,
  },

  {
    picture: "img/pic05.png",
    name: "Gymnast.jpg",
    size: 2097152,
  },

  {
    picture: "img/pic06.png",
    name: "Blue Dandelion.png",
    size: 3145728,
  },

  {
    picture: "img/pic07.png",
    name: "Poppy for Mom.png",
    size: 1572864,
  },

  {
    picture: "img/pic08.png",
    name: "Drop some droplets.png",
    size: 1572864,
  },

  {
    picture: "img/pic09.png",
    name: "Daisy.png.png",
    size: 4718592,
  },

  {
    picture: "img/pic10.png",
    name: "Sunshine.png",
    size: 2097152,
  },

  {
    picture: "img/pic11.png",
    name: "Motorbike.png",
    size: 2621440,
  },

  {
    picture: "img/pic12.png",
    name: "Sunglases.png",
    size: 3670016,
  },

  {
    picture: "img/pic13.png",
    name: "Traffic.png",
    size: 3145728,
  },

  {
    picture: "img/pic14.png",
    name: "Bottle.png",
    size: 3670016,
  },

  {
    picture: "img/pic15.png",
    name: "Something else.png",
    size: 4194304,
  },
];

// console.log(images[0].picture, images[0].size, images[0].name);

const element = document.querySelector(".gb");

function makeElements(arr) {
  let myElements = "";

  arr.forEach((item, index) => {
    let sizeMB = convertToMb(item.size);
    myElements += `<div id="${index}" class="card flex direction-column">
    <div  class="img-container">
    <img src="${item.picture}" />
    <i class="far fa-check-circle"></i>
    </div>
    <div class="img-info">
    <h5>${item.name}</h5>
    <h6>${sizeMB} MB</h6>
    </div>
    </div>`;
  });
  capacity(convertToMb(sumItems(arr)));
  document.getElementById("my-images").innerHTML = myElements;

  document
    .querySelectorAll(".card")
    .forEach((card) =>
      card.addEventListener("click", () => card.classList.toggle("selected"))
    );
}

function sumItems(arr) {
  let sum = 0;

  arr.forEach((item) => {
    sum += item.size;
  });
  return sum;
}

// makeElements(images);

// ****************************
// const render = (arr) => {
//   let content = '';
//   arr.forEach((image) => {
//     content += `
//       <div class="image-item">
//         <div class="image" style="background-image: url(${image.path})"></div>
//         <p>${image.name}</p>
//         <p>${image.size}</p>
//       </div>
//     `
//   })
//   document.getElementById('content').innerHTML = content;
// }

// render(images);
const images2 = [...images];
images2.splice(5, 5);

makeElements(images2);
let upload = document.getElementById("file");

upload.onchange = function (e) {
  // const images2 = [];
  for (let i = 0; i < this?.files.length; i++) {
    const element = this?.files[i];
    console.log(element.name);
    images2.push({
      name: element.name,
      size: element.size,
      picture: URL.createObjectURL(element),
    });
  }
  makeElements(images2);
};

function convertToMb(kbytes) {
  const MB = (kbytes / 1048576).toFixed(1);
  return MB;
}

// element.style.setProperty("--percent", 0.5);

// console.log(document.querySelector(".capacity").textContent);

function capacity(sumKbytes) {
  console.log(sumKbytes);
  const sumMB = sumKbytes;
  const percent = sumKbytes / 100;
  document.querySelector(".capacity").textContent = `${sumMB} mb / 100 mb`;
  document.querySelector(".gb").style.setProperty("--percent", percent);
}

document.getElementById("removeChild").addEventListener("click", function () {
  document.querySelector(".selected").remove();
});

let sortName = document.getElementById("sortName");
sortName.addEventListener("click", function () {
  function compare(a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  }
  images2.sort(compare);
  makeElements(images2);
});

let sortSize = document.getElementById("size");
sortSize.addEventListener("click", function () {
  function compare(a, b) {
    if (a.size < b.size) {
      return -1;
    }
    if (a.size > b.size) {
      return 1;
    }
    return 0;
  }
  images2.sort(compare);
  makeElements(images2);
});
