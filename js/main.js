document.addEventListener('DOMContentLoaded', () => {
  // heroSwiper
  const heroSwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });

  // gallerySwiper
  const gallerySwiper = new Swiper('.gallery__swiper', {
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".gallery__swiper-button-next",
      prevEl: ".gallery__swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 12,
      },
      550: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1366: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }
  });

  // eventsSwiper
  const eventsSwiper = new Swiper('.events__swiper', {
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".events__swiper-button-next",
      prevEl: ".events__swiper-button-prev",
    },
    pagination: {
      el: ".events__swiper-pagination",
      clickable: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 34,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },
      1366: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }
  });

  // progectsSwiper
  const progectsSwiper = new Swiper('.progects__swiper', {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".progects__swiper-button-next",
      prevEl: ".progects__swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 12,
      },
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },
      1366: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }
  });

  // Header dropdown
  const dropdownBtns = document.querySelectorAll('.header-bottom__btn');
  dropdownBtns.forEach(dropdownBtn => {
    dropdownBtn.addEventListener('click', () => {
      const dropdown = dropdownBtn.parentElement.querySelector('.dropdown');

      dropdownBtns.forEach(elem => {
        if (elem != dropdownBtn) {
          elem.classList.remove('isActive');
          elem.parentElement.querySelector('.dropdown').classList.remove('active-dropdown');
          elem.removeAttribute('aria-label');
        }
      })
      dropdownBtn.classList.toggle('isActive');
      dropdown.classList.toggle('active-dropdown');
    })
  });

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-bottom__list")) {
      document.querySelectorAll(".dropdown").forEach(el => {
          el.classList.remove("active-dropdown");
      })
      document.querySelectorAll(".header-bottom__btn").forEach(el => {
          el.classList.remove("isActive");
          el.removeAttribute('aria-label');
      });
    }
  })

  // Select gallery
  const selectGalery = document.querySelector('.gallery__left-top-select');
  const choicesGalery = new Choices(selectGalery, {
    searchEnabled: false,
    itemSelectText: '',
  });

  // Modal window gallery
  const dataDescr = {
    Torso: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Торс (Фигура с розовым лицом)”</h4><p class="signature paint-descr__date">1929</p><p class="text paint-descr__text">Картина из серии крестьянского цикла работ Казимира Малевича.</p>',
    galery_2: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Супрематизм”</h4><p class="signature paint-descr__date">1917</p><p class="text paint-descr__text">Картина из серии супрематизмов.</p>',
    a_woman_with_a_rake: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Женщина с граблями”</h4><p class="signature paint-descr__date">1931-1932</p><p class="text paint-descr__text">Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.</p>',
    peasant_women_with_buckets: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Крестьянки с ведрами”</h4><p class="signature paint-descr__date">1913</p><p class="text paint-descr__text">Картина из серии крестьянского цикла работ Казимира Малевича.</p>',
    Rye_harvesting: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Уборка ржи”</h4><p class="signature paint-descr__date">1912</p><p class="text paint-descr__text">Картина из серии крестьянского цикла работ Казимира Малевича.</p>',
    galery_6: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Супрематизм”</h4><p class="signature paint-descr__date">1916</p><p class="text paint-descr__text">Картина из серии супрематизмов.</p>',
    Carpenter: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Плотник”</h4><p class="signature paint-descr__date">1929</p><p class="text paint-descr__text">Картина из серии супрематизмов.</p>',
    A_peasant_in_the_field: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Крестьянин в поле”</h4><p class="signature paint-descr__date">1929</p><p class="text paint-descr__text">Картина из серии крестьянского цикла работ Казимира Малевича.</p>',
    peasants: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Два крестьянина на фоне полей”</h4><p class="signature paint-descr__date">1930</p><p class="text paint-descr__text">Картина из серии крестьянского цикла работ Казимира Малевича.</p>',
    Suprematism: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Супрематизм”</h4><p class="signature paint-descr__date">1916</p><p class="text paint-descr__text">Картина из серии супрематизмов.</p>',
    Suprematism_1917: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Супрематизм”</h4><p class="signature paint-descr__date">1917</p><p class="text paint-descr__text">Картина из серии супрематизмов.</p>',
    Girls_in_the_field: '<h3 class="title-3 paint-descr__title">Казимир Малевич</h3><h4 class="paint-descr__paint-name">“Девушки в поле”</h4><p class="signature paint-descr__date">1932</p><p class="text paint-descr__text">Картина из серии крестьянского цикла работ Казимира Малевича.</p>',
    galery_13: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_14: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_15: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_16: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_17: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_18: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_19: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_20: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_21: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_22: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_23: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
    galery_24: '<h3 class="title-3 paint-descr__title">Какой-то художник</h3><h4 class="paint-descr__paint-name">“Какое-то название”</h4><p class="signature paint-descr__date">Какая-то дата</p><p class="text paint-descr__text">Картина какого-то художника из какого-то цткла работ. Художник когда-то принялся за её создание и когда-то закончил.</p>',
  }

  const gallerySlides = document.querySelectorAll('.gallery__slide');
  const modalWindow = document.querySelector('.paint-descr');
  const closeModalWindow = document.querySelector('.paint-descr__btn');
  const paintModalWindow = document.querySelector('.paint-descr__paint');
  const descrModalWindow = document.querySelector('.paint-descr__descr');

  gallerySlides.forEach(slide => {
    slide.addEventListener('click', () => {
      const slideName = slide.querySelector('img').dataset.name;
      const slideAlt = slide.querySelector('img').getAttribute('alt');
      paintModalWindow.innerHTML = `<img class="paint-descr__img" src="./img/desktop-1920/${slideName}.jpg" alt="${slideAlt}">`;
      descrModalWindow.innerHTML = dataDescr[slideName];
      modalWindow.parentElement.classList.add('modal-active');
    })
  })

  document.addEventListener('click', (e) => {
    if (e.target !== modalWindow && e.target === modalWindow.parentElement) {
      modalWindow.parentElement.classList.remove('modal-active');
   }
  })

  closeModalWindow.addEventListener('click', () => {
    modalWindow.parentElement.classList.remove('modal-active');
  })



  // Accordion
  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true});
  } );

  // tooltypes
  tippy('#tooltype-1', {
    content: 'Пример современных тенденций - современная методология разработки ',
  });
  tippy('#tooltype-2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
  });
  tippy('#tooltype-3', {
    content: 'В стремлении повысить качество',
  });

  // Catalog artists
  const artists = {
    plug: '<div class="catalog-plug"><div class="catalog-plug__picture"><div class="plug-picture__img-container"><img class="plug-picture__img" src="./img/desktop-1920/artist 1.svg" alt="Нет картинки"><p class="plug-picture__descr">X - Художник</p></div></div><h3 class="title-3 artist-info__title catalog__plug-title">Что мы о нём знаем?</h3><p class="text artist-info__text catalog-plug__text">Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!</p><a href="#gallery" class="content-nothing-link catalog-plug__link link">В галерею</a></div>',
    benedetto: '<div class="artist-info"><picture><source media="(max-width: 320px)" srcset="./img/mobile/benedetto.jpg"><img class="artist-info__img" src="./img/desktop-1920/benedetto.jpg" alt="Картина Бенедетто ди Биндо"></picture><h3 class="title-3 artist-info__title">Бенедетто ди Биндо</h3><p class="signature artist-info__signature"> Ок. 1380—85 — 19 сентября 1417.</p><p class="text artist-info__text">Бенедетто ди Биндо остался в истории искусства как сиенский художник, так сказать, «второго ряда», несмотря на то, что за свою короткую жизнь он выполнил ряд весьма престижных заказов, включая работы в Сиенском соборе (работы в главном соборе республики второстепенным художникам не поручались). Обучение он прошёл у Таддео ди Бартоло, крупного сиенского мастера поздней готики, в боттеге которого Бенедетто трудился вместе с Грегорио ди Чекко.</p></div>',
    bergonie: '<div class="artist-info"><picture><source media="(max-width: 320px)" srcset="./img/mobile/bergonie.jpg"><img class="artist-info__img" src="./img/desktop-1920/bergonie.jpg" alt="Картина Бергоньоне, Амброджо"></picture><h3 class="title-3 artist-info__title">Бергоньоне, Амброджо</h3><p class="signature artist-info__signature">1453 — 1523.</p><p class="text artist-info__text">Настоящее имя — Амброджо да Фоссано — итальянский художник ломбардской школы. Прозвище говорит о его тяготении к бургундской школе, по манере ему близок Винченцо Фоппа. Испытал влияние Леонардо да Винчи. Наиболее известен работами 1486—1494 в монастырской обители картезианцев Чертоза ди Павия. Позднее работал в Милане в базилике Сант-Эусторджо и церкви Сан-Сатиро, после 1497 — в Лоди, в 1512 — в Бергамо, незадолго до смерти — снова в Милане, в базилике Сан-Симпличано. Его завещание датировано 4 апреля 1523, в том же году он умер. Одним из его учеников считают Бернардино Луини.</p></div>',
    francescoBissolo: '<div class="artist-info"><picture><source media="(max-width: 320px)" srcset="./img/mobile/Francesco_Bissolo.jpg"><img class="artist-info__img" src="./img/desktop-1920/Francesco_Bissolo.jpg" alt="Картина Биссоло, Франческо"></picture><h3 class="title-3 artist-info__title">Биссоло, Франческо</h3><p class="signature artist-info__signature">1470 или 1472 — 20 апреля 1554.</p><p class="text artist-info__text">Его описывают как ученика Джованни Беллини. Он написал Христа, меняющего терновый венец на золотой, со святой Екатериной для церкви иль Реденторе, ныне находящейся в Галерее Академии в Венеции, и Санта-Джустину в соборе Тревизо. Он написал Святое Семейство с донором в пейзаже, найденном в Дейтонском художественном институте в Огайо, США.</p></div>',
    dominico: '<div class="artist-info"><picture><source media="(max-width: 320px)" srcset="./img/mobile/dominico.jpg"><img class="artist-info__img" src="./img/desktop-1920/dominico.jpg" alt="Картина Доменико Гирландайо"></picture><h3 class="title-3 artist-info__title">Доменико Гирландайо</h3><p class="signature artist-info__signature">2 июня 1448 — 11 января 1494.</p><p class="text artist-info__text">Один из&nbsp;ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и&nbsp;сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в&nbsp;течение года овладевал профессиональными навыками. Автор фресковых циклов, в&nbsp;которых выпукло, со&nbsp;всевозможными подробностями показана домашняя жизнь библейских персонажей (в&nbsp;их&nbsp;роли выступают знатные граждане Флоренции в&nbsp;костюмах того времени).</p></div>',
  }

  const catalogArtistsInfoContainer = document.querySelector('.catalog__bottom__left')
  const catalogArtists = document.querySelectorAll('.content-accordion__link');

  for (let artist of catalogArtists) {
    artist.addEventListener('click', () => {
      switch (artist.textContent) {
        case 'Доменико Гирландайо': catalogArtistsInfoContainer.innerHTML = artists.dominico;
        break;
        case 'Бенедетто ди Биндо': catalogArtistsInfoContainer.innerHTML = artists.benedetto;
        break;
        case 'Бергоньоне, Амброджо': catalogArtistsInfoContainer.innerHTML = artists.bergonie;
        break;
        case 'Биссоло, Франческо': catalogArtistsInfoContainer.innerHTML = artists.francescoBissolo;
        break;
        default: catalogArtistsInfoContainer.innerHTML = artists.plug
      }
    })
  }

  // Открытие меню бургера
  const burger = document.querySelector('.burger');
  const openMenu = document.querySelector('.open-menu')
  burger.addEventListener('click', () => {
    openMenu.classList.add('open-menu-active');
  })

  // Закрытие меню бургера
  const closeMenu = document.querySelector('.nav__close-btn');
  closeMenu.addEventListener('click', () => {
    openMenu.classList.remove('open-menu-active');
  })

  const navLink = openMenu.querySelectorAll('.nav__link');
  navLink.forEach((link) => {
    link.addEventListener('click', () => {
      openMenu.classList.remove('open-menu-active');
    })
  })

  document.addEventListener('click', (e) => {
    if(e.target !== openMenu && e.target !== burger) {
      openMenu.classList.remove('open-menu-active');
    }
  })

  // Открытие поля пойска по сайту
  const searchButton = document.querySelector('.header-top__search-btn');
  const searchContainer = document.querySelector('.header-top__search-container');
  const searchCloseBtn = document.querySelector('.header-top__close-btn');
  searchButton.addEventListener('click', () => {
    searchContainer.classList.add('form__active');
    // searchButton.classList.add('btn-hidden');
  })

  // Закрытие поля пойска по сайту
  searchCloseBtn.addEventListener('click', () => {
    searchContainer.classList.remove('form__active');
  })
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (!target.closest(".header-top__search")) {
      searchContainer.classList.remove('form__active');
      // searchButton.classList.remove('btn-hidden');
    }
  })

  // Inputmask
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  // Validate
  const contactsFormInput = document.querySelectorAll('.contacts .input');
  const inputName = document.querySelector('.contacts .input[type="text"]');
  const inputTel = document.querySelector('.contacts .input[type="tel"]');
  const formBtn = document.querySelector('.form__button');
  for (let input of contactsFormInput) {
    input.addEventListener('focus', () => {
      input.classList.remove('input-error');
      input.parentElement.classList.remove('error');
    })
  }

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputName.value.length < 2) {
      inputName.classList.add('input-error');
      inputName.parentElement.classList.add('error');
    }
    if (inputTel.value.replace(/[+ ()_-]/g, '').length <= 10) {
      inputTel.classList.add('input-error');
      inputTel.parentElement.classList.add('error');
    }
    if (!document.querySelector('.error')) {
      for (let input of contactsFormInput) {
        input.classList.remove('input-error');
        input.parentElement.classList.remove('error');
        inputName.value = '';
        inputTel.value = '';
      }
    }
  })

  // document.addEventListener('click', (e) => {
  //   console.log(e.target);
  // })
})
