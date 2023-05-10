
document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('pass').type = 'text';
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('pass').type = 'password';
  });
  
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('pass').type = 'password';
  });

  function submitForm(){
    alert('Registrado com sucesso! Aproveite e comece a comprar com a gente!!');
  }