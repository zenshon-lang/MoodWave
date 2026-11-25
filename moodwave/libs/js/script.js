var covers = {
  "the-chase": "covers/the-chase.jpg",
  "style": "covers/style.jpg",
  "focus": "covers/focus.jpg",
  "pretty-please": "covers/pretty-please.jpg",
  "rude": "covers/rude.jpg",
  "lemon-tang": "covers/lemon-tang.jpg",
  "iconic-heart": "covers/iconic-heart.jpg",
  "moonride": "covers/moonride.jpg",
  "candy-box-lover": "covers/candy-box-lover.jpg",
  "next-chapter": "covers/next-chapter.jpg"
};

var positionNote = "Catatan: posisi anggota adalah posisi yang umum dicantumkan dalam profil penggemar dan bukan seluruhnya posisi resmi yang dikonfirmasi SM Entertainment.";

var artists = [
  { id: 1, name: "Hearts2Hearts", type: "Grup", photo: "h2hgrouplogo.jpg", portrait: "h2hgrouplogo.jpg", short: "SM Entertainment, 8 anggota",
  about: "Hearts2Hearts memiliki makna menghubungkan emosi dan pesan hangat kepada penggemar di seluruh dunia melalui simbol hati.",
  info: [["Nama grup", "Hearts2Hearts (H2H)"], ["Agensi", "SM Entertainment"], ["Label Jepang", "EMI Records"], ["Jumlah anggota", "8 orang"], ["Debut Korea", "24 Februari 2025"], ["Fandom", "S2U"]],
  members: [2, 3, 4, 5, 6, 7, 8, 9] },
  { id: 2, name: "Jiwoo", type: "Anggota", photo: "artists/jiwoo.jpg", portrait: "artists/jiwoo.jpg", groupId: 1, short: "Leader, Dancer, Rapper, Vocalist, Visual", about: "",
    info: [["Nama panggung", "Jiwoo"], ["Nama asli", "Choi Ji-woo"], ["Posisi", "Leader, Dancer, Rapper, Vocalist, Visual"], ["Tanggal lahir", "7 September 2006"]] },
  { id: 3, name: "Carmen", type: "Anggota", photo: "artists/carmen.jpg", portrait: "artists/carmen.jpg", groupId: 1, short: "Lead Vocalist", about: "",
    info: [["Nama panggung", "Carmen"], ["Nama asli", "Nyoman Ayu Carmenita"], ["Asal", "Bali, Indonesia"], ["Posisi", "Lead Vocalist"]] },
  { id: 4, name: "Yuha", type: "Anggota", photo: "artists/yuha.jpg", portrait: "artists/yuha.jpg", groupId: 1, short: "Main Vocalist, All-Rounder", about: "",
    info: [["Nama panggung", "Yuha"], ["Nama asli", "Yu Ha-ram"], ["Posisi", "Main Vocalist, All-Rounder"]] },
  { id: 5, name: "Stella", type: "Anggota", photo: "artists/stella.jpg", portrait: "artists/stella.jpg", groupId: 1, short: "Main Vocalist, Lead Dancer, Visual", about: "",
    info: [["Nama panggung", "Stella"], ["Nama asli", "Kim Da-hyun"], ["Posisi", "Main Vocalist, Lead Dancer, Visual"]] },
  { id: 6, name: "Juun", type: "Anggota", photo: "artists/juun.jpg", portrait: "artists/juun.jpg", groupId: 1, short: "Main Dancer, Rapper, Vocalist", about: "",
    info: [["Nama panggung", "Juun"], ["Nama asli", "Kim Ju-eun"], ["Posisi", "Main Dancer, Rapper, Vocalist"]] },
  { id: 7, name: "A-na", type: "Anggota", photo: "artists/a-na.jpg", portrait: "artists/a-na.jpg", groupId: 1, short: "Vocalist, Rapper, Visual", about: "",
    info: [["Nama panggung", "A-na"], ["Nama asli", "Noh Yu-na"], ["Posisi", "Vocalist, Rapper, Visual"]] },
  { id: 8, name: "Ian", type: "Anggota", photo: "artists/ian.jpg", portrait: "artists/ian.jpg", groupId: 1, short: "Dancer, Vocalist, Visual, Center", about: "",
    info: [["Nama panggung", "Ian"], ["Nama asli", "Jeong Lee-an"], ["Posisi", "Dancer, Vocalist, Visual, Center"]] },
  { id: 9, name: "Ye-on", type: "Anggota", photo: "artists/ye-on.jpg", portrait: "artists/ye-on.jpg", groupId: 1, short: "Lead Vocalist, Maknae", about: "",
    info: [["Nama panggung", "Ye-on"], ["Nama asli", "Kim Na-yeon"], ["Posisi", "Lead Vocalist, Maknae"]] }
];

