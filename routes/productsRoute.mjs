const GetAllProducts = () => {
    const api_url = 'http://localhost:3000/productos';
    return fetch(api_url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error(error);
            throw error; // Propagar el error para que se maneje en la cadena de promesas
        });
};

export { GetAllProducts };
