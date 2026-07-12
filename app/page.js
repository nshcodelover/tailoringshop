import ShaderBackground from '@/components/ShaderBackground';
import ClientEffects from '@/components/ClientEffects';

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <ClientEffects />

      {/* Page Loader */}
      <div id="pageLoader" className="page-loader" role="status" aria-label="در حال بارگذاری">
        <div className="loader-logo">شری</div>
        <div className="loader-sub">آتلیه</div>
        <div className="loader-bar"><div className="loader-bar-fill"></div></div>
        <div className="loader-needle" aria-hidden="true">
          <svg viewBox="0 0 24 80" fill="none">
            <ellipse cx="12" cy="12" rx="4" ry="5" stroke="currentColor" strokeWidth="1.5"/>
            <ellipse cx="12" cy="12" rx="1.5" ry="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M12 17 L12 72 L10 80 L12 75 L14 80 L12 72" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Scroll Progress */}
      <div id="progressBar" className="progress-bar" aria-hidden="true"></div>

      {/* Navbar */}
      <nav className="navbar" id="navbar" role="navigation" aria-label="منوی اصلی">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-script">شری</span>
            <span className="logo-tagline">آتلیه</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">خانه</a></li>
            <li><a href="#about">درباره ما</a></li>
            <li><a href="#collections">کلکسیون‌ها</a></li>
            <li><a href="#booking">رزرو</a></li>
            <li><a href="#contact">تماس</a></li>
          </ul>
          <a href="#booking" className="nav-cta">رزرو وقت</a>
          <button className="nav-toggle" id="navToggle" aria-label="باز کردن منو" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero" aria-label="بخش اصلی">
        <div id="heroMouseGlow" className="hero-mouse-glow" aria-hidden="true"></div>
        <div className="hero-orbs" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        {/* Floating Tools */}
        <div className="floating-tools" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `
          <svg class="tool tool-scissors" viewBox="0 0 48 48" fill="none">
            <circle cx="10" cy="14" r="6" stroke="currentColor" stroke-width="2"/>
            <circle cx="10" cy="34" r="6" stroke="currentColor" stroke-width="2"/>
            <path d="M14.5 12 L42 38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M14.5 36 L42 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="26" cy="24" r="2.5" fill="currentColor" opacity="0.6"/>
          </svg>
          <svg class="tool tool-needle" viewBox="0 0 24 80" fill="none">
            <ellipse cx="12" cy="12" rx="4" ry="5" stroke="currentColor" stroke-width="2"/>
            <ellipse cx="12" cy="12" rx="1.5" ry="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 17 L12 72 L10 80 L12 75 L14 80 L12 72" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          <svg class="tool tool-spool" viewBox="0 0 56 56" fill="none">
            <ellipse cx="28" cy="10" rx="22" ry="8" stroke="currentColor" stroke-width="2"/>
            <ellipse cx="28" cy="46" rx="22" ry="8" stroke="currentColor" stroke-width="2"/>
            <line x1="6" y1="10" x2="6" y2="46" stroke="currentColor" stroke-width="2"/>
            <line x1="50" y1="10" x2="50" y2="46" stroke="currentColor" stroke-width="2"/>
          </svg>
          <svg class="tool tool-tape" viewBox="0 0 140 28" fill="none">
            <rect x="2" y="6" width="136" height="16" rx="8" stroke="currentColor" stroke-width="2"/>
            <line x1="20" y1="6" x2="20" y2="14" stroke="currentColor" stroke-width="1.5"/>
            <line x1="34" y1="6" x2="34" y2="14" stroke="currentColor" stroke-width="1.5"/>
            <line x1="48" y1="6" x2="48" y2="14" stroke="currentColor" stroke-width="1.5"/>
            <line x1="62" y1="6" x2="62" y2="14" stroke="currentColor" stroke-width="1.5"/>
            <line x1="76" y1="6" x2="76" y2="14" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <svg class="tool tool-pin" viewBox="0 0 20 72" fill="none">
            <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.7"/>
            <line x1="10" y1="18" x2="10" y2="64" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M8 64 L10 72 L12 64" fill="currentColor"/>
          </svg>
          <svg class="tool tool-thimble" viewBox="0 0 40 52" fill="none">
            <path d="M4 36 C4 20 8 8 20 4 C32 8 36 20 36 36" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"/>
            <path d="M4 36 Q4 48 20 48 Q36 48 36 36" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"/>
            <circle cx="14" cy="18" r="2" fill="currentColor" opacity="0.5"/>
            <circle cx="22" cy="14" r="2" fill="currentColor" opacity="0.5"/>
            <circle cx="26" cy="22" r="2" fill="currentColor" opacity="0.5"/>
          </svg>
        ` }} />

        {/* Sparkles */}
        <div className="sparkles" aria-hidden="true">
          <span className="sparkle s1">✦</span>
          <span className="sparkle s2">✦</span>
          <span className="sparkle s3">✧</span>
          <span className="sparkle s4">✦</span>
          <span className="sparkle s5">✧</span>
          <span className="sparkle s6">✦</span>
        </div>

        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-eyebrow">✦ دوخته شده با عشق و ظرافت</span>
            <h1 className="hero-title">
              <span className="line-wrap"><span className="line-inner">هنری که</span></span>
              <span className="line-wrap"><em className="line-inner">در هر دوخت جاری است</em></span>
            </h1>
            <p className="hero-desc">
              هر دوختی داستانی دارد. شری لباس‌های سفارشی می‌دوزد که زیبایی منحصربه‌فرد شما را به نمایش می‌گذارد؛
              ترکیبی از هنر سنتی و طراحی معاصر.
            </p>
            <div className="hero-actions">
              <a href="#collections" className="btn-primary">مشاهده کلکسیون‌ها</a>
              <a href="#about" className="btn-ghost">آشنایی با هنرمند</a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-scene">
              <div className="portrait-orbit orbit-1"></div>
              <div className="portrait-orbit orbit-2"></div>
              <div className="portrait-sparks" aria-hidden="true">
                <span className="pspark ps1">✦</span>
                <span className="pspark ps2">✧</span>
                <span className="pspark ps3">✦</span>
                <span className="pspark ps4">✧</span>
                <span className="pspark ps5">✦</span>
              </div>
              <div className="portrait-glow"></div>
              <div className="portrait-circle">
                <img src="/photo.jpg" alt="شری — طراح و خیاط آتلیه شری" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}/>
              </div>
              <div className="portrait-badge badge-years">✦ تأسیس ۱۳۹۴</div>
              <div className="portrait-badge badge-designs">بیش از ۲۰۰ طرح</div>
            </div>
          </div>
        </div>

        <div className="hero-stats" role="list" aria-label="آمار آتلیه">
          <div className="stat-item" role="listitem">
            <span className="stat-number" data-target="200" data-suffix="+">۲۰۰+</span>
            <span className="stat-label">طرح منحصربه‌فرد</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-item" role="listitem">
            <span className="stat-number" data-target="500" data-suffix="+">۵۰۰+</span>
            <span className="stat-label">مشتری راضی</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-item" role="listitem">
            <span className="stat-number" data-target="10" data-suffix="+">۱۰+</span>
            <span className="stat-label">سال تجربه</span>
          </div>
          <div className="stat-divider" aria-hidden="true"></div>
          <div className="stat-item" role="listitem">
            <span className="stat-number" data-target="6" data-suffix="">۶</span>
            <span className="stat-label">کلکسیون</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about" aria-label="درباره هنرمند">
        <div className="about-bg-tools" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `
          <svg class="bg-tool bt-1" viewBox="0 0 48 48" fill="none">
            <circle cx="10" cy="14" r="6" stroke="currentColor" stroke-width="2"/>
            <circle cx="10" cy="34" r="6" stroke="currentColor" stroke-width="2"/>
            <path d="M14.5 12 L42 38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M14.5 36 L42 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <svg class="bg-tool bt-2" viewBox="0 0 48 48" fill="none">
            <circle cx="10" cy="14" r="6" stroke="currentColor" stroke-width="2"/>
            <circle cx="10" cy="34" r="6" stroke="currentColor" stroke-width="2"/>
            <path d="M14.5 12 L42 38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M14.5 36 L42 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        ` }} />
        <div className="container">
          <div className="about-grid">
            <div className="about-quote-col">
              <div className="about-ornament">✦</div>
              <blockquote className="about-quote">«مد معماری است: همه چیز به تناسب بستگی دارد.»</blockquote>
              <cite className="about-cite">— کوکو شانل</cite>
              <div className="about-signature">شری</div>
            </div>
            <div className="about-content-col">
              <span className="section-eyebrow">درباره هنرمند</span>
              <h2 className="section-title">اشتیاقی که در<br/><em>هر دوخت جاری است</em></h2>
              <p className="about-text">با بیش از یک دهه تجربه در دوخت کوتور و خیاطی سفارشی، شری سبکی متمایز ایجاد کرده که صنعتگری کلاسیک را با حساسیت مدرن درهم می‌آمیزد.</p>
              <p className="about-text">شری معتقد است که لباس واقعاً زیبا تنها به ظاهر مربوط نمی‌شود — بلکه به احساسی است که در شما ایجاد می‌کند. هر قطعه کاملاً با دست بریده، دوخته و تکمیل می‌شود.</p>
              <div className="about-skills">
                <span className="skill-pill">کوتور سفارشی</span>
                <span className="skill-pill">خیاطی اختصاصی</span>
                <span className="skill-pill">گلدوزی</span>
                <span className="skill-pill">لباس عروس</span>
                <span className="skill-pill">پوشاک سنتی</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="collections" aria-label="کلکسیون‌ها">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">کلکسیون‌ها</span>
            <h2 className="section-title">هر قطعه، با<br/><em>عشق و دقت</em></h2>
            <p className="section-desc">هر لباس با سفارش دوخته می‌شود. بر اساس دسته‌بندی مرور کنید یا همه را ببینید.</p>
          </div>
          <div className="category-tabs" role="tablist" aria-label="دسته‌بندی لباس‌ها">
            <button className="cat-tab active" data-filter="all" role="tab" aria-selected="true">همه</button>
            <button className="cat-tab" data-filter="evening" role="tab" aria-selected="false">پوشاک شب</button>
            <button className="cat-tab" data-filter="bridal" role="tab" aria-selected="false">عروسانه</button>
            <button className="cat-tab" data-filter="casual" role="tab" aria-selected="false">روزانه</button>
            <button className="cat-tab" data-filter="traditional" role="tab" aria-selected="false">سنتی</button>
            <button className="cat-tab" data-filter="accessories" role="tab" aria-selected="false">اکسسوری</button>
          </div>
          <div className="cards-grid" id="cardsGrid" role="list">

            <article className="cloth-card" data-cat="evening" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#FF6B9D','--c2':'#9B59B6'}}>
                  <svg className="card-icon" viewBox="0 0 60 80" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M10 10 L20 0 L30 6 L40 0 L50 10 L44 30 L46 80 L14 80 L16 30 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.2" stroke-linejoin="round"/><line x1="22" y1="0" x2="22" y2="10" stroke="currentColor" stroke-width="1.5"/><line x1="38" y1="0" x2="38" y2="10" stroke="currentColor" stroke-width="1.5"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">پوشاک شب</span>
                  <h3 className="card-name">لباس شکوفه نیمه‌شب</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

            <article className="cloth-card" data-cat="bridal" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#FFB3C9','--c2':'#C47AFF'}}>
                  <svg className="card-icon" viewBox="0 0 60 80" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M30 0 L34 12 L46 12 L36 20 L40 32 L30 24 L20 32 L24 20 L14 12 L26 12 Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.25"/><path d="M15 40 L8 80 L30 70 L52 80 L45 40 Q30 55 15 40Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.15" stroke-linejoin="round"/><ellipse cx="30" cy="34" rx="10" ry="7" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">عروسانه</span>
                  <h3 className="card-name">لباس آبشار مروارید</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

            <article className="cloth-card" data-cat="casual" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#FF9EC5','--c2':'#A855F7'}}>
                  <svg className="card-icon" viewBox="0 0 60 70" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M10 12 L0 28 L14 32 L12 70 L48 70 L46 32 L60 28 L50 12 L36 18 L30 14 L24 18 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.18" stroke-linejoin="round"/><path d="M24 18 Q30 24 36 18" stroke="currentColor" stroke-width="1.5" fill="none"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">روزانه</span>
                  <h3 className="card-name">بلوز ابریشمی بعدازظهر</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

            <article className="cloth-card" data-cat="traditional" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#E84F82','--c2':'#7E22CE'}}>
                  <svg className="card-icon" viewBox="0 0 60 80" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M10 0 L50 0 L50 80 L10 80 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.12"/><path d="M10 0 L30 20 L50 0" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.2"/><line x1="18" y1="32" x2="42" y2="32" stroke="currentColor" stroke-width="1.5" opacity="0.6"/><line x1="18" y1="40" x2="42" y2="40" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">سنتی</span>
                  <h3 className="card-name">ردای میراث گلدوزی</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

            <article className="cloth-card" data-cat="evening" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#C73468','--c2':'#6B21A8'}}>
                  <svg className="card-icon" viewBox="0 0 60 80" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M30 0 C44 0 52 8 52 20 C52 36 44 44 30 80 C16 44 8 36 8 20 C8 8 16 0 30 0Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.18"/><path d="M18 18 C18 12 22 8 30 8 C38 8 42 12 42 18" stroke="currentColor" stroke-width="1.5" fill="none"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">پوشاک شب</span>
                  <h3 className="card-name">پیراهن رویای مخمل</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

            <article className="cloth-card" data-cat="bridal" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#FF8FAD','--c2':'#D8B4FE'}}>
                  <svg className="card-icon" viewBox="0 0 70 80" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M35 0 L42 15 L58 15 L45 25 L50 40 L35 30 L20 40 L25 25 L12 15 L28 15 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.2"/><path d="M20 50 L15 80 L35 72 L55 80 L50 50 Q35 60 20 50Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.15"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">عروسانه</span>
                  <h3 className="card-name">ست توری باغ گل رز</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

            <article className="cloth-card" data-cat="casual" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#FF6B9D','--c2':'#A855F7'}}>
                  <svg className="card-icon" viewBox="0 0 60 70" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<rect x="8" y="18" width="44" height="52" rx="4" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.12"/><path d="M8 18 L8 10 L24 10 L30 18 L36 10 L52 10 L52 18" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><line x1="16" y1="36" x2="44" y2="36" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">روزانه</span>
                  <h3 className="card-name">ست پارتی باغ</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

            <article className="cloth-card" data-cat="traditional" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#FF4081','--c2':'#9333EA'}}>
                  <svg className="card-icon" viewBox="0 0 60 80" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M8 8 L52 8 L52 72 L30 80 L8 72 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1" stroke-linejoin="round"/><path d="M8 8 Q30 20 52 8" stroke="currentColor" stroke-width="2" fill="none"/><path d="M20 30 L40 30 M20 38 L40 38" stroke="currentColor" stroke-width="1.5" opacity="0.7" stroke-linecap="round"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">سنتی</span>
                  <h3 className="card-name">آنسامبل نخ طلایی</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

            <article className="cloth-card" data-cat="accessories" role="listitem">
              <div className="card-frame">
                <div className="card-img" style={{'--c1':'#FFB3C9','--c2':'#7E22CE'}}>
                  <svg className="card-icon" viewBox="0 0 70 60" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M10 20 Q10 6 20 6 Q26 6 28 12 Q30 18 35 18 Q40 18 42 12 Q44 6 50 6 Q60 6 60 20 Q60 42 35 54 Q10 42 10 20Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.15"/><circle cx="35" cy="24" r="6" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.2"/>` }} />
                </div>
                <div className="card-body">
                  <span className="card-cat-label">اکسسوری</span>
                  <h3 className="card-name">کیف مجلسی مروارید</h3>
                  <span className="card-cta">مشاهده ←</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" aria-label="نظرات مشتریان">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">نظرات مشتریان</span>
            <h2 className="section-title">آنچه<br/><em>مشتریان می‌گویند</em></h2>
          </div>
          <div className="testimonials-grid">

            <div className="testimonial-card">
              <div className="testi-quote-icon" aria-hidden="true">❝</div>
              <p className="testi-text">لباس عروسم رویاییم بود. دقت شری در هر جزئیاتی باورنکردنی بود. از اول تا آخر احساس کردم یک هنرمند واقعی کنارم است.</p>
              <div className="testi-bottom">
                <div className="testi-stars" aria-label="پنج ستاره">★★★★★</div>
                <div className="testi-author">
                  <span className="testi-name">سارا م.</span>
                  <span className="testi-role">عروس</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card testi-featured">
              <div className="testi-quote-icon" aria-hidden="true">❝</div>
              <p className="testi-text">در طول سال‌ها مشتری ثابت بودم. کیفیت و ظرافت کار شری بی‌نظیر است. هر لباس که دوخته دقیقاً همان چیزی بوده که تصور می‌کردم.</p>
              <div className="testi-bottom">
                <div className="testi-stars" aria-label="پنج ستاره">★★★★★</div>
                <div className="testi-author">
                  <span className="testi-name">مریم ح.</span>
                  <span className="testi-role">مشتری ثابت</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testi-quote-icon" aria-hidden="true">❝</div>
              <p className="testi-text">لباس مجلسیم به قدری زیبا بود که همه از طراحش پرسیدند. شری واقعاً می‌داند چطور شخصیت هر نفر را در لباسش بریزد.</p>
              <div className="testi-bottom">
                <div className="testi-stars" aria-label="پنج ستاره">★★★★★</div>
                <div className="testi-author">
                  <span className="testi-name">نیلوفر ک.</span>
                  <span className="testi-role">مهمانی مجلسی</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process" aria-label="مراحل دوخت لباس">
        <div className="container">
          <div className="process-header">
            <span className="section-eyebrow">مراحل کار</span>
            <h2 className="section-title">هر لباس چگونه<br/><em>به وجود می‌آید</em></h2>
          </div>
          <div className="process-steps">

            <div className="process-step" data-step="01">
              <div className="step-icon">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2"/><path d="M14 24 L22 32 L34 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` }} />
              </div>
              <span className="step-num">۰۱</span>
              <h3 className="step-title">مشاوره</h3>
              <p className="step-desc">با یک جلسه شخصی آغاز می‌کنیم تا چشم‌انداز، اندازه‌ها و سلیقه شما را بشناسیم.</p>
            </div>

            <div className="process-step" data-step="02">
              <div className="step-icon">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M8 40 L8 24 L24 8 L40 24 L40 40 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><path d="M8 26 L40 26" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>` }} />
              </div>
              <span className="step-num">۰۲</span>
              <h3 className="step-title">طراحی و الگو</h3>
              <p className="step-desc">الگوهای منحصربه‌فرد به صورت دستی ترسیم می‌شوند، دقیقاً متناسب با اندام شما.</p>
            </div>

            <div className="process-step" data-step="03">
              <div className="step-icon">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<ellipse cx="24" cy="10" rx="14" ry="6" stroke="currentColor" stroke-width="2"/><ellipse cx="24" cy="38" rx="14" ry="6" stroke="currentColor" stroke-width="2"/><line x1="10" y1="10" x2="10" y2="38" stroke="currentColor" stroke-width="2"/><line x1="38" y1="10" x2="38" y2="38" stroke="currentColor" stroke-width="2"/>` }} />
              </div>
              <span className="step-num">۰۳</span>
              <h3 className="step-title">برش و دوخت</h3>
              <p className="step-desc">پارچه‌های مرغوب با دقت بریده و دوخته می‌شوند. هر درز، نشانه‌ای از کیفیت است.</p>
            </div>

            <div className="process-step" data-step="04">
              <div className="step-icon">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="M24 4 L29 16 L42 16 L32 24 L36 36 L24 28 L12 36 L16 24 L6 16 L19 16 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>` }} />
              </div>
              <span className="step-num">۰۴</span>
              <h3 className="step-title">اندازه‌گیری نهایی</h3>
              <p className="step-desc">اندازه‌گیری نهایی از کمال اطمینان می‌دهد، پیش از تحویل لباس منحصربه‌فرد شما.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="booking" aria-label="رزرو وقت">
        <div className="booking-bg-orb" aria-hidden="true"></div>
        <div className="container">
          <div className="booking-grid">
            <div className="booking-info">
              <span className="section-eyebrow">رزرو وقت</span>
              <h2 className="section-title">آماده‌اید تا<br/><em>لباس رویاهایتان</em><br/>را بسازیم؟</h2>
              <p className="about-text">همین امروز با ما تماس بگیرید. مشاوره اولیه کاملاً رایگان است.</p>
              <ul className="booking-features">
                <li><span className="feat-icon" aria-hidden="true">✦</span>مشاوره اولیه رایگان</li>
                <li><span className="feat-icon" aria-hidden="true">✦</span>تحویل در موعد مقرر</li>
                <li><span className="feat-icon" aria-hidden="true">✦</span>ضمانت کیفیت دوخت</li>
                <li><span className="feat-icon" aria-hidden="true">✦</span>ویزیت در آتلیه یا منزل</li>
              </ul>
            </div>
            <form className="booking-form" id="bookingForm" noValidate aria-label="فرم رزرو وقت">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="inputName">نام شما</label>
                  <input type="text" id="inputName" placeholder="مریم احمدی" autoComplete="name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">شماره تماس</label>
                  <input type="tel" id="inputPhone" placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰" autoComplete="tel"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputType">نوع لباس</label>
                <select id="inputType" defaultValue="">
                  <option value="" disabled>انتخاب کنید...</option>
                  <option value="evening">پوشاک شب</option>
                  <option value="bridal">عروسانه</option>
                  <option value="casual">روزانه</option>
                  <option value="traditional">سنتی</option>
                  <option value="accessories">اکسسوری</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputMsg">توضیحات</label>
                <textarea id="inputMsg" rows={4} placeholder="لباس ایده‌آل خود را توصیف کنید..."></textarea>
              </div>
              <button type="submit" className="btn-primary btn-full">
                <span className="btn-text">ارسال درخواست</span>
                <span className="btn-icon" aria-hidden="true">✦</span>
              </button>
              <div className="form-success" id="formSuccess" role="alert" aria-live="polite">
                ✦ درخواست شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم!
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer" aria-label="فوتر و اطلاعات تماس">
        <div className="footer-glow" aria-hidden="true"></div>
        <div className="footer-tools" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `
          <svg viewBox="0 0 48 48" fill="none" class="ft-scissors">
            <circle cx="10" cy="14" r="6" stroke="currentColor" stroke-width="2"/>
            <circle cx="10" cy="34" r="6" stroke="currentColor" stroke-width="2"/>
            <path d="M14.5 12 L42 38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M14.5 36 L42 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        ` }} />
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-script">شری</span>
                <span className="logo-tagline">آتلیه</span>
              </div>
              <p className="footer-brand-desc">خیاطی سفارشی با اشتیاق، دقت و نگاه هنری. هر لباس، یک شاهکار.</p>
              <div className="footer-social">
                <a href="#" className="social-icon" aria-label="اینستاگرام" dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>` }} />
                <a href="#" className="social-icon" aria-label="پینترست" dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 8 C9 8 7 10 7 12.5 C7 14 7.8 15 9 15.3 L8.5 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>` }} />
                <a href="https://wa.me/989120000000" className="social-icon" aria-label="واتساپ" dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2 C6.5 2 2 6.5 2 12 C2 13.8 2.5 15.5 3.4 17 L2 22 L7.2 20.6 C8.7 21.5 10.3 22 12 22 C17.5 22 22 17.5 22 12 C22 6.5 17.5 2 12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>` }} />
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">کلکسیون‌ها</h4>
              <ul className="footer-links">
                <li><a href="#collections">پوشاک شب</a></li>
                <li><a href="#collections">عروسانه</a></li>
                <li><a href="#collections">پوشاک روزانه</a></li>
                <li><a href="#collections">سنتی</a></li>
                <li><a href="#collections">اکسسوری</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">آتلیه</h4>
              <ul className="footer-links">
                <li><a href="#about">درباره شری</a></li>
                <li><a href="#collections">پرتفولیو</a></li>
                <li><a href="#booking">رزرو وقت</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">تماس با ما</h4>
              <ul className="footer-contact-list">
                <li>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 1 C6 1 3 4 3 8 C3 13 10 19 10 19 C10 19 17 13 17 8 C17 4 14 1 10 1Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <address style={{fontStyle:'normal'}}>تهران، منطقه آتلیه‌ها</address>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 4 L10 11 L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <a href="mailto:hello@shariatelier.ir">hello@shariatelier.ir</a>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 4 C3 4 5 2 7 4 C8.5 5.5 7 7 8 8 C9 9 11 8 12 9.5 C13 11 11 13 11 13 C8 13 3 8 3 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                  <a href="tel:+989120000000">۰۹۱۲ ۰۰۰ ۰۰۰۰</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© ۱۴۰۴ آتلیه شری. تمامی حقوق محفوظ است.</p>
            <p className="footer-credit">هر لباس، یک شاهکار.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/989120000000" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="تماس از طریق واتساپ">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.06L2 22l5.12-1.34A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.57c-.21.59-1.22 1.13-1.68 1.19-.43.06-.98.08-1.58-.1-.36-.11-.83-.26-1.43-.51-2.5-1.08-4.13-3.6-4.26-3.77-.12-.17-.99-1.32-.99-2.51 0-1.2.62-1.79.85-2.04.21-.23.46-.29.62-.29.15 0 .31.01.44.01.15 0 .34-.06.53.4.21.49.71 1.73.77 1.86.06.12.1.27.02.43-.08.17-.12.27-.23.41-.12.15-.25.33-.36.44-.12.12-.24.25-.1.49.14.23.62.99 1.33 1.6.92.79 1.69 1.03 1.93 1.15.23.11.37.09.51-.06.15-.16.62-.73.79-.98.17-.25.33-.2.56-.12.23.08 1.45.68 1.7.81.25.12.41.18.47.28.06.09.06.54-.15 1.12z"/>
        </svg>
        <span className="whatsapp-tooltip">واتساپ</span>
      </a>

      {/* Back to Top */}
      <button className="back-to-top" id="backToTop" aria-label="بازگشت به بالا">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Custom Cursor */}
      <div id="cursorDot" className="cursor-dot" aria-hidden="true"></div>
      <div id="cursorRing" className="cursor-ring" aria-hidden="true"></div>
    </>
  );
}
