if (document.querySelector('.swiper') !== null) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
      750: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 5,
      }
    }
  });
}

const VolumeUp = document.getElementById('iconVolumeUp');
const VolumeMute = document.getElementById('iconVolumeMute');

if ((VolumeUp !== null) || (VolumeMute !== null)) {
  VolumeUp.addEventListener('click', () => {
    VolumeUp.style.display = 'none';
    VolumeMute.style.display = 'inline';
  })

  VolumeMute.addEventListener('click', () => {
    VolumeMute.style.display = 'none';
    VolumeUp.style.display = 'inline';
  })
}


if (document.querySelectorAll('.fade') !== null) {
  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      setTimeout(() => {
        entry.isIntersecting
            ? entry.target.classList.add('fade_in')
            : entry.target.classList.remove('fade_in')
      }, 100)
    })
  }, {})
  for (const element of document.querySelectorAll('.fade')) {
    imageObserver.observe(element);
  }
}
