(function bindInputEvent(){
  setTimeout(function(){
    var inputs = document.getElementsByTagName('input');
    for(i in inputs){
      if(inputs[i].parentNode && inputs[i].parentNode.className.indexOf('item') >=0 && inputs[i].parentNode.className.indexOf('bind-input-event-click') < 0 ){
        inputs[i].parentNode.className += ' bind-input-event-click';
        inputs[i].parentNode.addEventListener('click', function(){
          if(this.getElementsByTagName('input').length) {
            this.getElementsByTagName('input')[0].focus();
          }
        }, false);
      }
    }
    var labelsFloat = document.getElementsByClassName('label-float');
    for(i in labelsFloat) {
      if(labelsFloat[i].className && labelsFloat[i].className.indexOf('bind-input-event-focus') < 0 && labelsFloat[i].getElementsByTagName('input').length) {
        labelsFloat[i].className += ' bind-input-event-focus';
        labelsFloat[i].getElementsByTagName('input')[0].addEventListener('focus', function(){
          if(this.parentNode.getElementsByTagName('label').length && this.parentNode.getElementsByTagName('label')[0].className.indexOf('focus') < 0) {
            this.parentNode.getElementsByTagName('label')[0].className += ' focus'
          }
        }, false);
        labelsFloat[i].getElementsByTagName('input')[0].addEventListener('blur', function(){
          if(this.parentNode.getElementsByTagName('label').length && this.parentNode.getElementsByTagName('label')[0].className && !this.value.length) {
            this.parentNode.getElementsByTagName('label')[0].className = this.parentNode.getElementsByTagName('label')[0].className.replace('focus','');
          }
        }, false);
      }
    }

    bindInputEvent();
  },500);
})();