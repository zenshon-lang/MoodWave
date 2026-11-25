<?php
header('Content-Type: application/json; charset=utf-8');

$file = __DIR__ . '/songs.json';
if (!file_exists($file)) {
    http_response_code(500);
    echo json_encode(['error' => 'songs.json tidak ditemukan']);
    exit;
}
$raw   = ltrim(file_get_contents($file), "\xEF\xBB\xBF"); 
$songs = json_decode($raw, true);
if (!is_array($songs)) {
    http_response_code(500);
    echo json_encode(['error' => 'songs.json bukan JSON yang valid']);
    exit;
}

$q     = strtolower(trim($_POST['q'] ?? ''));
$vibe  = $_POST['vibe']  ?? 'all';
$genre = $_POST['genre'] ?? 'all';
$bpm   = $_POST['bpm']   ?? 'all';

function tempoGroup($b) {
    if ($b < 100) return 'slow';
    if ($b < 120) return 'mid';
    if ($b < 130) return 'fast';
    return 'veryfast';
}

$result = [];
foreach ($songs as $s) {
    $artist   = $s['artistName'] ?? '';
    $okSearch = $q === ''
        || strpos(strtolower($s['title']), $q) !== false
        || strpos(strtolower($artist), $q) !== false;
    $okVibe  = $vibe  === 'all' || $s['vibeGroup']  === $vibe;
    $okGenre = $genre === 'all' || $s['genreGroup'] === $genre;
    $okBpm   = $bpm   === 'all' || tempoGroup($s['bpm']) === $bpm;
    if ($okSearch && $okVibe && $okGenre && $okBpm) {
        $result[] = $s;
    }
}
echo json_encode($result);