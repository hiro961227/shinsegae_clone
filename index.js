window.addEventListener('DOMContentLoaded',function(){
//메뉴
    const menu = document.getElementsByClassName("nav_menu");
    const dorpMenu = document.getElementsByClassName("drop_menu");

    for(let i=0;i<menu.length;i++){
        menu[i].addEventListener('mouseenter',function(){
            dorpMenu[i].classList.add('active');
        });
        menu[i].addEventListener('mouseleave',function(){
            dorpMenu[i].classList.remove('active');
        });
    }
    $('.language').on('click',function(){
        $('.drop_language').addClass('active');
    });
    $('.language').on('mouseleave',function(){
        $('.drop_language').removeClass('active');
    })

//스크롤
    function aniGo(){
        const textL1 = $('.main .main_text .ani1');
        const inputs1 = textL1.find($('label'));

        for(let i=0;i<inputs1.length;i++){
            const index1 = i + 1;
            const time1 = ((inputs1.length)+i) * 70;
            
            $(".main .main_text .ani1 label:nth-child("+index1+")").css( "-animation", "labelAni1 .6s "+time1+"ms forwards ease-out");
        }
    }
    aniGo();
    function aniGo2(){
        const textL2 = $('.main .main_text .ani2');
        const inputs2 = textL2.find($('label'));

        for(let i=0;i<inputs2.length;i++){
            const index2 = i + 1;
            const time2 = ((inputs2.length)+i) * 45;
            
            $(".main .main_text .ani2 label:nth-child("+index2+")").css( "-animation", "labelAni2 .6s "+time2+"ms forwards ease-out");
        }
    }
    function aniGo3(){
        const textL3 = $('.main .main_text .ani3');
        const inputs3 = textL3.find($('label'));

        for(let i=0;i<inputs3.length;i++){
            const index3 = i + 1;
            const time3 = ((inputs3.length)+i) * 70;
            
            $(".main .main_text .ani3 label:nth-child("+index3+")").css( "-animation", "labelAni1 .6s "+time3+"ms forwards ease-out");
        }
    }
    setTimeout(aniGo2,500);
    setTimeout(aniGo3,1200);

    function aniGo4(){
        $('.point_text').css("-animation","anigo4 .6s forwards linear");
    }
    function aniGo5(){
        $('.point_text').css("opacity","1");
        $('.point_text').css("-animation","animation 3.5s infinite");
    }
    setTimeout(aniGo4,2100);
    setTimeout(aniGo5,2500);

    $('.point_text').on('mouseover',function(){
        $('.arr').stop().css("-animation","anigo5 .6s forwards linear");
        $('.point_text').stop().css("-animation","anigo6 .6s forwards linear");
    });
    $('.point_text').on('mouseleave',function(){
        $('.arr').stop().css("-animation","anigo7 .6s forwards linear");
        $('.point_text').stop().css("-animation","anigo8 .6s forwards linear");
        aniGo5()
    });

    function lineAni(){
        //클릭
        $('.arr').on('click',function(){
            $('.bar').css("-animation","lineAni .5s forwards linear");
        });
        //스크롤
        const $section = $('#main_container section');
        const idx = 0;
        const sectionAre = [];

        $section.each(function(e){
            sectionAre.push($section.eq(e).offset().top);
        });
        //클릭하면 바로 하위페이지로 넘어감

        $('.arr').click(function(){
            $('html,body').animate({
                scrollTop:sectionAre[0]
            },1300);
        });

        //하단스크롤하면 header slideup
        var prevScrollTop = $(window).scrollTop(),
            nowScrollTop = $(window).scrollTop();

        $(window).on('scroll touchmove',function(){
            nowScrollTop = $(window).scrollTop();

            if (nowScrollTop > prevScrollTop) {
                $('header').css("transform","translateY(-120px)");
                $('.bar').css("-animation","lineAni .6s forwards linear");
               
                if(nowScrollTop >= sectionAre[0]){
                    $('#about p').eq(0).css("color","#000");                    
                    $('#about p').eq(1).css("color","#ccc");
                    $('#about p').eq(2).css("color","#ccc");
                }if(nowScrollTop >= sectionAre[0] + 150){
                    $('#about p').eq(0).css("color","#ccc");
                    $('#about p').eq(1).css("color","#000");
                    $('#about p').eq(2).css("color","#ccc");
                }if(nowScrollTop >= sectionAre[0] + 300){
                    $('#about p').eq(0).css("color","#ccc");
                    $('#about p').eq(1).css("color","#ccc");
                    $('#about p').eq(2).css("color","#000");
                }
            //페이지 콘텐츠들 나타나기
                
                // const list = $('section');
                // const listline = list.find($('h1,h2,p,li,a'));
                // const winH = window.innerHeight;
                // function listup(){                 
                //     listline.each(function(){
                //         const scrollH = $(this).offset().top;
                //         if(scrollH > 8000){
                //             console.log('a');
                //         }else if(scrollH > 15000){
                //             console.log('b');
                //         }
                //         if(scrollH > $(this).offset().top - winH){
                //             listline.addClass('slide');
                //         }
                //     });                    
                // }
                // listup();
            

            } else if (nowScrollTop < prevScrollTop) {
                $('header').css("transform","translateY(0px)");
                $('.bar').css("-animation","lineAni2 .6s forwards linear");

                if(nowScrollTop >= sectionAre[0]){
                    $('#about p').eq(0).css("color","#000");                    
                    $('#about p').eq(1).css("color","#ccc");
                    $('#about p').eq(2).css("color","#ccc");
                }if(nowScrollTop >= sectionAre[0] + 150){
                    $('#about p').eq(0).css("color","#ccc");
                    $('#about p').eq(1).css("color","#000");
                    $('#about p').eq(2).css("color","#ccc");
                }if(nowScrollTop >= sectionAre[0] + 300){
                    $('#about p').eq(0).css("color","#ccc");
                    $('#about p').eq(1).css("color","#ccc");
                    $('#about p').eq(2).css("color","#000");
                }    
            }
            prevScrollTop = nowScrollTop;
        });
        
        //스크롤 업하면 애니메이션 리셋
    }
    lineAni();


//top버튼

    $('.up_button').click(function(){
        $('html, body').stop().animate({scrollTop: 0});
    });
});