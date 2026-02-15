const levels = [
    {
        number: 1,
        title: "Pintu Misteri",
        description: "Anda berada di depan tiga pintu. Pintu mana yang harus dibuka?",
        challenge: "Petunjuk: Pintu yang benar adalah yang paling gelap.",
        options: [
            { text: "Pintu Merah Terang", correct: false },
            { text: "Pintu Hitam Gelap", correct: true },
            { text: "Pintu Putih Bersinar", correct: false },
            { text: "Pintu Biru Muda", correct: false }
        ]
    },
    {
        number: 2,
        title: "Teka-teki Sihir",
        description: "Seorang penyihir memberikan Anda sebuah teka-teki.",
        challenge: "Saya memiliki kota, tetapi tidak ada rumah. Saya memiliki gunung, tetapi tidak ada pohon. Saya memiliki air, tetapi tidak ada ikan. Apa yang saya?",
        options: [
            { text: "Peta", correct: true },
            { text: "Dongeng", correct: false },
            { text: "Mimpi", correct: false },
            { text: "Imajinasi", correct: false }
        ]
    },
    {
        number: 3,
        title: "Jembatan Angka",
        description: "Untuk menyeberangi jembatan, Anda harus menjawab pertanyaan matematika.",
        challenge: "Berapa hasil dari 8 + 7 × 2 = ?",
        options: [
            { text: "22", correct: true },
            { text: "30", correct: false },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        number: 4,
        title: "Hutan Terlarang",
        description: "Anda memasuki hutan gelap yang penuh misteri. Ada tiga jalan yang berbeda.",
        challenge: "Jalan mana yang akan membawa Anda ke keluar dengan selamat?",
        options: [
            { text: "Jalan yang berbau harum", correct: false },
            { text: "Jalan dengan cahaya terang", correct: true },
            { text: "Jalan yang paling gelap", correct: false },
            { text: "Jalan berputar-putar", correct: false }
        ]
    },
    {
        number: 5,
        title: "Permainan Logika",
        description: "Di sebuah kamar ada 4 orang. Lampu dimatikan dan pintu dikunci.",
        challenge: "Jika 1 orang meninggalkan kamar, berapa banyak orang yang tertinggal?",
        options: [
            { text: "3 orang", correct: true },
            { text: "4 orang", correct: false },
            { text: "2 orang", correct: false },
            { text: "1 orang", correct: false }
        ]
    },
    {
        number: 6,
        title: "Gua Naga Purba",
        description: "Anda menemukan gua dengan patung-patung naga. Ada inscripsi kuno pada dinding.",
        challenge: "Kata yang memiliki 5 huruf dan menjadi lebih pendek ketika Anda menambahkan dua huruf padanya adalah?",
        options: [
            { text: "Sepatu", correct: true },
            { text: "Pensil", correct: false },
            { text: "Kertas", correct: false },
            { text: "Buku", correct: false }
        ]
    },
    {
        number: 7,
        title: "Istana Terakhir",
        description: "Anda mencapai istana yang dijaga oleh 3 penjaga. Hanya satu yang jujur.",
        challenge: "Sebuah jam menunjukkan waktu yang sama dua kali sehari. Apa yang selalu menunjukkan waktu yang benar?",
        options: [
            { text: "Matahari", correct: true },
            { text: "Jam dinding", correct: false },
            { text: "Ponsel", correct: false },
            { text: "Jam tangan", correct: false }
        ]
    },
    {
        number: 8,
        title: "Lembah Angin",
        description: "Angin memberikan Anda sebuah teka-teki untuk dapat melewatinya.",
        challenge: "Saya memiliki kunci tetapi tidak ada pintu. Saya memiliki ruang tetapi tidak ada rumah. Apa yang saya?",
        options: [
            { text: "Keyboard", correct: true },
            { text: "Kotak", correct: false },
            { text: "Tas", correct: false },
            { text: "Lemari", correct: false }
        ]
    },
    {
        number: 9,
        title: "Menara ES",
        description: "Anda naik menara es yang sangat tinggi dan dingin. Puzzle terakhir menunggu.",
        challenge: "Apa yang dapat Anda pegang tanpa menggunakan tangan Anda?",
        options: [
            { text: "Percakapan", correct: true },
            { text: "Batu", correct: false },
            { text: "Bola", correct: false },
            { text: "Buku", correct: false }
        ]
    },
    {
        number: 10,
        title: "Pohon Kehidupan",
        description: "Anda telah mencapai ujung petualangan. Yang terakhir adalah tantangan paling sulit.",
        challenge: "Sedikit ada yang lebih cepat dari saya, dan tidak ada yang lebih lambat. Saya membunuh semua orang yang tertawa. Apa yang saya?",
        options: [
            { text: "Waktu", correct: true },
            { text: "Cahaya", correct: false },
            { text: "Angin", correct: false },
            { text: "Bunyi", correct: false }
        ]
    }
];

// Game State
let gameState = {
    currentLevel: 1,
    score: 0,
    lives: 5,
    completedLevels: [],
    isAnswered: false,
    selectedAnswer: null,
    gameOver: false
};

// Initialize Game
function initializeGame() {
    displayMenu();
}

// Display Menu
function displayMenu() {
    document.getElementById('menuScreen').classList.remove('hidden');
    document.getElementById('gameScreen').classList.add('hidden');
    
    // Create level buttons
    const levelSelect = document.getElementById('levelSelect');
    levelSelect.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = 'level-btn';
        
        // Level dapat dimainkan hanya jika semua level sebelumnya sudah selesai
        const isUnlocked = (i === 1) || gameState.completedLevels.includes(i - 1);
        
        if (gameState.completedLevels.includes(i)) {
            btn.classList.add('completed');
        }
        if (gameState.currentLevel === i) {
            btn.classList.add('current');
        }
        
        if (!isUnlocked) {
            btn.classList.add('locked');
            btn.textContent = '🔒 ' + i;
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
        } else {
            btn.textContent = i;
            btn.onclick = () => startGame(i);
        }
        
        levelSelect.appendChild(btn);
    }
}

