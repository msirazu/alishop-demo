import Swal from 'sweetalert2';

const sweetAlert = () => {
    Swal.fire({
  title: 'Already Exits!',
  text: 'Please add new product',
  icon: 'error',
  confirmButtonText: 'Close'
})
}

export default sweetAlert;