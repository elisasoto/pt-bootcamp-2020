// este submit maneja el envio del quiz

function handleSubmitQuiz(event) {
    event.preventDefault(); // ya no se recarga la pagina 😍

    // creamos los inputs del form
    const quizElements = event.target.elements;

    // creamos los inputs del form de radio questions

    const airDate = quizElements['airDate'].value;
    const chandlerJob = quizElements['chandlerJob'].value;
    const vegasShow = quizElements['vegasShow'].value;
    const cousinCassie = quizElements['cousinCassie'].value;

    // Checkbox question 3
  const charlie = quizElements['charlie'];
  const rachel = quizElements['rachel'];
  const emily = quizElements['emily'];
  const mona = quizElements['mona'];
  const elisabeth = quizElements['elisabeth'];
  const carol = quizElements['carol'];

  const wives = [
    charlie, 
    rachel, 
    emily, 
    mona, 
    elisabeth, 
    carol, 
  ];
  const wiveschck = [];

  for (let i = 0; i < wives.length; i++) {
    if (wives[i].checked) {
      wiveschck.push(wives[i].value);
    }
  }

    // Creamos un paquete final de información para enviar
  const quizData = {
    airDate: airDate,
    chandlerJob: chandlerJob,
    wives: wiveschck,
    vegasShow: vegasShow,
    cousinCassie: cousinCassie, 
  };
  // Suponemos que mandamos los datos de suscripcion a la DB


 // respuestas correctas

    const myAnswers = {
        airDate: "sept-94",
        chandlerJob: "statistics-data",
        wives: ["rachel", "emily", "carol"], 
        vegasShow: "gaygas",
        cousinCassie: "cassie",
    } 

    console.log(myAnswers)
} 


// comparativa de respuestas

/* 
compareAnswers = 
if (quizData === myAnswers) {
    document.getElementById("quizresult").innerHTML = "Great job";
} else {
    document.getElementById("quizresult").innerHTML = "You must watch more friends!";
}

console.log(compareAnswers) */ 


// aqui estamos diciendo a qué botones afectaré la prevencion del submit del handleSubmitQuiz
const quizForm = document.querySelector('#quiz-form'); 
quizForm.addEventListener('submit', handleSubmitQuiz)





// este boton maneja el submit de los datos del cliente

function handleSubmitForm(event) {
    event.preventDefault(); // ya no se recarga la pagina 😍

    // creamos los inputs del form
    const formElements = event.target.elements;


   const clientName = formElements['client-name'].value;
   const clientSurname = formElements['client-surname'].value;
   const clientEmail = formElements['client-email'].value;

   // Creamos un paquete final de información para enviar
  const clientData = {
    clientName: clientName,
    clientSurname: clientSurname,
    clientEmail: clientEmail,
 
  };
  // Suponemos que mandamos los datos de suscripcion a la DB
  console.log(clientData);

} 
const clientData = document.querySelector('#client-data'); 
clientData.addEventListener('submit', handleSubmitForm)








// codigo para seleccionar solo algunas opciones dentro del checkbox


/* $("input:checkbox").click(function() {
var bol = $("input:checkbox:checked").length >= 2;     
$("input:checkbox").not(":checked").attr("disabled",bol);
}); */