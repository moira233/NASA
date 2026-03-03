// Language Switcher for al-folio
// Handles switching between Chinese (default) and English versions of pages

(function () {
  "use strict";

  // Language configuration
  const LANG_CONFIG = {
    zh: {
      name: "中文",
      code: "zh",
      flag: "中文",
    },
    en: {
      name: "English",
      code: "en",
      flag: "EN",
    },
  };

  // Get current language from localStorage or default to 'zh'
  function getCurrentLanguage() {
    return localStorage.getItem("site-language") || "zh";
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

    // Pattern 1: en to zh - remove /en/
    if (currentLang === "en" && targetLang === "zh") {
      newPath = currentPath.replace(/\/en\//, "/").replace(/\/en$/, "/");
      console.log("EN->ZH: New path:", newPath);
    }
    // Pattern 2: zh to en - add /en/
    else if (currentLang === "zh" && targetLang === "en") {
      // Remove trailing slash for comparison
      const pathNoSlash = currentPath.replace(/\/$/, "");
      const baseurlNoSlash = baseurl.replace(/\/$/, "");

      console.log("Path without slash:", pathNoSlash);
      console.log("Baseurl without slash:", baseurlNoSlash);

      // Check if we're at the root (with or without baseurl)
      if (pathNoSlash === baseurlNoSlash || pathNoSlash === "") {
        // Root page: /NASA/ -> /NASA/en/
        newPath = (baseurl || "") + "/en/";
        console.log("Root page detected, new path:", newPath);
      } else if (baseurl && currentPath.startsWith(baseurl + "/")) {
        // Sub page with baseurl: /NASA/blog/ -> /NASA/en/blog/
        const afterBaseurl = currentPath.substring(baseurl.length + 1);
        newPath = baseurl + "/en/" + afterBaseurl;
        console.log("Sub page with baseurl, new path:", newPath);
      } else if (!baseurl) {
        // No baseurl: /blog/ -> /en/blog/
        newPath = "/en" + currentPath;
        console.log("No baseurl, new path:", newPath);
      } else {
        // Fallback to root
        newPath = (baseurl || "") + "/en/";
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
    let detectedLang = "zh";

    // Detect language from URL
    if (currentPath.includes("/en/") || currentPath.endsWith("/en")) {
      detectedLang = "en";
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
