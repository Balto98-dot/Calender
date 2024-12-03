// Obtener referencias a los elementos del HTML
const calendar = document.getElementById('calendar');
const activityList = document.getElementById('activity-list');

// Definir las actividades para algunos días del mes
const activities = {
  
  3: ['Almuerzo de comunicaciones CVC 11:00 AM', 'Informativo pieza-historia'],
  5: ['Reconocimiento FENALCO 5:00PM DENIS' , 'Dia Nacional del Arrecife Coralino (tipos de arrecife que tenemos en nuestro pacifico) Danilo para TIK TOK también' ],
  6: ['Reflexión de Director'],
  7: ['Día de las velitas-pieza (Danilo mensaje especial de polvora para TIK TOK también)'],
  10: ['Informativo pieza-historias' , 'Reflexión Director' ],
  11: ['Liberación fauna y entrega de carros de fauna- el cerrito (Camila-Aura y sara constantino) Sara Constantino lo puede compartir con nuestro TIK TOK' , ' Halcón de Oro 5:00PM-Terraza CVC (AURA)' ],
  12: ['Tesos por el ambiente 8:00AM- javeriana (Camila)' , 'Cumbre de CARS-Popayán (Camila)' ],
  13: ['Cumbre de CARS-Popayán (camila)' , 'Navidad Sostenible: Para hacer decoraciones navideñas von materiales reciclados, como adornos con botellas plásticas o carton TIK TOK' ],
  16: ['Entrega de Indorme en la Oficiina de Comunicaciones CVC (Wil-Aura y Camila)' , 'Villancicos y Pesebres 10:00AM – CVC (Camila Y Aura)' ],
  17: ['Por un Campo más sotenible 6:00AM (Denis / Juan Jose)' , 'Informativo Pieza - Historias'],
  18: ['Como Reducir residuos durante las fiestas ( sin platos, vasos y tenedores desechables, lleva bolsas reutilizables, etc..) TIK TOK ' ],
  19: ['Fiesta de Fin de Año 12:00PM – Club CVC (Aura – Camila)' ],
  20: ['Reflexión Director' , 'Vox pop – Di NO a la polvorá este Diciembre, esto es lo que ocaciona (aves mascotas y fauna asustadas)TIK TOK' ],
  23: ['Video sensible con Mensaje de Polvora' , 'Video sensible con Mensaje de Polvora TIK TOK' ],
  24: ['Navidad - pieza (Danilo) Mensaje especial' , 'Navidad - pieza (Danilo) Mensaje especial TIK TOK' ],
  25: ['Inicio de la Feria de Cali – Pieza de consientización para no dejar basura, no a la polvora, contaminación auditiva (Danilo)' ],
  31: ['Año Nuevo - pieza (Danilo) Mensaje especial' , 'Año Nuevo - pieza (Danilo) Mensaje especial TIK TOK' ],
    
  
};

// Función para generar el calendario del mes actual
function generateCalendar(month, year) {
  // Obtener el número de días del mes
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  calendar.innerHTML = ''; // Limpiar el calendario antes de volver a generarlo

  // Crear los días del mes en el calendario
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day'); // Añadir la clase 'day' para el estilo
    dayElement.textContent = i; // Poner el número del día en el div

    // Añadir un evento de clic a cada día
    dayElement.onclick = () => showActivities(i);

    calendar.appendChild(dayElement); // Añadir el día al calendario
  }
}

// Función para mostrar las actividades al hacer clic en un día
function showActivities(day) {
  activityList.innerHTML = ''; // Limpiar la lista de actividades

  // Verificar si hay actividades para el día seleccionado
  const dayActivities = activities[day];

  if (dayActivities) {
    // Si hay actividades, mostrarlas
    dayActivities.forEach(activity => {
      const activityItem = document.createElement('li');
      activityItem.textContent = activity;
      activityList.appendChild(activityItem);
    });
  } else {
    // Si no hay actividades, mostrar un mensaje
    const noActivity = document.createElement('li');
    noActivity.textContent = 'No hay actividades para este día.';
    activityList.appendChild(noActivity);
  }
}

// Generar el calendario para el mes actual
const date = new Date();
generateCalendar(date.getMonth(), date.getFullYear());








// Función para generar el calendario del mes actual
function generateCalendar(month, year) {
  // Obtener el número de días del mes
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  calendar.innerHTML = ''; // Limpiar el calendario antes de volver a generarlo

  // Crear los días del mes en el calendario
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day'); // Añadir la clase 'day' para el estilo

    // Identificar sábado y domingo
    const date = new Date(year, month, i);
    const dayOfWeek = date.getDay(); // 0 = Domingo, 6 = Sábado

    if (dayOfWeek === 6) {  // Sábado
      dayElement.classList.add('saturday');
    } else if (dayOfWeek === 0) {  // Domingo
      dayElement.classList.add('sunday');
    }

    dayElement.textContent = i; // Poner el número del día en el div

    // Añadir un evento de clic a cada día
    dayElement.onclick = () => showActivities(i);

    calendar.appendChild(dayElement); // Añadir el día al calendario
  }
}
