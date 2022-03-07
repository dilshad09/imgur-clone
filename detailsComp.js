export function video(video_url){
    return `<video width="320" height="240" controls>
    <source src=${video_url} type="video/mp4">
    <source src=${video_url} type="video/ogg">
    Your browser does not support the video tag.
  </video>`
}