function seeMore() {
  var dots = document.getElementById('dots')
  var moreText = document.getElementById('more')
  var btnText = document.getElementById('myBtn')


  if (dots.style.display !== 'none') {
    dots.style.display = 'none'
    btnText.style.display = 'none'
    moreText.style.display = 'inline'
    document.getElementById('change-body-row').style.gridTemplateRows =
      '0.04fr 0.06fr 1.4fr 1fr 2fr 0.4fr'
  }
}
