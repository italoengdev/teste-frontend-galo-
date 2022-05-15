function submitTopic() {
  var submitContent = document.getElementById('creatingTopic')
  var showSubmitTopic = document.getElementById('topic-submit')
  var topicDefault = document.querySelector('#topic-default')
  var form1 = document.querySelector('#tab-1').value
  var form2 = document.querySelector('#tab-2').value
  var divCont = `<h3>${form1}</h3>
  <h4>Usuário Logado Atual</h4>
  <p>
    ${form2}
  </p>
  <div class="topic-icons">
    <i class="fa-solid fa-ellipsis-vertical"></i>
    <i class="fa-solid fa-heart"></i>
    <h4>1 like</h4>
    <h4>1 resposta</h4>
  </div>`

  if (submitContent.style.display !== 'none') {
    submitContent.style.display = 'none'
    showSubmitTopic.style.display = 'inline'
    document.getElementById('change-body-row').style.gridTemplateRows =
      '0.04fr 0.06fr 1.4fr 0.6fr 3.2fr 0.4fr'
    topicDefault.style.cssText = 'display:flex;'
    topicDefault.classList.add('disc-topic')
    topicDefault.innerHTML += divCont
  } else {
    submitContent.style.display = 'inline'
    showSubmitTopic.style.display = 'none'
    document.getElementById('change-body-row').style.gridTemplateRows =
      '0.04fr 0.06fr 1.4fr 0.6fr 3.2fr 0.4fr'
    topicDefault.innerHTML = ''
    topicDefault.classList.remove('disc-topic')
    topicDefault.style.cssText = 'display:none;'
  }
}
