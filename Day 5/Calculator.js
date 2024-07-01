function cal (op) {
  let opr1 = document.getElementById('first').value;
  let opr2 = document.getElementById('Second').value;
  let r;


  if(op === "add"){
    r = parseInt(opr1) + parseInt(opr2);
  }

  if(op === "sub"){
    r = parseInt(opr1) - parseInt(opr2);
  }

  if(op === "mul"){
    r = parseInt(opr1) * parseInt(opr2);
  }

  if(op === "div"){
    r = parseInt(opr1) / parseInt(opr2) ;
  }

  r=document.getElementById('res').value;
}

cal (op);
