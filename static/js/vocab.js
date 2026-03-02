/**
 * Vocab Highlight — Click to show meaning + IPA + Audio pronunciation
 * 1) Pre-highlighted vocab: click → popup with VN meaning (from shortcode data)
 * 2) Any word: double-click or select → popup with dictionary lookup (Free Dictionary API)
 * Uses Web Speech API for TTS fallback, API audio when available
 */
(function() {
  'use strict';

  let activePopup = null;
  const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const cache = {}; // Cache API responses

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
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) 
                 || voices.find(v => v.lang === 'en-US')
                 || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;
    window.speechSynthesis.speak(utterance);
  }

  // Play audio from URL
  function playAudio(url) {
    if (!url) return;
    const audio = new Audio(url);
    audio.play().catch(() => {});
  }

  // Create popup element with consistent styling
  function createPopupEl() {
    const popup = document.createElement('div');
    popup.className = 'vocab-popup';
    return popup;
  }

  // Position popup near target element or coordinates
  function positionPopup(popup, rect) {
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
  }

  // ═══════════════════════════════════════════
  // 1) PRE-HIGHLIGHTED VOCAB (from shortcode)
  // ═══════════════════════════════════════════
  function showVocabPopup(el) {
    closePopup();
    
    const word = el.dataset.word;
    const ipa = el.dataset.ipa;
    const vn = el.dataset.vn;
    const type = el.dataset.type;

    const popup = createPopupEl();
    
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

    positionPopup(popup, el.getBoundingClientRect());
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

  // ═══════════════════════════════════════════
  // 2) DICTIONARY LOOKUP (any word)
  // ═══════════════════════════════════════════
  function showDictPopup(word, rect) {
    closePopup();
    
    const cleanWord = word.trim().toLowerCase().replace(/[^a-z'-]/g, '');
    if (!cleanWord || cleanWord.length < 2 || cleanWord.length > 30) return;
    
    const popup = createPopupEl();
    popup.classList.add('dict-popup');
    popup.innerHTML = '<div class="dict-loading"><span class="dict-spinner"></span> Đang tra "' + cleanWord + '"...</div>';
    document.body.appendChild(popup);
    activePopup = popup;
    positionPopup(popup, rect);

    // Check cache
    if (cache[cleanWord]) {
      renderDictResult(popup, cleanWord, cache[cleanWord], rect);
      return;
    }

    fetch(API_URL + encodeURIComponent(cleanWord))
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        cache[cleanWord] = data;
        if (activePopup === popup) {
          renderDictResult(popup, cleanWord, data, rect);
        }
      })
      .catch(() => {
        if (activePopup === popup) {
          popup.innerHTML = '<button class="vocab-popup-close" aria-label="Đóng">&times;</button>'
            + '<div class="vocab-popup-word">' + cleanWord + '</div>'
            + '<div class="dict-not-found">Không tìm thấy trong từ điển</div>'
            + '<div class="vocab-popup-divider"></div>'
            + '<button class="vocab-popup-speak" data-word="' + cleanWord + '">\uD83D\uDD0A Nghe phát âm</button>';
          
          popup.querySelector('.vocab-popup-close').addEventListener('click', function(e) {
            e.stopPropagation(); closePopup();
          });
          popup.querySelector('.vocab-popup-speak').addEventListener('click', function(e) {
            e.stopPropagation(); speakWord(this.dataset.word);
          });
          speakWord(cleanWord);
        }
      });
  }

  function renderDictResult(popup, word, data, rect) {
    const entry = data[0];
    const phonetic = entry.phonetic || (entry.phonetics && entry.phonetics.find(p => p.text))?.text || '';
    const audioUrl = entry.phonetics && entry.phonetics.find(p => p.audio)?.audio || '';

    let html = '<button class="vocab-popup-close" aria-label="Đóng">&times;</button>';
    
    // Word + IPA
    html += '<div class="vocab-popup-word">' + entry.word;
    if (phonetic) html += ' <span class="vocab-popup-ipa">' + phonetic + '</span>';
    html += '</div>';

    // Meanings (show max 3)
    const meanings = entry.meanings || [];
    meanings.slice(0, 3).forEach(function(m) {
      html += '<span class="vocab-popup-type">' + m.partOfSpeech + '</span>';
      const defs = m.definitions || [];
      defs.slice(0, 2).forEach(function(d) {
        html += '<div class="dict-definition">' + d.definition + '</div>';
        if (d.example) {
          html += '<div class="dict-example">"' + d.example + '"</div>';
        }
      });
    });

    html += '<div class="vocab-popup-divider"></div>';
    
    // Speak button
    html += '<button class="vocab-popup-speak" data-word="' + word + '"'
          + (audioUrl ? ' data-audio="' + audioUrl + '"' : '')
          + '>\uD83D\uDD0A Nghe phát âm</button>';

    popup.innerHTML = html;
    positionPopup(popup, rect);

    // Auto-play pronunciation
    if (audioUrl) {
      playAudio(audioUrl);
    } else {
      speakWord(word);
    }

    popup.querySelector('.vocab-popup-close').addEventListener('click', function(e) {
      e.stopPropagation(); closePopup();
    });
    popup.querySelector('.vocab-popup-speak').addEventListener('click', function(e) {
      e.stopPropagation();
      var au = this.dataset.audio;
      if (au) { playAudio(au); } else { speakWord(this.dataset.word); }
    });
  }

  // ═══════════════════════════════════════════
  // EVENT HANDLERS
  // ═══════════════════════════════════════════

  // Click: pre-highlighted vocab words
  document.addEventListener('click', function(e) {
    const vocabEl = e.target.closest('.vocab-word');
    if (vocabEl) {
      e.preventDefault();
      e.stopPropagation();
      showVocabPopup(vocabEl);
      return;
    }
    if (activePopup && !e.target.closest('.vocab-popup')) {
      closePopup();
    }
  });

  // Double-click: lookup any word in post content
  document.addEventListener('dblclick', function(e) {
    // Only in post content area
    if (!e.target.closest('.post-content')) return;
    // Don't interfere with pre-highlighted vocab
    if (e.target.closest('.vocab-word') || e.target.closest('.vocab-popup')) return;

    const selection = window.getSelection();
    const word = selection.toString().trim();
    
    if (word && /^[a-zA-Z'-]+$/.test(word) && word.length >= 2) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      showDictPopup(word, rect);
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
      showVocabPopup(e.target);
    }
  });

  // Preload voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
      window.speechSynthesis.getVoices();
    };
  }
})();
