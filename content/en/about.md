---
title: About
description: 'Who is PrintN?'
author: PrintN
toc: false
---

Hi 👋 I'm PrintN. I enjoy creating scripts and applications as well as playing Capture The Flags. I have been into cybersecurity and programming as a hobby for about 2 years.

<style>
details {
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    overflow: hidden;
}

details[open] {
    transform: scale(1.02);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

summary {
    font-weight: bold;
    cursor: pointer;
}

.project-period {
    float: right;
}

.technologies {
    margin-top: 20px;
}

.tech-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
}

.tech-header h6 {
    margin: 0;
    font-weight: normal;
    width: 50%;
    text-align: center;
}

.tech-header h6:first-child, .tech-header h6:last-child {
    text-align: center;
}

.tech-content {
    margin-top: 10px;
    display: flex;
}

.tech-icons {
    gap: 15px;
    width: 50%;
    text-align: center;
}

.tech-icons img {
    width: 35px;
    height: 35px;
    object-fit: contain;
}

.project-links {
    gap: 15px;
    width: 50%;
    text-align: center;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('details').forEach((detail) => {
        detail.addEventListener('toggle', () => {
            if (detail.open) {
                document.querySelectorAll('details').forEach((otherDetail) => {
                    if (otherDetail !== detail) {
                        otherDetail.open = false;
                    }
                });
            }
        });
    });
});
</script>

#### Projects
<details>
    <summary>Touch Grass<div class="project-period">Aug 3, 2023</div></summary>
    <p>A simple extension to touch some grass without going outside. This was one of my first projects. Made as a joke and to learn how to make extensions.</p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3">
            </div>
            <div class="project-links">
                <a href="https://github.com/PrintN/Touch-Grass" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</details>

<details>
    <summary>KnowYourTool<div class="project-period">Feb 5, 2024</div></summary>
    <p>KnowYourTool was my first major project—a free online platform designed to be a comprehensive library of useful web tools. I started by creating a Flask website hosted on Google Cloud, where I built my own tools from scratch. As I explored the landscape, I noticed many similar sites already existed, so I decided to take a different approach and innovate. Inspired by ProductHunt, I transformed KnowYourTool into a well-organized directory where users could search for tools like 'Video Downloader' and discover the best options available, complete with descriptions, user comments, and ratings.</p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" title="WordPress">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript">
                <img src="https://vectorwiki.com/images/qXZW6__hostinger.svg" alt="Hostinger" title="Hostinger">
                <img src="https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" alt="Stripe" title="Stripe">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL">
            </div>
            <div class="project-links">
                <a href="https://www.producthunt.com/products/knowyourtool" target="_blank">ProductHunt</a>
                <a href="https://knowyourtool.com" target="_blank">Website</a>
            </div>
        </div>
    </div>
</details>

<details>
    <summary>Typing Bot<div class="project-period">Feb 24, 2024</div></summary>
    <p>A Python-based typing bot designed to automate typing with human-like errors on platforms like Monkeytype and TypeRacer. Built quickly as a fun one-day project, it features auto-installation of Chromedriver.</p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" alt="Selenium" title="Selenium"/>
            </div>
            <div class="project-links">
                <a href="https://github.com/PrintN/Typing-Bot" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</details>

<details>
    <summary>Terminal Games Library<div class="project-period">Jul 20, 2024</div></summary>
    <p>A collection of entertaining terminal games developed using Python, perfect for adding some fun to your command line.</p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python">
            </div>
            <div class="project-links">
                <a href="https://github.com/PrintN/Terminal-Games-Library" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</details>

<details>
    <summary>YouTube Automation Bot<div class="project-period">Oct 6, 2024</div></summary>
    <p>I built this YouTube automation bot as a fun side project using Python and GitHub Actions to run daily. I wanted to learn more about video creation with Python and was inspired by the many automated channels on YouTube.</p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" alt="GitHub Actions" title="GitHub Actions">
            </div>
            <div class="project-links">
                <a href="https://github.com/PrintN/Youtube-Automation-Bot" target="_blank">GitHub</a>
                <a href="https://www.youtube.com/@ReIaxingSleepMusic" target="_blank">YouTube</a>
            </div>
        </div>
    </div>
</details>

<details>
    <summary>Human Benchmark<div class="project-period">Nov 12, 2024</div></summary>
    <p>An app to test your abilities. Built to learn more about mobile development with Flutter. The app offers various tests, including memory, reaction time, pattern recognition, aim training, and typing tests, each designed to measure different aspects of your mental capabilities.</p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" title="Flutter">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" title="Dart">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original-wordmark.svg" alt="Android Studio" title="Android Studio">
            </div>
            <div class="project-links">
                <a href="https://github.com/PrintN/Human-Benchmark" target="_blank">GitHub</a>
                <a href="https://f-droid.org/packages/io.github.printn.humanbenchmark/" target="_blank">F-Droid</a>
            </div>
        </div>
    </div>
</details>

<details>
    <summary>whoareyou<div class="project-period">Dec 26, 2024</div></summary>
    <p>A website that mimics a terminal interface, allowing users to run the 'whoami' command to see what information websites can access about them. It was made to raise awareness about all the data that websites can collect about you.</p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3">
            </div>
            <div class="project-links">
                <a href="https://github.com/PrintN/whoareyou" target="_blank">GitHub</a>
                <a href="https://printn.github.io/whoareyou" target="_blank">Website</a>
            </div>
        </div>
    </div>
</details>

<details>
    <summary>Beginner Privacy<div class="project-period">Jan 19, 2025</div></summary>
    <p>This is one of my larger projects. Beginner Privacy is a website dedicated to simplifying online privacy for everyone. It provides accessible resources and practical tools to help users understand and protect their personal information in the digital world.</p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hugo/hugo-original.svg" alt="Hugo" title="Hugo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3">
            </div>
            <div class="project-links">
                <a href="https://github.com/beginnerprivacy/beginnerprivacy.github.io" target="_blank">GitHub</a>
                <a href="https://beginnerprivacy.com" target="_blank">Website</a>
            </div>
        </div>
    </div>
</details>

<h2>Contributions</h2>
<details>
    <summary>AimStar<div class="project-period">Oct 14, 2024</div></summary>
    <p>AimStar is an open-source external cheat for Counter-Strike 2. This was my first contribution to another open-source project. I added a hotkey for the ESP feature, which was simple to implement but very useful, as it allows players to play more naturally. <br><strong>Note: the official AimStar repo was flagged by GitHub</strong></p>
    <div class="technologies">
        <div class="tech-header">
            <h6>Technologies Used:</h6>
            <h6>Links:</h6>
        </div>
        <div class="tech-content">
            <div class="tech-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" alt="Visual Studio" title="Visual Studio">
            </div>
            <div class="project-links">
                <a href="https://github.com/PrintN/AimStar" target="_blank">GitHub</a>
                <a href="https://github.com/CowNowK/AimStar/pull/396" target="_blank">Pull Request</a>
            </div>
        </div>
    </div>
</details>