// console.log("i am  here  guys !!");

// //  let source = 'bbc-news';
// // let apiKey  = '086cbf45755841b6a4cf18b75a2898cf';

// let newsAccordion = document.getElementById("newsAccordion");

// const xhr = new XMLHttpRequest();

// xhr.open(
//   "POST",
//   ` http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-07&sortBy=publishedAt&apiKey= 086cbf45755841b6a4cf18b75a2898cf`,
//   true
// )
// xhr.onload = function () {
//     if(this.status === 200){

//         let json =JSON.parse(this.responseText)
//         console.log(json)
//     }
//     else{
//         console.log("Some error occured")
//     }
// }

// xhr.send();
// let news = `<div class="accordion-item">
//   <h2 class="accordion-header" id="headingOne">
//     <button
//       class="accordion-button"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#collapseOne"
//       aria-expanded="true"
//       aria-controls="collapseOne"
//     >
//       Accordion Item #1
//     </button>
//   </h2>
//   <div
//     id="collapseOne"
//     class="accordion-collapse collapse show"
//     aria-labelledby="headingOne"
//     data-bs-parent="#accordionExample"
//   >
//     <div class="accordion-body">
//       <strong>This is the first item's accordion body.</strong> It is hidden by
//       default, until the collapse plugin adds the appropriate classes that we
//       use to style each element. These classes control the overall appearance,
//       as well as the showing and hiding via CSS transitions. You can modify any
//       of this with custom CSS or overriding our default variables. It's also
//       worth noting that just about any HTML can go within the{" "}
//       <code>.accordion-body</code>, though the transition does limit overflow.
//     </div>
//   </div>
// </div>`;

console.log("This is my index js file");
// Header("Content-Type:application/json");
// Header("Access-Control-Allow-origin");
// Initialize the news api parameters
// let source = "the-times-of-india";
// let apiKey = " 086cbf45755841b6a4cf18b75a2898cf";

// Grab the news container

let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
 //Access-Control-Allow-Origin: *
//  " Access-Control-Allow-Origin: *",
// "Content-Type:application/json",
// "Access-Control-Allow-origin",
  "GET",
  `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=086cbf45755841b6a4cf18b75a2898cf`,
  true
);
 

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${
        element["title"]
      }
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${
                                  element["content"]
                                }. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
