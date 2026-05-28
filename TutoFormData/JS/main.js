const form = document.querySelector('Form')

form-addEventListener('submit', (e) => {
    // Evita que el navegador ejecute la acción en lugar de JS
    e.preventDefault();

    const formData = new FormData(form);

    // const file = document.querySelector('#file')
    // formData.append('image', file.files[0], 'image.jpeg')
    // formData.append('id', '123');

    const res = Object.fromEntries(formData);
    const payload = JSON.stringify(res);
    console.log(payload);

    for (item of formData) {
        console.log(item[0], item[1]);
    }

    fetch('https://httpbin.org/post', {
        method: "POST",
        body: payload,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    .then(res => res.json())
    .then(res => console.log(res));

})