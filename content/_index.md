---
title: PrintN
layout: hextra-home
---
<div class="nav-dots">
    <div class="nav-dot active" data-title="Home" data-target="home"></div>
    <div class="nav-dot" data-title="About" data-target="about"></div>
    <div class="nav-dot" data-title="Portfolio" data-target="portfolio"></div>
    <div class="nav-dot" data-title="Blog" data-target="blog"></div>
    <div class="nav-dot" data-title="Contact" data-target="contact"></div>
</div>

<section id="home">
    <div class="-hx-mt-20">
        <div class="hx-font-semibold hero-intro-text">👋 Hi, I'm a</div>
        <div class="rotating-text-wrapper hx-font-semibold">
            <h2 id="rotating-text">Hobby Software Developer</h2>
        </div>
    </div>
    <a onclick="learnMore();" class="learn-more-btn bounce">
        Learn more
    </a>
</section>

<section id="about">
    <div class="hx-container hx-text-center">
        <h2 class="hx-text-4xl hx-font-bold hx-mb-4">About Me</h2>
        <p class="hx-text-lg">
            I started my journey three years ago, fascinated by technology's ability to solve real-world problems. In my free time, I contribute to open-source projects and work on my own projects because I believe that privacy-focused software should be the best option, not just an alternative.
        </p>
        <div class="social-media hx-flex hx-flex-wrap hx-justify-center hx-gap-4 hx-my-1.5">
            <a href="https://github.com/PrintN" title="GitHub" target="_blank" rel="noopener noreferrer" class="hx-text-black dark:hx-text-white">
            {{< hextra/icon name="github" attributes="width=30" >}}
            </a>
            <a href="https://leetcode.com/PrintN" title="LeetCode" target="_blank" rel="noopener noreferrer" class="hx-text-black dark:hx-text-white">
            {{< hextra/icon name="leetcode" attributes="width=30" >}}
            </a>
            <a href="https://tryhackme.com/p/PrintN" title="TryHackMe" target="_blank" rel="noopener noreferrer" class="hx-text-black dark:hx-text-white">
            {{< hextra/icon name="tryhackme" attributes="width=30" >}}
            </a>
        </div>
        <p class="hx-text-lg">
            My expertise mostly lies in web development (both frontend and backend) and scripting small programs.
        </p>
        <div class="tech-icons hx-mt-2">
            <div class="icon-container">
                {{< hextra/icon name="python" >}}
                <span class="tooltip">Python</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="html" >}}
                <span class="tooltip">HTML</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="css" >}}
                <span class="tooltip">CSS</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="javascript" >}}
                <span class="tooltip">JavaScript</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="wordpress" >}}
                <span class="tooltip">WordPress</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="mysql" >}}
                <span class="tooltip">MySQL</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="bash" >}}
                <span class="tooltip">Bash</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="react" >}}
                <span class="tooltip">React</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="typescript" >}}
                <span class="tooltip">TypeScript</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="dart" >}}
                <span class="tooltip">Dart</span>
            </div>
            <div class="icon-container">
                {{< hextra/icon name="flutter" >}}
                <span class="tooltip">Flutter</span>
            </div>
        </div>
    </div>
</section>

