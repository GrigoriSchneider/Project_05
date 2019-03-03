/*---   Filter-Search    ---*/

$('#filter-search').on('keyup',function () {
    const $input = $('#filter-search').val().toLowerCase();
    const $pictures = $('a[href*="photos"]');

    for (let i=0; i<$pictures.length; i++){
        const $dataTitle= $($pictures[i]).attr('data-title').toLowerCase();
        const $pictureDivs = $('.pictureDiv');
        if ($dataTitle.indexOf($input) >-1){
            $pictureDivs[i].style.display= '';
        } else {
            $pictureDivs[i].style.display = 'none';
        }
        console.log($input);
    }
});