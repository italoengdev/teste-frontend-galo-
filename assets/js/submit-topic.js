function submitTopic() {
  var submitContent = document.getElementById('creatingTopic')
  var showSubmitTopic = document.getElementById('topic-submit')
  var topicDefault = document.querySelector('#topic-default')
  var divCont = `<h3>Assunto da pergunta aparece aqui</h3>
  <h4>Carlos Henrique Santos</h4>
  <p>
    Comecinho da pergunta aparece aqui resente relato inscreve-se no
    campo da análise da dimensão e impacto de processo formativo situado
    impacto de processo formativo processo...
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
      '0.04fr 0.06fr 1.4fr 0.6fr 3fr 0.4fr'
    topicDefault.style.cssText = 'display:flex;'
    topicDefault.classList.add('disc-topic')
    topicDefault.innerHTML = topicDefault.innerHTML + divCont
  } else {
    submitContent.style.display = 'inline'
    showSubmitTopic.style.display = 'none'
    document.getElementById('change-body-row').style.gridTemplateRows =
      '0.04fr 0.06fr 1.4fr 0.6fr 2fr 0.4fr'
  }
}
