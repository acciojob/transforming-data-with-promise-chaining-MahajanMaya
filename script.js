//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('ip').value;
    const outputDiv = document.getElementById('output');
    
    // Start the promise chain
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(Number(input));
        }, 2000);
    })
    .then((number) => {
        outputDiv.textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number * 2);
            }, 1000);
        });
    })
    .then((number) => {
        outputDiv.textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number - 3);
            }, 1000);
        });
    })
    .then((number) => {
        outputDiv.textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number / 2);
            }, 1000);
        });
    })
    .then((number) => {
        outputDiv.textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number + 10);
            }, 1000);
        });
    })
    .then((finalResult) => {
        outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
