$(document).ready(function() {
    $('#filterForm select').on('change', function(e) {
        e.preventDefault();
        let vibe = $('#vibeFilter').val();
        let genre = $('#genreFilter').val();
        let bpm = $('#bpmFilter').val();
        $.ajax({
            url: "action.php",
            method: "post",
            data: {
                action: 'filter',
                vibe: vibe,
                genre: genre,
                bpm: bpm
            },
            dataType: 'json', 
            success: function(response) {
                $('#songList').html(response.html);
                $('#songCount').text("Menampilkan " + response.count + " dari 18 lagu");
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error: " + error);
                alert("Terjadi kesalahan saat memfilter lagu.");
            }
        });
    });
    $('#resetBtn').on('click', function() {
        $('#filterForm')[0].reset(); 
        $('#filterForm select').trigger('change'); 
    });
    $('.vibe-btn').on('click', function() {
        $('.vibe-btn').removeClass('active btn-light').addClass('btn-outline-light');
        $(this).removeClass('btn-outline-light').addClass('active btn-light');
        let vibeName = $(this).text();
        alert("Menyaring lagu untuk vibe: " + vibeName + " (Implementasi lanjutan diperlukan di backend)");
    });
    $('#btnAll').on('click', function() {
        $(this).addClass('active btn-light').removeClass('btn-outline-light');
        $('#btnGroup, #btnMember').removeClass('active btn-light').addClass('btn-outline-light');
        $('.artist-card').show(); 
    });
    $('#btnGroup').on('click', function() {
        $(this).addClass('active btn-light').removeClass('btn-outline-light');
        $('#btnAll, #btnMember').removeClass('active btn-light').addClass('btn-outline-light');
        $('.artist-card').hide();
        $('.artist-card').filter('[data-type="Grup"]').show();
    });
    $('#btnMember').on('click', function() {
        $(this).addClass('active btn-light').removeClass('btn-outline-light');
        $('#btnAll, #btnGroup').removeClass('active btn-light').addClass('btn-outline-light');
        $('.artist-card').hide();
        $('.artist-card').filter('[data-type="Anggota"]').show();
    });
    $('#searchForm').on('submit', function(e) {
        e.preventDefault(); 
        let query = $('input[name="q"]').val();
        if(query.trim() !== "") {
            alert("Mencari: " + query + " (Implementasi AJAX pencarian ke action.php)");
        }
    });
});