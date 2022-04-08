const addClickEvent = () => {
    document.addEventListener('click', () => {
        const video = document.querySelector('video');
        const videoMessage = document.getElementById('video-message');
  
        video.play();
        document.body.removeChild(videoMessage);
    });  
  };
  window.addEventListener('load', addClickEvent);
  
  
  