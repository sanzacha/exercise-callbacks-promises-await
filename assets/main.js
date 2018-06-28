const callBackBtn = document.getElementById('callCallBack');

callBackBtn.addEventListener('click', () => {
    $('.common-label-cls').text('');
    $('.circle').hide();
    displayCircle(displayHelloWorld);
});

let displayCircle = (callback) => {
    let helloWorld = 'Hello World!';
    
    $('.container-circle-callback').show();
    setTimeout(() => callback(helloWorld), 1500);
}

displayHelloWorld = (label) => {
    let labelText = document.getElementById('addTextElementCallback');
    labelText.innerHTML = label;
};

// Promises 

const promisesBackBtn = document.getElementById('promiseBtn');

promisesBackBtn.addEventListener('click', () => {
    $('.common-label-cls').text('');
    $('.circle').hide();
    circlePromise();
});

let circlePromise = () => {
    $('.container-circle-promises').show();

    let myFirstPromise = new Promise((resolve, reject) => {
        let helloWorld = 'Hello World!';

        setTimeout(() => resolve(helloWorld), 1500);
    });

    myFirstPromise.then((label) => {
        let labelText = document.getElementById('addTextElementPromises');
        labelText.innerHTML = label;
    });
}

// async / await

const awaitBackBtn = document.getElementById('awaitBtn');

awaitBackBtn.addEventListener('click', () => {
    $('.common-label-cls').text('');
    $('.circle').hide();

    (async function() {
        let label = await circleAwaitBtn(),
            labelText = document.getElementById('addTextElementAwait');
        labelText.innerHTML = label;
    })();
});

let circleAwaitBtn = () => {
    $('.container-circle-await').show();
    let helloWorld = 'Hello World!';

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(helloWorld), 1500);
    });

    return promise;
}

