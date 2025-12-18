document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.menu-li');
  let activeItem = null;
  let isFirstEnter = true;

  menuItems.forEach((item) => {
    const container = item.querySelector('.container');

    item.addEventListener('mouseenter', () => {
      if (activeItem && activeItem !== item) {
        const prevContainer = activeItem.querySelector('.container');
        prevContainer.classList.remove('show', 'animate-down', 'animate-up');
      }

      if (isFirstEnter) {
        container.classList.add('animate-down');
        isFirstEnter = false;
      } else {
        container.classList.remove('animate-down'); // 전환 시 애니메이션 제거
      }

      container.classList.add('show');
      activeItem = item;
    });
  });

  // 메뉴 전체에서 마우스가 나갔을 때만 닫기
  menu.addEventListener('mouseleave', () => {
    if (activeItem) {
      const container = activeItem.querySelector('.container');
      container.classList.remove('show', 'animate-down');
      container.classList.add('animate-up');

      setTimeout(() => {
        container.classList.remove('animate-up');
        activeItem = null;
        isFirstEnter = true;
      }, 300);
    }
  });
});
let currentIndex = 0; // 현재 슬라이드 인덱스

const slides = document.querySelectorAll('.slider img'); // 모든 이미지 선택
const indicators = document.querySelectorAll('.indicator'); // 인디케이터 선택
const prevButton = document.querySelector('.prev'); // 이전 버튼
const nextButton = document.querySelector('.next'); // 다음 버튼

// 슬라이더를 업데이트하는 함수
function updateSlider(index) {
    // 슬라이드를 이동시켜서 해당 이미지 표시
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
    
    // 인디케이터 업데이트
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 다음 슬라이드를 보여주는 함수
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // 슬라이드를 순차적으로 이동
    updateSlider(currentIndex);
}

// 이전 슬라이드를 보여주는 함수
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // 슬라이드를 뒤로 이동
    updateSlider(currentIndex);
}

// 특정 슬라이드로 이동하는 함수
function goToSlide(index) {
    currentIndex = index;
    updateSlider(currentIndex);
}

// 버튼 클릭 이벤트 처리
prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// 인디케이터 클릭 시 해당 슬라이드로 이동
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        goToSlide(parseInt(indicator.dataset.index)); // 클릭된 인디케이터의 index로 이동
    });
});

// 슬라이드 자동 전환 기능
function startAutoSlide() {
    setInterval(() => {
        showNextSlide(); // 일정 시간마다 다음 슬라이드로 이동
    }, 3000); // 3초마다 자동으로 슬라이드 전환
}

// 자동 슬라이드 시작
startAutoSlide();

// 초기 슬라이더 상태 설정
updateSlider(currentIndex);
 const atractionSection = document.querySelector('.atraction');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        atractionSection.classList.add('visible');
        observer.unobserve(entry.target); // 한 번만 실행
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(atractionSection);

  

document.querySelectorAll('.newsimgs').forEach(slider => {
    const images = slider.querySelectorAll('.newsimg img');
    const prevBtn = slider.querySelector('.ba');
    const nextBtn = slider.querySelector('.ne');
    let current = 0;
    let interval;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }

    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }

    function startAutoSlide() {
      interval = setInterval(nextImage, 3000); // 3초마다 자동 전환
    }

    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }

    // 버튼 이벤트 등록
    nextBtn.addEventListener('click', () => {
      nextImage();
      resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      prevImage();
      resetAutoSlide();
    });

    // 슬라이더마다 자동 전환 시작
    startAutoSlide();
  });

const groupSection = document.querySelector('.groupall');
const title = document.querySelector('.group-title');
const images = document.querySelectorAll('.group img');

const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 텍스트 먼저 표시
      title.classList.add('visible');

      // 이미지들 순차적으로 표시
      images.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('visible');
        }, (index + 1) * 400); // 텍스트 이후부터 시작
      });

      observers.unobserve(groupSection); // 한 번만 실행
    }
  });
}, {
  threshold: 0.7
});

observers.observe(groupSection);

  const btnA = document.getElementById('btnA');
  const btnB = document.getElementById('btnB');
  const groupA = document.getElementById('groupA');
  const groupB = document.getElementById('groupB');

  btnA.addEventListener('click', () => {
    btnA.classList.add('active');
    btnB.classList.remove('active');
    groupA.classList.add('active');
    groupB.classList.remove('active');
  });

  btnB.addEventListener('click', () => {
    btnB.classList.add('active');
    btnA.classList.remove('active');
    groupB.classList.add('active');
    groupA.classList.remove('active');
  });
  const atractionSectionbb = document.querySelector('.atraction');
  const observerbb = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      atractionSectionbb.classList.add('visible');
      observerbb.unobserve(entry.target); // 한 번만 실행
    }
  });
}, {
  threshold: 0.5
});

observerbb.observe(atractionSectionbb);
 


  
  const buttons = document.querySelectorAll('.tab-btn');
  const groups = document.querySelectorAll('.tab-group');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      // 버튼 상태
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 이미지 그룹 전환
      groups.forEach(group => group.classList.remove('active'));
      document.querySelector(`.tab-group[data-tab="${tab}"]`).classList.add('active');
    });
  });