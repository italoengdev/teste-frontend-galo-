function submitTopic() {
  var submitContent = document.getElementById('creatingTopic')
  var showSubmitTopic = document.getElementById('topic-submit')

  if (submitContent.style.display !== 'none') {
    submitContent.style.display = 'none'
    showSubmitTopic.style.display = 'inline'
    document.getElementById('change-body-row').style.gridTemplateRows =
      '0.04fr 0.06fr 1.4fr 0.6fr 2.4fr 0.4fr'
  } else {
  }
}