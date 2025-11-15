document.addEventListener('DOMContentLoaded', () => {
  createAdvancedSplashScreen();
});

function createAdvancedSplashScreen() {
  const splash = document.createElement('div');
  splash.id = 'splash-screen';
  splash.innerHTML = `
    <div class="splash-background">
      <div class="splash-glow"></div>
      <div class="splash-grid"></div>
    </div>
    <div class="splash-content">
      <div class="splash-logo-container">
        <div class="splash-logo">🎬</div>
        <div class="splash-logo-ring"></div>
      </div>
      <div class="splash-text-container">
        <h1 class="splash-title">LOS 100</h1>
        <div class="splash-line"></div>
        <div class="splash-subtitle">STREAMING OFICIAL</div>
      </div>
      <div class="splash-loader-container">
        <div class="splash-loader">
          <div class="loader-segment"></div>
          <div class="loader-segment"></div>
          <div class="loader-segment"></div>
        </div>
      </div>
      <p class="splash-text">Preparando tu experiencia cinematográfica...</p>
    </div>
  `;

  document.body.insertBefore(splash, document.body.firstChild);
  addAdvancedSplashStyles();
  
  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.remove();
      initAllEffects();
    }, 1200);
  }, 3500);
}

function addAdvancedSplashStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #splash-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0a0f1a 0%, #050810 50%, #0f1224 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      overflow: hidden;
      animation: splashFadeIn 0.8s ease-out;
    }

    #splash-screen.fade-out {
      animation: splashFadeOut 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }

    @keyframes splashFadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes splashFadeOut {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(1.1);
      }
    }

    .splash-background {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .splash-glow {
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: glowPulse 3s ease-in-out infinite;
      filter: blur(40px);
    }

    @keyframes glowPulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.2); }
    }

    .splash-grid {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(0deg, transparent 24%, rgba(255, 107, 107, 0.05) 25%, rgba(255, 107, 107, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 107, 0.05) 75%, rgba(255, 107, 107, 0.05) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba(255, 107, 107, 0.05) 25%, rgba(255, 107, 107, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 107, 0.05) 75%, rgba(255, 107, 107, 0.05) 76%, transparent 77%, transparent);
      background-size: 50px 50px;
      animation: moveGrid 20s linear infinite;
    }

    @keyframes moveGrid {
      0% { transform: translateY(0); }
      100% { transform: translateY(50px); }
    }

    .splash-content {
      position: relative;
      z-index: 10;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      animation: contentSlideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes contentSlideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .splash-logo-container {
      position: relative;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .splash-logo {
      font-size: 80px;
      animation: logoBounce 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
      filter: drop-shadow(0 0 40px rgba(255, 107, 107, 0.6));
      z-index: 2;
    }

    @keyframes logoBounce {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-20px) scale(1.1); }
    }

    .splash-logo-ring {
      position: absolute;
      width: 130px;
      height: 130px;
      border: 2px solid rgba(255, 107, 107, 0.3);
      border-radius: 50%;
      animation: ringRotate 3s linear infinite;
    }

    @keyframes ringRotate {
      0% { transform: rotate(0deg); opacity: 1; }
      100% { transform: rotate(360deg); opacity: 1; }
    }

    .splash-text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .splash-title {
      font-size: 56px;
      font-weight: 900;
      margin: 0;
      color: #ff6b6b;
      letter-spacing: 4px;
      text-shadow: 
        0 0 20px rgba(255, 107, 107, 0.8),
        0 0 40px rgba(255, 107, 107, 0.4);
      animation: titleGlow 1s ease-out;
    }

    @keyframes titleGlow {
      from {
        opacity: 0;
        transform: scale(0.8);
        text-shadow: 0 0 10px rgba(255, 107, 107, 0.2);
      }
      to {
        opacity: 1;
        transform: scale(1);
        text-shadow: 0 0 20px rgba(255, 107, 107, 0.8), 0 0 40px rgba(255, 107, 107, 0.4);
      }
    }

    .splash-line {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
      animation: lineExpand 1.2s ease-out 0.3s both;
    }

    @keyframes lineExpand {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        width: 60px;
        opacity: 1;
      }
    }

    .splash-subtitle {
      font-size: 14px;
      color: #94a3b8;
      letter-spacing: 3px;
      text-transform: uppercase;
      font-weight: 600;
      animation: fadeInUp 1s ease-out 0.5s both;
    }

    .splash-loader-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .splash-loader {
      display: flex;
      gap: 8px;
    }

    .loader-segment {
      width: 8px;
      height: 8px;
      background: linear-gradient(135deg, #ff6b6b, #ff9b6b);
      border-radius: 50%;
      animation: loaderBounce 1.4s ease-in-out infinite;
      box-shadow: 0 0 10px rgba(255, 107, 107, 0.6);
    }

    .loader-segment:nth-child(2) {
      animation-delay: 0.2s;
    }

    .loader-segment:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes loaderBounce {
      0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      50% {
        transform: translateY(-15px) scale(0.8);
        opacity: 0.6;
      }
    }

    .splash-text {
      color: #cfe3ff;
      font-size: 14px;
      margin: 0;
      letter-spacing: 1px;
      font-weight: 500;
      animation: fadeInUp 1s ease-out 0.8s both;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .splash-title {
        font-size: 36px;
      }
      .splash-logo {
        font-size: 60px;
      }
    }
  `;
  
  document.head.appendChild(style);
}

// ============================================
// 🌟 EFECTOS AVANZADOS - INICIALIZAR TODO
// ============================================

function initAllEffects() {
  createAdvancedParticles();
  initAdvancedButtonGlow();
  initScrollReveal();
  showAdvancedNotification();
  initClickRipple();
  initMovieCounter();
  initFloatingElements();
  initMouseTracker();
}

// ============================================
// ✨ PARTÍCULAS AVANZADAS CON MOUSE TRACKING
// ============================================

function createAdvancedParticles() {
  const container = document.createElement('div');
  container.id = 'particles-container';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
  
  document.body.appendChild(container);
  
  const particleStyle = document.createElement('style');
  particleStyle.textContent = `
    .particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: radial-gradient(circle, #ff6b6b, #ff9b6b);
      border-radius: 50%;
      opacity: 0.6;
      animation: float linear infinite;
      box-shadow: 0 0 8px rgba(255, 107, 107, 0.8);
    }

    @keyframes float {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.6;
      }
      90% {
        opacity: 0.6;
      }
      100% {
        transform: translateY(-100vh) translateX(100px) rotate(360deg);
        opacity: 0;
      }
    }

    .particle.hover {
      transform: scale(2) !important;
    }
  `;
  
  document.head.appendChild(particleStyle);
  
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = Math.random() * 100 + '%';
    particle.style.animation = `float ${15 + Math.random() * 15}s linear infinite`;
    particle.style.animationDelay = Math.random() * 8 + 's';
    container.appendChild(particle);
  }

  // Interacción con mouse
  document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(p => {
      const x = p.getBoundingClientRect().left;
      const y = p.getBoundingClientRect().top;
      const distance = Math.hypot(e.clientX - x, e.clientY - y);
      
      if (distance < 100) {
        p.style.transform = `scale(1.5)`;
      } else {
        p.style.transform = `scale(1)`;
      }
    });
  });
}

// ============================================
// 💫 EFECTO GLOW AVANZADO EN BOTONES
// ============================================

function initAdvancedButtonGlow() {
  const buttons = document.querySelectorAll('.btn-primary, .ad-btn, .btn-watch, #seasonsToggle, button');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      createButtonGlow(e, btn);
    });
  });

  const glowStyle = document.createElement('style');
  glowStyle.textContent = `
    .btn-glow-effect {
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(255,155,107,0.4) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: glowExpand 0.8s ease-out;
    }

    @keyframes glowExpand {
      from {
        transform: scale(0);
        opacity: 1;
      }
      to {
        transform: scale(1);
        opacity: 0;
      }
    }

    button {
      position: relative;
      overflow: visible;
    }
  `;
  
  document.head.appendChild(glowStyle);
}

function createButtonGlow(e, btn) {
  const glow = document.createElement('div');
  glow.className = 'btn-glow-effect';
  const rect = btn.getBoundingClientRect();
  glow.style.left = e.clientX - rect.left - 150 + 'px';
  glow.style.top = e.clientY - rect.top - 150 + 'px';
  btn.appendChild(glow);
  
  setTimeout(() => glow.remove(), 800);
}

// ============================================
// 📊 SCROLL REVEAL MEJORADO
// ============================================

function initScrollReveal() {
  const revealStyle = document.createElement('style');
  revealStyle.textContent = `
    .reveal {
      animation: revealUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
    }

    @keyframes revealUp {
      from {
        opacity: 0;
        transform: translateY(50px) rotateX(10deg);
        filter: blur(5px);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotateX(0deg);
        filter: blur(0);
      }
    }
  `;
  
  document.head.appendChild(revealStyle);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('reveal');
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .episode-card, .ad-section').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ============================================
// 🎉 NOTIFICACIÓN AVANZADA
// ============================================

function showAdvancedNotification() {
  const notification = document.createElement('div');
  notification.innerHTML = `
    <div class="advanced-notification">
      <div class="notification-icon">🎬</div>
      <div class="notification-content">
        <p class="notification-title">¡Bienvenido a Los 100!</p>
        <p class="notification-text">Descubre películas y series increíbles</p>
      </div>
      <button class="notification-close">✕</button>
      <div class="notification-progress"></div>
    </div>
  `;
  
  document.body.appendChild(notification);

  const notificationStyle = document.createElement('style');
  notificationStyle.textContent = `
    .advanced-notification {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(255, 155, 107, 0.1));
      border: 1.5px solid rgba(255, 107, 107, 0.4);
      border-radius: 16px;
      padding: 20px 24px;
      display: flex;
      gap: 16px;
      align-items: center;
      backdrop-filter: blur(20px);
      z-index: 1000;
      animation: notifSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 
        0 8px 32px rgba(255, 107, 107, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      overflow: hidden;
    }

    @keyframes notifSlideIn {
      from {
        opacity: 0;
        transform: translateX(400px) translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0) translateY(0);
      }
    }

    .notification-icon {
      font-size: 32px;
      animation: iconPulse 2s ease-in-out infinite;
    }

    @keyframes iconPulse {
      0%, 100% {
        transform: scale(1) rotate(0deg);
      }
      50% {
        transform: scale(1.1) rotate(10deg);
      }
    }

    .notification-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .notification-title {
      color: #ff6b6b;
      font-weight: 700;
      margin: 0;
      font-size: 15px;
      letter-spacing: 0.5px;
    }

    .notification-text {
      color: #cfe3ff;
      margin: 0;
      font-size: 13px;
      opacity: 0.8;
    }

    .notification-close {
      background: transparent;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.2s ease;
      padding: 4px 8px;
      margin-left: 8px;
    }

    .notification-close:hover {
      color: #ff6b6b;
      transform: rotate(90deg) scale(1.2);
    }

    .notification-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #ff6b6b, #ff9b6b);
      animation: progressBar 8s linear forwards;
    }

    @keyframes progressBar {
      from { width: 100%; }
      to { width: 0%; }
    }

    @media (max-width: 768px) {
      .advanced-notification {
        bottom: 20px;
        right: 20px;
        left: 20px;
      }
    }
  `;
  
  document.head.appendChild(notificationStyle);

  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.style.animation = 'notifSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) reverse';
    setTimeout(() => notification.remove(), 600);
  });

  setTimeout(() => {
    if (document.body.contains(notification)) {
      closeBtn.click();
    }
  }, 8000);
}

// ============================================
// 🎯 RIPPLE EFFECT MEJORADO
// ============================================

function initClickRipple() {
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    .ripple-effect {
      position: fixed;
      border: 2px solid #ff6b6b;
      border-radius: 50%;
      transform: scale(0);
      animation: rippleExpand 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: none;
      z-index: 9998;
      box-shadow: 0 0 20px rgba(255, 107, 107, 0.6);
    }

    @keyframes rippleExpand {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);

  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = '30px';
    ripple.style.height = '30px';
    ripple.style.marginLeft = '-15px';
    ripple.style.marginTop = '-15px';
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 800);
  });
}

// ============================================
// 📽️ CONTADOR DE PELÍCULAS ANIMADO
// ============================================

function initMovieCounter() {
  const counterStyle = document.createElement('style');
  counterStyle.textContent = `
    .movie-counter {
      position: fixed;
      top: 80px;
      left: 20px;
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(255, 155, 107, 0.1));
      border: 1.5px solid rgba(255, 107, 107, 0.3);
      border-radius: 12px;
      padding: 14px 18px;
      color: #ff6b6b;
      font-weight: 700;
      font-size: 15px;
      z-index: 50;
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
    }

    .movie-counter:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(255, 107, 107, 0.3);
    }

    .counter-number {
      display: inline-block;
      min-width: 20px;
      text-align: center;
      animation: countUp 0.6s ease-out;
    }

    @keyframes countUp {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(counterStyle);



  setTimeout(() => {
    const cards = document.querySelectorAll('.card');
    document.getElementById('count').textContent = cards.length;
  }, 500);
}

