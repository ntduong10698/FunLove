$(function() {
    lc_lightbox('.elem', {
        wrap_class: 'lcl_fade_oc',
        gallery : true, 
        thumb_attr: 'data-lcl-thumb', 
        skin: 'dark',
        autoplay: true,
        fading_time: 250,
        animation_time: 400,
        slideshow_time: 5000,
        progressbar: false,
        // more options here
        elems_parsed  :function() {
            setTimeout(function() {
                $("#img1").trigger("click");
            }, 100)
        },
      }); 
      callAlter();
})

function callAlter() {
    let count = 21000 + Math.floor((Date.now() - new Date("2021-01-20 00:00:00")) / 86400000) * 1000;
    $.confirm({
        title: `<i class="fas fa-heart text-danger"></i> ${count} <i class="fas fa-heart text-danger"></i>`,
        content: 'Có thích thằng viết code không?',
        type: 'blue',
        buttons: {
            confirm: {
                text: 'Có nà <i class="fas fa-heart text-danger"></i>',
                action: function(){
                    $.alert('Kkkk. Tau biết mà <i class="fas fa-heart text-danger"></i>');
                    $(".heart_float").removeClass("d-none");
                }
            },
            cancel: {
                text: 'Không <i class="fas fa-sad-tear text-warning"></i>',
                action: function(){
                    $.confirm({
                        title: '',
                        content: 'Nghĩ kỹ chưa?',
                        type: 'red',
                        buttons: {
                            confirm: {
                                text: 'Rồi',
                                btnClass: 'btn-red',
                                action: function(){
                                    callAlter();
                                }
                            }
                        }
                    });
                }
            }
        }
    });
}