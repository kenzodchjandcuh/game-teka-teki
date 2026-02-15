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
    },
    {
        number: 11,
        title: "Kristal Berwarna",
        description: "Anda menemukan kristal yang bersinar dengan berbagai warna di dalam gua.",
        challenge: "Aku memiliki wajah dan dua tangan, tetapi tidak memiliki lengan atau kaki. Apa yang saya?",
        options: [
            { text: "Jam", correct: true },
            { text: "Boneka", correct: false },
            { text: "Patung", correct: false },
            { text: "Topeng", correct: false }
        ]
    },
    {
        number: 12,
        title: "Labirin Kuno",
        description: "Anda memasuki labirin kuno dengan dinding-dinding tinggi yang misterius.",
        challenge: "Aku memiliki kota tetapi tidak ada rumah. Aku memiliki pulau tetapi tidak ada pohon. Aku memiliki air tetapi tidak ada ikan. Apa yang saya?",
        options: [
            { text: "Peta", correct: true },
            { text: "Aquarium", correct: false },
            { text: "Diorama", correct: false },
            { text: "Model", correct: false }
        ]
    },
    {
        number: 13,
        title: "Kunci Emas",
        description: "Anda menemukan kunci emas yang berkilauan di antara reruntuhan kuno.",
        challenge: "Aku memiliki satu mata tetapi tidak bisa melihat. Apa yang saya?",
        options: [
            { text: "Jarum", correct: true },
            { text: "Tombol", correct: false },
            { text: "Cakram", correct: false },
            { text: "Bola", correct: false }
        ]
    },
    {
        number: 14,
        title: "Istana Hantu",
        description: "Anda memasuki istana hantu yang penuh dengan misteri dan kejutan.",
        challenge: "Saya memiliki duri tetapi tidak ada bunga. Apa yang saya?",
        options: [
            { text: "Landak", correct: true },
            { text: "Kaktus", correct: false },
            { text: "Semak", correct: false },
            { text: "Pohon", correct: false }
        ]
    },
    {
        number: 15,
        title: "Taman Rahasia",
        description: "Anda menemukan taman rahasia yang tumbuh bunga-bunga aneh.",
        challenge: "Aku bisa berjalan tetapi tidak memiliki kaki. Apa yang saya?",
        options: [
            { text: "Jam pasir", correct: true },
            { text: "Lilin", correct: false },
            { text: "Air", correct: false },
            { text: "Bayangan", correct: false }
        ]
    },
    {
        number: 16,
        title: "Cermin Gelap",
        description: "Anda menemukan cermin gelap yang menunjukkan gambaran lain dari dunia.",
        challenge: "Berapa kali angka 7 muncul dalam bilangan 1 hingga 100?",
        options: [
            { text: "11 kali", correct: false },
            { text: "12 kali", correct: false },
            { text: "20 kali", correct: true },
            { text: "15 kali", correct: false }
        ]
    },
    {
        number: 17,
        title: "Buku Misteri",
        description: "Anda membuka buku kuno yang penuh dengan teka-teki dan sandi rahasia.",
        challenge: "Jika kakek, ayah, dan anak laki-laki pergi memancing dan menangkap 3 ikan, tetapi setiap orang mendapat 1 ikan. Bagaimana itu mungkin?",
        options: [
            { text: "Mereka adalah 3 generasi yang sama", correct: true },
            { text: "Mereka berbagi", correct: false },
            { text: "Ada orang tambahan", correct: false },
            { text: "Mereka berbohong", correct: false }
        ]
    },
    {
        number: 18,
        title: "Menara Putih",
        description: "Anda melihat menara putih yang menjulang tinggi ke langit di kejauhan.",
        challenge: "Berapa banyak sisi yang dimiliki oleh keseluruhannya?",
        options: [
            { text: "4 sisi", correct: true },
            { text: "6 sisi", correct: false },
            { text: "8 sisi", correct: false },
            { text: "10 sisi", correct: false }
        ]
    },
    {
        number: 19,
        title: "Sungai Emas",
        description: "Anda menemukan sungai yang mengalir emas cair di bawah tanah.",
        challenge: "Jika a + b = 11 dan a × b = 18, berapa nilai dari a² + b²?",
        options: [
            { text: "85", correct: true },
            { text: "121", correct: false },
            { text: "75", correct: false },
            { text: "95", correct: false }
        ]
    },
    {
        number: 20,
        title: "Kastil Raksasa",
        description: "Anda sampai di kastil raksasa dengan menara-menara yang menakjubkan.",
        challenge: "Saya memiliki kepala dan ekor tetapi tidak memiliki tubuh. Apa yang saya?",
        options: [
            { text: "Koin", correct: true },
            { text: "Ular", correct: false },
            { text: "Pita", correct: false },
            { text: "Bendera", correct: false }
        ]
    },
    {
        number: 21,
        title: "Kolam Ajaib",
        description: "Anda menemukan kolam ajaib yang air di dalamnya bersinar perak.",
        challenge: "Jika Anda mengendarai bus dan ada 12 orang di dalamnya, lalu 3 orang turun dan 5 orang naik. Berapa banyak orang di bus sekarang?",
        options: [
            { text: "14 orang lebih Anda", correct: true },
            { text: "14 orang", correct: false },
            { text: "13 orang", correct: false },
            { text: "10 orang", correct: false }
        ]
    },
    {
        number: 22,
        title: "Terowongan Misterius",
        description: "Anda memasuki terowongan gelap yang penuh dengan simbol-simbol kuno.",
        challenge: "Saya memiliki puluhan dan satuan tetapi tidak memiliki nilai. Apa yang saya?",
        options: [
            { text: "Jam", correct: true },
            { text: "Papan catur", correct: false },
            { text: "Kalender", correct: false },
            { text: "Dadu", correct: false }
        ]
    },
    {
        number: 23,
        title: "Piramida Tersembunyi",
        description: "Anda menemukan piramida tersembunyi di dalam bumi dengan harta karun.",
        challenge: "Apa yang dapat melakukan perjalanan ke seluruh dunia tanpa meninggalkan sudutnya?",
        options: [
            { text: "Perangko", correct: true },
            { text: "Pesawat", correct: false },
            { text: "Kapal", correct: false },
            { text: "Truk", correct: false }
        ]
    },
    {
        number: 24,
        title: "Gerbang Terakhir",
        description: "Anda telah mendekati akhir. Gerbang terakhir menunggu untuk dibuka.",
        challenge: "Saya memiliki permukaan tetapi tidak memiliki tepi. Apa yang saya?",
        options: [
            { text: "Bola", correct: true },
            { text: "Kubus", correct: false },
            { text: "Piramida", correct: false },
            { text: "Silinder", correct: false }
        ]
    },
    {
        number: 25,
        title: "Mahkota Kemenangan",
        description: "Anda telah mencapai level terakhir! Mahkota kemenangan menunggu Anda.",
        challenge: "Saya memiliki kunci tetapi bukan kuncinya. Apa yang saya?",
        options: [
            { text: "Piano", correct: true },
            { text: "Peta harta karun", correct: false },
            { text: "Perlengkapan olahraga", correct: false },
            { text: "Alat musik", correct: false }
        ]
    }
];

