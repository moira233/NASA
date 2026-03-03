// Language Switcher for al-folio
// Handles switching between English and Chinese versions of pages

(function () {
  "use strict";

  // Language configuration
  const LANG_CONFIG = {
    en: {
      name: "English",
      code: "en",
      flag: "EN",
    },
    zh: {
      name: "中文",
      code: "zh",
      flag: "中文",
    },
  };

  // Get current language from localStorage or default to 'en'
  function getCurrentLanguage() {
    return localStorage.getItem("site-language") || "en";
  }

  // Set current language
  function setCurrentLanguage(lang) {
    localStorage.setItem("site-language", lang);
  }

  // Update the language display in the navbar
  function updateLanguageDisplay(lang) {
    const currentLangElement = document.getElementById("current-lang");
    if (currentLangElement && LANG_CONFIG[lang]) {
      currentLangElement.textContent = LANG_CONFIG[lang].flag;
    }
  }

  // Get the alternate language URL for the current page
  function getAlternateUrl(targetLang) {
    const currentPath = window.location.pathname;
    const currentLang = getCurrentLanguage();

    console.log("=== Language Switch Debug ===");
    console.log("Current path:", currentPath);
    console.log("Current lang:", currentLang);
    console.log("Target lang:", targetLang);

    // If switching to the same language, do nothing
    if (currentLang === targetLang) {
      console.log("Already on target language");
      return null;
    }

    // Get baseurl from the page
    const baseurl = document.querySelector('meta[name="baseurl"]')?.content || "";
    console.log("Baseurl:", baseurl);

    let newPath = currentPath;

    // Pattern 1: zh to en - remove /zh/
    if (currentLang === "zh" && targetLang === "en") {
      newPath = currentPath.replace(/\/zh\//, "/").replace(/\/zh$/, "/");
      console.log("ZH->EN: New path:", newPath);
    }
    // Pattern 2: en to zh - add /zh/
    else if (currentLang === "en" && targetLang === "zh") {
      // Remove trailing slash for comparison
      const pathNoSlash = currentPath.replace(/\/$/, "");
      const baseurlNoSlash = baseurl.replace(/\/$/, "");

      console.log("Path without slash:", pathNoSlash);
      console.log("Baseurl without slash:", baseurlNoSlash);

      // Check if we're at the root (with or without baseurl)
      if (pathNoSlash === baseurlNoSlash || pathNoSlash === "") {
        // Root page: /NASA-page/ -> /NASA-page/zh/
        newPath = (baseurl || "") + "/zh/";
        console.log("Root page detected, new path:", newPath);
      } else if (baseurl && currentPath.startsWith(baseurl + "/")) {
        // Sub page with baseurl: /NASA-page/blog/ -> /NASA-page/zh/blog/
        const afterBaseurl = currentPath.substring(baseurl.length + 1);
        newPath = baseurl + "/zh/" + afterBaseurl;
        console.log("Sub page with baseurl, new path:", newPath);
      } else if (!baseurl) {
        // No baseurl: /blog/ -> /zh/blog/
        newPath = "/zh" + currentPath;
        console.log("No baseurl, new path:", newPath);
      } else {
        // Fallback to root
        newPath = (baseurl || "") + "/zh/";
        console.log("Fallback to root, new path:", newPath);
      }
    }

    console.log("Final new path:", newPath);
    console.log("=== End Debug ===");
    return newPath;
  }

  // Switch to a different language
  window.switchLanguage = function (targetLang) {
    if (!LANG_CONFIG[targetLang]) {
      console.error("Invalid language:", targetLang);
      return;
    }

    const currentLang = getCurrentLanguage();

    // If already on this language, just update display
    if (currentLang === targetLang) {
      updateLanguageDisplay(targetLang);
      return;
    }

    // Get the alternate URL
    const newUrl = getAlternateUrl(targetLang);

    if (newUrl) {
      // Save the new language preference
      setCurrentLanguage(targetLang);

      console.log("Navigating to:", newUrl);
      // Navigate to the new URL
      window.location.href = newUrl;
    } else {
      // Just update the language preference and display
      setCurrentLanguage(targetLang);
      updateLanguageDisplay(targetLang);
    }
  };

  // Initialize language on page load
  function initLanguage() {
    const currentPath = window.location.pathname;
    let detectedLang = "en";

    // Detect language from URL
    if (currentPath.includes("/zh/") || currentPath.endsWith("/zh")) {
      detectedLang = "zh";
    }

    console.log("Init language - path:", currentPath, "detected:", detectedLang);

    // Update stored language if different
    const storedLang = getCurrentLanguage();
    if (detectedLang !== storedLang) {
      setCurrentLanguage(detectedLang);
    }

    // Update display
    updateLanguageDisplay(detectedLang);
  }

  // Run initialization when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLanguage);
  } else {
    initLanguage();
  }
})();
