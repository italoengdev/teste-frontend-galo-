function seeMore() {
  var dots = document.getElementById('dots')
  var moreText = document.getElementById('more')
  var btnText = document.getElementById('myBtn')
  var lessText = document.getElementById('less')


  if (dots.style.display !== 'none') {
    dots.style.display = 'none'
    btnText.style.display = 'none'
    moreText.style.display = 'inline'
    document.getElementById('change-body-row').style.gridTemplateRows =
      '0.04fr 0.06fr 1.4fr 1fr 2fr 0.4fr';
      lessText.style.display = 'inline'
  } else{
    dots.style.display = "inline";
    lessText.style.display = 'none' 
    moreText.style.display = "none";
    document.getElementById('change-body-row').style.gridTemplateRows =
      '0.04fr 0.06fr 1.4fr 0.6fr 2fr 0.4fr';
    btnText.style.display = 'inline'
  }
}