// ============================================
// 🎪 ELEMENTOS FLOTANTES
// ============================================

function initFloatingElements() {
  const floatingStyle = document.createElement('style');
  floatingStyle.textContent = `
    .floating-element {
      position: fixed;
      font-size: 40px;
      animation: floatAround 15s infinite;
      pointer-events: none;
      z-index: 2;
      opacity: 0.3;
      filter: blur(1px);
    }

    @keyframes floatAround {
      0% {
        transform: translateX(0) translateY(0) rotate(0deg);
      }
      25% {
        transform: translateX(100px) translateY(-100px) rotate(90deg);
      }
      50% {
        transform: translateX(0) translateY(-200px) rotate(180deg);
      }
      75% {
        transform: translateX(-100px) translateY(-100px) rotate(270deg);
      }
      100% {
        transform: translateX(0) translateY(0) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(floatingStyle);

  const elements = ['🎬', '🎥', '⭐', '🎞️', '🎭'];
  elements.forEach((el, i) => {
    const floating = document.createElement('div');
    floating.className = 'floating-element';
    floating.textContent = el;
    floating.style.left = Math.random() * window.innerWidth + 'px';
    floating.style.top = Math.random() * window.innerHeight + 'px';
    floating.style.animationDelay = i * 2 + 's';
    document.body.appendChild(floating);
  });
}

// ============================================
// 🖱️ MOUSE TRACKER
// ============================================

function initMouseTracker() {
  const tracker = document.createElement('div');
  tracker.id = 'mouse-tracker';
  tracker.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 107, 107, 0.6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9997;
    display: none;
  `;
  document.body.appendChild(tracker);

  document.addEventListener('mousemove', (e) => {
    tracker.style.display = 'block';
    tracker.style.left = e.clientX - 10 + 'px';
    tracker.style.top = e.clientY - 10 + 'px';
  });

  document.addEventListener('mouseleave', () => {
    tracker.style.display = 'none';
  });
}

console.log('🎬 ✨ ANIMACIONES PREMIUM CARGADAS CORRECTAMENTE ✨ 🎬');