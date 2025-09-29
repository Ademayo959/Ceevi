const filterText = document.querySelectorAll('.filter-text');
const filterDiv = document.querySelectorAll('.filter-div');

filterText.forEach((filter)=>{
    filter.addEventListener('click',()=>{
        filterDiv.forEach((div)=>{
            div.remove();
        })
    })
})

//Liking Jobs part

const liked = 'img/liked.png'
const unliked = 'img/unliked.png'
document.querySelectorAll('.like').forEach(
  svg => {
    svg.addEventListener('click', () => {
      if(svg.getAttribute("src") === unliked){
        svg.setAttribute('src', liked)
      } else {
        svg.setAttribute('src', unliked)
      }
    });
  }
);