---
title: Step-by-Step Guide for Publishing Your Open Source App on F-Droid
date: 2024-11-17
authors:
  - name: PrintN
    link: https://github.com/PrintN
    image: https://github.com/PrintN.png
---
![Image 0](./0.webp)
### Introduction
F-Droid is an open source app repository that provides a wide range of free and open source applications for Android devices. It offers a user-friendly alternative to Google Play, focusing on privacy and transparency. I just recently published my app to F-Droid, you can check it out here 👉 [Human Benchmark](https://f-droid.org/en/packages/io.github.printn.humanbenchmark/).

### Prerequisites
- A Linux environment (use a virtual machine if you're on Windows).
- The app's source code must be publicly accessible on a version control system like GitHub.
- The repository should include a [Fastlane or Triple-T structure](https://f-droid.org/docs/All_About_Descriptions_Graphics_and_Screenshots/).
- It must be licensed under a Free/Libre license ([check here](https://spdx.org/licenses/)).
- The app should not contain any [anti-features](https://f-droid.org/en/docs/Anti-Features/) and must be fully open source, including all dependencies.

> The process of publishing your app to F-Droid can take some time so remember to be patient :)

### Publishing Your App On F-Droid (Step-By-Step)
#### Making a GitLab Account
You need a [GitLab](https://gitlab.com/) account if you don't have one already, beacuse the F-Droid repository is hosted on GitLab. After registering an account on GitLab, fork the [fdroiddata](https://gitlab.com/fdroid/fdroiddata/) repository.

#### Setting Up Locally
Next, clone the forked repository to your local machine using git.
```bash
git clone https://gitlab.com/[YOUR_USERNAME]/fdroiddata.git
```
Now, install the `fdroidserver` so you can build the recipe locally and look for issues. You can install it from source.
```bash
git clone https://gitlab.com/fdroid/fdroidserver.git
export PATH="$PATH:$PWD/fdroidserver"
```
Or install it with `apt`.
```bash
sudo apt install fdroidserver
```
To ensure `fdroid` is set up correctly, run the following commands inside the `fdroiddata/` directory.
```bash
fdroid init
fdroid readmeta
```

#### Creating Your Recipe
Now it's time to create your `.yml` file, which is the recipe F-Droid will use to build your app from source.
```bash
fdroid import --url https://github.com/[YOUR_USERNAME]/[REPO] --subdir app
```
This will create a `.yml` file in the `metadata/` directory, something like `metadata/your.app.id.yml`. Open this file with your favorite text editor.
```bash
vim metadata/your.app.id.yml
```
In this file, you will specify how the app should be built and what category it should be in. All the options you can include in your recipe are listed [here](https://f-droid.org/en/docs/Build_Metadata_Reference). For some inspiration you can check out my [flutter app recipe](https://gitlab.com/fdroid/fdroiddata/-/blob/5144fad9f969c2f7863a8246767fa7f7c297df6d/metadata/io.github.printn.humanbenchmark.yml) out or some of the [templates](https://gitlab.com/fdroid/fdroiddata/-/tree/master/templates).

#### Building It
Verify that your recipe is free of syntax errors.
```bash
fdroid readmeta
```
If there are any issues, you can clean up your recipe file.
```bash
fdroid rewritemeta your.app.id
```
Next, automatically populate fields like Auto Name and Current Version by running.
```bash
fdroid checkupdates your.app.id
```
Check for any linting issues that could affect the build.
```bash
fdroid lint your.app.id
```
If all checks pass without errors, you can proceed to build your app.
```bash
fdroid build -v -l your.app.id
```
If you encounter any errors during the build process, refer to Step 5 for common issues and their solutions. If the build completes successfully, you can move on to Step 6.

#### Common Issues
##### Binary APK and built APK differ
This error can happen if the binary APK was not built in a Linux environment, since F-Droid's build server uses Linux. It can also happen if there are discrepancies in the build setup. To avoid this, what I did was explicitly define the build directory as `/home/hehe/Desktop/Apps/Mobile` in [my recipe](https://gitlab.com/fdroid/fdroiddata/-/blob/5144fad9f969c2f7863a8246767fa7f7c297df6d/metadata/io.github.printn.humanbenchmark.yml), ensuring the binary and build APK are the exact same.
```yaml
sudo:
  - mkdir -p /home/hehe/Desktop/Apps/Mobile
  - chown vagrant /home/hehe/Desktop/Apps/Mobile

prebuild:
  - export repo=/home/hehe/Desktop/Apps/Mobile
  - mv io.github.printn.humanbenchmark $repo/Human-Benchmark
  - pushd $repo/Human-Benchmark
  - export PUB_CACHE=$(pwd)/.pub-cache
  - submodules/.flutter/bin/flutter packages pub get
  - popd

build:
  - export repo=/home/hehe/Desktop/Apps/Mobile
  - submodules/.flutter/bin/flutter build apk
```

##### Android SDK licenses not accepted
To resolve this, simply install [Android Studio](https://developer.android.com/studio/install#linux) and accept the SDK licenses when prompted.

> If you're still encountering issues, consider progressing to the next step and testing your recipe on the CI/CD pipelines in GitLab.

#### Merging Your Branch Into Master
```bash
git add .
git commit -m "New App: [YOUR_APP_NAME]>"
git remote set-url origin https://gitlab.com/[YOUR_USERNAME]/fdroiddata.git
git push -u origin master
```
This will trigger a CI/CD pipeline. If all tests pass, you can create a merge request. F-Droid maintainers will review it and provide feedback if necessary.

### Getting The F-Droid Badge
Once your app is live, you can add the **"Get It On F-Droid"** badge to your `README.md`.
```html
<a href="https://f-droid.org/packages/[YOUR_APP_ID]"><img src="https://f-droid.org/badge/get-it-on.png" width="20%"></a>
```

### Conclusion
I hope this guide has helped you successfully publish your app to F-Droid! If you encounter any issues, don't hesitate to ask for help on the [F-Droid`s forum](https://forum.f-droid.org/). Additionally, consider [donating to F-Droid](https://f-droid.org/en/donate/)  to support their mission of providing a free, open, and privacy-respecting app store.