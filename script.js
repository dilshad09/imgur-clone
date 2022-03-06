import { data } from "./data/data.js";
import { imgItem } from "./data/compnent.js";

var arr = data();

console.log(arr);

arr.forEach((el, i) => {
  //   console.log(i);
  const galleryDiv = document.getElementById("galleryDiv");

  var gridDiv1 = document.getElementById("grid1");
  var gridDiv2 = document.getElementById("grid2");
  var gridDiv3 = document.getElementById("grid3");
  var gridDiv4 = document.getElementById("grid4");

  var item = document.createElement("div");
  item.id = "galleryItem";
  item.innerHTML = imgItem(el);
  if (i % 4 == 0) {
    gridDiv1.append(item);
  } else if (i % 2 == 0) {
    gridDiv2.append(item);
  } else if (i % 3 == 0) {
    gridDiv3.append(item);
  } else {
    gridDiv4.append(item);
  }

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
});
