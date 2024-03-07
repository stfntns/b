function primaBilangan(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function cetakBilanganPrima(start, end) {
    for (let i = start; i <= end; i++) {
      if (primaBilangan(i)) {
        console.log(i);
      }
    }
  }
  
  // Menampilkan bilangan prima dari 1 hingga 1000
  cetakBilanganPrima(1, 1000);
  