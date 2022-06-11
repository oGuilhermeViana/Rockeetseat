const buttonOpenModel = document.getElementById('openModel')
const modelWrapper = document.querySelector('.model-wrapper')

buttonOpenModel.onclick = function() {
  modelWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
  const isEscKey = event.key === 'Escape'
  if(isEscKey){
    modelWrapper.classList.add('invisible')
  }
})