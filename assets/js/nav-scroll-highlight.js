// Navigation scroll highlight based on URL hash
(function() {
  'use strict';

  function initNavHighlight() {
    // Get current page path (without hash)
    const currentPath = window.location.pathname;
    
    // Get all navigation links
    const navItems = document.querySelectorAll('.navbar-nav .nav-item:not(.dropdown)');
    const anchorLinks = [];
    const anchorSections = [];
    const pageLinks = [];
    
    // Categorize nav items into anchor links and page links
    navItems.forEach(item => {
      const link = item.querySelector('a.nav-link');
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href) return;
      
      // Check if it's an anchor link
      if (href.includes('#')) {
        const parts = href.split('#');
        const linkPath = parts[0] || currentPath;
        const hash = parts[1];
        
        // Only process if it's for the current page
        if (linkPath === currentPath || linkPath === '' || linkPath === '.') {
          const section = document.getElementById(hash);
          if (section) {
            anchorLinks.push({
              hash: hash,
              navItem: item,
              link: link,
              href: href
            });
            anchorSections.push({
              hash: hash,
              element: section
            });
          }
        }
      } else {
        // Regular page link
        pageLinks.push({
          href: href,
          navItem: item,
          link: link
        });
      }
    });

    // Sort anchor sections by their position on the page (top to bottom)
    anchorSections.sort((a, b) => {
      return a.element.offsetTop - b.element.offsetTop;
    });

    // Function to update active nav item based on URL hash only
    function updateActiveNav() {
      const currentHash = window.location.hash.substring(1); // Remove the # symbol
      
      // If we have anchor links on this page, handle them
      if (anchorLinks.length > 0) {
        // Update active class based on current hash
        anchorLinks.forEach(anchorLink => {
          if (currentHash && anchorLink.hash === currentHash) {
            anchorLink.navItem.classList.add('active');
          } else if (!currentHash && anchorLink.hash === 'lab-intro') {
            // If no hash, default to lab-intro (first section)
            anchorLink.navItem.classList.add('active');
          } else {
            anchorLink.navItem.classList.remove('active');
          }
        });
      }
      
      // Handle regular page links - only highlight if no anchor sections
      if (anchorLinks.length === 0) {
        pageLinks.forEach(pageLink => {
          const linkPath = pageLink.href.replace(/^.*\/\/[^\/]+/, ''); // Remove domain
          if (currentPath === linkPath || currentPath.startsWith(linkPath + '/')) {
            pageLink.navItem.classList.add('active');
          } else {
            pageLink.navItem.classList.remove('active');
          }
        });
      }
    }

    // Function to update URL hash based on scroll position
    function updateHashOnScroll() {
      if (anchorSections.length === 0) return;
      
      const scrollPosition = window.scrollY;
      let currentSection = null;
      
      // At the very top of the page (within first 100px), select first section
      if (scrollPosition < 100) {
        currentSection = anchorSections[0];
      } else {
        // Find which section we're currently in
        const threshold = 200; // pixels from top of viewport
        
        for (let i = anchorSections.length - 1; i >= 0; i--) {
          const section = anchorSections[i];
          const sectionTop = section.element.offsetTop;
          
          // If we've scrolled past this section's top (with threshold)
          if (scrollPosition + threshold >= sectionTop) {
            currentSection = section;
            break;
          }
        }
        
        // If still no section found, default to first section
        if (!currentSection) {
          currentSection = anchorSections[0];
        }
      }
      
      // Update URL hash if it's different from current
      if (currentSection) {
        const newHash = '#' + currentSection.hash;
        if (window.location.hash !== newHash) {
          // Use replaceState to update URL without triggering hashchange or adding to history
          history.replaceState(null, null, newHash);
          // Manually trigger the highlight update
          updateActiveNav();
        }
      }
    }

    // Listen to scroll events with throttling
    if (anchorSections.length > 0) {
      let ticking = false;
      window.addEventListener('scroll', function() {
        if (!ticking) {
          window.requestAnimationFrame(function() {
            updateHashOnScroll();
            ticking = false;
          });
          ticking = true;
        }
      });
    }

    // Update when hash changes (e.g., clicking nav links or browser back/forward)
    window.addEventListener('hashchange', function() {
      updateActiveNav();
    });

    // Initial check on page load
    setTimeout(updateActiveNav, 100);
    
    // Also check after page fully loads
    window.addEventListener('load', function() {
      setTimeout(function() {
        updateActiveNav();
        updateHashOnScroll();
      }, 100);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavHighlight);
  } else {
    initNavHighlight();
  }
})();
