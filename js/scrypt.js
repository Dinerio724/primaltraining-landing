document.addEventListener('DOMContentLoaded', function() {
  // Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  window.showSuccessToast = function() {
    var successToast = new bootstrap.Toast(document.getElementById('successToast'))
    successToast.show()
  }

  function showWelcomeToast() {
    setTimeout(function() {
      var welcomeToast = new bootstrap.Toast(document.getElementById('welcomeToast'))
      welcomeToast.show()
    }, 2000)
  }

  showWelcomeToast()

  // Валидация формы
  var forms = document.querySelectorAll('.needs-validation')
  
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault()
          showSuccessToast()
          var modal = bootstrap.Modal.getInstance(document.getElementById('reserveModal'))
          modal.hide()
          form.reset()
          form.classList.remove('was-validated')
        }
        
        form.classList.add('was-validated')
      }, false)
    })
})
