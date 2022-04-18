for (let i = 1; i <= 9; i++) {
  if (i == 4 || i == 7) continue;
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
