export  function random_num () {
    const a = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const b = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    return [a, b];
}