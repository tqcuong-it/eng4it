/**
 * Vocab Highlight — Click to show meaning + IPA + Audio pronunciation
 * Uses Web Speech API for text-to-speech (free, works in all modern browsers)
 */
(function() {
  'use strict';

  let activePopup = null;

  function closePopup() {
    if (activePopup) {
      activePopup.remove();
      activePopup = null;
    }
  }

  function speakWord(word) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) 
                 || voices.find(v => v.lang === 'en-US')
                 || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;
    window.speechSynthesis.speak(utterance);
  }

  function showPopup(el) {
    closePopup();
    
    const word = el.dataset.word;
    const ipa = el.dataset.ipa;
    const vn = el.dataset.vn;
    const type = el.dataset.type;

    const popup = document.createElement('div');
    popup.className = 'vocab-popup';
    
    let html = '<button class="vocab-popup-close" aria-label="Đóng">&times;</button>';
    html += '<div class="vocab-popup-word">' + word;
    if (ipa) html += ' <span class="vocab-popup-ipa">' + ipa + '</span>';
    html += '</div>';
    if (type) html += '<span class="vocab-popup-type">' + type + '</span>';
    if (vn) html += '<div class="vocab-popup-meaning">\uD83C\uDDFB\uD83C\uDDF3 ' + vn + '</div>';
    html += '<div class="vocab-popup-divider"></div>';
    html += '<button class="vocab-popup-speak" data-word="' + word + '">\uD83D\uDD0A Nghe phát âm</button>';
    
    popup.innerHTML = html;
    document.body.appendChild(popup);
    activePopup = popup;

    const rect = el.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    let top = rect.bottom + 10;
    let left = rect.left;
    if (top + popupRect.height > window.innerHeight) {
      top = rect.top - popupRect.height - 10;
      popup.classList.add('above');
    }
    if (left + popupRect.width > window.innerWidth - 16) {
      left = window.innerWidth - popupRect.width - 16;
    }
    if (left < 16) left = 16;
    popup.style.top = top + 'px';
    popup.style.left = left + 'px';

    speakWord(word);

    popup.querySelector('.vocab-popup-close').addEventListener('click', function(e) {
      e.stopPropagation();
      closePopup();
    });
    popup.querySelector('.vocab-popup-speak').addEventListener('click', function(e) {
      e.stopPropagation();
      speakWord(this.dataset.word);
    });
  }

  document.addEventListener('click', function(e) {
    const vocabEl = e.target.closest('.vocab-word');
    if (vocabEl) {
      e.preventDefault();
      e.stopPropagation();
      showPopup(vocabEl);
      return;
    }
    if (activePopup && !e.target.closest('.vocab-popup')) {
      closePopup();
    }
  });

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

  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
      window.speechSynthesis.getVoices();
    };
  }
})();
