const isValidImg = (url: string) => {
      let img = new Image();
      img.src = url;
      img.onload = () => {
      if(img.width === 1024 && img.height === 1024){
            return true
      }
      }
}

export default isValidImg;