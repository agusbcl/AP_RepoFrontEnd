import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url : string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `image/`+ name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImage(name)})
    .catch(error => console.log(error));
  } 

  getImage(fileName: string){
    const imageRef = ref(this.storage, 'image')
    list(imageRef)
    .then(async response => {
      for(let item of response.items){
        if (item.name.includes(fileName))
        {
          this.url = await getDownloadURL(item);
          console.log("The URL is:" + this.url)
        }          
      }
    })
    .catch(error => console.log(error));
  }
}
