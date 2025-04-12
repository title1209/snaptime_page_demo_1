$('#delpine-more').click(function () {
    $('#delpine-details').slideToggle();
    const text = $(this).text().includes('↓') ? '닫기 ↑' : '자세히 보기 ↓';
    $(this).text(text);
});

$('#piscis-more').click(function () {
    $('#piscis-details').slideToggle();
    const text = $(this).text().includes('↓') ? '닫기 ↑' : '자세히 보기 ↓';
    $(this).text(text);
});

$('#glandes-more').click(function () {
    $('#glandes-details').slideToggle();
    const text = $(this).text().includes('↓') ? '닫기 ↑' : '자세히 보기 ↓';
    $(this).text(text);
});