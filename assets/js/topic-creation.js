function createTopic() {
  var discContent = document.getElementById('topic-creation')
  var showCreatingTopic = document.getElementById('creatingTopic')
  

  if (discContent.style.display !== 'none') {
    discContent.style.display = 'none'
    showCreatingTopic.style.display = 'inline'
    document.getElementById('change-body-row').style.gridTemplateRows =
      '0.04fr 0.06fr 1.4fr 0.6fr 2.4fr 0.4fr'
      
  } else {
  }
}
