document.addEventListener('DOMContentLoaded', function() {
    const carTypeInput = document.getElementById('car-type');
    const selectedCarType = localStorage.getItem('selectedCarType');

    if (selectedCarType) {
        carTypeInput.value = selectedCarType;
        // Hapus data dari localStorage setelah menggunakannya untuk mencegah penggunaan ulang yang tidak disengaja
        localStorage.removeItem('selectedCarType');
    }
});
