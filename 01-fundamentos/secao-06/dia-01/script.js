// SELETORES
// const INPUT_TEXT = document.querySelector("#input-text");
// const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
// const HREF_LINK = document.querySelector("#href");
// const prevent = (event) => {
//   event.preventDefault();
// };

// HREF_LINK.addEventListener('click', prevent);
// INPUT_CHECKBOX.addEventListener('click', prevent);
// INPUT_TEXT.addEventListener('keypress', (event) => {
//   if (event.key !== 'a') {
//     event.preventDefault();
//   }
// });

// Exercício do form TrybeTrip
const btnSubmit = document.querySelector('#enviar');

const validFields = () => {
  let fullName = document.querySelector('#nome-completo').value.length;
  let email = document.querySelector('#email').value.length;
  let whyText = document.querySelector('#motivo').value.length;

  if (fullName < 10 || fullName > 40 || email < 10 || email > 50 || whyText > 500) {
    return alert('Dados inválidos');
  }
  return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
};

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  validFields();
});

