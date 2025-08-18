// Star Pattern

/*
 * * * *
 * * * *
 * * * *
 * * * *
 */

function star(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += " *";
    }
    console.log(row);
  }
}

// star(4);

// Right Triangle Pattern

/*
 *
 * *
 * * *
 * * * *
 */

function rightTrangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
      row += " *";
    }
    console.log(row);
  }
}

// rightTrangle(4);

// Right Triangle Number Pattern

/*
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
*/

function rightTrangleNum(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += ` ${j}`;
    }
    console.log(row);
  }
}

// rightTrangleNum(5);

// Right Triangle with Numbers

/*
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5
*/

function rightTrangleNum1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
      row += ` ${i + 1}`;
    }
    console.log(row);
  }
}

// rightTrangleNum1(5);

// Opposite Right Triangle with Numbers

/*
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
*/

function oppRightTriangle(n) {
  // for (let i = n; i > 0; i--) {
  //   let row = "";

  //   for (let j = 0; j < i; j++) {
  //     row += ` ${j + 1}`;
  //   }
  //   console.log(row);
  // }

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row += ` ${j + 1}`;
    }
    console.log(row);
  }
}

// oppRightTriangle(5);

/* ------------- Advance Pattern  ------------- */

// prettier-ignore
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function rightStarwithSpace(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }

    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

// rightStarwithSpace(5);

// Alternate one and zero

/*
 1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
 1 0 1 0 1 0
*/

function onesAndZero(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let flag = true;

    for (let j = 0; j < i + 1; j++) {
      if (flag === true) {
        row += ` ${1}`;
        flag = false;
      } else if (flag === false) {
        row += ` ${0}`;
        flag = true;
      }
    }
    console.log(row);
  }
}

onesAndZero(6);
