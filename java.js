function returnName() {

    var nome = 'Miguel';

    if (nome === 'Miguel') {

        var nome = 'Gisele';

        console.log('Dentro do if: ' + nome);

    }

    console.log('Fora do if: ' + nome);

}

returnName();

function returnName2() {

    let nome = 'Miguel';

    if (nome === 'Miguel') {

        let nome = 'Gisele';

        console.log('Dentro do if: ' + nome);

    }

    console.log('Fora do if: ' + nome);

}

returnName2();

function returnName3() {

    const nome = 'Miguel';

    if (nome === 'Miguel') {

        const nome = 'Gisele';

        console.log('Dentro do if: ' + nome);

    }

    console.log('Fora do if: ' + nome);

}

returnName3();

array = [1, 2, 3, 4, 5];
console.log(array.length); 

array = [1, 2, 3, 4, 5];
console.log(array[2]);

array = [1, 2, 3];
array[2] = 4;
console.log(array);

array = [1, 2, 3];
array.push(4);
console.log(array);

array = [1, 2, 3];
remover = array.pop();
console.log(array);

array = [1, 2, 3];
Elemento1 = array.shift();
console.log(array); 

array = [2, 3];
array.unshift(1);
console.log(array); 





