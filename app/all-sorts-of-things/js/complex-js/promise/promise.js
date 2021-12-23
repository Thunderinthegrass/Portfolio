function fPromise() {
  // console.log('Request data...');
  const out = document.querySelector('.promise-out');
  let z = 0;

  // setTimeout(() => {
  //   console.log('Preparing data...');
  //   out.innerHTML = 'прошло 2 секунды';
  //
  //   const backendData = {
  //     server: 'aws',
  //     port: 2000,
  //     status: 'working'
  //   }
  //
  //   setTimeout(() => {
  //     out.innerHTML = 'прошло 5 секунд';
  //     backendData.modified = true;
  //     console.log('Data received', backendData);
  //   }, 5000)
  // }, 2000)//плохой подход, слишком много вложенностей

  // то же самое, только с промисами:

  const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
      out.innerHTML = 'прошло 2 секунды';
      const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
      }
      resolve(backendData);//сюда передаётся переменная, чтоб потом передать ее в p.then(data), где data - это и есть эта переменная
    }, 2000)
  })

  p.then(data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.modified = true;
        resolve(data)
      }, 5000)
    })
  }).then(clientData => {
    clientData.fromPromise = true;
    console.log('Data received', clientData);
    return clientData;
  }).then(data => {
    console.log('Modified', data);
  })
  // // .catch(err => console.error('Error: ', err))//для отлавливания ошибок
  // .finally(() => console.log('Finnally'))//появляется по завершении, вне зависимости, были ли ошибки


  // //ещё некоторые возможности:
  // const sleep = ms => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(), ms)
  //   })
  // }
  //
  // // sleep(1000).then(() => console.log('Привет'));
  // // sleep(2000).then(() => console.log('И тебе привет'));
  //
  // Promise.all([sleep(2000), sleep(5000)]).then(() => {//дожидается, пока выполнится последний промис, и только потом срабатывает
  //   console.log('Все поздоровались');
  // })
  //
  // Promise.race([sleep(2000), sleep(5000)]).then(() => {//дожидается, пока выполнится первый промис, и только потом срабатывает
  //   console.log('Не все поздоровались');
  // })
}
fPromise();

































//
