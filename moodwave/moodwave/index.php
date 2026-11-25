<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MoodWave</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="libs/css/style.css">
</head>
<body>
    <?php include("framework/nav.php"); ?>

    <div class="layout" id="mainLayout">
        <!-- SIDEBAR -->
        <nav class="side-nav" id="sidebar">
            <button id="menuToggle" class="menu-toggle" aria-label="Toggle Menu">
                <span></span><span></span><span></span>
            </button>
            <div class="nav-links-container">
                <a href="#" class="nav-link active go-page" data-page="pageHome">Beranda</a>
                <a href="#" class="nav-link go-page" data-page="pageVibe">Pilih Vibe</a>
                <a href="#" class="nav-link go-page" data-page="pageCatalog">Katalog Lagu</a>
                <a href="#" class="nav-link go-page" data-page="pageStats">Statistik</a>
                <a href="#" class="nav-link go-page" data-page="pageArtists">Katalog Artis</a>
                <a href="#" class="nav-link go-page" data-page="pageCredits">Credits</a>
            </div>
        </nav>

        <!-- MAIN CONTENT -->
        <main id="mainContent">
            
            <!-- HOME -->
            <section id="pageHome" class="page">
                <div class="hero">
                    <h1 class="hero-title">Temukan musik berdasarkan vibe-mu</h1>
                    <p>Jelajahi lagu berdasarkan suasana hati, genre, dan tempo.</p>
                    <div class="carousel-section">
                        <div class="carousel-wrapper">
                            <button class="carousel-btn" id="homePrevBtn">&#10094;</button>
                            <div class="carousel-container" id="homeCarousel"></div>
                            <button class="carousel-btn" id="homeNextBtn">&#10095;</button>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary go-page" data-page="pageVibe" style="margin-top: 20px;">Mulai sekarang</a>
                </div>
                <div class="features">
                    <a href="#" class="feature go-page" data-page="pageVibe"><div class="feature-icon">01</div><h3>Mood Matcher</h3><p>Pilih suasana hati kamu.</p></a>
                    <a href="#" class="feature go-page" data-page="pageCatalog"><div class="feature-icon">02</div><h3>Filter BPM</h3><p>Atur tempo lagu.</p></a>
                    <a href="#" class="feature go-page" data-page="pageArtists"><div class="feature-icon">03</div><h3>Katalog Artis</h3><p>Kenali grup dan anggota.</p></a>
                </div>
            </section>

            <!-- VIBE -->
            <section id="pageVibe" class="page hidden">
                <div class="intro text-center">
                    <h1>Apa vibe-mu sekarang?</h1>
                    <p>Pilih satu suasana hati, lalu MoodWave menampilkan lagu yang cocok.</p>
                </div>
                <div class="pills">
                    <button class="pill pick-vibe" data-vibe="High Energy">High Energy</button>
                    <button class="pill pick-vibe" data-vibe="Sweet & Playful">Sweet & Playful</button>
                    <button class="pill pick-vibe" data-vibe="Stylish & Groovy">Stylish & Groovy</button>
                    <button class="pill pick-vibe" data-vibe="Summer Fresh">Summer Fresh</button>
                    <button class="pill pick-vibe" data-vibe="Warm & Gentle">Warm & Gentle</button>
                    <button class="pill pick-vibe" data-vibe="Night & Dreamy">Night & Dreamy</button>
                </div>
                <h2 class="carousel-title">Atau langsung pilih lagu</h2>
                <div class="carousel" id="carousel"></div>
            </section>

            <!-- CATALOG -->
            <section id="pageCatalog" class="page hidden">
                <div class="intro">
                    <h1>Katalog lagu</h1>
                    <p>Pilih suasana hati, genre, atau tempo. MoodWave menyaring lagunya untukmu.</p>
                </div>
                <div class="filter-bar">
                    <div class="field">
                        <span class="field-label">Vibe</span>
                        <div class="dropdown" id="filterVibe" data-value="all">
                            <button class="dropdown-trigger"><span class="selected-value">Semua vibe</span><span class="arrow">▼</span></button>
                            <ul class="dropdown-options">
                                <li class="option" data-value="all">Semua vibe</li>
                                <li class="option" data-value="High Energy">High Energy</li>
                                <li class="option" data-value="Sweet & Playful">Sweet & Playful</li>
                                <li class="option" data-value="Stylish & Groovy">Stylish & Groovy</li>
                                <li class="option" data-value="Summer Fresh">Summer Fresh</li>
                                <li class="option" data-value="Warm & Gentle">Warm & Gentle</li>
                                <li class="option" data-value="Night & Dreamy">Night & Dreamy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="field">
                        <span class="field-label">Genre</span>
                        <div class="dropdown" id="filterGenre" data-value="all">
                            <button class="dropdown-trigger"><span class="selected-value">Semua genre</span><span class="arrow">▼</span></button>
                            <ul class="dropdown-options">
                                <li class="option" data-value="all">Semua genre</li>
                                <li class="option" data-value="Dance-Pop">Dance-Pop</li>
                                <li class="option" data-value="Electronic">Electronic</li>
                                <li class="option" data-value="Pop">Pop</li>
                                <li class="option" data-value="R&B & Ballad">R&B & Ballad</li>
                                <li class="option" data-value="Retro & Funk">Retro & Funk</li>
                                <li class="option" data-value="Pop Rock">Pop Rock</li>
                            </ul>
                        </div>
                    </div>
                    <div class="field">
                        <span class="field-label">Tempo (BPM)</span>
                        <div class="dropdown" id="filterBpm" data-value="all">
                            <button class="dropdown-trigger"><span class="selected-value">Semua tempo</span><span class="arrow">▼</span></button>
                            <ul class="dropdown-options">
                                <li class="option" data-value="all">Semua tempo</li>
                                <li class="option" data-value="slow">Lambat (&lt; 100)</li>
                                <li class="option" data-value="mid">Sedang (100-120)</li>
                                <li class="option" data-value="fast">Cepat (120-130)</li>
                                <li class="option" data-value="veryfast">Sangat Cepat (&gt; 130)</li>
                            </ul>
                        </div>
                    </div>
                    <button id="resetBtn" class="btn btn-ghost" disabled>Reset Filter</button>
                </div>
                <div class="result-info" id="resultInfo"></div>
                <div class="song-grid" id="songGrid"></div>
                <div class="empty hidden" id="emptyState">
                    <p id="emptyMessage"></p>
                    <button id="emptyResetBtn" class="btn btn-primary">Reset Pencarian</button>
                </div>
            </section>

            <!-- STATS -->
            <section id="pageStats" class="page hidden">
                <div class="intro"><h1>Statistik</h1></div>
                <div class="dash">
                    <aside class="side">
                        <h2>Statistik</h2>
                        <ul>
                            <li><button class="side-link active" data-view="viewRingkasan">Ringkasan</button></li>
                            <li><button class="side-link" data-view="viewVibe">Per Vibe</button></li>
                            <li><button class="side-link" data-view="viewGenre">Per Genre</button></li>
                        </ul>
                    </aside>
                    <div>
                        <div class="kpi-grid">
                            <div class="kpi"><p>Total lagu</p><strong id="kpiTotal">0</strong></div>
                            <div class="kpi"><p>Vibe teratas</p><strong id="kpiVibe">-</strong></div>
                            <div class="kpi"><p>Total durasi</p><strong id="kpiTime">-</strong></div>
                            <div class="kpi"><p>Rata-rata tempo</p><strong id="kpiBpm">-</strong></div>
                        </div>
                        <div id="viewRingkasan" class="stat-view">
                            <div class="panel">
                                <h2>Daftar lagu</h2>
                                <div class="table-wrap">
                                    <table class="data-table">
                                        <thead><tr><th>Judul</th><th>Artis</th><th>Vibe</th><th>BPM</th><th>Durasi</th></tr></thead>
                                        <tbody id="statTable"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="viewVibe" class="stat-view hidden">
                            <div class="panel"><h2>Distribusi Vibe</h2><div id="barsVibe"></div></div>
                        </div>
                        <div id="viewGenre" class="stat-view hidden">
                            <div class="panel"><h2>Distribusi Genre</h2><div id="barsGenre"></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ARTISTS -->
            <section id="pageArtists" class="page hidden">
                <div class="intro">
                    <h1>Katalog artis</h1>
                    <p>Profil grup dan anggotanya. Klik nama untuk melihat data lengkap.</p>
                </div>
                <div class="pills left">
                    <button class="pill artist-filter active" data-type="all">Semua</button>
                    <button class="pill artist-filter" data-type="Grup">Grup</button>
                    <button class="pill artist-filter" data-type="Anggota">Anggota</button>
                </div>
                <div class="artist-grid" id="artistGrid"></div>
            </section>

            <!-- SONG DETAILS -->
            <section id="pageSong" class="page hidden">
                <button id="backBtn" class="btn btn-ghost back">← Kembali</button>
                <div class="song-hero">
                    <figure class="song-figure">
                        <div class="song-cover" id="songCover"></div>
                        <figcaption id="songCaption"></figcaption>
                    </figure>
                    <div class="song-head">
                        <div class="badges">
                            <span class="tag" id="badgeVibe"></span>
                            <span class="tag" id="badgeGenre"></span>
                            <span class="tag" id="badgeSub"></span>
                            <span class="tag" id="badgeBpm"></span>
                        </div>
                        <h1 id="songTitle"></h1>
                        <p class="song-by">oleh <span id="songArtist"></span></p>
                        <p id="songDesc"></p>
                    </div>
                </div>
                <div class="song-body">
                    <div>
                        <div class="panel">
                            <h2>Informasi</h2>
                            <table class="info-table"><tbody id="infoTable"></tbody></table>
                        </div>
                        <div class="panel">
                            <h2>Cerita Lagu</h2>
                            <p id="songStory"></p>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="tabs" id="lyricTabs">
                            <button class="tab active" data-ver="original" id="tabOriginal">Original</button>
                            <button class="tab" data-ver="romanized">Romanized</button>
                        </div>
                        <div class="lyrics" id="songLyrics"></div>
                    </div>
                </div>
            </section>

            <!-- ARTIST DETAILS -->
            <section id="pageArtist" class="page hidden">
                <button id="artistBackBtn" class="btn btn-ghost back">← Kembali</button>
                <div class="artist-hero">
                    <div class="artist-photo" id="artistPhoto"></div>
                    <div>
                        <span class="tag" id="artistType"></span>
                        <h1 id="artistName"></h1>
                        <p id="artistAbout"></p>
                        <p class="note" id="artistNote"></p>
                    </div>
                </div>
                <div class="song-body">
                    <div class="panel">
                        <h2>Informasi</h2>
                        <table class="info-table"><tbody id="artistInfo"></tbody></table>
                        <div id="groupPanel" class="hidden" style="margin-top: 15px;">
                            <p id="groupLink"></p>
                        </div>
                    </div>
                    <div>
                        <div class="panel" id="membersPanel">
                            <h2>Anggota</h2>
                            <div id="memberList"></div>
                        </div>
                        <div class="panel" id="songsPanel">
                            <h2>Diskografi</h2>
                            <div class="table-wrap">
                                <table class="data-table">
                                    <thead><tr><th>Judul</th><th>Album</th><th>Rilis</th></tr></thead>
                                    <tbody id="artistSongs"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CREDITS -->
            <section id="pageCredits" class="page hidden">
                <div class="intro">
                    <h1>Credits</h1>
                    <p>Final Project Web 2026</p>
                </div>
                <div class="credits-layout">
                    <div class="credits-text-box">
                        <h2 style="font-size: 32px; margin-bottom: 5px; color: #FFFFFF;">Enrico Abner Setiawan</h2>
                        <p style="font-size: 18px; margin-bottom: 20px; color: #9FFF00;">Mahasiswa Informatika semester 3 di UKRIDA.</p>
                        <p class="note" style="font-size: 16px; margin-bottom: 20px;">Web developer MoodWave. Sedang belajar Python, HTML, Java, C#, dan MySQL.</p>
                        <div class="panel">
                            <h2>Tentang proyek</h2>
                            <p class="note" style="font-size: 15px;">MoodWave adalah Final Project Web 2026: platform penemuan musik berdasarkan vibe, genre, dan tempo serta katalog lagu dan artis.</p>
                        </div>
                        <div class="panel">
                            <h2>Teknologi</h2>
                            <p class="note" style="font-size: 15px;">HTML5, CSS3, JavaScript, jQuery, dan PHP.</p>
                            <p class="note" style="font-size: 15px;">Font: Plus Jakarta Sans dari Google Fonts.</p>
                        </div>
                    </div>
                    <div class="credits-image-container">
                        <div class="credits-photo-frame">
                            <img src="Enrico.jpg" alt="Enrico">
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>

    <?php include("framework/footer.php"); ?>
</body>
</html>