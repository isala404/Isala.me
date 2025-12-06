// Dog Easter Egg
(function () {
  const container = document.querySelector(".dog-container");
  if (!container) return;

  let isBarking = false;

  container.addEventListener("click", function () {
    if (isBarking) return;
    isBarking = true;

    container.classList.add("barking");

    function addWoof(side, delay) {
      setTimeout(() => {
        const woof = document.createElement("span");
        woof.className = "woof woof-" + side;
        woof.textContent = "woof!";
        container.appendChild(woof);
        setTimeout(() => woof.remove(), 500);
      }, delay);
    }

    const firstSide = Math.random() > 0.5 ? "left" : "right";
    const secondSide = firstSide === "left" ? "right" : "left";

    addWoof(firstSide, 0);
    addWoof(secondSide, 500);

    setTimeout(() => {
      container.classList.remove("barking");
      isBarking = false;
    }, 1000);
  });
})();

// Quote Easter Egg
(function () {
  const quote = document.getElementById("quote");
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  if (!quote) return;

  setTimeout(() => {
    
    quote.style.opacity = "1";
    quote.style.transform = "none";
  }, 1200);

  const originalText = quoteText.textContent;
  const originalAuthor = quoteAuthor.textContent;
  const leviText = '"Give up on your dreams and die."';
  const leviAuthor = "— Levi Ackerman";

  let hoverTimer = null;
  let isLevi = false;

  function glitchChange(newText, newAuthor) {
    quote.classList.add("glitching");
    setTimeout(() => {
      quoteText.textContent = newText;
      quoteAuthor.textContent = newAuthor;
    }, 250);
    setTimeout(() => {
      quote.classList.remove("glitching");
    }, 500);
  }

  quote.addEventListener("mouseenter", function () {
    hoverTimer = setTimeout(() => {
      glitchChange(leviText, leviAuthor);
      isLevi = true;
    }, 2500);
  });

  quote.addEventListener("mouseleave", function () {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
    if (isLevi) {
      glitchChange(originalText, originalAuthor);
      isLevi = false;
    }
  });
})();

