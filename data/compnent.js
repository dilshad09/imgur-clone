export const imgItem = (el) => {
  return ` <div id="galleryItemDiv">
  <div>
      <img id="galleryImage" src="./images/c1.png" alt="">
  </div>
  <div>
      <div>
          <h3 id="galleryTitle">${el.title}</h3>
      </div>
      <div id="likeDiv">
          <div><span class="material-icons-round">
                  forward
              </span>
              <p>${el.upvote_count}</p>
          </div>
          <div>
              <span class="material-icons-sharp">
                  visibility
              </span>
              <p>${el.comment_count}</p>
          </div>
          <div><span class="material-icons-outlined">
                  chat_bubble
              </span>
              <p>${el.view_count}</p>
          </div>

      </div>
  </div>
</div>`;
};

export const videoItem = (el) => {
  return `<div id="galleryItemDiv">
    <div>
    <video width="240" autoplay loop muted>
    <source src="${el.cover.url}" type="video/mp4">
</video>
    </div>
    <div>
        <div>
            <h3 id="galleryTitle">${el.title}</h3>
        </div>
        <div id="likeDiv">
            <div><span class="material-icons-round">
                    forward
                </span>
                <p>${el.upvote_count}</p>
            </div>
            <div>
                <span class="material-icons-sharp">
                    visibility
                </span>
                <p>${el.comment_count}</p>
            </div>
            <div><span class="material-icons-outlined">
                    chat_bubble
                </span>
                <p>${el.view_count}</p>
            </div>
  
        </div>
    </div>
  </div>`;
};
