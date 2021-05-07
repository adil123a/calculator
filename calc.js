

function calc(x){
form.display.value = form.display.value+x;
}
function insert(op){
form.display.value=form.display.value+op;
}

function back(op){
  form.display.value = form.display.value.substring(0, form.display.value.length - 1);
}