// Draggable Tiles
(function () {
  const grid = document.querySelector(".now-grid");
  if (!grid) return;

  const DRAG_THRESHOLD = 8;
  const STORAGE_KEY = "tile-order";

  function restoreOrder() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const order = JSON.parse(saved);
      const tiles = Array.from(grid.querySelectorAll(".now-tile"));
      const tileMap = {};
      tiles.forEach((t) => (tileMap[t.dataset.tile] = t));

      order.forEach((id) => {
        if (tileMap[id]) {
          grid.appendChild(tileMap[id]);
        }
      });
    } catch (e) {}
  }

  function saveOrder() {
    const tiles = Array.from(grid.querySelectorAll(".now-tile"));
    const order = tiles.map((t) => t.dataset.tile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  }

  restoreOrder();

  let pendingTile = null;
  let dragging = null;
  let clone = null;
  let startX, startY, offsetX, offsetY;
  let tileRect = null;
  let lastHovered = null;

  function showHint() {
    if (dragging) return;
    const tiles = Array.from(grid.querySelectorAll(".now-tile"));
    const tile = tiles[Math.floor(Math.random() * tiles.length)];
    tile.classList.add("hint");
    tile.addEventListener("animationend", () => tile.classList.remove("hint"), { once: true });
  }

  setTimeout(showHint, 5000);
  setInterval(showHint, 30000);

  grid.addEventListener("mousedown", function (e) {
    const tile = e.target.closest(".now-tile");
    if (!tile || e.button !== 0) return;

    e.preventDefault();

    const rect = tile.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    tileRect = rect;

    pendingTile = tile;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  function startDrag() {
    if (!pendingTile || dragging) return;

    dragging = pendingTile;
    pendingTile = null;

    clone = dragging.cloneNode(true);
    clone.classList.add("dragging");
    clone.style.width = tileRect.width + "px";
    clone.style.height = tileRect.height + "px";
    clone.style.left = tileRect.left + "px";
    clone.style.top = tileRect.top + "px";
    document.body.appendChild(clone);

    dragging.classList.add("placeholder");
    grid.classList.add("dragging-active");
  }

  function onMouseMove(e) {
    if (pendingTile && !dragging) {
      const deltaX = Math.abs(e.clientX - startX);
      const deltaY = Math.abs(e.clientY - startY);
      if (deltaX > DRAG_THRESHOLD || deltaY > DRAG_THRESHOLD) {
        startDrag();
      }
    }

    if (!dragging || !clone) return;

    clone.style.left = e.clientX - offsetX + "px";
    clone.style.top = e.clientY - offsetY + "px";

    const tiles = Array.from(grid.querySelectorAll(".now-tile:not(.placeholder)"));
    let hovered = null;

    for (const tile of tiles) {
      const rect = tile.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        hovered = tile;
        break;
      }
    }

    if (hovered && hovered !== lastHovered) {
      const allTiles = Array.from(grid.querySelectorAll(".now-tile"));
      const dragIndex = allTiles.indexOf(dragging);
      const hoverIndex = allTiles.indexOf(hovered);

      if (dragIndex < hoverIndex) {
        grid.insertBefore(dragging, hovered.nextSibling);
      } else {
        grid.insertBefore(dragging, hovered);
      }
      lastHovered = hovered;
    }
  }

  function onMouseUp(_e) {
    const wasDragging = dragging !== null;
    const hadPending = pendingTile !== null;

    if (clone) {
      clone.remove();
      clone = null;
    }

    if (dragging) {
      dragging.classList.remove("placeholder");
      grid.classList.remove("dragging-active");
      saveOrder();
    }

    if (hadPending && !wasDragging && pendingTile.tagName === "A" && pendingTile.href) {
      window.open(pendingTile.href, pendingTile.target || "_self");
    }

    pendingTile = null;
    dragging = null;
    lastHovered = null;
    tileRect = null;

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
})();

// Konami Code Easter Egg
(function () {
  const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
  const hintChars = ["↑", "↑", "↓", "↓", "←", "→", "←", "→", "B", "A"];
  let konamiIndex = 0;
  let vhsActive = false;

  const vhsOverlay = document.getElementById("vhs-overlay");
  const konamiMessage = document.getElementById("konami-message");
  const konamiHint = document.getElementById("konami-hint");

  function updateHint() {
    if (!konamiHint) return;
    if (konamiIndex > 0) {
      konamiHint.classList.add("progress");
      const completed = hintChars.slice(0, konamiIndex).join("");
      const remaining = hintChars.slice(konamiIndex).join("");
      konamiHint.innerHTML = `<span style="color: #e85a3c">${completed}</span>${remaining}`;
    } else {
      konamiHint.classList.remove("progress");
      konamiHint.textContent = hintChars.join("");
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.code === konamiCode[konamiIndex]) {
      konamiIndex++;
      updateHint();
      if (konamiIndex === konamiCode.length) {
        activateVHS();
        konamiIndex = 0;
        updateHint();
      }
    } else {
      konamiIndex = 0;
      updateHint();
    }
  });

  function activateVHS() {
    if (vhsActive) {
      vhsOverlay.classList.remove("active");
      konamiMessage.classList.remove("show");
      if (konamiHint) konamiHint.classList.remove("hidden");
      vhsActive = false;
    } else {
      vhsOverlay.classList.add("active");
      konamiMessage.classList.add("show");
      if (konamiHint) konamiHint.classList.add("hidden");
      vhsActive = true;

      setTimeout(() => {
        konamiMessage.classList.remove("show");
      }, 2000);
    }
  }
})();

// Name Click Easter Egg
(function () {
  const nameText = document.getElementById("name-text");
  const nameTooltip = document.getElementById("name-tooltip");
  if (!nameText || !nameTooltip) return;

  let clickCount = 0;
  let resetTimer = null;
  const CLICK_THRESHOLD = 3;

  const tooltipMessages = ["stop that!", "seriously?", "okay okay...", "fine, you win", "( ´_ゝ`)"];

  nameText.addEventListener("click", function () {
    clickCount++;

    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      clickCount = 0;
    }, 2000);

    if (clickCount >= CLICK_THRESHOLD) {
      nameText.classList.add("shaking");

      const msgIndex = Math.min(Math.floor((clickCount - CLICK_THRESHOLD) / 2), tooltipMessages.length - 1);
      nameTooltip.textContent = tooltipMessages[msgIndex];
      nameTooltip.classList.add("show");

      nameText.addEventListener("animationend", () => {
        nameText.classList.remove("shaking");
      }, { once: true });

      setTimeout(() => {
        nameTooltip.classList.remove("show");
      }, 1500);
    }
  });
})();

