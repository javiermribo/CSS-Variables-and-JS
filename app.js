const inputs = document.querySelectorAll('.controls input'); 
/* querySelector devuelve un nodeList, 
no un array con el cual se puede trabajar con sus métodos como map o reduce. 
NodeList solo cuenta con unos cuantos*/

const handleUpdate = (e) => {
  const suffix = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));