// Game State
let gameState = {
    currentLevel: 1,
    score: 0,
    lives: 3,
    completedLevels: [],
    visitedLevels: [],
    failedLevels: [],
    allowedNextLevel: null,
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
    
    for (let i = 1; i <= 25; i++) {
        const btn = document.createElement('button');
        btn.className = 'level-btn';
        
        // Cek apakah level gagal (kehabisan nyawa)
        const isFailed = gameState.failedLevels.includes(i);
        
        // Level dapat dimainkan HANYA jika:
        // 1. Level 1 (selalu unlock)
        // 2. Level sebelumnya sudah selesai
        // 3. Ini adalah level yang diizinkan setelah game over
        // TAPI JANGAN jika level sudah gagal (merah)
        const isUnlocked = (i === 1 && !isFailed) || 
                          (gameState.completedLevels.includes(i - 1) && !isFailed) ||
                          (gameState.allowedNextLevel && gameState.allowedNextLevel === i && !isFailed);
        
        if (gameState.completedLevels.includes(i)) {
            btn.classList.add('completed');
        } else if (isFailed) {
            btn.classList.add('failed');
        }
        if (gameState.currentLevel === i) {
            btn.classList.add('current');
        }
        
        // Level gagal (merah) - hanya untuk lihat jawaban
        if (isFailed) {
            btn.classList.add('locked');
            btn.textContent = '❌ ' + i;
            btn.disabled = false;
            btn.style.cursor = 'pointer';
            btn.onclick = () => showCorrectAnswer(i);
        }
        // Level terkunci biasa - tidak bisa diklik
        else if (!isUnlocked) {
            btn.classList.add('locked');
            btn.textContent = '🔒 ' + i;
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
        }
        // Level bisa dimainkan
        else {
            btn.textContent = i;
            btn.onclick = () => startGame(i);
        }
        
        
        levelSelect.appendChild(btn);
    }
}