// Footer Joke Easter Egg
(function () {
  const footerText = document.getElementById("footer-text");
  if (!footerText) return;

  const jokes = [
    "worked on my machine · your mileage may vary",
    "no bugs were mass-harmed in the making",
    "localhost:3000 was the real friend all along",
    "git push --force · git push --remorse",
    "undefined is not a function · or is it?",
    'console.log("here") · the OG debugger',
    "it's not a bug · it's a feature request",
  ];

  let currentIndex = 0;
  let isAnimating = false;

  footerText.addEventListener("click", function () {
    if (isAnimating) return;
    isAnimating = true;

    footerText.classList.add("switching");

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % jokes.length;
      footerText.textContent = jokes[currentIndex];
    }, 150);

    setTimeout(() => {
      footerText.classList.remove("switching");
      isAnimating = false;
    }, 300);
  });
})();

// Bug Hunter Mini Game
(function () {
  const overlay = document.getElementById("game-overlay");
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas ? canvas.getContext("2d") : null;
  const startScreen = document.getElementById("game-start");
  const gameOverScreen = document.getElementById("game-over");
  const scoreEl = document.getElementById("game-score");
  const livesEl = document.getElementById("game-lives");
  const finalScoreEl = document.getElementById("final-score");
  const highScoreEl = document.getElementById("high-score");
  const closeBtn = document.getElementById("game-close");

  if (!overlay || !canvas || !ctx) return;

  let gameActive = false;
  let gameRunning = false;
  let animationId = null;
  let score = 0;
  let lives = 3;
  let highScore = parseInt(localStorage.getItem("bugHunterHighScore")) || 0;

  let player = { x: 0, y: 0, width: 30, height: 20 };
  let bullets = [];
  let enemies = [];
  let particles = [];

  const BULLET_SPEED = 8;
  const PLAYER_SPEED = 3;
  const ENEMY_SPAWN_RATE = 60;
  const BASE_ENEMY_SPEED = 1.5;
  let frameCount = 0;
  let difficulty = 1;

  let keys = { left: false, right: false };

  const BUG_TYPES = [
    { text: "404", color: "#e85a3c", points: 10 },
    { text: "NaN", color: "#d4a84b", points: 15 },
    { text: "nil", color: "#4a9ba0", points: 20 },
    { text: "ERR", color: "#e85a3c", points: 25 },
    { text: "bug", color: "#6b6b7a", points: 30 },
  ];

  function initCanvas() {
    canvas.width = 400;
    canvas.height = 500;
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 50;
  }

  function resetGame() {
    score = 0;
    lives = 3;
    difficulty = 1;
    frameCount = 0;
    bullets = [];
    enemies = [];
    particles = [];
    player.x = canvas.width / 2 - player.width / 2;
    updateUI();
  }

  function updateUI() {
    scoreEl.textContent = score;
    livesEl.textContent = "♥".repeat(lives) + "♡".repeat(3 - lives);
    highScoreEl.textContent = highScore;
  }

  function shoot() {
    bullets.push({ x: player.x + player.width / 2 - 2, y: player.y, width: 4, height: 12 });
  }

  function spawnEnemy() {
    const type = BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)];
    const width = 40;
    enemies.push({
      x: Math.random() * (canvas.width - width),
      y: -30,
      width: width,
      height: 25,
      speed: BASE_ENEMY_SPEED + (difficulty - 1) * 0.3 + Math.random() * 0.5,
      type: type,
    });
  }

  function createParticles(x, y, color) {
    for (let i = 0; i < 8; i++) {
      particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 20,
        color: color,
      });
    }
  }

  function drawPlayer() {
    ctx.fillStyle = "#e8e0d5";
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2, player.y);
    ctx.lineTo(player.x, player.y + player.height);
    ctx.lineTo(player.x + player.width, player.y + player.height);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#e85a3c";
    ctx.fillRect(player.x + player.width / 2 - 2, player.y + 5, 4, 10);
  }

  function drawBullet(b) {
    ctx.fillStyle = "#e85a3c";
    ctx.fillRect(b.x, b.y, b.width, b.height);
    ctx.shadowColor = "#e85a3c";
    ctx.shadowBlur = 5;
    ctx.fillRect(b.x, b.y, b.width, b.height);
    ctx.shadowBlur = 0;
  }

  function drawEnemy(e) {
    ctx.fillStyle = "rgba(232, 224, 213, 0.1)";
    ctx.fillRect(e.x, e.y, e.width, e.height);
    ctx.strokeStyle = e.type.color;
    ctx.lineWidth = 2;
    ctx.strokeRect(e.x, e.y, e.width, e.height);
    ctx.fillStyle = e.type.color;
    ctx.font = "bold 12px JetBrains Mono";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(e.type.text, e.x + e.width / 2, e.y + e.height / 2);
  }

  function drawParticle(p) {
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.life / 20;
    ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
    ctx.globalAlpha = 1;
  }

  function checkCollision(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
  }

  function update() {
    frameCount++;

    if (keys.left && player.x > 0) player.x -= PLAYER_SPEED;
    if (keys.right && player.x < canvas.width - player.width) player.x += PLAYER_SPEED;

    const spawnRate = Math.max(20, ENEMY_SPAWN_RATE - difficulty * 5);
    if (frameCount % spawnRate === 0) spawnEnemy();
    if (frameCount % 600 === 0) difficulty++;

    bullets = bullets.filter((b) => {
      b.y -= BULLET_SPEED;
      return b.y > -b.height;
    });

    enemies = enemies.filter((e) => {
      e.y += e.speed;

      if (e.y > canvas.height - 30) {
        lives--;
        updateUI();
        createParticles(e.x + e.width / 2, canvas.height - 30, "#e85a3c");
        if (lives <= 0) endGame();
        return false;
      }

      for (let i = bullets.length - 1; i >= 0; i--) {
        if (checkCollision(bullets[i], e)) {
          bullets.splice(i, 1);
          score += e.type.points;
          updateUI();
          createParticles(e.x + e.width / 2, e.y + e.height / 2, e.type.color);
          return false;
        }
      }
      return true;
    });

    particles = particles.filter((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      return p.life > 0;
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(232, 224, 213, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    particles.forEach(drawParticle);
    bullets.forEach(drawBullet);
    enemies.forEach(drawEnemy);
    drawPlayer();
  }

  function gameLoop() {
    if (!gameRunning) return;
    update();
    draw();
    animationId = requestAnimationFrame(gameLoop);
  }

  function startGame() {
    resetGame();
    startScreen.classList.add("hidden");
    gameOverScreen.classList.add("hidden");
    gameRunning = true;
    gameLoop();
  }

  function endGame() {
    gameRunning = false;
    if (animationId) cancelAnimationFrame(animationId);

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("bugHunterHighScore", highScore);
    }

    finalScoreEl.textContent = score;
    highScoreEl.textContent = highScore;
    gameOverScreen.classList.remove("hidden");
  }

  function openGame() {
    gameActive = true;
    overlay.classList.add("active");
    initCanvas();
    updateUI();
    startScreen.classList.remove("hidden");
    gameOverScreen.classList.add("hidden");
  }

  function closeGame() {
    gameActive = false;
    gameRunning = false;
    keys.left = false;
    keys.right = false;
    if (animationId) cancelAnimationFrame(animationId);
    overlay.classList.remove("active");
  }

  document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
      if (!gameActive) {
        e.preventDefault();
        openGame();
        return;
      }

      if (gameActive) {
        e.preventDefault();
        if (!gameRunning) startGame();
        else shoot();
      }
    }

    if (gameActive && gameRunning) {
      if (e.code === "KeyA" || e.code === "ArrowLeft") keys.left = true;
      if (e.code === "KeyD" || e.code === "ArrowRight") keys.right = true;
    }

    if (e.code === "Escape" && gameActive) closeGame();
  });

  document.addEventListener("keyup", function (e) {
    if (e.code === "KeyA" || e.code === "ArrowLeft") keys.left = false;
    if (e.code === "KeyD" || e.code === "ArrowRight") keys.right = false;
  });

  closeBtn.addEventListener("click", closeGame);
})();
