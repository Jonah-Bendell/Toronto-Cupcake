



const form = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');
const dataPreview = document.getElementById('dataPreview');
const previewBlock = document.getElementById('previewBlock');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  e.stopPropagation();

  form.classList.add('was-validated');


  const email = document.getElementById('email').value.trim();
  const fullName = document.getElementById('fullName').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const consent = document.getElementById('consent').checked;


  if (!fullName || !email || !subject || !message || !consent || !form.checkValidity()) {
    showAlert('Please complete all required fields before submitting.', 'danger');
    return;
  }

  const submission = {
    timestamp: new Date().toISOString(),
    fullName,
    email,
    phone: phone || null,
    subject,
    message
  };



  
});

function showAlert(msg, type) {

  formAlert.textContent = msg;
  formAlert.classList.remove('d-none');
    if (type === 'danger') {
    setTimeout(() => { formAlert.classList.add('d-none'); }, 2000);
  }
 
  }