// Start Game
function startGame(levelNumber) {
    // Prevent playing failed levels - hanya tampilkan jawaban
    if (gameState.failedLevels.includes(levelNumber)) {
        showCorrectAnswer(levelNumber);
        return;
    }
    
    gameState.currentLevel = levelNumber;
    gameState.lives = 3;
    gameState.isAnswered = false;
    gameState.selectedAnswer = null;
    
    // Tambah level ke visitedLevels agar tidak terkunci setelah game over
    if (!gameState.visitedLevels.includes(levelNumber)) {
        gameState.visitedLevels.push(levelNumber);
    }
    
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
    const progress = (level.number / 25) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';
    
    // Display lives
    const livesContainer = document.getElementById('livesContainer');
    livesContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
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
    
    // Play sound effect
    if (isCorrect) {
        playCorrectSound();
    } else {
        playWrongSound();
    }
    
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
        gameState.score += 4;
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
        if (gameState.currentLevel < 25) {
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
    
    // Play sad sound
    playWrongSound();
    
    // Tandai bahwa permainan sudah berakhir
    gameState.gameOver = true;
    
    // Sembunyikan tombol "Main Lagi"
    retryBtn.style.display = 'none';
    
    // Tandai level ini sebagai gagal
    if (!gameState.failedLevels.includes(level.number)) {
        gameState.failedLevels.push(level.number);
    }
    
    // Izinkan pemain melanjut ke level selanjutnya jika ada
    if (level.number < 25) {
        gameState.allowedNextLevel = level.number + 1;
    }
    
    const nextLevelText = level.number < 25 ? `<p style="color: #4caf50; margin-top: 15px;">Anda bisa melanjutkan ke <strong>Level ${level.number + 1}</strong></p>` : '';
    
    content.innerHTML = `
        <div class="emoji">😭</div>
        <h2 style="color: #f44336;">Game Over!</h2>
        <p>Anda kehabisan nyawa di Level ${level.number}</p>
        <p style="font-size: 1.3em; margin-top: 15px;"><strong>Skor Akhir: ${gameState.score}</strong></p>
        ${nextLevelText}
    `;
    
    modal.style.display = 'block';
}

// Show Victory
function showVictory() {
    const modal = document.getElementById('endGameModal');
    const content = document.getElementById('endGameContent');
    const retryBtn = document.getElementById('retryBtn');
    
    // Play victory sound
    playWinSound();
    
    // Tampilkan tombol "Main Lagi" untuk kemenangan
    retryBtn.style.display = 'inline-block';
    
    content.innerHTML = `
        <div class="emoji">🎉</div>
        <h2 style="color: #667eea;">Selamat Anda Menang!</h2>
        <p>Anda telah menyelesaikan semua 25 level!</p>
        <p style="font-size: 1.3em; margin-top: 15px;"><strong>Skor Akhir: <span style="color: #4caf50;">${gameState.score}</span></strong></p>
        <p>Anda adalah Petualang Sejati! Penghargaan kepada Anda atas keberhasilan ini! 🏆</p>
        <p style="font-size: 0.9em; color: #666; margin-top: 10px;">Skor Anda sedang dikirimkan ke WhatsApp developer...</p>
    `;
    
    modal.style.display = 'block';
    
    // Send score to developer's WhatsApp automatically
    setTimeout(() => {
        sendScoreToWhatsApp(gameState.score);
    }, 1000);
}

// Show Correct Answer for Failed Level
function showCorrectAnswer(levelNumber) {
    const level = levels[levelNumber - 1];
    const correctOption = level.options.find(opt => opt.correct);
    const correctIndex = level.options.findIndex(opt => opt.correct) + 1;
    
    // Hapus modal lama jika ada
    const oldModal = document.getElementById('answerModal');
    if (oldModal) {
        oldModal.remove();
    }
    
    // Create modal untuk display jawaban
    const modalDiv = document.createElement('div');
    modalDiv.id = 'answerModal';
    modalDiv.className = 'answer-modal';
    modalDiv.style.display = 'block';
    
    modalDiv.innerHTML = `
        <div class="answer-modal-content">
            <span class="answer-modal-close" onclick="closeAnswerModal()">&times;</span>
            <h2>📖 Jawaban Level ${levelNumber}</h2>
            
            <div class="answer-challenge">
                <h3>${level.title}</h3>
                <p><strong>Pertanyaan:</strong> ${level.challenge}</p>
            </div>
            
            <div class="answer-options">
                <p style="margin: 15px 0;"><strong>Pilihan yang Tersedia:</strong></p>
                ${level.options.map((opt, idx) => `
                    <div class="answer-option ${opt.correct ? 'correct-answer' : ''}">
                        ${idx + 1}. ${opt.text} ${opt.correct ? '✅' : ''}
                    </div>
                `).join('')}
            </div>
            
            <div class="answer-result">
                <p><strong>Jawaban yang Benar:</strong></p>
                <div class="correct-box">
                    <p style="font-size: 1.2em; margin: 0;">Pilihan <strong>#${correctIndex}</strong></p>
                    <p style="margin: 10px 0 0 0;"><strong>${correctOption.text}</strong></p>
                </div>
            </div>
            
            <button class="btn btn-primary" style="margin-top: 20px; width: 100%;" onclick="closeAnswerModal()">
                Tutup & Kembali
            </button>
        </div>
    `;
    
    // Tambah modal ke body
    document.body.appendChild(modalDiv);
}

// Close Answer Modal
function closeAnswerModal() {
    const modal = document.getElementById('answerModal');
    if (modal) {
        modal.remove();
    }
}

// Back to Menu
function backToMenu() {
    document.getElementById('endGameModal').style.display = 'none';
    
    if (gameState.gameOver) {
        // Jika permainan sudah berakhir, reset semua tapi tetap pertahankan progress
        const savedVisitedLevels = gameState.visitedLevels;
        const savedCompletedLevels = gameState.completedLevels;
        const savedFailedLevels = gameState.failedLevels;
        const savedAllowedNextLevel = gameState.allowedNextLevel;
        const savedLives = gameState.lives; // Simpan lives terakhir (0)
        
        gameState = {
            currentLevel: 1,
            score: 0,
            lives: savedLives, // Tetap 0, jangan di-reset ke 3
            completedLevels: savedCompletedLevels,
            visitedLevels: savedVisitedLevels,
            failedLevels: savedFailedLevels,
            allowedNextLevel: savedAllowedNextLevel,
            isAnswered: false,
            selectedAnswer: null,
            gameOver: false
        };
    } else {
        // Jika hanya kembali dari menu, pertahankan progress
        gameState = {
            currentLevel: gameState.currentLevel,
            score: gameState.score,
            lives: 3,
            completedLevels: gameState.completedLevels,
            visitedLevels: gameState.visitedLevels,
            failedLevels: gameState.failedLevels,
            allowedNextLevel: gameState.allowedNextLevel,
            isAnswered: false,
            selectedAnswer: null,
            gameOver: false
        };
    }
    
    displayMenu();
}

// ==================== MUSIC CONTROL FUNCTIONS ====================

let isMusicPlaying = false;

// Initialize Music
function initializeMusic() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3; // Set volume ke 30%
    
    // Load sound effects dari sources gratis
    const correctSound = document.getElementById('correctSound');
    const wrongSound = document.getElementById('wrongSound');
    const winSound = document.getElementById('winSound');
    
    // Gunakan web audio synthesizer untuk sound effects
    correctSound.src = 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==';
    wrongSound.src = 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==';
    winSound.src = 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==';
    
    playBackgroundMusic();
}

