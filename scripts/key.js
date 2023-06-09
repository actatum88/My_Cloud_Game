const canvas = document.getElementById('keyCanvas');
const ctx = canvas.getContext('2d');
// The canvas referenced on line 2 is null, unsure why as the id in the html is keyCanvas

//container for circles

// This generates an error; new what?
// var chart = new


// Draw the outer circle
ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.stroke();

// Draw the inner circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

// Draw the lines connecting the circles
ctx.beginPath();
ctx.moveTo(180, 100);
ctx.lineTo(150, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(20, 100);
ctx.stroke();

// Draw the letters in the outer circle
  const letters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  const angle = (2 * Math.PI) / letters.length;
    for (let i = 0; i < letters.length; i++) {
    const x = 100 + 70 * Math.cos(i * angle - Math.PI / 2);
    const y = 100 + 70 * Math.sin(i * angle - Math.PI / 2);
    ctx.fillText(letters[i], x, y);
  }


// Set the font for the inner circle letters
ctx.font = '12px Arial';

// Draw the letters in the inner circle
  for (let i = 0; i < letters.length; i++) {
    const x = 100 + 35 * Math.cos(i * angle - Math.PI / 2);
    const y = 100 + 35 * Math.sin(i * angle - Math.PI / 2);
    ctx.fillText(letters[i], x, y);
  }
