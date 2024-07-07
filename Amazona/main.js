$(function(){
    $("input").on('keyup', function(e){
        if (e.key == 'Enter' || e.key ==13) {
            let k = $('input').val();
            window.open('https://www.amazon.in/s?k='+k);
        }
    })
})