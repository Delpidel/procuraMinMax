const procuraMinMax = (array) => {
    if (!Array.isArray(array)) {
      console.log("Não é possível encontrar");
      return;
    }
  
    if (array.length === 0) {
      console.log("Não é possível encontrar");
      return;
    }
  
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
  
    array.forEach((num) => {
      if (num < min) {
        min = num;
      }
  
      if (num > max) {
        max = num;
      }
    });
  
    if (min === Number.POSITIVE_INFINITY || max === Number.NEGATIVE_INFINITY) {
      console.log("Não é possível encontrar");
    } else {
      console.log(`Min: ${min} / Max: ${max}`);
    }
  };

const numeros = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
procuraMinMax(numeros);

const emptyArray = [];
procuraMinMax(emptyArray);

const singleElementArray = [1];
procuraMinMax(singleElementArray);

const positiveAndNegativeArray = [1, -1];
procuraMinMax(positiveAndNegativeArray);

const nullArray = null;
procuraMinMax(nullArray);

const sameValueArray = [-2, -2, -2, -2];
procuraMinMax(sameValueArray);

const randomArray = [7, 14, 21, 28, 35, -70, 42, 49];
procuraMinMax(randomArray);
