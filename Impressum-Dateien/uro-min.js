var URO=null;function uroMain(){return{util:{error:function(element,ticket,app){element.removeAttribute("onerror"),element.removeEventListener("error",this.error,!1),this.setErrorState(element)},setErrorState:function(element){var parent=element.parentElement;if(parent){"picture"===parent.tagName.toLowerCase()&&(parent=(element=parent).parentElement);var width=parseInt(element.dataset.uroWidth,10)||0,height=parseInt(element.dataset.uroHeight,10)||0,img=this.placeholderTag(width,height);parent.removeChild(element),parent.appendChild(img)}},placeholderTag:function(width,height){var dataUrl="data:image/svg+xml,"+encodeURI("<svg xmlns='http://www.w3.org/2000/svg' width='"+width+"px' height='"+height+"px'></svg>"),img=document.createElement("img");return img.src=dataUrl,img.style.width="100%",img}}}}function uroGlobal(){return URO||(URO=uroMain()),URO}
//# sourceMappingURL=uro-min.js.map