// Start Game
function startGame(levelNumber) {
    gameState.currentLevel = levelNumber;
    gameState.lives = 5;
    gameState.isAnswered = false;
    gameState.selectedAnswer = null;
    
    document.getElementById('menuScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    
    displayLevel();
}

// Display Level
function displayLevel() {
    const level = levels[gameState.currentLevel - 1];
    
    document.getElementById('levelDisplay').textContent = level.number;
    document.getElementById('scoreDisplay').textContent = gameState.score;
    document.getElementById('livesDisplay').textContent = gameState.lives;
    
    // Update progress bar
    const progress = (level.number / 10) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';
    
    // Display lives
    const livesContainer = document.getElementById('livesContainer');
    livesContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart' + (i >= gameState.lives ? ' empty' : '');
        heart.textContent = '❤️';
        livesContainer.appendChild(heart);
    }
    
    // Display challenge
    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = `
        <h2>${level.title}</h2>
        <p class="level-description">${level.description}</p>
        <div class="challenge">
            <h3>Pertanyaan:</h3>
            <p>${level.challenge}</p>
        </div>
        <div class="options">
            ${level.options.map((option, index) => `
                <button class="option-btn" onclick="selectAnswer(${index})" 
                        ${gameState.isAnswered ? 'disabled' : ''}>
                    ${option.text}
                </button>
            `).join('')}
        </div>
    `;
}

// Select Answer
function selectAnswer(optionIndex) {
    if (gameState.isAnswered) return;
    
    gameState.isAnswered = true;
    gameState.selectedAnswer = optionIndex;
    
    const level = levels[gameState.currentLevel - 1];
    const isCorrect = level.options[optionIndex].correct;
    
    // Highlight answer
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === optionIndex) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (isCorrect && level.options[index].correct) {
            btn.classList.add('correct');
        }
    });
    
    // Show result
    setTimeout(() => {
        if (isCorrect) {
            showResultModal(true, level.number);
        } else {
            gameState.lives--;
            if (gameState.lives <= 0) {
                showGameOver();
            } else {
                showResultModal(false, level.number);
            }
        }
    }, 1500);
}