// Toggle Background Music
function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    
    if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
        musicIcon.textContent = '🔇';
        musicBtn.classList.add('muted');
    } else {
        bgMusic.play().catch(function(error) {
            console.log('Musik tidak dapat dimainkan:', error);
        });
        isMusicPlaying = true;
        musicIcon.textContent = '🔊';
        musicBtn.classList.remove('muted');
    }
}

// Play Background Music
function playBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play().catch(function(error) {
        console.log('Musik tidak dapat dimainkan otomatis. Pengguna harus klik tombol musik terlebih dahulu.');
        isMusicPlaying = false;
    });
    isMusicPlaying = true;
}

// Change Volume
function changeVolume(value) {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = value / 100;
}

// Play Correct Answer Sound
function playCorrectSound() {
    // Buat beep yang menyenangkan menggunakan Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;
        
        // Create two notes untuk success sound
        const osc1 = audioContext.createOscillator();
        const osc2 = audioContext.createOscillator();
        const gains = audioContext.createGain();
        
        osc1.frequency.value = 523.25; // C5
        osc2.frequency.value = 659.25; // E5
        
        gains.gain.setValueAtTime(0.3, now);
        gains.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        
        osc1.connect(gains);
        osc2.connect(gains);
        gains.connect(audioContext.destination);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.5);
        osc2.stop(now + 0.5);
    } catch (e) {
        console.log('Web Audio API tidak tersedia');
    }
}

