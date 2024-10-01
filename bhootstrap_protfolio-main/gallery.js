fetch(`https://picsum.photos/v2/list?page=2&limit=04`)
      .then(response => response.json())
      .then(json =>{
        let photoGalleryInfo = ""
        for (let js of json){
            console.log(js);
            photoGalleryInfo +=
         `<div class="col-lg-6 p-2">
            <img src=${js.download_url} width="100%"height="200px">
          </div>`
        }
        document.getElementById('photo-gallery-contain').innerHTML = photoGalleryInfo
      })
