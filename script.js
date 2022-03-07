import { data } from "./data/data.js";
import { imgItem } from "./data/compnent.js";
import { videoItem } from "./data/compnent.js";

var arr = data();

// console.log(arr);
window.onscroll = () => {
  // console.log(scrollY);
  if (scrollY >= 10) {
    document.getElementById("stickyFooter").style.display = "none";
  }
  if (scrollY == 0) {
    document.getElementById("stickyFooter").style.display = "block";
  }
  if (scrollY <= 317) {
    document.getElementById("secondNavContainer").style.display = "none";
  }
  if (scrollY >= 317) {
    document.getElementById("secondNavContainer").style.display = "flex";
  }
};

arr.forEach((el, i) => {
  //   console.log(i);
  const galleryDiv = document.getElementById("galleryDiv");

  var gridDiv1 = document.getElementById("grid1");
  var gridDiv2 = document.getElementById("grid2");
  var gridDiv3 = document.getElementById("grid3");
  var gridDiv4 = document.getElementById("grid4");

  if (el.cover.mime_type == "image/png" || el.cover.mime_type == "image/jpeg") {
    var item = document.createElement("div");
    item.id = "galleryItem";
    item.innerHTML = imgItem(el);
  } else {
    var item = document.createElement("div");
    item.id = "galleryItem";
    item.innerHTML = videoItem(el);
  }

  // console.log(el.cover.mime_type);
  var idarr = [gridDiv1, gridDiv2, gridDiv3, gridDiv4];
  item.onclick = () => {
    console.log("dilARr", arr)
    localStorage.setItem("allData", JSON.stringify(arr))
    localStorage.setItem("data",JSON.stringify(el))
    document.open("detailsPage.html")
  };
  idarr[i % 4].append(item);
});

// if (i % 3 == 0) {
//   gridDiv1.append(item);
//   // console.log(i, "333");
// } else if (i % 4 == 0) {
//   gridDiv2.append(item);
//   // console.log(i, "333");
// } else if (i % 2 == 0) {
//   gridDiv3.append(item);
// } else if (i % 1 == 0) {
//   gridDiv4.append(item);
// }

//   var itemDiv = document.createElement("div");
//   itemDiv.id = "galleryItemDiv";

//   var image = document.createElement("img");
//   image.id = "galleryImage";
//   image.src = "./images/c1.png";

//   var div1 = document.createElement("div");

//   var div2 = document.createElement("div");

//   var tagDiv = document.createElement("div");
//   var title = document.createElement("h3");
//   title.id = "galleryTitle";
//   title.textContent = el.title;

//   tagDiv.append(title);

//   var likeDiv = document.createElement("div");
//   likeDiv.id = "likeDiv";

//   var upicon = document.createElement("p");
//   upicon.innerHTML = `<span class="material-icons-round">
//   forward
//   </span>`;

//   var upvote = document.createElement("p");
//   upvote.textContent = el.upvote_count;
//   var comment = document.createElement("p");
//   comment.textContent = el.comment_count;
//   var view = document.createElement("p");
//   view.textContent = el.view_count;

//   div1.append(image);
//   likeDiv.append(upicon, upvote, comment, view);
//   div2.append(tagDiv, likeDiv);

//   itemDiv.append(div1, div2);

//   galleryDiv.append(itemDiv);
