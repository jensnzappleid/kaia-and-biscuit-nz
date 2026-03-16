// Pagination and fact-highlighting utilities for the NZ story chapters

/**
 * Split story paragraphs into pages of roughly equal size.
 * Targets ~400 chars per page (about 3-5 short paragraphs).
 * Avoids pages with fewer than 2 paragraphs.
 */
export function paginateStory(paragraphs) {
  const TARGET_CHARS = 420;
  const MIN_PARAS = 2;
  const pages = [];
  let current = [];
  let charCount = 0;

  for (let i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i];
    current.push(para);
    charCount += para.length;

    const remaining = paragraphs.length - i - 1;
    const shouldBreak = charCount >= TARGET_CHARS && current.length >= MIN_PARAS && remaining >= MIN_PARAS;

    if (shouldBreak) {
      pages.push(current);
      current = [];
      charCount = 0;
    }
  }

  // Push remaining paragraphs
  if (current.length > 0) {
    // If last page is too small (1 paragraph), merge with previous
    if (current.length < MIN_PARAS && pages.length > 0) {
      const prev = pages.pop();
      pages.push([...prev, ...current]);
    } else {
      pages.push(current);
    }
  }

  return pages;
}

/**
 * Highlight important facts in a paragraph of text.
 * Returns an array of segments: { text, type }
 * Types: 'normal', 'place', 'number', 'maori'
 */
export function highlightText(text, chapter) {
  if (!chapter) return [{ text, type: 'normal' }];

  // Build keyword lists from chapter metadata
  const places = [
    ...(chapter.cities || []),
    chapter.regionLabel,
  ];

  // Famous-for items (split by comma)
  const famousItems = (chapter.famousFor || '').split(',').map(s => s.trim()).filter(s => s.length > 3);

  // Māori terms
  const maoriTerms = [chapter.maoriName].filter(Boolean);

  // Build a single regex that captures all highlight-worthy patterns
  const patterns = [];

  // Place names and famous items (4+ chars to avoid false matches)
  const nameTerms = [...places, ...famousItems]
    .filter(s => s && s.length >= 4)
    .map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (nameTerms.length > 0) {
    patterns.push({ re: new RegExp(`\\b(${nameTerms.join('|')})\\b`, 'g'), type: 'place' });
  }

  // Māori terms
  const maoriEscaped = maoriTerms
    .filter(s => s && s.length >= 3)
    .map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (maoriEscaped.length > 0) {
    patterns.push({ re: new RegExp(`(${maoriEscaped.join('|')})`, 'g'), type: 'maori' });
  }

  // Numbers with units
  patterns.push({
    re: /(\d[\d,]*\.?\d*\s*(?:metres?|kilometers?|kilometres?|km|percent|million|years?\s+old|centimetres?))/gi,
    type: 'number',
  });

  if (patterns.length === 0) return [{ text, type: 'normal' }];

  // Combine all patterns into one regex with named-ish groups
  // We'll process sequentially — find all match positions, merge, then split
  const matches = []; // { start, end, type }

  for (const { re, type } of patterns) {
    let m;
    const regex = new RegExp(re.source, re.flags);
    while ((m = regex.exec(text)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, type, text: m[0] });
    }
  }

  if (matches.length === 0) return [{ text, type: 'normal' }];

  // Sort by start position, deduplicate overlaps (keep first)
  matches.sort((a, b) => a.start - b.start);
  const merged = [matches[0]];
  for (let i = 1; i < matches.length; i++) {
    const prev = merged[merged.length - 1];
    if (matches[i].start >= prev.end) {
      merged.push(matches[i]);
    }
  }

  // Build segments
  const segments = [];
  let pos = 0;
  for (const m of merged) {
    if (m.start > pos) {
      segments.push({ text: text.slice(pos, m.start), type: 'normal' });
    }
    segments.push({ text: m.text, type: m.type });
    pos = m.end;
  }
  if (pos < text.length) {
    segments.push({ text: text.slice(pos), type: 'normal' });
  }

  return segments;
}
