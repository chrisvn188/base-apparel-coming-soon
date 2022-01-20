export default function getElement(el){
  try {
    return document.querySelector(el);
  } catch (error) {
    return error;
  }  
}