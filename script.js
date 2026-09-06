/**
 * Ninja Design Hub — High-Converting Interactive Portfolio Logic
 * Pure Vanilla JavaScript | Zero Bloat | Accessible | Ultra-Fast | INR Currency
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA DICTIONARY FOR CASE STUDIES & PREVIEWS
  // =========================================================================
  const caseStudiesData = {
    'omni-metrics': {
      title: 'OmniMetrics — Enterprise SaaS Analytics Suite',
      category: 'Web Application & SaaS',
      timeline: '3 Weeks Delivery',
      client: 'OmniMetrics AI',
      heroImage: 'assets/project-dashboard.png',
      overview: 'OmniMetrics is an AI-powered customer intelligence and revenue analytics platform handling over 10M events daily for B2B SaaS teams.',
      challenge: 'The client had a clunky, sluggish legacy dashboard with 4.5s load times and high user churn during trial onboarding. Data visualization was rigid and mobile experience was broken.',
      solution: 'We engineered a bespoke, ultra-fast dashboard with sub-second querying, responsive Chart.js real-time streaming components, dark-mode native interface, and frictionless onboarding workflows.',
      deliverables: ['Full React 19 / TypeScript SPA', 'Real-time Chart Visualizations', 'Custom Design Token System', 'Mobile-Responsive Viewports', 'API Query Optimization'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Chart.js', 'Vite'],
      results: [
        { metric: '0.38s', label: 'Dashboard Load Time', sublabel: 'Down from 4.5s (-91%)' },
        { metric: '+340%', label: 'Trial-to-Paid Conv', sublabel: '3.4x higher conversion' },
        { metric: '99.9%', label: 'Uptime Reliability', sublabel: 'Zero client-side crashes' }
      ]
    },
    'aura-commerce': {
      title: 'Aura — Modern Luxury E-Commerce Experience',
      category: 'Headless E-Commerce',
      timeline: '2 Weeks Delivery',
      client: 'Aura Lifestyle',
      heroImage: 'assets/project-commerce.png',
      overview: 'Aura is a high-end luxury lifestyle brand demanding an ultra-minimalist, editorial storefront with instantaneous product previews and zero checkout friction.',
      challenge: 'Standard Shopify themes were bloated with third-party app scripts, causing 60% mobile bounce rate and poor organic Google rankings.',
      solution: 'We architected a custom headless storefront with instant client-side search, smooth image transitions, and an optimized 1-click checkout flow.',
      deliverables: ['Custom Headless Storefront', 'Shopify Storefront API Integration', 'Mobile-First Checkout Funnel', 'High-Res Image Optimization', '100/100 Core Web Vitals'],
      techStack: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Razorpay & Stripe', 'Edge CDN'],
      results: [
        { metric: '+215%', label: 'Mobile Revenue Growth', sublabel: 'Within 60 days of launch' },
        { metric: '100/100', label: 'Google Performance Score', sublabel: 'Ranked #1 for core keywords' },
        { metric: '-42%', label: 'Cart Abandonment Rate', sublabel: 'Frictionless checkout' }
      ]
    },
    'secret-florist': {
      title: 'The secretflorist — Luxury Floral & Bouquet Studio',
      category: 'Bouquet & Floral Experience',
      timeline: '10 Days Delivery',
      client: 'The secretflorist',
      heroImage: 'assets/project-florist.jpg',
      overview: 'A bespoke luxury bouquet studio seeking an evocative, visual-first online presence with custom floral arrangement curation and same-day delivery scheduling.',
      challenge: 'The business needed an intuitive online booking experience that reflects their artisan aesthetic and streamlines customized bouquet orders.',
      solution: 'Created an elegant, visual-first digital storefront with smooth micro-interactions, an interactive stem customizer, and automated local dispatch logic.',
      deliverables: ['Custom Web Storefront', 'Interactive Bouquet Curation', 'Automated Dispatch System', 'Full Brand Guidelines'],
      results: [
        { metric: '+180%', label: 'Online Order Volume', sublabel: 'In first month of launch' },
        { metric: '4.9/5', label: 'Customer Review Rating', sublabel: 'Over 400 verified reviews' },
        { metric: '100%', label: 'Automated Invoicing', sublabel: 'Saved 15 hrs/wk admin time' }
      ]
    },
    'petal-stem': {
      title: 'The secretflorist — Luxury Floral & Bouquet Studio',
      category: 'Bouquet & Floral Experience',
      timeline: '10 Days Delivery',
      client: 'The secretflorist',
      heroImage: 'assets/project-florist.jpg',
      overview: 'A bespoke luxury bouquet studio seeking an evocative, visual-first online presence with custom floral arrangement curation and same-day delivery scheduling.',
      challenge: 'The business needed an intuitive online booking experience that reflects their artisan aesthetic and streamlines customized bouquet orders.',
      solution: 'Created an elegant, visual-first digital storefront with smooth micro-interactions, an interactive stem customizer, and automated local dispatch logic.',
      deliverables: ['Custom Web Storefront', 'Interactive Bouquet Curation', 'Automated Dispatch System', 'Full Brand Guidelines'],
      results: [
        { metric: '+180%', label: 'Online Order Volume', sublabel: 'In first month of launch' },
        { metric: '4.9/5', label: 'Customer Review Rating', sublabel: 'Over 400 verified reviews' },
        { metric: '100%', label: 'Automated Invoicing', sublabel: 'Saved 15 hrs/wk admin time' }
      ]
    },
    'aether-brand': {
      title: 'Aether AI — Full Visual Identity & Design System',
      category: 'Brand Identity System',
      timeline: '2 Weeks Delivery',
      client: 'Aether Technologies',
      heroImage: 'assets/project-brand.png',
      overview: 'A fast-growing generative AI startup needed a world-class brand system to stand out during their institutional fundraising round.',
      challenge: 'The founders had no cohesive visual identity, inconsistent typography, and amateur pitch decks that failed to command enterprise trust.',
      solution: 'We crafted a futuristic yet timeless brand identity: custom vector logo mark, dark-mode design token architecture, complete marketing collateral, and a high-converting pitch deck.',
      deliverables: ['Vector Logo Suite & Favicon System', 'Design Token Color & Typography Specs', '40+ Custom 3D Vector Icons', 'Pitch Deck Template (Keynote/Figma)', 'Social Media Design Kit'],
      techStack: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Design Tokens'],
      results: [
        { metric: '₹68 Cr+', label: 'Funding Capital Raised', sublabel: 'Oversubscribed institutional round' },
        { metric: '100%', label: 'Brand Asset Consistency', sublabel: 'Used across all products' },
        { metric: '50k+', label: 'Waitlist Signups', sublabel: 'During launch campaign' }
      ]
    },
    'zenith-app': {
      title: 'Zenith Neo-Bank — Mobile App UI/UX Design',
      category: 'Mobile UI/UX Design',
      timeline: '2.5 Weeks Delivery',
      client: 'Zenith Financial',
      heroImage: 'assets/project-mobile.png',
      overview: 'Next-generation mobile financial application combining biometric verification, multi-currency wallets, and automated micro-investing.',
      challenge: 'Complex banking flows caused steep onboarding drop-offs and low user engagement in wealth management tabs.',
      solution: 'Designed an intuitive, thumb-friendly mobile app architecture with micro-haptics, crystal-clear typography, and simplified 3-step KYC verification.',
      deliverables: ['65+ Figma Mobile Screens (iOS & Android)', 'Interactive Clickable Prototype', 'Design System & Component Library', 'Complete UX Journey Documentation'],
      techStack: ['Figma', 'Protopie', 'iOS Human Interface', 'Material 3'],
      results: [
        { metric: '88%', label: 'KYC Completion Rate', sublabel: 'Up from 41%' },
        { metric: '4.8 ★', label: 'App Store Rating', sublabel: 'Over 25,000 ratings' },
        { metric: '+160%', label: 'Weekly Active Users', sublabel: 'High retention loops' }
      ]
    }
  };

  const heroPreviewTabsData = {
    web: {
      badge: 'Live Web App',
      image: 'assets/project-dashboard.png',
      title: 'OmniMetrics — AI Analytics Suite',
      desc: 'Full-stack React & TypeScript dashboard with sub-second real-time queries.',
      chips: ['React', 'TypeScript', 'Tailwind', 'FastAPI']
    },
    brand: {
      badge: 'Brand Identity',
      image: 'assets/project-brand.png',
      title: 'Aether AI — Brand System',
      desc: 'Complete visual design language, design tokens, and investor pitch collateral.',
      chips: ['Figma', 'Vector Suite', 'Design Tokens', 'Pitch Deck']
    },
    video: {
      badge: 'Video & Motion',
      image: 'assets/NDH.jpeg',
      title: 'High-Retention Short-Form Launch',
      desc: 'Kinetic typography and sound-designed campaign generating 4.8M organic views.',
      chips: ['Premiere Pro', 'After Effects', 'Sound FX', '4.8M Views']
    },
    growth: {
      badge: 'Social Scale',
      image: 'assets/project-mobile.png',
      title: 'Creator Scale (12k → 145k)',
      desc: 'Data-backed content matrix and hook engineering scaling founder pipeline.',
      chips: ['+840% Growth', 'LinkedIn', 'X Platform', 'Viral Hooks']
    }
  };


  // =========================================================================
  // 2. FLOAT CARD INTERSECTION OBSERVER (Hero reveal animations)
  // =========================================================================
  const revealCards = document.querySelectorAll('.reveal');

  if (revealCards.length > 0 && 'IntersectionObserver' in window) {
    let visibleCount = 0;
    const floatCardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
          visibleCount++;
          // Disconnect once all cards have been revealed
          if (visibleCount >= revealCards.length) {
            observer.disconnect();
          }
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    });

    revealCards.forEach(card => floatCardObserver.observe(card));
  } else {
    // Fallback: make all visible immediately if no IntersectionObserver support
    revealCards.forEach(card => card.classList.add('is-visible'));
  }

  // =========================================================================
  // 3. HERO ORBITAL — Cursor-driven 3D parallax & glow tracking
  // =========================================================================
  const orbitalScene = document.querySelector('.hero-orbital-scene');
  const heroOrbital  = document.querySelector('.hero-orbital');

  if (orbitalScene && heroOrbital) {
    const orbGlow    = heroOrbital.querySelector('.orbital-glow');
    const orbitCards = [...heroOrbital.querySelectorAll('.orbit-card')];

    // Depth multiplier per card (foreground → deeper)
    const CARD_DEPTH = [0.55, 0.85, 0.65];

    let targetX = 0, targetY = 0; // normalized -1 … +1
    let curX    = 0, curY    = 0; // lerped current value
    let rafId   = null;

    /** Linear interpolation — smooth catch-up */
    const lerp = (a, b, t) => a + (b - a) * t;

    function tick() {
      // Smooth lerp toward target (0.065 ≈ ~60fps silky feel)
      curX = lerp(curX, targetX, 0.065);
      curY = lerp(curY, targetY, 0.065);

      // 3D tilt — whole orbital tilts in perspective (max ±12°)
      heroOrbital.style.transform =
        `perspective(900px) rotateX(${curY * -12}deg) rotateY(${curX * 12}deg)`;

      // Glow blob tracks cursor with larger amplitude (feels magnetically attached)
      if (orbGlow) {
        orbGlow.style.setProperty('--gx', `${curX * 55}px`);
        orbGlow.style.setProperty('--gy', `${curY * 55}px`);
      }

      // Cards parallax at depth-weighted speeds
      orbitCards.forEach((card, i) => {
        const d = CARD_DEPTH[i] ?? 0.6;
        card.style.setProperty('--px', `${curX * 22 * d}px`);
        card.style.setProperty('--py', `${curY * 22 * d}px`);
      });

      // Stop RAF when sufficiently at rest (prevents idle CPU burn after leave)
      const atRest = Math.abs(curX - targetX) < 0.001 && Math.abs(curY - targetY) < 0.001;
      if (atRest && targetX === 0 && targetY === 0) {
        cancelAnimationFrame(rafId);
        rafId = null;
        // Final cleanup — hand off rest state to CSS transition
        heroOrbital.style.transform = '';
        if (orbGlow) {
          orbGlow.style.setProperty('--gx', '0px');
          orbGlow.style.setProperty('--gy', '0px');
        }
        orbitCards.forEach(card => {
          card.style.setProperty('--px', '0px');
          card.style.setProperty('--py', '0px');
        });
      } else {
        rafId = requestAnimationFrame(tick);
      }
    }

    orbitalScene.addEventListener('mousemove', (e) => {
      const rect = orbitalScene.getBoundingClientRect();
      // Normalized -1…+1 relative to element center
      targetX = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
      targetY = ((e.clientY - rect.top)   / rect.height - 0.5) * 2;
      // Clamp to avoid extreme edge values
      targetX = Math.max(-1, Math.min(1, targetX));
      targetY = Math.max(-1, Math.min(1, targetY));

      if (!rafId) rafId = requestAnimationFrame(tick);
    }, { passive: true });

    orbitalScene.addEventListener('mouseleave', () => {
      // Let lerp glide back to rest
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(tick);
    });

    // Touch support — single touch parallax for mobile
    orbitalScene.addEventListener('touchmove', (e) => {
      if (!e.touches[0]) return;
      const rect = orbitalScene.getBoundingClientRect();
      targetX = ((e.touches[0].clientX - rect.left)  / rect.width  - 0.5) * 2;
      targetY = ((e.touches[0].clientY - rect.top)   / rect.height - 0.5) * 2;
      targetX = Math.max(-0.6, Math.min(0.6, targetX)); // softer on touch
      targetY = Math.max(-0.6, Math.min(0.6, targetY));
      if (!rafId) rafId = requestAnimationFrame(tick);
    }, { passive: true });

    orbitalScene.addEventListener('touchend', () => {
      targetX = 0;
      targetY = 0;
    });
  }

  // =========================================================================
  // 4. SCROLL PROGRESS & HEADER SCROLLED EFFECT

  // =========================================================================
  const scrollProgressBar = document.getElementById('scroll-progress');
  const siteHeader = document.getElementById('site-header');
  const currentYearSpan = document.getElementById('current-year');

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / (scrollHeight || 1)) * 100;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrollPercent}%`;
    }

    if (siteHeader) {
      if (scrollTop > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // =========================================================================
  // 3. MOBILE MENU DRAWER
  // =========================================================================
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawer?.classList.add('open');
    mobileBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer?.classList.remove('open');
    mobileBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuToggleBtn?.addEventListener('click', openMobileMenu);
  mobileCloseBtn?.addEventListener('click', closeMobileMenu);
  mobileBackdrop?.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // =========================================================================
  // 4. HERO PREVIEW TAB SWITCHER
  // =========================================================================
  const heroTabs = document.querySelectorAll('#hero-preview-tabs .preview-tab-btn');
  const heroContentArea = document.getElementById('hero-preview-content');

  heroTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      heroTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const tabKey = tab.getAttribute('data-tab');
      const data = heroPreviewTabsData[tabKey];

      if (data && heroContentArea) {
        heroContentArea.innerHTML = `
          <div class="preview-card-showcase">
            <div class="preview-image-wrap">
              <img src="${data.image}" alt="${data.title}" />
              <div class="preview-badge-overlay">${data.badge}</div>
            </div>
            <div class="preview-info">
              <div class="preview-title">${data.title}</div>
              <div class="preview-desc">${data.desc}</div>
              <div class="preview-tech-chips">
                ${data.chips.map(chip => `<span class="tech-chip">${chip}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      }
    });
  });

  // =========================================================================
  // 5. PORTFOLIO FILTERING & CAROUSEL TRAILING + MORPH TRANSITION
  // =========================================================================
  const portfolioTabsWrap   = document.getElementById('portfolio-filter-wrapper');
  const portfolioTabs       = document.getElementById('portfolio-tabs');
  const scrollLeftBtn       = document.getElementById('filter-scroll-left');
  const scrollRightBtn      = document.getElementById('filter-scroll-right');
  const portfolioFilterBtns = document.querySelectorAll('#portfolio-tabs .filter-btn');
  const portfolioCards      = document.querySelectorAll('#portfolio-grid .portfolio-card');

  function updateCategoryMorphFlow() {
    if (!portfolioTabs) return;

    // Update trailing masks & arrow disabled states
    const maxScroll = portfolioTabs.scrollWidth - portfolioTabs.clientWidth;
    const currentScroll = portfolioTabs.scrollLeft;

    if (portfolioTabsWrap) {
      if (maxScroll <= 4) {
        portfolioTabsWrap.classList.remove('can-scroll-left', 'can-scroll-right');
      } else {
        portfolioTabsWrap.classList.toggle('can-scroll-left', currentScroll > 6);
        portfolioTabsWrap.classList.toggle('can-scroll-right', currentScroll < maxScroll - 6);
      }
    }

    if (scrollLeftBtn && scrollRightBtn) {
      scrollLeftBtn.disabled = currentScroll <= 2;
      scrollRightBtn.disabled = currentScroll >= maxScroll - 2;
    }

    // Dynamic morph transition (scale & opacity transition based on viewport intersection)
    const containerRect = portfolioTabs.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerRight = containerRect.right;

    portfolioFilterBtns.forEach(pill => {
      const rect = pill.getBoundingClientRect();
      const pillWidth = rect.width;
      let ratio = 1;

      if (rect.right <= containerLeft) {
        ratio = 0;
      } else if (rect.left >= containerRight) {
        ratio = 0;
      } else if (rect.left < containerLeft) {
        const visibleWidth = rect.right - containerLeft;
        ratio = Math.max(0, Math.min(1, visibleWidth / pillWidth));
      } else if (rect.right > containerRight) {
        const visibleWidth = containerRight - rect.left;
        ratio = Math.max(0, Math.min(1, visibleWidth / pillWidth));
      }

      const opacity = 0.35 + 0.65 * ratio;
      const scale = 0.86 + 0.14 * ratio;

      pill.style.opacity = opacity;
      pill.style.transform = `scale(${scale})`;
    });
  }

  if (portfolioTabs) {
    portfolioTabs.addEventListener('scroll', updateCategoryMorphFlow, { passive: true });
    window.addEventListener('resize', updateCategoryMorphFlow, { passive: true });
    setTimeout(updateCategoryMorphFlow, 150);
    setTimeout(updateCategoryMorphFlow, 600);

    // Arrow Buttons Scrolling
    if (scrollLeftBtn) {
      scrollLeftBtn.addEventListener('click', () => {
        const scrollAmount = Math.max(180, portfolioTabs.clientWidth * 0.5);
        portfolioTabs.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(updateCategoryMorphFlow, 350);
      });
    }

    if (scrollRightBtn) {
      scrollRightBtn.addEventListener('click', () => {
        const scrollAmount = Math.max(180, portfolioTabs.clientWidth * 0.5);
        portfolioTabs.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(updateCategoryMorphFlow, 350);
      });
    }

    // Mouse drag-to-scroll support for desktop / PC view
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    portfolioTabs.addEventListener('mousedown', (e) => {
      isDown = true;
      hasMoved = false;
      portfolioTabs.classList.add('is-dragging');
      startX = e.pageX - portfolioTabs.offsetLeft;
      scrollLeft = portfolioTabs.scrollLeft;
    });

    portfolioTabs.addEventListener('mouseleave', () => {
      if (!isDown) return;
      isDown = false;
      portfolioTabs.classList.remove('is-dragging');
    });

    portfolioTabs.addEventListener('mouseup', () => {
      isDown = false;
      portfolioTabs.classList.remove('is-dragging');
    });

    portfolioTabs.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - portfolioTabs.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 4) {
        hasMoved = true;
      }
      portfolioTabs.scrollLeft = scrollLeft - walk;
      updateCategoryMorphFlow();
    });

    // Horizontal wheel scroll support
    portfolioTabs.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        portfolioTabs.scrollLeft += e.deltaY;
        updateCategoryMorphFlow();
      }
    }, { passive: true });
  }

  portfolioFilterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      portfolioFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Smoothly center the clicked tab in the carousel track
      if (portfolioTabs) {
        const btnLeft = btn.offsetLeft;
        const btnWidth = btn.offsetWidth;
        const trackWidth = portfolioTabs.clientWidth;
        const targetScroll = btnLeft - (trackWidth / 2) + (btnWidth / 2);
        portfolioTabs.scrollTo({ left: targetScroll, behavior: 'smooth' });
        setTimeout(updateCategoryMorphFlow, 350);
      }

      const filter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 6. MODAL UTILITIES (CASE STUDY, VIDEO LIGHTBOX)
  // =========================================================================
  const caseStudyModal = document.getElementById('case-study-modal');
  const videoLightboxModal = document.getElementById('video-lightbox-modal');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (modalEl === videoLightboxModal) {
      const iframe = document.getElementById('video-iframe');
      if (iframe) iframe.src = '';
    }
  }

  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-backdrop');
      closeModal(modal);
    });
  });

  [caseStudyModal, videoLightboxModal].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(caseStudyModal);
      closeModal(videoLightboxModal);
      closeMobileMenu();
    }
  });

  // =========================================================================
  // 7. CASE STUDY MODAL INJECTION
  // =========================================================================
  const caseStudyButtons = document.querySelectorAll('.open-case-study');
  const modalCaseBody = document.getElementById('modal-case-body');
  const modalCaseCategory = document.getElementById('modal-case-category');
  const modalCaseTimeline = document.getElementById('modal-case-timeline');

  caseStudyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case');
      const cs = caseStudiesData[caseId];
      if (!cs || !modalCaseBody) return;

      if (modalCaseCategory) modalCaseCategory.textContent = cs.category;
      if (modalCaseTimeline) modalCaseTimeline.textContent = cs.timeline;

      modalCaseBody.innerHTML = `
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 0.75rem; line-height: 1.2;">
          ${cs.title}
        </h2>
        <p style="font-size: 0.95rem; color: var(--accent-secondary); margin-bottom: 1.5rem; font-weight: 600;">
          Client: ${cs.client}
        </p>

        <div style="border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 2rem; border: 1px solid var(--border-subtle);">
          <img src="${cs.heroImage}" alt="${cs.title}" style="width: 100%; height: 320px; object-fit: cover;" />
        </div>

        <!-- 3 Key Metric Results -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
          ${cs.results.map(r => `
            <div style="background: #15151e; border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
              <div class="mono" style="font-size: 1.8rem; font-weight: 800; color: #ff4b1f; line-height: 1; margin-bottom: 0.35rem;">${r.metric}</div>
              <div style="font-size: 0.875rem; font-weight: 700; color: #fff;">${r.label}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${r.sublabel}</div>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.75rem; margin-bottom: 2.5rem;">
          <div>
            <h4 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem;">The Challenge</h4>
            <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem;">${cs.challenge}</p>
          </div>

          <div>
            <h4 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem;">The Engineering &amp; Design Solution</h4>
            <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem;">${cs.solution}</p>
          </div>

          <div>
            <h4 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem;">Key Deliverables</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              ${cs.deliverables.map(d => `<span class="step-deliverable-chip">${d}</span>`).join('')}
            </div>
          </div>

          ${cs.techStack && cs.techStack.length ? `
          <div>
            <h4 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem;">Technology Stack</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
              ${cs.techStack.map(t => `<span class="service-tool-badge">${t}</span>`).join('')}
            </div>
          </div>` : ''}
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
          <a href="#contact" class="btn btn-primary close-modal-btn" style="flex: 1;">
            <span>Contact About Similar Project</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      `;

      openModal(caseStudyModal);
    });
  });

  // =========================================================================
  // 8. VIDEO LIGHTBOX MODAL
  // =========================================================================
  const openVideoBtns = document.querySelectorAll('.open-video-modal');
  const lightboxVideoTitle = document.getElementById('lightbox-video-title');
  const lightboxVideoMeta = document.getElementById('lightbox-video-meta');
  const videoIframe = document.getElementById('video-iframe');

  openVideoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const videoTitle = btn.getAttribute('data-video-title') || 'Featured Video Project';
      const videoUrl = btn.getAttribute('data-video-url') || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
      const views = btn.getAttribute('data-views') || '1.5M Views';
      const duration = btn.getAttribute('data-duration') || '0:45';

      if (lightboxVideoTitle) lightboxVideoTitle.textContent = videoTitle;
      if (lightboxVideoMeta) lightboxVideoMeta.textContent = `${duration} • ${views} • High-Retention Production`;
      if (videoIframe) videoIframe.src = videoUrl;

      openModal(videoLightboxModal);
    });
  });

  // =========================================================================
  // 9. SEARCHABLE & CATEGORIZED FAQ ACCORDION
  // =========================================================================
  const faqSearchInput = document.getElementById('faq-search-input');
  const faqCatBtns = document.querySelectorAll('#faq-categories .faq-cat-btn');
  const faqItems = document.querySelectorAll('#faq-accordion .faq-item');

  function filterFaqs() {
    const query = faqSearchInput?.value.toLowerCase().trim() || '';
    const activeCategory = document.querySelector('#faq-categories .faq-cat-btn.active')?.getAttribute('data-cat') || 'all';

    faqItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category') || '';
      const itemKeywords = item.getAttribute('data-keywords') || '';
      const questionText = item.querySelector('.faq-question-btn span')?.textContent.toLowerCase() || '';
      const answerText = item.querySelector('.faq-answer')?.textContent.toLowerCase() || '';

      const matchesSearch = !query || questionText.includes(query) || answerText.includes(query) || itemKeywords.includes(query);
      const matchesCategory = activeCategory === 'all' || itemCategory === activeCategory;

      if (matchesSearch && matchesCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  faqSearchInput?.addEventListener('input', filterFaqs);

  faqCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      faqCatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterFaqs();
    });
  });

  // Accordion Toggle
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // =========================================================================
  // 10. INQUIRY FORM SYNCHRONIZATION & SELECT / PILL SELECTORS
  // =========================================================================
  const serviceSelect = document.getElementById('contact-service');
  const budgetSelect = document.getElementById('contact-budget');

  const servicePillBtns = document.querySelectorAll('#service-pills .form-pill-btn');
  const selectedServiceInput = document.getElementById('selected-service-input');

  const budgetPillBtns = document.querySelectorAll('#budget-pills .form-pill-btn');
  const selectedBudgetInput = document.getElementById('selected-budget-input');

  const timelinePillBtns = document.querySelectorAll('#timeline-pills .form-pill-btn');
  const selectedTimelineInput = document.getElementById('selected-timeline-input');

  function setupPills(buttons, inputHidden) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (inputHidden) {
          inputHidden.value = btn.getAttribute('data-value');
        }
      });
    });
  }

  setupPills(servicePillBtns, selectedServiceInput);
  setupPills(budgetPillBtns, selectedBudgetInput);
  setupPills(timelinePillBtns, selectedTimelineInput);

  // Sync "Inquire About This Service" buttons
  const serviceInquiryBtns = document.querySelectorAll('.select-service-inquiry');
  serviceInquiryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceVal = btn.getAttribute('data-service');
      if (serviceVal) {
        if (serviceSelect) {
          serviceSelect.value = serviceVal;
        }
        servicePillBtns.forEach(p => {
          if (p.getAttribute('data-value') === serviceVal) {
            p.click();
          }
        });
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          document.getElementById('contact-name')?.focus();
        }, 600);
      }
    });
  });

  // Contact Form Submission
  const smartContactForm = document.getElementById('smart-contact-form');
  const formSubmitBtn = document.getElementById('form-submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');
  const formSuccessMessage = document.getElementById('form-success-message');
  const resetFormBtn = document.getElementById('reset-form-btn');

  smartContactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formSubmitBtn && submitBtnText) {
      formSubmitBtn.disabled = true;
      submitBtnText.textContent = 'Transmitting Project Brief...';
    }

    setTimeout(() => {
      if (smartContactForm) smartContactForm.style.display = 'none';
      if (formSuccessMessage) formSuccessMessage.style.display = 'block';
      showToast('Project Brief received! We will reply within 4 hours.');

      if (formSubmitBtn && submitBtnText) {
        formSubmitBtn.disabled = false;
        submitBtnText.textContent = 'Submit Inquiry (Guaranteed 4h Reply)';
      }
    }, 900);
  });

  resetFormBtn?.addEventListener('click', () => {
    if (smartContactForm) {
      smartContactForm.reset();
      smartContactForm.style.display = 'block';
    }
    if (formSuccessMessage) formSuccessMessage.style.display = 'none';
  });

  // =========================================================================
  // 11. BACK TO TOP SMOOTH SCROLL
  // =========================================================================
  const backToTopBtn = document.getElementById('back-to-top-btn');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // =========================================================================
  // 12. BRAND PRELOADER DISMISSAL
  // =========================================================================
  const loader = document.getElementById('loader');
  if (loader) {
    const hideLoader = () => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    };

    if (document.readyState === 'complete') {
      setTimeout(hideLoader, 500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(hideLoader, 500);
      });
      // Safety fallback
      setTimeout(hideLoader, 2000);
    }
  }

});
