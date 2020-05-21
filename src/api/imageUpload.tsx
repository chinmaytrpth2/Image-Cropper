import {API} from './API';

const imageUpload = async(url: string) => { //This may be converted into an Async Function
    const formData = new FormData();
    formData.append('upload_preset', "f90fttgc");
    formData.append('file', url!);
    return fetch(API,{
      method: "POST",
      body: formData
    }).then(res => {return res.json()})
}

export default imageUpload;