// Show Result Modal
function showResultModal(isCorrect, levelNumber) {
    const modal = document.getElementById('resultModal');
    const content = document.getElementById('resultContent');
    
    if (isCorrect) {
        gameState.score += 100;
        if (!gameState.completedLevels.includes(levelNumber)) {
            gameState.completedLevels.push(levelNumber);
        }
        content.innerHTML = `
            <div class="emoji">✅</div>
            <div class="result-message result-correct">Jawaban Benar!</div>
            <p>Anda mendapatkan 100 poin!</p>
        `;
    } else {
        content.innerHTML = `
            <div class="emoji">❌</div>
            <div class="result-message result-incorrect">Jawaban Salah!</div>
            <p>Nyawa Anda dikurangi. Tersisa: ${gameState.lives} nyawa</p>
        `;
    }
    
    modal.style.display = 'block';
}

// Close Result Modal
function closeResultModal() {
    document.getElementById('resultModal').style.display = 'none';
    const level = levels[gameState.currentLevel - 1];
    
    if (level.options[gameState.selectedAnswer].correct) {
        // Move to next level
        if (gameState.currentLevel < 10) {
            startGame(gameState.currentLevel + 1);
        } else {
            showVictory();
        }
    } else {
        // Replay same level
        gameState.isAnswered = false;
        gameState.selectedAnswer = null;
        displayLevel();
    }
}

// Show Game Over
function showGameOver() {
    const level = levels[gameState.currentLevel - 1];
    const modal = document.getElementById('endGameModal');
    const content = document.getElementById('endGameContent');
    const retryBtn = document.getElementById('retryBtn');
    
    // Tandai bahwa permainan sudah berakhir
    gameState.gameOver = true;
    
    // Sembunyikan tombol "Main Lagi"
    retryBtn.style.display = 'none';
    
    content.innerHTML = `
        <div class="emoji">😭</div>
        <h2 style="color: #f44336;">Game Over!</h2>
        <p>Anda kehabisan nyawa di Level ${level.number}</p>
        <p style="font-size: 1.3em; margin-top: 15px;"><strong>Skor Akhir: ${gameState.score}</strong></p>
        <p>Permainan berakhir. Anda harus menyelesaikan level ini untuk melanjutkan.</p>
    `;
    
    modal.style.display = 'block';
}

// Show Victory
function showVictory() {
    const modal = document.getElementById('endGameModal');
    const content = document.getElementById('endGameContent');
    const retryBtn = document.getElementById('retryBtn');
    
    // Tampilkan tombol "Main Lagi" untuk kemenangan
    retryBtn.style.display = 'inline-block';
    
    content.innerHTML = `
        <div class="emoji">🎉</div>
        <h2 style="color: #667eea;">Selamat Anda Menang!</h2>
        <p>Anda telah menyelesaikan semua 10 level!</p>
        <p style="font-size: 1.3em; margin-top: 15px;"><strong>Skor Akhir: <span style="color: #4caf50;">${gameState.score}</span></strong></p>
        <p>Anda adalah Petualang Sejati! Penghargaan kepada Anda atas keberhasilan ini! 🏆</p>
    `;
    
    modal.style.display = 'block';
}

// Back to Menu
function backToMenu() {
    document.getElementById('endGameModal').style.display = 'none';
    
    if (gameState.gameOver) {
        // Jika permainan sudah berakhir, reset semua
        gameState = {
            currentLevel: 1,
            score: 0,
            lives: 5,
            completedLevels: [],
            isAnswered: false,
            selectedAnswer: null,
            gameOver: false
        };
    } else {
        // Jika hanya kembali dari menu, pertahankan progress
        gameState = {
            currentLevel: gameState.currentLevel,
            score: gameState.score,
            lives: 5,
            completedLevels: gameState.completedLevels,
            isAnswered: false,
            selectedAnswer: null,
            gameOver: false
        };
    }
    
    displayMenu();
}

// Initialize
initializeGame();