<section id="portfolio" class="portfolio-carousel">
    <div class="hx-container hx-text-center">
        <h2 class="hx-text-4xl hx-font-bold hx-mb-4">My Portfolio</h2>
        <p class="hx-text-lg hx-mb-6">
            Here are some of the projects I have made that I'm the most proud of.
        </p>
        <p class="hx-text-lg hx-mb-6">
            If you'd like to support my work, <a href="/donate">consider donating</a>.
        </p>
        <div class="carousel">
            <div class="slides">
                <div class="slide active">
                    <ul class="hx-list-disc hx-pl-5">
                        <span class="hx-text-2xl hx-font-bold">YouTube Automation Bot</span>
                        <li class="hx-mb-2">I built this YouTube automation bot as a fun side project using Python and GitHub Actions to run it daily. I wanted to learn more about video creation with Python and was inspired by the many automated channels on YouTube.</li>
                        <div class="tech-icons hx-mt-2">
                            <div class="icon-container">
                                {{< hextra/icon name="python" >}}
                                <span class="tooltip">Python</span>
                            </div>
                            <div class="icon-container">
                                {{< hextra/icon name="github-actions" >}}
                                <span class="tooltip">GitHub Actions</span>
                            </div>
                        </div>
                        <a href="https://github.com/PrintN/Youtube-Automation-Bot" target="_blank"><img src="https://img.shields.io/github/stars/PrintN/Youtube-Automation-Bot?style=social" alt="Star Count"></a>
                    </ul>
                </div>
                <div class="slide">
                    <ul class="hx-list-disc hx-pl-5">
                        <span class="hx-text-2xl hx-font-bold">Human Benchmark</span>
                        <li class="hx-mb-2">An app to test your abilities. Built to learn more about mobile development with Flutter. The app offers various tests, including memory, reaction time, pattern recognition, aim training, and typing tests, each designed to measure different aspects of your mental capabilities.</li>
                        <div class="tech-icons hx-mt-2">
                            <div class="icon-container">
                                {{< hextra/icon name="dart" >}}
                                <span class="tooltip">Dart</span>
                            </div>
                            <div class="icon-container">
                                {{< hextra/icon name="flutter" >}}
                                <span class="tooltip">Flutter</span>
                            </div>
                            <div class="icon-container">
                                {{< hextra/icon name="android-studio" >}}
                                <span class="tooltip">Android Studio</span>
                            </div>
                        </div>
                        <a href="https://github.com/PrintN/Human-Benchmark" target="_blank"><img src="https://img.shields.io/github/stars/PrintN/Human-Benchmark?style=social" alt="Star Count"></a>
                    </ul>
                </div>
                <div class="slide">
                    <ul class="hx-list-disc hx-pl-5">
                        <span class="hx-text-2xl hx-font-bold">Beginner Privacy</span>
                        <li class="hx-mb-2">This is one of my larger projects. Beginner Privacy is a website dedicated to simplifying online privacy for everyone. It provides accessible resources and practical tools to help users understand and protect their personal information in the digital world.</li>
                        <div class="tech-icons hx-mt-2">
                            <div class="icon-container">
                                {{< hextra/icon name="hugo" >}}
                                <span class="tooltip">Hugo</span>
                            </div>
                            <div class="icon-container">
                                {{< hextra/icon name="html" >}}
                                <span class="tooltip">HTML</span>
                            </div>
                            <div class="icon-container">
                                {{< hextra/icon name="css" >}}
                                <span class="tooltip">CSS</span>
                            </div>
                            <div class="icon-container">
                                {{< hextra/icon name="javascript" >}}
                                <span class="tooltip">JavaScript</span>
                            </div>
                        </div>
                        <a href="https://github.com/BeginnerPrivacy/beginnerprivacy.github.io" target="_blank"><img src="https://img.shields.io/github/stars/BeginnerPrivacy/beginnerprivacy.github.io?style=social" alt="Star Count"></a>
                    </ul>
                </div>
            </div>
            <div class="indicators">
                <button class="indicator active" aria-label="Go to slide 1"></button>
                <button class="indicator" aria-label="Go to slide 2"></button>
                <button class="indicator" aria-label="Go to slide 3"></button>
            </div>
        </div>
        <button class="carousel-button prev" aria-label="Previous slide">&#10094;</button>
        <button class="carousel-button next" aria-label="Next slide">&#10095;</button>
    </div>
</section>

