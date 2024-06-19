const list = document.querySelector('.activities');

const baseURL = "https://teirza-tippets.github.io/wdd230/";
const linksURL = "https://teirza-tippets.github.io/wdd230/data/links.json";



async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks (data);
  }
  

function displayLinks(data){
    //connect to the json file to the elements in the html
    let lesson = document.createElement('li');
    //number correlation to the activity
    lesson.textContent = `${data.lesson}: `;

    data.links.forEach(link => {
    //connect to the url and titles of each activity
      let a = document.createElement('a');


    //attributes for links
      a.setAttribute('href', link.url);
      a.textContent = `${link.title}| `;
      lesson.appendChild(a);
    });

    list.appendChild(lesson);
  };

getLinks();