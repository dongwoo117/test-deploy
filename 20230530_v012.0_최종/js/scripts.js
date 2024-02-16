let table_00_seoul = [];
let table_01_gangnam = [];
let table_02_gangdong = [];
let table_03_gangbuk = [];
let table_04_gangseo = [];
let table_05_gwanak = [];
let table_06_gwangjin = [];
let table_07_guro = [];
let table_08_geumcheon = [];
let table_09_nowon = [];
let table_10_dobong = [];
let table_11_dongdaemun = [];
let table_12_dongjak = [];
let table_13_mapo = [];
let table_14_seodaemun = [];
let table_15_seocho = [];
let table_16_seongdong = [];
let table_17_seongbuk = [];
let table_18_songpa = [];
let table_19_yangcheon = [];
let table_20_yeongdeungpo = [];
let table_21_yongsan = [];
let table_22_eunpyeong = [];
let table_23_jongno = [];
let table_24_junggu = [];
let table_25_jungnang = [];

fetch('http://openAPI.seoul.go.kr:8088/634a4f64626b726137355752707257/json/ListPublicReservationSport/1/500/')
    .then((response) => response.json())
    .then((raw_data) => {
        data = raw_data['ListPublicReservationSport']['row'];
        for (let item of data){
            if (item.SVCSTATNM == '접수중') {
                table_00_seoul.push(item)
            };
            if ((item.AREANM == '강남구') && (item.SVCSTATNM == '접수중')) {
                table_01_gangnam.push(item)
            };
            if ((item.AREANM == '강동구') && (item.SVCSTATNM == '접수중')) {
                table_02_gangdong.push(item)
            };
            if ((item.AREANM == '강북구') && (item.SVCSTATNM == '접수중')) {
                table_03_gangbuk.push(item)
            };
            if ((item.AREANM == '강서구') && (item.SVCSTATNM == '접수중')) {
                table_04_gangseo.push(item)
            };
            if ((item.AREANM == '관악구') && (item.SVCSTATNM == '접수중')) {
                table_05_gwanak.push(item)
            };
            if ((item.AREANM == '광진구') && (item.SVCSTATNM == '접수중')) {
                table_06_gwangjin.push(item)
            };
            if ((item.AREANM == '구로구') && (item.SVCSTATNM == '접수중')) {
                table_07_guro.push(item)
            };
            if ((item.AREANM == '금천구') && (item.SVCSTATNM == '접수중')) {
                table_08_geumcheon.push(item)
            };
            if ((item.AREANM == '노원구') && (item.SVCSTATNM == '접수중')) {
                table_09_nowon.push(item)
            };
            if ((item.AREANM == '도봉구') && (item.SVCSTATNM == '접수중')) {
                table_10_dobong.push(item)
            };
            if ((item.AREANM == '동대문구') && (item.SVCSTATNM == '접수중')) {
                table_11_dongdaemun.push(item)
            };
            if ((item.AREANM == '동작구') && (item.SVCSTATNM == '접수중')) {
                table_12_dongjak.push(item)
            };
            if ((item.AREANM == '마포구') && (item.SVCSTATNM == '접수중')) {
                table_13_mapo.push(item)
            };
            if ((item.AREANM == '서대문구') && (item.SVCSTATNM == '접수중')) {
                table_14_seodaemun.push(item)
            };
            if ((item.AREANM == '서초구') && (item.SVCSTATNM == '접수중')) {
                table_15_seocho.push(item)
            };
            if ((item.AREANM == '성동구') && (item.SVCSTATNM == '접수중')) {
                table_16_seongdong.push(item)
            };
            if ((item.AREANM == '성북구') && (item.SVCSTATNM == '접수중')) {
                table_17_seongbuk.push(item)
            };
            if ((item.AREANM == '송파구') && (item.SVCSTATNM == '접수중')) {
                table_18_songpa.push(item)
            };
            if ((item.AREANM == '양천구') && (item.SVCSTATNM == '접수중')) {
                table_19_yangcheon.push(item)
            };
            if ((item.AREANM == '영등포구') && (item.SVCSTATNM == '접수중')) {
                table_20_yeongdeungpo.push(item)
            };
            if ((item.AREANM == '용산구') && (item.SVCSTATNM == '접수중')) {
                table_21_yongsan.push(item)
            };
            if ((item.AREANM == '은평구') && (item.SVCSTATNM == '접수중')) {
                table_22_eunpyeong.push(item)
            };
            if ((item.AREANM == '종로구') && (item.SVCSTATNM == '접수중')) {
                table_23_jongno.push(item)
            };
            if ((item.AREANM == '중구') && (item.SVCSTATNM == '접수중')) {
                table_24_junggu.push(item)
            };
            if ((item.AREANM == '중랑구') && (item.SVCSTATNM == '접수중')) {
                table_25_jungnang.push(item)
            };
        };

        let cnt_00_seoul = table_00_seoul.length;
        let cnt_01_gangnam = table_01_gangnam.length;
        let cnt_02_gangdong = table_02_gangdong.length;
        let cnt_03_gangbuk = table_03_gangbuk.length;
        let cnt_04_gangseo = table_04_gangseo.length;
        let cnt_05_gwanak = table_05_gwanak.length;
        let cnt_06_gwangjin = table_06_gwangjin.length;
        let cnt_07_guro = table_07_guro.length;
        let cnt_08_geumcheon = table_08_geumcheon.length;
        let cnt_09_nowon = table_09_nowon.length;
        let cnt_10_dobong = table_10_dobong.length;
        let cnt_11_dongdaemun = table_11_dongdaemun.length;
        let cnt_12_dongjak = table_12_dongjak.length;
        let cnt_13_mapo = table_13_mapo.length;
        let cnt_14_seodaemun = table_14_seodaemun.length;
        let cnt_15_seocho = table_15_seocho.length;
        let cnt_16_seongdong = table_16_seongdong.length;
        let cnt_17_seongbuk = table_17_seongbuk.length;
        let cnt_18_songpa = table_18_songpa.length;
        let cnt_19_yangcheon = table_19_yangcheon.length;
        let cnt_20_yeongdeungpo = table_20_yeongdeungpo.length;
        let cnt_21_yongsan = table_21_yongsan.length;
        let cnt_22_eunpyeong = table_22_eunpyeong.length;
        let cnt_23_jongno = table_23_jongno.length;
        let cnt_24_junggu = table_24_junggu.length;
        let cnt_25_jungnang = table_25_jungnang.length;

        let mcnt00 = document.querySelector('#mt_00_seoul');
        mcnt00.innerText = mcnt00.innerText.replace('n00',cnt_00_seoul);
        let mcnt01 = document.querySelector('#mt_01_gangnam');
        mcnt01.innerText = mcnt01.innerText.replace('n01',cnt_01_gangnam);
        let mcnt02 = document.querySelector('#mt_02_gangdong');
        mcnt02.innerText = mcnt02.innerText.replace('n02',cnt_02_gangdong);
        let mcnt03 = document.querySelector('#mt_03_gangbuk');
        mcnt03.innerText = mcnt03.innerText.replace('n03',cnt_03_gangbuk);
        let mcnt04 = document.querySelector('#mt_04_gangseo');
        mcnt04.innerText = mcnt04.innerText.replace('n04',cnt_04_gangseo);
        let mcnt05 = document.querySelector('#mt_05_gwanak');
        mcnt05.innerText = mcnt05.innerText.replace('n05',cnt_05_gwanak);
        let mcnt06 = document.querySelector('#mt_06_gwangjin');
        mcnt06.innerText = mcnt06.innerText.replace('n06',cnt_06_gwangjin);
        let mcnt07 = document.querySelector('#mt_07_guro');
        mcnt07.innerText = mcnt07.innerText.replace('n07',cnt_07_guro);
        let mcnt08 = document.querySelector('#mt_08_geumcheon');
        mcnt08.innerText = mcnt08.innerText.replace('n08',cnt_08_geumcheon);
        let mcnt09 = document.querySelector('#mt_09_nowon');
        mcnt09.innerText = mcnt09.innerText.replace('n09',cnt_09_nowon);
        let mcnt10 = document.querySelector('#mt_10_dobong');
        mcnt10.innerText = mcnt10.innerText.replace('n10',cnt_10_dobong);
        let mcnt11 = document.querySelector('#mt_11_dongdaemun');
        mcnt11.innerText = mcnt11.innerText.replace('n11',cnt_11_dongdaemun);
        let mcnt12 = document.querySelector('#mt_12_dongjak');
        mcnt12.innerText = mcnt12.innerText.replace('n12',cnt_12_dongjak);
        let mcnt13 = document.querySelector('#mt_13_mapo');
        mcnt13.innerText = mcnt13.innerText.replace('n13',cnt_13_mapo);
        let mcnt14 = document.querySelector('#mt_14_seodaemun');
        mcnt14.innerText = mcnt14.innerText.replace('n14',cnt_14_seodaemun);
        let mcnt15 = document.querySelector('#mt_15_seocho');
        mcnt15.innerText = mcnt15.innerText.replace('n15',cnt_15_seocho);
        let mcnt16 = document.querySelector('#mt_16_seongdong');
        mcnt16.innerText = mcnt16.innerText.replace('n16',cnt_16_seongdong);
        let mcnt17 = document.querySelector('#mt_17_seongbuk');
        mcnt17.innerText = mcnt17.innerText.replace('n17',cnt_17_seongbuk);
        let mcnt18 = document.querySelector('#mt_18_songpa');
        mcnt18.innerText = mcnt18.innerText.replace('n18',cnt_18_songpa);
        let mcnt19 = document.querySelector('#mt_19_yangcheon');
        mcnt19.innerText = mcnt19.innerText.replace('n19',cnt_19_yangcheon);
        let mcnt20 = document.querySelector('#mt_20_yeongdeungpo');
        mcnt20.innerText = mcnt20.innerText.replace('n20',cnt_20_yeongdeungpo);
        let mcnt21 = document.querySelector('#mt_21_yongsan');
        mcnt21.innerText = mcnt21.innerText.replace('n21',cnt_21_yongsan);
        let mcnt22 = document.querySelector('#mt_22_eunpyeong');
        mcnt22.innerText = mcnt22.innerText.replace('n22',cnt_22_eunpyeong);
        let mcnt23 = document.querySelector('#mt_23_jongno');
        mcnt23.innerText = mcnt23.innerText.replace('n23',cnt_23_jongno);
        let mcnt24 = document.querySelector('#mt_24_junggu');
        mcnt24.innerText = mcnt24.innerText.replace('n24',cnt_24_junggu);
        let mcnt25 = document.querySelector('#mt_25_jungnang');
        mcnt25.innerText = mcnt25.innerText.replace('n25',cnt_25_jungnang);

        let lcnt01 = document.querySelector('#lt_01_gangnam');
        lcnt01.innerText = lcnt01.innerText.replace('l01',cnt_01_gangnam);


    });

/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            navbarCollapsible.style.backgroundColor = 'white';
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            navbarCollapsible.style.backgroundColor = 'white';
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});