var songs = [
  { id: 1, title: "The Chase", artist: 1, album: "The Chase - 1st Single Album", cover: "the-chase", label: "SM Entertainment", collab: "Rigend Film", vibes: "High-energy", vibeGroup: "High Energy", genre: "K-Pop", sub: "Dance-Pop", genreGroup: "Dance-Pop", bpm: 124, released: "24 Feb 2025", duration: "2:58", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Trek debut energik.", story: "Lagu debut resmi." },
  { id: 2, title: "Butterflies", artist: 1, album: "The Chase - 1st Single Album", cover: "the-chase", label: "SM Entertainment", collab: "Shin Dongle", vibes: "Warm", vibeGroup: "Warm & Gentle", genre: "K-Pop", sub: "R&B Pop", genreGroup: "R&B & Ballad", bpm: 105, released: "24 Feb 2025", duration: "2:57", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "B-side vokal lembut.", story: "Rilis bersamaan debut." },
  { id: 3, title: "STYLE", artist: 1, album: "STYLE (Digital Single)", cover: "style", label: "SM Entertainment", collab: "Shin Hee-won", vibes: "Trendy", vibeGroup: "Summer Fresh", genre: "K-Pop", sub: "Nu-Disco", genreGroup: "Retro & Funk", bpm: 118, released: "18 Jun 2025", duration: "3:29", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Single berirama chic.", story: "Rilis musim panas." },
  { id: 4, title: "Pretty Please", artist: 1, album: "FOCUS - 1st Mini Album", cover: "pretty-please", label: "SM Entertainment", collab: "Annie Chung", vibes: "Playful", vibeGroup: "Sweet & Playful", genre: "K-Pop", sub: "Bubblegum Pop", genreGroup: "Pop", bpm: 120, released: "24 Sep 2025", duration: "3:24", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Single pra-rilis manis.", story: "Pembuka mini album." },
  { id: 5, title: "FOCUS", artist: 1, album: "FOCUS - 1st Mini Album", cover: "focus", label: "SM Entertainment", collab: "Samson", vibes: "Hypnotic", vibeGroup: "Stylish & Groovy", genre: "K-Pop", sub: "Deep House", genreGroup: "Electronic", bpm: 126, released: "20 Okt 2025", duration: "2:57", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Title track bassline kuat.", story: "Lagu utama rookie." },
  { id: 6, title: "Apple Pie", artist: 1, album: "FOCUS - 1st Mini Album", cover: "focus", label: "SM Entertainment", collab: "SM", vibes: "Sweet", vibeGroup: "Sweet & Playful", genre: "K-Pop", sub: "Teen Pop", genreGroup: "Pop", bpm: 115, released: "20 Okt 2025", duration: "3:12", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "B-side ceria.", story: "Trek pelengkap." },
  { id: 7, title: "Flutter", artist: 1, album: "FOCUS - 1st Mini Album", cover: "focus", label: "SM Entertainment", collab: "SM", vibes: "Romantic", vibeGroup: "Warm & Gentle", genre: "K-Pop", sub: "Medium Dance", genreGroup: "Dance-Pop", bpm: 108, released: "20 Okt 2025", duration: "3:05", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Warna vokal jernih.", story: "B-side penyeimbang." },
  { id: 8, title: "Blue Moon", artist: 1, album: "FOCUS - 1st Mini Album", cover: "focus", label: "SM Entertainment", collab: "SM", vibes: "Atmospheric", vibeGroup: "Night & Dreamy", genre: "K-Pop", sub: "Synthwave", genreGroup: "Retro & Funk", bpm: 112, released: "20 Okt 2025", duration: "3:18", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Melodi sinematik.", story: "Penutup album." },
  { id: 9, title: "RUDE!", artist: 1, album: "RUDE! (Digital Single)", cover: "rude", label: "SM Entertainment", collab: "Lee Youngeum", vibes: "Bold", vibeGroup: "High Energy", genre: "K-Pop", sub: "Hyperpop", genreGroup: "Dance-Pop", bpm: 132, released: "20 Feb 2026", duration: "3:20", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Single comeback.", story: "Babak baru 2026." },
  { id: 10, title: "Lemon Tang", artist: 1, album: "Lemon Tang - 2nd Mini Album", cover: "lemon-tang", label: "SM Entertainment", collab: "Seo Ki-woong", vibes: "Refreshing", vibeGroup: "Summer Fresh", genre: "K-Pop", sub: "Tropical House", genreGroup: "Electronic", bpm: 122, released: "22 Jun 2026", duration: "2:43", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Konsep segar.", story: "Lagu utama album 2." },
  { id: 11, title: "15-LOVE", artist: 1, album: "Lemon Tang - 2nd Mini Album", cover: "lemon-tang", label: "SM Entertainment", collab: "SM", vibes: "Energetic", vibeGroup: "High Energy", genre: "K-Pop", sub: "Pop Punk", genreGroup: "Pop Rock", bpm: 130, released: "22 Jun 2026", duration: "2:55", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Konsep tenis.", story: "Rilis dalam album 2." },
  { id: 12, title: "Baby Steps", artist: 1, album: "Lemon Tang - 2nd Mini Album", cover: "lemon-tang", label: "SM Entertainment", collab: "SM", vibes: "Warm", vibeGroup: "Warm & Gentle", genre: "K-Pop", sub: "R&B", genreGroup: "R&B & Ballad", bpm: 85, released: "22 Jun 2026", duration: "3:22", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Balada santai.", story: "Trek emosional." },
  { id: 13, title: "heart emoji", artist: 1, album: "Lemon Tang - 2nd Mini Album", cover: "lemon-tang", label: "SM Entertainment", collab: "SM", vibes: "Playful", vibeGroup: "Sweet & Playful", genre: "K-Pop", sub: "Electropop", genreGroup: "Electronic", bpm: 116, released: "22 Jun 2026", duration: "2:50", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Pop modern.", story: "B-side interaktif." },
  { id: 14, title: "Secret Recipe", artist: 1, album: "Lemon Tang - 2nd Mini Album", cover: "lemon-tang", label: "SM Entertainment", collab: "SM", vibes: "Groovy", vibeGroup: "Stylish & Groovy", genre: "K-Pop", sub: "Funk Pop", genreGroup: "Retro & Funk", bpm: 120, released: "22 Jun 2026", duration: "3:08", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Elemen funk.", story: "Penutup album 2." },
  { id: 15, title: "ICONIC HEART", artist: 1, album: "ICONIC HEART - Single", cover: "iconic-heart", label: "SM / EMI", collab: "Lee Youngeum", vibes: "Glamorous", vibeGroup: "High Energy", genre: "J-Pop", sub: "Electro-Pop", genreGroup: "Electronic", bpm: 128, released: "12 Agu 2026", duration: "3:09", language: "Jepang", origLabel: "Jepang", origin: "Korsel & Jepang", desc: "Debut Jepang.", story: "Ekspansi ke Jepang." },
  { id: 16, title: "Moonride", artist: 1, album: "Moonride (Digital Single)", cover: "moonride", label: "SM Entertainment", collab: "Kia", vibes: "Chill", vibeGroup: "Night & Dreamy", genre: "K-Pop", sub: "City Pop", genreGroup: "Retro & Funk", bpm: 110, released: "15 Sep 2026", duration: "3:15", language: "Korea", origLabel: "Korea", origin: "Korsel", desc: "Nuansa malam.", story: "Proyek digital." },
  { id: 17, title: "Candy Box Lover", artist: 1, album: "Candy Box Lover (Digital Single)", cover: "candy-box-lover", label: "SM Entertainment", collab: "SM", vibes: "Bright", vibeGroup: "Sweet & Playful", genre: "K-Pop", sub: "Dance-Pop", genreGroup: "Dance-Pop", bpm: 125, released: "8 Okt 2026", duration: "3:02", language: "Jepang", origLabel: "Jepang", origin: "Korsel", desc: "Konsep warna-warni.", story: "Rilisan spesial." },
  { id: 18, title: "Next Chapter", artist: 1, album: "Next Chapter (Digital Single)", cover: "next-chapter", label: "SM Entertainment", collab: "SM", vibes: "Uplifting", vibeGroup: "High Energy", genre: "K-Pop", sub: "Pop Rock", genreGroup: "Pop Rock", bpm: 128, released: "1 Nov 2026", duration: "3:35", language: "Inggris", origLabel: "Inggris", origin: "Korsel", desc: "Anthem emosional.", story: "Langkah baru." }
];

var tempoInfo = { slow: { label: "Lambat" }, mid: { label: "Sedang" }, fast: { label: "Cepat" }, veryfast: { label: "Sangat cepat" } };
var vibeList = ["High Energy", "Sweet & Playful", "Stylish & Groovy", "Summer Fresh", "Warm & Gentle", "Night & Dreamy"];
var genreList = ["Dance-Pop", "Electronic", "Pop", "R&B & Ballad", "Retro & Funk", "Pop Rock"];
var pageTitles = { pageHome: "MoodWave", pageVibe: "Vibe | MoodWave", pageCatalog: "Katalog | MoodWave", pageStats: "Statistik | MoodWave", pageArtists: "Artis | MoodWave", pageCredits: "Credits | MoodWave" };
var savedScroll = 0;                                  
var currentLyrics = { original: [], romanized: [] };  


function getTempoGroup(bpm) { return bpm < 100 ? "slow" : bpm < 120 ? "mid" : bpm < 130 ? "fast" : "veryfast"; }
function imageBg(path) { return path ? "url('" + path + "') center / cover no-repeat" : ""; }
function bgAttr(path) { var bg = imageBg(path); return bg ? ' style="background:' + bg + '"' : ""; }
function findSong(id) { return songs.find(s => s.id === id) || null; }
function findArtist(id) { return artists.find(a => a.id === id) || null; }
function artistLink(id) { var a = findArtist(id); return "<a href='#' class='artist-link' data-artist='" + a.id + "'>" + a.name + "</a>"; }
function songLink(s) { return "<a href='#' class='song-link' data-id='" + s.id + "'>" + s.title + "</a>"; }
function countBy(field, value) { return songs.filter(s => s[field] === value).length; }

function fitFooterSpace() {
  var f = $(".site-footer");
  var wasOpen = f.hasClass("open");
  f.addClass("measuring open");
  var h = f.outerHeight();
  if (!wasOpen) f.removeClass("open");
  f.outerHeight();                 
  f.removeClass("measuring");
  $("main").css("padding-bottom", (h + 30) + "px");   
}

function checkFooter() {
  var atBottom = $(window).scrollTop() + $(window).height() >= $(document).height() - 5;
  $(".site-footer").toggleClass("open", atBottom);
}

function showPage(id) {
  $(".page").addClass("hidden"); $("#" + id).removeClass("hidden");
  var navId = (id === "pageSong") ? "pageCatalog" : (id === "pageArtist") ? "pageArtists" : id;
  $(".nav-link").removeClass("active"); $(".nav-link[data-page='" + navId + "']").addClass("active");
  if (pageTitles[id]) document.title = pageTitles[id];
  $(window).scrollTop(0);
  checkFooter();
}
function showCatalog(keepScroll) { showPage("pageCatalog"); if (keepScroll) $(window).scrollTop(savedScroll); }

function renderSongs(list) {
  var html = "";
  list.forEach(s => {
    html += "<div class='song-card'><div class='cover'" + bgAttr(covers[s.cover]) + "><span class='cover-bpm'>~" + s.bpm + " BPM</span></div><span class='tag'>" + s.genreGroup + "</span><h2 class='card-title'><a href='#' class='song-link card-main' data-id='" + s.id + "'>" + s.title + "</a></h2><p class='card-artist'>" + artistLink(s.artist) + "</p></div>";
  });
  $("#songGrid").html(html);
}

function showResults(results) {
  renderSongs(results);
  $("#resultInfo").html("Menampilkan <strong>" + results.length + "</strong> dari " + songs.length + " lagu");
  if (results.length === 0) {
    $("#songGrid").addClass("hidden"); $("#emptyState").removeClass("hidden"); $("#emptyMessage").text("Tidak ada lagu yang cocok.");
  } else {
    $("#songGrid").removeClass("hidden"); $("#emptyState").addClass("hidden");
  }
}

function filterLocal(keyword, vibe, genre, tempo) {
  return songs.filter(s => {
    var okSearch = keyword === "" || s.title.toLowerCase().includes(keyword) || findArtist(s.artist).name.toLowerCase().includes(keyword);
    var okVibe = vibe === "all" || s.vibeGroup === vibe;
    var okGenre = genre === "all" || s.genreGroup === genre;
    var okTempo = tempo === "all" || getTempoGroup(s.bpm) === tempo;
    return okSearch && okVibe && okGenre && okTempo;
  });
}

function applyFilters() {
  var keyword = $("#searchInput").val().trim().toLowerCase();
  var vibe = $("#filterVibe").attr("data-value"), genre = $("#filterGenre").attr("data-value"), tempo = $("#filterBpm").attr("data-value");

  $.ajax({
    url: "action.php",
    method: "POST",
    data: { q: keyword, vibe: vibe, genre: genre, bpm: tempo },
    dataType: "json",
    success: function (results) {
      if (!Array.isArray(results)) { console.log("Respons bukan array:", results); showResults(filterLocal(keyword, vibe, genre, tempo)); return; }
      showResults(results);
    },
    error: function (xhr, status, err) {
      console.log("AJAX error:", xhr.status, status, err, xhr.responseText);
      showResults(filterLocal(keyword, vibe, genre, tempo));
    }
  });

  var isFiltering = keyword !== "" || vibe !== "all" || genre !== "all" || tempo !== "all";
  $("#resetBtn").prop("disabled", !isFiltering);
}

function closeDropdowns() { $(".dropdown").removeClass("open"); }
function setDropdown(id, value, text) { $("#" + id).attr("data-value", value); $("#" + id + " .selected-value").text(text); }
function resetDropdown(id) { var first = $("#" + id + " .option").first(); setDropdown(id, first.attr("data-value"), first.text()); }
function resetFilters() { $("#searchInput").val(""); resetDropdown("filterVibe"); resetDropdown("filterGenre"); resetDropdown("filterBpm"); applyFilters(); }
function chooseVibe(value) { resetFilters(); setDropdown("filterVibe", value, $("#filterVibe .option[data-value='" + value + "']").text()); applyFilters(); showPage("pageCatalog"); }

function showLyrics(version) {
  var text = currentLyrics[version].join("\n");
  $("#songLyrics").text(text).removeClass("muted"); $(".tab").removeClass("active"); $(".tab[data-ver='" + version + "']").addClass("active");
}
function showSong(id) {
  var s = findSong(id); if (!s) return;
  savedScroll = $("#pageCatalog").is(":visible") ? $(window).scrollTop() : 0;
  var t = tempoInfo[getTempoGroup(s.bpm)], a = findArtist(s.artist);
  $("#songCover").css("background", imageBg(covers[s.cover])); $("#songCaption").text("Cover: " + s.album);
  $("#badgeVibe").text(s.vibeGroup); $("#badgeGenre").text(s.genreGroup); $("#badgeSub").text(s.sub); $("#badgeBpm").text("~" + s.bpm + " BPM");
  $("#songTitle").text(s.title); $("#songArtist").text(a.name).attr("data-artist", a.id); $("#songAlbum").text(s.album); $("#songDesc").text(s.desc); $("#songStory").text(s.story);
  var rows = [["Artis", artistLink(s.artist)], ["Label", s.label], ["Genre", s.genre], ["BPM", "~" + s.bpm + " BPM"], ["Rilis", s.released], ["Durasi", s.duration]];
  var tableHtml = ""; rows.forEach(r => tableHtml += "<tr><th>" + r[0] + "</th><td>" + r[1] + "</td></tr>");
  $("#infoTable").html(tableHtml);
  if (lyricsData && lyricsData[s.id]) {
    currentLyrics = lyricsData[s.id];
    var hasO = currentLyrics.original && currentLyrics.original.length > 0, hasR = currentLyrics.romanized && currentLyrics.romanized.length > 0;
    $("#lyricTabs").toggleClass("hidden", !(hasO && hasR));
    if (hasO) showLyrics("original"); else if (hasR) showLyrics("romanized"); else $("#songLyrics").text("Lirik belum diisi.").addClass("muted");
  } else {
    $("#lyricTabs").addClass("hidden"); $("#songLyrics").text("Lirik belum diisi.").addClass("muted");
  }
  showPage("pageSong"); document.title = s.title + " | MoodWave";
}

function barsHtml(list, field) {
  return list.map(item => { var n = countBy(field, item), w = Math.round(n / songs.length * 100); return "<div class='bar-row'><span class='bar-label'>" + item + "</span><div class='bar'><div class='bar-fill' style='width:" + w + "%'></div></div><span class='bar-count'>" + n + "</span></div>"; }).join("");
}
function renderStats() {
  var totalSec = 0, bpmSum = 0, rows = "";
  songs.forEach(s => { var p = s.duration.split(":"); totalSec += Number(p[0]) * 60 + Number(p[1]); bpmSum += s.bpm; rows += "<tr><td>" + songLink(s) + "</td><td>" + artistLink(s.artist) + "</td><td>" + s.vibeGroup + "</td><td>" + s.bpm + "</td><td>" + s.duration + "</td></tr>"; });
  $("#kpiTotal").text(songs.length); $("#kpiVibe").text("High Energy"); $("#kpiTime").text(Math.round(totalSec / 60) + " menit"); $("#kpiBpm").text(Math.round(bpmSum / songs.length) + " BPM");
  $("#statTable").html(rows); $("#barsVibe").html(barsHtml(vibeList, "vibeGroup")); $("#barsGenre").html(barsHtml(genreList, "genreGroup"));
}

function renderCarousel() {
  var html = "";
  songs.forEach(s => { html += "<div class='tile'" + bgAttr(covers[s.cover]) + "><a href='#' class='song-link card-main' data-id='" + s.id + "'>" + s.title + "</a><span class='tile-artist'>" + artistLink(s.artist) + "</span></div>"; });
  $("#carousel").html(html);
}

function renderArtists(type) {
  var html = "";
  artists.forEach(a => {
    if (type === "all" || a.type === type) {
      html += "<div class='artist-card'><div class='artist-thumb'" + bgAttr(a.photo) + "></div><span class='tag'>" + a.type + "</span><h2 class='card-title'><a href='#' class='artist-link card-main' data-artist='" + a.id + "'>" + a.name + "</a></h2><p class='card-artist'>" + a.short + "</p></div>";
    }
  });
  $("#artistGrid").html(html);
}

function showArtist(id) {
  var a = findArtist(id); if (!a) return;
  $("#artistPhoto").css("background", imageBg(a.portrait || a.photo)); $("#artistType").text(a.type); $("#artistName").text(a.name); $("#artistAbout").text(a.about); $("#artistNote").text(positionNote);
  var rows = ""; a.info.forEach(i => rows += "<tr><th>" + i[0] + "</th><td>" + i[1] + "</td></tr>"); $("#artistInfo").html(rows);
  if (a.type === "Grup") {
    var chips = ""; a.members.forEach(m => { var mb = findArtist(m); chips += "<a href='#' class='chip artist-link' data-artist='" + mb.id + "'>" + mb.name + "</a>"; });
    $("#memberList").html(chips); var songRows = ""; songs.forEach(s => { if (s.artist === a.id) songRows += "<tr><td>" + songLink(s) + "</td><td>" + s.album + "</td><td>" + s.released + "</td></tr>"; }); $("#artistSongs").html(songRows);
    $("#membersPanel, #songsPanel").removeClass("hidden"); $("#groupPanel").addClass("hidden");
  } else {
    $("#groupLink").html("Anggota dari " + artistLink(a.groupId)); $("#groupPanel").removeClass("hidden"); $("#membersPanel, #songsPanel").addClass("hidden");
  }
  showPage("pageArtist"); document.title = a.name + " | MoodWave";
}

function renderHomeCarousel() {
  var html = "", count = 0;
  for (var key in covers) {
    if (covers.hasOwnProperty(key) && count < 10) {
      var songId = null, songTitle = "Album Cover";
      for (var i = 0; i < songs.length; i++) {
        if (songs[i].cover === key) { songId = songs[i].id; songTitle = songs[i].title; break; }
      }
      if (songId !== null) {
        html += "<div class='home-slide song-link' data-id='" + songId + "' style='cursor:pointer;'><img src='" + covers[key] + "' alt='" + songTitle + "'></div>";
      }
      count++;
    }
  }
  $("#homeCarousel").html(html + html);
}

$(document).ready(function () {
  $(window).on("scroll resize", checkFooter); checkFooter();
  $(window).on("load resize", fitFooterSpace); fitFooterSpace();
  $("#totalSongs").text(songs.length); applyFilters(); renderStats(); renderCarousel(); renderArtists("all"); renderHomeCarousel();

  $(document).on("click", ".song-link", function (e) { e.preventDefault(); showSong(Number($(this).attr("data-id"))); });
  $(document).on("click", ".artist-link", function (e) { e.preventDefault(); showArtist(Number($(this).attr("data-artist"))); });

  $("#searchBtn").on("click", function() { showPage("pageCatalog"); applyFilters(); });
  $("#searchInput").on("keyup", function (e) { if (e.which === 13) { showPage("pageCatalog"); applyFilters(); } });

  $(".dropdown-trigger").on("click", function (e) { e.stopPropagation(); var dd = $(this).closest(".dropdown"), was = dd.hasClass("open"); closeDropdowns(); if (!was) dd.addClass("open"); });
  $(".option").on("click", function () { var dd = $(this).closest(".dropdown"); setDropdown(dd.attr("id"), $(this).attr("data-value"), $(this).text()); closeDropdowns(); applyFilters(); });
  $(document).on("click", closeDropdowns);

  $("#resetBtn, #emptyResetBtn").on("click", resetFilters);
  $("#backBtn").on("click", function () { showCatalog(true); });
  $("#artistBackBtn").on("click", function () { showPage("pageArtists"); });

  $(document).on("click", ".go-page", function (e) { e.preventDefault(); showPage($(this).attr("data-page")); });
  $(".pick-vibe").on("click", function () { chooseVibe($(this).attr("data-vibe")); });

  $(".side-link").on("click", function () { $(".side-link").removeClass("active"); $(this).addClass("active"); $(".stat-view").addClass("hidden"); $("#" + $(this).attr("data-view")).removeClass("hidden"); });
  $(".artist-filter").on("click", function () { $(".artist-filter").removeClass("active"); $(this).addClass("active"); renderArtists($(this).attr("data-type")); });
  $(".tab").on("click", function () { showLyrics($(this).attr("data-ver")); });

  $("#brandLink").on("click", function (e) { e.preventDefault(); resetFilters(); showPage("pageHome"); });
  $("#menuToggle").on("click", function (e) { e.preventDefault(); $("#sidebar").toggleClass("closed"); $("body").toggleClass("menu-closed"); });
  $(document).on("click", "#homePrevBtn", function() {
    var container = $("#homeCarousel")[0];
    var itemWidth = $(".home-slide").outerWidth() + 20;
    var originalSetWidth = itemWidth * 10;
    if (container.scrollLeft <= 0) {
      container.style.scrollBehavior = 'auto'; container.scrollLeft = originalSetWidth; container.style.scrollBehavior = 'smooth';
    }
    container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  });

  $(document).on("click", "#homeNextBtn", function() {
    var container = $("#homeCarousel")[0];
    var itemWidth = $(".home-slide").outerWidth() + 20;
    var originalSetWidth = itemWidth * 10;
    if (container.scrollLeft >= originalSetWidth - 10) {
      container.style.scrollBehavior = 'auto'; container.scrollLeft -= originalSetWidth; container.style.scrollBehavior = 'smooth';
    }
    container.scrollBy({ left: itemWidth, behavior: 'smooth' });
  });
});