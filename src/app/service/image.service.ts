import { Injectable } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: Storage) { }

  public uploadImage($event: any){
    const file = $event.target.files[0];
    // delete
    console.log(file);

    //const imgRef = ref(this.storage, `imagen\`+ name)
  }
}
