// ~1KB: mobile menu + click-to-load video facades (no third-party JS until a visitor presses play)
document.addEventListener('click',function(e){
  var m=e.target.closest('.menu-btn');
  if(m){var n=document.getElementById(m.getAttribute('aria-controls'));var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o);return}
  var v=e.target.closest('.vfacade');
  if(v&&!v.dataset.loaded){v.dataset.loaded=1;var el;
    if(v.dataset.yt){el=document.createElement('iframe');el.src='https://www.youtube-nocookie.com/embed/'+v.dataset.yt+'?autoplay=1&rel=0';el.allow='autoplay; encrypted-media; picture-in-picture';el.allowFullscreen=true;el.title=v.getAttribute('aria-label')||'Video'}
    else{el=document.createElement('video');el.src=v.dataset.mp4;el.controls=true;el.autoplay=true;el.playsInline=true}
    v.appendChild(el)}
});
