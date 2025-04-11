const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(collapsible => {
  const button = collapsible.querySelector('.collapsible-btn');
  const content = collapsible.querySelector('.collapsible-content');

  button.addEventListener('click', () => {
    collapsible.classList.toggle('active');
    let content = button.textContent;
    if(content.includes("read")){
      button.textContent = content.replace("read","close");
    }
    else{
      button.textContent = content.replace("close","read");
    }
  });
});