<section id="blog">
    <div class="hx-container hx-text-center">
        <h2 class="hx-text-4xl hx-font-bold hx-mb-4">My Blog</h2>
        <p class="hx-text-lg hx-mb-6">
            I enjoy sharing my thoughts and experiences through my blog. Here are some recent posts:
        </p>
        <ul class="hx-list-disc hx-pl-5 hx-mb-2 hx-inline-flex hx-flex-wrap hx-justify-center">
            {{< hextra/recent-posts >}}
            <a href="/blog" class="hx-text-primary-600 hover:hx-text-primary-800"><li class="blog-post-card">View all posts<br><div class="blog-arrow">&rarr;</div></li></a>
        </ul>
    </div>
</section>

<section id="contact">
    <div class="hx-container hx-text-center">
        <h2 class="hx-text-4xl hx-font-bold hx-mb-4">Contact Me</h2>
        <p class="hx-text-lg hx-mb-6">
            I would love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
        </p>
        <p>Option 1: SimpleX Chat</p>
        <div class="hextra-code-block hx-relative hx-mt-6 first:hx-mt-0 hx-group/code" style="max-width: 80vw;">
            <div>
                <div class="highlight">
                    <pre tabindex="0" class="chroma"><code class="language-bash" data-lang="bash">https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2FUkMFNAXLXeAAe0beCa4w6X_zp18PwxSaSjY17BKUGXQ%3D%40smp12.simplex.im%2Fpp0TKpGjO4zqj42t8H2Mgxkm9J3zgure%23%2F%3Fv%3D1-4%26dh%3DMCowBQYDK2VuAyEA6Vt5L1LGdIHad5_JcoeEeUWqDqYBsQrF5rBYXVax8zo%253D%26q%3Dc%26srv%3Die42b5weq7zdkghocs3mgxdjeuycheeqqmksntj57rmejagmg4eor5yd.onion</code></pre>
                </div>
            </div>
            <div class="hextra-code-copy-btn-container hx-opacity-0 hx-transition group-hover/code:hx-opacity-100 hx-flex hx-gap-1 hx-absolute hx-m-[11px] hx-right-0 hx-top-0"><button class="hextra-code-copy-btn hx-group/copybtn hx-transition-all active:hx-opacity-50 hx-bg-primary-700/5 hx-border hx-border-black/5 hx-text-gray-600 hover:hx-text-gray-900 hx-rounded-md hx-p-1.5 dark:hx-bg-primary-300/10 dark:hx-border-white/10 dark:hx-text-gray-400 dark:hover:hx-text-gray-50" title="Copy code"><div class="copy-icon group-[.copied]/copybtn:hx-hidden hx-pointer-events-none hx-h-4 hx-w-4"></div><div class="success-icon hx-hidden group-[.copied]/copybtn:hx-block hx-pointer-events-none hx-h-4 hx-w-4"></div></button></div>
        </div>
        <p>Option 2: Email</p>
        <div class="hextra-code-block hx-relative hx-mt-6 first:hx-mt-0 hx-group/code" style="max-width: 80vw;">
            <div>
                <div class="highlight">
                    <pre tabindex="0" class="chroma"><code class="language-bash" data-lang="bash">printn@tutamail.com</code></pre>
                </div>
            </div>
            <div class="hextra-code-copy-btn-container hx-opacity-0 hx-transition group-hover/code:hx-opacity-100 hx-flex hx-gap-1 hx-absolute hx-m-[11px] hx-right-0 hx-top-0"><button class="hextra-code-copy-btn hx-group/copybtn hx-transition-all active:hx-opacity-50 hx-bg-primary-700/5 hx-border hx-border-black/5 hx-text-gray-600 hover:hx-text-gray-900 hx-rounded-md hx-p-1.5 dark:hx-bg-primary-300/10 dark:hx-border-white/10 dark:hx-text-gray-400 dark:hover:hx-text-gray-50" title="Copy code"><div class="copy-icon group-[.copied]/copybtn:hx-hidden hx-pointer-events-none hx-h-4 hx-w-4"></div><div class="success-icon hx-hidden group-[.copied]/copybtn:hx-block hx-pointer-events-none hx-h-4 hx-w-4"></div></button></div>
        </div>
    </div>
</section>