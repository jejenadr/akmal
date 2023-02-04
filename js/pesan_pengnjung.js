const scriptURL = 'https://script.google.com/macros/s/AKfycbxBufz9v3rLhZlZcl5RNIha_YlbPhUfgEZi_8Mn7QlUb7ngI_ilX00t76AzL2qlKyLosg/exec';
const form = document.forms['Ucapan-dan-doa'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit di kirim
  // Tampilkan button loading simpan button kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // Tampilkan button kirim simpan button loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // Tampilkan Alert
      myAlert.classList.toggle('d-none');
      // reset Form
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
