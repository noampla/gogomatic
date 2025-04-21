function handleTherapySubmit(event) {
  event.preventDefault();
  const name = document.getElementById('therapy-name').value;
  alert(`תודה, ${name}! נרשמת בהצלחה לאמוציותרפיה.`);
  document.getElementById('therapy-form').reset();
}

function handleOrderSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('order-name').value;
  alert(`תודה, ${name}! הזמנתך לעותק חתום עם הקדשה רגשית התקבלה.`);
  document.getElementById('order-form').reset();
}