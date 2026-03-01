/**
 * Vocab Highlight — Click to show meaning + IPA + Audio pronunciation
 * Uses Web Speech API for text-to-speech (free, works in all modern browsers)
 */
(function() {
  'use strict';

  let activePopup = null;

  // Close popup
  function closePopup() {
    if (activePopup) {
      activePopup.remove();
      activePopup = null;
    }
  }

  // Speak word using Web Speech API
  function speakWord(word) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    // Try to use a good English voice
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) 
                 || voices.find(v => v.lang === 'en-US')
                 || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;
    window.speechSynthesis.speak(utterance);
  }

  // Create and show popup
  function showPopup(el) {
    closePopup();
    
    const word = el.dataset.word;
    const ipa = el.dataset.ipa;
    const vn = el.dataset.vn;
    const type = el.dataset.type;

    const popup = document.createElement('div');
    popup.className = 'vocab-popup';
    
    let html = '<button class="vocab-popup-close" aria-label="Đóng">&times;</button>';
    
    // Word + IPA
    html += '<div class="vocab-popup-word">' + word;
    if (ipa) html += ' <span class="vocab-popup-ipa">' + ipa + '</span>';
    html += '</div>';
    
    // Word type (noun, verb, adj...)
    if (type) {
      html += '<span class="vocab-popup-type">' + type + '</span>';
    }
    
    // Vietnamese meaning
    if (vn) {
      html += '<div class="vocab-popup-meaning">🇻🇳 ' + vn + '</div>';
    }
    
    html += '<div class="vocab-popup-divider"></div>';
    
    // Speak button
    html += '<button class="vocab-popup-speak" data-word="' + word + '">';
    html += '🔊 Nghe phát âm</button>';
    
    popup.innerHTML = html;
    document.body.appendChild(popup);
    activePopup = popup;

    // Position popup
    const rect = el.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    
    let top = rect.bottom + 10;
    let left = rect.left;
    
    // If popup would go below viewport, show above
    if (top + popupRect.height > window.innerHeight) {
      top = rect.top - popupRect.height - 10;
      popup.classList.add('above');
    }
    
    // Keep within horizontal bounds
    if (left + popupRect.width > window.innerWidth - 16) {
      left = window.innerWidth - popupRect.width - 16;
    }
    if (left < 16) left = 16;
    
    popup.style.top = top + 'px';
    popup.style.left = left + 'px';

    // Auto-speak on open
    speakWord(word);

    // Close button
    popup.querySelector('.vocab-popup-close').addEventListener('click', function(e) {
      e.stopPropagation();
      closePopup();
    });

    // Speak button
    popup.querySelector('.vocab-popup-speak').addEventListener('click', function(e) {
      e.stopPropagation();
      speakWord(this.dataset.word);
    });
  }

  // Click handler for vocab words
  document.addEventListener('click', function(e) {
    const vocabEl = e.target.closest('.vocab-word');
    if (vocabEl) {
      e.preventDefault();
      e.stopPropagation();
      showPopup(vocabEl);
      return;
    }
    // Click outside popup → close
    if (activePopup && !e.target.closest('.vocab-popup')) {
      closePopup();
    }
  });

  // Keyboard: Enter/Space on vocab word, Escape to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePopup();
      return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('vocab-word')) {
      e.preventDefault();
      showPopup(e.target);
    }
  });

  // Preload voices (Chrome loads them async)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
      window.speechSynthesis.getVoices();
    };
  }
})();
