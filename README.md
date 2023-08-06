<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Задачи по JS</title>
    <script src="./js/script.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/modal.css">
    <link rel="stylesheet" href="./css/block.css">
</head>
<body>
    <h1>Test</h1>
    <div class="simple-clider-container">
        <a href="#" id="left" class="arrow">←</a>
        <div class="slider">
            <ul class="items" id="items">
                <li class="item">1</li>
                <li class="item">2</li>
                <li class="item">3</li>
                <li class="item">4</li>
                <li class="item">5</li>
                <li class="item">6</li>
                <li class="item">7</li>
                <li class="item">8</li>
            </ul>
        </div>
        <a href="#" id="right" class="arrow">→</a>
    </div>
    <div class="container">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem magnam
        ratione quasi alias adipisci molestias doloribus, provident eum natus
        rerum, numquam delectus cum at nobis consectetur deserunt perspiciatis
        eveniet temporibus.
      </p>
      <button class="btn" id="openOverlay">открыть</button>
    </div>
    <script type="html/template" id="overlayTemplate">
      <div class="modal-container">
        <a class="close" href="#">x</a>
        <div class="content"></div>
      </div>
    </script>
    <div class="blocks-coloring-container">
      <div class="controls">
        <input type="number" min="0" class="quantity-selector" />
        <input type="color" class="color-selector" />
      </div>
      <div class="blocks"></div>
    </div>
    <script src="./js/script.js"></script>
    <script src="./js/modal.js"></script>
    <script src="./js/slider.js"></script>
    <script src="./js/block.js"></script>
</body>
</html>