// Play Wrong Answer Sound
function playWrongSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;
        
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.frequency.value = 200;
        osc.type = 'square';
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.start(now);
        osc.stop(now + 0.4);
    } catch (e) {
        console.log('Web Audio API tidak tersedia');
    }
}

// Play Win Sound
function playWinSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;
        
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 chord
        
        notes.forEach((freq, index) => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
            
            osc.connect(gain);
            gain.connect(audioContext.destination);
            
            osc.start(now);
            osc.stop(now + 0.8);
        });
    } catch (e) {
        console.log('Web Audio API tidak tersedia');
    }
}

// ==================== SEND SCORE TO WHATSAPP ====================

// Send score to WhatsApp automatically
function sendScoreToWhatsApp(finalScore) {
    const phoneNumber = '081274493523'; // Nomor developer
    const message = encodeURIComponent(`Skor Game Petualangan: ${finalScore}/100\n\nSaya telah menyelesaikan semua 25 level dengan skor ${finalScore}! 🎉`);
    
    // Method 1: Try API endpoint (if backend is configured)
    const apiEndpoint = 'https://api.whatsapp.com/send'; // Replace with actual endpoint
    
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            message: `Skor Game Petualangan: ${finalScore}/100\n\nSaya telah menyelesaikan semua 25 level dengan skor ${finalScore}! 🎉`,
            senderName: 'Game Player'
        })
    }).catch(error => {
        console.log('API tidak tersedia, menggunakan fallback WhatsApp Web');
        // Method 2: Fallback - Open WhatsApp with pre-filled message
        openWhatsAppWithMessage(phoneNumber, message);
    });
    
    // Immediate fallback
    setTimeout(() => {
        openWhatsAppWithMessage(phoneNumber, message);
    }, 1000);
}

// Open WhatsApp with pre-filled message
function openWhatsAppWithMessage(phoneNumber, message) {
    // Remove leading zero from phone number and add country code if needed
    let formattedPhone = phoneNumber;
    if (formattedPhone.startsWith('0')) {
        formattedPhone = '62' + formattedPhone.substring(1); // Indonesia country code
    }
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${message}`;
    
    // Open in new window
    window.open(whatsappUrl, '_blank');
}

// Initialize
initializeGame();
initializeMusic();
